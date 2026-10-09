import fs from 'fs';
import path from 'path';

const appscPost = {
  slug: "appsc-group-1-2-2026-master-guide-otpr-photo-signature-rules",
  title: "APPSC 2026 Master Blueprint: Group 1, 2 & Executive Posts Exhaustive Syllabus, OTPR Profile, Pay Scales & Photo-Signature Rules",
  metaTitle: "APPSC 2026 Master Blueprint: Group 1, 2 & Executive Posts Syllabus, OTPR & Pay Scales",
  metaDescription: "Exhaustive APPSC 2026 candidate master guide: OTPR registration & edit steps, Group 1 & 2 Prelims/Mains syllabus, AP RPS 2022 pay scales matrix, 85% local reservation rules, 100-mark CPT pattern, and photo signature specs.",
  excerpt: "Comprehensive master blueprint for APPSC Group 1, Group 2, and Executive Officers in 2026: OTPR profile workflow, AP History & Economy syllabi, AP RPS 2022 pay scale matrix, local quota rules, and photo signature upload specs.",
  category: "Career Opportunity",
  country: "IN",
  publishDate: "Oct 09, 2026",
  publishTime: "08:05 PM IST",
  lastUpdated: "Oct 09, 2026",
  author: "SignResize Andhra Pradesh PSC Compliance Board",
  authorRole: "Senior State Civil Services Specialist",
  readTime: "9 min read",
  featured: true,
  relatedExamPreset: "appsc-signature-resize",
  tags: [
    "APPSC",
    "APPSC Group 1",
    "APPSC Group 2 Syllabus",
    "APPSC OTPR Registration",
    "APPSC Photo Resizer 100KB",
    "APPSC Signature Resizer 50KB",
    "AP RPS 2022 Pay Scales",
    "APPSC CPT Cutoff",
    "AP History Economy"
  ],
  quickFacts: [
    {
      label: "Conducting Body",
      value: "Andhra Pradesh Public Service Commission (APPSC)"
    },
    {
      label: "Official Portal",
      value: "psc.ap.gov.in"
    },
    {
      label: "Recruitment Cycle",
      value: "2026 Notifications & Recruitment Examinations"
    },
    {
      label: "Profile Registration",
      value: "One Time Profile Registration (OTPR)"
    },
    {
      label: "Photo Specification",
      value: "JPG/JPEG, 3.5×4.5 cm (200×230 px), 50 KB – 100 KB"
    },
    {
      label: "Signature Specification",
      value: "Black Ballpoint Pen, 3.5×1.5 cm (140×60 px), 20 KB – 50 KB"
    }
  ],
  faqs: [
    {
      question: "Q1: What is APPSC OTPR and how do I register or retrieve my OTPR Reference ID?",
      answer: "APPSC OTPR (One Time Profile Registration) is the mandatory centralized candidate profile created on psc.ap.gov.in storing personal, academic, and local candidate status details. Upon registration, candidates receive a unique OTPR ID (format: APXXXXXXXX). If forgotten, click 'Recover OTPR ID' on psc.ap.gov.in, enter your registered Mobile Number, Date of Birth, and Aadhaar Number to retrieve your ID via instant SMS."
    },
    {
      question: "Q2: What is the upper age limit and relaxation criteria for APPSC Group 1 and Group 2 in 2026?",
      answer: "The general upper age limit for APPSC Group 1 and Group 2 generalist posts is 18 to 42 years as on July 1 of the recruitment year. Age relaxations apply: +5 years for SC, ST, BC, and EWS candidates; +10 years for PwD candidates; and +3 years (plus service length) for Ex-Servicemen. Uniformed cadres like DSP (Max 30/34 yrs), Deputy Jailor, and Prohibition & Excise Sub-Inspector have specific lower upper age limits and mandatory physical measurement criteria."
    },
    {
      question: "Q3: Is there negative marking in APPSC Group 1 Prelims and Group 2 examinations?",
      answer: "Yes. In all APPSC objective screening tests and Mains examinations (Group 1 Prelims, Group 2 Prelims & Mains, AEE, and Executive Officer exams), negative marking is applicable at a rate of 1/3rd mark deduction (0.33 penalty per wrong response) for every incorrect answer."
    },
    {
      question: "Q4: How is AP Local Status calculated under the 85% local reservation framework?",
      answer: "Under the AP Public Employment (Organization of Local Cadres and Regulation of Direct Recruitment) Order (Presidential Order), 85% of direct recruitment vacancies are reserved for Andhra Pradesh Local Candidates. Local status is determined by continuous study from Classes 4 to 10 (minimum 4 consecutive academic years in a specific AP district). For private study candidates, local status is determined by minimum 4 years of continuous residence in that district prior to the 10th qualifying exam."
    },
    {
      question: "Q5: What is the APPSC Group 2 Mains Computer Proficiency Test (CPT) pattern and qualifying cutoff?",
      answer: "The Computer Proficiency Test (CPT) is an official 100-mark practical examination with a 60-minute duration. It assesses practical hands-on proficiency in MS Word, MS Excel, MS PowerPoint, Internet & Email navigation, and office automation tools. Standard qualifying cutoffs out of 100 Marks are: 40 Marks (40%) for OC and EWS candidates, 35 Marks (35%) for BC candidates, and 30 Marks (30%) for SC, ST, and PH candidates."
    },
    {
      question: "Q6: What are the exact photo and signature file size upload limits for APPSC OTPR?",
      answer: "APPSC mandates: Photograph must be 3.5 cm × 4.5 cm (200 × 230 pixels), JPG/JPEG format, sized between 50 KB and 100 KB on a light/white background. Signature must be 3.5 cm × 1.5 cm (140 × 60 pixels), JPG/JPEG format, sized between 20 KB and 50 KB, signed strictly using a BLACK BALLPOINT PEN on plain white paper. Signatures in capital/block letters are disqualified."
    },
    {
      question: "Q7: Which profile fields can be edited online vs fields requiring APPSC Helpdesk intervention?",
      answer: "Candidates can update educational qualifications, address, phone number, email ID, and fresh photo/signature uploads online via OTP authentication under 'Modify OTPR'. However, core primary fields—including Candidate Primary Name (as per 10th SSC Memo), Father's Name, Date of Birth, Gender, and Aadhaar Number—cannot be modified online and require submitting an online grievance ticket or visiting the APPSC Office in Vijayawada with original documents."
    },
    {
      question: "Q8: What are the official pay scales under AP RPS 2022 for Group 1, Group 2, and AEE posts?",
      answer: "Under Revised Pay Scales (AP RPS 2022): Group 1 Executive Posts (Deputy Collector, RDO, CTO, DSP) are in Pay Level 13 (₹61,960 – ₹1,51,370); Group 2 Executive Posts (Deputy Tahsildar, Sub-Registrar Gr-II, Municipal Commissioner Gr-II) are in Pay Scale ₹44,570 – ₹1,27,480; Group 2 Non-Executive Posts (ASO, Senior Auditor) are in Pay Scale ₹35,750 – ₹1,01,630; and Assistant Executive Engineers (AEE) are in Pay Scale ₹45,830 – ₹1,30,580 plus state HRA and DA allowances."
    },
    {
      question: "Q9: What is the shortlisting ratio for APPSC Group 1 & 2 Mains examinations?",
      answer: "Candidates are shortlisted from the Screening Test (Prelims) to the Mains Written Examination in a 1:50 ratio based on Prelims merit. Shortlisting strictly enforces community category-wise reservation (SC, ST, BC, EWS, PwD) and 33.3% / 35% gender horizontal reservation within each community quota."
    },
    {
      question: "Q10: What original documents are required during APPSC Document Verification (DV)?",
      answer: "Candidates called for Certificate Verification must bring: 1. SSC / 10th Class Marks Memo (DOB proof), 2. Study Certificates from Class 4 to 10 (Local Candidate proof), 3. Degree / Graduation Certificate & Year-wise Marks Memos, 4. Integrated Caste / Community Certificate (SC/ST/BC) and Non-Creamy Layer (NCL) for BCs, 5. Latest EWS Certificate (if applicable), 6. Physical Handicap / Ex-Servicemen Certificates (if applicable), 7. Aadhaar Card & Government Photo ID, 8. APPSC OTPR Registration Copy & Exam Application Form."
    }
  ],
  contentHtml: `
    <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
      The <strong>Andhra Pradesh Public Service Commission (APPSC)</strong> is the premier constitutional agency established under Article 315 of the Constitution of India to recruit administrative, judicial, executive, and technical staff across Andhra Pradesh state departments. Whether you are seeking official steps for <strong>APPSC OTPR registration and modification</strong>, analyzing the updated <strong>APPSC Group 1 & Group 2 syllabi</strong>, evaluating <strong>AP RPS 2022 Revised Pay Scales</strong>, or formatting digital images for <strong>APPSC photo and signature rules</strong>, this master blueprint delivers complete candidate intelligence.
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
            <span class="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">50 KB – 100 KB</span>
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
            Ensure your passport photo occupies the upper 3.5×4.5 cm section on a white background and your signature is placed inside the lower 3.5×1.5 cm frame in <strong>BLACK BALLPOINT INK</strong>. Uploading uncropped photos or signatures signed in blue ink triggers instant OTPR rejection.
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
            <span>⚡</span> APPSC Official Photo & Signature Resizer Tool
          </h4>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Instantly format your passport photo (3.5×4.5 cm, 50–100 KB) and black ink signature (3.5×1.5 cm, 20–50 KB) with pre-configured APPSC canvas parameters.
          </p>
        </div>
        <a href="/appsc-signature-resize/?preset=appsc&photoMax=100&signMax=50" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
          Resize for APPSC OTPR &rarr;
        </a>
      </div>
    </div>

    <!-- 1. Executive Quick Facts & Metadata Badge -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. APPSC Executive Quick Facts & Portal Metadata</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      All state recruitment operations, syllabus releases, hall ticket downloads, and One Time Profile Registrations (OTPR) are executed through the single official Andhra Pradesh state portal:
    </p>
    <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-3">
      <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
        <li><strong class="text-foreground">Official Conducting Body:</strong> Andhra Pradesh Public Service Commission (APPSC), Vijayawada.</li>
        <li><strong class="text-foreground">Official State Portal:</strong> <code class="text-primary font-mono">psc.ap.gov.in</code> (and <code class="text-primary font-mono">appscservices.ap.gov.in</code>).</li>
        <li><strong class="text-foreground">Primary Profile ID System:</strong> One Time Profile Registration (OTPR) generating a permanent candidate ID formatted as <code class="text-primary font-mono">APXXXXXXXX</code>.</li>
        <li><strong class="text-foreground">Photo Technical Upload Limits:</strong> 3.5 cm × 4.5 cm (200 × 230 px), 50 KB to 100 KB, Light/White background, JPG/JPEG format.</li>
        <li><strong class="text-foreground">Signature Technical Upload Limits:</strong> 3.5 cm × 1.5 cm (140 × 60 px), 20 KB to 50 KB, BLACK BALLPOINT PEN strictly on plain white sheet.</li>
        <li><strong class="text-foreground">Key Executive & Non-Executive Cadres:</strong> Group 1 (Deputy Collector, RDO, CTO, DSP), Group 2 (Deputy Tahsildar, Sub-Registrar Gr-II, Municipal Commissioner Gr-II, ASO, Senior Auditor), Assistant Executive Engineer (AEE), Executive Officer (Endowments), and Panchayat Secretary.</li>
      </ul>
    </div>

    <!-- 2. Official Registration / Portal Walkthrough -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">2. APPSC One Time Profile Registration (OTPR) Master Walkthrough</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Creating a validated <strong>APPSC OTPR Profile</strong> is mandatory before submitting online applications for any Andhra Pradesh recruitment notification. Once completed, your OTPR Reference ID remains permanently linked to your Aadhaar and SSC credentials.
    </p>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Step-by-Step OTPR Account Creation Procedure</h3>
    <div class="my-6 space-y-4">
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">1</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 1: Mobile OTP Authentication & Aadhaar Verification</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Visit <code>psc.ap.gov.in</code> &rarr; Click 'Modify OTPR / Direct Recruitment' &rarr; 'New Registration'. Enter your active Mobile Number and Email ID. Verify mobile number via OTP, then enter your 12-digit Aadhaar Card Number and candidate name exactly as printed on SSC 10th Marks Memo.</p>
        </div>
      </div>
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">2</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 2: Educational Trajectory & Study Log (Classes 4 to 10)</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Input your continuous schooling details from Class 4 through Class 10, specifying district name, school type (Regular / Private), and years of study. This study log strictly establishes your <strong>85% AP Local Candidate Reservation Status</strong>.</p>
        </div>
      </div>
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">3</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 3: Document Upload, Photo/Signature & OTPR ID Generation</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Upload photograph (3.5×4.5 cm, 50–100 KB) and black ink signature (3.5×1.5 cm, 20–50 KB). Click 'Preview', verify all entries, and submit to generate your unique <strong>APPSC OTPR Reference ID (APXXXXXXXX)</strong>.</p>
        </div>
      </div>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. Editable vs Non-Editable Profile Fields</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Understanding profile editing rules prevents candidates from creating duplicate accounts or suffering disqualification during certificate verification:
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="p-4 rounded-xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <span>✅</span> Self-Editable Online Fields (via Mobile OTP)
        </h4>
        <ul class="list-disc list-inside space-y-1 text-xs text-muted-foreground">
          <li>Newly acquired Degree / Post-Graduation qualifications.</li>
          <li>Current mailing address and permanent residential details.</li>
          <li>Registered Mobile Number and Email Address.</li>
          <li>Updated passport photo or black ink signature files.</li>
        </ul>
      </div>

      <div class="p-4 rounded-xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
          <span>⚠️</span> Non-Editable Primary Fields (Require APPSC Ticket)
        </h4>
        <ul class="list-disc list-inside space-y-1 text-xs text-muted-foreground">
          <li>Candidate Primary Name (must match 10th SSC Memo).</li>
          <li>Father's Name, Primary Date of Birth, and Gender.</li>
          <li>Aadhaar Card Linkage number.</li>
          <li><em>Resolution:</em> File an online grievance ticket on <code>psc.ap.gov.in</code> or present original 10th Memo & Aadhaar at the APPSC Helpdesk in Vijayawada.</li>
        </ul>
      </div>
    </div>

    <!-- 3. Eligibility & Domicile / Reservation Framework -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">3. Eligibility, Age Cutoffs & AP Domicile Reservation Rules</h2>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Age Limit Benchmarks & Relaxation Category Matrix</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      The standard age reference date for APPSC recruitments is <strong>July 1</strong> of the notification year. The general candidate age bracket is <strong>18 to 42 years</strong>, with relaxations structured as follows:
    </p>
    <div class="my-6 overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
        <thead class="bg-muted text-foreground font-bold">
          <tr>
            <th class="p-3 text-left border-b border-border">Candidate Category</th>
            <th class="p-3 text-left border-b border-border">General Upper Age Limit</th>
            <th class="p-3 text-left border-b border-border">Age Relaxation Extension</th>
            <th class="p-3 text-left border-b border-border">Maximum Permissible Age</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border text-muted-foreground">
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Open Competition (OC / General)</td>
            <td class="p-3">42 Years</td>
            <td class="p-3">Nil</td>
            <td class="p-3 font-mono font-bold text-foreground">42 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">SC / ST / BC / EWS Candidates</td>
            <td class="p-3">42 Years</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">+5 Years</td>
            <td class="p-3 font-mono font-bold text-foreground">47 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Persons with Benchmark Disabilities (PwD)</td>
            <td class="p-3">42 Years</td>
            <td class="p-3 font-mono text-emerald-600 dark:text-emerald-400">+10 Years</td>
            <td class="p-3 font-mono font-bold text-foreground">52 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Ex-Servicemen (NCC Instructors)</td>
            <td class="p-3">42 Years</td>
            <td class="p-3">+3 Years + Military Service Rendered</td>
            <td class="p-3 font-mono font-bold text-foreground">As per Service Rules</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="my-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-700 dark:text-amber-300 space-y-1">
      <strong class="font-bold block">Uniformed Executive Posts Physical Standards (DSP / Prohibition & Excise SI / Deputy Jailor):</strong>
      <p>Uniformed cadres have special upper age limits (DSP: 30/34 years, Excise SI: 28–30 years). Male candidates must meet height criteria (minimum 167.6 cm) and chest measurements (86.3 cm with 5 cm expansion). Female candidates must measure minimum 152.5 cm height and 45.5 kg weight.</p>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. Presidential Order: 85% Local Candidate Reservation Mechanics</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Under the <strong>Andhra Pradesh Public Employment (Organization of Local Cadres and Regulation of Direct Recruitment) Order</strong>, direct recruitment posts are classified into District, Zonal, and Multi-Zonal cadres:
    </p>
    <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-4">
      <h4 class="font-bold text-sm text-foreground">How Local Candidate Status is Determined:</h4>
      <p class="text-xs sm:text-sm text-muted-foreground">
        A candidate is recognized as an <strong>AP Local Candidate</strong> for a specific district if they studied continuously from <strong>Class 4 to Class 10</strong> for a minimum of <strong>4 consecutive academic years</strong> in that district. For private candidates without regular school certificates, 4 years of continuous residence in the district preceding the SSC exam is mandatory.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-muted-foreground border-t border-border pt-3">
        <div class="p-3 rounded-xl bg-muted/40 border border-border">
          <strong class="text-foreground block mb-1">85% Local Reservation Quota:</strong>
          <p>85% of all direct recruitment vacancies in District, Zonal, and Multi-Zonal cadres are reserved exclusively for Local Candidates of the respective AP district or zone.</p>
        </div>
        <div class="p-3 rounded-xl bg-muted/40 border border-border">
          <strong class="text-foreground block mb-1">15% Unreserved (Open Competition):</strong>
          <p>15% of vacancies are open for competition between local and non-local candidates strictly based on combined merit scores.</p>
        </div>
      </div>
    </div>

    <!-- 4. Exhaustive Multi-Tier Selection Architecture -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">4. Multi-Tier Exam Architecture & Selection Framework</h2>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. APPSC Group 1 Selection Architecture (Total: 825 Marks)</h3>
    <div class="my-4 p-5 rounded-2xl bg-card border border-border space-y-4">
      <div>
        <h4 class="font-bold text-sm text-foreground">Stage 1: Preliminary Screening Test (2 Objective Papers, 240 Marks)</h4>
        <ul class="space-y-1 text-xs sm:text-sm text-muted-foreground mt-2">
          <li><strong>Paper I (120 Questions, 120 M, 120 Min):</strong> History & Culture (30 M), Constitution, Polity, Social Justice & International Relations (30 M), Indian & AP Economy (30 M), Geography (30 M).</li>
          <li><strong>Paper II (120 Questions, 120 M, 120 Min):</strong> General Mental Ability, Administrative & Psychological Abilities (60 M), Data Interpretation & Quantitative Aptitude (60 M).</li>
          <li><strong class="text-destructive">Negative Marking Penalty:</strong> <strong>1/3rd mark deduction (0.33 penalty)</strong> per wrong response. Shortlisting ratio for Mains is <strong>1:50</strong> based on community-wise Prelims merit.</li>
        </ul>
      </div>

      <div class="border-t border-border pt-3">
        <h4 class="font-bold text-sm text-foreground">Stage 2: Main Written Examination (5 Descriptive Papers + 2 Qualifying Papers)</h4>
        <ul class="space-y-1.5 text-xs sm:text-sm text-muted-foreground mt-2">
          <li><strong>Qualifying Telugu (100 M) & English (100 M):</strong> Qualifying threshold is 35% for OC, 30% for BC, 25% for SC/ST. Marks are not counted for final ranking.</li>
          <li><strong>Paper I: General Essay (150 Marks):</strong> 3 descriptive essays on contemporary socio-economic, political, and environmental issues.</li>
          <li><strong>Paper II: History, Culture & Geography (150 Marks):</strong> History & Culture of India and Andhra Pradesh (1953/1956 & 2014 Bifurcation), Indian & AP Geography.</li>
          <li><strong>Paper III: Polity, Governance, Law & Ethics (150 Marks):</strong> Indian Constitution, Public Administration, State Governance, Ethics in Public Service.</li>
          <li><strong>Paper IV: Economy & Development of India & AP (150 Marks):</strong> Indian Economy, AP Economy, AP Reorganisation Act 2014 fiscal implications, AP Budget & Welfare.</li>
          <li><strong>Paper V: Science & Technology & Environmental Issues (150 Marks):</strong> S&T developments, Information Technology, Biotechnology, Disaster Management & AP Environmental Challenges.</li>
        </ul>
      </div>

      <div class="border-t border-border pt-3">
        <h4 class="font-bold text-sm text-foreground">Stage 3: Oral Test / Personal Interview (75 Marks)</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Candidates qualifying Mains advance to the interview board. Final merit is computed out of <strong>825 Marks (750 Mains + 75 Interview)</strong>.</p>
      </div>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. APPSC Group 2 Selection Architecture (Mains: 300 Marks + CPT)</h3>
    <div class="my-4 p-5 rounded-2xl bg-card border border-border space-y-4">
      <div>
        <h4 class="font-bold text-sm text-foreground">Stage 1: Screening Test / Prelims (1 Paper, 150 Objective MCQs, 150 Marks)</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">Covers 5 core sections (30 Marks / 30 MCQs each): Indian History, Geography, Indian Society, Current Affairs, and Mental Ability. Duration: 150 minutes. Negative marking: <strong>1/3rd penalty</strong>. Mains shortlisting ratio: <strong>1:50</strong>.</p>
      </div>

      <div class="border-t border-border pt-3">
        <h4 class="font-bold text-sm text-foreground">Stage 2: Main Examination (2 Objective Papers, 300 Total Marks)</h4>
        <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground mt-2">
          <li><strong>Paper I (150 MCQs, 150 Marks, 150 Min):</strong> Section A: Social & Cultural History of Andhra Pradesh (75 Marks); Section B: Indian Constitution & Political System (75 Marks).</li>
          <li><strong>Paper II (150 MCQs, 150 Marks, 150 Min):</strong> Section A: Indian & Andhra Pradesh Economy (75 Marks); Section B: Science & Technology (75 Marks).</li>
          <li><strong class="text-destructive">Negative Marking:</strong> <strong>1/3rd mark deduction</strong> per wrong answer.</li>
        </ul>
      </div>

      <div class="border-t border-border pt-3">
        <h4 class="font-bold text-sm text-foreground">Stage 3: Computer Proficiency Test (CPT - Mandatory Qualifying Exam)</h4>
        <p class="text-xs sm:text-sm text-muted-foreground mt-1">A <strong>100-mark practical test</strong> with a <strong>60-minute duration</strong> assessing hands-on Office Automation (MS Word, Excel, PowerPoint, Internet & Email). Official qualifying cutoffs out of 100 Marks: <strong>40 Marks (40%) for OC / EWS</strong>, <strong>35 Marks (35%) for BC</strong>, and <strong>30 Marks (30%) for SC / ST / PH candidates</strong>.</p>
      </div>
    </div>

    <!-- 5. Granular Syllabus Breakdowns by Paper -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">5. Granular Syllabus Breakdown: AP History, Economy & S&T</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
        <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
          <span>📚</span> AP Social & Cultural History Syllabus
        </h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1.5">
          <li><strong>Ancient Andhra:</strong> Satavahanas, Ikshvakus, Vishnukundins, Pallavas, Eastern Chalukyas of Vengi - Society, religion, literature, art & architecture.</li>
          <li><strong>Medieval Period:</strong> Kakatiyas, Reddi Kingdoms, Vijayanagara Empire, Qutb Shahis - Administration, socio-economic conditions, Telugu literature flourish.</li>
          <li><strong>Modern Andhra Movement:</strong> East India Company rule, 1857 Revolt in Andhra, Freedom Struggle, Andhra Mahasabha, Potti Sreeramulu's fast & 1953 Andhra State formation.</li>
          <li><strong>States Reorganisation 1956 & 2014:</strong> Gentleman's Agreement, Formation of AP (1956), AP Reorganisation Act 2014 socio-political context.</li>
        </ul>
      </div>

      <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
        <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
          <span>📈</span> Indian & AP Economy Syllabus
        </h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1.5">
          <li><strong>Structure of AP Economy:</strong> Gross State Domestic Product (GSDP), sectoral share of agriculture, industry, services, per capita income trends.</li>
          <li><strong>Agriculture & Allied Sectors:</strong> Land reforms, irrigation projects (Polavaram), crop insurance, Rayalaseema & North Coastal drought management.</li>
          <li><strong>AP Industrial Development:</strong> Industrial policies, SEZs, Vizag-Chennai Industrial Corridor (VCIC), Chennai-Bangalore Industrial Corridor (CBIC), ports & logistics.</li>
          <li><strong>AP Reorganisation Act 2014 & Budget:</strong> Resource allocation, public debt, AP Socio-Economic Survey, State Budget, Navaratnalu welfare schemes.</li>
        </ul>
      </div>
    </div>

    <!-- 6. Pay Scale Matrix & Cadre Hierarchy -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">6. APPSC Pay Scale Matrix & Cadre Hierarchy (AP RPS 2022)</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Below is the official Pay Scale Matrix established under the <strong>11th AP Revised Pay Scales (AP RPS 2022)</strong> across major APPSC recruitment cadres:
    </p>

    <div class="my-6 overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
        <thead class="bg-muted text-foreground font-bold">
          <tr>
            <th class="p-3 text-left border-b border-border">Designation</th>
            <th class="p-3 text-left border-b border-border">Cadre Classification</th>
            <th class="p-3 text-left border-b border-border">AP RPS 2022 Pay Scale Range</th>
            <th class="p-3 text-left border-b border-border">Scale Level / Hierarchy</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border text-muted-foreground">
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Deputy Collector / RDO</td>
            <td class="p-3">Group 1 Executive (State Cadre)</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹61,960 – ₹1,51,370</td>
            <td class="p-3">Level 13 (Senior Gazetted)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Commercial Tax Officer (CTO) / DSP</td>
            <td class="p-3">Group 1 Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹61,960 – ₹1,51,370</td>
            <td class="p-3">Level 13 (Gazetted)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Assistant Treasury Officer / MPDO</td>
            <td class="p-3">Group 1 Service</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹54,060 – ₹1,40,490</td>
            <td class="p-3">Level 11 (Gazetted)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Deputy Tahsildar / Sub-Registrar Gr-II</td>
            <td class="p-3">Group 2 Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹44,570 – ₹1,27,480</td>
            <td class="p-3">Level 9 (Executive Cadre)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Municipal Commissioner Gr-III / ACTO</td>
            <td class="p-3">Group 2 Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹44,570 – ₹1,27,480</td>
            <td class="p-3">Level 9 (Executive Cadre)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Assistant Section Officer (ASO - AP Secretariat)</td>
            <td class="p-3">Group 2 Non-Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹35,750 – ₹1,01,630</td>
            <td class="p-3">Level 7 (State Secretariat)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Senior Auditor / Senior Accountant</td>
            <td class="p-3">Group 2 Non-Executive</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹35,750 – ₹1,01,630</td>
            <td class="p-3">Level 7 (Zonal Cadre)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Executive Officer Gr-III (Endowments)</td>
            <td class="p-3">Executive Subordinate Cadre</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹25,220 – ₹80,910</td>
            <td class="p-3">Level 4 (District Cadre)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Assistant Executive Engineer (AEE)</td>
            <td class="p-3">Technical Engineering Gazetted</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">₹45,830 – ₹1,30,580</td>
            <td class="p-3">Level 10 (Technical Gazetted)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 7. Document & Image Upload Compliance Standards -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">7. APPSC Photo & Signature Upload Technical Standards</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Image validation on <code>psc.ap.gov.in</code> automatically checks file size boundaries, pixel aspect ratios, and format extensions. Deviations trigger immediate rejection during OTPR generation:
    </p>

    <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-4">
      <h3 class="text-base font-bold text-foreground">Official Image Specification Matrix</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground">
        <div class="p-4 rounded-xl bg-muted/30 border border-border space-y-2">
          <strong class="text-foreground text-sm block">1. Passport Photo Technical Spec</strong>
          <ul class="space-y-1">
            <li><strong>Width × Height:</strong> 3.5 cm × 4.5 cm (200 × 230 pixels)</li>
            <li><strong>File Size Range:</strong> <strong>50 KB to 100 KB strictly</strong></li>
            <li><strong>Format:</strong> JPG / JPEG format only</li>
            <li><strong>Background:</strong> Plain Light or White background</li>
            <li><strong>Pose:</strong> Frontal face view, both ears visible, no dark glasses or caps</li>
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

    <!-- 8. Curated APPSC Booklist & High-Yield Preparation Strategy -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">8. Curated APPSC Booklist & High-Yield Preparation Strategy</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
      <div class="p-5 rounded-2xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-foreground">Authoritative Standard Booklist</h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1">
          <li><strong>AP History:</strong> B.S.L. Hanumantha Rao / K. Lakshminarayana / Telugu Academy.</li>
          <li><strong>Indian Polity & Constitution:</strong> M. Laxmikanth (English / Telugu Edition).</li>
          <li><strong>AP Economy & Budget:</strong> Latest AP Socio-Economic Survey, State Budget copy, and Kodali Ganapathi Rao.</li>
          <li><strong>Indian Economy:</strong> Ramesh Singh / Vivek Singh.</li>
          <li><strong>AP Reorganisation Act 2014:</strong> Official Government Gazette & Commentary.</li>
        </ul>
      </div>

      <div class="p-5 rounded-2xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-foreground">Negative Marking & Execution Strategy</h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1">
          <li><strong>1/3rd Negative Marking Discipline:</strong> Attempt only high-confidence questions; avoid wild guessing since 3 wrong answers eliminate 1 correct mark.</li>
          <li><strong>AP Economy Weightage:</strong> Focus heavily on GSDP metrics, Polavaram progress, port infrastructure, and state welfare schemes.</li>
          <li><strong>Current Affairs:</strong> Review 12 months of state, national, and international developments prior to exam date.</li>
        </ul>
      </div>
    </div>

    <!-- Direct Deep-Linked CTA Button -->
    <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="space-y-1">
        <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
          <span>⚙️</span> Preset APPSC Photo (50–100 KB) & Signature (20–50 KB) Resizer
        </h4>
        <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Open the resizer canvas pre-configured with exact 200×230 px photo and 140×60 px black ink signature boundaries.
        </p>
      </div>
      <a href="/appsc-signature-resize/?preset=appsc&photoMax=100&signMax=50" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
        Resize for APPSC OTPR &rarr;
      </a>
    </div>
  `
};

const filePath = path.resolve('./src/data/blogPostsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const slugToFind = "appsc-group-1-2-2026-master-guide-otpr-photo-signature-rules";

const startIndex = content.indexOf(`"slug": "${slugToFind}"`);
if (startIndex === -1) {
  console.error("Could not find APPSC post in blogPostsData.ts");
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
  console.error("Could not find closing brace for APPSC post object");
  process.exit(1);
}

const updatedObjectJson = JSON.stringify(appscPost, null, 2);
const updatedContent = content.slice(0, objectStart) + updatedObjectJson + content.slice(objectEnd);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully updated APPSC master blueprint with structural and factual fixes!");
