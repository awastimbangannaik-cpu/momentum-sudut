import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  KeyRound,
  Lock,
  ShieldCheck,
  XCircle,
} from 'lucide-react';
import type {
  AnswersMap,
  ClientQuestion,
  StudentIdentity,
  TeacherEvaluationResponse,
} from '../types/quiz';
import { MathText } from './MathText';
import { SolutionDiagram } from './SolutionDiagrams';
import { NarratorBar } from './NarratorBar';

interface TeacherModeViewProps {
  student: StudentIdentity | null;
  answers: AnswersMap;
  questions: ClientQuestion[];
  cachedData: TeacherEvaluationResponse | null;
  onAuthenticated: (data: TeacherEvaluationResponse) => void;
  onBack: () => void;
}

export const TeacherModeView: React.FC<TeacherModeViewProps> = ({
  student,
  answers,
  questions,
  cachedData,
  onAuthenticated,
  onBack,
}) => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedQuestionId, setSelectedQuestionId] = useState<number>(1);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);
    try {
      const response = await fetch('/api/teacher/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          student,
          answers,
        }),
      });
      const payload = await response.json();
      if (!response.ok || !payload.authenticated) {
        setErrorMsg(
          payload.error || 'Password tidak valid. Akses Mode Guru ditolak.'
        );
        return;
      }
      onAuthenticated(payload as TeacherEvaluationResponse);
    } catch {
      setErrorMsg(
        'Gagal terhubung ke server autentikasi. Pastikan server berjalan.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (!cachedData) {
    return (
      <div className="min-h-screen bg-[#F4F7F8] px-3 py-5 sm:px-6 sm:py-10">
        {/* Top bar */}
        <header className="mx-auto mb-5 flex max-w-lg items-center justify-between gap-2">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#CBE4E2] bg-white px-3 py-2 text-xs font-semibold text-[#0D5C63] hover:bg-[#E6F7F5] cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Kembali</span>
          </button>
          <span className="text-xs font-semibold text-[#48656A]">
            SMAS Tunas Baru Jin Seung Batam
          </span>
        </header>

        <main className="mx-auto max-w-lg">
          <section className="rounded-2xl border border-[#D9E6E8] bg-white p-5 shadow-xs sm:p-7">
            <div className="flex items-center gap-3 border-b border-[#E6EFEF] pb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#0D5C63]">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h1 className="font-display text-lg font-bold text-[#0F292E]">
                  Mode Guru — Akses Terkunci
                </h1>
                <p className="text-xs text-[#48656A]">
                  Verifikasi server diperlukan sebelum membuka kunci jawaban dan pembahasan.
                </p>
              </div>
            </div>

            <form onSubmit={handleVerify} className="mt-5 space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="teacher-password"
                  className="block text-sm font-semibold text-[#0F292E]"
                >
                  Password Akses Guru
                </label>
                <input
                  id="teacher-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password guru"
                  autoComplete="off"
                  className="w-full min-h-[44px] rounded-lg border border-[#CBD8DA] bg-[#FAFCFC] px-3.5 py-2.5 font-mono-tabular text-sm text-[#0F292E] focus:border-[#0D5C63] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C63]/20"
                />
              </div>

              {errorMsg && (
                <div
                  role="alert"
                  className="flex items-start gap-2 rounded-lg border border-[#FECACA] bg-[#FEF2F2] px-3 py-2.5 text-xs font-medium text-[#991B1B]"
                >
                  <XCircle
                    className="mt-0.5 h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || password.trim().length === 0}
                className={`inline-flex w-full min-h-[46px] items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  loading || password.trim().length === 0
                    ? 'bg-[#DCE5E7] text-[#6E868B] cursor-not-allowed'
                    : 'bg-[#0D5C63] text-white hover:bg-[#09474D] cursor-pointer'
                }`}
              >
                <KeyRound className="h-4 w-4" aria-hidden="true" />
                <span>
                  {loading ? 'MEMVERIFIKASI...' : 'BUKA MODE GURU'}
                </span>
              </button>
            </form>
          </section>
        </main>

        <div className="h-24" aria-hidden="true" />
      </div>
    );
  }

  const activeQuestion =
    questions.find((q) => q.id === selectedQuestionId) || questions[0];
  const activeBreakdown = cachedData.breakdowns.find(
    (b) => b.questionId === activeQuestion.id
  );
  const activeSolution = cachedData.solutions.find(
    (s) => s.questionId === activeQuestion.id
  );

  return (
    <div className="min-h-screen bg-[#F4F7F8]">
      {/* Sticky Top Header strictly at top */}
      <header className="sticky top-0 z-30 border-b border-[#CBE4E2] bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-3 py-2.5 sm:px-5">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#CBE4E2] bg-white px-3 py-1.5 text-xs font-semibold text-[#0D5C63] hover:bg-[#E6F7F5] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Kembali</span>
            </button>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D5C63]">
              <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>MODE GURU · MR Jo</span>
            </div>
          </div>

          <span className="font-mono-tabular text-xs font-bold text-[#0F292E]">
            Skor Murid: {cachedData.result.totalScore}/
            {cachedData.result.maxTotalScore} ({cachedData.result.percentage}%)
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-5 px-3 py-5 sm:px-5">
        {/* Top Question Selector for Pembahasan */}
        <section className="rounded-2xl border border-[#D9E6E8] bg-white p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EEF4F5] pb-3">
            <div>
              <h1 className="font-display text-base font-bold text-[#0F292E] sm:text-lg">
                Analisis Skor &amp; Pembahasan Buku Teks Fisika
              </h1>
              <p className="text-xs text-[#48656A]">
                Murid: <strong className="text-[#0F292E]">{cachedData.result.student.fullName}</strong> · Kelas{' '}
                <strong className="text-[#0D5C63]">{cachedData.result.student.className}</strong>
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-1.5 sm:flex sm:flex-wrap">
            {questions.map((q) => {
              const b = cachedData.breakdowns.find((item) => item.questionId === q.id);
              const isSelected = q.id === selectedQuestionId;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setSelectedQuestionId(q.id)}
                  className={`min-h-[40px] min-w-[44px] rounded-lg border px-2 font-mono-tabular text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'border-[#0D5C63] bg-[#0D5C63] text-white'
                      : b && b.earnedScore === b.maxScore
                      ? 'border-[#0F766E] bg-[#CCFBF1] text-[#0D5C63]'
                      : b && b.earnedScore > 0
                      ? 'border-[#D97706] bg-[#FEF3C7] text-[#92400E]'
                      : 'border-[#CBD8DA] bg-white text-[#48656A] hover:border-[#0D5C63]'
                  }`}
                >
                  {q.id}
                </button>
              );
            })}
          </div>
        </section>

        {/* Detailed Textbook Solution for Selected Question */}
        {activeSolution && activeBreakdown && (
          <article className="rounded-2xl border-2 border-[#CBE4E2] bg-white p-4 shadow-xs sm:p-6 space-y-5">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E6EFEF] pb-4">
              <div>
                <p className="text-xs font-semibold text-[#0F766E]">
                  Pembahasan Soal {activeQuestion.id} · {activeQuestion.typeLabel}
                </p>
                <h2 className="mt-0.5 font-display text-lg font-bold text-[#0F292E] sm:text-xl">
                  {activeQuestion.topic}
                </h2>
              </div>

              <div className="rounded-xl border border-[#DCECEB] bg-[#F4FBFA] px-3.5 py-2 text-right">
                <p className="text-[11px] font-medium text-[#48656A]">
                  Skor Diperoleh
                </p>
                <p className="font-mono-tabular text-lg font-bold text-[#0D5C63]">
                  {activeBreakdown.earnedScore} / {activeBreakdown.maxScore}
                </p>
              </div>
            </div>

            {/* MR Jo Narrator for Pembahasan */}
            <NarratorBar
              label="DENGARKAN PEMBAHASAN"
              script={activeSolution.speechScript}
              contextKey={`sol-${activeQuestion.id}`}
            />

            {/* Student vs Correct Answer Box */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E6EFEF] bg-[#FAFCFC] p-3.5">
                <p className="text-xs font-semibold text-[#48656A]">
                  Jawaban Murid
                </p>
                <p className="mt-1 font-mono-tabular text-sm font-bold text-[#0F292E]">
                  {activeBreakdown.studentAnswerDisplay}
                </p>
              </div>
              <div className="rounded-xl border border-[#CBE4E2] bg-[#E6F7F5] p-3.5">
                <p className="text-xs font-semibold text-[#0D5C63]">
                  Kunci Jawaban Resmi
                </p>
                <p className="mt-1 font-mono-tabular text-sm font-bold text-[#0D5C63]">
                  {activeSolution.correctAnswerDisplay}
                </p>
              </div>
            </div>

            {/* Section 1: Memahami Permasalahan */}
            <section className="space-y-1.5">
              <h3 className="font-display text-sm font-bold text-[#0D5C63]">
                1. Memahami Permasalahan
              </h3>
              <p className="text-sm leading-relaxed text-[#0F292E]">
                <MathText text={activeSolution.understanding} />
              </p>
            </section>

            {/* Section 2: Landasan Teoritis */}
            <section className="space-y-1.5">
              <h3 className="font-display text-sm font-bold text-[#0D5C63]">
                2. Landasan Teoritis
              </h3>
              <div className="rounded-xl border border-[#DCECEB] bg-[#F8FBFC] p-3.5 text-sm leading-relaxed text-[#0F292E]">
                <MathText text={activeSolution.theoreticalBasis} />
              </div>
            </section>

            {/* Section 3: Diagram Fisika dan Free Body Diagram */}
            <section className="space-y-2">
              <h3 className="font-display text-sm font-bold text-[#0D5C63]">
                3. Diagram Fisika dan Keadaan Sistem
              </h3>
              <div className="rounded-xl border border-[#D9E6E8] bg-white p-3">
                <SolutionDiagram
                  solutionDiagramId={activeSolution.solutionDiagramId}
                />
              </div>
              <p className="text-sm leading-relaxed text-[#2C4A4F]">
                <MathText text={activeSolution.diagramExplanation} />
              </p>
            </section>

            {/* Section 4: Penyelesaian Matematis Sistematis */}
            <section className="space-y-2">
              <h3 className="font-display text-sm font-bold text-[#0D5C63]">
                4. Penyelesaian Matematis Sistematis
              </h3>
              <ol className="space-y-2 rounded-xl border border-[#DCECEB] bg-[#FAFCFC] p-3.5 text-sm leading-relaxed text-[#0F292E]">
                {activeSolution.mathematicalSteps.map((step, i) => (
                  <li key={i} className="border-b border-[#EEF4F5] pb-2 last:border-b-0 last:pb-0">
                    <MathText text={step} />
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 5: Analisis dan Interpretasi */}
            <section className="space-y-1.5">
              <h3 className="font-display text-sm font-bold text-[#0D5C63]">
                5. Analisis dan Interpretasi
              </h3>
              <p className="text-sm leading-relaxed text-[#0F292E]">
                <MathText text={activeSolution.analysisAndInterpretation} />
              </p>
            </section>

            {/* Section 6: Kesimpulan */}
            <section className="rounded-xl border border-[#CBE4E2] bg-[#F4FBFA] p-3.5 space-y-1">
              <h3 className="font-display text-sm font-bold text-[#0D5C63]">
                6. Kesimpulan
              </h3>
              <p className="text-sm font-medium leading-relaxed text-[#0B3B40]">
                <MathText text={activeSolution.conclusion} />
              </p>
            </section>
          </article>
        )}

        {/* Full Score Breakdown Table */}
        <section className="rounded-2xl border border-[#D9E6E8] bg-white p-4 sm:p-5">
          <h2 className="font-display text-base font-bold text-[#0F292E]">
            Rincian Evaluasi Seluruh Nomor (1–10)
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-[#D9E6E8] text-[#48656A]">
                  <th className="py-2 pr-3 font-semibold">No</th>
                  <th className="py-2 pr-3 font-semibold">Bentuk Soal</th>
                  <th className="py-2 pr-3 font-semibold">Jawaban Murid</th>
                  <th className="py-2 pr-3 font-semibold">Kunci Resmi</th>
                  <th className="py-2 pr-3 font-semibold text-right">Skor</th>
                  <th className="py-2 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF4F5]">
                {cachedData.breakdowns.map((b) => {
                  const q = questions.find((item) => item.id === b.questionId);
                  return (
                    <tr
                      key={b.questionId}
                      className={`transition-colors hover:bg-[#F4FBFA] ${
                        b.questionId === selectedQuestionId ? 'bg-[#E6F7F5]/60' : ''
                      }`}
                    >
                      <td className="py-2.5 pr-3">
                        <button
                          type="button"
                          onClick={() => setSelectedQuestionId(b.questionId)}
                          aria-label={`Lihat pembahasan soal ${b.questionId}`}
                          className="font-mono-tabular font-bold text-[#0D5C63] underline decoration-[#99D8D3] underline-offset-2 hover:text-[#09474D] cursor-pointer"
                        >
                          Soal {b.questionId}
                        </button>
                      </td>
                      <td className="py-2.5 pr-3 text-[#0F292E]">
                        {q?.typeLabel}
                      </td>
                      <td className="py-2.5 pr-3 font-mono-tabular text-[#0F292E]">
                        {b.studentAnswerDisplay}
                      </td>
                      <td className="py-2.5 pr-3 font-mono-tabular font-semibold text-[#0D5C63]">
                        {b.correctAnswerDisplay}
                      </td>
                      <td className="py-2.5 pr-3 font-mono-tabular font-bold text-right text-[#0F292E]">
                        {b.earnedScore}/{b.maxScore}
                      </td>
                      <td className="py-2.5 text-right">
                        {b.isFullyCorrect ? (
                          <span className="inline-flex items-center gap-1 font-semibold text-[#0F766E]">
                            <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Tepat</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 font-semibold text-[#B45309]">
                            <XCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>{b.earnedScore > 0 ? 'Parsial' : 'Perlu Evaluasi'}</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <div className="h-24" aria-hidden="true" />
    </div>
  );
};
