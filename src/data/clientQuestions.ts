import type { ClientQuestion } from '../types/quiz';

/**
 * Client-safe question bank (10 HOTS physics questions for SMA Class XI Phase F).
 * Contains NO answer keys, NO solution derivations, and NO teacher credentials.
 */
export const CLIENT_QUESTIONS: ClientQuestion[] = [
  {
    id: 1,
    type: 'single_choice',
    typeLabel: 'Pilihan Ganda',
    topic: 'Momentum Sudut Benda Tegar',
    maxScore: 10,
    diagramId: 'q1-flywheel',
    diagramCaption:
      'Gambar 1. Roda gila (silinder pejal homogen) berotasi pada sumbu simetri pusat dengan sensor laju tangensial di tepi luar.',
    stimulusText:
      'Di bengkel eksperimen fisika SMAS Tunas Baru Jin Seung Batam, sebuah roda gila (flywheel) penyimpan energi berbentuk **silinder pejal homogen** bermassa $M = 8{,}0\\text{ kg}$ dan berdiameter $d = 0{,}50\\text{ m}$ berputar stabil terhadap sumbu tetap yang melalui pusat massanya. Sebuah sensor optik yang dipasang tepat di tepi luar silinder mencatat laju linear titik tepi sebesar $v = 10\\text{ m/s}$.',
    questionPrompt:
      'Besar momentum sudut roda gila terhadap sumbu rotasinya adalah ....',
    options: [
      { id: 'A', text: '$5{,}0\\text{ kg}\\cdot\\text{m}^2/\\text{s}$' },
      { id: 'B', text: '$10\\text{ kg}\\cdot\\text{m}^2/\\text{s}$' },
      { id: 'C', text: '$20\\text{ kg}\\cdot\\text{m}^2/\\text{s}$' },
      { id: 'D', text: '$40\\text{ kg}\\cdot\\text{m}^2/\\text{s}$' },
      { id: 'E', text: '$80\\text{ kg}\\cdot\\text{m}^2/\\text{s}$' },
    ],
    speechScript:
      'Soal nomor 1, Pilihan Ganda. Di bengkel eksperimen fisika SMAS Tunas Baru Jin Seung Batam, sebuah roda gila berbentuk silinder pejal homogen bermassa 8 koma 0 kilogram dan berdiameter 0 koma 50 meter berputar stabil terhadap sumbu tetap yang melalui pusat massanya. Sebuah sensor optik yang dipasang tepat di tepi luar silinder mencatat laju linear titik tepi sebesar 10 meter per sekon. Pertanyaannya: Besar momentum sudut roda gila terhadap sumbu rotasinya adalah. Pilihan A, 5 koma 0 kilogram meter kuadrat per sekon. Pilihan B, 10 kilogram meter kuadrat per sekon. Pilihan C, 20 kilogram meter kuadrat per sekon. Pilihan D, 40 kilogram meter kuadrat per sekon. Pilihan E, 80 kilogram meter kuadrat per sekon.',
  },
  {
    id: 2,
    type: 'single_choice',
    typeLabel: 'Pilihan Ganda',
    topic: 'Penggabungan Dua Benda Berotasi',
    maxScore: 10,
    diagramId: 'q2-two-discs',
    diagramCaption:
      'Gambar 2. Piringan A (bawah) dan Piringan B (atas) seporos vertikal sebelum keduanya digabungkan.',
    stimulusText:
      'Dua buah cakram pejal homogen dipasang pada satu poros vertikal licin sehingga gesekan poros dan torsi eksternal neto dapat diabaikan. Cakram A bermassa $m_A = 4{,}0\\text{ kg}$ dan berjari-jari $R_A = 0{,}50\\text{ m}$ mula-mula berputar **berlawanan arah jarum jam** dengan kecepatan sudut $\\omega_A = 18\\text{ rad/s}$. Sementara itu, cakram B bermassa $m_B = 2{,}0\\text{ kg}$ dan berjari-jari $R_B = 1{,}0\\text{ m}$ mula-mula berputar **searah jarum jam** dengan kelajuan sudut $\\omega_B = 6{,}0\\text{ rad/s}$. Cakram B kemudian diturunkan perlahan secara koaksial hingga menempel dan berputar bersama cakram A sebagai satu sistem.',
    questionPrompt:
      'Kecepatan sudut akhir dan arah putaran kedua cakram setelah bergabung adalah ....',
    options: [
      { id: 'A', text: '$2{,}0\\text{ rad/s}$ searah jarum jam' },
      { id: 'B', text: '$2{,}0\\text{ rad/s}$ berlawanan arah jarum jam' },
      { id: 'C', text: '$6{,}0\\text{ rad/s}$ berlawanan arah jarum jam' },
      { id: 'D', text: '$10\\text{ rad/s}$ berlawanan arah jarum jam' },
      { id: 'E', text: '$10\\text{ rad/s}$ searah jarum jam' },
    ],
    speechScript:
      'Soal nomor 2, Pilihan Ganda. Dua buah cakram pejal homogen dipasang pada satu poros vertikal licin sehingga torsi eksternal neto dapat diabaikan. Cakram A bermassa 4 koma 0 kilogram dan berjari-jari 0 koma 50 meter mula-mula berputar berlawanan arah jarum jam dengan kecepatan sudut omega A sama dengan 18 radian per sekon. Sementara itu, cakram B bermassa 2 koma 0 kilogram dan berjari-jari 1 koma 0 meter mula-mula berputar searah jarum jam dengan kelajuan sudut omega B sama dengan 6 koma 0 radian per sekon. Cakram B kemudian diturunkan perlahan secara koaksial hingga menempel dan berputar bersama cakram A sebagai satu sistem. Pertanyaannya: Kecepatan sudut akhir dan arah putaran kedua cakram setelah bergabung adalah. Pilihan A, 2 koma 0 radian per sekon searah jarum jam. Pilihan B, 2 koma 0 radian per sekon berlawanan arah jarum jam. Pilihan C, 6 koma 0 radian per sekon berlawanan arah jarum jam. Pilihan D, 10 radian per sekon berlawanan arah jarum jam. Pilihan E, 10 radian per sekon searah jarum jam.',
  },
  {
    id: 3,
    type: 'complex_choice',
    typeLabel: 'Pilihan Ganda Kompleks',
    topic: 'Analisis Kekekalan Momentum Sudut',
    maxScore: 10,
    diagramId: 'q3-ice-skater',
    diagramCaption:
      'Gambar 3. Kondisi awal atlet seluncur es dengan lengan direntangkan dan kondisi akhir dengan lengan dirapatkan ke sumbu tubuh.',
    stimulusText:
      'Seorang atlet seluncur es melakukan putaran (spin) pada satu poros vertikal di atas permukaan es yang sangat licin sehingga torsi eksternal terhadap sumbu putar dapat diabaikan. Ketika kedua lengannya direntangkan, momen inersia sistem tubuh atlet terhadap sumbu putar adalah $I_1 = 4{,}5\\text{ kg}\\cdot\\text{m}^2$ dan kecepatan sudutnya $\\omega_1 = 4{,}0\\text{ rad/s}$. Atlet tersebut kemudian menarik kedua lengannya mendekati tubuh sehingga momen inersianya berubah menjadi $I_2 = 1{,}5\\text{ kg}\\cdot\\text{m}^2$.',
    questionPrompt:
      'Pilihlah **semua pernyataan yang benar** mengenai fenomena rotasi atlet tersebut (pilih menggunakan kotak centang; skor diberikan hanya jika seluruh pilihan tepat):',
    options: [
      {
        id: 'A',
        text: 'Penarikan kedua lengan mendekati sumbu tubuh memperkecil jarak distribusi massa terhadap sumbu putar sehingga momen inersia berkurang menjadi sepertiga nilai awal.',
      },
      {
        id: 'B',
        text: 'Momentum sudut atlet setelah menarik kedua lengan bertambah menjadi $54\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ karena kecepatan sudutnya meningkat.',
      },
      {
        id: 'C',
        text: 'Kecepatan sudut atlet setelah kedua lengannya didekatkan ke tubuh menjadi $12\\text{ rad/s}$.',
      },
      {
        id: 'D',
        text: 'Energi kinetik rotasi atlet tetap kekal sebesar $36\\text{ J}$ karena tidak ada torsi eksternal yang bekerja pada sistem.',
      },
      {
        id: 'E',
        text: 'Energi kinetik rotasi atlet meningkat sebesar $72\\text{ J}$ dibandingkan kondisi awal akibat usaha gaya internal otot saat menarik lengan.',
      },
    ],
    speechScript:
      'Soal nomor 3, Pilihan Ganda Kompleks. Pilih semua pernyataan yang benar. Seorang atlet seluncur es melakukan putaran pada satu poros vertikal di atas permukaan es yang sangat licin sehingga torsi eksternal terhadap sumbu putar dapat diabaikan. Ketika kedua lengannya direntangkan, momen inersia sistem tubuh atlet terhadap sumbu putar adalah I 1 sama dengan 4 koma 5 kilogram meter kuadrat dan kecepatan sudutnya omega 1 sama dengan 4 koma 0 radian per sekon. Atlet tersebut kemudian menarik kedua lengannya mendekati tubuh sehingga momen inersianya berubah menjadi I 2 sama dengan 1 koma 5 kilogram meter kuadrat. Pernyataan A: Penarikan kedua lengan mendekati sumbu tubuh memperkecil jarak distribusi massa terhadap sumbu putar sehingga momen inersia berkurang menjadi sepertiga nilai awal. Pernyataan B: Momentum sudut atlet setelah menarik kedua lengan bertambah menjadi 54 kilogram meter kuadrat per sekon karena kecepatan sudutnya meningkat. Pernyataan C: Kecepatan sudut atlet setelah kedua lengannya didekatkan ke tubuh menjadi 12 radian per sekon. Pernyataan D: Energi kinetik rotasi atlet tetap kekal sebesar 36 joule karena tidak ada torsi eksternal yang bekerja pada sistem. Pernyataan E: Energi kinetik rotasi atlet meningkat sebesar 72 joule dibandingkan kondisi awal akibat usaha gaya internal otot saat menarik lengan.',
  },
  {
    id: 4,
    type: 'complex_choice',
    typeLabel: 'Pilihan Ganda Kompleks',
    topic: 'Evaluasi Sistem Cakram & Beban Geser',
    maxScore: 10,
    diagramId: 'q4-turntable-mass',
    diagramCaption:
      'Gambar 4. Meja putar bermomen inersia tetap dengan beban uji bermassa m yang digeser secara radial dari r₁ ke r₂.',
    stimulusText:
      'Sebuah meja putar eksperimental memiliki momen inersia tetap terhadap poros vertikal licin sebesar $I_c = 8{,}0\\text{ kg}\\cdot\\text{m}^2$ dan mula-mula berputar dengan kecepatan sudut $\\omega_1 = 3{,}0\\text{ rad/s}$. Di atas meja putar tersebut terdapat sebuah beban uji bermassa $m = 4{,}0\\text{ kg}$ (diperlakukan sebagai partikel titik) yang mula-mula terkunci pada jarak radial $r_1 = 2{,}0\\text{ m}$ dari sumbu rotasi. Melalui mekanisme penggerak internal di dalam meja, beban uji digeser perlahan secara radial menuju poros hingga berhenti dan terkunci pada jarak $r_2 = 1{,}0\\text{ m}$ dari sumbu rotasi. Tidak ada torsi eksternal neto terhadap poros selama proses berlangsung.',
    questionPrompt:
      'Lakukan analisis matematis dan evaluasi **semua pernyataan yang benar** berikut ini:',
    options: [
      {
        id: 'A',
        text: 'Momen inersia total sistem pada kondisi awal adalah $24\\text{ kg}\\cdot\\text{m}^2$, lalu berkurang menjadi $12\\text{ kg}\\cdot\\text{m}^2$ setelah beban digeser.',
      },
      {
        id: 'B',
        text: 'Kecepatan sudut akhir sistem menjadi $12\\text{ rad/s}$ karena jarak beban terhadap poros berkurang menjadi setengahnya.',
      },
      {
        id: 'C',
        text: 'Besar momentum sudut total sistem bernilai tetap sebesar $72\\text{ kg}\\cdot\\text{m}^2/\\text{s}$ sebelum maupun sesudah pergeseran beban.',
      },
      {
        id: 'D',
        text: 'Karena laju tangensial beban uji sebelum dan sesudah pergeseran sama-sama $6{,}0\\text{ m/s}$, maka energi kinetik rotasi sistem total tidak berubah.',
      },
      {
        id: 'E',
        text: 'Agar momentum sudut sistem tetap kekal, kecepatan sudut meja putar beserta beban meningkat menjadi $6{,}0\\text{ rad/s}$.',
      },
    ],
    speechScript:
      'Soal nomor 4, Pilihan Ganda Kompleks. Sebuah meja putar eksperimental memiliki momen inersia tetap terhadap poros vertikal licin sebesar I c sama dengan 8 koma 0 kilogram meter kuadrat dan mula-mula berputar dengan kecepatan sudut omega 1 sama dengan 3 koma 0 radian per sekon. Di atas meja putar tersebut terdapat sebuah beban uji bermassa 4 koma 0 kilogram yang mula-mula terkunci pada jarak radial r 1 sama dengan 2 koma 0 meter dari sumbu rotasi. Melalui mekanisme penggerak internal, beban uji digeser secara radial menuju poros hingga berhenti pada jarak r 2 sama dengan 1 koma 0 meter dari sumbu rotasi, tanpa adanya torsi eksternal neto. Pernyataan A: Momen inersia total sistem pada kondisi awal adalah 24 kilogram meter kuadrat, lalu berkurang menjadi 12 kilogram meter kuadrat setelah beban digeser. Pernyataan B: Kecepatan sudut akhir sistem menjadi 12 radian per sekon karena jarak beban terhadap poros berkurang menjadi setengahnya. Pernyataan C: Besar momentum sudut total sistem bernilai tetap sebesar 72 kilogram meter kuadrat per sekon sebelum maupun sesudah pergeseran beban. Pernyataan D: Karena laju tangensial beban uji sebelum dan sesudah pergeseran sama-sama 6 koma 0 meter per sekon, maka energi kinetik rotasi sistem total tidak berubah. Pernyataan E: Agar momentum sudut sistem tetap kekal, kecepatan sudut meja putar beserta beban meningkat menjadi 6 koma 0 radian per sekon.',
  },
  {
    id: 5,
    type: 'true_false',
    typeLabel: 'Benar / Salah (4 Pernyataan)',
    topic: 'Analisis Kasus Batang & Dua Bola Simetris',
    maxScore: 10,
    diagramId: 'q5-rod-spheres',
    diagramCaption:
      'Gambar 5. Batang homogen berotasi pada poros pusat vertikal dengan dua bola identik yang bergeser simetris ke kedua ujung batang.',
    stimulusText:
      'Sebuah batang homogen bermassa $M_b = 3{,}0\\text{ kg}$ dan panjang $L_b = 2{,}0\\text{ m}$ dipasang mendatar dan berotasi bebas pada bidang horizontal terhadap poros vertikal licin yang tepat melalui **pusat batangnya**. Mula-mula batang berputar dengan kecepatan sudut $\\omega_1 = 5{,}0\\text{ rad/s}$ berlawanan arah jarum jam. Dua bola kecil identik (masing-masing bermassa $m = 0{,}50\\text{ kg}$, dianggap sebagai massa titik) awalnya ditahan simetris di kiri dan kanan poros pada jarak $r_1 = 0{,}50\\text{ m}$ dari poros. Pengunci kemudian dilepas sehingga kedua bola meluncur menjauhi poros dan terkunci tepat di kedua ujung batang pada jarak $r_2 = 1{,}0\\text{ m}$ dari poros. Abaikan gesekan poros maupun hambatan udara.',
    questionPrompt:
      'Tentukan nilai kebenaran (**Benar** atau **Salah**) untuk masing-masing dari keempat pernyataan berikut secara mandiri (Benar: +2,5; Salah: −1; Kosong: 0):',
    statements: [
      {
        id: '1',
        text: 'Momentum sudut awal sistem batang beserta kedua bola terhadap poros pusatnya adalah $6{,}25\\text{ kg}\\cdot\\text{m}^2/\\text{s}$.',
      },
      {
        id: '2',
        text: 'Saat kedua bola bergeser menuju ujung batang, momentum sudut total sistem ikut berkurang sebanding dengan melambatnya putaran batang.',
      },
      {
        id: '3',
        text: 'Pergeseran kedua bola ke ujung batang meningkatkan momen inersia sistem dari $1{,}25\\text{ kg}\\cdot\\text{m}^2$ menjadi $2{,}0\\text{ kg}\\cdot\\text{m}^2$, sehingga kecepatan sudut sistem menurun.',
      },
      {
        id: '4',
        text: 'Setelah kedua bola terkunci tepat di kedua ujung batang, kecepatan sudut akhir sistem menjadi $4{,}0\\text{ rad/s}$.',
      },
    ],
    speechScript:
      'Soal nomor 5, Benar atau Salah berbasis kasus. Perhatikan sistem penilaian: benar bernilai plus 2 koma 5, salah bernilai minus 1, dan tidak dijawab bernilai nol. Sebuah batang homogen bermassa 3 koma 0 kilogram dan panjang 2 koma 0 meter dipasang mendatar dan berotasi bebas pada bidang horizontal terhadap poros vertikal licin yang tepat melalui pusat batangnya. Mula-mula batang berputar dengan kecepatan sudut omega 1 sama dengan 5 koma 0 radian per sekon berlawanan arah jarum jam. Dua bola kecil identik masing-masing bermassa 0 koma 50 kilogram awalnya ditahan simetris di kiri dan kanan poros pada jarak r 1 sama dengan 0 koma 50 meter dari poros. Pengunci kemudian dilepas sehingga kedua bola meluncur menjauhi poros dan terkunci tepat di kedua ujung batang pada jarak r 2 sama dengan 1 koma 0 meter dari poros. Pernyataan 1: Momentum sudut awal sistem batang beserta kedua bola terhadap poros pusatnya adalah 6 koma 25 kilogram meter kuadrat per sekon. Pernyataan 2: Saat kedua bola bergeser menuju ujung batang, momentum sudut total sistem ikut berkurang sebanding dengan melambatnya putaran batang. Pernyataan 3: Pergeseran kedua bola ke ujung batang meningkatkan momen inersia sistem dari 1 koma 25 kilogram meter kuadrat menjadi 2 koma 0 kilogram meter kuadrat, sehingga kecepatan sudut sistem menurun. Pernyataan 4: Setelah kedua bola terkunci tepat di kedua ujung batang, kecepatan sudut akhir sistem menjadi 4 koma 0 radian per sekon.',
  },
  {
    id: 6,
    type: 'short_numeric',
    typeLabel: 'Isian Singkat Matematis',
    topic: 'Momentum Sudut Benda Menggelinding',
    maxScore: 10,
    diagramId: 'q6-rolling-sphere',
    diagramCaption:
      'Gambar 6. Bola pejal homogen menggelinding tanpa tergelincir di atas lintasan datar dengan titik acuan P pada lantai.',
    stimulusText:
      'Sebuah **bola pejal homogen** bermassa $M = 5{,}0\\text{ kg}$ dan berjari-jari $R = 0{,}20\\text{ m}$ menggelinding murni (tanpa tergelincir) ke kanan di atas permukaan lantai datar horizontal dengan kelajuan pusat massa $v_{\\text{CM}} = 4{,}0\\text{ m/s}$. Perhatikan bahwa acuan perhitungan bukan pusat massa, melainkan **titik sentuh $P$ di lantai** (sumbu horizontal yang melalui titik kontak sesaat bola dengan lantai dan tegak lurus bidang gerak).',
    questionPrompt:
      'Hitunglah besar **momentum sudut total** bola pejal tersebut terhadap **titik sentuh $P$** di lantai! (Masukkan nilai numerik saja dalam satuan $\\text{kg}\\cdot\\text{m}^2/\\text{s}$).',
    numericUnit: 'kg·m²/s',
    numericPlaceholder: 'Contoh: 12.4',
    speechScript:
      'Soal nomor 6, Isian Singkat Matematis. Baca petunjuk pengisian sebelum menuliskan angka. Masukkan hanya hasil numeriknya tanpa menuliskan satuan. Sebuah bola pejal homogen bermassa 5 koma 0 kilogram dan berjari-jari 0 koma 20 meter menggelinding murni tanpa tergelincir ke kanan di atas permukaan lantai datar horizontal dengan kelajuan pusat massa v CM sama dengan 4 koma 0 meter per sekon. Hitunglah besar momentum sudut total bola pejal tersebut terhadap titik sentuh P di lantai, dalam satuan kilogram meter kuadrat per sekon.',
  },
  {
    id: 7,
    type: 'short_numeric',
    typeLabel: 'Isian Singkat Matematis',
    topic: 'Momentum Sudut Sistem Benda Berotasi',
    maxScore: 10,
    diagramId: 'q7-coaxial-system',
    diagramCaption:
      'Gambar 7. Cincin tipis dan cakram pejal berputar pada poros vertikal yang sama dengan arah putaran berlawanan.',
    stimulusText:
      'Pada suatu perangkat uji poros vertikal tunggal, terdapat dua benda tegar yang berputar koaksial terhadap sumbu rotasi vertikal yang sama: (1) sebuah **cincin tipis homogen** bermassa $m_1 = 3{,}0\\text{ kg}$ dan berjari-jari $R_1 = 0{,}40\\text{ m}$ berputar **berlawanan arah jarum jam** (ditetapkan sebagai arah **positif**) dengan kecepatan sudut $\\omega_1 = +15\\text{ rad/s}$; dan (2) sebuah **cakram pejal homogen** bermassa $m_2 = 4{,}0\\text{ kg}$ dan berjari-jari $R_2 = 0{,}50\\text{ m}$ berputar **searah jarum jam** (arah **negatif**) dengan laju sudut $20\\text{ rad/s}$ ($\\omega_2 = -20\\text{ rad/s}$).',
    questionPrompt:
      'Tentukan **momentum sudut total sistem** terhadap sumbu rotasi tersebut dengan menyertakan tanda positif atau negatif sesuai konvensi arah di atas! (Masukkan angka saja dalam satuan $\\text{kg}\\cdot\\text{m}^2/\\text{s}$).',
    numericUnit: 'kg·m²/s',
    numericPlaceholder: 'Contoh: -12 atau 4.5',
    speechScript:
      'Soal nomor 7, Isian Singkat Matematis. Masukkan hasil numerik lengkap dengan tanda positif atau negatif tanpa satuan. Pada suatu perangkat uji poros vertikal tunggal, terdapat dua benda tegar yang berputar koaksial terhadap sumbu rotasi vertikal yang sama. Benda pertama, sebuah cincin tipis homogen bermassa 3 koma 0 kilogram dan berjari-jari 0 koma 40 meter berputar berlawanan arah jarum jam sebagai arah positif dengan kecepatan sudut omega 1 sama dengan plus 15 radian per sekon. Benda kedua, sebuah cakram pejal homogen bermassa 4 koma 0 kilogram dan berjari-jari 0 koma 50 meter berputar searah jarum jam sebagai arah negatif dengan kecepatan sudut omega 2 sama dengan minus 20 radian per sekon. Tentukan momentum sudut total sistem terhadap sumbu rotasi tersebut.',
  },
  {
    id: 8,
    type: 'short_numeric',
    typeLabel: 'Isian Singkat Matematis',
    topic: 'Kekekalan Momentum Sudut Astrofisika',
    maxScore: 10,
    diagramId: 'q8-star-collapse',
    diagramCaption:
      'Gambar 8. Model keruntuhan gravitasi bola pejal homogen dari jari-jari awal R₁ menjadi jari-jari akhir R₂ dengan massa konstan.',
    stimulusText:
      'Dalam pemodelan astrofisika, inti sebuah bintang masif berbentuk **bola pejal homogen** dengan jari-jari awal $R_1 = 2{,}0 \\times 10^6\\text{ m}$ berotasi terhadap sumbu diameternya dengan kecepatan sudut $\\omega_1 = 0{,}05\\text{ rad/s}$. Ketika mengalami keruntuhan gravitasi membentuk bintang neutron, massanya dianggap tetap ($M_{\\text{awal}} = M_{\\text{akhir}}$) dan tidak ada torsi eksternal neto, sementara jari-jarinya menyusut drastis menjadi $R_2 = 1{,}0 \\times 10^4\\text{ m}$ dengan distribusi massa tetap berupa bola pejal homogen.',
    questionPrompt:
      'Tentukan **kecepatan sudut akhir** bintang neutron tersebut! (Masukkan angka saja dalam satuan $\\text{rad/s}$; Anda dapat menggunakan angka biasa atau notasi ilmiah seperti `3.2e4`).',
    numericUnit: 'rad/s',
    numericPlaceholder: 'Contoh: 2500 atau 2.5e3',
    speechScript:
      'Soal nomor 8, Isian Singkat Matematis. Masukkan angka saja tanpa satuan, boleh menggunakan bilangan biasa atau notasi ilmiah. Dalam pemodelan astrofisika, inti sebuah bintang masif berbentuk bola pejal homogen dengan jari-jari awal R 1 sama dengan 2 koma 0 kali 10 pangkat 6 meter berotasi terhadap sumbu diameternya dengan kecepatan sudut omega 1 sama dengan 0 koma 05 radian per sekon. Ketika mengalami keruntuhan gravitasi membentuk bintang neutron, massanya dianggap tetap dan tidak ada torsi eksternal neto, sementara jari-jarinya menyusut menjadi R 2 sama dengan 1 koma 0 kali 10 pangkat 4 meter dengan distribusi massa tetap berupa bola pejal homogen. Tentukan kecepatan sudut akhir bintang neutron tersebut dalam radian per sekon.',
  },
  {
    id: 9,
    type: 'short_numeric',
    typeLabel: 'Isian Singkat Matematis',
    topic: 'Penggabungan Sistem Rotasi Berlawanan Arah',
    maxScore: 10,
    diagramId: 'q9-disc-ring-merge',
    diagramCaption:
      'Gambar 9. Cincin tipis berputar searah jarum jam dijatuhkan koaksial ke atas cakram pejal yang berputar berlawanan arah jarum jam.',
    stimulusText:
      'Sebuah piringan datar berbentuk **cakram pejal homogen** bermassa $M = 6{,}0\\text{ kg}$ dan berjari-jari $R = 0{,}50\\text{ m}$ berputar bebas pada sumbu vertikal licin dengan kecepatan sudut $\\omega_1 = +10\\text{ rad/s}$ (berlawanan arah jarum jam). Sebuah **cincin tipis homogen** berjari-jari sama $R = 0{,}50\\text{ m}$ yang sedang berputar **searah jarum jam** dengan kecepatan sudut $\\omega_2 = -5{,}0\\text{ rad/s}$ dijatuhkan tepat seporos ke atas cakram tersebut. Kedua benda akhirnya menyatu dan berputar bersama dengan kecepatan sudut akhir $\\omega_{\\text{akhir}} = +4{,}0\\text{ rad/s}$ (berlawanan arah jarum jam). Asumsikan tidak ada torsi eksternal neto selama proses penggabungan.',
    questionPrompt:
      'Tentukan **massa cincin tipis** tersebut! (Masukkan nilai numerik saja dalam satuan $\\text{kg}$).',
    numericUnit: 'kg',
    numericPlaceholder: 'Contoh: 4.5',
    speechScript:
      'Soal nomor 9, Isian Singkat Matematis. Masukkan nilai numerik saja tanpa satuan. Sebuah piringan datar berbentuk cakram pejal homogen bermassa 6 koma 0 kilogram dan berjari-jari 0 koma 50 meter berputar bebas pada sumbu vertikal licin dengan kecepatan sudut omega 1 sama dengan plus 10 radian per sekon, berlawanan arah jarum jam. Sebuah cincin tipis homogen berjari-jari sama 0 koma 50 meter yang sedang berputar searah jarum jam dengan kecepatan sudut omega 2 sama dengan minus 5 koma 0 radian per sekon dijatuhkan tepat seporos ke atas cakram tersebut. Kedua benda akhirnya menyatu dan berputar bersama dengan kecepatan sudut akhir omega akhir sama dengan plus 4 koma 0 radian per sekon. Tentukan massa cincin tipis tersebut dalam kilogram.',
  },
  {
    id: 10,
    type: 'short_numeric',
    typeLabel: 'Isian Singkat Matematis',
    topic: 'Analisis Multi-Tahap Batang & Massa Geser',
    maxScore: 10,
    diagramId: 'q10-rod-end-pivot',
    diagramCaption:
      'Gambar 10. Batang homogen berporos di salah satu ujung dengan balok kecil yang berpindah dari r₁ ke r₂.',
    stimulusText:
      'Sebuah batang homogen bermassa $M = 1{,}2\\text{ kg}$ dan panjang $L_b = 1{,}5\\text{ m}$ berotasi bebas pada bidang horizontal licin terhadap poros vertikal yang melalui **salah satu ujung batang**. Sebuah balok kecil bermassa $m = 0{,}50\\text{ kg}$ (diperlakukan sebagai partikel titik) mula-mula diikat pada jarak $r_1 = 1{,}20\\text{ m}$ dari sumbu putar, dan sistem berputar dengan kecepatan sudut $\\omega_1 = 4{,}0\\text{ rad/s}$. Melalui mekanisme penarik internal di sepanjang batang tanpa torsi eksternal neto, balok ditarik mendekati poros hingga berhenti pada suatu posisi baru berjarak $r_2$ dari sumbu putar. Pada posisi baru tersebut, kecepatan sudut sistem terukur meningkat menjadi $\\omega_2 = 6{,}0\\text{ rad/s}$.',
    questionPrompt:
      'Berdasarkan analisis perubahan distribusi massa dan kekekalan momentum sudut, tentukan **jarak akhir $r_2$ balok kecil tersebut dari sumbu putar**! (Masukkan angka saja dalam satuan meter).',
    numericUnit: 'm',
    numericPlaceholder: 'Contoh: 0.75',
    speechScript:
      'Soal nomor 10, Isian Singkat Matematis. Masukkan nilai numerik saja tanpa satuan. Sebuah batang homogen bermassa 1 koma 2 kilogram dan panjang 1 koma 5 meter berotasi bebas pada bidang horizontal licin terhadap poros vertikal yang melalui salah satu ujung batang. Sebuah balok kecil bermassa 0 koma 50 kilogram mula-mula diikat pada jarak r 1 sama dengan 1 koma 20 meter dari sumbu putar, dan sistem berputar dengan kecepatan sudut omega 1 sama dengan 4 koma 0 radian per sekon. Melalui mekanisme penarik internal tanpa torsi eksternal neto, balok ditarik mendekati poros hingga berhenti pada posisi baru berjarak r 2 dari sumbu putar. Pada posisi baru tersebut, kecepatan sudut sistem terukur menjadi omega 2 sama dengan 6 koma 0 radian per sekon. Tentukan jarak akhir r 2 balok kecil tersebut dari sumbu putar dalam satuan meter.',
  },
];
