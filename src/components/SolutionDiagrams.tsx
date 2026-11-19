import React from 'react';

interface SolutionDiagramProps {
  solutionDiagramId: string;
}

const SolDefs: React.FC = () => (
  <defs>
    <marker
      id="sol-arrow-teal"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#0D5C63" />
    </marker>
    <marker
      id="sol-arrow-amber"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#D97706" />
    </marker>
    <marker
      id="sol-arrow-red"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#DC2626" />
    </marker>
    <marker
      id="sol-arrow-slate"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="5"
      markerHeight="5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#475569" />
    </marker>
  </defs>
);

export const SolutionDiagram: React.FC<SolutionDiagramProps> = ({
  solutionDiagramId,
}) => {
  switch (solutionDiagramId) {
    case 'sol-q1':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 1">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          {/* Top-down cross section + FBD of axis forces */}
          <text x="145" y="24" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">Penampang Atas Silinder</text>
          <circle cx="145" cy="118" r="66" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="2" />
          <circle cx="145" cy="118" r="4" fill="#0D5C63" />
          <line x1="145" y1="118" x2="211" y2="118" stroke="#0F292E" strokeWidth="1.6" />
          <text x="178" y="134" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0F292E">R = 0,25 m</text>
          <line x1="211" y1="118" x2="211" y2="60" stroke="#D97706" strokeWidth="2.4" markerEnd="url(#sol-arrow-amber)" />
          <text x="220" y="70" fontSize="11.5" fontWeight="700" fill="#B45309">v = 10 m/s</text>
          <path d="M 102 68 A 66 66 0 0 0 92 156" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#sol-arrow-teal)" />
          <text x="48" y="114" fontSize="11" fontWeight="700" fill="#0D5C63">ω = 40 rad/s</text>

          {/* Right: Side FBD showing forces pass through axis => τ_ext = 0 */}
          <text x="415" y="24" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">Diagram Gaya pada Sumbu</text>
          <line x1="415" y1="42" x2="415" y2="196" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
          <rect x="350" y="96" width="130" height="44" rx="4" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
          <line x1="415" y1="96" x2="415" y2="54" stroke="#DC2626" strokeWidth="2.2" markerEnd="url(#sol-arrow-red)" />
          <text x="424" y="64" fontSize="11.5" fontWeight="700" fill="#DC2626">N (poros)</text>
          <line x1="415" y1="140" x2="415" y2="184" stroke="#DC2626" strokeWidth="2.2" markerEnd="url(#sol-arrow-red)" />
          <text x="424" y="182" fontSize="11.5" fontWeight="700" fill="#DC2626">W = Mg</text>
          <text x="415" y="208" textAnchor="middle" fontSize="11" fill="#475569">Lengan momen = 0 → τ_eks = 0</text>
        </svg>
      );

    case 'sol-q2':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 2">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <text x="145" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">Sebelum Kontak (Terpisah)</text>
          <line x1="145" y1="34" x2="145" y2="206" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
          {/* B top */}
          <ellipse cx="145" cy="76" rx="82" ry="18" fill="#E6F7F5" stroke="#D97706" strokeWidth="2" />
          <path d="M 192 48 A 50 11 0 0 1 98 48" fill="none" stroke="#D97706" strokeWidth="2" markerEnd="url(#sol-arrow-amber)" />
          <text x="235" y="76" fontSize="11" fontWeight="600" fill="#B45309">L_B = −6,0</text>
          {/* A bottom */}
          <ellipse cx="145" cy="154" rx="46" ry="14" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="2" />
          <path d="M 105 180 A 45 12 0 0 0 185 180" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#sol-arrow-teal)" />
          <text x="200" y="158" fontSize="11" fontWeight="600" fill="#0D5C63">L_A = +9,0</text>

          <line x1="295" y1="114" x2="345" y2="114" stroke="#475569" strokeWidth="2" markerEnd="url(#sol-arrow-slate)" />
          <text x="320" y="102" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#475569">τ_eks = 0</text>

          <text x="445" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">Sesudah Bergabung (Koaksial)</text>
          <line x1="445" y1="34" x2="445" y2="206" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
          <ellipse cx="445" cy="122" rx="82" ry="18" fill="#E6F7F5" stroke="#0D5C63" strokeWidth="2" />
          <ellipse cx="445" cy="130" rx="46" ry="13" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
          <path d="M 398 164 A 52 13 0 0 0 492 164" fill="none" stroke="#0D5C63" strokeWidth="2.2" markerEnd="url(#sol-arrow-teal)" />
          <text x="445" y="194" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0D5C63">ω_akhir = +2,0 rad/s (L_tot = +3,0)</text>
        </svg>
      );

    case 'sol-q3':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 3">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          {/* Left: wide mass distribution */}
          <text x="145" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">Awal: r Massa Besar</text>
          <line x1="145" y1="34" x2="145" y2="196" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
          <circle cx="145" cy="60" r="10" fill="#0D5C63" />
          <line x1="86" y1="84" x2="204" y2="84" stroke="#0D5C63" strokeWidth="5" strokeLinecap="round" />
          <line x1="145" y1="84" x2="145" y2="164" stroke="#14B8A6" strokeWidth="12" strokeLinecap="round" />
          <line x1="145" y1="100" x2="94" y2="100" stroke="#475569" strokeWidth="1.2" markerEnd="url(#sol-arrow-slate)" />
          <text x="145" y="192" textAnchor="middle" fontSize="11.5" fill="#0F292E">I₁ = 4,5 · ω₁ = 4,0 · E_k1 = 36 J</text>

          <line x1="245" y1="112" x2="310" y2="112" stroke="#D97706" strokeWidth="2" markerEnd="url(#sol-arrow-amber)" />
          <text x="278" y="100" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#B45309">W_int &gt; 0</text>

          {/* Right: narrow mass distribution */}
          <text x="415" y="22" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">Akhir: r Massa Kecil</text>
          <line x1="415" y1="34" x2="415" y2="196" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
          <circle cx="415" cy="60" r="10" fill="#0D5C63" />
          <path d="M 405 82 Q 398 96 415 98 Q 432 96 425 82" fill="none" stroke="#0D5C63" strokeWidth="5" strokeLinecap="round" />
          <line x1="415" y1="84" x2="415" y2="164" stroke="#14B8A6" strokeWidth="12" strokeLinecap="round" />
          <path d="M 380 144 A 38 10 0 1 0 450 144" fill="none" stroke="#D97706" strokeWidth="2" markerEnd="url(#sol-arrow-amber)" />
          <text x="415" y="192" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0D5C63">I₂ = 1,5 · ω₂ = 12 · E_k2 = 108 J</text>
        </svg>
      );

    case 'sol-q4':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 4">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <circle cx="165" cy="116" r="78" fill="#E6F7F5" stroke="#0D5C63" strokeWidth="2" />
          <circle cx="165" cy="116" r="6" fill="#0D5C63" />
          <rect x="225" y="106" width="18" height="20" rx="3" fill="#FDE68A" stroke="#B45309" strokeDasharray="3 2" />
          <rect x="193" y="106" width="18" height="20" rx="3" fill="#D97706" />
          <line x1="224" y1="116" x2="213" y2="116" stroke="#DC2626" strokeWidth="2" markerEnd="url(#sol-arrow-red)" />
          <text x="165" y="210" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0F292E">Gaya penggeser F_int radial (τ = 0)</text>

          <text x="292" y="58" fontSize="12" fontWeight="700" fill="#0D5C63">Perbandingan Keadaan Sistem:</text>
          <text x="292" y="84" fontSize="11.5" fill="#0F292E">Awal: I₁ = 8 + 4(2²) = 24 kg·m²</text>
          <text x="292" y="104" fontSize="11.5" fill="#0F292E">L₁ = 24 × 3 = 72 kg·m²/s · E_k1 = 108 J</text>
          <line x1="292" y1="118" x2="520" y2="118" stroke="#D9E6E8" strokeWidth="1" />
          <text x="292" y="138" fontSize="11.5" fontWeight="600" fill="#0D5C63">Akhir: I₂ = 8 + 4(1²) = 12 kg·m²</text>
          <text x="292" y="158" fontSize="11.5" fontWeight="600" fill="#0D5C63">ω₂ = 72 / 12 = 6,0 rad/s</text>
          <text x="292" y="178" fontSize="11.5" fontWeight="600" fill="#B45309">E_k2 = ½(12)(6²) = 216 J (naik 2×)</text>
        </svg>
      );

    case 'sol-q5':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 5">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <line x1="280" y1="22" x2="280" y2="196" stroke="#0D5C63" strokeWidth="1.5" strokeDasharray="6 4" />
          <rect x="115" y="104" width="330" height="12" rx="3" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.6" />
          <circle cx="280" cy="110" r="6" fill="#0D5C63" />
          <circle cx="198" cy="110" r="9" fill="#FDE68A" stroke="#B45309" strokeDasharray="3 2" />
          <circle cx="362" cy="110" r="9" fill="#FDE68A" stroke="#B45309" strokeDasharray="3 2" />
          <circle cx="115" cy="110" r="10" fill="#D97706" />
          <circle cx="445" cy="110" r="10" fill="#D97706" />
          <line x1="184" y1="110" x2="132" y2="110" stroke="#D97706" strokeWidth="2" markerEnd="url(#sol-arrow-amber)" />
          <line x1="376" y1="110" x2="428" y2="110" stroke="#D97706" strokeWidth="2" markerEnd="url(#sol-arrow-amber)" />
          <text x="280" y="156" textAnchor="middle" fontSize="11.5" fill="#0F292E">
            I_batang = (1/12) M_b L_b² = 1,0 kg·m²
          </text>
          <text x="280" y="178" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0D5C63">
            I₁ = 1,25 kg·m² (ω₁ = 5,0) → I₂ = 2,0 kg·m² (ω₂ = 3,125 rad/s)
          </text>
          <text x="280" y="200" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#B45309">
            L_awal = L_akhir = 6,25 kg·m²/s
          </text>
        </svg>
      );

    case 'sol-q6':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 6">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <line x1="40" y1="172" x2="360" y2="172" stroke="#334155" strokeWidth="2.5" />
          <circle cx="180" cy="112" r="60" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="2" />
          {/* r_CM vector upward from P to CM */}
          <line x1="180" y1="172" x2="180" y2="116" stroke="#DC2626" strokeWidth="2.2" markerEnd="url(#sol-arrow-red)" />
          <text x="150" y="146" fontSize="11.5" fontWeight="700" fill="#DC2626">r_CM</text>
          {/* v_CM vector rightward */}
          <line x1="180" y1="112" x2="275" y2="112" stroke="#D97706" strokeWidth="2.4" markerEnd="url(#sol-arrow-amber)" />
          <text x="280" y="116" fontSize="11.5" fontWeight="700" fill="#B45309">M v_CM</text>
          {/* Rotation arrow */}
          <path d="M 152 42 A 70 70 0 0 1 242 74" fill="none" stroke="#0D5C63" strokeWidth="2.2" markerEnd="url(#sol-arrow-teal)" />
          <text x="235" y="54" fontSize="11.5" fontWeight="700" fill="#0D5C63">I_CM ω = 1,6</text>
          {/* P dot */}
          <circle cx="180" cy="172" r="5" fill="#DC2626" />
          <text x="180" y="194" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#DC2626">Titik Acuan P</text>

          <text x="372" y="70" fontSize="12" fontWeight="700" fill="#0D5C63">Dua Kontribusi Searah (⊗):</text>
          <text x="372" y="96" fontSize="11.5" fill="#0F292E">1. Translasi: M v_CM R = 4,0</text>
          <text x="372" y="118" fontSize="11.5" fill="#0F292E">2. Rotasi CM: (2/5)MR² ω = 1,6</text>
          <text x="372" y="144" fontSize="12" fontWeight="700" fill="#0D5C63">Total L_P = 5,6 kg·m²/s</text>
        </svg>
      );

    case 'sol-q7':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 7">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <line x1="170" y1="20" x2="170" y2="200" stroke="#0D5C63" strokeWidth="1.5" strokeDasharray="6 4" />
          <ellipse cx="170" cy="72" rx="64" ry="18" fill="none" stroke="#0D5C63" strokeWidth="6" />
          <path d="M 124 38 A 48 11 0 0 0 216 38" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#sol-arrow-teal)" />
          <text x="275" y="68" fontSize="12" fontWeight="700" fill="#0D5C63">L₁ = I₁ω₁ = (0,48)(+15) = +7,2 kg·m²/s</text>

          <ellipse cx="170" cy="148" rx="80" ry="22" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="2" />
          <path d="M 218 184 A 52 12 0 0 1 122 184" fill="none" stroke="#D97706" strokeWidth="2" markerEnd="url(#sol-arrow-amber)" />
          <text x="275" y="148" fontSize="12" fontWeight="700" fill="#B45309">L₂ = I₂ω₂ = (0,50)(−20) = −10,0 kg·m²/s</text>
          <text x="275" y="180" fontSize="12.5" fontWeight="700" fill="#0F292E">L_total = +7,2 − 10,0 = −2,8 kg·m²/s</text>
        </svg>
      );

    case 'sol-q8':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 8">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <circle cx="135" cy="110" r="62" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
          <line x1="135" y1="32" x2="135" y2="188" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="5 4" />
          <text x="135" y="206" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0F292E">R₁ = 2×10⁶ m · ω₁ = 0,05 rad/s</text>

          <line x1="226" y1="110" x2="310" y2="110" stroke="#475569" strokeWidth="2" markerEnd="url(#sol-arrow-slate)" />
          <text x="268" y="96" textAnchor="middle" fontSize="11" fontWeight="700" fill="#0D5C63">R₁/R₂ = 200</text>
          <text x="268" y="128" textAnchor="middle" fontSize="11" fill="#475569">I turun 40.000×</text>

          <circle cx="420" cy="110" r="20" fill="#99D8D3" stroke="#0D5C63" strokeWidth="2" />
          <line x1="420" y1="32" x2="420" y2="188" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="5 4" />
          <path d="M 384 72 A 40 11 0 1 0 456 72" fill="none" stroke="#D97706" strokeWidth="2" markerEnd="url(#sol-arrow-amber)" />
          <text x="420" y="206" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0D5C63">ω₂ = 0,05 × 200² = 2000 rad/s</text>
        </svg>
      );

    case 'sol-q9':
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 9">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <line x1="145" y1="24" x2="145" y2="198" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
          <ellipse cx="145" cy="74" rx="64" ry="18" fill="none" stroke="#D97706" strokeWidth="5" />
          <text x="145" y="42" textAnchor="middle" fontSize="11" fontWeight="600" fill="#B45309">Cincin: I₂ = 0,25m · ω₂ = −5,0</text>
          <ellipse cx="145" cy="150" rx="64" ry="18" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="2" />
          <text x="145" y="186" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0D5C63">Cakram: I₁ = 0,75 · ω₁ = +10</text>

          <line x1="235" y1="112" x2="295" y2="112" stroke="#475569" strokeWidth="2" markerEnd="url(#sol-arrow-slate)" />
          <text x="425" y="76" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">Sistem Gabungan (ω_akhir = +4,0)</text>
          <ellipse cx="425" cy="122" rx="64" ry="18" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="2" />
          <ellipse cx="425" cy="120" rx="64" ry="18" fill="none" stroke="#D97706" strokeWidth="4" />
          <text x="425" y="166" textAnchor="middle" fontSize="11.5" fill="#0F292E">7,5 − 1,25m = (0,75 + 0,25m)(4,0)</text>
          <text x="425" y="188" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">m = 2 kg</text>
        </svg>
      );

    case 'sol-q10':
    default:
      return (
        <svg viewBox="0 0 560 220" className="w-full h-auto max-w-full select-none" role="img" aria-label="Diagram pembahasan soal 10">
          <SolDefs />
          <rect width="560" height="220" fill="#F8FBFC" rx="8" />
          <line x1="90" y1="24" x2="90" y2="196" stroke="#0D5C63" strokeWidth="1.6" strokeDasharray="6 4" />
          <rect x="90" y="96" width="360" height="14" rx="3" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
          <circle cx="90" cy="103" r="7" fill="#0D5C63" />
          {/* Exact proportional r2 = 0.6 m (40% of 1.5 m -> 144px from 90 -> 234) and r1 = 1.2 m (80% -> 288px -> 378) */}
          <rect x="224" y="93" width="20" height="20" rx="3" fill="#D97706" />
          <rect x="368" y="93" width="20" height="20" rx="3" fill="#FDE68A" stroke="#B45309" strokeDasharray="3 2" />
          <line x1="364" y1="103" x2="250" y2="103" stroke="#DC2626" strokeWidth="2" markerEnd="url(#sol-arrow-red)" />
          <text x="234" y="80" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0D5C63">r₂ = 0,60 m</text>
          <text x="378" y="80" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#B45309">r₁ = 1,20 m</text>
          <text x="275" y="150" textAnchor="middle" fontSize="11.5" fill="#0F292E">
            I_batang,ujung = ⅓ M L_b² = 0,90 kg·m² · I₁ = 1,62 kg·m²
          </text>
          <text x="275" y="172" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0D5C63">
            L = 6,48 kg·m²/s → I₂ = 1,08 kg·m² → r₂ = 0,6 m
          </text>
        </svg>
      );
  }
};
