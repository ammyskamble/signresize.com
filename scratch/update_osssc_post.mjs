import fs from 'fs';
import path from 'path';

const ossscPost = {
  slug: "osssc-cre-2026-master-guide-ri-ari-amin-peo-photo-signature-rules",
  title: "OSSSC Combined Recruitment (CRE) 2026 Guide: RI, ARI, Amin & PEO Syllabus, Salary & Photo-Signature Guidelines",
  metaTitle: "OSSSC CRE 2026 Guide: RI, ARI, Amin, PEO Syllabus & Photo Resizer",
  metaDescription: "Exhaustive OSSSC Combined Recruitment Exam (CRE) 2026 master guide: RI, ARI, Amin & PEO syllabus, ORSP Pay Level 4 to 9 salary matrix, Odia language eligibility, 40% CPT cutoff, and 20–100 KB document resizer.",
  excerpt: "Master candidate guide for OSSSC CRE 2026 (RI, ARI, Amin, PEO, ICDS Supervisor): OTR profile creation, 1/3rd negative marking rule, Odia language eligibility, Pay Level 4 to 9 matrix, and 20–100 KB photo/signature upload resizer.",
  category: "Career Opportunity",
  country: "IN",
  publishDate: "Oct 09, 2026",
  publishTime: "08:15 PM IST",
  lastUpdated: "Oct 09, 2026",
  author: "SignResize Odisha Civil Service Research Desk",
  authorRole: "Senior State Subordinate Selection Specialist",
  readTime: "9 min read",
  featured: true,
  relatedExamPreset: "osssc-signature-resize",
  tags: [
    "OSSSC CRE",
    "OSSSC RI ARI Amin Syllabus",
    "OSSSC PEO Recruitment 2026",
    "OSSSC OTR Registration",
    "OSSSC Photo Resizer 100KB",
    "OSSSC Signature Resizer 50KB",
    "Odisha Govt Jobs Salary",
    "Odia Language Eligibility"
  ],
  quickFacts: [
    {
      label: "Conducting Body",
      value: "Odisha Sub-Ordinate Staff Selection Commission (OSSSC)"
    },
    {
      label: "Official Portal",
      value: "osssc.gov.in"
    },
    {
      label: "Recruitment Cycle",
      value: "2026 Combined Recruitment Examination (CRE)"
    },
    {
      label: "Registration System",
      value: "OSSSC One Time Registration (OTR)"
    },
    {
      label: "Photo Specification",
      value: "JPG/JPEG, 3.5×4.5 cm (200×230 px), 20 KB – 100 KB"
    },
    {
      label: "Signature Specification",
      value: "Black Ballpoint Pen, 3.5×1.5 cm (140×60 px), 20 KB – 50 KB"
    }
  ],
  faqs: [
    {
      question: "Q1: What is OSSSC OTR and how do I register on osssc.gov.in?",
      answer: "OSSSC OTR (One Time Registration) is the mandatory candidate portal on osssc.gov.in. Applicants create a centralized candidate profile using their Mobile Number, Email ID, Aadhaar Card / Identity Proof, and 10th Matriculation Memo. Once submitted, candidates receive a permanent User ID / Registration Number used to apply for all OSSSC recruitment cycles."
    },
    {
      question: "Q2: What is the age limit and relaxation criteria for OSSSC CRE 2026 (RI, ARI, Amin, PEO)?",
      answer: "The cutoff reference date for age calculation is January 1 of the recruitment year. For Revenue Inspector (RI), the age bracket is 21 to 38 years. For ARI, Amin, PEO, and ICDS Supervisor, the age bracket is 18 to 38 years. SC, ST, SEBC, and Female candidates receive a +5-year age relaxation (up to 43 years maximum), while PwD candidates receive a +10-year extension."
    },
    {
      question: "Q3: What is the mandatory Odia Language Eligibility criterion for OSSSC recruitment?",
      answer: "Candidates must be able to read, write, and speak Odia fluently. Additionally, candidates must have passed a language test in Odia of at least Middle School standard, or passed the Matriculation / 10th exam with Odia as a medium of examination or a subject."
    },
    {
      question: "Q4: Is there negative marking in OSSSC CRE Prelims and Mains examinations?",
      answer: "Yes. Both the OSSSC CRE Preliminary Examination (100 MCQs) and Main Examination (180 MCQs) enforce negative marking at a rate of 1/3rd mark deduction (0.33 penalty per wrong response) for every incorrect answer."
    },
    {
      question: "Q5: What is the Practical Computer Skill Test pattern and qualifying cutoff score?",
      answer: "The Practical Computer Skill Test is a mandatory 50-mark qualifying exam with a 45-minute duration. It assesses hands-on proficiency in MS Word, MS Excel, MS PowerPoint, and basic file management. The minimum qualifying score across all categories is 40% (20 Marks out of 50)."
    },
    {
      question: "Q6: What are the exact photo and signature upload size limits for OSSSC Online?",
      answer: "OSSSC mandates: Passport photograph must be 3.5 cm × 4.5 cm (200 × 230 pixels), JPG/JPEG format, sized strictly between 20 KB and 100 KB on a light/white background. Signature must be 3.5 cm × 1.5 cm (140 × 60 pixels), JPG/JPEG format, sized strictly between 20 KB and 50 KB, signed strictly using a BLACK BALLPOINT PEN on plain white paper."
    },
    {
      question: "Q7: Which profile fields can be edited online vs fields requiring OSSSC Helpdesk intervention?",
      answer: "Educational qualifications, correspondence address, mobile number, email ID, and updated photo/signature files can be edited online under 'Re-registration / Profile Edit'. However, primary core fields—including Candidate Name (as per 10th memo), Father's Name, Date of Birth, and Category—cannot be altered without submitting an official grievance to the OSSSC Desk in Bhubaneswar."
    },
    {
      question: "Q8: What are the pay scales for RI, ARI, Amin, and PEO under ORSP Rules 2017?",
      answer: "Under Odisha Revised Scales of Pay (ORSP Rules 2017): Revenue Inspector (RI) and ICDS Supervisor are placed in Pay Matrix Level 9 (Scale: ₹35,400 – ₹1,12,400); Assistant Revenue Inspector (ARI), Amin, and Panchayat Executive Officer (PEO) are placed in Pay Matrix Level 4 (Scale: ₹19,900 – ₹63,200) plus state DA and HRA."
    },
    {
      question: "Q9: What is the Mains shortlisting ratio from OSSSC CRE Prelims?",
      answer: "Candidates are shortlisted from the Preliminary Examination to the Main Written Examination in a 1:5 to 1:6 ratio (5 to 6 times the total advertised vacancies per post/category) based on Prelims merit."
    },
    {
      question: "Q10: What original documents are required during OSSSC Certificate Verification (DV)?",
      answer: "Candidates called for Document Verification must produce: 1. HSC / 10th Class Board Certificate & Marksheet (DOB proof), 2. 12th / +2 & Graduation Certificates, 3. School / Board Certificate proving Odia Language proficiency, 4. Resident / Domicile Certificate issued by Revenue Authority, 5. SC / ST / SEBC Caste Certificate (if applicable), 6. Identity Proof (Aadhaar Card/Voter ID), 7. OSSSC Registration Slip & Admit Card."
    }
  ],
  contentHtml: `
    <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
      The <strong>Odisha Sub-Ordinate Staff Selection Commission (OSSSC)</strong> is the supreme state recruitment authority responsible for selecting non-gazetted executive subordinate officers across Odisha. Conducting the flagship <strong>Combined Recruitment Examination (CRE)</strong> for cadres such as Revenue Inspector (RI), Assistant Revenue Inspector (ARI), Amin, Panchayat Executive Officer (PEO), and ICDS Supervisor, OSSSC requires strict compliance with registration procedures, Odia language proficiency rules, and technical image upload limits.
    </p>

    <!-- Key Callout Tool Card with Visual Bounding Box Diagram -->
    <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm space-y-6">
      <!-- Visual Bounding Box Diagram -->
      <div class="p-4 rounded-xl bg-background border border-border flex flex-col md:flex-row items-center gap-6 justify-around">
        <div class="w-44 shrink-0 bg-card border-2 border-dashed border-primary/60 rounded-xl p-3 shadow-sm flex flex-col items-center justify-between gap-2 text-center h-[210px]">
          <div class="w-full h-[135px] bg-muted/50 rounded-lg flex flex-col items-center justify-center border border-border">
            <span class="text-xl">👤</span>
            <span class="text-[11px] font-bold text-foreground mt-0.5">Passport Photo</span>
            <span class="text-[10px] text-muted-foreground">3.5 × 4.5 cm (200×230 px)</span>
            <span class="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">20 KB – 100 KB</span>
          </div>
          <div class="w-full h-[45px] bg-primary/10 rounded-lg flex flex-col items-center justify-center border border-primary/30">
            <span class="text-[10px] font-bold text-primary font-serif italic">Candidate Signature</span>
            <span class="text-[8px] text-muted-foreground">3.5 × 1.5 cm (140×60 px) | 20–50 KB</span>
          </div>
        </div>
        <div class="space-y-2 text-xs sm:text-sm text-muted-foreground max-w-md">
          <strong class="text-foreground font-bold text-sm block flex items-center gap-2">
            <span>📌</span> Official Bounding Box Proportions & Technical Guidelines
          </strong>
          <p class="leading-relaxed">
            Ensure your photograph occupies the upper 3.5×4.5 cm segment on a plain light/white background, and your signature is signed in <strong>BLACK BALLPOINT INK</strong> inside the lower 3.5×1.5 cm frame. OSSSC portal validation automatically rejects blurry scans, low DPI images, or signatures written in blue ink.
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
            <span>⚡</span> OSSSC Official Photo & Signature Resizer Tool
          </h4>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Format your passport photo (20–100 KB) and signature (20–50 KB) instantly with pre-configured OSSSC canvas dimensions and pixel ratios.
          </p>
        </div>
        <a href="/osssc-signature-resize/?preset=osssc&photoMax=100&signMax=50" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
          Resize for OSSSC Online &rarr;
        </a>
      </div>
    </div>

    <!-- 1. Executive Quick Facts & Portal Metadata -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. OSSSC Executive Quick Facts & Portal Metadata</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      All state recruitment operations, syllabus releases, hall ticket downloads, and One Time Registrations (OTR) are executed through the official Odisha state portal:
    </p>
    <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-3">
      <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
        <li><strong class="text-foreground">Official Conducting Body:</strong> Odisha Sub-Ordinate Staff Selection Commission (OSSSC), Bhubaneswar.</li>
        <li><strong class="text-foreground">Official State Portal:</strong> <code class="text-primary font-mono">osssc.gov.in</code>.</li>
        <li><strong class="text-foreground">Primary Profile ID System:</strong> One Time Registration (OTR) generating a permanent User ID / Registration Number.</li>
        <li><strong class="text-foreground">Photo Technical Upload Limits:</strong> 3.5 cm × 4.5 cm (200 × 230 px), 20 KB to 100 KB, Light/White background, JPG/JPEG format.</li>
        <li><strong class="text-foreground">Signature Technical Upload Limits:</strong> 3.5 cm × 1.5 cm (140 × 60 px), 20 KB to 50 KB, BLACK BALLPOINT PEN strictly on plain white paper.</li>
        <li><strong class="text-foreground">Key Recruitment Cadres:</strong> Revenue Inspector (RI), Assistant Revenue Inspector (ARI), Amin, Panchayat Executive Officer (PEO), and ICDS Supervisor (Female).</li>
      </ul>
    </div>

    <!-- 2. One-Time Registration (OTR) Walkthrough -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">2. OSSSC One Time Registration (OTR) Master Walkthrough</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Creating a validated <strong>OSSSC OTR Profile</strong> is mandatory before submitting online applications for any Combined Recruitment Examination (CRE) notification.
    </p>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Chronological 3-Step Profile Creation Procedure</h3>
    <div class="my-6 space-y-4">
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">1</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 1: Mobile OTP Authentication & Identity Verification</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Visit <code>osssc.gov.in</code> &rarr; Click 'Register' / 'New User'. Enter your active Mobile Number, Email ID, Aadhaar Number, and Candidate Name exactly as printed on HSC 10th Marks Memo.</p>
        </div>
      </div>
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">2</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 2: Educational Trajectory & Odia Language Proof</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Input 10th Class, +2 / 12th Class, and Graduation details. Provide proof of Odia language proficiency (passed Middle School or 10th with Odia medium/subject) to establish eligibility for Odisha district cadres.</p>
        </div>
      </div>
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">3</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 3: Document Upload & Permanent User ID Generation</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Upload photograph (3.5×4.5 cm, 20–100 KB) and black ink signature (3.5×1.5 cm, 20–50 KB). Click 'Preview', verify all entries, and submit to generate your permanent <strong>OSSSC User ID / Registration Number</strong>.</p>
        </div>
      </div>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. Profile Editability Matrix</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="p-4 rounded-xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <span>✅</span> Self-Editable Online Fields (via Mobile OTP)
        </h4>
        <ul class="list-disc list-inside space-y-1 text-xs text-muted-foreground">
          <li>Newly acquired Higher Secondary or Degree qualifications.</li>
          <li>Current mailing address and permanent residential details.</li>
          <li>Registered Mobile Number and Email Address.</li>
          <li>Updated passport photo or black ink signature files.</li>
        </ul>
      </div>

      <div class="p-4 rounded-xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
          <span>⚠️</span> Locked Primary Fields (Require OSSSC Ticket)
        </h4>
        <ul class="list-disc list-inside space-y-1 text-xs text-muted-foreground">
          <li>Candidate Primary Name (must match 10th HSC Memo).</li>
          <li>Father's Name, Primary Date of Birth, and Gender.</li>
          <li>Aadhaar Card Linkage number & District Cadre allocation.</li>
          <li><em>Resolution:</em> Submit an online grievance ticket on <code>osssc.gov.in</code> or present original 10th Memo & Aadhaar at the OSSSC Desk in Bhubaneswar.</li>
        </ul>
      </div>
    </div>

    <!-- 3. Eligibility, Age Benchmarks & Reservation Framework -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">3. Eligibility, Age Benchmarks & Odia Language Framework</h2>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Age Limit Benchmarks & Category Relaxations</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      The standard age reference date for OSSSC recruitments is <strong>January 1</strong> of the recruitment year:
    </p>

    <div class="my-6 overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
        <thead class="bg-muted text-foreground font-bold">
          <tr>
            <th class="p-3 text-left border-b border-border">Recruitment Cadre</th>
            <th class="p-3 text-left border-b border-border">General Age Bracket (Unreserved)</th>
            <th class="p-3 text-left border-b border-border">SC / ST / SEBC / Women Relaxation</th>
            <th class="p-3 text-left border-b border-border">Maximum Permissible Age</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border text-muted-foreground">
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Revenue Inspector (RI)</td>
            <td class="p-3">21 to 38 Years</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">+5 Years Extension</td>
            <td class="p-3 font-mono font-bold text-foreground">43 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Assistant Revenue Inspector (ARI)</td>
            <td class="p-3">18 to 38 Years</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">+5 Years Extension</td>
            <td class="p-3 font-mono font-bold text-foreground">43 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Amin</td>
            <td class="p-3">18 to 38 Years</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">+5 Years Extension</td>
            <td class="p-3 font-mono font-bold text-foreground">43 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Panchayat Executive Officer (PEO)</td>
            <td class="p-3">18 to 38 Years</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">+5 Years Extension</td>
            <td class="p-3 font-mono font-bold text-foreground">43 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">ICDS Supervisor (Female)</td>
            <td class="p-3">21 to 38 Years</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">+5 Years Extension</td>
            <td class="p-3 font-mono font-bold text-foreground">43 Years</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. Mandatory Odia Language & Domicile Eligibility</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Candidates must meet the statutory Odia language proficiency rules under the Odisha Civil Services Rules:
    </p>
    <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-4">
      <h4 class="font-bold text-sm text-foreground">Odia Language Requirements:</h4>
      <ul class="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5">
        <li>Ability to read, write, and speak Odia fluently.</li>
        <li>Passed Middle School Examination with Odia as a language subject, OR passed HSC / 10th with Odia as medium of examination or a first/second/third language subject.</li>
      </ul>
    </div>

    <!-- 4. Multi-Tier Selection Architecture & Scoring Scheme -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">4. Multi-Tier Selection Architecture & Scoring Scheme</h2>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Stage 1: Preliminary Examination (100 MCQs, 100 Marks, 1.5 Hours)</h3>
    <div class="my-4 p-5 rounded-2xl bg-card border border-border space-y-4">
      <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
        <li><strong>Subjects Breakdown (100 MCQs, 100 Marks):</strong> Mathematics (20 M), General Studies (20 M), English (20 M), Odia (20 M), Logical Reasoning (20 M).</li>
        <li><strong class="text-destructive">Negative Marking Penalty:</strong> <strong>1/3rd mark deduction (0.33 penalty)</strong> per wrong answer.</li>
        <li><strong>Mains Shortlisting Ratio:</strong> Candidates advance to the Main Written Exam in a <strong>1:5 to 1:6 ratio</strong> based on Prelims merit.</li>
      </ul>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. Stage 2: Main Written Examination (180 MCQs, 180 Marks, 3 Hours)</h3>
    <div class="my-4 p-5 rounded-2xl bg-card border border-border space-y-3">
      <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
        <li><strong>Paper Breakdown (180 MCQs, 180 Marks):</strong> Mathematics (40 M), General Studies (40 M), English (40 M), Odia (40 M), Computer Knowledge (20 M).</li>
        <li><strong class="text-destructive">Negative Marking Penalty:</strong> <strong>1/3rd mark deduction (0.33 penalty)</strong> per wrong answer.</li>
      </ul>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">C. Stage 3: Practical Computer Skill Test (50 Marks, 45 Mins)</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      A mandatory practical qualifying exam assessing MS Office (Word, Excel, PowerPoint) and basic computer operations. Minimum qualifying cutoff score is <strong>40% (20 Marks out of 50)</strong>.
    </p>

    <!-- 5. Granular Syllabus Breakdown -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">5. Granular Syllabus Breakdown: Odisha History, Odia & Computer</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
        <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
          <span>🏛️</span> Odisha History, Culture & Odia Vyakaran
        </h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1.5">
          <li><strong>Odisha History & Culture:</strong> Kalinga War, Somavamshi & Ganga Dynasties, Konark & Puri Temple Architecture, Paika Rebellion, 1936 Odisha Formation, Freedom Fighters (Utkalmani Gopabandhu Das, Veer Surendra Sai, Baji Rout).</li>
          <li><strong>Odia Vyakaran (Grammar):</strong> Sandhi, Samasa, Kradanta, Taddhita, Synonyms/Antonyms, Spelling correction, Punctuation, Composition & Essay translation.</li>
        </ul>
      </div>

      <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
        <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
          <span>🌿</span> Odisha Geography & Computer Awareness
        </h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1.5">
          <li><strong>Odisha Geography:</strong> Rivers (Mahanadi, Brahmani, Baitarani), Chilika Lake, Similipal & Bhitarkanika National Parks, mineral deposits (Iron Ore, Bauxite, Chromite).</li>
          <li><strong>Computer Awareness:</strong> MS Windows operating system, MS Word formatting, MS Excel formulas, MS PowerPoint slide creation, Internet & Email operations.</li>
        </ul>
      </div>
    </div>

    <!-- 6. Official Pay Scale Matrix & Cadre Hierarchy -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">6. OSSSC Pay Scale Matrix & Cadre Hierarchy (ORSP Rules 2017)</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Below is the official Pay Scale Matrix under the <strong>Odisha Revised Scales of Pay (ORSP Rules 2017)</strong> across major OSSSC cadres:
    </p>

    <div class="my-6 overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
        <thead class="bg-muted text-foreground font-bold">
          <tr>
            <th class="p-3 text-left border-b border-border">Designation</th>
            <th class="p-3 text-left border-b border-border">Cadre Classification</th>
            <th class="p-3 text-left border-b border-border">ORSP 2017 Pay Level</th>
            <th class="p-3 text-left border-b border-border">Pay Scale Range</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border text-muted-foreground">
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Revenue Inspector (RI)</td>
            <td class="p-3">Group B Non-Gazetted Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 9</td>
            <td class="p-3 font-mono">₹35,400 – ₹1,12,400</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">ICDS Supervisor (Female)</td>
            <td class="p-3">Group B Non-Gazetted Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 9</td>
            <td class="p-3 font-mono">₹35,400 – ₹1,12,400</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Assistant Revenue Inspector (ARI)</td>
            <td class="p-3">Group C Executive Subordinate</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 4</td>
            <td class="p-3 font-mono">₹19,900 – ₹63,200</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Amin</td>
            <td class="p-3">Group C Executive Subordinate</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 4</td>
            <td class="p-3 font-mono">₹19,900 – ₹63,200</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Panchayat Executive Officer (PEO)</td>
            <td class="p-3">Group C Rural Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 4</td>
            <td class="p-3 font-mono">₹19,900 – ₹63,200</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 7. Technical Upload Standards & Tool Deep-Linking -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">7. OSSSC Technical Upload Standards & Photo/Signature Specs</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      The OSSSC portal automatically validates digital image boundaries during profile upload. Deviations cause upload failures or admit card print errors:
    </p>

    <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-4">
      <h3 class="text-base font-bold text-foreground">Official Image Upload Specification Matrix</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground">
        <div class="p-4 rounded-xl bg-muted/30 border border-border space-y-2">
          <strong class="text-foreground text-sm block">1. Passport Photo Technical Spec</strong>
          <ul class="space-y-1">
            <li><strong>Width × Height:</strong> 3.5 cm × 4.5 cm (200 × 230 pixels)</li>
            <li><strong>File Size Range:</strong> <strong>20 KB to 100 KB strictly</strong></li>
            <li><strong>Format:</strong> JPG / JPEG format only</li>
            <li><strong>Background:</strong> Light / White background</li>
            <li><strong>Pose:</strong> Frontal face, clear ears visible, neutral expression</li>
          </ul>
        </div>
        <div class="p-4 rounded-xl bg-muted/30 border border-border space-y-2">
          <strong class="text-foreground text-sm block">2. Signature Upload Technical Spec</strong>
          <ul class="space-y-1">
            <li><strong>Width × Height:</strong> 3.5 cm × 1.5 cm (140 × 60 pixels)</li>
            <li><strong>File Size Range:</strong> <strong>20 KB to 50 KB strictly</strong></li>
            <li><strong>Format:</strong> JPG / JPEG format only</li>
            <li><strong>Ink Mandate:</strong> <strong>BLACK BALLPOINT PEN ONLY</strong></li>
            <li><strong>Style Rule:</strong> Natural running handwriting (CAPITAL/BLOCK letters disqualified)</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 8. Authoritative Booklist & Strategy Blueprint -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">8. Authoritative Booklist & High-Yield Preparation Strategy</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div class="p-5 rounded-2xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-foreground">Authoritative Standard Booklist</h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1">
          <li><strong>Odisha General Knowledge:</strong> Tarun Goyal / Arihant Know Your State Odisha.</li>
          <li><strong>Odia Vyakaran:</strong> Saraswata Odia Vyakaran.</li>
          <li><strong>Mathematics:</strong> R.S. Aggarwal Quantitative Aptitude.</li>
          <li><strong>General English:</strong> S.P. Bakshi Objective General English.</li>
          <li><strong>Computer Awareness:</strong> Arihant Computer Awareness.</li>
        </ul>
      </div>

      <div class="p-5 rounded-2xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-foreground">Negative Marking & Execution Strategy</h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1">
          <li><strong>1/3rd Negative Marking Discipline:</strong> Attempt only high-confidence questions; avoid wild guessing since 3 wrong answers eliminate 1 correct mark.</li>
          <li><strong>Computer Skill Test Practice:</strong> Practice MS Excel formulas and Word formatting hands-on to easily clear the 40% (20 M) cutoff.</li>
          <li><strong>Odia Vyakaran Weightage:</strong> Focus on Sandhi, Samasa, and translation to score maximum marks in Paper I & II.</li>
        </ul>
      </div>
    </div>

    <!-- Direct Deep-Linked CTA Button -->
    <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="space-y-1">
        <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
          <span>⚙️</span> Preset OSSSC Photo (20–100 KB) & Signature (20–50 KB) Resizer
        </h4>
        <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Open the resizer canvas pre-configured with exact 200×230 px photo and 140×60 px black ink signature boundaries for OSSSC OTR.
        </p>
      </div>
      <a href="/osssc-signature-resize/?preset=osssc&photoMax=100&signMax=50" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
        Resize for OSSSC Online &rarr;
      </a>
    </div>
  `
};

const filePath = path.resolve('./src/data/blogPostsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const slugToFind = "osssc-cre-2026-master-guide-ri-ari-amin-peo-photo-signature-rules";

const startIndex = content.indexOf(`"slug": "${slugToFind}"`);
if (startIndex === -1) {
  console.error("Could not find OSSSC post in blogPostsData.ts");
  process.exit(1);
}

const objectStart = content.lastIndexOf('{', startIndex);

let braceDepth = 0;
let objectEnd = -1;
for (let i = objectStart; i < content.length; i++) {
  if (content[i] === '{') braceDepth++;
  else if (content[i] === '}') {
    braceDepth--;
    if (braceDepth === 0) {
      objectEnd = i + 1;
      break;
    }
  }
}

if (objectEnd === -1) {
  console.error("Could not find closing brace for OSSSC post object");
  process.exit(1);
}

const updatedObjectJson = JSON.stringify(ossscPost, null, 2);
const updatedContent = content.slice(0, objectStart) + updatedObjectJson + content.slice(objectEnd);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully updated OSSSC CRE 2026 master guide post in blogPostsData.ts!");
