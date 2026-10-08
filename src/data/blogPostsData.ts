// src/data/blogPostsData.ts
// Comprehensive, SEO-optimized Govt Examination & Document Preparation Master Blog Repository

export interface QuickFact {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  title_hi?: string;
  title_mr?: string;
  metaTitle?: string;
  metaTitle_hi?: string;
  metaTitle_mr?: string;
  metaDescription?: string;
  metaDescription_hi?: string;
  metaDescription_mr?: string;
  excerpt: string;
  excerpt_hi?: string;
  excerpt_mr?: string;
  category: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity';
  category_hi?: string;
  category_mr?: string;
  country?: 'PK' | 'PH' | 'BD' | 'NP' | 'IN' | 'US' | 'ID';
  publishDate: string;
  publishTime?: string;
  lastUpdated?: string;
  deployedAt?: string;
  author: string;
  authorRole: string;
  authorRole_hi?: string;
  authorRole_mr?: string;
  readTime: string;
  readTime_hi?: string;
  readTime_mr?: string;
  tags: string[];
  featured?: boolean;
  relatedExamPreset?: string;
  quickFacts?: QuickFact[];
  quickFacts_hi?: QuickFact[];
  quickFacts_mr?: QuickFact[];
  faqs?: FAQItem[];
  faqs_hi?: FAQItem[];
  faqs_mr?: FAQItem[];
  contentHtml: string;
  contentHtml_hi?: string;
  contentHtml_mr?: string;
}

export function getBlogPostTitle(post: BlogPost, lang?: string): string {
  if (lang === 'hi' && post.title_hi) return post.title_hi;
  if (lang === 'mr' && post.title_mr) return post.title_mr;
  return post.title;
}

export function getBlogPostExcerpt(post: BlogPost, lang?: string): string {
  if (lang === 'hi' && post.excerpt_hi) return post.excerpt_hi;
  if (lang === 'mr' && post.excerpt_mr) return post.excerpt_mr;
  return post.excerpt;
}

export function getBlogPostContent(post: BlogPost, lang?: string): string {
  if (lang === 'hi' && post.contentHtml_hi) return post.contentHtml_hi;
  if (lang === 'mr' && post.contentHtml_mr) return post.contentHtml_mr;
  return post.contentHtml;
}

export const BLOG_POSTS: BlogPost[] = [
  {
  "slug": "cpns-sscasn-2026-panduan-daftar-pasfoto-merah-swafoto-kompres-100-300kb",
  "title": "Panduan Lengkap Pendaftaran CPNS & PPPK 2026: Ukuran Pasfoto Latar Merah (400×600 px), Swafoto & Kompres Dokumen 100–300 KB",
  "metaTitle": "Panduan Pendaftaran CPNS 2026: Pasfoto 400x600 & Swafoto SSCASN",
  "metaDescription": "Panduan resmi pendaftaran CPNS & PPPK 2026 portal SSCASN BKN: ukuran pasfoto latar merah (400x600 px, 100-300 KB), swafoto selfie, scan KTP, e-meterai & kompres dokumen PDF.",
  "excerpt": "Buku panduan lengkap pelamar CPNS dan PPPK 2026 di portal resmi sscasn.bkn.go.id: standar pasfoto formal latar merah (400×600 px, 100–300 KB), swafoto selfie, pembubuhan e-meterai Peruri, serta kompres dokumen KTP dan surat lamaran PDF tanpa pecah.",
  "category": "Guidelines & Tips",
  "country": "ID",
  "publishDate": "Oct 08, 2026",
  "lastUpdated": "Oct 08, 2026",
  "author": "SignResize Indonesia Recruitment Desk",
  "authorRole": "Spesialis Kepatuhan Berkas CASN & Standar Biometrik BKN",
  "readTime": "16 min read",
  "featured": true,
  "tags": [
    "CPNS 2026",
    "Daftar CPNS 2026",
    "SSCASN BKN",
    "Pasfoto CPNS 400x600",
    "Pasfoto Latar Merah CPNS",
    "Swafoto CPNS 2026",
    "Kompres Foto CPNS 100 300 KB",
    "e-Meterai CPNS Peruri",
    "Syarat Dokumen CPNS 2026",
    "Surat Lamaran CPNS PDF",
    "PPPK 2026",
    "Jadwal Seleksi CPNS BKN"
  ],
  "relatedExamPreset": "id-cpns",
  "quickFacts": [
    {
      "label": "Instansi Penyelenggara",
      "value": "Badan Kepegawaian Negara (BKN) RI & Seluruh Kementerian/Lembaga/Daerah"
    },
    {
      "label": "Portal Resmi Seleksi",
      "value": "sscasn.bkn.go.id (Sistem Seleksi Calon Aparatur Sipil Negara)"
    },
    {
      "label": "Dimensi Pasfoto Formal",
      "value": "400 × 600 piksel (Rasio 3:4 tegak, ukuran cetak 4×6 cm)"
    },
    {
      "label": "Latar Belakang Pasfoto",
      "value": "Merah Polos Solid (#FF0000) tanpa corak, bayangan, atau gradasi"
    },
    {
      "label": "Ukuran File Pasfoto Formal",
      "value": "100 KB – 300 KB (Format JPG/JPEG, wajib terbaca jernih)"
    },
    {
      "label": "Ukuran File Swafoto (Selfie)",
      "value": "200 KB – 500 KB (Format JPG/JPEG, orientasi portrait tegak)"
    },
    {
      "label": "Format Dokumen Pendukung",
      "value": "Scan KTP (JPG maks 200 KB), Surat Lamaran & Pernyataan (PDF maks 500 KB + e-Meterai)"
    }
  ],
  "faqs": [
    {
      "question": "Berapa ukuran resmi pasfoto formal dan latar belakang untuk pendaftaran CPNS & PPPK 2026?",
      "answer": "Pasfoto formal untuk portal SSCASN BKN wajib beresolusi minimal 400 × 600 piksel (rasio 3:4 tegak / 4×6 cm) dengan latar belakang merah polos solid (#FF0000). Ukuran file harus berada di rentang 100 KB hingga 300 KB dalam format JPG/JPEG. Foto wajib tajam dan diambil dalam 3-6 bulan terakhir."
    },
    {
      "question": "Apa perbedaan mendasar antara pasfoto formal dan swafoto (selfie) di portal SSCASN?",
      "answer": "Pasfoto formal adalah foto studio resmi berlatar belakang merah dengan kemeja putih rapi berkerah, digunakan sebagai identitas kartu ujian dan profil instansi (100–300 KB). Swafoto (selfie) adalah foto potret wajah pelamar yang diambil secara mandiri untuk verifikasi biometrik pengenalan wajah pada tahap awal pembuatan akun SSCASN (200–500 KB)."
    },
    {
      "question": "Apakah pelamar wanita berhijab boleh memakai kerudung selain warna hitam untuk pasfoto CPNS?",
      "answer": "BKN dan instansi pembina CASN mewajibkan jilbab/kerudung berwarna hitam polos atau gelap pekat tanpa motif. Jilbab warna merah dilarang keras karena menyatu dengan latar belakang, sedangkan jilbab putih dikhawatirkan menyatu dengan kemeja putih. Bagian wajah wajib terlihat jelas dari kening hingga dagu."
    },
    {
      "question": "Bagaimana cara mengatasi ukuran file pasfoto yang kurang dari 100 KB atau lebih dari 300 KB?",
      "answer": "Gunakan fitur Target File Size di SignResize CPNS Resizer. Sistem akan mengunci rentang file secara otomatis ke 100–300 KB. Jika file asli terlalu kecil (<100 KB), sistem melakukan optimasi bitrate quantizer agar memenuhi batas minimal SSCASN tanpa menurunkan kejernihan visual."
    },
    {
      "question": "Mengapa berkas pasfoto formal sering ditolak atau memicu status TMS pada seleksi administrasi?",
      "answer": "Penyebab utama TMS (Tidak Memenuhi Syarat) meliputi: (1) Latar belakang berwarna biru atau memiliki bayangan dinding kusam; (2) Dimensi terdistorsi/gepeng akibat kompresi kasar; (3) Menggunakan kaos oblong atau kemeja non-formal; (4) Foto hasil scan cetakan kertas bukan file studio digital asli; dan (5) Wajah tertutup masker, poni panjang, atau kacamata gelap."
    },
    {
      "question": "Bagaimana aturan pakaian resmi pasfoto CPNS untuk pelamar pria dan wanita?",
      "answer": "Pria wajib mengenakan kemeja putih formal berkerah panjang/pendek dan dasi hitam (beberapa instansi mewajibkan jas hitam). Wanita mengenakan kemeja putih berkerah, dan bagi yang berjilbab wajib mengenakan jilbab hitam polos rapi yang dimasukkan ke dalam kerah baju atau disematkan simetris."
    },
    {
      "question": "Kapan dan bagaimana pembubuhan e-meterai resmi Peruri dilakukan pada dokumen lamaran CPNS?",
      "answer": "e-Meterai dibubuhkan pada Surat Lamaran dan Surat Pernyataan sebelum diunggah ke SSCASN. Tanda tangan manual atau digital harus diletakkan di sebelah kiri meterai elektronik. Meterai tidak boleh menutupi teks tulisan, tanda tangan, atau nomor barcode verifikasi meterai."
    },
    {
      "question": "Apakah foto swafoto masih harus memegang KTP fisik dan Kartu Informasi Akun SSCASN?",
      "answer": "Pada mekanisme pendaftaran SSCASN BKN terbaru, pelamar umumnya hanya perlu mengunggah swafoto portrait wajah secara mandiri melalui kamera web atau ponsel tanpa memegang KTP. Namun, pelamar tetap disarankan mengecek buku petunjuk teknis spesifik instansi yang dilamar."
    },
    {
      "question": "Bisakah saya mengganti foto atau memperbaiki dokumen setelah mengklik tombol 'Akhiri Pendaftaran'?",
      "answer": "Tidak bisa. Setelah Anda menekan tombol 'Akhiri Pendaftaran' (Resume) pada resume pendaftaran SSCASN, seluruh berkas, pasfoto, dan pilihan formasi terkunci permanen. Anda tidak dapat melakukan perubahan apa pun hingga pengumuman masa sanggah."
    },
    {
      "question": "Apakah aman menggunakan SignResize untuk crop dan kompres pasfoto CPNS?",
      "answer": "Sangat aman. SignResize memproses seluruh proses crop, resize piksel (400×600), dan kompresi KB 100% secara lokal di dalam browser Anda menggunakan HTML5 Canvas. Tidak ada foto pribadi atau data KTP yang diunggah ke server eksternal, menjamin kerahasiaan identitas Anda."
    }
  ],
  "contentHtml": "\n<div class=\"space-y-8 text-foreground leading-relaxed\">\n\n  <!-- Interactive Diagnostic Anchor Jump Bar -->\n  <div class=\"p-4 sm:p-5 rounded-2xl bg-muted/40 border border-border shadow-xs not-prose\">\n    <div class=\"text-xs font-bold text-foreground mb-3 flex items-center gap-2\">\n      <span class=\"w-2 h-2 rounded-full bg-red-600 animate-pulse\"></span>\n      <span>Menu Cepat Diagnostik Berkas SSCASN CPNS 2026:</span>\n    </div>\n    <div class=\"flex flex-wrap gap-2 text-xs\">\n      <a href=\"#spesifikasi-pasfoto-merah\" class=\"px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition font-medium\">📸 Pasfoto 400×600 (Latar Merah)</a>\n      <a href=\"#panduan-swafoto-selfie\" class=\"px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition font-medium\">🤳 Ketentuan Swafoto (200-500 KB)</a>\n      <a href=\"#kompres-pdf-dokumen\" class=\"px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition font-medium\">📄 Batas Ukuran Scan KTP &amp; PDF</a>\n      <a href=\"#pembubuhan-emeterai-peruri\" class=\"px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition font-medium\">📜 Panduan e-Meterai Peruri</a>\n      <a href=\"#alur-pendaftaran-sscasn\" class=\"px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition font-medium\">⚡ Alur Langkah SSCASN</a>\n      <a href=\"#troubleshooting-upload-error\" class=\"px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition font-medium\">🛠️ Solusi Gagal Unggah &amp; TMS</a>\n      <a href=\"#faq-resmi-cpns\" class=\"px-3 py-1.5 rounded-lg bg-card border border-border hover:border-primary hover:text-primary transition font-medium\">❓ FAQ Resmi BKN</a>\n    </div>\n  </div>\n\n  <!-- Hero Direct Action Tool Card -->\n  <div class=\"p-6 rounded-2xl bg-gradient-to-r from-red-500/10 via-primary/10 to-amber-500/10 border-2 border-red-500/30 not-prose flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm\">\n    <div class=\"space-y-2\">\n      <div class=\"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20\">\n        <span>🇮🇩 Alat Resmi Siap Pakai</span>\n      </div>\n      <h3 class=\"text-lg sm:text-xl font-extrabold text-foreground\">\n        Ubah Ukuran Pasfoto CPNS ke 400×600 px (100–300 KB) Sekarang\n      </h3>\n      <p class=\"text-xs sm:text-sm text-muted-foreground max-w-xl\">\n        Gunakan studio resizer pasfoto CPNS SSCASN BKN otomatis. Mengunci rasio 3:4 tegak, kompresi akurat di bawah 300 KB tanpa buram, dan panduan crop simetri wajah.\n      </p>\n    </div>\n    <a href=\"/id/cpns-sscasn-photo-resizer/\" class=\"px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition flex items-center gap-2 shrink-0\">\n      <span>Buka Resizer Pasfoto CPNS</span>\n      <span>→</span>\n    </a>\n  </div>\n\n  <!-- Section 1: Pengantar Seleksi CASN 2026 -->\n  <section class=\"space-y-4\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Ketentuan Ketat Berkas Seleksi CPNS &amp; PPPK 2026\n    </h2>\n    <p>\n      Pendaftaran Calon Pegawai Negeri Sipil (CPNS) dan Pegawai Pemerintah dengan Perjanjian Kerja (PPPK) tahun 2026 melalui portal terintegrasi <strong>Badan Kepegawaian Negara (BKN)</strong> di <a href=\"https://sscasn.bkn.go.id\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline font-medium\">sscasn.bkn.go.id</a> menerapkan standar verifikasi berkas digital berbasis sistem <em>Optical Character Recognition (OCR)</em> dan algoritma pengenalan wajah biometrik (<em>Face Recognition</em>).\n    </p>\n    <p>\n      Statistik seleksi nasional menunjukkan bahwa lebih dari <strong>18% pelamar gugur pada tahap Seleksi Administrasi (status TMS - Tidak Memenuhi Syarat)</strong> bukan karena kualifikasi akademik yang kurang, melainkan akibat kesalahan teknis sepele: pasfoto berukuran di bawah 100 KB, latar belakang bukan merah solid, swafoto miring, atau surat lamaran PDF yang rusak akibat kompresor online abal-abal.\n    </p>\n  </section>\n\n  <!-- Section 2: Master Tabel Spesifikasi Berkas SSCASN -->\n  <section id=\"spesifikasi-pasfoto-merah\" class=\"space-y-4 scroll-mt-24\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Matriks Spesifikasi Teknis Berkas Pendaftaran SSCASN BKN 2026\n    </h2>\n    <p>\n      Tabel berikut merangkum batas minimum, maksimum, format, dan rasio seluruh berkas yang wajib diunggah pada portal SSCASN:\n    </p>\n\n    <div class=\"overflow-x-auto not-prose my-6 rounded-2xl border border-border shadow-xs\">\n      <table class=\"w-full text-left border-collapse text-xs sm:text-sm\">\n        <thead>\n          <tr class=\"bg-muted/70 text-foreground border-b border-border font-bold\">\n            <th class=\"p-3 sm:p-4\">Jenis Dokumen</th>\n            <th class=\"p-3 sm:p-4\">Dimensi / Rasio</th>\n            <th class=\"p-3 sm:p-4\">Batas Ukuran File</th>\n            <th class=\"p-3 sm:p-4\">Format Resmi</th>\n            <th class=\"p-3 sm:p-4\">Ketentuan Khusus</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-border/60\">\n          <tr class=\"hover:bg-muted/20 transition\">\n            <td class=\"p-3 sm:p-4 font-bold text-foreground\">Pasfoto Formal</td>\n            <td class=\"p-3 sm:p-4 font-mono\">400 × 600 px (3:4)</td>\n            <td class=\"p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-bold\">100 KB – 300 KB</td>\n            <td class=\"p-3 sm:p-4 font-mono\">JPG / JPEG</td>\n            <td class=\"p-3 sm:p-4\">Latar merah polos (#FF0000), kemeja putih berkerah, tampak depan simetris</td>\n          </tr>\n          <tr class=\"hover:bg-muted/20 transition\">\n            <td class=\"p-3 sm:p-4 font-bold text-foreground\">Swafoto (Selfie)</td>\n            <td class=\"p-3 sm:p-4 font-mono\">Portrait (Bebas Proporsional)</td>\n            <td class=\"p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-bold\">200 KB – 500 KB</td>\n            <td class=\"p-3 sm:p-4 font-mono\">JPG / JPEG</td>\n            <td class=\"p-3 sm:p-4\">Wajah jelas tanpa filter, pencahayaan merata, orientasi tegak lurus</td>\n          </tr>\n          <tr class=\"hover:bg-muted/20 transition\">\n            <td class=\"p-3 sm:p-4 font-bold text-foreground\">Scan KTP Asli</td>\n            <td class=\"p-3 sm:p-4 font-mono\">Landscape Kartu</td>\n            <td class=\"p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-bold\">Maksimal 200 KB</td>\n            <td class=\"p-3 sm:p-4 font-mono\">JPG / JPEG</td>\n            <td class=\"p-3 sm:p-4\">e-KTP fisik asli atau Surat Keterangan Dukcapil, NIK dan foto wajib terbaca jelas</td>\n          </tr>\n          <tr class=\"hover:bg-muted/20 transition\">\n            <td class=\"p-3 sm:p-4 font-bold text-foreground\">Surat Lamaran</td>\n            <td class=\"p-3 sm:p-4 font-mono\">Standar Dokumen A4</td>\n            <td class=\"p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-bold\">Maksimal 500 KB</td>\n            <td class=\"p-3 sm:p-4 font-mono\">PDF</td>\n            <td class=\"p-3 sm:p-4\">Sesuai format instansi, bertanda tangan basah / digital + pembubuhan e-Meterai</td>\n          </tr>\n          <tr class=\"hover:bg-muted/20 transition\">\n            <td class=\"p-3 sm:p-4 font-bold text-foreground\">Surat Pernyataan</td>\n            <td class=\"p-3 sm:p-4 font-mono\">Standar Dokumen A4</td>\n            <td class=\"p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-bold\">Maksimal 500 KB</td>\n            <td class=\"p-3 sm:p-4 font-mono\">PDF</td>\n            <td class=\"p-3 sm:p-4\">Surat pernyataan 5 poin BKN / instansi, tanda tangan + pembubuhan e-Meterai</td>\n          </tr>\n          <tr class=\"hover:bg-muted/20 transition\">\n            <td class=\"p-3 sm:p-4 font-bold text-foreground\">Ijazah Asli</td>\n            <td class=\"p-3 sm:p-4 font-mono\">Standar Dokumen A4</td>\n            <td class=\"p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-bold\">Maksimal 1000 KB (1 MB)</td>\n            <td class=\"p-3 sm:p-4 font-mono\">PDF</td>\n            <td class=\"p-3 sm:p-4\">Scan warna asli dari ijazah fisik, bukan legalisir fotokopi (kecuali diminta)</td>\n          </tr>\n          <tr class=\"hover:bg-muted/20 transition\">\n            <td class=\"p-3 sm:p-4 font-bold text-foreground\">Transkrip Nilai Asli</td>\n            <td class=\"p-3 sm:p-4 font-mono\">Standar Dokumen A4</td>\n            <td class=\"p-3 sm:p-4 text-emerald-600 dark:text-emerald-400 font-bold\">Maksimal 1000 KB (1 MB)</td>\n            <td class=\"p-3 sm:p-4 font-mono\">PDF</td>\n            <td class=\"p-3 sm:p-4\">Scan warna seluruh halaman transkrip asli, nilai IPK dan cap stempel terbaca jelas</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </section>\n\n  <!-- Section 3: Detail Pasfoto Formal Latar Merah -->\n  <section class=\"space-y-4\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Aturan Baku Pasfoto Formal CPNS (Latar Belakang Merah Solid)\n    </h2>\n    <p>\n      Pasfoto formal adalah citra resmi Anda yang akan dicetak pada <strong>Kartu Peserta Ujian SKD / SKB</strong> serta tercantum pada pangkalan data profil ASN. Ketentuan resmi yang tidak dapat ditawar meliputi:\n    </p>\n\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-4\">\n      <div class=\"p-4 rounded-xl bg-card border border-border space-y-2\">\n        <h4 class=\"font-bold text-sm text-foreground flex items-center gap-2\">\n          <span class=\"text-emerald-500 font-bold\">✓</span>\n          <span>Ketentuan Pria</span>\n        </h4>\n        <ul class=\"text-xs text-muted-foreground space-y-1.5 list-disc list-inside\">\n          <li>Kemeja putih polos berkerah tegak, rapi dan disetrika licin.</li>\n          <li>Menggunakan dasi panjang hitam rapi (beberapa instansi mewajibkan jas hitam).</li>\n          <li>Rambut rapi, tidak menutupi kening atau telinga, tidak diwarnai mencolok.</li>\n          <li>Pandangan mata lurus ke arah lensa kamera, ekspresi netral atau tersenyum sopan tanpa memperlihatkan gigi.</li>\n          <li>Tidak memakai kacamata hitam, topi, peci, atau aksesoris wajah berlebihan.</li>\n        </ul>\n      </div>\n\n      <div class=\"p-4 rounded-xl bg-card border border-border space-y-2\">\n        <h4 class=\"font-bold text-sm text-foreground flex items-center gap-2\">\n          <span class=\"text-emerald-500 font-bold\">✓</span>\n          <span>Ketentuan Wanita (Non-Hijab &amp; Berhijab)</span>\n        </h4>\n        <ul class=\"text-xs text-muted-foreground space-y-1.5 list-disc list-inside\">\n          <li>Kemeja putih formal berkerah.</li>\n          <li><strong>Bagi yang berhijab:</strong> Wajib memakai jilbab hitam polos tanpa motif, dimasukkan ke dalam kerah baju atau disematkan simetris. Dilarang jilbab merah atau corak ramai.</li>\n          <li><strong>Bagi yang tidak berhijab:</strong> Rambut disisir rapi ke belakang telinga, kening dan kedua telinga terlihat jelas.</li>\n          <li>Riasan wajah (makeup) natural, tidak menor, tidak menggunakan softlens berwarna tajam.</li>\n          <li>Latar belakang merah murni (#FF0000) tanpa bayangan jatuh pada backdrop.</li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <!-- Section 4: Panduan Swafoto (Selfie) -->\n  <section id=\"panduan-swafoto-selfie\" class=\"space-y-4 scroll-mt-24\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Panduan Lengkap Swafoto (Selfie) Akun SSCASN\n    </h2>\n    <p>\n      Swafoto diunggah saat pertama kali Anda mendaftarkan akun di portal SSCASN. Tujuannya adalah untuk mencocokkan data visual Anda dengan data biometrik e-KTP di Ditjen Kependudukan dan Pencatatan Sipil (Dukcapil) Kemendagri.\n    </p>\n    <ul class=\"space-y-2 text-sm text-muted-foreground list-disc list-inside\">\n      <li><strong>Ukuran File:</strong> Wajib di antara <strong>200 KB hingga 500 KB</strong>. Jika kurang dari 200 KB, portal akan menolak dengan notifikasi <em>\"Ukuran file swafoto terlalu kecil\"</em>.</li>\n      <li><strong>Posisi Pengambilan:</strong> Ambil foto dalam format portrait (vertikal). Jarak kamera sekitar 40–60 cm dari wajah, memperlihatkan kepala hingga bahu.</li>\n      <li><strong>Pencahayaan:</strong> Pastikan cahaya datang dari depan, bukan dari belakang kepala (<em>backlight</em>) yang membuat wajah gelap gulita.</li>\n      <li><strong>Pakaian:</strong> Mengenakan pakaian rapi dan sopan (kemeja berkerah atau pakaian beretika).</li>\n      <li><strong>Status Memegang KTP:</strong> Pada pembaruan portal SSCASN BKN terkini, swafoto umumnya difokuskan pada potret wajah pelamar secara jelas. Apabila instansi tertentu mewajibkan memegang KTP fisik dan Kartu Akun, pastikan tulisan pada KTP tidak terbalik (matikan fitur mirror kamera ponsel).</li>\n    </ul>\n  </section>\n\n  <!-- Section 5: e-Meterai Peruri dan Tanda Tangan -->\n  <section id=\"pembubuhan-emeterai-peruri\" class=\"space-y-4 scroll-mt-24\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Panduan Pembubuhan e-Meterai Peruri &amp; Tanda Tangan Dokumen\n    </h2>\n    <p>\n      Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi (PANRB) serta BKN mewajibkan penggunaan meterai elektronik resmi <strong>(e-Meterai Peruri)</strong> untuk Surat Lamaran dan Surat Pernyataan:\n    </p>\n\n    <div class=\"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-muted-foreground space-y-3 not-prose\">\n      <div class=\"font-bold text-amber-600 dark:text-amber-400 flex items-center gap-2\">\n        <span>⚠️</span>\n        <span>Aturan Posisi Pembubuhan e-Meterai yang Sah:</span>\n      </div>\n      <ol class=\"list-decimal list-inside space-y-2\">\n        <li><strong>Tanda Tangan di Kiri, e-Meterai di Kanan:</strong> Berbeda dengan meterai tempel fisik yang harus terkena coretan tanda tangan, e-Meterai <strong>TIDAK BOLEH</strong> ditumpuk atau ditimpa oleh tanda tangan.</li>\n        <li><strong>Barcode Harus Utuh:</strong> QR Code dan kode unik 22 digit pada e-Meterai harus terlihat jelas agar dapat divalidasi oleh scanner resmi Peruri.</li>\n        <li><strong>Urutan Pengerjaan yang Benar:</strong> Tulis surat lamaran → Konversi ke format PDF → Bubuhkan tanda tangan (digital atau tanda tangan basah yang di-scan) → Unggah ke portal resmi e-meterai untuk pembubuhan stempel elektronik → Unduh hasil PDF → Periksa ukuran file (maksimal 500 KB).</li>\n        <li><strong>Jangan Kompres PDF e-Meterai Sembarangan:</strong> Mengompresi file PDF setelah dibubuhi e-Meterai menggunakan software kompresor sembarangan dapat merusak tanda tangan digital (digital signature) di dalam dokumen, menyebabkannya terdeteksi sebagai dokumen tidak valid.</li>\n      </ol>\n    </div>\n  </section>\n\n  <!-- Section 6: Alur Langkah Pendaftaran SSCASN -->\n  <section id=\"alur-pendaftaran-sscasn\" class=\"space-y-4 scroll-mt-24\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Alur Langkah Pendaftaran di Portal SSCASN BKN 2026\n    </h2>\n    <div class=\"space-y-3 not-prose text-xs sm:text-sm\">\n      <div class=\"p-4 rounded-xl border border-border bg-card flex items-start gap-3\">\n        <span class=\"w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0\">1</span>\n        <div>\n          <strong class=\"text-foreground\">Pembuatan Akun SSCASN:</strong>\n          <p class=\"text-muted-foreground mt-0.5\">Akses sscasn.bkn.go.id, masukkan NIK, Nomor KK, nama lengkap, tempat tanggal lahir, dan unggah Scan KTP (maks 200 KB) serta Swafoto (200–500 KB).</p>\n        </div>\n      </div>\n\n      <div class=\"p-4 rounded-xl border border-border bg-card flex items-start gap-3\">\n        <span class=\"w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0\">2</span>\n        <div>\n          <strong class=\"text-foreground\">Pengisian Biodata Lengkap:</strong>\n          <p class=\"text-muted-foreground mt-0.5\">Lengkapi data pribadi, gelar depan/belakang, alamat domisili, akun media sosial, serta data disabilitas (apabila melamar jalur khusus disabilitas).</p>\n        </div>\n      </div>\n\n      <div class=\"p-4 rounded-xl border border-border bg-card flex items-start gap-3\">\n        <span class=\"w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0\">3</span>\n        <div>\n          <strong class=\"text-foreground\">Pemilihan Jenis Seleksi &amp; Formasi Instansi:</strong>\n          <p class=\"text-muted-foreground mt-0.5\">Pilih jenis formasi (Umum, Cumlaude, Putra/Putri Papua, Disabilitas), instansi tujuan, jabatan, dan lokasi ujian titik lokasi BKN.</p>\n        </div>\n      </div>\n\n      <div class=\"p-4 rounded-xl border border-border bg-card flex items-start gap-3\">\n        <span class=\"w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0\">4</span>\n        <div>\n          <strong class=\"text-foreground\">Unggah Seluruh Dokumen Pendukung:</strong>\n          <p class=\"text-muted-foreground mt-0.5\">Unggah Pasfoto formal latar merah (100–300 KB), Surat Lamaran &amp; Pernyataan ber-e-Meterai (PDF maks 500 KB), Ijazah asli (PDF maks 1 MB), dan Transkrip nilai asli (PDF maks 1 MB).</p>\n        </div>\n      </div>\n\n      <div class=\"p-4 rounded-xl border border-border bg-card flex items-start gap-3\">\n        <span class=\"w-6 h-6 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0\">5</span>\n        <div>\n          <strong class=\"text-foreground\">Pengecekan Resume &amp; Cetak Kartu:</strong>\n          <p class=\"text-muted-foreground mt-0.5\">Cek seluruh isian pada lembar Resume. Teliti pratinjau setiap dokumen yang diunggah. Jika sudah yakin 100%, klik Akhiri Pendaftaran dan unduh Kartu Informasi Akun serta Kartu Pendaftaran CASN.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- Section 7: Troubleshooting Error & TMS -->\n  <section id=\"troubleshooting-upload-error\" class=\"space-y-4 scroll-mt-24\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Diagnostik &amp; Solusi Cepat Error Unggah SSCASN BKN\n    </h2>\n\n    <div class=\"overflow-x-auto not-prose my-4 rounded-2xl border border-border\">\n      <table class=\"w-full text-left text-xs sm:text-sm\">\n        <thead class=\"bg-muted/70 text-foreground font-bold border-b border-border\">\n          <tr>\n            <th class=\"p-3 sm:p-4\">Kode / Gejala Masalah</th>\n            <th class=\"p-3 sm:p-4\">Penyebab Sistem</th>\n            <th class=\"p-3 sm:p-4\">Solusi Cepat Terverifikasi</th>\n          </tr>\n        </thead>\n        <tbody class=\"divide-y divide-border/60\">\n          <tr>\n            <td class=\"p-3 sm:p-4 font-mono font-bold text-red-600 dark:text-red-400\">File size di bawah 100 KB</td>\n            <td class=\"p-3 sm:p-4 text-muted-foreground\">Kompresor menurunkan kualitas gambar secara drastis hingga file terlalu kecil.</td>\n            <td class=\"p-3 sm:p-4 text-foreground\">Gunakan SignResize dengan preset <strong>CPNS SSCASN</strong>, file otomatis diposisikan di kisaran aman 150–250 KB.</td>\n          </tr>\n          <tr>\n            <td class=\"p-3 sm:p-4 font-mono font-bold text-red-600 dark:text-red-400\">Dimensi foto gepeng / stretch</td>\n            <td class=\"p-3 sm:p-4 text-muted-foreground\">Crop tidak mempertahankan rasio aspek 3:4 (400×600 px).</td>\n            <td class=\"p-3 sm:p-4 text-foreground\">Kunci opsi <em>Aspect Ratio Lock (3:4)</em> saat cropping wajah pelamar.</td>\n          </tr>\n          <tr>\n            <td class=\"p-3 sm:p-4 font-mono font-bold text-red-600 dark:text-red-400\">Server BKN 500 / Network Error</td>\n            <td class=\"p-3 sm:p-4 text-muted-foreground\">Traffic ribuan pelamar bersamaan pada jam sibuk menjelang penutupan formasi.</td>\n            <td class=\"p-3 sm:p-4 text-foreground\">Unggah berkas pada jam sepi pengunjung (00.00 – 06.00 WIB) dan bersihkan cache browser.</td>\n          </tr>\n          <tr>\n            <td class=\"p-3 sm:p-4 font-mono font-bold text-red-600 dark:text-red-400\">e-Meterai gagal verifikasi</td>\n            <td class=\"p-3 sm:p-4 text-muted-foreground\">File PDF dikompres atau diedit kembali setelah pembubuhan stempel elektronik.</td>\n            <td class=\"p-3 sm:p-4 text-foreground\">Pastikan dokumen PDF tidak diubah sedikit pun setelah dibubuhi meterai elektronik resmi.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </section>\n\n  <!-- Section 8: Hubungan Antar Alat (Internal Links) -->\n  <section class=\"space-y-4\">\n    <h2 class=\"text-2xl font-bold tracking-tight text-foreground\">\n      Alat Bantu Terkait untuk Persiapan Dokumen Indonesia\n    </h2>\n    <p>\n      Selain seleksi CPNS, pastikan seluruh kebutuhan pasfoto administrasi Anda terstandarisasi dengan alat-alat khusus berikut:\n    </p>\n    <div class=\"grid grid-cols-1 sm:grid-cols-3 gap-3 not-prose my-4\">\n      <a href=\"/id/cpns-sscasn-photo-resizer/\" class=\"p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-sm transition space-y-1 group\">\n        <div class=\"text-xs font-bold text-foreground group-hover:text-primary\">CPNS Photo Resizer</div>\n        <div class=\"text-[11px] text-muted-foreground\">400×600 px latar merah dan swafoto 100-300 KB.</div>\n      </a>\n      <a href=\"/id/utbk-snbt-photo-resizer/\" class=\"p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-sm transition space-y-1 group\">\n        <div class=\"text-xs font-bold text-foreground group-hover:text-primary\">UTBK-SNBT Resizer</div>\n        <div class=\"text-[11px] text-muted-foreground\">Pasfoto 4×6 cm SNPMB Kemendikbud 80-300 KB.</div>\n      </a>\n      <a href=\"/id/indonesia-passport-visa-photo-resizer/\" class=\"p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-sm transition space-y-1 group\">\n        <div class=\"text-xs font-bold text-foreground group-hover:text-primary\">Paspor &amp; eVisa Imigrasi</div>\n        <div class=\"text-[11px] text-muted-foreground\">Pasfoto 3.5×4.5 cm latar putih standar ICAO.</div>\n      </a>\n    </div>\n  </section>\n\n</div>\n"
},
  {
  "slug": "ppsc-online-apply-guide-photo-resizer-25kb-roll-no-slip-challan-2026",
  "title": "PPSC Online Apply Guide 2026: 25 KB Photo & Signature Resizer, Challan Form, Roll No Slip & Planner",
  "metaTitle": "PPSC Online Apply 2026: 25 KB Photo Resizer & Roll No Slip",
  "metaDescription": "Master PPSC Pakistan 2026 guide: step-by-step online apply portal, 25 KB photo & signature resizing (200×230 px), Challan fee via JazzCash/PSID, roll no slips & planner.",
  "excerpt": "Official candidate handbook for Punjab Public Service Commission (PPSC) 2026: online application workflow, 25 KB photo and signature resizer (200×230 px), 17-digit PSID fee payment, roll no slip download, and exam planner tracking.",
  "category": "Guidelines & Tips",
  "country": "PK",
  "publishDate": "Oct 08, 2026",
  "lastUpdated": "Oct 08, 2026",
  "author": "SignResize Pakistan Recruitment & Standards Desk",
  "authorRole": "Provincial Civil Services & Document Compliance Specialist",
  "readTime": "15 min read",
  "featured": true,
  "tags": [
    "PPSC Online Apply",
    "PPSC Photo Resizer 25KB",
    "PPSC Signature Resizer 25KB",
    "PPSC Roll No Slip",
    "PPSC Challan Form",
    "PPSC Planner 2026",
    "PPSC Image Resizer 200x230",
    "PPSC Jobs 2026",
    "PPSC Admission Letter",
    "PPSC PSID Fee Payment",
    "PPSC Past Papers",
    "PPSC Result 2026"
  ],
  "relatedExamPreset": "ppsc-pk",
  "quickFacts": [
    {
      "label": "Recruitment Commission",
      "value": "Punjab Public Service Commission (PPSC), Govt of Punjab, Pakistan"
    },
    {
      "label": "Official Candidate Portal",
      "value": "ppsc.gop.pk (Online Job Application System)"
    },
    {
      "label": "Photograph Upload Boundary",
      "value": "Strictly ≤ 25.0 KB (JPG / JPEG format, 200 × 230 pixels recommended)"
    },
    {
      "label": "Signature Upload Boundary",
      "value": "Strictly ≤ 25.0 KB (JPG / JPEG format, clear handwritten signature)"
    },
    {
      "label": "CNIC Front Scan Boundary",
      "value": "Strictly ≤ 25.0 KB (Clear, non-blurry front copy of original CNIC)"
    },
    {
      "label": "Bank Challan / e-Receipt Boundary",
      "value": "Strictly ≤ 25.0 KB (Bank Challan Form 32-A or 1-Link e-receipt screenshot)"
    },
    {
      "label": "Application Processing Fee",
      "value": "PKR 600 (Standard BS-16/BS-17 posts) / PKR 1,000 (PMS Competitive Exam)"
    },
    {
      "label": "Digital Fee Channels",
      "value": "17-digit PSID via 1-Link, JazzCash, EasyPaisa, NayaPay, Mobile Banking, ATMs"
    },
    {
      "label": "Admission Letter (Roll No Slip)",
      "value": "Generated online under 'Print Admission Letter' using 13-digit CNIC"
    },
    {
      "label": "PPSC Planner Schedule",
      "value": "Dynamic schedule tracking exams, written test dates, and interview calls"
    }
  ],
  "faqs": [
    {
      "question": "What are the exact photo and signature size specifications for PPSC Pakistan?",
      "answer": "Digital photographs and signatures uploaded to the Punjab Public Service Commission (PPSC) portal must strictly measure ==equal to or less than 25.0 KB== in ==JPG / JPEG format==. The recommended pixel dimensions are ==200 pixels width by 230 pixels height== on a plain white or light blue background. Any file weighing 25.1 KB or higher is automatically rejected by the portal upload script."
    },
    {
      "question": "How do I resize a photograph or signature to under 25 KB for PPSC?",
      "answer": "You can use the dedicated ==SignResize PPSC Photo & Signature Resizer==. Upload your photo or signature scan, select the PPSC Pakistan preset (200×230 px, ≤25 KB), adjust the crop box around your face or handwriting, and download the optimized JPG file. The entire process runs 100% locally in your web browser memory with zero server uploads."
    },
    {
      "question": "What is the maximum file size for uploading a CNIC front copy and bank receipt on PPSC?",
      "answer": "Both the ==CNIC front side image and the bank receipt (or paid e-challan screenshot)== are capped at ==strictly under 25.0 KB in JPG format==. High-resolution phone photographs of CNIC cards and bank slips often exceed 3 MB; you must compress them down below 25 KB while maintaining clear legibility of the CNIC number and bank transaction ID."
    },
    {
      "question": "Why does the PPSC portal display 'File size exceeds 25 KB' or reject my image?",
      "answer": "This error occurs because the PPSC web server runs an automated server-side file validator that rejects any uploaded file whose byte weight exceeds ==25,600 bytes (25 KB)==. Modern smartphone cameras capture images between 2 MB and 10 MB. Using a calibrated compressor like SignResize reduces the file weight to ==18–24 KB== without blurring crucial facial details."
    },
    {
      "question": "How do I pay the PPSC application fee online using JazzCash, EasyPaisa, or 1-Link PSID?",
      "answer": "When filling out your PPSC online application, the system generates a ==17-digit PSID (Consumer ID)== starting with 312. Open your JazzCash, EasyPaisa, or bank mobile app, go to the 'Govt Payments' or 'Bill Payment' section, select 'GoPb (Government of Punjab)', paste your 17-digit PSID, and confirm the PKR 600 payment. Save the digital transaction screenshot and compress it below 25 KB for upload if prompted."
    },
    {
      "question": "How can I download and print my PPSC Roll No Slip (Admission Letter)?",
      "answer": "To download your PPSC roll number slip, visit ==ppsc.gop.pk==, click on ==Print Admission Letter== in the main navigation menu, enter your ==13-digit CNIC without dashes==, select the applied post from the dropdown list, and click Submit. Download the generated PDF, print it in clear black-and-white or color, and bring it to the exam hall along with your original CNIC."
    },
    {
      "question": "What is the PPSC Planner and how do candidates use it?",
      "answer": "The ==PPSC Planner== is an official real-time recruitment tracking dashboard on ppsc.gop.pk. It displays case numbers, total received applications, tentative written test dates, paper checking progress, interview schedules, and final recommendation dates for every advertised job case."
    },
    {
      "question": "What background color is mandatory for PPSC photographs?",
      "answer": "PPSC officially accepts photographs with a ==plain white or light blue background==. Dark backgrounds, room shadows, outdoor selfies, or patterned curtains trigger manual scrutiny flags and can lead to disqualification during preliminary document verification."
    },
    {
      "question": "Can I upload a picture of my CNIC taken with a mobile camera?",
      "answer": "Yes, you can capture your original CNIC front side using your smartphone camera in bright, even lighting. However, you must crop away all surrounding bedsheets, tables, or background surfaces and compress the final JPG below ==25 KB== while ensuring your 13-digit CNIC number, full name, and photograph remain completely legible."
    },
    {
      "question": "What should I do if my payment status is not updated immediately on the PPSC portal?",
      "answer": "When paying via 1-Link PSID, transaction reconciliation usually reflects within ==5 to 15 minutes==. If the portal still shows unpaid status, do not make a second payment immediately; refresh your application session using your CNIC and application number after 20 minutes, or verify that the 17-digit PSID was entered correctly in your banking app."
    },
    {
      "question": "Are signatures in capital letters accepted by PPSC?",
      "answer": "No. Signatures must be executed in ==natural running handwriting== in blue or black ballpoint ink on plain white paper. Writing your name in block capital letters is considered invalid and can cause application rejection."
    },
    {
      "question": "Does SignResize store or view my CNIC, photo, or fee challan images?",
      "answer": "No. ==SignResize processes all image resizing, cropping, and compression entirely inside your web browser using HTML5 Canvas APIs==. Zero files, personal identity details, CNIC numbers, or photos are ever uploaded to any cloud server or third-party database."
    }
  ],
  "contentHtml": "\n<!-- Sticky Diagnostic Anchor Jump Bar -->\n<div class=\"my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95\">\n  <div class=\"flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping\"></span>\n      <h3 class=\"text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground\">🇵🇰 Instant PPSC Online Application Failure Finder</h3>\n    </div>\n    <span class=\"text-[10px] font-mono text-muted-foreground\">Jump directly to your specific PPSC portal error or guide section</span>\n  </div>\n\n  <!-- Jump Action Chips -->\n  <div class=\"flex flex-wrap gap-2 text-xs\">\n    <a href=\"#failure-photo-25kb\" class=\"px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>📸</span>\n      <span>Photo &amp; Signature &le;25 KB Clamp</span>\n    </a>\n    <a href=\"#failure-cnic-scan\" class=\"px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>🪪</span>\n      <span>CNIC Front Scan &le;25 KB Fix</span>\n    </a>\n    <a href=\"#failure-psid-payment\" class=\"px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>💳</span>\n      <span>17-Digit PSID Fee Payment</span>\n    </a>\n    <a href=\"#failure-rollno-slip\" class=\"px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>🎫</span>\n      <span>Roll No Slip &amp; Admission Letter</span>\n    </a>\n    <a href=\"#ppsc-planner-guide\" class=\"px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>📅</span>\n      <span>PPSC Planner Exam Schedule</span>\n    </a>\n    <a href=\"#online-workflow\" class=\"px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-800 dark:text-cyan-200 border border-cyan-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>📝</span>\n      <span>Step-by-Step Online Apply</span>\n    </a>\n  </div>\n</div>\n\n<section id=\"overview\" class=\"space-y-4\">\n  <div class=\"p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground\">\n    <p class=\"text-sm sm:text-base font-semibold leading-relaxed\">\n      <strong>PPSC Pakistan Recruitment &amp; Document Scrutiny Overview 2026:</strong> Applying for Punjab Public Service Commission positions (such as Lecturer, Educator, Tehsildar, Sub-Inspector, Assistant, PMS Competitive Examination, or specialized provincial posts) requires completing the online application on <a href=\"https://www.ppsc.gop.pk\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline\">ppsc.gop.pk</a>. Every candidate must upload four critical digital files: a recent photograph, a handwritten signature, the front copy of their original CNIC, and their paid bank challan or e-payment receipt. Every single file must weigh strictly <strong>equal to or less than 25 KB</strong> in JPG format.\n    </p>\n  </div>\n\n  <p>\n    More than <strong>25% of candidates experience upload timeouts or automated rejection alerts</strong> during the online submission process. The primary obstacle is the strict <strong>25.0 KB file size ceiling</strong> enforced by the PPSC web server. When raw smartphone photos (which usually weigh 3 MB to 8 MB) are uploaded directly, the server rejects them immediately. Compressing an image too aggressively with uncalibrated tools results in illegible CNIC text or blurred facial features, both of which trigger disqualification during document scrutiny.\n  </p>\n\n  <p>\n    This master diagnostic guide outlines every official technical parameter, decodes portal error messages, explains how to pay fees using the 17-digit PSID via JazzCash, EasyPaisa, or 1-Link, provides step-by-step instructions for downloading roll number slips, and connects you directly to our free client-side tool: the <a href=\"/pk/ppsc-signature-resize/\" class=\"text-primary font-semibold underline\">SignResize PPSC Photo &amp; Signature Resizer (25 KB)</a>.\n  </p>\n</section>\n\n<!-- Section 1: Master PPSC Technical Specifications -->\n<section id=\"master-specs\" class=\"space-y-4 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>📐 1.</span> Master PPSC Technical &amp; Document Upload Specifications\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Official technical benchmarks governing digital image and identity document uploads on the Punjab Public Service Commission online recruitment portal.\n  </p>\n\n  <div class=\"overflow-x-auto rounded-2xl border border-border bg-card shadow-xs\">\n    <table class=\"w-full text-xs sm:text-sm text-left border-collapse\">\n      <thead class=\"bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border\">\n        <tr>\n          <th class=\"px-4 py-3\">Document Category</th>\n          <th class=\"px-4 py-3\">Maximum File Weight</th>\n          <th class=\"px-4 py-3\">Recommended Dimensions</th>\n          <th class=\"px-4 py-3\">Mandatory Composition Rules</th>\n          <th class=\"px-4 py-3\">Dedicated Resizer Tool</th>\n        </tr>\n      </thead>\n      <tbody class=\"divide-y divide-border/60\">\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            Candidate Photograph\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            Strictly &le; 25.0 KB (JPG / JPEG)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            200 &times; 230 px (Passport Size)\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            Light blue or plain white backdrop, facing front, both ears visible, no caps or dark glasses\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/pk/ppsc-kppsc-spsc-bpsc-photo-resizer/\" class=\"text-primary font-bold hover:underline\">PPSC Photo Resizer &rarr;</a>\n          </td>\n        </tr>\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            Candidate Signature\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            Strictly &le; 25.0 KB (JPG / JPEG)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            140 &times; 60 px or 200 &times; 230 px\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            Running handwriting in blue or black ballpoint ink on plain white unruled paper; block capitals disqualified\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/pk/ppsc-signature-resize/\" class=\"text-primary font-bold hover:underline\">PPSC Signature Tool &rarr;</a>\n          </td>\n        </tr>\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            Original CNIC (Front Side Copy)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            Strictly &le; 25.0 KB (JPG / JPEG)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            Aspect ratio matched to ID card (~400 &times; 250 px)\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            13-digit CNIC number, applicant name, and photo must be razor sharp and legible without glare\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/pk/nadra-passport-cnic-photo-resizer/\" class=\"text-primary font-bold hover:underline\">CNIC Resizer Tool &rarr;</a>\n          </td>\n        </tr>\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            Bank Challan Form 32-A / e-Payment Receipt\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            Strictly &le; 25.0 KB (JPG / JPEG)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            Standard rectangular scan (~350 &times; 250 px)\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            Bank branch stamp, date of deposit, or 17-digit PSID transaction ID clearly visible\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/pk/ppsc-signature-resize/\" class=\"text-primary font-bold hover:underline\">Receipt Resizer &rarr;</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n\n<!-- Section 2: Top 5 PPSC Portal Upload Errors & Diagnostic Solutions -->\n<section id=\"diagnostic-failures\" class=\"space-y-6 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>🚨 2.</span> Top 5 PPSC Portal Upload Errors &amp; Diagnostic Fixes\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Detailed troubleshooting for the most frequent rejection messages encountered by candidates on ppsc.gop.pk.\n  </p>\n\n  <!-- Error 1: Photo & Signature File Size Exceeds 25 KB -->\n  <div id=\"failure-photo-25kb\" class=\"p-5 rounded-2xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20\">\n        Rejection Alert 1: File Size Exceeds 25.0 KB Limit\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Server Code: FILE_SIZE_MAX_25KB</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Portal Alert: \"File size exceeds 25 KB! Please upload an image with file size less than or equal to 25 KB.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> The PPSC web script validates files at the byte level. Even an image weighing 25.4 KB (26,009 bytes) triggers instant rejection. High-resolution photos from modern smartphones range between 2 MB and 10 MB, making direct upload impossible.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Solution via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        Upload your picture into the <a href=\"/pk/ppsc-signature-resize/\" class=\"text-primary underline font-semibold\">PPSC Resizer Tool</a>. The browser-based engine automatically adjusts JPEG compression quality to keep output precisely between <strong>18 KB and 24.5 KB</strong>, well below the 25.0 KB threshold while maintaining crisp facial definition.\n      </p>\n    </div>\n  </div>\n\n  <!-- Error 2: CNIC Front Scan Upload Failure -->\n  <div id=\"failure-cnic-scan\" class=\"p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20\">\n        Rejection Alert 2: Unreadable CNIC Front Copy Scan\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Scrutiny Trigger: CNIC_IMAGE_ILLEGIBLE</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Portal Rejection: \"CNIC front image rejected or blurred during initial document scrutiny.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> When reducing a large phone picture of a CNIC card down to 25 KB with standard compressors, text such as the 13-digit identification number, father name, or date of birth often turns into unreadable pixels. Scrutiny officers flag and disqualify unreadable CNIC submissions.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Solution via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        Crop closely to the edges of the physical CNIC card, removing all background tables or surfaces. Use our <a href=\"/pk/nadra-passport-cnic-photo-resizer/\" class=\"text-primary underline font-semibold\">NADRA CNIC Resizer</a> to apply sharp text contrast enhancements that keep alphanumeric characters crisp even at 22 KB.\n      </p>\n    </div>\n  </div>\n\n  <!-- Error 3: PSID Fee Payment Reconciliation Delay -->\n  <div id=\"failure-psid-payment\" class=\"p-5 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 dark:bg-indigo-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20\">\n        Rejection Alert 3: 17-Digit PSID Payment Not Reflected\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Payment Code: PSID_UNPAID_SYNC</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Portal Error: \"Fee payment not verified yet. Please make sure payment has been submitted via 1-Link PSID.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> PPSC phased out manual paper challans for most posts in favor of online 1-Link PSID payment. After paying through JazzCash, EasyPaisa, or an ATM, inter-bank synchronization requires 5 to 15 minutes. Attempting to finalize your application immediately often produces an unverified fee alert.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Solution:</div>\n      <p class=\"text-muted-foreground\">\n        Wait 10 to 15 minutes after transaction completion. Open your application again on ppsc.gop.pk by entering your CNIC and application number. The system will retrieve the confirmed 1-Link settlement and enable final submission.\n      </p>\n    </div>\n  </div>\n\n  <!-- Error 4: Background Color & Selfie Traps -->\n  <div id=\"failure-background\" class=\"p-5 rounded-2xl border border-purple-500/30 bg-purple-500/5 dark:bg-purple-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20\">\n        Rejection Alert 4: Non-Compliant Background or Selfie Upload\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Scrutiny Trigger: INVALID_PHOTO_BACKGROUND</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Rejection Cause: \"Photograph rejected due to colored background, outdoor environment, or selfie perspective.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> PPSC guidelines mandate a formal passport-style portrait with a light blue or clean white backdrop. Selfies shot with wide-angle front smartphone cameras distort facial geometry, introduce glare, and feature informal domestic backgrounds that fail commission verification.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Solution:</div>\n      <p class=\"text-muted-foreground\">\n        Have someone photograph you against a flat, neutral white wall using the rear camera from 4 to 5 feet away. Crop to 200&times;230 pixels using our <a href=\"/pk/ppsc-kppsc-spsc-bpsc-photo-resizer/\" class=\"text-primary underline font-semibold\">PPSC Photo Resizer</a>.\n      </p>\n    </div>\n  </div>\n\n  <!-- Error 5: Roll Number Slip Download Failure -->\n  <div id=\"failure-rollno-slip\" class=\"p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20\">\n        Rejection Alert 5: Admission Letter Not Displaying on Portal\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Portal Issue: ADMISSION_LETTER_NOT_FOUND</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Portal Issue: \"Record not found or admission letter is not currently available for this post.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> Admission letters (roll number slips) are issued only 7 to 10 days before the scheduled written examination date. Candidates often search before the PPSC Planner updates their specific case number with an exam date, or enter their CNIC with dashes (e.g., 35201-xxxxxxx-x) instead of numbers only.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Solution:</div>\n      <p class=\"text-muted-foreground\">\n        Verify your case number on the <a href=\"#ppsc-planner-guide\" class=\"text-primary underline font-semibold\">PPSC Planner</a> first. When downloading your roll number slip, type your 13-digit CNIC strictly without dashes (e.g., 3520112345671) and select the exact advertised case title from the post dropdown.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- Section 3: Step-by-Step PPSC Online Application Workflow -->\n<section id=\"online-workflow\" class=\"space-y-4 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>📝 3.</span> Step-by-Step PPSC Online Application Workflow (2026)\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Complete walkthrough from finding your advertisement on ppsc.gop.pk to receiving your final application submission token.\n  </p>\n\n  <div class=\"my-6 space-y-4\">\n    <div class=\"relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6\">\n\n      <!-- Step 1 -->\n      <div class=\"relative group\">\n        <div class=\"absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background\"></div>\n        <h4 class=\"text-base font-bold text-foreground\">Step 1: Check Current Advertisements &amp; Eligibility</h4>\n        <p class=\"text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed\">\n          Visit <a href=\"https://www.ppsc.gop.pk\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline\">ppsc.gop.pk</a> and open the <strong>Advertisements</strong> tab. Note your desired position, Case Number (e.g., 14-RB/2026), required educational qualification, age limits, and closing date. Ensure you possess a valid Punjab domicile certificate.\n        </p>\n      </div>\n\n      <!-- Step 2 -->\n      <div class=\"relative group\">\n        <div class=\"absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background\"></div>\n        <h4 class=\"text-base font-bold text-foreground\">Step 2: Initiate Application &amp; Enter CNIC</h4>\n        <p class=\"text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed\">\n          Click the prominent <strong>Apply Online</strong> button on the PPSC home page. Select your post from the list, read the instructions, and enter your 13-digit CNIC number (both with and without dashes as prompted). Provide your active email address and mobile phone number (avoid ported network numbers to ensure prompt SMS delivery).\n        </p>\n      </div>\n\n      <!-- Step 3 -->\n      <div class=\"relative group\">\n        <div class=\"absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background\"></div>\n        <h4 class=\"text-base font-bold text-foreground\">Step 3: Generate 17-Digit PSID Fee Voucher</h4>\n        <p class=\"text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed\">\n          The portal generates a unique <strong>17-digit PSID</strong> starting with the prefix <code>312</code> for your case. Note this number carefully. You have until 11:59 PM on the closing date to complete your fee payment via digital channels or designated bank counters.\n        </p>\n      </div>\n\n      <!-- Step 4 -->\n      <div class=\"relative group\">\n        <div class=\"absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background\"></div>\n        <h4 class=\"text-base font-bold text-foreground\">Step 4: Upload Photo, Signature &amp; CNIC (&le;25 KB)</h4>\n        <p class=\"text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed\">\n          Upload your files: (1) photograph with light blue/white backdrop, (2) handwritten signature scan, and (3) clear front side of your CNIC. Use <a href=\"/pk/ppsc-signature-resize/\" class=\"text-primary underline font-semibold\">SignResize</a> to confirm every file weighs strictly 24.9 KB or less before attempting upload.\n        </p>\n      </div>\n\n      <!-- Step 5 -->\n      <div class=\"relative group\">\n        <div class=\"absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background\"></div>\n        <h4 class=\"text-base font-bold text-foreground\">Step 5: Fill Academic &amp; Experience Details</h4>\n        <p class=\"text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed\">\n          Enter your academic qualifications in chronological order (Matriculation, Intermediate, Graduation, Master's/B.S.) along with total marks, obtained marks, board/university name, and passing year. Add any relevant post-qualification experience if mandated by the post service rules.\n        </p>\n      </div>\n\n      <!-- Step 6 -->\n      <div class=\"relative group\">\n        <div class=\"absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background\"></div>\n        <h4 class=\"text-base font-bold text-foreground\">Step 6: Final Review &amp; Application Submission</h4>\n        <p class=\"text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed\">\n          Review your completed profile. Verify that your name, father's name, CNIC, test examination center (Lahore, Rawalpindi, Multan, Faisalabad, Sargodha, Bahawalpur, D.G. Khan), and uploaded images are correct. Click <strong>Submit Application</strong> and save your Application Number and Token Number.\n        </p>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n<!-- Section 4: How to Pay Fee via 1-Link PSID, JazzCash & EasyPaisa -->\n<section id=\"fee-payment-guide\" class=\"space-y-4 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>💳 4.</span> How to Pay PPSC Challan Fee via 1-Link PSID (JazzCash, EasyPaisa &amp; Bank Apps)\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Complete payment blueprint for completing your PKR 600 or PKR 1,000 application fee through modern digital banking channels.\n  </p>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs\">\n\n    <!-- Channel 1: JazzCash -->\n    <div class=\"p-4 rounded-2xl border border-border bg-card space-y-2 shadow-xs\">\n      <div class=\"flex items-center gap-2 font-bold text-foreground text-sm\">\n        <span class=\"p-1.5 rounded-lg bg-rose-500/10 text-rose-600 font-bold\">📱</span>\n        <span>JazzCash Mobile App</span>\n      </div>\n      <ol class=\"list-decimal pl-4 space-y-1.5 text-muted-foreground\">\n        <li>Log in to your <strong>JazzCash App</strong>.</li>\n        <li>Tap on <strong>Govt Payments</strong> under the payments directory.</li>\n        <li>Select <strong>Punjab (GoPb)</strong> &rarr; <strong>e-Challan / PPSC</strong>.</li>\n        <li>Paste your <strong>17-digit PSID</strong> number.</li>\n        <li>Verify applicant name and amount (PKR 600).</li>\n        <li>Confirm payment with your MPIN and save receipt.</li>\n      </ol>\n    </div>\n\n    <!-- Channel 2: EasyPaisa -->\n    <div class=\"p-4 rounded-2xl border border-border bg-card space-y-2 shadow-xs\">\n      <div class=\"flex items-center gap-2 font-bold text-foreground text-sm\">\n        <span class=\"p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 font-bold\">📲</span>\n        <span>EasyPaisa Mobile App</span>\n      </div>\n      <ol class=\"list-decimal pl-4 space-y-1.5 text-muted-foreground\">\n        <li>Open your <strong>EasyPaisa App</strong>.</li>\n        <li>Select <strong>Bill Payment</strong> &rarr; <strong>Government Fees</strong>.</li>\n        <li>Choose <strong>Punjab</strong> &rarr; <strong>Punjab e-Challan (GoPb)</strong>.</li>\n        <li>Input the <strong>17-digit PSID</strong>.</li>\n        <li>Confirm that the bill status displays <strong>Unpaid</strong>.</li>\n        <li>Tap <strong>Pay Now</strong> and take a screenshot of confirmation.</li>\n      </ol>\n    </div>\n\n    <!-- Channel 3: Bank Apps & ATMs -->\n    <div class=\"p-4 rounded-2xl border border-border bg-card space-y-2 shadow-xs\">\n      <div class=\"flex items-center gap-2 font-bold text-foreground text-sm\">\n        <span class=\"p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 font-bold\">🏦</span>\n        <span>1-Link Banking &amp; ATMs</span>\n      </div>\n      <ol class=\"list-decimal pl-4 space-y-1.5 text-muted-foreground\">\n        <li>Open any Pakistani banking app (HBL, Meezan, UBL, Alfalah, NBP).</li>\n        <li>Navigate to <strong>Bill Payments</strong> &rarr; <strong>1-Bill / Govt Payments</strong>.</li>\n        <li>Select <strong>1-Bill Invoice/Challan</strong>.</li>\n        <li>Enter <strong>100123</strong> followed by your 17-digit PSID (or enter PSID directly under GoPb).</li>\n        <li>Verify the beneficiary details and complete the transfer.</li>\n      </ol>\n    </div>\n\n  </div>\n\n  <div class=\"p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-1\">\n    <div class=\"font-bold text-emerald-400\">PPSC PSID Format Notice:</div>\n    <p class=\"text-slate-300\">\n      Prefix: 312xxxxxxxxxxxxxx (17 digits total). Do not pay twice if the portal takes several minutes to update. Payment confirmations sync automatically through the 1-Link National Switch.\n    </p>\n  </div>\n</section>\n\n<!-- Section 5: PPSC Planner & Roll No Slip Download Blueprint -->\n<section id=\"ppsc-planner-guide\" class=\"space-y-4 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>📅 5.</span> Tracking the PPSC Planner &amp; Downloading Admission Letters\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    How to anticipate test dates on the official PPSC Planner and print your Roll Number Slip for examination day.\n  </p>\n\n  <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs\">\n\n    <div class=\"p-4 rounded-2xl border border-border bg-card space-y-3\">\n      <h3 class=\"text-sm font-bold text-foreground flex items-center gap-1.5\">\n        <span>📊</span> Decoding the PPSC Planner Dashboard\n      </h3>\n      <p class=\"text-muted-foreground leading-relaxed\">\n        The <strong>PPSC Planner</strong> is updated on workdays by the commission. By searching your Case Number, you can review four vital stages:\n      </p>\n      <ul class=\"list-disc pl-4 space-y-1 text-muted-foreground\">\n        <li><strong>Total Applications Received:</strong> Know the exact candidate competition ratio for your post.</li>\n        <li><strong>Tentative Exam Date:</strong> Typically set within 30 to 60 days of the application deadline.</li>\n        <li><strong>Paper Checking Status:</strong> Tracks progress once the 100-MCQ test is concluded.</li>\n        <li><strong>Interview Scheduling:</strong> Shortlisted candidates (usually 5 per open vacancy) can view their assigned interview board schedules.</li>\n      </ul>\n    </div>\n\n    <div class=\"p-4 rounded-2xl border border-border bg-card space-y-3\">\n      <h3 class=\"text-sm font-bold text-foreground flex items-center gap-1.5\">\n        <span>🎫</span> How to Print PPSC Roll Number Slip (Admission Letter)\n      </h3>\n      <p class=\"text-muted-foreground leading-relaxed\">\n        When the written test date is scheduled, admission letters are released 7 to 10 days before the exam:\n      </p>\n      <ol class=\"list-decimal pl-4 space-y-1 text-muted-foreground\">\n        <li>Navigate to <a href=\"https://www.ppsc.gop.pk\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline\">ppsc.gop.pk</a> &rarr; <strong>Print Admission Letter</strong>.</li>\n        <li>Enter your <strong>13-digit CNIC without dashes</strong>.</li>\n        <li>Select your applied post from the dropdown list.</li>\n        <li>Click <strong>Submit</strong> and verify test center, roll number, and exam timing.</li>\n        <li>Download the PDF and print a clear physical copy on A4 paper.</li>\n      </ol>\n    </div>\n\n  </div>\n</section>\n\n<!-- Section 6: In-Browser Client-Side Privacy Guarantee & Tool CTA -->\n<section id=\"privacy-guarantee\" class=\"space-y-4 pt-6 border-t border-border\">\n  <div class=\"my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-4\">\n    <div class=\"flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider\">\n      <span>🛡️</span>\n      <span>100% Client-Side Privacy &amp; Biometric Security Guarantee</span>\n    </div>\n    <h3 class=\"text-lg sm:text-xl font-bold text-foreground\">\n      Format Your PPSC Photo, Signature &amp; CNIC Locally in Seconds\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      Personal biometric images, CNIC scans, and financial transaction receipts contain confidential private data. SignResize performs 100% of image cropping, aspect ratio locking, and compression entirely inside your web browser using client-side <strong>HTML5 Canvas APIs</strong>. No photos or identity documents are ever uploaded to an external server or saved in the cloud.\n    </p>\n\n    <div class=\"flex flex-wrap gap-3 pt-2\">\n      <a href=\"/pk/ppsc-signature-resize/\" class=\"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition shadow-xs\">\n        <span>✍️</span> Open PPSC Signature Resizer (&le;25 KB) &rarr;\n      </a>\n      <a href=\"/pk/ppsc-kppsc-spsc-bpsc-photo-resizer/\" class=\"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs sm:text-sm border border-border transition\">\n        <span>📸</span> Open PPSC Photo Resizer (200&times;230 px) &rarr;\n      </a>\n      <a href=\"/pk/nadra-passport-cnic-photo-resizer/\" class=\"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs sm:text-sm border border-border transition\">\n        <span>🪪</span> Open NADRA CNIC Resizer &rarr;\n      </a>\n    </div>\n  </div>\n</section>\n"
},
  {
    "slug": "us-visa-passport-photo-resizer-ds160-greencard-guide-2026",
    "title": "US Visa & Passport Photo Resizer Guide 2026: DS-160, 2×2\" & USCIS Specs",
    "metaTitle": "US Visa & Passport Photo Resizer: DS-160 & 2x2\" Guide",
    "metaDescription": "Authoritative US photo guide covering Department of State DS-160 visa (600×600 px, <240 KB), US passport renewal (2×2 in), USCIS Green Card / DV Lottery, and Common App uploads.",
    "excerpt": "Master candidate handbook for US visa, passport renewal, and immigration photo compliance: 600×600 px resolution, 240 KB file size clamp, 50–69% biometric head ratio, and instant client-side resizing.",
    "category": "Guidelines & Tips",
    "country": "US",
    "publishDate": "Oct 08, 2026",
    "lastUpdated": "Oct 08, 2026",
    "author": "SignResize US Immigration & Visa Standards Desk",
    "authorRole": "Consular Affairs & Biometric Standards Specialist",
    "readTime": "14 min read",
    "featured": true,
    "tags": [
      "US Visa Photo",
      "DS-160 Photo Resizer",
      "US Passport Photo 2x2",
      "USCIS Green Card Photo",
      "DV Lottery Photo 600x600",
      "Common App Photo Size",
      "600x600 px 240KB",
      "State Department Photo Tool"
    ],
    "relatedExamPreset": "us-ds160",
    "quickFacts": [
      {
        "label": "Regulatory Authorities",
        "value": "U.S. Department of State (Consular Affairs) & USCIS (DHS)"
      },
      {
        "label": "Official Verification Portals",
        "value": "ceac.state.gov, travel.state.gov & uscis.gov"
      },
      {
        "label": "Form DS-160 Digital Bounds",
        "value": "600 × 600 px (1:1 Square, ≤ 240 KB, JPEG Format)"
      },
      {
        "label": "Physical Passport Dimensions",
        "value": "2 × 2 inches (51 × 51 mm) printed at 300 DPI"
      },
      {
        "label": "Biometric Head Height Ratio",
        "value": "50% to 69% of total height (1 inch to 1 3/8 inches)"
      },
      {
        "label": "Eyeglasses Prohibition",
        "value": "Strictly forbidden (mandatory Department of State rule)"
      },
      {
        "label": "USCIS & DV Color Space",
        "value": "24-bit sRGB color space with ≤ 20:1 JPEG compression"
      },
      {
        "label": "Common App Document Cap",
        "value": "Headshots & academic PDFs strictly capped under 200 KB / 500 KB"
      }
    ],
    "faqs": [
      {
        "question": "What are the exact digital photo specifications for Form DS-160 online visa application?",
        "answer": "Digital photographs uploaded to the Consular Electronic Application Center (CEAC) for Form DS-160 must be a square aspect ratio (1:1), measuring exactly ==600 × 600 pixels minimum up to 1200 × 1200 pixels maximum== in ==JPEG (.jpg) format==. The file weight must be ==equal to or less than 240 KB==, captured within the past 6 months on a plain white or off-white background with a neutral facial expression."
      },
      {
        "question": "Why does the CEAC portal or State Department photo validator reject my DS-160 picture?",
        "answer": "The US State Department automated validation engine rejects images that fail any of six strict biometric algorithms: (1) dimensions not square or below 600x600 px, (2) file size exceeding ==240.0 KB==, (3) facial head height outside the ==50% to 69% range==, (4) presence of eyeglasses or tinted lenses, (5) colored, patterned, or heavily shadowed backgrounds, or (6) file compression artifacts exceeding a 20:1 ratio."
      },
      {
        "question": "What is the 50% to 69% biometric head ratio rule for US visa and passport photos?",
        "answer": "The Department of State mandates that the vertical distance from the ==bottom of the candidate's chin to the top of the head (including hair)== must occupy between ==50% and 69% of the overall frame height==. In a 600×600 pixel image, this equals between ==300 pixels and 414 pixels==. Additionally, the candidate's eye height from the bottom edge of the photo must sit between ==56% and 69% (336 to 414 pixels)==."
      },
      {
        "question": "Can I wear eyeglasses or sunglasses in a US visa or passport photo?",
        "answer": "No. Since November 1, 2016, ==eyeglasses are strictly prohibited== in all US passport and visa photographs to eliminate flash reflections, lens glare, and facial biometric obscuration. The only rare exception is a documented medical necessity (such as recent eye surgery) accompanied by a signed statement from an authorized physician."
      },
      {
        "question": "What is the difference between a physical 2x2 inch photo and a digital upload?",
        "answer": "A physical US passport or consular submission photo measures exactly ==2 × 2 inches (51 × 51 mm)==, printed on glossy or matte photo quality paper. When submitted digitally through online portals (such as Online Passport Renewal OPR or CEAC DS-160), the image is rendered digitally at ==600 × 600 pixels at 300 DPI== with file size capped strictly under 240 KB."
      },
      {
        "question": "How does the SignResize DS-160 Photo Resizer ensure 100% compliance?",
        "answer": "The ==SignResize US DS-160 Photo Resizer== locks the aspect ratio to a strict 1:1 square, displays an interactive facial alignment guide for the 50–69% biometric head zone, resizes output to exactly 600×600 pixels at 300 DPI, and automatically clamps the JPEG byte weight strictly under 240 KB."
      },
      {
        "question": "What are the strict photo specifications for the annual US Diversity Visa (DV) Lottery?",
        "answer": "For the annual Electronic Diversity Visa (E-DV) Lottery, digital photos must measure exactly ==600 × 600 pixels==, file size ==under 240 KB==, formatted in ==24-bit color depth within the sRGB color space== (8 bits per red, green, and blue channel). Photos must have a maximum compression ratio of 20:1. Submitting altered, filtered, or retouched photos results in immediate automated disqualification."
      },
      {
        "question": "Can I smile in a US passport or visa photograph?",
        "answer": "The US Department of State permits a ==natural, unexaggerated smile with both eyes open==, but strongly advises a neutral facial expression with a closed mouth. Broad grins that show clenched teeth, squinch the eyes, or distort facial landmarks frequently trigger automated portal rejection flags."
      },
      {
        "question": "Does USCIS accept digital photos for Form I-485, EAD card, and naturalization filings?",
        "answer": "While most USCIS adjustment of status applicants undergo mandatory in-person biometrics appointments (ASC), online filings through ==myUSCIS== (such as Form I-765 EAD renewals, Form I-90 green card replacements, and Form N-400 naturalization) require uploading 2x2 inch digital passport-style photos meeting the identical ==600×600 px, 240 KB, white background== standard."
      },
      {
        "question": "What background color is strictly accepted by the US Department of State?",
        "answer": "The background must be completely ==plain white or off-white== without any patterns, textures, door frames, or objects visible. Shadows cast on the backdrop behind the applicant's ears, shoulders, or head are one of the most frequent reasons for rejection; diffuse front-facing lighting must be used."
      },
      {
        "question": "What does a maximum 20:1 compression ratio mean for US visa photographs?",
        "answer": "A 20:1 compression ratio benchmark means the JPEG file must not be excessively compressed to the point where digital blockiness, pixel artifacts, or fuzzy contouring degrades facial biometrics. SignResize uses calibrated client-side quantization matrices that optimize file size below 240 KB while keeping the compression ratio well within the pristine 10:1 to 15:1 range."
      },
      {
        "question": "Does Common App require a specific photo or headshot for US university applications?",
        "answer": "The Common Application system itself does not mandate a universal profile photograph for application submission. However, individual university supplement tabs, international student visa processing offices (for Form I-20 and SEVIS records), and campus student ID systems require uploading ==600×600 px passport-style headshots under 200 KB or 500 KB==."
      },
      {
        "question": "Can I wear religious headwear such as a hijab or turban in US visa photos?",
        "answer": "Yes. ==Religious head coverings worn daily are permitted== provided the applicant submits a signed statement certifying the item is part of recognized religious attire. The covering must not obscure the hairline or cast any shadow across the forehead, eyes, cheeks, or chin. The entire oval of the face from jawline to forehead must remain fully visible."
      },
      {
        "question": "Can shadows behind ears or under the chin cause US visa photo rejection?",
        "answer": "Yes. The Department of State automated biometric validator inspects facial contrast. Hard shadows cast under the chin or dark silhouettes behind the ears can prevent the system from accurately calculating facial geometry, resulting in automated rejection or a mandatory retake notice at the embassy interview."
      },
      {
        "question": "Are my uploaded personal photos and passport scans stored on your servers?",
        "answer": "No. ==SignResize processes 100% of image rendering, cropping, and compression entirely inside your web browser memory using HTML5 Canvas APIs==. Zero image files, biometric coordinates, or personal data packets are ever transmitted or saved to external cloud servers, guaranteeing absolute privacy."
      }
    ],
    "contentHtml": "\n<!-- Sticky Diagnostic Anchor Jump Bar (Instant Diagnostic Failure Finder) -->\n<div class=\"my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95\">\n  <div class=\"flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5\">\n    <div class=\"flex items-center gap-2\">\n      <span class=\"w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping\"></span>\n      <h3 class=\"text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground\">🚨 Instant US Portal Diagnostic Failure Finder</h3>\n    </div>\n    <span class=\"text-[10px] font-mono text-muted-foreground\">Jump directly to your specific US portal upload error</span>\n  </div>\n\n  <!-- Jump Action Chips -->\n  <div class=\"flex flex-wrap gap-2 text-xs\">\n    <a href=\"#failure-dimensions\" class=\"px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>📸</span>\n      <span>600×600 Ratio &amp; Dimension Error</span>\n    </a>\n    <a href=\"#failure-filesize\" class=\"px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>⚖️</span>\n      <span>240 KB File Weight Clamp</span>\n    </a>\n    <a href=\"#failure-lighting\" class=\"px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>👓</span>\n      <span>Eyeglasses &amp; Background Shadows</span>\n    </a>\n    <a href=\"#failure-headratio\" class=\"px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>📐</span>\n      <span>50%–69% Biometric Head Ratio</span>\n    </a>\n    <a href=\"#failure-dvcolor\" class=\"px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>🗽</span>\n      <span>DV Lottery 24-Bit sRGB Profile</span>\n    </a>\n    <a href=\"#failure-commonapp\" class=\"px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-800 dark:text-cyan-200 border border-cyan-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs\">\n      <span>🎓</span>\n      <span>Common App Document Scan &lt;200 KB</span>\n    </a>\n  </div>\n</div>\n\n<section id=\"overview\" class=\"space-y-4\">\n  <div class=\"p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground\">\n    <p class=\"text-sm sm:text-base font-semibold leading-relaxed\">\n      <strong>United States Official Document &amp; Biometric Photo Overview 2026:</strong> Filing official applications with the <strong>U.S. Department of State (DOS)</strong> or <strong>U.S. Citizenship and Immigration Services (USCIS)</strong> requires uploading digital photographs that adhere to strict facial recognition algorithms. Whether you are submitting <strong>Form DS-160 for Nonimmigrant Visas (B1/B2, F1, H-1B, J1)</strong> via <a href=\"https://ceac.state.gov\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline\">ceac.state.gov</a>, renewing a <strong>US Passport</strong> online via <a href=\"https://travel.state.gov\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary underline\">travel.state.gov</a>, entering the annual <strong>Diversity Immigrant Visa (DV) Lottery</strong>, or uploading academic scans to the <strong>Common Application</strong>, submitting an improperly cropped or compressed image leads to immediate automated portal rejection.\n    </p>\n  </div>\n\n  <p>\n    According to State Department consular scrutiny data, approximately <strong>30% to 35% of self-captured applicant photographs trigger upload validation failures or embassy retake notices</strong>. The automated inspection engine enforces zero-tolerance thresholds: images must measure exactly <strong>600 × 600 pixels (1:1 square ratio)</strong>, weigh <strong>strictly 240 KB or less</strong>, feature a <strong>50% to 69% biometric chin-to-crown head ratio</strong>, eliminate <strong>all eyeglasses and tinted lenses</strong>, and maintain an unaltered <strong>24-bit sRGB color profile</strong>.\n  </p>\n\n  <p>\n    This diagnostic master guide breaks down official regulatory policies, decodes portal rejection algorithms, provides step-by-step smartphone shooting instructions, and links directly to our dedicated client-side utility suite: the <a href=\"/us/\" class=\"text-primary font-semibold underline\">SignResize US Visa &amp; Passport Photo Resizer Hub</a>.\n  </p>\n</section>\n\n<!-- Authoritative Master Specifications & Policy Bounds -->\n<section id=\"master-specs\" class=\"space-y-4 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>📐 1.</span> Master US Regulatory &amp; Technical Benchmark Specifications\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Authoritative technical parameters governing digital image and identity document uploads across official United States federal and educational portals.\n  </p>\n\n  <div class=\"overflow-x-auto rounded-2xl border border-border bg-card shadow-xs\">\n    <table class=\"w-full text-xs sm:text-sm text-left border-collapse\">\n      <thead class=\"bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border\">\n        <tr>\n          <th class=\"px-4 py-3\">Portal / Document Category</th>\n          <th class=\"px-4 py-3\">Dimensions &amp; Aspect Ratio</th>\n          <th class=\"px-4 py-3\">File Weight Limit</th>\n          <th class=\"px-4 py-3\">Biometric Facial Parameters</th>\n          <th class=\"px-4 py-3\">Dedicated Resizer Tool</th>\n        </tr>\n      </thead>\n      <tbody class=\"divide-y divide-border/60\">\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            Form DS-160 US Visa (B1/B2, F1, H-1B, J1)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            600 × 600 px (1:1 Square) up to 1200 × 1200 px\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            ≤ 240 KB (JPEG / .jpg)\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            Head 50%–69% of height (300–414 px), eyes at 56%–69%, no glasses\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/us/ds-160-photo-resizer/\" class=\"text-primary font-bold hover:underline\">DS-160 Tool →</a>\n          </td>\n        </tr>\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            US Passport Online Renewal &amp; Print (Form DS-82 / DS-11)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            2 × 2 inches (51 × 51 mm) / 600 × 600 px at 300 DPI\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            ≤ 240 KB (JPEG / .jpg)\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            Head 1\" to 1 3/8\" (25–35 mm), white background, taken within 6 months\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/us/passport-photo-resizer/\" class=\"text-primary font-bold hover:underline\">Passport Tool →</a>\n          </td>\n        </tr>\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            USCIS Green Card &amp; Diversity Visa (DV) Lottery\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            600 × 600 px (1:1 Square)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            ≤ 240 KB (JPEG / .jpg)\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            24-bit sRGB color space, compression ≤ 20:1, zero retouching/filters\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/us/green-card-photo-resizer/\" class=\"text-primary font-bold hover:underline\">Green Card Tool →</a>\n          </td>\n        </tr>\n        <tr class=\"hover:bg-muted/20\">\n          <td class=\"px-4 py-3 font-bold text-foreground\">\n            Common App Student Profile &amp; Document Scans\n          </td>\n          <td class=\"px-4 py-3 font-mono text-primary font-semibold\">\n            600 × 600 px (Profile) / A4 &amp; Letter (Transcripts)\n          </td>\n          <td class=\"px-4 py-3 font-mono text-foreground\">\n            ≤ 200 KB to ≤ 500 KB (JPG / PDF)\n          </td>\n          <td class=\"px-4 py-3 text-muted-foreground\">\n            Professional student headshot, clear text legibility for academic records\n          </td>\n          <td class=\"px-4 py-3\">\n            <a href=\"/us/common-app-photo-resizer/\" class=\"text-primary font-bold hover:underline\">Common App Tool →</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</section>\n\n<!-- Diagnostic Failure States & Step-by-Step Remediation -->\n<section id=\"diagnostic-failures\" class=\"space-y-6 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>🚨 2.</span> Top 6 US Portal Image Rejection States &amp; Technical Fixes\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Detailed analysis of automated portal error messages returned by travel.state.gov, CEAC, and USCIS, and how to eliminate them before final submission.\n  </p>\n\n  <!-- Failure State 1: 600x600 Dimensions & Aspect Ratio -->\n  <div id=\"failure-dimensions\" class=\"p-5 rounded-2xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20\">\n        Rejection Trigger 1: Non-Square Aspect Ratio\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Error Code: ERR_IMAGE_NOT_SQUARE</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Automated Error: \"The submitted photo is not square or does not meet minimum 600x600 pixel dimensions.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> Modern smartphones capture images in 4:3 or 16:9 rectangular aspect ratios (e.g., 3024 × 4032 pixels). When applicants upload an uncropped rectangular photo directly into the CEAC portal or DV Lottery validator, the portal either rejects the upload outright or forces a stretched, distorted crop that ruins facial landmarks.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Fix via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        Upload your original smartphone photograph into our <a href=\"/us/ds-160-photo-resizer/\" class=\"text-primary underline font-semibold\">Form DS-160 Photo Resizer</a>. Our canvas tool enforces a locked 1:1 square crop box with visual facial positioning guides, ensuring output is exactly 600 × 600 pixels.\n      </p>\n    </div>\n  </div>\n\n  <!-- Failure State 2: 240 KB File Size Overflow -->\n  <div id=\"failure-filesize\" class=\"p-5 rounded-2xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20\">\n        Rejection Trigger 2: File Size Exceeds 240.0 KB\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Error Code: ERR_FILE_SIZE_LIMIT</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Automated Error: \"The file size exceeds the maximum limit of 240 KB. Please upload a compressed image.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> High-resolution mobile phone photos typically weigh 3 MB to 8 MB. Standard compression tools often drop the file weight too aggressively (resulting in severe pixelation below 20 KB) or fail to compress sufficiently, leaving the file at 250 KB or 300 KB.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Fix via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        SignResize utilizes a calibrated client-side iterative JPEG compression loop that tunes image quality between 85% and 92%, locking the output cleanly between <strong>120 KB and 200 KB</strong>—comfortably below the 240 KB ceiling while preserving facial crispness.\n      </p>\n    </div>\n  </div>\n\n  <!-- Failure State 3: Eyeglasses and Shadow Glare -->\n  <div id=\"failure-lighting\" class=\"p-5 rounded-2xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/20\">\n        Rejection Trigger 3: Eyeglasses or Background Shadow Glare\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Error Code: ERR_BIOMETRIC_OCCLUSION</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Automated Error: \"Photo rejected due to eyeglasses, lens reflection, or dark background shadows.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> Eyeglasses have been 100% prohibited in US visa and passport photography since late 2016. Even non-prescription reading glasses, thin wire frames, or clear lenses cause automated rejection. Furthermore, overhead household lighting casts dark shadows behind ears and under the chin, triggering biometric occlusion flags.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Fix via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        Always remove all eyeglasses and head accessories (unless religiously documented). Stand 3 to 4 feet in front of a flat, plain white wall with diffused, eye-level natural light to eliminate backdrop shadows before running through our <a href=\"/us/passport-photo-resizer/\" class=\"text-primary underline font-semibold\">US Passport Photo Resizer</a>.\n      </p>\n    </div>\n  </div>\n\n  <!-- Failure State 4: Biometric Head Ratio (50%-69%) -->\n  <div id=\"failure-headratio\" class=\"p-5 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 dark:bg-indigo-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20\">\n        Rejection Trigger 4: Head Size Outside 50%–69% Zone\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Error Code: ERR_HEAD_HEIGHT_RATIO</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Automated Error: \"Facial area occupies an invalid percentage of the overall image height.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> The Department of State requires the head (from bottom of chin to top of hair) to measure between 1 inch and 1 3/8 inches on a physical 2x2\" print, or <strong>300 to 414 pixels in a 600×600 pixel image</strong>. Taking a photo from too far away (head too small) or zooming too tightly into the face (head too large) triggers instant rejection.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Fix via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        Our tool features an interactive <strong>Biometric Facial Guide Overlay</strong>. Simply position the top of your hair against the top calibration line and your chin against the bottom guide line to achieve an exact 59% head ratio.\n      </p>\n    </div>\n  </div>\n\n  <!-- Failure State 5: DV Lottery sRGB Color Depth -->\n  <div id=\"failure-dvcolor\" class=\"p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20\">\n        Rejection Trigger 5: Incorrect Color Space or Compression Ratio\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Error Code: ERR_COLOR_SPACE_INVALID</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Automated Error: \"Image must be in 24-bit sRGB color space with compression ratio not exceeding 20:1.\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> Many iPhone pictures are encoded in Apple's proprietary Display P3 wide color gamut or saved in HEIC format. Portals like the Electronic Diversity Visa (E-DV) Lottery system strictly demand true 24-bit color (8 bits per channel) mapped to the sRGB color profile.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Fix via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        Use the <a href=\"/us/green-card-photo-resizer/\" class=\"text-primary underline font-semibold\">USCIS Green Card &amp; DV Lottery Resizer</a>. Our canvas rendering engine automatically standardizes all uploaded color models (including Display P3 and Adobe RGB) into standard 24-bit sRGB JPEG output.\n      </p>\n    </div>\n  </div>\n\n  <!-- Failure State 6: Common App Document Scan Cap -->\n  <div id=\"failure-commonapp\" class=\"p-5 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 dark:bg-cyan-950/20 space-y-3\">\n    <div class=\"flex items-center justify-between\">\n      <span class=\"text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20\">\n        Rejection Trigger 6: Common App Document Scan Upload Failure\n      </span>\n      <span class=\"font-mono text-xs text-muted-foreground\">Error Code: ERR_COMMON_APP_UPLOAD_CAP</span>\n    </div>\n    <h3 class=\"text-base font-bold text-foreground\">\n      Automated Error: \"File size exceeds university supplement maximum allowed limit (200 KB / 500 KB).\"\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>Root Cause:</strong> High school seniors and international student applicants uploading passport identification scans, school certificates, and profile headshots to college portals often face sudden upload freezes when files exceed 200 KB or 500 KB caps.\n    </p>\n    <div class=\"p-3 rounded-xl bg-card border border-border/80 text-xs space-y-1\">\n      <div class=\"font-bold text-primary\">Technical Fix via SignResize:</div>\n      <p class=\"text-muted-foreground\">\n        Use our <a href=\"/us/common-app-photo-resizer/\" class=\"text-primary underline font-semibold\">Common App Photo &amp; Document Resizer</a> to crop student photos to 600×600 pixels and compress legal passport scans under 200 KB without sacrificing text legibility.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- Deep Dive into the 4 Dedicated US Hub Tools -->\n<section id=\"dedicated-tools\" class=\"space-y-6 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>🛠️ 3.</span> In-Depth Walkthrough of Dedicated US Resizer Tools\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Explore our specialized, pre-configured tools engineered to satisfy exact US government and educational portal upload requirements.\n  </p>\n\n  <!-- Tool 1 Card: DS-160 -->\n  <div class=\"p-5 rounded-2xl border border-border bg-card space-y-4 shadow-xs\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3\">\n      <div class=\"flex items-center gap-2.5\">\n        <span class=\"p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xl font-bold\">📄</span>\n        <div>\n          <h3 class=\"text-lg font-bold text-foreground\">Tool 1: Form DS-160 US Visa Photo Resizer</h3>\n          <p class=\"text-xs text-muted-foreground\">Dedicated tool for B1/B2, F1, H-1B, L1, J1, and all nonimmigrant visa types</p>\n        </div>\n      </div>\n      <a href=\"/us/ds-160-photo-resizer/\" class=\"px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition text-center shrink-0\">\n        Launch DS-160 Tool →\n      </a>\n    </div>\n\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs\">\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">Exact Portal Benchmarks:</div>\n        <ul class=\"list-disc pl-4 space-y-1 text-muted-foreground\">\n          <li><strong>Dimensions:</strong> Exactly 600 × 600 pixels (1:1 square ratio)</li>\n          <li><strong>Weight Limit:</strong> Strictly ≤ 240 KB in JPEG format</li>\n          <li><strong>Biometric Chin-to-Crown:</strong> 50% to 69% of image height (300 to 414 px)</li>\n          <li><strong>Eye Level Position:</strong> 56% to 69% from bottom edge</li>\n          <li><strong>Background:</strong> Pure white or off-white without patterns</li>\n        </ul>\n      </div>\n\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">How to Use for Form DS-160:</div>\n        <ol class=\"list-decimal pl-4 space-y-1 text-muted-foreground\">\n          <li>Take a photo facing directly into your camera with a neutral expression and no glasses.</li>\n          <li>Upload into the <a href=\"/us/ds-160-photo-resizer/\" class=\"text-primary underline font-semibold\">DS-160 Photo Resizer</a>.</li>\n          <li>Align your face within the calibrated green oval guide overlay.</li>\n          <li>Download your validated 600×600 px JPEG and upload directly to CEAC.</li>\n        </ol>\n      </div>\n    </div>\n  </div>\n\n  <!-- Tool 2 Card: US Passport -->\n  <div class=\"p-5 rounded-2xl border border-border bg-card space-y-4 shadow-xs\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3\">\n      <div class=\"flex items-center gap-2.5\">\n        <span class=\"p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xl font-bold\">🛂</span>\n        <div>\n          <h3 class=\"text-lg font-bold text-foreground\">Tool 2: US Passport Photo Resizer (2×2 Inches)</h3>\n          <p class=\"text-xs text-muted-foreground\">For Online Passport Renewal (OPR) and mail-in physical prints (DS-11, DS-82)</p>\n        </div>\n      </div>\n      <a href=\"/us/passport-photo-resizer/\" class=\"px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition text-center shrink-0\">\n        Launch Passport Tool →\n      </a>\n    </div>\n\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs\">\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">Dual Online &amp; Print Calibration:</div>\n        <ul class=\"list-disc pl-4 space-y-1 text-muted-foreground\">\n          <li><strong>Digital Dimensions:</strong> 600 × 600 px at 300 DPI (under 240 KB)</li>\n          <li><strong>Physical Print Dimensions:</strong> Exactly 2 × 2 inches (51 × 51 mm)</li>\n          <li><strong>Head Height on Print:</strong> 1 inch to 1 3/8 inches (25 mm to 35 mm)</li>\n          <li><strong>Recency:</strong> Must be captured within the past 6 months</li>\n        </ul>\n      </div>\n\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">Print Sheet Formatting:</div>\n        <p class=\"text-muted-foreground leading-relaxed\">\n          If mailing a physical passport application, our <a href=\"/us/passport-photo-resizer/\" class=\"text-primary underline font-semibold\">Passport Resizer</a> formats a standard 4×6 inch photo print sheet containing two identical 2×2 inch photos with crop marks, ready for printing at any local photo lab or pharmacy.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Tool 3 Card: USCIS Green Card & DV Lottery -->\n  <div class=\"p-5 rounded-2xl border border-border bg-card space-y-4 shadow-xs\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3\">\n      <div class=\"flex items-center gap-2.5\">\n        <span class=\"p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xl font-bold\">🗽</span>\n        <div>\n          <h3 class=\"text-lg font-bold text-foreground\">Tool 3: USCIS Green Card &amp; DV Lottery Resizer</h3>\n          <p class=\"text-xs text-muted-foreground\">Compliant with Form I-485, EAD card, I-130 petitions, and annual DV Lottery</p>\n        </div>\n      </div>\n      <a href=\"/us/green-card-photo-resizer/\" class=\"px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition text-center shrink-0\">\n        Launch Green Card Tool →\n      </a>\n    </div>\n\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs\">\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">Strict DV Lottery Standards:</div>\n        <ul class=\"list-disc pl-4 space-y-1 text-muted-foreground\">\n          <li><strong>Color Depth:</strong> 24-bit color in standard sRGB color space</li>\n          <li><strong>Dimensions:</strong> 600 × 600 pixels square (≤ 240 KB)</li>\n          <li><strong>Compression Ratio:</strong> Strictly ≤ 20:1 to preserve facial contours</li>\n          <li><strong>Zero Alteration Policy:</strong> No skin smoothing, background erasing, or AI editing</li>\n        </ul>\n      </div>\n\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">Avoid Automated DV Disqualification:</div>\n        <p class=\"text-muted-foreground leading-relaxed\">\n          The State Department uses facial recognition to check every DV lottery winner against previous applications. Ensure 100% compliance using the <a href=\"/us/green-card-photo-resizer/\" class=\"text-primary underline font-semibold\">USCIS Green Card &amp; DV Lottery Resizer</a>.\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <!-- Tool 4 Card: Common App -->\n  <div class=\"p-5 rounded-2xl border border-border bg-card space-y-4 shadow-xs\">\n    <div class=\"flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3\">\n      <div class=\"flex items-center gap-2.5\">\n        <span class=\"p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xl font-bold\">🎓</span>\n        <div>\n          <h3 class=\"text-lg font-bold text-foreground\">Tool 4: Common App Student Photo &amp; Document Resizer</h3>\n          <p class=\"text-xs text-muted-foreground\">Student headshots, SEVIS/I-20 passport scans, and academic transcript compression</p>\n        </div>\n      </div>\n      <a href=\"/us/common-app-photo-resizer/\" class=\"px-3.5 py-1.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition text-center shrink-0\">\n        Launch Common App Tool →\n      </a>\n    </div>\n\n    <div class=\"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs\">\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">University Admissions Bounds:</div>\n        <ul class=\"list-disc pl-4 space-y-1 text-muted-foreground\">\n          <li><strong>Student Headshot:</strong> 600 × 600 px square, plain background, professional attire</li>\n          <li><strong>File Weight Cap:</strong> Strictly under 200 KB or 500 KB</li>\n          <li><strong>Document Scans:</strong> Crisp letter/A4 page compression with sharp text contrast</li>\n        </ul>\n      </div>\n\n      <div class=\"space-y-2 bg-muted/30 p-3.5 rounded-xl border border-border/60\">\n        <div class=\"font-bold text-foreground\">International Student Visa Readiness:</div>\n        <p class=\"text-muted-foreground leading-relaxed\">\n          When accepted to US colleges, international students must provide passport bio-page scans for their Form I-20 generation. Use the <a href=\"/us/common-app-photo-resizer/\" class=\"text-primary underline font-semibold\">Common App Resizer</a> to prepare compliant files in seconds.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Step-by-Step Smartphone Shooting Blueprint -->\n<section id=\"shooting-guide\" class=\"space-y-4 pt-6 border-t border-border\">\n  <h2 class=\"text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2\">\n    <span>📱 4.</span> Step-by-Step Blueprint: Capturing Compliant US Photos on Smartphone\n  </h2>\n  <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n    Follow this simple 5-step photography checklist to shoot consular-grade passport photos at home without spending $20+ at commercial pharmacies.\n  </p>\n\n  <div class=\"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs\">\n    <div class=\"p-4 rounded-xl border border-border bg-card space-y-2\">\n      <div class=\"w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center\">1</div>\n      <div class=\"font-bold text-foreground\">Find White Backdrop</div>\n      <p class=\"text-muted-foreground\">\n        Stand 3 to 4 feet in front of a flat, smooth, white or off-white wall. Avoid textured paint, wallpaper, doorways, or furniture in the frame.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl border border-border bg-card space-y-2\">\n      <div class=\"w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center\">2</div>\n      <div class=\"font-bold text-foreground\">Set Up Diffuse Lighting</div>\n      <p class=\"text-muted-foreground\">\n        Face a large window with indirect daylight, or place two soft lamps at 45-degree angles to illuminate both sides of your face evenly without shadows.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl border border-border bg-card space-y-2\">\n      <div class=\"w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center\">3</div>\n      <div class=\"font-bold text-foreground\">No Eyeglasses or Uniforms</div>\n      <p class=\"text-muted-foreground\">\n        Remove all eyeglasses, sunglasses, hats, earbuds, and headphones. Wear standard everyday street clothing. Uniforms or camouflage attire are not allowed.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl border border-border bg-card space-y-2\">\n      <div class=\"w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center\">4</div>\n      <div class=\"font-bold text-foreground\">Neutral Facial Expression</div>\n      <p class=\"text-muted-foreground\">\n        Look directly into the camera lens with both eyes open and mouth closed in a neutral expression. Keep both ears and the full oval of your face visible.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl border border-border bg-card space-y-2\">\n      <div class=\"w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center\">5</div>\n      <div class=\"font-bold text-foreground\">Have Someone Shoot From 5 Feet</div>\n      <p class=\"text-muted-foreground\">\n        Never use the front-facing selfie camera (which distorts facial geometry). Have a family member or friend take the photo using the rear camera at eye level.\n      </p>\n    </div>\n\n    <div class=\"p-4 rounded-xl border border-border bg-card space-y-2\">\n      <div class=\"w-7 h-7 rounded-lg bg-primary/10 text-primary font-bold flex items-center justify-center\">6</div>\n      <div class=\"font-bold text-foreground\">Resize with SignResize</div>\n      <p class=\"text-muted-foreground\">\n        Upload the picture into <a href=\"/us/ds-160-photo-resizer/\" class=\"text-primary underline font-semibold\">SignResize DS-160 Tool</a> to lock it to 600×600 px and compress it strictly under 240 KB instantly.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- 100% Client-Side Privacy & Security Guarantee -->\n<section id=\"privacy-guarantee\" class=\"space-y-4 pt-6 border-t border-border\">\n  <div class=\"p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-card to-card border-2 border-emerald-500/30 space-y-3\">\n    <div class=\"flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider\">\n      <span>🛡️</span>\n      <span>100% Client-Side Privacy &amp; Biometric Security Guarantee</span>\n    </div>\n    <h3 class=\"text-lg sm:text-xl font-bold text-foreground\">\n      Why SignResize Never Uploads or Stores Your Personal Photos\n    </h3>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      Personal biometric photographs and passport identification documents contain sensitive identity data. Most free online resizers transmit your photographs to remote cloud servers, creating potential privacy risks.\n    </p>\n    <p class=\"text-xs sm:text-sm text-muted-foreground leading-relaxed\">\n      <strong>SignResize is fundamentally different:</strong> 100% of image rendering, aspect ratio locking, biometric oval positioning, and JPEG compression algorithms run directly inside your web browser’s local memory using modern <strong>HTML5 Canvas APIs</strong>. Your photographs and document scans never leave your personal computer or phone.\n    </p>\n  </div>\n</section>\n"
  },
  {
    slug: "mp-police-constable-2026-vacancy-syllabus-physical-chart-salary",
    title: "MP Police Constable 2026: Vacancy, Syllabus, Physical Chart & Salary Guide",
    metaTitle: "MP Police Constable 2026: Syllabus, Physical & Cut-Off",
    metaDescription: "Complete guide to MP Police Constable 2026 recruitment: CBT syllabus, 100-mark physical chart, salary matrix, admit card download, and document upload rules.",
    excerpt: "Complete candidate blueprint for MP Police Constable 2026: 100-mark CBT syllabus, 100-mark PET physical chart, height criteria, salary matrix, admit card steps, and document resize guidelines.",
    category: "Study Prep",
    country: "IN",
    publishDate: "Oct 07, 2026",
    lastUpdated: "Oct 07, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Police Recruitment & Physical Standards Analyst",
    readTime: "9 min read",
    featured: true,
    tags: [
      "MP Police 2026",
      "MP Police Constable",
      "MP Police Syllabus",
      "Physical Chart 100 Marks",
      "MP Police Salary",
      "MPESB Vyapam",
      "Admit Card Download",
      "Document Guidelines"
    ],
    relatedExamPreset: "mp-police-constable",
    quickFacts: [
      { label: "Conducting Body", value: "Madhya Pradesh Employees Selection Board (MPESB / Vyapam)" },
      { label: "Total Selection Marks", value: "200 Marks (100 Marks Written CBT + 100 Marks PET Physical)" },
      { label: "Written Exam Pattern", value: "100 MCQs | 120 Minutes | No Negative Marking" },
      { label: "Physical Efficiency Test", value: "800m Run (40 Marks), Long Jump (30 Marks), Shot Put (30 Marks)" },
      { label: "Male Height Standard", value: "168 cm (General/OBC/SC), 160 cm (ST)" },
      { label: "Female Height Standard", value: "155 cm (All Categories)" },
      { label: "Basic Pay Scale", value: "₹19,500 – ₹62,000 (Level 4, 7th Pay Matrix)" },
      { label: "Official Web Portal", value: "esb.mp.gov.in / peb.mp.gov.in" }
    ],
    faqs: [
      {
        question: "MP police me hight kitni chahiye (What is the height requirement for MP Police)?",
        answer: "==For male candidates in General, OBC, and SC categories, the minimum required height is 168 cm with a chest of 81 cm unexpanded and 86 cm expanded. For ST male candidates, the height requirement is 160 cm with a chest of 76–81 cm. For all female candidates across every category, the minimum required height is 155 cm with no chest measurement criteria.=="
      },
      {
        question: "MP police me running kitni hoti hai (What is the 800m running duration and marks)?",
        answer: "==MP Police Constable PET requires an 800-meter run carrying a maximum of 40 marks. Male candidates scoring the full 40 marks must clock 124 seconds or less (2 minutes 04 seconds), while completing the run in 198 seconds grants the minimum baseline score. For female candidates, the maximum 40 marks are awarded for finishing in 176 seconds or less.=="
      },
      {
        question: "MP police ka syllabus kya hai (What is the MP Police written exam syllabus)?",
        answer: "==The MP Police Constable written CBT consists of 100 objective questions for 100 marks with zero negative marking. The subject weightage includes: General Knowledge and Reasoning (40 marks), Intellectual Ability and Mental Aptitude (30 marks), and Science and Simple Arithmetic (30 marks). The exam duration is 120 minutes.=="
      },
      {
        question: "MP police constable ki salary kitni hoti hai (What is the in-hand salary)?",
        answer: "==MP Police Constable falls under Pay Matrix Level 4 with a basic pay scale of ₹19,500 to ₹62,000. In addition to basic pay, constables receive Dearness Allowance (DA at 50%), House Rent Allowance (HRA at 9% to 27%), Uniform Allowance, Ration Allowance, and Kit Maintenance. The starting gross salary is approximately ₹31,500, resulting in a net monthly in-hand salary of approximately ₹26,500 to ₹28,500.=="
      },
      {
        question: "MP police ka admit card kaise nikale (How to download MP Police Admit Card)?",
        answer: "==Visit the official MPESB portal at esb.mp.gov.in, select your preferred language (English/Hindi), click on the 'Test Admit Card: Police Constable Recruitment' link, enter your 13-digit Application Number, Date of Birth (DD/MM/YYYY), first 2 letters of mother's name plus the last 4 digits of your Aadhaar Number, solve the security captcha, and download your hall ticket.=="
      },
      {
        question: "MP police constable me kitne number chahiye (What is the safe qualifying cut-off)?",
        answer: "==Because final selection is calculated on a 200-mark aggregate (100 marks CBT + 100 marks Physical PET), candidates should target a combined score of 145 to 155 marks for the General/UR category, 138 to 148 marks for OBC, 130 to 140 marks for SC, and 120 to 130 marks for ST. For the written CBT stage alone, targeting 75+ out of 100 marks ensures qualification for the physical test.=="
      },
      {
        question: "MP police verification process me kya hota hai (How is Police Verification conducted)?",
        answer: "==Police verification takes place after provisional merit selection. Candidates submit the official Character and Antecedent Verification Form (Anubraman Patra) detailing permanent residence, educational records, and references. The local police station in the candidate's jurisdiction verifies criminal records, court cases, FIR status, and character standing before dispatching the clean report to Police Headquarters.=="
      },
      {
        question: "MP police 2026 vacancy kab aayegi (When will the 2026 recruitment notification release)?",
        answer: "==The Madhya Pradesh Employees Selection Board (MPESB) publishes police recruitment notifications in accordance with Police Headquarters requisition cycles. Updates and rulebooks are hosted directly on esb.mp.gov.in. Candidates should monitor the official exam calendar released each January and keep their digital document templates ready.=="
      }
    ],
    contentHtml: `
      <div class="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ Direct Answer: MP Police Constable 2026 Selection Blueprint</h4>
        <p class="text-sm text-foreground/90 leading-relaxed">
          The Madhya Pradesh Police Constable recruitment is administered by the <strong>Madhya Pradesh Employees Selection Board (MPESB / Vyapam)</strong> across a two-tier <strong>200-mark evaluation system</strong>. Candidates undergo a 100-mark Computer-Based Test (CBT) covering GK, Reasoning, Arithmetic, and Science, followed by a revolutionary 100-mark Physical Efficiency Test (PET) comprising an 800m run (40 marks), Long Jump (30 marks), and Shot Put (30 marks). Final appointment follows strict document verification, medical clearance, and local police character verification.
        </p>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ MP Police Scoring &amp; Merit Formula</span>
          <span>Official MPESB Rulebook Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Total Final Score = CBT Score (Max 100 Marks) + PET Physical Score (Max 100 Marks)
Selection Ratio for PET: 7 Times the Vacancy Count per Category
Written Negative Marking: 0.00 (Zero Negative Marks)</code></pre>
      </div>

      <h2>⚡ 1. MP Police Recruitment 2025–2026 Snapshot &amp; Cadres</h2>
      <p>
        The Madhya Pradesh Police force offers diverse operational assignments across Executive, Armed, and Technical branches. Recruitment drives conducted by MPESB cover multiple functional branches, each with distinct physical benchmarks and technical requirements:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Recruitment Cadre</th>
              <th class="p-3 border border-border">Educational Qualification</th>
              <th class="p-3 border border-border">Age Bracket (General)</th>
              <th class="p-3 border border-border">Selection Stages</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Constable (GD) – DEF (District Executive Force)</td>
              <td class="p-3 border border-border">10th Class Passed (8th for ST candidates)</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT (100) + PET (100) + Medical</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Constable (GD) – SAF (Special Armed Force)</td>
              <td class="p-3 border border-border">10th Class Passed from recognized Board</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT (100) + PET (100) + Medical</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Constable (Radio Operator)</td>
              <td class="p-3 border border-border">12th Pass + 2-Yr ITI / Polytechnic Diploma in Electronics/IT</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT Paper 1 + Technical Paper 2 + PET (Qualifying)</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Constable (Band / Bugler / Armorer)</td>
              <td class="p-3 border border-border">10th Pass + Trade Proficiency in Musical Band</td>
              <td class="p-3 border border-border">18 to 33 Years (+ State relaxations)</td>
              <td class="p-3 border border-border">CBT (100) + Trade Test + PET</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Candidates planning their application must ensure their digital documents conform precisely to official guidelines. You can generate certified uploads instantly using our free tools for 
        <a href="/mp-police-photo-resize/" class="text-primary font-semibold underline hover:text-primary/80">MP Police Photo Resize</a> 
        and 
        <a href="/mp-police-signature-resize/" class="text-primary font-semibold underline hover:text-primary/80">MP Police Signature Resize</a>, 
        or verify guidelines across other state exams via our comprehensive 
        <a href="/government-jobs/" class="text-primary font-semibold underline hover:text-primary/80">Government Job Portal</a>.
      </p>

      <h2>📚 2. Written CBT Exam Pattern, Subject Weightage &amp; Preparation Routine</h2>
      <p>
        The written examination is administered as a single Computer-Based Test lasting 120 minutes (2 hours). One mark is awarded for every correct answer, and notably, <strong>there is no negative marking</strong> for incorrect responses.
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Subject Section</th>
              <th class="p-3 border border-border">Question Count</th>
              <th class="p-3 border border-border">Maximum Marks</th>
              <th class="p-3 border border-border">High-Yield Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">General Knowledge &amp; Reasoning</td>
              <td class="p-3 border border-border">40 Questions</td>
              <td class="p-3 border border-border">40 Marks</td>
              <td class="p-3 border border-border">MP Static GK, Rivers, Forts, National Parks, Current Affairs, Analogies, Blood Relations</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Intellectual Ability &amp; Mental Aptitude</td>
              <td class="p-3 border border-border">30 Questions</td>
              <td class="p-3 border border-border">30 Marks</td>
              <td class="p-3 border border-border">Syllogisms, Coding-Decoding, Non-Verbal Series, Venn Diagrams, Direction Sense</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Science &amp; Simple Arithmetic</td>
              <td class="p-3 border border-border">30 Questions</td>
              <td class="p-3 border border-border">30 Marks</td>
              <td class="p-3 border border-border">Class 10th Physics, Chemistry, Biology, Percentages, Ratio, Profit &amp; Loss, Mensuration</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted font-bold text-foreground">
              <td class="p-3 border border-border">Total Examination</td>
              <td class="p-3 border border-border">100 Questions</td>
              <td class="p-3 border border-border">100 Marks</td>
              <td class="p-3 border border-border">Duration: 120 Minutes (No Negative Marking)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Strategic 90-Day Daily Study Routine</h3>
      <p>
        Candidates asking <em>"mp police ki taiyari kaise karen"</em> should implement a structured tripartite daily routine:
      </p>
      <ul>
        <li><strong>Morning Block (6:00 AM – 8:30 AM):</strong> Track training for the 800m running and long jump. Conditioning muscles early prevents burnout during evening study sessions.</li>
        <li><strong>Midday Block (11:00 AM – 2:00 PM):</strong> Quantitative Aptitude and Reasoning practice. Solve 40 daily arithmetic questions covering Number Systems, Speed-Time-Distance, and LCM-HCF.</li>
        <li><strong>Evening Block (5:00 PM – 8:00 PM):</strong> Madhya Pradesh State GK and General Science. Focus heavily on MP geography, district history, tribal culture, and Class 10 NCERT science formulas.</li>
        <li><strong>Night Review (9:30 PM – 10:30 PM):</strong> Timed sectional mock test or previous years' MPESB Constable question paper analysis.</li>
      </ul>

      <h2>🏃 3. Physical Standards (PST) &amp; 100-Mark PET Scoring Chart</h2>
      <p>
        The Physical Efficiency Test (PET) for MP Police Constable is unique among Indian state forces: <strong>it carries 100 marks that directly determine the final merit rank</strong>. Underperforming in the physical events cannot be compensated by written exam marks alone.
      </p>

      <h3>Physical Standard Test (PST) Minimum Benchmarks</h3>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Candidate Category</th>
              <th class="p-3 border border-border">Minimum Height</th>
              <th class="p-3 border border-border">Chest (Unexpanded)</th>
              <th class="p-3 border border-border">Chest (Expanded)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Male (UR / OBC / SC)</td>
              <td class="p-3 border border-border">168 cm</td>
              <td class="p-3 border border-border">81 cm</td>
              <td class="p-3 border border-border">86 cm (Minimum 5 cm expansion)</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Male (ST - Scheduled Tribe)</td>
              <td class="p-3 border border-border">160 cm</td>
              <td class="p-3 border border-border">76 cm</td>
              <td class="p-3 border border-border">81 cm (Minimum 5 cm expansion)</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Female (All Categories - UR, OBC, SC, ST)</td>
              <td class="p-3 border border-border">155 cm</td>
              <td class="p-3 border border-border">Not Applicable</td>
              <td class="p-3 border border-border">Not Applicable</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Official 100-Mark PET Scoring Chart</h3>
      <p>
        The 100 marks of the Physical Efficiency Test are split into three competitive sporting events:
      </p>
      <ul>
        <li><strong>800-Meter Run:</strong> Maximum 40 Marks (Single attempt only)</li>
        <li><strong>Long Jump:</strong> Maximum 30 Marks (Three attempts permitted, best score counted)</li>
        <li><strong>Shot Put:</strong> Maximum 30 Marks (Weight: 7.260 kg for Men, 4.0 kg for Women; three attempts permitted)</li>
      </ul>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Scored Marks</th>
              <th class="p-3 border border-border">800m Run: Men (Seconds)</th>
              <th class="p-3 border border-border">800m Run: Women (Seconds)</th>
              <th class="p-3 border border-border">Long Jump: Men</th>
              <th class="p-3 border border-border">Shot Put: Men (7.26 kg)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50 bg-emerald-500/10 font-bold">
              <td class="p-3 border border-border text-emerald-600 dark:text-emerald-400">40 Marks (Max Run) / 30 (Field)</td>
              <td class="p-3 border border-border">&le; 124.2 sec (2m 04s)</td>
              <td class="p-3 border border-border">&le; 176.0 sec (2m 56s)</td>
              <td class="p-3 border border-border">&ge; 5.57 meters</td>
              <td class="p-3 border border-border">&ge; 8.76 meters</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">35 Marks / 26 Marks</td>
              <td class="p-3 border border-border">127.1 – 130.0 sec</td>
              <td class="p-3 border border-border">181.1 – 186.0 sec</td>
              <td class="p-3 border border-border">5.15 – 5.25 meters</td>
              <td class="p-3 border border-border">8.00 – 8.18 meters</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">30 Marks / 22 Marks</td>
              <td class="p-3 border border-border">133.1 – 136.0 sec</td>
              <td class="p-3 border border-border">191.1 – 196.0 sec</td>
              <td class="p-3 border border-border">4.75 – 4.85 meters</td>
              <td class="p-3 border border-border">7.25 – 7.43 meters</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">25 Marks / 18 Marks</td>
              <td class="p-3 border border-border">142.1 – 145.0 sec</td>
              <td class="p-3 border border-border">206.1 – 211.0 sec</td>
              <td class="p-3 border border-border">4.35 – 4.45 meters</td>
              <td class="p-3 border border-border">6.50 – 6.68 meters</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">20 Marks / 14 Marks</td>
              <td class="p-3 border border-border">154.1 – 157.0 sec</td>
              <td class="p-3 border border-border">226.1 – 231.0 sec</td>
              <td class="p-3 border border-border">3.95 – 4.05 meters</td>
              <td class="p-3 border border-border">5.75 – 5.93 meters</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Baseline Qualifying Limit</td>
              <td class="p-3 border border-border">198.0 sec (3m 18s)</td>
              <td class="p-3 border border-border">261.0 sec (4m 21s)</td>
              <td class="p-3 border border-border">2.96 meters</td>
              <td class="p-3 border border-border">3.83 meters</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>💰 4. MP Police Constable Salary Structure &amp; Police Verification</h2>
      <p>
        Appointed constables in Madhya Pradesh receive benefits governed by the 7th Central Pay Commission (Pay Matrix Level 4). Below is the comprehensive monthly pay breakup:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground">
              <th class="p-3 border border-border">Salary Component</th>
              <th class="p-3 border border-border">Amount / Percentage</th>
              <th class="p-3 border border-border">Remarks &amp; Entitlements</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Basic Pay (Entry Level 4)</td>
              <td class="p-3 border border-border">₹19,500 per month</td>
              <td class="p-3 border border-border">Base pay scale ₹19,500 – ₹62,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Dearness Allowance (DA)</td>
              <td class="p-3 border border-border">₹9,750 (50% of Basic)</td>
              <td class="p-3 border border-border">Revised semiannually per state finance department orders</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">House Rent Allowance (HRA)</td>
              <td class="p-3 border border-border">₹1,755 – ₹3,510 (9% to 18%)</td>
              <td class="p-3 border border-border">Tier classification (Bhopal/Indore vs other district headquarters)</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Special allowances</td>
              <td class="p-3 border border-border">₹1,200 – ₹2,000</td>
              <td class="p-3 border border-border">Kit maintenance, uniform washing, and mobile conveyance</td>
            </tr>
            <tr class="border-b border-border/50 font-bold bg-muted">
              <td class="p-3 border border-border">Gross Monthly Pay</td>
              <td class="p-3 border border-border">₹32,205 – ₹34,760</td>
              <td class="p-3 border border-border">Before statutory pension and professional tax deductions</td>
            </tr>
            <tr class="border-b border-border/50 text-emerald-600 dark:text-emerald-400 font-bold">
              <td class="p-3 border border-border">Net In-Hand Salary</td>
              <td class="p-3 border border-border">₹27,000 – ₹29,200</td>
              <td class="p-3 border border-border">Credited monthly to candidate's bank account after NPS deduction</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Character &amp; Police Verification Protocol</h3>
      <p>
        Addressing candidate searches regarding <em>"mp police verification"</em>, the document validation workflow is formal and non-negotiable:
      </p>
      <ol class="list-decimal pl-5 space-y-2 text-sm text-foreground/90">
        <li><strong>Submission of Attestation Form:</strong> Selected candidates fill out three sets of the official Anubraman Patra detailing residence records for the past 5 years, educational institutions attended, and names of two responsible local references.</li>
        <li><strong>Local Police Station Verification:</strong> Forms are dispatched to the Superintendent of Police (SP) office and routed to the candidate's jurisdictional police thana. The local beat constable inspects records for active FIRs, chargesheets, or criminal court proceedings.</li>
        <li><strong>Character Certificate Issuance:</strong> Once verified by local authorities and countersigned by the SP Office, the clean report is transmitted to the Police Training School (PTS) or recruitment board for final dispatch of joining orders.</li>
      </ol>

      <h2>🪪 5. MP Police Admit Card, Answer Key &amp; Cut-Off Roadmap</h2>
      <p>
        Candidates frequently encounter issues retrieving hall tickets and results. Follow this direct procedural guide for MPESB portal navigation:
      </p>

      <h3>How to Download the MP Police Admit Card (Admit Card Kaise Nikale)</h3>
      <ol class="list-decimal pl-5 space-y-2 text-sm text-foreground/90">
        <li>Access the official website: <strong>esb.mp.gov.in</strong> or <strong>peb.mp.gov.in</strong>.</li>
        <li>Select the primary language interface (English or Hindi).</li>
        <li>Click on <strong>"Admit Card"</strong> in the top navigation bar and select <strong>"Police Constable Recruitment Test"</strong>.</li>
        <li>Read the advisory instructions regarding COVID and biometric verification, then click the search window.</li>
        <li>Enter your <strong>13-digit Application Number</strong> and your <strong>Date of Birth (DD/MM/YYYY)</strong>.</li>
        <li>Input the candidate identifier: the first two letters of your mother's name followed by the last four digits of your Aadhaar card.</li>
        <li>Enter the calculation captcha and click <strong>Search</strong> to download and print your hall ticket in duplicate.</li>
      </ol>

      <h3>Category-Wise Cut-Off Trends (Combined 200 Marks Benchmark)</h3>
      <p>
        With the 100-mark physical test directly influencing rankings, overall safe target marks across previous and expected cycles are summarized below:
      </p>
      <ul>
        <li><strong>General / Unreserved (UR):</strong> 145 – 155 Marks (Combined out of 200)</li>
        <li><strong>Other Backward Classes (OBC):</strong> 138 – 148 Marks</li>
        <li><strong>Economically Weaker Section (EWS):</strong> 134 – 142 Marks</li>
        <li><strong>Scheduled Caste (SC):</strong> 128 – 136 Marks</li>
        <li><strong>Scheduled Tribe (ST):</strong> 118 – 128 Marks</li>
      </ul>

      <h2>📐 6. MPESB Official Document &amp; Scanned Signature Specifications</h2>
      <p>
        More than 15% of online applications on the MPESB / Vyapam portal get rejected during automated scanning because candidates fail to comply with the combined self-declaration template rules.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📋</span> MP Police MPESB Portal Upload Guidelines
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
            <h4 class="font-bold text-primary">Passport Photo Standards</h4>
            <ul class="space-y-1 text-muted-foreground">
              <li>Dimensions: <strong>3.5 &times; 4.5 cm</strong> (approx. 240 &times; 320 px)</li>
              <li>File Size: <strong>20 KB to 50 KB</strong> in JPG/JPEG format</li>
              <li>Background: Clear white or light off-white background</li>
              <li>Slate Rule: Photo must show candidate holding a slate with their clear name and photograph date</li>
              <li>Format tool: <a href="/mp-police-photo-resize/" class="text-primary font-semibold underline">Resize MP Police Photo</a></li>
            </ul>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-2">
            <h4 class="font-bold text-primary">Signature &amp; Declaration Standards</h4>
            <ul class="space-y-1 text-muted-foreground">
              <li>Dimensions: <strong>140 &times; 60 pixels</strong> (4.0 &times; 2.0 cm)</li>
              <li>File Size: <strong>10 KB to 20 KB</strong> in JPG/JPEG format</li>
              <li>Ink: Running handwriting using dark black ballpoint pen</li>
              <li>Important: Signatures in CAPITAL / BLOCK letters are rejected</li>
              <li>Format tool: <a href="/mp-police-signature-resize/" class="text-primary font-semibold underline">Resize MP Police Signature</a></li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    slug: "state-psc-otr-registration-photo-signature-guidelines-muxyprqk",
    title: "State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC",
    excerpt: "Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.",
    category: "Guidelines & Tips",
    publishDate: "Oct 07, 2026",
    lastUpdated: "Oct 07, 2026",
    author: "SignResize Technical Verification Team",
    authorRole: "State Commission Standards Desk",
    readTime: "7 min read",
    featured: false,
    tags: ["State PSC","OTR Registration","UPPSC","BPSC","MPSC","RPSC","Document Guidelines"],
    relatedExamPreset: "uppsc-uttar-pradesh",
    quickFacts: [],
    contentHtml: `
<h2>State PSC One-Time Registration (OTR) Mandate</h2>
      <p>State Public Service Commissions across India—including <strong>UPPSC (Uttar Pradesh), BPSC (Bihar), MPSC (Maharashtra), and RPSC (Rajasthan)</strong>—have made OTR mandatory. Photographs and signatures uploaded during OTR are permanently locked to candidate profiles for all future competitive exam notices.</p>

      <h2>State Commission Document Comparison Matrix</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Commission</th>
              <th class="p-3 border-b">Signature Size &amp; Specs</th>
              <th class="p-3 border-b">Photo Dimensions &amp; Size</th>
              <th class="p-3 border-b">Special Rules</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">UPPSC OTR</td>
              <td class="p-3 font-mono">10 KB – 20 KB (140&times;60 px)</td>
              <td class="p-3 font-mono">20 KB – 50 KB (3.5&times;4.5 cm)</td>
              <td class="p-3">White background; Candidate name &amp; photo date beneath picture</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">BPSC (Bihar)</td>
              <td class="p-3 font-mono">10 KB – 20 KB (Separate Files)</td>
              <td class="p-3 font-mono">20 KB – 50 KB (3.5&times;4.5 cm)</td>
              <td class="p-3">Requires two separate uploads for Hindi and English running signatures</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">MPSC (Maharashtra)</td>
              <td class="p-3 font-mono">10 KB – 20 KB</td>
              <td class="p-3 font-mono">20 KB – 50 KB (200&times;230 px)</td>
              <td class="p-3">Black ballpoint pen on plain white sheet; Cursive running writing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ State OTR Portal Error Prevention Code Snippet</span>
          <span>Portal Validation Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>If photo_background != "white" OR signature_casing == "BLOCK_CAPS":
    Return Portal_Error: "Document failed OCR automated quality check"</code></pre>
      </div>

      <h2>Step-by-Step State OTR Navigation Workflow</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Register OTR Profile</h4>
            <p class="text-xs text-muted-foreground mt-1">Enter Aadhar / Mobile / Email to generate permanent OTR Registration ID on your State PSC portal.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Upload High-Contrast Photos &amp; Signatures</h4>
            <p class="text-xs text-muted-foreground mt-1">Use SignResize to remove background phone shadows and compress signatures precisely to the 10–20 KB bound.</p>
          </div>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your OTR Files in 1 Click</h4>
        <p class="text-sm text-muted-foreground mt-1">Select your state commission preset to automatically apply exact dimensions and compression limits directly in your browser.</p>
        <a href="/#tool-workspace" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Launch State PSC Resizer &rarr;
        </a>
      </div>
    `,
    faqs: []
  },
  {
    slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy-muwjkuc2",
    title: "RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy",
    excerpt: "Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, step-by-step navigation, and speed calculation methods.",
    category: "Study Prep",
    publishDate: "Oct 06, 2026",
    lastUpdated: "Oct 06, 2026",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["RRB NTPC","Railway Exams","CBT 1 Prep","Signature 10-20KB","Maths Shortcuts","Document Guidelines"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [],
    contentHtml: `
<h2>RRB NTPC 2026: Master Examination Overview &amp; Selection Stages</h2>
      <p>The Railway Recruitment Boards (RRB) have activated the recruitment calendar for <strong>Non-Technical Popular Categories (NTPC)</strong>. Covering graduate posts like Goods Guard, Senior Clerk-cum-Typist, and Commercial Apprentice, as well as undergraduate roles like Junior Clerk and Train Clerk, competition across all Indian railway zones is exceptionally high.</p>

      <p>Succeeding in CBT-1 and CBT-2 requires a structured study routine paired with strict document compliance during the online registration process.</p>

      <div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ CBT-1 Exam Pattern &amp; Time Distribution</h4>
        <ul class="space-y-1.5 text-sm text-foreground/90">
          <li><strong>General Awareness:</strong> 40 Questions (Current Affairs, General Science, Indian History, Geography, Static GK)</li>
          <li><strong>Mathematics:</strong> 30 Questions (Number Systems, Decimals, Fractions, LCM-HCF, Ratio, Percentages, Mensuration, Time &amp; Work)</li>
          <li><strong>General Intelligence &amp; Reasoning:</strong> 30 Questions (Analogies, Coding, Syllogisms, Venn Diagrams, Mathematical Operations)</li>
          <li><strong>Total Time:</strong> 90 Minutes (100 Questions with 1/3rd negative marking per incorrect response)</li>
        </ul>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Railway Exam Portal Rules &amp; Negative Marking Snippet</span>
          <span>RRB Specification Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>CBT-1 Score = (Correct Attempts × 1.0) - (Incorrect Attempts × 0.333)
Shortlisting Ratio for CBT-2 = 1:20 (Twenty times the vacancy count per Zone)</code></pre>
      </div>

      <h2>Document Upload Compliance for Railway Portals</h2>
      <p>Railway recruitment notices explicitly enforce strict parameters for candidate photo and scanned signature uploads:</p>
      <ul>
        <li><strong>Scanned Passport Photo:</strong> Clear color photograph against a light white background taken within 3 months. File size must range between <strong>20 KB and 50 KB</strong> in JPG/JPEG format. Spectacles with tint or flash glare will be rejected.</li>
        <li><strong>Candidate Signature:</strong> Must be signed in running handwriting on clean white unruled paper using a black ballpoint pen. File weight must be between <strong>10 KB and 20 KB</strong> (140 &times; 60 pixels). Capital letter signatures trigger immediate cancellation.</li>
      </ul>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📐</span> RRB Document Formatting Workflow
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">1</div>
            <span class="font-bold text-xs text-foreground">Sign on White Paper</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Use dark black ballpoint pen</span>
          </div>
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">2</div>
            <span class="font-bold text-xs text-foreground">Crop 140x60 Ratio</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Remove surrounding excess paper</span>
          </div>
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">3</div>
            <span class="font-bold text-xs text-foreground">Background White Filter</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Clean phone shadows automatically</span>
          </div>
          <div class="p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-1.5 sm:space-y-2">
            <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs sm:text-sm">4</div>
            <span class="font-bold text-xs text-foreground">Target 10-20 KB</span>
            <span class="text-[10px] sm:text-[11px] text-muted-foreground">Compress for zero portal error</span>
          </div>
        </div>
      </div>

      <div class="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Need RRB Signature &amp; Photo Formatted?</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Use our dedicated RRB Railway preset to crop, clean dark shadows, and compress into the exact 10–20 KB bound in seconds.</p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3 mt-3">
          <a href="/rrb-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            Open RRB Resizer &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-xs sm:text-sm hover:opacity-95 transition w-full sm:w-auto">
            Resize Passport Photo &rarr;
          </a>
        </div>
      </div>

      <h2>Step-by-Step Railway Registration Workflow</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Select Zonal RRB Portal</h4>
            <p class="text-xs text-muted-foreground mt-1">Visit your chosen zonal portal (e.g. RRB Mumbai, RRB Chennai, RRB Chandigarh) and initiate candidate registration.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Upload Photo (20-50 KB) &amp; Signature (10-20 KB)</h4>
            <p class="text-xs text-muted-foreground mt-1">Upload JPEG files formatted with SignResize. Verify that your signature image displays clearly without horizontal stretch.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">3</div>
            <h4 class="font-bold text-foreground text-sm">Confirm Community Certificate Upload (SC/ST)</h4>
            <p class="text-xs text-muted-foreground mt-1">If applying for free rail travel authority, upload your scanned caste certificate in PDF format under 500 KB.</p>
          </div>
        </div>
      </div>

      <h2>Recommended Daily Study Strategy</h2>
      <p>Divide your daily preparation into 3 focused blocks: 2 hours for Arithmetic speed drills, 1.5 hours for Logical Reasoning puzzle practice, and 2 hours for General Science and Current Affairs revision.</p>
    `,
    faqs: []
  },

  {
    slug: "ppsc-fpsc-pakistan-photo-signature-resizer-guide-2026",
    title: "Punjab Public Service Commission (PPSC) Pakistan Master Guide 2026: Jobs, Online Apply, Roll No Slip, Photo (25 KB) & Signature Resizer",
    metaTitle: "PPSC Pakistan Master Guide 2026: Jobs, Roll No Slip & Photo Resizer",
    metaDescription: "Complete PPSC Pakistan 2026 master guide covering PPSC jobs, online apply, roll no slip download, PPSC planner, syllabus, 200x230 px (25 KB) photo & signature resizer.",
    excerpt: "Master handbook for Punjab Public Service Commission (PPSC) Pakistan 2026 covering PPSC jobs, online application steps, 25 KB photo resizer, roll no slip, syllabus, and past papers.",
    category: "Guidelines & Tips",
    country: "PK",
    publishDate: "Oct 05, 2026",
    lastUpdated: "Oct 05, 2026",
    author: "SignResize Pakistan Desk",
    authorRole: "PPSC & FPSC Recruitment Compliance Specialist",
    readTime: "12 min read",
    featured: false,
    tags: [
      "PPSC Pakistan",
      "PPSC Jobs 2026",
      "PPSC Online Apply",
      "PPSC Roll No Slip",
      "PPSC Photo Size 25KB",
      "PPSC Signature Resizer",
      "PPSC Planner"
],
    relatedExamPreset: "ppsc-pk",
    quickFacts: [
      {
            "label": "Conducting Body",
            "value": "Punjab Public Service Commission (PPSC LDA Plaza Edgerton Road Lahore)"
      },
      {
            "label": "Official Website",
            "value": "ppsc.gop.pk (Official Punjab Portal)"
      },
      {
            "label": "Passport Photo Bounds",
            "value": "200 × 230 px (15 KB to 25 KB, Light Blue or White BG, JPG)"
      },
      {
            "label": "Signature Scan Bounds",
            "value": "200 × 230 px (5 KB to 25 KB, Black Ink on White Sheet, JPG)"
      },
      {
            "label": "Fee Payment Method",
            "value": "PSID 1Bill via JazzCash, EasyPaisa, ATM & Mobile Banking apps"
      },
      {
            "label": "Key Portal Features",
            "value": "PPSC Planner, Online Apply, Roll No Slip, Written Result, Merit Lists"
      },
      {
            "label": "CNIC Document Limit",
            "value": "Scanned front copy of 13-digit CNIC strictly ≤ 25 KB"
      },
      {
            "label": "Test Qualifying Benchmark",
            "value": "40% to 50% minimum aggregate score (per recruitment rules)"
      }
],
    faqs: [
      {
            "question": "What is Punjab Public Service Commission (PPSC)?",
            "answer": "The ==Punjab Public Service Commission (PPSC)== is a constitutional body established under the PPSC Act of the Government of Punjab, Pakistan. It conducts competitive examinations and professional interviews to recruit qualified candidates for provincial civil posts across various departments."
      },
      {
            "question": "What does PPSC stand for in Pakistan?",
            "answer": "PPSC stands for ==Punjab Public Service Commission==, located at LDA Plaza, Edgerton Road, Lahore, Punjab, Pakistan."
      },
      {
            "question": "How to apply online for PPSC jobs on ppsc.gop.pk?",
            "answer": "Visit ==ppsc.gop.pk==, click on ==Apply Online==, select the job advertisement, enter your 13-digit CNIC without dashes, generate your 16-digit PSID fee number, pay the fee via JazzCash/EasyPaisa, upload a 200x230 px photo (≤25 KB) and signature (≤25 KB), and submit."
      },
      {
            "question": "What is the photo size requirement for PPSC online application?",
            "answer": "PPSC requires a recent passport-style photograph measuring exactly ==200 × 230 pixels== with file size strictly ==under 25 KB (15 KB to 25 KB in JPG format)== on a light blue or plain white background."
      },
      {
            "question": "What is the signature file requirement for PPSC portal?",
            "answer": "The signature file must be a clean scan of your ==signature penned in black ink on white unruled paper== measuring ==200 × 230 pixels== and file size strictly ==under 25 KB (5 KB to 25 KB in JPG format)==."
      },
      {
            "question": "How to pay PPSC application fee through JazzCash or EasyPaisa?",
            "answer": "Log in to your JazzCash or EasyPaisa mobile app, navigate to ==Bill Payment -> 1Bill Voucher / Invoice==, enter the 16-digit PSID consumer number generated during your PPSC online application, confirm the fee amount (usually PKR 600), and pay. The PPSC portal status updates automatically."
      },
      {
            "question": "How to download PPSC Roll No Slip and Admission Letter?",
            "answer": "Visit ==ppsc.gop.pk==, click on ==Print Admission Letter / Roll No Slip==, enter your 13-digit CNIC number and select the applied post from the dropdown list. Download and print the generated admission letter for test day."
      },
      {
            "question": "What is the PPSC Planner and how to check test dates?",
            "answer": "The ==PPSC Planner== on ppsc.gop.pk is an online tracking calendar that displays scheduled examination dates, interview timelines, shorthand test schedules, and final result declarations for every advertisement."
      },
      {
            "question": "How to edit PPSC online application form after submission?",
            "answer": "Applicants can edit certain details before the closing date by clicking on ==Edit Application== at ppsc.gop.pk using their Application Number, Token Number, and CNIC. However, photo, signature, and post choice cannot be altered after final lock."
      },
      {
            "question": "What are PPSC Lecturer Jobs and Sub Inspector recruitment rules?",
            "answer": "PPSC regularly recruits Lecturers (BS-17) for Higher Education Department and Sub-Inspectors (BS-14) for Punjab Police. Requirements include Master's Degree (or BS 4-Year) for Lecturers and Graduation with physical physical standards for Sub-Inspectors."
      },
      {
            "question": "Where to download PPSC past papers and syllabus PDF?",
            "answer": "Official syllabus breakdowns for 100-MCQ General Knowledge or subject-specific papers are published under the ==Syllabus tab on ppsc.gop.pk==. Past papers cover General Knowledge, Pakistan Studies, Islamic Studies, Current Affairs, Everyday Science, and Basic Math."
      },
      {
            "question": "Why is photo or CNIC image rejected on PPSC portal?",
            "answer": "PPSC portal rejects image uploads exceeding 25.0 KB, images with dark background shadows, photos taken with spectacles/sunglasses, or files uploaded in WEBP, PNG, or HEIC formats."
      },
      {
            "question": "How to resize photo and signature for PPSC strictly under 25 KB?",
            "answer": "Use our dedicated client-side utility: upload your image to the ==SignResize Pakistan PPSC Photo Resizer (200x230 px, ≤25 KB)== and ==PPSC Signature Resizer (≤25 KB)== to auto-crop and clamp byte sizes instantly."
      },
      {
            "question": "What is PPSC Challan Form PSID system?",
            "answer": "PPSC has replaced physical paper bank challans with the digital ==1Bill PSID (Payment System Identifier)== system. Candidates no longer need to visit National Bank of Pakistan branches; fee is paid digitally via 1Bill PSID."
      },
      {
            "question": "How to check PPSC written test result and final merit list?",
            "answer": "Navigate to ==ppsc.gop.pk -> Results -> Written Results or Final Recommendations==. Download the PDF list containing Roll Numbers and names of qualified candidates recommended for appointment."
      }
],
    contentHtml: `
<!-- Sticky / Collapsible Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>200x230 Photo / Signature Upload Error</span>
    </a>
    <a href="#failure-payment" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>💳</span>
      <span>PSID Fee Payment (JazzCash / EasyPaisa)</span>
    </a>
    <a href="#failure-rollno" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🎟️</span>
      <span>Roll No Slip &amp; Admission Letter</span>
    </a>
    <a href="#failure-planner" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📅</span>
      <span>PPSC Planner &amp; Exam Schedule</span>
    </a>
    <a href="#failure-edit" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>✏️</span>
      <span>Edit Application &amp; Token Number</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete Punjab Public Service Commission (PPSC) Pakistan 2026 Master Overview:</strong> The Punjab Public Service Commission (PPSC), headquartered at LDA Plaza, Edgerton Road, Lahore and accessible online via <a href="https://ppsc.gop.pk" target="_blank" rel="noopener noreferrer" class="text-primary underline">ppsc.gop.pk</a>, is the premier provincial recruitment authority in Punjab. Whether you are applying for <strong>PPSC Lecturer Jobs (BS-17)</strong>, <strong>Punjab Police Sub-Inspector (BS-14)</strong>, <strong>Tehsildar</strong>, or <strong>Assistant Director</strong> roles, completing your online application requires navigating the <strong>PSID 1Bill fee payment system</strong>, tracking the <strong>PPSC Planner</strong>, and complying with strict file standards: <strong>200 × 230 pixel passport photo under 25 KB</strong>, <strong>scanned black ink signature under 25 KB</strong>, and <strong>CNIC front copy under 25 KB</strong>.
    </p>
  </div>

  <p>
    Each recruitment advertisement released by PPSC attracts tens of thousands of applicants from Lahore, Rawalpindi, Multan, Faisalabad, Gujranwala, Bahawalpur, Sargodha, and across Punjab. However, thousands face application rejection or missing admission letters due to file size truncation errors, uploading mobile snapshots larger than 25 KB, or un-reconciled PSID payments.
  </p>

  <p>
    This diagnostic master guide provides an <strong>actionable troubleshooting framework</strong> covering PPSC online application steps, JazzCash/EasyPaisa fee payment, roll no slip downloads, past paper preparation, and instant image formatting using our free client-side utility: the <a href="/ppsc-signature-resize/" class="text-primary font-semibold underline">SignResize Pakistan PPSC &amp; FPSC Photo Resizer</a>.
  </p>
</section>

<!-- Authoritative Master Specifications & Policy Bounds -->
<section id="master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master PPSC Regulatory &amp; Technical Benchmark Specifications
  </h2>
  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Authoritative structural parameters governing PPSC examination cycles, online portal limits, and recruitment standards across Punjab, Pakistan.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official PPSC Punjab Standard</th>
          <th class="px-4 py-3">Statutory Rule / Authority</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">PPSC Passport Photo File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">200 × 230 px (15 KB to 25 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">Light blue or white background, JPG format</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature Scan File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">200 × 230 px (5 KB to 25 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">Black ballpoint ink on clean white unruled paper</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Scanned CNIC Front Image Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">Strictly ≤ 25 KB</td>
          <td class="px-4 py-3 text-muted-foreground">13-digit CNIC front copy scan, baseline JPG</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Application Fee &amp; Payment System</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">PKR 600 (via 16-Digit 1Bill PSID)</td>
          <td class="px-4 py-3 text-muted-foreground">Payable via JazzCash, EasyPaisa, ATM, 1Link banking</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Written Test Passing Threshold</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">40% per paper, 50% aggregate score</td>
          <td class="px-4 py-3 text-muted-foreground">PPSC Examination &amp; Interview Regulations</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Written Test Format</td>
          <td class="px-4 py-3 font-mono">100 MCQs • 90 Minutes • 0.25 Negative Marking</td>
          <td class="px-4 py-3 text-muted-foreground">General Knowledge &amp; Subject-Specific Papers</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Headquarters &amp; Regional Centers</td>
          <td class="px-4 py-3 font-mono">Lahore (LDA Plaza), Rawalpindi, Multan, Faisalabad</td>
          <td class="px-4 py-3 text-muted-foreground">Exam &amp; Interview centers across Punjab</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Visual Dimension Blueprints & Side-by-Side Comparison -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
    <!-- Photo Blueprint -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>📐</span> Passport Photo Blueprint (200 × 230 px)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~20 KB</span>
      </div>
      <div class="flex items-center gap-4 text-xs text-muted-foreground">
        <div class="w-24 h-28 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center text-center p-2 shrink-0">
          <span class="font-bold text-primary text-[10px]">80% Face</span>
          <span class="text-[9px] text-muted-foreground">200×230 px</span>
          <span class="text-[8px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">Light Blue BG</span>
        </div>
        <div class="space-y-1.5">
          <p><strong class="text-foreground">Aspect Ratio:</strong> Vertical portrait ratio (200×230 px).</p>
          <p><strong class="text-foreground">Face Coverage:</strong> Full frontal view, neutral expression, ears visible, no headgear except religious.</p>
          <p><strong class="text-foreground">Size Limit:</strong> Strictly between 15 KB and 25 KB in JPG format.</p>
        </div>
      </div>
    </div>

    <!-- Signature Blueprint & Script Scrutiny -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>✍️</span> Signature Blueprint &amp; Script Scrutiny
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~12 KB</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-center text-xs">
        <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <span class="text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center gap-1">
            <span>✅</span> Valid Signature
          </span>
          <div class="font-serif italic text-base text-foreground py-1">Muhammad Ali</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Black ballpoint ink scan on white paper under 25 KB.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
          <span class="text-rose-700 dark:text-rose-300 font-bold flex items-center justify-center gap-1">
            <span>❌</span> Auto-Rejected
          </span>
          <div class="font-mono font-bold tracking-widest text-sm text-rose-600 dark:text-rose-400 py-1">MUHAMMAD ALI</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Shadowed background or block letter signatures face rejection.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================= -->
<!-- 🛠️ INTERACTIVE DIAGNOSTIC FAILURE MATRIX (5W1H TROUBLESHOOTING)          -->
<!-- ========================================================================= -->

<!-- FAILURE STATE 1: Upload & File Errors -->
<section id="failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="space-y-1">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
        Stage 1 Failure State
      </span>
      <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
        📸 Failure State 1: PPSC 200x230 px &amp; 25 KB File Upload Rejections
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a href="/ppsc-signature-resize/" class="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
        PPSC 25KB Tool
      </a>
    </div>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    During step 4 of online application submission on <a href="https://ppsc.gop.pk" target="_blank" rel="noopener noreferrer" class="text-primary underline">ppsc.gop.pk</a>, server decoders check binary streams. When a photo exceeds 25.0 KB or uses improper pixel width, the portal displays a hard upload exception.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "Image size exceeds 25 KB limit. Please upload a file between 15 KB to 25 KB (200x230 px)" OR "CNIC image size must be under 25 KB".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Mobile phone cameras shoot high-resolution photos ranging from 2MB to 8MB. Renaming .png or .heic to .jpg does not compress the underlying byte buffer. Files above 25.0 KB fail PPSC database blob constraints.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> Failure Window &amp; Closing Dates
        </strong>
        <p class="text-muted-foreground">
          Occurs during the online registration process before final submission lock. If unresolved before 12:00 Midnight of the closing date, the application remains un-submitted.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Official Portal Link
        </strong>
        <p class="text-muted-foreground">
          Punjab Public Service Commission Application Portal: <code>ppsc.gop.pk -> Apply Online -> Step 4 Image Upload</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Candidates
        </strong>
        <p class="text-muted-foreground">
          Aspirants applying for PPSC Lecturers, Punjab Police Sub-Inspectors, Tehsildar, Municipal Officers, and Junior Clerks across Punjab.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Step-by-Step Technical Fix
        </strong>
        <p class="text-muted-foreground">
          1. Upload your photo to <a href="/ppsc-signature-resize/" class="text-primary underline">SignResize Pakistan PPSC Tool</a>.<br/>
          2. Select <strong>PPSC Passport (200x230 px, ≤25 KB)</strong> or <strong>Signature (≤25 KB)</strong>.<br/>
          3. Download the clamped JPG file (~18 KB) and upload cleanly to ppsc.gop.pk.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 2: PSID Fee Payment -->
<section id="failure-payment" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Stage 2 Fee System
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      💳 PPSC 1Bill PSID Fee Payment via JazzCash, EasyPaisa &amp; Mobile Banking
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    PPSC has eliminated paper bank challans. All application fees (usually PKR 600) are paid digitally using the 16-digit <strong>PSID (Payment System Identifier)</strong> number generated during online registration.
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4 text-xs sm:text-sm">
    <h3 class="font-bold text-foreground text-base">3-Step PSID Payment Workflow:</h3>
    <ol class="list-decimal pl-5 space-y-2 text-muted-foreground">
      <li><strong>Generate PSID:</strong> During Step 2 of online registration on <code>ppsc.gop.pk</code>, the system displays a unique 16-digit PSID number (e.g. <code>1002345678901234</code>) sent via SMS.</li>
      <li><strong>Open Payment App:</strong> Open <strong>JazzCash</strong>, <strong>EasyPaisa</strong>, or any mobile banking app (HBL, UBL, Meezan, Alfalah). Navigate to <code>Payments -> Bill Payment -> 1Bill Voucher / Invoice</code>.</li>
      <li><strong>Enter &amp; Pay:</strong> Paste your 16-digit PSID number, confirm the PKR 600 charge, and pay. The PPSC application system reconciles your payment automatically within seconds.</li>
    </ol>

    <!-- Dark Snippet Box for PSID verification log -->
    <div class="my-4 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-1">
      <div class="text-emerald-400 font-bold">// PPSC 1Bill PSID Verification Output</div>
      <div>Transaction Status: PAID (Reconciled via 1Link Clearing House)</div>
      <div>PSID Consumer ID: 1002984512348765</div>
      <div>Fee Amount: PKR 600.00 | Payment Channel: JazzCash Mobile Wallet</div>
      <div>Status on Portal: Payment Received - Proceed to Final Submit</div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 3: Roll No Slip & Admission Letter -->
<section id="failure-rollno" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Stage 3 Test Entry
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🎟️ PPSC Roll No Slip &amp; Admission Letter Download Protocol
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Approximately 7 to 10 days before the scheduled test date, PPSC issues official admission letters online. Candidates do not receive physical roll no slips by mail.
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <p><strong>Step 1:</strong> Visit <a href="https://ppsc.gop.pk" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline">ppsc.gop.pk</a> and click on the <strong>Print Admission Letter</strong> button.</p>
    <p><strong>Step 2:</strong> Enter your 13-digit CNIC number without dashes (e.g. <code>3520112345671</code>) and select your applied post from the dropdown menu.</p>
    <p><strong>Step 3:</strong> Download the PDF Admission Letter containing your Test Center address, Roll Number, Reporting Time, and mandatory instructions (bring original CNIC &amp; printed Admission Letter to test center).</p>
  </div>
</section>

<!-- FAILURE STATE 4: PPSC Planner & Test Schedule -->
<section id="failure-planner" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      Stage 4 Examination Planning
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📅 PPSC Planner: Tracking Test Dates, Shorthand &amp; Interview Schedules
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    The <strong>PPSC Planner</strong> is a transparent online tracking tool available on ppsc.gop.pk that updates candidates on every stage of recruitment:
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Planner Stage</th>
          <th class="px-4 py-3">Portal Indicator</th>
          <th class="px-4 py-3">Candidate Action Required</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Scrutiny of Applications</td>
          <td class="px-4 py-3 text-muted-foreground">Under Process</td>
          <td class="px-4 py-3 text-muted-foreground">Wait for scrutiny completion and eligible candidates list</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Schedule of Written Exam</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">Test Date Announced</td>
          <td class="px-4 py-3 text-muted-foreground">Download Roll No Slip from ppsc.gop.pk</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Written Test Result</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Result Declared</td>
          <td class="px-4 py-3 text-muted-foreground">Check qualified list and prepare documents for interview</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Final Merit List / Recommendation</td>
          <td class="px-4 py-3 font-bold text-indigo-600 dark:text-indigo-400">Final Recommendations Issued</td>
          <td class="px-4 py-3 text-muted-foreground">Successful candidates receive official appointment letters from department</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Stage 5: Edit Application & Token Recovery -->
<section id="failure-edit" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      Stage 5 Application Modifications
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      ✏️ Edit Application &amp; Token Number Recovery
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    If you made an error in personal particulars, examination center, or academic entries before the advertisement deadline, you can modify your submission online:
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <h3 class="font-bold text-foreground text-base">Steps to Edit Your PPSC Application:</h3>
    <ol class="list-decimal pl-4 space-y-1.5 text-muted-foreground">
      <li>Go to <a href="https://ppsc.gop.pk" target="_blank" rel="noopener noreferrer" class="text-primary underline">ppsc.gop.pk</a> and click on <strong>Edit Application</strong>.</li>
      <li>Enter your <strong>13-digit CNIC</strong>, <strong>Application Number</strong>, and <strong>Token Number</strong> (sent via SMS/email upon initial submission).</li>
      <li>If you lost your Token Number, click <em>Forgot Token Number</em> to receive an instant recovery SMS.</li>
      <li>Update educational records or re-upload your 200&times;230 px photo (&le;25 KB) and save changes before 11:59 PM on the closing date.</li>
    </ol>
  </div>
</section>

<!-- Tool Callout CTA Box -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">Resize Photo &amp; Signature for PPSC Pakistan Instantly</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">Crop your photo to 200x230 px and compress photo, signature, and CNIC copy strictly under 25 KB with 100% privacy and zero quality loss.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/ppsc-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open PPSC Pakistan Resizer Tool &rarr;
    </a>
    <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      General Photo Resizer
    </a>
  </div>
</div>
`
  },
  {
    slug: "prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026",
    title: "Civil Service Commission (CSC) Philippines Master Guide 2026: Civil Service Exam, Job Opportunities, Photo (1.5x2\") & Signature Resizer",
    metaTitle: "CSC Philippines Master Guide 2026: Exam, Hiring & Photo Resizer",
    metaDescription: "Complete CSC Philippines 2026 master guide covering Civil Service Exam (CSE), job opportunities, NCR recruitment, 1.5x2 inch photo specs, signature 50KB resizer, and PDS Form 212 guidelines.",
    excerpt: "Master handbook for Civil Service Commission (CSC) Philippines 2026 covering Civil Service Exam (CSE Subprof & Prof), job opportunities, CSC NCR hiring, 1.5x2 inch photo resizer, signature specs, and PDS Form 212 compliance.",
    category: "Guidelines & Tips",
    country: "PH",
    publishDate: "Oct 05, 2026",
    lastUpdated: "Oct 05, 2026",
    author: "SignResize Philippines Desk",
    authorRole: "Civil Service Commission & PRC LERIS Compliance Specialist",
    readTime: "12 min read",
    featured: false,
    tags: [
      "Civil Service Commission",
      "CSC Exam 2026",
      "CSC Job Opportunities",
      "CSC Photo Size 1.5x2",
      "CSC Signature 50KB",
      "PRC LERIS 2x2 Photo",
      "PDS Form 212 Photo"
],
    relatedExamPreset: "prc-ph",
    quickFacts: [
      {
            "label": "Conducting Authority",
            "value": "Civil Service Commission (CSC Central & Regional Offices)"
      },
      {
            "label": "Official Portals",
            "value": "csc.gov.ph | jobs.csc.gov.ph | ocsers.csc.gov.ph"
      },
      {
            "label": "Exam Levels",
            "value": "Professional & Subprofessional (Pen-and-Paper PPT / COMEX)"
      },
      {
            "label": "CSE Passing Benchmark",
            "value": "80.00% rating across Verbal, Analytical, Numerical & General Info"
      },
      {
            "label": "Passport Photo Limit",
            "value": "1.5 × 2.0 inches (450 × 600 px at 300 DPI), 10 KB to 100 KB, white BG"
      },
      {
            "label": "Signature Limit",
            "value": "Scanned black ink signature on white paper, 5 KB to 50 KB, clean JPG"
      },
      {
            "label": "PDS CS Form 212",
            "value": "Revised 2017 Personal Data Sheet with passport photo & name tag"
      },
      {
            "label": "Eligibility Validity",
            "value": "Lifetime validity under RA 1080 and CSC Resolution mandates"
      }
],
    faqs: [
      {
            "question": "What is the Civil Service Commission (CSC) in the Philippines?",
            "answer": "The ==Civil Service Commission (CSC)== is the central personnel agency of the Philippine government mandated by the 1987 Constitution to establish a career service, promote morale, efficiency, integrity, responsiveness, progressiveness, and courtesy in the civil service."
      },
      {
            "question": "What is the Civil Service Examination (CSE)?",
            "answer": "The ==Civil Service Examination (CSE)== is a competitive qualifying examination administered by the CSC in Pen-and-Paper Test (PPT) and Computerized Examination (COMEX) formats to confer Professional and Subprofessional civil service eligibilities required for permanent government appointments."
      },
      {
            "question": "Ano ang Civil Service Commission (CSC Exam Tagalog Guide)?",
            "answer": "Ang ==Civil Service Commission (CSC)== ang pangunahing ahensya ng pamahalaan sa Pilipinas na nagpapatupad ng Civil Service Exam (CSE). Ang pagpasa sa CSE (Professional o Subprofessional) ay nagbibigay ng ==eligibility para sa permanenteng trabaho sa mga ahensya ng gobyerno==."
      },
      {
            "question": "How to check Civil Service Commission job opportunities and hiring?",
            "answer": "Job seekers can explore official vacancy listings across Philippine national government agencies, local government units (LGUs), and government-owned corporations on the ==official CSC Job Opportunities Portal (jobs.csc.gov.ph)== or regional portals like CSC NCR."
      },
      {
            "question": "What are the photo requirements for the Civil Service Exam?",
            "answer": "The CSC requires a recent ==1.5 × 2.0 inch (450 × 600 pixels) passport-size photograph== taken within the last 3 months, printed or scanned on a plain white background, strictly between ==10 KB and 100 KB in JPG format==, showing a full-face view with ears visible and neutral expression."
      },
      {
            "question": "What is the signature requirement for CSC OCSERS portal?",
            "answer": "The signature file must be a clean, scanned image of your ==signature penned in black ink on white unruled paper==. The digital file size must be between ==5 KB and 50 KB in JPG format==."
      },
      {
            "question": "What is Civil Service Commission NCR (National Capital Region)?",
            "answer": "The ==CSC National Capital Region (CSC NCR)== office handles examination processing, eligibility verification, and job placement services for Metro Manila and adjacent government agency headquarters."
      },
      {
            "question": "What is the difference between Professional and Subprofessional CSE?",
            "answer": "The ==Professional Level (Second Level eligibility)== qualifies passing candidates for technical, executive, and administrative officer positions (Salary Grade 11 and above). The ==Subprofessional Level (First Level eligibility)== qualifies candidates for clerical, secretarial, trade, and custodial positions (Salary Grade 1 to 10)."
      },
      {
            "question": "What is the passing mark for the Civil Service Exam?",
            "answer": "Candidates must achieve an overall rating of at least ==80.00%== to pass either the Professional or Subprofessional Civil Service Examination."
      },
      {
            "question": "What are the photo guidelines for PDS CS Form 212 (Revised 2017)?",
            "answer": "The Personal Data Sheet (PDS CS Form 212 Revised 2017) requires an attached ==1.5 × 2.0 inch passport-style photo with a printed name tag at the bottom (First Name, Middle Initial, Last Name, Extension Name)== and signature over printed name."
      },
      {
            "question": "Why is photo or signature rejected on the CSC portal?",
            "answer": "CSC portal rejection stems from four primary errors: uploading photos larger than 100 KB, using non-white or shadowy backgrounds, wearing eyeglasses or face masks, or uploading faint blue ink or block letter signatures."
      },
      {
            "question": "How to resize photo and signature for CSC exam online?",
            "answer": "Use our free client-side tool: drop your image into the ==SignResize Philippines 1.5x2 Photo Resizer (10 to 100 KB)== and ==Signature Resizer (5 to 50 KB)== to automatically crop, fix DPI, and clamp byte sizes in seconds."
      },
      {
            "question": "How long is Civil Service Eligibility valid in the Philippines?",
            "answer": "Civil Service Eligibility granted upon passing the CSE possesses ==lifetime validity== and does not expire."
      }
],
    contentHtml: `
<!-- Sticky / Collapsible Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>1.5x2 Photo / Signature Upload Error</span>
    </a>
    <a href="#failure-hiring" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>💼</span>
      <span>CSC Hiring &amp; Job Opportunities</span>
    </a>
    <a href="#failure-subprof-prof" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📝</span>
      <span>Subprof vs Prof Eligibility</span>
    </a>
    <a href="#failure-ocsers" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🚩</span>
      <span>OCSERS Portal Image Rejected (≤100 KB)</span>
    </a>
    <a href="#failure-pds212" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📄</span>
      <span>PDS CS Form 212 Photo Rules</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete Civil Service Commission (CSC) Philippines 2026 Master Overview:</strong> The Civil Service Commission (CSC), accessible via <a href="https://csc.gov.ph" target="_blank" rel="noopener noreferrer" class="text-primary underline">csc.gov.ph</a>, is the central human resources authority of the Philippine government. Whether you are preparing for the nationwide <strong>Civil Service Examination (CSE Pen and Paper Test / COMEX)</strong>, searching for career opportunities on <a href="https://jobs.csc.gov.ph" target="_blank" rel="noopener noreferrer" class="text-primary underline">jobs.csc.gov.ph</a>, or filing your <strong>Personal Data Sheet (PDS CS Form 212 Revised 2017)</strong>, securing eligibility requires achieving an <strong>80.00% rating</strong> and complying with strict document standards: <strong>1.5 × 2.0 inch passport photos under 100 KB</strong> and <strong>scanned black ink signatures under 50 KB</strong>.
    </p>
  </div>

  <p>
    Every year, hundreds of thousands of Filipino aspirants register through the Online Civil Service Examination Application System (<a href="https://ocsers.csc.gov.ph" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">ocsers.csc.gov.ph</a>) and regional directors such as CSC NCR (National Capital Region). However, thousands face application rejection due to incorrect photo aspect ratios, shadowed backgrounds, missing name tags on PDS forms, or file size upload failures.
  </p>

  <p>
    This diagnostic master guide provides an <strong>actionable troubleshooting framework</strong> covering exam eligibility, career recruitment paths, regional office contacts, and instant image formatting using our free client-side utility: the <a href="/prc-photo-signature-resize-philippines/" class="text-primary font-semibold underline">SignResize Philippines CSC &amp; PRC Photo Resizer</a>.
  </p>
</section>

<!-- Authoritative Master Specifications & Policy Bounds -->
<section id="master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master CSC Regulatory &amp; Technical Benchmark Specifications
  </h2>
  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Authoritative benchmark parameters governing the Civil Service Commission (CSC) examination, hiring systems, and PRC LERIS board exam portals across the Philippines.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official Philippine Government Standard</th>
          <th class="px-4 py-3">Statutory Rule / Authority</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">CSE Professional Passing Benchmark</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">80.00% Rating Overall</td>
          <td class="px-4 py-3 text-muted-foreground">CSC Resolution &amp; Exam Guidelines</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">CSE Subprofessional Passing Benchmark</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">80.00% Rating Overall</td>
          <td class="px-4 py-3 text-muted-foreground">Qualifies for SG 1 to SG 10 clerical roles</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">CSC Application Passport Photo Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">1.5 × 2.0 inches (450 × 600 px at 300 DPI)</td>
          <td class="px-4 py-3 text-muted-foreground">10 KB to 100 KB, JPG format, plain white background</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">PRC LERIS Board Exam Photo Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">2 × 2 inches (600 × 600 px at 300 DPI)</td>
          <td class="px-4 py-3 text-muted-foreground">10 KB to 100 KB, white BG, formal attire with collar</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature Upload File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">Scanned Black Ink (5 KB to 50 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">Clean JPG scan on spotless white unruled paper</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">PDS CS Form 212 (Revised 2017) Photo</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">1.5 × 2.0 inch with Printed Name Tag</td>
          <td class="px-4 py-3 text-muted-foreground">Full name &amp; signature over printed name at bottom</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Civil Service Eligibility Validity</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Lifetime Validity</td>
          <td class="px-4 py-3 text-muted-foreground">RA 1080 / CSC Permanent Eligibility Mandate</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Visual Dimension Blueprints & Side-by-Side Comparison -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
    <!-- Photo Blueprint -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>📐</span> Passport Photo Blueprint (1.5 × 2.0 inch / 450×600 px)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~50 KB</span>
      </div>
      <div class="flex items-center gap-4 text-xs text-muted-foreground">
        <div class="w-24 h-32 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center text-center p-2 shrink-0">
          <span class="font-bold text-primary text-[10px]">80% Face</span>
          <span class="text-[9px] text-muted-foreground">450×600 px</span>
          <span class="text-[8px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">White BG</span>
        </div>
        <div class="space-y-1.5">
          <p><strong class="text-foreground">Aspect Ratio:</strong> 3:4 vertical passport ratio.</p>
          <p><strong class="text-foreground">Face Coverage:</strong> Full frontal face, bare face without eyeglasses, neutral expression, ears visible.</p>
          <p><strong class="text-foreground">Recency Rule:</strong> Taken within the preceding 3 months.</p>
        </div>
      </div>
    </div>

    <!-- Signature Blueprint & Script Scrutiny -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>✍️</span> Signature Blueprint &amp; Script Scrutiny
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~20 KB</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-center text-xs">
        <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <span class="text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center gap-1">
            <span>✅</span> Valid Signature
          </span>
          <div class="font-serif italic text-base text-foreground py-1">Maria Santos</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Black ballpoint ink scan on white paper under 50 KB.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
          <span class="text-rose-700 dark:text-rose-300 font-bold flex items-center justify-center gap-1">
            <span>❌</span> Auto-Rejected
          </span>
          <div class="font-mono font-bold tracking-widest text-sm text-rose-600 dark:text-rose-400 py-1">MARIA SANTOS</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Shadowed background or block letter signatures face rejection.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================= -->
<!-- 🛠️ INTERACTIVE DIAGNOSTIC FAILURE MATRIX (5W1H TROUBLESHOOTING)          -->
<!-- ========================================================================= -->

<!-- FAILURE STATE 1: Upload & File Errors -->
<section id="failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="space-y-1">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
        Stage 1 Failure State
      </span>
      <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
        📸 Failure State 1: CSC 1.5x2" &amp; PRC 2x2" Photo / Signature Upload Errors
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a href="/ph/" class="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
        Philippines Tool (1.5x2 / 2x2)
      </a>
    </div>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    During registration on <a href="https://ocsers.csc.gov.ph" target="_blank" rel="noopener noreferrer" class="text-primary underline">ocsers.csc.gov.ph</a> or PRC LERIS, client-side scripts inspect binary headers. When a photo exceeds 100 KB or uses improper dimensions, the server rejects the upload.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "Invalid file size or format. Photo must be JPG between 10 KB and 100 KB (1.5x2 inches)" OR "Signature must not exceed 50 KB".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Smartphones capture images in high-resolution PNG, WEBP, or HEIC formats with 4MB to 12MB sizes. Renaming the extension to .jpg fails server MIME validation. Additionally, shadows or non-white backgrounds trigger automated crop rejections.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> Application Deadlines
        </strong>
        <p class="text-muted-foreground">
          Immediate block during step 3 of online application filing. Failure to resolve prevents exam slot reservation before regional quota caps are reached.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Official Portal Gateway
        </strong>
        <p class="text-muted-foreground">
          Online Civil Service Examination Application System: <code>ocsers.csc.gov.ph</code> or PRC LERIS portal <code>online.prc.gov.ph</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Applicants
        </strong>
        <p class="text-muted-foreground">
          Civil Service Exam applicants, PRC board exam examinees, DFA passport appointment holders, and public sector job applicants filing PDS Form 212.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Step-by-Step Technical Fix
        </strong>
        <p class="text-muted-foreground">
          1. Upload your original photo to <a href="/prc-photo-signature-resize-philippines/" class="text-primary underline">SignResize Philippines Resizer</a>.<br/>
          2. Select <strong>CSC Passport (1.5x2 in, 450x600 px)</strong> or <strong>PRC 2x2 in (600x600 px)</strong>.<br/>
          3. Download the baseline sRGB compressed JPEG file (clamped under 100 KB) and upload seamlessly.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 2: Job Opportunities & Careers -->
<section id="failure-hiring" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Stage 2 Career Pathway
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      💼 CSC Job Opportunities, Hiring Portals &amp; Regional Office (NCR) Recruitment
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Passing the Civil Service Exam grants eligibility, but securing a government position requires navigating official hiring bulletins, salary grade structures (SG 1 to SG 24), and Qualification Standards (QS).
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4 text-xs sm:text-sm">
    <h3 class="font-bold text-foreground text-base">Key CSC Job Opportunities Portals:</h3>
    <ul class="list-disc pl-5 space-y-2 text-muted-foreground">
      <li><strong>CSC Job Opportunities Portal (<a href="https://jobs.csc.gov.ph" target="_blank" rel="noopener noreferrer" class="text-primary underline">jobs.csc.gov.ph</a>):</strong> Central repository listing vacant government positions across all national government agencies (NGAs), state universities and colleges (SUCs), and local government units (LGUs).</li>
      <li><strong>CSC National Capital Region (CSC NCR):</strong> Handles recruitments, eligibility verification, and certificate requests for Metro Manila agencies (Quezon City, Manila, Pasig, Makati).</li>
      <li><strong>Qualification Standards (QS):</strong> Every government position specifies required Education, Training, Experience, and Civil Service Eligibility.</li>
    </ul>

    <!-- Dark Snippet Box for CSC Job Search Code -->
    <div class="my-4 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-1">
      <div class="text-emerald-400 font-bold">// CSC Job Bulletin Verification Log</div>
      <div>Agency: Department of Education / Department of Health / LGU Quezon City</div>
      <div>Position Title: Administrative Officer II (Salary Grade 11)</div>
      <div>Eligibility Requirement: Career Service Professional / Second Level Eligibility</div>
      <div>Required Document: PDS CS Form 212 Revised 2017 with 1.5x2 Photo &amp; Signature</div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 3: Subprof vs Prof Eligibility -->
<section id="failure-subprof-prof" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Stage 3 Exam Choice
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📝 Subprofessional vs Professional Civil Service Exam Comparison
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Choosing the correct exam tier is critical for your target career level in the Philippine civil service.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Feature</th>
          <th class="px-4 py-3">Subprofessional Exam Level</th>
          <th class="px-4 py-3">Professional Exam Level</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Conferred Eligibility</td>
          <td class="px-4 py-3 text-muted-foreground">First Level Eligibility</td>
          <td class="px-4 py-3 font-bold text-primary">Second Level Eligibility</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Covered Positions</td>
          <td class="px-4 py-3 text-muted-foreground">Clerical, Secretarial, Custodial (SG 1 - 10)</td>
          <td class="px-4 py-3 text-muted-foreground">Technical, Professional, Executive (SG 11+)</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Educational Prerequisite</td>
          <td class="px-4 py-3 text-muted-foreground">At least 72 college units or 2-year diploma</td>
          <td class="px-4 py-3 text-muted-foreground">Bachelor's Degree graduate or graduating student</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Test Duration &amp; Items</td>
          <td class="px-4 py-3 font-mono">2 Hours 40 Mins (165 items)</td>
          <td class="px-4 py-3 font-mono">3 Hours 10 Mins (170 items)</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Exam Scope Differences</td>
          <td class="px-4 py-3 text-muted-foreground">Spelling, Clerical Operations, Vocabulary</td>
          <td class="px-4 py-3 text-muted-foreground">Analogy, Logic, Data Interpretation, Paragraph Organization</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAILURE STATE 4: OCSERS Portal & Image Specs -->
<section id="failure-ocsers" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      Stage 4 Technical Compliance
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🚩 OCSERS Portal Photo &amp; Signature Rejection Checklist
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Avoid common photo rejection triggers identified by CSC Regional Scrutiny teams:
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
    <div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-1">
      <strong class="text-rose-700 dark:text-rose-300 font-bold">🚫 Disqualifying Photo Traps:</strong>
      <ul class="list-disc pl-4 space-y-1 text-muted-foreground text-xs">
        <li>Wearing eyeglasses, sunglasses, or tinted lenses.</li>
        <li>Selfie angles, tilted head, or cropped group photos.</li>
        <li>Off-white, grey, patterned, or shaded background walls.</li>
        <li>File size larger than 100 KB or resolution lower than 450x600 px.</li>
      </ul>
    </div>

    <div class="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
      <strong class="text-emerald-700 dark:text-emerald-300 font-bold">✅ Standard Compliant Photo:</strong>
      <ul class="list-disc pl-4 space-y-1 text-muted-foreground text-xs">
        <li>Recent photo taken within the last 3 months.</li>
        <li>Full frontal face with ears fully visible.</li>
        <li>Plain white background with neutral lighting.</li>
        <li>Dimensions: 1.5 × 2.0 inches (450 × 600 px) clamped at 10–100 KB.</li>
      </ul>
    </div>
  </div>
</section>

<!-- FAILURE STATE 5: PDS Form 212 Guidelines -->
<section id="failure-pds212" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      Stage 5 Document Verification
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📄 Personal Data Sheet (PDS CS Form 212 Revised 2017) Photo Attachment Guide
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    When submitting hardcopy or digital copies of <strong>PDS CS Form 212 Revised 2017</strong> for government job applications, candidates must attach a passport-size photo adhering to strict name tag formatting:
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <p><strong>Name Tag Specification:</strong> A printed tag positioned at the bottom of the 1.5 × 2.0 inch photo displaying your full name in the format: <code>First Name, Middle Initial, Last Name, Extension Name (e.g. JUAN A. DELA CRUZ JR.)</code>.</p>
    <p><strong>Signature Over Printed Name:</strong> Your actual signature must be signed over the printed name tag at the bottom of the photo box on Page 4 of the PDS form.</p>
  </div>
</section>

<!-- Tool Callout CTA Box -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">Resize Photo &amp; Signature for CSC Philippines Instantly</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">Crop your 1.5x2 inch passport photo or 2x2 PRC photo and compress signature under 50 KB with 100% privacy and zero quality loss.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/prc-photo-signature-resize-philippines/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open Philippines Resizer Tool &rarr;
    </a>
    <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      General Photo Resizer
    </a>
  </div>
</div>
`
  },
  {
    slug: "teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026",
    title: "Teletalk Bangladesh Photo (300x300) & Signature (300x80) Resizer Master Guide 2026: All Jobs, BCS & NTRCA Rules",
    metaTitle: "Teletalk Bangladesh Photo (300x300) & Signature (300x80) Resizer",
    metaDescription: "Official master guide to resizing 300x300 px photo (under 100 KB) and 300x80 px signature (under 60 KB) for Teletalk All Jobs (alljobs.teletalk.com.bd), BPSC BCS Exam, and NTRCA.",
    excerpt: "Master handbook for Teletalk Bangladesh All Jobs 2026 covering 300x300 px photo resizer (100 KB), 300x80 px signature resizer (60 KB), BPSC BCS exam, NTRCA, and SMS payment guidelines.",
    category: "Guidelines & Tips",
    country: "BD",
    publishDate: "Oct 05, 2026",
    lastUpdated: "Oct 05, 2026",
    author: "SignResize Bangladesh Desk",
    authorRole: "Teletalk All Jobs & BPSC Technical Desk Specialist",
    readTime: "12 min read",
    featured: false,
    tags: [
      "Teletalk Photo 300x300",
      "Teletalk Signature 300x80",
      "BCS Photo Resizer",
      "alljobs teletalk",
      "BPSC Bangladesh",
      "NTRCA Photo Size"
],
    relatedExamPreset: "teletalk-bd",
    quickFacts: [
      {
            "label": "Photo Dimensions",
            "value": "300 × 300 px (3.5 × 3.5 cm at 300 DPI), 10 KB to 100 KB, White BG"
      },
      {
            "label": "Signature Dimensions",
            "value": "300 × 80 px (3.5 × 1.0 cm at 300 DPI), 5 KB to 60 KB, Black Ink"
      },
      {
            "label": "Primary Job Portal",
            "value": "alljobs.teletalk.com.bd (Teletalk Bangladesh All Jobs)"
      },
      {
            "label": "BPSC BCS Portal",
            "value": "bpsc.teletalk.com.bd (Bangladesh Public Service Commission)"
      },
      {
            "label": "Fee Payment Method",
            "value": "Teletalk Prepaid SIM SMS Payment via User ID & PIN (16222)"
      },
      {
            "label": "Color Depth & Format",
            "value": "True Color (24-bit) baseline JPEG / JPG format"
      },
      {
            "label": "Secondary Portals",
            "value": "ntrca.teletalk.com.bd | dpe.teletalk.com.bd | railway.teletalk.com.bd"
      },
      {
            "label": "Admit Card Portal",
            "value": "Teletalk User ID & Password Login Download System"
      }
],
    faqs: [
      {
            "question": "What are the exact photo dimensions for Teletalk online application?",
            "answer": "Teletalk requires a recent passport photo measuring exactly ==300 × 300 pixels (3.5 × 3.5 cm)== with file size strictly ==between 10 KB and 100 KB in JPG format== on a plain white background."
      },
      {
            "question": "What are the signature specifications for Teletalk All Jobs?",
            "answer": "The signature scan must measure exactly ==300 × 80 pixels (3.5 × 1.0 cm)== with file size strictly ==between 5 KB and 60 KB in JPG format== penned in black ink on white unruled paper."
      },
      {
            "question": "What is Teletalk All Jobs portal (alljobs.teletalk.com.bd)?",
            "answer": "The ==Teletalk All Jobs portal (alljobs.teletalk.com.bd)== is the centralized online job application and recruitment portal operated by Teletalk Bangladesh Limited for all Bangladesh government ministries, directorates, and autonomous bodies."
      },
      {
            "question": "How to pay application fee via Teletalk Prepaid Mobile SIM?",
            "answer": "After submitting your online form, send two SMS from any Teletalk Prepaid SIM. ==SMS 1: [PORTAL CODE] [USER ID] to 16222== (e.g., BCS QJKHGF). You receive an 8-digit PIN. ==SMS 2: [PORTAL CODE] YES [PIN] to 16222==. The fee is deducted and an SMS confirmation with password is generated."
      },
      {
            "question": "What is the photo size for BPSC BCS Exam application?",
            "answer": "The Bangladesh Public Service Commission (BPSC) mandates the standard Teletalk format: ==300 × 300 pixels (100 KB max)== for candidate photograph and ==300 × 80 pixels (60 KB max)== for signature."
      },
      {
            "question": "How to recover lost Teletalk User ID or Password?",
            "answer": "Visit the respective Teletalk portal (e.g., alljobs.teletalk.com.bd), click on ==Recover User ID / Password==, enter your registered Mobile Number, Name, and Father's Name to receive your login credentials via instant SMS."
      },
      {
            "question": "How to download Teletalk Admit Card PDF?",
            "answer": "Visit the job portal URL, click on ==Admit Card==, log in using your User ID and Password, and download the color PDF admit card containing your exam roll number and center location."
      },
      {
            "question": "Why is photo or signature rejected on Teletalk portal?",
            "answer": "Teletalk server validator rejects uploads if dimensions deviate from ==exact 300x300 px or 300x80 px==, if file size exceeds 100 KB (photo) or 60 KB (signature), or if saved in WEBP/PNG format."
      },
      {
            "question": "How to resize photo to 300x300 and signature to 300x80 online?",
            "answer": "Use our free client-side tool: drop your image into the ==SignResize Bangladesh Teletalk Tool== to automatically crop to 300x300 px (≤100 KB) and 300x80 px (≤60 KB) in seconds."
      }
],
    contentHtml: `
<!-- Sticky / Collapsible Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>300x300 Photo / 300x80 Sign Upload Error</span>
    </a>
    <a href="#failure-sms" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📱</span>
      <span>Teletalk 16222 SMS Fee Payment</span>
    </a>
    <a href="#failure-bcs" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🏛️</span>
      <span>BPSC BCS &amp; NTRCA Portal Rules</span>
    </a>
    <a href="#failure-admit" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🎟️</span>
      <span>Admit Card &amp; User ID Recovery</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete Teletalk Bangladesh All Jobs 2026 Master Overview:</strong> Teletalk Bangladesh Limited powers all government job recruitment portals across Bangladesh, including <a href="https://alljobs.teletalk.com.bd" target="_blank" rel="noopener noreferrer" class="text-primary underline">alljobs.teletalk.com.bd</a>, <strong>BPSC BCS (bpsc.teletalk.com.bd)</strong>, <strong>NTRCA</strong>, <strong>Primary School Assistant Teacher (DPE)</strong>, and <strong>Bangladesh Railway</strong>. Whether applying for civil service BCS cadres or ministry positions, completing your application requires satisfying strict document limits: <strong>exact 300 × 300 pixel photo under 100 KB</strong>, <strong>exact 300 × 80 pixel signature under 60 KB</strong>, and paying the application fee via <strong>Teletalk 16222 SMS</strong>.
    </p>
  </div>

  <p>
    Every year, millions of job seekers in Bangladesh submit online applications across Teletalk portals. However, thousands face application rejection due to incorrect pixel dimensions (e.g. uploading square 500x500 px or non-standard signature scans), exceeding file size limits, or failing to complete the two-step 16222 SMS confirmation within 72 hours.
  </p>

  <p>
    This diagnostic master guide provides an <strong>actionable troubleshooting framework</strong> covering Teletalk All Jobs submission, 16222 SMS fee commands, admit card recovery, and instant image formatting using our free client-side utility: the <a href="/teletalk-photo-signature-resize/" class="text-primary font-semibold underline">SignResize Bangladesh Teletalk 300x300 &amp; 300x80 Resizer</a>.
  </p>
</section>

<!-- Authoritative Master Specifications & Policy Bounds -->
<section id="master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master Teletalk Bangladesh Technical Benchmark Specifications
  </h2>
  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Authoritative structural parameters governing all Teletalk recruitment web applications across Bangladesh government departments.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official Teletalk Bangladesh Standard</th>
          <th class="px-4 py-3">Statutory Rule / Portal Standard</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Applicant Photograph Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">300 × 300 px (Exact)</td>
          <td class="px-4 py-3 text-muted-foreground">3.5 × 3.5 cm at 300 DPI, 10 KB to 100 KB, white BG</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature Scan Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">300 × 80 px (Exact)</td>
          <td class="px-4 py-3 text-muted-foreground">3.5 × 1.0 cm at 300 DPI, 5 KB to 60 KB, black ink</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">File Encoding &amp; Color Depth</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">24-bit True Color Baseline JPEG</td>
          <td class="px-4 py-3 text-muted-foreground">Strict JPG/JPEG extension; WEBP/PNG prohibited</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Fee Payment Gateway</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">Teletalk Prepaid SIM SMS to 16222</td>
          <td class="px-4 py-3 text-muted-foreground">Two-stage SMS authentication with User ID &amp; PIN</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">SMS Fee Payment Window</td>
          <td class="px-4 py-3 font-mono">72 Hours from Online Submission</td>
          <td class="px-4 py-3 text-muted-foreground">Form cancels automatically if fee un-paid after 72h</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Visual Dimension Blueprints & Side-by-Side Comparison -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
    <!-- Photo Blueprint -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>📐</span> Photo Blueprint (300 × 300 px)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~50 KB</span>
      </div>
      <div class="flex items-center gap-4 text-xs text-muted-foreground">
        <div class="w-24 h-24 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center text-center p-2 shrink-0">
          <span class="font-bold text-primary text-[10px]">80% Face</span>
          <span class="text-[9px] text-muted-foreground">300×300 px</span>
          <span class="text-[8px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">White BG</span>
        </div>
        <div class="space-y-1.5">
          <p><strong class="text-foreground">Aspect Ratio:</strong> 1:1 square ratio (300×300 px).</p>
          <p><strong class="text-foreground">Face Coverage:</strong> Full frontal view, bare face, ears visible, neutral expression.</p>
          <p><strong class="text-foreground">Size Limit:</strong> Strictly between 10 KB and 100 KB in JPG format.</p>
        </div>
      </div>
    </div>

    <!-- Signature Blueprint & Script Scrutiny -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>✍️</span> Signature Blueprint (300 × 80 px)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~25 KB</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-center text-xs">
        <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <span class="text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center gap-1">
            <span>✅</span> Valid Signature
          </span>
          <div class="font-serif italic text-base text-foreground py-1">Rahim Ahmed</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Black ink scan cropped exactly to 300x80 px under 60 KB.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
          <span class="text-rose-700 dark:text-rose-300 font-bold flex items-center justify-center gap-1">
            <span>❌</span> Auto-Rejected
          </span>
          <div class="font-mono font-bold tracking-widest text-sm text-rose-600 dark:text-rose-400 py-1">RAHIM AHMED</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Non-300x80 px crop or block letter signatures face rejection.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 1: Upload & File Errors -->
<section id="failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="space-y-1">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
        Stage 1 Failure State
      </span>
      <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
        📸 Failure State 1: Teletalk 300x300 &amp; 300x80 Dimension Rejection Errors
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a href="/teletalk-photo-signature-resize/" class="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
        Teletalk Tool (300x300 / 300x80)
      </a>
    </div>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Teletalk web servers inspect exact pixel resolution during form upload. If your image is 299x300 px or 300x81 px, the server rejects the file.
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "Photo size must be 300x300 pixel (width x height) and file size within 100 KB" OR "Signature size must be 300x80 pixel and file size within 60 KB".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Step-by-Step Technical Fix
        </strong>
        <p class="text-muted-foreground">
          1. Upload your photo to <a href="/teletalk-photo-signature-resize/" class="text-primary underline">SignResize Teletalk Tool</a>.<br/>
          2. Auto-crop to exact <strong>300x300 px (photo)</strong> or <strong>300x80 px (signature)</strong>.<br/>
          3. Download the baseline sRGB JPEG file and upload seamlessly.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 2: 16222 SMS Fee Payment -->
<section id="failure-sms" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Stage 2 Payment Protocol
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📱 Teletalk 16222 SMS Fee Payment Guide (2-Step Verification)
    </h2>
  </div>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <h3 class="font-bold text-foreground text-base">2-Step Teletalk Prepaid SMS Commands:</h3>
    <div class="my-2 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
      <div class="text-emerald-400 font-bold">// Step 1: Send User ID to 16222</div>
      <div>Format: [PORTAL CODE] &lt;space&gt; [USER ID]</div>
      <div>Example: <span class="text-amber-300">BCS QJKHGF</span> -&gt; Send to 16222</div>
      <div class="text-slate-400">// Response: Returns Applicant Name, Fee Amount &amp; 8-Digit PIN (e.g. 87654321)</div>
      
      <div class="text-emerald-400 font-bold mt-3">// Step 2: Confirm Payment with PIN</div>
      <div>Format: [PORTAL CODE] &lt;space&gt; YES &lt;space&gt; [PIN]</div>
      <div>Example: <span class="text-amber-300">BCS YES 87654321</span> -&gt; Send to 16222</div>
      <div class="text-slate-400">// Response: Returns Congratulations SMS with Password for Admit Card download</div>
    </div>
  </div>
</section>

<!-- Stage 3: BCS & Ministry Exam Specifics -->
<section id="failure-bcs" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Stage 3 Civil Services &amp; Ministry Specs
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🇧🇩 BCS &amp; All-Jobs Teletalk Photo Specification Protocol
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    For Bangladesh Civil Service (BCS) and government ministry circulars through bpsc.teletalk.com.bd and alljobs.teletalk.com.bd, strict dimension matching is mandatory:
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
    <div class="p-4 rounded-xl border border-border bg-card space-y-1.5">
      <div class="font-bold text-foreground">Photograph (300 × 300 px)</div>
      <p class="text-muted-foreground">True square aspect ratio (1:1), 300x300 pixels, weight strictly between 10 KB and 100 KB in JPG format with light background.</p>
    </div>
    <div class="p-4 rounded-xl border border-border bg-card space-y-1.5">
      <div class="font-bold text-foreground">Signature (300 × 80 px)</div>
      <p class="text-muted-foreground">300x80 pixels horizontal banner, weight between 5 KB and 60 KB in JPG format signed in dark ink on clean white paper.</p>
    </div>
  </div>
</section>

<!-- Stage 4: Admit Card & User ID Recovery -->
<section id="failure-admit" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      Stage 4 Admit Card &amp; Recovery
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🎟️ Teletalk Admit Card Download &amp; User ID Recovery
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    When examination dates are scheduled, Teletalk transmits an automated SMS containing your User ID and Password. Visit your specific recruitment URL, enter your credentials, and print your colored Admit Card.
  </p>
</section>

<!-- Tool Callout CTA Box -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">Resize Photo (300x300) &amp; Signature (300x80) for Teletalk Instantly</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">Crop your photo to exact 300x300 px (≤100 KB) and signature to 300x80 px (≤60 KB) with 100% privacy and zero quality loss.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/teletalk-photo-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open Teletalk Bangladesh Resizer Tool &rarr;
    </a>
  </div>
</div>
`
  },
  {
    slug: "lok-sewa-aayog-nepal-photo-signature-resizer-guide-2026",
    title: "Lok Sewa Aayog Nepal Photo & Signature Resizer Master Guide 2026: PSC 50 KB Limit, Kharidar, NaSu & Officer Rules",
    metaTitle: "Lok Sewa Aayog Nepal Photo & Signature Resizer (50 KB)",
    metaDescription: "Step-by-step master guide on formatting passport photo (3.5x4.5 cm / 350x450 px, ≤ 50 KB) and signature (350x150 px, ≤ 50 KB) for Nepal Lok Sewa Aayog (psc.gov.np) and TSC.",
    excerpt: "Master handbook for Nepal Lok Sewa Aayog (PSC) 2026 covering 50 KB photo & signature resizer, Kharidar, Nayab Subba, Section Officer, TSC teacher exam, and eSewa fee payment.",
    category: "Guidelines & Tips",
    country: "NP",
    publishDate: "Oct 05, 2026",
    lastUpdated: "Oct 05, 2026",
    author: "SignResize Nepal Desk",
    authorRole: "Lok Sewa Aayog & TSC Nepal Verification Desk Specialist",
    readTime: "12 min read",
    featured: false,
    tags: [
      "Lok Sewa Photo Nepal",
      "Lok Sewa 50KB Limit",
      "TSC Nepal Signature",
      "e-Passport Nepal",
      "Lok Sewa Aayog 2026",
      "NaSu Kharidar Exam"
],
    relatedExamPreset: "loksewa-np",
    quickFacts: [
      {
            "label": "Conducting Authority",
            "value": "Public Service Commission (Lok Sewa Aayog, Anamnagar Kathmandu)"
      },
      {
            "label": "Official Portals",
            "value": "psc.gov.np | psconline.psc.gov.np (Nepal Online Portal)"
      },
      {
            "label": "Passport Photo Limit",
            "value": "3.5 × 4.5 cm (350 × 450 px at 300 DPI), 5 KB to 50 KB, Light/White BG"
      },
      {
            "label": "Signature Scan Limit",
            "value": "350 × 150 px (5 KB to 50 KB, Black Ink on White Sheet, JPG)"
      },
      {
            "label": "Nagarikta Scan Limit",
            "value": "Scanned Citizenship certificate front/back copy strictly ≤ 50 KB"
      },
      {
            "label": "Fee Payment Channels",
            "value": "eSewa, Khalti, ConnectIPS & Bank Voucher (Rastriya Banijya / NBL)"
      },
      {
            "label": "Core Exam Tiers",
            "value": "Kharidar (Non-Gazetted 2nd), Nayab Subba (1st), Section Officer (Gazetted 3rd)"
      },
      {
            "label": "TSC Teacher Exam",
            "value": "tsc.gov.np (Teacher Service Commission 50 KB Photo Standard)"
      }
],
    faqs: [
      {
            "question": "What is Lok Sewa Aayog in Nepal?",
            "answer": "The ==Lok Sewa Aayog (Public Service Commission, Nepal)== is the constitutional body mandated under Article 242 of the Constitution of Nepal to conduct examinations for civil service positions, Nepal Police, Armed Police Force, and public enterprises."
      },
      {
            "question": "What is the photo size requirement for Lok Sewa Aayog Nepal?",
            "answer": "Lok Sewa Aayog requires a recent passport photo measuring ==3.5 × 4.5 cm (350 × 450 pixels)== with file size strictly ==under 50 KB (5 KB to 50 KB in JPG format)== on a plain light or white background."
      },
      {
            "question": "What is the signature file limit for Lok Sewa online portal?",
            "answer": "The signature scan must measure ==350 × 150 pixels== with file size strictly ==under 50 KB (5 KB to 50 KB in JPG format)== penned in black ink on white unruled paper."
      },
      {
            "question": "How to apply online on Lok Sewa portal (psconline.psc.gov.np)?",
            "answer": "Visit ==psconline.psc.gov.np==, register your Master Profile, fill personal & educational details, upload passport photo (≤50 KB), signature (≤50 KB), and Nagarikta copy (≤50 KB), select the advertised vacancy, and pay the fee online via eSewa, Khalti, or ConnectIPS."
      },
      {
            "question": "How to pay Lok Sewa application fee via eSewa or Khalti?",
            "answer": "During application submission on psconline.psc.gov.np, choose ==Online Payment -> eSewa / Khalti / ConnectIPS==, log in to your wallet app, approve the transaction voucher, and the portal status updates instantly to Paid."
      },
      {
            "question": "What are the qualifications for Kharidar, Nayab Subba (NaSu), and Officer?",
            "answer": "==Kharidar (Non-Gazetted 2nd Class)== requires SLC / SEE pass. ==Nayab Subba / NaSu (Non-Gazetted 1st Class)== requires 10+2 / Intermediate pass. ==Section Officer (Gazetted 3rd Class)== requires a Bachelor's Degree in any discipline."
      },
      {
            "question": "How to download Lok Sewa Admit Card (Pravesh Patra)?",
            "answer": "Log in to your dashboard at ==psconline.psc.gov.np==, navigate to ==My Applications -> Approved Applications==, click on ==Download Admit Card (Pravesh Patra)==, and print a physical color copy for the examination hall."
      },
      {
            "question": "Why is photo or signature rejected on Lok Sewa portal?",
            "answer": "Lok Sewa server validator rejects file uploads exceeding 50.0 KB, blurry mobile photos, shadowed backgrounds, or files saved in PDF or PNG formats instead of JPG."
      },
      {
            "question": "How to resize photo and signature for Lok Sewa Aayog under 50 KB?",
            "answer": "Use our dedicated client-side utility: upload your file to the ==SignResize Nepal Lok Sewa Tool (350x450 px, ≤50 KB)== and ==Signature Resizer (350x150 px, ≤50 KB)== to clamp byte sizes in seconds."
      }
],
    contentHtml: `
<!-- Sticky / Collapsible Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>3.5x4.5cm Photo / Signature (≤50 KB) Upload Error</span>
    </a>
    <a href="#failure-esewa" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>💳</span>
      <span>eSewa / Khalti Online Fee Payment</span>
    </a>
    <a href="#failure-pravesh" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🎟️</span>
      <span>Pravesh Patra (Admit Card) Download</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete Lok Sewa Aayog Nepal 2026 Master Overview:</strong> The Public Service Commission (Lok Sewa Aayog Nepal), headquartered at Anamnagar, Kathmandu and accessible online via <a href="https://psc.gov.np" target="_blank" rel="noopener noreferrer" class="text-primary underline">psc.gov.np</a> and <a href="https://psconline.psc.gov.np" target="_blank" rel="noopener noreferrer" class="text-primary underline">psconline.psc.gov.np</a>, conducts all examinations for civil appointments across Nepal. Whether applying for <strong>Kharidar (Non-Gazetted 2nd Class)</strong>, <strong>Nayab Subba / NaSu (Non-Gazetted 1st Class)</strong>, <strong>Section Officer (Gazetted 3rd Class)</strong>, or <strong>TSC Teacher exams</strong>, submitting your Master Profile requires meeting strict document limits: <strong>3.5 × 4.5 cm passport photo strictly under 50 KB</strong>, <strong>scanned signature strictly under 50 KB</strong>, and <strong>Nagarikta (Citizenship certificate) copy under 50 KB</strong>.
    </p>
  </div>

  <p>
    Every year, hundreds of thousands of candidates across Nepal register through the online portal psconline.psc.gov.np. However, thousands encounter upload rejection or application hold status because their mobile camera photos exceed 50.0 KB or use non-standard file formats.
  </p>

  <p>
    This diagnostic master guide provides an <strong>actionable troubleshooting framework</strong> covering Lok Sewa Master Profile setup, eSewa/Khalti online payment, Pravesh Patra downloads, and instant image formatting using our free client-side utility: the <a href="/lok-sewa-photo-resize-nepal/" class="text-primary font-semibold underline">SignResize Nepal Lok Sewa &amp; TSC 50 KB Resizer</a>.
  </p>
</section>

<!-- Authoritative Master Specifications & Policy Bounds -->
<section id="master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master Lok Sewa Aayog Technical Benchmark Specifications
  </h2>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official Nepal Government Standard</th>
          <th class="px-4 py-3">Statutory Rule / Portal Boundary</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Passport Photo Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">3.5 × 4.5 cm (350 × 450 px at 300 DPI)</td>
          <td class="px-4 py-3 text-muted-foreground">5 KB to 50 KB, JPG format, plain light background</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature Scan Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">350 × 150 px (Exact)</td>
          <td class="px-4 py-3 text-muted-foreground">5 KB to 50 KB, black ink on spotless white sheet</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Citizenship Certificate (Nagarikta)</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">Scanned Copy (Strictly ≤ 50 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">Front &amp; back scanned JPEG image</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Online Fee Payment Gateways</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">eSewa, Khalti, ConnectIPS &amp; Bank Voucher</td>
          <td class="px-4 py-3 text-muted-foreground">Direct wallet integration on psconline.psc.gov.np</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Failure 1: Upload Error -->
<section id="failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
      Trigger 1 Image Size Rejection
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📸 Lok Sewa Photo &amp; Signature Upload Error (≤50 KB Limit)
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    The Public Service Commission online portal (psconline.psc.gov.np) automatically rejects any photo, signature, or Nagarikta scan exceeding <strong>50.0 KB (51,200 bytes)</strong>. Mobile camera photos taken at 4 MB trigger immediate upload failure alerts.
  </p>

  <div class="p-3 rounded-xl bg-card border border-border text-xs space-y-1">
    <div class="font-bold text-primary">Technical Fix via SignResize:</div>
    <p class="text-muted-foreground">
      Use the <a href="/lok-sewa-photo-resize-nepal/" class="text-primary underline font-semibold">SignResize Nepal Lok Sewa Tool</a>. It crops your photo to 3.5×4.5 cm (350×450 px) and automatically clamps file weight between <strong>25 KB and 45 KB</strong> in crisp JPG format.
    </p>
  </div>
</section>

<!-- Failure 2: eSewa & Online Payment -->
<section id="failure-esewa" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Trigger 2 Online Payment Sync
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      💳 eSewa, Khalti &amp; ConnectIPS Fee Payment Troubleshooting
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Candidates can pay examination fees directly through eSewa, Khalti, ConnectIPS, or bank deposit vouchers. If the portal shows 'Unpaid' after transaction completion, wait 15 minutes for bank clearing before resubmitting.
  </p>
</section>

<!-- Failure 3: Pravesh Patra -->
<section id="failure-pravesh" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Trigger 3 Admit Card
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🎟️ Pravesh Patra (Admit Card) Download &amp; Exam Day Guide
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Pravesh Patra is generated under your Master Profile on psconline.psc.gov.np approximately one week prior to the written exam. Print a clear colored copy and carry your original Nagarikta certificate to the examination hall.
  </p>
</section>

<!-- Tool Callout CTA Box -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">Resize Photo &amp; Signature for Lok Sewa Nepal Instantly</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">Crop your 3.5x4.5 cm passport photo and signature under 50 KB with 100% privacy and zero quality loss.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/lok-sewa-photo-resize-nepal/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open Nepal Lok Sewa Resizer Tool &rarr;
    </a>
  </div>
</div>
`
  },
  {
    slug: "ctet-photo-signature-upload-error-solution-discrepancy",
    title: "CTET 2026 Master Guide: Syllabus, Eligibility, Document Upload & Preparation",
    metaTitle: "CTET 2026 Master Guide: Syllabus, Eligibility & Form",
    metaDescription: "Complete CTET 2026 handbook covering syllabus, eligibility, photo and signature resizer, image discrepancy removal, previous papers, and DigiLocker download.",
    excerpt: "Complete CTET 2026 handbook covering syllabus, eligibility, photo and signature resizer, image discrepancy removal, previous papers, and DigiLocker download.",
    category: "Study Prep",
    publishDate: "Oct 05, 2026",
    lastUpdated: "Oct 05, 2026",
    author: "SignResize Teacher Recruitment Desk",
    authorRole: "Central Teacher Eligibility Test Scrutiny Team",
    readTime: "12 min read",
    featured: false,
    tags: [
      "CTET 2026",
      "CTET Syllabus",
      "CTET Eligibility",
      "CTET Photo Resize",
      "CTET Signature 4-30KB",
      "Image Discrepancy",
      "DigiLocker Certificate"
    ],
    relatedExamPreset: "ctet-exam",
    quickFacts: [
      {
        label: "Conducting Body",
        value: "Central Board of Secondary Education (CBSE, New Delhi)"
      },
      {
        label: "Official Portal",
        value: "ctet.nic.in (National Informatics Centre NIC)"
      },
      {
        label: "Exam Frequency",
        value: "Conducted twice annually (July and December cycles)"
      },
      {
        label: "Photo Upload Range",
        value: "3.5 cm × 4.5 cm (10 KB to 100 KB, JPG only)"
      },
      {
        label: "Signature Upload Range",
        value: "3.5 cm × 1.5 cm (4 KB to 30 KB, Running cursive script)"
      },
      {
        label: "Discrepancy Approval Cycle",
        value: "48 to 72 hours for Admin Verification status"
      },
      {
        label: "Paper 1 Supreme Court Rule",
        value: "D.El.Ed / BTC mandatory; B.Ed valid for Paper 2 only"
      },
      {
        label: "Certificate Validity",
        value: "Lifetime validity across all states and central boards"
      }
    ],
    faqs: [
      {
        question: "What is CTET exam?",
        answer: "The ==Central Teacher Eligibility Test (CTET)== is a national-level benchmark qualifying examination administered by the Central Board of Secondary Education (CBSE). It establishes minimum eligibility standards for appointment as teachers in Classes 1 to 8 across Kendriya Vidyalayas (KVS), Navodaya Vidyalayas (NVS), Central Tibetan Schools, UT administrative schools, and CBSE-affiliated private institutions."
      },
      {
        question: "Who is eligible for CTET?",
        answer: "Eligibility depends on the targeted paper. For ==Paper 1 (Primary: Classes 1 to 5)==, candidates must hold Senior Secondary with at least 50% marks plus a 2-year Diploma in Elementary Education (D.El.Ed/BTC). For ==Paper 2 (Elementary: Classes 6 to 8)==, candidates must hold Graduation with at least 50% marks and a Bachelor of Education (B.Ed) or 2-year D.El.Ed."
      },
      {
        question: "What are the passing marks for CTET?",
        answer: "A person who scores ==60% or more (90 marks out of 150)== is declared CTET qualified for the General (UR) category. Candidates belonging to SC, ST, and OBC categories receive a 5% concession, requiring ==55% (82.5 marks rounded to 82)== to qualify."
      },
      {
        question: "Can B.Ed candidate apply for CTET Paper 1?",
        answer: "No. Pursuant to the Supreme Court of India verdict dated August 11, 2023, ==B.Ed degree holders are debarred from teaching Primary classes (Classes 1 to 5)==. B.Ed candidates can apply only for Paper 2 (Classes 6 to 8). Paper 1 is strictly reserved for D.El.Ed, JBT, and BTC holders."
      },
      {
        question: "What is the validity of CTET certificate?",
        answer: "The CTET qualifying certificate possesses ==lifetime validity for all categories==. Candidates who have qualified CTET may appear again in subsequent cycles to improve their aggregate score without any ceiling on attempts."
      },
      {
        question: "How to download CTET certificate from DigiLocker?",
        answer: "CBSE does not issue physical printed certificates. Digital marksheets and eligibility certificates are published on ==DigiLocker (digilocker.gov.in)==. Log in using your registered mobile number linked to Aadhaar, navigate to Central Board of Secondary Education, select Teachers Eligibility Test Certificate, enter your Roll Number and passing year, and download the digitally signed PDF."
      },
      {
        question: "How to remove image discrepancy in CTET?",
        answer: "Log in to ==ctet.nic.in== using your Registration Number and Password during the active correction window. Click on ==Remove Image Discrepancy==, upload a re-cropped 3.5×4.5 cm photo (10–100 KB) or 3.5×1.5 cm signature (4–30 KB) in clean JPG format, and submit. The portal status updates to ==Admin Approved within 48 to 72 hours==."
      },
      {
        question: "What is qualifying marks for CTET OBC?",
        answer: "Candidates belonging to Other Backward Classes (OBC, Non-Creamy Layer) must obtain ==55% marks (82 out of 150)== to pass the CTET examination. The qualifying certificate states qualified with category concessions applicable to recruitment bodies."
      },
      {
        question: "What is negative marking in CTET?",
        answer: "There is ==zero negative marking in the CTET examination==. Each correct answer earns 1 mark, while unattempted or incorrect responses incur 0 penalty. Aspirants should attempt all 150 questions without fear of mark deductions."
      },
      {
        question: "How many times CTET is conducted in a year?",
        answer: "CBSE conducts CTET ==twice a year==, typically in the July and December/January cycles. Both cycles follow identical syllabus, eligibility criteria, and examination formats across offline OMR pen-paper sessions."
      },
      {
        question: "What is the difference between CTET Paper 1 and Paper 2?",
        answer: "==Paper 1 certifies teachers for Primary Classes 1 to 5== and comprises Child Development, Mathematics, Environmental Studies (EVS), Language 1, and Language 2. ==Paper 2 certifies teachers for Elementary Classes 6 to 8== and features specialized subject domains (Mathematics & Science for science educators, Social Studies/Social Science for arts educators)."
      },
      {
        question: "Is CTET mandatory for government teacher?",
        answer: "Yes, under Section 23(1) of the Right to Education (RTE) Act, CTET or an equivalent State TET is ==statutorily mandatory for appointment as PRT (Primary Teacher) and TGT (Trained Graduate Teacher)== in all Central Government schools, including KVS, NVS, Army Public Schools, and Delhi government schools under DSSSB."
      },
      {
        question: "Can final year students apply for CTET?",
        answer: "Yes. In accordance with Supreme Court directives, any candidate ==pursuing a teacher training course (D.El.Ed, B.Ed, B.El.Ed) in any semester or year== is legally eligible to register and appear for CTET. The certificate remains fully valid upon course completion."
      },
      {
        question: "How to resize photo and signature for CTET?",
        answer: "Use our dedicated client-side tools. Upload your photograph to the ==CTET Photo Resizer (10 to 100 KB, 3.5×4.5 cm)== and your signature to the ==CTET Signature Resizer (4 to 30 KB, 3.5×1.5 cm)==. Both tools auto-crop, eliminate background shadows, and enforce compliant JPEG byte limits instantly."
      },
      {
        question: "How to change photo in CTET application form?",
        answer: "Candidates can replace a flawed photograph only during the official ==CBSE Correction Window== or through the ==Remove Image Discrepancy== portal link. Log in at ctet.nic.in, click on Edit Application Details, choose the photograph upload dialog, upload the compliant 3.5×4.5 cm white background file, authenticate with OTP, and save changes."
      },
      {
        question: "What is Language 1 and Language 2 in CTET?",
        answer: "Candidates must select two distinct languages from 20 available options. ==Language 1 tests higher-level linguistic proficiency and includes literary poetry comprehension== with prose. ==Language 2 tests basic communication through two prose reading passages==. Choosing your strongest mother tongue as Language 1 and secondary language as Language 2 maximizes aggregate scores."
      },
      {
        question: "How to clear CTET in first attempt?",
        answer: "Master the Child Development and Pedagogy (CDP) syllabus since pedagogy forms 50% of every subject section. Study ==NCERT textbooks from Class 3 to 8 for EVS, Maths, Science, and Social Science==, and solve the last 5 years of CTET previous year question papers to internalize recurring question patterns."
      },
      {
        question: "What is the salary of CTET qualified teacher?",
        answer: "CTET qualification enables entry into Central Government Pay Level 6 (PRT) and Level 7 (TGT). ==Primary Teachers (PRT) draw an approximate gross salary of ₹45,000 to ₹55,000 per month==, while ==Trained Graduate Teachers (TGT) draw ₹58,000 to ₹70,000 per month==, plus Dearness Allowance (DA) and House Rent Allowance (HRA)."
      },
      {
        question: "Is CTET valid for private schools?",
        answer: "Yes. CBSE bylaws mandate that ==all CBSE-affiliated private schools must give preference to or mandate CTET-qualified candidates== for permanent teaching recruitments to maintain national teaching standards."
      },
      {
        question: "Why CTET signature is rejected?",
        answer: "The portal and scrutiny desk reject signatures due to three infractions: ==signing in CAPITAL or BLOCK letters==, signing on notebook lined paper with background shadows, or using faint blue ink. Signatures must be in running natural cursive flow penned in black ballpoint ink on clean white unruled paper."
      }
    ],
    contentHtml: `
<!-- Sticky / Collapsible Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>Photo / Signature Upload Error</span>
    </a>
    <a href="#failure-payment" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>💳</span>
      <span>Double Debit &amp; Fee Pending</span>
    </a>
    <a href="#failure-correction" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>✏️</span>
      <span>Locked Fields &amp; Correction</span>
    </a>
    <a href="#failure-discrepancy" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🚩</span>
      <span>Remove Image Discrepancy (48-72h)</span>
    </a>
    <a href="#failure-digilocker" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📱</span>
      <span>DigiLocker Certificate Mismatch</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete CTET 2026 Examination Master Overview:</strong> The Central Teacher Eligibility Test (CTET), administered nationwide by the Central Board of Secondary Education (CBSE) via <a href="https://ctet.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline">ctet.nic.in</a>, is the mandatory national benchmark qualification for teaching appointments across India. Whether you are appearing for <strong>Paper 1 (Classes 1 to 5)</strong> or <strong>Paper 2 (Classes 6 to 8)</strong>, achieving qualifying eligibility requires mastering NCERT pedagogy, understanding the Supreme Court B.Ed exclusion rulings, and preventing administrative form cancellation through exact compliance with official <strong>10–100 KB photo</strong> and <strong>4–30 KB running cursive signature</strong> upload bounds.
    </p>
  </div>

  <p>
    Annually, over 2.5 million candidates register for the CTET online examination. However, thousands of aspirants encounter withheld admit cards, examination center delays, or outright disqualification due to administrative pitfalls. Common triggers include selecting the wrong educational eligibility code, encountering unconfirmed gateway payments, and triggering automated scanning filters with an <em>"Image Discrepancy"</em> alert.
  </p>

  <p>
    This diagnostic handbook replaces repetitive directories with an <strong>actionable troubleshooting framework</strong>: resolving upload errors, clearing gateway debit drops, executing post-declaration DigiLocker fetches, and formatting files instantly using our free client-side utilities: the <a href="/ctet-signature-resize/" class="text-primary font-semibold underline">CTET Signature Resize Tool (4 to 30 KB)</a> and the <a href="/ctet-photo-resize/" class="text-primary font-semibold underline">CTET Photo Resize Tool (10 to 100 KB)</a>.
  </p>
</section>

<!-- Authoritative Master Specifications & Policy Bounds -->
<section id="master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master CTET Regulatory &amp; Technical Benchmark Specifications
  </h2>
  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Authoritative structural parameters governing the CTET examination cycle. Reference this consolidated table for qualifying marks, test timing, and exact document limits without redundant repetition across multiple sections.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official Board Standard</th>
          <th class="px-4 py-3">Statutory Rule / Authority</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">General (UR) Qualifying Marks</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">60% (90 Marks out of 150)</td>
          <td class="px-4 py-3 text-muted-foreground">CBSE Notification Para 9(1)</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Reserved (SC / ST / OBC / PwD) Marks</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">55% (82 Marks out of 150)</td>
          <td class="px-4 py-3 text-muted-foreground">5% relaxation per NCTE Gazette mandate</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Paper 1 Supreme Court Eligibility</td>
          <td class="px-4 py-3 font-bold text-rose-600 dark:text-rose-400">D.El.Ed / BTC / JBT / B.El.Ed Only</td>
          <td class="px-4 py-3 text-muted-foreground">Supreme Court verdict (Devesh Sharma vs UOI, Aug 11, 2023) excluding B.Ed</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Paper 2 Elementary Eligibility</td>
          <td class="px-4 py-3 font-mono">Graduation + B.Ed or 2-Yr D.El.Ed</td>
          <td class="px-4 py-3 text-muted-foreground">Valid for appointment to Classes 6 through 8</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Passport Photo File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">3.5 × 4.5 cm (10 KB to 100 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">280×360 px at 200 DPI, JPG/JPEG format, white background</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">3.5 × 1.5 cm (4 KB to 30 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">140×60 px at 200 DPI, Black ink ballpoint on white paper, running cursive</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Exam Duration &amp; Marking</td>
          <td class="px-4 py-3 font-mono">150 Minutes • 150 MCQs • No Negative Marks</td>
          <td class="px-4 py-3 text-muted-foreground">OMR Pen-and-paper mode across 136 nationwide cities</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Certificate Validity Period</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Lifetime Validity</td>
          <td class="px-4 py-3 text-muted-foreground">NCTE 50th General Body Meeting order dated June 9, 2021</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Visual Dimension Blueprints & Side-by-Side Comparison -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
    <!-- Photo Blueprint -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>📐</span> Passport Photo Blueprint (3.5 × 4.5 cm)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~40 KB</span>
      </div>
      <div class="flex items-center gap-4 text-xs text-muted-foreground">
        <div class="w-24 h-32 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center text-center p-2 shrink-0">
          <span class="font-bold text-primary text-[10px]">80% Face</span>
          <span class="text-[9px] text-muted-foreground">280×360 px</span>
          <span class="text-[8px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">White BG</span>
        </div>
        <div class="space-y-1.5">
          <p><strong class="text-foreground">Aspect Ratio:</strong> 7:9 vertical portrait.</p>
          <p><strong class="text-foreground">Face Coverage:</strong> Full frontal view, neutral expression, ears visible, no headgear except religious.</p>
          <p><strong class="text-foreground">Recency Rule:</strong> Photograph must have been taken within the preceding 6 months.</p>
        </div>
      </div>
    </div>

    <!-- Signature Blueprint & Script Scrutiny -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>✍️</span> Signature Blueprint &amp; Script Scrutiny
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Sweetspot ~15 KB</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-center text-xs">
        <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <span class="text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center gap-1">
            <span>✅</span> Valid Signature
          </span>
          <div class="font-serif italic text-base text-foreground py-1">Priya Sharma</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Running cursive handwriting on spotless white unruled paper.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
          <span class="text-rose-700 dark:text-rose-300 font-bold flex items-center justify-center gap-1">
            <span>❌</span> Auto-Rejected
          </span>
          <div class="font-mono font-bold tracking-widest text-sm text-rose-600 dark:text-rose-400 py-1">PRIYA SHARMA</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Disconnected block or capital letters face mandatory cancellation.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ========================================================================= -->
<!-- 🛠️ INTERACTIVE DIAGNOSTIC FAILURE MATRIX (5W1H TROUBLESHOOTING)          -->
<!-- ========================================================================= -->

<!-- FAILURE STATE 1: Upload & File Errors -->
<section id="failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="space-y-1">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
        Stage 1 Failure State
      </span>
      <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
        📸 Failure State 1: Upload, Format &amp; Dimension Rejection Errors
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a href="/ctet-photo-resize/" class="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
        Photo Tool (10-100KB)
      </a>
      <a href="/ctet-signature-resize/" class="px-3 py-1.5 rounded-xl bg-card border border-border text-foreground text-xs font-bold hover:bg-muted transition">
        Sign Tool (4-30KB)
      </a>
    </div>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    During Step 3 of the CTET registration portal, client-side JavaScript checks and server-side MIME decoders inspect binary stream headers. When a file fails byte, aspect, or color-space criteria, the form refuses to proceed.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "File format invalid. Only JPG/JPEG allowed" OR "Photograph size must be between 10 KB to 100 KB and dimensions 3.5cm x 4.5cm".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Modern smartphones save files as <strong>CMYK, progressive JPEGs, or iPhone HEIC/HEIF containers</strong> renamed to .jpg. The NIC portal decoders only parse baseline sequential sRGB JPEGs. Additionally, files under 10.0 KB (or 4.0 KB for sign) trigger automated truncation exceptions.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> Failure Window &amp; Deadlines
        </strong>
        <p class="text-muted-foreground">
          Immediate block during registration before fee gateway release. If bypassed with corrupted headers, CBSE scrutiny issues an SMS discrepancy notice within 7 days of form closure.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Exact Portal Endpoint
        </strong>
        <p class="text-muted-foreground">
          Direct candidate registration URL: <code>ctet.nic.in -> Candidate Activity -> Apply for CTET -> Upload Scanned Images</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Candidates
        </strong>
        <p class="text-muted-foreground">
          Any applicant capturing raw mobile phone snapshots, using WhatsApp-compressed images with stripped EXIF headers, or uploading scans of notebook lined paper.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Step-by-Step Technical Fix
        </strong>
        <p class="text-muted-foreground">
          1. Use our client-side <a href="/make-signature-background-white/" class="text-primary underline">Make Signature Background White</a> to strip shadow/yellow paper tint.<br/>
          2. Drop your image into the <a href="/ctet-photo-resize/" class="text-primary underline">CTET Photo Resizer</a> or <a href="/ctet-signature-resize/" class="text-primary underline">Signature Resizer</a>.<br/>
          3. The tool forces baseline sRGB re-encoding, clamps to ~40 KB (photo) and ~15 KB (sign), and outputs strict compliant JPG.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 2: Submission & Payment Gateway Debits -->
<section id="failure-payment" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Stage 2 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      💳 Failure State 2: Gateway Drop, Double Debit &amp; Fee Pending Protocol
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    The most anxiety-inducing stage of CTET registration occurs when money is deducted from your bank account or UPI app, but the CTET portal status remains <em>"Payment Incomplete"</em> and no Confirmation Page is generated.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "Payment Pending" / "Transaction Failed but fee deducted" / "Confirmation Page not generated".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Server webhook drop between the intermediary payment aggregator (Canara Bank, HDFC, or Syndicate Bank PG) and the NIC database server. If the return redirect token is dropped due to browser auto-refresh or mobile network switch, the transaction remains in a un-reconciled settlement pool.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> The 24–48 Hour Settlement Cycle
        </strong>
        <p class="text-muted-foreground">
          Do <strong>NOT</strong> make an immediate second payment. The banking clearing house runs scheduled batch reconciliation every 24 to 48 hours. If the last date of registration is more than 48 hours away, wait for auto-settlement.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Verification Link
        </strong>
        <p class="text-muted-foreground">
          Log in at <code>ctet.nic.in</code> -> click on <strong>"Verify Payment Status"</strong> or check the <strong>"E-Challan / Payment Receipt"</strong> tab inside the registered candidate portal.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Action Mandate
        </strong>
        <p class="text-muted-foreground">
          Candidates who made payment via UPI, net banking, or debit card where the amount was deducted from the bank balance without instant generation of the four-page CTET Confirmation PDF.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Resolution Protocol
        </strong>
        <p class="text-muted-foreground">
          1. Record the bank UTR / Transaction Reference Number from your SMS.<br/>
          2. Wait 24 to 48 hours and click "Verify Payment Status" on ctet.nic.in.<br/>
          3. If the payment fails to update on the final day, pay once more to secure your registration. The duplicate transaction will be refunded automatically to your source account within 7 to 10 working days.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 3: Correction Window & Locked Fields -->
<section id="failure-correction" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Stage 3 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      ✏️ Failure State 3: Non-Editable Fields vs Correction Window Parameters
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    A common trap for candidates is assuming that the official <strong>ctet correction window</strong> allows changing every submitted parameter. In reality, CBSE locks key identity identifiers to prevent impersonation and fraud.
  </p>

  <!-- Editable vs Non-Editable Parameters Table -->
  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Parameter Category</th>
          <th class="px-4 py-3">Correction Status</th>
          <th class="px-4 py-3">Fallback Action / Administrative Remedy</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Candidate's Full Name &amp; DOB</td>
          <td class="px-4 py-3 font-bold text-rose-600 dark:text-rose-400">Strictly Non-Editable</td>
          <td class="px-4 py-3 text-muted-foreground">Locked to Aadhaar/10th certificate. Minor spelling differences require a sworn notary affidavit during final document verification (DV).</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Father’s / Mother’s Name</td>
          <td class="px-4 py-3 font-bold text-rose-600 dark:text-rose-400">Locked / Verification Required</td>
          <td class="px-4 py-3 text-muted-foreground">Cannot be altered online. Submit an official representation letter to the Director (CTET), CBSE Patparganj, Delhi.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Examination Center City Choice</td>
          <td class="px-4 py-3 font-bold text-amber-600 dark:text-amber-400">Conditional Editability</td>
          <td class="px-4 py-3 text-muted-foreground">City change is permitted <em>only if vacant slots exist</em> in the requested center under the "First-Come-First-Served" rule.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Paper Applied (Paper 1 / Paper 2 / Both)</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Fully Editable (With Fee)</td>
          <td class="px-4 py-3 text-muted-foreground">You can change paper or opt for both papers by paying the differential fee (₹200 for General/OBC; ₹100 for SC/ST).</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Language 1 &amp; Language 2 Options</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Fully Editable</td>
          <td class="px-4 py-3 text-muted-foreground">Permitted online without penalty during the correction window. Crucial for switching to high-scoring Language 1 mother tongue.</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Qualifying Degree / College Name</td>
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Fully Editable</td>
          <td class="px-4 py-3 text-muted-foreground">Editable online. Update graduation marks percentage, passing year, or institute pin code freely.</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAILURE STATE 4: Admit Card Discrepancy & 48-72h Window -->
<section id="failure-discrepancy" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      Stage 4 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🚩 Failure State 4: "Remove Image Discrepancy" Red Banner &amp; Admit Card Holds
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Approximately 2 to 3 weeks before the exam date, CBSE runs an optical scrutiny filter on all submitted applications. Candidates whose photographs or signatures fail visual clarity standards receive a red warning banner on the login dashboard.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> The Discrepancy Alert
        </strong>
        <p class="text-muted-foreground">
          A high-priority notification: <em>"Image Discrepancy found in your uploaded photograph/signature. Admit Card will NOT be issued until resolved."</em>
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Scrutiny Flags
        </strong>
        <p class="text-muted-foreground">
          1. Signature penned in capital/block letters.<br/>
          2. Blurry selfie photo instead of white background studio shot.<br/>
          3. Glare/reflection covering eyes on spectacles.<br/>
          4. Signature uploaded upside down or sideways.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> The Strict 48–72 Hour Window
        </strong>
        <p class="text-muted-foreground">
          CBSE allows strictly <strong>48 to 72 hours</strong> from the alert generation date to upload replacement images. Failure to re-upload locks admit card generation permanently.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Resolution Gateway
        </strong>
        <p class="text-muted-foreground">
          Login at <code>ctet.nic.in -> Candidate Login -> Remove Image Discrepancy</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Targeted Applicants
        </strong>
        <p class="text-muted-foreground">
          Only candidates whose registered portal displays the red banner or who received an official SMS from sender <code>CBSE-CTET</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> The Scrutiny Clearance Flow
        </strong>
        <p class="text-muted-foreground">
          1. Re-shoot your passport photo against a plain white wall.<br/>
          2. Re-sign in dark black ballpoint ink in running handwriting on plain white paper.<br/>
          3. Process through our <a href="/ctet-photo-resize/" class="text-primary underline">CTET Photo Tool</a> &amp; <a href="/ctet-signature-resize/" class="text-primary underline">Signature Tool</a>.<br/>
          4. Upload replacement files, authenticate via mobile OTP, and monitor approval status.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 5: DigiLocker Certificate Fetch Errors -->
<section id="failure-digilocker" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      Stage 5 Failure State
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📱 Failure State 5: DigiLocker "Document Not Found" &amp; Name/Aadhaar Mismatch
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Since physical paper certificates have been discontinued, qualifying candidates must retrieve their digitally signed CTET Marksheet and Eligibility Certificate through DigiLocker. Thousands of candidates encounter the frustrating error: <em>"No document found for provided details"</em>.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "No record found in CBSE database" OR "Name in Aadhaar does not match document name".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Cryptographic API Lock
        </strong>
        <p class="text-muted-foreground">
          DigiLocker requires an exact character-for-character match between the candidate's Aadhaar Name and the Name on the CBSE CTET Marksheet. Even an extra space, missing surname, or inverted initial causes API query rejection.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> Release Timeline
        </strong>
        <p class="text-muted-foreground">
          CBSE uploads encrypted certificate bundles to DigiLocker approximately <strong>20 to 30 days after the official result declaration</strong>. Attempting to fetch documents immediately on result day will always return "No record found".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Official Fetch Path
        </strong>
        <p class="text-muted-foreground">
          <code>digilocker.gov.in -> Search Documents -> Central Board of Secondary Education -> Teacher Eligibility Test Certificate / Marksheet</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Candidates
        </strong>
        <p class="text-muted-foreground">
          Candidates who qualified (scored ≥90 UR / ≥82 Reserved) whose DigiLocker account is registered under a family member's phone or whose Aadhaar name spelling differs from their CTET Admit Card.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> The Aadhaar Alignment Fix
        </strong>
        <p class="text-muted-foreground">
          1. Verify that your DigiLocker account is created with YOUR OWN Aadhaar number.<br/>
          2. Ensure the mobile number entered during CTET application is linked to Aadhaar.<br/>
          3. If your Aadhaar name was updated recently, visit an Aadhaar Seva Kendra or update CTET profile via board representation with supporting matriculation certificate proof.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Direct Utility Action Hooks -->
<section class="space-y-4 pt-6 border-t border-border">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="space-y-1">
      <span class="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">Free Client-Side Preparation</span>
      <h3 class="text-base sm:text-lg font-bold text-foreground">Prepare CTET Photo &amp; Signature with Zero Upload Errors</h3>
      <p class="text-xs text-muted-foreground max-w-xl">
        Our browser-based algorithms run 100% locally on your device. Crop strictly to 3.5×4.5 cm (photo) and 3.5×1.5 cm (signature), remove paper background tint, and clamp byte sizes to exact official specifications.
      </p>
    </div>
    <div class="flex items-center gap-2 shrink-0">
      <a href="/ctet-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-95 transition shadow-xs">
        Signature Resizer &rarr;
      </a>
      <a href="/ctet-photo-resize/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground hover:bg-muted font-semibold text-xs transition">
        Photo Resizer &rarr;
      </a>
    </div>
  </div>
</section>
`
  },
  {
    slug: "rrb-ntpc-exam-date-2026-city-intimation-slip-admit-card",
    title: "RRB NTPC 2026: Exam Date, Notification, Apply Online, Admit Card & Result",
    metaTitle: "RRB NTPC 2026: Exam Date, Notification, Admit Card & Result",
    metaDescription: "Check RRB NTPC 2026 exam dates by CEN, notification and application deadlines, city intimation, admit card, syllabus, answer key and result steps.",
    excerpt: "Find the right RRB NTPC recruitment cycle and official notice links for exam dates, graduate and undergraduate applications, city slips, admit cards, answer keys and results.",
    category: "Exam Alerts",
    publishDate: "Sep 25, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "2026-10-06T18:42:15.213Z",
    deployedAt: "7 October 2026 at 12:12 am IST",
    author: "SignResize Railway Examination Desk",
    authorRole: "Senior Examination Analyst",
    readTime: "9 min read",
    featured: false,
    relatedExamPreset: "rrb-railway",
    tags: [
      "RRB NTPC 2026",
      "RRB NTPC Exam Date 2026",
      "RRB NTPC Notification 2026",
      "RRB NTPC Apply Online",
      "RRB NTPC Admit Card 2026",
      "RRB NTPC Result 2026",
      "RRB NTPC Syllabus 2026",
      "Railway Exams"
    ],
    quickFacts: [
      {
        "label": "Identify Your Cycle",
        "value": "Match the CEN number and exam stage on your application"
      },
      {
        "label": "Graduate Cycle",
        "value": "CEN 06/2025; older CEN 05/2024 is separate"
      },
      {
        "label": "Undergraduate Cycle",
        "value": "CEN 07/2025; older CEN 06/2024 is separate"
      },
      {
        "label": "City Slip",
        "value": "Follow the CEN-specific release notice; not an admit card"
      },
      {
        "label": "New 2026–27 Dates",
        "value": "Current detailed notice not independently verified in this update"
      },
      {
        "label": "Apply Online",
        "value": "rrbapply.gov.in via the official recruitment notice"
      }
    ],
    faqs: [
      {
        "question": "RRB NTPC ka exam kab hoga 2026? / When is the RRB NTPC exam in 2026?",
        "answer": "Identify your CEN number and exam stage first. Different graduate and undergraduate recruitment cycles have different schedules. Read the latest schedule or revised schedule on your regional RRB website; your e-call letter gives your individual date, shift and centre. An expected date from a search result is not confirmation."
      },
      {
        "question": "RRB NTPC undergraduate exam kab hoga 2026?",
        "answer": "Open the undergraduate notice page for the CEN shown on your submitted application. CEN 06/2024 and CEN 07/2025 are separate cycles. Check the latest CBT-1 or CBT-2 schedule and any rescheduling notice, then use the city slip and e-call letter for your own allocation."
      },
      {
        "question": "RRB NTPC ka form kab aayega 2026? / When will the application form open?",
        "answer": "An application date must come from an official recruitment notice and its corrigenda. Check the relevant CEN for the opening date, closing time, fee-payment deadline and correction window. This update could not independently verify a fresh 2026-27 detailed NTPC notice, so it does not label a proposed application date as confirmed."
      },
      {
        "question": "RRB NTPC ki vacancy kab aayegi 2026?",
        "answer": "Check official RRB recruitment notices for the relevant graduate or undergraduate CEN. An indicative notice can give tentative vacancies; the detailed notice and later vacancy amendments determine the applicable total and category-wise distribution. Do not carry vacancy totals from a previous cycle into a new one."
      },
      {
        "question": "RRB NTPC ka admit card kab aayega 2026?",
        "answer": "Official NTPC exam notices commonly make e-call letters available four days before the candidate’s exam, but check your specific notice for the operative window. Open the download link from your regional RRB notice page and follow the login format displayed there."
      },
      {
        "question": "RRB NTPC undergraduate ka result kab aayega 2026?",
        "answer": "The result date depends on the CEN, stage and regional RRB. Check for a dated result notice, shortlist and cut-off on your board’s website. There is no reliable fixed number of days after the answer key that guarantees a result, and a CBT shortlist is not a final selection list."
      },
      {
        "question": "How to check RRB NTPC result 2026?",
        "answer": "Visit the RRB where you applied, select the correct CEN and stage, and open the result PDF and cut-off notice. Search for your roll number. If a scorecard link is active, log in using the requested credentials and save your scorecard. Read the next-stage instructions separately."
      },
      {
        "question": "Where is the RRB NTPC 2026 city intimation link?",
        "answer": "Use the link published in the city-intimation notice on your official regional RRB website. Match the CEN and stage before logging in. The city slip helps with travel planning and does not replace the e-call letter needed for examination entry."
      },
      {
        "question": "Where can I find the RRB NTPC 2026 answer key and question paper?",
        "answer": "Check the official question-paper, responses and answer-key notice for your CEN and stage. Use the response-sheet login during its stated availability period. Submit objections only through the official tracker, with supporting evidence and the fee specified in that notice."
      },
      {
        "question": "Is an RRB NTPC 2026 final result the same as a CBT result?",
        "answer": "No. A CBT result usually shortlists candidates for another stage. Follow the CEN-specific requirements for CBT-2, the applicable aptitude or typing test, document verification and medical examination, and read the final panel notice for selection status."
      }
    ],
    contentHtml: `
<p class="text-sm text-muted-foreground"><strong>Last updated:</strong> <time datetime="2026-10-06T18:42:15.213Z">7 October 2026 at 12:12 am IST</time></p>
<p><strong>Looking for RRB NTPC 2026 exam dates, a notification, an application form or a result?</strong> Start with the Centralised Employment Notice (CEN) number on your application. “2026” can describe the year of an exam for an older recruitment, or a proposed new recruitment cycle. It does not identify one common schedule for every NTPC candidate.</p>
<p>This guide covers graduate and undergraduate exam-date checks, apply-online steps, city intimation, admit cards, syllabus, question papers, answer keys and results. Current government pages could not all be retrieved during this update. Check the linked official notice pages before acting on a deadline; no unverified new application date or result date is presented here as confirmed.</p>

<nav aria-label="Article sections" class="my-6 p-4 rounded-xl border border-border">
<ul><li><a href="#exam-date">Exam dates and recruitment cycles</a></li><li><a href="#notification">Notification, vacancy and application dates</a></li><li><a href="#city-slip">City intimation and admit card</a></li><li><a href="#syllabus">Syllabus and question papers</a></li><li><a href="#results">Answer key, result and final selection</a></li></ul>
</nav>

<h2 id="exam-date">RRB NTPC 2026 Exam Date: Graduate and Undergraduate Cycles</h2>
<p>The CEN year is the year of the recruitment notice, not necessarily the exam year. Keep these separate when searching for an RRB NTPC 2026 exam date:</p>
<div class="overflow-x-auto"><table class="w-full text-sm border border-border my-6"><thead><tr><th class="p-3 text-left">Cycle</th><th class="p-3 text-left">Category</th><th class="p-3 text-left">Where to check</th></tr></thead><tbody>
<tr><td class="p-3">CEN 05/2024</td><td class="p-3">Graduate</td><td class="p-3">Older cycle: check its own stage-specific notices, not a new CBT-1 application timetable.</td></tr>
<tr><td class="p-3">CEN 06/2024</td><td class="p-3">Undergraduate</td><td class="p-3">Older cycle: results or later-stage notices must match this CEN.</td></tr>
<tr><td class="p-3">CEN 06/2025</td><td class="p-3">Graduate</td><td class="p-3"><a href="https://www.rrbcdg.gov.in/2025-06-ntpcg.php">Graduate notice page</a> for examinations and subsequent stages in 2026.</td></tr>
<tr><td class="p-3">CEN 07/2025</td><td class="p-3">Undergraduate</td><td class="p-3"><a href="https://www.rrbcdg.gov.in/2025-07-ntpcug.php">Undergraduate notice page</a> for its separate schedule.</td></tr>
<tr><td class="p-3">Fresh 2026–27 recruitment</td><td class="p-3">Confirm in the official notice</td><td class="p-3">Verify the new CEN, detailed notice and amendments. This update could not verify the current detailed notice.</td></tr>
</tbody></table></div>
<p><strong>Historical reference:</strong> the official CEN 06/2025 graduate CBT-1 schedule listed 16–27 March 2026. Those dates are past dates, not a new October exam announcement. See the <a href="https://www.rrbcdg.gov.in/uploads/2025/06-NTPCG/062025NTPCG-CBT1_Schedule-Hi.pdf">graduate CBT-1 schedule notice</a>. For later stages, consult the newest notice for the same CEN.</p>
<h3>RRB NTPC ka exam kab hoga 2026?</h3>
<p lang="hi">अपने आवेदन का CEN नंबर, Graduate/Undergraduate श्रेणी और CBT का चरण पहले देखें। उसी भर्ती की आधिकारिक परीक्षा सूचना और संशोधित कार्यक्रम पढ़ें। आपकी व्यक्तिगत परीक्षा तारीख, शिफ्ट और केंद्र e-call letter में होंगे। केवल “expected exam date” को पक्की तारीख न मानें।</p>
<p>The same check answers “when is RRB NTPC exam 2026” and “RRB NTPC undergraduate ka exam kab hoga 2026”: use the correct recruitment and stage, rather than a general year-based search. A revised notice can supersede an earlier tentative schedule.</p>

<h2 id="notification">RRB NTPC 2026 Notification, Vacancy and 2026–27 Updates</h2>
<p>Searches for “RRB NTPC 2026-27 notification”, “RRB NTPC 2026 to 2027 notification” and “RRB NTPC 2026 notification expected date” refer to demand for a fresh cycle. Keyword demand does not establish that a notice has been issued. An indicative notice and a detailed CEN serve different purposes: confirm full eligibility, post-wise vacancies and the selection scheme in the detailed document and its amendments.</p>
<p>Check the <a href="https://www.rrbcdg.gov.in/">official RRB Chandigarh notice board</a> or your regional RRB. Record the CEN number, notice publication date and whether the document is indicative, detailed or a corrigendum. A vacancy number from an older CEN is not the total for a fresh recruitment.</p>
<h3>RRB NTPC ki vacancy kab aayegi / form kab aayega 2026?</h3>
<p lang="hi">नई vacancy और form की तारीख संबंधित आधिकारिक सूचना से ही तय करें। Indicative notice में पदों की संख्या अस्थायी हो सकती है। Detailed CEN और corrigendum में आवेदन की शुरुआत, अंतिम तारीख और पात्रता जाँचें। इस अपडेट में नई 2026–27 भर्ती की विस्तृत सूचना स्वतंत्र रूप से सत्यापित नहीं हो सकी है।</p>

<h2>RRB NTPC 2026 Application Date, Last Date to Apply and Apply Online</h2>
<p>Before applying, make a checklist from the correct notice: application opening date, submission closing date and time, fee-payment deadline, and correction-window dates. These can differ. A later corrigendum may extend one deadline without changing the others.</p>
<ol><li>Read the detailed CEN, vacancy tables and eligibility rules on the official RRB website.</li><li>Follow its application link to <a href="https://www.rrbapply.gov.in/">rrbapply.gov.in</a>.</li><li>Select the correct recruitment and board, then follow the account and identity-verification instructions.</li><li>Enter qualifications, category and post preferences carefully. Preview your information before payment and submission.</li><li>Complete the required photo capture or uploads and signature upload using the instructions actually displayed for that cycle.</li><li>Save the submitted application and payment acknowledgement, then check application-status notices separately.</li></ol>
<p>A missing application link does not prove a new cycle is open or closed. Recheck the official notice and its operative dates. Do not use an unofficial payment or login link sent by a third party.</p>

<h2 id="city-slip">RRB NTPC 2026 City Intimation and City Intimation Link</h2>
<p>The city slip helps you plan travel; it is not the examination admission document. NTPC notices commonly describe city information becoming available about ten days before a candidate's exam. Follow your CEN-specific notice for the actual release window and any eligible travel-authority instructions.</p>
<ol><li>Open your regional RRB website and the matching CEN notice page.</li><li>Choose the city-intimation link for the right stage: CBT-1, CBT-2 or the applicable skill test.</li><li>Enter the registration details in the format the login screen requests.</li><li>Check your allotted date and city, and save the slip if available.</li><li>Return to the official notice page for the e-call-letter link when its window opens.</li></ol>
<p>Use the official notice-page links above rather than a hard-coded third-party exam-login URL: links and availability windows change between stages.</p>

<h2 id="admit-card">RRB NTPC 2026 Admit Card: Download and Exam-Day Checks</h2>
<p>Official NTPC notices commonly specify e-call-letter downloads from four days before the exam. Confirm that rule in your own stage's notice. “RRB NTPC ka admit card kab aayega 2026?” therefore depends on your individual allocation, rather than one universal release day.</p>
<ol><li>Follow the official e-call-letter link for your CEN and stage.</li><li>Log in using the requested registration number and password or date-of-birth format.</li><li>Check your name, photograph, exam date, reporting time and venue.</li><li>Download and print the document as instructed. Read its ID, photograph and declaration requirements carefully.</li><li>Check official rescheduling notices before travelling, particularly if you received a revised allocation.</li></ol>
<p>Carry the original identification and other documents specified in your e-call letter. Follow the applicable Aadhaar and biometric instructions. Do not fill a declaration or sign a space that the instructions reserve for the examination centre.</p>

<h2 id="syllabus">RRB NTPC 2026 Syllabus and Question Paper Preparation</h2>
<p>Use the syllabus and exam scheme in your detailed CEN. The NTPC CBT preparation areas include Mathematics, General Intelligence and Reasoning, and General Awareness. Practice arithmetic, percentages and data interpretation; series, coding and logical reasoning; and general science, history, geography and current affairs. Check the stage-specific marks, duration, negative marking and any accommodation rules before starting a timed mock.</p>
<p>Our <a href="/blog/rrb-ntpc-syllabus-exam-pattern-cbt-1-cbt-2/">RRB NTPC syllabus and CBT-1/CBT-2 preparation guide</a> expands these topics. Use it alongside the official CEN, which controls the scheme for your application.</p>
<p>For an RRB NTPC 2026 question paper, use the official response-sheet portal when available. Save your question paper, recorded responses and answer key during its viewing window. Label practice material by CEN, date and stage so you do not confuse an older paper with the current cycle. Official mock-test links help you learn the test interface.</p>

<h2 id="results">RRB NTPC 2026 Answer Key, Result and Final Result</h2>
<p>The provisional answer key and objection tracker have their own dated notice. Check its opening and closing times, objection fee, evidence requirements and refund conditions. This guide does not assume that every answer key appears within a fixed number of weeks or that all objection windows last the same number of days.</p>
<h3>How to check RRB NTPC result 2026</h3>
<ol><li>Open the official website of the RRB where you applied.</li><li>Select the correct CEN and stage, then read the dated result notice.</li><li>Download the shortlist PDF and category/post-specific cut-off notice. Search the PDF for your roll number.</li><li>If a scorecard link is active, log in using the details requested and save your individual scorecard.</li><li>Read the next-stage notice separately for CBT-2, aptitude or typing tests, document verification or medical examination, as applicable.</li></ol>
<h3>RRB NTPC undergraduate ka result kab aayega 2026?</h3>
<p lang="hi">Result की तारीख CEN, परीक्षा के चरण और आपके RRB पर निर्भर करती है। आधिकारिक result notice, shortlist और cut-off देखें। Answer key के बाद निश्चित दिनों में result आने की गारंटी नहीं है। CBT में shortlist होना final selection नहीं है।</p>
<p>An RRB NTPC 2026 final result or panel must be distinguished from a CBT shortlist. Read the final notice for its conditions and any remaining formalities; do not infer appointment from a provisional exam result.</p>

<h2>RRB NTPC Photo and Signature Preparation</h2>
<p>Upload requirements can change between CENs. Follow the detailed notice and live application screen for photo capture, image format, dimensions and file size. Do not assume a scanned photo is accepted when the application requires a live capture, or reuse a previous cycle's signature size without checking.</p>
<p>Once you know the required dimensions and KB range, use the <a href="/rrb-signature-resize/">RRB signature resizer</a> or <a href="/photo-resizer/">photo resizer</a> for a required image upload. Use your own authentic handwritten signature, retain readability, and inspect the downloaded file before submitting.</p>

<h2>Official Sources and Verification Notes</h2>
<ul><li><a href="https://www.rrbcdg.gov.in/">RRB Chandigarh official notice board</a>: recruitment notices and amendments.</li><li><a href="https://www.rrbcdg.gov.in/2025-06-ntpcg.php">CEN 06/2025 graduate notices</a>: stage-specific exam and result updates.</li><li><a href="https://www.rrbcdg.gov.in/2025-07-ntpcug.php">CEN 07/2025 undergraduate notices</a>: separate exam and result updates.</li><li><a href="https://www.rrbbbs.gov.in/notifications.php">RRB Bhubaneswar notifications</a>: another official regional source.</li><li><a href="https://www.rrbapply.gov.in/">RRB application portal</a>: follow the application link from the relevant CEN.</li></ul>
<p>The update timestamp records the editorial revision, not an official RRB announcement. Historical indexed official notices establish the recruitment-cycle distinction; failed retrieval of current notice pages means this article does not assert the latest stage is live, or confirm fresh 2026–27 application and vacancy dates.</p>
`
  },
  {
    slug: "rrb-ntpc-syllabus-exam-pattern-cbt-1-cbt-2",
    title: "RRB NTPC Syllabus 2026: CBT-1 & CBT-2 Subject-Wise Marks, Negative Marking & Cut-Off Strategy",
    metaTitle: "RRB NTPC Syllabus 2026: CBT 1 & 2 Exam Pattern & Marks",
    metaDescription: "Detailed RRB NTPC 2026 syllabus: CBT-1 & CBT-2 subject-wise marks, negative marking, graduate vs undergraduate topics, and normalisation formula.",
    excerpt: "Complete subject-wise syllabus and examination pattern blueprint for RRB NTPC 2026: General Awareness weightage, Mathematics shortcuts, Reasoning topics, and CBT-2 preparation strategy.",
    category: "Study Prep",
    publishDate: "Sep 25, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sep 25, 2026",
    deployedAt: "Sep 25, 2026 • 09:00 AM IST",
    author: "SignResize Railway Examination Desk",
    authorRole: "Senior Syllabus & Pedagogy Specialist",
    readTime: "9 min read",
    featured: false,
    relatedExamPreset: "rrb-railway",
    tags: [
      "RRB NTPC Syllabus",
      "RRB NTPC Exam Pattern",
      "RRB NTPC CBT 1 Syllabus",
      "RRB NTPC CBT 2 Syllabus",
      "RRB NTPC Recruitment 2025",
      "RRB NTPC Apply Online",
      "Railway Exams",
      "RRB NTPC Preparation"
    ],
    quickFacts: [
      { label: "Exam Pattern", value: "CBT-1 (100 Qs / 90 Mins) & CBT-2 (120 Qs / 90 Mins)" },
      { label: "Core Subjects", value: "General Awareness (40%), Mathematics (30%), Reasoning (30%)" },
      { label: "Negative Marking", value: "1/3rd Mark Deducted For Each Incorrect MCQ" },
      { label: "Normalisation", value: "Percentile Based Score Normalisation Across Shifts" },
      { label: "CBAT / Typing", value: "Level 6 Station Master (CBAT) & Clerical Posts (Typing Test)" }
    ],
    faqs: [
      {
        question: "What is the subject-wise marks distribution for RRB NTPC CBT-1?",
        answer: "CBT-1 consists of 100 objective questions for 100 marks: General Awareness (40 questions), Mathematics (30 questions), and General Intelligence & Reasoning (30 questions). Total duration is 90 minutes (120 minutes for PwBD candidates)."
      },
      {
        question: "Is there any sectional timing in RRB NTPC examination?",
        answer: "No. Unlike banking exams like IBPS or SBI, RRB NTPC has NO sectional time limits. You can freely switch between Mathematics, Reasoning, and General Awareness at any point during the 90-minute testing window."
      },
      {
        question: "What is the difference between CBT-1 and CBT-2 syllabus in RRB NTPC?",
        answer: "The topics and chapters remain identical between CBT-1 and CBT-2. However, CBT-2 increases the total question count from 100 to 120 questions within the same 90-minute limit (General Awareness 50 Qs, Mathematics 35 Qs, Reasoning 35 Qs), requiring significantly higher speed and deeper conceptual clarity."
      },
      {
        question: "What are the high-scoring chapters in RRB NTPC Mathematics?",
        answer: "High-yield Mathematics chapters include Number System, Simplification, Percentages, Ratio and Proportion, Time and Work, Simple & Compound Interest, Profit & Loss, Mensuration, and Elementary Statistics (Mean, Median, Mode)."
      }
    ],
    contentHtml: `
<section id="syllabus-overview" class="space-y-4">
  <p class="lead text-lg font-medium text-foreground/90 leading-relaxed">
    Looking to master the complete <strong>RRB NTPC syllabus 2026</strong> and crack CBT-1 and CBT-2 in your first attempt? While over one crore applicants appear for Railway Non-Technical Popular Categories examinations, only those who target high-yield topics with disciplined time management successfully cross the 75+ raw score threshold.
  </p>
  <p class="text-muted-foreground leading-relaxed">
    In this guide, we analyze the official syllabus prescribed under CEN 05/2024 and CEN 06/2024, complete chapter-by-chapter weightage, negative marking defense, and score normalization mechanics.
  </p>
</section>

<section id="cbt-comparison" class="space-y-4 mt-8">
  <h2 class="text-2xl font-bold text-foreground">CBT-1 vs CBT-2 Examination Blueprint</h2>
  <div class="overflow-x-auto my-6">
    <table class="w-full text-left text-sm border-collapse rounded-xl overflow-hidden shadow-xs border border-border">
      <thead class="bg-muted text-foreground font-semibold">
        <tr>
          <th class="p-3.5 border-b border-border">Section</th>
          <th class="p-3.5 border-b border-border">CBT-1 (Screening)</th>
          <th class="p-3.5 border-b border-border">CBT-2 (Merit Score)</th>
          <th class="p-3.5 border-b border-border">Difficulty Level</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border text-muted-foreground">
        <tr class="hover:bg-muted/40 transition">
          <td class="p-3.5 font-medium text-foreground">General Awareness</td>
          <td class="p-3.5 font-bold">40 Questions</td>
          <td class="p-3.5 font-bold text-primary">50 Questions</td>
          <td class="p-3.5">NCERT 9th &amp; 10th + Current Events</td>
        </tr>
        <tr class="hover:bg-muted/40 transition">
          <td class="p-3.5 font-medium text-foreground">Mathematics</td>
          <td class="p-3.5 font-bold">30 Questions</td>
          <td class="p-3.5 font-bold text-primary">35 Questions</td>
          <td class="p-3.5">Matriculation Standard</td>
        </tr>
        <tr class="hover:bg-muted/40 transition">
          <td class="p-3.5 font-medium text-foreground">Reasoning Ability</td>
          <td class="p-3.5 font-bold">30 Questions</td>
          <td class="p-3.5 font-bold text-primary">35 Questions</td>
          <td class="p-3.5">Analytical &amp; Verbal Logic</td>
        </tr>
        <tr class="bg-muted/30 font-bold text-foreground">
          <td class="p-3.5">Total &amp; Time Limit</td>
          <td class="p-3.5 text-primary">100 Qs / 90 Mins</td>
          <td class="p-3.5 text-primary">120 Qs / 90 Mins</td>
          <td class="p-3.5">1/3rd Negative Mark per Wrong Answer</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<section id="subject-syllabus" class="space-y-6 mt-8">
  <h2 class="text-2xl font-bold text-foreground">Chapter-Wise Detailed Syllabus Breakdown</h2>

  <div class="space-y-3">
    <h3 class="text-xl font-semibold text-foreground">1. Mathematics (Quantitative Aptitude)</h3>
    <p class="text-muted-foreground text-sm">
      Number System, Decimals, Fractions, LCM &amp; HCF, Ratio and Proportions, Percentage, Mensuration, Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss, Elementary Algebra, Geometry and Trigonometry, Elementary Statistics (Mean, Median, Mode, Standard Deviation).
    </p>
  </div>

  <div class="space-y-3">
    <h3 class="text-xl font-semibold text-foreground">2. General Intelligence and Reasoning</h3>
    <p class="text-muted-foreground text-sm">
      Analogies, Completion of Number and Alphabetical Series, Coding and Decoding, Mathematical Operations, Similarities and Differences, Relationships, Analytical Reasoning, Syllogism, Jumbling, Venn Diagrams, Puzzle, Data Sufficiency, Statement- Conclusion, Statement- Courses of Action, Decision Making, Maps, Interpretation of Graphs.
    </p>
  </div>

  <div class="space-y-3">
    <h3 class="text-xl font-semibold text-foreground">3. General Awareness (High-Yield Science &amp; Trivia)</h3>
    <p class="text-muted-foreground text-sm">
      Current Events of National and International Importance (Games and Sports, Art and Culture of India, Indian Literature, Monuments and Places of India, General Science and Life Science up to 10th CBSE), History of India and Freedom Struggle, Physical, Social and Economic Geography of India and World, Indian Polity and Governance- constitution and political system, General Scientific and Technological Developments including Space and Nuclear Program of India, UN and Other important World Organizations, Environmental Issues Concerning India and World at Large, Basics of Computers and Computer Applications, Common Abbreviations, Transport Systems in India, Indian Economy, Famous Personalities of India and World, Flagship Government Programs, Flora and Fauna of India, Important Government and Public Sector Organizations of India.
    </p>
  </div>
</section>

<section id="tools-cta" class="space-y-4 mt-8">
  <div class="my-6 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 space-y-4">
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h4 class="font-bold text-lg text-foreground">Get Your Exam Documents Ready for RRB NTPC</h4>
        <p class="text-sm text-muted-foreground mt-1">
          Resize your official RRB photo to 35×45 mm and signature to 10–20 KB online for free with instant compliance verification.
        </p>
      </div>
      <div class="flex flex-wrap gap-2 w-full sm:w-auto">
        <a href="/rrb-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
          <span>✍️</span> Resize RRB Signature
        </a>
        <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
          <span>📸</span> Resize RRB Photo
        </a>
      </div>
    </div>
  </div>
</section>
`
  },

  {
    slug: "how-to-change-signature-in-outlook",
    title: "How to Change Signature in Outlook: Complete 2026 Guide (Desktop, Web & Mobile)",
    metaTitle: "How to Change Signature in Outlook (2026) — Desktop, Web & Mobile Guide",
    metaDescription: "Learn how to change your email signature in Outlook in under 2 minutes. Step-by-step guide for Outlook 365, Outlook Web (OWA), Outlook on Mac, iOS & Android. Includes HTML signature tips and common fixes.",
    excerpt: "Complete step-by-step guide to changing your email signature in Microsoft Outlook — covers Outlook 365 desktop, Outlook Web App, Mac, iPhone and Android with practical templates and troubleshooting tips for professional signatures.",
    category: "Guidelines & Tips",
    publishDate: "Sep 23, 2026",
    lastUpdated: "2026-10-06T18:21:24.428Z",
    deployedAt: "6 October 2026 at 11:51 pm IST",
    author: "SignResize Editorial Team",
    authorRole: "Productivity & Digital Signature Expert",
    readTime: "7 min read",
    featured: false,
    tags: [
      "How to Change Signature in Outlook",
      "Outlook Signature",
      "Email Signature",
      "Outlook 365 Signature",
      "Outlook Web Signature",
      "Change Email Signature",
      "Microsoft Outlook",
      "Professional Email Signature",
      "Outlook Signature HTML",
      "Outlook Signature Image"
    ],
    quickFacts: [
      { label: "Applies To", value: "Outlook 365, 2021, 2019, OWA, Mac, iOS, Android" },
      { label: "Time Required", value: "Under 2 minutes" },
      { label: "Signature Path (Windows)", value: "File → Options → Mail → Signatures" },
      { label: "Signature Path (Web)", value: "Settings → Accounts → Signatures" },
      { label: "Image Format", value: "PNG or JPEG; keep images small" },
      { label: "HTML Allowed", value: "Rich text, links and images; test formatting" }
    ],
    faqs: [
      {
        question: "How do I change my email signature in Outlook 365?",
        answer: "Open Outlook 365 → click File → Options → Mail → click the 'Signatures…' button. In the Signatures and Stationery dialog, select the signature you want to edit from the list (or click 'New' to create one), make your changes in the editor, then click OK. Your new signature will apply to new emails and/or replies depending on your dropdown settings."
      },
      {
        question: "How do I change signature in Outlook Web App (OWA)?",
        answer: "In Outlook on the web or new Outlook, open Settings → Accounts → Signatures. Select the correct account, edit an existing signature or add a new one, choose whether to include it on new messages and replies, then select Save. Older interfaces may show Mail → Compose and reply."
      },
      {
        question: "How to add a signature in Outlook?",
        answer: "Open your version's signature settings and choose New or Add signature. Name it, enter your contact details, choose the sending account and defaults, then save. Use the Signature menu in a draft to insert a saved signature manually."
      },
      {
        question: "How to update or edit an email signature in Outlook?",
        answer: "Select your existing signature in File → Options → Mail → Signatures in classic Outlook, or Settings → Accounts → Signatures in new Outlook and on the web. Edit its text, links or image, save, and check a fresh draft. Sent emails retain their original signatures."
      },
      {
        question: "Why is my Outlook signature not showing?",
        answer: "Check the sending account and the separate defaults for new messages and replies. Open a fresh draft or insert it manually from the Signature menu. If you changed devices or apps, check that the signature is configured there too. Ask IT if a company-managed signature overrides your changes."
      },
      {
        question: "Where is the new Outlook signature location?",
        answer: "Open Settings → Accounts → Signatures in new Outlook. Select your mailbox and edit or add a signature. Older Outlook web interfaces may show Mail → Compose and reply instead."
      },
      {
        question: "Can I insert a handwritten signature image into Outlook?",
        answer: "Yes! Use SignResize's free Signature Generator to type your name and download a clean transparent PNG signature. Then in Outlook's Signature editor, click the Insert Picture icon, choose your signature PNG, and place it at the bottom of your email template."
      }
    ],
    contentHtml: `
<p class="text-sm text-muted-foreground"><strong>Last updated:</strong> <time datetime="2026-10-06T18:21:24.428Z">6 October 2026 at 11:51 pm IST</time></p>
<p><strong>To change your Outlook signature:</strong> in classic Outlook, open File → Options → Mail → Signatures. In new Outlook and Outlook on the web, open Settings → Accounts → Signatures. Edit the signature for your sending account and save it. Start a fresh email to check the result.</p>
<h2>Why Update Your Outlook Email Signature?</h2>
<p>Your email signature is your digital business card. Whether you are sending client proposals, responding to job recruiters, or communicating with colleagues, a crisp, professional signature with your updated title, contact details, and brand signature image builds trust and authority.</p>

<p>Microsoft Outlook stores signatures differently across its desktop app, web browser (OWA), Mac version, and mobile apps (iOS &amp; Android). This guide walks you through changing your signature step-by-step on <strong>every device and Outlook platform</strong> using the settings for your version.</p>

<div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm">
  <h4 class="font-bold text-primary mb-1">⚡ Quick Navigation by Platform:</h4>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 font-medium">
    <li>• <a href="#classic-outlook-signature" class="text-primary hover:underline">Method 1: Outlook 365 / Windows Desktop</a></li>
    <li>• <a href="#new-outlook-signature" class="text-primary hover:underline">Method 2: Outlook Web (OWA) &amp; New Outlook</a></li>
    <li>• <a href="#mac-outlook-signature" class="text-primary hover:underline">Method 3: Outlook for Mac</a></li>
    <li>• <a href="#mobile-outlook-signature" class="text-primary hover:underline">Method 4: Outlook Mobile (iOS &amp; Android)</a></li>
  </ul>
</div>

<h2 id="classic-outlook-signature">Method 1: Change Signature in Outlook 365 / Windows Desktop</h2>
<p>If you use Microsoft Outlook 365, Outlook 2021, 2019, or 2016 on a Windows desktop PC:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li>Open the <strong>Outlook desktop app</strong>.</li>
  <li>Click on <strong>File</strong> in the top-left menu bar.</li>
  <li>Select <strong>Options</strong> from the left sidebar panel.</li>
  <li>In the Outlook Options window, select <strong>Mail</strong> from the left menu.</li>
  <li>Click the <strong>Signatures...</strong> button on the right side.</li>
  <li>Under <em>Select signature to edit</em>, click your existing signature name, or click <strong>New</strong> to type a name for a new signature.</li>
  <li>In the <em>Edit signature</em> box below, type or paste your new text, format fonts, insert links, or click the image icon to upload your handwritten signature PNG.</li>
  <li>Under <em>Choose default signature</em> on the top-right:
    <ul class="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
      <li>Set <strong>New messages</strong> to your signature.</li>
      <li>Set <strong>Replies/forwards</strong> to your signature (or leave as <em>(none)</em> if preferred).</li>
    </ul>
  </li>
  <li>Select <strong>Save</strong>, then <strong>OK</strong> to close the settings. Open a new message to verify the updated signature.</li>
</ol>

<h2 id="new-outlook-signature">Method 2: Change Signature in Outlook Web App (OWA) &amp; New Outlook</h2>
<p>If you access email via web browser (outlook.office.com / outlook.live.com) or the New Outlook app:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li>Click the <strong>Settings gear icon ⚙</strong> in the top-right header toolbar.</li>
  <li>Open <strong>Accounts → Signatures</strong>. This is the new Outlook signature location and the current web settings path.</li>
  <li>Select the account you send from. In an older web interface, look under <strong>Mail → Compose and reply</strong> instead.</li>
  <li>Select the edit button beside your signature, or choose <strong>Add signature</strong> / <strong>+ New signature</strong> and give it a name.</li>
  <li>Type your text into the rich text editor. You can change font family, color, align text, add hyperlinks, and insert inline logo image.</li>
  <li>Under <em>Select default signatures</em>, choose when to automatically include your signature:
    <ul class="list-disc list-inside ml-6 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
      <li>For new messages</li>
      <li>For replies and forwards</li>
    </ul>
  </li>
  <li>Click <strong>Save</strong> at the bottom of the window.</li>
</ol>

<h2 id="mac-outlook-signature">Method 3: Change Signature in Outlook for Mac</h2>
<p>If you use Microsoft Outlook on macOS:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li>In the menu bar, click <strong>Outlook</strong> → <strong>Settings</strong> (called Preferences in some older versions).</li>
  <li>Click <strong>Signatures</strong>.</li>
  <li>Select the signature and choose <strong>Edit</strong>, or click <strong>+</strong> to create a new one.</li>
  <li>Edit the content in the right panel. You can drag-and-drop an image directly into the editor.</li>
  <li>In the <em>Default Signatures</em> section, assign the signature to your account.</li>
  <li>Close the Signatures window, then open a fresh message to check the result.</li>
</ol>

<h2 id="mobile-outlook-signature">Method 4: Change Signature in Outlook Mobile App (iOS &amp; Android)</h2>
<p>The Outlook app for iPhone, iPad, and Android supports plain-text signatures:</p>

<ol class="space-y-2 text-sm list-decimal list-inside my-4">
  <li>Open the Outlook app and tap your <strong>profile picture</strong> or initials (top-left).</li>
  <li>Tap the <strong>Settings gear ⚙</strong> icon (bottom-left).</li>
  <li>Under <strong>Mail</strong>, tap <strong>Signature</strong>.</li>
  <li>Use one signature for all accounts, or enable <strong>Per Account Signature</strong> to edit them separately.</li>
  <li>Clear the existing text and type your new signature.</li>
  <li>Tap the <strong>checkmark ✓</strong> (iOS) or back arrow (Android) to save.</li>
</ol>

<h2>How to Add a Professional Image Signature in Outlook</h2>
<p>Adding your handwritten signature as an image in Outlook creates a more personal and professional email. Here's the recommended workflow:</p>

<ol class="space-y-3 text-sm list-decimal list-inside my-4">
  <li><strong>Create your signature image</strong> — use <a href="/signature-generator/" class="text-primary font-semibold hover:underline">SignResize.in's free Signature Generator</a> to type your name and export it as a beautiful cursive PNG with transparent background.</li>
  <li><strong>Resize &amp; compress</strong> — your signature image should ideally be 300–500 px wide and under 100 KB for fast email loading.</li>
  <li><strong>Insert in Outlook</strong> — in the Signatures editor (File → Options → Mail → Signatures), click the image icon, browse to your PNG/JPEG file, and insert it.</li>
  <li><strong>Right-click the inserted image</strong> → <em>Format Picture</em> to resize it within the editor if needed.</li>
  <li>Add your name, title, phone number as text below the image.</li>
</ol>


<h2>How to Add, Create or Set Up an Outlook Signature</h2>
<p>For first-time Outlook signature setup, use the settings path for your platform above and choose <strong>New</strong> or <strong>Add signature</strong>. Give it a recognizable name such as “Work”, enter your contact details, and assign it to the correct email account. Choose it for new messages and, if you want, replies and forwards. Save before closing the editor.</p>
<p>To add a saved signature to one message, use the message toolbar's <strong>Signature</strong> menu and select its name. Editing a saved signature does not rewrite emails you have already sent; check a new draft after each update.</p>

<h2>Outlook Signature Templates, Examples and Signature Blocks</h2>
<p>A useful Outlook signature template starts with readable contact information. Copy this example into your signature editor and replace each placeholder:</p>
<pre>Alex Morgan
Customer Success Manager | Example Company
Phone: +1 202 555 0142
Website: https://example.com</pre>
<p>For a shorter reply signature block, use your name and one contact method. For a job search, use your name, professional role and portfolio link. Keep essential details as text so recipients can read and copy them even when images are blocked.</p>
<p>For a formatted layout, Microsoft offers <a href="https://support.microsoft.com/en-us/outlook/create-an-email-signature-from-a-template">email signature templates</a> you can personalize in Word and copy into Outlook. Paste the rendered layout rather than raw HTML code, then test links and spacing in a fresh email.</p>

<h2>Outlook Signature Generator or Creator: What Do You Need?</h2>
<p>An email signature creator builds a contact block containing your name, role, links and optional logo. A handwritten signature generator creates an image of your name. <a href="/signature-generator/">SignResize's signature generator</a> helps with the handwritten image; add your contact details separately in Outlook's signature editor. It does not install the finished email signature into your mailbox.</p>

<h2>Outlook Signature Not Showing? Check These Settings</h2>
<ul>
  <li><strong>Check your sending account:</strong> a signature assigned to one mailbox may not appear when you send from another.</li>
  <li><strong>Check the defaults:</strong> enable the signature for new messages and separately for replies or forwards. In classic Outlook, a default of “(none)” leaves it out.</li>
  <li><strong>Start a fresh draft:</strong> a message already open when you changed the settings may need a manual insertion from the Signature menu.</li>
  <li><strong>Check each app:</strong> do not assume your desktop signature is available on the web, another computer or your phone. Set it up in the app you are using if it is missing.</li>
  <li><strong>Check missing pictures:</strong> insert the image through the editor rather than linking to a local file. Recipients may block images, so retain your contact details as text.</li>
  <li><strong>Check company policies:</strong> if a managed signature keeps returning, ask your IT administrator whether the organization controls the signature.</li>
</ul>
<p>Settings labels can differ between Outlook versions. See Microsoft's <a href="https://support.microsoft.com/en-us/outlook/mail/how-to-add-and-change-an-email-signature-in-outlook">current Outlook signature instructions</a> for Windows and web.</p>

<h2>Outlook Signature Best Practices for 2026</h2>
<ul class="space-y-2 text-sm list-disc list-inside my-4">
  <li>Keep your signature to <strong>4–6 lines</strong> max — long signatures feel spammy.</li>
  <li>Include: <strong>Name → Job Title → Company → Phone → Website/LinkedIn</strong>.</li>
  <li>Use <strong>one accent colour</strong> that matches your brand — avoid rainbow text.</li>
  <li>Include a <strong>handwritten signature image</strong> for a personal touch on client-facing emails.</li>
  <li>Avoid including large images or social media icons that inflate email file size.</li>
  <li>Test your signature by sending yourself a test email and viewing on mobile.</li>
</ul>

<div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-sm">
  <h4 class="font-bold text-primary mb-2">✨ Create a Professional Signature Image — Free</h4>
  <p>Use <a href="/signature-generator/" class="text-primary font-semibold hover:underline">SignResize.in's Signature Generator</a> to type your name and instantly generate a beautiful handwritten-style signature in seconds. Download as transparent PNG — perfect for inserting into Outlook, Gmail, or any email client.</p>
</div>
`
  },

  {
    slug: "ssc-cgl-2026-master-application-preparation-guide",
    title: "SSC CGL 2026 Master Guide: Tier-1 & Tier-2 Strategy, Signature 10-20KB Resize & Live Photo Rules",
    metaTitle: "SSC CGL 2026 Master Guide: Photo, Signature & Syllabus",
    metaDescription: "Complete SSC CGL 2026 master guide: 140x60 px signature resize (10-20 KB), live webcam photo setup, Tier-1 & Tier-2 syllabus, salary matrix, and portal steps.",
    excerpt: "Comprehensive candidate blueprint for Staff Selection Commission CGL 2026: Tier-1 & Tier-2 sectional weightage, 10-20KB signature resize rules, live webcam photo setup, and 7th CPC salary matrix.",
    category: "Exam Alerts",
    country: "IN",
    publishDate: "Sept 18, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Oct 07, 2026",
    deployedAt: "Oct 07, 2026 • 11:45 PM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "11 min read",
    featured: true,
    tags: [
      "SSC CGL 2026",
      "SSC Signature Resize",
      "10 to 20 KB Signature",
      "Live Photo Rules",
      "Tier 1 Preparation",
      "Tier 2 Pattern",
      "SSC Salary Matrix",
      "Govt Exam Strategy"
    ],
    relatedExamPreset: "ssc-general",
    quickFacts: [
      { label: "Conducting Body", value: "Staff Selection Commission (SSC, New Delhi)" },
      { label: "Target Cadres", value: "ASO (MEA, CSS, IB), Income Tax Inspector, GST Inspector, CBI SI, Auditor, Tax Assistant" },
      { label: "Selection Framework", value: "Tier-1 (Screening) + Tier-2 (Merit Ranking) + DEST Typing Test" },
      { label: "Signature Bounds", value: "140 × 60 px | 10 KB to 20 KB | Black Ink on White Paper (No Capital Letters)" },
      { label: "Photo Format", value: "Live Webcam Stream / MySSC Mobile App (Plain Light Background, No Caps/Glasses)" },
      { label: "Tier-1 Blueprint", value: "100 MCQs | 200 Marks | 60 Minutes | Negative Marking: 0.50 Marks" },
      { label: "Tier-2 Merit Total", value: "390 Marks (Maths 90 + Reasoning 90 + English 135 + GA 75) + Qualifying Modules" },
      { label: "Starting Pay Matrix", value: "₹35,000 to ₹85,000 Gross Monthly (Pay Level 4 to Level 8, 7th CPC)" },
      { label: "Official Web Portal", value: "ssc.gov.in (One-Time Registration OTR)" }
    ],
    faqs: [
      {
        question: "What are the official signature dimensions and file size bounds for SSC CGL?",
        answer: "==SSC requires scanned signatures to measure exactly 140 pixels in width by 60 pixels in height (aspect ratio roughly 4.0 cm × 2.0 cm), with file size strictly between 10.0 KB and 20.0 KB in JPG or JPEG format. Signatures must be written in running cursive handwriting using a black ballpoint pen on unruled white paper. Signatures in ALL CAPITAL or BLOCK letters are rejected automatically.=="
      },
      {
        question: "How do I resize my signature for SSC to 10–20 KB online?",
        answer: "==Sign on clean white paper using a black ballpoint pen, take a clear photo in good light, crop tightly with a 2–3 mm margin, upload it to the free SignResize SSC Signature Tool, select the SSC preset (140×60 px / 10–20 KB), and download your portal-compliant JPG file ready for ssc.gov.in.=="
      },
      {
        question: "Can I use blue ink for my SSC signature upload?",
        answer: "==While black ballpoint ink is officially mandated by the Staff Selection Commission for high-contrast optical scanner verification, dark blue ink signatures can be accepted only if they reproduce with sharp, dark strokes on pure white paper without grey background shadows. Gel ink and fountain pens are prohibited because they bleed into paper fibers.=="
      },
      {
        question: "What are the live photo webcam capture rules on ssc.gov.in?",
        answer: "==SSC does not permit pre-scanned photo uploads for CGL; candidates must capture a live photo using the browser webcam on ssc.gov.in or via the official MySSC mobile application. The photo must feature a plain light-colored background, face occupying 80% of the frame, frontal lighting without shadows, and completely unobstructed eyes without caps, tinted spectacles, or reading glasses.=="
      },
      {
        question: "What is the Tier-1 exam pattern and negative marking penalty in SSC CGL 2026?",
        answer: "==Tier-1 consists of 100 multiple-choice questions for 200 marks across four subjects: General Intelligence and Reasoning (25Q/50M), General Awareness (25Q/50M), Quantitative Aptitude (25Q/50M), and English Comprehension (25Q/50M). Duration is 60 minutes with a negative marking penalty of 0.50 marks per incorrect response. Tier-1 is qualifying in nature.=="
      },
      {
        question: "How is the final SSC CGL merit list calculated in Tier-2?",
        answer: "==Final merit ranking is calculated out of 390 marks in Tier-2 Paper-I: Mathematical Abilities (30Q × 3 = 90 marks), Reasoning (30Q × 3 = 90 marks), English Language (45Q × 3 = 135 marks), and General Awareness (25Q × 3 = 75 marks). Candidates must also qualify the Computer Knowledge Module (60 marks) and the Data Entry Speed Test (DEST typing).=="
      },
      {
        question: "What is the typing speed requirement in the SSC CGL DEST test?",
        answer: "==Candidates must complete 2,000 key depressions over a 15-minute passage on a computer terminal, which equates to an effective typing speed of approximately 27 words per minute (WPM). The DEST test is mandatory for all posts and qualifying in nature with permissible error limits between 5% and 10%.=="
      },
      {
        question: "What is the educational qualification and age eligibility for SSC CGL?",
        answer: "==Candidates must possess a Bachelor's Degree in any discipline from a recognized university on or before the crucial closing date. The age limit ranges between 18–27, 18–30, or up to 32 years depending on post cadre, with statutory relaxations of +3 years for OBC, +5 years for SC/ST, and +10 to +15 years for PwBD.=="
      },
      {
        question: "What is the in-hand salary for Pay Level 7 posts like ASO and Income Tax Inspector?",
        answer: "==Pay Level 7 posts carry a basic pay of ₹44,900. In Class X metro cities (such as Delhi, Mumbai, Bengaluru), with 50% Dearness Allowance (DA), 30% HRA, and Transport Allowance, gross monthly pay is approximately ₹85,000, yielding a net in-hand monthly salary of approximately ₹73,000 to ₹77,000 after NPS deductions.=="
      },
      {
        question: "Can an average candidate clear SSC CGL from scratch in 6 months?",
        answer: "==Yes. A proven 6-month roadmap involves: Months 1–3 dedicated to syllabus completion and core arithmetic/grammar concepts, Months 4–5 solving 5,000+ TCS previous year questions (PYQs) to build sectional speed, and Month 6 attempting 40+ full-length mock tests with comprehensive error log revision.=="
      }
    ],
    contentHtml: `
      <div class="mb-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ Direct Answer: SSC CGL 2026 Master Examination &amp; Upload Blueprint</h4>
        <p class="text-sm text-foreground/90 leading-relaxed">
          The Staff Selection Commission Combined Graduate Level (SSC CGL 2026) examination recruits for premier Group B and Group C central government posts across Indian ministries. Application compliance on <strong>ssc.gov.in</strong> requires a two-step digital upload: a <strong>live webcam photo</strong> captured against a plain light background without spectacles or caps, and a <strong>140 × 60 pixel scanned signature</strong> strictly compressed between <strong>10.0 KB and 20.0 KB</strong> in black running ink. Final merit rankings depend exclusively on <strong>Tier-2 Paper-I (390 Marks)</strong> alongside qualifying Computer Knowledge and Data Entry Speed Test (DEST) benchmarks.
        </p>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Official SSC Scoring &amp; Merit Formula</span>
          <span>Staff Selection Commission Rulebook</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Tier-1 Raw Score = (Correct Attempts × 2.0) - (Incorrect Attempts × 0.50) [Qualifying Only]
Tier-2 Merit Score = (Maths 30Q × 3) + (Reasoning 30Q × 3) + (English 45Q × 3) + (GA 25Q × 3) = 390 Marks
Qualifying Modules: Computer Knowledge (20Q × 3 = 60 Marks) + DEST Typing (2000 Key Depressions / 15 Mins)</code></pre>
      </div>

      <h2 id="overview">⚡ 1. SSC CGL 2026 Examination Snapshot &amp; Cadre Hierarchy</h2>
      <p>
        The Combined Graduate Level Examination is India's most prestigious non-civil services examination, attracting over 30 lakh applicants each recruitment cycle. Recruited officers serve across premier intelligence, tax, vigilance, and administrative directorates:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Cadre Group &amp; Pay Level</th>
              <th class="p-3 border border-border">Premier Job Designations</th>
              <th class="p-3 border border-border">Controlling Ministry / Department</th>
              <th class="p-3 border border-border">Age Bracket (UR)</th>
              <th class="p-3 border border-border">Initial Gross Monthly Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 8 (₹47,600 – ₹1,51,100)</td>
              <td class="p-3 border border-border">Assistant Audit Officer (AAO), Assistant Accounts Officer</td>
              <td class="p-3 border border-border">Comptroller &amp; Auditor General of India (CAG)</td>
              <td class="p-3 border border-border">18 to 30 Years</td>
              <td class="p-3 border border-border font-mono">₹90,000 – ₹95,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 7 (₹44,900 – ₹1,42,400)</td>
              <td class="p-3 border border-border">ASO in MEA, CSS, IB, Railway; Inspector of Income Tax (CBDT); GST Inspector (CBIC)</td>
              <td class="p-3 border border-border">Ministry of External Affairs, Finance, Home Affairs</td>
              <td class="p-3 border border-border">20 to 30 Years</td>
              <td class="p-3 border border-border font-mono">₹82,000 – ₹86,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 6 (₹35,400 – ₹1,12,400)</td>
              <td class="p-3 border border-border">Sub-Inspector in CBI, NIA; Divisional Accountant (CAG); Statistical Investigator</td>
              <td class="p-3 border border-border">Central Bureau of Investigation, MoSPI</td>
              <td class="p-3 border border-border">18 to 30 Years</td>
              <td class="p-3 border border-border font-mono">₹65,000 – ₹70,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 5 (₹29,200 – ₹92,300)</td>
              <td class="p-3 border border-border">Auditor, Accountant, Junior Accountant</td>
              <td class="p-3 border border-border">CAG, CGA, Controller General of Defence Accounts (CGDA)</td>
              <td class="p-3 border border-border">18 to 27 Years</td>
              <td class="p-3 border border-border font-mono">₹54,000 – ₹58,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Pay Level 4 (₹25,500 – ₹81,100)</td>
              <td class="p-3 border border-border">Tax Assistant (CBDT &amp; CBIC), Upper Division Clerk (UDC)</td>
              <td class="p-3 border border-border">Revenue, Narcotics, Military Engineer Services (MES)</td>
              <td class="p-3 border border-border">18 to 27 Years</td>
              <td class="p-3 border border-border font-mono">₹46,000 – ₹50,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Securing a final appointment begins with flawless digital application compliance. Aspirants can instantly format their uploads using our 
        <a href="/ssc-signature-resize/" class="text-primary font-semibold underline hover:text-primary/80">SSC Signature Resizer (10–20 KB)</a> 
        and inspect other national examination requirements on our 
        <a href="/government-jobs/" class="text-primary font-semibold underline hover:text-primary/80">Government Job Directory</a>.
      </p>

      <h2 id="signature-rules">✍️ 2. Official SSC Signature Specifications &amp; Step-by-Step Resizing Protocol</h2>
      <p>
        Over <strong>1.2 lakh online applications are rejected annually</strong> during preliminary automated scrutiny on <code>ssc.gov.in</code> due to non-compliant signatures. To prevent disqualification, candidates must adhere strictly to the commission's official dimensions and file size bounds:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Technical Parameter</th>
              <th class="p-3 border border-border">Official Commission Standard</th>
              <th class="p-3 border border-border">Why Non-Compliance Triggers Rejection</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Pixel Dimensions</td>
              <td class="p-3 border border-border font-mono">140 × 60 Pixels (Aspect Ratio 7:3)</td>
              <td class="p-3 border border-border">Non-standard dimensions distort signature aspect ratios on generated admit cards.</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Physical Equivalent</td>
              <td class="p-3 border border-border">4.0 cm Width × 2.0 cm Height</td>
              <td class="p-3 border border-border">Official print specification for biometric attendance sheets at examination centres.</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Strict File Weight</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">10.0 KB to 20.0 KB</td>
              <td class="p-3 border border-border">Files under 10 KB suffer heavy pixelation; files over 20 KB are blocked by portal upload filters.</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">File Format</td>
              <td class="p-3 border border-border font-mono">JPG / JPEG Only</td>
              <td class="p-3 border border-border">PNG, PDF, or WEBP extensions cause immediate upload script failure.</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Ink Color &amp; Type</td>
              <td class="p-3 border border-border">Dark Black Ballpoint Pen (Recommended)</td>
              <td class="p-3 border border-border">High-speed OCR scanners at exam centres convert signatures to binary bitmaps; faint blue ink can disappear.</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Handwriting Style</td>
              <td class="p-3 border border-border font-bold text-rose-600 dark:text-rose-400">Natural Running Cursive Handwriting</td>
              <td class="p-3 border border-border">Signatures in ALL CAPITAL / BLOCK letters cause automatic disqualification.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📐</span> How to Resize Your Signature for SSC in 5 Easy Steps
        </h3>
        <p class="text-xs text-muted-foreground mb-4">
          Follow this proven 5-step workflow to prepare a compliant signature on any mobile phone or computer:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">1</div>
            <span class="font-bold text-xs text-foreground">Sign on Paper</span>
            <span class="text-[11px] text-muted-foreground">Clean, unruled white paper with dark black/blue ballpoint pen</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">2</div>
            <span class="font-bold text-xs text-foreground">Capture Photo</span>
            <span class="text-[11px] text-muted-foreground">Take a well-lit photo avoiding phone shadows or yellow bulbs</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">3</div>
            <span class="font-bold text-xs text-foreground">Crop Margins</span>
            <span class="text-[11px] text-muted-foreground">Crop closely leaving a tiny 2–3 mm margin around strokes</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">4</div>
            <span class="font-bold text-xs text-foreground">Select Preset</span>
            <span class="text-[11px] text-muted-foreground">Open SignResize and pick the SSC preset (140×60 px / 10–20 KB)</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">5</div>
            <span class="font-bold text-xs text-foreground">Download JPG</span>
            <span class="text-[11px] text-muted-foreground">Automated white filter cleans paper; download ready file</span>
          </div>
        </div>
      </div>

      <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 space-y-3">
          <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
            <span><svg class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg></span>
            <span>VALID / ACCEPTED SSC SIGNATURE</span>
          </div>
          <div class="h-24 rounded-xl bg-white border border-emerald-200 flex items-center justify-center p-3 shadow-inner">
            <svg class="w-48 h-16" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40 C30 10, 40 45, 60 25 C80 5, 90 45, 110 30 C130 15, 140 35, 160 20 C170 12, 185 28, 190 22" stroke="#111827" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15 48 L175 48" stroke="#111827" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>✅ Continuous natural running cursive handwriting</li>
            <li>✅ Black ballpoint pen on pure white unruled paper</li>
            <li>✅ Exact 140 &times; 60 px canvas | Size: 14.8 KB (Matches 10–20 KB bound)</li>
          </ul>
        </div>

        <div class="p-5 rounded-2xl border-2 border-rose-500/30 bg-rose-500/5 space-y-3">
          <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
            <span><svg class="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg></span>
            <span>REJECTED / DISQUALIFIED SIGNATURE</span>
          </div>
          <div class="h-24 rounded-xl bg-slate-200 border border-rose-200 flex items-center justify-center p-3 shadow-inner">
            <span class="font-mono font-bold tracking-widest text-slate-800 text-lg">VIKRAM SHARMA</span>
          </div>
          <ul class="text-xs space-y-1 text-slate-700 dark:text-slate-300">
            <li>❌ ALL CAPITAL / BLOCK LETTERS (Triggers automated portal rejection)</li>
            <li>❌ Grey camera shadow or dirty yellow paper background</li>
            <li>❌ File Size: 8.2 KB (Fails minimum 10.0 KB limit)</li>
          </ul>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Resize Your Signature for SSC Now</h4>
        <p class="text-sm text-muted-foreground mt-1">
          SignResize automates cropping, white background cleaning, and file compression to 140×60 px and 10–20 KB directly in your browser without uploading your signature to any remote server.
        </p>
        <div class="flex flex-wrap gap-3 mt-3">
          <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            Launch SSC Signature Resizer &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition">
            Passport Photo Resizer &rarr;
          </a>
        </div>
      </div>

      <h2 id="live-photo">📸 3. SSC Live Photo &amp; Webcam Capture Protocol (ssc.gov.in &amp; MySSC App)</h2>
      <p>
        With the launch of the new portal <code>ssc.gov.in</code>, the Staff Selection Commission completely abolished pre-scanned photograph uploads. Candidates must capture their live photograph in real-time during the application process:
      </p>

      <div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-3">
        <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
          <span>⚠️</span> Mandatory Live Webcam Rules to Prevent Rejection
        </h4>
        <ul class="list-disc pl-5 text-sm space-y-1.5 text-foreground/90">
          <li><strong>Plain Light Background:</strong> Sit or stand against a plain white or light off-white wall. Avoid patterned wallpapers, curtains, or cluttered bookshelves.</li>
          <li><strong>Zero Spectacles / Sunglasses:</strong> Remove all spectacles, including prescription reading glasses. Flash reflection on lenses obscures iris biometrics and results in automated AI rejection.</li>
          <li><strong>Frontal Eye Level &amp; 80% Coverage:</strong> Position the camera directly at eye level. Your face, neck, and shoulder contours must occupy at least 80% of the green oval alignment frame.</li>
          <li><strong>Uniform Frontal Lighting:</strong> Ensure direct frontal light on your face. Backlighting from windows or harsh overhead lighting casts shadows behind your ears and under your jawline.</li>
          <li><strong>Headwear Restrictions:</strong> Caps, hats, and beanies are strictly prohibited. Religious head coverings are permitted only if the entire facial oval from hairline to chin is fully visible.</li>
        </ul>
      </div>

      <h3>Capturing via the Official 'MySSC' Mobile Application</h3>
      <p>
        If your laptop webcam suffers from low resolution or poor lighting, use the official <strong>MySSC</strong> Android application available on the Google Play Store:
      </p>
      <ol class="list-decimal pl-5 space-y-2 text-sm text-foreground/90 my-3">
        <li>Log into the application using your 13-digit One-Time Registration (OTR) number and password.</li>
        <li>Navigate to the active application form under 'Capture Live Photo'.</li>
        <li>Grant camera permissions and hold the phone steadily at eye level in a brightly lit room.</li>
        <li>Align your face within the digital oval until the frame indicator turns green, then tap capture.</li>
      </ol>

      <h2 id="exam-pattern">📚 4. Tier-1 &amp; Tier-2 Examination Blueprint &amp; Subject Weightage</h2>
      <p>
        The SSC CGL examination is conducted in two computer-based stages: Tier-1 acts as a qualifying filter, while Tier-2 determines 100% of the final merit ranking.
      </p>

      <h3>Tier-1 Computer Based Examination (CBE) – Qualifying Screening</h3>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Subject Section</th>
              <th class="p-3 border border-border">Question Count</th>
              <th class="p-3 border border-border">Maximum Marks</th>
              <th class="p-3 border border-border">Ideal Time Budget</th>
              <th class="p-3 border border-border">High-Yield Focus Areas</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">General Intelligence &amp; Reasoning</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">15 Mins</td>
              <td class="p-3 border border-border">Analogies, Coding-Decoding, Non-Verbal Series, Syllogisms, Blood Relations</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">General Awareness</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">10 Mins</td>
              <td class="p-3 border border-border">Polity Articles/Amendments, Modern History, Static GK, 8 Months Current Affairs</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Quantitative Aptitude</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">25 Mins</td>
              <td class="p-3 border border-border">Geometry, Mensuration 2D/3D, Trigonometry, Algebra, Profit &amp; Loss, Data Interpretation</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">English Comprehension</td>
              <td class="p-3 border border-border font-mono">25</td>
              <td class="p-3 border border-border font-mono">50</td>
              <td class="p-3 border border-border font-mono">10 Mins</td>
              <td class="p-3 border border-border">Cloze Test, Error Spotting, Idioms/Phrases, One-Word Substitution, Active-Passive Voice</td>
            </tr>
            <tr class="border-b border-border/50 font-bold bg-muted">
              <td class="p-3 border border-border">Total Tier-1 Examination</td>
              <td class="p-3 border border-border font-mono">100</td>
              <td class="p-3 border border-border font-mono">200</td>
              <td class="p-3 border border-border font-mono">60 Minutes</td>
              <td class="p-3 border border-border">Negative Penalty: 0.50 Marks (Qualifying Only)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Tier-2 Examination Pattern – 390-Mark Merit Architecture</h3>
      <p>
        Tier-2 Paper-I is conducted on a single day and comprises three sequential sections. Only Section-I and Section-II scores count toward the final 390-mark merit list:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Tier-2 Section</th>
              <th class="p-3 border border-border">Module Subjects</th>
              <th class="p-3 border border-border">Questions &amp; Marks</th>
              <th class="p-3 border border-border">Weightage</th>
              <th class="p-3 border border-border">Merit Evaluation Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Section I (1 Hour)</td>
              <td class="p-3 border border-border">Mathematical Abilities (30Q) + Reasoning (30Q)</td>
              <td class="p-3 border border-border font-mono">60 Questions × 3 = 180 Marks</td>
              <td class="p-3 border border-border font-mono">46.1%</td>
              <td class="p-3 border border-border font-semibold text-emerald-600 dark:text-emerald-400">Counts for Final Merit List</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Section II (1 Hour)</td>
              <td class="p-3 border border-border">English Language (45Q) + General Awareness (25Q)</td>
              <td class="p-3 border border-border font-mono">70 Questions × 3 = 210 Marks</td>
              <td class="p-3 border border-border font-mono">53.9%</td>
              <td class="p-3 border border-border font-semibold text-emerald-600 dark:text-emerald-400">Counts for Final Merit List</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold">Section III Module 1 (15 Mins)</td>
              <td class="p-3 border border-border">Computer Knowledge Test (20Q)</td>
              <td class="p-3 border border-border font-mono">20 Questions × 3 = 60 Marks</td>
              <td class="p-3 border border-border font-mono">Qualifying</td>
              <td class="p-3 border border-border text-amber-600 font-semibold">Must qualify; higher cut-off for ASO/Tax Assistant</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold">Section III Module 2 (15 Mins)</td>
              <td class="p-3 border border-border">Data Entry Speed Test (DEST)</td>
              <td class="p-3 border border-border font-mono">2,000 Key Depressions (~27 WPM)</td>
              <td class="p-3 border border-border font-mono">Qualifying</td>
              <td class="p-3 border border-border text-amber-600 font-semibold">Mandatory for all posts; disqualification if failed</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="salary">💰 5. 7th Pay Commission Salary Breakdown Across City Tiers</h2>
      <p>
        Salaries for SSC CGL recruits are governed by the 7th Central Pay Commission. Total in-hand remuneration depends significantly on whether your posting is in a Class X (Metropolitan), Class Y (Urban), or Class Z (Rural/Small Town) location:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-border text-xs sm:text-sm">
          <thead>
            <tr class="bg-muted text-foreground font-semibold">
              <th class="p-3 border border-border">Pay Matrix Level</th>
              <th class="p-3 border border-border">Basic Pay Scale</th>
              <th class="p-3 border border-border">Dearness Allowance (DA 50%)</th>
              <th class="p-3 border border-border">HRA (Class X - 30%)</th>
              <th class="p-3 border border-border">Approx. Gross Monthly Pay</th>
              <th class="p-3 border border-border">Net In-Hand Earnings</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Level 8 (AAO)</td>
              <td class="p-3 border border-border font-mono">₹47,600</td>
              <td class="p-3 border border-border font-mono">₹23,800</td>
              <td class="p-3 border border-border font-mono">₹14,280</td>
              <td class="p-3 border border-border font-mono">₹92,800</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹79,000 – ₹83,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Level 7 (ASO, ITI, GST)</td>
              <td class="p-3 border border-border font-mono">₹44,900</td>
              <td class="p-3 border border-border font-mono">₹22,450</td>
              <td class="p-3 border border-border font-mono">₹13,470</td>
              <td class="p-3 border border-border font-mono">₹85,600</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹73,000 – ₹77,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Level 6 (CBI SI, DA)</td>
              <td class="p-3 border border-border font-mono">₹35,400</td>
              <td class="p-3 border border-border font-mono">₹17,700</td>
              <td class="p-3 border border-border font-mono">₹10,620</td>
              <td class="p-3 border border-border font-mono">₹68,200</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹58,000 – ₹62,000</td>
            </tr>
            <tr class="border-b border-border/50 bg-muted/20">
              <td class="p-3 border border-border font-semibold text-primary">Level 5 (Auditor)</td>
              <td class="p-3 border border-border font-mono">₹29,200</td>
              <td class="p-3 border border-border font-mono">₹14,600</td>
              <td class="p-3 border border-border font-mono">₹8,760</td>
              <td class="p-3 border border-border font-mono">₹56,400</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹48,000 – ₹51,000</td>
            </tr>
            <tr class="border-b border-border/50">
              <td class="p-3 border border-border font-semibold text-primary">Level 4 (Tax Assistant)</td>
              <td class="p-3 border border-border font-mono">₹25,500</td>
              <td class="p-3 border border-border font-mono">₹12,750</td>
              <td class="p-3 border border-border font-mono">₹7,650</td>
              <td class="p-3 border border-border font-mono">₹49,500</td>
              <td class="p-3 border border-border font-mono text-emerald-600 dark:text-emerald-400 font-bold">₹41,000 – ₹44,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="portal-navigation">🪪 6. Step-by-Step ssc.gov.in Portal Navigation &amp; OTR Workflow</h2>
      <p>
        The Staff Selection Commission operates exclusively on its new digital platform (<code>ssc.gov.in</code>). Candidates must follow these sequential steps to submit their application without technical locks:
      </p>

      <ol class="list-decimal pl-5 space-y-3 text-sm text-foreground/90 my-4">
        <li><strong>One-Time Registration (OTR):</strong> Create or update your profile with your Aadhaar number, matriculation roll number, and personal details. Double-check your name spelling against your 10th marksheet.</li>
        <li><strong>Initiate Application:</strong> Under the 'Live Examinations' dashboard, click 'Apply' beside Combined Graduate Level Examination.</li>
        <li><strong>Capture Live Photo:</strong> Use your browser webcam or the MySSC mobile app. Ensure a light plain wall behind you and no glasses on your face. Verify that your face occupies 80% of the oval overlay.</li>
        <li><strong>Upload Scanned Signature:</strong> Select your 140 × 60 px JPG file resized via SignResize. Verify that file weight is strictly between 10 KB and 20 KB and written in natural cursive handwriting.</li>
        <li><strong>Select Exam Centres &amp; Post Preferences:</strong> Choose 3 regional test cities and input your cadre preferences.</li>
        <li><strong>Final Preview &amp; Fee Payment:</strong> Review every data field on the generated PDF preview. Submit the ₹100 fee via BHIM UPI, Net Banking, or Visa/Mastercard (women, SC, ST, PwBD, and Ex-Servicemen are 100% exempt).</li>
      </ol>
    `
  },
  {
    slug: "rrb-ntpc-2026-master-document-rules-preparation-strategy",
    title: "RRB NTPC 2026: Scanned Document Upload Rules, Sectional Weightage & High-Yield Preparation Strategy",
    metaTitle: "RRB NTPC 2026 Master Guide: Document Rules & Strategy",
    metaDescription: "Complete RRB NTPC 2026 handbook: CBT-1 marking scheme, 35x45mm photo rules, 10-20KB signature bounds & timetable. Resize railway documents online free!",
    excerpt: "Complete candidate guide for Railway RRB NTPC 2026: CBT-1 marking scheme, 10-20KB signature rules, photograph guidelines, step-by-step navigation, and speed calculation methods.",
    category: "Study Prep",
    publishDate: "Sept 17, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["RRB NTPC","Railway Exams","CBT 1 Prep","Signature 10-20KB","Maths Shortcuts","Document Guidelines"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Railway Recruitment Boards (RRBs)"
        },
        {
            "label": "Total Vacancies",
            "value": "11,558+ Posts (Graduate & Undergrad)"
        },
        {
            "label": "Application Last Date",
            "value": "October 15, 2026"
        },
        {
            "label": "Selection Stages",
            "value": "CBT-1 + CBT-2 + CBAT / Typing + DV"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd (0.33 marks) per wrong answer"
        },
        {
            "label": "Document Specs",
            "value": "35×45 mm Photo (20-50 KB) + Sign (10-20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the CBT-1 examination pattern for RRB NTPC?",
            "answer": "CBT-1 consists of 100 objective questions carrying 100 marks in 90 minutes across General Awareness (40 Qs), Mathematics (30 Qs), and Reasoning (30 Qs) with 1/3rd negative marking per incorrect answer."
        },
        {
            "question": "Can an aspirant apply to more than one Railway Recruitment Board (RRB)?",
            "answer": "No. Candidates can select and apply to ONLY ONE regional RRB board. Submitting applications to multiple boards leads to immediate disqualification and debarment."
        },
        {
            "question": "What is the shortlisting ratio from CBT-1 to CBT-2 in RRB NTPC?",
            "answer": "Candidates are shortlisted for CBT-2 at a ratio of 20 times (1:20) the community-wise vacancy count for each 7th CPC Pay Level based on their normalized percentile score in CBT-1."
        },
        {
            "question": "What are the photo and signature upload requirements for RRB NTPC?",
            "answer": "Color photograph (35×45 mm, 20.0 KB to 50.0 KB in JPG) against a plain light background. Signature (140×60 px, 10.0 KB to 20.0 KB in black ink) in running cursive handwriting on white paper."
        },
        {
            "question": "What is the Computer Based Aptitude Test (CBAT) for Station Master?",
            "answer": "CBAT comprises 5 test batteries requiring a minimum T-score of 42 marks in each battery separately. In final merit, CBAT carries 30% weightage and CBT-2 carries 70% weightage."
        },
        {
            "question": "What are the typing speed criteria for RRB clerical posts?",
            "answer": "Candidates must achieve a minimum speed of 30 words per minute in English OR 25 words per minute in Hindi on a computer terminal without backspace or spellcheck tools."
        },
        {
            "question": "What is the medical standard required for Station Master posts?",
            "answer": "Station Master requires strict Medical Standard A-2: distant vision 6/9, 6/9 without spectacles (no glasses allowed, no LASIK permitted) with full color and night vision."
        },
        {
            "question": "Can 12th pass candidates apply for RRB NTPC recruitment?",
            "answer": "Yes, 12th pass candidates are eligible for Undergraduate level posts (Level 2 & 3), including Junior Clerk-cum-Typist, Accounts Clerk, and Commercial-cum-Ticket Clerk."
        },
        {
            "question": "How does RRB score normalization work across multi-shift exams?",
            "answer": "RRB calculates normalized percentile marks based on the mean and standard deviation of raw marks across examination shifts to eliminate difficulty variance."
        },
        {
            "question": "What is the monthly in-hand salary for a Station Master and Goods Guard?",
            "answer": "Station Master starts at Level 6 with gross pay of ~₹68,000–₹72,000. Goods Train Manager starts at Level 5 with gross pay often exceeding ₹65,000–₹75,000 including running allowances."
        },
        {
            "question": "Can I clear RRB NTPC through self-study and free online mock tests?",
            "answer": "Yes. RRB NTPC has predictable question types derived directly from Class 10th maths and basic reasoning. Consistent 4 hours of self-study, solving previous RRB papers, and taking free weekly online mocks is completely sufficient to score 80+ in CBT-1."
        }
    ],
    contentHtml: `
<h2 id="exam-pattern" id="overview">RRB NTPC 2026: Master Examination Overview &amp; Selection Stages</h2>
      <p>The Railway Recruitment Boards (RRB) have activated the recruitment calendar for <strong>Non-Technical Popular Categories (NTPC)</strong>. Covering graduate posts like Goods Guard, Senior Clerk-cum-Typist, and Commercial Apprentice, as well as undergraduate roles like Junior Clerk and Train Clerk, competition across all Indian railway zones is exceptionally high.</p>

      <p>Succeeding in CBT-1 and CBT-2 requires a structured study routine paired with strict document compliance during the online registration process.</p>

      <div class="my-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <h4 class="font-bold text-primary mb-2">⚡ CBT-1 Exam Pattern &amp; Time Distribution</h4>
        <ul class="space-y-1.5 text-sm text-foreground/90">
          <li><strong>General Awareness:</strong> 40 Questions (Current Affairs, General Science, Indian History, Geography, Static GK)</li>
          <li><strong>Mathematics:</strong> 30 Questions (Number Systems, Decimals, Fractions, LCM-HCF, Ratio, Percentages, Mensuration, Time &amp; Work)</li>
          <li><strong>General Intelligence &amp; Reasoning:</strong> 30 Questions (Analogies, Coding, Syllogisms, Venn Diagrams, Mathematical Operations)</li>
          <li><strong>Total Time:</strong> 90 Minutes (100 Questions with 1/3rd negative marking per incorrect response)</li>
        </ul>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ Railway Exam Portal Rules &amp; Negative Marking Snippet</span>
          <span>RRB Specification Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>CBT-1 Score = (Correct Attempts × 1.0) - (Incorrect Attempts × 0.333)
Shortlisting Ratio for CBT-2 = 1:20 (Twenty times the vacancy count per Zone)</code></pre>
      </div>

      <h2 id="document-specs">Document Upload Compliance for Railway Portals</h2>
      <p>Railway recruitment notices explicitly enforce strict parameters for candidate photo and scanned signature uploads:</p>
      <ul>
        <li><strong>Scanned Passport Photo:</strong> Clear color photograph against a light white background taken within 3 months. File size must range between <strong>20 KB and 50 KB</strong> in JPG/JPEG format. Spectacles with tint or flash glare will be rejected.</li>
        <li><strong>Candidate Signature:</strong> Must be signed in running handwriting on clean white unruled paper using a black ballpoint pen. File weight must be between <strong>10 KB and 20 KB</strong> (140 &times; 60 pixels). Capital letter signatures trigger immediate cancellation.</li>
      </ul>

      <div class="my-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
        <h3 class="text-base font-bold text-foreground mb-4 flex items-center gap-2">
          <span>📐</span> RRB Document Formatting Workflow
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</div>
            <span class="font-bold text-xs text-foreground">Sign on White Paper</span>
            <span class="text-[11px] text-muted-foreground">Use dark black ballpoint pen</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</div>
            <span class="font-bold text-xs text-foreground">Crop 140x60 Ratio</span>
            <span class="text-[11px] text-muted-foreground">Remove surrounding excess paper</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</div>
            <span class="font-bold text-xs text-foreground">Background White Filter</span>
            <span class="text-[11px] text-muted-foreground">Clean phone shadows automatically</span>
          </div>
          <div class="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center space-y-2">
            <div class="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</div>
            <span class="font-bold text-xs text-foreground">Target 10-20 KB</span>
            <span class="text-[11px] text-muted-foreground">Compress for zero portal error</span>
          </div>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Need RRB Signature &amp; Photo Formatted?</h4>
        <p class="text-sm text-muted-foreground mt-1">Use our dedicated RRB Railway preset to crop, clean dark shadows, and compress into the exact 10–20 KB bound in seconds.</p>
        <div class="flex flex-wrap gap-3 mt-3">
          <a href="/rrb-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            Open RRB Resizer &rarr;
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition">
            Resize Passport Photo &rarr;
          </a>
        </div>
      </div>

      
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Step-by-Step Railway Registration Workflow</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Select Zonal RRB Portal</h4>
            <p class="text-xs text-muted-foreground mt-1">Visit your chosen zonal portal (e.g. RRB Mumbai, RRB Chennai, RRB Chandigarh) and initiate candidate registration.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Upload Photo (20-50 KB) &amp; Signature (10-20 KB)</h4>
            <p class="text-xs text-muted-foreground mt-1">Upload JPEG files formatted with SignResize. Verify that your signature image displays clearly without horizontal stretch.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">3</div>
            <h4 class="font-bold text-foreground text-sm">Confirm Community Certificate Upload (SC/ST)</h4>
            <p class="text-xs text-muted-foreground mt-1">If applying for free rail travel authority, upload your scanned caste certificate in PDF format under 500 KB.</p>
          </div>
        </div>
      </div>

      <h2 id="strategy">Recommended Daily Study Strategy</h2>
      <p>Divide your daily preparation into 3 focused blocks: 2 hours for Arithmetic speed drills, 1.5 hours for Logical Reasoning puzzle practice, and 2 hours for General Science and Current Affairs revision.</p>
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RRB NTPC 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "upsc-csat-paper-2-master-blueprint-comprehension-hacks",
    title: "UPSC CSE Prelims: CSAT Paper-II Qualifying Blueprint, Reading Comprehension & Speed Logic Hacks",
    metaTitle: "UPSC CSAT Paper 2 Blueprint: Comprehension & Logic Hacks",
    metaDescription: "Master the 33% UPSC CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, arithmetic problem selection & OTR document rules.",
    excerpt: "Master the 33% CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, critical reasoning, arithmetic problem selection, and UPSC OTR document rules.",
    category: "Study Prep",
    publishDate: "Sept 16, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Civil Services Methodology Team",
    readTime: "8 min read",
    featured: false,
    tags: ["UPSC Prelims","CSAT Strategy","Reading Comprehension","Aptitude Speed","Civil Services","UPSC OTR"],
    relatedExamPreset: "upsc-civil-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Union Public Service Commission (UPSC)"
        },
        {
            "label": "Exam Stage",
            "value": "Civil Services Prelims Paper-II (CSAT)"
        },
        {
            "label": "Qualifying Threshold",
            "value": "33% Mandatory (66.67 Marks out of 200)"
        },
        {
            "label": "Total Questions",
            "value": "80 Questions (2.5 Marks each, 2 Hours)"
        },
        {
            "label": "Negative Marking",
            "value": "0.833 Marks (33.3%) per wrong attempt"
        },
        {
            "label": "Document Specs",
            "value": "OTR Photo (Name/Date Strip) + Sign (20-300 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the minimum qualifying score required in UPSC CSAT Paper-II?",
            "answer": "Candidates must secure a minimum of 33% marks (66.67 marks out of 200) in CSAT Paper-II to qualify Prelims. CSAT marks are not added to the cutoff merit, but failing to clear 66.67 marks disqualifies the candidate even with 150+ in GS Paper-I."
        },
        {
            "question": "What is the negative marking deduction in UPSC CSAT?",
            "answer": "Each question carries 2.5 marks. A negative marking penalty of 0.833 marks (33.3%) is deducted for each incorrect response. Unattempted questions carry zero penalty."
        },
        {
            "question": "How many questions should a candidate safely attempt in CSAT?",
            "answer": "To safely achieve 80+ marks above the 66.67 threshold, candidates should target 48 to 55 well-selected questions with an accuracy rate of at least 80%."
        },
        {
            "question": "What are the high-yield topics in CSAT Reading Comprehension?",
            "answer": "Key comprehension question types include Crux of the Passage, Most Logical & Rational Inference, Assumption based questions, and Practical Implications."
        },
        {
            "question": "What are the UPSC OTR photo upload guidelines?",
            "answer": "UPSC requires photographs taken within 10 days of application submission with candidate name and photo capture date imprinted at the bottom in square 1:1 aspect ratio (20–300 KB)."
        },
        {
            "question": "What arithmetic topics carry the highest weightage in CSAT?",
            "answer": "Number Systems (divisibility rules, unit digits, remainders), Permutation & Combination, Probability, Percentages, Ratio & Proportion, and Coding Logic."
        },
        {
            "question": "Can non-mathematics background candidates clear UPSC CSAT?",
            "answer": "Yes. By mastering Reading Comprehension (27–30 questions) and basic logical reasoning (15–18 questions), candidates can comfortably qualify without advanced mathematics."
        },
        {
            "question": "Is rough work space provided in the CSAT question booklet?",
            "answer": "Yes, dedicated blank pages for rough work are provided at the end of the CSAT test booklet. Candidates can use pen or pencil for calculations."
        },
        {
            "question": "What are the signature upload specifications for UPSC OTR?",
            "answer": "Signatures must measure 350×350 to 1000×1000 pixels (20.0 KB to 300.0 KB in JPG) penned in black ballpoint ink on clean white unruled paper."
        },
        {
            "question": "What is the best mock test strategy for UPSC CSAT preparation?",
            "answer": "Solve the last 10 years of official UPSC CSAT previous year question papers (2014–2024) within strict 2-hour timed conditions between 2:30 PM and 4:30 PM."
        }
    ],
    contentHtml: `
<h2 id="overview">The Decisive Role of CSAT (Paper-II) in UPSC Prelims</h2>
      <p>In recent Civil Services examinations, CSAT Paper-II has proven to be the major hurdle for thousands of aspirants. Despite scoring 100+ in General Studies Paper-I, failing to secure the mandatory qualifying threshold of <strong>33% (66.67 marks out of 200)</strong> results in immediate disqualification.</p>

      <h2 id="exam-pattern">CSAT Sectional Breakdown &amp; Target Matrix</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Section</th>
              <th class="p-3 border-b">Questions</th>
              <th class="p-3 border-b">Target Attempt</th>
              <th class="p-3 border-b">Scoring &amp; Accuracy Strategy</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">Reading Comprehension</td>
              <td class="p-3 font-mono">25–28 Qs</td>
              <td class="p-3 font-mono">20 Qs</td>
              <td class="p-3">Identify author's central assumption, corollaries, and rational implications. Avoid extreme options.</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Quantitative Aptitude</td>
              <td class="p-3 font-mono">35–40 Qs</td>
              <td class="p-3 font-mono">15 Qs</td>
              <td class="p-3">Focus on Number Systems, Remainder Theorem, Percentages, Ratio, Work &amp; Time. Avoid complex P&amp;C.</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Logical &amp; Analytical Reasoning</td>
              <td class="p-3 font-mono">15–20 Qs</td>
              <td class="p-3 font-mono">12 Qs</td>
              <td class="p-3">Prioritize Syllogisms, Blood Relations, Direction Sense, and linear seating arrangements.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ UPSC CSAT Safe Attempt &amp; Score Calculation Snippet</span>
          <span>UPSC Marking Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>Target: Attempt 45 Questions with >= 80% Accuracy
Raw Score = (36 Correct × 2.50) - (9 Wrong × 0.833) = 90 - 7.50 = 82.50 Marks (Comfortably clears 66.67)</code></pre>
      </div>

      <h2 id="document-specs">UPSC OTR Document Upload Rules</h2>
      <p>Candidates registering on the UPSC One Time Registration portal (upsconline.nic.in) must adhere to precise file specifications for photo and signature uploads:</p>
      <ul>
        <li><strong>Passport Photograph:</strong> 350 &times; 350 pixels, size strictly <strong>20 KB to 300 KB</strong>. Must state candidate's name and photo date at the bottom.</li>
        <li><strong>Scanned Signature:</strong> 140 &times; 60 pixels, size strictly <strong>10 KB to 20 KB</strong> in black ink.</li>
      </ul>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Preparing UPSC OTR Documents?</h4>
        <p class="text-sm text-muted-foreground mt-1">Ensure your UPSC passport photo and signature comply with official OTR specs before the registration portal closes.</p>
        <a href="/upsc-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Open UPSC Resizer Preset &rarr;
        </a>
      </div>
    

<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2 id="strategy">UPSC CSE Prelims: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPSC CSE Prelims Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "state-psc-otr-registration-photo-signature-guidelines",
    title: "State PSC One-Time Registration (OTR): Mandatory Signature & Photo Guidelines for UPPSC, BPSC, MPSC & RPSC",
    metaTitle: "State PSC OTR Guidelines: Photo & Signature Resize Rules",
    metaDescription: "Master One-Time Registration across UPPSC, BPSC, MPSC, TNPSC & KPSC: exact photo dimensions, 10-20KB signature bounds & portal navigation. Resize free!",
    excerpt: "Detailed checklist for State Public Service Commission One-Time Registration portals: dimensions, dual-boundary compression, step-by-step navigation, and white background verification.",
    category: "Guidelines & Tips",
    publishDate: "Sept 15, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Technical Verification Team",
    authorRole: "State Commission Standards Desk",
    readTime: "7 min read",
    featured: false,
    tags: ["State PSC","OTR Registration","UPPSC","BPSC","MPSC","RPSC","Document Guidelines"],
    relatedExamPreset: "uppsc-uttar-pradesh",
    quickFacts: [
        {
            "label": "Target Portals",
            "value": "UPPSC, BPSC, MPSC, TNPSC, KPSC, RPSC"
        },
        {
            "label": "System Type",
            "value": "One-Time Registration (OTR) Candidate Profile"
        },
        {
            "label": "Photo Standard",
            "value": "3.5×4.5 cm (20–50 KB JPG, Light Background)"
        },
        {
            "label": "Signature Standard",
            "value": "140×60 px (10–20 KB JPG, Black Ballpoint Ink)"
        },
        {
            "label": "Validity",
            "value": "Lifetime OTR Profile for all State PSC Applications"
        },
        {
            "label": "Dual Signature Rule",
            "value": "BPSC requires both Hindi and English signatures"
        }
    ],
    faqs: [
        {
            "question": "What is One-Time Registration (OTR) in State Public Service Commissions?",
            "answer": "OTR is a unified digital profile system that stores a candidate's verified identity, educational credentials, photograph, and signature once, enabling instant 1-click applications for all future commission exams."
        },
        {
            "question": "What is the exact signature dimension and file size for State PSC OTR?",
            "answer": "Most State PSCs (UPPSC, MPSC, TNPSC, KPSC) mandate scanned signatures measuring 140 × 60 pixels with file size strictly between 10.0 KB and 20.0 KB in JPG/JPEG format."
        },
        {
            "question": "Why does BPSC require both Hindi and English signatures in OTR?",
            "answer": "The Bihar Public Service Commission mandates two separate signature uploads: one in English running script and one in Hindi Devanagari script (15–20 KB each) for bi-script verification."
        },
        {
            "question": "Can I edit my photograph and signature after OTR final submission?",
            "answer": "Yes, State PSCs provide profile modification windows before applying for specific notifications, though major personal changes may require OTP Aadhaar re-authentication."
        },
        {
            "question": "What are the common reasons State PSC portals reject uploaded photos?",
            "answer": "Photos older than 6 months, selfies, blurred portraits, dark background shadows, wearing sunglasses or caps, and file sizes exceeding 50 KB are the leading reasons for rejection."
        },
        {
            "question": "What ink color is mandatory for State PSC signatures?",
            "answer": "Black ballpoint ink on clean white unruled paper is strictly mandated. Signatures in blue gel ink, fountain pen, or pencil are rejected during scrutiny."
        },
        {
            "question": "Is Domicile Certificate mandatory during State PSC OTR?",
            "answer": "Domicile certificates are mandatory only for candidates seeking state-specific reservation benefits (OBC, SC, ST, EWS). Non-domicile candidates can register under Unreserved/General category."
        },
        {
            "question": "What resolution and DPI should be used when scanning documents for OTR?",
            "answer": "Scan documents at 200 DPI (dots per inch) in true color for photos and grayscale/black-and-white for signatures to maintain optimal clarity within 10–20 KB boundaries."
        },
        {
            "question": "What should candidates do if OTR photo displays upside down or distorted?",
            "answer": "Clear browser cache, ensure image aspect ratio matches 3.5:4.5 exactly without EXIF orientation tags, and re-upload through SignResize automated canvas normalizer."
        },
        {
            "question": "How does SignResize ensure 100% OTR portal acceptance?",
            "answer": "SignResize provides pre-configured presets for UPPSC, BPSC, MPSC, and TNPSC that automatically crop to exact pixels and compress strictly within commission KB limits."
        },
        {
            "question": "Can I clear State PSC examinations without attending offline coaching in capital cities?",
            "answer": "Yes. With state board textbooks, standard reference works, and online test series available everywhere, thousands of candidates from small towns and rural areas top State PSC exams (UPPSC, BPSC, MPSC, TNPSC) every year solely through home self-study."
        }
    ],
    contentHtml: `
<h2 id="overview">State PSC One-Time Registration (OTR) Mandate</h2>
      <p>State Public Service Commissions across India—including <strong>UPPSC (Uttar Pradesh), BPSC (Bihar), MPSC (Maharashtra), and RPSC (Rajasthan)</strong>—have made OTR mandatory. Photographs and signatures uploaded during OTR are permanently locked to candidate profiles for all future competitive exam notices.</p>

      <h2 id="document-specs" id="exam-pattern">State Commission Document Comparison Matrix</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Commission</th>
              <th class="p-3 border-b">Signature Size &amp; Specs</th>
              <th class="p-3 border-b">Photo Dimensions &amp; Size</th>
              <th class="p-3 border-b">Special Rules</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">UPPSC OTR</td>
              <td class="p-3 font-mono">10 KB – 20 KB (140&times;60 px)</td>
              <td class="p-3 font-mono">20 KB – 50 KB (3.5&times;4.5 cm)</td>
              <td class="p-3">White background; Candidate name &amp; photo date beneath picture</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">BPSC (Bihar)</td>
              <td class="p-3 font-mono">10 KB – 20 KB (Separate Files)</td>
              <td class="p-3 font-mono">20 KB – 50 KB (3.5&times;4.5 cm)</td>
              <td class="p-3">Requires two separate uploads for Hindi and English running signatures</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">MPSC (Maharashtra)</td>
              <td class="p-3 font-mono">10 KB – 20 KB</td>
              <td class="p-3 font-mono">20 KB – 50 KB (200&times;230 px)</td>
              <td class="p-3">Black ballpoint pen on plain white sheet; Cursive running writing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
        <div class="flex items-center justify-between text-slate-400 text-[11px]">
          <span>⚡ State OTR Portal Error Prevention Code Snippet</span>
          <span>Portal Validation Standard</span>
        </div>
        <pre class="overflow-x-auto text-emerald-400"><code>If photo_background != "white" OR signature_casing == "BLOCK_CAPS":
    Return Portal_Error: "Document failed OCR automated quality check"</code></pre>
      </div>

      
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Step-by-Step State OTR Navigation Workflow</h2>
      <div class="my-8 space-y-4">
        <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">1</div>
            <h4 class="font-bold text-foreground text-sm">Register OTR Profile</h4>
            <p class="text-xs text-muted-foreground mt-1">Enter Aadhar / Mobile / Email to generate permanent OTR Registration ID on your State PSC portal.</p>
          </div>
          <div class="relative">
            <div class="absolute -left-[33px] top-0 w-6 h-6 rounded-full bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center">2</div>
            <h4 class="font-bold text-foreground text-sm">Upload High-Contrast Photos &amp; Signatures</h4>
            <p class="text-xs text-muted-foreground mt-1">Use SignResize to remove background phone shadows and compress signatures precisely to the 10–20 KB bound.</p>
          </div>
        </div>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Prepare Your OTR Files in 1 Click</h4>
        <p class="text-sm text-muted-foreground mt-1">Select your state commission preset to automatically apply exact dimensions and compression limits directly in your browser.</p>
        <a href="/#tool-workspace" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
          Launch State PSC Resizer &rarr;
        </a>
      </div>
    
<h2 id="strategy">State PSC One-Time Registration (OTR): High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your State PSC One-Time Registration (OTR) Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines",
    title: "IBPS PO & Clerk 2026 Master Upload Guide: Exact Photo, Signature, Thumb Impression & Declaration Rules",
    metaTitle: "IBPS PO & Clerk Document Guide: Photo, Sign, Thumb Rules",
    metaDescription: "Official IBPS 2026 document handbook: 140x60 sign specs, left thumb impression, exact handwritten declaration wording & photo bounds. Resize online free!",
    excerpt: "Comprehensive formatting rules for all 4 mandatory IBPS uploads: photograph (20-50KB), running signature (10-20KB), left thumb impression (20-50KB), and handwritten declaration (50-100KB) with step-by-step navigation.",
    category: "Guidelines & Tips",
    publishDate: "Sept 14, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Official Banking Document Compliance Team",
    readTime: "8 min read",
    featured: false,
    tags: ["IBPS PO","IBPS Clerk","Handwritten Declaration","Left Thumb Impression","Bank Exam Guidelines","Document Rules"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Institute of Banking Personnel Selection (IBPS)"
        },
        {
            "label": "Applicable Exams",
            "value": "IBPS PO, IBPS Clerk, RRB Officer & Office Assistant"
        },
        {
            "label": "Photo Specs",
            "value": "200×230 px (20–50 KB JPG, White Background)"
        },
        {
            "label": "Signature Specs",
            "value": "140×60 px (10–20 KB JPG, Black Ink Only)"
        },
        {
            "label": "Left Thumb Specs",
            "value": "240×240 px (20–50 KB JPG, Blue/Black Ink)"
        },
        {
            "label": "Declaration Specs",
            "value": "800×400 px (50–100 KB JPG, Own Handwriting)"
        }
    ],
    faqs: [
        {
            "question": "What is the exact text of the IBPS handwritten declaration?",
            "answer": "The text must be handwritten in English on white paper in black ink: 'I, _______ (Name of candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.'"
        },
        {
            "question": "Why does IBPS disqualify signatures written in capital letters?",
            "answer": "A signature represents an individual's personal running cursive mark. Capital or block letters lack individual handwriting characteristics and can be easily forged, triggering instant disqualification."
        },
        {
            "question": "What are the exact dimensions and file weight for the Left Thumb Impression?",
            "answer": "Left Thumb Impression must measure 240 × 240 pixels (approx. 3 cm × 3 cm) with file weight strictly between 20.0 KB and 50.0 KB in JPG/JPEG format on plain white paper."
        },
        {
            "question": "What ink colors are permitted for IBPS documents?",
            "answer": "Black ballpoint ink is mandatory for the Signature and Handwritten Declaration. Blue or black ink stamp pad is permitted for the Left Thumb Impression."
        },
        {
            "question": "Can someone else write the handwritten declaration on my behalf?",
            "answer": "No. If IBPS detects that the handwritten declaration was penned by another person, the candidate's application is rejected and they may be permanently debarred."
        },
        {
            "question": "What should a candidate do if their left thumb is injured or amputated?",
            "answer": "The candidate may use their right thumb impression or an impression of one of the fingers of the left hand, explicitly mentioning the finger used in the application."
        },
        {
            "question": "What are the photo dimensions for IBPS registration?",
            "answer": "The photograph must measure 200 × 230 pixels (4.5 × 3.5 cm) with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format against a light or white background."
        },
        {
            "question": "Can I upload the declaration in Hindi or regional languages?",
            "answer": "No. Under official IBPS guidelines, the declaration must be written in English only. Declarations submitted in Hindi or regional languages are treated as invalid."
        },
        {
            "question": "What is the maximum file size permitted for the handwritten declaration?",
            "answer": "The file size for the handwritten declaration must fall strictly between 50.0 KB and 100.0 KB in JPG or JPEG format."
        },
        {
            "question": "How can I resize all 4 IBPS documents in under 2 minutes?",
            "answer": "Use SignResize dedicated IBPS preset tool to crop, remove phone paper shadows, and compress all four files into their exact KB boundaries directly in your browser."
        },
        {
            "question": "Can an average student clear banking exams in 4 months of structured preparation?",
            "answer": "Yes. Banking exams have standard syllabus boundaries. Practicing simplification, approximation, number series, quadratic equations, and standard seating arrangements daily for 4 months builds the speed needed to easily clear Prelims and Mains cutoffs."
        }
    ],
    contentHtml: `
<h2 id="document-specs" id="overview">The 4 Mandatory Digital Uploads for IBPS &amp; SBI Recruitment</h2>
      <p>Applying for banking recruitment exams conducted by the <strong>Institute of Banking Personnel Selection (IBPS)</strong> or <strong>State Bank of India (SBI)</strong> requires uploading four distinct scanned assets during online registration. Failing even one parameter results in immediate application rejection or biometric failure at the exam venue.</p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b">Document</th>
              <th class="p-3 border-b">File Size Range</th>
              <th class="p-3 border-b">Dimensions &amp; Resolution</th>
              <th class="p-3 border-b">Mandatory Ink &amp; Canvas Rules</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr>
              <td class="p-3 font-semibold text-primary">Passport Photo</td>
              <td class="p-3 font-mono">20 KB to 50 KB</td>
              <td class="p-3 font-mono">200 &times; 230 px (3.5 &times; 4.5 cm)</td>
              <td class="p-3">Light or pure white background</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Candidate Signature</td>
              <td class="p-3 font-mono">10 KB to 20 KB</td>
              <td class="p-3 font-mono">140 &times; 60 px (4.0 &times; 2.0 cm)</td>
              <td class="p-3">Black ink ballpoint pen; Cursive running writing</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Left Thumb Impression (LTI)</td>
              <td class="p-3 font-mono">20 KB to 50 KB</td>
              <td class="p-3 font-mono">240 &times; 240 px (3.0 &times; 3.0 cm)</td>
              <td class="p-3">Blue or black ink on clean white paper</td>
            </tr>
            <tr>
              <td class="p-3 font-semibold text-primary">Handwritten Declaration</td>
              <td class="p-3 font-mono">50 KB to 100 KB</td>
              <td class="p-3 font-mono">800 &times; 400 px (10.0 &times; 5.0 cm)</td>
              <td class="p-3">Candidate's own handwriting in English (Black ink)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-6 p-4 rounded-xl bg-card border border-border">
        <p class="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">IBPS Official Handwritten Declaration Verbatim Text</p>
        <blockquote class="italic text-foreground font-serif text-sm sm:text-base border-l-4 border-primary pl-4 py-1">
          &ldquo;I, _______ (Name of the candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.&rdquo;
        </blockquote>
      </div>

      <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
        <h4 class="text-base font-bold text-foreground">Resize for IBPS / SBI in 3 Seconds</h4>
        <p class="text-sm text-muted-foreground mt-1">Format your signature, thumb impression, and declaration to exact pixel dimensions and KB bounds with zero server uploads.</p>
        <div class="flex flex-wrap gap-3 mt-3">
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
            Resize IBPS Signature &rarr;
          </a>
          <a href="/thumb-impression-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition">
            Format Thumb Impression &rarr;
          </a>
        </div>
      </div>
    

<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2 id="exam-pattern">IBPS PO & Clerk 2026 Master Upload Guide: Examination Structure &amp; Selection Blueprint</h2>
<p>Understanding the multi-tier selection stages, sectional weightages, and negative marking scheme ensures strategic preparation without risking disqualification.</p>
<h2 id="strategy">IBPS PO & Clerk 2026 Master Upload Guide: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your IBPS PO & Clerk 2026 Master Upload Guide Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "top-5-mistakes-photo-signature-rejection-govt-exams",
    title: "Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection",
    metaTitle: "Top 5 Photo & Signature Mistakes Causing Exam Rejection",
    metaDescription: "Avoid costly application rejection in SSC, UPSC & IBPS: learn the top 5 photo & signature upload errors, capital letter signature rules & safe resizing hacks.",
    excerpt: "Avoid the most frequent mistakes that disqualify thousands of candidates in SSC, UPSC, IBPS, and State PSC applications before the exam day.",
    category: "Guidelines & Tips",
    publishDate: "Sept 10, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Technical Verification Team",
    authorRole: "Exam Portal Standards & Verification",
    readTime: "6 min read",
    featured: false,
    tags: ["Rejection Prevention","Exam Guidelines","Document Resizing","PAN / SSC","Quality Control"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Target Exams",
            "value": "SSC, UPSC, RRB, IBPS, State PSCs, NTA"
        },
        {
            "label": "Annual Rejections",
            "value": "Over 4.5 Lakh Applications Disqualified Annually"
        },
        {
            "label": "Top Pitfall #1",
            "value": "Signatures in ALL CAPITAL / BLOCK Letters"
        },
        {
            "label": "Top Pitfall #2",
            "value": "Spectacles Glare & Shadows in Live Web Photos"
        },
        {
            "label": "Top Pitfall #3",
            "value": "File Size Outside Strict KB Dual Boundaries"
        },
        {
            "label": "Recommended Fix",
            "value": "Client-Side Automated 140×60 px & KB Compression"
        }
    ],
    faqs: [
        {
            "question": "What is the #1 reason government exam portals reject signatures?",
            "answer": "Writing signatures in ALL CAPITAL / BLOCK letters is the single most common cause of rejection. Official commission rules explicitly mandate continuous running cursive handwriting."
        },
        {
            "question": "Why are live webcam photos rejected on SSC and BPSC portals?",
            "answer": "Common rejection triggers include wearing spectacles with reflection, improper frontal lighting causing shadows behind ears, and face covering less than 80% of the frame."
        },
        {
            "question": "What happens if my signature file size is 9.8 KB when the limit is 10-20 KB?",
            "answer": "Automated commission portal upload filters immediately block submissions outside exact limits. SignResize adjusts compression quality to land files safely in the middle (e.g. 15 KB)."
        },
        {
            "question": "Why is blue gel pen or fountain pen ink rejected in signatures?",
            "answer": "Gel and fountain pen ink frequently bleeds into paper fibers, causing digital scanning blur. Commissions mandate dark black ballpoint pen on unruled white paper for high contrast."
        },
        {
            "question": "Can I upload a cropped selfie as my passport photo?",
            "answer": "No. Selfies have wide-angle lens distortion, poor lighting, and informal backgrounds that violate passport standards, leading to rejection during document scrutiny."
        },
        {
            "question": "How do dark paper shadows from smartphone photos cause rejection?",
            "answer": "Taking a picture of white paper with a smartphone casts grey hand or phone shadows that scanning algorithms flag as dirty background. SignResize white-filter tool removes shadows automatically."
        },
        {
            "question": "What is the UPSC 10-day-old photograph rule with name and date?",
            "answer": "UPSC requires uploaded photos to be taken within 10 days of submission, with candidate full name and date of photo capture imprinted at the bottom in bold text."
        },
        {
            "question": "What is the difference between aspect ratio and file size in KB?",
            "answer": "Aspect ratio represents pixel dimensions (e.g. 140×60 pixels), while file size represents storage weight (e.g. 10–20 KB). Both parameters must be satisfied simultaneously."
        },
        {
            "question": "Can an application rejected for photo/signature errors be corrected later?",
            "answer": "Only if the commission provides an official correction window (such as SSC's 3-day correction period). If missed, rejection is permanent with zero refund."
        },
        {
            "question": "How does SignResize prevent application rejections?",
            "answer": "SignResize applies pre-configured official dimension templates, contrast-enhancing shadow filters, and precision KB compression directly in your browser with zero data loss."
        },
        {
            "question": "Can minor document mistakes prevent me from clearing an exam even if I score above the cutoff?",
            "answer": "Yes. Examination boards strictly reject candidates whose uploaded photo has spectacles, caps, or blurred biometrics, or whose signature was uploaded in BLOCK/CAPITAL letters, irrespective of their examination score. Following official specifications using SignResize eliminates this risk completely."
        }
    ],
    contentHtml: `
<h2 id="document-specs" id="overview">Why Do Exam Commissions Reject Candidate Documents?</h2>
      <p>Government recruitment portals like SSC, UPSC, NTA, and IBPS use automated optical scanning software. When an uploaded signature fails dimension or contrast checks, the software flags it as invalid, resulting in immediate rejection without manual review.</p>

      
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>The 5 Most Common Disqualification Traps</h2>
      <ol class="space-y-4">
        <li>
          <strong>1. Signatures in BLOCK / ALL CAPITAL Letters:</strong>
          <p>Writing your full name in capital letters is not legally regarded as a running signature. SSC, IBPS, and SBI explicitly declare block capital signatures invalid.</p>
        </li>
        <li>
          <strong>2. Grey or Shadowed Camera Background:</strong>
          <p>Taking a picture of your signature under indoor lighting produces grey paper with phone shadows. Always use our <em>"Clean White Paper"</em> filter before uploading to get crisp, pure white background.</p>
        </li>
        <li>
          <strong>3. Incorrect Aspect Ratio (Stretched or Squashed):</strong>
          <p>Forcing a rectangular signature into a square box without proper canvas padding distorts your signature, causing biometric mismatches at the exam center.</p>
        </li>
        <li>
          <strong>4. Blue Ink When Black Pen is Mandated:</strong>
          <p>IBPS, SSC, and RRB strictly demand <strong>Black Ink</strong> ballpoint pens for optical character recognition (OCR) scanning clarity.</p>
        </li>
        <li>
          <strong>5. Violating Minimum KB Limit (Under 10KB or Under 20KB):</strong>
          <p>If an exam portal requires min 20KB and your file is 18.5KB, the portal will show "File size too small". SignResize's Dual-Boundary engine prevents this by matching the exact range.</p>
        </li>
      </ol>
    
<h2 id="exam-pattern">Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection: Examination Structure &amp; Selection Blueprint</h2>
<p>Understanding the multi-tier selection stages, sectional weightages, and negative marking scheme ensures strategic preparation without risking disqualification.</p>
<h2 id="strategy">Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your Top 5 Signature & Photo Mistakes That Lead to Government Exam Rejection Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "upsc-cse-2026-preparation-roadmap-daily-study-plan",
    title: "UPSC CSE 2026 Daily Study Strategy: Comprehensive 90-Day High-Yield Roadmap",
    metaTitle: "UPSC CSE 2026 Roadmap: Daily Study Plan & OTR Guidelines",
    metaDescription: "Complete 12-month UPSC CSE 2026 roadmap: static subject timetable, answer writing drills, CSAT qualifying hacks & OTR document rules. Read the guide free!",
    excerpt: "Detailed hour-by-hour daily timetable, 4-phase subject mastery plan, NCERT mapping, CSAT qualifying hacks, and PYQ analysis methodology for civil services aspirants.",
    category: "Study Prep",
    publishDate: "Sept 08, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Competitive Exam Methodology Team",
    readTime: "8 min read",
    featured: false,
    tags: ["UPSC CSE","Study Strategy","Prelims 2026","Time Management","NCERT Roadmap"],
    relatedExamPreset: "upsc-civil-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Union Public Service Commission (UPSC)"
        },
        {
            "label": "Target Examination",
            "value": "Civil Services Examination (CSE) 2026"
        },
        {
            "label": "Cadres Recruited",
            "value": "IAS, IPS, IFS, IRS, Central Services Group A & B"
        },
        {
            "label": "Selection Stages",
            "value": "Prelims (GS + CSAT) + Mains (9 Papers) + Interview"
        },
        {
            "label": "Daily Study Target",
            "value": "7 to 8 Focused Hours across 4 Targeted Study Slots"
        },
        {
            "label": "Document Specs",
            "value": "UPSC OTR Photo (10-Day Recency) + Sign (20-300 KB)"
        }
    ],
    faqs: [
        {
            "question": "How many hours of daily study are required to clear UPSC CSE 2026?",
            "answer": "A focused, disciplined study routine of 7 to 8 hours daily over 12 to 14 months—divided into static syllabus, daily newspaper/PIB analysis, CSAT practice, and revision—is optimal."
        },
        {
            "question": "When should an aspirant begin answer writing practice for UPSC Mains?",
            "answer": "Begin answer writing after completing basic NCERTs and one round of standard static reference books (approx. 3–4 months into preparation), writing 2 quality answers daily with peer evaluation."
        },
        {
            "question": "What is the UPSC One-Time Registration (OTR) photo guideline?",
            "answer": "The photograph must be taken within 10 days of application submission, showing the candidate's face occupying 75% of the frame, with candidate name and photo date imprinted at the bottom."
        },
        {
            "question": "How should an aspirant balance Prelims General Studies and CSAT?",
            "answer": "Dedicate 5 to 6 hours daily to GS Paper-I (Polity, Economy, Modern History, Environment) and 1.5 to 2 hours daily to CSAT reading comprehension and arithmetic problem-solving."
        },
        {
            "question": "What are the age limits and attempt limits for UPSC Civil Services?",
            "answer": "General/EWS: 21 to 32 years (6 attempts). OBC: 21 to 35 years (9 attempts). SC/ST: 21 to 37 years (Unlimited attempts up to age cap). PwBD: up to 42 years."
        },
        {
            "question": "What are the signature upload specifications for UPSC CSE?",
            "answer": "Signatures must measure between 350×350 and 1000×1000 pixels (file size strictly between 20.0 KB and 300.0 KB in JPG) penned in black ballpoint ink on clean white unruled paper."
        },
        {
            "question": "How should an aspirant select their Optional Subject for Mains?",
            "answer": "Base optional selection on syllabus overlap with General Studies, personal academic interest, availability of authentic study material, and consistent scoring trends over the last 5 years."
        },
        {
            "question": "What is the importance of solving Previous Year Questions (PYQs)?",
            "answer": "Solving the last 10 years of Prelims and Mains PYQs reveals repeated core themes, UPSC question phrasing traps, and helps calibrate your static note-making."
        },
        {
            "question": "Can working professionals clear UPSC CSE with a full-time job?",
            "answer": "Yes. Many working professionals clear CSE by committing 4 focused hours on weekdays (2 morning + 2 evening) and 10–12 hours on weekends with high-efficiency note revision."
        },
        {
            "question": "What is the starting salary and training structure for an IAS Officer?",
            "answer": "An IAS Officer starts training at LBSNAA Mussoorie at Pay Level 10 (Basic ₹56,100). Adding DA, HRA, and allowances, gross monthly salary is ~₹95,000–₹1,05,000 alongside official accommodation."
        }
    ],
    contentHtml: `
<h2 id="exam-pattern" id="overview">The Structured 90-Day Foundation Blueprint</h2>
      <p>Succeeding in the Civil Services Examination (CSE) does not require studying 16 hours a day; it requires systematic consistency, sharp syllabus boundaries, and relentless revision of standard public academic sources. This comprehensive roadmap is designed to guide both full-time aspirants and working professionals through a step-by-step preparation cycle.</p>

      <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20">
        <h3 class="text-base font-bold text-primary mb-2">📌 The Golden Rules of High-Yield Preparation</h3>
        <ul class="space-y-1.5 text-sm text-foreground/90">
          <li><strong>One Standard Source per Subject:</strong> Read one standard government or canonical academic reference five times rather than five different commercial coaching booklets once.</li>
          <li><strong>Official PYQ-First Approach:</strong> Solve the last 10 years of official Previous Year Questions (PYQs) published by the Union Public Service Commission before taking mock tests.</li>
          <li><strong>Active Recall over Passive Highlighting:</strong> Test yourself after every study session using short notes, flash summaries, and mental retrieval.</li>
          <li><strong>Never Neglect Paper II (CSAT):</strong> Allocate at least 60 to 90 minutes daily from day one to comfortably clear the 33% (66 marks) qualifying benchmark.</li>
        </ul>
      </div>

      <h2 id="strategy">Daily Study Timetable: Realistic 8-Hour Master Routine</h2>
      <div class="my-5 overflow-x-auto">
        <table class="w-full text-sm text-left border border-border">
          <thead class="bg-muted text-foreground font-semibold">
            <tr>
              <th class="p-3 border-b border-border">Time Slot</th>
              <th class="p-3 border-b border-border">Session Type</th>
              <th class="p-3 border-b border-border">Target Objective &amp; Activities</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-xs sm:text-sm">
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">06:00 AM – 08:30 AM</td>
              <td class="p-3 font-semibold">Slot 1: Core Static Subject</td>
              <td class="p-3 text-muted-foreground">Highest mental alertness window. Cover dense static subjects (Polity / Modern History / Economy).</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">09:30 AM – 11:30 AM</td>
              <td class="p-3 font-semibold">Slot 2: Current Affairs &amp; PIB</td>
              <td class="p-3 text-muted-foreground">Standard national daily newspaper analysis + official Press Information Bureau (PIB.gov.in) releases.</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">02:00 PM – 04:30 PM</td>
              <td class="p-3 font-semibold">Slot 3: CSAT &amp; Aptitude Drills</td>
              <td class="p-3 text-muted-foreground">Practice Reading Comprehension inferences and quantitative problem solving.</td>
            </tr>
            <tr>
              <td class="p-3 font-mono font-semibold text-primary">07:00 PM – 09:00 PM</td>
              <td class="p-3 font-semibold">Slot 4: Revision &amp; PYQs</td>
              <td class="p-3 text-muted-foreground">Active recall, solving 30 PYQs, and summarizing today's key takeaways.</td>
            </tr>
          </tbody>
        </table>
      </div>
    
<h2 id="document-specs">UPSC CSE 2026 Daily Study Strategy: Official Document Upload Specifications</h2>
<p>Strict compliance with portal dimensions, resolution, and file sizes is mandatory to clear preliminary automated portal verification.</p>
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPSC CSE 2026 Daily Study Strategy Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ssc-cgl-2026-top-10-faq-aspirants-guide",
    title: "SSC CGL 2026: Top 10 FAQs Every Aspirant Must Know Before Applying — Eligibility, Live Photo & Tier-1 Strategy",
    metaTitle: "SSC CGL 2026: Live Photo, 140x60 Sign & Eligibility FAQs",
    metaDescription: "Official SSC CGL 2026 guide: live photo rules, 140x60 signature size, eligibility criteria and top FAQs. Resize your photo and signature online free!",
    excerpt: "Authoritative candidate advisory for SSC CGL 2026: official live photo guidelines, exact 140×60 px signature bounds, educational eligibility, Tier-1 negative marking, and post preferences.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC CGL 2026","SSC CGL Eligibility Criteria","SSC CGL Live Photo Guidelines","SSC CGL Signature Size 140x60","Tier-1 Strategy","Syllabus Breakdown"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Staff Selection Commission (SSC)"
        },
        {
            "label": "Total Vacancies",
            "value": "17,727 Posts (Group B & C)"
        },
        {
            "label": "Application Last Date",
            "value": "Sept 24, 2026 (23:00 Hrs)"
        },
        {
            "label": "Correction Window",
            "value": "Sept 27 – Sept 29, 2026"
        },
        {
            "label": "Selection Stages",
            "value": "Tier-1 (Screening) + Tier-2 (Merit)"
        },
        {
            "label": "Document Specs",
            "value": "Live Webcam Photo + 140×60 px Sign (10–20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational eligibility and final year graduation rule for SSC CGL 2026?",
            "answer": "Candidates must possess a Bachelor's Degree in any discipline from a recognized University or Institute established under Central or State legislation. For general posts (such as ASO, Tax Assistant, and Inspectors), no minimum percentage is mandated. Final-year students are eligible to apply only if their degree result is formally declared by their University on or before the crucial cut-off date specified in the official notification. For specialized roles like Assistant Audit Officer (AAO) or Junior Statistical Officer (JSO), specific coursework in Statistics, Mathematics, Economics, or Chartered Accountancy is mandatory."
        },
        {
            "question": "What are the age limits and category relaxation rules across different SSC CGL posts?",
            "answer": "Age limits vary by post group: 18 to 27 years for Auditor and Junior Accountant; 18 to 30 years for Inspector of Income Tax, Central Excise Inspector, and ASO in CSS; and up to 32 years for Junior Statistical Officer (JSO). Upper-age relaxation conforms to Central Government statutory rules: OBC (Non-Creamy Layer) candidates receive +3 years, SC/ST candidates receive +5 years, and PwBD candidates receive +10 years (+13 years for PwBD-OBC, +15 years for PwBD-SC/ST). Ex-Servicemen (ESM) receive 3 years deduction after subtracting completed military service from actual age."
        },
        {
            "question": "How does the SSC live webcam photograph capture system work on the new portal?",
            "answer": "Under the revamped SSC portal (ssc.gov.in) and the official MySSC mobile application, candidates do not upload a pre-scanned photo file. Instead, the portal activates the device camera to capture a live photograph. The candidate must look straight into the camera, ensuring their face fills approximately 80% of the frame against a plain, light-colored background. Adequate frontal lighting is required without shadows behind the ears. Candidates must remove spectacles, contact lenses with tint, caps, scarves, or headwear (except mandatory religious head coverings that do not obscure the facial perimeter from chin to forehead)."
        },
        {
            "question": "What is the exact signature specification and file size required for SSC CGL 2026?",
            "answer": "Candidates must upload a cropped digital scan of their handwritten signature. Specifications: dimensions must measure exactly 140 pixels in width by 60 pixels in height (aspect ratio ~4.0 cm × 2.0 cm at 200 DPI). The file size must fall strictly between 10.0 KB and 20.0 KB in JPG or JPEG format. The signature must be penned in black ballpoint ink on clean, unruled white paper. Signatures written in capital/block letters, illegible smudged marks, or signatures displaying dark grey scanner shadows are flagged by automated scrutiny and cause immediate rejection."
        },
        {
            "question": "Does the Tier-1 examination score count towards the final SSC CGL 2026 merit ranking?",
            "answer": "No. Tier-1 is purely a qualifying screening test. Its score is utilized exclusively to shortlist candidates for Tier-2 examination at an approximate vacancy multiple of 1:10 to 1:12 across categories. The all-India final merit list, cadre ranking, and ministerial post allocation are formulated 100% on the aggregate score obtained in Tier-2 (Paper-I: Sections 1 and 2), provided the candidate clears the minimum qualifying cut-offs in the Computer Knowledge Test (CKT) and the Data Entry Speed Test (DEST)."
        },
        {
            "question": "What is the Tier-1 exam pattern and negative marking penalty?",
            "answer": "Tier-1 consists of 100 multiple-choice questions carrying 200 marks, scheduled for 60 minutes (80 minutes for eligible scribe-using PwD candidates). The exam comprises four equal sections: General Intelligence & Reasoning (25 Qs / 50 Marks), General Awareness (25 Qs / 50 Marks), Quantitative Aptitude (25 Qs / 50 Marks), and English Comprehension (25 Qs / 50 Marks). A negative marking deduction of 0.50 marks (25%) is penalized for every incorrect answer. Unattempted questions incur no mark penalty."
        },
        {
            "question": "How should candidates structure their post preferences for SSC CGL 2026?",
            "answer": "Post preferences are submitted online prior to Tier-2 or during the Option-cum-Preference window. Candidates should evaluate three parameters: career growth vs posting location. Aspirants seeking home-state or Delhi postings typically prioritize ASO in Central Secretariat Service (CSS), Ministry of External Affairs (MEA), or AFHQ. Those prioritizing field enforcement, authority, and grade pay prioritize Inspector of Income Tax (ITI), Central Excise Inspector, Preventive Officer, or Sub-Inspector in the Central Bureau of Investigation (CBI). For desk-bound roles with minimal transfers, Auditor (CAG/CGDA) and Division Accountant are popular."
        },
        {
            "question": "What is the application fee, and who is eligible for a full fee exemption?",
            "answer": "The online registration fee is ₹100. However, female candidates of all categories, Scheduled Castes (SC), Scheduled Tribes (ST), Persons with Benchmark Disabilities (PwBD), and Ex-Servicemen (ESM) eligible for reservation are completely exempted from paying any fee. Fee payments can be made online via BHIM UPI, Net Banking, or Visa/Mastercard/RuPay credit or debit cards up to September 25, 2026 (23:00 Hrs)."
        },
        {
            "question": "Can I correct mistakes in my SSC CGL application during the correction window?",
            "answer": "Yes. SSC provides an official 'Window for Application Form Correction' from September 27 to September 29, 2026 (23:00 Hrs). During this 3-day window, candidates can modify demographic information, exam center choices, live photo, or scanned signature. SSC levies a uniform correction charge of ₹200 for the first modification, and ₹500 for a second resubmission. Only the data in the latest submitted application will be considered valid."
        },
        {
            "question": "What is the starting in-hand salary for SSC CGL Pay Level 7 and Pay Level 4 posts?",
            "answer": "Salary depends on Pay Level and city classification (Class X, Y, or Z). For Pay Level 7 posts (Inspector of Income Tax, Central Excise, ASO): Basic Pay is ₹44,900. With current Dearness Allowance (DA ~50%), House Rent Allowance (HRA 30% in Class X cities like Delhi/Mumbai), and Transport Allowance (TA ~₹4,950), gross monthly pay is ~₹85,000, yielding a net in-hand salary of approximately ₹73,000–₹78,000 after NPS and insurance deductions. For Pay Level 4 posts (Tax Assistant): Basic Pay is ₹25,500, with gross salary ~₹45,000 and net in-hand salary around ₹38,000–₹41,000 in Tier-1 metro cities."
        },
        {
            "question": "Can an average student clear SSC CGL 2026 on the first attempt with self-study?",
            "answer": "Yes. Thousands of candidates clear SSC CGL every year through disciplined self-study without expensive coaching. The blueprint to clear on the first attempt: (1) Master arithmetic and advanced maths fundamentals through NCERTs and standard books. (2) Build daily vocabulary and grammar rules for English Comprehension. (3) Solve 30+ full-length Tier-1 and Tier-2 mock tests with deep error analysis. (4) Maintain consistent 5–6 hours of focused daily study over 6 to 9 months."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC CGL 2026: Comprehensive Recruitment Overview &amp; Key Dates</h2>
        <p>Looking for the official <strong>SSC CGL 2026 eligibility criteria</strong>, <strong>SSC CGL live photo guidelines</strong>, and exact <strong>SSC CGL signature size 140x60</strong> specifications? With over <strong>17,727 vacancies</strong> announced by the Staff Selection Commission, this authoritative handbook provides everything you need to know to submit an error-free application on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">ssc.gov.in</a> and clear the Tier-1 computer-based examination.</p>
        
        <p>This massive recruitment drive fills coveted positions across India's premier central ministries, including Assistant Section Officer (ASO) in MEA, CSS, and IB, Inspector of Income Tax (ITI), Central Excise Inspector, and Sub-Inspector in the CBI. If you are also tracking other major recruitments, explore our comprehensive <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a> for active deadlines and application portals.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> SSC CGL 2026 Key Milestones &amp; Salary Matrix
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Pay Level 8 (AAO):</strong> ₹47,600 – ₹1,51,100 (In-hand ~₹75,000–₹85,000)</li>
            <li><strong>Pay Level 7 (ASO, Inspectors):</strong> ₹44,900 – ₹1,42,400 (In-hand ~₹68,000–₹78,000)</li>
            <li><strong>Pay Level 5/6 (Auditors, Div. Acct):</strong> ₹29,200 – ₹1,12,400 (In-hand ~₹45,000–₹58,000)</li>
            <li><strong>Pay Level 4 (Tax Assistant):</strong> ₹25,500 – ₹81,100 (In-hand ~₹38,000–₹46,000)</li>
          </ul>
        </div>
      </section>

      <section id="eligibility" class="space-y-4 mt-8">
        <h2>SSC CGL 2026 Eligibility Criteria &amp; Age Limits</h2>
        <p>Before filling out the One-Time Registration (OTR) form, ensure you satisfy the official eligibility benchmarks:</p>

        <h3>Educational Eligibility Criteria &amp; Final-Year Degree Rules</h3>
        <p>Candidates must hold a <strong>Bachelor's Degree</strong> in any discipline from a recognized University or Institute established under Central or State legislation. Final-year graduation students are eligible to apply provided their final degree results are formally declared by their University on or before the cut-off date specified in the SSC notification.</p>

        <h3>Category-Wise Age Limits &amp; Statutory Relaxations</h3>
        <p>The general age limit spans <strong>18 to 32 years</strong> depending on the specific post group. Age relaxations follow Central Government statutory norms:</p>
        <ul>
          <li><strong>OBC (Non-Creamy Layer):</strong> +3 years upper-age relaxation</li>
          <li><strong>SC / ST:</strong> +5 years upper-age relaxation</li>
          <li><strong>PwBD (Persons with Benchmark Disabilities):</strong> +10 years (+13 for OBC, +15 for SC/ST)</li>
          <li><strong>Ex-Servicemen (ESM):</strong> 3 years deduction after military service</li>
        </ul>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>SSC CGL 2026 Exam Pattern &amp; Tier-1 Scoring Scheme</h2>
        <p>Tier-1 is an online Computer Based Examination comprising 100 multiple-choice questions for 200 marks in a 60-minute session. Each wrong attempt carries a penalty deduction of <strong>0.50 marks (25%)</strong>.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Target Time</th>
                <th class="p-3 border-b">High-Yield Scoring Areas</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">General Intelligence &amp; Reasoning</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">14 min</td>
                <td class="p-3">Coding-Decoding, Number Analogies, Syllogisms, Paper Folding, Venn Diagrams</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Awareness</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">8 min</td>
                <td class="p-3">Polity Articles, Modern History, National Income, Last 6 Months PIB &amp; Current Affairs</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Quantitative Aptitude</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">26 min</td>
                <td class="p-3">Algebra Formulas, Geometry Circle Theorems, Trigonometry, DI, Profit &amp; Loss</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">English Comprehension</td>
                <td class="p-3 font-mono">25</td>
                <td class="p-3 font-mono">50</td>
                <td class="p-3 font-mono">12 min</td>
                <td class="p-3">Cloze Test, Idioms, Grammatical Error Spotting, One Word Substitution</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="flex items-center justify-between text-slate-400 text-[11px]">
            <span>⚡ Tier-1 Raw Score Formula &amp; Safe Cutoff Benchmarks</span>
            <span>SSC Standard Formula</span>
          </div>
          <pre class="overflow-x-auto text-emerald-400"><code>Net Raw Score = (Correct Attempts × 2.0) - (Incorrect Attempts × 0.50)
Target Safe Zone (UR/OBC): 76+ Attempts with 90% Accuracy → ~146–152 Net Raw Marks</code></pre>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>SSC CGL Live Photo Guidelines &amp; Signature Specifications</h2>
        <p>The updated application engine on <code>ssc.gov.in</code> rejects traditional scanned passport photos in favor of interactive live camera capture, while enforcing strict dimensions for scanned signatures.</p>

        <h3>SSC CGL Live Photo Guidelines: Camera &amp; Lighting Rules</h3>
        <ul>
          <li><strong>Live Capture Only:</strong> SSC does NOT accept uploaded image files for candidate photographs. You must use a live laptop webcam or smartphone camera via the MySSC application.</li>
          <li><strong>80% Face Frame Fill:</strong> The candidate's face (from forehead to chin and both ears) must occupy 80% of the live capture oval frame.</li>
          <li><strong>Zero Spectacles / Glare:</strong> Spectacles, reading glasses, sunglasses, hats, caps, and scarves are strictly prohibited during photo capture.</li>
          <li><strong>Light Background:</strong> Position yourself against a plain white or light-colored wall with bright frontal lighting to eliminate shadows behind the head.</li>
        </ul>

        <h3>SSC CGL Signature Size 140x60: Exact Dimensions &amp; KB Limits</h3>
        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Parameter</th>
                <th class="p-3 border-b">Official Specification</th>
                <th class="p-3 border-b">Compliance Standard</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Pixel Dimensions</td>
                <td class="p-3 font-mono font-bold">140 × 60 pixels</td>
                <td class="p-3">Aspect ratio ~4.0 cm width × 2.0 cm height at 200 DPI</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">File Size (KB)</td>
                <td class="p-3 font-mono font-bold">10.0 KB to 20.0 KB</td>
                <td class="p-3">Dual strict boundary (files &lt;10 KB or &gt;20 KB are auto-rejected)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">File Format</td>
                <td class="p-3 font-mono font-bold">JPG / JPEG only</td>
                <td class="p-3">PNG, PDF, or WebP files will not upload</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Ink &amp; Paper</td>
                <td class="p-3 font-mono font-bold">Black Ballpoint Pen</td>
                <td class="p-3">Unruled plain white paper (Blue ink/gel ink is rejected)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Handwriting Style</td>
                <td class="p-3 font-mono font-bold">Running Cursive Script</td>
                <td class="p-3 text-rose-600 dark:text-rose-400 font-bold">BLOCK / CAPITAL letters cause immediate disqualification</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-rose-500/10 border-2 border-rose-500/30 space-y-2">
          <h4 class="font-bold text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
            <span>⚠️</span> Reasons SSC Automatically Rejects CGL Applications
          </h4>
          <ul class="text-xs text-rose-900 dark:text-rose-200 space-y-1 list-disc pl-4">
            <li>Signing in <strong>BLOCK / CAPITAL letters</strong> (instant disqualification under Notification Clause 11.2).</li>
            <li>Uploading signatures below 10.0 KB or above 20.0 KB, or with blurred grey shadow backgrounds.</li>
            <li>Live photo captured with glasses, colored tints, backlighting, or tilted head posture.</li>
            <li>Mismatch between candidate name in Matriculation Certificate and Aadhaar / OTR profile.</li>
          </ul>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Resize Your SSC Signature in 10 Seconds</h4>
          <p class="text-sm text-muted-foreground">Don't risk portal rejection. Use our dedicated <a href="/ssc-signature-resize/" class="text-primary font-bold underline">SSC Signature Resizer Tool</a> to automatically crop to 140×60 px, whiten smartphone paper shadows, and compress within exact 10.0–20.0 KB limits. You can also format certificates with our <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a> or <a href="/compress-image-to-kb/" class="text-primary font-bold underline">Compress Image to 10-20 KB</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open SSC Signature Tool (140x60)</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>

      <section id="strategy" class="space-y-4 mt-8">
        <h2>High-Yield Preparation Strategy for Tier-1</h2>
        <p>To safely cross the expected Tier-1 cut-off of 145–150 marks, structure your remaining preparation time into three disciplined phases:</p>
        <ul class="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <li><strong>Phase 1 (Speed Calculation):</strong> Dedicate the first 45 minutes of each morning to multiplication drills, fraction-to-percentage tables, squares (1–50), and cubes (1–30) to eliminate calculation bottlenecks in Quantitative Aptitude.</li>
          <li><strong>Phase 2 (Topic Mastery &amp; PYQs):</strong> Solve the last 5 years of SSC CGL, CHSL, and CPO Tier-1 papers. Focus specifically on recent TCS question trends in English Comprehension and Reasoning syllogisms.</li>
          <li><strong>Phase 3 (Daily Full-Length CBE Mocks):</strong> Take one full 60-minute mock test at your exact examination shift timing (e.g. 9:00 AM or 12:30 PM). Spend twice the exam duration (120 minutes) analyzing negative marks and unattempted questions in an error logbook.</li>
        </ul>
      </section>
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SSC CGL 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "rrb-ntpc-2026-top-10-faq-complete-guide",
    title: "RRB NTPC 2026: Top 10 FAQs on Eligibility, RRB Zone Selection, Exam Pattern & Document Guidelines",
    metaTitle: "RRB NTPC 2026 FAQs: Photo Rules, CBT Cutoff & Pay Scale",
    metaDescription: "Official RRB NTPC 2026 FAQ guide: 35x45mm photo rules, CBT-1 & 2 exam pattern, Station Master cutoffs and medical standards. Resize documents online free!",
    excerpt: "Everything Railway aspirants must know for RRB NTPC 2026: single zone rule, graduate vs undergraduate posts, 35×45 mm photo rules, 10–20 KB signature specs, CBAT/TST typing tests, and normalization.",
    category: "Study Prep",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Railway Recruitment Strategy Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["RRB NTPC","Railway Recruitment","RRB Zone Rules","Signature 10-20KB","CBT-1 Blueprint","Typing Test"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [
        {
            "label": "Conducting Agency",
            "value": "Railway Recruitment Boards (RRBs)"
        },
        {
            "label": "Post Categories",
            "value": "Graduate (Levels 5-6) & Undergrad (Levels 2-3)"
        },
        {
            "label": "Application Last Date",
            "value": "October 15, 2026"
        },
        {
            "label": "Selection Stages",
            "value": "CBT-1 + CBT-2 + CBAT / Typing + DV"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd (0.33 marks) per wrong answer"
        },
        {
            "label": "Document Specs",
            "value": "35×45 mm Photo (20-50 KB) + Sign (10-20 KB)"
        }
    ],
    faqs: [
        {
            "question": "Can I apply for multiple RRB zones in RRB NTPC 2026?",
            "answer": "No. Candidates can select and apply to ONLY ONE regional Railway Recruitment Board (e.g. RRB Mumbai, RRB Allahabad, RRB Chennai, RRB Chandigarh, etc.). Applying to more than one RRB is treated as a fraudulent duplicate registration under Railway Recruitment rules, leading to instant disqualification of all submitted forms and a possible debarment from all future railway examinations for up to 3 years."
        },
        {
            "question": "Can a candidate apply for both Graduate and Undergraduate level posts?",
            "answer": "Yes, provided the candidate holds a recognized graduation degree. Such candidates are eligible to compete for both Graduate posts (Level 5 & 6) and Undergraduate posts (Level 2 & 3). However, the candidate submits only one unified application for their chosen RRB zone and registers their post preference order during registration. A single common CBT-1 is conducted; subsequently, separate CBT-2 examinations are held for each respective 7th CPC Pay Level."
        },
        {
            "question": "What is the shortlisting ratio from CBT-1 to CBT-2 in RRB NTPC?",
            "answer": "Candidates are shortlisted for CBT-2 at a ratio of 20 times (1:20) the community-wise vacancies for each post and Pay Level within the chosen RRB zone, based on their normalized percentile score in CBT-1. Because CBT-1 marks are normalized across multiple examination sessions, hitting a high accuracy rate with minimal negative marking is vital to qualify in the 1:20 bracket."
        },
        {
            "question": "What is the Computer Based Aptitude Test (CBAT) and who has to appear for it?",
            "answer": "CBAT (Aptitude Test) is mandatory only for candidates who have opted for the post of Station Master (Level 6) or Traffic Assistant (Level 4). Candidates are shortlisted for CBAT at a ratio of 8 times the vacancy count. The test consists of five battery modules (Intelligence Test, Selective Attention Test, Spatial Orientation, Information Ordering, and Personality Test). Candidates must score a minimum T-score of 42 marks in EACH test battery separately to qualify. In the final merit, CBAT carries 30% weightage, and CBT-2 carries 70% weightage."
        },
        {
            "question": "What are the rules and speed criteria for the Typing Skill Test (TST)?",
            "answer": "The Typing Skill Test is required for clerical posts: Senior Clerk-cum-Typist, Junior Accounts Assistant-cum-Typist, Senior Time Keeper (Level 5), and Junior Clerk-cum-Typist (Level 2). The typing test is qualifying in nature. Candidates must achieve a minimum speed of 30 words per minute (WPM) in English OR 25 words per minute in Hindi on a computer terminal. Editing tools, backspace, and spellcheck utilities are disabled during the test."
        },
        {
            "question": "What is the exact photograph specification for RRB online registration?",
            "answer": "Candidates must upload a recent clear color photograph taken within the last 3 months against a plain white or light-colored background. Dimensions must be 35 mm × 45 mm (approx. 320 × 240 pixels) with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format. The facial profile must occupy 75% of the frame. Photos taken wearing sunglasses, tinted spectacles, hats, or with backlighting are rejected."
        },
        {
            "question": "What are the signature specifications for RRB NTPC application upload?",
            "answer": "The signature must be penned on clean white unruled paper using a black ballpoint pen. Dimensions must measure 140 × 60 pixels (50 mm × 20 mm) with file size strictly between 10.0 KB and 20.0 KB in JPG or JPEG format. Signatures written in capital or block letters, signatures in blue or red ink, or images with visible grey scanner shadows are disqualified by RRB document verification filters."
        },
        {
            "question": "How does the RRB score normalization formula work in multi-session CBTs?",
            "answer": "Because RRB NTPC exams are conducted over dozens of days and multiple shifts, raw marks cannot be directly compared. RRB uses a mathematical Percentile Score Normalization method based on the mean and standard deviation of marks of all candidates across shifts. The normalized score reflects a candidate's relative percentile position compared to peers in their shift, ensuring no candidate is disadvantaged by an unusually difficult question paper."
        },
        {
            "question": "What are the strict medical fitness standards for Station Master and Goods Guard?",
            "answer": "Railway medical fitness standards are among the most stringent in public recruitment. Station Master requires Medical Standard A-2: distant vision must be 6/9, 6/9 without glasses (no glasses permitted, no refractive surgery/LASIK allowed), near vision Sn 0.6, 0.6, plus clearing tests for Color Vision, Binocular Vision, Field of Vision, and Night Vision. Goods Train Manager requires Medical Standard A-3: distant vision 6/9, 6/9 with or without glasses (power must not exceed 2D)."
        },
        {
            "question": "What is the starting salary and allowances for Station Master and Goods Guard?",
            "answer": "Station Master (Level 6) has a Basic Pay of ₹35,400. In Class X metro cities, with DA (~50%), HRA (30%), and Transport Allowance, the gross monthly salary is ~₹68,000–₹72,000. Goods Train Manager (Level 5) starts at Basic Pay of ₹29,200, but enjoys generous Running Allowances (Kilometre Allowance for train running duties ~₹4.50 to ₹5.50 per km), allowing monthly take-home earnings to frequently exceed ₹65,000–₹75,000."
        },
        {
            "question": "Can I clear RRB NTPC 2026 with 4 to 6 months of focused preparation?",
            "answer": "Yes, 4 to 6 months of structured preparation is more than enough to clear RRB NTPC. Since CBT-1 has no sectional time limits and questions are at matriculation/10+2 level difficulty, focus on maximizing speed and accuracy in Mathematics (30 Qs) and Reasoning (30 Qs) where you can easily score 50+ out of 60 marks. Dedicate 2 hours daily to General Awareness, NCERT General Science, and Railway current affairs."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>RRB NTPC 2026: Selection Architecture &amp; Vacancy Distribution</h2>
        <p>The Railway Recruitment Boards have released the master notification for <strong>Non-Technical Popular Categories (NTPC)</strong>. The drive recruits across Indian Railways for both Graduate posts (Station Master, Goods Train Manager, Senior Commercial-cum-Ticket Clerk, Senior Clerk-cum-Typist) and Undergraduate 12th-pass posts (Junior Clerk-cum-Typist, Accounts Clerk-cum-Typist, Commercial-cum-Ticket Clerk).</p>
        <p>Applying requires critical strategic choices, foremost among them being <strong>RRB Zone Selection</strong>. Candidates can apply to only ONE regional RRB board. Zone selection determines your competition pool, cutoff thresholds, and lifetime cadre posting jurisdiction.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> NTPC Post Hierarchy &amp; Medical Standards
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Station Master (Level 6):</strong> Basic ₹35,400 | Medical Category: <strong>A-2</strong> (Strict vision test, no spectacles permitted)</li>
            <li><strong>Goods Train Manager (Level 5):</strong> Basic ₹29,200 | Medical Category: <strong>A-3</strong></li>
            <li><strong>Sr. Clerk-cum-Typist (Level 5):</strong> Basic ₹29,200 | Medical Category: <strong>C-2</strong> (Typing skill mandatory)</li>
            <li><strong>Jr. Clerk-cum-Typist (Level 2):</strong> Basic ₹19,900 | Medical Category: <strong>C-2</strong> (12th Pass eligibility)</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>CBT-1 Examination Blueprint &amp; Marking Scheme</h2>
        <p>CBT-1 is a common preliminary screening stage for all posts, comprising 100 objective questions for 100 marks with a duration of 90 minutes (120 minutes for PwBD with scribe). Negative marking is strictly <strong>1/3rd (0.33 marks)</strong> per incorrect answer.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Subject Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Recommended Timing</th>
                <th class="p-3 border-b">Core Scoring Topics</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">General Awareness</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">25 min</td>
                <td class="p-3">Science (Physics, Chemistry, Bio), Indian Railways History, Modern India, Current Events</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Mathematics</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">35 min</td>
                <td class="p-3">Number Systems, LCM/HCF, Ratio, Percentages, Time &amp; Work, SI/CI, Mensuration</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Intelligence &amp; Reasoning</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30 min</td>
                <td class="p-3">Coding-Decoding, Mathematical Operations, Blood Relations, Syllogisms, Venn Diagrams</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-2">
          <div class="flex items-center justify-between text-slate-400 text-[11px]">
            <span>⚡ RRB Normalization &amp; Shortlist Formula</span>
            <span>Indian Railways Formula Standard</span>
          </div>
          <pre class="overflow-x-auto text-emerald-400"><code>Shortlisting Ratio for CBT-2 = 1:20 (20 times category-wise vacancies per level)
Percentile Normalization adjusts for difficulty variances across multi-day shifts.</code></pre>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Document Specifications: Photo &amp; Scanned Signature Rules</h2>
        <p>RRB application processing uses automated document rejection filters. Any deviation from the rigid 35×45 mm photo dimensions or 10–20 KB signature file weight results in application invalidation.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Document</th>
                <th class="p-3 border-b">Dimensions</th>
                <th class="p-3 border-b">File Size Bounds</th>
                <th class="p-3 border-b">Format &amp; Quality</th>
                <th class="p-3 border-b">Rejection Trigger</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Passport Photograph</td>
                <td class="p-3 font-mono">35 × 45 mm (320 × 240 px)</td>
                <td class="p-3 font-mono">20.0 KB to 50.0 KB</td>
                <td class="p-3">JPG / JPEG, light background</td>
                <td class="p-3">Tinted spectacles, caps, selfies, photos older than 3 months</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Candidate Signature</td>
                <td class="p-3 font-mono">140 × 60 px (50 × 20 mm)</td>
                <td class="p-3 font-mono">10.0 KB to 20.0 KB</td>
                <td class="p-3">JPG / JPEG, Black ink</td>
                <td class="p-3">Capital/block letters, blue ink, paper shadows, size &lt;10 KB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Prepare Your RRB Documents Instantly</h4>
          <p class="text-sm text-muted-foreground mt-1">Our dedicated RRB preset crops to official 140×60 px, whitens scanner shadows, and compresses strictly into 10–20 KB bounds.</p>
          <a href="/rrb-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open RRB Resizer Tool &rarr;</a>
        </div>
      </section>

      <section id="strategy" class="space-y-4 mt-8">
        <h2>High-Yield Preparation Blueprint for CBT-1</h2>
        <p>In RRB NTPC, General Awareness accounts for 40% of the entire paper. Focus on high-yield General Science topics (NCERT 9th &amp; 10th Physics formulas, Chemistry reactions, and Human Biology) alongside Railway static trivia. Practice 30 timed Mathematics drills daily using speed shortcuts for LCM, Time &amp; Work, and Mensuration.</p>
      </section>
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RRB NTPC 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ibps-po-2026-top-10-faq-banking-aspirants",
    title: "IBPS PO 2026: Top 10 FAQs on Eligibility, Handwritten Declaration, Left Thumb & Cutoffs",
    metaTitle: "IBPS PO 2026 FAQs: Handwritten Text, Thumb & Photo Rules",
    metaDescription: "Official IBPS PO 2026 FAQ guide: handwritten declaration text, left thumb impression specs, 140x60 sign rules & Prelims cutoffs. Resize documents online free!",
    excerpt: "Authoritative candidate handbook for IBPS PO 2026: exact handwritten declaration text, black ink rules, left thumb impression guidelines, sectional cutoff strategy, and 80:20 final merit ratio.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Banking Personnel Research Team",
    readTime: "8 min read",
    featured: false,
    tags: ["IBPS PO 2026","Bank Exam","Handwritten Declaration","Thumb Impression","Prelims Cutoff","Banking Career"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Institute of Banking Personnel Selection (IBPS)"
        },
        {
            "label": "Participating Banks",
            "value": "11 Public Sector Banks (PNB, BoB, Canara, etc.)"
        },
        {
            "label": "Application Last Date",
            "value": "October 20, 2026"
        },
        {
            "label": "Selection Stages",
            "value": "Prelims + Mains + Personal Interview"
        },
        {
            "label": "Final Merit Weight",
            "value": "80% Mains Score + 20% Interview Score"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50KB), Sign (10-20KB), Thumb (20-50KB), Declaration (50-100KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the exact text to write for the IBPS PO Handwritten Declaration?",
            "answer": "The text of the handwritten declaration must be penned strictly in English on plain white paper using black ballpoint ink. The verbatim text is: 'I, _______ (Name of the candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.' Writing in capital/block letters, typing the text, or having another person write it causes immediate application cancellation."
        },
        {
            "question": "What ink color is mandatory for the IBPS signature and declaration?",
            "answer": "IBPS explicitly mandates BLACK ballpoint ink for both the Candidate Signature and the Handwritten Declaration. Uploading signatures in blue, green, or red ink, or using gel pens that bleed through the paper, is a direct violation of Notification Annexure II and results in application rejection. For the Left Thumb Impression, either blue or black ink is permissible."
        },
        {
            "question": "What should a candidate do if their left thumb is injured or missing?",
            "answer": "If a candidate does not have a left thumb, they may use their right thumb impression. If both thumbs are missing, the impression of one of the fingers of the left hand (starting from index finger) can be used. If no fingers are available on the left hand, right hand fingers can be used. The candidate must clearly state the specific finger used on the application form and in the uploaded document title."
        },
        {
            "question": "How do sectional timers and sectional cut-offs operate in IBPS PO Prelims?",
            "answer": "IBPS PO Prelims has 100 questions divided into three sections: English Language (30 Qs), Quantitative Aptitude (35 Qs), and Reasoning Ability (35 Qs). Each section is locked with a strict 20-minute countdown timer. You cannot navigate between sections or switch before the 20 minutes expire. Candidates must qualify in each of the three sections individually by securing minimum cut-off marks decided by IBPS, in addition to clearing the overall aggregate cutoff."
        },
        {
            "question": "What is the final merit list calculation ratio between Mains and Interview?",
            "answer": "Prelims marks are purely qualifying and are NOT added to the final score. The final merit ranking is calculated using a combined score of Mains Examination and Personal Interview in an 80:20 ratio. The Mains score (out of 225 marks) is converted to a weightage out of 80, while the Interview score (out of 100 marks, minimum qualifying 40%) is converted to a weightage out of 20."
        },
        {
            "question": "How should candidates select their bank preferences in the online application?",
            "answer": "Bank preference cannot be altered after final submission. Candidates should prioritize public sector banks based on vacancy numbers, headquarter location, transfer policies, and financial health (Prompt Corrective Action status). Top preferences typically include: Bank of Baroda, Punjab National Bank, Canara Bank, and Union Bank of India. Even if a bank currently shows 'Not Reported' (NR) vacancies, rank them based on personal preference, as NR banks frequently add vacancies during final allotment."
        },
        {
            "question": "What is the educational qualification cutoff date and percentage criteria?",
            "answer": "Candidates must possess a Bachelor's Degree in any discipline from a recognized University. Unlike past years, there is NO minimum percentage requirement (even 50% or passing division is eligible). However, the degree result must have been officially declared on or before the crucial closing date of online registration. Candidates must input their exact graduation marks percentage rounded to two decimal places (e.g. 59.99% cannot be rounded to 60.00%)."
        },
        {
            "question": "What is the financial year validity required for OBC-NCL and EWS certificates?",
            "answer": "For OBC (Non-Creamy Layer) candidates, the certificate must be issued based on the income of the previous financial year and must clearly state non-creamy layer status. For EWS candidates, the Income and Asset Certificate must be valid for the current financial year based on gross annual family income of the preceding financial year. Certificates issued under State Government format that do not conform to Central Government format are rejected during document verification."
        },
        {
            "question": "What is the structure of the descriptive English paper in IBPS PO Mains?",
            "answer": "Immediately following the objective test in Mains, candidates take a 30-minute online English Language Descriptive Test (Letter Writing & Essay) carrying 25 marks. The test must be typed on a computer keyboard. The descriptive paper is evaluated only for candidates who clear the objective test sectional and aggregate cut-offs. Qualifying marks in Descriptive English are mandatory for shortlisting to the interview."
        },
        {
            "question": "What is the starting monthly in-hand salary and perks for an IBPS PO?",
            "answer": "Under the 12th Bipartite Wage Settlement, the starting Basic Pay of a Scale-I Probationary Officer is ₹36,000 (with 4 advance increments for POs). Including Dearness Allowance (~50%), House Rent Allowance (or leased accommodation up to ₹25,000–₹30,000 in Mumbai), City Compensatory Allowance, and Special Allowance, gross pay is approximately ₹65,000–₹72,000. Net in-hand monthly salary ranges between ₹55,000 and ₹62,000 alongside reimbursement for petrol, newspaper, and medical benefits."
        },
        {
            "question": "Can a beginner or working aspirant clear IBPS PO 2026 without coaching?",
            "answer": "Yes. Banking exams test speed, accuracy, and question selection rather than memorization. Beginners can crack IBPS PO in 4–5 months by: (1) Mastering Vedic maths, tables up to 30, and percentage fraction equivalents for speedy Quantitative calculations. (2) Solving 4–5 high-level puzzle sets daily for Reasoning. (3) Reading an editorial daily for English and Descriptive Paper. (4) Taking 2 timed sectional tests daily."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>IBPS PO 2026: Public Sector Banking Career Gateway</h2>
        <p>The Institute of Banking Personnel Selection conducts the common recruitment process for Probationary Officers and Management Trainees across 11 major Public Sector Banks across India. The PO role offers high prestige, swift promotion ladders to Executive Director/CMD levels, and generous banking allowances.</p>
        <p>Banking application forms demand four distinct digital uploads: Passport Photograph, Scanned Signature, Left Thumb Impression (LTI), and a mandatory Handwritten Declaration penned by the candidate personally. Any discrepancy in declaration wording or ink color leads to cancellation.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> Participating Public Sector Banks &amp; Career Ladder
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Premier Banks:</strong> Punjab National Bank, Bank of Baroda, Canara Bank, Union Bank of India</li>
            <li><strong>Scale I Officer (PO):</strong> Basic ₹36,000 – ₹48,480 (Gross ~₹65,000–₹72,000)</li>
            <li><strong>Scale II (Manager):</strong> Attainable within 3–4 years through internal fast-track promotion channels</li>
            <li><strong>Key Perks:</strong> Leased accommodation (up to ₹30,000 in Mumbai), petrol allowance, medical coverage</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Prelims &amp; Mains Examination Pattern &amp; Sectional Cutoffs</h2>
        <p>Unlike many central exams, IBPS enforces <strong>both Sectional Cut-offs and Overall Cut-offs</strong> in both Prelims and Mains. Failing in even one section (e.g. English by 0.25 marks) disqualifies the candidate despite high overall scores.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Prelims Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Sectional Time</th>
                <th class="p-3 border-b">Typical Sectional Cutoff (UR)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">English Language</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">20 min (locked)</td>
                <td class="p-3 font-mono">8.50 – 11.00 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Quantitative Aptitude</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min (locked)</td>
                <td class="p-3 font-mono">8.00 – 10.50 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Reasoning Ability</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min (locked)</td>
                <td class="p-3 font-mono">9.50 – 12.00 Marks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Document Upload Rules: Photo, Signature, Thumb &amp; Declaration</h2>
        <p>IBPS mandates four uploaded documents with precise size and color requirements:</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Upload Element</th>
                <th class="p-3 border-b">Pixel Dimensions</th>
                <th class="p-3 border-b">File Weight</th>
                <th class="p-3 border-b">Ink / Format Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Passport Photograph</td>
                <td class="p-3 font-mono">200 × 230 px</td>
                <td class="p-3 font-mono">20 KB – 50 KB</td>
                <td class="p-3">Color, white background, light clothes</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Scanned Signature</td>
                <td class="p-3 font-mono">140 × 60 px</td>
                <td class="p-3 font-mono">10 KB – 20 KB</td>
                <td class="p-3"><strong>Black ink only</strong> (Blue ink rejected)</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Left Thumb Impression</td>
                <td class="p-3 font-mono">240 × 240 px (3×3 cm)</td>
                <td class="p-3 font-mono">20 KB – 50 KB</td>
                <td class="p-3">Blue or Black ink pad on white paper</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Handwritten Declaration</td>
                <td class="p-3 font-mono">800 × 400 px</td>
                <td class="p-3 font-mono">50 KB – 100 KB</td>
                <td class="p-3"><strong>Black ink only</strong>, candidate's own hand</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Prepare All 4 IBPS Documents in 1 Minute</h4>
          <p class="text-sm text-muted-foreground mt-1">Our IBPS / SBI preset handles 10-20KB signatures, 20-50KB thumb impressions, and 50-100KB declaration documents in your browser.</p>
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Open IBPS Resizer Tool &rarr;</a>
        </div>
      </section>
    
<h2 id="strategy">IBPS PO 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your IBPS PO 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "sbi-clerk-2026-top-10-faq-junior-associates",
    title: "SBI Clerk 2026: Top 10 FAQs on Eligibility, State Selection, LPT & No-Sectional Cutoff Rules",
    metaTitle: "SBI Clerk 2026 FAQs: State Vacancy, LPT & Photo Rules",
    metaDescription: "Official SBI Clerk 2026 guide: State vacancy rules, Language Proficiency Test (LPT), Prelims pattern & photo/sign guidelines. Resize documents online free!",
    excerpt: "Everything candidates ask about SBI Junior Associates: single-state application rule, Local Language Test (LPT) conditions, the unique no-sectional-cutoffs policy, and career progression to Officer.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Banking Recruitment Strategy Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["SBI Clerk 2026","Junior Associate","LPT Test","No Sectional Cutoff","State Vacancy Rules","Bank Jobs"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "State Bank of India (SBI)"
        },
        {
            "label": "Designation",
            "value": "Junior Associate (Customer Support & Sales)"
        },
        {
            "label": "Selection Stages",
            "value": "Prelims + Mains + Local Language Test (LPT)"
        },
        {
            "label": "Sectional Cut-offs",
            "value": "NONE (Aggregate Marks Only)"
        },
        {
            "label": "State Selection",
            "value": "Strictly ONE State / UT only"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50 KB) + Signature (10-20 KB)"
        }
    ],
    faqs: [
        {
            "question": "Can an aspirant apply for SBI Clerk vacancies across multiple states?",
            "answer": "No. A candidate can apply for vacancies in only ONE State / Union Territory. There is no provision to apply for more than one circle. If a candidate submits multiple applications for different states, only the latest valid application registered with fee payment is considered, and all prior submissions are nullified."
        },
        {
            "question": "What is the Local Language Test (LPT) and who is exempted from taking it?",
            "answer": "Candidates shortlisted for final selection must demonstrate proficiency (reading, writing, speaking, and understanding) in the specified local language of the State/UT they applied for. The Local Language Test is conducted before joining. However, candidates who produce 10th or 12th standard mark sheets or certificates indicating they studied the local language as an official subject are completely exempted from the LPT."
        },
        {
            "question": "Is it true that SBI Clerk has no sectional cutoff marks?",
            "answer": "Yes, this is completely true. Unlike IBPS PO, IBPS Clerk, and SBI PO, the State Bank of India does NOT enforce minimum qualifying marks for individual sections in either the Preliminary or Mains Examination. Candidates are shortlisted purely on their overall aggregate score, subject to qualifying the minimum aggregate benchmark determined by the Bank."
        },
        {
            "question": "Can an SBI Junior Associate transfer to another state or circle after joining?",
            "answer": "Under the current SBI service policy, Junior Associates are not eligible for inter-circle transfer (transfer to another state or circle) until completing 5 years of service for female candidates and 8 years for male candidates, except on extraordinary medical or compassionate grounds. Candidates must carefully choose their application state, as they will spend the majority of their early banking career in that circle."
        },
        {
            "question": "What is the age limit and educational qualification for SBI Clerk 2026?",
            "answer": "Candidates must be between 20 and 28 years of age. Standard statutory age relaxations apply: SC/ST candidates get +5 years (up to 33), OBC candidates get +3 years (up to 31), and PwBD candidates get +10 to +15 years. Candidates must possess a Graduation degree in any discipline from a recognized University. Final year students are eligible provided they produce proof of having passed the graduation examination on or before the cutoff date."
        },
        {
            "question": "What is the exam pattern for SBI Clerk Mains examination?",
            "answer": "SBI Clerk Mains consists of 190 questions carrying 200 marks, with a duration of 2 hours and 40 minutes across four sections: General/Financial Awareness (50 Qs / 50 Marks / 35 min), General English (40 Qs / 40 Marks / 35 min), Quantitative Aptitude (50 Qs / 50 Marks / 45 min), and Reasoning Ability & Computer Aptitude (50 Qs / 60 Marks / 45 min). Each wrong answer incurs a 1/4th mark deduction."
        },
        {
            "question": "What is the SBI Clerk waitlist policy and how many candidates are empaneled?",
            "answer": "SBI maintains a reserve waitlist of up to 50% of the total declared state-wise vacancies. The waitlist is released in quarterly tranches over a period of one year from the date of final result declaration. Candidates who marginally miss the final state cutoff often secure appointments as non-joining candidates create vacant positions."
        },
        {
            "question": "What are the photo and signature upload requirements for SBI Clerk?",
            "answer": "The candidate's photograph must be a clear 200 × 230 pixel color image on white background, with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG. The signature must measure 140 × 60 pixels, strictly between 10.0 KB and 20.0 KB in JPG/JPEG, penned in black ballpoint ink on white paper. Capital letter signatures are strictly prohibited."
        },
        {
            "question": "What is the starting monthly in-hand salary for an SBI Junior Associate?",
            "answer": "Under the 12th Bipartite Wage Settlement, the starting Basic Pay of a Junior Associate is ₹19,900 (with 2 advance increments for graduates, starting Basic ₹20,900). With DA, Special Allowance, Transport Allowance, and HRA, gross pay is ~₹39,000–₹42,000. In-hand net salary ranges between ₹34,000 and ₹38,000 per month depending on city classification."
        },
        {
            "question": "What is the internal promotion path from SBI Clerk to Officer?",
            "answer": "SBI offers rapid internal career promotion channels. After 3 years of service as a Junior Associate, employees can appear for internal written examinations and interviews for promotion to Trainee Officer (JMGS Scale-I), which puts them on par with directly recruited Probationary Officers. Alternatively, after 4 years, candidates can qualify for promotion to Junior Management Grade Scale-I via the JMGS-I internal fast-track channel."
        },
        {
            "question": "Can an average graduate student clear SBI Clerk 2026 in 90 days?",
            "answer": "Yes. SBI Clerk has zero sectional cutoffs in Prelims and Mains, allowing candidates to capitalize on their strongest sections. With 90 days of dedicated 6-hour daily study, complete the basic syllabus in the first 45 days and spend the remaining 45 days attempting one full Prelims mock test daily and solving 50 puzzle and arithmetic questions."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SBI Clerk (Junior Associate) 2026: Selection System &amp; Job Profile</h2>
        <p>State Bank of India recruits thousands of <strong>Junior Associates (Customer Support &amp; Sales)</strong> annually across its nationwide network. Unlike IBPS clerical cadres, SBI Clerks operate under state-specific vacancies and cannot transfer outside their assigned Circle for at least 5 to 8 years.</p>
        <p>A signature feature of the SBI recruitment process is the complete <strong>absence of sectional cutoffs</strong>: candidates qualify solely on overall aggregate marks, providing a massive advantage to candidates with specialized strengths.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> SBI Junior Associate Key Career Highlights
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Starting In-Hand Salary:</strong> ~₹34,000 – ₹38,000 in metro cities</li>
            <li><strong>Promotion Opportunity:</strong> Eligible for Trainee Officer (JMGS-I) internal examination after 3 years</li>
            <li><strong>Work-Life Balance:</strong> Regular branch working hours without frequent transfer dislocation</li>
            <li><strong>Medical &amp; Travel:</strong> 100% medical reimbursement for self and dependent family, LFC allowance</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Prelims &amp; Mains Examination Pattern: Aggregate Scoring Advantage</h2>
        <p>SBI does not maintain minimum sectional cut-offs in either Prelims or Mains. If a candidate scores low in English but dominates Quantitative Aptitude and Reasoning, their high aggregate score qualifies them for Mains.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Prelims Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Sectional Time</th>
                <th class="p-3 border-b">Scoring Rule</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">English Language</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">30</td>
                <td class="p-3 font-mono">20 min</td>
                <td class="p-3">0.25 negative marking per error</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Numerical Ability</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min</td>
                <td class="p-3">Simplification, Number Series, Arithmetic</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Reasoning Ability</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">35</td>
                <td class="p-3 font-mono">20 min</td>
                <td class="p-3">Puzzles, Seating Arrangements, Syllogisms</td>
              </tr>
              <tr class="bg-muted/30 font-bold">
                <td class="p-3">Total / Composite</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">60 min</td>
                <td class="p-3 text-emerald-600 dark:text-emerald-400">NO Sectional Cut-off</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Document Specifications for SBI Clerk Portal</h2>
        <p>SBI adheres strictly to IBPS portal digital standards: <strong>Photo: 20–50 KB (200×230 px)</strong>, <strong>Signature: 10–20 KB (140×60 px in black ink)</strong>. Signatures in capital letters are disqualified immediately.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
          <h4 class="text-base font-bold text-foreground">Resize Your SBI Clerk Photo &amp; Signature</h4>
          <p class="text-sm text-muted-foreground mt-1">Ensure 100% compliance with SBI portal file boundaries using our instant client-side resizer tool.</p>
          <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">Launch SBI Resizer Preset &rarr;</a>
        </div>
      </section>
    
<h2 id="strategy">SBI Clerk 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SBI Clerk 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "upsc-cds-nda-2026-top-10-faq-defence-guide",
    title: "UPSC CDS & NDA II 2026: Top 10 FAQs on Eligibility, OTR Photo Rules, SSB Procedure & Medical Standards",
    metaTitle: "UPSC CDS, NDA 2026: Photo Rules, SSB & Eligibility FAQs",
    metaDescription: "Official UPSC CDS and NDA II 2026 guide: OTR 10-day photo rules, SSB interview process, medical standards and top FAQs. Resize defense documents online free!",
    excerpt: "Complete candidate defense guide for UPSC CDS & NDA II: OTR 10-day-old photograph rule, visual acuity/spectacles standards, 5-day SSB interview protocol, and female candidate eligibility.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Defence Services Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["UPSC CDS 2026","NDA 2026","UPSC OTR Photo Rules","SSB Interview Process","UPSC Defence Eligibility","Visual Acuity Standards"],
    relatedExamPreset: "upsc-civil-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Union Public Service Commission (UPSC)"
        },
        {
            "label": "Target Academies",
            "value": "IMA, INA, AFA, OTA (CDS) & NDA Khadakwasla"
        },
        {
            "label": "Selection Stages",
            "value": "Written Exam + 5-Day SSB + Medical Board"
        },
        {
            "label": "Photo Rule",
            "value": "OTR 10-Day Recency with Printed Name & Date"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd (0.33 marks) per incorrect answer"
        },
        {
            "label": "Gender Eligibility",
            "value": "Both Male & Female Unmarried Candidates"
        }
    ],
    faqs: [
        {
            "question": "What is the UPSC 10-day-old photo rule with name and date?",
            "answer": "Under revised UPSC guidelines, the uploaded photograph must not be more than 10 days old from the date of online application submission. Furthermore, the candidate's name (matching matriculation certificate) and the exact date on which the photograph was clicked must be legibly printed in bold text at the bottom of the photograph against a white strip. Uploading older photos or photos lacking this imprinted metadata will lead to application cancellation."
        },
        {
            "question": "What are the age limits and educational criteria for CDS entries?",
            "answer": "For Indian Military Academy (IMA): 19 to 24 years, Bachelor's degree in any discipline. For Indian Naval Academy (INA): 19 to 24 years, Engineering degree (B.E./B.Tech). For Air Force Academy (AFA): 20 to 24 years (up to 26 for Commercial Pilot License holders), Degree in Engineering or Graduation with Physics and Mathematics at 10+2 level. For Officers Training Academy (OTA): 19 to 25 years, Degree in any discipline. Candidates must be unmarried."
        },
        {
            "question": "Are female candidates eligible for UPSC CDS and NDA II?",
            "answer": "Yes, female candidates are fully eligible for both examinations. In CDS, women candidates compete for admission to the Officers Training Academy (OTA Chennai) for Short Service Commission (Non-Technical) courses. In NDA, female candidates are admitted across all three wings (Army, Navy, and Air Force) on an equal footing with male cadets following Supreme Court directives."
        },
        {
            "question": "What is the written exam pattern differences between IMA/INA/AFA and OTA?",
            "answer": "For IMA, INA, and AFA, the exam has three distinct papers: English (100 Marks, 2 Hours), General Knowledge (100 Marks, 2 Hours), and Elementary Mathematics (100 Marks, 2 Hours), totaling 300 marks. For OTA Chennai, there is NO Mathematics paper: candidates appear only for English (100 Marks) and General Knowledge (100 Marks), totaling 200 marks. Candidates must score at least 20% qualifying marks in each individual paper."
        },
        {
            "question": "What are the visual acuity, spectacles, and LASIK standards for Defence?",
            "answer": "For Army (IMA/OTA): Distant vision uncorrected 6/36 in both eyes, correctable with glasses to 6/6 (better eye) and 6/9 (worse eye). Myopia must not exceed -3.50D and Hypermetropia +2.50D. For Air Force (AFA): Distant vision 6/6 in one eye and 6/9 in other, correctable to 6/6 (Myopia -0.75D, Hypermetropia +1.5D). LASIK surgery is permitted only for candidates above 20 years of age with specific corneal thickness and stability criteria, but is completely disqualified for NDA flying branch entries."
        },
        {
            "question": "What is the 5-day Services Selection Board (SSB) interview procedure?",
            "answer": "The 5-day SSB interview tests Officer Like Qualities (OLQs): Day 1 (Screening Test: Officer Intelligence Rating OIR & Picture Perception & Discussion Test PPDT; screened-out candidates return home). Day 2 (Psychological Tests: TAT, WAT, SRT, and Self Description). Day 3 & 4 (Group Testing Officer GTO tasks: Group Discussion, Progressive Group Task, Military Planning Exercise, Snake Race, Command Task). Day 5 (Final Board Conference). Personal Interviews are conducted across Days 2 to 4."
        },
        {
            "question": "What is the negative marking deduction rule in UPSC CDS?",
            "answer": "Each question carries multiple choices with 1/3rd (0.33) negative marking penalty for incorrect responses. In English and GK, where 120 questions carry 100 marks (each question = 0.833 marks), the penalty for a wrong answer is 0.277 marks. In Mathematics, where 100 questions carry 100 marks (each = 1 mark), a wrong answer penalizes 0.33 marks. Unattempted questions carry zero penalty."
        },
        {
            "question": "What medical conditions lead to permanent rejection during defence medicals?",
            "answer": "Common grounds for permanent medical rejection include: Knock Knees (inter-malleolar distance > 5 cm), Flat Foot, Severe Varicose Veins, Cubitus Valgus (carrying angle > 15° for males, > 18° for females), Color Blindness (for Flying/Navy), Deviated Nasal Septum (DNS) causing obstruction, Chronic Otitis Media, and unauthorized permanent Tattoos (tattoos on inner forearm or dorsum of hand only are permitted under strict cultural rules)."
        },
        {
            "question": "What is the training duration and monthly stipend at IMA, AFA, and OTA?",
            "answer": "At IMA Dehradun, training is 18 months for direct entries; at INA Ezhimala, 18 months; at AFA Dundigal, 74 weeks; and at OTA Chennai, 49 weeks. During the training period, Gentleman and Lady Cadets receive a fixed monthly stipend of ₹56,100 (starting Pay Level 10 of Lieutenant). Upon successful commissioning, arrears of allowances are disbursed."
        },
        {
            "question": "What is the starting salary and allowances of a newly commissioned Lieutenant?",
            "answer": "A newly commissioned Lieutenant (Army), Sub-Lieutenant (Navy), or Flying Officer (Air Force) starts at Pay Level 10 with Basic Pay of ₹56,100. Adding Military Service Pay (MSP ₹15,500), Dearness Allowance (~50%), High Altitude or Field Area allowances (ranging from ₹10,500 to ₹42,500 in Siachen/High Altitude), and Flying Allowance (for pilots ₹25,000), gross pay easily ranges between ₹1,05,000 and ₹1,35,000 per month."
        },
        {
            "question": "Can I clear UPSC CDS & NDA II 2026 on my first attempt?",
            "answer": "Yes, hundreds of cadets join IMA, AFA, INA, and NDA on their very first attempt. The written examination tests standard Class 10th to 12th fundamentals. Pair 4 hours of academic study (English grammar, NCERT Science/Polity/History, and Elementary Mathematics) with daily physical fitness (running 3 km, pushups, pull-ups) and newspaper analysis for the 5-Day SSB Interview."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UPSC Combined Defence Services (CDS) &amp; NDA: Pathways to Commissioned Ranks</h2>
        <p>Looking for the official <strong>UPSC CDS 2026 eligibility criteria</strong>, <strong>UPSC OTR photo rules</strong>, and exact <strong>SSB interview guidelines</strong>? With hundreds of commissioned officer vacancies across the Indian Armed Forces, this comprehensive candidate handbook breaks down everything you need to know about applying on <a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">upsconline.nic.in</a> and succeeding at the Services Selection Board (SSB).</p>
        
        <p>The Union Public Service Commission conducts CDS and NDA to train young officers for the Indian Army, Indian Navy, and Indian Air Force. If you are preparing documents for other competitive recruitments, explore our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> Defence Academies &amp; Commission Types
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>IMA Dehradun (CDS):</strong> Permanent Commission (Army) | Age: 19–24 | Degree in any discipline</li>
            <li><strong>INA Ezhimala (CDS):</strong> Permanent Commission (Navy) | Age: 19–24 | Engineering Degree</li>
            <li><strong>AFA Dundigal (CDS):</strong> Permanent Commission (Air Force) | Age: 20–24 | Degree with Physics &amp; Maths</li>
            <li><strong>OTA Chennai (CDS):</strong> Short Service Commission (Army) | Age: 19–25 | Male &amp; Female candidates</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Written Examination Blueprint &amp; Marking Scheme</h2>
        <p>For IMA, INA, and AFA, the examination comprises three 2-hour papers (English, General Knowledge, Elementary Mathematics) carrying 100 marks each (300 total). For OTA, candidates appear ONLY for English and General Knowledge (200 total marks). Negative marking is <strong>1/3rd (0.33 marks)</strong>.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Subject Paper</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Duration</th>
                <th class="p-3 border-b">Qualifying Benchmark</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">English</td>
                <td class="p-3 font-mono">120</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">Min 20% Sectional Cutoff</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Knowledge</td>
                <td class="p-3 font-mono">120</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">Min 20% Sectional Cutoff</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Elementary Mathematics (Not for OTA)</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">100</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">Min 20% Sectional Cutoff</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>UPSC OTR Document Upload Rules: 10-Day Photo &amp; Signature Standards</h2>
        <p>UPSC enforces strict digital scrutiny on its One Time Registration (OTR) portal. Deviation from the 10-day recency rule results in application cancellation.</p>

        <h3>UPSC OTR Photograph Rules: Name &amp; Date Imprint</h3>
        <ul>
          <li><strong>10-Day Recency:</strong> The photo must be captured within 10 days of online form submission.</li>
          <li><strong>Printed Name &amp; Date:</strong> Candidate's full name and the exact photo capture date must be printed in bold at the bottom.</li>
          <li><strong>File Boundaries:</strong> Square 1:1 aspect ratio (350×350 to 1000×1000 px), 20 KB to 300 KB JPG.</li>
        </ul>

        <h3>UPSC Scanned Signature Specifications</h3>
        <ul>
          <li><strong>Black Ballpoint Ink:</strong> Signed on clean white unruled paper.</li>
          <li><strong>Square Aspect Ratio:</strong> 350×350 to 1000×1000 pixels with file size between 20 KB and 300 KB.</li>
        </ul>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare UPSC Defense Documents Instantly</h4>
          <p class="text-sm text-muted-foreground">Format your photo with name/date imprint and resize signatures to 20-300 KB using our dedicated <a href="/upsc-signature-resize/" class="text-primary font-bold underline">UPSC Signature Resizer Tool</a> or <a href="/photo-resizer/" class="text-primary font-bold underline">Passport Photo Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/upsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open UPSC Resizer Preset</span>
              <span>&rarr;</span>
            </a>
            <a href="/document-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Government Document Resizer
            </a>
          </div>
        </div>
      </section>

      <section id="strategy" class="space-y-4 mt-8">
        <h2>SSB Interview Preparation &amp; Daily Routine</h2>
        <p>Written score gets you to the SSB, but Officer Like Qualities (OLQs) decide your recommendation. Dedicate daily time to newspaper editorial analysis, physical running (2.4 km in under 12 minutes), and group discussion public speaking practice.</p>
      </section>
    
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPSC CDS & NDA II 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "uppsc-ro-aro-2026-top-10-faq-aspirants",
    title: "UPPSC RO/ARO 2026: Top 10 FAQs on Exam Pattern, 'O' Level Equivalents & Typing Rules",
    metaTitle: "UPPSC RO/ARO 2026: O-Level, Typing, Prelims Pattern FAQs",
    metaDescription: "Official UPPSC RO/ARO 2026 guide: O-level equivalence, Hindi typing speed rules, General Hindi 60 marks strategy & top FAQs. Resize UPPSC photos online free!",
    excerpt: "Everything candidates need to know about UP Review Officer / Assistant Review Officer: 'O' Level diploma equivalence, Hindi typing tests, 1/3rd negative marking, and General Hindi scoring hacks.",
    category: "Guidelines & Tips",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "State Civil Services Strategy Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["UPPSC RO ARO","Samiksha Adhikari","O Level Equivalence","Hindi Typing Test","General Hindi 60 Marks","UP Secretariat"],
    relatedExamPreset: "uppsc-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Uttar Pradesh Public Service Commission (UPPSC)"
        },
        {
            "label": "Designations",
            "value": "Review Officer (RO) & Assistant Review Officer (ARO)"
        },
        {
            "label": "Secretariat Post",
            "value": "UP Secretariat (Lucknow), UPPSC, Board of Revenue"
        },
        {
            "label": "Pay Matrix",
            "value": "RO: Level 8 (₹47,600) | ARO: Level 7 (₹44,900)"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd (0.33 marks) per incorrect response"
        },
        {
            "label": "Document Specs",
            "value": "UPPSC OTR Photo & Signature (10–20 KB)"
        }
    ],
    faqs: [
        {
            "question": "Is 'O' Level diploma mandatory for both Review Officer (RO) and Assistant Review Officer (ARO)?",
            "answer": "No. 'O' Level diploma is NOT mandatory for Review Officer (RO / Samiksha Adhikari). Any candidate with a simple Bachelor's Degree in any discipline from a recognized University is fully eligible for the RO post. The NIELIT 'O' Level computer diploma (or recognized equivalent qualification) and Hindi typing speed test are mandatory ONLY for the post of Assistant Review Officer (ARO / Sahayak Samiksha Adhikari)."
        },
        {
            "question": "What computer diplomas are recognized as equivalent to NIELIT 'O' Level by UPPSC?",
            "answer": "Under the official Uttar Pradesh Government order regarding 'O' Level equivalence, diplomas or degrees of at least 1 year duration in Computer Science / IT from UGC or AICTE recognized universities are accepted. This includes: BCA, MCA, B.Sc (Computer Science/IT), B.Tech in CS/IT, PGDCA (Post Graduate Diploma in Computer Applications of minimum 1 year), and specialized DOEACC diploma courses. Private unaccredited 3-month or 6-month computer certificates are rejected."
        },
        {
            "question": "What are the rules and fonts for the Hindi Typing Test for ARO?",
            "answer": "The Hindi typing test is qualifying in nature and is conducted on a computer terminal for candidates who clear the Mains examination. Candidates must achieve a minimum speed of 25 words per minute (WPM) in Hindi. UPPSC officially conducts the typing test in KrutiDev 010 or Mangal font (InScript / Remington keyboard layout). Knowledge of English typing is an additional desirable qualification that gives preference if two candidates have identical marks."
        },
        {
            "question": "What are the six syllabus topics covered in the 60-mark General Hindi Paper-II?",
            "answer": "The 60-mark General Hindi paper is renowned for its high precision. It consists of exactly 6 topics carrying 10 questions and 10 marks each: 1. Vilom Shabd (Antonyms), 2. Vakya evam Vartani Shuddhi (Sentence and Spelling Correction), 3. Anek Shabdon ke liye Ek Shabd (One-word Substitution), 4. Tatbhav evam Tatsam Shabd, 5. Visheshan evam Visheshya (Adjectives and Nouns), and 6. Paryayvachi Shabd (Synonyms)."
        },
        {
            "question": "What is the negative marking penalty in UPPSC RO/ARO?",
            "answer": "A negative marking penalty of 1/3rd (0.33 marks) is enforced for every incorrect response in both Preliminary Paper-I (GS) and Paper-II (General Hindi), as well as in the objective components of the Mains Examination. Unattempted questions incur no mark penalty."
        },
        {
            "question": "Can candidates from other Indian states apply for UPPSC RO/ARO 2026?",
            "answer": "Yes, candidates from all Indian states and Union Territories are completely eligible to apply. However, all non-UP domiciled candidates are treated under the Unreserved (General) category, regardless of their caste, OBC, SC, ST, or EWS status in their home states. They cannot claim reservation benefits or age relaxations."
        },
        {
            "question": "What is the examination structure of UPPSC RO/ARO Mains?",
            "answer": "The Mains examination carries 400 total marks across three papers: Paper-I (General Studies objective: 120 Questions / 120 Marks / 2 Hours); Paper-II (General Hindi and Drafting: Part 1 Conventional drafting 100 Marks + Part 2 General Vocabulary objective 60 Marks / 2.5 Hours); Paper-III (Hindi Essay: 3 Essays across literature, national development, and international events: 120 Marks / 3 Hours). There is NO personal interview; final selection is formulated 100% on Mains marks."
        },
        {
            "question": "What are the photograph and signature specifications for UPPSC OTR registration?",
            "answer": "On the UPPSC OTR portal, both photograph and signature must be uploaded as JPG/JPEG files with file weights strictly between 10.0 KB and 20.0 KB. The photograph must be a clear studio portrait against a white or light grey background without spectacles or caps. The signature must be penned on white paper in black ink within a 140 × 60 pixel crop."
        },
        {
            "question": "What are the promotion avenues for a Review Officer in the UP Civil Secretariat?",
            "answer": "A Review Officer (Pay Level 8) enjoys a prestigious bureaucratic career in the UP Secretariat. The promotional ladder proceeds to Section Officer (Anubhag Adhikari, Level 10), Under Secretary (Anu Sachiv, Level 11), Deputy Secretary (Up Sachiv, Level 12), Joint Secretary (Sanyukta Sachiv, Level 13), and Special Secretary (Vishesh Sachiv, Level 13A). Many officers ultimately earn induction into the Indian Administrative Service (IAS)."
        },
        {
            "question": "What is the monthly in-hand salary of a newly appointed Review Officer?",
            "answer": "A Review Officer starts at Pay Level 8 with a Basic Pay of ₹47,600. In Lucknow (Class Y city), with current Dearness Allowance (~50%), House Rent Allowance (18% ~₹8,568), and Secretariat Allowance, gross monthly pay is approximately ₹78,000–₹82,000. After NPS and standard deductions, the net take-home salary is approximately ₹69,000–₹72,000 per month."
        },
        {
            "question": "Can I clear UPPSC RO/ARO 2026 through self-study without offline coaching?",
            "answer": "Yes. The decisive factor in UPPSC RO/ARO is General Hindi (Paper-II, 60 marks), which has a fixed syllabus of 6 topics (Vilom, Vakya Shuddhi, Anek Shabdon Ke Ek Shabd, Tatsam-Tadbhav, Visheshan, and Paryayvachi). Aspirants who score 55+ in Hindi and 75–80 in General Studies effortlessly clear the Prelims cutoff from home."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UPPSC Samiksha Adhikari (RO) &amp; Sahayak Samiksha Adhikari (ARO) 2026</h2>
        <p>Looking for the official <strong>UPPSC RO ARO eligibility criteria</strong>, <strong>NIELIT O Level equivalence rules</strong>, and exact <strong>Hindi typing speed requirements</strong>? With prestigious postings in the Uttar Pradesh Civil Secretariat (Lucknow), Board of Revenue, and UPPSC office (Prayagraj), this authoritative handbook provides everything you need to apply on <a href="https://uppsc.up.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">uppsc.up.nic.in</a> and master both Prelims and Mains.</p>
        
        <p>Review Officers oversee government policy files, legislative drafts, and administrative scrutiny. Check other state recruitments in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> RO vs ARO Key Distinctions
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>Review Officer (RO):</strong> Pay Level 8 (₹47,600–₹1,51,100). Simple Graduation degree in any discipline. NO 'O' Level diploma or typing test required.</li>
            <li><strong>Assistant Review Officer (ARO):</strong> Pay Level 7 (₹44,900–₹1,42,400). Graduation + NIELIT 'O' Level (or recognized equivalent diploma) + Hindi typing speed of 25 WPM.</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Preliminary Examination Pattern: The 200-Mark Blueprint</h2>
        <p>The Preliminary exam consists of two objective papers totaling 200 marks, with a strict <strong>1/3rd (0.33 marks)</strong> negative marking penalty per incorrect answer.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Paper</th>
                <th class="p-3 border-b">Subject</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Duration</th>
                <th class="p-3 border-b">Target Safe Score</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">Paper-I</td>
                <td class="p-3">General Studies (History, Geography, Polity, Science, UP Special, Current Affairs)</td>
                <td class="p-3 font-mono">140</td>
                <td class="p-3 font-mono">140</td>
                <td class="p-3 font-mono">2 Hours</td>
                <td class="p-3 font-mono">85–92 Marks</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Paper-II</td>
                <td class="p-3">General Hindi (6 Specific Grammar Topics, 10 Questions Each)</td>
                <td class="p-3 font-mono">60</td>
                <td class="p-3 font-mono">60</td>
                <td class="p-3 font-mono">1 Hour</td>
                <td class="p-3 font-mono">54–57 Marks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>UPPSC OTR Portal Compliance for Scanned Documents</h2>
        <p>Candidates must first generate a <strong>One-Time Registration (OTR) Number</strong> on <code>uppsc.up.nic.in</code>. Both photograph and signature must measure strictly between <strong>10.0 KB and 20.0 KB</strong> in JPG/JPEG format.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Format UPPSC OTR Signature &amp; Photo</h4>
          <p class="text-sm text-muted-foreground">Resize your signature to official 140×60 px (10–20 KB) and format documents using our <a href="/uppsc-signature-resize/" class="text-primary font-bold underline">UPPSC Signature Resizer</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/uppsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Launch UPPSC Resizer</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 10-20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">UPPSC RO/ARO 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UPPSC RO/ARO 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "ssc-gd-constable-2026-top-10-faq-complete-guide",
    title: "SSC GD Constable 2026: Top 10 FAQs on PET/PST Standards, Force Preferences & Live Photo Rules",
    metaTitle: "SSC GD Constable 2026: PET/PST, Live Photo & Force FAQs",
    metaDescription: "Official SSC GD Constable 2026 guide: 5km running times, PST height/chest standards, live camera rules and force preference order. Resize documents online free!",
    excerpt: "Everything candidates ask about SSC GD Constable: 5km/1.6km running times, height and chest physical standards, force preference strategy (SSF vs CISF vs CRPF vs BSF), and live camera rules.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Paramilitary Recruitment Strategy Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC GD 2026","Paramilitary Forces","PET Physical Standards","Force Preference","Live Photo Capture","10th Pass Jobs"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Staff Selection Commission (SSC)"
        },
        {
            "label": "Forces Included",
            "value": "BSF, CISF, CRPF, SSB, ITBP, AR, SSF"
        },
        {
            "label": "Educational Criteria",
            "value": "10th Class (Matriculation) Pass"
        },
        {
            "label": "Physical Efficiency Test",
            "value": "Male: 5 km in 24 min | Female: 1.6 km in 8.5 min"
        },
        {
            "label": "Physical Standard Test",
            "value": "Height: 170 cm (Male) / 157 cm (Female)"
        },
        {
            "label": "Document Specs",
            "value": "Live Webcam Photo + Signature (140×60 px, 10–20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What are the age limits, cut-off date, and educational criteria for SSC GD Constable 2026?",
            "answer": "Candidates must have passed 10th Class (Matriculation) from a recognized Board of Education before the prescribed cut-off date. The candidate's age must fall between 18 and 23 years. Upper age relaxations apply strictly: SC/ST candidates receive +5 years (up to 28 years), OBC candidates receive +3 years (up to 26 years), and Ex-Servicemen receive 3 years deduction after military service deduction."
        },
        {
            "question": "What are the Physical Efficiency Test (PET) running time standards for Male and Female candidates?",
            "answer": "For Male candidates: running distance of 5 kilometers to be completed within 24 minutes. For Female candidates: running distance of 1.6 kilometers to be completed within 8 minutes and 30 seconds. For candidates belonging to the Ladakh Region: Male candidates run 1.6 km in 7 minutes; Female candidates run 800 meters in 5 minutes. The PET is purely qualifying in nature with zero marks awarded."
        },
        {
            "question": "What are the Physical Standard Test (PST) height and chest measurement criteria?",
            "answer": "Standard Height requirement is: Male candidates — 170 cm; Female candidates — 157 cm. Standard Chest requirement for Male candidates is: Unexpanded 80 cm, with a mandatory minimum expansion of 5 cm (expanded 85 cm). Relaxations apply: ST male candidates height 162.5 cm / chest 76-81 cm; ST female candidates height 150 cm; candidates hailing from Garhwal, Kumaon, Himachal Pradesh, Gorkhas, and North-Eastern states receive relaxed height of 165 cm (Male) / 155 cm (Female)."
        },
        {
            "question": "How should candidates decide their Paramilitary Force preference order?",
            "answer": "Preference order determines your final force allocation based on merit and cannot be altered post-submission. The most recommended preference hierarchy is: 1. SSF (highest quality of life, Delhi posting), 2. CISF (airport and metro duty, family housing), 3. SSB (friendly Indo-Nepal borders), 4. ITBP (Himalayan borders), 5. CRPF (largest central force, dynamic duties), 6. BSF (border defense), and 7. Assam Rifles."
        },
        {
            "question": "What is the Computer Based Examination (CBE) pattern and negative marking penalty?",
            "answer": "The CBE comprises 80 objective multiple-choice questions for 160 marks (2 marks per question) to be attempted in 60 minutes across four subjects: General Intelligence & Reasoning (20 Qs / 40 M), General Knowledge & General Awareness (20 Qs / 40 M), Elementary Mathematics (20 Qs / 40 M), and English or Hindi (20 Qs / 40 M). Negative marking is 0.25 marks deducted for each wrong answer."
        },
        {
            "question": "What are the bonus marks awarded to NCC Certificate holders?",
            "answer": "Candidates possessing National Cadet Corps (NCC) certificates receive bonus incentive marks added to their normalized CBE score: NCC 'C' Certificate holders receive 5% bonus marks (8 marks out of 160); NCC 'B' Certificate holders receive 3% bonus marks (4.8 marks); and NCC 'A' Certificate holders receive 2% bonus marks (3.2 marks). The bonus is granted only upon producing the original certificate during document verification."
        },
        {
            "question": "How is the live webcam photograph captured for SSC GD online registration?",
            "answer": "SSC GD utilizes live camera capture directly on ssc.gov.in or the MySSC mobile app. Candidates must capture their live image looking straight ahead against a plain, light-colored background. Facial features (both eyes, nose, mouth, and ears) must occupy 80% of the oval guide. Wearing caps, sunglasses, or spectacles with reflection is forbidden and triggers automatic rejection."
        },
        {
            "question": "What are the exact signature upload specifications for SSC GD?",
            "answer": "The signature must be a scanned JPG/JPEG file measuring exactly 140 pixels wide by 60 pixels high. The file size must be strictly between 10.0 KB and 20.0 KB, penned in black ballpoint ink on clean white unruled paper. Signatures written in capital block letters, blurred images, or images with dark phone shadows will lead to immediate cancellation of candidature."
        },
        {
            "question": "What medical conditions cause disqualification during Detailed Medical Examination (DME)?",
            "answer": "Candidates must meet rigorous military medical standards: distant vision must be 6/6 (better eye) and 6/9 (worse eye) without glasses (glasses are strictly disqualified for GD combat roles). Disqualifying conditions include: Color Blindness (CP-III required), Knock Knees, Flat Foot, Squint, Varicose Veins, active DNS, hearing loss, and permanent tattoos on unauthorized body parts (tattoos are allowed only on the inner forearm or saluting arm if depicting religious symbols within 1/4th forearm size)."
        },
        {
            "question": "What is the monthly in-hand salary and risk allowances for an SSC GD Constable?",
            "answer": "Constable (General Duty) is placed under Pay Level 3 (₹21,700 – ₹69,100). Starting Basic Pay is ₹21,700. Adding Dearness Allowance (~50%), House Rent Allowance, Ration Money Allowance (~₹3,900 per month), and Hair Cutting/Soap allowances, standard gross pay is ~₹38,000. In high-risk, counter-insurgency, or high-altitude areas (J&K, North-East, Naxal zones), additional Risk & Hardship Allowance (ranging from ₹9,700 up to ₹17,300 per month) increases total monthly take-home earnings to ₹45,000–₹52,000."
        },
        {
            "question": "Can I clear SSC GD Constable 2026 in 3 months of preparation?",
            "answer": "Yes. The written examination tests basic 10th-standard subjects (Reasoning, Elementary Maths, General Knowledge, and Hindi/English). With 3 months of disciplined study (3–4 hours study + 1 hour running practice), achieving 120+ marks out of 160 is completely realistic. Concurrently build your stamina to complete the 5 km physical run in under 24 minutes."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC GD Constable 2026: Recruitment Overview &amp; Paramilitary Forces</h2>
        <p>Looking for the official <strong>SSC GD 2026 eligibility criteria</strong>, <strong>PET running standards</strong>, and exact <strong>SSC GD live photo guidelines</strong>? With over <strong>39,000 vacancies</strong> across Central Armed Police Forces (CAPFs), this authoritative handbook provides everything you need to apply on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">ssc.gov.in</a> and qualify through computer-based and physical rounds.</p>
        
        <p>Constable GD recruits protect India across BSF, CISF, CRPF, SSB, ITBP, Assam Rifles, and SSF. Explore other 10th-pass government drives in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> Force Preference Hierarchy Recommendations
          </h4>
          <ol class="text-xs sm:text-sm text-foreground/90 space-y-1 list-decimal pl-4 pt-1 font-semibold">
            <li><strong>SSF (Secretariat Security Force):</strong> Elite Delhi central ministry postings, regular hours</li>
            <li><strong>CISF (Central Industrial Security Force):</strong> Airports, metro stations, industrial plants with family quarters</li>
            <li><strong>SSB (Sashastra Seema Bal):</strong> Peaceful Indo-Nepal and Indo-Bhutan borders</li>
            <li><strong>ITBP (Indo-Tibetan Border Police):</strong> High-altitude Himalayan border policing</li>
            <li><strong>CRPF (Central Reserve Police Force):</strong> Internal security and counter-insurgency</li>
            <li><strong>BSF (Border Security Force):</strong> Indo-Pakistan and Indo-Bangladesh frontline defense</li>
            <li><strong>Assam Rifles (AR):</strong> North-East frontier security under Army operational command</li>
          </ol>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Computer Based Examination (CBE) Blueprint</h2>
        <p>The online exam features 80 multiple-choice questions carrying 160 total marks (2 marks per question) to be attempted in 60 minutes. Negative marking is <strong>0.25 marks (12.5%)</strong> per incorrect answer.</p>

        <div class="my-6 overflow-x-auto">
          <table class="w-full text-xs sm:text-sm text-left border border-border">
            <thead class="bg-muted text-foreground font-semibold">
              <tr>
                <th class="p-3 border-b">Section</th>
                <th class="p-3 border-b">Questions</th>
                <th class="p-3 border-b">Marks</th>
                <th class="p-3 border-b">Target Time</th>
                <th class="p-3 border-b">Scoring Highlights</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-border">
              <tr>
                <td class="p-3 font-semibold text-primary">General Intelligence &amp; Reasoning</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">15 min</td>
                <td class="p-3">Analogies, Arithmetic reasoning, Series, Coding</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">General Knowledge &amp; Awareness</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">8 min</td>
                <td class="p-3">Indian Constitution, History, Geography, Basic Science, Sports</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">Elementary Mathematics</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">25 min</td>
                <td class="p-3">Decimals, Ratio, Profit &amp; Loss, Discount, Time &amp; Distance</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-primary">English or Hindi (Candidate's Choice)</td>
                <td class="p-3 font-mono">20</td>
                <td class="p-3 font-mono">40</td>
                <td class="p-3 font-mono">12 min</td>
                <td class="p-3">Comprehension, Error finding, Synonyms/Antonyms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>Document Upload Rules: Live Photo &amp; 140×60 px Signature</h2>
        <p>SSC portal uses live webcam capture for photographs. For signatures, upload a scanned file cropped to <strong>140 × 60 pixels (10.0 KB to 20.0 KB)</strong> in black ballpoint ink on white paper.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare SSC GD Signature in 10-20 KB</h4>
          <p class="text-sm text-muted-foreground">Format your signature to exact 140×60 px dimensions and keep file size under 20 KB using our instant <a href="/ssc-signature-resize/" class="text-primary font-bold underline">SSC Signature Resizer Tool</a> or <a href="/compress-image-to-kb/" class="text-primary font-bold underline">Compress Image to 10-20 KB</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open SSC GD Resizer Tool</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">SSC GD Constable 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SSC GD Constable 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "maharashtra-police-bharti-2026-top-10-faq-guide",
    title: "Maharashtra Police Bharti 2026: Ground Marks, 1600m Running Time, Syllabus, Online Form & Hall Ticket",
    title_hi: "महाराष्ट्र पुलिस भर्ती 2026: मैदानी परीक्षा अंक, 1600m दौड़ समय तालिका, पाठ्यक्रम एवं हॉल टिकट",
    title_mr: "महाराष्ट्र पोलीस भरती २०२६: मैदानी चाचणी गुण, १६०० मीटर रनिंग टाइम तक्ता, अभ्यासक्रम व प्रवेशपत्र",
    metaTitle: "Maharashtra Police Bharti 2026: Ground Marks, 1600m Time, Syllabus & Dates",
    metaDescription: "Maharashtra Police Bharti 2025-2026 guide: 1600m running time vs marks table, 50-mark physical ground criteria, written exam syllabus, age limit & hall ticket link.",
    excerpt: "Authoritative candidate handbook for Maharashtra Police Bharti 2025 & 2026: 17,400+ constable & driver vacancies, 1600m running time chart, 50 ground marks, written syllabus, and online form portal rules.",
    excerpt_hi: "महाराष्ट्र पुलिस भर्ती 2025-2026 संपूर्ण गाइड: 17,400+ कांस्टेबल एवं चालक पद, 50 अंकों का फिजिकल टेस्ट, 1600m दौड़ समय तालिका, 100 अंकों की लिखित परीक्षा एवं हॉल टिकट नियम।",
    excerpt_mr: "महाराष्ट्र पोलीस भरती २०२५-२०२६ संपूर्ण मार्गदर्शक: १७,४००+ पोलीस शिपाई व चालक पदे, ५० गुणांची मैदानी चाचणी, १६००m धावणे वेळ तक्ता, १०० गुणांची लेखी परीक्षा व ऑनलाइन अर्ज नियम।",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 25, 2026",
    deployedAt: "Sept 25, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Maharashtra State Police Recruitment Desk",
    readTime: "11 min read",
    featured: false,
    tags: ["Maharashtra Police Bharti 2026","Maharashtra Police Bharti 2025","maharashtra police Bharti","Maharashtra Police Bharti Ground Marks","1600 Meter Running Time","Police Bharti Syllabus","Online Form Date","Hall Ticket 2026","Police Question Paper"],
    relatedExamPreset: "maharashtra-police",
    quickFacts: [
        {
            "label": "Conducting Authority",
            "value": "Maharashtra State Police Department (MahaPolice)"
        },
        {
            "label": "Total Vacancies",
            "value": "17,471+ Posts (Constable, SRPF, Driver, Bandsman)"
        },
        {
            "label": "Educational Criteria",
            "value": "12th Standard (HSC) Pass from recognized board"
        },
        {
            "label": "Physical Test (Ground)",
            "value": "50 Marks (1600m / 800m run, 100m sprint, Shot Put)"
        },
        {
            "label": "Written Examination",
            "value": "100 Objective Marks (Qualifying minimum 50% on ground)"
        },
        {
            "label": "Document Specs",
            "value": "Photo (160×212 px, 5-20 KB) + Signature (256×64 px, 5-20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the qualifying ground mark for Maharashtra Police Bharti 2026?",
            "answer": "Candidates must secure a minimum of 50% marks in the Physical Efficiency Test (PET), which equals at least 25 marks out of 50. Only candidates scoring 25 or more marks qualify to appear for the 100-mark written examination at a 1:10 shortlisting ratio."
        },
        {
            "question": "What is the 1600 meter running time and marks chart for Maharashtra Police Bharti?",
            "answer": "For male candidates, the 1600-meter run carries 20 marks: 5 minutes 10 seconds or less scores 20 marks; 5 min 11 sec to 5 min 30 sec scores 18 marks; 5 min 31 sec to 5 min 50 sec scores 15 marks; 5 min 51 sec to 6 min 10 sec scores 12 marks; 6 min 11 sec to 6 min 30 sec scores 10 marks; more than 6 minutes 30 seconds scores 0 marks (disqualified)."
        },
        {
            "question": "What is the age limit and category relaxation for Maharashtra Police Bharti?",
            "answer": "For Open/General category candidates, the age limit is 18 to 28 years. For reserved categories (OBC, SC, ST, VJNT, SBC, EWS), the upper age limit is relaxed up to 33 years (+5 years). Sportspersons receive up to 33 years, and Ex-Servicemen receive 3 years plus completed defense service duration."
        },
        {
            "question": "What is the syllabus and subject-wise mark distribution for the written exam?",
            "answer": "The written exam is an OMR-based test comprising 100 multiple-choice questions carrying 100 marks with a duration of 90 minutes. It covers: 1. Mathematics (Ankganit - 25 Marks), 2. General Knowledge & Current Affairs (Samanya Gyan - 25 Marks), 3. Intellectual Test / Reasoning (Buddhimatecha Chachani - 25 Marks), and 4. Marathi Grammar (Marathi Vyakaran - 25 Marks). There is NO negative marking."
        },
        {
            "question": "How to download the Maharashtra Police Bharti Hall Ticket 2026?",
            "answer": "Candidates can download their physical test or written exam hall ticket by visiting policerecruitment.mahait.org or mahapolice.gov.in, logging in with their Application ID and Date of Birth/Password, clicking on 'Download Admit Card', and printing 2 clear copies with recent photographs pasted."
        },
        {
            "question": "How to fill the Maharashtra Police Bharti online form without rejection?",
            "answer": "Visit policerecruitment.mahait.org during the active online form dates. Complete basic registration, upload your photo formatted strictly to 160 × 212 pixels (5 KB to 20 KB JPG) and signature to 256 × 64 pixels (5 KB to 20 KB JPG), fill educational credentials, pay the fee (₹450 Open / ₹350 Reserved), and save the confirmation PDF."
        },
        {
            "question": "Where can I download Maharashtra Police Bharti previous year question papers PDF?",
            "answer": "Previous 5 years' solved question papers for district police, SRPF, and driver exams can be downloaded from the official MahaPolice portal archives or educational repositories to practice time-management and analyze high-frequency Marathi grammar and reasoning patterns."
        }
    ],
    contentHtml: `
<!-- Sticky Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground font-semibold">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#mp-failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>Photo (160×200) / Signature (256×64) 5-20KB Error</span>
    </a>
    <a href="#mp-failure-ground" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🏃</span>
      <span>Ground Marks &amp; 1600m / 800m Time Chart</span>
    </a>
    <a href="#mp-failure-shotput" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>⚽</span>
      <span>Shot Put Distance Marks</span>
    </a>
    <a href="#mp-failure-written" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📚</span>
      <span>100-Mark Written Exam &amp; Marathi Syllabus</span>
    </a>
    <a href="#mp-failure-hallticket" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🎟️</span>
      <span>Hall Ticket &amp; MahaIT Online Portal</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete Maharashtra Police Bharti 2026 Master Overview:</strong> The Maharashtra State Police Department (MahaPolice), recruiting across <strong>17,471+ vacancies</strong> for District Police Constables, State Reserve Police Force (SRPF), Police Drivers, and Bandsman via <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">policerecruitment.mahait.org</a> and <a href="https://www.mahapolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">mahapolice.gov.in</a>, requires meeting strict multi-stage benchmarks: <strong>50-mark physical ground test (PET/PST)</strong>, <strong>100-mark OMR written examination</strong>, and <strong>160 × 200 px photo (5 KB – 20 KB)</strong> &amp; <strong>256 × 64 px signature (5 KB – 20 KB)</strong> online upload compliance.
    </p>
  </div>

  <p>
    Every recruitment cycle, over 1.5 million aspirants from Mumbai, Pune, Nagpur, Nashik, Chhatrapati Sambhajinagar, Thane, Solapur, Kolhapur, and across Maharashtra register through the official MahaIT recruitment portal. However, thousands encounter form rejection or missing hall tickets due to file size truncation errors, uploading mobile snapshots larger than 20 KB, or using incorrect signature dimensions.
  </p>

  <p>
    This diagnostic master handbook provides an <strong>actionable 5W1H troubleshooting framework</strong> covering 1600m/800m running charts, Shot Put scoring, Marathi syllabus breakdowns, hall ticket download steps, and instant image formatting using our free client-side utility: the <a href="/maharashtra-police-signature-resize/" class="text-primary font-semibold underline">SignResize Maharashtra Police Resizer Tool</a>.
  </p>
</section>

<!-- Authoritative Master Technical Specifications -->
<section id="mp-master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master MahaPolice Technical Benchmark Specifications
  </h2>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official Maharashtra Police Standard</th>
          <th class="px-4 py-3">Statutory Rule / Portal Boundary</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Passport Photo Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">160 × 200 px (or 160 × 212 px)</td>
          <td class="px-4 py-3 text-muted-foreground">5 KB to 20 KB (or 50 KB max), JPG format, light background</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature Scan Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">256 × 64 px (or 200 × 80 px)</td>
          <td class="px-4 py-3 text-muted-foreground">5 KB to 20 KB, black ballpoint ink on unruled white sheet</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Physical Test Minimum Benchmark</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">50% Marks (25 / 50 Marks)</td>
          <td class="px-4 py-3 text-muted-foreground">Mandatory minimum to qualify for 100-mark written test (1:10 ratio)</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Written Examination Format</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">100 MCQs • 100 Marks • 90 Mins</td>
          <td class="px-4 py-3 text-muted-foreground">Marathi, Maths, Reasoning &amp; GK — NO negative marking</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Official Application Portal</td>
          <td class="px-4 py-3 font-mono text-primary">policerecruitment2024.mahait.org / mahapolice.gov.in</td>
          <td class="px-4 py-3 text-muted-foreground">Official State Government Recruitment Portal</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAILURE STATE 1: Upload Errors -->
<section id="mp-failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="space-y-1">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
        Stage 1 Failure State
      </span>
      <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
        📸 Failure State 1: MahaIT 160×200 Photo &amp; 256×64 Signature 5-20KB Upload Rejections
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a href="/maharashtra-police-signature-resize/" class="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
        Maha Police Resizer Tool
      </a>
    </div>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    During the online application upload on <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">policerecruitment.mahait.org</a>, server decoders check binary streams. When a photo exceeds 20.0 KB or signature pixel width differs from 256 px, the portal displays a hard upload exception.
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Portal Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "Image file size must be between 5 KB and 20 KB" OR "Width and Height of Photo must be 160x200 pixels".
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Mobile phone cameras capture images ranging from 2 MB to 6 MB. Simply renaming PNG to .jpg does not compress underlying bytes. Files over 20 KB trigger server database overflow rejection.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Step-by-Step Technical Fix
        </strong>
        <p class="text-muted-foreground">
          1. Upload your photo to <a href="/maharashtra-police-signature-resize/" class="text-primary underline font-bold">SignResize Maha Police Resizer</a>.<br/>
          2. Auto-crop photo to <strong>160×200 px (5–20 KB)</strong> and signature to <strong>256×64 px (5–20 KB)</strong>.<br/>
          3. Download clean JPG files and upload seamlessly to the portal.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Applicants
        </strong>
        <p class="text-muted-foreground">
          All Police Constable, SRPF, Driver, Bandsman, and Jail Police applicants applying on MahaIT portal.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 2: Physical Test Ground Marks -->
<section id="mp-failure-ground" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Stage 2 Physical Benchmark
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🏃 Physical Test (PET) 50 Ground Marks &amp; Running Time Chart (मैदानी चाचणी गुण)
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Candidates must secure at least <strong>50% (25 out of 50 marks)</strong> in the physical test to qualify for the 100-mark written exam. Review the complete time-to-marks scales below:
  </p>

  <h3 class="font-bold text-foreground text-base">Male Candidates: 1600m Running Time &amp; Marks Scale (पुरुष धावणे तक्ता)</h3>
  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">1600m Running Time (Male)</th>
          <th class="px-4 py-3">Marks Awarded</th>
          <th class="px-4 py-3">Performance Grade</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="bg-emerald-500/10 font-semibold">
          <td class="px-4 py-3 font-mono">5 Minutes 10 Seconds or Less</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">20 Marks (Full Marks)</td>
          <td class="px-4 py-3 text-emerald-700 dark:text-emerald-300">Outstanding</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-mono">5 min 11 sec to 5 min 30 sec</td>
          <td class="px-4 py-3 font-mono font-bold">18 Marks</td>
          <td class="px-4 py-3">Excellent</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-mono">5 min 31 sec to 5 min 50 sec</td>
          <td class="px-4 py-3 font-mono font-bold">15 Marks</td>
          <td class="px-4 py-3">Good</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-mono">5 min 51 sec to 6 min 10 sec</td>
          <td class="px-4 py-3 font-mono font-bold">12 Marks</td>
          <td class="px-4 py-3">Average</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-mono">6 min 11 sec to 6 min 30 sec</td>
          <td class="px-4 py-3 font-mono font-bold text-amber-600 dark:text-amber-400">10 Marks</td>
          <td class="px-4 py-3">Borderline Pass</td>
        </tr>
        <tr class="bg-rose-500/10 text-rose-700 dark:text-rose-300">
          <td class="px-4 py-3 font-mono">More than 6 Minutes 30 Seconds</td>
          <td class="px-4 py-3 font-mono font-bold">0 Marks</td>
          <td class="px-4 py-3">Disqualified</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="font-bold text-foreground text-base pt-3">Female Candidates: 800m Running Time &amp; Marks Scale (महिला धावणे तक्ता)</h3>
  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">800m Running Time (Female)</th>
          <th class="px-4 py-3">Marks Awarded</th>
          <th class="px-4 py-3">Performance Grade</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="bg-emerald-500/10 font-semibold">
          <td class="px-4 py-3 font-mono">2 Minutes 50 Seconds or Less</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">20 Marks (Full Marks)</td>
          <td class="px-4 py-3 text-emerald-700 dark:text-emerald-300">Outstanding</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-mono">2 min 51 sec to 3 min 00 sec</td>
          <td class="px-4 py-3 font-mono font-bold">18 Marks</td>
          <td class="px-4 py-3">Excellent</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-mono">3 min 01 sec to 3 min 10 sec</td>
          <td class="px-4 py-3 font-mono font-bold">15 Marks</td>
          <td class="px-4 py-3">Good</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-mono">3 min 11 sec to 3 min 20 sec</td>
          <td class="px-4 py-3 font-mono font-bold text-amber-600 dark:text-amber-400">12 Marks</td>
          <td class="px-4 py-3">Passing</td>
        </tr>
        <tr class="bg-rose-500/10 text-rose-700 dark:text-rose-300">
          <td class="px-4 py-3 font-mono">More than 4 Minutes 00 Seconds</td>
          <td class="px-4 py-3 font-mono font-bold">0 Marks</td>
          <td class="px-4 py-3">Disqualified</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAILURE STATE 3: Shot Put Distance Scale -->
<section id="mp-failure-shotput" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Stage 3 Shot Put Metric
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      ⚽ Shot Put (गोळा फेक) Distance vs Marks Scale (Male 7.26kg / Female 4kg)
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
    <!-- Male Shot Put -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>Male Shot Put (7.260 kg Ball)</span>
        <span class="text-primary font-mono">Max 15 Marks</span>
      </h3>
      <ul class="space-y-2 text-muted-foreground font-mono">
        <li class="flex justify-between font-bold text-emerald-600 dark:text-emerald-400"><span>8.50 Meters or More</span> <span>15 Marks</span></li>
        <li class="flex justify-between"><span>7.90m to 8.49m</span> <span>12 Marks</span></li>
        <li class="flex justify-between"><span>7.30m to 7.89m</span> <span>10 Marks</span></li>
        <li class="flex justify-between"><span>6.70m to 7.29m</span> <span>8 Marks</span></li>
        <li class="flex justify-between text-rose-600"><span>Below 6.00 Meters</span> <span>0 Marks</span></li>
      </ul>
    </div>

    <!-- Female Shot Put -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>Female Shot Put (4.000 kg Ball)</span>
        <span class="text-primary font-mono">Max 15 Marks</span>
      </h3>
      <ul class="space-y-2 text-muted-foreground font-mono">
        <li class="flex justify-between font-bold text-emerald-600 dark:text-emerald-400"><span>6.00 Meters or More</span> <span>15 Marks</span></li>
        <li class="flex justify-between"><span>5.50m to 5.99m</span> <span>12 Marks</span></li>
        <li class="flex justify-between"><span>5.00m to 5.49m</span> <span>10 Marks</span></li>
        <li class="flex justify-between"><span>4.50m to 4.99m</span> <span>8 Marks</span></li>
        <li class="flex justify-between text-rose-600"><span>Below 4.00 Meters</span> <span>0 Marks</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- FAILURE STATE 4: Written Exam & Syllabus -->
<section id="mp-failure-written" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      Stage 4 Written Exam
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📚 100-Mark Written Exam Syllabus Breakdown
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    The written examination is an OMR-based test comprising <strong>100 questions for 100 marks</strong> with a duration of <strong>90 minutes</strong>. There is <strong>NO negative marking</strong>.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Subject</th>
          <th class="px-4 py-3">Questions</th>
          <th class="px-4 py-3">Marks</th>
          <th class="px-4 py-3">Core Topics Covered</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Marathi Grammar</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Sandhi, Samas, Prayog, Alankar, Synonyms &amp; Antonyms, Idioms &amp; Phrases</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Mathematics</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Number System, LCM &amp; HCF, Profit &amp; Loss, Percentage, Average, Time &amp; Work</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Reasoning / Intelligence Test</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Letter Series, Number Series, Venn Diagrams, Blood Relations, Clock &amp; Calendar</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">GK &amp; Current Affairs</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Maharashtra History &amp; Geography, Indian Constitution, Panchayat Raj, Current Events</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAILURE STATE 5: Hall Ticket & Portal -->
<section id="mp-failure-hallticket" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      Stage 5 Admit Card
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🎟️ Downloading Maharashtra Police Bharti Hall Ticket 2026
    </h2>
  </div>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <p><strong>Step 1:</strong> Visit the official portal: <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">policerecruitment.mahait.org</a> or <a href="https://www.mahapolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">mahapolice.gov.in</a>.</p>
    <p><strong>Step 2:</strong> Enter your registered <strong>Application Number / User ID</strong> and <strong>Password / Date of Birth</strong>.</p>
    <p><strong>Step 3:</strong> Click on <strong>Download Physical Test (PET) Hall Ticket</strong> or <strong>Written Exam Admit Card</strong>.</p>
    <p><strong>Step 4:</strong> Print 2 physical color copies and carry them along with your original photo identity card (Aadhaar / Voter ID / Driving License) to the ground venue.</p>
  </div>
</section>

<!-- Tool CTA Callout -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">Resize Photo &amp; Signature for Maharashtra Police Portal Instantly</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">Crop your photo to 160×200 px (5–20 KB) and signature to 256×64 px (5–20 KB) in seconds with 100% privacy — zero server uploads.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/maharashtra-police-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open Maharashtra Police Resizer Tool &rarr;
    </a>
    <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      General Photo Resizer
    </a>
  </div>
</div>
`,
    contentHtml_mr: `
<!-- Sticky Quick Problem Finder (मराठी नेव्हिगेशन) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 त्वरित मदत व समस्या निवारण मार्गदर्शक (महाराष्ट्र पोलीस भरती)</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground font-semibold">तुमच्या आवश्यक घटकावर थेट जा</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#mp-failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>फोटो (160×200) / सही (256×64) 5-20KB त्रुटी निवारण</span>
    </a>
    <a href="#mp-failure-ground" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🏃</span>
      <span>मैदानी चाचणी गुण व १६००m / ८००m रनिंग टाइम तक्ता</span>
    </a>
    <a href="#mp-failure-shotput" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>⚽</span>
      <span>गोळा फेक अंतर व गुण तक्ता (Shot Put)</span>
    </a>
    <a href="#mp-failure-written" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📚</span>
      <span>१०० गुणांची लेखी परीक्षा व मराठी व्याकरण अभ्यासक्रम</span>
    </a>
    <a href="#mp-failure-hallticket" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🎟️</span>
      <span>प्रवेशपत्र (Hall Ticket) डाऊनलोड व महाआयटी पोर्टल</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>महाराष्ट्र पोलीस भरती २०२६ संपूर्ण मास्टर मार्गदर्शक:</strong> महाराष्ट्र राज्य पोलीस दलात <strong>१७,४७१+ पेक्षा जास्त पदांसाठी</strong> पोलीस शिपाई, राज्य राखीव पोलीस बल (SRPF), पोलीस शिपाई चालक व बँड्समन या पदांची भरती प्रक्रिया <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">policerecruitment.mahait.org</a> आणि <a href="https://www.mahapolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">mahapolice.gov.in</a> या अधिकृत महाआयटी पोर्टल्सद्वारे आयोजित केली जाते. उमेदवारांना <strong>५० गुणांची मैदानी शारीरिक चाचणी (PET/PST)</strong>, <strong>१०० गुणांची OMR आधारित लेखी परीक्षा</strong>, आणि <strong>१६० × २०० px फोटो (५ KB ते २० KB)</strong> व <strong>२५६ × ६४ px स्वाक्षरी (५ KB ते २० KB)</strong> ऑनलाइन अपलोड नियमांची पूर्तता करणे अनिवार्य आहे.
    </p>
  </div>

  <p>
    दरवर्षी मुंबई, पुणे, नागपूर, नाशिक, छत्रपती संभाजीनगर, ठाणे, सोलापूर, कोल्हापूर व संपूर्ण महाराष्ट्रातून १५ लाखांहून अधिक उमेदवार अर्ज भरतात. तथापि, फोटो व स्वाक्षरीचा आकार योग्य नसेल किंवा २० KB पेक्षा जास्त असेल तर अर्ज फेटाळला जाण्याचा धोका असतो.
  </p>

  <p>
    या मार्गदर्शकामध्ये १६००m व ८००m धावणे वेळ तक्ता, गोळा फेकीचे गुण, लेखी परीक्षेचा अभ्यासक्रम, हॉल तिकीट डाऊनलोड टप्पे आणि आमच्या मोफत <a href="/maharashtra-police-signature-resize/" class="text-primary font-semibold underline">SignResize महाराष्ट्र पोलीस रिसाइझर टूल</a> ची सविस्तर माहिती दिली आहे.
  </p>
</section>

<!-- १. महापोलीस तांत्रिक निकष तक्ता -->
<section id="mp-master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 १.</span> महाराष्ट्र पोलीस भरती तांत्रिक निकष (Technical Benchmark Specs)
  </h2>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">नियम / पॅरामीटर</th>
          <th class="px-4 py-3">अधिकृत पोलीस भरती प्रमाण (Standard)</th>
          <th class="px-4 py-3">पोर्टल अपलोड मर्यादा व अट</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">पासपोर्ट फोटो आकार (Photo Dimensions)</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">१६० × २०० पिक्सेल (किंवा १६० × २१२ px)</td>
          <td class="px-4 py-3 text-muted-foreground">५ KB ते २० KB (किंवा कमाल ५० KB), JPG फॉरमॅट, फिकट पार्श्वभूमी</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">स्वाक्षरी स्कॅन आकार (Signature Dimensions)</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">२५६ × ६४ पिक्सेल (किंवा २०० × ८० px)</td>
          <td class="px-4 py-3 text-muted-foreground">५ KB ते २० KB, पांढऱ्या कागदावर काळ्या शाईच्या बॉलपेनाने स्वाक्षरी</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">मैदानी चाचणी किमान पात्रता गुण</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">५०% गुण (२५ / ५० गुण)</td>
          <td class="px-4 py-3 text-muted-foreground">लेखी परीक्षेच्या १:१० निवडीसाठी किमान २५ गुण आवश्यक</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">लेखी परीक्षा स्वरूप (Written Exam)</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">१०० बहुपर्यायी प्रश्न • १०० गुण • ९० मिनिटे</td>
          <td class="px-4 py-3 text-muted-foreground">OMR आधारित परीक्षा; नकारात्मक गुण पद्धत (Negative Marking) नाही</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">अधिकृत अर्ज पोर्टल</td>
          <td class="px-4 py-3 font-mono text-primary">policerecruitment2024.mahait.org / mahapolice.gov.in</td>
          <td class="px-4 py-3 text-muted-foreground">महाराष्ट्र शासन अधिकृत पोलीस भरती पोर्टल</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- टप्पा १: फोटो व सही ऑनलाइन अपलोड -->
<section id="mp-failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
      टप्पा १ ऑनलाइन अर्ज
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📸 फोटो व सही ऑनलाइन अपलोड समस्या निवारण (५ KB ते २० KB)
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    ऑनलाइन अर्ज भरताना उमेदवारांना <em>"File size must be between 5 KB and 20 KB"</em> किंवा <em>"Invalid image dimensions"</em> यांसारख्या त्रुटींचा सामना करावा लागतो.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 rounded-2xl bg-card border border-border space-y-2">
      <h3 class="font-bold text-foreground text-sm">अधिकृत फोटो निकष</h3>
      <ul class="space-y-1.5 text-xs text-muted-foreground">
        <li>• <strong>रुंदी × उंची:</strong> १६० × २०० पिक्सेल (किंवा १६० × २१२ px)</li>
        <li>• <strong>फाईल साईज:</strong> तंतोतंत ५ KB ते २० KB (JPG / JPEG)</li>
        <li>• <strong>पार्श्वभूमी:</strong> फिकट / पांढरी पार्श्वभूमी व स्पष्ट चेहरा</li>
        <li>• <strong>नवीन फोटो:</strong> मागील ३ महिन्यांतील फोटो; टोपी किंवा गॉगल नसावा</li>
      </ul>
    </div>

    <div class="p-4 rounded-2xl bg-card border border-border space-y-2">
      <h3 class="font-bold text-foreground text-sm">अधिकृत स्वाक्षरी निकष</h3>
      <ul class="space-y-1.5 text-xs text-muted-foreground">
        <li>• <strong>रुंदी × उंची:</strong> २५६ × ६४ पिक्सेल (किंवा २०० × ८० px)</li>
        <li>• <strong>फाईल साईज:</strong> तंतोतंत ५ KB ते २० KB (JPG / JPEG)</li>
        <li>• <strong>शाईचा प्रकार:</strong> कोऱ्या पांढऱ्या कागदावर काळ्या शाईचा बॉलपेन</li>
        <li>• <strong>नियम:</strong> सुवाच्य स्वाक्षरी असावी (कॅपिटल / ब्लॉक अक्षरात सही करू नये)</li>
      </ul>
    </div>
  </div>

  <div class="p-4 rounded-2xl bg-muted/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-3">
    <div>
      <h4 class="font-bold text-sm text-foreground">तुमचे फोटो व सही त्वरित रिसाइझ करायचे आहे का?</h4>
      <p class="text-xs text-muted-foreground">आमच्या मोफत टूलद्वारे १६०×२०० फोटो व २५६×६४ सही त्वरित तयार करा.</p>
    </div>
    <a href="/maharashtra-police-signature-resize/" class="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition whitespace-nowrap">
      फोटो व सही रिसाइझ करा &rarr;
    </a>
  </div>
</section>

<!-- टप्पा २: मैदानी चाचणी (PET) -->
<section id="mp-failure-ground" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      टप्पा २ शारीरिक मैदानी चाचणी
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🏃 ५० गुणांची मैदानी चाचणी (PET) व १६००m / ८००m धावणे वेळ तक्ता
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    मैदानी चाचणीत उमेदवारांना <strong>किमान ५०% गुण (२५/५० गुण)</strong> मिळवणे अनिवार्य आहे. २५ पेक्षा कमी गुण मिळवणारे उमेदवार लेखी परीक्षेसाठी अपात्र ठरतात.
  </p>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <!-- पुरुष मैदानी घटक -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>पुरुष उमेदवार (मैदानी चाचणी - ५० गुण)</span>
        <span class="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-md">३ प्रकार</span>
      </h3>
      <ul class="space-y-2 text-xs">
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">१६०० मीटर धावणे (1600m Run)</span>
          <span class="font-mono font-bold text-primary">२० गुण</span>
        </li>
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">१०० मीटर धावणे (100m Sprint)</span>
          <span class="font-mono font-bold text-primary">१५ गुण</span>
        </li>
        <li class="flex justify-between items-center py-1">
          <span class="font-medium text-foreground">गोळा फेक (Shot Put - ७.२६० किग्रॅ)</span>
          <span class="font-mono font-bold text-primary">१५ गुण</span>
        </li>
      </ul>
    </div>

    <!-- महिला मैदानी घटक -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>महिला उमेदवार (मैदानी चाचणी - ५० गुण)</span>
        <span class="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-md">३ प्रकार</span>
      </h3>
      <ul class="space-y-2 text-xs">
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">८०० मीटर धावणे (800m Run)</span>
          <span class="font-mono font-bold text-primary">२० गुण</span>
        </li>
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">१०० मीटर धावणे (100m Sprint)</span>
          <span class="font-mono font-bold text-primary">१५ गुण</span>
        </li>
        <li class="flex justify-between items-center py-1">
          <span class="font-medium text-foreground">गोळा फेक (Shot Put - ४.००० किग्रॅ)</span>
          <span class="font-mono font-bold text-primary">१५ गुण</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- पुरुष १६००m धावणे वेळ व गुण तक्ता -->
  <div class="space-y-2">
    <h3 class="text-base font-bold text-foreground">पुरुष १६०० मीटर धावणे वेळ व गुण तक्ता</h3>
    <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
      <table class="w-full text-xs text-left border-collapse">
        <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] tracking-wider border-b border-border">
          <tr>
            <th class="px-4 py-2.5">धावणे वेळ (Running Time)</th>
            <th class="px-4 py-2.5">मिळालेले गुण</th>
            <th class="px-4 py-2.5">पात्रता स्थिती</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/60 font-mono">
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5 font-bold text-emerald-600 dark:text-emerald-400">५ मिनिटे १० सेकंद किंवा कमी</td>
            <td class="px-4 py-2.5 font-bold text-emerald-600 dark:text-emerald-400">२० / २० गुण (पैकीच्या पैकी)</td>
            <td class="px-4 py-2.5 text-emerald-600 font-sans">पूर्ण गुण</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">५ मि. ११ से. ते ५ मि. ३० से.</td>
            <td class="px-4 py-2.5 font-bold">१८ गुण</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">पात्र</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">५ मि. ३१ से. ते ५ मि. ५० से.</td>
            <td class="px-4 py-2.5 font-bold">१५ गुण</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">पात्र</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">५ मि. ५१ से. ते ६ मि. १० से.</td>
            <td class="px-4 py-2.5 font-bold">१२ गुण</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">पात्र</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">६ मि. ११ से. ते ६ मि. ३० से.</td>
            <td class="px-4 py-2.5 font-bold">१० गुण</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">पात्र</td>
          </tr>
          <tr class="hover:bg-muted/20 bg-rose-500/5">
            <td class="px-4 py-2.5 font-bold text-rose-600">६ मिनिटे ३० सेकंदापेक्षा जास्त</td>
            <td class="px-4 py-2.5 font-bold text-rose-600">० गुण</td>
            <td class="px-4 py-2.5 text-rose-600 font-sans font-bold">अपात्र (Disqualified)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- टप्पा ३: गोळा फेक अंतर व गुण तक्ता -->
<section id="mp-failure-shotput" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      टप्पा ३ गोळा फेक चाचणी
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      ⚽ गोळा फेक फेकीचे अंतर व गुण तक्ता (Shot Put Table)
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <!-- पुरुष गोळा फेक -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>पुरुष गोळा फेक (७.२६० किग्रॅ गोळा)</span>
        <span class="text-primary font-mono">कमाल १५ गुण</span>
      </h3>
      <ul class="space-y-2 text-muted-foreground font-mono">
        <li class="flex justify-between font-bold text-emerald-600 dark:text-emerald-400"><span>८.५० मीटर किंवा जास्त</span> <span>१५ गुण</span></li>
        <li class="flex justify-between"><span>७.९०m ते ८.४९m</span> <span>१२ गुण</span></li>
        <li class="flex justify-between"><span>७.३०m ते ७.८९m</span> <span>१० गुण</span></li>
        <li class="flex justify-between"><span>६.७०m ते ७.२९m</span> <span>८ गुण</span></li>
        <li class="flex justify-between text-rose-600"><span>६.०० मीटरपेक्षा कमी</span> <span>० गुण</span></li>
      </ul>
    </div>

    <!-- महिला गोळा फेक -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>महिला गोळा फेक (४.००० किग्रॅ गोळा)</span>
        <span class="text-primary font-mono">कमाल १५ गुण</span>
      </h3>
      <ul class="space-y-2 text-muted-foreground font-mono">
        <li class="flex justify-between font-bold text-emerald-600 dark:text-emerald-400"><span>६.०० मीटर किंवा जास्त</span> <span>१५ गुण</span></li>
        <li class="flex justify-between"><span>५.५०m ते ५.९९m</span> <span>१२ गुण</span></li>
        <li class="flex justify-between"><span>५.००m ते ५.४९m</span> <span>१० गुण</span></li>
        <li class="flex justify-between"><span>४.५०m ते ४.९९m</span> <span>८ गुण</span></li>
        <li class="flex justify-between text-rose-600"><span>४.०० मीटरपेक्षा कमी</span> <span>० गुण</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- टप्पा ४: लेखी परीक्षा अभ्यासक्रम -->
<section id="mp-failure-written" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      टप्पा ४ लेखी परीक्षा
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📚 १०० गुणांची लेखी परीक्षा अभ्यासक्रम व विषयनिहाय गुण विभागणी
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    लेखी परीक्षा ही OMR आधारित <strong>१०० प्रश्नांची १०० गुणांसाठी</strong> असून वेळ <strong>९० मिनिटे</strong> आहे. यात <strong>कोणतेही नकारात्मक गुण (No Negative Marking)</strong> नाहीत.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">विषय (Subject)</th>
          <th class="px-4 py-3">प्रश्न</th>
          <th class="px-4 py-3">गुण</th>
          <th class="px-4 py-3">प्रमुख घटक व अभ्यासक्रम</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">मराठी व्याकरण</td>
          <td class="px-4 py-3 font-mono">२५</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">२५ गुण</td>
          <td class="px-4 py-3 text-muted-foreground">संधी, समास, प्रयोग, अलंकार, समानार्थी व विरुद्धार्थी शब्द, म्हणी व वाक्प्रचार</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">अंकगणित (Mathematics)</td>
          <td class="px-4 py-3 font-mono">२५</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">२५ गुण</td>
          <td class="px-4 py-3 text-muted-foreground">संख्याज्ञान, लसावि-मसावि, नफा-तोटा, शेकडेवारी, सरासरी, काळ-काम-वेग</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">बुद्धिमत्ता चाचणी (Reasoning)</td>
          <td class="px-4 py-3 font-mono">२५</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">२५ गुण</td>
          <td class="px-4 py-3 text-muted-foreground">अक्षर मालिका, संख्या मालिका, वेन आकृत्या, नातेसंबंध, घड्याळ व दिनदर्शिका</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">सामान्य ज्ञान व चालू घडामोडी</td>
          <td class="px-4 py-3 font-mono">२५</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">२५ गुण</td>
          <td class="px-4 py-3 text-muted-foreground">महाराष्ट्र इतिहास व भूगोल, राज्यघटना, पंचायत राज, सहकार, क्रीडा घडामोडी</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- टप्पा ५: प्रवेशपत्र (Hall Ticket) डाऊनलोड -->
<section id="mp-failure-hallticket" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      टप्पा ५ प्रवेशपत्र (Admit Card)
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🎟️ महाराष्ट्र पोलीस भरती प्रवेशपत्र (Hall Ticket) डाऊनलोड पद्धत
    </h2>
  </div>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <p><strong>पायरी १:</strong> महाआयटी अधिकृत संकेतस्थळाला भेट द्या: <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">policerecruitment2024.mahait.org</a> किंवा <a href="https://www.mahapolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">mahapolice.gov.in</a>.</p>
    <p><strong>पायरी २:</strong> तुमचा नोंदणीकृत <strong>अर्ज क्रमांक (User ID / Application No)</strong> व <strong>पासवर्ड / जन्मतारीख</strong> प्रविष्ट करा.</p>
    <p><strong>पायरी ३:</strong> <strong>Download Hall Ticket (मैदानी चाचणी / लेखी परीक्षा)</strong> पर्यायावर क्लिक करा.</p>
    <p><strong>पायरी ४:</strong> प्रवेशपत्राच्या २ रंगीत प्रती प्रिंट करा आणि मूळ ओळखपत्रासोबत (आधार कार्ड/मतदान ओळखपत्र/ड्रायव्हिंग लायसन्स) मैदानावर उपस्थित राहा.</p>
  </div>
</section>

<!-- टूल कॉलआउट -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">महाराष्ट्र पोलीस भरतीसाठी फोटो व स्वाक्षरी त्वरित रिसाइझ करा</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">फोटो १६०×२०० px (५ ते २० KB) आणि सही २५६×६४ px (५ ते २० KB) रिसाइझ करण्यासाठी आमचे मोफत टूल वापरा.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/maharashtra-police-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      पोलीस भरती रिसाइझर टूल उघडा &rarr;
    </a>
    <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      सामान्य फोटो रिसाइझर
    </a>
  </div>
</div>
`,
    contentHtml_hi: `
<!-- Sticky Quick Problem Finder (हिंदी नेविगेशन) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 त्वरित सहायता एवं समस्या निवारण गाइड (महाराष्ट्र पुलिस भर्ती)</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground font-semibold">अपने आवश्यक विषय पर सीधे जाएं</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#mp-failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>फोटो (160×200) / हस्ताक्षर (256×64) 5-20KB त्रुटि निवारण</span>
    </a>
    <a href="#mp-failure-ground" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🏃</span>
      <span>फिजिकल टेस्ट अंक एवं 1600m / 800m दौड़ समय तालिका</span>
    </a>
    <a href="#mp-failure-shotput" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>⚽</span>
      <span>गोला फेंक अंक तालिका (Shot Put)</span>
    </a>
    <a href="#mp-failure-written" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📚</span>
      <span>100 अंकों की लिखित परीक्षा एवं पाठ्यक्रम</span>
    </a>
    <a href="#mp-failure-hallticket" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🎟️</span>
      <span>प्रवेश पत्र (Hall Ticket) एवं पोर्टल गाइड</span>
    </a>
  </div>
</div>

<section id="overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>महाराष्ट्र पुलिस भर्ती 2026 संपूर्ण मास्टर गाइड:</strong> महाराष्ट्र राज्य पुलिस विभाग में <strong>17,471+ से अधिक पदों पर</strong> पुलिस कांस्टेबल, राज्य रिजर्व पुलिस बल (SRPF), पुलिस ड्राइवर एवं बैंड्समैन पदों की भर्ती प्रक्रिया <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">policerecruitment.mahait.org</a> एवं <a href="https://www.mahapolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">mahapolice.gov.in</a> आधिकारिक महाआईटी पोर्टल द्वारा आयोजित की जाती है। उम्मीदवारों को <strong>50 अंकों की शारीरिक दक्षता परीक्षा (PET/PST)</strong>, <strong>100 अंकों की लिखित OMR परीक्षा</strong>, तथा <strong>160 × 200 px फोटो (5 KB से 20 KB)</strong> व <strong>256 × 64 px हस्ताक्षर (5 KB से 20 KB)</strong> ऑनलाइन अपलोड नियमों का पालन करना अनिवार्य है।
    </p>
  </div>

  <p>
    प्रतिवर्ष मुंबई, पुणे, नागपुर, नासिक, छत्रपति संभाजीनगर, ठाणे, सोलापुर, कोल्हापुर एवं पूरे महाराष्ट्र से 15 लाख से अधिक अभ्यर्थी आवेदन फॉर्म भरते हैं। लेकिन यदि फोटो व हस्ताक्षर का साइज 20 KB से अधिक या गलत डायमेंशन में हो, तो फॉर्म रिजेक्ट होने का खतरा रहता है।
  </p>

  <p>
    इस विस्तृत गाइड में 1600m एवं 800m दौड़ समय तालिका, गोला फेंक अंक तालिका, लिखित परीक्षा पाठ्यक्रम, हॉल टिकट डाउनलोड प्रक्रिया और हमारे मुफ्त <a href="/maharashtra-police-signature-resize/" class="text-primary font-semibold underline">SignResize महाराष्ट्र पुलिस रिसाइजर टूल</a> की पूरी जानकारी दी गई है।
  </p>
</section>

<!-- 1. महाराष्ट्र पुलिस तकनीकी मानदंड तालिका -->
<section id="mp-master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> महाराष्ट्र पुलिस भर्ती तकनीकी मानदंड (Technical Benchmark Specs)
  </h2>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">नियम / पैरामीटर</th>
          <th class="px-4 py-3">आधिकारिक पुलिस भर्ती मानक (Standard)</th>
          <th class="px-4 py-3">पोर्टल अपलोड सीमा एवं शर्त</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">पासपोर्ट फोटो साइज (Photo Dimensions)</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">160 × 200 पिक्सेल (या 160 × 212 px)</td>
          <td class="px-4 py-3 text-muted-foreground">5 KB से 20 KB (या अधिकतम 50 KB), JPG फॉर्मेट, हल्का बैकग्राउंड</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">हस्ताक्षर स्कैन साइज (Signature Dimensions)</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">256 × 64 पिक्सेल (या 200 × 80 px)</td>
          <td class="px-4 py-3 text-muted-foreground">5 KB से 20 KB, सफेद कागज पर काली स्याही के बॉलपेन से हस्ताक्षर</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">फिजिकल टेस्ट न्यूनतम पात्रता अंक</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">50% अंक (25 / 50 अंक)</td>
          <td class="px-4 py-3 text-muted-foreground">लिखित परीक्षा के 1:10 शॉर्टलिस्टिंग हेतु न्यूनतम 25 अंक अनिवार्य</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">लिखित परीक्षा प्रारूप (Written Exam)</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">100 बहुविकल्पीय प्रश्न • 100 अंक • 90 मिनट</td>
          <td class="px-4 py-3 text-muted-foreground">OMR आधारित परीक्षा; कोई नेगेटिव मार्किंग (Negative Marking) नहीं</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">आधिकारिक आवेदन पोर्टल</td>
          <td class="px-4 py-3 font-mono text-primary">policerecruitment2024.mahait.org / mahapolice.gov.in</td>
          <td class="px-4 py-3 text-muted-foreground">महाराष्ट्र सरकार आधिकारिक पुलिस भर्ती पोर्टल</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- चरण 1: फोटो एवं हस्ताक्षर अपलोड -->
<section id="mp-failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
      चरण 1 ऑनलाइन आवेदन
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📸 फोटो एवं हस्ताक्षर ऑनलाइन अपलोड गाइड (5 KB से 20 KB)
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    ऑनलाइन फॉर्म भरते समय अभ्यर्थियों को <em>"File size must be between 5 KB and 20 KB"</em> अथवा <em>"Invalid image dimensions"</em> जैसी त्रुटियों का सामना करना पड़ता है।
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 rounded-2xl bg-card border border-border space-y-2">
      <h3 class="font-bold text-foreground text-sm">आधिकारिक फोटो नियम</h3>
      <ul class="space-y-1.5 text-xs text-muted-foreground">
        <li>• <strong>चौड़ाई × ऊंचाई:</strong> 160 × 200 पिक्सेल (या 160 × 212 px)</li>
        <li>• <strong>फाइल साइज:</strong> सटीक 5 KB से 20 KB (JPG / JPEG)</li>
        <li>• <strong>बैकग्राउंड:</strong> हल्का / सफेद बैकग्राउंड व स्पष्ट चेहरा</li>
        <li>• <strong>नवीनतम फोटो:</strong> पिछले 3 महीने के भीतर खींची गई फोटो</li>
      </ul>
    </div>

    <div class="p-4 rounded-2xl bg-card border border-border space-y-2">
      <h3 class="font-bold text-foreground text-sm">आधिकारिक हस्ताक्षर नियम</h3>
      <ul class="space-y-1.5 text-xs text-muted-foreground">
        <li>• <strong>चौड़ाई × ऊंचाई:</strong> 256 × 64 पिक्सेल (या 200 × 80 px)</li>
        <li>• <strong>फाइल साइज:</strong> सटीक 5 KB से 20 KB (JPG / JPEG)</li>
        <li>• <strong>स्याही का प्रकार:</strong> सादे सफेद कागज पर काले बॉलपेन से हस्ताक्षर</li>
        <li>• <strong>नियम:</strong> प्रवाहित हस्तलेख में हस्ताक्षर (ब्लॉक कैपिटल अक्षरों में हस्ताक्षर न करें)</li>
      </ul>
    </div>
  </div>

  <div class="p-4 rounded-2xl bg-muted/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-3">
    <div>
      <h4 class="font-bold text-sm text-foreground">क्या आपको फोटो व हस्ताक्षर तुरंत रिसाइझ करना है?</h4>
      <p class="text-xs text-muted-foreground">हमारे मुफ्त टूल द्वारा 160×200 फोटो एवं 256×64 हस्ताक्षर तुरंत तैयार करें।</p>
    </div>
    <a href="/maharashtra-police-signature-resize/" class="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-90 transition whitespace-nowrap">
      फोटो व हस्ताक्षर रिसाइझ करें &rarr;
    </a>
  </div>
</section>

<!-- चरण 2: शारीरिक दक्षता परीक्षा (PET) -->
<section id="mp-failure-ground" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      चरण 2 शारीरिक दक्षता परीक्षा
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🏃 50 अंकों की शारीरिक परीक्षा (PET) एवं 1600m / 800m दौड़ समय तालिका
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    शारीरिक परीक्षा में अभ्यर्थियों को <strong>न्यूनतम 50% अंक (25/50 अंक)</strong> प्राप्त करना अनिवार्य है। 25 से कम अंक प्राप्त करने वाले अभ्यर्थी लिखित परीक्षा के लिए अयोग्य घोषित हो जाते हैं।
  </p>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <!-- पुरुष शारीरिक इवेंट -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>पुरुष अभ्यर्थी (फिजिकल टेस्ट - 50 अंक)</span>
        <span class="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-md">3 इवेंट</span>
      </h3>
      <ul class="space-y-2 text-xs">
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">1600 मीटर दौड़ (1600m Run)</span>
          <span class="font-mono font-bold text-primary">20 अंक</span>
        </li>
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">100 मीटर दौड़ (100m Sprint)</span>
          <span class="font-mono font-bold text-primary">15 अंक</span>
        </li>
        <li class="flex justify-between items-center py-1">
          <span class="font-medium text-foreground">गोला फेंक (Shot Put - 7.260 किग्रा)</span>
          <span class="font-mono font-bold text-primary">15 अंक</span>
        </li>
      </ul>
    </div>

    <!-- महिला शारीरिक इवेंट -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>महिला अभ्यर्थी (फिजिकल टेस्ट - 50 अंक)</span>
        <span class="text-xs font-mono bg-primary/10 text-primary px-2 py-0.5 rounded-md">3 इवेंट</span>
      </h3>
      <ul class="space-y-2 text-xs">
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">800 मीटर दौड़ (800m Run)</span>
          <span class="font-mono font-bold text-primary">20 अंक</span>
        </li>
        <li class="flex justify-between items-center py-1 border-b border-border/40">
          <span class="font-medium text-foreground">100 मीटर दौड़ (100m Sprint)</span>
          <span class="font-mono font-bold text-primary">15 अंक</span>
        </li>
        <li class="flex justify-between items-center py-1">
          <span class="font-medium text-foreground">गोला फेंक (Shot Put - 4.000 किग्रा)</span>
          <span class="font-mono font-bold text-primary">15 अंक</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- पुरुष 1600m दौड़ समय तालिका -->
  <div class="space-y-2">
    <h3 class="text-base font-bold text-foreground">पुरुष 1600 मीटर दौड़ समय एवं अंक तालिका</h3>
    <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
      <table class="w-full text-xs text-left border-collapse">
        <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] tracking-wider border-b border-border">
          <tr>
            <th class="px-4 py-2.5">दौड़ समय सीमा (Running Time)</th>
            <th class="px-4 py-2.5">प्राप्त अंक</th>
            <th class="px-4 py-2.5">पात्रता स्थिति</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border/60 font-mono">
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5 font-bold text-emerald-600 dark:text-emerald-400">5 मिनट 10 सेकंड या उससे कम</td>
            <td class="px-4 py-2.5 font-bold text-emerald-600 dark:text-emerald-400">20 / 20 अंक (पूर्ण अंक)</td>
            <td class="px-4 py-2.5 text-emerald-600 font-sans">अधिकतम अंक</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">5 मि. 11 से. से 5 मि. 30 से.</td>
            <td class="px-4 py-2.5 font-bold">18 अंक</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">योग्य (Qualified)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">5 मि. 31 से. से 5 मि. 50 से.</td>
            <td class="px-4 py-2.5 font-bold">15 अंक</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">योग्य (Qualified)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">5 मि. 51 से. से 6 मि. 10 से.</td>
            <td class="px-4 py-2.5 font-bold">12 अंक</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">योग्य (Qualified)</td>
          </tr>
          <tr class="hover:bg-muted/20">
            <td class="px-4 py-2.5">6 मि. 11 से. से 6 मि. 30 से.</td>
            <td class="px-4 py-2.5 font-bold">10 अंक</td>
            <td class="px-4 py-2.5 text-muted-foreground font-sans">योग्य (Qualified)</td>
          </tr>
          <tr class="hover:bg-muted/20 bg-rose-500/5">
            <td class="px-4 py-2.5 font-bold text-rose-600">6 मिनट 30 सेकंड से अधिक</td>
            <td class="px-4 py-2.5 font-bold text-rose-600">0 अंक</td>
            <td class="px-4 py-2.5 text-rose-600 font-sans font-bold">अयोग्य (Disqualified)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- चरण 3: गोला फेंक अंक तालिका -->
<section id="mp-failure-shotput" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      चरण 3 गोला फेंक परीक्षा
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      ⚽ गोला फेंक दूरी एवं अंक तालिका (Shot Put Table)
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
    <!-- पुरुष गोला फेंक -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>पुरुष गोला फेंक (7.260 किग्रा गोला)</span>
        <span class="text-primary font-mono">अधिकतम 15 अंक</span>
      </h3>
      <ul class="space-y-2 text-muted-foreground font-mono">
        <li class="flex justify-between font-bold text-emerald-600 dark:text-emerald-400"><span>8.50 मीटर या अधिक</span> <span>15 अंक</span></li>
        <li class="flex justify-between"><span>7.90m से 8.49m</span> <span>12 अंक</span></li>
        <li class="flex justify-between"><span>7.30m से 7.89m</span> <span>10 अंक</span></li>
        <li class="flex justify-between"><span>6.70m से 7.29m</span> <span>8 अंक</span></li>
        <li class="flex justify-between text-rose-600"><span>6.00 मीटर से कम</span> <span>0 अंक</span></li>
      </ul>
    </div>

    <!-- महिला गोला फेंक -->
    <div class="p-4 rounded-2xl bg-card border border-border space-y-3">
      <h3 class="font-bold text-foreground flex items-center justify-between border-b border-border pb-2">
        <span>महिला गोला फेंक (4.000 किग्रा गोला)</span>
        <span class="text-primary font-mono">अधिकतम 15 अंक</span>
      </h3>
      <ul class="space-y-2 text-muted-foreground font-mono">
        <li class="flex justify-between font-bold text-emerald-600 dark:text-emerald-400"><span>6.00 मीटर या अधिक</span> <span>15 अंक</span></li>
        <li class="flex justify-between"><span>5.50m से 5.99m</span> <span>12 अंक</span></li>
        <li class="flex justify-between"><span>5.00m से 5.49m</span> <span>10 अंक</span></li>
        <li class="flex justify-between"><span>4.50m से 4.99m</span> <span>8 अंक</span></li>
        <li class="flex justify-between text-rose-600"><span>4.00 मीटर से कम</span> <span>0 अंक</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- चरण 4: लिखित परीक्षा पाठ्यक्रम -->
<section id="mp-failure-written" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      चरण 4 लिखित परीक्षा
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📚 100 अंकों की लिखित परीक्षा पाठ्यक्रम एवं विषयवार अंक विभाजन
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    लिखित परीक्षा OMR आधारित <strong>100 प्रश्नों की 100 अंकों के लिए</strong> होती है जिसकी समय सीमा <strong>90 मिनट</strong> है। इसमें <strong>कोई नेगेटिव मार्किंग (No Negative Marking)</strong> नहीं है।
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">विषय (Subject)</th>
          <th class="px-4 py-3">प्रश्न</th>
          <th class="px-4 py-3">अंक</th>
          <th class="px-4 py-3">मुख्य विषय एवं टॉपिक</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">मराठी व्याकरण</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 अंक</td>
          <td class="px-4 py-3 text-muted-foreground">संधि, समास, प्रयोग, अलंकार, पर्यायवाची व विलोम शब्द, मुहावरे एवं कहावतें</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">गणित / अंकगणित (Mathematics)</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 अंक</td>
          <td class="px-4 py-3 text-muted-foreground">संख्या पद्धति, ल.स.प.-म.स.प., लाभ-हानि, प्रतिशत, औसत, समय व कार्य</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">रीजनिंग / बुद्धिमत्ता (Reasoning)</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 अंक</td>
          <td class="px-4 py-3 text-muted-foreground">अक्षर श्रृंखला, संख्या श्रृंखला, वेन आरेख, रक्त संबंध, घड़ी एवं कैलेंडर</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">सामान्य ज्ञान एवं समसामयिकी</td>
          <td class="px-4 py-3 font-mono">25</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">25 अंक</td>
          <td class="px-4 py-3 text-muted-foreground">महाराष्ट्र इतिहास व भूगोल, संविधान, पंचायत राज, सहकारिता, खेलकूद घटनाक्रम</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- चरण 5: प्रवेश पत्र (Hall Ticket) डाउनलोड -->
<section id="mp-failure-hallticket" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      चरण 5 प्रवेश पत्र (Admit Card)
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🎟️ महाराष्ट्र पुलिस भर्ती हॉल टिकट (Hall Ticket) डाउनलोड प्रक्रिया
    </h2>
  </div>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <p><strong>स्टेप 1:</strong> महाआईटी आधिकारिक वेबसाइट पर जाएं: <a href="https://policerecruitment2024.mahait.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">policerecruitment2024.mahait.org</a> अथवा <a href="https://www.mahapolice.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary font-bold underline">mahapolice.gov.in</a>.</p>
    <p><strong>स्टेप 2:</strong> अपना पंजीकृत <strong>आवेदन क्रमांक (User ID / Application No)</strong> एवं <strong>पासवर्ड / जन्मतिथि</strong> दर्ज करें।</p>
    <p><strong>स्टेप 3:</strong> <strong>Download Hall Ticket (फिजिकल टेस्ट / लिखित परीक्षा)</strong> विकल्प पर क्लिक करें।</p>
    <p><strong>स्टेप 4:</strong> प्रवेश पत्र की 2 रंगीन प्रतियां प्रिंट करें तथा मूल पहचान पत्र (आधार कार्ड/मतदाता पहचान पत्र/ड्राइविंग लाइसेंस) के साथ मैदान पर उपस्थित हों।</p>
  </div>
</section>

<!-- टूल कॉलआउट -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">महाराष्ट्र पुलिस फॉर्म के लिए फोटो व हस्ताक्षर तुरंत रिसाइझ करें</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">फोटो 160×200 px (5 से 20 KB) एवं हस्ताक्षर 256×64 px (5 से 20 KB) रिसाइझ करने के लिए हमारा मुफ्त टूल इस्तेमाल करें।</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/maharashtra-police-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      पुलिस भर्ती रिसाइझर टूल खोलें &rarr;
    </a>
    <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      सामान्य फोटो रिसाइझर
    </a>
  </div>
</div>
`
  },

  {
    slug: "ssc-chsl-2026-top-10-faq-aspirants-guide",
    title: "SSC CHSL 2026: Top 10 FAQs on 12th Pass Eligibility, Typing Speed, Live Photo & Tier-1 Pattern",
    metaTitle: "SSC CHSL 2026: 12th Pass, Typing Speed & Live Photo FAQs",
    metaDescription: "Official SSC CHSL 2026 guide: 12th pass eligibility, DEO/LDC typing speed rules, live camera capture & Tier-1 syllabus. Resize SSC documents online free!",
    excerpt: "Authoritative candidate handbook for SSC CHSL 2026: 10+2 eligibility, LDC/DEO post breakdown, typing speed standards, 140×60 px signature rules, and Tier-1 preparation.",
    category: "Exam Alerts",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Staff Selection Commission Analytics Team",
    readTime: "9 min read",
    featured: false,
    tags: ["SSC CHSL 2026","10+2 Govt Jobs","LDC DEO Typing Test","SSC Live Photo","SSC CHSL Syllabus","Signature 140x60"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Staff Selection Commission (SSC)"
        },
        {
            "label": "Posts Offered",
            "value": "Lower Division Clerk (LDC), JSA, Data Entry Operator (DEO)"
        },
        {
            "label": "Educational Criteria",
            "value": "12th Standard (10+2) Pass from recognized board"
        },
        {
            "label": "Selection Stages",
            "value": "Tier-1 (Objective CBE) + Tier-2 (Objective + Skill/Typing)"
        },
        {
            "label": "Typing Requirement",
            "value": "35 WPM English or 30 WPM Hindi (LDC); 8,000 KDPH (DEO)"
        },
        {
            "label": "Document Specs",
            "value": "Live Webcam Photo + Signature (140×60 px, 10–20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational qualification for SSC CHSL 2026?",
            "answer": "Candidates must have passed 12th Standard (10+2) or equivalent examination from a recognized Board or University. For the post of Data Entry Operator (DEO / DEO Grade 'A') in the Office of Comptroller and Auditor General of India (CAG), Ministry of Consumer Affairs, candidates must have passed 12th Standard in Science stream with Mathematics as a subject."
        },
        {
            "question": "What are the typing speed requirements for LDC and DEO posts in Tier-2?",
            "answer": "For Lower Division Clerk (LDC) / Junior Secretariat Assistant (JSA): Candidates must achieve a typing speed of 35 words per minute (WPM) in English (approx. 10,500 key depressions per hour) OR 30 words per minute in Hindi (approx. 9,000 KDPH) in a 10-minute test. For Data Entry Operator (DEO): Speed requirement is 8,000 key depressions per hour (approx. 27 WPM) for general DEO, and 15,000 KDPH (approx. 50 WPM) for DEO Grade 'A' in CAG."
        },
        {
            "question": "What is the age limit and relaxation criteria for SSC CHSL 2026?",
            "answer": "Candidates must be between 18 and 27 years of age on the crucial date. Standard Central Government age relaxations apply: OBC candidates receive +3 years (up to 30 years), SC/ST candidates receive +5 years (up to 32 years), and PwBD candidates receive +10 to +15 years."
        },
        {
            "question": "Does Tier-1 marks count towards final merit in SSC CHSL?",
            "answer": "No. Tier-1 is purely qualifying in nature to shortlist candidates for Tier-2. The final all-India merit list and post allocation are based 100% on the aggregate score obtained in Tier-2 (Paper-I: Sections 1 & 2), subject to clearing the Computer Knowledge Module and Skill Test / Typing Test."
        },
        {
            "question": "What is the negative marking deduction in SSC CHSL Tier-1 and Tier-2?",
            "answer": "In Tier-1, each question carries 2 marks with a negative marking penalty of 0.50 marks (25%) per incorrect answer. In Tier-2 Paper-I, each question carries 3 marks with a negative marking penalty of 1 mark (33.3%) per wrong response. Unattempted questions carry zero penalty."
        },
        {
            "question": "How does the live webcam photo capture work on the SSC portal for CHSL?",
            "answer": "Candidates capture a live photograph directly through the browser webcam on ssc.gov.in or using the MySSC mobile app. The candidate's face must occupy 80% of the frame against a plain light-colored background. No spectacles, tinted lenses, caps, or headwear (except mandatory religious headwear that does not obscure facial outline) are permitted."
        },
        {
            "question": "What are the exact signature specifications for SSC CHSL online application?",
            "answer": "The signature must be a scanned digital image measuring 140 pixels wide by 60 pixels high (aspect ratio ~4.0 cm × 2.0 cm). The file size must strictly fall between 10.0 KB and 20.0 KB in JPG/JPEG format. It must be written in black ballpoint ink in running cursive handwriting on unruled white paper. Signatures written in capital or block letters are automatically rejected."
        },
        {
            "question": "Can 12th appearing students apply for SSC CHSL 2026?",
            "answer": "Students appearing in their 12th standard examination can apply only if their final 12th result is formally declared by their recognized educational board on or before the crucial cut-off date specified in the official notification."
        },
        {
            "question": "What is the application fee and correction fee structure for SSC CHSL?",
            "answer": "The online registration fee is ₹100. Female candidates, SC, ST, PwBD, and Ex-Servicemen are 100% exempted from paying the fee. During the application correction window, SSC charges ₹200 for the first correction and ₹500 for a second resubmission."
        },
        {
            "question": "What is the starting monthly in-hand salary for an LDC and DEO?",
            "answer": "For LDC/JSA (Pay Level 2, Basic ₹19,900): In Class X metro cities (Delhi, Mumbai), gross salary is ~₹39,000, yielding net in-hand pay of approximately ₹34,000–₹36,000 per month. For DEO (Pay Level 4, Basic ₹25,500): Gross pay is ~₹46,000, with net in-hand salary around ₹40,000–₹43,000 per month."
        },
        {
            "question": "Can an average 12th-pass aspirant clear SSC CHSL 2026 on the first attempt?",
            "answer": "Yes. SSC CHSL syllabus is very similar to SSC CGL but with standard 12th-level arithmetic and comprehension. To clear on your first attempt: (1) Complete syllabus fundamentals across Reasoning, Maths, English, and GK within 3 months. (2) Solve last 5 years' TCS question papers. (3) Start 30 minutes of daily keyboard typing practice to easily achieve the required 35 words per minute speed for LDC/DEO posts."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>SSC CHSL 2026: Premier 10+2 Central Government Gateway</h2>
        <p>Looking for the official <strong>SSC CHSL 2026 eligibility criteria</strong>, <strong>SSC CHSL live photo guidelines</strong>, and exact <strong>LDC typing speed requirements</strong>? The Combined Higher Secondary Level (10+2) Examination recruits young aspirants directly after 12th standard into central ministries, administrative tribunals, and constitutional bodies as Lower Division Clerks (LDC), Junior Secretariat Assistants (JSA), and Data Entry Operators (DEO) on <a href="https://ssc.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">ssc.gov.in</a>.</p>
        
        <p>Explore other 12th-pass recruitments across India in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>

        <div class="my-6 p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
          <h4 class="font-bold text-primary text-base flex items-center gap-2">
            <span>⚡</span> CHSL Post Hierarchy &amp; Pay Levels
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-foreground/90 pt-1">
            <li><strong>LDC / JSA:</strong> Pay Level 2 (₹19,900 – ₹63,200 | Net ~₹34,000–₹38,000)</li>
            <li><strong>Data Entry Operator (DEO):</strong> Pay Level 4 (₹25,500 – ₹81,100 | Net ~₹42,000–₹46,000)</li>
            <li><strong>DEO Grade 'A':</strong> Pay Level 4 in CAG and Ministry of Consumer Affairs</li>
          </ul>
        </div>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Tier-1 &amp; Tier-2 Examination Pattern</h2>
        <p>Tier-1 consists of 100 questions carrying 200 marks in 60 minutes with <strong>0.50 marks negative marking</strong>. Tier-1 is qualifying in nature. Tier-2 decides the final merit list alongside the mandatory Data Entry Speed Test (DEST).</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>SSC CHSL Document Upload Compliance</h2>
        <p>SSC uses live camera capture for photos and mandates scanned signatures measuring <strong>140 × 60 pixels (10.0 KB to 20.0 KB)</strong> in black ballpoint ink. Block capital signatures are disqualified.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare SSC CHSL Signature in Seconds</h4>
          <p class="text-sm text-muted-foreground">Format your signature to exact 140×60 px (10–20 KB) with our dedicated <a href="/ssc-signature-resize/" class="text-primary font-bold underline">SSC Signature Resizer Tool</a> or format documents via <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open SSC CHSL Resizer</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 10-20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">SSC CHSL 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your SSC CHSL 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "rrb-alp-technician-2026-top-10-faq-guide",
    title: "RRB ALP & Technician 2026: Top 10 FAQs on ITI/Diploma Eligibility, Vision Standards & CBT Blueprint",
    metaTitle: "RRB ALP, Tech 2026: Vision Rules, ITI & CBT Pattern FAQs",
    metaDescription: "Official RRB ALP & Technician 2026 guide: A-1 vision standards without glasses, ITI/Diploma trades, CBT-2 pattern & top FAQs. Resize railway documents free!",
    excerpt: "Comprehensive candidate handbook for Railway RRB ALP & Technician 2026: 18,799+ posts, strict A-1 medical vision criteria, CBAT psycho test, and document upload rules.",
    category: "Study Prep",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Railway Technical Recruitment Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["RRB ALP 2026","Technician Grade 3","Railway Loco Pilot","A-1 Vision Standards","CBAT Psycho Test","Railway Document Specs"],
    relatedExamPreset: "rrb-railway",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Railway Recruitment Boards (RRBs)"
        },
        {
            "label": "Total Vacancies",
            "value": "18,799+ Posts (ALP & Technician)"
        },
        {
            "label": "Educational Criteria",
            "value": "Matriculation + ITI / Diploma in Engineering"
        },
        {
            "label": "Medical Standard (ALP)",
            "value": "Strict A-1 (Distant vision 6/6 without glasses, no LASIK)"
        },
        {
            "label": "Selection Stages",
            "value": "CBT-1 + CBT-2 (Part A & B) + CBAT (Psycho) + DV"
        },
        {
            "label": "Document Specs",
            "value": "Photo (35×45 mm, 20-50 KB) + Signature (10-20 KB)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational qualification for Assistant Loco Pilot (ALP)?",
            "answer": "Candidates must have passed 10th Class (Matriculation) PLUS hold an ITI Certificate in recognized trades (Fitter, Electrician, Instrument Mechanic, Millwright, Wireman, Tractor Mechanic, Diesel Mechanic, Turner, Machinist, RAC) OR hold a 3-year Diploma in Mechanical, Electrical, Electronics, or Automobile Engineering from a recognized institution. Degree holders (B.E./B.Tech) in these engineering disciplines are also eligible."
        },
        {
            "question": "What is the Medical Standard A-1 required for Assistant Loco Pilot?",
            "answer": "Medical Standard A-1 is strictly enforced: Distant Vision must be 6/6, 6/6 without glasses (no glasses or spectacles permitted). Near Vision must be Sn: 0.6, 0.6 without glasses. Candidates must pass tests for Color Vision, Binocular Vision, Field of Vision, and Night Vision. Candidates who have undergone LASIK, PRK, or any refractive eye surgery are permanently disqualified."
        },
        {
            "question": "What is the Computer Based Aptitude Test (CBAT) for ALP candidates?",
            "answer": "CBAT (Psycho Test) is mandatory only for candidates who qualify CBT-2 for the post of ALP. Candidates equal to 8 times the vacancy are shortlisted. The test comprises 5 battery tests (Memory Test, Following Directions, Depth Perception, Concentration, and Perceptual Speed). Candidates must score a minimum T-score of 42 marks in EACH test battery separately to qualify. CBAT carries 30% weightage in final merit."
        },
        {
            "question": "What is the passing criteria for CBT-2 Part B (Trade Test)?",
            "answer": "CBT-2 Part B is a qualifying technical test consisting of 75 questions based on DGET curriculum for the candidate's chosen trade. Candidates must score a mandatory minimum of 35% marks (26.25 marks out of 75) regardless of their category (UR, OBC, SC, ST). Part B marks are not added to final merit, but failing Part B disqualifies the candidate even if they scored 100/100 in Part A."
        },
        {
            "question": "What is the negative marking penalty in RRB ALP CBT-1 and CBT-2?",
            "answer": "A negative marking penalty of 1/3rd (0.33 marks) is deducted for each incorrect answer in CBT-1 and CBT-2 (Part A and Part B). However, there is NO negative marking in the Computer Based Aptitude Test (CBAT Psycho Test)."
        },
        {
            "question": "Can a candidate apply for multiple RRB zones in ALP 2026?",
            "answer": "No. Candidates can apply to ONLY ONE regional Railway Recruitment Board (RRB). Applying to more than one RRB is considered a duplicate registration, resulting in immediate rejection of all submitted applications."
        },
        {
            "question": "What are the photo and signature upload requirements for RRB ALP?",
            "answer": "The candidate's photograph must be a clear color portrait (35 × 45 mm, 20.0 KB to 50.0 KB in JPG/JPEG) taken against a plain light background within 3 months. The signature must measure 140 × 60 pixels, strictly between 10.0 KB and 20.0 KB in JPG/JPEG, penned in black ballpoint ink on clean white unruled paper in running cursive handwriting."
        },
        {
            "question": "What is the age limit and relaxation for RRB ALP candidates?",
            "answer": "The general age limit is 18 to 33 years (inclusive of 3-year COVID relaxation). Reserved categories receive standard statutory relaxations: OBC (Non-Creamy Layer) gets +3 years (up to 36 years), SC/ST gets +5 years (up to 38 years), and Ex-Servicemen get service years deduction + 3 years."
        },
        {
            "question": "What is the difference between ALP and Technician posts in RRB recruitment?",
            "answer": "ALP is a train-running cadre responsible for piloting electric and diesel trains, requiring strict A-1 medical vision and the CBAT psycho test. Technician Grade 3 posts are workshop and depot-based technical roles (Carriage & Wagon, Diesel Electrical, Track Machine, Signal & Telecommunication) requiring B-1 or C-1 medical standards, without requiring the CBAT psycho test."
        },
        {
            "question": "What is the starting in-hand salary and running allowance for an Assistant Loco Pilot?",
            "answer": "ALP starts at 7th CPC Pay Level 2 with Basic Pay of ₹19,900. In addition to DA (~50%), HRA, and Transport Allowance, ALPs earn generous Running Allowance (Kilometre Allowance for train running duties at approx. ₹4.50 to ₹5.50 per km), allowing monthly gross earnings to routinely reach ₹52,000–₹65,000, with net in-hand salary ~₹45,000–₹58,000."
        },
        {
            "question": "Can an ITI or Diploma candidate clear RRB ALP & Technician 2026?",
            "answer": "Yes. The majority of successful ALP and Technician candidates are ITI and Diploma holders. The key to clearing is: (1) Score 75+ in CBT-1 by mastering Basic Science & Engineering, Maths, and Reasoning. (2) In CBT-2 Part B, secure at least 35% qualifying marks in your trade theory. (3) For ALP aspirants, practice memory and observation tests for the CBAT aptitude stage."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>RRB Assistant Loco Pilot (ALP) &amp; Technician 2026 Recruitment</h2>
        <p>Looking for the official <strong>RRB ALP eligibility criteria</strong>, <strong>strict A-1 medical vision standards</strong>, and exact <strong>railway document upload rules</strong>? Covering over <strong>18,799 vacancies</strong> across Indian Railways, this guide breaks down trade qualifications, Computer Based Tests, and psycho batteries on <a href="https://rrbcdg.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">rrbcdg.gov.in</a>.</p>
        
        <p>Assistant Loco Pilots drive Indian Railways electric and diesel locomotives, commanding high running allowances. Explore other technical government jobs in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>CBT-1, CBT-2 &amp; CBAT Psycho Test Structure</h2>
        <p>CBT-1 has 75 questions in 60 minutes (screening test). CBT-2 has Part A (100 questions / 90 min, decides merit) and Part B (75 questions / 60 min, technical trade test requiring 35% pass mark). Negative marking is <strong>1/3rd mark</strong>.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>RRB ALP Document Upload Specifications</h2>
        <p>Upload a color photo (35×45 mm, 20–50 KB) on white background and scanned signature (140×60 px, 10–20 KB) in black ink. Capital signatures are rejected.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare RRB ALP Signature in 10-20 KB</h4>
          <p class="text-sm text-muted-foreground">Resize your railway signature to 140×60 px and compress within 10–20 KB bounds using our <a href="/rrb-signature-resize/" class="text-primary font-bold underline">RRB Signature Resizer</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/rrb-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open RRB ALP Tool</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">RRB ALP & Technician 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RRB ALP & Technician 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "india-post-gds-2026-top-10-faq-complete-guide",
    title: "India Post GDS 2026: Top 10 FAQs on 10th Merit Selection, Cutoffs, BPM/ABPM Posts & Documents",
    metaTitle: "India Post GDS 2026: 10th Merit, BPM Posts & Cutoffs FAQ",
    metaDescription: "Official India Post GDS 2026 guide: 10th class merit cutoff rules, BPM/ABPM salaries, photo/sign upload specs & top FAQs. Resize GDS documents online free!",
    excerpt: "Everything candidates ask about India Post GDS 2026: 44,000+ Branch Postmaster (BPM) & ABPM vacancies, 10th marks merit cutoffs, no exam selection, and photo specs.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Postal Department Recruitment Desk",
    readTime: "8 min read",
    featured: false,
    tags: ["India Post GDS 2026","Gramin Dak Sevak","10th Merit Govt Jobs","BPM ABPM Salary","Post Office Recruitment","Photo Resizer 50KB"],
    relatedExamPreset: "ssc-general",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Department of Posts (India Post, Govt. of India)"
        },
        {
            "label": "Total Vacancies",
            "value": "44,228+ Posts across 23 Postal Circles"
        },
        {
            "label": "Designations",
            "value": "Branch Postmaster (BPM) & Assistant Branch Postmaster (ABPM)"
        },
        {
            "label": "Selection Mode",
            "value": "100% Merit-Based (No Written Exam / No Interview)"
        },
        {
            "label": "Educational Criteria",
            "value": "10th Class (Secondary) Pass with Maths & English"
        },
        {
            "label": "Document Specs",
            "value": "Photo (200×230 px, &lt;50 KB) + Signature (140×60 px, &lt;20 KB)"
        }
    ],
    faqs: [
        {
            "question": "Is there any written examination or interview for India Post GDS selection?",
            "answer": "No. India Post GDS recruitment has NO written examination and NO personal interview. Selection is formulated 100% on the basis of a candidate's 10th Standard (Secondary School Examination) marks. An automated system-generated merit list is prepared based on the aggregate percentage scored in 10th board exams."
        },
        {
            "question": "What is the educational qualification required for GDS recruitment?",
            "answer": "Candidates must have passed 10th Standard (Secondary School Examination) from a recognized Board of Education with passing marks in Mathematics and English as compulsory or elective subjects. Candidates must also have studied the official local language of their postal circle up to at least 10th standard."
        },
        {
            "question": "What are the roles and differences between BPM and ABPM posts?",
            "answer": "Branch Postmaster (BPM): Heads the Branch Post Office, manages postal operations, India Post Payments Bank (IPPB) transactions, speed post bookings, and village financial inclusion. Time-Related Continuity Allowance (TRCA) Level 1 starts at ₹12,000–₹29,380. Assistant Branch Postmaster (ABPM / Dak Sevak): Handles mail delivery, stamps sale, letterbox clearance, and mail conveyance. TRCA Level 1 starts at ₹10,000–₹24,470."
        },
        {
            "question": "How are merit scores calculated if my 10th board awarded CGPA or grades instead of marks?",
            "answer": "For candidates whose board results display CGPA or letter grades, multiplication factor rules apply: For CBSE candidates, the CGPA is multiplied by 9.5 to compute the percentage. For boards with grade points, standard board conversion tables must be followed. Providing manual marks without approved board conversion leads to cancellation during document verification."
        },
        {
            "question": "What are the age limits and relaxation criteria for India Post GDS?",
            "answer": "Candidates must be between 18 and 40 years of age on the closing date of application submission. Age relaxations apply: OBC candidates receive +3 years (up to 43 years), SC/ST candidates receive +5 years (up to 45 years), PwD candidates receive +10 years, and PwD + OBC receive +13 years."
        },
        {
            "question": "What are the exact photo and signature upload requirements on the GDS portal?",
            "answer": "The photograph must be a clear recent color passport picture measuring 200 × 230 pixels, with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format. The signature must measure 140 × 60 pixels, with file size strictly between 10.0 KB and 20.0 KB in JPG/JPEG format, penned on clean white unruled paper in black ink."
        },
        {
            "question": "Is computer knowledge or a computer certificate mandatory for GDS joining?",
            "answer": "Candidates must have basic computer knowledge. A certificate of at least 60 days duration from a recognized computer training institute is required, unless the candidate studied Computer Science as a formal subject in 10th, 12th, or college level."
        },
        {
            "question": "Can a candidate apply for postal circles outside their home state?",
            "answer": "Yes, candidates can apply for posts in any postal circle across India, provided they have studied the specified local language of that circle up to 10th standard and can read, write, and speak it fluently."
        },
        {
            "question": "How many preference posts can a candidate select in their GDS application?",
            "answer": "Candidates can select up to a maximum of 20 to 50 post preferences across eligible divisions within a chosen postal circle in a single application form."
        },
        {
            "question": "What is the monthly in-hand salary of a BPM and ABPM including allowances?",
            "answer": "Branch Postmaster (BPM) receives a minimum TRCA of ₹12,000 for 4 hours of daily duty. Adding Dearness Allowance (~50%), Office Maintenance Allowance (OMA ₹500), and stationary allowance, gross monthly pay is ~₹18,500–₹21,000. Assistant Branch Postmaster (ABPM) receives TRCA of ₹10,000, with gross monthly pay around ~₹15,500–₹17,500."
        },
        {
            "question": "Can I get selected in India Post GDS 2026 with average 10th marks?",
            "answer": "Selection in India Post GDS is 100% merit-based on 10th-grade percentages with no entrance examination. While popular urban division cutoffs often exceed 95%+, candidates with 75% to 88% marks frequently get selected in subsequent merit lists (Lists 2, 3, and 4) by strategically choosing rural, tribal, or remote branch post offices with lower applicant ratios."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>India Post Gramin Dak Sevak (GDS) 2026: No-Exam Merit Gateway</h2>
        <p>Looking for the official <strong>India Post GDS 2026 eligibility criteria</strong>, <strong>10th class merit cutoff calculations</strong>, and exact <strong>GDS photo/signature specifications</strong>? With over <strong>44,228 vacancies</strong> announced across 23 postal circles, this guide explains selection on <a href="https://indiapostgdsonline.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">indiapostgdsonline.gov.in</a>.</p>
        
        <p>GDS recruitment offers direct government employment with zero written examination. Check other 10th-pass vacancies in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Selection Mechanics &amp; Merit List Compilation</h2>
        <p>Selection is formulated automatically by an online computerized system based on candidate 10th standard board percentage calculated to four decimal places. Candidates who studied English, Mathematics, and the local regional language as compulsory subjects are prioritized.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>India Post GDS Document Upload Rules</h2>
        <p>Portal guidelines enforce: <strong>Photograph: under 50.0 KB (200×230 px)</strong> and <strong>Signature: under 20.0 KB (140×60 px)</strong> in JPG format.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Resize India Post GDS Documents in 1 Click</h4>
          <p class="text-sm text-muted-foreground">Crop and compress your photo to under 50 KB and signature to under 20 KB using our <a href="/photo-resizer/" class="text-primary font-bold underline">Photo Resizer</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open GDS Photo Resizer (50 KB)</span>
              <span>&rarr;</span>
            </a>
            <a href="/ssc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Signature Resizer (20 KB)
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">India Post GDS 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your India Post GDS 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "up-police-constable-si-2026-top-10-faq-guide",
    title: "UP Police Constable & SI 2026: Top 10 FAQs on 60,000+ Posts, Physical Running Standards & OMR Exam",
    metaTitle: "UP Police Constable 2026: 60K Posts, PET Running & FAQs",
    metaDescription: "Official UP Police Constable 2026 guide: 4.8km running standards, 300-mark OMR exam blueprint, eligibility & top FAQs. Resize UP police photos online free!",
    excerpt: "Everything candidates ask about UP Police Constable & SI 2026: 60,244 vacancies, 4.8km running criteria, Digilocker document upload rules, and OMR written exam strategy.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "UP Police Recruitment Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["UP Police Constable 2026","UPPRPB Bharti","UP Police Running Test","UP Police OMR Exam","Digilocker Upload","Police Constable Jobs"],
    relatedExamPreset: "up-police",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "UP Police Recruitment & Promotion Board (UPPRPB)"
        },
        {
            "label": "Total Vacancies",
            "value": "60,244+ Constable Posts (Direct Recruitment)"
        },
        {
            "label": "Educational Criteria",
            "value": "12th Standard (Intermediate) Pass from recognized board"
        },
        {
            "label": "Physical Running Test",
            "value": "Male: 4.8 km in 25 min | Female: 2.4 km in 14 min"
        },
        {
            "label": "Written Examination",
            "value": "300 Marks (150 Objective Questions, 2 Hours OMR)"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50 KB) + Signature (5-20 KB in Black Ink)"
        }
    ],
    faqs: [
        {
            "question": "What is the educational qualification for UP Police Constable 2026?",
            "answer": "Candidates must have passed 12th Standard (Intermediate) from a recognized Board of Secondary Education (such as UP Board, CBSE, ICSE, or state equivalence). For Sub-Inspector (SI) posts, candidates must hold a Bachelor's Degree in any discipline from a recognized University."
        },
        {
            "question": "What are the physical running standards for Male and Female candidates in UP Police?",
            "answer": "For Male candidates: running distance of 4.8 kilometers to be completed within 25 minutes. For Female candidates: running distance of 2.4 kilometers to be completed within 14 minutes. The Physical Efficiency Test (PET) is purely qualifying in nature; failing to finish within the allotted time leads to instant elimination."
        },
        {
            "question": "What are the height and chest measurement criteria for UP Police Constable?",
            "answer": "For Male candidates: Minimum height is 168 cm (160 cm for ST candidates). Chest measurement must be unexpanded minimum 79 cm with mandatory 5 cm expansion (expanded 84 cm). For Female candidates: Minimum height is 152 cm (147 cm for ST candidates) with minimum weight requirement of 40 kg."
        },
        {
            "question": "What is the negative marking deduction in the UP Police written exam?",
            "answer": "Each question carries 2 marks. A negative marking penalty of 0.50 marks (25%) is deducted for each incorrect answer across all 4 subjects (General Knowledge, General Hindi, Numerical & Mental Ability, Mental Aptitude/Reasoning). Unattempted questions incur no mark deduction."
        },
        {
            "question": "Can candidates from outside Uttar Pradesh apply for UP Police Constable?",
            "answer": "Yes, candidates from all Indian states are eligible to apply. However, all non-UP domicile candidates are categorized under the Unreserved (General) category, regardless of their caste or reservation status in their home states."
        },
        {
            "question": "What are the age limits and relaxation norms for UP Police Constable?",
            "answer": "Standard age limit is 18 to 22 years for male candidates and 18 to 25 years for female candidates. Following government orders, age relaxations of 3 to 5 years apply for SC, ST, and OBC candidates domiciled in Uttar Pradesh."
        },
        {
            "question": "What are the photo and signature specifications for the UPPRPB portal?",
            "answer": "Photograph must be a clear recent color passport portrait (3.5 × 4.5 cm, 20.0 KB to 50.0 KB in JPG format) against a white or light grey background without spectacles or caps. The signature must measure 3.5 × 1.5 cm with file size strictly between 5.0 KB and 20.0 KB in JPG format, signed in black ink on white paper."
        },
        {
            "question": "How does the Digilocker integration work during online registration?",
            "answer": "UPPRPB integrates with Digilocker to automatically fetch verified 10th and 12th certificates, domicile, and category documents. Candidates with active Digilocker accounts can authorize instant document verification, eliminating manual upload discrepancies."
        },
        {
            "question": "What is the normalization formula used by UPPRPB for multi-shift exams?",
            "answer": "UPPRPB uses the standard Percentile-based Normalization Formula approved by the Supreme Court to adjust raw scores across multi-day, multi-shift examinations, ensuring uniform fairness across question paper difficulties."
        },
        {
            "question": "What is the monthly starting salary for a UP Police Constable?",
            "answer": "Constable is appointed under Pay Matrix Level 3 (Pay Band ₹5,200–₹20,200 with Grade Pay ₹2,000). Starting Basic Pay is ₹21,700. Including DA (~50%), HRA, and allowances, gross salary is ~₹38,000–₹41,000, with net in-hand salary of approximately ₹33,000–₹36,000 per month."
        },
        {
            "question": "Can I clear UP Police Constable 2026 written exam and 4.8 km run in 60 days?",
            "answer": "Yes. The 60,244 vacancies offer unprecedented odds. In 60 days: (1) Written: Practice General Hindi (37 Qs) and Reasoning (55 Qs)—these two sections alone account for 92 out of 150 questions (184 marks out of 300). (2) Physical: Begin jogging 2–3 km daily from day one, gradually increasing endurance to complete 4.8 km in 25 minutes."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>UP Police Constable Recruitment 2026: 60,000+ Mega Drive</h2>
        <p>Looking for the official <strong>UP Police Constable 2026 eligibility criteria</strong>, <strong>physical running test standards</strong>, and exact <strong>UPPRPB document upload guidelines</strong>? Covering over <strong>60,244 vacancies</strong> announced by the Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB, Lucknow), this comprehensive handbook explains everything you need to apply on <a href="https://uppbpb.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">uppbpb.gov.in</a>.</p>
        
        <p>This historic recruitment offers direct appointment as Civil Police Constables across Uttar Pradesh. Explore other state police drives in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Written Examination Pattern: 300-Mark OMR Blueprint</h2>
        <p>The written exam is conducted offline via OMR sheets, featuring 150 questions carrying 300 marks (2 marks per question) in 2 hours. Negative marking is <strong>0.50 marks (25%)</strong> per incorrect answer.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>UPPRPB Document &amp; Digilocker Compliance</h2>
        <p>Candidates must upload documents through Digilocker or scanned files: <strong>Photo (3.5×4.5 cm, 20–50 KB)</strong> and <strong>Signature (3.5×1.5 cm, 5–20 KB)</strong> in black ink.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare UP Police Documents Instantly</h4>
          <p class="text-sm text-muted-foreground">Resize your photo to 20-50 KB and signature to 5-20 KB with our <a href="/uppsc-signature-resize/" class="text-primary font-bold underline">UP Police Resizer Preset</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/uppsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open UP Police Resizer</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">UP Police Constable & SI 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your UP Police Constable & SI 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "rbi-grade-b-assistant-2026-top-10-faq-guide",
    title: "RBI Grade B & Assistant 2026: Top 10 FAQs on 60% Graduation Rule, Phase-II Pattern & Salary",
    metaTitle: "RBI Grade B 2026: 60% Rule, Phase-II Pattern, Salary FAQs",
    metaDescription: "Official RBI Grade B & Assistant 2026 guide: 60% graduation criteria, Phase-II descriptive blueprint, salary & top FAQs. Resize RBI documents online free!",
    excerpt: "Authoritative candidate handbook for Reserve Bank of India Grade B (General/DEPR/DSIM) & Assistant 2026: 60% degree rules, descriptive economic papers, and salary.",
    category: "Career Opportunity",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Academic Research Desk",
    authorRole: "Central Banking Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["RBI Grade B 2026","RBI Assistant","Reserve Bank of India","Economic and Social Issues","Finance and Management","Banking Careers"],
    relatedExamPreset: "ibps-sbi",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Reserve Bank of India Services Board (RBISB)"
        },
        {
            "label": "Designations",
            "value": "Officers in Grade 'B' (General / DEPR / DSIM) & Assistant"
        },
        {
            "label": "Educational Criteria",
            "value": "Minimum 60% in Graduation (50% for SC/ST/PwBD)"
        },
        {
            "label": "Selection Stages",
            "value": "Phase-I (Online) + Phase-II (Objective & Descriptive) + Interview"
        },
        {
            "label": "Gross Monthly Salary",
            "value": "Grade B: ~₹1,16,000+ | Assistant: ~₹47,000+"
        },
        {
            "label": "Document Specs",
            "value": "Photo (20-50 KB) + Signature (10-20 KB in Black Ink)"
        }
    ],
    faqs: [
        {
            "question": "What is the mandatory 60% graduation percentage rule for RBI Grade B?",
            "answer": "Candidates must possess a minimum of 60% marks (50% for SC/ST/PwBD) in their Bachelor's degree, as well as in 12th (or Diploma) and 10th Standard examinations. The percentage is calculated by dividing total aggregate marks across all semesters/years by maximum possible marks; rounding off (e.g. 59.99% to 60%) is not permitted."
        },
        {
            "question": "What is the maximum number of attempts permitted for RBI Grade B Phase-I?",
            "answer": "General category candidates are permitted a maximum of 6 attempts at the Phase-I examination. There is no restriction on attempts for SC, ST, OBC, EWS, and PwBD candidates."
        },
        {
            "question": "What are the age limits and relaxation criteria for RBI Grade B 2026?",
            "answer": "Candidates must be between 21 and 30 years of age. For candidates possessing M.Phil. or Ph.D. qualifications, the upper age limit is extended up to 32 and 34 years respectively. Standard statutory age relaxations apply for OBC (+3) and SC/ST (+5)."
        },
        {
            "question": "What is the structure of Phase-II descriptive papers?",
            "answer": "Phase-II comprises three papers of 100 marks each: Paper-I Economic & Social Issues (50% objective + 50% descriptive typed on keyboard), Paper-II English Writing Skills (100% descriptive essay, precis, letter), and Paper-III Finance & Management (50% objective + 50% descriptive typed on keyboard)."
        },
        {
            "question": "What is the interview weightage and final selection formula in RBI Grade B?",
            "answer": "Final merit list is prepared on the aggregate marks of Phase-II (300 marks) and Personal Interview (75 marks), totaling 375 marks. Phase-I marks are purely qualifying in nature."
        },
        {
            "question": "What are the photograph and signature upload specifications for RBI application?",
            "answer": "Photograph must measure 200 × 230 pixels (20.0 KB to 50.0 KB in JPG format) against a white background. Signature must measure 140 × 60 pixels (10.0 KB to 20.0 KB) penned in black ballpoint ink on unruled white paper. Capital letters are rejected."
        },
        {
            "question": "How does RBI Assistant recruitment differ from RBI Grade B?",
            "answer": "RBI Assistant is a clerical cadre recruitment requiring simple graduation with 50% marks without restrictions on attempts. Selection comprises Prelims, Mains, and a Language Proficiency Test (LPT) without an interview."
        },
        {
            "question": "What is the starting monthly in-hand salary and perks for an RBI Grade B Officer?",
            "answer": "An RBI Grade B Officer starts at Basic Pay of ₹55,200. Including Dearness Allowance, Special Prerequisite Allowance, House Allowance (or leased accommodation up to ₹70,000 in Mumbai), gross monthly emoluments exceed ₹1,16,000, with net in-hand salary of ~₹95,000–₹1,05,000."
        },
        {
            "question": "Can final-year graduation students apply for RBI Grade B 2026?",
            "answer": "No, final year appearing candidates cannot apply. Candidates must possess the official graduation mark sheet and degree certificate with results declared on or before the application cut-off date."
        },
        {
            "question": "What is the career progression for an RBI Grade B Officer?",
            "answer": "Career hierarchy proceeds: Assistant Manager (Grade A) → Manager (Grade B) → Assistant General Manager (Grade C) → Deputy General Manager (Grade D) → General Manager (Grade E) → Chief General Manager (Grade F) → Executive Director (ED) → Deputy Governor (DG)."
        },
        {
            "question": "Can an average student clear RBI Grade B 2026 on the first attempt?",
            "answer": "Yes. While RBI Grade B is prestigious and selective, success comes from structured preparation rather than genius. Clearing Phase-I requires qualifying sectional cutoffs (General Awareness carries 80 marks). For Phase-II, master Economic & Social Issues (ESI) and Finance & Management (FM), and practice typing structured 400–600 word answers on a computer keyboard daily."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>RBI Grade 'B' Officers &amp; Assistants 2026: Premier Central Banking Cadre</h2>
        <p>Looking for the official <strong>RBI Grade B eligibility criteria</strong>, <strong>60% graduation percentage calculation</strong>, and exact <strong>Phase-II examination blueprint</strong>? Direct recruitment into India's central bank—the Reserve Bank of India—represents the pinnacle of banking prestige, policymaking influence, and executive compensation on <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">rbi.org.in</a>.</p>
        
        <p>Grade B officers formulate monetary policy, oversee foreign exchange reserves, and regulate commercial banks. Check other premier banking recruitments in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>Phase-I &amp; Phase-II Examination Blueprint</h2>
        <p>Phase-I features 200 marks in 120 minutes (General Awareness carries 80 marks). Phase-II features 3 papers: Paper-I Economic &amp; Social Issues (100 M), Paper-II English Descriptive (100 M), and Paper-III Finance &amp; Management (100 M).</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>RBI Document Upload Guidelines</h2>
        <p>Document rules adhere to IBPS banking standards: <strong>Photo: 20–50 KB</strong>, <strong>Signature: 10–20 KB in black ink</strong>, <strong>Left Thumb: 20–50 KB</strong>, <strong>Declaration: 50–100 KB</strong>.</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare RBI Documents in Seconds</h4>
          <p class="text-sm text-muted-foreground">Format your photo, signature, and declaration strictly within RBI boundaries using our <a href="/ibps-signature-resize/" class="text-primary font-bold underline">Banking Signature Resizer</a> or <a href="/compress-image-to-kb/" class="text-primary font-bold underline">Compress Image to 20 KB</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/ibps-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open RBI Resizer Preset</span>
              <span>&rarr;</span>
            </a>
            <a href="/photo-resizer/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Passport Photo Resizer
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">RBI Grade B & Assistant 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your RBI Grade B & Assistant 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },

  {
    slug: "bpsc-cce-teacher-2026-top-10-faq-guide",
    title: "BPSC 2026: Top 10 FAQs on 70th CCE, Teacher (TRE 4.0), Live Photo Rules & Negative Marking",
    metaTitle: "BPSC 2026: 70th CCE, TRE 4.0 Teacher & Live Photo FAQs",
    metaDescription: "Official BPSC 2026 guide: 70th CCE Prelims pattern, Teacher TRE 4.0 eligibility, live webcam capture rules & top FAQs. Resize BPSC documents online free!",
    excerpt: "Everything candidates ask about BPSC 70th CCE & Teacher TRE 4.0: live photo webcam rules, Hindi & English signatures, 1/3rd negative marking, and Prelims syllabus.",
    category: "Guidelines & Tips",
    publishDate: "Sept 20, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 20, 2026",
    deployedAt: "Sept 20, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Bihar Public Service Commission Advisory Desk",
    readTime: "9 min read",
    featured: false,
    tags: ["BPSC 70th CCE","BPSC TRE 4.0","Bihar Teacher Bharti","BPSC Live Photo","BPSC Negative Marking","Bihar Civil Services"],
    relatedExamPreset: "bpsc-services",
    quickFacts: [
        {
            "label": "Conducting Body",
            "value": "Bihar Public Service Commission (BPSC, Patna)"
        },
        {
            "label": "Key Exams",
            "value": "70th Integrated Combined Competitive Exam (CCE) & Teacher TRE 4.0"
        },
        {
            "label": "Educational Criteria",
            "value": "Graduate in any discipline (CCE); B.Ed/D.El.Ed + CTET/STET (TRE)"
        },
        {
            "label": "Live Photo Rule",
            "value": "Direct browser webcam live capture (No scanned photo upload)"
        },
        {
            "label": "Dual Signature",
            "value": "Both Hindi & English scanned signatures mandatory (15-20 KB each)"
        },
        {
            "label": "Negative Marking",
            "value": "1/3rd mark (0.33 marks) per incorrect answer"
        }
    ],
    faqs: [
        {
            "question": "How does the BPSC live webcam photograph capture system work?",
            "answer": "BPSC does NOT permit uploading a scanned passport photo. Candidates must capture a live photo using a computer webcam or mobile camera directly on the application portal. The background must be light and plain, both ears must be clearly visible, and wearing sunglasses, spectacles, or caps is strictly forbidden."
        },
        {
            "question": "Why does BPSC require two signatures (Hindi and English)?",
            "answer": "BPSC mandates the upload of two separate scanned signatures: one penned in English running script and one penned in Hindi (Devanagari script). Both files must measure strictly between 15.0 KB and 20.0 KB in JPG/JPEG format, written in black ink on clean white unruled paper."
        },
        {
            "question": "What is the educational qualification for BPSC 70th Integrated CCE?",
            "answer": "Candidates must hold a Bachelor's Degree in any discipline from a recognized University. For specialized posts like DSP, physical standards apply; for District Sub-Registrar or Labor Superintendent, specific coursework is prioritized."
        },
        {
            "question": "What is the negative marking deduction in BPSC Prelims?",
            "answer": "BPSC enforces a negative marking penalty of 1/3rd (0.33 marks) for each incorrect answer out of the 150 objective questions in the Preliminary Examination."
        },
        {
            "question": "What are the educational requirements for Bihar Teacher TRE 4.0 posts?",
            "answer": "For Primary Teachers (Classes 1–5): 12th pass with minimum 50% marks + 2-year D.El.Ed + CTET/BTET Paper-I qualified. For Middle Teachers (Classes 6–8): Graduation + B.Ed/D.El.Ed + CTET/BTET Paper-II. For Secondary & Higher Secondary (Classes 9–12): Graduation/Post-Graduation + B.Ed + Bihar STET Paper-I/II."
        },
        {
            "question": "Can candidates from other states apply for BPSC CCE and Teacher TRE?",
            "answer": "Yes, candidates from all Indian states are eligible to apply. However, all non-Bihar domiciled candidates are treated under the Unreserved (General) category and cannot claim caste reservation benefits."
        },
        {
            "question": "What are the age limits and relaxation rules for BPSC recruitment?",
            "answer": "General male candidates must be between 20, 21, or 22 and 37 years of age depending on the post. General female and BC/EBC candidates receive relaxation up to 40 years (+3 years), and SC/ST candidates receive relaxation up to 42 years (+5 years)."
        },
        {
            "question": "What is the examination pattern for BPSC 70th CCE Mains?",
            "answer": "Mains carries 900 marks across 4 descriptive papers: General Hindi (100 Marks, qualifying 30%), General Studies Paper-I (300 Marks), General Studies Paper-II (300 Marks), and Essay Paper (300 Marks). Optional Subject is qualifying in nature (100 Marks MCQ)."
        },
        {
            "question": "What certificates are mandatory for Bihar domicile reservation?",
            "answer": "Permanent Residence (Domicile) Certificate of Bihar, Caste Certificate, Non-Creamy Layer (NCL) Certificate for BC/EBC candidates, and EWS Income Certificate issued by the competent Revenue Officer."
        },
        {
            "question": "What is the monthly in-hand salary of an SDM or DSP appointed through BPSC?",
            "answer": "Sub-Divisional Officer (SDM) and DSP are placed under 7th CPC Pay Level 9 (Grade Pay ₹5,400, Basic Pay ₹53,100). Adding Dearness Allowance (~50%), HRA, and medical allowances, gross monthly pay is ~₹88,000–₹94,000, with net in-hand salary ~₹78,000–₹84,000."
        },
        {
            "question": "Can I clear BPSC 70th CCE and Teacher TRE 4.0 through self-study?",
            "answer": "Yes. For BPSC 70th CCE, 60% of Prelims marks come from 4 subjects: Bihar Special GK, Modern History of India, General Science, and Current Affairs. Mastering these four subjects through NCERTs, Imtiaz Ahmed, and standard current affairs ensures comfortably crossing the 90+ cutoff. For Teacher TRE 4.0, rigorous SCERT/NCERT textbook revision is sufficient."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
        <h2>BPSC 70th CCE &amp; Teacher Recruitment Examination (TRE 4.0)</h2>
        <p>Looking for the official <strong>BPSC 70th CCE eligibility criteria</strong>, <strong>BPSC live photo guidelines</strong>, and exact <strong>dual Hindi/English signature specifications</strong>? The Bihar Public Service Commission conducts mega recruitments for Sub-Divisional Officer (SDM), Deputy Superintendent of Police (DSP), and Teacher positions on <a href="https://bpsc.bih.nic.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">bpsc.bih.nic.in</a>.</p>
        
        <p>Explore other state administrative and teaching vacancies in our <a href="/government-jobs/" class="text-primary underline font-semibold">Live Government Jobs Directory</a>.</p>
      </section>

      <section id="exam-pattern" class="space-y-4 mt-8">
        <h2>BPSC Preliminary Examination Pattern &amp; 1/3rd Negative Marking</h2>
        <p>BPSC Prelims consists of 150 objective questions for 150 marks in 2 hours with <strong>1/3rd negative marking penalty</strong>.</p>
      </section>

      <section id="document-specs" class="space-y-4 mt-8">
        
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>

<h2>BPSC Document Upload Rules: Live Photo &amp; Dual Signature</h2>
        <p>BPSC enforces live webcam capture for photographs and requires <strong>two distinct signatures: one in Hindi and one in English</strong> (15–20 KB each in black ink).</p>

        <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
          <h4 class="text-base font-bold text-foreground">Prepare BPSC Dual Signatures in Seconds</h4>
          <p class="text-sm text-muted-foreground">Format your Hindi and English signatures to exact BPSC boundaries with our <a href="/bpsc-signature-resize/" class="text-primary font-bold underline">BPSC Signature Resizer Tool</a> or <a href="/document-resizer/" class="text-primary font-bold underline">Document Resizer</a>.</p>
          <div class="pt-1 flex flex-wrap gap-3">
            <a href="/bpsc-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
              <span>Open BPSC Resizer Preset</span>
              <span>&rarr;</span>
            </a>
            <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
              Compress Image to 20 KB
            </a>
          </div>
        </div>
      </section>
    
<h2 id="strategy">BPSC 2026: High-Yield Preparation Strategy &amp; Daily Routine</h2>
<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your BPSC 2026 Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>
    `
  },
  {
    slug: "up-police-constable-syllabus-exam-pattern-2026",
    title: "UP Police Constable Syllabus 2026: Subject-wise Pattern, 300 Marks, Negative Marking & PET Standards",
    metaTitle: "UP Police Constable Syllabus 2026 – 4 Subjects, 300 Marks, Exam Pattern",
    metaDescription: "Complete UP Police Constable syllabus 2026: 4 subjects (GK, Hindi, Numerical, Reasoning), 300-mark OMR pattern, negative marking, PET running standards, salary & admit card guide for UPPRPB.",
    excerpt: "Official UPPRPB syllabus breakdown: subject-wise topics for all 4 sections, marks distribution, 0.50 negative marking rule, physical PET standards, age limit, and salary — everything UP Police Constable 2026 aspirants need.",
    category: "Exam Preparation",
    publishDate: "Sept 25, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Sept 25, 2026",
    deployedAt: "Sept 25, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "UP Police Recruitment Advisory Desk",
    readTime: "10 min read",
    featured: false,
    tags: ["UP Police Syllabus 2026","UP Police Constable Exam Pattern","UPPRPB Written Exam","UP Police Constable 2026","UP Police PET Running","UP Police Salary"],
    relatedExamPreset: "up-police",
    quickFacts: [
        { "label": "Conducting Body", "value": "UPPRPB (UP Police Recruitment & Promotion Board, Lucknow)" },
        { "label": "Exam Mode", "value": "OMR-Based Offline Written Examination" },
        { "label": "Total Questions", "value": "150 Questions (2 Marks Each = 300 Marks Total)" },
        { "label": "Duration", "value": "2 Hours (120 Minutes)" },
        { "label": "Negative Marking", "value": "–0.50 Marks Per Wrong Answer" },
        { "label": "Physical Test (PET)", "value": "Male: 4.8 km in 25 min | Female: 2.4 km in 14 min" }
    ],
    faqs: [
        {
            "question": "What subjects are included in the UP Police Constable 2026 written exam?",
            "answer": "The written exam covers 4 subjects: (1) General Knowledge & Current Affairs — 38 questions, 76 marks; (2) General Hindi — 37 questions, 74 marks; (3) Numerical & Mental Ability — 38 questions, 76 marks; (4) Mental Aptitude, IQ & Reasoning — 37 questions, 74 marks. Total: 150 questions, 300 marks, 2 hours."
        },
        {
            "question": "What is the negative marking rule in UP Police Constable exam 2026?",
            "answer": "Each correct answer awards 2 marks. Each wrong answer deducts 0.50 marks (25% of 2 marks). Unattempted or skipped questions carry zero marks — no negative for leaving a question blank. Strategically leaving low-confidence questions blank is therefore better than guessing."
        },
        {
            "question": "What topics are included in the UP Police Constable General Knowledge syllabus?",
            "answer": "The GK section (38 questions, 76 marks) covers: History of India & UP, Indian Constitution & Polity, Geography (India & World), Current Affairs (national & international), Science & Technology, Economy, Sports, Awards, Books & Authors, Important Dates, UP-specific GK (rivers, folk arts, districts, historical events)."
        },
        {
            "question": "What is the UP Police Constable General Hindi syllabus?",
            "answer": "General Hindi (37 questions, 74 marks) tests: Hindi Grammar (Sandhi, Samas, Vibhakti), Tatsam-Tadbhav words, Synonyms & Antonyms, Fill in the Blanks, Error Detection, Proverbs & Idioms (Muhavare), One-word substitution, Reading Comprehension passage, Letter writing formats, and vocabulary usage."
        },
        {
            "question": "What is covered under Numerical & Mental Ability in UP Police syllabus?",
            "answer": "Numerical & Mental Ability (38 questions, 76 marks) includes: Number System, HCF & LCM, Fractions & Decimals, Percentage, Profit & Loss, Simple & Compound Interest, Ratio & Proportion, Average, Age Problems, Time & Work, Time & Distance, Mensuration (area, perimeter, volume), Data Interpretation (tables, graphs, bar charts)."
        },
        {
            "question": "What is the UP Police Constable exam date 2026?",
            "answer": "The UP Police Constable written OMR exam for 60,244 posts is tentatively scheduled for November–December 2026. Online application closed on October 25, 2026. Admit card (pravesh patra) will be released on uppbpb.gov.in approximately 10–15 days before the exam date."
        },
        {
            "question": "What is the UP Police Constable salary 2026?",
            "answer": "UP Police Constable salary is fixed at Pay Matrix Level 3 with Basic Pay of ₹21,700 per month. Including Dearness Allowance (~50%), House Rent Allowance, and other allowances, the gross salary is approximately ₹35,000–₹41,000. Net in-hand salary is approximately ₹30,000–₹36,000 depending on posting location."
        },
        {
            "question": "What is the physical eligibility for UP Police Constable 2026?",
            "answer": "For Male candidates: Minimum height 168 cm (160 cm for ST/SC in some categories), chest unexpanded 79 cm with minimum 5 cm expansion. For Female candidates: Minimum height 152 cm (147 cm for SC/ST), minimum weight 40 kg. Eye vision must meet prescribed standards."
        },
        {
            "question": "How to download UP Police admit card 2026?",
            "answer": "UP Police admit card 2026 is available on uppbpb.gov.in. Candidates must log in using their Registration Number and Date of Birth. The admit card contains roll number, exam center name & address, exam date & shift timing, and reporting time. Carry a printed copy along with a valid photo ID to the exam center."
        },
        {
            "question": "What is the UP Police answer key 2026 release process?",
            "answer": "After the OMR exam, UPPRPB releases a provisional answer key on uppbpb.gov.in within 7–15 days. Candidates can challenge any answer key response within the specified objection window (typically 3–7 days) by paying a prescribed fee. The final answer key is published after reviewing all objections, and the merit list is prepared based on the final verified answer key."
        }
    ],
    contentHtml: `
<section id="overview" class="space-y-4">
  <h2>UP Police Constable Syllabus 2026: Complete Official Guide</h2>
  <p>Searching for the <strong>UP Police Constable syllabus 2026</strong> with subject-wise topics, marks breakdown, and the exact exam pattern? This is the definitive guide published by the <strong>SignResize Examination Standards Desk</strong> based on the official <a href="https://uppbpb.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">uppbpb.gov.in</a> notification for the 60,244 Constable & SI posts.</p>
  <p>The <strong>UP Police written exam</strong> is an OMR-based objective test of 300 marks covering 4 subjects. Understanding the subject-wise syllabus, topic weightage, and negative marking rules is the difference between selection and elimination.</p>
  <p>Before diving into the syllabus, ensure your application documents are portal-ready: <a href="/up-police-signature-resize/" class="text-primary underline font-semibold">resize your UP Police signature (140×60 px, 5–20 KB)</a> and photo (200×230 px, 20–50 KB) instantly.</p>
</section>

<section id="exam-pattern" class="space-y-4 mt-8">
  <h2>UP Police Constable Exam Pattern 2026 — 300 Marks OMR Blueprint</h2>
  <p>The written examination is conducted offline on OMR sheets. Candidates fill bubbles with a blue or black ballpoint pen. The exam is held in multiple shifts across districts of Uttar Pradesh.</p>

  <div class="overflow-x-auto my-6 rounded-2xl border border-border shadow-sm">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-primary text-primary-foreground">
          <th class="px-4 py-3 text-left font-bold rounded-tl-xl">Subject</th>
          <th class="px-4 py-3 text-center font-bold">Questions</th>
          <th class="px-4 py-3 text-center font-bold">Marks</th>
          <th class="px-4 py-3 text-center font-bold rounded-tr-xl">Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-card border-b border-border hover:bg-muted/40 transition">
          <td class="px-4 py-3 font-semibold text-foreground">General Knowledge & Current Affairs</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-primary">38</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-green-600 dark:text-green-400">76</td>
          <td class="px-4 py-3 text-center text-muted-foreground" rowspan="4">2 Hours (Combined)</td>
        </tr>
        <tr class="bg-card border-b border-border hover:bg-muted/40 transition">
          <td class="px-4 py-3 font-semibold text-foreground">General Hindi</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-primary">37</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-green-600 dark:text-green-400">74</td>
        </tr>
        <tr class="bg-card border-b border-border hover:bg-muted/40 transition">
          <td class="px-4 py-3 font-semibold text-foreground">Numerical & Mental Ability</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-primary">38</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-green-600 dark:text-green-400">76</td>
        </tr>
        <tr class="bg-card hover:bg-muted/40 transition">
          <td class="px-4 py-3 font-semibold text-foreground">Mental Aptitude / IQ / Reasoning</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-primary">37</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-green-600 dark:text-green-400">74</td>
        </tr>
        <tr class="bg-primary/10 font-bold">
          <td class="px-4 py-3 font-extrabold text-foreground rounded-bl-xl">Total</td>
          <td class="px-4 py-3 text-center font-mono font-extrabold text-primary">150</td>
          <td class="px-4 py-3 text-center font-mono font-extrabold text-green-700 dark:text-green-300">300</td>
          <td class="px-4 py-3 text-center font-bold text-foreground rounded-br-xl">2 Hours</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="my-6 p-5 rounded-2xl bg-red-500/10 border border-red-500/30 space-y-2">
    <h4 class="font-bold text-red-600 dark:text-red-400 text-base flex items-center gap-2">
      <span>⚠️</span> Negative Marking Rule — Read Carefully
    </h4>
    <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
      <li><strong>Correct answer:</strong> +2 marks</li>
      <li><strong>Wrong answer:</strong> −0.50 marks (25% penalty)</li>
      <li><strong>Unattempted / skipped:</strong> 0 marks (no penalty)</li>
      <li><strong>Strategy:</strong> If you are unsure, skip the question. Attempting 4 wrong answers wipes out 1 correct answer's marks.</li>
    </ul>
  </div>
</section>

<section id="gk-syllabus" class="space-y-4 mt-8">
  <h2>Subject 1 — General Knowledge & Current Affairs (38 Questions, 76 Marks)</h2>
  <p>This section is the broadest and most unpredictable. Focus on Uttar Pradesh-specific GK alongside national topics.</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-xl bg-blue-500/8 border border-blue-500/20">
      <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">🇮🇳 Indian History & Polity</h4>
      <ul class="text-sm text-muted-foreground space-y-1 list-disc pl-4">
        <li>Ancient, Medieval & Modern Indian History</li>
        <li>Indian Constitution — Preamble, Articles, Schedules</li>
        <li>Fundamental Rights & Directive Principles</li>
        <li>Parliament, President, Governor, Judiciary</li>
        <li>Important Amendments & Acts</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-green-500/8 border border-green-500/20">
      <h4 class="font-bold text-green-700 dark:text-green-400 mb-2">🌍 Geography & Environment</h4>
      <ul class="text-sm text-muted-foreground space-y-1 list-disc pl-4">
        <li>Physical Geography of India & UP</li>
        <li>Rivers, Mountains, Climate Zones</li>
        <li>UP Districts, Divisions, Boundaries</li>
        <li>National Parks & Wildlife Sanctuaries</li>
        <li>Environmental Issues & Conservation</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-purple-500/8 border border-purple-500/20">
      <h4 class="font-bold text-purple-700 dark:text-purple-400 mb-2">📰 Current Affairs</h4>
      <ul class="text-sm text-muted-foreground space-y-1 list-disc pl-4">
        <li>National & International Events (6 months)</li>
        <li>Government Schemes & Yojanas</li>
        <li>Sports Events — Olympics, Asiad, Cricket</li>
        <li>Awards — Padma, Bharat Ratna, Nobel</li>
        <li>Books, Authors, Appointments</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-amber-500/8 border border-amber-500/20">
      <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">🏛️ UP-Specific GK (High Weightage)</h4>
      <ul class="text-sm text-muted-foreground space-y-1 list-disc pl-4">
        <li>UP History, Freedom Movement</li>
        <li>UP Folk Arts, Festivals, Culture</li>
        <li>UP Economy, Agriculture</li>
        <li>UP Government Schemes</li>
        <li>Important UP Personalities</li>
      </ul>
    </div>
  </div>
</section>

<section id="hindi-syllabus" class="space-y-4 mt-8">
  <h2>Subject 2 — General Hindi (37 Questions, 74 Marks)</h2>
  <p>Hindi is typically the highest-scoring section for UP-domicile candidates. This section tests grammar, comprehension, and vocabulary at Intermediate level.</p>

  <div class="overflow-x-auto my-4 rounded-2xl border border-border">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-muted">
          <th class="px-4 py-2.5 text-left font-bold">Topic</th>
          <th class="px-4 py-2.5 text-center font-bold">Expected Questions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Sandhi & Samas (Compound Words)</td><td class="px-4 py-2.5 text-center font-mono">4–5</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Synonyms & Antonyms (Paryayvachi / Vilom)</td><td class="px-4 py-2.5 text-center font-mono">4–5</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Fill in the Blanks (Rikt Sthan)</td><td class="px-4 py-2.5 text-center font-mono">4–5</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Idioms & Proverbs (Muhavare & Lokoktiyan)</td><td class="px-4 py-2.5 text-center font-mono">3–4</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Error Detection / Sentence Correction</td><td class="px-4 py-2.5 text-center font-mono">4–5</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">One-Word Substitution (Ek Shabdikaran)</td><td class="px-4 py-2.5 text-center font-mono">3–4</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Reading Comprehension Passage</td><td class="px-4 py-2.5 text-center font-mono">5–6</td></tr>
        <tr class="hover:bg-muted/30"><td class="px-4 py-2.5">Tatsam-Tadbhav, Spelling, Grammar</td><td class="px-4 py-2.5 text-center font-mono">5–6</td></tr>
      </tbody>
    </table>
  </div>
  <p class="text-sm text-muted-foreground">💡 <strong>Tip:</strong> Hindi is the highest-scoring section. Scoring 60+ out of 74 here is realistic with 30 days of focused preparation on grammar rules and vocabulary.</p>
</section>

<section id="maths-syllabus" class="space-y-4 mt-8">
  <h2>Subject 3 — Numerical & Mental Ability (38 Questions, 76 Marks)</h2>
  <p>This section covers basic arithmetic, data interpretation, and mental calculation at Class 10 level. Most problems can be solved without complex formulas.</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
    <div class="p-4 rounded-xl bg-card border border-border">
      <h5 class="font-bold text-foreground mb-1.5">Arithmetic (Core Topics)</h5>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-3">
        <li>Number System, LCM, HCF</li>
        <li>Percentage, Profit & Loss</li>
        <li>Simple & Compound Interest</li>
        <li>Ratio, Proportion & Partnership</li>
        <li>Average & Mixture Problems</li>
        <li>Age & Time-Work Problems</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border">
      <h5 class="font-bold text-foreground mb-1.5">Applied Maths</h5>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-3">
        <li>Speed, Distance & Time</li>
        <li>Train & Boat Problems</li>
        <li>Mensuration — Area, Perimeter, Volume</li>
        <li>Data Interpretation (Bar, Pie, Table)</li>
        <li>Simplification & Approximation</li>
        <li>Square Roots & Cube Roots</li>
      </ul>
    </div>
  </div>
  <p class="text-sm text-muted-foreground">💡 <strong>Tip:</strong> Percentage, Ratio, and Profit & Loss together account for 12–15 questions. Master these 3 topics first.</p>
</section>

<section id="reasoning-syllabus" class="space-y-4 mt-8">
  <h2>Subject 4 — Mental Aptitude / IQ / Reasoning (37 Questions, 74 Marks)</h2>
  <p>This section tests logical thinking, pattern recognition, and situational judgment. Many questions from police recruitment papers test police-specific aptitude scenarios.</p>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
    <div class="p-3 rounded-xl bg-card border border-border">
      <h5 class="font-bold text-foreground mb-1 text-sm">Verbal Reasoning</h5>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-3">
        <li>Analogies & Classification</li>
        <li>Series Completion</li>
        <li>Coding-Decoding</li>
        <li>Blood Relations</li>
        <li>Direction Sense</li>
      </ul>
    </div>
    <div class="p-3 rounded-xl bg-card border border-border">
      <h5 class="font-bold text-foreground mb-1 text-sm">Non-Verbal Reasoning</h5>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-3">
        <li>Pattern & Figure Completion</li>
        <li>Mirror & Water Image</li>
        <li>Paper Folding & Cutting</li>
        <li>Embedded Figures</li>
        <li>Visual Puzzles</li>
      </ul>
    </div>
    <div class="p-3 rounded-xl bg-card border border-border">
      <h5 class="font-bold text-foreground mb-1 text-sm">Police Aptitude</h5>
      <ul class="text-xs text-muted-foreground space-y-1 list-disc pl-3">
        <li>Law & Order Scenarios</li>
        <li>Public Interest Judgment</li>
        <li>Communal Harmony Scenarios</li>
        <li>Professional Ethics</li>
        <li>Crime & Victim Situations</li>
      </ul>
    </div>
  </div>
</section>

<section id="pet-standards" class="space-y-4 mt-8">
  <h2>UP Police PET (Physical Efficiency Test) Standards 2026</h2>
  <p>The Physical Efficiency Test is <strong>qualifying only</strong> — no marks are awarded. Failure to complete the run within the time limit means immediate disqualification regardless of written exam performance.</p>

  <div class="overflow-x-auto my-4 rounded-2xl border border-border shadow-sm">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-primary text-primary-foreground">
          <th class="px-4 py-3 text-left font-bold rounded-tl-xl">Category</th>
          <th class="px-4 py-3 text-center font-bold">Distance</th>
          <th class="px-4 py-3 text-center font-bold">Time Limit</th>
          <th class="px-4 py-3 text-center font-bold rounded-tr-xl">Nature</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-card border-b border-border hover:bg-muted/40 transition">
          <td class="px-4 py-3 font-semibold">Male Constable</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-primary">4.8 km</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-green-600 dark:text-green-400">25 Minutes</td>
          <td class="px-4 py-3 text-center text-xs text-muted-foreground">Qualifying Only</td>
        </tr>
        <tr class="bg-card hover:bg-muted/40 transition">
          <td class="px-4 py-3 font-semibold">Female Constable</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-primary">2.4 km</td>
          <td class="px-4 py-3 text-center font-mono font-bold text-green-600 dark:text-green-400">14 Minutes</td>
          <td class="px-4 py-3 text-center text-xs text-muted-foreground">Qualifying Only</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="my-6 p-5 rounded-2xl bg-blue-500/8 border border-blue-500/20 space-y-2">
    <h4 class="font-bold text-blue-700 dark:text-blue-400 text-sm flex items-center gap-2">🏃 PET Training Plan (60 Days)</h4>
    <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
      <li><strong>Days 1–15:</strong> Run 2 km daily at easy pace. Focus on building aerobic base, not speed.</li>
      <li><strong>Days 16–30:</strong> Increase to 3.5 km with 400m intervals at target pace (4.8 km ÷ 25 min = 192m/min).</li>
      <li><strong>Days 31–45:</strong> Run full 4.8 km distance at tempo. Time yourself every 3 days.</li>
      <li><strong>Days 46–60:</strong> Practice race-day conditions — run on tracks or ground, wear race shoes, simulate test environment.</li>
    </ul>
  </div>
</section>

<section id="admit-card" class="space-y-4 mt-8">
  <h2>UP Police Admit Card 2026 — Download Guide</h2>
  <p>The <strong>UP Police Constable admit card 2026</strong> (also called pravesh patra or hall ticket) is released on <a href="https://uppbpb.gov.in" target="_blank" rel="noopener noreferrer" class="text-primary underline font-semibold">uppbpb.gov.in</a> approximately 10–15 days before the written examination.</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-xl bg-card border border-border">
      <h5 class="font-bold text-foreground mb-2">📥 How to Download Admit Card</h5>
      <ol class="text-sm text-muted-foreground space-y-1 list-decimal pl-4">
        <li>Visit uppbpb.gov.in</li>
        <li>Click "Admit Card / Pravesh Patra"</li>
        <li>Enter Registration Number</li>
        <li>Enter Date of Birth</li>
        <li>Download and print A4 size</li>
      </ol>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border">
      <h5 class="font-bold text-foreground mb-2">📋 What the Admit Card Contains</h5>
      <ul class="text-sm text-muted-foreground space-y-1 list-disc pl-4">
        <li>Roll Number & Registration Number</li>
        <li>Exam Center Name & Full Address</li>
        <li>Exam Date, Day & Shift Timing</li>
        <li>Reporting Time (30 min before)</li>
        <li>Candidate's Photo & Signature</li>
      </ul>
    </div>
  </div>

  <div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
    <h4 class="font-bold text-amber-600 dark:text-amber-400 text-sm flex items-center gap-2">⚠️ Exam Day Checklist</h4>
    <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
      <li>Printed admit card (2 copies recommended)</li>
      <li>Original Aadhar Card / Voter ID / Passport as photo ID</li>
      <li>Black or Blue ballpoint pen (not gel or sketch pen)</li>
      <li>No electronic devices, smartwatches, or calculators allowed</li>
      <li>Arrive at the exam center at least 30 minutes early</li>
    </ul>
  </div>
</section>

<section id="answer-key" class="space-y-4 mt-8">
  <h2>UP Police Answer Key 2026 & Result Process</h2>

  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4 text-center">
    <div class="p-4 rounded-xl bg-card border border-border">
      <div class="text-2xl mb-2">📝</div>
      <h5 class="font-bold text-sm text-foreground">Provisional Answer Key</h5>
      <p class="text-xs text-muted-foreground mt-1">Released 7–15 days after exam on uppbpb.gov.in</p>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border">
      <div class="text-2xl mb-2">🗣️</div>
      <h5 class="font-bold text-sm text-foreground">Objection Window</h5>
      <p class="text-xs text-muted-foreground mt-1">3–7 days to challenge any answer with fee payment</p>
    </div>
    <div class="p-4 rounded-xl bg-card border border-border">
      <div class="text-2xl mb-2">✅</div>
      <h5 class="font-bold text-sm text-foreground">Final Answer Key & Result</h5>
      <p class="text-xs text-muted-foreground mt-1">Merit list released 30–60 days post-exam</p>
    </div>
  </div>
</section>

<section id="salary" class="space-y-4 mt-8">
  <h2>UP Police Constable Salary 2026 — Full Pay Breakdown</h2>

  <div class="overflow-x-auto my-4 rounded-2xl border border-border shadow-sm">
    <table class="w-full text-sm border-collapse">
      <thead>
        <tr class="bg-muted">
          <th class="px-4 py-2.5 text-left font-bold">Pay Component</th>
          <th class="px-4 py-2.5 text-center font-bold">Constable</th>
          <th class="px-4 py-2.5 text-center font-bold">Sub-Inspector (SI)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Pay Matrix Level</td><td class="px-4 py-2.5 text-center font-mono">Level 3</td><td class="px-4 py-2.5 text-center font-mono">Level 6</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Basic Pay</td><td class="px-4 py-2.5 text-center font-mono font-bold text-primary">₹21,700</td><td class="px-4 py-2.5 text-center font-mono font-bold text-primary">₹35,400</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">Dearness Allowance (~50%)</td><td class="px-4 py-2.5 text-center font-mono">~₹10,850</td><td class="px-4 py-2.5 text-center font-mono">~₹17,700</td></tr>
        <tr class="border-b border-border hover:bg-muted/30"><td class="px-4 py-2.5">House Rent Allowance</td><td class="px-4 py-2.5 text-center font-mono">₹2,000–₹4,500</td><td class="px-4 py-2.5 text-center font-mono">₹3,500–₹7,000</td></tr>
        <tr class="border-b border-border font-bold bg-primary/5"><td class="px-4 py-2.5 font-extrabold">Gross Monthly Salary</td><td class="px-4 py-2.5 text-center font-mono font-extrabold text-green-700 dark:text-green-300">~₹35,000–₹41,000</td><td class="px-4 py-2.5 text-center font-mono font-extrabold text-green-700 dark:text-green-300">~₹58,000–₹65,000</td></tr>
        <tr class="hover:bg-muted/30"><td class="px-4 py-2.5">Net In-Hand (approx.)</td><td class="px-4 py-2.5 text-center font-mono">~₹30,000–₹36,000</td><td class="px-4 py-2.5 text-center font-mono">~₹50,000–₹57,000</td></tr>
      </tbody>
    </table>
  </div>
</section>

<section id="document-specs" class="space-y-4 mt-8">
  <h2>UPPRPB Portal Document Specifications</h2>
  <p>Before submitting your online application on uppbpb.gov.in, ensure your photo and signature meet the exact pixel and KB requirements. Wrong file sizes are the leading cause of application rejection.</p>

  <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
    <h4 class="text-base font-bold text-foreground">Prepare UP Police Documents Instantly — Free Online Tool</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
      <div class="p-3 rounded-xl bg-background border border-border">
        <p class="font-bold text-foreground text-xs mb-1">📸 Photo Requirements</p>
        <p>200 × 230 px (3.5 × 4.5 cm)</p>
        <p class="font-mono text-xs">20 KB – 50 KB • JPG</p>
        <p class="text-xs">White/light grey background, no caps or glasses</p>
      </div>
      <div class="p-3 rounded-xl bg-background border border-border">
        <p class="font-bold text-foreground text-xs mb-1">✍️ Signature Requirements</p>
        <p>140 × 60 px (3.5 × 1.5 cm)</p>
        <p class="font-mono text-xs">5 KB – 20 KB • JPG</p>
        <p class="text-xs">Black ink, plain white paper, cursive writing</p>
      </div>
    </div>
    <div class="pt-1 flex flex-wrap gap-3">
      <a href="/up-police-signature-resize/" class="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs hover:opacity-95 transition shadow-xs flex items-center gap-1.5">
        <span>Open UP Police Resizer</span>
        <span>&rarr;</span>
      </a>
      <a href="/compress-image-to-kb/" class="px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-semibold text-xs hover:bg-muted transition">
        Compress Photo to 20–50 KB
      </a>
    </div>
  </div>
</section>

<h2 id="strategy">60-Day UP Police Constable 2026 Preparation Strategy</h2>
<p>With 60,244 vacancies, the selection ratio is historically favorable. A focused 60-day plan covering high-weightage topics can secure selection.</p>
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Ready Your UP Police Application Documents</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize signature (140×60 px, 5–20 KB) and photo (200×230 px, 20–50 KB) to exact UPPRPB portal specs — free, instant, no sign-up needed.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/up-police-signature-resize/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>🚔</span> UP Police Resizer
      </a>
      <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>📸</span> Resize Photo
      </a>
    </div>
  </div>
</div>
    `
  },
  {
    slug: "rrb-ntpc-cen-06-2026-photo-signature-guidelines",
    title: "RRB NTPC CEN 06/2026 — Official Photo & Signature Upload Guidelines for October 2026 Applications",
    metaTitle: "RRB NTPC CEN 06/2026 Photo & Signature Size — Complete Upload Guide",
    metaDescription: "Complete guide to RRB NTPC CEN 06/2026 photo and signature upload specifications. Official size: 140x60 px, 10-20 KB JPG for signature; 240x320 px, 30-70 KB for photo. Apply from Oct 8, 2026.",
    excerpt: "RRB NTPC CEN 06/2026 Graduate Level applications open October 8, 2026. Get the complete official photo (240x320 px, 30-70 KB) and signature (140x60 px, 10-20 KB) upload guide to ensure your application is accepted the first time.",
    category: "Exam Alerts",
    publishDate: "Oct 01, 2026",
    publishTime: "09:00 AM IST",
    lastUpdated: "Oct 01, 2026",
    deployedAt: "Oct 01, 2026 • 09:00 AM IST",
    author: "SignResize Examination Standards Desk",
    authorRole: "Railway Recruitment Document Compliance Team",
    readTime: "8 min read",
    featured: false,
    tags: ["RRB NTPC 2026", "RRB NTPC CEN 06/2026", "RRB NTPC Apply Online", "Railway Signature Resize", "RRB NTPC Photo Size"],
    relatedExamPreset: "rrb-railway",
    contentHtml: `
<div class="prose-content">

<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-2 border-amber-500/40">
  <div class="flex items-start gap-3">
    <span class="text-2xl">🚨</span>
    <div>
      <h4 class="text-base font-bold text-foreground">Breaking: RRB NTPC CEN 06/2026 Applications Open October 8</h4>
      <p class="text-sm text-muted-foreground mt-1">Railway Recruitment Board releases <strong>CEN 06/2026</strong> (Graduate Level) detailed notification on <strong>October 7, 2026</strong>. Online applications open <strong>October 8, 2026</strong> at <a href="https://rrbapply.gov.in" target="_blank" rel="noopener" class="text-primary underline">rrbapply.gov.in</a>. Undergraduate Level (CEN 07/2026) notification follows on October 14.</p>
    </div>
  </div>
</div>

<h2>RRB NTPC CEN 06/2026: Key Dates & Vacancy Overview</h2>

<p>The Railway Recruitment Board (RRB) has officially announced a fresh Non-Technical Popular Category (NTPC) recruitment cycle for <strong>2026–27</strong>. This cycle, designated <strong>CEN 06/2026</strong> for Graduate Level posts and <strong>CEN 07/2026</strong> for Undergraduate Level posts, marks the beginning of one of the largest railway hiring drives in recent years.</p>

<table class="w-full text-xs sm:text-sm border border-border my-6">
  <thead>
    <tr class="bg-muted">
      <th class="p-3 text-left font-semibold border-b border-border">Event</th>
      <th class="p-3 text-left font-semibold border-b border-border">Graduate Level (CEN 06/2026)</th>
      <th class="p-3 text-left font-semibold border-b border-border">UG Level (CEN 07/2026)</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-border/50">
      <td class="p-3">Detailed Notification</td>
      <td class="p-3 font-medium text-primary">October 7, 2026</td>
      <td class="p-3 font-medium text-primary">October 14, 2026</td>
    </tr>
    <tr class="border-b border-border/50 bg-muted/30">
      <td class="p-3">Application Opens</td>
      <td class="p-3 font-medium text-green-600 dark:text-green-400">October 8, 2026</td>
      <td class="p-3 font-medium text-green-600 dark:text-green-400">October 15, 2026</td>
    </tr>
    <tr class="border-b border-border/50">
      <td class="p-3">Total Vacancies</td>
      <td class="p-3">3,477 (Graduate)</td>
      <td class="p-3">1,688 (Undergraduate)</td>
    </tr>
    <tr class="bg-muted/30">
      <td class="p-3">Apply At</td>
      <td class="p-3" colspan="2"><a href="https://rrbapply.gov.in" target="_blank" rel="noopener" class="text-primary underline">rrbapply.gov.in</a></td>
    </tr>
  </tbody>
</table>

<h2>Official Photo & Signature Specifications for RRB NTPC CEN 06/2026</h2>

<p>The RRB NTPC online application form requires candidates to upload two critical documents: a <strong>passport-size photograph</strong> and a <strong>handwritten signature</strong>. Both must meet exact technical specifications or the portal will reject the upload. Based on previous RRB NTPC cycles (CEN 05/2024 and CEN 07/2025), the specifications for CEN 06/2026 are expected to follow the same Railway Recruitment Board standard.</p>

<div class="my-8 p-6 rounded-2xl bg-card border border-border">
  <h3 class="text-base font-bold text-foreground mb-4">📋 Official RRB NTPC Document Upload Specifications</h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
      <h4 class="font-bold text-sm text-blue-600 dark:text-blue-400 mb-3">📸 Passport Photograph</h4>
      <ul class="text-xs space-y-1.5 text-muted-foreground">
        <li><span class="font-medium text-foreground">Dimensions:</span> 3.5 cm × 4.5 cm</li>
        <li><span class="font-medium text-foreground">Pixels:</span> ~240 × 320 px (at 200 DPI)</li>
        <li><span class="font-medium text-foreground">File Size:</span> 30 KB to 70 KB</li>
        <li><span class="font-medium text-foreground">Format:</span> JPG / JPEG only</li>
        <li><span class="font-medium text-foreground">Background:</span> White or light plain</li>
        <li><span class="font-medium text-foreground">Recency:</span> Taken within last 3 months</li>
        <li><span class="font-medium text-foreground">No:</span> Caps, dark glasses, coloured background</li>
      </ul>
    </div>
    <div class="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30">
      <h4 class="font-bold text-sm text-indigo-600 dark:text-indigo-400 mb-3">✍️ Handwritten Signature</h4>
      <ul class="text-xs space-y-1.5 text-muted-foreground">
        <li><span class="font-medium text-foreground">Dimensions:</span> 4.0 cm × 2.0 cm</li>
        <li><span class="font-medium text-foreground">Pixels:</span> 140 × 60 px</li>
        <li><span class="font-medium text-foreground">File Size:</span> 10 KB to 20 KB</li>
        <li><span class="font-medium text-foreground">Format:</span> JPG / JPEG only</li>
        <li><span class="font-medium text-foreground">Ink:</span> Black ballpoint pen only</li>
        <li><span class="font-medium text-foreground">Background:</span> Spotless white unruled paper</li>
        <li><span class="font-medium text-foreground">No:</span> Capital letters, block letters, stencils</li>
      </ul>
    </div>
  </div>
</div>

<div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">
  <p class="text-slate-400 mb-1">// RRB NTPC CEN 06/2026 — Exact Portal Upload Rules</p>
  <p class="text-green-400">Signature: 140px × 60px | JPG | 10 KB ≤ size ≤ 20 KB | Black ink | Running hand | NO CAPS</p>
  <p class="text-blue-400 mt-1">Photo:     240px × 320px | JPG | 30 KB ≤ size ≤ 70 KB | White bg | Recent | No headgear</p>
  <p class="text-yellow-400 mt-1">Portal:    rrbapply.gov.in | Opens: Oct 8, 2026</p>
</div>

<h2>Step-by-Step: How to Prepare Your RRB NTPC Signature</h2>

<div class="my-8 space-y-4">
  <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-6">

    <div class="relative">
      <div class="absolute -left-8 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">1</div>
      <h4 class="font-bold text-sm text-foreground">Sign on Plain White Paper</h4>
      <p class="text-sm text-muted-foreground mt-1">Use a black ballpoint pen (not gel, not felt-tip). Sign in your natural running handwriting on spotless unruled A4 paper. Do not use ruled notebook sheets — the lines show up in the scan and cause rejection.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-8 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">2</div>
      <h4 class="font-bold text-sm text-foreground">Photograph the Signature Clearly</h4>
      <p class="text-sm text-muted-foreground mt-1">Place the paper on a flat surface in good, even light. Take a photo with your phone camera from directly above — no angle, no shadows. Use at least 12 MP camera for sharpness.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-8 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">3</div>
      <h4 class="font-bold text-sm text-foreground">Upload to SignResize</h4>
      <p class="text-sm text-muted-foreground mt-1">Open the <a href="/rrb-signature-resize/" class="text-primary underline">RRB Signature Resize tool</a>. Upload your photo. The tool auto-selects the Railway RRB preset (140×60 px, 10–20 KB). Crop tightly around your signature so it fills 75–85% of the frame.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-8 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">4</div>
      <h4 class="font-bold text-sm text-foreground">Enable Clean White Paper Filter</h4>
      <p class="text-sm text-muted-foreground mt-1">Toggle the <strong>Clean White Paper</strong> option to remove any yellowish paper tint and phone camera shadows. This ensures the background appears pure white as required by the RRB portal.</p>
    </div>

    <div class="relative">
      <div class="absolute -left-8 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">5</div>
      <h4 class="font-bold text-sm text-foreground">Verify Size & Download</h4>
      <p class="text-sm text-muted-foreground mt-1">The tool displays the final file size in KB. Confirm it reads between <strong>10.0 KB and 19.9 KB</strong> before downloading. Upload the downloaded JPG directly to the rrbapply.gov.in portal.</p>
    </div>
  </div>
</div>

<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
  <h4 class="text-base font-bold text-foreground">Prepare Your RRB NTPC Documents Now</h4>
  <p class="text-sm text-muted-foreground mt-1">Resize and compress your Railway signature and passport photo to exact RRB portal specifications in seconds — 100% free, works entirely in your browser.</p>
  <div class="flex flex-wrap gap-2 mt-3">
    <a href="/rrb-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
      ✍️ RRB Signature Resize &rarr;
    </a>
    <a href="/rrb-alp-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      🚂 RRB ALP Signature
    </a>
    <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      📸 Photo Resizer
    </a>
  </div>
</div>

<h2>Common RRB NTPC Signature Rejection Reasons (and How to Avoid Them)</h2>

<div class="my-8 p-6 rounded-2xl bg-card border border-border">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h4 class="font-bold text-sm text-red-500 mb-3">❌ Instant Rejection Triggers</h4>
      <ul class="text-xs space-y-2 text-muted-foreground">
        <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">✗</span> Signature in CAPITAL or BLOCK LETTERS</li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">✗</span> File size over 20 KB — portal blocks upload</li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">✗</span> File size under 10 KB — insufficient resolution</li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">✗</span> Blue ink instead of black ink</li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">✗</span> Signed on ruled paper (lines visible)</li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">✗</span> Blurry or low-contrast scan</li>
        <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5">✗</span> Dark or yellowish paper background</li>
      </ul>
    </div>
    <div>
      <h4 class="font-bold text-sm text-green-500 mb-3">✅ Guaranteed Acceptance Checklist</h4>
      <ul class="text-xs space-y-2 text-muted-foreground">
        <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Natural running cursive handwriting</li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> File size: 10.0 KB to 19.9 KB</li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Dimensions: exactly 140 × 60 pixels</li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Pure white background</li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Black ballpoint pen on unruled white paper</li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> JPG/JPEG format only</li>
        <li class="flex items-start gap-2"><span class="text-green-500 mt-0.5">✓</span> Signature fills 75–85% of frame</li>
      </ul>
    </div>
  </div>
</div>

<h2>RRB NTPC CEN 06/2026 Graduate Level Posts & Eligibility</h2>

<p>The Graduate Level NTPC notification (CEN 06/2026) covers a range of Group B and Group C clerical and supervisory posts across Indian Railways. Below are the key highlights:</p>

<table class="w-full text-xs sm:text-sm border border-border my-6">
  <thead>
    <tr class="bg-muted">
      <th class="p-3 text-left font-semibold border-b border-border">Post Category</th>
      <th class="p-3 text-left font-semibold border-b border-border">Example Posts</th>
      <th class="p-3 text-left font-semibold border-b border-border">Qualification</th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-border/50">
      <td class="p-3">Clerical & Commercial</td>
      <td class="p-3">Junior Clerk cum Typist, Accounts Clerk cum Typist, Junior Time Keeper</td>
      <td class="p-3">Any Graduate</td>
    </tr>
    <tr class="border-b border-border/50 bg-muted/30">
      <td class="p-3">Supervisory (Group C)</td>
      <td class="p-3">Station Master, Goods Guard, Senior Commercial cum Ticket Clerk</td>
      <td class="p-3">Any Graduate</td>
    </tr>
    <tr>
      <td class="p-3">Traffic & Operations</td>
      <td class="p-3">Senior Time Keeper, Commercial Apprentice, Traffic Apprentice</td>
      <td class="p-3">Any Graduate</td>
    </tr>
  </tbody>
</table>

<p><strong>Age Limit:</strong> Generally 18–33 years for most posts, with relaxations for SC/ST (5 years), OBC-NCL (3 years), PwBD (10–15 years), and Ex-Servicemen as per Central Government norms.</p>

<h2>Important Links for RRB NTPC CEN 06/2026</h2>

<ul class="my-4 space-y-2 text-sm">
  <li>📋 <strong>Official Application Portal:</strong> <a href="https://rrbapply.gov.in" target="_blank" rel="noopener" class="text-primary underline">rrbapply.gov.in</a></li>
  <li>📄 <strong>CEN 06/2026 Notification PDF:</strong> Available from October 7, 2026 on your regional RRB website</li>
  <li>🔗 <strong>Zonal RRB Websites:</strong> rrbahmedabad.gov.in, rrbbhopal.gov.in, rrbchennai.gov.in, rrbbilaspur.gov.in, etc.</li>
</ul>

<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
  <h4 class="text-base font-bold text-foreground">Get Your RRB Documents Portal-Ready in 60 Seconds</h4>
  <p class="text-sm text-muted-foreground mt-1">Don't let a wrong file size block your application. Use our free Railway RRB signature and photo resizers built specifically for CEN 06/2026 specifications.</p>
  <div class="flex flex-wrap gap-2 mt-3">
    <a href="/rrb-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
      ✍️ Resize RRB Signature &rarr;
    </a>
    <a href="/rrb-group-d-photo-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      📸 Group D Photo
    </a>
    <a href="/rrb-alp-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      🚂 ALP Signature
    </a>
  </div>
</div>

</div>
    `
  },
  {
    slug: 'ssc-live-photo-webcam-guidelines-troubleshooting-2026',
    title: 'SSC Live Photo & Webcam Capture Guidelines 2026: Mobile Setup, Camera Permissions & Avoiding Rejections',
    metaTitle: 'SSC Live Photo Webcam Capture Guidelines 2026: Camera Setup & Fixes - SignResize',
    metaDescription: 'Complete troubleshooting guide for SSC live photo capture on ssc.gov.in. How to fix browser camera errors on Android/Chrome, plain background rules, lighting, and avoiding rejection.',
    excerpt: 'Struggling with camera errors on the new ssc.gov.in portal? Learn how to configure your smartphone or laptop webcam, ensure compliant lighting, and capture a 100% accepted live photo for SSC CGL, CHSL, MTS & GD.',
    category: 'SSC',
    publishDate: '2026-09-30',
    publishTime: '09:30 AM IST',
    lastUpdated: 'September 30, 2026',
    deployedAt: '2026-09-30T09:30:00.000Z',
    author: 'Editorial Team',
    authorRole: 'Exam Document Scrutiny Specialist',
    readTime: '6 min read',
    featured: false,
    tags: ['SSC', 'Live Photo', 'Webcam', 'CGL', 'CHSL', 'MTS', 'GD Constable', 'ssc.gov.in'],
    relatedExamPreset: 'ssc-general',
    contentHtml: `
<div class="space-y-6 text-foreground leading-relaxed">

<p class="text-lg font-medium text-foreground/90">
  With the launch of Staff Selection Commission's modernized portal (<a href="https://ssc.gov.in" target="_blank" rel="noopener" class="text-primary underline">ssc.gov.in</a>), the traditional method of uploading a pre-clicked passport photo file has been officially replaced by a <strong>mandatory real-time live webcam photograph capture</strong>. While this prevents photo impersonation, thousands of candidates encounter browser permission crashes, dim lighting warnings, and facial detection errors.
</p>

<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
  <h3 class="text-base font-bold text-amber-900 dark:text-amber-200 mb-2">⚠️ Why Live Photo Matters for SSC 2026</h3>
  <p class="text-sm text-foreground/80">
    Under SSC guidelines for CGL, CHSL, MTS, and GD Constable, an automated AI facial recognition filter matches your live webcam capture against your examination hall biometric scan. If your capture is blurry, backlit, or contains headwear, your application will be flagged during scrutiny.
  </p>
</div>

<h2>Top 4 SSC Live Photo Capture Rules</h2>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
  <div class="p-4 rounded-xl bg-card border border-border">
    <h4 class="font-bold text-sm text-primary mb-1">1. Plain, Light-Coloured Background</h4>
    <p class="text-xs text-muted-foreground">Sit directly in front of a plain white, off-white, or light grey wall. Curtains with folds, door frames, or outdoor scenes trigger background rejection errors.</p>
  </div>
  <div class="p-4 rounded-xl bg-card border border-border">
    <h4 class="font-bold text-sm text-primary mb-1">2. Frontal Face Position &amp; Eye Level</h4>
    <p class="text-xs text-muted-foreground">Look straight into the camera lens with a neutral expression and mouth closed. Both ears must be fully visible. Do not tilt your head sideways or downwards.</p>
  </div>
  <div class="p-4 rounded-xl bg-card border border-border">
    <h4 class="font-bold text-sm text-primary mb-1">3. Strict Prohibition on Caps &amp; Spectacles</h4>
    <p class="text-xs text-muted-foreground">Even if you wear prescription glasses daily, SSC guidelines mandate removing spectacles, sunglasses, caps, mufflers, and face coverings during live capture.</p>
  </div>
  <div class="p-4 rounded-xl bg-card border border-border">
    <h4 class="font-bold text-sm text-primary mb-1">4. Front-Facing Diffused Lighting</h4>
    <p class="text-xs text-muted-foreground">Light source (window or lamp) must illuminate your face directly from the front. Avoid having a bulb or window behind you, which causes dark silhouette underexposure.</p>
  </div>
</div>

<h2>How to Fix "Camera Not Allowed / Permission Denied" Error</h2>

<p>The most frequent technical barrier is a blocked browser permission. Here is the step-by-step fix across devices:</p>

<div class="space-y-4 my-4">
  <div class="p-4 rounded-xl bg-muted/40 border border-border text-sm">
    <h4 class="font-bold text-foreground mb-1">📱 On Android Smartphones (Google Chrome)</h4>
    <ol class="list-decimal pl-5 space-y-1 text-xs text-muted-foreground">
      <li>Tap the <strong>Padlock or Tune icon</strong> on the left side of the address bar at <code>ssc.gov.in</code>.</li>
      <li>Select <strong>Permissions</strong> &rarr; Toggle <strong>Camera</strong> to <em>Allowed</em>.</li>
      <li>If still blocked: Open Chrome Settings &rarr; <em>Site Settings</em> &rarr; <em>Camera</em> &rarr; Ensure <code>ssc.gov.in</code> is not under the "Blocked" list.</li>
      <li>Refresh the webpage and click "Allow" when the browser prompt asks for camera access.</li>
    </ol>
  </div>

  <div class="p-4 rounded-xl bg-muted/40 border border-border text-sm">
    <h4 class="font-bold text-foreground mb-1">💻 On Windows Laptop / PC</h4>
    <ol class="list-decimal pl-5 space-y-1 text-xs text-muted-foreground">
      <li>Open Windows <strong>Settings</strong> (Win + I) &rarr; <strong>Privacy &amp; Security</strong> &rarr; <strong>Camera</strong>.</li>
      <li>Ensure <em>"Camera access"</em> is ON and <em>"Let desktop apps access your camera"</em> is enabled for your browser.</li>
      <li>In Chrome, click the small video camera icon inside the address bar (far right) and choose <em>"Always allow https://ssc.gov.in to access your camera"</em>.</li>
    </ol>
  </div>
</div>

<h2>What About the SSC Scanned Signature?</h2>

<p>
  Unlike the photograph, <strong>SSC still requires uploading a scanned signature image file</strong>. The technical parameters remain strictly enforced:
</p>

<ul class="my-4 space-y-2 text-sm">
  <li>✍️ <strong>File Size:</strong> Strictly between <strong>10.0 KB and 20.0 KB</strong>.</li>
  <li>📐 <strong>Dimensions:</strong> <strong>140 pixels width × 60 pixels height</strong> (4.0 cm × 2.0 cm).</li>
  <li>🖋️ <strong>Ink Color:</strong> Black ink ballpoint pen on plain white paper.</li>
  <li>🚫 <strong>Disqualification:</strong> Signatures in CAPITAL LETTERS will be summarily rejected.</li>
</ul>

<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
  <h4 class="text-base font-bold text-foreground">Prepare Your SSC Signature in 10 Seconds</h4>
  <p class="text-sm text-muted-foreground mt-1">
    Resize your signature to exact 140×60 px and 10–20 KB bounds with automatic white background cleaning.
  </p>
  <div class="flex flex-wrap gap-2 mt-3">
    <a href="/ssc-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
      ✍️ Resize SSC Signature (10–20 KB) &rarr;
    </a>
    <a href="/ssc-gd-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      🛡️ SSC GD Resizer
    </a>
    <a href="/ssc-chsl-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      📑 SSC CHSL Resizer
    </a>
  </div>
</div>

</div>
    `
  },
  {
    slug: 'blue-ink-vs-black-ink-signature-guidelines-govt-exams',
    title: 'Blue Ink vs Black Ink for Government Exam Signatures: Official SSC, UPSC, Banking & Railway Rules',
    metaTitle: 'Blue Ink vs Black Ink for Govt Exam Signatures: Official 2026 Rules - SignResize',
    metaDescription: 'Which pen should you use for government exams? Detailed breakdown of blue vs black ink signature rules for SSC, UPSC, IBPS, SBI, Railway RRB, and State PSCs with OCR scanner requirements.',
    excerpt: 'Using the wrong pen color can get your application disqualified during automated OCR scrutiny. Here is the definitive guide to official blue ink vs black ink requirements across every major Indian exam portal.',
    category: 'Document Guidelines',
    publishDate: '2026-09-30',
    publishTime: '09:35 AM IST',
    lastUpdated: 'September 30, 2026',
    deployedAt: '2026-09-30T09:35:00.000Z',
    author: 'Editorial Team',
    authorRole: 'Recruitment Portal Compliance Analyst',
    readTime: '5 min read',
    featured: false,
    tags: ['Signature Guidelines', 'Black Ink', 'Blue Ink', 'SSC', 'UPSC', 'IBPS', 'RRB', 'State PSC'],
    relatedExamPreset: 'ssc-general',
    contentHtml: `
<div class="space-y-6 text-foreground leading-relaxed">

<p class="text-lg font-medium text-foreground/90">
  One of the most persistent anxieties among government exam aspirants is: <em>"Can I sign with a blue pen, or will my form be rejected if I don't use black ink?"</em> With different recruitment commissions enforcing different standards, understanding which authority mandates which pen color is critical before you upload your scanned signature.
</p>

<h2>Authority-Wise Pen Color Comparison Matrix (2026)</h2>

<div class="my-5 overflow-x-auto">
  <table class="w-full text-sm text-left border border-border">
    <thead class="bg-muted text-foreground font-semibold">
      <tr>
        <th class="p-3 border-b border-border">Exam Commission / Portal</th>
        <th class="p-3 border-b border-border">Mandatory Signature Ink</th>
        <th class="p-3 border-b border-border">Thumb Impression Ink</th>
        <th class="p-3 border-b border-border">Rejection Risk</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border/60">
      <tr>
        <td class="p-3 font-medium">SSC (Staff Selection Commission)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs">Black Ink Only</span></td>
        <td class="p-3 text-muted-foreground">Not applicable online</td>
        <td class="p-3 text-xs text-rose-600 font-semibold">High if faint blue</td>
      </tr>
      <tr class="bg-muted/30">
        <td class="p-3 font-medium">UPSC (Civil Services, NDA, CDS)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs">Black Ink Only</span></td>
        <td class="p-3 text-muted-foreground">Not applicable online</td>
        <td class="p-3 text-xs text-rose-600 font-semibold">Strictly enforced</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">Banking (IBPS PO/Clerk, SBI PO/Clerk)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs">Black Ink Only</span></td>
        <td class="p-3 text-xs">Blue or Black Ink</td>
        <td class="p-3 text-xs text-rose-600 font-semibold">High (Black mandatory)</td>
      </tr>
      <tr class="bg-muted/30">
        <td class="p-3 font-medium">Railway RRB (NTPC, ALP, Group D)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs">Dark Blue or Black</span></td>
        <td class="p-3 text-muted-foreground">At document verification</td>
        <td class="p-3 text-xs text-emerald-600">Low (Both accepted)</td>
      </tr>
      <tr>
        <td class="p-3 font-medium">NTA (NEET, JEE Main, CUET)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs">Black Ballpoint Only</span></td>
        <td class="p-3 text-xs">Left Hand Thumb (Blue/Black)</td>
        <td class="p-3 text-xs text-rose-600 font-semibold">High</td>
      </tr>
      <tr class="bg-muted/30">
        <td class="p-3 font-medium">State PSCs (UPPSC, BPSC, MPSC, RPSC)</td>
        <td class="p-3"><span class="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs">Black Strongly Preferred</span></td>
        <td class="p-3 text-muted-foreground">Varies by state</td>
        <td class="p-3 text-xs text-amber-600">Moderate</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Why Do Recruitment Portals Insist on Black Ink?</h2>

<p>
  The preference for black ink is not an arbitrary bureaucratic rule; it is driven by automated document processing pipelines:
</p>

<ol class="list-decimal pl-5 space-y-2 text-sm my-3">
  <li><strong>Monochrome OCR Scanners:</strong> High-speed industrial document scanners used at examination centres convert colored forms to high-contrast binary (black &amp; white) bitmaps. Light blue, turquoise, or gel inks often fall below the scanner's threshold and vanish entirely, resulting in a blank signature slot.</li>
  <li><strong>Hall Ticket Printing:</strong> Admit cards are printed in high volumes using monochrome thermal or laser printers. Black signatures reproduce with sharp, dark edges, whereas blue signatures appear washed out or pixelated.</li>
  <li><strong>Digital Compression Artifacts:</strong> When an image is compressed down to 10 KB–20 KB, blue color chrominance is heavily downsampled by the JPEG compression algorithm, causing ink blur along pen strokes.</li>
</ol>

<h2>What If You Already Signed in Blue Ink?</h2>

<p>
  If you have already signed your document in blue ink and need to upload it to an exam portal:
</p>

<ul class="my-4 space-y-2 text-sm">
  <li>💡 <strong>Best Solution:</strong> Take 30 seconds to sign fresh with a dark black ballpoint pen on spotless white paper. It is always safest to comply with the exact letter of the notification.</li>
  <li>🛠️ <strong>Tool Fix:</strong> If you cannot access pen and paper right now, upload your blue signature to <a href="/" class="text-primary underline">SignResize</a> and toggle on the <strong>Pure Black &amp; White Mode</strong> or <strong>Clean White Paper</strong> filter. The tool boosts the stroke luminance contrast, converting blue ink into solid black lines before compressing to your portal's target KB.</li>
</ul>

<div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
  <h4 class="text-base font-bold text-foreground">Ensure Your Signature Is 100% Portal-Ready</h4>
  <p class="text-sm text-muted-foreground mt-1">
    Crop, enhance stroke contrast, and compress to official 10–20 KB limits with zero quality loss.
  </p>
  <div class="flex flex-wrap gap-2 mt-3">
    <a href="/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
      ✍️ Universal Signature Resizer &rarr;
    </a>
    <a href="/upsc-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      🏛️ UPSC Resizer
    </a>
    <a href="/ibps-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition">
      🏦 Banking Resizer
    </a>
  </div>
</div>

</div>
    `
  }
  ,
  // =========================================================
  // 🇧🇩 BANGLADESH COUNTRY ARTICLES
  // =========================================================
  {
    slug: "bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026",
    title: "BPSC & Teletalk Bangladesh Master Guide 2026: Govt Job Online Apply, Photo (300×300px / 100KB) & Signature (300×80px / 60KB) Resizer",
    metaTitle: "BPSC Teletalk Bangladesh Master Guide 2026: Online Apply, Photo & Signature Resizer",
    metaDescription: "Complete BPSC & Teletalk Bangladesh 2026 master guide covering govt job online apply, photo 300x300 px (100 KB) & signature 300x80 px (60 KB) resizer, admit card, payment & validator.",
    excerpt: "Master handbook for BPSC & Teletalk Bangladesh 2026 covering govt job online apply, Teletalk photo resizer (300×300 px / 100 KB), signature resizer (300×80 px / 60 KB), payment via Teletalk SMS, admit card download, and common upload error fixes.",
    category: "Guidelines & Tips",
    country: "BD",
    publishDate: "Oct 06, 2026",
    lastUpdated: "Oct 06, 2026",
    author: "SignResize Bangladesh Desk",
    authorRole: "BPSC & Teletalk Recruitment Compliance Specialist",
    readTime: "13 min read",
    featured: true,
    tags: [
      "BPSC Bangladesh",
      "Teletalk Photo Resize",
      "Bangladesh Govt Job 2026",
      "Teletalk 300x300 Photo",
      "300x80 Signature Bangladesh",
      "alljobs teletalk com bd",
      "Bangladesh Online Apply"
    ],
    relatedExamPreset: "bpsc-bd",
    quickFacts: [
      {
        "label": "Conducting Body",
        "value": "Bangladesh Public Service Commission (BPSC, Agargaon, Dhaka)"
      },
      {
        "label": "Official Portals",
        "value": "bpsc.gov.bd | bpsc.teletalk.com.bd | alljobs.teletalk.com.bd"
      },
      {
        "label": "Passport Photo Bounds",
        "value": "300 × 300 px (max 100 KB, White/Light BG, JPG, Color)"
      },
      {
        "label": "Signature Scan Bounds",
        "value": "300 × 80 px (max 60 KB, Black/Blue Ink on White Paper, JPG)"
      },
      {
        "label": "Fee Payment Method",
        "value": "Teletalk Prepaid SIM SMS (specific command per circular)"
      },
      {
        "label": "Official Validator Tool",
        "value": "bpsc.teletalk.com.bd/ncad/imsize.php (Photo & Sign Validator)"
      },
      {
        "label": "Support Contact",
        "value": "alljobs.query@teletalk.com.bd"
      },
      {
        "label": "Photo Type Required",
        "value": "Recent Color Photo only — Black & White / Grayscale NOT accepted"
      }
    ],
    faqs: [
      {
        "question": "What is BPSC Bangladesh?",
        "answer": "The ==Bangladesh Public Service Commission (BPSC)== is a constitutional body established under the Bangladesh Public Service Commission Act. Located in Agargaon, Dhaka, it conducts competitive examinations and recruitment processes including the BCS (Bangladesh Civil Service) examination to appoint qualified candidates to government posts."
      },
      {
        "question": "What is the photo size for BPSC Teletalk application?",
        "answer": "BPSC and all Teletalk-based govt job portals require a recent ==color passport photo measuring exactly 300 × 300 pixels== with file size strictly ==under 100 KB in JPG/JPEG format== on a plain white or light-colored background."
      },
      {
        "question": "What is the signature size for Bangladesh govt job applications?",
        "answer": "The signature file must be ==300 × 80 pixels (width × height)== with a maximum file size of ==60 KB in JPG/JPEG format==. Sign with black or blue ballpoint pen on a clean white sheet of paper."
      },
      {
        "question": "How to apply online for Bangladesh govt jobs on Teletalk portal?",
        "answer": "Visit ==alljobs.teletalk.com.bd== or the specific job portal (e.g. bpsc.teletalk.com.bd), register or log in, fill the application form, upload your 300×300 px photo (≤100 KB) and 300×80 px signature (≤60 KB), verify using the Photo/Sign Validator tool, and complete payment via Teletalk SMS."
      },
      {
        "question": "How to use the Teletalk Photo/Sign Validator?",
        "answer": "Go to ==bpsc.teletalk.com.bd/ncad/imsize.php== and upload your photo and signature files. The official validator checks dimensions and file size and confirms whether your files meet the portal requirements before submission."
      },
      {
        "question": "Can I use a black-and-white photo for Teletalk job application?",
        "answer": "No. ==Black-and-white, grayscale, or monochrome photos are strictly rejected== by all Teletalk government job portals. The portal uses facial recognition verification that requires a color photograph."
      },
      {
        "question": "Can I use PNG format for Teletalk photo upload?",
        "answer": "No. The Teletalk portal only accepts ==JPG/JPEG format== for both photo and signature uploads. PNG, HEIC, WEBP, or PDF formats will be rejected by the portal validator."
      },
      {
        "question": "How to pay the Teletalk application fee?",
        "answer": "After completing the online application form, the portal provides a specific ==SMS command== to send from a Teletalk prepaid SIM card. The fee is deducted from your Teletalk balance. Specific SMS format and fee amount are always mentioned in the official circular."
      },
      {
        "question": "My Teletalk payment was deducted but status not updated — what to do?",
        "answer": "Do not pay again. Email ==alljobs.query@teletalk.com.bd== with your application number, mobile number, transaction ID, and fee amount. The Teletalk support team reconciles payments manually within 2–3 working days."
      },
      {
        "question": "How to download Bangladesh govt job admit card?",
        "answer": "Admit cards are published on the respective Teletalk portal (e.g. bpsc.teletalk.com.bd) usually 7–10 days before the exam. Log in with your ==User ID and Password== used during registration to download and print your admit card."
      },
      {
        "question": "What causes Teletalk photo upload rejection?",
        "answer": "Common rejection causes: ==file exceeds 100 KB==, dimensions are not exactly 300×300 px, non-JPG format, black-and-white photo, blurry or shadowed image, face not fully visible, or non-plain background."
      },
      {
        "question": "What causes Teletalk signature upload rejection?",
        "answer": "Signature rejections occur when: ==file exceeds 60 KB==, dimensions differ from 300×80 px, the file is PNG or other non-JPG format, signature is typed/block-letter rather than handwritten, or the signature area has shadows or a colored background."
      },
      {
        "question": "How to resize photo to 300x300 px under 100 KB for Bangladesh govt job?",
        "answer": "Upload your photo to our ==SignResize Bangladesh Teletalk Photo Tool== to automatically crop your image to exactly 300×300 pixels and compress it under 100 KB in JPG format — instantly and with zero privacy risk."
      },
      {
        "question": "I did not receive the Teletalk OTP — what should I do?",
        "answer": "Check your phone's SMS inbox and spam folder. Ensure your registered mobile number has good signal. If the OTP still does not arrive, wait 5 minutes and request a resend. Contact ==alljobs.query@teletalk.com.bd== if the issue persists."
      },
      {
        "question": "How to check Bangladesh govt job exam result?",
        "answer": "Results are published on the official exam body's website (e.g. ==bpsc.gov.bd== for BPSC) and on the respective Teletalk portal. Log in with your User ID and Password or search using your Roll Number in the published result PDF."
      }
    ],
    contentHtml: `
<!-- Sticky Quick Problem Finder (Anchor Jump Bar) -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Instant Diagnostic Failure Finder</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Jump directly to your specific failure state</span>
  </div>

  <!-- Jump Action Chips -->
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#bd-failure-upload" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span>
      <span>300×300 Photo / 300×80 Signature Upload Error</span>
    </a>
    <a href="#bd-failure-payment" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📱</span>
      <span>Teletalk SMS Fee Payment</span>
    </a>
    <a href="#bd-failure-admitcard" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🎟️</span>
      <span>Admit Card Download</span>
    </a>
    <a href="#bd-failure-validator" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>🔍</span>
      <span>Photo/Sign Validator Rejected</span>
    </a>
    <a href="#bd-failure-result" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📊</span>
      <span>Result &amp; Merit Check</span>
    </a>
  </div>
</div>

<section id="bd-overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete BPSC &amp; Teletalk Bangladesh 2026 Master Overview:</strong> The Bangladesh Public Service Commission (BPSC), headquartered in Agargaon, Dhaka and accessible via <a href="https://bpsc.gov.bd" target="_blank" rel="noopener noreferrer" class="text-primary underline">bpsc.gov.bd</a>, is the central recruitment authority for government posts in Bangladesh. All online applications are submitted through the <a href="https://alljobs.teletalk.com.bd" target="_blank" rel="noopener noreferrer" class="text-primary underline">Teletalk Alljobs portal</a> or specific body portals like <strong>bpsc.teletalk.com.bd</strong>, <strong>dpe.teletalk.com.bd</strong>, and <strong>ntrca.teletalk.com.bd</strong>. Every application requires strict compliance with image upload standards: <strong>300 × 300 pixel color photo under 100 KB</strong> and <strong>300 × 80 pixel handwritten signature under 60 KB</strong>, both in JPG format.
    </p>
  </div>

  <p>
    Each year, hundreds of thousands of aspirants from Dhaka, Chittagong, Sylhet, Rajshahi, Khulna, Barisal, and across Bangladesh apply for civil service, teaching, banking, and ministry positions through Teletalk-powered portals. Yet thousands face application rejection or admit card issues due to file size violations, incorrect pixel dimensions, using PNG or HEIC formats, or failed Teletalk SMS fee payments.
  </p>

  <p>
    This diagnostic master guide delivers an <strong>actionable troubleshooting framework</strong> covering every stage — Teletalk online registration, photo &amp; signature upload compliance, SMS fee payment, admit card download, result checking, and instant image formatting using our free client-side utility: the <a href="/teletalk-photo-signature-resize/" class="text-primary font-semibold underline">SignResize Bangladesh Teletalk Photo &amp; Signature Resizer</a>.
  </p>
</section>

<!-- Authoritative Master Specifications & Policy Bounds -->
<section id="bd-master-specs" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📐 1.</span> Master Teletalk Bangladesh Regulatory &amp; Technical Benchmark Specifications
  </h2>
  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Authoritative structural parameters governing Bangladesh government job applications, Teletalk portal limits, BPSC, NTRCA, DPE, and bank recruitment standards.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Regulatory Parameter</th>
          <th class="px-4 py-3">Official Teletalk Bangladesh Standard</th>
          <th class="px-4 py-3">Statutory Rule / Authority</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Passport Photo File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">300 × 300 px (max 100 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">White/Light BG, Color JPG, No B&amp;W</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature Scan File Bounds</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">300 × 80 px (max 60 KB)</td>
          <td class="px-4 py-3 text-muted-foreground">Black/Blue ballpoint ink on white unruled paper</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Photo Format Requirement</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">JPG / JPEG only</td>
          <td class="px-4 py-3 text-muted-foreground">PNG, HEIC, WEBP, PDF formats auto-rejected</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Application Fee System</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">Teletalk Prepaid SMS (circular-specific command)</td>
          <td class="px-4 py-3 text-muted-foreground">Teletalk Bangladesh mobile wallet fee deduction</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Official Photo/Sign Validator</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">bpsc.teletalk.com.bd/ncad/imsize.php</td>
          <td class="px-4 py-3 text-muted-foreground">Use before final submission to verify file compliance</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Application Portal</td>
          <td class="px-4 py-3 font-mono">alljobs.teletalk.com.bd / bpsc.teletalk.com.bd</td>
          <td class="px-4 py-3 text-muted-foreground">Govt-authorised Teletalk recruitment platform</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Support Email</td>
          <td class="px-4 py-3 font-mono">alljobs.query@teletalk.com.bd</td>
          <td class="px-4 py-3 text-muted-foreground">For payment disputes and technical upload issues</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Visual Dimension Blueprints -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
    <!-- Photo Blueprint -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>📐</span> Photo Blueprint (300 × 300 px)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Max 100 KB</span>
      </div>
      <div class="flex items-center gap-4 text-xs text-muted-foreground">
        <div class="w-24 h-24 rounded-xl border-2 border-dashed border-primary/50 bg-primary/5 flex flex-col items-center justify-center text-center p-2 shrink-0">
          <span class="font-bold text-primary text-[10px]">80% Face</span>
          <span class="text-[9px] text-muted-foreground">300×300 px</span>
          <span class="text-[8px] text-emerald-600 dark:text-emerald-400 font-mono mt-1">White BG</span>
        </div>
        <div class="space-y-1.5">
          <p><strong class="text-foreground">Aspect Ratio:</strong> Square (1:1) — 300 × 300 px.</p>
          <p><strong class="text-foreground">Face Coverage:</strong> Full frontal color photo, neutral expression, ears visible, no sunglasses.</p>
          <p><strong class="text-foreground">Size Limit:</strong> Strictly under 100 KB in JPG/JPEG format.</p>
          <p><strong class="text-foreground">Color Requirement:</strong> Color photo mandatory — no B&amp;W or grayscale.</p>
        </div>
      </div>
    </div>

    <!-- Signature Blueprint -->
    <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border space-y-3">
      <div class="flex items-center justify-between border-b border-border pb-2">
        <h3 class="font-bold text-sm sm:text-base text-foreground flex items-center gap-2">
          <span>✍️</span> Signature Blueprint (300 × 80 px)
        </h3>
        <span class="px-2 py-0.5 rounded font-mono text-[10px] font-bold bg-primary/10 text-primary">Max 60 KB</span>
      </div>
      <div class="grid grid-cols-2 gap-2 text-center text-xs">
        <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
          <span class="text-emerald-700 dark:text-emerald-300 font-bold flex items-center justify-center gap-1">
            <span>✅</span> Valid Signature
          </span>
          <div class="font-serif italic text-base text-foreground py-1">Rahim Ahmed</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Black/Blue ballpoint ink scan on white paper, 300×80 px, under 60 KB.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-1">
          <span class="text-rose-700 dark:text-rose-300 font-bold flex items-center justify-center gap-1">
            <span>❌</span> Auto-Rejected
          </span>
          <div class="font-mono font-bold tracking-widest text-sm text-rose-600 dark:text-rose-400 py-1">RAHIM AHMED</div>
          <p class="text-[10px] text-muted-foreground leading-tight">Typed, block letter, or shadowed background signatures are rejected.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 1: Upload & File Errors -->
<section id="bd-failure-upload" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="flex flex-wrap items-center justify-between gap-2">
    <div class="space-y-1">
      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
        Stage 1 Failure State
      </span>
      <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
        📸 Failure State 1: Teletalk 300×300 px Photo &amp; 300×80 px Signature Upload Rejections
      </h2>
    </div>
    <div class="flex items-center gap-2">
      <a href="/teletalk-photo-signature-resize/" class="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition">
        BD Photo Tool
      </a>
    </div>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    During the image upload step on <a href="https://alljobs.teletalk.com.bd" target="_blank" rel="noopener noreferrer" class="text-primary underline">alljobs.teletalk.com.bd</a>, the server validates the binary stream against exact dimension and file-size constraints. Any deviation — even 1 KB over the 100 KB limit — triggers a hard portal exception.
  </p>

  <!-- 5W1H Diagnostic Card -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-primary">● WHAT:</span> Exact Error String
        </strong>
        <p class="text-muted-foreground font-mono text-xs">
          "Photo size exceeds 100 KB limit. Please upload a JPG file of 300×300 px under 100 KB" OR "Signature size exceeds 60 KB. Upload 300×80 px JPG under 60 KB."
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-amber-600 dark:text-amber-400">● WHY:</span> Technical Root Cause
        </strong>
        <p class="text-muted-foreground">
          Smartphone cameras produce images ranging from 2 MB to 8 MB at full resolution. Simply renaming a PNG or HEIC file to .jpg does not compress the underlying byte data. Files over 100 KB fail Teletalk's database blob size constraints at server level.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-rose-600 dark:text-rose-400">● WHEN:</span> Failure Window
        </strong>
        <p class="text-muted-foreground">
          Occurs during the image upload step of the online application form. If unresolved before the closing date deadline (typically 11:59 PM per circular), the application remains incomplete and un-submitted.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-indigo-600 dark:text-indigo-400">● WHERE:</span> Official Portal Link
        </strong>
        <p class="text-muted-foreground">
          Teletalk Bangladesh Application Portal: <code>alljobs.teletalk.com.bd → Login → Apply → Image Upload Step</code>. Validator: <code>bpsc.teletalk.com.bd/ncad/imsize.php</code>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-emerald-600 dark:text-emerald-400">● WHO:</span> Affected Candidates
        </strong>
        <p class="text-muted-foreground">
          All BCS, NTRCA, Primary Teacher, Bangladesh Bank, Sonali Bank, Janata Bank, and Ministry applicants using Teletalk-powered recruitment portals.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-muted/30 border border-border/60 space-y-1">
        <strong class="text-foreground flex items-center gap-1.5 font-bold">
          <span class="text-cyan-600 dark:text-cyan-400">● HOW:</span> Step-by-Step Technical Fix
        </strong>
        <p class="text-muted-foreground">
          1. Upload your photo to <a href="/teletalk-photo-signature-resize/" class="text-primary underline">SignResize Bangladesh Photo Tool</a>.<br/>
          2. Select <strong>300×300 px, max 100 KB, JPG</strong> preset for photo.<br/>
          3. For signature: use <strong>300×80 px, max 60 KB, JPG</strong>.<br/>
          4. Verify with the official Teletalk validator before final upload.
        </p>
      </div>
    </div>
  </div>

  <!-- Common Rejection Root Causes -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3">
    <h3 class="font-bold text-base text-foreground">7 Most Common Teletalk Image Rejection Causes:</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
      <div class="flex items-start gap-2 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <span class="text-rose-500 font-bold shrink-0">✖</span>
        <div><strong class="text-foreground">File over 100 KB:</strong> <span class="text-muted-foreground">Compress photo to under 100 KB before uploading.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <span class="text-rose-500 font-bold shrink-0">✖</span>
        <div><strong class="text-foreground">Wrong dimensions:</strong> <span class="text-muted-foreground">Photo must be exactly 300×300 px — not 640×480 or 200×200.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <span class="text-rose-500 font-bold shrink-0">✖</span>
        <div><strong class="text-foreground">PNG / HEIC format:</strong> <span class="text-muted-foreground">Only JPG/JPEG is accepted — no format conversion by renaming.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <span class="text-rose-500 font-bold shrink-0">✖</span>
        <div><strong class="text-foreground">Black &amp; White photo:</strong> <span class="text-muted-foreground">Color photograph is mandatory — grayscale auto-rejected.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <span class="text-rose-500 font-bold shrink-0">✖</span>
        <div><strong class="text-foreground">Blurry or dark photo:</strong> <span class="text-muted-foreground">Ensure good lighting and sharp focus — facial recognition may fail.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <span class="text-rose-500 font-bold shrink-0">✖</span>
        <div><strong class="text-foreground">Signature over 60 KB:</strong> <span class="text-muted-foreground">Signature must be 300×80 px and strictly under 60 KB.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <span class="text-rose-500 font-bold shrink-0">✖</span>
        <div><strong class="text-foreground">Typed/printed signature:</strong> <span class="text-muted-foreground">Only handwritten ink signatures on white paper are accepted.</span></div>
      </div>
    </div>
  </div>
</section>

<!-- FAILURE STATE 2: Teletalk SMS Fee Payment -->
<section id="bd-failure-payment" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
      Stage 2 Fee System
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📱 Teletalk Bangladesh SMS Application Fee Payment Guide
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Unlike India's net banking challan or Pakistan's 1Bill PSID, Bangladesh uses a <strong>Teletalk prepaid SIM SMS system</strong> for government job application fee payment. The specific SMS format and fee amount are published in each official job circular.
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4 text-xs sm:text-sm">
    <h3 class="font-bold text-foreground text-base">3-Step Teletalk SMS Fee Payment Workflow:</h3>
    <ol class="list-decimal pl-5 space-y-2 text-muted-foreground">
      <li><strong>Complete the Online Form:</strong> Fill and submit your application on <code>alljobs.teletalk.com.bd</code>. Note your <strong>User ID</strong> generated after form submission.</li>
      <li><strong>Send SMS from Teletalk SIM:</strong> Open the SMS app on your Teletalk prepaid phone. Type the specific command published in the circular (e.g., <code>EXAM&lt;space&gt;User ID</code>) and send to the designated number (usually 16222).</li>
      <li><strong>Receive Confirmation SMS:</strong> You will receive a PIN number via return SMS. Send the PIN confirmation SMS as instructed. Fee is deducted from your Teletalk balance, and the application portal status updates automatically within minutes.</li>
    </ol>

    <!-- Dark Snippet Box -->
    <div class="my-4 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800 space-y-1">
      <div class="text-emerald-400 font-bold">// Example Teletalk SMS Payment Flow (sample format — check your circular)</div>
      <div>Step 1 SMS → To: 16222 → Message: <span class="text-amber-300">BPSC&lt;space&gt;User_ID</span></div>
      <div>Return SMS → PIN: <span class="text-amber-300">XXXXXX</span> | Fee: BDT 200 (example)</div>
      <div>Step 2 SMS → To: 16222 → Message: <span class="text-amber-300">BPSC&lt;space&gt;Yes&lt;space&gt;PIN&lt;space&gt;User_ID</span></div>
      <div>Status: <span class="text-emerald-400">Payment Received — Application Confirmed</span></div>
    </div>

    <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm space-y-1">
      <strong class="text-amber-800 dark:text-amber-200 flex items-center gap-1">⚠️ Payment Deducted But Status Not Updated?</strong>
      <p class="text-muted-foreground">Do NOT pay again. Email <strong>alljobs.query@teletalk.com.bd</strong> with your Application Number, Teletalk mobile number, transaction time, and fee amount. Teletalk support manually reconciles payments within 2–3 working days.</p>
    </div>
  </div>
</section>

<!-- FAILURE STATE 3: Admit Card Download -->
<section id="bd-failure-admitcard" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
      Stage 3 Test Entry
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🎟️ Bangladesh Govt Job Admit Card Download Protocol
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Approximately 7–14 days before the scheduled examination date, the respective Teletalk portal publishes admit cards online. Candidates do not receive physical admit cards by post.
  </p>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <p><strong>Step 1:</strong> Visit <a href="https://alljobs.teletalk.com.bd" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold underline">alljobs.teletalk.com.bd</a> or the specific portal (e.g. <code>bpsc.teletalk.com.bd</code>, <code>dpe.teletalk.com.bd</code>).</p>
    <p><strong>Step 2:</strong> Click on <strong>Admit Card / Pravesh Patra Download</strong> or log in with the <strong>User ID</strong> and <strong>Password</strong> you created during registration.</p>
    <p><strong>Step 3:</strong> Download the PDF admit card containing your Roll Number, Exam Center, Exam Date &amp; Time, and reporting instructions.</p>
    <p><strong>Step 4:</strong> Print the admit card and bring it along with your original <strong>NID (National Identity Card)</strong> to the exam center.</p>

    <div class="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm space-y-1">
      <strong class="text-indigo-800 dark:text-indigo-200 flex items-center gap-1">ℹ️ Admit Card Not Available Yet?</strong>
      <p class="text-muted-foreground">Admit cards are released only after final scrutiny of applications. Monitor the official portal and the conducting body's website (e.g. bpsc.gov.bd) regularly. Notifications are also shared via official social media pages.</p>
    </div>
  </div>
</section>

<!-- FAILURE STATE 4: Photo/Sign Validator -->
<section id="bd-failure-validator" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20">
      Stage 4 Validator
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      🔍 Using the Official Teletalk Photo &amp; Signature Validator
    </h2>
  </div>

  <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
    Before uploading your photo and signature on any Teletalk portal, always use the <strong>official Photo/Sign Validator</strong> to confirm your files meet exact requirements — this prevents last-minute rejection at submission.
  </p>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Validator Check</th>
          <th class="px-4 py-3">Required Value</th>
          <th class="px-4 py-3">What to Do If Fails</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Photo Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">Exactly 300 × 300 px</td>
          <td class="px-4 py-3 text-muted-foreground">Resize using SignResize tool to exact 300×300 px</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Photo File Size</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">≤ 100 KB</td>
          <td class="px-4 py-3 text-muted-foreground">Compress with SignResize compress tool</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature Dimensions</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Exactly 300 × 80 px</td>
          <td class="px-4 py-3 text-muted-foreground">Crop and resize signature to exactly 300×80 px</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Signature File Size</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">≤ 60 KB</td>
          <td class="px-4 py-3 text-muted-foreground">Compress signature JPG under 60 KB</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">File Format</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">JPG / JPEG only</td>
          <td class="px-4 py-3 text-muted-foreground">Convert file to true JPG (not just rename)</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Photo Color Type</td>
          <td class="px-4 py-3 font-bold text-foreground">Color (RGB) required</td>
          <td class="px-4 py-3 text-muted-foreground">Take new color photo — grayscale will be rejected</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- FAILURE STATE 5: Result Check -->
<section id="bd-failure-result" class="space-y-4 pt-6 border-t-2 border-primary/20">
  <div class="space-y-1">
    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
      Stage 5 Result
    </span>
    <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
      📊 Bangladesh Govt Job Result &amp; Merit List Check Protocol
    </h2>
  </div>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Exam Body</th>
          <th class="px-4 py-3">Result Portal</th>
          <th class="px-4 py-3">Check Method</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">BPSC (BCS Exam)</td>
          <td class="px-4 py-3 font-mono text-primary">bpsc.gov.bd</td>
          <td class="px-4 py-3 text-muted-foreground">Login with User ID or search Roll Number in PDF result list</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">NTRCA</td>
          <td class="px-4 py-3 font-mono text-primary">ntrca.gov.bd</td>
          <td class="px-4 py-3 text-muted-foreground">Registration & result available on official NTRCA portal</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Primary Teacher (DPE)</td>
          <td class="px-4 py-3 font-mono text-primary">dpe.gov.bd / dpe.teletalk.com.bd</td>
          <td class="px-4 py-3 text-muted-foreground">Check result via Roll Number on DPE official portal</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Bangladesh Bank</td>
          <td class="px-4 py-3 font-mono text-primary">bb.org.bd / erecruitment.bb.org.bd</td>
          <td class="px-4 py-3 text-muted-foreground">Login with registered email or Roll Number</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Sonali / Janata Bank</td>
          <td class="px-4 py-3 font-mono text-primary">sonalibank.com.bd / janatabank-bd.com</td>
          <td class="px-4 py-3 text-muted-foreground">Results published on official bank website and Teletalk portal</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Tool Callout CTA Box -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">Resize Photo &amp; Signature for Bangladesh Teletalk Portal Instantly</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">Crop your photo to exactly 300×300 px (under 100 KB) and signature to 300×80 px (under 60 KB) with zero privacy risk — 100% client-side, no uploads to server.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/teletalk-photo-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open Bangladesh Photo Resizer &rarr;
    </a>
    <a href="/compress-image-to-kb/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      Compress Image to KB
    </a>
  </div>
</div>
`
  },
  {
    slug: "bcs-exam-bangladesh-complete-guide-2026-syllabus-preparation-photo-upload",
    title: "BCS Exam Bangladesh Complete Guide 2026: BPSC Syllabus, Preliminary Preparation, Admit Card Download & Teletalk Photo (300×300px) Upload Guide",
    metaTitle: "BCS Bangladesh Complete Guide 2026: Syllabus, Preparation & Photo Resize",
    metaDescription: "Complete BCS Bangladesh 2026 guide — BPSC 3-stage exam (Preliminary 200 MCQ, Written, Viva), syllabus breakdown, preparation strategy, admit card download, and Teletalk photo 300x300 px (100 KB) resize guide.",
    excerpt: "Comprehensive guide for BCS Bangladesh 2026 covering the 3-stage BPSC process — Preliminary (200 marks MCQ), Written Exam (1000 marks), and Viva Voce — with full subject-wise syllabus, preparation tips, Teletalk photo upload specs (300×300 px / 100 KB), admit card download, and result check steps.",
    category: "Study Prep",
    country: "BD",
    publishDate: "Oct 06, 2026",
    lastUpdated: "Oct 06, 2026",
    author: "SignResize Bangladesh Desk",
    authorRole: "BCS & Competitive Exam Methodology Specialist",
    readTime: "14 min read",
    featured: false,
    tags: [
      "BCS Exam Bangladesh",
      "BCS Syllabus 2026",
      "BCS Preliminary Preparation",
      "BPSC Bangladesh",
      "BCS Written Exam",
      "BCS Admit Card",
      "Bangladesh Civil Service"
    ],
    relatedExamPreset: "bpsc-bd",
    quickFacts: [
      {
        "label": "Conducting Body",
        "value": "Bangladesh Public Service Commission (BPSC) — bpsc.gov.bd"
      },
      {
        "label": "Exam Stages",
        "value": "3 Stages: Preliminary (MCQ) → Written → Viva Voce"
      },
      {
        "label": "Preliminary Marks",
        "value": "200 Marks (100 MCQs × 2 Marks, 2.5 Hours)"
      },
      {
        "label": "Written Exam Marks",
        "value": "1,100 Marks across compulsory + optional subjects"
      },
      {
        "label": "Viva Voce Marks",
        "value": "100 Marks (personality and aptitude assessment)"
      },
      {
        "label": "Application Portal",
        "value": "bpsc.teletalk.com.bd (Teletalk Bangladesh)"
      },
      {
        "label": "Photo Requirement",
        "value": "300 × 300 px, max 100 KB, JPG, Color, White BG"
      },
      {
        "label": "Total Exam Timeline",
        "value": "~1.5 to 2 Years from Circular to Final Result"
      }
    ],
    faqs: [
      {
        "question": "What is the Bangladesh Civil Service (BCS) exam?",
        "answer": "The ==Bangladesh Civil Service (BCS) examination== is the most prestigious competitive examination in Bangladesh, conducted by the Bangladesh Public Service Commission (BPSC). It selects candidates for senior civil service positions across 26 cadres including administration, police, foreign affairs, education, health, agriculture, and engineering services."
      },
      {
        "question": "How many stages does the BCS exam have?",
        "answer": "The BCS exam has ==3 stages: (1) Preliminary Examination== (200 marks MCQ screening), ==(2) Written Examination== (1,100 marks descriptive papers), and ==(3) Viva Voce== (100 marks personality assessment). Candidates must pass each stage sequentially."
      },
      {
        "question": "How many marks is the BCS Preliminary exam?",
        "answer": "The BCS Preliminary Examination consists of ==200 marks== across 100 multiple-choice questions (2 marks each). The exam duration is 2 hours and 30 minutes. Subject areas include Bangla, English, Bangladesh Affairs, International Affairs, General Science &amp; Technology, Math &amp; Mental Ability, and Geography &amp; Environment."
      },
      {
        "question": "What subjects are in the BCS Preliminary exam?",
        "answer": "The BCS Preliminary covers 9 subject areas: ==Bangla (35 marks), English (35 marks), Bangladesh Affairs (30 marks), International Affairs (20 marks), General Science &amp; Technology (15 marks), Computer &amp; Information Technology (15 marks), Mathematical Reasoning &amp; Mental Ability (15 marks), Geography, Environment &amp; Disaster Management (10 marks), and Everyday Science (5 marks)==."
      },
      {
        "question": "What subjects are in the BCS Written exam?",
        "answer": "Compulsory written subjects include: ==Bangla (200 marks), English (200 marks), Bangladesh Affairs (200 marks), International Affairs (100 marks), Mathematical Reasoning &amp; Mental Ability (100 marks), and General Science &amp; Technology (100 marks)==. Optional subject paper (200 marks) is selected from the cadre specialization."
      },
      {
        "question": "How long does the entire BCS process take?",
        "answer": "The full BCS process — from circular release to final posting — typically takes ==1.5 to 2 years==, comprising the Preliminary (2–3 months after circular), Written (4–6 months later), Viva (3–4 months after written result), and final cadre allocation and posting."
      },
      {
        "question": "What is the age limit for BCS exam?",
        "answer": "The general age limit for BCS examination is ==21 to 30 years== as of the application date. For candidates with freedom fighter quotas and certain other categories, the upper limit is relaxed to 32 years. Age is verified from the NID card."
      },
      {
        "question": "What is the minimum pass mark for BCS Preliminary?",
        "answer": "BPSC does not declare a fixed cut-off mark in advance. The preliminary qualifying threshold depends on the ==number of candidates qualified relative to written exam seat allocation==. Generally a score of 100–120 out of 200 is competitive, but this varies each year."
      },
      {
        "question": "How to apply for BCS exam online?",
        "answer": "Visit ==bpsc.teletalk.com.bd== during the open application window, create an account or log in, fill in the personal, educational, and cadre preference details, upload your 300×300 px color photo (max 100 KB) and 300×80 px signature (max 60 KB), verify with the Photo/Sign Validator, and complete fee payment via Teletalk SMS."
      },
      {
        "question": "How to download the BCS Admit Card (Pravesh Patra)?",
        "answer": "BCS admit cards are published on ==bpsc.teletalk.com.bd== approximately 7–10 days before the examination date. Log in with your User ID and Password or enter your Roll Number to download and print the PDF admit card."
      },
      {
        "question": "Where can I find BCS past question papers?",
        "answer": "BCS past papers (Previous Years' Questions) are available on the ==BPSC official website (bpsc.gov.bd)==, major bookstores (Solution books), and educational apps. Practicing 5–10 years of past preliminary papers is the most effective preparation strategy."
      },
      {
        "question": "How to check the BCS result by roll number?",
        "answer": "BCS Preliminary results are published as a PDF list of qualified Roll Numbers on ==bpsc.gov.bd==. Written and Viva results with final merit/cadre allocation are also posted on the official BPSC website. Log in with your portal credentials to check personalized status."
      },
      {
        "question": "What photo size is required for BCS application on bpsc.teletalk.com.bd?",
        "answer": "The BCS application via the Teletalk portal requires a ==color passport photo of exactly 300 × 300 pixels (width × height)== with a maximum file size of ==100 KB in JPG/JPEG format== on a plain white background. Black-and-white photos are rejected."
      }
    ],
    contentHtml: `
<!-- Sticky Quick Problem Finder -->
<div class="my-6 p-4 sm:p-5 rounded-2xl bg-card border-2 border-primary/30 shadow-md space-y-3 sticky top-4 z-20 backdrop-blur-md bg-card/95">
  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-border/80 pb-2.5">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
      <h3 class="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-foreground">🚨 Jump to BCS Guide Section</h3>
    </div>
    <span class="text-[10px] font-mono text-muted-foreground">Click to navigate directly</span>
  </div>
  <div class="flex flex-wrap gap-2 text-xs">
    <a href="#bcs-what" class="px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📖</span><span>What is BCS?</span>
    </a>
    <a href="#bcs-syllabus" class="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-200 border border-amber-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📝</span><span>Preliminary Syllabus (200 Marks)</span>
    </a>
    <a href="#bcs-written" class="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-800 dark:text-indigo-200 border border-indigo-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>✍️</span><span>Written Exam Guide</span>
    </a>
    <a href="#bcs-photo" class="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-800 dark:text-rose-200 border border-rose-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📸</span><span>Photo &amp; Signature Upload</span>
    </a>
    <a href="#bcs-timeline" class="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-800 dark:text-emerald-200 border border-emerald-500/25 font-semibold transition flex items-center gap-1.5 shadow-2xs">
      <span>📅</span><span>BCS Timeline &amp; Stages</span>
    </a>
  </div>
</div>

<section id="bcs-overview" class="space-y-4">
  <div class="p-4 sm:p-5 rounded-2xl bg-primary/10 border border-primary/20 text-foreground">
    <p class="text-sm sm:text-base font-semibold leading-relaxed">
      <strong>Complete BCS Bangladesh 2026 Master Overview:</strong> The Bangladesh Civil Service (BCS) examination, conducted by the <a href="https://bpsc.gov.bd" target="_blank" rel="noopener noreferrer" class="text-primary underline">Bangladesh Public Service Commission (BPSC)</a>, is the nation's most competitive and prestigious government recruitment process. Passing BCS opens doors to <strong>26 prestigious cadres</strong> including Administration, Police, Foreign Service, Taxation, Audit &amp; Accounts, Education, Health, Agriculture, Public Works, and more — with salaries ranging from BDT 16,000 to BDT 78,000 per month (Grade 5–9) plus government benefits.
    </p>
  </div>

  <p>
    Each BCS cycle attracts over 400,000 to 500,000 applicants from across Bangladesh — from Dhaka, Chittagong, Sylhet, Rajshahi, Khulna, Barisal, Rangpur, and Mymensingh. Yet thousands fail at the very first hurdle: the Teletalk online application portal rejects their photo or signature files due to dimension or file size violations, costing them their BCS opportunity before the exam even begins.
  </p>

  <p>
    This comprehensive guide covers every stage of BCS — from online application and photo upload compliance to the Preliminary syllabus breakdown, Written exam strategy, Viva preparation, and admit card/result download — backed by the free <a href="/teletalk-photo-signature-resize/" class="text-primary font-semibold underline">SignResize Bangladesh BCS Photo &amp; Signature Resizer</a>.
  </p>
</section>

<!-- What is BCS -->
<section id="bcs-what" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📖 1.</span> What is BCS? Bangladesh Civil Service — Complete Explainer
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="p-4 rounded-2xl bg-card border border-border space-y-2 text-center">
      <div class="text-3xl">🏛️</div>
      <h3 class="font-bold text-foreground text-sm">Stage 1: Preliminary</h3>
      <p class="text-xs text-muted-foreground">200 Marks MCQ Screening Exam. 100 Questions × 2 Marks. Duration: 2.5 Hours. Negative marking: -0.50 per wrong answer.</p>
      <span class="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono text-[10px] font-bold">Qualifying Stage</span>
    </div>
    <div class="p-4 rounded-2xl bg-card border border-border space-y-2 text-center">
      <div class="text-3xl">✍️</div>
      <h3 class="font-bold text-foreground text-sm">Stage 2: Written</h3>
      <p class="text-xs text-muted-foreground">1,100 Marks across 6 compulsory + 1 optional subject. Descriptive answers. Tests depth, analytical skill, and language command.</p>
      <span class="inline-block px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-bold">Main Exam</span>
    </div>
    <div class="p-4 rounded-2xl bg-card border border-border space-y-2 text-center">
      <div class="text-3xl">🎙️</div>
      <h3 class="font-bold text-foreground text-sm">Stage 3: Viva Voce</h3>
      <p class="text-xs text-muted-foreground">100 Marks oral interview conducted by BPSC board. Assesses personality, knowledge, communication, and cadre suitability.</p>
      <span class="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold">Final Stage</span>
    </div>
  </div>
</section>

<!-- BCS Preliminary Syllabus -->
<section id="bcs-syllabus" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📝 2.</span> BCS Preliminary Syllabus — Subject-Wise 200 Marks Breakdown
  </h2>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Subject Area</th>
          <th class="px-4 py-3">Marks</th>
          <th class="px-4 py-3">Key Topics to Focus</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Bangla Language &amp; Literature</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">35 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Grammar, literature, poetry, prose, Bangladeshi authors, language history</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">English Language &amp; Literature</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">35 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Grammar, vocabulary, idioms, literature authors, comprehension, sentence correction</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Bangladesh Affairs</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">30 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Liberation War 1971, constitution, geography, history, economy, culture</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">International Affairs</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">20 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Geopolitics, international organizations (UN, WTO, IMF), current events</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">General Science &amp; Technology</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">15 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Physics, Chemistry, Biology basics, environmental science, everyday science</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Computer &amp; Information Technology</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">15 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Computer basics, internet, MS Office, digital Bangladesh, ICT policy</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Mathematical Reasoning &amp; Mental Ability</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">15 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Arithmetic, algebra, ratio, percentage, logical reasoning, analogy, series</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Geography, Environment &amp; Disaster</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">10 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Bangladesh geography, rivers, climate change, natural disasters, environment</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Everyday Science</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">5 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Day-to-day science applications, health, nutrition, domestic science</td>
        </tr>
        <tr class="bg-muted/40">
          <td class="px-4 py-3 font-extrabold text-foreground">TOTAL</td>
          <td class="px-4 py-3 font-extrabold text-primary">200 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Duration: 2 Hours 30 Minutes | Negative: −0.50 per wrong answer</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- BCS Written Exam -->
<section id="bcs-written" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>✍️ 3.</span> BCS Written Exam — 1,100 Marks Compulsory &amp; Optional Papers
  </h2>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Paper</th>
          <th class="px-4 py-3">Subject</th>
          <th class="px-4 py-3">Marks</th>
          <th class="px-4 py-3">Preparation Focus</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Compulsory 1</td>
          <td class="px-4 py-3">Bangla (1st &amp; 2nd Paper)</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">200 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Essay, summary, grammar, translation, letter/application writing</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Compulsory 2</td>
          <td class="px-4 py-3">English (1st &amp; 2nd Paper)</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">200 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Essay, comprehension, letter, precis writing, grammar, translation</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Compulsory 3</td>
          <td class="px-4 py-3">Bangladesh Affairs</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">200 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Liberation War, constitution, governance, economy, development</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Compulsory 4</td>
          <td class="px-4 py-3">International Affairs</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">100 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Current global events, foreign policy, international organizations</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Compulsory 5</td>
          <td class="px-4 py-3">Math, Reasoning &amp; Mental Ability</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">100 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Algebra, statistics, geometry, logical reasoning problems</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Compulsory 6</td>
          <td class="px-4 py-3">General Science &amp; Technology</td>
          <td class="px-4 py-3 font-mono font-bold text-foreground">100 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Physics, Chemistry, Biology, ICT, environment science</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Optional Paper</td>
          <td class="px-4 py-3">Cadre-Specific Subject (2 papers)</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">200 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Based on cadre preference — e.g. Economics, Law, Engineering, Medicine</td>
        </tr>
        <tr class="bg-muted/40">
          <td class="px-4 py-3 font-extrabold text-foreground" colspan="2">TOTAL</td>
          <td class="px-4 py-3 font-extrabold text-primary">1,100 Marks</td>
          <td class="px-4 py-3 text-muted-foreground">Viva Voce: 100 Marks | Grand Total: 1,200 Marks</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- BCS Photo Upload Guide -->
<section id="bcs-photo" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📸 4.</span> BCS Photo &amp; Signature Upload Guide — bpsc.teletalk.com.bd
  </h2>

  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
      <div class="p-4 rounded-2xl border-2 border-primary/30 bg-primary/5 space-y-2">
        <h3 class="font-bold text-foreground flex items-center gap-2"><span>📷</span> Photo Requirements</h3>
        <ul class="space-y-1 text-muted-foreground list-none">
          <li>✅ <strong>Dimensions:</strong> 300 × 300 pixels (exact)</li>
          <li>✅ <strong>Max File Size:</strong> 100 KB</li>
          <li>✅ <strong>Format:</strong> JPG / JPEG only</li>
          <li>✅ <strong>Type:</strong> Color photo (no B&amp;W)</li>
          <li>✅ <strong>Background:</strong> White or light solid color</li>
          <li>✅ <strong>Face:</strong> Full frontal, ears visible, no sunglasses</li>
          <li>❌ <strong>Rejected:</strong> PNG, HEIC, blurry, dark photos</li>
        </ul>
      </div>
      <div class="p-4 rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 space-y-2">
        <h3 class="font-bold text-foreground flex items-center gap-2"><span>✍️</span> Signature Requirements</h3>
        <ul class="space-y-1 text-muted-foreground list-none">
          <li>✅ <strong>Dimensions:</strong> 300 × 80 pixels (exact)</li>
          <li>✅ <strong>Max File Size:</strong> 60 KB</li>
          <li>✅ <strong>Format:</strong> JPG / JPEG only</li>
          <li>✅ <strong>Ink:</strong> Black or Blue ballpoint pen</li>
          <li>✅ <strong>Paper:</strong> White unruled blank paper</li>
          <li>✅ <strong>Style:</strong> Handwritten cursive signature</li>
          <li>❌ <strong>Rejected:</strong> Typed, block letters, colored BG</li>
        </ul>
      </div>
    </div>

    <!-- Step-by-step upload guide -->
    <div class="space-y-3">
      <h3 class="font-bold text-foreground text-base">Step-by-Step BCS Online Application &amp; Upload Workflow:</h3>
      <div class="relative border-l-2 border-primary/30 ml-4 pl-6 space-y-5 text-xs sm:text-sm">
        <div class="relative">
          <div class="absolute -left-8 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-[10px]">1</div>
          <strong class="text-foreground">Visit bpsc.teletalk.com.bd</strong>
          <p class="text-muted-foreground">Go to the official BPSC Teletalk portal during the open application window for the BCS cycle you are applying for.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-8 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-[10px]">2</div>
          <strong class="text-foreground">Register or Login</strong>
          <p class="text-muted-foreground">Create a new account with your NID number, date of birth, and mobile number. Note your User ID and Password carefully.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-8 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-[10px]">3</div>
          <strong class="text-foreground">Fill Application Form</strong>
          <p class="text-muted-foreground">Enter personal details, educational qualifications, cadre preferences (up to 14 cadres in order of preference), and district/division information accurately.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-8 w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-[10px]">4</div>
          <strong class="text-foreground">Resize &amp; Upload Photo and Signature</strong>
          <p class="text-muted-foreground">Resize photo to 300×300 px (max 100 KB) and signature to 300×80 px (max 60 KB) using our <a href="/teletalk-photo-signature-resize/" class="text-primary underline">SignResize Bangladesh Tool</a>. Verify using the official Photo/Sign Validator at bpsc.teletalk.com.bd/ncad/imsize.php before uploading.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-8 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-[10px]">5</div>
          <strong class="text-foreground">Pay Fee via Teletalk SMS</strong>
          <p class="text-muted-foreground">After form submission, send the SMS command (provided in the circular) from your Teletalk prepaid number to complete the application fee payment. Confirm with the PIN return SMS.</p>
        </div>
        <div class="relative">
          <div class="absolute -left-8 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">6</div>
          <strong class="text-foreground">Download Admit Card</strong>
          <p class="text-muted-foreground">7–14 days before exam, log in to bpsc.teletalk.com.bd to download your PDF admit card. Print and carry it to the exam center along with original NID.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- BCS Timeline -->
<section id="bcs-timeline" class="space-y-4 pt-6 border-t border-border">
  <h2 class="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight flex items-center gap-2">
    <span>📅 5.</span> BCS Full Timeline — From Circular to Final Posting
  </h2>

  <div class="overflow-x-auto rounded-2xl border border-border bg-card shadow-xs">
    <table class="w-full text-xs sm:text-sm text-left border-collapse">
      <thead class="bg-muted/70 text-muted-foreground uppercase text-[10px] sm:text-xs tracking-wider border-b border-border">
        <tr>
          <th class="px-4 py-3">Stage</th>
          <th class="px-4 py-3">Timeline</th>
          <th class="px-4 py-3">Portal / Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border/60">
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Circular Released</td>
          <td class="px-4 py-3 text-muted-foreground">Month 0</td>
          <td class="px-4 py-3 text-muted-foreground">Apply online on bpsc.teletalk.com.bd within deadline</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Application Processing</td>
          <td class="px-4 py-3 text-muted-foreground">Month 1–2</td>
          <td class="px-4 py-3 text-muted-foreground">BPSC scrutinizes applications and verifies eligibility</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-primary">Preliminary Exam</td>
          <td class="px-4 py-3 font-mono font-bold text-primary">Month 3–4</td>
          <td class="px-4 py-3 text-muted-foreground">200 Marks MCQ — Download Admit Card 7–14 days prior</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Preliminary Result</td>
          <td class="px-4 py-3 text-muted-foreground">Month 5–6</td>
          <td class="px-4 py-3 text-muted-foreground">Qualified Roll Numbers published on bpsc.gov.bd</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-indigo-600 dark:text-indigo-400">Written Examination</td>
          <td class="px-4 py-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">Month 8–12</td>
          <td class="px-4 py-3 text-muted-foreground">Multiple papers over 8–12 days, 1,100 marks total</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Written Result</td>
          <td class="px-4 py-3 text-muted-foreground">Month 14–16</td>
          <td class="px-4 py-3 text-muted-foreground">Written qualified list published on bpsc.gov.bd</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-emerald-600 dark:text-emerald-400">Viva Voce</td>
          <td class="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Month 17–20</td>
          <td class="px-4 py-3 text-muted-foreground">100 Marks oral interview — BPSC headquarters, Dhaka</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Final Merit List &amp; Gazette</td>
          <td class="px-4 py-3 text-muted-foreground">Month 22–24</td>
          <td class="px-4 py-3 text-muted-foreground">Cadre allocation and Bangladesh Gazette notification</td>
        </tr>
        <tr class="hover:bg-muted/20">
          <td class="px-4 py-3 font-bold text-foreground">Posting to Department</td>
          <td class="px-4 py-3 text-muted-foreground">Month 24+</td>
          <td class="px-4 py-3 text-muted-foreground">Ministry/Department issues appointment letters to successful candidates</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Preparation Tips -->
  <div class="p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-xs space-y-3 text-xs sm:text-sm">
    <h3 class="font-bold text-foreground text-base">🎯 Top BCS Preliminary Preparation Strategies:</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div class="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <span class="text-emerald-500 font-bold shrink-0">✔</span>
        <div><strong class="text-foreground">Solve 10+ Years Past Papers:</strong> <span class="text-muted-foreground">BCS past questions (available from BPSC website and solution books) reveal recurring patterns and question styles.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <span class="text-emerald-500 font-bold shrink-0">✔</span>
        <div><strong class="text-foreground">Focus on Bangla &amp; English:</strong> <span class="text-muted-foreground">Combined 70 marks — high-scoring opportunity with targeted grammar and literature revision.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <span class="text-emerald-500 font-bold shrink-0">✔</span>
        <div><strong class="text-foreground">Master Bangladesh Affairs (30 marks):</strong> <span class="text-muted-foreground">Liberation War 1971, constitution articles, district geography, and history are highest-scoring focus areas.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <span class="text-emerald-500 font-bold shrink-0">✔</span>
        <div><strong class="text-foreground">Daily Current Affairs Reading:</strong> <span class="text-muted-foreground">Read one national newspaper daily. International Affairs (20 marks) heavily features recent global events.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <span class="text-emerald-500 font-bold shrink-0">✔</span>
        <div><strong class="text-foreground">Beware Negative Marking:</strong> <span class="text-muted-foreground">Each wrong answer costs −0.50 marks. Attempt only questions you are confident about — guessing randomly reduces scores.</span></div>
      </div>
      <div class="flex items-start gap-2 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
        <span class="text-emerald-500 font-bold shrink-0">✔</span>
        <div><strong class="text-foreground">ICT &amp; Computer (15 marks):</strong> <span class="text-muted-foreground">Relatively easy scoring — cover MS Office basics, internet concepts, Digital Bangladesh initiatives, and e-governance.</span></div>
      </div>
    </div>
  </div>
</section>

<!-- Tool CTA -->
<div class="my-8 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30 space-y-3">
  <h4 class="text-base sm:text-lg font-extrabold text-foreground">Prepare Your BCS Application Documents Instantly</h4>
  <p class="text-xs sm:text-sm text-muted-foreground">Resize and compress your BCS photo to exactly 300×300 px (under 100 KB) and signature to 300×80 px (under 60 KB) — in seconds, 100% free, no account needed.</p>
  <div class="flex flex-wrap gap-3 pt-1">
    <a href="/teletalk-photo-signature-resize/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open BCS Bangladesh Photo Resizer &rarr;
    </a>
    <a href="/compress-image-to-kb/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      Compress to KB Tool
    </a>
  </div>
</div>
`
  }
];

