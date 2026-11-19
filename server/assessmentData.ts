import type { ServerAnswerKey } from '../src/lib/gradingUtils';
import type { DetailedSolution } from '../src/types/quiz';

export const TEACHER_PASSWORD = process.env.TEACHER_PASSWORD || 'ABC';

export const SERVER_ANSWER_KEYS: ServerAnswerKey[] = [
  {
    questionId: 1,
    type: 'single_choice',
    maxScore: 10,
    correctOption: 'B',
    correctAnswerDisplay: 'B (10 kg·m²/s)',
  },
  {
    questionId: 2,
    type: 'single_choice',
    maxScore: 10,
    correctOption: 'B',
    correctAnswerDisplay: 'B (2,0 rad/s berlawanan arah jarum jam)',
  },
  {
    questionId: 3,
    type: 'complex_choice',
    maxScore: 10,
    correctOptions: ['A', 'C', 'E'],
    correctAnswerDisplay: 'A, C, E',
  },
  {
    questionId: 4,
    type: 'complex_choice',
    maxScore: 10,
    correctOptions: ['A', 'C', 'E'],
    correctAnswerDisplay: 'A, C, E',
  },
  {
    questionId: 5,
    type: 'true_false',
    maxScore: 10,
    correctBooleans: [true, false, true, false],
    correctAnswerDisplay: '(1) Benar · (2) Salah · (3) Benar · (4) Salah',
  },
  {
    questionId: 6,
    type: 'short_numeric',
    maxScore: 10,
    correctNumber: 5.6,
    tolerance: 0.05,
    correctAnswerDisplay: '5,6 kg·m²/s',
  },
  {
    questionId: 7,
    type: 'short_numeric',
    maxScore: 10,
    correctNumber: -2.8,
    tolerance: 0.05,
    correctAnswerDisplay: '-2,8 kg·m²/s',
  },
  {
    questionId: 8,
    type: 'short_numeric',
    maxScore: 10,
    correctNumber: 2000,
    tolerance: 5,
    correctAnswerDisplay: '2000 rad/s (2 × 10³ rad/s)',
  },
  {
    questionId: 9,
    type: 'short_numeric',
    maxScore: 10,
    correctNumber: 2,
    tolerance: 0.02,
    correctAnswerDisplay: '2 kg',
  },
  {
    questionId: 10,
    type: 'short_numeric',
    maxScore: 10,
    correctNumber: 0.6,
    tolerance: 0.02,
    correctAnswerDisplay: '0,6 m',
  },
];

export const DETAILED_SOLUTIONS: DetailedSolution[] = [
  {
    questionId: 1,
    correctAnswerDisplay: 'B — 10 kg·m²/s',
    solutionDiagramId: 'sol-q1',
    diagramExplanation:
      'Diagram memperlihatkan silinder pejal homogen berjari-jari $R = d/2 = 0{,}25\\text{ m}$ yang berotasi pada sumbu simetri pusatnya. Titik tepi luar bergerak dengan kecepatan tangensial $\\vec{v}$ yang tegak lurus terhadap jari-jari $R$, sehingga kecepatan sudutnya adalah $\\omega = v/R$, sedangkan gaya berat $m\\vec{g}$ dan gaya normal poros $\\vec{N}$ bekerja tepat pada sumbu rotasi sehingga tidak menghasilkan torsi.',
    understanding:
      'Sebuah roda gila berbentuk silinder pejal homogen bermassa $M = 8{,}0\\text{ kg}$ dan berdiameter $d = 0{,}50\\text{ m}$ berputar terhadap sumbu simetri pusatnya. Sensor optik di tepi silinder mengukur laju linear tangensial $v = 10\\text{ m/s}$. Kita diminta menentukan besar momentum sudut $L$ roda gila terhadap sumbu rotasi pusat tersebut.',
    theoreticalBasis:
      'Untuk benda tegar yang berotasi murni terhadap sumbu simetri tetap, momentum sudutnya dinyatakan oleh $$L = I\\omega$$ dengan $I$ adalah momen inersia terhadap sumbu rotasi dan $\\omega$ adalah kecepatan sudut. Untuk silinder pejal homogen yang berputar pada sumbu simetri pusatnya, momen inersia adalah $$I = \\frac{1}{2}MR^2$$ Hubungan antara laju tangensial di tepi ($r = R$) dan kecepatan sudut adalah $$v = \\omega R \\implies \\omega = \\frac{v}{R}$$',
    mathematicalSteps: [
      'Langkah 1 — Menentukan besaran yang diketahui: $M = 8{,}0\\text{ kg}$, $d = 0{,}50\\text{ m}$, dan $v = 10\\text{ m/s}$. Ditanyakan: momentum sudut $L$.',
      'Langkah 2 — Mengonversi diameter menjadi jari-jari: $R = \\frac{d}{2} = \\frac{0{,}50}{2} = 0{,}25\\text{ m}$.',
      'Langkah 3 — Menentukan kecepatan sudut rotasi: $\\omega = \\frac{v}{R} = \\frac{10}{0{,}25} = 40\\text{ rad/s}$.',
      'Langkah 4 — Menentukan momen inersia silinder pejal terhadap sumbu pusat: $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(8{,}0)(0{,}25)^2 = 4{,}0 \\times 0{,}0625 = 0{,}25\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 5 — Menerapkan persamaan momentum sudut benda tegar: $L = I\\omega$.',
      'Langkah 6 — Substitusi dan perhitungan: $L = (0{,}25\\text{ kg}\\cdot\\text{m}^2)(40\\text{ rad/s}) = 10\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 7 — Menetapkan hasil akhir beserta satuan SI: $L = 10\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ (Opsi B).',
    ],
    analysisAndInterpretation:
      'Nilai $10\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ menggambarkan ukuran kelembaman rotasi yang sedang dimiliki roda gila saat mempertahankan putarannya. Perhatikan dua jebakan konsep yang sering terjadi: menggunakan diameter $0{,}50\\text{ m}$ secara langsung sebagai jari-jari (menghasilkan $40\\text{ kg}\\cdot\\text{m}^2/\\text{s}$) atau melupakan faktor $\\frac{1}{2}$ pada momen inersia silinder pejal (menghasilkan $20\\text{ kg}\\cdot\\text{m}^2/\\text{s}$).',
    conclusion:
      'Besar momentum sudut roda gila terhadap sumbu rotasi pusatnya adalah $10\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, sehingga jawaban yang benar adalah B.',
    speechScript:
      'Pembahasan soal nomor 1 bersama MR Jo. Pertama, mari kita pahami permasalahannya: kita memiliki roda gila berbentuk silinder pejal homogen bermassa 8 kilogram dengan diameter 0 koma 50 meter dan laju tangensial tepi 10 meter per sekon. Hati-hati, soal memberikan diameter, bukan jari-jari! Langkah pertama dan kedua, kita ubah diameter menjadi jari-jari R sama dengan 0 koma 25 meter. Langkah ketiga, kecepatan sudut omega sama dengan v dibagi R, yaitu 10 dibagi 0 koma 25 sama dengan 40 radian per sekon. Langkah keempat, karena benda berbentuk silinder pejal yang berotasi pada sumbu pusatnya, momen inersia I sama dengan setengah M R kuadrat, yaitu setengah dikali 8 dikali 0 koma 25 kuadrat, menghasilkan momen inersia sebesar 0 koma 25 kilogram meter kuadrat. Langkah kelima dan keenam, momentum sudut L sama dengan momen inersia dikali omega, yaitu 0 koma 25 dikali 40 sama dengan 10 kilogram meter kuadrat per sekon. Jadi jawaban yang tepat adalah B.',
  },
  {
    questionId: 2,
    correctAnswerDisplay: 'B — 2,0 rad/s berlawanan arah jarum jam',
    solutionDiagramId: 'sol-q2',
    diagramExplanation:
      'Diagram menampilkan kondisi sebelum penggabungan (cakram A berputar berlawanan arah jarum jam dengan $\\omega_A > 0$, cakram B di atasnya berputar searah jarum jam dengan $\\omega_B < 0$ pada poros vertikal yang sama) serta kondisi sesudah bergabung sebagai satu sistem komposit dengan kecepatan sudut bersama $\\omega_{\\text{akhir}}$. Gaya normal dan gesekan kontak saat penyatuan bersifat internal antar-cakram sehingga $\\tau_{\\text{eksternal}} = 0$.',
    understanding:
      'Dua cakram pejal homogen A dan B berputar pada satu poros vertikal licin dengan arah putaran saling berlawanan, lalu bergabung hingga berputar bersama. Kita harus menentukan besar dan arah kecepatan sudut akhir sistem gabungan tersebut.',
    theoreticalBasis:
      'Karena gesekan poros diabaikan dan gaya gesek kontak antara cakram A dan B merupakan gaya internal yang berpasangan aksi-reaksi pada jarak radial yang sama, maka resultan torsi eksternal terhadap sumbu rotasi adalah nol ($\\Sigma\\tau_{\\text{eksternal}} = 0$). Akibatnya berlaku Hukum Kekekalan Momentum Sudut: $$\\Sigma L_{\\text{awal}} = \\Sigma L_{\\text{akhir}}$$ $$I_A\\omega_A + I_B\\omega_B = (I_A + I_B)\\omega_{\\text{akhir}}$$ Kita wajib menetapkan konvensi tanda konsisten: berlawanan arah jarum jam bernilai positif ($+$) dan searah jarum jam bernilai negatif ($-$). Momen inersia masing-masing cakram pejal terhadap sumbu pusat adalah $I = \\frac{1}{2}mR^2$.',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui & konvensi arah: $m_A = 4{,}0\\text{ kg}$, $R_A = 0{,}50\\text{ m}$, $\\omega_A = +18\\text{ rad/s}$ (berlawanan jarum jam); $m_B = 2{,}0\\text{ kg}$, $R_B = 1{,}0\\text{ m}$, $\\omega_B = -6{,}0\\text{ rad/s}$ (searah jarum jam). Ditanyakan: $\\omega_{\\text{akhir}}$ dan arahnya.',
      'Langkah 2 — Menghitung momen inersia masing-masing cakram: $I_A = \\frac{1}{2}(4{,}0)(0{,}50)^2 = 0{,}50\\text{ kg}\\cdot\\text{m}^2$ dan $I_B = \\frac{1}{2}(2{,}0)(1{,}0)^2 = 1{,}0\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 3 — Menghitung momentum sudut awal total: $L_A = I_A\\omega_A = 0{,}50(+18) = +9{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ dan $L_B = I_B\\omega_B = 1{,}0(-6{,}0) = -6{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, sehingga $\\Sigma L_{\\text{awal}} = 9{,}0 - 6{,}0 = +3{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 4 — Menghitung momen inersia gabungan: $I_{\\text{gab}} = I_A + I_B = 0{,}50 + 1{,}0 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 5 — Menerapkan Hukum Kekekalan Momentum Sudut: $\\Sigma L_{\\text{awal}} = I_{\\text{gab}}\\omega_{\\text{akhir}} \\implies +3{,}0 = 1{,}5\\,\\omega_{\\text{akhir}}$.',
      'Langkah 6 — Menyelesaikan nilai kecepatan sudut akhir: $\\omega_{\\text{akhir}} = \\frac{+3{,}0}{1{,}5} = +2{,}0\\text{ rad/s}$.',
      'Langkah 7 — Menafsirkan tanda positif: Karena hasilnya bertanda positif ($+$), arah putaran akhir adalah berlawanan arah jarum jam sebesar $2{,}0\\text{ rad/s}$ (Opsi B).',
    ],
    analysisAndInterpretation:
      'Meskipun cakram B memiliki momen inersia lebih besar ($1{,}0\\text{ kg}\\cdot\\text{m}^2$) daripada cakram A ($0{,}50\\text{ kg}\\cdot\\text{m}^2$), besar momentum sudut awal cakram A ($9{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$) lebih dominan daripada cakram B ($6{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$). Karena itu, sistem gabungan tetap berputar mengikuti arah cakram A (berlawanan jarum jam), namun dengan kelajuan yang jauh berkurang menjadi $2{,}0\\text{ rad/s}$.',
    conclusion:
      'Kecepatan sudut akhir sistem gabungan adalah $2{,}0\\text{ rad/s}$ berlawanan arah jarum jam, sehingga jawaban yang benar adalah B.',
    speechScript:
      'Pembahasan soal nomor 2. Pada kasus penggabungan dua cakram yang berputar berlawanan arah, kunci utamanya adalah konsistensi tanda positif dan negatif. Kita tetapkan putaran berlawanan jarum jam sebagai positif dan searah jarum jam sebagai negatif. Karena tidak ada torsi eksternal neto, berlaku hukum kekekalan momentum sudut. Pertama, kita hitung momen inersia cakram A sama dengan setengah kali 4 kali 0 koma 5 kuadrat sama dengan 0 koma 5 kilogram meter kuadrat. Momen inersia cakram B sama dengan setengah kali 2 kali 1 kuadrat sama dengan 1 koma 0 kilogram meter kuadrat. Berikutnya, momentum sudut awal A adalah plus 0 koma 5 kali 18 sama dengan plus 9 koma 0, sedangkan momentum sudut awal B adalah 1 koma 0 kali minus 6 sama dengan minus 6 koma 0. Momentum sudut total awal menjadi plus 9 dikurangi 6 sama dengan plus 3 koma 0 kilogram meter kuadrat per sekon. Momen inersia gabungan adalah 0 koma 5 ditambah 1 koma 0 sama dengan 1 koma 5. Maka omega akhir sama dengan plus 3 koma 0 dibagi 1 koma 5 sama dengan plus 2 koma 0 radian per sekon. Tanda positif menunjukkan arah berlawanan arah jarum jam. Jawabannya adalah B.',
  },
  {
    questionId: 3,
    correctAnswerDisplay: 'A, C, E',
    solutionDiagramId: 'sol-q3',
    diagramExplanation:
      'Diagram membandingkan konfigurasi awal atlet seluncur es saat kedua lengan direntangkan ($I_1 = 4{,}5\\text{ kg}\\cdot\\text{m}^2$, $\\omega_1 = 4{,}0\\text{ rad/s}$) dengan konfigurasi akhir saat kedua lengan dirapatkan ke poros tubuh ($I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$, $\\omega_2 = 12\\text{ rad/s}$). Gaya berat $m\\vec{g}$ dan gaya normal es $\\vec{N}$ sejajar dengan sumbu rotasi vertikal sehingga tidak menimbulkan torsi terhadap sumbu putar.',
    understanding:
      'Atlet seluncur es mengubah distribusi massa tubuhnya terhadap sumbu rotasi vertikal dari $I_1 = 4{,}5\\text{ kg}\\cdot\\text{m}^2$ menjadi $I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$ tanpa torsi eksternal. Kita diminta menguji lima pernyataan terkait momen inersia, kecepatan sudut, momentum sudut, dan energi kinetik rotasi.',
    theoreticalBasis:
      'Karena permukaan es licin dan seluruh gaya luar (berat dan gaya normal) bekerja sepanjang sumbu rotasi vertikal, maka $\\tau_{\\text{eksternal}} = 0$ dan berlaku Hukum Kekekalan Momentum Sudut: $$L_1 = L_2 \\implies I_1\\omega_1 = I_2\\omega_2$$ Namun, gaya otot saat menarik lengan ke dalam melakukan **usaha internal positif** ($W_{\\text{int}} > 0$), sehingga energi kinetik rotasi $$E_k = \\frac{1}{2}I\\omega^2 = \\frac{L^2}{2I}$$ **tidak kekal** dan justru bertambah ketika $I$ mengecil.',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: $I_1 = 4{,}5\\text{ kg}\\cdot\\text{m}^2$, $\\omega_1 = 4{,}0\\text{ rad/s}$, dan $I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 2 — Evaluasi Pernyataan A (Perbandingan $I$): $\\frac{I_2}{I_1} = \\frac{1{,}5}{4{,}5} = \\frac{1}{3}$. Penarikan lengan memperkecil jarak massa $r$ ke sumbu sehingga $I = \\sum m_i r_i^2$ turun menjadi sepertiganya. (Pernyataan A BENAR).',
      'Langkah 3 — Menentukan momentum sudut awal dan akhir: $L_1 = I_1\\omega_1 = 4{,}5 \\times 4{,}0 = 18\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. Karena $\\tau_{\\text{eksternal}} = 0$, maka $L_2 = L_1 = 18\\text{ kg}\\cdot\\text{m}^2/\\text{s}$, bukan $54\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. (Pernyataan B SALAH).',
      'Langkah 4 — Menghitung kecepatan sudut akhir: $\\omega_2 = \\frac{L_2}{I_2} = \\frac{18}{1{,}5} = 12\\text{ rad/s}$. (Pernyataan C BENAR).',
      'Langkah 5 — Menghitung energi kinetik rotasi awal dan akhir: $E_{k1} = \\frac{1}{2}I_1\\omega_1^2 = \\frac{1}{2}(4{,}5)(4{,}0)^2 = 36\\text{ J}$, sedangkan $E_{k2} = \\frac{1}{2}I_2\\omega_2^2 = \\frac{1}{2}(1{,}5)(12)^2 = 108\\text{ J}$. (Pernyataan D SALAH).',
      'Langkah 6 — Menghitung pertambahan energi kinetik rotasi: $\\Delta E_k = E_{k2} - E_{k1} = 108 - 36 = +72\\text{ J}$. (Pernyataan E BENAR).',
      'Langkah 7 — Menghimpun pilihan yang benar: A, C, dan E.',
    ],
    analysisAndInterpretation:
      'Kasus ini menegaskan perbedaan krusial antara momentum sudut dan energi kinetik rotasi. Momentum sudut kekal karena tidak ada torsi eksternal, tetapi energi kinetik rotasi bertambah $72\\text{ J}$ karena atlet harus mengerahkan gaya tarik sentripetal ke dalam melawan kecenderungan sentrifugal lengannya sepanjang perpindahan radial.',
    conclusion:
      'Pernyataan yang benar adalah A, C, dan E.',
    speechScript:
      'Pembahasan soal nomor 3, Pilihan Ganda Kompleks. Kita analisis kondisi atlet seluncur es. Momen inersia awal I 1 sama dengan 4 koma 5 dan akhir I 2 sama dengan 1 koma 5, sehingga momen inersia berkurang menjadi sepertiga nilai awal. Pernyataan A benar. Berikutnya, momentum sudut awal L 1 sama dengan 4 koma 5 dikali 4 sama dengan 18 kilogram meter kuadrat per sekon. Karena tidak ada torsi eksternal, momentum sudut kekal tetap 18, bukan 54. Jadi pernyataan B salah. Untuk kecepatan sudut akhir, omega 2 sama dengan L dibagi I 2, yaitu 18 dibagi 1 koma 5 sama dengan 12 radian per sekon. Pernyataan C benar. Sekarang cek energi kinetik rotasi: energi kinetik awal sama dengan setengah dikali 4 koma 5 dikali 4 kuadrat sama dengan 36 joule. Energi kinetik akhir sama dengan setengah dikali 1 koma 5 dikali 12 kuadrat sama dengan 108 joule. Jadi energi kinetik tidak kekal, melainkan bertambah sebesar 108 dikurangi 36 sama dengan 72 joule akibat usaha otot internal. Pernyataan D salah dan E benar. Pilihan tepat adalah A, C, dan E.',
  },
  {
    questionId: 4,
    correctAnswerDisplay: 'A, C, E',
    solutionDiagramId: 'sol-q4',
    diagramExplanation:
      'Diagram atas-ke-bawah memperlihatkan meja putar bermomen inersia tetap $I_c = 8{,}0\\text{ kg}\\cdot\\text{m}^2$ bersama partikel beban $m = 4{,}0\\text{ kg}$ yang berpindah secara radial dari $r_1 = 2{,}0\\text{ m}$ ke $r_2 = 1{,}0\\text{ m}$. Gaya penggeser bekerja tepat menuju poros sehingga lengan momen terhadap sumbu putar bernilai nol ($\\tau = 0$).',
    understanding:
      'Sistem komposit terdiri atas meja putar ($I_c = 8{,}0\\text{ kg}\\cdot\\text{m}^2$) dan beban titik ($m = 4{,}0\\text{ kg}$) yang bergeser dari $r_1 = 2{,}0\\text{ m}$ ke $r_2 = 1{,}0\\text{ m}$. Mula-mula $\\omega_1 = 3{,}0\\text{ rad/s}$. Kita harus mengevaluasi lima pernyataan dengan perhitungan matematis yang cermat.',
    theoreticalBasis:
      'Momen inersia sistem gabungan cakram dan partikel titik adalah $$I_{\\text{total}} = I_c + mr^2$$ Karena gaya penggeser bersifat radial dan internal terhadap sumbu rotasi ($\\tau_{\\text{eksternal}} = 0$), maka momentum sudut total sistem kekal: $$L_{\\text{awal}} = L_{\\text{akhir}} \\implies (I_c + mr_1^2)\\omega_1 = (I_c + mr_2^2)\\omega_2$$',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: $I_c = 8{,}0\\text{ kg}\\cdot\\text{m}^2$, $m = 4{,}0\\text{ kg}$, $r_1 = 2{,}0\\text{ m}$, $r_2 = 1{,}0\\text{ m}$, $\\omega_1 = 3{,}0\\text{ rad/s}$.',
      'Langkah 2 — Menghitung momen inersia awal dan akhir sistem: $I_1 = I_c + mr_1^2 = 8{,}0 + 4{,}0(2{,}0)^2 = 8{,}0 + 16{,}0 = 24\\text{ kg}\\cdot\\text{m}^2$, dan $I_2 = I_c + mr_2^2 = 8{,}0 + 4{,}0(1{,}0)^2 = 8{,}0 + 4{,}0 = 12\\text{ kg}\\cdot\\text{m}^2$. (Pernyataan A BENAR).',
      'Langkah 3 — Menghitung momentum sudut awal: $L_1 = I_1\\omega_1 = 24 \\times 3{,}0 = 72\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. Karena $\\tau_{\\text{eksternal}} = 0$, maka $L_2 = L_1 = 72\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. (Pernyataan C BENAR).',
      'Langkah 4 — Menghitung kecepatan sudut akhir: $\\omega_2 = \\frac{L_2}{I_2} = \\frac{72}{12} = 6{,}0\\text{ rad/s}$. Perhatikan bahwa $\\omega_2$ menjadi $6{,}0\\text{ rad/s}$, bukan $12\\text{ rad/s}$ (kesalahan mengabaikan $I_c$ dari meja putar). (Pernyataan B SALAH, Pernyataan E BENAR).',
      'Langkah 5 — Menguji laju tangensial beban dan energi kinetik total: $v_1 = \\omega_1 r_1 = 3{,}0 \\times 2{,}0 = 6{,}0\\text{ m/s}$ dan $v_2 = \\omega_2 r_2 = 6{,}0 \\times 1{,}0 = 6{,}0\\text{ m/s}$ (energi kinetik beban saja kebetulan tetap $72\\text{ J}$). Namun, energi kinetik rotasi meja putar meningkat dari $\\frac{1}{2}(8)(3)^2 = 36\\text{ J}$ menjadi $\\frac{1}{2}(8)(6)^2 = 144\\text{ J}$, sehingga energi kinetik total sistem naik dari $108\\text{ J}$ menjadi $216\\text{ J}$!',
      'Langkah 6 — Kesimpulan untuk Pernyataan D: Pernyataan D menyimpulkan energi kinetik total sistem tidak berubah, sehingga Pernyataan D SALAH.',
      'Langkah 7 — Menghimpun opsi benar: A, C, dan E.',
    ],
    analysisAndInterpretation:
      'Soal ini menguji apakah murid memahami bahwa benda komposit memiliki suku momen inersia konstan $I_c$ selain suku $mr^2$, serta mencegah kekeliruan menyimpulkan energi kinetik sistem hanya dari kelajuan satu partikel sementara meja putar ikut berputar lebih cepat.',
    conclusion:
      'Pernyataan yang benar adalah A, C, dan E.',
    speechScript:
      'Pembahasan soal nomor 4. Kita hitung momen inersia sistem total yang terdiri dari meja putar ditambah beban titik. Momen inersia awal I 1 sama dengan I c ditambah m r 1 kuadrat, yaitu 8 ditambah 4 dikali 2 kuadrat sama dengan 24 kilogram meter kuadrat. Setelah beban digeser ke r 2 sama dengan 1 meter, momen inersia akhir I 2 sama dengan 8 ditambah 4 dikali 1 kuadrat sama dengan 12 kilogram meter kuadrat. Jadi pernyataan A benar. Momentum sudut total awal L sama dengan 24 dikali 3 sama dengan 72 kilogram meter kuadrat per sekon, dan nilainya kekal. Maka pernyataan C benar. Kecepatan sudut akhir omega 2 sama dengan 72 dibagi 12 sama dengan 6 koma 0 radian per sekon, bukan 12 radian per sekon, sehingga pernyataan B salah dan E benar. Terakhir, meskipun laju tangensial beban tetap 6 meter per sekon, meja putar berotasi dua kali lebih cepat sehingga energi kinetik total sistem meningkat dari 108 joule menjadi 216 joule. Maka pernyataan D salah. Jawaban yang benar adalah A, C, dan E.',
  },
  {
    questionId: 5,
    correctAnswerDisplay: '(1) Benar · (2) Salah · (3) Benar · (4) Salah',
    solutionDiagramId: 'sol-q5',
    diagramExplanation:
      'Diagram menunjukkan batang homogen berporos di pusat ($I_{\\text{batang}} = \\frac{1}{12}M_b L_b^2$) beserta dua bola simetris yang berpindah dari $r_1 = 0{,}50\\text{ m}$ menuju kedua ujung batang $r_2 = 1{,}0\\text{ m}$. Gaya penahan maupun penguncian di ujung batang bekerja secara radial terhadap sumbu poros sehingga $\\tau_{\\text{eksternal}} = 0$.',
    understanding:
      'Batang homogen ($M_b = 3{,}0\\text{ kg}$, $L_b = 2{,}0\\text{ m}$) berotasi pada poros pusatnya dengan dua bola simetris ($m = 0{,}50\\text{ kg}$ masing-masing) yang berpindah dari $r_1 = 0{,}50\\text{ m}$ ke ujung batang $r_2 = 1{,}0\\text{ m}$. Kecepatan sudut awal $\\omega_1 = 5{,}0\\text{ rad/s}$. Kita menilai 4 pernyataan Benar/Salah.',
    theoreticalBasis:
      'Momen inersia batang homogen yang berputar melalui **pusat massa** (tegak lurus panjang batang) adalah $$I_{\\text{batang}} = \\frac{1}{12}M_b L_b^2$$ Momen inersia total sistem dengan dua bola simetris adalah $$I = I_{\\text{batang}} + 2mr^2$$ Karena poros licin dan tidak ada torsi eksternal, maka $$L_1 = L_2 \\implies I_1\\omega_1 = I_2\\omega_2$$',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: $M_b = 3{,}0\\text{ kg}$, $L_b = 2{,}0\\text{ m}$, $m = 0{,}50\\text{ kg}$ (2 buah), $r_1 = 0{,}50\\text{ m}$, $r_2 = 1{,}0\\text{ m}$, $\\omega_1 = 5{,}0\\text{ rad/s}$.',
      'Langkah 2 — Menghitung momen inersia batang terhadap pusat: $I_{\\text{batang}} = \\frac{1}{12}(3{,}0)(2{,}0)^2 = \\frac{12}{12} = 1{,}0\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 3 — Menghitung momen inersia awal dan momentum sudut awal: $I_1 = 1{,}0 + 2(0{,}50)(0{,}50)^2 = 1{,}0 + 0{,}25 = 1{,}25\\text{ kg}\\cdot\\text{m}^2$. Maka $L_1 = I_1\\omega_1 = 1{,}25 \\times 5{,}0 = 6{,}25\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. (Pernyataan 1: BENAR).',
      'Langkah 4 — Menguji kekekalan momentum sudut: Karena $\\tau_{\\text{eksternal}} = 0$, momentum sudut total sistem **tidak berkurang**, melainkan tetap $6{,}25\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. (Pernyataan 2: SALAH).',
      'Langkah 5 — Menghitung momen inersia akhir saat kedua bola di ujung batang ($r_2 = 1{,}0\\text{ m}$): $I_2 = 1{,}0 + 2(0{,}50)(1{,}0)^2 = 1{,}0 + 1{,}0 = 2{,}0\\text{ kg}\\cdot\\text{m}^2$. Karena $I$ membesar dari $1{,}25$ ke $2{,}0\\text{ kg}\\cdot\\text{m}^2$ sementara $L$ tetap, maka $\\omega$ menurun. (Pernyataan 3: BENAR).',
      'Langkah 6 — Menghitung kecepatan sudut akhir: $\\omega_2 = \\frac{L_1}{I_2} = \\frac{6{,}25}{2{,}0} = 3{,}125\\text{ rad/s}$, bukan $4{,}0\\text{ rad/s}$. (Pernyataan 4: SALAH).',
      'Langkah 7 — Rangkuman nilai kebenaran: (1) Benar, (2) Salah, (3) Benar, (4) Salah.',
    ],
    analysisAndInterpretation:
      'Perhatikan bahwa meskipun kecepatan sudut turun dari $5{,}0\\text{ rad/s}$ menjadi $3{,}125\\text{ rad/s}$, momentum sudut total tetap konstan sebesar $6{,}25\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ karena peningkatan momen inersia mengompensasi penurunan kecepatan sudut secara tepat.',
    conclusion:
      'Kunci pernyataan secara berurutan adalah: (1) Benar, (2) Salah, (3) Benar, (4) Salah.',
    speechScript:
      'Pembahasan soal nomor 5, Benar atau Salah. Batang homogen berporos di pusat memiliki momen inersia sepertigabelas atau tepatnya seperduabelas M L kuadrat, yaitu seperduabelas dikali 3 dikali 2 kuadrat sama dengan 1 koma 0 kilogram meter kuadrat. Ditambah dua bola di jarak 0 koma 5 meter, momen inersia awal adalah 1 koma 0 ditambah 2 kali 0 koma 5 kali 0 koma 25 sama dengan 1 koma 25 kilogram meter kuadrat. Sehingga momentum sudut awal L 1 adalah 1 koma 25 dikali 5 sama dengan 6 koma 25 kilogram meter kuadrat per sekon. Maka pernyataan pertama Benar. Karena tidak ada torsi eksternal, momentum sudut sistem tetap 6 koma 25, tidak ikut berkurang, sehingga pernyataan kedua Salah. Saat bola terkunci di ujung batang pada jarak 1 meter, momen inersia naik menjadi 1 koma 0 ditambah 2 kali 0 koma 5 kali 1 kuadrat sama dengan 2 koma 0 kilogram meter kuadrat, menyebabkan kecepatan sudut menurun. Jadi pernyataan ketiga Benar. Kecepatan sudut akhirnya adalah 6 koma 25 dibagi 2 koma 0 sama dengan 3 koma 125 radian per sekon, bukan 4 koma 0. Oleh karena itu pernyataan keempat Salah.',
  },
  {
    questionId: 6,
    correctAnswerDisplay: '5,6 kg·m²/s',
    solutionDiagramId: 'sol-q6',
    diagramExplanation:
      'Diagram memperlihatkan bola pejal menggelinding ke kanan di lantai datar dengan kecepatan pusat massa $\\vec{v}_{\\text{CM}}$ dan kecepatan sudut $\\vec{\\omega}$ searah jarum jam. Vektor posisi pusat massa dari titik kontak $P$ di lantai adalah $\\vec{r}_{\\text{CM}}$ tegak lurus ke atas sepanjang $R$, sehingga kontribusi translasi $\\vec{r}_{\\text{CM}} \\times M\\vec{v}_{\\text{CM}}$ dan rotasi internal $I_{\\text{CM}}\\vec{\\omega}$ sama-sama mengarah masuk ke bidang gambar (searah jarum jam).',
    understanding:
      'Sebuah bola pejal homogen ($M = 5{,}0\\text{ kg}$, $R = 0{,}20\\text{ m}$) menggelinding tanpa slip dengan kelajuan pusat massa $v_{\\text{CM}} = 4{,}0\\text{ m/s}$. Acuan yang diminta adalah **titik sentuh $P$ di lantai**, bukan pusat massa bola.',
    theoreticalBasis:
      'Untuk benda tegar yang menggelinding terhadap titik acuan $O$ di luar pusat massa, momentum sudut total merupakan penjumlahan vektor dari momentum sudut gerak translasi pusat massa terhadap $O$ dan momentum sudut rotasi terhadap pusat massa: $$\\vec{L}_P = \\vec{r}_{\\text{CM}} \\times M\\vec{v}_{\\text{CM}} + I_{\\text{CM}}\\vec{\\omega}$$ Karena bola menggelinding ke kanan tanpa tergelincir, sudut antara $\\vec{r}_{\\text{CM}}$ (ke atas) dan $\\vec{v}_{\\text{CM}}$ (ke kanan) adalah $90^\\circ$ dengan arah hasil kali silang masuk bidang (sama dengan arah $\\vec{\\omega}$ searah jarum jam), dan berlaku $\\omega = v_{\\text{CM}}/R$. Untuk bola pejal, $I_{\\text{CM}} = \\frac{2}{5}MR^2$.',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: $M = 5{,}0\\text{ kg}$, $R = 0{,}20\\text{ m}$, $v_{\\text{CM}} = 4{,}0\\text{ m/s}$, menggelinding murni terhadap titik kontak $P$.',
      'Langkah 2 — Menghitung momen inersia pusat massa bola pejal: $I_{\\text{CM}} = \\frac{2}{5}MR^2 = \\frac{2}{5}(5{,}0)(0{,}20)^2 = 2{,}0 \\times 0{,}04 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 3 — Menghitung kecepatan sudut dari syarat tanpa slip: $\\omega = \\frac{v_{\\text{CM}}}{R} = \\frac{4{,}0}{0{,}20} = 20\\text{ rad/s}$.',
      'Langkah 4 — Menghitung momentum sudut rotasi terhadap pusat massa: $L_{\\text{rot}} = I_{\\text{CM}}\\omega = 0{,}08 \\times 20 = 1{,}6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 5 — Menghitung kontribusi momentum sudut translasi pusat massa terhadap $P$: $L_{\\text{trans}} = Mv_{\\text{CM}}R\\sin 90^\\circ = (5{,}0)(4{,}0)(0{,}20) = 4{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 6 — Menjumlahkan kedua kontribusi yang searah: $L_P = L_{\\text{trans}} + L_{\\text{rot}} = 4{,}0 + 1{,}6 = 5{,}6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. (Dapat diperiksa pula dengan sumbu sesaat di $P$: $I_P = \\frac{7}{5}MR^2 = 0{,}28\\text{ kg}\\cdot\\text{m}^2 \\implies L_P = 0{,}28 \\times 20 = 5{,}6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$).',
      'Langkah 7 — Hasil akhir: $L_P = 5{,}6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ (isian: `5.6`).',
    ],
    analysisAndInterpretation:
      'Kesalahan paling umum pada soal benda menggelinding adalah hanya menghitung $I_{\\text{CM}}\\omega = 1{,}6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ dan melupakan suku translasi $Mv_{\\text{CM}}R = 4{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$. Padahal karena titik acuan berada di lantai ($P$), gerak pusat massa menyumbang hampir 71% dari momentum sudut total terhadap $P$.',
    conclusion:
      'Besar momentum sudut total bola pejal terhadap titik sentuh $P$ adalah $5{,}6\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ (jawaban numerik: `5.6`).',
    speechScript:
      'Pembahasan soal nomor 6. Untuk benda yang menggelinding terhadap titik sentuh P di lantai, kita tidak boleh hanya menghitung momentum sudut rotasi terhadap pusat massa. Momentum sudut terhadap P adalah jumlah kontribusi translasi M kali v CM kali R ditambah rotasi internal I CM kali omega. Pertama, momen inersia pusat massa bola pejal adalah dua per lima M R kuadrat, yaitu dua per lima dikali 5 dikali 0 koma 2 kuadrat sama dengan 0 koma 08 kilogram meter kuadrat. Kedua, karena menggelinding tanpa selip, omega sama dengan v dibagi R, yaitu 4 dibagi 0 koma 2 sama dengan 20 radian per sekon. Jadi momentum sudut rotasi internal adalah 0 koma 08 dikali 20 sama dengan 1 koma 6. Sementara itu, kontribusi translasi terhadap titik P adalah M kali v CM kali R, yaitu 5 dikali 4 dikali 0 koma 2 sama dengan 4 koma 0. Karena keduanya searah, momentum sudut total terhadap P adalah 4 koma 0 ditambah 1 koma 6 sama dengan 5 koma 6 kilogram meter kuadrat per sekon.',
  },
  {
    questionId: 7,
    correctAnswerDisplay: '-2,8 kg·m²/s',
    solutionDiagramId: 'sol-q7',
    diagramExplanation:
      'Diagram menggambarkan cincin tipis ($m_1 = 3{,}0\\text{ kg}$, $R_1 = 0{,}40\\text{ m}$) berputar berlawanan arah jarum jam ($\\omega_1 = +15\\text{ rad/s}$) dan cakram pejal ($m_2 = 4{,}0\\text{ kg}$, $R_2 = 0{,}50\\text{ m}$) berputar searah jarum jam ($\\omega_2 = -20\\text{ rad/s}$) pada sumbu vertikal bersama.',
    understanding:
      'Dua benda tegar berbeda bentuk (cincin tipis dan cakram pejal) berputar pada sumbu vertikal yang sama dengan arah berlawanan. Kita diminta menentukan momentum sudut total sistem lengkap dengan tanda positif/negatif arahnya.',
    theoreticalBasis:
      'Momentum sudut total sistem yang terdiri atas beberapa benda pada sumbu rotasi yang sama adalah penjumlahan aljabar momentum sudut tiap benda dengan memperhatikan tanda arah putaran: $$L_{\\text{total}} = L_1 + L_2 = I_1\\omega_1 + I_2\\omega_2$$ Momen inersia cincin tipis terhadap sumbu pusat adalah $I_{\\text{cincin}} = m_1 R_1^2$, sedangkan cakram pejal adalah $I_{\\text{cakram}} = \\frac{1}{2}m_2 R_2^2$.',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: Cincin ($m_1 = 3{,}0\\text{ kg}, R_1 = 0{,}40\\text{ m}, \\omega_1 = +15\\text{ rad/s}$); Cakram ($m_2 = 4{,}0\\text{ kg}, R_2 = 0{,}50\\text{ m}, \\omega_2 = -20\\text{ rad/s}$).',
      'Langkah 2 — Menghitung momen inersia masing-masing benda: $I_1 = m_1 R_1^2 = 3{,}0(0{,}40)^2 = 3{,}0 \\times 0{,}16 = 0{,}48\\text{ kg}\\cdot\\text{m}^2$, dan $I_2 = \\frac{1}{2}m_2 R_2^2 = \\frac{1}{2}(4{,}0)(0{,}50)^2 = 2{,}0 \\times 0{,}25 = 0{,}50\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 3 — Menghitung momentum sudut benda 1: $L_1 = I_1\\omega_1 = 0{,}48 \\times (+15) = +7{,}2\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 4 — Menghitung momentum sudut benda 2: $L_2 = I_2\\omega_2 = 0{,}50 \\times (-20) = -10{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 5 — Menjumlahkan secara vektor/aljabar pada sumbu yang sama: $L_{\\text{total}} = L_1 + L_2 = +7{,}2 + (-10{,}0)$.',
      'Langkah 6 — Hasil perhitungan: $L_{\\text{total}} = -2{,}8\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 7 — Kesimpulan angka akhir: `-2.8` (tanda negatif bermakna momentum sudut neto berarah searah jarum jam).',
    ],
    analysisAndInterpretation:
      'Cincin tipis tidak memiliki faktor $\\frac{1}{2}$ karena seluruh massanya berada pada jarak $R_1$ dari sumbu. Meskipun $m_1 < m_2$ dan $R_1 < R_2$, momen inersia cincin hampir menyamai momen inersia cakram. Namun karena laju sudut cakram lebih besar, komponen negatif mendominasi sehingga momentum sudut total bernilai $-2{,}8\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
    conclusion:
      'Momentum sudut total sistem adalah $-2{,}8\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ (jawaban numerik: `-2.8`).',
    speechScript:
      'Pembahasan soal nomor 7. Sistem memiliki dua benda seporos dengan bentuk berbeda. Benda pertama cincin tipis memiliki momen inersia I 1 sama dengan m 1 R 1 kuadrat tanpa faktor setengah, yaitu 3 dikali 0 koma 4 kuadrat sama dengan 0 koma 48 kilogram meter kuadrat. Momentum sudutnya L 1 sama dengan 0 koma 48 dikali plus 15 sama dengan plus 7 koma 2 kilogram meter kuadrat per sekon. Benda kedua cakram pejal memiliki momen inersia I 2 sama dengan setengah m 2 R 2 kuadrat, yaitu setengah dikali 4 dikali 0 koma 5 kuadrat sama dengan 0 koma 50 kilogram meter kuadrat. Karena berputar searah jarum jam, omega 2 bertanda negatif, sehingga L 2 sama dengan 0 koma 50 dikali minus 20 sama dengan minus 10 koma 0. Momentum sudut totalnya adalah plus 7 koma 2 ditambah minus 10 koma 0 sama dengan minus 2 koma 8 kilogram meter kuadrat per sekon.',
  },
  {
    questionId: 8,
    correctAnswerDisplay: '2000 rad/s (2 × 10³ rad/s)',
    solutionDiagramId: 'sol-q8',
    diagramExplanation:
      'Diagram membandingkan bola pejal inti bintang berjari-jari besar $R_1 = 2{,}0 \\times 10^6\\text{ m}$ dengan bola pejal bintang neutron yang menyusut jauh menjadi $R_2 = 1{,}0 \\times 10^4\\text{ m}$. Gaya gravitasi bekerja secara radial menuju pusat bola sehingga $\\tau_{\\text{eksternal}} = 0$.',
    understanding:
      'Sebuah bola pejal homogen (model inti bintang) menyusut dari jari-jari $R_1 = 2{,}0 \\times 10^6\\text{ m}$ menjadi $R_2 = 1{,}0 \\times 10^4\\text{ m}$ dengan massa konstan dan tanpa torsi eksternal. Diketahui $\\omega_1 = 0{,}05\\text{ rad/s}$, kita diminta menentukan kecepatan sudut akhir $\\omega_2$.',
    theoreticalBasis:
      'Gaya gravitasi yang menyebabkan keruntuhan merupakan gaya internal radial sehingga tidak menghasilkan torsi eksternal terhadap sumbu rotasi ($\\tau_{\\text{eksternal}} = 0$). Dengan demikian berlaku Hukum Kekekalan Momentum Sudut: $$I_1\\omega_1 = I_2\\omega_2$$ Untuk bola pejal homogen, $I = \\frac{2}{5}MR^2$. Karena massa $M$ tetap, maka faktor $\\frac{2}{5}M$ saling meniadakan.',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: $R_1 = 2{,}0 \\times 10^6\\text{ m}$, $R_2 = 1{,}0 \\times 10^4\\text{ m}$, $\\omega_1 = 0{,}05\\text{ rad/s}$, dan $M_1 = M_2 = M$.',
      'Langkah 2 — Menuliskan perbandingan momen inersia: $I_1 = \\frac{2}{5}MR_1^2$ dan $I_2 = \\frac{2}{5}MR_2^2$.',
      'Langkah 3 — Menerapkan kekekalan momentum sudut: $\\frac{2}{5}MR_1^2\\omega_1 = \\frac{2}{5}MR_2^2\\omega_2$.',
      'Langkah 4 — Menyederhanakan persamaan untuk $\\omega_2$: $\\omega_2 = \\omega_1 \\left(\\frac{R_1}{R_2}\\right)^2$.',
      'Langkah 5 — Menghitung rasio jari-jari: $\\frac{R_1}{R_2} = \\frac{2{,}0 \\times 10^6}{1{,}0 \\times 10^4} = 200$.',
      'Langkah 6 — Substitusi angka: $\\omega_2 = 0{,}05 \\times (200)^2 = 0{,}05 \\times 40\\,000 = 2000\\text{ rad/s}$.',
      'Langkah 7 — Hasil akhir dalam satuan SI: $2000\\text{ rad/s}$ atau $2{,}0 \\times 10^3\\text{ rad/s}$ (isian: `2000` atau `2e3`).',
    ],
    analysisAndInterpretation:
      'Penyusutan jari-jari sebesar $200$ kali menyebabkan momen inersia mengecil sebesar $200^2 = 40\\,000$ kali lipat! Akibatnya kecepatan sudut meningkat $40\\,000$ kali lipat dari $0{,}05\\text{ rad/s}$ menjadi $2000\\text{ rad/s}$ (sekitar 318 putaran tiap detik). Ini menjelaskan fenomena nyata pulsar (bintang neutron yang berotasi sangat cepat).',
    conclusion:
      'Kecepatan sudut akhir bintang neutron tersebut adalah $2000\\text{ rad/s}$ (jawaban numerik: `2000` atau `2e3`).',
    speechScript:
      'Pembahasan soal nomor 8 tentang keruntuhan bintang menjadi bintang neutron. Karena gaya gravitasi bersifat radial internal, tidak ada torsi eksternal neto sehingga berlaku kekekalan momentum sudut: I 1 omega 1 sama dengan I 2 omega 2. Baik inti bintang awal maupun bintang neutron akhir dimodelkan sebagai bola pejal dengan momen inersia dua per lima M R kuadrat. Karena massa tetap, suku dua per lima M saling meniadakan, sehingga omega 2 sama dengan omega 1 dikali kuadrat perbandingan R 1 per R 2. Perbandingan R 1 per R 2 adalah 2 koma 0 kali 10 pangkat 6 dibagi 1 koma 0 kali 10 pangkat 4, menghasilkan 200. Dikuadratkan menjadi 40 ribu. Maka omega 2 sama dengan 0 koma 05 dikali 40 ribu sama dengan 2000 radian per sekon, atau 2e3 dalam notasi ilmiah.',
  },
  {
    questionId: 9,
    correctAnswerDisplay: '2 kg',
    solutionDiagramId: 'sol-q9',
    diagramExplanation:
      'Diagram menunjukkan cakram pejal homogen ($M = 6{,}0\\text{ kg}$, $R = 0{,}50\\text{ m}$, $\\omega_1 = +10\\text{ rad/s}$) di bawah cincin tipis berjari-jari sama ($m$, $R = 0{,}50\\text{ m}$, $\\omega_2 = -5{,}0\\text{ rad/s}$) sebelum bergabung, dan sistem gabungan berputar bersama pada $\\omega_{\\text{akhir}} = +4{,}0\\text{ rad/s}$.',
    understanding:
      'Cakram pejal ($M = 6{,}0\\text{ kg}$, $R = 0{,}50\\text{ m}$, $\\omega_1 = +10\\text{ rad/s}$) bergabung secara koaksial dengan cincin tipis berjari-jari sama ($R = 0{,}50\\text{ m}$, $\\omega_2 = -5{,}0\\text{ rad/s}$) hingga berputar bersama pada $\\omega_{\\text{akhir}} = +4{,}0\\text{ rad/s}$. Kita diminta menentukan massa cincin tipis $m$.',
    theoreticalBasis:
      'Tanpa torsi eksternal neto terhadap sumbu vertikal, momentum sudut total sistem sebelum dan sesudah penggabungan adalah kekal: $$I_{\\text{cakram}}\\omega_1 + I_{\\text{cincin}}\\omega_2 = (I_{\\text{cakram}} + I_{\\text{cincin}})\\omega_{\\text{akhir}}$$ dengan $I_{\\text{cakram}} = \\frac{1}{2}MR^2$ dan $I_{\\text{cincin}} = mR^2$. Konvensi tanda ($+$ berlawanan jarum jam, $-$ searah jarum jam) wajib diterapkan pada $\\omega_1$, $\\omega_2$, dan $\\omega_{\\text{akhir}}$.',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: $M = 6{,}0\\text{ kg}$, $R = 0{,}50\\text{ m}$, $\\omega_1 = +10\\text{ rad/s}$, $\\omega_2 = -5{,}0\\text{ rad/s}$, $\\omega_{\\text{akhir}} = +4{,}0\\text{ rad/s}$. Ditanyakan: massa cincin $m$.',
      'Langkah 2 — Menghitung momen inersia cakram dan memodelkan momen inersia cincin: $I_{\\text{cakram}} = \\frac{1}{2}(6{,}0)(0{,}50)^2 = 0{,}75\\text{ kg}\\cdot\\text{m}^2$, dan $I_{\\text{cincin}} = m(0{,}50)^2 = 0{,}25m\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 3 — Menentukan momentum sudut awal masing-masing: $L_1 = 0{,}75(+10) = +7{,}5\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ dan $L_2 = (0{,}25m)(-5{,}0) = -1{,}25m\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 4 — Menerapkan Hukum Kekekalan Momentum Sudut: $7{,}5 - 1{,}25m = (0{,}75 + 0{,}25m)(4{,}0)$.',
      'Langkah 5 — Menguraikan ruas kanan: $7{,}5 - 1{,}25m = 3{,}0 + 1{,}0m$.',
      'Langkah 6 — Mengelompokkan suku $m$: $7{,}5 - 3{,}0 = 1{,}0m + 1{,}25m \\implies 4{,}5 = 2{,}25m \\implies m = \\frac{4{,}5}{2{,}25} = 2{,}0\\text{ kg}$.',
      'Langkah 7 — Verifikasi & hasil akhir: Dengan $m = 2\\text{ kg}$, $L_{\\text{awal}} = 7{,}5 - 2{,}5 = +5{,}0$ dan $L_{\\text{akhir}} = (0{,}75 + 0{,}50)(4) = +5{,}0$. Massa cincin adalah $2\\text{ kg}$ (isian: `2`).',
    ],
    analysisAndInterpretation:
      'Cincin yang berputar berlawanan arah menyerap sebagian momentum sudut cakram agar berbalik arah menjadi $+4{,}0\\text{ rad/s}$. Perubahan kecepatan sudut cincin sangat besar ($\\Delta\\omega_2 = +9{,}0\\text{ rad/s}$) dibanding cakram ($\\Delta\\omega_1 = -6{,}0\\text{ rad/s}$), sesuai dengan momen inersia cincin ($0{,}50\\text{ kg}\\cdot\\text{m}^2$) yang lebih kecil dari cakram ($0{,}75\\text{ kg}\\cdot\\text{m}^2$).',
    conclusion:
      'Massa cincin tipis tersebut adalah $2\\text{ kg}$ (jawaban numerik: `2`).',
    speechScript:
      'Pembahasan soal nomor 9. Pertama kita tentukan momen inersia cakram pejal: setengah dikali 6 dikali 0 koma 5 kuadrat sama dengan 0 koma 75 kilogram meter kuadrat. Untuk cincin tipis bermassa m, momen inersianya adalah m R kuadrat, yaitu 0 koma 25 m. Dengan hukum kekekalan momentum sudut, momentum sudut awal total adalah 0 koma 75 dikali plus 10 ditambah 0 koma 25 m dikali minus 5, sama dengan 7 koma 5 dikurangi 1 koma 25 m. Setelah menyatu, momen inersia gabungan menjadi 0 koma 75 ditambah 0 koma 25 m, dan berputar dengan omega akhir plus 4 koma 0. Maka ruas kanan sama dengan 3 koma 0 ditambah 1 koma 0 m. Menyamakan kedua ruas: 7 koma 5 dikurangi 3 koma 0 sama dengan 1 koma 0 m ditambah 1 koma 25 m, sehingga 4 koma 5 sama dengan 2 koma 25 m. Diperoleh massa cincin m sama dengan 2 kilogram.',
  },
  {
    questionId: 10,
    correctAnswerDisplay: '0,6 m',
    solutionDiagramId: 'sol-q10',
    diagramExplanation:
      'Diagram menunjukkan batang homogen bermassa $M = 1{,}2\\text{ kg}$ dan panjang $L_b = 1{,}5\\text{ m}$ yang berporos di **ujung kiri** ($I_{\\text{batang}} = \\frac{1}{3}ML_b^2$), serta balok titik bermassa $m = 0{,}50\\text{ kg}$ yang ditarik mendekat dari $r_1 = 1{,}20\\text{ m}$ ke posisi akhir $r_2 = 0{,}60\\text{ m}$.',
    understanding:
      'Batang homogen ($M = 1{,}2\\text{ kg}$, $L_b = 1{,}5\\text{ m}$) berotasi pada poros vertikal yang melalui **salah satu ujungnya**. Balok titik ($m = 0{,}50\\text{ kg}$) ditarik secara internal dari jarak $r_1 = 1{,}20\\text{ m}$ menuju jarak $r_2$, menyebabkan kecepatan sudut naik dari $\\omega_1 = 4{,}0\\text{ rad/s}$ menjadi $\\omega_2 = 6{,}0\\text{ rad/s}$. Kita harus menentukan $r_2$.',
    theoreticalBasis:
      'Karena sumbu putar berada pada **ujung batang** (bukan pusat batang), momen inersia batang homogen adalah $$I_{\\text{batang,ujung}} = \\frac{1}{3}ML_b^2$$ Momen inersia total sistem adalah $I = I_{\\text{batang,ujung}} + mr^2$. Karena gaya tarik bekerja secara radial di sepanjang batang tanpa torsi eksternal neto, berlaku Hukum Kekekalan Momentum Sudut: $$I_1\\omega_1 = I_2\\omega_2$$',
    mathematicalSteps: [
      'Langkah 1 — Data diketahui: $M = 1{,}2\\text{ kg}$, $L_b = 1{,}5\\text{ m}$, $m = 0{,}50\\text{ kg}$, $r_1 = 1{,}20\\text{ m}$, $\\omega_1 = 4{,}0\\text{ rad/s}$, $\\omega_2 = 6{,}0\\text{ rad/s}$. Ditanyakan: $r_2$.',
      'Langkah 2 — Menghitung momen inersia batang terhadap ujungnya: $I_{\\text{batang}} = \\frac{1}{3}(1{,}2)(1{,}5)^2 = 0{,}40 \\times 2{,}25 = 0{,}90\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 3 — Menghitung momen inersia total awal dan momentum sudut awal: $I_1 = 0{,}90 + 0{,}50(1{,}20)^2 = 0{,}90 + 0{,}50(1{,}44) = 0{,}90 + 0{,}72 = 1{,}62\\text{ kg}\\cdot\\text{m}^2$, sehingga $L_{\\text{awal}} = I_1\\omega_1 = 1{,}62 \\times 4{,}0 = 6{,}48\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      'Langkah 4 — Menerapkan Hukum Kekekalan Momentum Sudut untuk menentukan momen inersia akhir $I_2$: $I_2 = \\frac{L_{\\text{awal}}}{\\omega_2} = \\frac{6{,}48}{6{,}0} = 1{,}08\\text{ kg}\\cdot\\text{m}^2$.',
      'Langkah 5 — Menghubungkan $I_2$ dengan posisi akhir $r_2$: $I_2 = I_{\\text{batang}} + mr_2^2 \\implies 1{,}08 = 0{,}90 + 0{,}50\\,r_2^2$.',
      'Langkah 6 — Menyelesaikan $r_2$: $0{,}50\\,r_2^2 = 1{,}08 - 0{,}90 = 0{,}18 \\implies r_2^2 = \\frac{0{,}18}{0{,}50} = 0{,}36 \\implies r_2 = \\sqrt{0{,}36} = 0{,}60\\text{ m}$.',
      'Langkah 7 — Menetapkan hasil akhir: jarak akhir balok dari poros adalah $0{,}6\\text{ m}$ (isian: `0.6`).',
    ],
    analysisAndInterpretation:
      'Hasil $r_2 = 0{,}60\\text{ m}$ masuk akal secara fisis karena lebih kecil dari $r_1 = 1{,}20\\text{ m}$ (balok memang bergerak mendekati poros sehingga momen inersia turun dari $1{,}62$ menjadi $1{,}08\\text{ kg}\\cdot\\text{m}^2$ dan putaran bertambah cepat) serta masih berada di dalam panjang batang ($0{,}60\\text{ m} < 1{,}5\\text{ m}$). Perhatian penting: menggunakan $\\frac{1}{12}ML_b^2$ untuk batang berporos di ujung adalah kesalahan fatal.',
    conclusion:
      'Jarak akhir balok kecil tersebut dari sumbu putar adalah $0{,}6\\text{ m}$ (jawaban numerik: `0.6`).',
    speechScript:
      'Pembahasan soal nomor 10. Perhatikan letak poros pada soal ini: batang berputar pada salah satu ujungnya, sehingga momen inersia batang adalah sepertiga M L kuadrat, bukan seperduabelas! Langkah pertama, kita hitung momen inersia batang: sepertiga dikali 1 koma 2 dikali 1 koma 5 kuadrat sama dengan 0 koma 90 kilogram meter kuadrat. Langkah kedua, momen inersia awal sistem adalah 0 koma 90 ditambah 0 koma 50 dikali 1 koma 20 kuadrat, yaitu 0 koma 90 ditambah 0 koma 72 sama dengan 1 koma 62 kilogram meter kuadrat. Maka momentum sudut awal L sama dengan 1 koma 62 dikali 4 koma 0 sama dengan 6 koma 48 kilogram meter kuadrat per sekon. Karena momentum sudut kekal dan omega 2 sama dengan 6 koma 0, momen inersia akhir I 2 sama dengan 6 koma 48 dibagi 6 koma 0 sama dengan 1 koma 08 kilogram meter kuadrat. Terakhir, 1 koma 08 sama dengan 0 koma 90 ditambah 0 koma 50 r 2 kuadrat. Sehingga 0 koma 50 r 2 kuadrat sama dengan 0 koma 18, dan r 2 kuadrat sama dengan 0 koma 36. Akar dari 0 koma 36 adalah 0 koma 6 meter.',
  },
];
