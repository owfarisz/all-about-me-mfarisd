const PAGES = [
  { id: 'selamat-berjumpa', title: 'Perkenalan diri', content: selamatBerjumpa() },

  { id: 'kisah-identitas',
    title: '1. All About Me',
    content: `
    <article>
      <section style="max-width:800px;margin:auto;line-height:1.7;">
        <h2 style="text-align:center;color:var(--brand);">Hello Orang Orang Hebat!</h2>
        <p>
          Perkenalkan, <b>Muhammad Faris Daffa</b>, mahasiswa Sistem dan Teknologi Informasi di Institut Teknologi Bandung. Saya tertarik pada pertemuan teknologi dan bisnis. Saya nyaman memulai dari hipotesis, memetakan masalah secara MECE, lalu menguji dengan data sederhana di Python atau Sheets. Saya menikmati membangun proses kerja yang ringan agar proyek tetap bergerak, misalnya ritme mingguan, peta risiko dan ketergantungan, serta daftar keputusan yang jelas.
        </p>
        <b>Prinsip komunikasi saya</b>
        <ol>
          <li>Berangkat dari niat yang tepat, memilih kata yang tepat.
          <li>Memahami konteks lawan bicara sebelum menyimpulkan.
          <li>Menggunakan I‑statements ketika menyampaikan keberatan.
          <li>Mengutamakan parafrasa untuk memastikan makna yang sama.
          <li>Menjaga empati tanpa kehilangan kejelasan arah.
        </ol>
        <b>Peran dan identitas</b>
        <ul style="list-style:none;padding-left:0;">
          <li>- Mahasiswa yang terus belajar dan tidak takut mulai dari versi sederhana.</li>
          <li>- Rekan tim yang bisa diandalkan dalam menyusun struktur dan memastikan eksekusi.</li>
          <li>- Anak pertama yang ingin memberi manfaat bagi keluarga melalui karya yang nyata.</li>
        </ul>
        <b>Praktik belajar</b>
        <ul style="list-style:none;padding-left:0;">
          <li>- Mengecek persepsi sebelum menilai. Saya rutin mengulang kembali apa yang saya tangkap, menawarkan kemungkinan makna, lalu bertanya apakah itu sesuai.
          <li>- Self‑talk yang sehat. Saya menenangkan diri saat grogi, mengingat tujuan, dan memecah masalah besar menjadi langkah kecil yang bisa dikerjakan hari ini.
        </p>
        <b>Pendekatan digital</b>
        <p>
          Saya menggunakan ruang tatap muka untuk kedalaman dan ruang digital untuk jangkauan. Percakapan langsung saya anggap seperti tenis yang kaya nuansa. Percakapan daring saya anggap seperti catur yang memberi waktu untuk berpikir. Keduanya saya pakai dengan prinsip menghormati konteks, sadar jejak digital, dan menulis sejelas mungkin.
        </p>
        <b>Nilai kerja dan capaian singkat</b>
        <ol>
          <li>Vice Project Officer IMPACT 5.0. Mengarahkan 150 lebih panitia untuk kompetisi nasional dengan 800 lebih peserta.
          <li>TEC ITB.Mengurasi intelijen peluang lomba, merancang bootcamp dan playbook, serta mengoordinasi program lintas unit agar kesiapan tim meningkat.
          <li>External affairs. Membangun jejaring dan kemitraan agar publikasi dan brand kegiatan makin luas.
        </ol>
        <b>Prestasi</b>
        <ol>
          <li>Juara 1 ELECTRA 13 ITS (Lomba Bisnis Plan Nasional bidang Energi Terbarukan).</li>
          <li>Juara 1 StudentsxCEOs Grand Summit Case Competition (Lomba Studi Kasus Bisnis Nasional).</li>
          <li>Top 5 StudentsxCEOs Grand Summit Case Competition (Lomba Studi Kasus Bisnis Nasional).</li>
          <li>Octofinal Brawijaya English Tournament (Lomba Debat Bahasa Inggris Nasional).</li>
        </ol>
        <b>Visi singkat</b>
        <p>
          Saya ingin mengerjakan solusi yang mempermudah hidup orang lain. Target boleh tinggi, cara mencapainya harus realistis, pragmatis, dan strategis. Ukuran keberhasilan saya sederhana. Masalah berkurang, proses lebih rapi, orang yang bekerja bersama merasa terbantu.
        </p>
      </section>
    </article>`
  },

  { id: 'my-songs',
        title: '2. My Song for You',
        content: `
          <article>
            <h2 style='color: var(--text-color);'>Dekat di Hati - Faris</h2>

                <h3 style="color: var(--brand); margin-top: 20px;">Lirik: Dekat di Hati - faris</h3>
                <p> https://www.youtube.com/shorts/UHooG-v4rKo 
                <p>
                <p>
                    <b>[Verse 1]</b><br>
                    Ku lihat senyummu
                    Di sana
                    Di kala senja
                    Oh mengapa

                </p>

                <p>
                    <b>[PreChorus]</b><br>
                    Hati ini bicara<br>
                    Tentang cinta<br>

                </p>

                <p>
                    <b>[Chorus]</b><br>
                    Dekat di hati<br>
                    Kau ada di sini<br>
                    Dekat di hati<br>
                    Selalu menanti
                </p>
                <p>
                    <b>[Verse 2]</b><br>
                    Kau datang padaku<br>
                    Membawa harapan baru<br>
                    Cinta yang kurindu<br>
                    Bersamamu
                </p>
                <p>
                    <b>[PreChorus]</b><br>
                    Hati ini bicara<br>
                    Tentang cinta
                </p>
                <p>
                    <b>[Chorus]</b><br>
                    Dekat di hati<br>
                    Kau ada di sini<br>
                    Dekat di hati<br>
                    Selalu menanti
                </p>
                </p>
          </article>`
      },

  { id: 'my-stories',
    title: '3. My Stories for You',
    content: `
    <article>
      <section style="max-width:800px;margin:auto;line-height:1.9">
        <h2 style="text-align:center;color:var(--brand);margin-bottom:10px">
          Tiket Pulang Pagi
        </h2>
        <h5 style="color:var(--muted);text-align:center;margin-top:0;margin-bottom:24px;font-weight:normal;">
          oleh Muhammad Faris Daffa
        </h5>

        <p>Hampir semua malam lomba rasanya mirip. Ruang kerja yang makin dingin setelah jam dua, kopi yang kehilangan rasa, layar yang terus menolak slide ke dua belas. Di meja ada tumpukan name tag dari kota-kota berbeda, bukti perjalanan yang dulu terasa seru, sekarang seperti set stempel di paspor yang tidak lagi diceritakan.
        </p>
        <p>Aku masih ingat awalnya. Pertama kali ikut kompetisi, kami masuk final dan pulang dengan bingkisan kecil. Senang sekali, bukan karena hadiahnya, tetapi karena presentasi tiga menit terasa seperti panggung yang panjang. Lalu datang lomba kedua, ketiga, kelima. Ada yang menang, banyak yang tidak. Di tengah jalan, sesuatu berubah. Aku mulai hafal ritme panjangnya: cari tema, validasi kecil, pivot, buat deck, latihan, Q&A, pulang. Rasanya seperti berlari di treadmill. Keringatan, tapi tetap di tempat.
        </p>
        <p>Puncaknya malam itu, menjelang batas pengumpulan. Kami baru saja merevisi model bisnis untuk kali ketujuh. Tim masih lengkap, tetapi suaranya lelah. Aku mengetik ringkasan, lalu berhenti. Ada rasa jenuh yang tidak bisa lagi ditutup dengan kopi. Aku bertanya dalam hati, untuk apa semua ini. Piala memang manis, tetapi manisnya cepat hilang. Terima kasih juri juga hangat, tetapi hangatnya ikut reda saat notifikasi baru masuk.
        </p>
        <p>Esok paginya, aku ke ruang kelas lebih awal. Di koridor, ada mahasiswa tingkat satu membawa laptop dan setumpuk kertas. “Bang, maaf, boleh tanya,” katanya. Ia memperlihatkan storyboard yang sangat sederhana, penuh coretan pensil. Ia bercerita soal ide kecil agar antrean laundry kos-kosan tidak chaos saat musim hujan. Aku hampir refleks memberi daftar bacaan dan contoh pitch. Untungnya aku menahan diri. Aku minta ia cerita lebih dalam, siapa yang kesulitan, kapan, dan mengapa.
        </p>
        <p>Tiga puluh menit itu pelan-pelan menggeser sesuatu di kepalaku. Aku sadar, akhir-akhir ini aku lebih sibuk mengejar panggung daripada mendengar orang yang sebenarnya perlu ditolong. Ide sederhana anak baru itu membuatku ingin mencoba lagi, kali ini dengan ukuran sukses yang berbeda. Bukan plakat, bukan exposure, tapi satu orang yang benar-benar terbantu.
        </p>
        <p>Kami mengajak dua teman lain, membuat tim kecil. Target kami sederhana. Dalam dua minggu, ada minimal satu tempat laundry yang antreannya lebih rapi. Kami tidak membuat aplikasi besar. Kami pakai nomor WhatsApp lama yang jarang dipakai, membuat alur pesan singkat untuk daftar, estimasi, dan pemberitahuan selesai. Kami ke tiga laundry di sekitar kampus, satu menolak, satu minta dihubungi lagi, satu ibu pemilik tersenyum dan bilang, “Coba saja, Nak, asal tidak ribet.”
        </p>
        <p>Tiga hari pertama, banyak yang kacau. Nomor pelanggan dobel, pesan template salah urut, dan baterai ponsel admin keburu habis. Kami perbaiki malam itu juga. Kami duduk di bangku plastik sambil mencatat jam ramai, memperbaiki kata-kata agar mudah dimengerti, dan menambah satu fitur sederhana untuk komplain. Tidak ada juri, tidak ada panggung. Hanya suara mesin cuci, obrolan pelan, dan tawa kecil anak-anak kos yang senang dapat notifikasi tepat waktu.
        </p>
        <p>Akhir pekan, kami tetap ikut lomba yang sudah dijadwalkan. Kami presentasi seperti biasa, menjawab pertanyaan, dan pulang tanpa medali. Anehnya, rasa sesak yang biasanya muncul, tidak datang. Di perjalanan pulang, ponsel bergetar. Pesan dari ibu pemilik laundry itu masuk. “Terima kasih, Nak. Sekarang anak-anak tidak numpuk di depan. Saya bisa istirahat sebentar sore ini.” Di bawahnya ada foto kursi kayu kosong di teras kecil, ada cangkir teh, ada langit yang mulai oranye.
        </p>
        <p>Aku menyimpan foto itu. Malamnya, aku menempelkan print out kecilnya di dinding kamar, di antara name tag dan kartu panitia lama. Di situ aku sadar, ternyata aku tidak jenuh pada kompetisi. Aku jenuh pada versi diriku yang sibuk mengejar pengumuman, sampai lupa mendengar. Ketika ukurannya kuubah, lomba kembali terasa seperti dulu, sebuah alasan untuk bertemu masalah nyata dan mencoba memperbaikinya, meski kecil.
        </p>
        <p>Beberapa minggu kemudian, ibu itu membawa sekotak pisang goreng ke kampus. “Tidak banyak, buat kalian,” katanya. Kami tertawa. Kami ceritakan hal-hal yang ingin kami perbaiki lagi. Ia bercerita soal jam ramai saat pekan UTS. Kami menambahkan satu pesan pengingat otomatis setiap malam. Tidak ada tepuk tangan. Tidak ada confetti. Hanya notifikasi yang berbunyi tenang, dan antrean yang bergerak dengan sabar.
        </p>
        <p>Sekarang kalau ada adik tingkat yang bertanya bagaimana caranya “menang”, aku tidak lagi bicara panjang lebar soal framework atau template deck. Aku mulai dengan satu kalimat yang sederhana. Dengarkan orang yang ingin kamu bantu sampai tuntas, lalu pilih langkah paling kecil yang bisa dilakukan hari ini. Jika beruntung, kamu akan menemukan satu pesan seperti milik ibu pemilik laundry itu. Pesan yang tidak membuatmu meledak senang, tetapi menenangkan seperti tiket pulang pagi saat kota masih basah.
        </p>
        <p>Di rak kamar, piala masih ada. Mereka tetap cantik, tetap memantulkan cahaya lampu. Tapi foto teras kecil dengan kursi dan cangkir teh itu pelan-pelan jadi pusat baru. Ketika malam lomba kembali terasa dingin, aku menatapnya sebentar. Aku ingat lagi alasan awal. Lari ini memang melelahkan, tetapi akan terasa berbeda jika setiap langkahnya membantu satu orang bernafas sedikit lebih lega.
        </p>
      </section>
    </article>`
  },

  { id: 'my-shapes',
    title: '4 My Shapes',
    content: `
    <article>
      <!-- Narasi SHAPE -->
      <section style="max-width:850px;margin:auto;line-height:1.8;text-align:justify;">
        <h2 style="text-align:center;color:var(--brand);margin-bottom:8px">
          MY SHAPE – Piagam Diri (Personal Charter)
        </h2>
        <h4 style="text-align:center;color:var(--muted);margin-top:0;font-weight:normal;">
          by Muhammad Faris Daffa
        </h4>

        <h3 style="color:var(--accent);margin-top:32px;">1. S – Signature Strengths (Kekuatan Khas)</h3>
        <p>Sehari-hari saya mengandalkan kebiasaan menjernihkan makna sebelum bergerak. Di rapat atau diskusi, saya biasa memparafrasekan poin lawan bicara, mengajukan pertanyaan yang spesifik, lalu merangkum singkat agar semua orang punya pijakan yang sama. Cara ini menurunkan defensif dan membuat keputusan terasa lebih tenang. Saya juga terbiasa berpikir sistematis dengan kerangka yang rapi, memetakan risiko, ketergantungan, dan prioritas sehingga eksekusi tidak meloncat-loncat. Ritme kecil yang konsisten menjadi andalan saya, mulai dari pembaruan status terjadwal sampai menjaga janji sederhana. Kecenderungan ini sejalan dengan kekuatan yang sering muncul pada diri saya seperti gemar belajar, kehati-hatian, penilaian yang jernih, kerja tim, dan kepemimpinan situasional.
        </p>

        <h3 style="color:var(--accent);margin-top:28px;">2. H – Heart (Nilai & Gairah)</h3>
        <p>Nilai yang saya pegang sederhana: jujur dengan cara yang sopan, bertanggung jawab pada kata-kata sendiri, dan mengusahakan manfaat yang terasa untuk orang lain. Saya percaya teknologi dan proses kerja yang sederhana bisa membuat hidup lebih mudah, sehingga saya lebih tertarik pada solusi yang benar-benar dipakai daripada sekadar terlihat keren. Saya merasa paling hidup ketika membantu tim menemukan arah, menyepakati langkah kecil hari ini, lalu melihat progres yang nyata besok pagi. Dari situ saya belajar bahwa kepercayaan lahir dari kebermanfaatan yang konsisten, bukan dari klaim yang berlebihan.
        </p>

        <h3 style="color:var(--accent);margin-top:28px;">3. A – Aptitudes & Acquired Skills (Bakat & Keterampilan)</h3>
        <p>Di sisi teknis, saya nyaman dengan dasar pemrograman C dan Python serta analisis data sederhana menggunakan Excel atau Google Sheets. Saya terbiasa melakukan riset cepat, merangkum temuan dalam dokumen kerja yang ringkas, dan menyajikannya dalam presentasi yang to the point. Dalam proyek, saya membuat peta risiko, decision log, serta jadwal kerja agar semua pihak melihat gambaran yang sama.
        </p>
        <p>Di sisi nonteknis, saya mengandalkan komunikasi yang jelas, fasilitasi rapat, parafrasa, dan klarifikasi untuk menyamakan makna. Saya belajar mengelola pemangku kepentingan, melakukan negosiasi sederhana, dan membangun ritme kolaborasi yang stabil. Timeboxing, prioritisasi, serta kerja lintas fungsi menjadi alat harian saya agar tim tidak terjebak pada hal yang tidak penting.
        </p>

        <h3 style="color:var(--accent);margin-top:28px;">P – Personality (Profil Kepribadian)</h3>
        <p>Saya cenderung tenang dan reflektif, lebih suka berpikir sejenak sebelum bicara. Struktur yang jelas membuat saya nyaman, tetapi saya cukup fleksibel mengikuti dinamika proses. Dalam tim, saya sering berperan sebagai pendengar yang merangkai ide-ide dan menjembatani bagian yang terputus. Saat dibutuhkan, saya bisa menyampaikan pesan secara lugas, tetap menjaga empati agar orang yang diajak bicara merasa dihormati.
        </p>

        <h3 style="color:var(--accent);margin-top:28px;">E – Experiences (Pengalaman Hidup)</h3>
        <p>Menjadi Vice Project Officer IMPACT 5.0 mengajarkan bahwa menyatukan ratusan panitia dan melayani ratusan peserta tidak cukup dengan semangat. Ritme kecil seperti stand-up singkat, rangkuman objektif, dan penetapan PIC yang jelas terbukti menurunkan tensi dan mengembalikan fokus kerja.
        </p>
        <p>Di TEC ITB, saya belajar bahwa kurasi peluang lomba, bootcamp, dan playbook hanya berguna jika bahasanya mudah dipakai banyak orang. Proses yang rapi membuat orang lebih cepat bergerak karena tahu apa yang harus dilakukan dan kapan harus melapor.
        </p>
        <p>Pada peran external affairs, saya melihat langsung bahwa kepercayaan tumbuh dari janji kecil yang ditepati. Menjelaskan status dengan jujur, menawarkan versi minimum yang layak, serta memberi tenggat pembaruan yang jelas, membuat kolaborasi terasa aman bagi semua pihak.
        </p>
        <p>Dari kompetisi dan karya yang saya ikuti, saya mendapat validasi saat menang, tetapi yang paling bertahan adalah kebiasaan belajar dan mengajarkan kembali. Pola ini membantu saya menjaga motivasi ketika hasil belum sesuai harapan, karena ada pelajaran yang bisa langsung diterapkan pada upaya berikutnya.
        </p>

        <h3 style="text-align:center;color:var(--brand);margin-top:36px;">Pernyataan Misi Pribadi</h3>
        <blockquote style="font-style:italic;text-align:center;color:var(--muted);margin:20px auto 0;max-width:700px;">
          “Kemaslahatan manusia nomor 1. Kenyamanan dan kebebasan selalu akan ku utamakan. Selalu menjadi manusia yang baik dan mengutamakan hidup yang terstruktur untuk menjalani setiap masalah yang ada. Selalu berguna untuk kemajuan teknologi dunia.”
        </blockquote>
      </section>

      <!-- Tabel Ringkasan SHAPE -->
      <div class="shape-wrap">
        <div class="shape-caption">Tabel – Piagam Diri (Self Charter) dan Identitas Naratif</div>
        <div style="overflow-x:auto;">
          <table class="shape-table">
            <thead>
              <tr>
                <th>Komponen</th>
                <th>Deskripsi Reflektif</th>
                <th>Contoh Implementasi Nyata</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>S – Signature Strengths<br><small>(Kekuatan Khas)</small></th>
                <td>
                  Saya membiasakan menjernihkan makna lewat parafrasa, pertanyaan yang spesifik, dan rangkuman singkat sebelum keputusan diambil. Cara berpikir saya sistematis dan MECE, sehingga risiko, ketergantungan, dan prioritas terlihat jelas. Saya disiplin pada ritme kecil yang konsisten, menjaga janji, dan memberi pembaruan status yang ringkas dan transparan. Kekuatan yang sering muncul pada diri saya meliputi gemar belajar, kehati-hatian, penilaian yang jernih, kerja tim, dan kepemimpinan situasional.
                </td>
                <td>
                  Di IMPACT 5.0 membuat peta risiko mingguan, decision log satu halaman, stand-up 10 menit, dan penetapan PIC yang jelas. Di TEC ITB menyusun playbook dan alur kerja yang rapi agar tim cepat bergerak. Pada external affairs menjaga kepercayaan mitra melalui status berkala dan janji kecil yang ditepati.
                </td>
              </tr>
              <tr>
                <th>H – Heart<br><small>(Nilai & Gairah)</small></th>
                <td>
                  Nilai yang saya pegang adalah kejujuran yang sopan, tanggung jawab pada kata-kata sendiri, dan manfaat yang nyata untuk orang lain. Saya percaya teknologi dan proses sederhana bisa mempermudah hidup, sehingga fokus saya pada solusi yang dipakai, bukan sekadar terlihat keren. Saya paling hidup saat membantu tim menemukan arah dan melihat progres harian yang konkret.
                </td>
                <td>
                  Menginisiasi solusi antrean laundry kos dengan alur WhatsApp sederhana agar pemilik usaha dan mahasiswa terbantu. Membimbing adik tingkat, memfasilitasi diskusi, dan mengarahkan langkah kecil yang bisa dilakukan hari itu juga.
                </td>
              </tr>
              <tr>
                <th>A – Aptitudes & Acquired Skills<br><small>(Bakat & Keterampilan)</small></th>
                <td>
                  Teknis: dasar C dan Python, analisis data ringan di Excel atau Google Sheets, riset cepat, penulisan dokumen kerja, dan presentasi ringkas. Nonteknis: komunikasi jernih, fasilitasi rapat, parafrasa dan klarifikasi, pengelolaan pemangku kepentingan, negosiasi sederhana, serta membangun ritme kolaborasi. Saya mengandalkan timeboxing, prioritisasi, dan kerja lintas fungsi agar tim tetap fokus.
                </td>
                <td>
                  Menyusun analisis singkat kebutuhan acara dan timeline di Sheets, menyiapkan deck presentasi yang padat, serta membuat checklist eksekusi. Mengelola komunikasi lintas divisi saat logistik terlambat, dan menegosiasikan solusi minimum viable dengan mitra.
                </td>
              </tr>
              <tr>
                <th>P – Personality<br><small>(Profil Kepribadian)</small></th>
                <td>
                  Saya tenang dan reflektif, cenderung berpikir sebelum berbicara. Saya menyukai struktur yang jelas namun tetap fleksibel pada proses. Dalam tim, saya sering menjadi pendengar yang merangkai ide dan penghubung antarbagi­an. Saat perlu, saya berbicara lugas sambil menjaga empati.
                </td>
                <td>
                  Ketika rapat memanas, saya berhenti sejenak, memparafrasekan inti masalah, lalu menawarkan langkah berikut yang konkret. Pada OHU TEC, saya membantu mengurai hambatan logistik dengan mengubah prioritas, jalur, dan penugasan secara cepat tetapi terarah.
                </td>
              </tr>
              <tr>
                <th>E – Experiences<br><small>(Pengalaman Kunci & Pelajaran)</small></th>
                <td>
                  Pengalaman organisasi dan kompetisi membentuk pola kerja saya. Saya belajar bahwa ritme kecil yang konsisten lebih berdampak daripada semangat sesaat, proses yang rapi memudahkan banyak orang, dan kepercayaan lahir dari janji kecil yang ditepati. Kemenangan memberi validasi, tetapi kebiasaan belajar dan berbagi ilmu yang membuat kemajuan bertahan.
                </td>
                <td>
                  Vice Project Officer IMPACT 5.0 menyatukan ratusan panitia dan peserta dengan mekanisme kerja harian yang stabil. Di TEC ITB mengkurasi peluang lomba, menyusun bootcamp, dan playbook. Pada external affairs menumbuhkan kemitraan melalui update jujur dan solusi sederhana. Berbagai kompetisi diikuti untuk menguji ide, memperbaiki proses, dan mengajar balik ke adik tingkat.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="shape-note">Ringkasan ini melengkapi narasi di atas dan bisa dipakai untuk CV/portfolio.</div>
      </div>
    </article>`
  },

  { id: 'personal-reviews', title: '5 My Personal Reviews', 
    content: `
    <article>
      <section style="max-width:800px;margin:auto;line-height:1.7;">
            <p><a href="https://docs.google.com/spreadsheets/d/1iSByUbGM7iCIk9Jq4fGIp_QTRBDQdjxaonHq9KNEID4/edit?usp=sharing">Link Penilaian Self Assessment</a></p>
            <p><a href="https://chatgpt.com/share/68f99dbf-f52c-8001-8dbe-7936f7c7bd7d">Link Chat Penilaian AI</a></p>`
  },

  { id: 'my-concepts', title: '6 My Concepts', content: placeholder('My Concepts') },
  { id: 'my-opinions', title: '7 My Opinions', content: placeholder('My Opinions') },
  { id: 'my-innovations', title: '8 My Innovations', content: placeholder('My Innovations') },
  { id: 'my-knowledge', title: '9 My Knowledge', content: placeholder('My Knowledge') },
  { id: 'pro-reviews', title: '10 My Professional Reviews', content: placeholder('My Professional Reviews') },
  { id: 'summary', title: '11 Summary', content: placeholder('Summary') },
  { id: 'references', title: 'References', content: placeholder('References') },
];

function placeholder(title) {
  return `<article><p style='color:var(--muted); text-align:center;'>Halaman <b>${title}</b> masih kosong. Silakan isi konten di sini nanti.</p></article>`;
}

function selamatBerjumpa() {
  return `<article>
    <div class='meta' style='justify-content: space-between; display: flex'>
      <div><b>Author</b><br>Muhammad Faris Daffa</div>
      <div><b>Published</b><br>${new Date().toLocaleDateString('id-ID')}</div>
    </div>
    <div class='divider'></div>
    <div class='hero-wrapper'>
      <div class='hero'>
        <div class='copy'>
          <h2>Aksi nyata untuk Masyarakat dan dunia!</h2>
          <p>Business and Data Enthusiast yang suka banget main di bidang circular economi untuk kemajuan anak bangsa !</p>
        </div>
        <div class='img' style="background: url('assets/Proper Photo Faris.jpg') center/cover no-repeat; border: none;"></div>
      </div>
    </div>
    <section style='margin-top:40px;'>
      <h3 style='text-align:center;'>About me</h3>
      <p style='text-align:center;'>Mahasiswa tingkat 2 di Sekolah Teknik Elektro dan Informatika-Komputasi Institut Teknologi Bandung.</p>
      <p style='text-align:center;'>Mengelaborasikan Bisnis, Data, dan informatika, Memiliki cita cita Project Manager, Consulting, dan Data Analyst. Memiliki minat yang tinggi pada kompetisi Business Case Competition dan Data Science Competition.</p>
    </section>
  </article>`;
}

const toc = document.getElementById('toc');
const contentEl = document.getElementById('page-content');
const titleEl = document.getElementById('page-title');

/* ======= INDEX KONTEN UNTUK SEARCH ======= */
const CONTENT_INDEX = Object.fromEntries(
  PAGES.map(p => {
    const div = document.createElement('div');
    div.innerHTML = p.content;
    const text = (div.textContent || "").toLowerCase();
    return [p.id, text];
  })
);

function countHits(text, q){
  if (!q) return 0;
  const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const m = (text.match(new RegExp(safe, 'gi')) || []);
  return m.length;
}

function renderToc(list){
  const q = (document.getElementById('search').value || "").toLowerCase().trim();
  toc.innerHTML = list.map(p => {
    const hits = q ? countHits((CONTENT_INDEX[p.id] || "") + " " + p.title.toLowerCase(), q) : 0;
    const badge = q && hits ? `<small style="float:right;color:var(--muted)">${hits}</small>` : "";
    return `<li><a href="#${p.id}" data-id="${p.id}">${p.title}${badge}</a></li>`;
  }).join('');
  bindToc();
  setActive(location.hash.slice(1) || (list[0]?.id || 'selamat-berjumpa'));
}

function bindToc() {
  toc.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setActive(a.dataset.id)));
}

function setActive(id) {
  toc.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.dataset.id === id));
  navigate(id);
}

function navigate(id) {
  const p = PAGES.find(x => x.id === id) || PAGES[0];
  titleEl.textContent = p.title;
  contentEl.innerHTML = p.content;             
  contentEl.style.animation = 'fadeUp .5s var(--ease)';

  if (p.id !== 'kisah-identitas') {
    addParagraphTabs(contentEl, '3em');
  }

  const q = (document.getElementById('search').value || '').trim().toLowerCase();
  if(q) highlightInElement(contentEl, q);
}



// escape regex special chars
function escapeRegExp(str){ return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function addParagraphTabs(root, width = '1.5em') {
  if (!root) return;
  root.querySelectorAll('p').forEach(p => {
    if (p.dataset._tabbed === '1') return;
    const span = document.createElement('span');
    span.className = 'para-tab';
    span.style.display = 'inline-block';
    span.style.width = (typeof width === 'number') ? (width + 'px') : width;
    span.style.minWidth = span.style.width;
    p.insertBefore(span, p.firstChild);
    p.dataset._tabbed = '1';
  });
}

// highlight semua kemunculan q di dalam elemen (DOM-safe, per text node)
function highlightInElement(root, q){
  if(!q) return;
  const re = new RegExp(escapeRegExp(q), 'gi');
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const hits = [];
      let node;
  while(node = walker.nextNode()){
    // skip text di dalam <script>/<style> atau anak <mark>
    const p = node.parentNode;
    if(!p || p.closest('mark') || /^(SCRIPT|STYLE)$/.test(p.tagName)) continue;
    if(re.test(node.nodeValue)) hits.push(node);
  }
  hits.forEach(n=>{
    const frag = document.createDocumentFragment();
    const text = n.nodeValue;
    let last = 0;
    text.replace(re, (m, offset)=>{
      if(offset > last) frag.appendChild(document.createTextNode(text.slice(last, offset)));
      const mark = document.createElement('mark');
      mark.textContent = m;
      frag.appendChild(mark);
      last = offset + m.length;
      return m;
    });
    if(last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    n.parentNode.replaceChild(frag, n);
  });
}

renderToc(PAGES);
navigate(location.hash.slice(1) || 'selamat-berjumpa');

/* =======  SEARCH BY CONTENT  ======= */
document.getElementById('search').addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim();
  if (!q) { renderToc(PAGES); return; }

  const filtered = PAGES.filter(p => {
    const inTitle = p.title.toLowerCase().includes(q);
    const inBody  = (CONTENT_INDEX[p.id] || "").includes(q);
    return inTitle || inBody;
  });

  renderToc(filtered);
});

// Inject hover-zoom CSS for table cells used in the SHAPE table
(function(){
  const id = 'shape-zoom-style';
  if (document.getElementById(id)) return;
  const css = `
  /* Only enable visual hover effects on larger screens */
  @media (min-width: 700px) {
    /* Allow transformed cells to overflow visually while keeping scroll container functional */
    .shape-wrap { overflow: visible; }
    .shape-wrap > div { overflow-x: auto; overflow-y: visible !important; }

    /* Keep table layout stable while allowing visual transform */
    .shape-table { border-collapse: separate; }

    .shape-table td {
      transition: transform 1s cubic-bezier(.2,.9,.2,1), box-shadow 1s, z-index 0s;
      background: white;
      transform-origin: center center;
      position: relative;
      z-index: 1;
      will-change: transform;
      backface-visibility: hidden;
      /* ensure background covers area when rounded */
      -webkit-backface-visibility: hidden;
    }

    /* Scale visually on hover without affecting layout */
    .shape-table td:hover {
      transform: scale(1.4);
      z-index: 50;
      border-radius: 8px;
      box-shadow: 0 12px 28px rgba(0,0,0,0.12);
      background-clip: padding-box;
    }
  }
  `;
  const s = document.createElement('style');
  s.id = id;
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);
})();

(function(){
  const styleId = 'shape-portal-style';
  if (!document.getElementById(styleId)) {
    const css = `
    /* Portal styling only for larger screens */
    @media (min-width: 700px) {
      .shape-cell-portal {
        position: fixed;
        /* no transform scaling: we will animate size/position instead */
        transform-origin: center center;
        transition: left 1s cubic-bezier(.2,.9,.2,1), top 1s cubic-bezier(.2,.9,.2,1),
                    width 1s cubic-bezier(.2,.9,.2,1), height 1s cubic-bezier(.2,.9,.2,1),
                    box-shadow .18s;
        pointer-events: none;
        background: var(--card-bg, #fff);
        box-sizing: border-box;
        border-radius: 8px;
        overflow: hidden;
        will-change: left, top, width, height;
        padding: 18px 20px;
        justify-content: center;
        align-items: center;
        display: flex;
        font-size: 1.2rem;
      }
    }
    `;
    const s = document.createElement('style');
    s.id = styleId;
    s.appendChild(document.createTextNode(css));
    document.head.appendChild(s);
  }

  let portal = null;
  let sourceEl = null;

  function createPortalFor(el){
    removePortal();
    sourceEl = el;
    const rect = el.getBoundingClientRect();
    const scale = 1.4;

    portal = el.cloneNode(true);
    portal.classList.add('shape-cell-portal');
    portal.style.margin = '0';
    portal.style.left = rect.left + 'px';
    portal.style.top = rect.top + 'px';
    portal.style.width = rect.width + 'px';
    portal.style.height = rect.height + 'px';
    portal.style.zIndex = 9999;
    portal.setAttribute('aria-hidden', 'true');
    document.body.appendChild(portal);

    requestAnimationFrame(()=>{
      const targetW = Math.round(rect.width * scale);
      const targetH = Math.round(rect.height * scale);
      const targetLeft = Math.round(rect.left - (targetW - rect.width) / 2);
      const targetTop  = Math.round(rect.top  - (targetH - rect.height) / 2);

      portal.style.left = targetLeft + 'px';
      portal.style.top = targetTop + 'px';
      portal.style.width = targetW + 'px';
      portal.style.height = targetH + 'px';
      portal.style.boxShadow = '0 12px 28px rgba(0,0,0,0.12)';
    });
  }

  function removePortal(){
    if (portal && portal.parentNode) {
      portal.parentNode.removeChild(portal);
    }
    portal = null;
    sourceEl = null;
  }

  function updatePortalPosition(){
    if (!portal || !sourceEl) return;
    const rect = sourceEl.getBoundingClientRect();
    const scale = 1.1;
    const targetW = Math.round(rect.width * scale);
    const targetH = Math.round(rect.height * scale);
    const targetLeft = Math.round(rect.left - (targetW - rect.width) / 2);
    const targetTop  = Math.round(rect.top  - (targetH - rect.height) / 2);

    portal.style.left = targetLeft + 'px';
    portal.style.top = targetTop + 'px';
    portal.style.width = targetW + 'px';
    portal.style.height = targetH + 'px';
  }

  document.addEventListener('pointerenter', e => {
    // only on sufficiently wide viewports
    if (window.innerWidth < 700) return;
    const td = e.target.closest('.shape-table td');
    if (td) createPortalFor(td);
  }, {capture: true});

  document.addEventListener('pointerleave', e => {
    if (window.innerWidth < 700) return;
    const from = e.target.closest('.shape-table td');
    if (!from) return;
    const to = e.relatedTarget;
    if (to && to.closest && to.closest('.shape-table td') === from) return;
    removePortal();
  }, {capture: true});

  document.addEventListener('focusin', e => {
    if (window.innerWidth < 700) return;
    const td = e.target.closest('.shape-table td');
    if (td) createPortalFor(td);
  });
  document.addEventListener('focusout', e => {
    if (window.innerWidth < 700) return;
    const td = e.target.closest('.shape-table td');
    if (td) removePortal();
  });

  window.addEventListener('scroll', updatePortalPosition, {passive:true});
  window.addEventListener('resize', updatePortalPosition);

  document.addEventListener('touchstart', e => {
    // avoid portal on touch devices / small screens
    if (window.innerWidth < 700) return;
    const td = e.target.closest('.shape-table td');
    if (td) createPortalFor(td);
  }, {passive:true});
  document.addEventListener('touchend', () => {
    if (window.innerWidth < 700) return;
    removePortal();
  });

  

document.addEventListener("DOMContentLoaded", () => {
  const brandEl = document.querySelector(".brand");
  if (!brandEl) return;

  const fullText = brandEl.textContent.trim();
  brandEl.textContent = "";
  brandEl.classList.add("typing");

  const typingSpeed = 80;       
  const deletingSpeed = 50;     
  const pauseAfterFull = 5000; 

  let index = 0;
  let isDeleting = false;

  function step() {
    if (!isDeleting) {
      if (index < fullText.length) {
        brandEl.textContent += fullText.charAt(index);
        index++;
        setTimeout(step, typingSpeed);
      } else {
        setTimeout(() => {
          isDeleting = true;
          setTimeout(step, deletingSpeed);
        }, pauseAfterFull);
      }
    } else {
      if (index > 0) {
        brandEl.textContent = fullText.slice(0, index - 1);
        index--;
        setTimeout(step, deletingSpeed);
      } else {
        isDeleting = false;
        setTimeout(step, typingSpeed);
      }
    }
  }

  step();
});

})();

(function initFarisChat(){
  if (document.getElementById('faris-chat-toggle')) return;

  const css = `
  #faris-chat-toggle{position:fixed;right:16px;bottom:16px;width:52px;height:52px;border-radius:999px;border:none;background:#1f8dd6;color:#fff;box-shadow:0 10px 30px rgba(0,0,0,0.12);z-index:99999;font-size:20px;cursor:pointer}
  #faris-chat{position:fixed;right:16px;bottom:86px;z-index:99999;display:none}
  .faris-chat-window{width:320px;max-width:92vw;background:#ffffff;border-radius:12px;box-shadow:0 18px 40px rgba(0,0,0,0.14);overflow:hidden;display:flex;flex-direction:column;border:1px solid #eef2f6}
  .faris-chat-header{padding:10px 12px;background:#1f8dd6;color:#fff;display:flex;justify-content:space-between;align-items:center}
  .faris-chat-body{padding:12px;min-height:120px;max-height:280px;overflow:auto;background:linear-gradient(180deg,#fbfdfe,#fff)}
  .faris-chat-message{margin:8px 0;padding:8px 10px;border-radius:8px;max-width:85%;line-height:1.3;font-size:14px;color:#0b1220;background:#f6f8fa;box-shadow:0 6px 18px rgba(0,0,0,0.04)}
  .faris-chat-message.user{margin-left:auto;background:#0b4a6f;color:#fff}
  .faris-chat-form{display:flex;gap:8px;padding:10px;border-top:1px solid #eef2f6}
  .faris-chat-form input{flex:1;padding:8px 10px;border-radius:8px;border:1px solid #e6eef6}
  .faris-chat-form button{padding:8px 12px;border-radius:8px;border:none;background:#1f8dd6;color:#fff}
  `;
  const s = document.createElement('style'); s.id='faris-chat-style'; s.appendChild(document.createTextNode(css)); document.head.appendChild(s);

  const toggle = document.createElement('button'); toggle.id='faris-chat-toggle'; toggle.title='Chat with Faris'; toggle.type='button'; toggle.textContent='💬';
  const container = document.createElement('div'); container.id='faris-chat'; container.setAttribute('aria-hidden','true');
  container.innerHTML = `
    <div class="faris-chat-window" role="dialog" aria-label="Chat Faris">
      <div class="faris-chat-header"><strong>Chat Faris</strong><button id="faris-chat-close" aria-label="Tutup" style="background:none;border:none;color:rgba(255,255,255,.95);font-size:16px;cursor:pointer">✕</button></div>
      <div class="faris-chat-body" id="faris-chat-body"></div>
      <form id="faris-chat-form" class="faris-chat-form"><input id="faris-chat-input" placeholder="Tanya mis. 'Faris sekolah di mana?'" autocomplete="off"/><button type="submit">Kirim</button></form>
    </div>`;

  document.body.appendChild(container); document.body.appendChild(toggle);

  const chat = document.getElementById('faris-chat');
  const body = document.getElementById('faris-chat-body');
  const form = document.getElementById('faris-chat-form');
  const input = document.getElementById('faris-chat-input');
  const closeBtn = document.getElementById('faris-chat-close');

  function openChat(){ chat.style.display='block'; chat.setAttribute('aria-hidden','false'); input.focus(); }
  function closeChat(){ chat.style.display='none'; chat.setAttribute('aria-hidden','true'); }

  toggle.addEventListener('click', ()=>{ if (chat.style.display==='block') closeChat(); else openChat(); });
  closeBtn.addEventListener('click', closeChat);

  function appendMessage(text, who='bot'){
    // accept a string or an array of strings
    if (Array.isArray(text)){
      for (const t of text){
        const m = document.createElement('div'); m.className = 'faris-chat-message ' + (who==='user'?'user':'bot'); m.textContent = t; body.appendChild(m);
      }
      body.scrollTop = body.scrollHeight;
      return;
    }
    const m = document.createElement('div'); m.className = 'faris-chat-message ' + (who==='user'?'user':'bot'); m.textContent = text; body.appendChild(m); body.scrollTop = body.scrollHeight;
  }

  function answerFromContent(q){
    const ql = (q||'').toLowerCase();
    for (const p of PAGES){
      if (!p.title) continue;
      const t = p.title.toLowerCase();
      if (ql.includes(t) || ql.includes(p.id) || /tampilkan halaman|buka halaman|tampilkan page|show page/.test(ql)){
        const whole = extractWholePageById(p.id);
        if (whole) return whole;
      }
    }
    const sectionMatch = matchSectionFromQuery(ql);
    if (sectionMatch) return sectionMatch;
    if (/prinsip komunikasi|prinsip komunikasi saya|prinsip|komunikasi/i.test(ql)){
      const page = (PAGES.find(p=>p.id==='kisah-identitas') || {}).content || '';
      const div = document.createElement('div'); div.innerHTML = page;
      const bolds = Array.from(div.querySelectorAll('b'));
      let ol = null;
      for (const b of bolds){
        if (/prinsip komunikasi/i.test((b.textContent||''))){
          let next = b.nextElementSibling;
          while(next && next.nodeType !== 1) next = next.nextSibling;
          if (next && next.tagName === 'OL') { ol = next; break; }
          const p = b.parentElement;
          if (p){ const found = p.querySelector('ol'); if (found){ ol = found; break; } }
        }
      }
      if (ol){
        const lis = Array.from(ol.querySelectorAll('li')).slice(0,5).map(li=>li.textContent.trim().replace(/\s+/g,' '));
        if (lis.length) return lis; 
      }
    }

    if (/impact\s*5\.?0|impact5|vice project officer|vice project/i.test(ql)){
      const page = (PAGES.find(p=>p.id==='kisah-identitas') || {}).content || '';
      const div = document.createElement('div'); div.innerHTML = page;

      const ols = Array.from(div.querySelectorAll('ol'));
      for (const ol of ols){
        const lis = Array.from(ol.querySelectorAll('li'));
        for (const li of lis){
          const text = (li.textContent || '').trim().replace(/\s+/g,' ');
          if (/vice\s+project\s+officer\b/i.test(text) || (/vice\s+project/i.test(text) && /impact/i.test(text)) || /impact\s*5\.?0/i.test(text)){
            return [text];
          }
        }
      }

      const bolds = Array.from(div.querySelectorAll('b'));
      for (const b of bolds){
        if (/nilai kerja|capaian singkat|nilai kerja dan capaian singkat/i.test(b.textContent || '')){
          const p = b.parentElement;
          if (p){
            const foundOl = p.querySelector('ol');
            if (foundOl){
              const match = Array.from(foundOl.querySelectorAll('li')).find(li => /vice\s+project\s+officer|impact\s*5\.?0/i.test(li.textContent || ''));
              if (match) return [(match.textContent || '').trim().replace(/\s+/g,' ')];
            }
          }
        }
      }

      const raw = (div.textContent || '').trim();
      const idx = raw.toLowerCase().indexOf('vice project officer');
      if (idx >= 0) {
        const excerpt = raw.slice(idx, idx + 180).replace(/\s+/g,' ').trim();
        return [excerpt];
      }
    }

    if (/pendekatan digital|pendekatan|digital/i.test(ql)){
      const page = (PAGES.find(p=>p.id==='kisah-identitas') || {}).content || '';
      const div = document.createElement('div'); div.innerHTML = page;
      const candidates = Array.from(div.querySelectorAll('b,h2,h3,h4'));
      for (const c of candidates){
        if (/pendekatan digital|pendekatan/i.test(c.textContent || '')){
          let next = c.nextElementSibling;
          while(next && next.nodeType !== 1) next = next.nextSibling;
          if (next && next.tagName === 'P') return (next.textContent||'').trim().replace(/\s+/g,' ');
          if (c.parentElement){ const p = c.parentElement.querySelector('p'); if (p) return (p.textContent||'').trim().replace(/\s+/g,' '); }
        }
      }
    }

    if (/\b(sekolah|kuliah|jurusan|kampus|studi|di mana|kuliah di)\b/.test(ql)){
      const allText = Object.values(CONTENT_INDEX).join('\n');
      const hasItb = /institut teknologi bandung|itb/i.test(allText);
      const hasMajor = /(sistem dan teknologi informasi|sistem teknologi informasi|teknologi informasi)/i.test(allText);
        if (hasItb){
        let out = 'Institut Teknologi Bandung';
        if (hasMajor) out += ' jurusan Sistem dan Teknologi Informasi';
        return [out];
      }
    }

      if (/\b(visi|visi singkat)\b/i.test(ql)){
        const v = extractVisiSingkat();
        if (v) return [v];
        return 'Chatbot ini masih memerlukan pembelajaran lebih lanjut; jawaban tidak ada dalam cerita Faris.';
      }

      if (/\b(about|about me|about faris|perkenalan|perkenalkan)\b/i.test(ql)){
        const page = (PAGES.find(p=>p.id==='selamat-berjumpa') || {}).content || '';
        const div = document.createElement('div'); div.innerHTML = page;
        const hs = Array.from(div.querySelectorAll('h2,h3,h4'));
        for (const h of hs){
          if (/about me|about|perkenalan/i.test(h.textContent || '')){
            const out = [];
            let next = h.nextElementSibling;
            while(next && !/^H[234]$/.test(next.tagName) && out.length < 3){
              if (next.tagName === 'P') out.push((next.textContent||'').trim().replace(/\s+/g,' '));
              next = next.nextElementSibling;
            }
            if (out.length) return out.join('\n\n');
          }
        }
        const firstP = div.querySelector('p');
        if (firstP) return (firstP.textContent || '').trim().replace(/\s+/g,' ');
        return 'Chatbot ini masih memerlukan pembelajaran lebih lanjut; jawaban tidak ada dalam cerita Faris.';
      }

    if (/\btec\b|tec itb|tec/i.test(ql)){
      const page = (PAGES.find(p=>p.id==='kisah-identitas') || {}).content || '';
      const div = document.createElement('div'); div.innerHTML = page;
      const ols = Array.from(div.querySelectorAll('ol'));
      for (const ol of ols){
        const match = Array.from(ol.querySelectorAll('li')).find(li => /tec\s*itb/i.test(li.textContent || ''));
        if (match) return [(match.textContent || '').trim().replace(/\s+/g,' ')];
      }
      const raw = (div.textContent || '');
      const idx = raw.toLowerCase().indexOf('tec itb');
      if (idx >= 0) return [raw.slice(idx, idx + 220).replace(/\s+/g,' ').trim()];
    }

    if (/\b(prestasi|juara|elected|juara 1|octofinal|studentsxceos|electra)\b/i.test(ql)){
      const page = (PAGES.find(p=>p.id==='kisah-identitas') || {}).content || '';
      const div = document.createElement('div'); div.innerHTML = page;
      const bolds = Array.from(div.querySelectorAll('b'));
      for (const b of bolds){
        if (/prestasi/i.test(b.textContent || '')){
          let next = b.nextElementSibling;
          while(next && next.nodeType !== 1) next = next.nextSibling;
          if (next && next.tagName === 'OL'){
            const lis = Array.from(next.querySelectorAll('li')).map(li=>li.textContent.trim().replace(/\s+/g,' '));
            if (lis.length) return lis;
          }
          const p = b.parentElement;
          if (p){ const found = p.querySelector('ol'); if (found){ const lis = Array.from(found.querySelectorAll('li')).map(li=>li.textContent.trim().replace(/\s+/g,' ')); if (lis.length) return lis; } }
        }
      }
      const lines = (div.textContent || '').split(/\n|\r/).map(l=>l.trim()).filter(Boolean);
      const hits = lines.filter(l=>/juara|octofinal|studentsxceos|electra|competition|lomba/i.test(l));
      if (hits.length) return hits;
    }

    const terms = ql.split(/\s+/).filter(Boolean);
    if (terms.length){
      for (const [id, text] of Object.entries(CONTENT_INDEX)){
        let score = 0; for (const t of terms) if (text.includes(t)) score++;
        if (score>0){
          const idx = text.indexOf(terms.find(t=>text.includes(t)));
          const excerpt = text.slice(Math.max(0, idx-60), idx+200).replace(/\s+/g,' ');
          const e = excerpt.trim() + (excerpt.length < 200 ? '' : '…');
          return [e];
        }
      }
    }

    return 'Maaf, saya tidak menemukan jawaban di konten.';
  }

  function matchSectionFromQuery(ql){
    if (!ql) return null;
    const qClean = (ql || '').replace(/[^\w\s\-\u00C0-\u024F]/g, ' ').trim().replace(/\s+/g, ' ').toLowerCase();
    const qWords = qClean.split(/\s+/).filter(Boolean);
    for (const page of PAGES){
      const div = document.createElement('div'); div.innerHTML = page.content || '';
      const candidates = Array.from(div.querySelectorAll('h1,h2,h3,h4,h5,h6,b'));
      for (const cand of candidates){
        const heading = (cand.textContent || '').trim().replace(/\s+/g,' ');
        if (!heading) continue;
        const hk = heading.toLowerCase();

        const hkClean = hk.replace(/[^\w\s\-\u00C0-\u024F]/g, ' ').trim().replace(/\s+/g,' ');

        if (qClean && (hkClean.includes(qClean) || qClean.includes(hkClean))){
          if (cand.tagName === 'B'){
            let ul = cand.nextElementSibling && (cand.nextElementSibling.tagName === 'UL' || cand.nextElementSibling.tagName === 'OL') ? cand.nextElementSibling : null;
            if (!ul && cand.parentElement) ul = cand.parentElement.querySelector('ul,ol');
            if (ul){ const lis = Array.from(ul.querySelectorAll('li')).map(li=>li.textContent.trim().replace(/\s+/g,' ')); if (lis.length) return lis; }
          }

          const got = collectAfterNode(cand);
          if (got) return got;
        }

        const hWords = hkClean.split(/\s+/).filter(Boolean);
        let common = 0;
        for (const w of qWords) if (hWords.includes(w)) common++;
        if (common >= 2){
          const got = collectAfterNode(cand);
          if (got) return got;
        }
      }
    }
    return null;
  }

  function extractWholePageById(pageId){
    const page = PAGES.find(p=>p.id === pageId);
    if (!page) return null;
    const div = document.createElement('div'); div.innerHTML = page.content || '';
    const paras = [];
    const section = div.querySelector('section') || div;
    Array.from(section.children).forEach(ch=>{
      if (ch.tagName === 'P') paras.push((ch.textContent||'').trim().replace(/\s+/g,' '));
      if (ch.tagName === 'OL' || ch.tagName === 'UL'){
        const lis = Array.from(ch.querySelectorAll('li')).map(li=>li.textContent.trim().replace(/\s+/g,' '));
        paras.push(...lis);
      }
      if (/^H[1-6]$/.test(ch.tagName)){
        let next = ch.nextElementSibling;
        if (next && next.tagName === 'P') paras.push((next.textContent||'').trim().replace(/\s+/g,' '));
      }
    });
    return paras.length ? paras : null;
  }

  function collectAfterNode(node){
    const pieces = [];
    let next = node.nextElementSibling;
    while(next){
      if (/^H[1-6]$/.test(next.tagName) || (next.tagName === 'B' && (next.textContent||'').trim().length < 60 && /:\s*$/.test((next.textContent||'')))) break;
      if (next.tagName === 'P') pieces.push((next.textContent||'').trim().replace(/\s+/g,' '));
      if (next.tagName === 'OL' || next.tagName === 'UL'){
        const lis = Array.from(next.querySelectorAll('li')).map(li=>li.textContent.trim().replace(/\s+/g,' '));
        if (lis.length) return lis;
      }
      if (next.tagName === 'DIV'){
        const ps = Array.from(next.querySelectorAll('p'));
        if (ps.length) { pieces.push(...ps.map(p=> (p.textContent||'').trim().replace(/\s+/g,' '))); }
        const ol = next.querySelector('ol,ul');
        if (ol){ const lis = Array.from(ol.querySelectorAll('li')).map(li=>li.textContent.trim().replace(/\s+/g,' ')); if (lis.length) return lis; }
      }
      next = next.nextElementSibling;
    }
    return pieces.length ? pieces : null;
  }

  function extractVisiSingkat(){
    const page = (PAGES.find(p=>p.id==='kisah-identitas') || {}).content || '';
    const div = document.createElement('div'); div.innerHTML = page;
    const bolds = Array.from(div.querySelectorAll('b'));
    for (const b of bolds){
      if (/visi singkat|visi/i.test(b.textContent || '')){
        let next = b.nextElementSibling;
        while(next && next.nodeType !== 1) next = next.nextSibling;
        if (next && next.tagName === 'P') return (next.textContent || '').trim().replace(/\s+/g,' ');
        const p = b.parentElement; if (p){ const found = p.querySelector('p'); if (found) return (found.textContent||'').trim().replace(/\s+/g,' '); }
      }
    }
    const hs = Array.from(div.querySelectorAll('h2,h3,h4'));
    for (const h of hs){
      if (/visi singkat|visi/i.test(h.textContent || '')){
        let next = h.nextElementSibling; while(next && next.nodeType !== 1) next = next.nextSibling;
        if (next && next.tagName === 'P') return (next.textContent || '').trim().replace(/\s+/g,' ');
      }
    }
    const allText = (div.textContent || '').split(/\n|\r/).map(l=>l.trim()).filter(Boolean);
    const hit = allText.find(l => l.startsWith('Saya ingin mengerjakan solusi yang mempermudah') || l.startsWith('Saya ingin mengerjakan solusi'));
    if (hit) return hit.replace(/\s+/g,' ');
    return null;
  }

  form.addEventListener('submit', e=>{
    e.preventDefault(); const q = input.value.trim(); if(!q) return; appendMessage(q,'user'); input.value=''; appendMessage('Mencari jawaban…'); setTimeout(()=>{ const bots = body.querySelectorAll('.faris-chat-message.bot'); if (bots.length) bots[bots.length-1].remove(); const ans = answerFromContent(q); appendMessage(ans,'bot'); },300);
  });

  appendMessage('Halo! Tanyakan sesuatu seperti: "Faris sekolah di mana?"');

})();
