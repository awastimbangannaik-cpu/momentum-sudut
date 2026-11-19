import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import {
  SERVER_ANSWER_KEYS,
  DETAILED_SOLUTIONS,
  TEACHER_PASSWORD,
} from './server/assessmentData.ts';
import { computeAssessmentSummary } from './src/lib/gradingUtils.ts';
import type { AnswersMap, StudentIdentity } from './src/types/quiz.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT || 3000);

  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
  });

  // Grade student answers on the server WITHOUT returning answer keys or explanations
  app.post('/api/submit', (req, res) => {
    const { student, answers } = req.body as {
      student?: StudentIdentity;
      answers?: AnswersMap;
    };

    if (
      !student ||
      typeof student.fullName !== 'string' ||
      student.fullName.trim().length === 0 ||
      typeof student.className !== 'string' ||
      student.className.trim().length === 0
    ) {
      res.status(400).json({
        error: 'Identitas murid (Nama Lengkap dan Kelas) wajib diisi.',
      });
      return;
    }

    const safeAnswers: AnswersMap =
      answers && typeof answers === 'object' ? answers : {};
    const summary = computeAssessmentSummary(safeAnswers, SERVER_ANSWER_KEYS);

    res.json({
      result: {
        student: {
          fullName: student.fullName.trim(),
          className: student.className.trim(),
        },
        submittedAt: new Date().toISOString(),
        answeredCount: summary.answeredCount,
        unansweredCount: summary.unansweredCount,
        totalQuestions: summary.totalQuestions,
        totalScore: summary.totalScore,
        maxTotalScore: summary.maxTotalScore,
        percentage: summary.percentage,
      },
    });
  });

  // Validate teacher password server-side before returning keys, breakdowns, and solutions
  app.post('/api/teacher/verify', (req, res) => {
    const { password, student, answers } = req.body as {
      password?: string;
      student?: StudentIdentity | null;
      answers?: AnswersMap;
    };

    if (typeof password !== 'string' || password.trim() !== TEACHER_PASSWORD) {
      res.status(401).json({
        authenticated: false,
        error: 'Password Mode Guru tidak sesuai. Silakan periksa kembali.',
      });
      return;
    }

    const safeAnswers: AnswersMap =
      answers && typeof answers === 'object' ? answers : {};
    const summary = computeAssessmentSummary(safeAnswers, SERVER_ANSWER_KEYS);

    const safeStudent: StudentIdentity =
      student && student.fullName?.trim()
        ? {
            fullName: student.fullName.trim(),
            className: student.className?.trim() || '-',
          }
        : {
            fullName: 'Pratinjau Guru (Belum Ada Murid)',
            className: 'XI Fase F',
          };

    res.json({
      authenticated: true,
      result: {
        student: safeStudent,
        submittedAt: new Date().toISOString(),
        answeredCount: summary.answeredCount,
        unansweredCount: summary.unansweredCount,
        totalQuestions: summary.totalQuestions,
        totalScore: summary.totalScore,
        maxTotalScore: summary.maxTotalScore,
        percentage: summary.percentage,
      },
      breakdowns: summary.breakdowns,
      solutions: DETAILED_SOLUTIONS,
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Physics Assessment Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
