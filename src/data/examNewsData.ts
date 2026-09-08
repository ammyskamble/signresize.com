export interface ExamNotificationDetails {
  advtNumber: string;
  posts: string;
  qualification: string;
  ageLimit: string;
  applicationFee: string;
  selectionProcess: string;
  photoRule: string;
  signRule: string;
  importantDates: Array<{ label: string; date: string }>;
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
    articleSlug: 'ssc-cgl-2026-notification-dates-signature-guidelines',
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
    badgeText: 'New Notification',
    toolSlug: 'rrb-signature-resize',
    articleSlug: 'mega-railway-banking-recruitment-2026-opportunities',
    officialUrl: 'https://rrbcdg.gov.in',
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
    articleSlug: 'mega-railway-banking-recruitment-2026-opportunities',
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
    articleSlug: 'upsc-cse-2026-preparation-roadmap-daily-study-plan',
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
    articleSlug: 'mega-railway-banking-recruitment-2026-opportunities',
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
    articleSlug: 'top-5-mistakes-photo-signature-rejection-govt-exams',
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
    articleSlug: 'mega-railway-banking-recruitment-2026-opportunities',
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
  }
];

/**
 * Dynamically computes status based on current date
 */
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
