// scratch/update_ph_blog_post.mjs
import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const phBlogPost = {
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
  featured: true,
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
      label: "Conducting Authority",
      value: "Civil Service Commission (CSC Central & Regional Offices)"
    },
    {
      label: "Official Portals",
      value: "csc.gov.ph | jobs.csc.gov.ph | ocsers.csc.gov.ph"
    },
    {
      label: "Exam Levels",
      value: "Professional & Subprofessional (Pen-and-Paper PPT / COMEX)"
    },
    {
      label: "CSE Passing Benchmark",
      value: "80.00% rating across Verbal, Analytical, Numerical & General Info"
    },
    {
      label: "Passport Photo Limit",
      value: "1.5 × 2.0 inches (450 × 600 px at 300 DPI), 10 KB to 100 KB, white BG"
    },
    {
      label: "Signature Limit",
      value: "Scanned black ink signature on white paper, 5 KB to 50 KB, clean JPG"
    },
    {
      label: "PDS CS Form 212",
      value: "Revised 2017 Personal Data Sheet with passport photo & name tag"
    },
    {
      label: "Eligibility Validity",
      value: "Lifetime validity under RA 1080 and CSC Resolution mandates"
    }
  ],
  faqs: [
    {
      question: "What is the Civil Service Commission (CSC) in the Philippines?",
      answer: "The ==Civil Service Commission (CSC)== is the central personnel agency of the Philippine government mandated by the 1987 Constitution to establish a career service, promote morale, efficiency, integrity, responsiveness, progressiveness, and courtesy in the civil service."
    },
    {
      question: "What is the Civil Service Examination (CSE)?",
      answer: "The ==Civil Service Examination (CSE)== is a competitive qualifying examination administered by the CSC in Pen-and-Paper Test (PPT) and Computerized Examination (COMEX) formats to confer Professional and Subprofessional civil service eligibilities required for permanent government appointments."
    },
    {
      question: "Ano ang Civil Service Commission (CSC Exam Tagalog Guide)?",
      answer: "Ang ==Civil Service Commission (CSC)== ang pangunahing ahensya ng pamahalaan sa Pilipinas na nagpapatupad ng Civil Service Exam (CSE). Ang pagpasa sa CSE (Professional o Subprofessional) ay nagbibigay ng ==eligibility para sa permanenteng trabaho sa mga ahensya ng gobyerno==."
    },
    {
      question: "How to check Civil Service Commission job opportunities and hiring?",
      answer: "Job seekers can explore official vacancy listings across Philippine national government agencies, local government units (LGUs), and government-owned corporations on the ==official CSC Job Opportunities Portal (jobs.csc.gov.ph)== or regional portals like CSC NCR."
    },
    {
      question: "What are the photo requirements for the Civil Service Exam?",
      answer: "The CSC requires a recent ==1.5 × 2.0 inch (450 × 600 pixels) passport-size photograph== taken within the last 3 months, printed or scanned on a plain white background, strictly between ==10 KB and 100 KB in JPG format==, showing a full-face view with ears visible and neutral expression."
    },
    {
      question: "What is the signature requirement for CSC OCSERS portal?",
      answer: "The signature file must be a clean, scanned image of your ==signature penned in black ink on white unruled paper==. The digital file size must be between ==5 KB and 50 KB in JPG format==."
    },
    {
      question: "What is Civil Service Commission NCR (National Capital Region)?",
      answer: "The ==CSC National Capital Region (CSC NCR)== office handles examination processing, eligibility verification, and job placement services for Metro Manila and adjacent government agency headquarters."
    },
    {
      question: "What is the difference between Professional and Subprofessional CSE?",
      answer: "The ==Professional Level (Second Level eligibility)== qualifies passing candidates for technical, executive, and administrative officer positions (Salary Grade 11 and above). The ==Subprofessional Level (First Level eligibility)== qualifies candidates for clerical, secretarial, trade, and custodial positions (Salary Grade 1 to 10)."
    },
    {
      question: "What is the passing mark for the Civil Service Exam?",
      answer: "Candidates must achieve an overall rating of at least ==80.00%== to pass either the Professional or Subprofessional Civil Service Examination."
    },
    {
      question: "What are the photo guidelines for PDS CS Form 212 (Revised 2017)?",
      answer: "The Personal Data Sheet (PDS CS Form 212 Revised 2017) requires an attached ==1.5 × 2.0 inch passport-style photo with a printed name tag at the bottom (First Name, Middle Initial, Last Name, Extension Name)== and signature over printed name."
    },
    {
      question: "Why is photo or signature rejected on the CSC portal?",
      answer: "CSC portal rejection stems from four primary errors: uploading photos larger than 100 KB, using non-white or shadowy backgrounds, wearing eyeglasses or face masks, or uploading faint blue ink or block letter signatures."
    },
    {
      question: "How to resize photo and signature for CSC exam online?",
      answer: "Use our free client-side tool: drop your image into the ==SignResize Philippines 1.5x2 Photo Resizer (10 to 100 KB)== and ==Signature Resizer (5 to 50 KB)== to automatically crop, fix DPI, and clamp byte sizes in seconds."
    },
    {
      question: "How long is Civil Service Eligibility valid in the Philippines?",
      answer: "Civil Service Eligibility granted upon passing the CSE possesses ==lifetime validity== and does not expire."
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
    This diagnostic master guide provides an <strong>actionable troubleshooting framework</strong> covering exam eligibility, career recruitment paths, regional office contacts, and instant image formatting using our free client-side utility: the <a href="/ph/" class="text-primary font-semibold underline">SignResize Philippines CSC &amp; PRC Photo Resizer</a>.
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
          1. Upload your original photo to <a href="/ph/" class="text-primary underline">SignResize Philippines Resizer</a>.<br/>
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
    <a href="/ph/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition">
      Open Philippines Resizer Tool &rarr;
    </a>
    <a href="/photo-resizer/" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-foreground font-bold text-xs sm:text-sm hover:bg-muted transition">
      General Photo Resizer
    </a>
  </div>
</div>
`
};

// Replace item at index 1 (slug: prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026)
const postsMatch = content.match(/export const BLOG_POSTS: BlogPost\[\] = \[([\s\S]*?)\n\];/);
if (!postsMatch) {
  console.error("Could not find BLOG_POSTS array");
  process.exit(1);
}

// Parse or replace the second element in array
// Let's locate the object with slug "prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026"
const oldSlug = "prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026";
const startIndex = content.indexOf(`slug: "${oldSlug}"`);
if (startIndex === -1) {
  console.error("Could not find old slug index");
  process.exit(1);
}

// Find the opening brace '{' before startIndex
const objStart = content.lastIndexOf('{', startIndex);
// Find the matching closing brace '}' for this object
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
  console.error("Could not find closing brace for object");
  process.exit(1);
}

const newObjString = JSON.stringify(phBlogPost, null, 2);
// Formatted TypeScript object representation
const tsObject = `{\n` +
`    slug: ${JSON.stringify(phBlogPost.slug)},\n` +
`    title: ${JSON.stringify(phBlogPost.title)},\n` +
`    metaTitle: ${JSON.stringify(phBlogPost.metaTitle)},\n` +
`    metaDescription: ${JSON.stringify(phBlogPost.metaDescription)},\n` +
`    excerpt: ${JSON.stringify(phBlogPost.excerpt)},\n` +
`    category: ${JSON.stringify(phBlogPost.category)},\n` +
`    country: ${JSON.stringify(phBlogPost.country)},\n` +
`    publishDate: ${JSON.stringify(phBlogPost.publishDate)},\n` +
`    lastUpdated: ${JSON.stringify(phBlogPost.lastUpdated)},\n` +
`    author: ${JSON.stringify(phBlogPost.author)},\n` +
`    authorRole: ${JSON.stringify(phBlogPost.authorRole)},\n` +
`    readTime: ${JSON.stringify(phBlogPost.readTime)},\n` +
`    featured: ${phBlogPost.featured},\n` +
`    tags: ${JSON.stringify(phBlogPost.tags, null, 6)},\n` +
`    relatedExamPreset: ${JSON.stringify(phBlogPost.relatedExamPreset)},\n` +
`    quickFacts: ${JSON.stringify(phBlogPost.quickFacts, null, 6)},\n` +
`    faqs: ${JSON.stringify(phBlogPost.faqs, null, 6)},\n` +
`    contentHtml: \`${phBlogPost.contentHtml.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`\n  }`;

content = content.slice(0, objStart) + tsObject + content.slice(objEnd + 1);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated Philippines CSC & PRC blog post!');
