import React from 'react';

interface PhysicsDiagramProps {
  diagramId: string;
  caption: string;
}

const SvgDefs: React.FC = () => (
  <defs>
    <marker
      id="arrow-teal"
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
      id="arrow-amber"
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
      id="arrow-slate"
      viewBox="0 0 10 10"
      refX="8"
      refY="5"
      markerWidth="5"
      markerHeight="5"
      orient="auto-start-reverse"
    >
      <path d="M 0 1.5 L 9 5 L 0 8.5 z" fill="#475569" />
    </marker>
    <linearGradient id="metal-disc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#E6F7F5" />
      <stop offset="55%" stopColor="#99D8D3" />
      <stop offset="100%" stopColor="#45A29E" />
    </linearGradient>
    <linearGradient id="sphere-grad" x1="30%" y1="25%" x2="80%" y2="85%">
      <stop offset="0%" stopColor="#F0FDFA" />
      <stop offset="45%" stopColor="#5EEAD4" />
      <stop offset="100%" stopColor="#0F766E" />
    </linearGradient>
    <linearGradient id="star-core" x1="30%" y1="25%" x2="80%" y2="85%">
      <stop offset="0%" stopColor="#FEF3C7" />
      <stop offset="55%" stopColor="#F59E0B" />
      <stop offset="100%" stopColor="#B45309" />
    </linearGradient>
  </defs>
);

export const PhysicsDiagram: React.FC<PhysicsDiagramProps> = ({
  diagramId,
  caption,
}) => {
  const renderSvg = () => {
    switch (diagramId) {
      case 'q1-flywheel':
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram silinder pejal homogen berotasi dengan sensor laju tepi"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Center symmetry axis */}
            <line
              x1="296"
              y1="22"
              x2="296"
              y2="228"
              stroke="#0D5C63"
              strokeWidth="1.5"
              strokeDasharray="8 4 2 4"
            />
            <text
              x="306"
              y="32"
              fontSize="12"
              fontWeight="600"
              fill="#0D5C63"
            >
              Sumbu Rotasi Pusat
            </text>

            {/* Isometric solid cylinder body */}
            <ellipse
              cx="296"
              cy="158"
              rx="92"
              ry="30"
              fill="#0F766E"
              opacity="0.22"
            />
            <path
              d="M 204 108 L 204 158 A 92 30 0 0 0 388 158 L 388 108 Z"
              fill="url(#metal-disc)"
              stroke="#0D5C63"
              strokeWidth="2"
            />
            <ellipse
              cx="296"
              cy="108"
              rx="92"
              ry="30"
              fill="#CCFBF1"
              stroke="#0D5C63"
              strokeWidth="2"
            />
            {/* Inner hub */}
            <ellipse
              cx="296"
              cy="108"
              rx="14"
              ry="4.5"
              fill="#0D5C63"
              opacity="0.7"
            />

            {/* Diameter dimension arrow */}
            <line
              x1="204"
              y1="205"
              x2="388"
              y2="205"
              stroke="#475569"
              strokeWidth="1.5"
              markerStart="url(#arrow-slate)"
              markerEnd="url(#arrow-slate)"
            />
            <line x1="204" y1="162" x2="204" y2="213" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="388" y1="162" x2="388" y2="213" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="251" y="194" width="90" height="20" fill="#FAFCFC" />
            <text
              x="296"
              y="209"
              textAnchor="middle"
              fontSize="13"
              fontWeight="600"
              fill="#0F292E"
            >
              d = 0,50 m
            </text>

            {/* Tangential velocity vector at outer rim */}
            <circle cx="388" cy="108" r="5" fill="#D97706" />
            <line
              x1="388"
              y1="108"
              x2="452"
              y2="82"
              stroke="#D97706"
              strokeWidth="2.5"
              markerEnd="url(#arrow-amber)"
            />
            <text
              x="442"
              y="72"
              fontSize="13"
              fontWeight="700"
              fill="#B45309"
            >
              v = 10 m/s
            </text>

            {/* Optical sensor block near rim */}
            <rect
              x="408"
              y="124"
              width="74"
              height="26"
              rx="4"
              fill="#FFFFFF"
              stroke="#0D5C63"
              strokeWidth="1.5"
            />
            <text
              x="445"
              y="141"
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="#0D5C63"
            >
              Sensor Optik
            </text>

            {/* Rotation direction curved arrow around top axis */}
            <path
              d="M 261 55 A 40 13 0 1 0 331 55"
              fill="none"
              stroke="#0D5C63"
              strokeWidth="2.2"
              markerEnd="url(#arrow-teal)"
            />

            {/* Mass label cleanly separated on left */}
            <text x="20" y="96" fontSize="13" fontWeight="600" fill="#0F292E">
              Silinder Pejal Homogen
            </text>
            <text x="20" y="116" fontSize="13" fill="#334155">
              Massa M = 8,0 kg
            </text>
          </svg>
        );

      case 'q2-two-discs':
        return (
          <svg
            viewBox="0 0 560 260"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram dua cakram A dan B seporos vertikal dengan arah putaran berlawanan sebelum bergabung"
          >
            <SvgDefs />
            <rect width="560" height="260" fill="#FAFCFC" rx="8" />
            {/* Vertical frictionless shaft */}
            <line
              x1="280"
              y1="18"
              x2="280"
              y2="242"
              stroke="#0D5C63"
              strokeWidth="1.6"
              strokeDasharray="8 4 2 4"
            />
            <rect x="275" y="34" width="10" height="196" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />

            {/* Lower Disc A (R_A = 0.50 m -> radius 68px) */}
            <path
              d="M 212 186 L 212 204 A 68 22 0 0 0 348 204 L 348 186 Z"
              fill="#99D8D3"
              stroke="#0D5C63"
              strokeWidth="1.8"
            />
            <ellipse
              cx="280"
              cy="186"
              rx="68"
              ry="22"
              fill="#CCFBF1"
              stroke="#0D5C63"
              strokeWidth="1.8"
            />
            <ellipse cx="280" cy="186" rx="8" ry="3" fill="#475569" />

            {/* Upper Disc B (R_B = 1.0 m -> radius 126px, twice R_A) */}
            <path
              d="M 154 92 L 154 108 A 126 36 0 0 0 406 108 L 406 92 Z"
              fill="#76C7C0"
              stroke="#0D5C63"
              strokeWidth="1.8"
            />
            <ellipse
              cx="280"
              cy="92"
              rx="126"
              ry="36"
              fill="#E6F7F5"
              stroke="#0D5C63"
              strokeWidth="1.8"
            />
            <ellipse cx="280" cy="92" rx="8" ry="3" fill="#475569" />

            {/* Drop arrows showing B lowered onto A */}
            <line x1="230" y1="132" x2="230" y2="156" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-slate)" />
            <line x1="330" y1="132" x2="330" y2="156" stroke="#64748B" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-slate)" />

            {/* Rotation arrows: B clockwise (front goes right-to-left) */}
            <path
              d="M 332 45 A 60 16 0 0 1 228 45"
              fill="none"
              stroke="#D97706"
              strokeWidth="2.4"
              markerEnd="url(#arrow-amber)"
            />
            <text x="415" y="60" fontSize="12" fontWeight="700" fill="#B45309">
              Searah jarum jam
            </text>
            <text x="415" y="77" fontSize="12" fill="#0F292E">
              Cakram B: m_B = 2,0 kg
            </text>
            <text x="415" y="94" fontSize="12" fill="#0F292E">
              R_B = 1,0 m · ω_B = 6,0 rad/s
            </text>

            {/* Rotation arrows: A counter-clockwise (front goes left-to-right) */}
            <path
              d="M 225 224 A 62 18 0 0 0 335 224"
              fill="none"
              stroke="#0D5C63"
              strokeWidth="2.4"
              markerEnd="url(#arrow-teal)"
            />
            <text x="24" y="182" fontSize="12" fontWeight="700" fill="#0D5C63">
              Berlawanan jarum jam
            </text>
            <text x="24" y="199" fontSize="12" fill="#0F292E">
              Cakram A: m_A = 4,0 kg
            </text>
            <text x="24" y="216" fontSize="12" fill="#0F292E">
              R_A = 0,50 m · ω_A = 18 rad/s
            </text>
          </svg>
        );

      case 'q3-ice-skater':
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram atlet seluncur es saat lengan direntangkan dan saat lengan didekatkan ke tubuh"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Ice floor */}
            <line x1="24" y1="212" x2="536" y2="212" stroke="#99D8D3" strokeWidth="3" />

            {/* Left Panel: Arms Extended */}
            <text x="145" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0D5C63">
              Kondisi 1 (Lengan Direntangkan)
            </text>
            <line x1="145" y1="38" x2="145" y2="225" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
            {/* Skater silhouette 1 */}
            <circle cx="145" cy="68" r="12" fill="#0D5C63" />
            <path d="M 134 84 L 156 84 L 152 140 L 138 140 Z" fill="#14B8A6" stroke="#0D5C63" strokeWidth="1.5" />
            {/* Extended arms */}
            <line x1="82" y1="92" x2="208" y2="92" stroke="#0D5C63" strokeWidth="6" strokeLinecap="round" />
            <circle cx="80" cy="92" r="5" fill="#D97706" />
            <circle cx="210" cy="92" r="5" fill="#D97706" />
            {/* Legs */}
            <line x1="141" y1="140" x2="141" y2="206" stroke="#0D5C63" strokeWidth="6" strokeLinecap="round" />
            <line x1="149" y1="140" x2="162" y2="176" stroke="#0D5C63" strokeWidth="5" strokeLinecap="round" />
            <path d="M 134 210 L 156 210" stroke="#334155" strokeWidth="3" />
            {/* Rotation loop 1 */}
            <path d="M 102 184 A 46 12 0 1 0 188 184" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#arrow-teal)" />
            <text x="145" y="236" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0F292E">
              I₁ = 4,5 kg·m² · ω₁ = 4,0 rad/s
            </text>

            {/* Transition arrow */}
            <line x1="252" y1="120" x2="306" y2="120" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-slate)" />
            <text x="279" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="#475569">
              Tarik lengan
            </text>

            {/* Right Panel: Arms Tucked */}
            <text x="415" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0D5C63">
              Kondisi 2 (Lengan Dirapatkan)
            </text>
            <line x1="415" y1="38" x2="415" y2="225" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
            {/* Skater silhouette 2 */}
            <circle cx="415" cy="68" r="12" fill="#0D5C63" />
            <path d="M 404 84 L 426 84 L 422 140 L 408 140 Z" fill="#14B8A6" stroke="#0D5C63" strokeWidth="1.5" />
            {/* Tucked arms close to chest */}
            <path d="M 404 90 Q 396 105 415 106 Q 434 105 426 90" fill="none" stroke="#0D5C63" strokeWidth="5.5" strokeLinecap="round" />
            {/* Legs */}
            <line x1="415" y1="140" x2="415" y2="206" stroke="#0D5C63" strokeWidth="6" strokeLinecap="round" />
            <path d="M 405 210 L 427 210" stroke="#334155" strokeWidth="3" />
            {/* Rotation loop 2 */}
            <path d="M 372 184 A 46 12 0 1 0 458 184" fill="none" stroke="#D97706" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />
            <text x="415" y="236" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0F292E">
              I₂ = 1,5 kg·m² · ω₂ = ?
            </text>
          </svg>
        );

      case 'q4-turntable-mass':
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram meja putar dengan beban uji yang digeser dari jarak r1 ke r2"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Top-down view of turntable */}
            <circle
              cx="210"
              cy="125"
              r="96"
              fill="#E6F7F5"
              stroke="#0D5C63"
              strokeWidth="2.2"
            />
            {/* Radial track */}
            <rect x="210" y="119" width="92" height="12" rx="3" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
            {/* Center axle */}
            <circle cx="210" cy="125" r="8" fill="#0D5C63" />

            {/* Initial position r1 = 2.0 m (at ~86px) */}
            <rect
              x="284"
              y="114"
              width="22"
              height="22"
              rx="4"
              fill="#FDE68A"
              stroke="#B45309"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
            <text x="295" y="106" textAnchor="middle" fontSize="11" fontWeight="600" fill="#B45309">
              Awal (r₁)
            </text>

            {/* Final position r2 = 1.0 m (at ~43px) */}
            <rect
              x="242"
              y="114"
              width="22"
              height="22"
              rx="4"
              fill="#D97706"
              stroke="#78350F"
              strokeWidth="1.5"
            />
            <text x="253" y="154" textAnchor="middle" fontSize="11" fontWeight="700" fill="#78350F">
              Akhir (r₂)
            </text>

            {/* Inward radial shift arrow */}
            <line x1="282" y1="125" x2="267" y2="125" stroke="#0F292E" strokeWidth="2" markerEnd="url(#arrow-slate)" />

            {/* Spin curved arrow */}
            <path
              d="M 140 50 A 104 104 0 0 1 280 50"
              fill="none"
              stroke="#0D5C63"
              strokeWidth="2.4"
              markerEnd="url(#arrow-teal)"
            />
            <text x="210" y="20" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">
              ω₁ = 3,0 rad/s (tampak atas)
            </text>

            {/* Data panel on right */}
            <text x="344" y="66" fontSize="13" fontWeight="700" fill="#0D5C63">
              Parameter Sistem:
            </text>
            <text x="344" y="92" fontSize="12.5" fill="#0F292E">
              • Momen inersia meja: I_c = 8,0 kg·m²
            </text>
            <text x="344" y="116" fontSize="12.5" fill="#0F292E">
              • Massa beban uji: m = 4,0 kg
            </text>
            <text x="344" y="140" fontSize="12.5" fill="#0F292E">
              • Jarak awal: r₁ = 2,0 m
            </text>
            <text x="344" y="164" fontSize="12.5" fill="#0F292E">
              • Jarak akhir: r₂ = 1,0 m
            </text>
            <text x="344" y="188" fontSize="12.5" fill="#475569">
              • Poros vertikal licin (τ_eks = 0)
            </text>
          </svg>
        );

      case 'q5-rod-spheres':
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram batang homogen berporos di pusat dengan dua bola simetris yang meluncur ke ujung batang"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Central axis */}
            <line x1="280" y1="24" x2="280" y2="220" stroke="#0D5C63" strokeWidth="1.6" strokeDasharray="8 4 2 4" />
            <text x="290" y="36" fontSize="12" fontWeight="700" fill="#0D5C63">
              Poros Pusat Batang
            </text>

            {/* Horizontal rod total length 340px representing Lb = 2.0 m (170px per half) */}
            <rect x="110" y="118" width="340" height="14" rx="4" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
            <circle cx="280" cy="125" r="7" fill="#0D5C63" />

            {/* Initial sphere positions (r1 = 0.50 m -> 85px from center) */}
            <circle cx="195" cy="125" r="11" fill="#FDE68A" stroke="#B45309" strokeWidth="1.6" strokeDasharray="3 2" />
            <circle cx="365" cy="125" r="11" fill="#FDE68A" stroke="#B45309" strokeWidth="1.6" strokeDasharray="3 2" />

            {/* Final sphere positions (r2 = 1.0 m -> 170px from center, at rod ends) */}
            <circle cx="110" cy="125" r="12" fill="#D97706" stroke="#78350F" strokeWidth="1.8" />
            <circle cx="450" cy="125" r="12" fill="#D97706" stroke="#78350F" strokeWidth="1.8" />

            {/* Slide arrows */}
            <line x1="178" y1="125" x2="128" y2="125" stroke="#78350F" strokeWidth="2" markerEnd="url(#arrow-amber)" />
            <line x1="382" y1="125" x2="432" y2="125" stroke="#78350F" strokeWidth="2" markerEnd="url(#arrow-amber)" />

            {/* Dimension markers */}
            <line x1="195" y1="158" x2="280" y2="158" stroke="#475569" strokeWidth="1.3" markerStart="url(#arrow-slate)" markerEnd="url(#arrow-slate)" />
            <text x="237" y="174" textAnchor="middle" fontSize="11.5" fill="#0F292E">
              r₁ = 0,50 m
            </text>

            <line x1="280" y1="186" x2="450" y2="186" stroke="#475569" strokeWidth="1.3" markerStart="url(#arrow-slate)" markerEnd="url(#arrow-slate)" />
            <text x="365" y="202" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0F292E">
              r₂ = 1,0 m (ujung batang)
            </text>

            {/* Total length marker */}
            <line x1="110" y1="86" x2="450" y2="86" stroke="#0D5C63" strokeWidth="1.3" markerStart="url(#arrow-teal)" markerEnd="url(#arrow-teal)" />
            <rect x="206" y="75" width="148" height="18" fill="#FAFCFC" />
            <text x="280" y="89" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0D5C63">
              L_b = 2,0 m · M_b = 3,0 kg
            </text>

            {/* Rotation arrow at top */}
            <path d="M 244 58 A 40 12 0 1 0 316 58" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#arrow-teal)" />
            <text x="342" y="58" fontSize="12" fontWeight="600" fill="#0D5C63">
              ω₁ = 5,0 rad/s
            </text>
            <text x="110" y="232" fontSize="11.5" fill="#334155">
              Dua bola identik: masing-masing m = 0,50 kg
            </text>
          </svg>
        );

      case 'q6-rolling-sphere':
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram bola pejal menggelinding murni ke kanan dengan titik sentuh P di lantai"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Flat floor */}
            <line x1="40" y1="192" x2="520" y2="192" stroke="#334155" strokeWidth="3" />
            {/* Floor hatch marks */}
            {[60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480].map((x) => (
              <line key={x} x1={x} y1="192" x2={x - 10} y2="204" stroke="#94A3B8" strokeWidth="1.2" />
            ))}

            {/* Solid sphere (center at 230, 122, radius 70) */}
            <circle cx="230" cy="122" r="70" fill="url(#sphere-grad)" stroke="#0D5C63" strokeWidth="2.2" />
            {/* Center of mass dot */}
            <circle cx="230" cy="122" r="4.5" fill="#0F292E" />
            <text x="195" y="114" fontSize="12" fontWeight="700" fill="#0F292E">
              CM
            </text>

            {/* Radius line from CM to P */}
            <line x1="230" y1="122" x2="230" y2="192" stroke="#0F292E" strokeWidth="1.8" strokeDasharray="4 3" />
            <text x="238" y="162" fontSize="12" fontWeight="600" fill="#0F292E">
              R = 0,20 m
            </text>

            {/* Contact point P */}
            <circle cx="230" cy="192" r="6" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
            <text x="230" y="226" textAnchor="middle" fontSize="13" fontWeight="700" fill="#DC2626">
              Titik Acuan P (titik sentuh lantai)
            </text>

            {/* Linear velocity vector v_CM to the right */}
            <line x1="230" y1="122" x2="346" y2="122" stroke="#D97706" strokeWidth="2.6" markerEnd="url(#arrow-amber)" />
            <text x="354" y="126" fontSize="13" fontWeight="700" fill="#B45309">
              v_CM = 4,0 m/s
            </text>

            {/* Rolling clockwise curved arrow */}
            <path
              d="M 206 38 A 84 84 0 0 1 304 68"
              fill="none"
              stroke="#0D5C63"
              strokeWidth="2.4"
              markerEnd="url(#arrow-teal)"
            />
            <text x="310" y="54" fontSize="12" fontWeight="600" fill="#0D5C63">
              Menggelinding tanpa slip
            </text>
            <text x="46" y="56" fontSize="12.5" fontWeight="600" fill="#0F292E">
              Bola Pejal Homogen
            </text>
            <text x="46" y="76" fontSize="12.5" fill="#334155">
              M = 5,0 kg
            </text>
          </svg>
        );

      case 'q7-coaxial-system':
        return (
          <svg
            viewBox="0 0 560 260"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram cincin tipis dan cakram pejal berputar pada poros vertikal sama dengan arah berlawanan"
          >
            <SvgDefs />
            <rect width="560" height="260" fill="#FAFCFC" rx="8" />
            <line x1="250" y1="18" x2="250" y2="244" stroke="#0D5C63" strokeWidth="1.6" strokeDasharray="8 4 2 4" />
            <rect x="246" y="28" width="8" height="206" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />

            {/* Top object: Thin Ring (R1 = 0.40 m -> 76px) */}
            <ellipse cx="250" cy="84" rx="76" ry="24" fill="none" stroke="#0D5C63" strokeWidth="7" />
            <ellipse cx="250" cy="84" rx="76" ry="24" fill="none" stroke="#99D8D3" strokeWidth="2.5" />
            <path d="M 196 42 A 58 14 0 0 0 304 42" fill="none" stroke="#0D5C63" strokeWidth="2.2" markerEnd="url(#arrow-teal)" />

            <text x="350" y="64" fontSize="12.5" fontWeight="700" fill="#0D5C63">
              1. Cincin Tipis Homogen (+)
            </text>
            <text x="350" y="83" fontSize="12" fill="#0F292E">
              m₁ = 3,0 kg · R₁ = 0,40 m
            </text>
            <text x="350" y="101" fontSize="12" fontWeight="600" fill="#0D5C63">
              ω₁ = +15 rad/s (berlawanan jarum jam)
            </text>

            {/* Bottom object: Solid Disc (R2 = 0.50 m -> 95px) */}
            <path d="M 155 178 L 155 194 A 95 28 0 0 0 345 194 L 345 178 Z" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
            <ellipse cx="250" cy="178" rx="95" ry="28" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="1.8" />
            <path d="M 308 216 A 64 16 0 0 1 192 216" fill="none" stroke="#D97706" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />

            <text x="364" y="168" fontSize="12.5" fontWeight="700" fill="#B45309">
              2. Cakram Pejal Homogen (−)
            </text>
            <text x="364" y="187" fontSize="12" fill="#0F292E">
              m₂ = 4,0 kg · R₂ = 0,50 m
            </text>
            <text x="364" y="205" fontSize="12" fontWeight="600" fill="#B45309">
              ω₂ = −20 rad/s (searah jarum jam)
            </text>
          </svg>
        );

      case 'q8-star-collapse':
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram penyusutan bola pejal inti bintang menjadi bintang neutron dengan massa konstan"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Left: Initial large star core */}
            <text x="140" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="#B45309">
              Inti Bintang Awal
            </text>
            <line x1="140" y1="36" x2="140" y2="222" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
            <circle cx="140" cy="128" r="68" fill="url(#star-core)" stroke="#B45309" strokeWidth="2" />
            <line x1="140" y1="128" x2="208" y2="128" stroke="#0F292E" strokeWidth="1.6" />
            <text x="174" y="121" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#0F292E">
              R₁
            </text>
            <path d="M 104 48 A 42 12 0 1 0 176 48" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#arrow-teal)" />
            <text x="140" y="218" textAnchor="middle" fontSize="12" fill="#0F292E">
              R₁ = 2,0 × 10⁶ m · ω₁ = 0,05 rad/s
            </text>

            {/* Collapse transition */}
            <line x1="234" y1="128" x2="314" y2="128" stroke="#475569" strokeWidth="2.2" markerEnd="url(#arrow-slate)" />
            <text x="274" y="114" textAnchor="middle" fontSize="11" fontWeight="600" fill="#475569">
              Keruntuhan Gravitasi
            </text>
            <text x="274" y="146" textAnchor="middle" fontSize="11" fill="#64748B">
              M konstan · τ_eks = 0
            </text>

            {/* Right: Neutron star */}
            <text x="425" y="28" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0D5C63">
              Bintang Neutron Akhir
            </text>
            <line x1="425" y1="36" x2="425" y2="222" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
            <circle cx="425" cy="128" r="22" fill="url(#sphere-grad)" stroke="#0D5C63" strokeWidth="2" />
            <line x1="425" y1="128" x2="447" y2="128" stroke="#0F292E" strokeWidth="1.4" />
            <text x="458" y="132" fontSize="11.5" fontWeight="700" fill="#0F292E">
              R₂
            </text>
            <path d="M 390 88 A 38 11 0 1 0 460 88" fill="none" stroke="#D97706" strokeWidth="2.2" markerEnd="url(#arrow-amber)" />
            <text x="425" y="218" textAnchor="middle" fontSize="12" fill="#0F292E">
              R₂ = 1,0 × 10⁴ m · ω₂ = ?
            </text>
          </svg>
        );

      case 'q9-disc-ring-merge':
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram cakram pejal dan cincin tipis berjari-jari sama digabungkan seporos"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Left: Before merge */}
            <text x="155" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0D5C63">
              Sebelum Bergabung
            </text>
            <line x1="155" y1="36" x2="155" y2="232" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
            <rect x="151" y="42" width="8" height="178" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />

            {/* Top Ring (radius 72px) */}
            <ellipse cx="155" cy="86" rx="72" ry="22" fill="none" stroke="#D97706" strokeWidth="6" />
            <path d="M 206 52 A 54 13 0 0 1 104 52" fill="none" stroke="#D97706" strokeWidth="2" markerEnd="url(#arrow-amber)" />
            <text x="155" y="44" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#B45309">
              Cincin (m = ?), ω₂ = −5,0 rad/s
            </text>

            {/* Drop arrows */}
            <line x1="108" y1="116" x2="108" y2="140" stroke="#64748B" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#arrow-slate)" />
            <line x1="202" y1="116" x2="202" y2="140" stroke="#64748B" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#arrow-slate)" />

            {/* Bottom Disc (same radius 72px) */}
            <path d="M 83 174 L 83 188 A 72 22 0 0 0 227 188 L 227 174 Z" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
            <ellipse cx="155" cy="174" rx="72" ry="22" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="1.8" />
            <path d="M 104 214 A 54 14 0 0 0 206 214" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#arrow-teal)" />
            <text x="155" y="240" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0D5C63">
              Cakram M = 6,0 kg, ω₁ = +10 rad/s
            </text>

            {/* Arrow to merged state */}
            <line x1="256" y1="130" x2="314" y2="130" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-slate)" />

            {/* Right: After merge */}
            <text x="430" y="26" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0D5C63">
              Sesudah Menyatu
            </text>
            <line x1="430" y1="36" x2="430" y2="232" stroke="#0D5C63" strokeWidth="1.4" strokeDasharray="6 4" />
            <rect x="426" y="42" width="8" height="178" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
            <path d="M 358 134 L 358 148 A 72 22 0 0 0 502 148 L 502 134 Z" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
            <ellipse cx="430" cy="134" rx="72" ry="22" fill="#CCFBF1" stroke="#0D5C63" strokeWidth="1.8" />
            <ellipse cx="430" cy="132" rx="72" ry="22" fill="none" stroke="#D97706" strokeWidth="4.5" />
            <path d="M 378 176 A 54 14 0 0 0 482 176" fill="none" stroke="#0D5C63" strokeWidth="2.2" markerEnd="url(#arrow-teal)" />
            <text x="430" y="210" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0D5C63">
              ω_akhir = +4,0 rad/s
            </text>
            <text x="430" y="228" textAnchor="middle" fontSize="11.5" fill="#475569">
              R sama = 0,50 m
            </text>
          </svg>
        );

      case 'q10-rod-end-pivot':
      default:
        return (
          <svg
            viewBox="0 0 560 250"
            className="w-full h-auto max-w-full select-none"
            role="img"
            aria-label="Diagram batang homogen berporos di salah satu ujung dengan balok bergerak dari r1 ke r2"
          >
            <SvgDefs />
            <rect width="560" height="250" fill="#FAFCFC" rx="8" />
            {/* Pivot axis at left end (x = 96) */}
            <line x1="96" y1="22" x2="96" y2="225" stroke="#0D5C63" strokeWidth="1.8" strokeDasharray="8 4 2 4" />
            <text x="106" y="34" fontSize="12" fontWeight="700" fill="#0D5C63">
              Poros di Ujung Kiri Batang
            </text>

            {/* Rod length Lb = 1.5 m -> 360px (240px per meter) */}
            <rect x="96" y="118" width="360" height="16" rx="4" fill="#99D8D3" stroke="#0D5C63" strokeWidth="1.8" />
            <circle cx="96" cy="126" r="8" fill="#0D5C63" stroke="#FFFFFF" strokeWidth="1.5" />

            {/* Initial block at r1 = 1.20 m -> 96 + 288 = 384 */}
            <rect x="372" y="114" width="24" height="24" rx="4" fill="#FDE68A" stroke="#B45309" strokeWidth="1.6" strokeDasharray="3 2" />
            <text x="384" y="106" textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#B45309">
              Awal (r₁ = 1,20 m)
            </text>

            {/* Target final block position (unknown r2, placed neutrally without spoiling exact 0.6 ratio or marked r2 = ?) */}
            <rect x="234" y="114" width="24" height="24" rx="4" fill="#D97706" stroke="#78350F" strokeWidth="1.6" />
            <text x="246" y="156" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#78350F">
              Posisi Akhir (r₂ = ?)
            </text>

            {/* Inward pull arrow */}
            <line x1="366" y1="126" x2="266" y2="126" stroke="#78350F" strokeWidth="2" markerEnd="url(#arrow-amber)" />

            {/* Length Lb dimension */}
            <line x1="96" y1="194" x2="456" y2="194" stroke="#475569" strokeWidth="1.4" markerStart="url(#arrow-slate)" markerEnd="url(#arrow-slate)" />
            <rect x="206" y="183" width="140" height="18" fill="#FAFCFC" />
            <text x="276" y="197" textAnchor="middle" fontSize="12" fontWeight="600" fill="#0F292E">
              L_b = 1,5 m · M = 1,2 kg
            </text>

            {/* Rotation arrow around left pivot */}
            <path d="M 60 66 A 40 12 0 1 0 132 66" fill="none" stroke="#0D5C63" strokeWidth="2" markerEnd="url(#arrow-teal)" />
            <text x="152" y="68" fontSize="12" fontWeight="600" fill="#0D5C63">
              ω₁ = 4,0 rad/s → ω₂ = 6,0 rad/s
            </text>
            <text x="96" y="230" fontSize="11.5" fill="#334155">
              Balok kecil: m = 0,50 kg (ditarik internal tanpa torsi eksternal)
            </text>
          </svg>
        );
    }
  };

  return (
    <figure className="rounded-xl border border-[#D9E6E8] bg-white p-3">
      <div className="w-full overflow-hidden rounded-lg border border-[#EEF4F5]">
        {renderSvg()}
      </div>
      <figcaption className="mt-2 text-xs leading-relaxed text-[#48656A]">
        {caption}
      </figcaption>
    </figure>
  );
};
