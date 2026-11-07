import fs from 'fs';
import path from 'path';

const mppscPost = {
  slug: "mppsc-state-service-2026-master-guide-prelims-mains-photo-rules",
  title: "MPPSC State Service 2026 Master Guide: Prelims & Mains Syllabus, Pay Levels & MP Online Photo-Signature Rules",
  metaTitle: "MPPSC 2026 Master Guide: Prelims, Mains Syllabus, Pay Levels & Photo Signature Resizer",
  metaDescription: "Exhaustive MPPSC 2026 candidate master guide: State Service & Forest Service Prelims GS + CSAT blueprints, MP History & Geography syllabus, Pay Level 8 to 12 matrix, 1:20 Mains shortlisting, 1685-mark scheme, and MP Online 20–100 KB document resizer.",
  excerpt: "Complete master guide for MPPSC State Service Examination (SSE) 2026: Prelims GS/CSAT blueprints, Mains GS Paper I–VI syllabus, MP Pay Level 8 to 12 scales, 1685-mark scoring scheme, and MP Online 20–100 KB photo/signature resizer.",
  category: "Career Opportunity",
  country: "IN",
  publishDate: "Oct 09, 2026",
  publishTime: "08:10 PM IST",
  lastUpdated: "Oct 09, 2026",
  author: "SignResize MP State Service Research Desk",
  authorRole: "Senior MP PSC Examination Strategist",
  readTime: "9 min read",
  featured: true,
  relatedExamPreset: "mppsc-signature-resize",
  tags: [
    "MPPSC",
    "MPPSC Prelims Syllabus",
    "MPPSC Mains Pattern",
    "MPPSC State Service Exam 2026",
    "MPPSC Photo Resizer 100KB",
    "MPPSC Signature Resizer 100KB",
    "MPPSC Pay Scale Matrix",
    "MP History GK"
  ],
  quickFacts: [
    {
      label: "Conducting Body",
      value: "Madhya Pradesh Public Service Commission (MPPSC)"
    },
    {
      label: "Official Portals",
      value: "mppsc.mp.gov.in / mponline.gov.in"
    },
    {
      label: "Recruitment Cycle",
      value: "2026 State Service & State Forest Service Exams"
    },
    {
      label: "Candidate Profile System",
      value: "MP Online Applicant Profile Registration"
    },
    {
      label: "Photo Technical Limits",
      value: "JPG/JPEG, 3.5×4.5 cm (200×230 px), 20 KB – 100 KB"
    },
    {
      label: "Signature Technical Limits",
      value: "Black Ballpoint Pen, 3.5×1.5 cm (140×60 px), 10 KB – 100 KB"
    }
  ],
  faqs: [
    {
      question: "Q1: What is MPPSC Candidate Registration and how do I apply on MP Online?",
      answer: "Candidate registration for MPPSC State Service Examinations is conducted online via mppsc.mp.gov.in and mponline.gov.in. Applicants create a centralized candidate profile using their Mobile Number, Email ID, Aadhaar Card / Identity Proof, and 10th Marks Memo. Upon successful submission, a permanent Application Number / Profile ID is generated."
    },
    {
      question: "Q2: What is the age limit and relaxation criteria for MPPSC State Service 2026?",
      answer: "The cutoff reference date for age calculation is January 1 of the recruitment year. For non-uniformed posts, the general age bracket is 21 to 40 years. For uniformed cadres (DSP, District Commandant, Jail Superintendent), the age limit is 21 to 33 years. Female candidates and MP domicile candidates belonging to SC, ST, OBC, EWS, and Government Employees receive a +5-year age relaxation (up to 45 years maximum)."
    },
    {
      question: "Q3: Is there negative marking in MPPSC State Service Prelims Examination?",
      answer: "No. MPPSC State Service Prelims (General Studies Paper I and General Aptitude CSAT Paper II) has ZERO negative marking. Each correct response carries 2 marks, and no marks are deducted for wrong or unattempted responses. Candidates should attempt all 100 questions."
    },
    {
      question: "Q4: How does Domicile Reservation work for Non-MP Candidates in MPPSC?",
      answer: "Candidates domiciled in Madhya Pradesh are eligible for category reservation benefits (SC, ST, OBC 27%, EWS 10%, Women 33% horizontal reservation). Candidates from other states (Non-MP domiciles) can apply for MPPSC State Service but are treated under the Open Competition (Unreserved / UR) category regardless of their home state category."
    },
    {
      question: "Q5: What is the Mains shortlisting ratio from MPPSC Prelims?",
      answer: "Candidates are shortlisted from the Preliminary Examination (GS Paper I merit) to the Main Written Examination in a 1:20 ratio (20 times the total advertised vacancies in each category, including all candidate ties at the cutoff score)."
    },
    {
      question: "Q6: What is the total scoring scheme for MPPSC Mains and Interview?",
      answer: "The MPPSC Main Written Examination consists of 6 descriptive papers totaling 1500 Marks (GS I: 300 M, GS II: 300 M, GS III: 300 M, GS IV: 300 M, General Hindi: 200 M, Hindi Essay: 100 M). The Personality Test (Interview) carries 185 Marks. Final selection merit is computed out of 1685 Total Marks (1500 Mains + 185 Interview)."
    },
    {
      question: "Q7: What are the exact photo and signature file size upload limits for MPPSC Online?",
      answer: "MPPSC mandates: Passport photograph must be 3.5 cm × 4.5 cm (200 × 230 pixels), JPG/JPEG format, sized between 20 KB and 100 KB on a light/white background. Signature must be 3.5 cm × 1.5 cm (140 × 60 pixels), JPG/JPEG format, sized between 10 KB and 100 KB, signed strictly using a BLACK BALLPOINT PEN on plain white paper."
    },
    {
      question: "Q8: Which profile fields can be edited online vs fields requiring MPPSC Helpdesk intervention?",
      answer: "Educational qualifications, address, mobile number, email ID, and fresh photo/signature files can be updated during online correction windows. However, primary core fields—including Candidate Name (as per 10th memo), Father's Name, Date of Birth, and Domicile Status—cannot be edited after final submission without submitting an official representation to MPPSC Indore."
    },
    {
      question: "Q9: What are the official pay levels under the 7th Pay Commission / MP Pay Matrix for MPPSC posts?",
      answer: "Deputy Collector, DSP, and Commercial Tax Officers are placed in Pay Level 12 (₹56,100 – ₹1,77,500); Assistant Directors in Pay Level 11 (₹49,100 – ₹1,55,800); Chief Executive Officers (Janpad Panchayat) and Naib Tahsildars in Pay Level 10 (₹36,200 – ₹1,14,800); and Excise Sub-Inspectors / Cooperative Inspectors in Pay Level 8–9 (₹28,700 – ₹1,03,600)."
    },
    {
      question: "Q10: What original documents are required during MPPSC Document Verification (DV)?",
      answer: "Candidates called for Certificate Verification must present: 1. High School (10th) Certificate (DOB proof), 2. Higher Secondary (12th) & Graduation Degree Certificates with all marksheets, 3. MP Domicile / Local Residence Certificate (for reservation benefits), 4. Scheduled Caste / Scheduled Tribe / OBC / EWS Category Certificate issued by MP authority, 5. MP Employment Exchange Registration (Rojgar Panjiyan) card (mandatory for MP residents; waived for other-state candidates per High Court directions), 6. Identity Proof (Aadhaar Card/Voter ID), and 7. MPPSC Application & Mains Admit Card copies."
    }
  ],
  contentHtml: `
    <p class="text-base sm:text-lg leading-relaxed text-foreground font-medium mb-6">
      The <strong>Madhya Pradesh Public Service Commission (MPPSC)</strong> is the constitutional body responsible for conducting direct recruitment examinations for state administrative, police, revenue, and technical services across Madhya Pradesh. Whether you are searching for the official <strong>MPPSC candidate registration process on MP Online</strong>, analyzing the updated <strong>MPPSC Prelims & Mains examination syllabi</strong>, assessing <strong>MP Pay Matrix Level 8 to 12 scales</strong>, or formatting digital images for <strong>MPPSC photo and signature rules</strong>, this master guide provides complete candidate intelligence.
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
            <span class="text-[8px] text-muted-foreground">3.5 × 1.5 cm (140×60 px) | 10–100 KB</span>
          </div>
        </div>
        <div class="space-y-2 text-xs sm:text-sm text-muted-foreground max-w-md">
          <strong class="text-foreground font-bold text-sm block flex items-center gap-2">
            <span>📌</span> Official Bounding Box Proportions & Technical Guidelines
          </strong>
          <p class="leading-relaxed">
            Ensure your passport photo occupies the upper 3.5×4.5 cm segment on a plain light/white background, and your signature is signed in <strong>BLACK BALLPOINT INK</strong> inside the lower 3.5×1.5 cm bounding frame. MP Online portal validation automatically rejects blurry scans, low DPI images, or signatures written in blue ink.
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
            <span>⚡</span> MPPSC Official Photo & Signature Resizer Tool
          </h4>
          <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Format your passport photo (20–100 KB) and signature (10–100 KB) instantly with pre-configured MPPSC canvas dimensions and pixel ratios.
          </p>
        </div>
        <a href="/mppsc-signature-resize/?preset=mppsc&photoW=3.5&photoH=4.5&photoMin=20&photoMax=100&signW=3.5&signH=1.5&signMin=10&signMax=100" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
          Resize for MPPSC Online &rarr;
        </a>
      </div>
    </div>

    <!-- 1. Executive Quick Facts & Portal Metadata -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">1. MPPSC Executive Quick Facts & Portal Metadata</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Official recruitment notifications, online application forms, admit cards, and preliminary answer keys are published through the state public service portals:
    </p>
    <div class="my-6 p-5 rounded-2xl bg-card border border-border space-y-3">
      <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
        <li><strong class="text-foreground">Official Conducting Authority:</strong> Madhya Pradesh Public Service Commission (MPPSC), Residency Area, Indore.</li>
        <li><strong class="text-foreground">Official State Portals:</strong> <code class="text-primary font-mono">mppsc.mp.gov.in</code> and <code class="text-primary font-mono">mponline.gov.in</code>.</li>
        <li><strong class="text-foreground">Candidate Registration System:</strong> MP Online Candidate Profile & Online Application Form.</li>
        <li><strong class="text-foreground">Photo Upload Technical Limits:</strong> 3.5 cm × 4.5 cm (200 × 230 px), 20 KB to 100 KB, Light/White background, JPG/JPEG format.</li>
        <li><strong class="text-foreground">Signature Upload Technical Limits:</strong> 3.5 cm × 1.5 cm (140 × 60 px), 10 KB to 100 KB, BLACK BALLPOINT PEN strictly on plain white paper.</li>
        <li><strong class="text-foreground">Primary Recruitment Cadres:</strong> State Civil Service (Deputy Collector), State Police Service (DSP), Commercial Tax Officer, District Registrar, Assistant Director, Naib Tahsildar, and Excise Sub-Inspector.</li>
      </ul>
    </div>

    <!-- 2. One-Time Registration (OTR/MP Online) Walkthrough -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">2. MP Online Application & Candidate Profile Registration Walkthrough</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Submitting an application for MPPSC State Service Examination requires setting up a candidate profile on <code>mponline.gov.in</code> or <code>mppsc.mp.gov.in</code>:
    </p>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Chronological 3-Step Profile Creation Procedure</h3>
    <div class="my-6 space-y-4">
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">1</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 1: Primary Authentication & Aadhaar Verification</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Visit <code>mppsc.mp.gov.in</code> &rarr; Click 'Apply Online'. Enter your active Mobile Number, Email ID, Aadhaar Number, and Candidate Name strictly matching your High School (10th) Certificate.</p>
        </div>
      </div>
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">2</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 2: Educational Log & MP Domicile Status</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Enter your 10th Class, 12th Class, and Graduation Degree details (passing year, board/university, percentage/CGPA). Specify whether you hold a permanent Madhya Pradesh Domicile Certificate to determine category reservation eligibility.</p>
        </div>
      </div>
      <div class="p-4 rounded-xl bg-card border border-border flex items-start gap-3">
        <span class="w-7 h-7 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center shrink-0 text-sm">3</span>
        <div>
          <h4 class="font-bold text-sm text-foreground">Step 3: Document Upload & Application ID Generation</h4>
          <p class="text-xs sm:text-sm text-muted-foreground mt-1">Upload recent passport photograph (3.5×4.5 cm, 20–100 KB) and black ink signature (3.5×1.5 cm, 10–100 KB). Review application preview, pay the online portal fee, and generate your official <strong>MPPSC Application Number</strong>.</p>
        </div>
      </div>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. Profile Editability Matrix</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="p-4 rounded-xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <span>✅</span> Self-Editable Fields (During Edit Window)
        </h4>
        <ul class="list-disc list-inside space-y-1 text-xs text-muted-foreground">
          <li>Additional educational qualifications & marks updates.</li>
          <li>Current correspondence address and permanent residence details.</li>
          <li>Mobile Number and Email Address updates.</li>
          <li>Re-uploading formatted photo or signature files.</li>
        </ul>
      </div>

      <div class="p-4 rounded-xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
          <span>⚠️</span> Locked Core Fields (Require Official Grievance)
        </h4>
        <ul class="list-disc list-inside space-y-1 text-xs text-muted-foreground">
          <li>Candidate Primary Name (must match 10th Memo).</li>
          <li>Father's Name, Primary Date of Birth, and Gender.</li>
          <li>Madhya Pradesh Domicile Status & Reservation Category.</li>
          <li><em>Resolution:</em> File an official correction representation with MPPSC Office, Residency Area, Indore along with supporting documents.</li>
        </ul>
      </div>
    </div>

    <!-- 3. Eligibility, Age Benchmarks & Reservation Framework -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">3. Eligibility, Age Benchmarks & Domicile Reservation Framework</h2>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Age Limit Benchmarks & Category Relaxations</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      The cutoff reference date for age determination is <strong>January 1</strong> of the recruitment year. Upper age limits and category relaxations are structured as follows:
    </p>

    <div class="my-6 overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
        <thead class="bg-muted text-foreground font-bold">
          <tr>
            <th class="p-3 text-left border-b border-border">Candidate Category</th>
            <th class="p-3 text-left border-b border-border">Non-Uniformed Cadre Age Bracket</th>
            <th class="p-3 text-left border-b border-border">Uniformed Cadre (DSP/Jail) Limit</th>
            <th class="p-3 text-left border-b border-border">Maximum Permissible Age (with Relaxation)</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border text-muted-foreground">
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">General / Open Competition (Male - Non-MP Domicile)</td>
            <td class="p-3">21 to 40 Years</td>
            <td class="p-3">21 to 33 Years</td>
            <td class="p-3 font-mono font-bold text-foreground">40 Years</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">MP Domicile SC / ST / OBC / EWS Candidates</td>
            <td class="p-3">21 to 40 Years</td>
            <td class="p-3">21 to 33 Years</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">45 Years (+5 Yrs Extension)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Female Candidates (All Categories - MP Domicile)</td>
            <td class="p-3">21 to 40 Years</td>
            <td class="p-3">21 to 33 Years</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">45 Years (+5 Yrs Extension)</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">MP State Government Employees & Ex-Servicemen</td>
            <td class="p-3">21 to 40 Years</td>
            <td class="p-3">As per Service Rules</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">45 Years (+5 Yrs Extension)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="my-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-amber-700 dark:text-amber-300 space-y-1">
      <strong class="font-bold block">Uniformed Executive Cadres Physical Fitness Criteria (DSP / District Commandant):</strong>
      <p>Male candidates must meet height criteria (minimum 168 cm) and chest measurement (84 cm unexpanded with 5 cm expansion to 89 cm). Female candidates must measure minimum 155 cm height.</p>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. MP Domicile Reservation Mechanics</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Candidates holding a valid <strong>Madhya Pradesh Domicile Certificate (M.P. Mool Niwasi Praman Patra)</strong> are eligible for state category reservation quotas (SC, ST, OBC 27%, EWS 10%, and 33% female horizontal reservation). Non-MP domicile candidates are eligible to compete under the Open Competition (Unreserved / UR) merit pool.
    </p>

    <!-- 4. Multi-Tier Selection Architecture & Scoring Scheme -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">4. Multi-Tier Selection Architecture & Scoring Scheme</h2>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">A. Stage 1: Preliminary Examination (Screening - 400 Total Marks)</h3>
    <div class="my-4 p-5 rounded-2xl bg-card border border-border space-y-4">
      <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
        <li><strong>Paper I: General Studies (100 Questions, 200 Marks, 2 Hours):</strong> Covers MP History & Culture, Geography of MP, Indian History & Polity, Science, Economy, Environment, and Current Affairs.</li>
        <li><strong>Paper II: General Aptitude Test / CSAT (100 Questions, 200 Marks, 2 Hours):</strong> Logical Reasoning, Decision Making, Problem Solving, General Mental Ability, Hindi Language Comprehension. Qualifying paper for State Service (33% minimum required for General, 23% for SC/ST/OBC). Marks are counted for State Forest Service.</li>
        <li><strong class="text-emerald-600 dark:text-emerald-400 font-bold">NO NEGATIVE MARKING:</strong> MPPSC Prelims has <strong>0 negative deduction</strong> for wrong or unattempted responses. Each correct answer awards <strong>+2 marks</strong>. Candidates should attempt all 100 questions.</li>
        <li><strong>Mains Shortlisting Ratio:</strong> Candidates are shortlisted for Mains in a <strong>1:20 ratio</strong> (20 times the total vacancies per category) based on Prelims GS Paper I merit.</li>
      </ul>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">B. Stage 2: Main Written Examination (6 Descriptive Papers, 1500 Total Marks)</h3>
    <div class="my-4 p-5 rounded-2xl bg-card border border-border space-y-3">
      <ul class="space-y-2 text-xs sm:text-sm text-muted-foreground">
        <li><strong>Paper I: General Studies I (300 Marks, 3 Hours):</strong> History (Section A - History & Culture of India & MP) and Geography (Section B - Geography of India, World & MP).</li>
        <li><strong>Paper II: General Studies II (300 Marks, 3 Hours):</strong> Polity & Constitution (Section A - Indian Constitution, Political System & Governance) and Economics & Sociology (Section B - Economy of India & MP, Social Sector & Human Resource).</li>
        <li><strong>Paper III: General Studies III (300 Marks, 3 Hours):</strong> Science & Technology, Environment, Mathematics & Computer Science.</li>
        <li><strong>Paper IV: General Studies IV (300 Marks, 3 Hours - Two 150-Mark Sections):</strong>
          <br>&bull; <strong>Part A (150 Marks):</strong> Philosophy, Psychology, Public Administration & Case Studies.
          <br>&bull; <strong>Part B (150 Marks):</strong> Entrepreneurship, Management, Personality Development & Case Studies.</li>
        <li><strong>Paper V: General Hindi & Grammar (200 Marks, 2 Hours):</strong> Samanya Hindi Evam Vyakaran (Hindi Grammar, Translation, Sentence Structure).</li>
        <li><strong>Paper VI: Hindi Essay & Draft Writing (100 Marks, 2 Hours):</strong> Hindi Nibandh Lekhan Evam Prarup Lekhan (2 Essay topics & 1 Official Letter/Draft writing).</li>
      </ul>
    </div>

    <h3 class="text-base sm:text-lg font-bold text-foreground mt-6 mb-3">C. Stage 3: Personality Test / Interview (185 Marks) & Total Merit</h3>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Candidates qualifying the Main Written Examination advance to the Viva-Voce / Interview Board in Indore for <strong>185 Marks</strong>. Final merit ranking is computed out of <strong>1,685 Total Marks (1500 Mains + 185 Interview)</strong>.
    </p>

    <!-- 5. Granular Syllabus Breakdown -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">5. Granular Syllabus Breakdown: MP History, Geography & Economy</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
        <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
          <span>🏛️</span> MP History, Culture & Tribal Traditions
        </h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1.5">
          <li><strong>Ancient & Medieval Dynasties:</strong> Maurya, Gupta, Chandela (Khajuraho), Parmar (Raja Bhoj), Gond Dynasty (Rani Durgavati), Holkar & Scindia rulers.</li>
          <li><strong>Freedom Movement in MP:</strong> 1857 Revolt in Malwa & Bundelkhand (Tantya Bheel, Bhima Nayak), Jungle Satyagraha, Charan Paduka massacre.</li>
          <li><strong>Arts & Culture:</strong> Festivals (Lokrang, Khajuraho Dance Festival), Folk Music, Architecture of Sanchi, Mandu, Gwalior Fort, and Tribal Culture of Bhil, Gond, Baiga, Sahariya.</li>
        </ul>
      </div>

      <div class="p-5 rounded-2xl bg-card border border-border space-y-3">
        <h4 class="font-bold text-sm text-foreground flex items-center gap-2">
          <span>🌿</span> MP Geography, Climate & Economy
        </h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1.5">
          <li><strong>Physical Geography:</strong> Malwa Plateau, Narmada-Sone Valley, Satpura-Maikal Range, Vindhyan Range. Rivers: Narmada, Tapti, Chambal, Betwa, Kshipra.</li>
          <li><strong>Forests & Wildlife:</strong> National Parks (Kanha, Bandhavgarh, Pench, Kuno Cheetah Sanctuary, Panna, Satpura), Tiger State status, mineral wealth (Manganese, Copper, Diamonds).</li>
          <li><strong>MP Economy & Governance:</strong> Agriculture, Irrigation, MP Budget, State Economic Survey, Panchayati Raj System, Ladli Laxmi & Sambal Welfare Schemes.</li>
        </ul>
      </div>
    </div>

    <!-- 6. Official Pay Scale Matrix & Cadre Hierarchy -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">6. MPPSC Pay Scale Matrix & Cadre Hierarchy (MP Pay Matrix 7th CPC)</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      Below is the official Pay Scale Matrix under the State Revised 7th Pay Commission Pay Matrix across major MPPSC cadres:
    </p>

    <div class="my-6 overflow-x-auto">
      <table class="w-full text-xs sm:text-sm border border-border rounded-xl overflow-hidden">
        <thead class="bg-muted text-foreground font-bold">
          <tr>
            <th class="p-3 text-left border-b border-border">Designation</th>
            <th class="p-3 text-left border-b border-border">Cadre Classification</th>
            <th class="p-3 text-left border-b border-border">MP Pay Matrix Level (7th CPC)</th>
            <th class="p-3 text-left border-b border-border">Pay Scale Range</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border text-muted-foreground">
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Deputy Collector (State Civil Service)</td>
            <td class="p-3">State Executive (Class I Gazetted)</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 12</td>
            <td class="p-3 font-mono">₹56,100 – ₹1,77,500</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Deputy Superintendent of Police (DSP)</td>
            <td class="p-3">State Police Service (Class I Gazetted)</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 12</td>
            <td class="p-3 font-mono">₹56,100 – ₹1,77,500</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Commercial Tax Officer (CTO) / District Registrar</td>
            <td class="p-3">Class I Gazetted Cadre</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 12</td>
            <td class="p-3 font-mono">₹56,100 – ₹1,77,500</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Assistant Director (School Education / PR)</td>
            <td class="p-3">Class II Gazetted Cadre</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 11</td>
            <td class="p-3 font-mono">₹49,100 – ₹1,55,800</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">CEO Janpad Panchayat / Naib Tahsildar</td>
            <td class="p-3">Class II Executive Cadre</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 10</td>
            <td class="p-3 font-mono">₹36,200 – ₹1,14,800</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Commercial Tax Inspector (CTI) / Excise Sub-Inspector</td>
            <td class="p-3">Class III Executive Cadre</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 9</td>
            <td class="p-3 font-mono">₹32,800 – ₹1,03,600</td>
          </tr>
          <tr class="hover:bg-muted/30">
            <td class="p-3 font-semibold text-foreground">Cooperative Inspector / Sub-Registrar</td>
            <td class="p-3">Class III Executive Cadre</td>
            <td class="p-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">Level 8</td>
            <td class="p-3 font-mono">₹28,700 – ₹91,300</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 7. Technical Upload Standards & Tool Deep-Linking -->
    <h2 class="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 border-b border-border pb-2">7. MPPSC Technical Upload Standards & Photo/Signature Specs</h2>
    <p class="text-sm leading-relaxed text-muted-foreground mb-4">
      The MP Online portal automatically verifies digital image boundaries during application submission. Deviations cause upload errors or hall ticket print issues:
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
            <li><strong>File Size Range:</strong> <strong>10 KB to 100 KB strictly</strong></li>
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
          <li><strong>MP General Knowledge:</strong> Mukesh Maheshwari / Tatya State GK / TMH MP GK / MP Hindi Granth Academy.</li>
          <li><strong>Indian Polity:</strong> M. Laxmikanth (Hindi / English Edition).</li>
          <li><strong>Indian History:</strong> Spectrum Modern India & Old NCERTs.</li>
          <li><strong>Ethics & Public Admin (Paper IV):</strong> Lexicon / Subba Rao.</li>
          <li><strong>General Hindi (Paper V):</strong> Vasudev Nandan Prasad / Hardev Bahri.</li>
        </ul>
      </div>

      <div class="p-5 rounded-2xl bg-card border border-border space-y-2">
        <h4 class="font-bold text-sm text-foreground">Prelims & Mains Execution Strategy</h4>
        <ul class="list-disc list-inside text-xs text-muted-foreground space-y-1">
          <li><strong>Prelims 0-Negative Marking Rule:</strong> Attempt all 100 questions in GS Paper I since no marks are deducted for wrong answers.</li>
          <li><strong>Heavy MP GK Weightage:</strong> MP State History, Geography, and Schemes account for 30–35% of total Prelims questions.</li>
          <li><strong>Mains Answer Writing Structure:</strong> Practice <strong>2-marker (~20 words)</strong>, <strong>7-marker (~60 words)</strong>, and <strong>11-marker (~200 words)</strong> analytical answer structures within strict time limits.</li>
        </ul>
      </div>
    </div>

    <!-- Direct Deep-Linked CTA Button -->
    <div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-card border-2 border-primary/30 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div class="space-y-1">
        <h4 class="text-base sm:text-lg font-extrabold text-foreground flex items-center gap-2">
          <span>⚙️</span> Preset MPPSC Photo (20–100 KB) & Signature (10–100 KB) Resizer
        </h4>
        <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          Open the resizer canvas pre-configured with exact 200×230 px photo and 140×60 px black ink signature boundaries for MP Online.
        </p>
      </div>
      <a href="/mppsc-signature-resize/?preset=mppsc&photoW=3.5&photoH=4.5&photoMin=20&photoMax=100&signW=3.5&signH=1.5&signMin=10&signMax=100" class="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:opacity-90 transition shrink-0">
        Resize for MPPSC Online &rarr;
      </a>
    </div>
  `
};

const filePath = path.resolve('./src/data/blogPostsData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const slugToFind = "mppsc-state-service-2026-master-guide-prelims-mains-photo-rules";

const startIndex = content.indexOf(`"slug": "${slugToFind}"`);
if (startIndex === -1) {
  console.error("Could not find MPPSC post in blogPostsData.ts");
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
  console.error("Could not find closing brace for MPPSC post object");
  process.exit(1);
}

const updatedObjectJson = JSON.stringify(mppscPost, null, 2);
const updatedContent = content.slice(0, objectStart) + updatedObjectJson + content.slice(objectEnd);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully updated MPPSC master guide with FAQ Q10 Rojgar Panjiyan note and deep-linked CTA!");
