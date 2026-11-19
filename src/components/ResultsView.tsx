import React, { useState } from 'react';
import { Award, Lock, RotateCcw } from 'lucide-react';
import type { SubmissionResult } from '../types/quiz';

interface ResultsViewProps {
  result: SubmissionResult;
  onOpenTeacherMode: () => void;
  onResetAll: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  onOpenTeacherMode,
  onResetAll,
}) => {
  const [confirmReset, setConfirmReset] = useState(false);

  const formattedDate = new Date(result.submittedAt).toLocaleDateString(
    'id-ID',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }
  );

  return (
    <div className="min-h-screen bg-[#F4F7F8] px-3 py-4 sm:px-6 sm:py-8">
      {/* Top Action Bar — strictly at top of page */}
      <header className="mx-auto mb-4 flex max-w-3xl flex-wrap items-center justify-between gap-2.5 rounded-xl border border-[#CBE4E2] bg-white px-4 py-3">
        <span className="font-display text-sm font-bold text-[#0D5C63]">
          SMAS Tunas Baru Jin Seung Batam · Hasil Penilaian
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#CBD8DA] bg-[#FAFCFC] px-3 py-2 text-xs font-semibold text-[#334155] transition-colors hover:border-[#DC2626] hover:text-[#DC2626] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Ulangi Penilaian</span>
          </button>
          <button
            type="button"
            onClick={onOpenTeacherMode}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#0D5C63] px-3.5 py-2 text-xs font-bold text-white transition-colors hover:bg-[#09474D] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>MODE GURU</span>
          </button>
        </div>
      </header>

      {/* Top-anchored Reset Confirmation */}
      {confirmReset && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-results-title"
          className="mx-auto mb-4 max-w-3xl rounded-xl border-2 border-[#DC2626] bg-white p-4 shadow-md"
        >
          <h2
            id="reset-results-title"
            className="font-display text-sm font-bold text-[#991B1B]"
          >
            Konfirmasi Ulangi Penilaian
          </h2>
          <p className="mt-1 text-xs text-[#2C4A4F]">
            Apakah Anda yakin ingin menghapus hasil dan seluruh jawaban sebelumnya untuk memulai ulang dari halaman login?
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setConfirmReset(false);
                onResetAll();
              }}
              className="min-h-[38px] rounded-lg bg-[#DC2626] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#B91C1C] cursor-pointer"
            >
              YA, MULAI ULANG
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="min-h-[38px] rounded-lg border border-[#CBD8DA] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0F292E] hover:bg-[#F4F7F8] cursor-pointer"
            >
              BATAL
            </button>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-3xl">
        <section className="rounded-2xl border border-[#D9E6E8] bg-white p-5 shadow-xs sm:p-8">
          <div className="flex flex-col gap-3 border-b border-[#E6EFEF] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-[#0F766E]">
                Penilaian Fisika Kelas XI Fase F · Selesai
              </p>
              <h1 className="mt-1 font-display text-xl font-bold text-[#0F292E] sm:text-2xl">
                Rekap Hasil Pengerjaan Murid
              </h1>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F7F5] text-[#0D5C63]">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>

          {/* Student Info Grid */}
          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#E6EFEF] bg-[#FAFCFC] p-3.5">
              <dt className="text-xs font-medium text-[#48656A]">
                Nama Lengkap Murid
              </dt>
              <dd className="mt-1 font-display text-sm font-bold text-[#0F292E]">
                {result.student.fullName}
              </dd>
            </div>
            <div className="rounded-xl border border-[#E6EFEF] bg-[#FAFCFC] p-3.5">
              <dt className="text-xs font-medium text-[#48656A]">Kelas</dt>
              <dd className="mt-1 font-display text-sm font-bold text-[#0D5C63]">
                {result.student.className}
              </dd>
            </div>
            <div className="rounded-xl border border-[#E6EFEF] bg-[#FAFCFC] p-3.5">
              <dt className="text-xs font-medium text-[#48656A]">
                Tanggal Pengerjaan
              </dt>
              <dd className="mt-1 text-xs font-semibold text-[#0F292E]">
                {formattedDate}
              </dd>
            </div>
          </dl>

          {/* Primary Score Display */}
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[#CBE4E2] bg-[#F4FBFA] p-4 sm:col-span-1">
              <p className="text-xs font-semibold text-[#0D5C63]">
                Skor Akhir
              </p>
              <p className="mt-1 font-mono-tabular text-3xl font-bold text-[#0D5C63]">
                {result.totalScore}
                <span className="text-base font-medium text-[#48656A]">
                  {' '}
                  / {result.maxTotalScore}
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-[#E6EFEF] bg-[#FAFCFC] p-4">
              <p className="text-xs font-medium text-[#48656A]">
                Persentase Pencapaian
              </p>
              <p className="mt-1 font-mono-tabular text-2xl font-bold text-[#0F292E]">
                {result.percentage}%
              </p>
            </div>

            <div className="rounded-xl border border-[#E6EFEF] bg-[#FAFCFC] p-4">
              <p className="text-xs font-medium text-[#48656A]">
                Kelengkapan Jawaban
              </p>
              <p className="mt-1 font-mono-tabular text-lg font-bold text-[#0F292E]">
                {result.answeredCount} / {result.totalQuestions} dijawab
              </p>
              <p className="text-xs text-[#64748B]">
                Belum dijawab: {result.unansweredCount} soal
              </p>
            </div>
          </div>

          {/* Motivational Message & Locked Key Notice */}
          <div className="mt-6 space-y-3 border-t border-[#E6EFEF] pt-5">
            <p className="text-sm leading-relaxed text-[#0F292E]">
              Terima kasih telah menyelesaikan penilaian Fisika bersama{' '}
              <strong>MR Jo</strong>. Terus tingkatkan kemampuan analisis,
              pemodelan matematis, dan penalaran konsep fisika Anda.
            </p>
            <p className="rounded-lg border border-[#DCECEB] bg-[#F8FBFC] px-3.5 py-2.5 text-xs leading-relaxed text-[#48656A]">
              Kunci jawaban, rincian skor per nomor, dan pembahasan lengkap terlindungi oleh autentikasi Guru melalui menu{' '}
              <strong className="text-[#0D5C63]">MODE GURU</strong> di bagian atas halaman.
            </p>
          </div>
        </section>
      </main>

      {/* Clean safe empty bottom space */}
      <div className="h-28" aria-hidden="true" />
    </div>
  );
};
