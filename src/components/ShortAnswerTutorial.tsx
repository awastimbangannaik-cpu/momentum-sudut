import React, { useState } from 'react';
import { BookOpenCheck, ChevronDown, ChevronUp } from 'lucide-react';

export const ShortAnswerTutorial: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <section
      aria-label="Panduan Pengisian Jawaban Numerik"
      className="rounded-xl border border-[#CBE4E2] bg-[#F4FBFA] p-3.5"
    >
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex items-start gap-2.5 min-w-0">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#0D5C63] text-white">
            <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-sm font-bold text-[#0D5C63]">
              Panduan Pengisian Isian Singkat (Soal 6–10)
            </h3>
            <p className="text-xs text-[#48656A]">
              Aturan penulisan angka agar terbaca tepat oleh sistem otomatis.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="inline-flex min-h-[34px] items-center gap-1 rounded-md border border-[#CBE4E2] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#0D5C63] hover:bg-[#E6F7F5] whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>{expanded ? 'Ringkas' : 'Lihat Panduan'}</span>
          {expanded ? (
            <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          )}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 space-y-2">
          <ul className="grid gap-1.5 text-xs text-[#1E3A3F] sm:grid-cols-2 lg:grid-cols-3">
            <li className="rounded-md border border-[#DCECEB] bg-white px-2.5 py-1.5">
              <span className="font-semibold text-[#0D5C63]">1. Bilangan bulat:</span>{' '}
              Misal 25 → tulis <code className="font-mono-tabular font-semibold text-[#0D5C63]">25</code>.
            </li>
            <li className="rounded-md border border-[#DCECEB] bg-white px-2.5 py-1.5">
              <span className="font-semibold text-[#0D5C63]">2. Desimal:</span>{' '}
              Misal 2,5 → tulis <code className="font-mono-tabular font-semibold text-[#0D5C63]">2.5</code> atau <code className="font-mono-tabular font-semibold text-[#0D5C63]">2,5</code>.
            </li>
            <li className="rounded-md border border-[#DCECEB] bg-white px-2.5 py-1.5">
              <span className="font-semibold text-[#0D5C63]">3. Negatif:</span>{' '}
              Misal −12 → tulis <code className="font-mono-tabular font-semibold text-[#0D5C63]">-12</code> tanpa spasi.
            </li>
            <li className="rounded-md border border-[#DCECEB] bg-white px-2.5 py-1.5">
              <span className="font-semibold text-[#0D5C63]">4. Notasi ilmiah:</span>{' '}
              Misal 3,2 × 10⁴ → tulis <code className="font-mono-tabular font-semibold text-[#0D5C63]">3.2e4</code>.
            </li>
            <li className="rounded-md border border-[#DCECEB] bg-white px-2.5 py-1.5">
              <span className="font-semibold text-[#0D5C63]">5. Tanpa satuan:</span>{' '}
              Masukkan angka saja (tanpa kg, m, rad/s).
            </li>
            <li className="rounded-md border border-[#DCECEB] bg-white px-2.5 py-1.5">
              <span className="font-semibold text-[#0D5C63]">6. Tanpa spasi:</span>{' '}
              Hindari spasi dan karakter tambahan.
            </li>
          </ul>
          <p className="text-[11px] text-[#48656A]">
            Sistem memiliki toleransi pembulatan numerik sesuai ketelitian fisika.
          </p>
        </div>
      )}
    </section>
  );
};
