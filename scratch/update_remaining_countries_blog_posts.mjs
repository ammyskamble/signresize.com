// scratch/update_remaining_countries_blog_posts.mjs
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Bangladesh Teletalk Master Article
const bdBlogPost = {
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
  featured: true,
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
      label: "Photo Dimensions",
      value: "300 × 300 px (3.5 × 3.5 cm at 300 DPI), 10 KB to 100 KB, White BG"
    },
    {
      label: "Signature Dimensions",
      value: "300 × 80 px (3.5 × 1.0 cm at 300 DPI), 5 KB to 60 KB, Black Ink"
    },
    {
      label: "Primary Job Portal",
      value: "alljobs.teletalk.com.bd (Teletalk Bangladesh All Jobs)"
    },
    {
      label: "BPSC BCS Portal",
      value: "bpsc.teletalk.com.bd (Bangladesh Public Service Commission)"
    },
    {
      label: "Fee Payment Method",
      value: "Teletalk Prepaid SIM SMS Payment via User ID & PIN (16222)"
    },
    {
      label: "Color Depth & Format",
      value: "True Color (24-bit) baseline JPEG / JPG format"
    },
    {
      label: "Secondary Portals",
      value: "ntrca.teletalk.com.bd | dpe.teletalk.com.bd | railway.teletalk.com.bd"
    },
    {
      label: "Admit Card Portal",
      value: "Teletalk User ID & Password Login Download System"
    }
  ],
  faqs: [
    {
      question: "What are the exact photo dimensions for Teletalk online application?",
      answer: "Teletalk requires a recent passport photo measuring exactly ==300 × 300 pixels (3.5 × 3.5 cm)== with file size strictly ==between 10 KB and 100 KB in JPG format== on a plain white background."
    },
    {
      question: "What are the signature specifications for Teletalk All Jobs?",
      answer: "The signature scan must measure exactly ==300 × 80 pixels (3.5 × 1.0 cm)== with file size strictly ==between 5 KB and 60 KB in JPG format== penned in black ink on white unruled paper."
    },
    {
      question: "What is Teletalk All Jobs portal (alljobs.teletalk.com.bd)?",
      answer: "The ==Teletalk All Jobs portal (alljobs.teletalk.com.bd)== is the centralized online job application and recruitment portal operated by Teletalk Bangladesh Limited for all Bangladesh government ministries, directorates, and autonomous bodies."
    },
    {
      question: "How to pay application fee via Teletalk Prepaid Mobile SIM?",
      answer: "After submitting your online form, send two SMS from any Teletalk Prepaid SIM. ==SMS 1: [PORTAL CODE] [USER ID] to 16222== (e.g., BCS QJKHGF). You receive an 8-digit PIN. ==SMS 2: [PORTAL CODE] YES [PIN] to 16222==. The fee is deducted and an SMS confirmation with password is generated."
    },
    {
      question: "What is the photo size for BPSC BCS Exam application?",
      answer: "The Bangladesh Public Service Commission (BPSC) mandates the standard Teletalk format: ==300 × 300 pixels (100 KB max)== for candidate photograph and ==300 × 80 pixels (60 KB max)== for signature."
    },
    {
      question: "How to recover lost Teletalk User ID or Password?",
      answer: "Visit the respective Teletalk portal (e.g., alljobs.teletalk.com.bd), click on ==Recover User ID / Password==, enter your registered Mobile Number, Name, and Father's Name to receive your login credentials via instant SMS."
    },
    {
      question: "How to download Teletalk Admit Card PDF?",
      answer: "Visit the job portal URL, click on ==Admit Card==, log in using your User ID and Password, and download the color PDF admit card containing your exam roll number and center location."
    },
    {
      question: "Why is photo or signature rejected on Teletalk portal?",
      answer: "Teletalk server validator rejects uploads if dimensions deviate from ==exact 300x300 px or 300x80 px==, if file size exceeds 100 KB (photo) or 60 KB (signature), or if saved in WEBP/PNG format."
    },
    {
      question: "How to resize photo to 300x300 and signature to 300x80 online?",
      answer: "Use our free client-side tool: drop your image into the ==SignResize Bangladesh Teletalk Tool== to automatically crop to 300x300 px (≤100 KB) and 300x80 px (≤60 KB) in seconds."
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
};

// 2. Nepal Lok Sewa Master Article
const npBlogPost = {
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
  featured: true,
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
      label: "Conducting Authority",
      value: "Public Service Commission (Lok Sewa Aayog, Anamnagar Kathmandu)"
    },
    {
      label: "Official Portals",
      value: "psc.gov.np | psconline.psc.gov.np (Nepal Online Portal)"
    },
    {
      label: "Passport Photo Limit",
      value: "3.5 × 4.5 cm (350 × 450 px at 300 DPI), 5 KB to 50 KB, Light/White BG"
    },
    {
      label: "Signature Scan Limit",
      value: "350 × 150 px (5 KB to 50 KB, Black Ink on White Sheet, JPG)"
    },
    {
      label: "Nagarikta Scan Limit",
      value: "Scanned Citizenship certificate front/back copy strictly ≤ 50 KB"
    },
    {
      label: "Fee Payment Channels",
      value: "eSewa, Khalti, ConnectIPS & Bank Voucher (Rastriya Banijya / NBL)"
    },
    {
      label: "Core Exam Tiers",
      value: "Kharidar (Non-Gazetted 2nd), Nayab Subba (1st), Section Officer (Gazetted 3rd)"
    },
    {
      label: "TSC Teacher Exam",
      value: "tsc.gov.np (Teacher Service Commission 50 KB Photo Standard)"
    }
  ],
  faqs: [
    {
      question: "What is Lok Sewa Aayog in Nepal?",
      answer: "The ==Lok Sewa Aayog (Public Service Commission, Nepal)== is the constitutional body mandated under Article 242 of the Constitution of Nepal to conduct examinations for civil service positions, Nepal Police, Armed Police Force, and public enterprises."
    },
    {
      question: "What is the photo size requirement for Lok Sewa Aayog Nepal?",
      answer: "Lok Sewa Aayog requires a recent passport photo measuring ==3.5 × 4.5 cm (350 × 450 pixels)== with file size strictly ==under 50 KB (5 KB to 50 KB in JPG format)== on a plain light or white background."
    },
    {
      question: "What is the signature file limit for Lok Sewa online portal?",
      answer: "The signature scan must measure ==350 × 150 pixels== with file size strictly ==under 50 KB (5 KB to 50 KB in JPG format)== penned in black ink on white unruled paper."
    },
    {
      question: "How to apply online on Lok Sewa portal (psconline.psc.gov.np)?",
      answer: "Visit ==psconline.psc.gov.np==, register your Master Profile, fill personal & educational details, upload passport photo (≤50 KB), signature (≤50 KB), and Nagarikta copy (≤50 KB), select the advertised vacancy, and pay the fee online via eSewa, Khalti, or ConnectIPS."
    },
    {
      question: "How to pay Lok Sewa application fee via eSewa or Khalti?",
      answer: "During application submission on psconline.psc.gov.np, choose ==Online Payment -> eSewa / Khalti / ConnectIPS==, log in to your wallet app, approve the transaction voucher, and the portal status updates instantly to Paid."
    },
    {
      question: "What are the qualifications for Kharidar, Nayab Subba (NaSu), and Officer?",
      answer: "==Kharidar (Non-Gazetted 2nd Class)== requires SLC / SEE pass. ==Nayab Subba / NaSu (Non-Gazetted 1st Class)== requires 10+2 / Intermediate pass. ==Section Officer (Gazetted 3rd Class)== requires a Bachelor's Degree in any discipline."
    },
    {
      question: "How to download Lok Sewa Admit Card (Pravesh Patra)?",
      answer: "Log in to your dashboard at ==psconline.psc.gov.np==, navigate to ==My Applications -> Approved Applications==, click on ==Download Admit Card (Pravesh Patra)==, and print a physical color copy for the examination hall."
    },
    {
      question: "Why is photo or signature rejected on Lok Sewa portal?",
      answer: "Lok Sewa server validator rejects file uploads exceeding 50.0 KB, blurry mobile photos, shadowed backgrounds, or files saved in PDF or PNG formats instead of JPG."
    },
    {
      question: "How to resize photo and signature for Lok Sewa Aayog under 50 KB?",
      answer: "Use our dedicated client-side utility: upload your file to the ==SignResize Nepal Lok Sewa Tool (350x450 px, ≤50 KB)== and ==Signature Resizer (350x150 px, ≤50 KB)== to clamp byte sizes in seconds."
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
};

// Helper to replace blog post by slug
function replaceBlogPost(slug, newPost) {
  const startIndex = content.indexOf(`slug: "${slug}"`);
  if (startIndex === -1) {
    console.error(`Could not find slug: ${slug}`);
    process.exit(1);
  }

  const objStart = content.lastIndexOf('{', startIndex);
  let braceCount = 0;
  let objEnd = -1;
  for (let i = objStart; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        objEnd = i;
        break;
      }
    }
  }

  if (objEnd === -1) {
    console.error(`Could not find closing brace for ${slug}`);
    process.exit(1);
  }

  const tsObject = `{\n` +
  `    slug: ${JSON.stringify(newPost.slug)},\n` +
  `    title: ${JSON.stringify(newPost.title)},\n` +
  `    metaTitle: ${JSON.stringify(newPost.metaTitle)},\n` +
  `    metaDescription: ${JSON.stringify(newPost.metaDescription)},\n` +
  `    excerpt: ${JSON.stringify(newPost.excerpt)},\n` +
  `    category: ${JSON.stringify(newPost.category)},\n` +
  `    country: ${JSON.stringify(newPost.country)},\n` +
  `    publishDate: ${JSON.stringify(newPost.publishDate)},\n` +
  `    lastUpdated: ${JSON.stringify(newPost.lastUpdated)},\n` +
  `    author: ${JSON.stringify(newPost.author)},\n` +
  `    authorRole: ${JSON.stringify(newPost.authorRole)},\n` +
  `    readTime: ${JSON.stringify(newPost.readTime)},\n` +
  `    featured: ${newPost.featured},\n` +
  `    tags: ${JSON.stringify(newPost.tags, null, 6)},\n` +
  `    relatedExamPreset: ${JSON.stringify(newPost.relatedExamPreset)},\n` +
  `    quickFacts: ${JSON.stringify(newPost.quickFacts, null, 6)},\n` +
  `    faqs: ${JSON.stringify(newPost.faqs, null, 6)},\n` +
  `    contentHtml: \`${newPost.contentHtml.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`\n  }`;

  content = content.slice(0, objStart) + tsObject + content.slice(objEnd + 1);
}

replaceBlogPost("teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026", bdBlogPost);
replaceBlogPost("lok-sewa-aayog-nepal-photo-signature-resizer-guide-2026", npBlogPost);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Bangladesh & Nepal Master Blog Posts!');
