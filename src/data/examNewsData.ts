// src/data/examNewsData.ts
// Live & Upcoming Government Examination Updates with Authoritative Top-10 FAQ Blog Links

export interface ExamDateMilestone {
  label: string;
  date: string;
}

export interface ExamNotificationDetails {
  advtNumber: string;
  posts: string;
  qualification: string;
  ageLimit: string;
  applicationFee: string;
  selectionProcess: string;
  photoRule: string;
  signRule: string;
  importantDates: ExamDateMilestone[];
  keyHighlights: string[];
}

export interface ExamNewsItem {
  id: string;
  examName: string;
  shortCode: string;
  authority: string;
  category: 'SSC' | 'UPSC' | 'Banking' | 'Railways' | 'Defense' | 'State PSC' | 'Teaching';
  vacancies: string;
  startDate: string; // YYYY-MM-DD
  lastDate: string;  // YYYY-MM-DD
  examDate: string;
  notificationTitle: string;
  badgeText?: string;
  toolSlug: string; // exact slug matching /[exam] route (e.g. 'ssc-signature-resize')
  articleSlug?: string; // slug matching /blog/[slug] if available
  officialUrl: string;
  isHot?: boolean;
  notificationDetails: ExamNotificationDetails;
}

export const ONGOING_EXAMS_DATA: ExamNewsItem[] = [
  {
    id: 'ssc-cgl-2026',
    examName: 'SSC CGL 2026',
    shortCode: 'SSC CGL',
    authority: 'Staff Selection Commission',
    category: 'SSC',
    vacancies: '17,727 Posts',
    startDate: '2026-08-15',
    lastDate: '2026-09-24',
    examDate: 'October – November 2026',
    notificationTitle: 'Combined Graduate Level Examination 2026 (Group B & C Posts)',
    badgeText: 'Closing Soon',
    toolSlug: 'ssc-signature-resize',
    articleSlug: 'ssc-cgl-2026-top-10-faq-aspirants-guide',
    officialUrl: 'https://ssc.gov.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'Notice No. 3/2/2026-P&P-I',
      posts: 'Assistant Section Officer (CSS, MEA, IB), Inspector (Central Excise, Income Tax, Preventive Officer), Sub-Inspector (CBI), Auditor, Tax Assistant',
      qualification: 'Bachelor’s Degree in any discipline from a recognized University',
      ageLimit: '18 to 32 Years (Post-wise; standard age relaxation for OBC/SC/ST/PwD applies)',
      applicationFee: '₹100 (Exempted for Women, SC, ST, PwD, and ESM candidates)',
      selectionProcess: 'Tier-I Computer Based Exam + Tier-II Computer Based Exam (Objective & Skill Test)',
      photoRule: 'Live webcam capture via official SSC portal with plain background, face covering 80% of frame, no caps/spectacles.',
      signRule: 'Strictly 10.0 KB to 20.0 KB JPG image (140×60 pixels). Black ink ballpoint pen on plain white sheet. BLOCK/CAPITAL letters disqualified.',
      importantDates: [
        { label: 'Online Registration Started', date: 'August 15, 2026' },
        { label: 'Last Date to Apply Online', date: 'September 24, 2026 (23:00 Hrs)' },
        { label: 'Application Correction Window', date: 'September 27 – 29, 2026' },
        { label: 'Tier-I Exam Date', date: 'October – November 2026' }
      ],
      keyHighlights: [
        'Massive 17,727 vacancies across Central Ministries and Departments.',
        'Negative marking of 0.50 marks per incorrect answer in Tier-I.',
        'Signature upload must strictly conform to 10-20 KB and 140x60 px.'
      ]
    }
  },
  {
    id: 'rrb-ntpc-2026',
    examName: 'RRB NTPC 2026',
    shortCode: 'RRB NTPC',
    authority: 'Railway Recruitment Boards',
    category: 'Railways',
    vacancies: '11,558 Posts',
    startDate: '2026-09-01',
    lastDate: '2026-10-15',
    examDate: 'December 2026 – January 2027',
    notificationTitle: 'Non-Technical Popular Categories (Graduate & Under Graduate Level)',
    badgeText: 'Exam Date & City Slip',
    toolSlug: 'rrb-signature-resize',
    articleSlug: 'rrb-ntpc-exam-date-2026-city-intimation-slip-admit-card',
    officialUrl: 'https://rrbapply.gov.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'CEN No. 05/2026',
      posts: 'Station Master, Goods Train Manager, Chief Commercial cum Ticket Supervisor, Junior Clerk cum Typist, Accounts Clerk',
      qualification: '12th (+2) Pass for Under-Graduate Level; Any Degree for Graduate Level Posts',
      ageLimit: '18 to 33 Years (UG posts); 18 to 36 Years (Graduate posts) with COVID age relaxation',
      applicationFee: '₹500 (₹400 refunded after attending CBT-1); ₹250 for SC/ST/Women (fully refunded)',
      selectionProcess: '1st Stage Computer Based Test (CBT-1) + 2nd Stage CBT-2 + Typing Skill / CBAT + Document Verification',
      photoRule: 'Color passport photograph (35mm × 45mm), 20 KB to 50 KB JPG, plain white or light grey background taken within last 3 months.',
      signRule: 'Running handwriting signature in black ink on white paper, 10 KB to 20 KB (140×60 px). Block letters prohibited.',
      importantDates: [
        { label: 'Notification Publication', date: 'September 01, 2026' },
        { label: 'Online Application Window', date: 'September 01 to October 15, 2026' },
        { label: 'Modification Window', date: 'October 16 to 25, 2026' },
        { label: 'Tentative CBT-1 Exam', date: 'December 2026' }
      ],
      keyHighlights: [
        'Zonal railway recruitment across all 21 Railway Recruitment Boards.',
        'Equal opportunity for 12th pass and graduate degree holders.',
        'Separate CBT stages for Graduate vs Under-Graduate posts.'
      ]
    }
  },
  {
    id: 'ibps-po-2026',
    examName: 'IBPS PO / MT XIV',
    shortCode: 'IBPS PO',
    authority: 'Institute of Banking Personnel Selection',
    category: 'Banking',
    vacancies: '4,455 Posts',
    startDate: '2026-08-20',
    lastDate: '2026-09-28',
    examDate: 'October 2026',
    notificationTitle: 'Probationary Officers / Management Trainees in 11 Participating Banks',
    badgeText: 'Active',
    toolSlug: 'ibps-signature-resize',
    articleSlug: 'ibps-po-2026-top-10-faq-banking-aspirants',
    officialUrl: 'https://ibps.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'CRP PO/MT-XIV 2026-27',
      posts: 'Probationary Officers (Bank of Baroda, Canara Bank, PNB, Union Bank of India, Indian Bank, etc.)',
      qualification: 'Graduation Degree in any discipline recognized by Govt. of India',
      ageLimit: '20 to 30 Years (Relaxation: 5 yrs SC/ST, 3 yrs OBC, 10 yrs PwBD)',
      applicationFee: '₹850 for General/EWS/OBC; ₹175 for SC/ST/PwBD',
      selectionProcess: 'Preliminary Examination (Online) + Main Examination (Objective + Descriptive) + Common Interview',
      photoRule: 'Passport style color picture (4.5cm × 3.5cm), 20 KB to 50 KB JPG, light-colored or white background.',
      signRule: 'Black ink pen on white paper, 10 KB to 20 KB JPG (140×60 px). Signatures in CAPITAL letters are rejected.',
      importantDates: [
        { label: 'Online Registration Commenced', date: 'August 20, 2026' },
        { label: 'Last Date for Online Fee Payment', date: 'September 28, 2026' },
        { label: 'Online Preliminary Examination', date: 'October 2026' },
        { label: 'Online Main Examination', date: 'November 2026' }
      ],
      keyHighlights: [
        'Centralized recruitment for 11 nationalized public sector banks.',
        'Requires Left Thumb Impression (10-50 KB) and Handwritten Declaration (50-100 KB).',
        'Sectional timing of 20 minutes per section in Prelims.'
      ]
    }
  },
  {
    id: 'upsc-cds-ii',
    examName: 'UPSC CDS II & NDA II 2026',
    shortCode: 'UPSC CDS / NDA',
    authority: 'Union Public Service Commission',
    category: 'Defense',
    vacancies: '850+ Posts',
    startDate: '2026-08-01',
    lastDate: '2026-09-18',
    examDate: 'November 2026',
    notificationTitle: 'Combined Defence Services & National Defence Academy Examination',
    badgeText: 'Closing Soon',
    toolSlug: 'upsc-signature-resize',
    articleSlug: 'upsc-cds-nda-2026-top-10-faq-defence-guide',
    officialUrl: 'https://upsconline.nic.in',
    isHot: false,
    notificationDetails: {
      advtNumber: 'Exam Notice No. 11/2026.CDS-II',
      posts: 'Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), Officers Training Academy (OTA)',
      qualification: 'Degree of recognized University (Engineering for AFA/INA; Any Degree for IMA/OTA)',
      ageLimit: '19 to 24 Years (Unmarried candidates as per Academy criteria)',
      applicationFee: '₹200 (Female/SC/ST candidates exempted)',
      selectionProcess: 'Written Examination + Intelligence & Personality Test (SSB 5-Day Interview) + Medical Board',
      photoRule: '350×350 pixels minimum (1:1 square), 20 KB to 300 KB JPG. Name and date printed at bottom is recommended.',
      signRule: '1:1 Square aspect ratio (350×350 to 1000×1000 px), 20 KB to 300 KB JPG with black ballpoint ink.',
      importantDates: [
        { label: 'Notification Released', date: 'August 01, 2026' },
        { label: 'Last Date for OTR Submission', date: 'September 18, 2026 (18:00 Hrs)' },
        { label: 'Admit Card Availability', date: '3 weeks before exam' },
        { label: 'Written Examination', date: 'November 2026' }
      ],
      keyHighlights: [
        'Direct Commission as Lieutenant / Sub-Lieutenant / Flying Officer in Indian Armed Forces.',
        'Strict biometric document and medical physical standards.',
        'OTR (One Time Registration) on upsconline.nic.in mandatory before filling application.'
      ]
    }
  },
  {
    id: 'sbi-clerk-2026',
    examName: 'SBI Junior Associates (Clerk) 2026',
    shortCode: 'SBI Clerk',
    authority: 'State Bank of India',
    category: 'Banking',
    vacancies: '8,700+ Posts',
    startDate: '2026-09-10',
    lastDate: '2026-10-05',
    examDate: 'November 2026',
    notificationTitle: 'Recruitment of Junior Associates (Customer Support & Sales)',
    badgeText: 'Upcoming',
    toolSlug: 'ibps-signature-resize',
    articleSlug: 'sbi-clerk-2026-top-10-faq-junior-associates',
    officialUrl: 'https://sbi.co.in/careers',
    isHot: true,
    notificationDetails: {
      advtNumber: 'CRPD/CR/2026-27/14',
      posts: 'Junior Associate (Customer Support & Sales) across 17 Circles nationwide',
      qualification: 'Graduation in any discipline from a recognized University',
      ageLimit: '20 to 28 Years (Relaxations applicable as per Govt. norms)',
      applicationFee: '₹750 for General/OBC/EWS; Nil for SC/ST/PwBD/ESM',
      selectionProcess: 'Phase-I Preliminary Exam + Phase-II Main Exam + Specified Opted Local Language Test',
      photoRule: 'Color photograph (4.5cm × 3.5cm), 20 KB to 50 KB JPG, clear front view without shadows.',
      signRule: 'Signature in black ink on white paper, 10 KB to 20 KB JPG (140×60 px). Running handwriting only.',
      importantDates: [
        { label: 'Notification Window Opens', date: 'September 10, 2026' },
        { label: 'Application Deadline', date: 'October 05, 2026' },
        { label: 'Preliminary Examination', date: 'November 2026' },
        { label: 'Main Examination', date: 'December 2026 / January 2027' }
      ],
      keyHighlights: [
        'Over 8,700 clerical vacancies in India’s largest commercial bank.',
        'No interview stage; final merit list based purely on Phase-II Main Exam marks.',
        'Local language proficiency test mandatory prior to joining.'
      ]
    }
  },
  {
    id: 'uppsc-ro-aro',
    examName: 'UPPSC Review Officer (RO / ARO) 2026',
    shortCode: 'UPPSC RO/ARO',
    authority: 'Uttar Pradesh Public Service Commission',
    category: 'State PSC',
    vacancies: '411 Posts',
    startDate: '2026-08-25',
    lastDate: '2026-09-30',
    examDate: 'December 2026',
    notificationTitle: 'Samiksha Adhikari / Sahayak Samiksha Adhikari General & Special Recruitment',
    badgeText: 'Active',
    toolSlug: 'uppsc-signature-resize',
    articleSlug: 'uppsc-ro-aro-2026-top-10-faq-aspirants',
    officialUrl: 'https://uppsc.up.nic.in',
    isHot: false,
    notificationDetails: {
      advtNumber: 'A-4/E-1/2026',
      posts: 'Review Officer (UP Secretariat, Board of Revenue, UPPSC Office), Assistant Review Officer',
      qualification: 'Bachelor’s Degree + O Level certification / Computer diploma (for ARO) + Hindi typing speed',
      ageLimit: '21 to 40 Years (Up to 45 years for UP domicile reserved categories)',
      applicationFee: '₹125 (General/OBC/EWS); ₹65 (SC/ST); ₹25 (PwD)',
      selectionProcess: 'Preliminary Examination (GS + General Hindi) + Main Examination (Descriptive Essay & Drafting)',
      photoRule: 'Combined Photo & Signature format or individual 3.5×4.5 cm photo (20-50 KB).',
      signRule: 'Clear black ink signature below photograph or separate 10-20 KB JPG file as per OTR specifications.',
      importantDates: [
        { label: 'Online Application Commenced', date: 'August 25, 2026' },
        { label: 'Last Date for Application Fee', date: 'September 30, 2026' },
        { label: 'Correction / Edit Window', date: 'October 01 to 07, 2026' },
        { label: 'Preliminary Written Exam', date: 'December 2026' }
      ],
      keyHighlights: [
        'Prestigious administrative secretariat posting in Lucknow and Prayagraj.',
        'UPPSC OTR (One Time Registration) compliance strictly enforced.',
        'Hindi translation and drafting carries high weightage in Mains.'
      ]
    }
  },
  {
    id: 'ssc-gd-constable',
    examName: 'SSC GD Constable 2026',
    shortCode: 'SSC GD',
    authority: 'Staff Selection Commission',
    category: 'SSC',
    vacancies: '39,481 Posts',
    startDate: '2026-09-05',
    lastDate: '2026-10-14',
    examDate: 'January – February 2027',
    notificationTitle: 'Constable (GD) in Central Armed Police Forces (CAPFs), SSF, Rifleman (GD) in Assam Rifles',
    badgeText: 'Mega Drive',
    toolSlug: 'ssc-signature-resize',
    articleSlug: 'ssc-gd-constable-2026-top-10-faq-complete-guide',
    officialUrl: 'https://ssc.gov.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'F.No. 3/1/2026-P&P-I',
      posts: 'General Duty Constable in BSF, CISF, CRPF, SSB, ITBP, AR, and SSF',
      qualification: 'Matriculation (10th Class Examination) passed from a recognized Board',
      ageLimit: '18 to 23 Years (Standard age relaxation for SC/ST/OBC/ESM)',
      applicationFee: '₹100 (Women/SC/ST/ESM exempted)',
      selectionProcess: 'Computer Based Examination (CBE) + Physical Standard Test (PST) + Physical Efficiency Test (PET) + Medical Exam',
      photoRule: 'Live photo captured via official SSC mobile app/webcam with clean lighting.',
      signRule: '10.0 KB to 20.0 KB JPG image (140×60 px). Black ink ballpoint pen only.',
      importantDates: [
        { label: 'Notification Out', date: 'September 05, 2026' },
        { label: 'Online Application End Date', date: 'October 14, 2026 (23:00 Hrs)' },
        { label: 'Correction Window', date: 'October 18 to 20, 2026' },
        { label: 'Computer Based Exam', date: 'January – February 2027' }
      ],
      keyHighlights: [
        'Mega nationwide recruitment drive with 39,481 paramilitary vacancies.',
        'Conducted in 13 regional languages in addition to Hindi and English.',
        'Physical Efficiency: 5 km run in 24 minutes for male candidates.'
      ]
    }
  },
  {
    id: 'maharashtra-police-constable-2026',
    examName: 'Maharashtra Police Bharti 2026',
    shortCode: 'Maha Police',
    authority: 'Maharashtra Police Recruitment Board',
    category: 'State PSC',
    vacancies: '17,471 Posts',
    startDate: '2026-09-01',
    lastDate: '2026-10-20',
    examDate: 'November – December 2026',
    notificationTitle: 'Police Constable, Driver Constable & SRPF Armed Police Recruitment 2026',
    badgeText: 'State Mega Drive',
    toolSlug: 'mpsc-signature-resize',
    articleSlug: 'maharashtra-police-bharti-2026-top-10-faq-guide',
    officialUrl: 'https://policerecruitment2024.mahait.org',
    isHot: true,
    notificationDetails: {
      advtNumber: 'Desk-2/Recruitment/2026/Notice-01',
      posts: 'Police Constable (Shipai), Driver Police Constable, SRPF Armed Constable, Railway Police',
      qualification: 'Higher Secondary Certificate (HSC / 12th Standard) passed from Maharashtra State Board',
      ageLimit: '18 to 28 Years (UR); 18 to 33 Years (Backward Classes / Reserved categories)',
      applicationFee: '₹450 (Open); ₹350 (Backward Classes / Reserved)',
      selectionProcess: 'Physical Efficiency Test (PET/PST - 50 Marks) + Written Examination (100 Marks) + Document Verification',
      photoRule: 'Recent passport photo (3.5 × 4.5 cm) on white background, 20 KB to 50 KB JPG.',
      signRule: 'Black ink signature on white paper, 10 KB to 20 KB JPG. Strictly cursive running script.',
      importantDates: [
        { label: 'Online Registration Commenced', date: 'September 01, 2026' },
        { label: 'Last Date for Online Application', date: 'October 20, 2026' },
        { label: 'Physical Endurance Test (Ground)', date: 'November 2026' },
        { label: 'Statewide Written Exam', date: 'December 2026' }
      ],
      keyHighlights: [
        'Mandatory 50% cutoff (25/50 marks) in Physical Test to qualify for 100-mark written test.',
        '1:10 shortlisting ratio for written examination.',
        'No negative marking in 100-mark written examination.'
      ]
    }
  },
  {
    id: 'ssc-chsl-2026',
    examName: 'SSC CHSL 2026',
    shortCode: 'SSC CHSL',
    authority: 'Staff Selection Commission',
    category: 'SSC',
    vacancies: '3,712 Posts',
    startDate: '2026-09-05',
    lastDate: '2026-10-18',
    examDate: 'November 2026',
    notificationTitle: 'Combined Higher Secondary (10+2) Level Examination 2026',
    badgeText: '12th Pass',
    toolSlug: 'ssc-signature-resize',
    articleSlug: 'ssc-chsl-2026-top-10-faq-aspirants-guide',
    officialUrl: 'https://ssc.gov.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'Notice No. 4/1/2026-P&P-I',
      posts: 'Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Data Entry Operator (DEO)',
      qualification: '12th Standard or equivalent from a recognized Board (Maths/Science mandatory for DEO in CAG)',
      ageLimit: '18 to 27 Years (Permissible relaxations for OBC/SC/ST/PwD/ESM)',
      applicationFee: '₹100 (Exempted for Women, SC, ST, PwD, and ESM)',
      selectionProcess: 'Tier-I Computer Based Exam (100 Qs / 200 Marks) + Tier-II Objective & Skill / Typing Test',
      photoRule: 'Live webcam capture via official SSC portal with plain background, 80% face coverage.',
      signRule: 'Strictly 10.0 KB to 20.0 KB JPG image (140×60 pixels). Black ink ballpoint pen only.',
      importantDates: [
        { label: 'Application Window Opened', date: 'September 05, 2026' },
        { label: 'Application Deadline', date: 'October 18, 2026 (23:00 Hrs)' },
        { label: 'Correction Window', date: 'October 21 – 23, 2026' },
        { label: 'Tier-I Exam Date', date: 'November 2026' }
      ],
      keyHighlights: [
        'Premier central govt recruitment for 12th pass aspirants.',
        'Tier-I is qualifying; final merit determined entirely by Tier-II Paper-I score.',
        'Mandatory typing test speed: 35 wpm in English or 30 wpm in Hindi.'
      ]
    }
  },
  {
    id: 'rrb-alp-tech-2026',
    examName: 'RRB ALP & Technician 2026',
    shortCode: 'RRB ALP',
    authority: 'Railway Recruitment Boards',
    category: 'Railways',
    vacancies: '18,799 Posts',
    startDate: '2026-09-02',
    lastDate: '2026-10-12',
    examDate: 'November – December 2026',
    notificationTitle: 'Centralised Employment Notice for Assistant Loco Pilot & Technician Cadre',
    badgeText: 'Technical',
    toolSlug: 'rrb-signature-resize',
    articleSlug: 'rrb-alp-technician-2026-top-10-faq-guide',
    officialUrl: 'https://rrbcdg.gov.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'CEN No. 01/2026 & 02/2026',
      posts: 'Assistant Loco Pilot (Level 2), Technician Grade I Signal (Level 5), Technician Grade III (Level 2)',
      qualification: 'Matriculation / 10th + ITI in specified trade OR 3-year Diploma in Mechanical/Electrical/Electronics',
      ageLimit: '18 to 33 Years (with COVID-19 3-year age relaxation)',
      applicationFee: '₹500 (₹400 refunded after attending CBT-1); ₹250 for SC/ST/Women (fully refunded)',
      selectionProcess: 'CBT-1 + CBT-2 (Part A + Part B Trade Test) + CBAT (Aptitude Test for ALP) + Document Verification',
      photoRule: 'Color passport photograph (35mm × 45mm), 20 KB to 50 KB JPG, plain white background.',
      signRule: 'Running signature in black ink, 10 KB to 20 KB (140×60 px). Block letters prohibited.',
      importantDates: [
        { label: 'Online Application Window', date: 'September 02 to October 12, 2026' },
        { label: 'Modification Window', date: 'October 13 to 22, 2026' },
        { label: 'CBT-1 Exam Window', date: 'November 2026' },
        { label: 'CBT-2 Exam Schedule', date: 'December 2026' }
      ],
      keyHighlights: [
        'Strict Medical Standard A-1 required for ALP (6/6 distant vision without glasses, no LASIK).',
        'Part-B trade qualification test is mandatory with 35% pass marks.',
        'CBAT carries 30% weightage for final ALP merit list.'
      ]
    }
  },
  {
    id: 'india-post-gds-2026',
    examName: 'India Post GDS 2026',
    shortCode: 'Post GDS',
    authority: 'Department of Posts (India Post)',
    category: 'Teaching',
    vacancies: '44,228 Posts',
    startDate: '2026-08-28',
    lastDate: '2026-10-10',
    examDate: 'Direct 10th Merit List',
    notificationTitle: 'Gramin Dak Sevaks (Branch Postmaster & Assistant Branch Postmaster) Recruitment',
    badgeText: 'No Exam (Merit)',
    toolSlug: 'ssc-signature-resize',
    articleSlug: 'india-post-gds-2026-top-10-faq-complete-guide',
    officialUrl: 'https://indiapostgdsonline.gov.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'Notification No. 17-21/2026-GDS',
      posts: 'Branch Postmaster (BPM), Assistant Branch Postmaster (ABPM), Dak Sevaks across 23 postal circles',
      qualification: 'Secondary School Examination (10th standard) pass with compulsory Mathematics and English',
      ageLimit: '18 to 40 Years (Standard statutory age relaxations for OBC/SC/ST/PwD)',
      applicationFee: '₹100 (Exempted for all female candidates, SC, ST, PwD, and Transwomen)',
      selectionProcess: '100% Automated Merit List based strictly on 10th class aggregate marks (Zero written examination)',
      photoRule: 'Recent color photograph (maximum 50 KB JPG), plain light background.',
      signRule: 'Clear signature on white paper (maximum 20 KB JPG, recommended 140×60 px).',
      importantDates: [
        { label: 'Online Application Opened', date: 'August 28, 2026' },
        { label: 'Closing Date for Submission', date: 'October 10, 2026' },
        { label: 'Correction Window', date: 'October 11 to 13, 2026' },
        { label: 'Merit List 1 Publication', date: 'Late October 2026' }
      ],
      keyHighlights: [
        'Massive 44,228 central postal vacancies with zero written examination.',
        'TRCA pay scale: ₹12,000–₹29,380 for BPM; ₹10,000–₹24,470 for ABPM/Dak Sevak.',
        'Local circle language knowledge is mandatory.'
      ]
    }
  },
  {
    id: 'up-police-constable-2026',
    examName: 'UP Police Constable & SI 2026',
    shortCode: 'UP Police',
    authority: 'UP Police Recruitment & Promotion Board (UPPRPB)',
    category: 'State PSC',
    vacancies: '60,244 Posts',
    startDate: '2026-09-01',
    lastDate: '2026-10-25',
    examDate: 'December 2026',
    notificationTitle: 'Direct Recruitment for Reserve Civil Police & Provincial Armed Constabulary (PAC)',
    badgeText: '60K+ Vacancies',
    toolSlug: 'uppsc-signature-resize',
    articleSlug: 'up-police-constable-si-2026-top-10-faq-guide',
    officialUrl: 'https://uppbpb.gov.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'PRPB:One-1(138)/2026',
      posts: 'Reserve Civil Police Constable, Provincial Armed Constabulary (PAC) Constable, Fireman',
      qualification: '10+2 (Intermediate) passed from UP Board or recognized equivalent board',
      ageLimit: '18 to 25 Years (General Male, with 3-year relaxation); 18 to 28 Years (General Female)',
      applicationFee: '₹400 for all candidate categories',
      selectionProcess: 'OMR Based Written Examination (150 Qs / 300 Marks) + DV/PST + Physical Efficiency Test (PET)',
      photoRule: '3.5 cm × 4.5 cm color photo (20-50 KB JPG), white or light grey background, no caps/glasses.',
      signRule: 'Black ink signature (10-20 KB JPG, 3.5 cm × 1.5 cm) on plain white paper.',
      importantDates: [
        { label: 'Application Window Opened', date: 'September 01, 2026' },
        { label: 'Last Date for Online Application', date: 'October 25, 2026' },
        { label: 'Fee Adjustment / Edit Window', date: 'October 26 to 28, 2026' },
        { label: 'OMR Written Examination', date: 'December 2026' }
      ],
      keyHighlights: [
        'India’s largest state police recruitment drive with 60,244 posts.',
        'Physical test: 4.8 km run in 25 minutes for male; 2.4 km in 14 minutes for female.',
        'Negative marking of 0.50 marks per incorrect attempt in 300-mark OMR exam.'
      ]
    }
  },
  {
    id: 'rbi-grade-b-2026',
    examName: 'RBI Grade B & Assistant 2026',
    shortCode: 'RBI Officer',
    authority: 'Reserve Bank of India Services Board',
    category: 'Banking',
    vacancies: '940+ Posts',
    startDate: '2026-09-08',
    lastDate: '2026-10-08',
    examDate: 'November 2026',
    notificationTitle: 'Direct Recruitment for Officers in Grade B (General, DEPR, DSIM) & Assistant Cadre',
    badgeText: 'Apex Banking',
    toolSlug: 'rbi-signature-resize',
    articleSlug: 'rbi-grade-b-assistant-2026-top-10-faq-guide',
    officialUrl: 'https://rbi.org.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'Advt No. 2A/2026-27',
      posts: 'Officers in Grade B (General), Grade B (DEPR), Grade B (DSIM), and RBI Assistants',
      qualification: 'Minimum 60% marks in Bachelor’s Degree (50% for SC/ST/PwBD) or 55% in Post-Graduation',
      ageLimit: '21 to 30 Years (M.Phil / Ph.D candidates enjoy upper age limit up to 32 and 34 years)',
      applicationFee: '₹850 for General/OBC/EWS; ₹100 for SC/ST/PwBD; Nil for RBI staff',
      selectionProcess: 'Phase-I Online Exam + Phase-II (Objective + Descriptive Keyboard Typing) + Interview',
      photoRule: '4.5 × 3.5 cm color photo (20-50 KB JPG), light or white background.',
      signRule: 'Black ink pen signature (10-20 KB JPG, 140×60 px). Capital letters not accepted.',
      importantDates: [
        { label: 'Online Application Commenced', date: 'September 08, 2026' },
        { label: 'Closing Date for Registration', date: 'October 08, 2026 (18:00 Hrs)' },
        { label: 'Phase-I Examination (General)', date: 'November 2026' },
        { label: 'Phase-II Examination (General)', date: 'December 2026' }
      ],
      keyHighlights: [
        'Apex central banking career with gross starting pay of ~₹1,16,000+ monthly.',
        'Strict 60% graduation score barrier strictly enforced across all semesters.',
        'Phase-II answers must be typed on a computer keyboard in English or Hindi.'
      ]
    }
  },
  {
    id: 'bpsc-cce-teacher-2026',
    examName: 'BPSC 70th CCE & Teacher TRE 4.0',
    shortCode: 'BPSC / TRE',
    authority: 'Bihar Public Service Commission',
    category: 'State PSC',
    vacancies: '87,000+ Posts',
    startDate: '2026-09-05',
    lastDate: '2026-10-15',
    examDate: 'November – December 2026',
    notificationTitle: '70th Integrated Combined Competitive Examination & School Teacher TRE 4.0 Recruitment',
    badgeText: 'BPSC & TRE',
    toolSlug: 'bpsc-signature-resize',
    articleSlug: 'bpsc-cce-teacher-2026-top-10-faq-guide',
    officialUrl: 'https://bpsc.bih.nic.in',
    isHot: true,
    notificationDetails: {
      advtNumber: 'Advt No. 27/2026 & 28/2026',
      posts: 'Sub-Divisional Officer (SDO), DSP, Block Education Officer, Primary & Secondary Teachers (TRE 4.0)',
      qualification: 'Graduation for CCE; D.El.Ed / B.Ed + CTET / BTET Paper 1 or 2 for Teacher TRE 4.0',
      ageLimit: '20/21/22 to 37 Years (General Male); up to 40 Years (Female/BC/EBC); up to 42 Years (SC/ST)',
      applicationFee: '₹600 for General/Other States; ₹150 for Bihar Female / SC / ST / PwD',
      selectionProcess: 'CCE: Prelims (150 Qs) + Mains (900 Marks) + Interview (120 Marks); TRE: Single-stage Objective Test',
      photoRule: 'Live webcam photograph captured on onlinebpsc.bihar.gov.in portal with clear lighting.',
      signRule: 'Separate English & Hindi signatures (10-20 KB JPG each, 220×100 px). Both mandatory.',
      importantDates: [
        { label: 'Online Application Opened', date: 'September 05, 2026' },
        { label: 'Last Date to Submit Application', date: 'October 15, 2026' },
        { label: '70th CCE Prelims Examination', date: 'November 2026' },
        { label: 'Teacher TRE 4.0 Exam', date: 'December 2026' }
      ],
      keyHighlights: [
        'Massive 87,000+ combined vacancies across administrative and school education services.',
        'Negative marking: 1/3rd (0.33 marks) deducted per wrong answer in BPSC Prelims.',
        'Dual signature upload (Hindi AND English) is strictly required on BPSC portal.'
      ]
    }
  }
];

export function getExamLiveStatus(item: ExamNewsItem): {
  status: 'closing-soon' | 'active' | 'upcoming' | 'expired';
  label: string;
  badgeClass: string;
  daysRemaining: number;
} {
  const now = new Date();
  const start = new Date(item.startDate);
  const end = new Date(item.lastDate);

  // Set time to end of day for deadline
  end.setHours(23, 59, 59, 999);

  const diffMs = end.getTime() - now.getTime();
  const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (now < start) {
    return {
      status: 'upcoming',
      label: 'Upcoming',
      badgeClass: 'bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-200 border-amber-500/40',
      daysRemaining: Math.ceil((start.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    };
  }

  if (diffMs < 0) {
    return {
      status: 'expired',
      label: 'Closed',
      badgeClass: 'bg-slate-500/15 text-slate-500 border-slate-500/30',
      daysRemaining: 0
    };
  }

  if (daysRemaining <= 5) {
    return {
      status: 'closing-soon',
      label: daysRemaining === 1 ? 'Last Day!' : `Ends in ${daysRemaining}d`,
      badgeClass: 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/30 animate-pulse font-bold',
      daysRemaining
    };
  }

  return {
    status: 'active',
    label: item.badgeText || 'Apply Now',
    badgeClass: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 border-emerald-500/40',
    daysRemaining
  };
}
