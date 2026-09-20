// scratch/enrich_part1_posts.mjs
import fs from 'node:fs';

// Master enrichment metadata for the original 7 posts
export const part1Enrichment = {
  "ssc-cgl-2026-master-application-preparation-guide": {
    metaTitle: "SSC CGL 2026 Master Guide: Tier-1, Photo & Sign Rules",
    metaDescription: "Comprehensive SSC CGL 2026 handbook: Tier-1 scoring strategy, live webcam photo rules, 10-20KB signature bounds & timetable. Resize documents online free!",
    quickFacts: [
      { label: "Conducting Body", value: "Staff Selection Commission (SSC)" },
      { label: "Total Vacancies", value: "17,727 Posts (Group B & C)" },
      { label: "Application Last Date", value: "Sept 24, 2026 (23:00 Hrs)" },
      { label: "Selection Stages", value: "Tier-1 (Screening) + Tier-2 (Merit)" },
      { label: "Target Tier-1 Score", value: "150+ Marks (UR Category)" },
      { label: "Document Specs", value: "Live Webcam Photo + 140×60 px Sign (10–20 KB)" }
    ],
    faqs: [
      {
        question: "What is the Tier-1 exam pattern and negative marking penalty in SSC CGL 2026?",
        answer: "Tier-1 comprises 100 multiple-choice questions carrying 200 marks, scheduled for 60 minutes across four subjects: Reasoning (25Q/50M), General Awareness (25Q/50M), Quantitative Aptitude (25Q/50M), and English (25Q/50M). A penalty deduction of 0.50 marks (25%) is enforced for each incorrect answer."
      },
      {
        question: "What are the live photo webcam capture rules on ssc.gov.in?",
        answer: "SSC requires a live picture captured through the browser webcam or MySSC mobile application against a plain light background. Face features must cover 80% of the oval frame without caps, sunglasses, reading spectacles, or face-covering headwear."
      },
      {
        question: "What are the signature dimensions and file size bounds for SSC CGL?",
        answer: "The signature must measure exactly 140 pixels in width by 60 pixels in height (aspect ratio ~4.0 cm × 2.0 cm), strictly between 10.0 KB and 20.0 KB in JPG/JPEG format, written in black ballpoint ink on unruled white paper. Capital or block letters cause immediate rejection."
      },
      {
        question: "Does the Tier-1 score count towards the final SSC CGL merit list?",
        answer: "No, Tier-1 is purely qualifying in nature to shortlist candidates for Tier-2 at a 1:10 vacancy ratio. The final merit ranking is determined 100% on aggregate marks obtained in Tier-2 Paper-I, provided the candidate qualifies the Computer Knowledge Module and DEST."
      },
      {
        question: "What is the educational qualification required for SSC CGL?",
        answer: "Candidates must hold a Bachelor's Degree in any discipline from a recognized University before the prescribed cut-off date. Final-year students are eligible only if results are declared on or before the closing date."
      },
      {
        question: "What is the age limit and relaxation criteria for SSC CGL posts?",
        answer: "Age limits vary between 18–27, 18–30, and up to 32 years depending on post cadre. Standard statutory relaxations apply: OBC candidates receive +3 years, SC/ST candidates receive +5 years, and PwBD candidates receive +10 to +15 years."
      },
      {
        question: "What are the top posts available in SSC CGL 2026?",
        answer: "Key positions include Assistant Section Officer (ASO in CSS, MEA, IB), Inspector of Income Tax, Central Excise Inspector, Assistant Audit Officer (AAO), Sub-Inspector in CBI, and Tax Assistant."
      },
      {
        question: "What is the application fee and exemption criteria for SSC CGL?",
        answer: "The application fee is ₹100. All female candidates, Scheduled Castes (SC), Scheduled Tribes (ST), Persons with Benchmark Disabilities (PwBD), and Ex-Servicemen are 100% exempted from paying the fee."
      },
      {
        question: "What is the application correction window timeline and charges?",
        answer: "The correction window operates from September 27 to September 29, 2026. SSC charges ₹200 for the first modification and ₹500 for a second resubmission."
      },
      {
        question: "What is the in-hand salary for Pay Level 7 posts in SSC CGL?",
        answer: "For Pay Level 7 posts (Basic ₹44,900): In Class X metro cities, gross monthly pay is ~₹85,000, yielding net in-hand earnings of approximately ₹73,000–₹78,000 after NPS and insurance deductions."
      }
    ]
  },

  "rrb-ntpc-2026-master-document-rules-preparation-strategy": {
    metaTitle: "RRB NTPC 2026 Master Guide: Document Rules & Strategy",
    metaDescription: "Complete RRB NTPC 2026 handbook: CBT-1 marking scheme, 35x45mm photo rules, 10-20KB signature bounds & timetable. Resize railway documents online free!",
    quickFacts: [
      { label: "Conducting Body", value: "Railway Recruitment Boards (RRBs)" },
      { label: "Total Vacancies", value: "11,558+ Posts (Graduate & Undergrad)" },
      { label: "Application Last Date", value: "October 15, 2026" },
      { label: "Selection Stages", value: "CBT-1 + CBT-2 + CBAT / Typing + DV" },
      { label: "Negative Marking", value: "1/3rd (0.33 marks) per wrong answer" },
      { label: "Document Specs", value: "35×45 mm Photo (20-50 KB) + Sign (10-20 KB)" }
    ],
    faqs: [
      {
        question: "What is the CBT-1 examination pattern for RRB NTPC?",
        answer: "CBT-1 consists of 100 objective questions carrying 100 marks in 90 minutes across General Awareness (40 Qs), Mathematics (30 Qs), and Reasoning (30 Qs) with 1/3rd negative marking per incorrect answer."
      },
      {
        question: "Can an aspirant apply to more than one Railway Recruitment Board (RRB)?",
        answer: "No. Candidates can select and apply to ONLY ONE regional RRB board. Submitting applications to multiple boards leads to immediate disqualification and debarment."
      },
      {
        question: "What is the shortlisting ratio from CBT-1 to CBT-2 in RRB NTPC?",
        answer: "Candidates are shortlisted for CBT-2 at a ratio of 20 times (1:20) the community-wise vacancy count for each 7th CPC Pay Level based on their normalized percentile score in CBT-1."
      },
      {
        question: "What are the photo and signature upload requirements for RRB NTPC?",
        answer: "Color photograph (35×45 mm, 20.0 KB to 50.0 KB in JPG) against a plain light background. Signature (140×60 px, 10.0 KB to 20.0 KB in black ink) in running cursive handwriting on white paper."
      },
      {
        question: "What is the Computer Based Aptitude Test (CBAT) for Station Master?",
        answer: "CBAT comprises 5 test batteries requiring a minimum T-score of 42 marks in each battery separately. In final merit, CBAT carries 30% weightage and CBT-2 carries 70% weightage."
      },
      {
        question: "What are the typing speed criteria for RRB clerical posts?",
        answer: "Candidates must achieve a minimum speed of 30 words per minute in English OR 25 words per minute in Hindi on a computer terminal without backspace or spellcheck tools."
      },
      {
        question: "What is the medical standard required for Station Master posts?",
        answer: "Station Master requires strict Medical Standard A-2: distant vision 6/9, 6/9 without spectacles (no glasses allowed, no LASIK permitted) with full color and night vision."
      },
      {
        question: "Can 12th pass candidates apply for RRB NTPC recruitment?",
        answer: "Yes, 12th pass candidates are eligible for Undergraduate level posts (Level 2 & 3), including Junior Clerk-cum-Typist, Accounts Clerk, and Commercial-cum-Ticket Clerk."
      },
      {
        question: "How does RRB score normalization work across multi-shift exams?",
        answer: "RRB calculates normalized percentile marks based on the mean and standard deviation of raw marks across examination shifts to eliminate difficulty variance."
      },
      {
        question: "What is the monthly in-hand salary for a Station Master and Goods Guard?",
        answer: "Station Master starts at Level 6 with gross pay of ~₹68,000–₹72,000. Goods Train Manager starts at Level 5 with gross pay often exceeding ₹65,000–₹75,000 including running allowances."
      }
    ]
  },

  "upsc-csat-paper-2-master-blueprint-comprehension-hacks": {
    metaTitle: "UPSC CSAT Paper 2 Blueprint: Comprehension & Logic Hacks",
    metaDescription: "Master the 33% UPSC CSAT qualifying cutoff with proven strategies for high-accuracy reading comprehension, arithmetic problem selection & OTR document rules.",
    quickFacts: [
      { label: "Conducting Body", value: "Union Public Service Commission (UPSC)" },
      { label: "Exam Stage", value: "Civil Services Prelims Paper-II (CSAT)" },
      { label: "Qualifying Threshold", value: "33% Mandatory (66.67 Marks out of 200)" },
      { label: "Total Questions", value: "80 Questions (2.5 Marks each, 2 Hours)" },
      { label: "Negative Marking", value: "0.833 Marks (33.3%) per wrong attempt" },
      { label: "Document Specs", value: "OTR Photo (Name/Date Strip) + Sign (20-300 KB)" }
    ],
    faqs: [
      {
        question: "What is the minimum qualifying score required in UPSC CSAT Paper-II?",
        answer: "Candidates must secure a minimum of 33% marks (66.67 marks out of 200) in CSAT Paper-II to qualify Prelims. CSAT marks are not added to the cutoff merit, but failing to clear 66.67 marks disqualifies the candidate even with 150+ in GS Paper-I."
      },
      {
        question: "What is the negative marking deduction in UPSC CSAT?",
        answer: "Each question carries 2.5 marks. A negative marking penalty of 0.833 marks (33.3%) is deducted for each incorrect response. Unattempted questions carry zero penalty."
      },
      {
        question: "How many questions should a candidate safely attempt in CSAT?",
        answer: "To safely achieve 80+ marks above the 66.67 threshold, candidates should target 48 to 55 well-selected questions with an accuracy rate of at least 80%."
      },
      {
        question: "What are the high-yield topics in CSAT Reading Comprehension?",
        answer: "Key comprehension question types include Crux of the Passage, Most Logical & Rational Inference, Assumption based questions, and Practical Implications."
      },
      {
        question: "What are the UPSC OTR photo upload guidelines?",
        answer: "UPSC requires photographs taken within 10 days of application submission with candidate name and photo capture date imprinted at the bottom in square 1:1 aspect ratio (20–300 KB)."
      },
      {
        question: "What arithmetic topics carry the highest weightage in CSAT?",
        answer: "Number Systems (divisibility rules, unit digits, remainders), Permutation & Combination, Probability, Percentages, Ratio & Proportion, and Coding Logic."
      },
      {
        question: "Can non-mathematics background candidates clear UPSC CSAT?",
        answer: "Yes. By mastering Reading Comprehension (27–30 questions) and basic logical reasoning (15–18 questions), candidates can comfortably qualify without advanced mathematics."
      },
      {
        question: "Is rough work space provided in the CSAT question booklet?",
        answer: "Yes, dedicated blank pages for rough work are provided at the end of the CSAT test booklet. Candidates can use pen or pencil for calculations."
      },
      {
        question: "What are the signature upload specifications for UPSC OTR?",
        answer: "Signatures must measure 350×350 to 1000×1000 pixels (20.0 KB to 300.0 KB in JPG) penned in black ballpoint ink on clean white unruled paper."
      },
      {
        question: "What is the best mock test strategy for UPSC CSAT preparation?",
        answer: "Solve the last 10 years of official UPSC CSAT previous year question papers (2014–2024) within strict 2-hour timed conditions between 2:30 PM and 4:30 PM."
      }
    ]
  },

  "state-psc-otr-registration-photo-signature-guidelines": {
    metaTitle: "State PSC OTR Guidelines: Photo & Signature Resize Rules",
    metaDescription: "Master One-Time Registration across UPPSC, BPSC, MPSC, TNPSC & KPSC: exact photo dimensions, 10-20KB signature bounds & portal navigation. Resize free!",
    quickFacts: [
      { label: "Target Portals", value: "UPPSC, BPSC, MPSC, TNPSC, KPSC, RPSC" },
      { label: "System Type", value: "One-Time Registration (OTR) Candidate Profile" },
      { label: "Photo Standard", value: "3.5×4.5 cm (20–50 KB JPG, Light Background)" },
      { label: "Signature Standard", value: "140×60 px (10–20 KB JPG, Black Ballpoint Ink)" },
      { label: "Validity", value: "Lifetime OTR Profile for all State PSC Applications" },
      { label: "Dual Signature Rule", value: "BPSC requires both Hindi and English signatures" }
    ],
    faqs: [
      {
        question: "What is One-Time Registration (OTR) in State Public Service Commissions?",
        answer: "OTR is a unified digital profile system that stores a candidate's verified identity, educational credentials, photograph, and signature once, enabling instant 1-click applications for all future commission exams."
      },
      {
        question: "What is the exact signature dimension and file size for State PSC OTR?",
        answer: "Most State PSCs (UPPSC, MPSC, TNPSC, KPSC) mandate scanned signatures measuring 140 × 60 pixels with file size strictly between 10.0 KB and 20.0 KB in JPG/JPEG format."
      },
      {
        question: "Why does BPSC require both Hindi and English signatures in OTR?",
        answer: "The Bihar Public Service Commission mandates two separate signature uploads: one in English running script and one in Hindi Devanagari script (15–20 KB each) for bi-script verification."
      },
      {
        question: "Can I edit my photograph and signature after OTR final submission?",
        answer: "Yes, State PSCs provide profile modification windows before applying for specific notifications, though major personal changes may require OTP Aadhaar re-authentication."
      },
      {
        question: "What are the common reasons State PSC portals reject uploaded photos?",
        answer: "Photos older than 6 months, selfies, blurred portraits, dark background shadows, wearing sunglasses or caps, and file sizes exceeding 50 KB are the leading reasons for rejection."
      },
      {
        question: "What ink color is mandatory for State PSC signatures?",
        answer: "Black ballpoint ink on clean white unruled paper is strictly mandated. Signatures in blue gel ink, fountain pen, or pencil are rejected during scrutiny."
      },
      {
        question: "Is Domicile Certificate mandatory during State PSC OTR?",
        answer: "Domicile certificates are mandatory only for candidates seeking state-specific reservation benefits (OBC, SC, ST, EWS). Non-domicile candidates can register under Unreserved/General category."
      },
      {
        question: "What resolution and DPI should be used when scanning documents for OTR?",
        answer: "Scan documents at 200 DPI (dots per inch) in true color for photos and grayscale/black-and-white for signatures to maintain optimal clarity within 10–20 KB boundaries."
      },
      {
        question: "What should candidates do if OTR photo displays upside down or distorted?",
        answer: "Clear browser cache, ensure image aspect ratio matches 3.5:4.5 exactly without EXIF orientation tags, and re-upload through SignResize automated canvas normalizer."
      },
      {
        question: "How does SignResize ensure 100% OTR portal acceptance?",
        answer: "SignResize provides pre-configured presets for UPPSC, BPSC, MPSC, and TNPSC that automatically crop to exact pixels and compress strictly within commission KB limits."
      }
    ]
  },

  "ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines": {
    metaTitle: "IBPS PO & Clerk Document Guide: Photo, Sign, Thumb & Text",
    metaDescription: "Official IBPS 2026 document handbook: 140x60 sign specs, left thumb impression, exact handwritten declaration wording & photo bounds. Resize online free!",
    quickFacts: [
      { label: "Conducting Body", value: "Institute of Banking Personnel Selection (IBPS)" },
      { label: "Applicable Exams", value: "IBPS PO, IBPS Clerk, RRB Officer & Office Assistant" },
      { label: "Photo Specs", value: "200×230 px (20–50 KB JPG, White Background)" },
      { label: "Signature Specs", value: "140×60 px (10–20 KB JPG, Black Ink Only)" },
      { label: "Left Thumb Specs", value: "240×240 px (20–50 KB JPG, Blue/Black Ink)" },
      { label: "Declaration Specs", value: "800×400 px (50–100 KB JPG, Own Handwriting)" }
    ],
    faqs: [
      {
        question: "What is the exact text of the IBPS handwritten declaration?",
        answer: "The text must be handwritten in English on white paper in black ink: 'I, _______ (Name of candidate), hereby declare that all the information submitted by me in the application form is correct, true and valid. I will present the supporting documents as and when required.'"
      },
      {
        question: "Why does IBPS disqualify signatures written in capital letters?",
        answer: "A signature represents an individual's personal running cursive mark. Capital or block letters lack individual handwriting characteristics and can be easily forged, triggering instant disqualification."
      },
      {
        question: "What are the exact dimensions and file weight for the Left Thumb Impression?",
        answer: "Left Thumb Impression must measure 240 × 240 pixels (approx. 3 cm × 3 cm) with file weight strictly between 20.0 KB and 50.0 KB in JPG/JPEG format on plain white paper."
      },
      {
        question: "What ink colors are permitted for IBPS documents?",
        answer: "Black ballpoint ink is mandatory for the Signature and Handwritten Declaration. Blue or black ink stamp pad is permitted for the Left Thumb Impression."
      },
      {
        question: "Can someone else write the handwritten declaration on my behalf?",
        answer: "No. If IBPS detects that the handwritten declaration was penned by another person, the candidate's application is rejected and they may be permanently debarred."
      },
      {
        question: "What should a candidate do if their left thumb is injured or amputated?",
        answer: "The candidate may use their right thumb impression or an impression of one of the fingers of the left hand, explicitly mentioning the finger used in the application."
      },
      {
        question: "What are the photo dimensions for IBPS registration?",
        answer: "The photograph must measure 200 × 230 pixels (4.5 × 3.5 cm) with file size strictly between 20.0 KB and 50.0 KB in JPG/JPEG format against a light or white background."
      },
      {
        question: "Can I upload the declaration in Hindi or regional languages?",
        answer: "No. Under official IBPS guidelines, the declaration must be written in English only. Declarations submitted in Hindi or regional languages are treated as invalid."
      },
      {
        question: "What is the maximum file size permitted for the handwritten declaration?",
        answer: "The file size for the handwritten declaration must fall strictly between 50.0 KB and 100.0 KB in JPG or JPEG format."
      },
      {
        question: "How can I resize all 4 IBPS documents in under 2 minutes?",
        answer: "Use SignResize dedicated IBPS preset tool to crop, remove phone paper shadows, and compress all four files into their exact KB boundaries directly in your browser."
      }
    ]
  },

  "top-5-mistakes-photo-signature-rejection-govt-exams": {
    metaTitle: "Top 5 Photo & Signature Mistakes Causing Exam Rejection",
    metaDescription: "Avoid costly application rejection in SSC, UPSC & IBPS: learn the top 5 photo & signature upload errors, capital letter signature rules & safe resizing hacks.",
    quickFacts: [
      { label: "Target Exams", value: "SSC, UPSC, RRB, IBPS, State PSCs, NTA" },
      { label: "Annual Rejections", value: "Over 4.5 Lakh Applications Disqualified Annually" },
      { label: "Top Pitfall #1", value: "Signatures in ALL CAPITAL / BLOCK Letters" },
      { label: "Top Pitfall #2", value: "Spectacles Glare & Shadows in Live Web Photos" },
      { label: "Top Pitfall #3", value: "File Size Outside Strict KB Dual Boundaries" },
      { label: "Recommended Fix", value: "Client-Side Automated 140×60 px & KB Compression" }
    ],
    faqs: [
      {
        question: "What is the #1 reason government exam portals reject signatures?",
        answer: "Writing signatures in ALL CAPITAL / BLOCK letters is the single most common cause of rejection. Official commission rules explicitly mandate continuous running cursive handwriting."
      },
      {
        question: "Why are live webcam photos rejected on SSC and BPSC portals?",
        answer: "Common rejection triggers include wearing spectacles with reflection, improper frontal lighting causing shadows behind ears, and face covering less than 80% of the frame."
      },
      {
        question: "What happens if my signature file size is 9.8 KB when the limit is 10-20 KB?",
        answer: "Automated commission portal upload filters immediately block submissions outside exact limits. SignResize adjusts compression quality to land files safely in the middle (e.g. 15 KB)."
      },
      {
        question: "Why is blue gel pen or fountain pen ink rejected in signatures?",
        answer: "Gel and fountain pen ink frequently bleeds into paper fibers, causing digital scanning blur. Commissions mandate dark black ballpoint pen on unruled white paper for high contrast."
      },
      {
        question: "Can I upload a cropped selfie as my passport photo?",
        answer: "No. Selfies have wide-angle lens distortion, poor lighting, and informal backgrounds that violate passport standards, leading to rejection during document scrutiny."
      },
      {
        question: "How do dark paper shadows from smartphone photos cause rejection?",
        answer: "Taking a picture of white paper with a smartphone casts grey hand or phone shadows that scanning algorithms flag as dirty background. SignResize white-filter tool removes shadows automatically."
      },
      {
        question: "What is the UPSC 10-day-old photograph rule with name and date?",
        answer: "UPSC requires uploaded photos to be taken within 10 days of submission, with candidate full name and date of photo capture imprinted at the bottom in bold text."
      },
      {
        question: "What is the difference between aspect ratio and file size in KB?",
        answer: "Aspect ratio represents pixel dimensions (e.g. 140×60 pixels), while file size represents storage weight (e.g. 10–20 KB). Both parameters must be satisfied simultaneously."
      },
      {
        question: "Can an application rejected for photo/signature errors be corrected later?",
        answer: "Only if the commission provides an official correction window (such as SSC's 3-day correction period). If missed, rejection is permanent with zero refund."
      },
      {
        question: "How does SignResize prevent application rejections?",
        answer: "SignResize applies pre-configured official dimension templates, contrast-enhancing shadow filters, and precision KB compression directly in your browser with zero data loss."
      }
    ]
  },

  "upsc-cse-2026-preparation-roadmap-daily-study-plan": {
    metaTitle: "UPSC CSE 2026 Roadmap: Daily Study Plan & OTR Guidelines",
    metaDescription: "Complete 12-month UPSC CSE 2026 roadmap: static subject timetable, answer writing drills, CSAT qualifying hacks & OTR document rules. Read the guide free!",
    quickFacts: [
      { label: "Conducting Body", value: "Union Public Service Commission (UPSC)" },
      { label: "Target Examination", value: "Civil Services Examination (CSE) 2026" },
      { label: "Cadres Recruited", value: "IAS, IPS, IFS, IRS, Central Services Group A & B" },
      { label: "Selection Stages", value: "Prelims (GS + CSAT) + Mains (9 Papers) + Interview" },
      { label: "Daily Study Target", value: "7 to 8 Focused Hours across 4 Targeted Study Slots" },
      { label: "Document Specs", value: "UPSC OTR Photo (10-Day Recency) + Sign (20-300 KB)" }
    ],
    faqs: [
      {
        question: "How many hours of daily study are required to clear UPSC CSE 2026?",
        answer: "A focused, disciplined study routine of 7 to 8 hours daily over 12 to 14 months—divided into static syllabus, daily newspaper/PIB analysis, CSAT practice, and revision—is optimal."
      },
      {
        question: "When should an aspirant begin answer writing practice for UPSC Mains?",
        answer: "Begin answer writing after completing basic NCERTs and one round of standard static reference books (approx. 3–4 months into preparation), writing 2 quality answers daily with peer evaluation."
      },
      {
        question: "What is the UPSC One-Time Registration (OTR) photo guideline?",
        answer: "The photograph must be taken within 10 days of application submission, showing the candidate's face occupying 75% of the frame, with candidate name and photo date imprinted at the bottom."
      },
      {
        question: "How should an aspirant balance Prelims General Studies and CSAT?",
        answer: "Dedicate 5 to 6 hours daily to GS Paper-I (Polity, Economy, Modern History, Environment) and 1.5 to 2 hours daily to CSAT reading comprehension and arithmetic problem-solving."
      },
      {
        question: "What are the age limits and attempt limits for UPSC Civil Services?",
        answer: "General/EWS: 21 to 32 years (6 attempts). OBC: 21 to 35 years (9 attempts). SC/ST: 21 to 37 years (Unlimited attempts up to age cap). PwBD: up to 42 years."
      },
      {
        question: "What are the signature upload specifications for UPSC CSE?",
        answer: "Signatures must measure between 350×350 and 1000×1000 pixels (file size strictly between 20.0 KB and 300.0 KB in JPG) penned in black ballpoint ink on clean white unruled paper."
      },
      {
        question: "How should an aspirant select their Optional Subject for Mains?",
        answer: "Base optional selection on syllabus overlap with General Studies, personal academic interest, availability of authentic study material, and consistent scoring trends over the last 5 years."
      },
      {
        question: "What is the importance of solving Previous Year Questions (PYQs)?",
        answer: "Solving the last 10 years of Prelims and Mains PYQs reveals repeated core themes, UPSC question phrasing traps, and helps calibrate your static note-making."
      },
      {
        question: "Can working professionals clear UPSC CSE with a full-time job?",
        answer: "Yes. Many working professionals clear CSE by committing 4 focused hours on weekdays (2 morning + 2 evening) and 10–12 hours on weekends with high-efficiency note revision."
      },
      {
        question: "What is the starting salary and training structure for an IAS Officer?",
        answer: "An IAS Officer starts training at LBSNAA Mussoorie at Pay Level 10 (Basic ₹56,100). Adding DA, HRA, and allowances, gross monthly salary is ~₹95,000–₹1,05,000 alongside official accommodation."
      }
    ]
  }
};

console.log('Enrichment data for 7 original posts prepared.');
