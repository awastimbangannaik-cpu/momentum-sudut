import React, { useState } from 'react';
import { ArrowRight, GraduationCap, Lock } from 'lucide-react';
import type { StudentIdentity } from '../types/quiz';

interface LoginScreenProps {
  initialStudent: StudentIdentity | null;
  onStart: (student: StudentIdentity) => void;
  onOpenTeacherMode: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  initialStudent,
  onStart,
  onOpenTeacherMode,
}) => {
  const [fullName, setFullName] = useState(initialStudent?.fullName ?? '');
  const [className, setClassName] = useState(initialStudent?.className ?? '');

  const isValid = fullName.trim().length > 0 && className.trim().length > 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    onStart({
      fullName: fullName.trim(),
      className: className.trim(),
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] px-3 py-5 sm:px-6 sm:py-10">
      {/* Top Action Bar for Teacher Mode access without placing controls at bottom */}
      <div className="mx-auto mb-5 flex max-w-2xl items-center justify-between gap-3">
        <span className="font-display text-sm font-bold tracking-tight text-[#0D5C63] truncate">
          SMAS Tunas Baru Jin Seung Batam
        </span>
        <button
          type="button"
          onClick={onOpenTeacherMode}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#CBE4E2] bg-white px-3 py-2 text-xs font-semibold text-[#0D5C63] transition-colors hover:bg-[#E6F7F5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] whitespace-nowrap shrink-0 cursor-pointer"
        >
          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Mode Guru</span>
        </button>
      </div>

      <main className="mx-auto max-w-2xl">
        <section className="rounded-2xl border border-[#D9E6E8] bg-white p-5 shadow-xs sm:p-8">
          <div className="space-y-2 border-b border-[#E6EFEF] pb-5">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0F766E]">
              <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Penilaian Fisika SMA · Kelas XI Fase F</span>
            </div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-[#0F292E] sm:text-3xl text-balance">
              Momentum Sudut dan Hukum Kekekalan Momentum Sudut
            </h1>
            <p className="text-sm leading-relaxed text-[#48656A]">
              Guru Pengampu: <strong className="font-semibold text-[#0F292E]">MR Jo</strong> · 10 Soal HOTS · Penilaian Otomatis &amp; Penyimpanan Progres Internal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
            <div className="space-y-1.5">
              <label
                htmlFor="student-fullname"
                className="block text-sm font-semibold text-[#0F292E]"
              >
                Nama Lengkap Murid <span className="text-[#DC2626]">*</span>
              </label>
              <input
                id="student-fullname"
                name="fullName"
                type="text"
                required
                autoComplete="name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Contoh: Nadia Putri Maharani"
                className="w-full min-h-[44px] rounded-lg border border-[#CBD8DA] bg-[#FAFCFC] px-3.5 py-2.5 text-sm text-[#0F292E] placeholder:text-[#7E969A] focus:border-[#0D5C63] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C63]/20"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="student-class"
                className="block text-sm font-semibold text-[#0F292E]"
              >
                Kelas <span className="text-[#DC2626]">*</span>
              </label>
              <input
                id="student-class"
                name="className"
                type="text"
                required
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="Contoh: XI-A atau XI Fase F 1"
                className="w-full min-h-[44px] rounded-lg border border-[#CBD8DA] bg-[#FAFCFC] px-3.5 py-2.5 text-sm text-[#0F292E] placeholder:text-[#7E969A] focus:border-[#0D5C63] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D5C63]/20"
              />
            </div>

            <div className="rounded-xl border border-[#DCECEB] bg-[#F4FBFA] p-3.5 text-xs leading-relaxed text-[#2C4A4F]">
              <p className="font-semibold text-[#0D5C63]">Ketentuan Pengerjaan:</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-4">
                <li>Terdiri atas 2 Pilihan Ganda, 2 Pilihan Ganda Kompleks, 1 Benar/Salah (4 pernyataan dengan sistem penalti +2,5 / −1 / 0), dan 5 Isian Singkat Matematis.</li>
                <li>Setiap jawaban tersimpan otomatis di peramban Anda sehingga progres tetap aman apabila halaman dimuat ulang.</li>
                <li>Isi Nama Lengkap dan Kelas terlebih dahulu untuk mengaktifkan tombol Mulai Penilaian.</li>
              </ul>
            </div>

            <button
              type="submit"
              disabled={!isValid}
              className={`inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C63] ${
                isValid
                  ? 'bg-[#0D5C63] text-white hover:bg-[#09474D] cursor-pointer'
                  : 'bg-[#DCE5E7] text-[#6E868B] cursor-not-allowed'
              }`}
            >
              <span>MULAI PENILAIAN</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </section>
      </main>

      {/* Clean safe empty bottom spacing */}
      <div className="h-24" aria-hidden="true" />
    </div>
  );
};
