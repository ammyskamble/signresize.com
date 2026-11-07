import fs from 'fs';
import path from 'path';

// Let's define the 8 articles
const articles = [
  // 1. TSPSC / TGPSC
  {
    slug: "tspsc-tgpsc-2026-master-guide-group-1-2-4-photo-signature-rules",
    title: "TSPSC (TGPSC) 2026 Master Guide: Group 1, 2 & 4 Syllabus, OTR Registration, Pay Scale & Photo-Signature Upload Rules",
    metaTitle: "TSPSC 2026 Master Guide: Group 1, 2, 4 Syllabus, OTR & Photo Signature Resizer",
    metaDescription: "Exhaustive TSPSC (TGPSC) 2026 blueprint: Group 1, 2, and 4 exam patterns, Telangana movement syllabus, Level 4 to 12 pay scales, OTR edit procedure, and 10-50 KB photo signature resizer.",
    excerpt: "Complete guide for TSPSC (TGPSC) Group 1, Group 2, and Group 4 exams in 2026: OTR update steps, Prelims & Mains paper syllabus, Pay Level 4 to 12 scales, black ink signature rules, and 10–50 KB image resizer.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:00 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize Telangana Public Service Compliance Desk",
    authorRole: "Senior State PSC Examination & OTR Specialist",
    readTime: "18 min read",
    featured: false,
    relatedExamPreset: "tspsc-signature-resize",
    tags: [
      "TSPSC",
      "TGPSC Group 1",
      "TSPSC Group 2 Syllabus",
      "TSPSC Group 4 Exam Pattern",
      "TSPSC OTR One Time Registration",
      "TSPSC Photo Resizer 50KB",
      "TSPSC Signature Resizer 10 to 50 KB"
    ],
    quickFacts: [
      { label: "Exam Commission", value: "Telangana Public Service Commission (TGPSC)" },
      { label: "Official Portal", value: "tspsc.gov.in" },
      { label: "Mandatory Registration", value: "TGPSC One Time Registration (OTR)" },
      { label: "Photo Format & Size", value: "JPG/JPEG, 3.5×4.5 cm, 20 KB – 50 KB" },
      { label: "Signature Specification", value: "Black Ink, 3.5×1.5 cm, 10 KB – 50 KB" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        The Telangana Public Service Commission (TGPSC, formerly TSPSC) conducts state-level civil service examinations for administrative, executive, and non-executive posts. Securing a government career through TSPSC Group 1, Group 2, or Group 4 requires a complete understanding of the One-Time Registration (OTR) system, exam paper blueprints, Telangana movement history syllabus, and strict document upload specifications.
      </p>

      <!-- Key Callout Tool Card -->
      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> TSPSC Official Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Instantly crop, resize, and compress your photograph (3.5×4.5 cm, 20–50 KB) and black ink signature (3.5×1.5 cm, 10–50 KB) for TGPSC OTR without rejection.
            </p>
          </div>
          <a href="/tspsc-signature-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for TSPSC OTR &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. TSPSC (TGPSC) Selection Stages & Exam Blueprints</h2>
      <p class="text-sm leading-relaxed text-muted-foreground mb-4">
        TGPSC recruitments are grouped into three primary cadres, each structured with distinct evaluation stages:
      </p>

      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
          <thead class="bg-muted text-foreground font-bold">
            <tr>
              <th class="p-3 text-left border-b border-border">Recruitment Cadre</th>
              <th class="p-3 text-left border-b border-border">Exam Stages</th>
              <th class="p-3 text-left border-b border-border">Number of Papers</th>
              <th class="p-3 text-left border-b border-border">Total Marks</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-muted-foreground">
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">Group 1 Services</td>
              <td class="p-3">Prelims (CBT/OMR) + Mains (Descriptive)</td>
              <td class="p-3">Prelims (1 Paper) + Mains (6 Papers)</td>
              <td class="p-3 font-mono">150 (Prelims) + 900 (Mains)</td>
            </tr>
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">Group 2 Services</td>
              <td class="p-3">Objective Written Test</td>
              <td class="p-3">4 Objective Papers (150 Marks each)</td>
              <td class="p-3 font-mono">600 Marks</td>
            </tr>
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">Group 4 Services</td>
              <td class="p-3">Objective Written Test</td>
              <td class="p-3">2 Objective Papers (Paper I GK + Paper II Secretarial)</td>
              <td class="p-3 font-mono">300 Marks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">2. TSPSC Pay Scales & Career Progression</h2>
      <p class="text-sm leading-relaxed text-muted-foreground mb-4">
        State civil servants in Telangana receive Pay Revision Commission (PRC) scales along with DA, HRA, and medical allowances:
      </p>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong class="text-foreground">Group 1 (Deputy Collector, DSP, Commercial Tax Officer):</strong> Pay Scale ₹54,220 – ₹1,33,630 (Level 12).</li>
        <li><strong class="text-foreground">Group 2 (Municipal Commissioner Gr-III, Naib Tehsildar, Sub-Registrar):</strong> Pay Scale ₹38,890 – ₹1,12,510 (Level 9).</li>
        <li><strong class="text-foreground">Group 4 (Junior Assistant, Typist, Junior Steno):</strong> Pay Scale ₹24,280 – ₹72,850 (Level 4).</li>
      </ul>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">3. TSPSC OTR Photo & Signature Upload Rules</h2>
      <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-3">
        <h3 class="text-base font-bold text-foreground">Official TGPSC Upload Matrix</h3>
        <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
          <li><strong>Photograph Dimensions:</strong> 3.5 cm width × 4.5 cm height (Recent passport size, plain light background).</li>
          <li><strong>Photo File Size:</strong> 20 KB to 50 KB (JPEG/JPG format).</li>
          <li><strong>Signature Dimensions:</strong> 3.5 cm width × 1.5 cm height on white paper with <strong>Black Ink Pen</strong>.</li>
          <li><strong>Signature File Size:</strong> 10 KB to 50 KB (JPEG/JPG format).</li>
        </ul>
      </div>

      <div class="my-6 p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs border border-slate-800">
        <p class="text-emerald-400 font-bold mb-1">// TSPSC OTR Error Prevention Code</p>
        <p>Allowed Extensions: .jpg, .jpeg</p>
        <p>Max Resolution: 300 DPI</p>
        <p>Signature Pen Rule: Black Gel/Ballpoint Pen ONLY. Blue ink or pencil will trigger auto-rejection.</p>
      </div>

      <!-- FAQ Section -->
      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">4. Frequently Asked Questions (TSPSC / TGPSC)</h2>
      <div class="space-y-4 my-6">
        <div class="p-4 rounded-xl bg-card border border-border">
          <h4 class="font-bold text-sm text-foreground">Q1: How do I update my mobile number or photograph in TSPSC OTR?</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Log in to tspsc.gov.in using your TSPSC ID and DOB, click 'Edit OTR', upload the corrected photo/signature, and verify via OTP.</p>
        </div>
        <div class="p-4 rounded-xl bg-card border border-border">
          <h4 class="font-bold text-sm text-foreground">Q2: Is negative marking applicable in TSPSC Group 1 Prelims?</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Yes, negative marking of 1/3rd mark per wrong response applies to objective papers as per recent TGPSC guidelines.</p>
        </div>
      </div>
    `
  },

  // 2. APPSC
  {
    slug: "appsc-group-1-2-2026-master-guide-otpr-photo-signature-rules",
    title: "APPSC 2026 Master Blueprint: Group 1, 2 & Executive Posts Syllabus, OTPR Profile, Pay Scales & Photo-Signature Rules",
    metaTitle: "APPSC 2026 Master Guide: Group 1 & 2 Syllabus, OTPR & Photo Signature Resizer",
    metaDescription: "Comprehensive APPSC 2026 candidate guide: Group 1 & Group 2 Mains exam pattern, AP Economy syllabus, Pay Level 4 to 13, OTPR update steps, and 20-50 KB signature resizer.",
    excerpt: "Complete guide for APPSC Group 1, Group 2, and Executive Officer recruitment in 2026: OTPR creation, AP History & Economy syllabus, Pay Level 4 to 13 scales, and 50-100 KB photo / 20-50 KB signature resizer.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:05 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize Andhra Pradesh PSC Compliance Board",
    authorRole: "Senior State Civil Services Specialist",
    readTime: "17 min read",
    featured: false,
    relatedExamPreset: "appsc-signature-resize",
    tags: [
      "APPSC",
      "APPSC Group 1",
      "APPSC Group 2 Syllabus",
      "APPSC OTPR Registration",
      "APPSC Photo Resizer 100KB",
      "APPSC Signature Resizer 50KB"
    ],
    quickFacts: [
      { label: "Recruitment Board", value: "Andhra Pradesh Public Service Commission (APPSC)" },
      { label: "Official Portal", value: "psc.ap.gov.in" },
      { label: "Profile Registration", value: "One Time Profile Registration (OTPR)" },
      { label: "Photo Specification", value: "JPG/JPEG, 3.5×4.5 cm, 50 KB – 100 KB" },
      { label: "Signature Specification", value: "Black Ink, 3.5×1.5 cm, 20 KB – 50 KB" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        The Andhra Pradesh Public Service Commission (APPSC) conducts competitive examinations for Group 1 Administrative Officers, Group 2 Executive & Non-Executive Cadres, and Revenue Officers. Successful application submission on psc.ap.gov.in requires a valid One Time Profile Registration (OTPR) and strict compliance with image dimensions and file sizes.
      </p>

      <!-- CTA Card -->
      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> APPSC Official Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Format your APPSC passport photo (50–100 KB) and black ink signature (20–50 KB) instantly to pass psc.ap.gov.in OTPR validation.
            </p>
          </div>
          <a href="/appsc-signature-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for APPSC OTPR &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. APPSC Exam Structure & Syllabus Overview</h2>
      <p class="text-sm leading-relaxed text-muted-foreground mb-4">
        APPSC examinations place heavy emphasis on General Studies, Andhra Pradesh History & Bifurcation Act, and AP Economy:
      </p>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong class="text-foreground">Group 1 Services:</strong> Screening Test (2 Papers, 240 Marks) + Main Written Exam (5 Descriptive Papers, 750 Marks) + Oral Interview (75 Marks).</li>
        <li><strong class="text-foreground">Group 2 Services:</strong> Prelims Screening Test (150 Marks) + Mains Examination (Paper I AP History & Constitution + Paper II AP Economy & Science/Tech, 300 Marks).</li>
      </ul>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">2. APPSC Pay Scales & Salary Structure</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
          <thead class="bg-muted text-foreground font-bold">
            <tr>
              <th class="p-3 text-left border-b border-border">Designation</th>
              <th class="p-3 text-left border-b border-border">Cadre Group</th>
              <th class="p-3 text-left border-b border-border">Pay Scale (AP RPS 2022)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-muted-foreground">
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">Deputy Collector / RDO</td>
              <td class="p-3">Group 1 Executive</td>
              <td class="p-3 font-mono">₹61,960 – ₹1,51,370</td>
            </tr>
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">Assistant Section Officer (ASO)</td>
              <td class="p-3">Group 2 Non-Executive</td>
              <td class="p-3 font-mono">₹35,750 – ₹1,01,630</td>
            </tr>
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">Senior Auditor / Assistant Commercial Tax Officer</td>
              <td class="p-3">Group 2 Executive</td>
              <td class="p-3 font-mono">₹44,570 – ₹1,27,480</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">3. APPSC Photo & Signature Technical Guidelines</h2>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong>Photo Format:</strong> JPEG/JPG, 50 KB to 100 KB, clear white background without spectacles or shadows.</li>
        <li><strong>Signature Format:</strong> JPEG/JPG, 20 KB to 50 KB, signed with <strong>Black Fountain/Ballpoint Pen</strong> on plain white paper.</li>
      </ul>
    `
  },

  // 3. MPPSC
  {
    slug: "mppsc-state-service-2026-master-guide-prelims-mains-photo-rules",
    title: "MPPSC State Service 2026 Master Guide: Prelims & Mains Syllabus, Pay Levels & MP Online Photo-Signature Rules",
    metaTitle: "MPPSC 2026 Master Guide: Prelims, Mains Syllabus & Photo Signature Resizer",
    metaDescription: "Exhaustive MPPSC 2026 candidate handbook: State Service & Forest Service Prelims GS + CSAT pattern, MP History syllabus, Pay Level 6 to 12, and 20-100 KB document resizer.",
    excerpt: "Complete master guide for MPPSC State Service Exam (SSE) 2026: Prelims GS/CSAT blueprints, Mains GS Paper I-IV syllabus, Pay Level 6 to 12 scales, and MP Online 20–100 KB photo/signature resizer.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:10 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize MP State Service Research Desk",
    authorRole: "Senior MP PSC Examination Strategist",
    readTime: "16 min read",
    featured: false,
    relatedExamPreset: "mppsc-signature-resize",
    tags: [
      "MPPSC",
      "MPPSC Prelims Syllabus",
      "MPPSC Mains Pattern",
      "MPPSC State Service Exam 2026",
      "MPPSC Photo Resizer 100KB",
      "MPPSC Signature Resizer 100KB"
    ],
    quickFacts: [
      { label: "Exam Body", value: "Madhya Pradesh Public Service Commission (MPPSC)" },
      { label: "Official Portal", value: "mppsc.mp.gov.in / mponline.gov.in" },
      { label: "Exam Type", value: "State Service Exam (SSE) & Forest Service" },
      { label: "Photo Upload Range", value: "20 KB – 100 KB (JPG/JPEG)" },
      { label: "Signature Upload Range", value: "10 KB – 100 KB (JPG/JPEG)" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        The Madhya Pradesh Public Service Commission (MPPSC) recruits Administrative Officers, State Police Officers (DSP), and Block Development Officers through the State Service Examination (SSE). Submitting applications on mppsc.mp.gov.in or MP Online requires strict compliance with image boundaries to prevent rejection.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> MPPSC Official Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Resize your photograph (20–100 KB) and signature (10–100 KB) for MPPSC SSE & MP Online forms with 100% boundary accuracy.
            </p>
          </div>
          <a href="/mppsc-signature-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for MPPSC Online &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. MPPSC Exam Blueprint (Prelims & Mains)</h2>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong class="text-foreground">Prelims Examination:</strong> Paper I General Studies (200 Marks) + Paper II General Aptitude / CSAT (200 Marks). OMR-based with no negative marking.</li>
        <li><strong class="text-foreground">Mains Examination:</strong> 6 Papers (GS I to GS IV, General Hindi & Essay) totaling 1400 Marks + Interview (175 Marks).</li>
      </ul>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">2. MPPSC Pay Scales & Designations</h2>
      <p class="text-sm leading-relaxed text-muted-foreground mb-4">
        MPPSC posts offer 7th Pay Commission State Pay Levels:
      </p>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong class="text-foreground">Deputy Collector / DSP:</strong> Pay Level 12 (₹56,100 – ₹1,77,500).</li>
        <li><strong class="text-foreground">Naib Tehsildar / Commercial Tax Officer:</strong> Pay Level 10 (₹36,200 – ₹1,14,800).</li>
        <li><strong class="text-foreground">Cooperative Inspector:</strong> Pay Level 8 (₹28,700 – ₹91,300).</li>
      </ul>
    `
  },

  // 4. OSSSC
  {
    slug: "osssc-cre-2026-master-guide-ri-ari-amin-peo-photo-signature-rules",
    title: "OSSSC Combined Recruitment (CRE) 2026 Guide: RI, ARI, Amin & PEO Syllabus, Salary & Photo-Signature Guidelines",
    metaTitle: "OSSSC CRE 2026 Guide: RI, ARI, Amin, PEO Syllabus & Photo Resizer",
    metaDescription: "Master guide for OSSSC CRE 2026: Revenue Inspector (RI), ARI, Amin, & PEO syllabus, Odisha 7th Pay Level 4 to 9 scales, and 20-100 KB photo signature upload resizer.",
    excerpt: "Complete blueprint for OSSSC CRE (Combined Recruitment Exam) 2026: RI, ARI, Amin, and Panchayat Executive Officer (PEO) syllabus, Level 4 to 9 pay scales, and 20-100 KB image upload tools.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:15 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize Odisha Sub-ordinate Selection Desk",
    authorRole: "Senior Odisha Staff Recruitment Specialist",
    readTime: "15 min read",
    featured: false,
    relatedExamPreset: "osssc-signature-resize",
    tags: [
      "OSSSC",
      "OSSSC CRE 2026",
      "OSSSC RI ARI Amin Syllabus",
      "OSSSC PEO Recruitment",
      "OSSSC Photo Resizer 100KB",
      "OSSSC Signature Resizer 50KB"
    ],
    quickFacts: [
      { label: "Selection Body", value: "Odisha Sub-ordinate Staff Selection Commission (OSSSC)" },
      { label: "Official Portal", value: "osssc.gov.in" },
      { label: "Major Recruitment", value: "CRE (RI, ARI, Amin, ICDS, PEO)" },
      { label: "Photo Requirement", value: "20 KB – 100 KB (JPG/JPEG)" },
      { label: "Signature Requirement", value: "20 KB – 50 KB (JPG/JPEG)" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        The Odisha Sub-ordinate Staff Selection Commission (OSSSC) conducts the Combined Recruitment Examination (CRE) for Revenue Inspector (RI), Assistant Revenue Inspector (ARI), Amin, ICDS Supervisor, and Panchayat Executive Officer (PEO). Preparing your application on osssc.gov.in requires proper image formatting.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> OSSSC Official Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Format your OSSSC photo (20–100 KB) and signature (20–50 KB) to match osssc.gov.in portal specifications.
            </p>
          </div>
          <a href="/osssc-signature-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for OSSSC Portal &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. OSSSC CRE Exam Pattern & Marks Distribution</h2>
      <p class="text-sm leading-relaxed text-muted-foreground mb-4">
        OSSSC CRE consists of a Prelims CBT (100 Marks), Mains CBT (180 Marks), and a Skill Test in Computer Applications (50 Marks).
      </p>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong>Mathematics:</strong> 40 Marks (Arithmetic, Mensuration, Algebra).</li>
        <li><strong>General Studies:</strong> 40 Marks (Odisha History, Geography, Current Affairs).</li>
        <li><strong>English & Odia Language:</strong> 40 Marks each.</li>
        <li><strong>Computer Knowledge:</strong> 40 Marks.</li>
      </ul>
    `
  },

  // 5. DSSSB
  {
    slug: "dsssb-tgt-pgt-prt-2026-master-guide-postcard-photo-signature-rules",
    title: "DSSSB 2026 Master Guide: TGT, PGT, PRT & LDC Exam Pattern, Postcard Photo (480x672) & Signature Upload Rules",
    metaTitle: "DSSSB 2026 Master Guide: Postcard Photo 480x672 & Signature Resizer",
    metaDescription: "Exhaustive DSSSB 2026 recruitment blueprint: TGT, PGT, PRT, LDC exam pattern, 7th CPC Delhi pay scales, 480x672 px postcard photo rules, and thumb impression resizer.",
    excerpt: "Ultimate candidate guide for DSSSB TGT, PGT, PRT, and LDC recruitment in 2026: Tier-1 & Tier-2 exam blueprints, Delhi 7th CPC pay scales, 480×672 px postcard photo formatting, and dual thumb impression resizer.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:20 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize Delhi Service Examination Board",
    authorRole: "Senior DSSSB OARS Document Specialist",
    readTime: "19 min read",
    featured: false,
    relatedExamPreset: "dsssb-signature-resize",
    tags: [
      "DSSSB",
      "DSSSB TGT PGT PRT",
      "DSSSB Postcard Photo 480x672",
      "DSSSB Signature Resizer 140x110",
      "DSSSB OARS Portal Registration"
    ],
    quickFacts: [
      { label: "Board", value: "Delhi Subordinate Services Selection Board (DSSSB)" },
      { label: "Official Portal", value: "dsssbonline.nic.in (OARS)" },
      { label: "Postcard Photo Size", value: "480 × 672 pixels (50 KB – 300 KB)" },
      { label: "Signature Size", value: "140 × 110 pixels (10 KB – 40 KB)" },
      { label: "Thumb Impression Size", value: "140 × 110 pixels (10 KB – 40 KB)" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        The Delhi Subordinate Services Selection Board (DSSSB) conducts recruitment for Trained Graduate Teachers (TGT), Post Graduate Teachers (PGT), Primary Teachers (PRT), Stenographers, and Lower Division Clerks (LDC) under the Government of NCT of Delhi. Submitting your application on the DSSSB OARS portal (dsssbonline.nic.in) requires strict adherence to its unique 5×7 inch (480×672 px) postcard photo requirement.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> DSSSB Postcard Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Automatically convert photos to exact 480×672 px (50–300 KB) postcard size and signatures to 140×110 px (10–40 KB) for DSSSB OARS.
            </p>
          </div>
          <a href="/dsssb-signature-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for DSSSB OARS &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. DSSSB Unique Photo & Document Requirements</h2>
      <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-3">
        <h3 class="text-base font-bold text-foreground">DSSSB OARS Document Specifications</h3>
        <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
          <li><strong>Postcard Photo:</strong> 5×7 inches ratio, exactly <strong>480 × 672 pixels</strong>, 50 KB to 300 KB, white background with upper half of body visible.</li>
          <li><strong>Signature:</strong> Exactly <strong>140 × 110 pixels</strong>, 10 KB to 40 KB, dark ink on white paper.</li>
          <li><strong>Left & Right Thumb Impressions:</strong> Exactly <strong>140 × 110 pixels</strong>, 10 KB to 40 KB each.</li>
        </ul>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">2. DSSSB Pay Scales (Delhi 7th Pay Commission)</h2>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong class="text-foreground">PGT (Post Graduate Teacher):</strong> Pay Level 8 (Basic ₹47,600 + DA + 27% HRA Delhi).</li>
        <li><strong class="text-foreground">TGT (Trained Graduate Teacher):</strong> Pay Level 7 (Basic ₹44,900 + Allowances).</li>
        <li><strong class="text-foreground">PRT / Primary Teacher:</strong> Pay Level 6 (Basic ₹35,400 + Allowances).</li>
      </ul>
    `
  },

  // 6. India Post GDS
  {
    slug: "india-post-gds-2026-bpm-abpm-merit-salary-photo-signature-rules",
    title: "India Post GDS 2026 Master Guide: BPM & ABPM Merit System, TRCA Pay, Duty Hours & Photo-Signature Resizer",
    metaTitle: "India Post GDS 2026 Master Guide: BPM Salary, Merit Calculator & Photo Resizer",
    metaDescription: "Complete candidate guide for India Post GDS 2026 recruitment: BPM & ABPM 10th marks merit system, TRCA salary scales, circle preference, and 200x230 px photo resizer.",
    excerpt: "Exhaustive guide for India Post Gramin Dak Sevak (GDS) 2026 recruitment: BPM & ABPM selection cutoff, TRCA pay structure, circle preference allocation, and 200×230 px photo / 140×60 px signature resizer.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:25 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize Postal Recruitment Compliance Desk",
    authorRole: "Senior Postal Recruitment & Document Specialist",
    readTime: "16 min read",
    featured: false,
    relatedExamPreset: "india-post-gds-photo-resize",
    tags: [
      "India Post GDS",
      "GDS Merit List 2026",
      "Branch Postmaster BPM Salary",
      "GDS Photo Resizer 50KB",
      "GDS Signature Resizer 20KB"
    ],
    quickFacts: [
      { label: "Department", value: "Department of Posts, Ministry of Communications" },
      { label: "Official Portal", value: "indiapostgdsonline.gov.in" },
      { label: "Cadres", value: "Branch Postmaster (BPM) & Assistant BPM (ABPM / Dak Sevak)" },
      { label: "Photo Upload Dimension", value: "200 × 230 pixels (50 KB max)" },
      { label: "Signature Upload Dimension", value: "140 × 60 pixels (20 KB max)" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        India Post conducts national recruitment for Gramin Dak Sevaks (GDS) including Branch Postmasters (BPM) and Assistant Branch Postmasters (ABPM/Dak Sevak). Selection is purely merit-based on 10th standard board marks without any written examination. Submitting an error-free online application on indiapostgdsonline.gov.in requires exact photograph and signature dimensions.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> India Post GDS Official Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Resize your photograph (200×230 px, &lt;50 KB) and signature (140×60 px, &lt;20 KB) instantly for the GDS portal.
            </p>
          </div>
          <a href="/india-post-gds-photo-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for India Post GDS &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. India Post GDS TRCA Salary & Duty Hours</h2>
      <div class="my-6 overflow-x-auto">
        <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
          <thead class="bg-muted text-foreground font-bold">
            <tr>
              <th class="p-3 text-left border-b border-border">Cadre Role</th>
              <th class="p-3 text-left border-b border-border">TRCA Category (Duty Hours)</th>
              <th class="p-3 text-left border-b border-border">Basic TRCA Pay Scale</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-muted-foreground">
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">Branch Postmaster (BPM)</td>
              <td class="p-3">TRCA Level-1 (4 Hours / Level-2 5 Hours)</td>
              <td class="p-3 font-mono">₹12,000 – ₹29,380</td>
            </tr>
            <tr class="hover:bg-muted/30">
              <td class="p-3 font-semibold text-foreground">ABPM / Dak Sevak</td>
              <td class="p-3">TRCA Level-1 (4 Hours / Level-2 5 Hours)</td>
              <td class="p-3 font-mono">₹10,000 – ₹24,470</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  // 7. Kerala PSC Thulasi
  {
    slug: "kerala-psc-thulasi-2026-otr-registration-photo-name-date-signature-rules",
    title: "Kerala PSC Thulasi 2026 OTR Guide: One Time Registration Login, Profile Update & Photo (Name/DOB Printed) Rules",
    metaTitle: "Kerala PSC Thulasi 2026 OTR Guide: Photo with Name/DOB & Signature Resizer",
    metaDescription: "Comprehensive Kerala PSC Thulasi 2026 handbook: OTR profile creation, 150x200 px photo with Name & Date printed, 150x100 px signature rules, and 30 KB resizer.",
    excerpt: "Complete guide for Kerala PSC Thulasi One Time Registration (OTR) in 2026: Profile login, mandatory Name & Date printed on photo (150×200 px, 30 KB), signature formatting, and document verification.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:30 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize Kerala PSC Compliance Desk",
    authorRole: "Senior Thulasi OTR Technical Specialist",
    readTime: "17 min read",
    featured: false,
    relatedExamPreset: "kerala-psc-photo-resize",
    tags: [
      "Kerala PSC",
      "Kerala PSC Thulasi Login",
      "Kerala PSC OTR Profile Update",
      "Kerala PSC Photo Name and Date",
      "Kerala PSC Photo Resizer 30KB",
      "Kerala PSC Signature Resizer"
    ],
    quickFacts: [
      { label: "Commission", value: "Kerala Public Service Commission (KPSC)" },
      { label: "Official OTR Portal", value: "thulasi.keralapsc.gov.in" },
      { label: "Photo Requirement", value: "150 × 200 pixels, Max 30 KB, JPG format" },
      { label: "Mandatory Photo Text", value: "Candidate Name & Date of Photo Taken printed at bottom" },
      { label: "Signature Requirement", value: "150 × 100 pixels, Max 30 KB, JPG format" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        The Kerala Public Service Commission (KPSC) conducts recruitments via its central portal, Kerala PSC Thulasi (thulasi.keralapsc.gov.in). Candidates applying for KSEB, KSRTC, Secretariat Assistant, or LDC posts must maintain a valid One Time Registration (OTR) profile with strict photo specifications—including candidate name and date of photo printed clearly at the bottom.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> Kerala PSC Thulasi Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Resize your photo to 150×200 px (&lt;30 KB) with Name & Date printed and signature to 150×100 px for Thulasi OTR.
            </p>
          </div>
          <a href="/kerala-psc-photo-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for Kerala PSC Thulasi &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. Kerala PSC Mandatory Photo Rules</h2>
      <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-3">
        <h3 class="text-base font-bold text-foreground">Thulasi OTR Image Standards</h3>
        <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
          <li><strong>Dimensions:</strong> Exactly <strong>150 pixels width × 200 pixels height</strong>.</li>
          <li><strong>Bottom Text Stamp:</strong> The candidate's name (Line 1) and the date the photo was taken (Line 2) must be clearly printed in black text over a white rectangular strip at the bottom of the photo.</li>
          <li><strong>File Size Limit:</strong> Maximum <strong>30 KB</strong> (JPEG/JPG format). Photos over 30 KB or missing the date stamp will be rejected during profile verification.</li>
        </ul>
      </div>
    `
  },

  // 8. APSC
  {
    slug: "apsc-cce-2026-master-guide-prelims-mains-photo-signature-rules",
    title: "APSC CCE 2026 Master Guide: Prelims & Mains Syllabus, Assam Civil Service Pay & Photo-Signature Rules",
    metaTitle: "APSC CCE 2026 Master Guide: Prelims & Mains Syllabus & Photo Signature Resizer",
    metaDescription: "Exhaustive APSC Combined Competitive Exam (CCE) 2026 guide: Prelims GS I & II syllabus, Assam Pay Band 4 scales, and 20-50 KB photo signature resizer.",
    excerpt: "Complete candidate guide for Assam Public Service Commission (APSC) CCE 2026: Prelims GS & CSAT blueprints, Mains written paper pattern, Assam ACS/APS Pay Band 4 scales, and 20–50 KB document upload resizer.",
    category: "Career Opportunity",
    country: "IN",
    publishDate: "Oct 09, 2026",
    publishTime: "08:35 PM IST",
    lastUpdated: "Oct 09, 2026",
    author: "SignResize Assam PSC Compliance Board",
    authorRole: "Senior APSC CCE Examination Specialist",
    readTime: "16 min read",
    featured: false,
    relatedExamPreset: "apsc-signature-resize",
    tags: [
      "APSC CCE",
      "APSC CCE Prelims Syllabus",
      "Assam Civil Service ACS",
      "APSC Photo Resizer 50KB",
      "APSC Signature Resizer 20KB"
    ],
    quickFacts: [
      { label: "Commission", value: "Assam Public Service Commission (APSC)" },
      { label: "Official Portal", value: "apsc.nic.in" },
      { label: "Flagship Recruitment", value: "Combined Competitive Examination (CCE)" },
      { label: "Photo Format & Size", value: "20 KB – 50 KB (JPG/JPEG)" },
      { label: "Signature Format & Size", value: "5 KB – 20 KB (JPG/JPEG)" }
    ],
    contentHtml: `
      <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
        The Assam Public Service Commission (APPSC CCE) recruits candidates for the Assam Civil Service (ACS), Assam Police Service (APS), and Labour Inspector posts. Successful online application on apsc.nic.in requires strict adherence to Assam Civil Service exam patterns and document upload dimensions.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="space-y-1">
            <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
              <span>⚡</span> APSC Official Photo & Signature Resizer
            </h4>
            <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Format your APSC photo (20–50 KB) and signature (5–20 KB) instantly to meet apsc.nic.in portal upload criteria.
            </p>
          </div>
          <a href="/apsc-signature-resize/" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
            Resize for APSC Portal &rarr;
          </a>
        </div>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. APSC CCE Exam Stages & Syllabus Blueprint</h2>
      <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-muted-foreground mb-6">
        <li><strong class="text-foreground">Preliminary Examination:</strong> Paper I General Studies (200 Marks) + Paper II CSAT (200 Marks, qualifying at 33%). 1/4th negative marking.</li>
        <li><strong class="text-foreground">Main Written Examination:</strong> 6 Papers (Paper 1 Essay, Paper 2-5 GS I-IV, Paper 6 Assam Specific GS Paper) totaling 1500 Marks + Personality Test (275 Marks).</li>
      </ul>
    `
  }
];

const targetPath = path.resolve(process.cwd(), 'src/data/blogPostsData.ts');
let content = fs.readFileSync(targetPath, 'utf8');

// Insert position: right after `export const BLOG_POSTS: BlogPost[] = [`
const marker = 'export const BLOG_POSTS: BlogPost[] = [';
const insertIndex = content.indexOf(marker);

if (insertIndex === -1) {
  console.error('Could not find BLOG_POSTS array start in blogPostsData.ts');
  process.exit(1);
}

const formattedArticles = articles.map(art => JSON.stringify(art, null, 2)).join(',\n');
const newContent = content.slice(0, insertIndex + marker.length) + '\n' + formattedArticles + ',\n' + content.slice(insertIndex + marker.length);

fs.writeFileSync(targetPath, newContent, 'utf8');
console.log(`Successfully added ${articles.length} new articles to blogPostsData.ts!`);
