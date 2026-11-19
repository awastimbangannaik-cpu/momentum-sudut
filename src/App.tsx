import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CLIENT_QUESTIONS } from './data/clientQuestions';
import type {
  AnswersMap,
  StoredQuizState,
  StudentAnswerValue,
  StudentIdentity,
  SubmissionResult,
  TeacherEvaluationResponse,
} from './types/quiz';
import { LoginScreen } from './components/LoginScreen';
import { TopControlPanel } from './components/TopControlPanel';
import { QuestionView } from './components/QuestionView';
import { ResultsView } from './components/ResultsView';
import { TeacherModeView } from './components/TeacherModeView';

const STORAGE_KEY = 'smas_tbjs_fisika_momentum_sudut_v1';

const EMPTY_STATE: StoredQuizState = {
  student: null,
  currentQuestionId: 1,
  answers: {},
  submittedResult: null,
  lastSavedAt: null,
};

function loadInitialState(): StoredQuizState {
  if (typeof window === 'undefined') {
    return EMPTY_STATE;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<StoredQuizState>;
      return {
        student: parsed.student ?? null,
        currentQuestionId:
          typeof parsed.currentQuestionId === 'number' &&
          parsed.currentQuestionId >= 1 &&
          parsed.currentQuestionId <= CLIENT_QUESTIONS.length
            ? parsed.currentQuestionId
            : 1,
        answers:
          parsed.answers && typeof parsed.answers === 'object'
            ? parsed.answers
            : {},
        submittedResult: parsed.submittedResult ?? null,
        lastSavedAt: parsed.lastSavedAt ?? null,
      };
    }
  } catch {
    // Ignore corrupted storage and fall back cleanly
  }

  // Optional autostart parameter for automated verification scripts
  const params = new URLSearchParams(window.location.search);
  if (params.get('autostart') === '1') {
    return {
      ...EMPTY_STATE,
      student: { fullName: 'Murid Penguji', className: 'XI-A' },
      lastSavedAt: new Date().toISOString(),
    };
  }

  return EMPTY_STATE;
}

export default function App() {
  const [quizState, setQuizState] = useState<StoredQuizState>(() =>
    loadInitialState()
  );
  const [teacherModeOpen, setTeacherModeOpen] = useState(false);
  const [teacherData, setTeacherData] =
    useState<TeacherEvaluationResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Persist every progress change to localStorage immediately
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(quizState));
    } catch {
      // Storage quota fallback ignored silently
    }
  }, [quizState]);

  const handleStartAssessment = (student: StudentIdentity) => {
    setQuizState((prev) => ({
      ...prev,
      student,
      lastSavedAt: new Date().toISOString(),
    }));
  };

  const handleSelectQuestion = (questionId: number) => {
    const clamped = Math.max(1, Math.min(CLIENT_QUESTIONS.length, questionId));
    setQuizState((prev) => ({
      ...prev,
      currentQuestionId: clamped,
      lastSavedAt: new Date().toISOString(),
    }));
  };

  const handleChangeAnswer = (
    questionId: number,
    value: StudentAnswerValue
  ) => {
    setQuizState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value,
      },
      lastSavedAt: new Date().toISOString(),
    }));
  };

  const handleResetProgress = () => {
    setTeacherData(null);
    setSubmitError(null);
    setQuizState((prev) => ({
      student: prev.student,
      currentQuestionId: 1,
      answers: {} as AnswersMap,
      submittedResult: null,
      lastSavedAt: new Date().toISOString(),
    }));
  };

  const handleFullResetFromResults = () => {
    setTeacherData(null);
    setSubmitError(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setQuizState(EMPTY_STATE);
  };

  const handleSubmitAssessment = async () => {
    if (!quizState.student) return;
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student: quizState.student,
          answers: quizState.answers,
        }),
      });
      const payload = await response.json();
      if (!response.ok || !payload.result) {
        setSubmitError(
          payload.error || 'Terjadi kesalahan saat memproses penilaian.'
        );
        return;
      }
      const result: SubmissionResult = payload.result;
      setQuizState((prev) => ({
        ...prev,
        submittedResult: result,
        lastSavedAt: new Date().toISOString(),
      }));
    } catch {
      setSubmitError(
        'Gagal menghubungi server penilaian. Periksa koneksi lalu coba lagi.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (teacherModeOpen) {
    return (
      <TeacherModeView
        student={quizState.student}
        answers={quizState.answers}
        questions={CLIENT_QUESTIONS}
        cachedData={teacherData}
        onAuthenticated={(data) => setTeacherData(data)}
        onBack={() => setTeacherModeOpen(false)}
      />
    );
  }

  if (!quizState.student) {
    return (
      <LoginScreen
        initialStudent={null}
        onStart={handleStartAssessment}
        onOpenTeacherMode={() => setTeacherModeOpen(true)}
      />
    );
  }

  if (quizState.submittedResult) {
    return (
      <ResultsView
        result={quizState.submittedResult}
        onOpenTeacherMode={() => setTeacherModeOpen(true)}
        onResetAll={handleFullResetFromResults}
      />
    );
  }

  const currentQuestion =
    CLIENT_QUESTIONS.find((q) => q.id === quizState.currentQuestionId) ||
    CLIENT_QUESTIONS[0];

  return (
    <div className="min-h-screen bg-[#F4F7F8]">
      <TopControlPanel
        student={quizState.student}
        questions={CLIENT_QUESTIONS}
        currentQuestionId={quizState.currentQuestionId}
        answers={quizState.answers}
        lastSavedAt={quizState.lastSavedAt}
        isSubmitting={isSubmitting}
        onSelectQuestion={handleSelectQuestion}
        onPrev={() => handleSelectQuestion(quizState.currentQuestionId - 1)}
        onNext={() => handleSelectQuestion(quizState.currentQuestionId + 1)}
        onConfirmSubmit={handleSubmitAssessment}
        onConfirmReset={handleResetProgress}
        onOpenTeacherMode={() => setTeacherModeOpen(true)}
      />

      <main className="mx-auto max-w-5xl px-3 pt-4 sm:px-5">
        {submitError && (
          <div
            role="alert"
            className="mb-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-xs font-medium text-[#991B1B]"
          >
            {submitError}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <QuestionView
              question={currentQuestion}
              answer={quizState.answers[currentQuestion.id]}
              onChangeAnswer={handleChangeAnswer}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Clean, empty, minimal bottom safe margin — zero buttons, zero banners, zero interactive controls */}
      <div className="h-32" aria-hidden="true" />
    </div>
  );
}
