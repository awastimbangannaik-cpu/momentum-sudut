import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Grid2x2,
  Lock,
  RotateCcw,
  Send,
} from 'lucide-react';
import type {
  AnswersMap,
  ClientQuestion,
  StudentIdentity,
} from '../types/quiz';
import { isQuestionAnswered } from '../lib/gradingUtils';

interface TopControlPanelProps {
  student: StudentIdentity;
  questions: ClientQuestion[];
  currentQuestionId: number;
  answers: AnswersMap;
  lastSavedAt: string | null;
  isSubmitting: boolean;
  onSelectQuestion: (questionId: number) => void;
  onPrev: () => void;
  onNext: () => void;
  onConfirmSubmit: () => void;
  onConfirmReset: () => void;
  onOpenTeacherMode: () => void;
}

export const TopControlPanel: React.FC<TopControlPanelProps> = ({
  student,
  questions,
  currentQuestionId,
  answers,
  lastSavedAt,
  isSubmitting,
  onSelectQuestion,
  onPrev,
  onNext,
  onConfirmSubmit,
  onConfirmReset,
  onOpenTeacherMode,
}) => {
  const [activeModal, setActiveModal] = useState<'none' | 'submit' | 'reset'>(
    'none'
  );
  const [mobilePaletteOpen, setMobilePaletteOpen] = useState(false);

  const answeredCount = questions.reduce(
    (acc, q) => (isQuestionAnswered(q.type, answers[q.id]) ? acc + 1 : acc),
    0
  );
  const unansweredCount = questions.length - answeredCount;
  const isFirst = currentQuestionId <= 1;
  const isLast = currentQuestionId >= questions.length;

  return (
    <div className="w-full">
      {/* Compact Sticky Top Bar (stays <= 15% viewport height on mobile, holds primary nav & submit) */}
      <header className="sticky top-0 z-30 border-b border-[#CBE4E2] bg-white/95 backdrop-blur-xs">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-2.5 py-2 sm:px-5 sm:py-2.5">
          {/* Left: Prev + Question Indicator + Next */}
          <div className="flex items-center gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={onPrev}
              disabled={isFirst}
              aria-label="Soal Sebelumnya"
              className={`inline-flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border px-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 ${
                isFirst
                  ? 'border-[#E2ECEE] bg-[#F4F7F8] text-[#9BB0B4] cursor-not-allowed'
                  : 'border-[#CBE4E2] bg-white text-[#0D5C63] hover:bg-[#E6F7F5] cursor-pointer'
              }`}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline ml-0.5">Sebelumnya</span>
            </button>

            <button
              type="button"
              onClick={() => setMobilePaletteOpen((v) => !v)}
              aria-expanded={mobilePaletteOpen}
              aria-label="Pilih nomor soal"
              className="inline-flex min-h-[38px] items-center gap-1 rounded-lg border border-[#CBE4E2] bg-[#F4FBFA] px-2.5 text-xs font-bold text-[#0D5C63] md:hidden whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Grid2x2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="font-mono-tabular">
                {currentQuestionId}/{questions.length}
              </span>
            </button>

            <span className="hidden md:inline-flex items-center px-2 font-mono-tabular text-xs font-bold text-[#0F292E] whitespace-nowrap shrink-0">
              Soal {currentQuestionId}/{questions.length}
            </span>

            <button
              type="button"
              onClick={onNext}
              disabled={isLast}
              aria-label="Soal Berikutnya"
              className={`inline-flex min-h-[38px] min-w-[38px] items-center justify-center rounded-lg border px-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 ${
                isLast
                  ? 'border-[#E2ECEE] bg-[#F4F7F8] text-[#9BB0B4] cursor-not-allowed'
                  : 'border-[#CBE4E2] bg-white text-[#0D5C63] hover:bg-[#E6F7F5] cursor-pointer'
              }`}
            >
              <span className="hidden md:inline mr-0.5">Berikutnya</span>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {/* Center-Right: Progress & Primary Submit CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="hidden sm:inline-block font-mono-tabular text-xs font-medium text-[#48656A] whitespace-nowrap shrink-0">
              {answeredCount}/{questions.length} terjawab
            </span>

            <button
              type="button"
              onClick={() => setActiveModal('submit')}
              className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#0D5C63] px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#09474D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sm:hidden">Kumpulkan</span>
              <span className="hidden sm:inline">KUMPULKAN JAWABAN</span>
            </button>
          </div>
        </div>

        {/* Optional quick number drawer right under sticky header when toggled on mobile */}
        {mobilePaletteOpen && (
          <div className="border-t border-[#E6EFEF] bg-white px-3 py-2.5 md:hidden">
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((q) => {
                const answered = isQuestionAnswered(q.type, answers[q.id]);
                const active = q.id === currentQuestionId;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      onSelectQuestion(q.id);
                      setMobilePaletteOpen(false);
                    }}
                    aria-label={`Soal nomor ${q.id} (${answered ? 'sudah dijawab' : 'belum dijawab'})`}
                    className={`min-h-[38px] rounded-md font-mono-tabular text-xs font-bold transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#0D5C63] text-white ring-2 ring-[#14B8A6]/50'
                        : answered
                        ? 'border border-[#0F766E] bg-[#CCFBF1] text-[#0D5C63]'
                        : 'border border-[#CBD8DA] bg-[#FAFCFC] text-[#48656A]'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Top-Anchored Confirmation Modal (NEVER at bottom of screen) */}
      {activeModal !== 'none' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="top-confirm-title"
          className="mx-auto mt-3 max-w-5xl px-3 sm:px-5"
        >
          <div className="rounded-xl border-2 border-[#0D5C63] bg-white p-4 shadow-md sm:p-5">
            {activeModal === 'submit' ? (
              <div className="space-y-3">
                <h2
                  id="top-confirm-title"
                  className="font-display text-base font-bold text-[#0F292E]"
                >
                  Konfirmasi Pengumpulan Jawaban
                </h2>
                <p className="text-sm text-[#2C4A4F]">
                  Anda akan mengunci seluruh jawaban dan melihat skor akhir. Pastikan seluruh hitungan telah diperiksa kembali.
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 rounded-lg bg-[#F4FBFA] px-3.5 py-2.5 text-xs font-medium text-[#0F292E]">
                  <span>
                    Sudah dijawab:{' '}
                    <strong className="font-mono-tabular text-[#0D5C63]">
                      {answeredCount} soal
                    </strong>
                  </span>
                  <span>
                    Belum dijawab:{' '}
                    <strong className="font-mono-tabular text-[#B45309]">
                      {unansweredCount} soal
                    </strong>
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      setActiveModal('none');
                      onConfirmSubmit();
                    }}
                    className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-[#0D5C63] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#09474D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] cursor-pointer"
                  >
                    {isSubmitting ? 'MEMPROSES...' : 'YA, KUMPULKAN SEKARANG'}
                  </button>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => setActiveModal('none')}
                    className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-[#CBD8DA] bg-white px-4 py-2 text-xs font-semibold text-[#0F292E] transition-colors hover:bg-[#F4F7F8] cursor-pointer"
                  >
                    BATAL
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <h2
                  id="top-confirm-title"
                  className="font-display text-base font-bold text-[#991B1B]"
                >
                  Konfirmasi Reset Progres
                </h2>
                <p className="text-sm text-[#2C4A4F]">
                  Tindakan ini akan menghapus seluruh jawaban Anda (saat ini{' '}
                  <strong className="font-mono-tabular">{answeredCount}</strong>{' '}
                  soal terjawab) dan memulai pengerjaan dari nomor 1. Lanjutkan?
                </p>
                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModal('none');
                      onConfirmReset();
                    }}
                    className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-[#DC2626] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#B91C1C] cursor-pointer"
                  >
                    YA, HAPUS &amp; ULANGI
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModal('none')}
                    className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-[#CBD8DA] bg-white px-4 py-2 text-xs font-semibold text-[#0F292E] transition-colors hover:bg-[#F4F7F8] cursor-pointer"
                  >
                    BATAL
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full Top Control Panel Block (directly above Question Card, strictly in upper area) */}
      <section
        aria-label="Panel Kontrol Atas"
        className="mx-auto mt-3 max-w-5xl px-3 sm:px-5"
      >
        <div className="rounded-xl border border-[#D9E6E8] bg-white p-3.5 sm:p-4">
          {/* Row 1: Identity, Autosave indicator, Reset & Mode Guru */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#EEF4F5] pb-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-bold text-[#0F292E]">
                <span className="truncate">{student.fullName}</span>
                <span aria-hidden="true" className="text-[#94A3B8]">
                  ·
                </span>
                <span className="text-[#0D5C63]">{student.className}</span>
              </div>
              <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#48656A]">
                <span>SMAS Tunas Baru Jin Seung Batam</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1 font-medium text-[#0F766E]">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>
                    Progres tersimpan.
                    {lastSavedAt
                      ? ` (${new Date(lastSavedAt).toLocaleTimeString('id-ID', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })})`
                      : ''}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveModal('reset')}
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#CBD8DA] bg-[#FAFCFC] px-3 py-1.5 text-xs font-semibold text-[#334155] transition-colors hover:border-[#DC2626] hover:text-[#DC2626] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>RESET PROGRES</span>
              </button>

              <button
                type="button"
                onClick={onOpenTeacherMode}
                className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-[#CBE4E2] bg-[#F4FBFA] px-3 py-1.5 text-xs font-semibold text-[#0D5C63] transition-colors hover:bg-[#CCFBF1] whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                <span>MODE GURU</span>
              </button>
            </div>
          </div>

          {/* Row 2: Question Number Buttons 1-10 + Progress Count */}
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-between gap-2 text-xs text-[#48656A]">
              <span>
                Navigasi Soal ({answeredCount}/{questions.length} terjawab)
              </span>
              <span className="text-[11px]">
                Hijau: terjawab · Putih: belum
              </span>
            </div>

            <nav
              aria-label="Navigasi Nomor Soal 1 sampai 10"
              className="grid grid-cols-5 gap-1.5 sm:flex sm:flex-wrap"
            >
              {questions.map((q) => {
                const answered = isQuestionAnswered(q.type, answers[q.id]);
                const isCurrent = q.id === currentQuestionId;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => onSelectQuestion(q.id)}
                    aria-current={isCurrent ? 'step' : undefined}
                    aria-label={`Soal ${q.id}, ${answered ? 'sudah dijawab' : 'belum dijawab'}`}
                    className={`min-h-[38px] min-w-[38px] rounded-lg font-mono-tabular text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] cursor-pointer ${
                      isCurrent
                        ? 'bg-[#0D5C63] text-white ring-2 ring-[#14B8A6]/50'
                        : answered
                        ? 'border border-[#0F766E] bg-[#CCFBF1] text-[#0D5C63] hover:bg-[#99F6E4]'
                        : 'border border-[#CBD8DA] bg-white text-[#48656A] hover:border-[#0D5C63] hover:text-[#0D5C63]'
                    }`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};
