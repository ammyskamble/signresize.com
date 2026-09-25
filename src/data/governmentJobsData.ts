export interface GovernmentJob {
  id: string;
  title: string;
  shortCode: string;
  organization: string;
  category: 'Central' | 'State' | 'Banking' | 'Railways' | 'Defence' | 'PSU' | 'Teaching' | 'Police';
  state: string; // "Pan-India" or specific state name
  region: 'Pan-India' | 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East';
  vacancies: string;
  qualification: '10th Pass' | '12th Pass' | 'Graduate' | 'Post Graduate' | 'Engineering / ITI' | 'Any Degree';
  qualificationDetail: string;
  ageLimit: string;
  lastDate: string; // e.g. "2026-10-15"
  examDate?: string;
  status: 'Ongoing' | 'Upcoming' | 'Active';
  badge?: string;
  officialUrl: string;
  applicationFee: string;
  notificationSummary: string;
  keyPosts: string[];
  selectionSteps: string[];
  photoSpecs: {
    dimensions: string;
    fileSize: string;
    format: string;
    note: string;
  };
  signatureSpecs: {
    dimensions: string;
    fileSize: string;
    format: string;
    note: string;
  };
  toolPresetSlug: string; // matches [exam].astro or tool route
  toolLabel: string;
}

export interface StateRecruitmentPortal {
  state: string;
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East';
  capital: string;
  pscName: string;
  pscUrl: string;
  subordinateBoardName?: string;
  subordinateBoardUrl?: string;
  policeBoardName?: string;
  policeBoardUrl?: string;
  popularExams: string[];
  description: string;
}

export const PAN_INDIA_GOV_JOBS: GovernmentJob[] = [
  // --- Central: SSC ---
  {
    id: 'ssc-cgl-2026',
    title: 'SSC CGL 2026 (Combined Graduate Level)',
    shortCode: 'SSC CGL',
    organization: 'Staff Selection Commission (Govt of India)',
    category: 'Central',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '17,727 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Bachelor’s Degree in any discipline from a recognized University',
    ageLimit: '18 to 32 Years (Post-wise; standard OBC/SC/ST relaxation)',
    lastDate: '2026-09-24',
    examDate: 'October – November 2026',
    status: 'Ongoing',
    badge: 'Mega Recruitment',
    officialUrl: 'https://ssc.gov.in',
    applicationFee: '₹100 (Exempted for Women, SC, ST, PwD, ESM)',
    notificationSummary: 'Group B & C officer posts across Central Ministries: Income Tax Inspector, Assistant Section Officer (CSS/MEA), Central Excise Inspector, Sub-Inspector (CBI), Tax Assistant.',
    keyPosts: ['Assistant Section Officer (CSS/MEA/IB)', 'Income Tax & Central Excise Inspector', 'Sub-Inspector (CBI)', 'Tax Assistant & Auditor'],
    selectionSteps: ['Tier-I Computer Based Test (Objective)', 'Tier-II CBT + Typing Test & Data Entry', 'Document Verification & Medical Examination'],
    photoSpecs: {
      dimensions: 'Live Webcam Capture (Official Portal)',
      fileSize: 'System Auto-Capture',
      format: 'JPEG/Webcam',
      note: 'Face must cover 80% of live webcam frame with plain background. No caps, dark glasses, or masks.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 pixels (4.0 cm × 2.0 cm)',
      fileSize: '10.0 KB – 20.0 KB',
      format: 'JPG / JPEG',
      note: 'Strictly black ink ballpoint pen on white paper. Capital / BLOCK letters lead to disqualification.'
    },
    toolPresetSlug: 'ssc-signature-resize',
    toolLabel: 'Resize Photo & Sign for SSC CGL'
  },
  {
    id: 'ssc-chsl-2026',
    title: 'SSC CHSL 2026 (Combined Higher Secondary Level)',
    shortCode: 'SSC CHSL',
    organization: 'Staff Selection Commission',
    category: 'Central',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '3,712 Posts',
    qualification: '12th Pass',
    qualificationDetail: 'Class 12th (10+2) Standard from a recognized Board or equivalent',
    ageLimit: '18 to 27 Years (OBC +3 yrs, SC/ST +5 yrs)',
    lastDate: '2026-10-30',
    examDate: 'November – December 2026',
    status: 'Active',
    badge: '12th Pass Govt Job',
    officialUrl: 'https://ssc.gov.in',
    applicationFee: '₹100 (Free for Women, SC/ST/PwD)',
    notificationSummary: 'Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), and Data Entry Operator (DEO) vacancies in central government ministries.',
    keyPosts: ['Lower Division Clerk (LDC)', 'Junior Secretariat Assistant (JSA)', 'Data Entry Operator (DEO)'],
    selectionSteps: ['Tier-I Online Objective CBT', 'Tier-II CBT + Typing / Skill Test', 'Document Verification'],
    photoSpecs: {
      dimensions: 'Live webcam capture on ssc.gov.in',
      fileSize: 'Portal Auto Process',
      format: 'JPEG',
      note: 'Ensure uniform white background and clear facial visibility.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 pixels',
      fileSize: '10 KB – 20 KB',
      format: 'JPG / JPEG',
      note: 'Running handwriting in black ink on clean white background.'
    },
    toolPresetSlug: 'ssc-signature-resize',
    toolLabel: 'Resize Sign for SSC CHSL'
  },
  {
    id: 'ssc-gd-constable-2026',
    title: 'SSC GD Constable 2026 (CAPFs, SSF, Assam Rifles)',
    shortCode: 'SSC GD',
    organization: 'Staff Selection Commission / MHA',
    category: 'Central',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '39,481 Posts',
    qualification: '10th Pass',
    qualificationDetail: 'Matriculation (10th Class) Pass from recognized Board',
    ageLimit: '18 to 23 Years (Age relaxations applicable)',
    lastDate: '2026-10-14',
    examDate: 'January – February 2027',
    status: 'Ongoing',
    badge: 'Massive 39,000+ Posts',
    officialUrl: 'https://ssc.gov.in',
    applicationFee: '₹100 (Exempted for Women & Reserved categories)',
    notificationSummary: 'General Duty Constable posts across BSF, CISF, CRPF, SSB, ITBP, AR, and SSF under Ministry of Home Affairs.',
    keyPosts: ['Constable (GD) in BSF, CISF, CRPF', 'Rifleman (GD) in Assam Rifles', 'Constable in ITBP & SSB'],
    selectionSteps: ['Computer Based Examination (CBE)', 'Physical Standard Test (PST) & Physical Efficiency Test (PET)', 'Detailed Medical Examination (DME)'],
    photoSpecs: {
      dimensions: 'Live capture via SSC App / Web portal',
      fileSize: 'Automatic',
      format: 'JPEG',
      note: 'Proper lighting without shadows.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB to 20 KB',
      format: 'JPG',
      note: 'Black ballpoint pen. High contrast scan.'
    },
    toolPresetSlug: 'ssc-signature-resize',
    toolLabel: 'Resize Sign for SSC GD'
  },

  // --- Central: Railways (RRB) ---
  {
    id: 'rrb-ntpc-2026',
    title: 'RRB NTPC 2026 (Graduate & Under Graduate Posts)',
    shortCode: 'RRB NTPC',
    organization: 'Railway Recruitment Boards (Ministry of Railways)',
    category: 'Railways',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '11,558 Posts',
    qualification: 'Graduate',
    qualificationDetail: '12th Pass for Undergraduate Level posts; Bachelor Degree for Graduate Level posts',
    ageLimit: '18 to 33 Yrs (UG Level); 18 to 36 Yrs (Graduate Level)',
    lastDate: '2026-10-15',
    examDate: 'December 2026 – January 2027',
    status: 'Ongoing',
    badge: 'Exam Date & City Slip 2026',
    officialUrl: 'https://rrbapply.gov.in',
    applicationFee: '₹500 (₹400 refunded after CBT-1); ₹250 for SC/ST/Women (fully refunded)',
    notificationSummary: 'Station Master, Goods Train Manager, Chief Commercial cum Ticket Supervisor, Junior Clerk cum Typist, Accounts Clerk in Indian Railways zones.',
    keyPosts: ['Station Master', 'Goods Train Manager (Goods Guard)', 'Commercial cum Ticket Clerk', 'Junior Clerk cum Typist'],
    selectionSteps: ['1st Stage CBT (Screening)', '2nd Stage CBT (Merit)', 'Computer Based Aptitude Test (CBAT) / Typing Test', 'Document Verification & Medical Exam'],
    photoSpecs: {
      dimensions: '35 mm × 45 mm (Passport Size)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Color photograph on plain white or light background taken within last 3 months.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 pixels',
      fileSize: '10 KB – 20 KB',
      format: 'JPG / JPEG',
      note: 'Running handwriting in black ink on white paper. Capital letters disqualified.'
    },
    toolPresetSlug: 'rrb-signature-resize',
    toolLabel: 'Resize Photo & Sign for RRB NTPC'
  },
  {
    id: 'rrb-alp-tech-2026',
    title: 'RRB Assistant Loco Pilot (ALP) & Technician 2026',
    shortCode: 'RRB ALP',
    organization: 'Railway Recruitment Boards',
    category: 'Railways',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '18,799 Posts',
    qualification: 'Engineering / ITI',
    qualificationDetail: 'Matriculation/10th Pass PLUS ITI in approved trades or Diploma / Degree in Mechanical/Electrical/Electronics Engineering',
    ageLimit: '18 to 33 Years',
    lastDate: '2026-11-10',
    examDate: 'November 2026 – January 2027',
    status: 'Active',
    badge: 'Technical Railways',
    officialUrl: 'https://rrbapply.gov.in',
    applicationFee: '₹500 (₹400 refundable after CBT-1); ₹250 for SC/ST/Ex-SM/Women',
    notificationSummary: 'Pilot and Technician opportunities operating passenger and freight railway locomotives across all railway zones.',
    keyPosts: ['Assistant Loco Pilot (ALP)', 'Technician Grade-I Signal', 'Technician Grade-III Electrical/Mechanical'],
    selectionSteps: ['CBT Stage 1', 'CBT Stage 2 (Part A & B)', 'Computer Based Aptitude Test (CBAT)', 'Document Verification'],
    photoSpecs: {
      dimensions: '35 mm × 45 mm (320 × 400 px approx)',
      fileSize: '30 KB – 70 KB',
      format: 'JPG / JPEG',
      note: 'Clear face, neutral expression, white background.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Black ink, running signature.'
    },
    toolPresetSlug: 'rrb-signature-resize',
    toolLabel: 'Resize Sign for RRB ALP'
  },

  // --- Central: UPSC ---
  {
    id: 'upsc-cse-2026',
    title: 'UPSC Civil Services Examination (CSE) 2026',
    shortCode: 'UPSC CSE',
    organization: 'Union Public Service Commission',
    category: 'Central',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '1,056 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Bachelor’s Degree in any discipline from an authorized University',
    ageLimit: '21 to 32 Years (6 attempts for General; relaxed for OBC/SC/ST)',
    lastDate: '2027-02-15',
    examDate: 'Prelims May 2027 | Mains September 2027',
    status: 'Upcoming',
    badge: 'Premier Service',
    officialUrl: 'https://upsconline.nic.in',
    applicationFee: '₹100 (Exempted for Female, SC, ST, PwBD)',
    notificationSummary: 'Recruitment to Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS), IRS, and Group A/B central cadres.',
    keyPosts: ['Indian Administrative Service (IAS)', 'Indian Police Service (IPS)', 'Indian Foreign Service (IFS)', 'Indian Revenue Service (IRS)'],
    selectionSteps: ['Preliminary Examination (Objective)', 'Main Examination (Written 9 Papers)', 'Personality Test (Interview)'],
    photoSpecs: {
      dimensions: '350 × 350 pixels (Aspect Ratio 1:1)',
      fileSize: '20 KB – 300 KB',
      format: 'JPG / JPEG',
      note: 'Candidate face must cover 3/4th (75%) of the photo with name and date of photo stamped.'
    },
    signatureSpecs: {
      dimensions: '350 × 350 pixels (1:1)',
      fileSize: '20 KB – 300 KB',
      format: 'JPG / JPEG',
      note: 'Signature in black ballpoint pen on plain white paper.'
    },
    toolPresetSlug: 'upsc-signature-resize',
    toolLabel: 'Resize Photo & Sign for UPSC OTR'
  },
  {
    id: 'upsc-cds-nda-2026',
    title: 'UPSC Combined Defence Services (CDS) & NDA 2026',
    shortCode: 'UPSC CDS/NDA',
    organization: 'Union Public Service Commission',
    category: 'Defence',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '850 Posts',
    qualification: '12th Pass',
    qualificationDetail: '12th Class Pass for NDA; Graduation for CDS (IMA, INA, AFA, OTA)',
    ageLimit: '16.5 to 19.5 Yrs (NDA); 19 to 25 Yrs (CDS)',
    lastDate: '2026-11-28',
    examDate: 'NDA III Feb 2027 | CDS I March 2027',
    status: 'Upcoming',
    badge: 'Commissioned Officer',
    officialUrl: 'https://upsconline.nic.in',
    applicationFee: '₹100 / ₹200 (Free for Women & SC/ST)',
    notificationSummary: 'Officer entry into Indian Army, Navy, and Air Force academies leading to permanent/short service commission.',
    keyPosts: ['Lieutenant (Indian Army)', 'Sub-Lieutenant (Indian Navy)', 'Flying Officer (Indian Air Force)'],
    selectionSteps: ['UPSC Written Examination', 'SSB Interview (5-Day Stage I & II)', 'Class 1 Medical Board Examination'],
    photoSpecs: {
      dimensions: '350 × 350 pixels',
      fileSize: '20 KB to 300 KB',
      format: 'JPG',
      note: 'Square format on white background.'
    },
    signatureSpecs: {
      dimensions: '350 × 350 pixels',
      fileSize: '20 KB to 300 KB',
      format: 'JPG',
      note: 'Black ink signature scan.'
    },
    toolPresetSlug: 'upsc-signature-resize',
    toolLabel: 'Resize for UPSC CDS/NDA'
  },

  // --- Central: Banking & Financial ---
  {
    id: 'ibps-po-clerk-2026',
    title: 'IBPS PO & Clerk CRP XIV 2026 (Public Sector Banks)',
    shortCode: 'IBPS PO/Clerk',
    organization: 'Institute of Banking Personnel Selection',
    category: 'Banking',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '10,150 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Graduation degree in any discipline from recognized university',
    ageLimit: '20 to 30 Years (PO); 20 to 28 Years (Clerk)',
    lastDate: '2026-10-15',
    examDate: 'Prelims November 2026 | Mains December 2026',
    status: 'Ongoing',
    badge: 'Banking Cadre',
    officialUrl: 'https://ibps.in',
    applicationFee: '₹850 (₹175 for SC/ST/PwBD)',
    notificationSummary: 'Probationary Officers and Clerks across 11 participating Public Sector Banks including PNB, Bank of Baroda, Canara Bank, Union Bank.',
    keyPosts: ['Probationary Officer (PO / Management Trainee)', 'Customer Associate (Clerk)', 'Specialist Officer (IT, Agri, Law)'],
    selectionSteps: ['Preliminary Online Exam', 'Mains Online Examination', 'Common Interview (for PO only)', 'Provisional Bank Allocation'],
    photoSpecs: {
      dimensions: '200 × 230 pixels (4.5 cm × 3.5 cm)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Passport photo with light/white background. Red-eye corrected.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 pixels',
      fileSize: '10 KB – 20 KB',
      format: 'JPG / JPEG',
      note: 'Black ink pen on white paper. Capital letters strictly not allowed. Left thumb impression: 20-50 KB.'
    },
    toolPresetSlug: 'ibps-signature-resize',
    toolLabel: 'Resize Photo & Sign for IBPS'
  },
  {
    id: 'sbi-po-clerk-2026',
    title: 'SBI PO & Junior Associates 2026',
    shortCode: 'SBI Recruitment',
    organization: 'State Bank of India',
    category: 'Banking',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '12,500 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Any Graduate degree from recognized Indian university',
    ageLimit: '21 to 30 Years (PO); 20 to 28 Years (Clerk)',
    lastDate: '2026-11-20',
    examDate: 'December 2026 – January 2027',
    status: 'Upcoming',
    badge: 'SBI Mega Drive',
    officialUrl: 'https://sbi.co.in/web/careers',
    applicationFee: '₹750 (Nil for SC/ST/PwBD)',
    notificationSummary: 'India’s premier public lender hiring Probationary Officers and Clerical Junior Associates nationwide.',
    keyPosts: ['SBI Probationary Officer', 'Junior Associate (Customer Support & Sales)'],
    selectionSteps: ['Phase I Preliminary Exam', 'Phase II Main Exam', 'Phase III Psychometric Test, Group Exercise & Interview'],
    photoSpecs: {
      dimensions: '200 × 230 px',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Recent passport photo.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Black ink on white paper.'
    },
    toolPresetSlug: 'ibps-signature-resize',
    toolLabel: 'Resize for SBI PO/Clerk'
  },
  {
    id: 'rbi-grade-b-assistant-2026',
    title: 'RBI Grade B Officers & Assistant 2026',
    shortCode: 'RBI Officers',
    organization: 'Reserve Bank of India Services Board',
    category: 'Banking',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '450 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Minimum 60% marks in Bachelor Degree (50% for SC/ST/PwBD) or Post Graduate',
    ageLimit: '21 to 30 Years',
    lastDate: '2026-11-05',
    examDate: 'November – December 2026',
    status: 'Upcoming',
    badge: 'High Prestige & Pay',
    officialUrl: 'https://opportunities.rbi.org.in',
    applicationFee: '₹850 (₹100 for SC/ST/PwBD)',
    notificationSummary: 'Central Banking management officer grade in General, DEPR, and DSIM cadres.',
    keyPosts: ['Officers in Grade B (General)', 'Officers in Grade B (DEPR / DSIM)', 'RBI Assistant'],
    selectionSteps: ['Phase-I Online Exam', 'Phase-II Descriptive & Objective Exam', 'Interview Stage'],
    photoSpecs: {
      dimensions: '200 × 230 pixels',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Clear face, light background.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 pixels',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Black ink, no capital letters.'
    },
    toolPresetSlug: 'rbi-signature-resize',
    toolLabel: 'Resize for RBI Grade B'
  },

  // --- Central: Postal & Defence ---
  {
    id: 'india-post-gds-2026',
    title: 'India Post GDS 2026 (Gramin Dak Sevak - All Circles)',
    shortCode: 'India Post GDS',
    organization: 'Department of Posts (Ministry of Communications)',
    category: 'Central',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '44,228 Posts',
    qualification: '10th Pass',
    qualificationDetail: '10th standard pass certificate with Mathematics and English as compulsory subjects; Local language proficiency',
    ageLimit: '18 to 40 Years (OBC +3 yrs, SC/ST +5 yrs)',
    lastDate: '2026-10-28',
    examDate: 'No Written Exam (Merit Based on 10th Marks)',
    status: 'Ongoing',
    badge: 'Direct Merit (44K+ Posts)',
    officialUrl: 'https://indiapostgdsonline.gov.in',
    applicationFee: '₹100 (Exempted for Female, SC, ST, PwD, Transwomen)',
    notificationSummary: 'Branch Postmaster (BPM) and Assistant Branch Postmaster (ABPM) / Dak Sevak appointments across 23 postal circles.',
    keyPosts: ['Branch Postmaster (BPM)', 'Assistant Branch Postmaster (ABPM)', 'Dak Sevak'],
    selectionSteps: ['System Generated Merit List based on 10th Marks', 'Physical Document Verification at Head Post Office', 'Medical Fitness Confirmation'],
    photoSpecs: {
      dimensions: '200 × 230 pixels (Approx)',
      fileSize: 'Strictly Up to 50 KB',
      format: 'JPG / JPEG',
      note: 'Recent color passport photo.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 pixels',
      fileSize: 'Strictly Up to 20 KB',
      format: 'JPG / JPEG',
      note: 'Clear signature on white background.'
    },
    toolPresetSlug: 'india-post-gds-photo-resize',
    toolLabel: 'Resize for India Post GDS'
  },
  {
    id: 'iaf-afcat-agniveer-2026',
    title: 'Indian Air Force AFCAT & Agniveervayu 2026',
    shortCode: 'IAF Recruitment',
    organization: 'Indian Air Force (Ministry of Defence)',
    category: 'Defence',
    state: 'Pan-India',
    region: 'Pan-India',
    vacancies: '3,500 Posts',
    qualification: '12th Pass',
    qualificationDetail: '12th with Maths & Physics (Agniveer) / Degree with Physics & Maths at 10+2 or BE/B.Tech (AFCAT)',
    ageLimit: '17.5 to 21 Yrs (Agniveer); 20 to 26 Yrs (AFCAT)',
    lastDate: '2026-11-15',
    examDate: 'December 2026 – January 2027',
    status: 'Upcoming',
    badge: 'Aviation Wings',
    officialUrl: 'https://afcat.cdac.in',
    applicationFee: '₹550 (AFCAT) / ₹250 (Agniveer)',
    notificationSummary: 'Flying Branch, Ground Duty (Technical & Non-Technical) Officers & Agniveervayu intake.',
    keyPosts: ['Flying Officer (Pilot)', 'Technical Officer (Aeronautical Engg)', 'Agniveervayu (Airman)'],
    selectionSteps: ['Online Written Test', 'AFSB Interview (AFCAT) / Phase-II Physical & Adaptability (Agniveer)', 'Medical Examination'],
    photoSpecs: {
      dimensions: 'Passport Size (35 mm × 45 mm)',
      fileSize: '10 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Candidate holding a black slate with name and date of photo written in chalk.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 50 KB',
      format: 'JPG',
      note: 'Signature scan on white paper.'
    },
    toolPresetSlug: 'afcat-signature-resize',
    toolLabel: 'Resize for IAF AFCAT / Agniveer'
  },

  // --- STATE LEVEL GOV JOBS (North India) ---
  {
    id: 'uppsc-pcs-2026',
    title: 'UPPSC Combined State / Upper Subordinate Services (PCS) 2026',
    shortCode: 'UPPSC PCS',
    organization: 'Uttar Pradesh Public Service Commission',
    category: 'State',
    state: 'Uttar Pradesh',
    region: 'North',
    vacancies: '620 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Bachelor’s Degree in any discipline from recognized University in India',
    ageLimit: '21 to 40 Years (Relaxation up to 45 yrs for UP SC/ST/OBC)',
    lastDate: '2026-10-20',
    examDate: 'Prelims December 2026 | Mains March 2027',
    status: 'Ongoing',
    badge: 'UP State Group A/B',
    officialUrl: 'https://uppsc.up.nic.in',
    applicationFee: '₹125 (₹65 for SC/ST, ₹25 for PwD)',
    notificationSummary: 'SDM (Deputy Collector), DSP (Deputy SP), Tehsildar, Sub Registrar, and Commercial Tax Officers across Uttar Pradesh districts.',
    keyPosts: ['Deputy Collector (SDM)', 'Deputy Superintendent of Police (DSP)', 'Block Development Officer (BDO)', 'Naib Tehsildar'],
    selectionSteps: ['Preliminary Examination (GS Paper I & CSAT)', 'Main Written Exam (Conventional)', 'Personal Interview'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm (200 × 230 px)',
      fileSize: '15 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Clear front face without head covering. Recent photo.'
    },
    signatureSpecs: {
      dimensions: '3.5 cm × 1.5 cm (140 × 60 px)',
      fileSize: '5 KB – 30 KB',
      format: 'JPG / JPEG',
      note: 'Signature with black ink on white paper. No initials only.'
    },
    toolPresetSlug: 'uppsc-signature-resize',
    toolLabel: 'Resize for UPPSC PCS'
  },
  {
    id: 'upsssc-pet-lekhpal-2026',
    title: 'UPSSSC PET & Rajasva Lekhpal 2026',
    shortCode: 'UPSSSC Lekhpal',
    organization: 'Uttar Pradesh Subordinate Services Selection Commission',
    category: 'State',
    state: 'Uttar Pradesh',
    region: 'North',
    vacancies: '8,085 Posts',
    qualification: '12th Pass',
    qualificationDetail: 'Intermediate (12th Pass) + Valid UPSSSC PET Scorecard',
    ageLimit: '18 to 40 Years',
    lastDate: '2026-10-25',
    examDate: 'November 2026',
    status: 'Active',
    badge: 'UP Revenue Dept',
    officialUrl: 'https://upsssc.gov.in',
    applicationFee: '₹25 (Shortlisting Fee) / Mains Fee as applicable',
    notificationSummary: 'Revenue revenue inspector and village revenue clerk (Lekhpal) postings in rural and urban tehsils of UP.',
    keyPosts: ['Rajasva Lekhpal', 'Junior Assistant', 'Village Development Officer (VDO)'],
    selectionSteps: ['Preliminary Eligibility Test (PET)', 'Main Subject Examination', 'Document Verification'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Passport photo with plain background.'
    },
    signatureSpecs: {
      dimensions: '3.5 cm × 1.5 cm',
      fileSize: '10 KB – 30 KB',
      format: 'JPG',
      note: 'Candidate signature in Hindi and English as prescribed.'
    },
    toolPresetSlug: 'uppsc-signature-resize',
    toolLabel: 'Resize for UPSSSC'
  },
  {
    id: 'up-police-constable-si-2026',
    title: 'UP Police Constable & Sub-Inspector Recruitment 2026',
    shortCode: 'UP Police Bharti',
    organization: 'UP Police Recruitment and Promotion Board (UPPRPB)',
    category: 'Police',
    state: 'Uttar Pradesh',
    region: 'North',
    vacancies: '60,244 Posts',
    qualification: '12th Pass',
    qualificationDetail: '12th Pass for Constable; Graduation for Sub-Inspector',
    ageLimit: '18 to 25 Years (Constable with age relaxation); 21 to 28 Years (SI)',
    lastDate: '2026-10-31',
    examDate: 'Exam November – December 2026',
    status: 'Ongoing',
    badge: 'Massive Police Bharti',
    officialUrl: 'https://uppbpb.gov.in',
    applicationFee: '₹400 for all candidates',
    notificationSummary: 'Mega law enforcement recruitment drive for Civil Police Constable, PAC, and Sub-Inspectors across Uttar Pradesh.',
    keyPosts: ['Police Constable (Civil)', 'Constable PAC', 'Sub-Inspector (Civil Police)'],
    selectionSteps: ['Written Examination (OMR/CBT)', 'Physical Standard Test (PST) & Document Verification', 'Physical Efficiency Test (PET Run: 4.8 km in 25 mins)'],
    photoSpecs: {
      dimensions: '35 mm × 45 mm (200 × 230 px)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'White or light grey background.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '5 KB – 20 KB',
      format: 'JPG',
      note: 'Black ink signature.'
    },
    toolPresetSlug: 'up-police-signature-resize',
    toolLabel: 'Resize for UP Police'
  },
  {
    id: 'rpsc-ras-2026',
    title: 'RPSC RAS / RTS Combined Competitive Exam 2026',
    shortCode: 'RPSC RAS',
    organization: 'Rajasthan Public Service Commission',
    category: 'State',
    state: 'Rajasthan',
    region: 'North',
    vacancies: '733 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Degree of a recognized University in India',
    ageLimit: '21 to 40 Years (Relaxation for Rajasthan reserved categories)',
    lastDate: '2026-10-25',
    examDate: 'Prelims December 2026 | Mains February 2027',
    status: 'Ongoing',
    badge: 'Rajasthan Administrative',
    officialUrl: 'https://rpsc.rajasthan.gov.in',
    applicationFee: '₹600 (General/Creamy Layer OBC); ₹400 for SC/ST/OBC-NCL',
    notificationSummary: 'Rajasthan Administrative Service (RAS), Rajasthan Police Service (RPS), Rajasthan Accounts Service officers.',
    keyPosts: ['RAS Executive Officer', 'RPS Deputy SP', 'Rajasthan Accounts Service Officer', 'Tehsildar Service'],
    selectionSteps: ['Preliminary Exam (Objective 200 Marks)', 'Main Written Examination (Descriptive 4 Papers)', 'Personality and Viva-Voce Test'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm (240 × 320 px)',
      fileSize: '50 KB – 100 KB',
      format: 'JPG / JPEG',
      note: 'Color photograph with white background.'
    },
    signatureSpecs: {
      dimensions: '7.0 cm × 2.0 cm (280 × 80 px)',
      fileSize: '10 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Sign in blue/black ink inside prescribed box.'
    },
    toolPresetSlug: 'rpsc-signature-resize',
    toolLabel: 'Resize for RPSC RAS'
  },
  {
    id: 'dsssb-delhi-2026',
    title: 'DSSSB Delhi Teaching & Non-Teaching Recruitment 2026',
    shortCode: 'DSSSB Delhi',
    organization: 'Delhi Subordinate Services Selection Board',
    category: 'State',
    state: 'Delhi (NCT)',
    region: 'North',
    vacancies: '4,198 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Degree / B.Ed / CTET for Teaching posts; 12th/Degree for Assistant posts',
    ageLimit: '18 to 30 Years (Post-specific)',
    lastDate: '2026-10-10',
    examDate: 'November 2026 – January 2027',
    status: 'Ongoing',
    badge: 'Delhi Govt',
    officialUrl: 'https://dsssb.delhi.gov.in',
    applicationFee: '₹100 (Exempted for Women, SC, ST, PwD, ESM)',
    notificationSummary: 'TGT, PGT, Special Educator, Junior Judicial Assistant, and Stenographer roles in Govt of NCT of Delhi.',
    keyPosts: ['Trained Graduate Teacher (TGT)', 'Post Graduate Teacher (PGT)', 'Junior Assistant & Steno'],
    selectionSteps: ['One Tier / Two Tier Written Examination', 'Skill Test / Typing Test (where applicable)', 'Document Verification'],
    photoSpecs: {
      dimensions: 'Postcard Size: 5 × 7 inches (or 40 KB – 100 KB)',
      fileSize: '40 KB – 100 KB',
      format: 'JPG',
      note: 'Clear face, white background.'
    },
    signatureSpecs: {
      dimensions: '140 × 110 px',
      fileSize: '10 KB – 40 KB',
      format: 'JPG',
      note: 'Black ink running signature. Right & Left thumb impression also required.'
    },
    toolPresetSlug: 'dsssb-signature-resize',
    toolLabel: 'Resize for DSSSB Delhi'
  },
  {
    id: 'hssc-cet-police-2026',
    title: 'Haryana HSSC Police Constable & CET Group C/D 2026',
    shortCode: 'HSSC Haryana',
    organization: 'Haryana Staff Selection Commission',
    category: 'Police',
    state: 'Haryana',
    region: 'North',
    vacancies: '6,000 Posts',
    qualification: '12th Pass',
    qualificationDetail: '10+2 Pass with Hindi/Sanskrit up to Matriculation level + HSSC CET Score',
    ageLimit: '18 to 25 Years (With state age relaxation)',
    lastDate: '2026-11-10',
    examDate: 'December 2026',
    status: 'Upcoming',
    badge: 'Haryana Police',
    officialUrl: 'https://hssc.gov.in',
    applicationFee: 'No Application Fee for CET qualified applicants',
    notificationSummary: 'Male and Female Constable positions in Haryana Police Department.',
    keyPosts: ['Male Constable (General Duty)', 'Female Constable (General Duty)'],
    selectionSteps: ['Common Eligibility Test (CET) Shortlist', 'Physical Measurement Test (PMT) & PET Run', 'Knowledge Test (80 Marks)'],
    photoSpecs: {
      dimensions: 'Passport Size (200 × 230 px)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Recent photo with date.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Clear signature.'
    },
    toolPresetSlug: 'ssc-signature-resize',
    toolLabel: 'Resize for Haryana HSSC'
  },

  // --- STATE LEVEL GOV JOBS (Eastern India) ---
  {
    id: 'bpsc-cce-teacher-2026',
    title: 'BPSC 70th / 71st CCE & TRE 4.0 Teacher Recruitment 2026',
    shortCode: 'BPSC Bihar',
    organization: 'Bihar Public Service Commission',
    category: 'State',
    state: 'Bihar',
    region: 'East',
    vacancies: '25,000+ Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Graduation for CCE; B.Ed / D.El.Ed + CTET/STET for Teacher Recruitment (TRE)',
    ageLimit: '20 to 37 Years (Male General); Up to 40 yrs for Female/OBC, 42 yrs for SC/ST',
    lastDate: '2026-10-18',
    examDate: 'November – December 2026',
    status: 'Ongoing',
    badge: 'Mega Bihar Drive',
    officialUrl: 'https://bpsc.bih.nic.in',
    applicationFee: '₹600 (₹150 for Bihar Female, SC, ST, PwD)',
    notificationSummary: 'Bihar Administrative Service (BAS), DSP, Revenue Officer in CCE, plus primary and secondary school teachers across Bihar districts.',
    keyPosts: ['Sub-Divisional Officer (SDO)', 'Deputy Superintendent of Police (DSP)', 'Revenue Officer', 'Primary & High School Teacher'],
    selectionSteps: ['BPSC Preliminary Examination (150 Marks)', 'Main Written Exam', 'Interview (for Administrative posts)'],
    photoSpecs: {
      dimensions: 'Live webcam capture on BPSC portal + uploaded photo',
      fileSize: 'Under 50 KB',
      format: 'JPG / JPEG',
      note: 'Both English and Hindi signatures are required on Bihar portals.'
    },
    signatureSpecs: {
      dimensions: '220 × 100 pixels',
      fileSize: '15 KB – 25 KB',
      format: 'JPG / JPEG',
      note: 'Separate signatures in English and Hindi required.'
    },
    toolPresetSlug: 'bpsc-signature-resize',
    toolLabel: 'Resize Photo & Sign for BPSC'
  },
  {
    id: 'bssc-cgl-inter-2026',
    title: 'BSSC 2nd Inter Level & 4th CGL Recruitment 2026',
    shortCode: 'BSSC Bihar',
    organization: 'Bihar Staff Selection Commission',
    category: 'State',
    state: 'Bihar',
    region: 'East',
    vacancies: '12,199 Posts',
    qualification: '12th Pass',
    qualificationDetail: 'Intermediate (12th Pass) for Inter level; Graduation for CGL posts',
    ageLimit: '18 to 37 Years (Relaxed for reserved)',
    lastDate: '2026-09-30',
    examDate: 'October – November 2026',
    status: 'Active',
    badge: 'Clerical & Revenue',
    officialUrl: 'https://bssc.bihar.gov.in',
    applicationFee: '₹540 (₹135 for SC/ST/PwD/Bihar Female)',
    notificationSummary: 'Revenue Staff (Rajasva Karamchari), Panchayat Secretary, File Clerk, and typist vacancies.',
    keyPosts: ['Rajasva Karamchari (Revenue Staff)', 'Panchayat Secretary', 'Lower Division Clerk (LDC)'],
    selectionSteps: ['Preliminary Objective Exam', 'Main Written Exam', 'Typing & Computer Proficiency Test'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Clear front photo.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Hindi & English signatures.'
    },
    toolPresetSlug: 'bpsc-signature-resize',
    toolLabel: 'Resize for BSSC Bihar'
  },
  {
    id: 'wbpsc-wbcs-police-2026',
    title: 'West Bengal WBCS & WBP Police Constable/SI 2026',
    shortCode: 'WBPSC / WBP',
    organization: 'West Bengal Public Service Commission & Police Recruitment Board',
    category: 'State',
    state: 'West Bengal',
    region: 'East',
    vacancies: '11,749 Posts',
    qualification: '10th Pass',
    qualificationDetail: 'Madhyamik (10th) for Constable; Graduate for WBCS & SI; Ability to read/write Bengali',
    ageLimit: '18 to 30 Years (Constable); 21 to 36 Years (WBCS)',
    lastDate: '2026-11-08',
    examDate: 'December 2026 – January 2027',
    status: 'Upcoming',
    badge: 'West Bengal Direct',
    officialUrl: 'https://psc.wb.gov.in',
    applicationFee: '₹170 (Constable) / ₹210 (WBCS) with SC/ST exemption',
    notificationSummary: 'West Bengal Civil Service (Executive) and Police Constables in Kolkata and West Bengal Police.',
    keyPosts: ['WBCS (Exe) Officers', 'West Bengal Police Constable', 'Police Sub-Inspector'],
    selectionSteps: ['Preliminary Written Test', 'PMT & PET (for Police)', 'Final Written Exam & Interview'],
    photoSpecs: {
      dimensions: '138 × 177 pixels (3.5 cm × 4.5 cm)',
      fileSize: '10 KB – 50 KB',
      format: 'JPG',
      note: 'White background, face 70% of frame.'
    },
    signatureSpecs: {
      dimensions: '350 × 90 pixels',
      fileSize: '5 KB – 20 KB',
      format: 'JPG',
      note: 'Full running signature.'
    },
    toolPresetSlug: 'wbpsc-signature-resize',
    toolLabel: 'Resize for WBPSC & WBP'
  },
  {
    id: 'osssc-ri-amin-2026',
    title: 'Odisha OSSSC CRE (RI, ARI, Amin) & OPSC OAS 2026',
    shortCode: 'Odisha Govt',
    organization: 'Odisha Subordinate Staff Selection Commission & OPSC',
    category: 'State',
    state: 'Odisha',
    region: 'East',
    vacancies: '3,028 Posts',
    qualification: '12th Pass',
    qualificationDetail: 'Higher Secondary (12th) / Diploma for Amin; Degree for RI & OAS; Odia language proficiency',
    ageLimit: '21 to 38 Years (Age relaxation applicable)',
    lastDate: '2026-10-22',
    examDate: 'November – December 2026',
    status: 'Ongoing',
    badge: 'Odisha Revenue',
    officialUrl: 'https://osssc.gov.in',
    applicationFee: 'Nil (Govt of Odisha waived examination fee)',
    notificationSummary: 'Revenue Inspector (RI), Assistant Revenue Inspector (ARI), Amin, and Odisha Administrative Service (OAS) officers.',
    keyPosts: ['Revenue Inspector (RI)', 'Assistant Revenue Inspector (ARI)', 'Amin', 'OAS Group A'],
    selectionSteps: ['Preliminary Examination', 'Main Written Exam', 'Practical Skill Test in Basic Computer Skills'],
    photoSpecs: {
      dimensions: '200 × 230 px',
      fileSize: '20 KB – 100 KB',
      format: 'JPG / JPEG',
      note: 'Color photograph.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '20 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Black ink signature.'
    },
    toolPresetSlug: 'osssc-signature-resize',
    toolLabel: 'Resize for Odisha OSSSC'
  },

  // --- STATE LEVEL GOV JOBS (Western & Central India) ---
  {
    id: 'mpsc-group-b-c-2026',
    title: 'MPSC State Services & Combined Group B & C 2026',
    shortCode: 'MPSC Maharashtra',
    organization: 'Maharashtra Public Service Commission',
    category: 'State',
    state: 'Maharashtra',
    region: 'West',
    vacancies: '1,560 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Graduate degree from recognized university + Marathi language proficiency',
    ageLimit: '19 to 38 Years (General); 43 Years for Reserved',
    lastDate: '2026-10-30',
    examDate: 'January 3, 2027 (Prelims; Rescheduled)',
    status: 'Ongoing',
    badge: 'Maharashtra Group A/B/C',
    officialUrl: 'https://mpsc.gov.in',
    applicationFee: '₹394 (Group B/C); ₹719 (State Service Open); ₹444 for Reserved',
    notificationSummary: 'Deputy Collector, DySP, Tehsildar, State Tax Inspector (STI), Police Sub-Inspector (PSI), and ASO positions.',
    keyPosts: ['Police Sub-Inspector (PSI)', 'State Tax Inspector (STI)', 'Assistant Section Officer (ASO)', 'Deputy Collector'],
    selectionSteps: ['Combined Preliminary Exam', 'Independent Main Examinations', 'Physical Test (for PSI) & Interview'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm (Minimum 300 DPI)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Clean background, front view.'
    },
    signatureSpecs: {
      dimensions: '3.5 cm × 1.5 cm',
      fileSize: '5 KB – 20 KB',
      format: 'JPG / JPEG',
      note: 'Black ink signature on white paper.'
    },
    toolPresetSlug: 'mpsc-signature-resize',
    toolLabel: 'Resize Photo & Sign for MPSC'
  },
  {
    id: 'maharashtra-police-bharti-2026',
    title: 'Maharashtra Police Constable Bharti 2026',
    shortCode: 'Maha Police',
    organization: 'Maharashtra State Police',
    category: 'Police',
    state: 'Maharashtra',
    region: 'West',
    vacancies: '17,471 Posts',
    qualification: '12th Pass',
    qualificationDetail: '12th (HSC) passed from Maharashtra Board or equivalent',
    ageLimit: '18 to 28 Years (Up to 33 yrs for backward classes)',
    lastDate: '2026-11-12',
    examDate: 'Physical Trials December 2026 | Written Exam January 2027',
    status: 'Upcoming',
    badge: 'Mega Police Bharti',
    officialUrl: 'https://mahapolice.gov.in',
    applicationFee: '₹450 (Open Category); ₹350 for Backward Classes',
    notificationSummary: 'Police Constable, Police Constable Driver, and SRPF Armed Police Constable across Maharashtra Commissionerates and SP offices.',
    keyPosts: ['Police Constable', 'Police Driver Constable', 'SRPF Armed Police Constable', 'Jail Constable (Karagruh)'],
    selectionSteps: ['Physical Efficiency Test (PET - 50 Marks)', 'Written Examination (100 Marks)', 'Document Verification & Medical'],
    photoSpecs: {
      dimensions: '160 × 212 pixels',
      fileSize: '5 KB – 20 KB',
      format: 'JPG',
      note: 'Clear face, light background.'
    },
    signatureSpecs: {
      dimensions: '256 × 64 px',
      fileSize: '5 KB – 20 KB',
      format: 'JPG',
      note: 'Black ink running handwriting.'
    },
    toolPresetSlug: 'maharashtra-police-signature-resize',
    toolLabel: 'Resize for Maha Police'
  },
  {
    id: 'gpsc-gsssb-gujarat-2026',
    title: 'Gujarat GPSC Class 1 & 2 / GSSSB CCE Group A & B 2026',
    shortCode: 'Gujarat Govt',
    organization: 'Gujarat Public Service Commission & GSSSB',
    category: 'State',
    state: 'Gujarat',
    region: 'West',
    vacancies: '5,554 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Bachelor Degree from recognized university + Gujarati language knowledge',
    ageLimit: '20 to 36 Years (Class 1/2); 20 to 35 Years (GSSSB CCE)',
    lastDate: '2026-10-18',
    examDate: 'November – December 2026',
    status: 'Ongoing',
    badge: 'Gujarat State Cadre',
    officialUrl: 'https://gpsc-ojas.gujarat.gov.in',
    applicationFee: '₹100 (General Category); Exempted for SC/ST/SEBC/EWS/Women',
    notificationSummary: 'Gujarat Administrative Service, Gujarat Police Service, Mamlatdar, Senior Clerk, and Head Clerk posts.',
    keyPosts: ['Deputy Collector / Mamlatdar', 'Section Officer (Sachivalaya)', 'Head Clerk & Senior Clerk'],
    selectionSteps: ['Preliminary Screening Test', 'Main Examination (Descriptive)', 'Personal Interview'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm (Approx 200 × 230 px)',
      fileSize: '10 KB – 20 KB (Strict OJAS limiter)',
      format: 'JPG / JPEG',
      note: 'Strictly maximum 20 KB on Gujarat OJAS system!'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '5 KB – 15 KB',
      format: 'JPG / JPEG',
      note: 'Black ink signature.'
    },
    toolPresetSlug: 'gpsc-signature-resize',
    toolLabel: 'Resize for Gujarat OJAS'
  },
  {
    id: 'mppsc-mpesb-vyapam-2026',
    title: 'MPPSC State Service Exam & MPESB (Vyapam) Group 1-5 2026',
    shortCode: 'Madhya Pradesh Govt',
    organization: 'Madhya Pradesh Public Service Commission & MPESB',
    category: 'State',
    state: 'Madhya Pradesh',
    region: 'Central',
    vacancies: '7,800+ Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Graduation Degree for MPPSC; 10th/12th/Diploma/Degree for MPESB',
    ageLimit: '21 to 40 Years (MP residents reserved categories get +5 yrs)',
    lastDate: '2026-10-05',
    examDate: 'November – December 2026',
    status: 'Ongoing',
    badge: 'MP State Service',
    officialUrl: 'https://mppsc.mp.gov.in',
    applicationFee: '₹500 (General/Outside MP); ₹250 for MP SC/ST/OBC/EWS',
    notificationSummary: 'State Administrative Service (Deputy Collector), DSP, Commercial Tax Officer, and Sub-Engineers in MP govt.',
    keyPosts: ['Deputy Collector', 'Deputy Superintendent of Police (DSP)', 'Naib Tehsildar', 'Sub-Engineer & Patwari'],
    selectionSteps: ['Preliminary Examination (GS & CSAT)', 'Main Written Exam', 'Personality Interview'],
    photoSpecs: {
      dimensions: '200 × 230 px',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Recent photo with name & date.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Sign on white paper.'
    },
    toolPresetSlug: 'mppsc-signature-resize',
    toolLabel: 'Resize for MPPSC / Vyapam'
  },

  // --- STATE LEVEL GOV JOBS (Southern India) ---
  {
    id: 'tnpsc-group-4-2-1-2026',
    title: 'TNPSC Group 1, Group 2/2A, and Group 4 & VAO 2026',
    shortCode: 'TNPSC Tamil Nadu',
    organization: 'Tamil Nadu Public Service Commission',
    category: 'State',
    state: 'Tamil Nadu',
    region: 'South',
    vacancies: '10,890 Posts',
    qualification: '10th Pass',
    qualificationDetail: '10th Pass (SSLC) for Group 4 & VAO; Degree for Group 1 & Group 2; Tamil language eligibility test',
    ageLimit: '18 to 32 Years (Group 4 minimum 21 for VAO; No upper limit for certain reserved categories)',
    lastDate: '2026-10-06',
    examDate: 'November 1, 2026 (Prelims); Mains January 2027',
    status: 'Ongoing',
    badge: 'Tamil Nadu Mega Drive',
    officialUrl: 'https://tnpsc.gov.in',
    applicationFee: '₹150 (One Time Registration) + ₹100 Exam Fee (Fee exemptions applicable)',
    notificationSummary: 'Village Administrative Officer (VAO), Junior Assistant, Typist, Bill Collector, Sub-Registrar, Municipal Commissioner in Tamil Nadu.',
    keyPosts: ['Village Administrative Officer (VAO)', 'Junior Assistant & Typist', 'Deputy Collector (Group 1)', 'Sub-Registrar (Group 2)'],
    selectionSteps: ['Single Stage Written Exam (for Group 4)', 'Prelims + Mains + Interview (for Group 1 & 2)', 'Tamil Eligibility Qualifying Paper'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm (200 × 230 px)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Face occupies 75% of frame. Name and Date of photo must be printed at the bottom.'
    },
    signatureSpecs: {
      dimensions: '3.5 cm × 1.5 cm (140 × 60 px)',
      fileSize: '10 KB – 20 KB',
      format: 'JPG / JPEG',
      note: 'Sign in blue or black ballpoint pen.'
    },
    toolPresetSlug: 'tnpsc-signature-resize',
    toolLabel: 'Resize Photo & Sign for TNPSC'
  },
  {
    id: 'kpsc-kas-kea-karnataka-2026',
    title: 'Karnataka KPSC Gazetted Probationers (KAS) & KEA 2026',
    shortCode: 'KPSC Karnataka',
    organization: 'Karnataka Public Service Commission & KEA',
    category: 'State',
    state: 'Karnataka',
    region: 'South',
    vacancies: '3,840 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Bachelor Degree from recognized university + Kannada language paper eligibility',
    ageLimit: '21 to 38 Years (General); 41 Yrs (Category 2A/2B/3A/3B); 43 Yrs (SC/ST/Cat-1)',
    lastDate: '2026-10-15',
    examDate: 'December 2026',
    status: 'Ongoing',
    badge: 'Karnataka State Cadre',
    officialUrl: 'https://kpsc.kar.nic.in',
    applicationFee: '₹600 (General); ₹300 (Cat 2A/2B/3A/3B); ₹50 for SC/ST',
    notificationSummary: 'Assistant Commissioner (KAS), Deputy Superintendent of Police (DySP), Commercial Tax Officer, and Assistant Director in Karnataka govt.',
    keyPosts: ['Assistant Commissioner (KAS Group A)', 'Deputy Superintendent of Police (DySP)', 'Tahsildar (Grade-2)', 'First Division Assistant (FDA)'],
    selectionSteps: ['Preliminary Examination (Paper I & II)', 'Main Written Examination (7 Papers)', 'Personality Interview'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm (200 × 230 px)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Recent photo with plain background.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Black ink signature.'
    },
    toolPresetSlug: 'kpsc-signature-resize',
    toolLabel: 'Resize for Karnataka KPSC'
  },
  {
    id: 'tgpsc-tslprb-telangana-2026',
    title: 'Telangana TGPSC Group 1, 2, 3, 4 & Police SI/Constable 2026',
    shortCode: 'TGPSC Telangana',
    organization: 'Telangana Public Service Commission & TSLPRB',
    category: 'State',
    state: 'Telangana',
    region: 'South',
    vacancies: '15,200+ Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Degree for Group 1, 2, 3 & Police SI; Intermediate/Degree for Group 4',
    ageLimit: '18 to 46 Years (Telangana govt extended upper age limit)',
    lastDate: '2026-10-17',
    examDate: 'November – December 2026',
    status: 'Ongoing',
    badge: 'Telangana Mega Drive',
    officialUrl: 'https://tspsc.gov.in',
    applicationFee: '₹200 (Application) + ₹120 (Exam Fee, exempted for unemployed)',
    notificationSummary: 'RDO, DSP, Commercial Tax Officer, Municipal Commissioner, Mandal Planning Officer, and Telangana State Police personnel.',
    keyPosts: ['Revenue Divisional Officer (RDO)', 'Deputy Superintendent of Police (DSP)', 'Junior Assistant & Typist', 'Police Sub-Inspector'],
    selectionSteps: ['Preliminary Screening Test', 'Main Examination', 'Document Verification & Certificate Check'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm',
      fileSize: 'Up to 50 KB',
      format: 'JPG',
      note: 'White background, sharp image.'
    },
    signatureSpecs: {
      dimensions: '3.5 cm × 1.5 cm',
      fileSize: 'Up to 30 KB',
      format: 'JPG',
      note: 'Black ballpoint pen signature.'
    },
    toolPresetSlug: 'tspsc-signature-resize',
    toolLabel: 'Resize for Telangana TGPSC'
  },
  {
    id: 'appsc-group-1-2-andhra-2026',
    title: 'Andhra Pradesh APPSC Group 1, Group 2 & Police SI 2026',
    shortCode: 'APPSC Andhra',
    organization: 'Andhra Pradesh Public Service Commission',
    category: 'State',
    state: 'Andhra Pradesh',
    region: 'South',
    vacancies: '4,210 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Bachelor Degree from recognized university',
    ageLimit: '18 to 42 Years (Standard age relaxation for reserved categories)',
    lastDate: '2026-11-05',
    examDate: 'December 2026 – January 2027',
    status: 'Upcoming',
    badge: 'AP State Cadre',
    officialUrl: 'https://psc.ap.gov.in',
    applicationFee: '₹250 (Processing) + ₹120 (Exam Fee, exempted for SC/ST/BC)',
    notificationSummary: 'Deputy Collector, DSP, Assistant Commercial Tax Officer (ACTO), Deputy Tehsildar, Sub-Registrar across Andhra Pradesh districts.',
    keyPosts: ['Deputy Collector', 'Deputy SP (Civil)', 'Deputy Tehsildar', 'Assistant Section Officer (ASO)'],
    selectionSteps: ['Preliminary Screening Test (Objective)', 'Mains Written Examination', 'Computer Proficiency Test (CPT)'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm',
      fileSize: 'Under 50 KB',
      format: 'JPG',
      note: 'Recent passport photo.'
    },
    signatureSpecs: {
      dimensions: '3.5 cm × 1.5 cm',
      fileSize: 'Under 30 KB',
      format: 'JPG',
      note: 'Clear signature.'
    },
    toolPresetSlug: 'appsc-signature-resize',
    toolLabel: 'Resize for APPSC'
  },
  {
    id: 'kerala-psc-thulasi-2026',
    title: 'Kerala PSC KAS, Secretariat Assistant & LDC 2026',
    shortCode: 'Kerala PSC',
    organization: 'Kerala Public Service Commission',
    category: 'State',
    state: 'Kerala',
    region: 'South',
    vacancies: '6,400+ Posts',
    qualification: '10th Pass',
    qualificationDetail: 'SSLC (10th) for Lower Division Clerk (LDC); Degree for Secretariat Assistant and KAS',
    ageLimit: '18 to 36 Years (Standard OBC/SC/ST relaxation via Thulasi)',
    lastDate: '2026-10-16',
    examDate: 'OMR / Online Examinations (Rolling Calendar)',
    status: 'Ongoing',
    badge: 'Kerala Thulasi Portal',
    officialUrl: 'https://thulasi.psc.kerala.gov.in',
    applicationFee: 'Nil (No application fee for Kerala PSC applicants)',
    notificationSummary: 'Kerala Administrative Service (KAS), Secretariat Assistant, Police Constable, and Lower Division Clerk (LDC) district-wise appointments.',
    keyPosts: ['KAS Officer (Junior Time Scale)', 'Secretariat Assistant', 'Lower Division Clerk (LDC)', 'Civil Police Officer (CPO)'],
    selectionSteps: ['Common Preliminary Eligibility Examination', 'Main Subject-Specific Exam', 'Physical Measurement / Practical (where applicable)'],
    photoSpecs: {
      dimensions: '150 × 200 pixels (Strict Thulasi standard)',
      fileSize: 'Strictly Up to 30 KB',
      format: 'JPG',
      note: 'Name of candidate and date of photograph stamped in black font with white box at bottom.'
    },
    signatureSpecs: {
      dimensions: '150 × 100 pixels',
      fileSize: 'Strictly Up to 30 KB',
      format: 'JPG',
      note: 'Signature on white paper.'
    },
    toolPresetSlug: 'kerala-psc-photo-resize',
    toolLabel: 'Resize for Kerala PSC Thulasi'
  },

  // --- STATE LEVEL GOV JOBS (North-East & Others) ---
  {
    id: 'assam-adre-apsc-2026',
    title: 'Assam ADRE Grade 3 & 4 (SLRC) & APSC CCE 2026',
    shortCode: 'Assam Govt',
    organization: 'Assam State Level Recruitment Commission & APSC',
    category: 'State',
    state: 'Assam',
    region: 'North-East',
    vacancies: '13,850 Posts',
    qualification: '10th Pass',
    qualificationDetail: '10th/12th for Grade 4 & 3; Bachelor’s Degree for APSC CCE; Assamese / Local language proficiency',
    ageLimit: '18 to 40 Years (Relaxation up to 45 yrs for SC/ST)',
    lastDate: '2026-10-25',
    examDate: 'November – December 2026',
    status: 'Ongoing',
    badge: 'Assam Direct Mega Drive',
    officialUrl: 'https://slrcg3.sebaonline.org',
    applicationFee: 'Nil for ADRE; ₹297.20 for APSC CCE',
    notificationSummary: 'Direct Recruitment for Grade 3 (Junior Assistant, Field Assistant, Typist) & Grade 4 (Peon, Chowkidar), plus ACS/APS officers.',
    keyPosts: ['Assam Civil Service (ACS)', 'Assam Police Service (APS)', 'Junior Assistant (Grade-3)', 'Field Assistant (Grade-4)'],
    selectionSteps: ['Written Examination (MCQ Based)', 'Skill Test (Computer / Driving / Stenography)', 'Document Verification'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm (200 × 230 px)',
      fileSize: '20 KB – 50 KB',
      format: 'JPG / JPEG',
      note: 'Color photograph.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG / JPEG',
      note: 'Sign with black ballpoint pen.'
    },
    toolPresetSlug: 'apsc-signature-resize',
    toolLabel: 'Resize for Assam ADRE & APSC'
  },
  {
    id: 'jkssb-jkpsc-2026',
    title: 'Jammu & Kashmir JKSSB Panchayat Secretary & JKPSC CCE 2026',
    shortCode: 'JKSSB / JKPSC',
    organization: 'J&K Services Selection Board & Public Service Commission',
    category: 'State',
    state: 'Jammu & Kashmir',
    region: 'North',
    vacancies: '3,200 Posts',
    qualification: 'Graduate',
    qualificationDetail: 'Graduation from recognized university + J&K Domicile Certificate',
    ageLimit: '18 to 40 Years (OM); 43 Years for RBA/SC/ST/ALC',
    lastDate: '2026-11-01',
    examDate: 'December 2026 – January 2027',
    status: 'Upcoming',
    badge: 'J&K Govt',
    officialUrl: 'https://jkssb.nic.in',
    applicationFee: '₹500 (₹400 for reserved categories)',
    notificationSummary: 'Junior Assistant, Panchayat Secretary (VLW), Police Sub-Inspector, and J&K Combined Competitive Exam.',
    keyPosts: ['Junior Assistant', 'Panchayat Secretary (VLW)', 'Police Sub-Inspector', 'Junior Scale KAS'],
    selectionSteps: ['Written Exam (Objective Type)', 'Type Test on Computer Keyboard', 'Document Verification'],
    photoSpecs: {
      dimensions: '3.5 cm × 4.5 cm',
      fileSize: '20 KB – 50 KB',
      format: 'JPG',
      note: 'Recent color photo.'
    },
    signatureSpecs: {
      dimensions: '140 × 60 px',
      fileSize: '10 KB – 20 KB',
      format: 'JPG',
      note: 'Running hand signature.'
    },
    toolPresetSlug: 'ssc-signature-resize',
    toolLabel: 'Resize for JKSSB'
  }
];

// Master list of all 28 Indian States + 8 Union Territories Official Recruitment Portals
export const ALL_INDIAN_STATES_PORTALS: StateRecruitmentPortal[] = [
  // Northern Region
  {
    state: 'Uttar Pradesh',
    region: 'North',
    capital: 'Lucknow',
    pscName: 'UPPSC (Uttar Pradesh Public Service Commission)',
    pscUrl: 'https://uppsc.up.nic.in',
    subordinateBoardName: 'UPSSSC (Subordinate Services Selection Commission)',
    subordinateBoardUrl: 'https://upsssc.gov.in',
    policeBoardName: 'UPPRPB (UP Police Recruitment & Promotion Board)',
    policeBoardUrl: 'https://uppbpb.gov.in',
    popularExams: ['UP PCS', 'UP RO/ARO', 'UPSSSC PET', 'Lekhpal', 'UP Police Constable', 'UP Police SI'],
    description: 'Largest state recruitment hub in India with major annual drives for PCS officers, Lekhpals, and civil police personnel.'
  },
  {
    state: 'Delhi (NCT)',
    region: 'North',
    capital: 'New Delhi',
    pscName: 'UPSC (Union Public Service Commission - NCT Cadre)',
    pscUrl: 'https://upsc.gov.in',
    subordinateBoardName: 'DSSSB (Delhi Subordinate Services Selection Board)',
    subordinateBoardUrl: 'https://dsssb.delhi.gov.in',
    policeBoardName: 'Delhi Police Recruitment (via SSC CPO & SSC Delhi Police)',
    policeBoardUrl: 'https://delhipolice.gov.in',
    popularExams: ['DSSSB TGT/PGT', 'DSSSB Junior Assistant', 'Delhi Police Constable', 'Delhi Police Head Constable'],
    description: 'Central capital recruitment covering teachers, judicial clerks, municipal staff, and metropolitan police.'
  },
  {
    state: 'Rajasthan',
    region: 'North',
    capital: 'Jaipur',
    pscName: 'RPSC (Rajasthan Public Service Commission)',
    pscUrl: 'https://rpsc.rajasthan.gov.in',
    subordinateBoardName: 'RSMSSB / RSSB (Rajasthan Staff Selection Board)',
    subordinateBoardUrl: 'https://rsmssb.rajasthan.gov.in',
    policeBoardName: 'Rajasthan Police Recruitment Cell',
    policeBoardUrl: 'https://police.rajasthan.gov.in',
    popularExams: ['RPSC RAS/RTS', 'Rajasthan CET', 'Patwari', 'VDO (Gram Sevak)', 'Rajasthan Police Constable', 'Grade 1/2/3 Teacher'],
    description: 'Premier recruitment board for administrative officers, panchayat samitis, teachers (REET), and state police.'
  },
  {
    state: 'Haryana',
    region: 'North',
    capital: 'Chandigarh',
    pscName: 'HPSC (Haryana Public Service Commission)',
    pscUrl: 'https://hpsc.gov.in',
    subordinateBoardName: 'HSSC (Haryana Staff Selection Commission)',
    subordinateBoardUrl: 'https://hssc.gov.in',
    policeBoardName: 'HSSC Police Recruitment Wing',
    policeBoardUrl: 'https://hssc.gov.in',
    popularExams: ['HCS (Haryana Civil Services)', 'HSSC CET Group C', 'HSSC CET Group D', 'Haryana Police Constable'],
    description: 'Centralized recruitment through Common Eligibility Test (CET) for thousands of clerical, technical, and uniformed posts.'
  },
  {
    state: 'Punjab',
    region: 'North',
    capital: 'Chandigarh',
    pscName: 'PPSC (Punjab Public Service Commission)',
    pscUrl: 'https://ppsc.gov.in',
    subordinateBoardName: 'PSSSB (Punjab Subordinate Services Selection Board)',
    subordinateBoardUrl: 'https://sssb.punjab.gov.in',
    policeBoardName: 'Punjab Police Recruitment Portal',
    policeBoardUrl: 'https://punjabpolice.gov.in',
    popularExams: ['Punjab Civil Services', 'Patwari', 'Senior Assistant', 'Punjab Police Head Constable & Sub-Inspector'],
    description: 'Conducts recruitment for state civil services, police departments, excise inspectors, and canal patwaris.'
  },
  {
    state: 'Uttarakhand',
    region: 'North',
    capital: 'Dehradun',
    pscName: 'UKPSC (Uttarakhand Public Service Commission)',
    pscUrl: 'https://psc.uk.gov.in',
    subordinateBoardName: 'UKSSSC (Uttarakhand Subordinate Services Selection Commission)',
    subordinateBoardUrl: 'https://sssc.uk.gov.in',
    policeBoardName: 'Uttarakhand Police Headquarters',
    policeBoardUrl: 'https://uttarakhandpolice.uk.gov.in',
    popularExams: ['UKPSC Combined State Civil/Upper Subordinate', 'UKPSC Forest Guard', 'UKSSSC VDO', 'Uttarakhand Police Constable'],
    description: 'Hiring authority for hill-state administration, forest department, revenue officials, and state police.'
  },
  {
    state: 'Himachal Pradesh',
    region: 'North',
    capital: 'Shimla',
    pscName: 'HPPSC (Himachal Pradesh Public Service Commission)',
    pscUrl: 'https://hppsc.hp.gov.in',
    subordinateBoardName: 'HPPSC (Subordinate Class-III Examination Wing)',
    subordinateBoardUrl: 'https://hppsc.hp.gov.in',
    policeBoardName: 'Himachal Pradesh Police Recruitment Cell',
    policeBoardUrl: 'https://citizenportal.hppolice.gov.in',
    popularExams: ['HPAS (Himachal Pradesh Administrative Service)', 'HP Naib Tehsildar', 'HP Police Constable', 'JOA (IT)'],
    description: 'State service examinations and Class-III subordinate clerical recruitment in Himachal Pradesh.'
  },
  {
    state: 'Jammu & Kashmir',
    region: 'North',
    capital: 'Srinagar / Jammu',
    pscName: 'JKPSC (Jammu & Kashmir Public Service Commission)',
    pscUrl: 'https://jkpsc.nic.in',
    subordinateBoardName: 'JKSSB (J&K Services Selection Board)',
    subordinateBoardUrl: 'https://jkssb.nic.in',
    policeBoardName: 'JK Police Recruitment Board',
    policeBoardUrl: 'https://jkpolice.gov.in',
    popularExams: ['JKPSC CCE (KAS)', 'JKSSB Panchayat Secretary (VLW)', 'JKSSB Junior Assistant', 'JK Police SI'],
    description: 'Premier bodies administering gazetted civil services, school education recruitment, and subordinate cadres.'
  },
  {
    state: 'Ladakh (UT)',
    region: 'North',
    capital: 'Leh',
    pscName: 'SSC Selection Posts (Ladakh Region / Administration)',
    pscUrl: 'https://ssc.gov.in',
    subordinateBoardName: 'LAHDC Leh & Kargil District Selection Boards',
    subordinateBoardUrl: 'https://leh.nic.in',
    policeBoardName: 'Ladakh Police Recruitment Cell',
    policeBoardUrl: 'https://police.ladakh.gov.in',
    popularExams: ['SSC Ladakh Selection Posts', 'District Cadre Assistants', 'Ladakh Police Constable'],
    description: 'Special administrative recruitment handled jointly by Staff Selection Commission and district councils.'
  },

  // Western & Central Region
  {
    state: 'Maharashtra',
    region: 'West',
    capital: 'Mumbai',
    pscName: 'MPSC (Maharashtra Public Service Commission)',
    pscUrl: 'https://mpsc.gov.in',
    subordinateBoardName: 'Mahapariksha / District Selection Committees',
    subordinateBoardUrl: 'https://mpsc.gov.in',
    policeBoardName: 'Maharashtra Police Recruitment Board',
    policeBoardUrl: 'https://mahapolice.gov.in',
    popularExams: ['MPSC State Services', 'MPSC Combined Group B & C (PSI, STI, ASO)', 'Maharashtra Police Bharti', 'Talathi Bharti'],
    description: 'Massive recruitment ecosystem for state civil services, police force, revenue talathis, and municipal corporations.'
  },
  {
    state: 'Gujarat',
    region: 'West',
    capital: 'Gandhinagar',
    pscName: 'GPSC (Gujarat Public Service Commission)',
    pscUrl: 'https://gpsc.gujarat.gov.in',
    subordinateBoardName: 'GSSSB (Gujarat Subordinate Service Selection Board)',
    subordinateBoardUrl: 'https://gsssb.gujarat.gov.in',
    policeBoardName: 'LRB (Lokrakshak Recruitment Board Gujarat)',
    policeBoardUrl: 'https://lrbgujarat2021.in',
    popularExams: ['GPSC Class 1 & 2', 'GSSSB CCE (Head Clerk, Senior Clerk)', 'Gujarat Police Lokrakshak & PSI', 'Talati Mantri'],
    description: 'State recruitment through the unified Gujarat OJAS portal for gazetted officers, secretariat staff, and law enforcement.'
  },
  {
    state: 'Madhya Pradesh',
    region: 'Central',
    capital: 'Bhopal',
    pscName: 'MPPSC (Madhya Pradesh Public Service Commission)',
    pscUrl: 'https://mppsc.mp.gov.in',
    subordinateBoardName: 'MPESB (Madhya Pradesh Employees Selection Board - Vyapam)',
    subordinateBoardUrl: 'https://esb.mp.gov.in',
    policeBoardName: 'MP Police Headquarters / MPESB',
    policeBoardUrl: 'https://mppolice.gov.in',
    popularExams: ['MPPSC State Services', 'MPESB Police Constable', 'MP Patwari', 'MP Sub-Engineer', 'Vanrakshak (Forest Guard)'],
    description: 'Extensive competitive testing portal conducting combined recruitment exams for provincial civil and technical services.'
  },
  {
    state: 'Chhattisgarh',
    region: 'Central',
    capital: 'Raipur',
    pscName: 'CGPSC (Chhattisgarh Public Service Commission)',
    pscUrl: 'https://psc.cg.gov.in',
    subordinateBoardName: 'CG Vyapam (Chhattisgarh Professional Examination Board)',
    subordinateBoardUrl: 'https://vyapam.cgstate.gov.in',
    policeBoardName: 'Chhattisgarh Police Recruitment Board',
    policeBoardUrl: 'https://cgpolice.gov.in',
    popularExams: ['CGPSC State Services', 'CG Vyapam Patwari', 'CG Police Constable / SI', 'Hostel Warden (Chhatrawas Adhikshak)'],
    description: 'State agency for state civil services, mining inspectors, school education teachers, and armed police forces.'
  },
  {
    state: 'Goa',
    region: 'West',
    capital: 'Panaji',
    pscName: 'GPSC (Goa Public Service Commission)',
    pscUrl: 'https://gpsc.goa.gov.in',
    subordinateBoardName: 'Goa Staff Selection Commission (GSSC)',
    subordinateBoardUrl: 'https://gssc.goa.gov.in',
    policeBoardName: 'Goa Police Department',
    policeBoardUrl: 'https://goapolice.gov.in',
    popularExams: ['Goa Civil Services (GCS)', 'Junior Scale Officers', 'Goa Police Sub-Inspector', 'LDC & Steno'],
    description: 'Recruiting body for administrative, medical, and judicial officers in Goa.'
  },

  // Southern Region
  {
    state: 'Tamil Nadu',
    region: 'South',
    capital: 'Chennai',
    pscName: 'TNPSC (Tamil Nadu Public Service Commission)',
    pscUrl: 'https://www.tnpsc.gov.in',
    subordinateBoardName: 'TRB (Teachers Recruitment Board Tamil Nadu)',
    subordinateBoardUrl: 'https://trb.tn.gov.in',
    policeBoardName: 'TNUSRB (Tamil Nadu Uniformed Services Recruitment Board)',
    policeBoardUrl: 'https://www.tnusrb.tn.gov.in',
    popularExams: ['TNPSC Group 1', 'TNPSC Group 2 & 2A', 'TNPSC Group 4 & VAO', 'TNUSRB Police Constable & Sub-Inspector', 'TN TRB PG Assistant'],
    description: 'High-volume competitive testing commission famous for its Group 4 & VAO examinations attracting millions of aspirants.'
  },
  {
    state: 'Karnataka',
    region: 'South',
    capital: 'Bengaluru',
    pscName: 'KPSC (Karnataka Public Service Commission)',
    pscUrl: 'https://kpsc.kar.nic.in',
    subordinateBoardName: 'KEA (Karnataka Examinations Authority)',
    subordinateBoardUrl: 'https://cetonline.karnataka.gov.in/kea',
    policeBoardName: 'KSP (Karnataka State Police Recruitment Wing)',
    policeBoardUrl: 'https://ksp-recruitment.in',
    popularExams: ['Gazetted Probationers (KAS)', 'First Division Assistant (FDA)', 'Second Division Assistant (SDA)', 'KSP Police Sub-Inspector (PSI)'],
    description: 'Constitutional recruitment commission governing Karnataka Administrative Service and departmental boards.'
  },
  {
    state: 'Telangana',
    region: 'South',
    capital: 'Hyderabad',
    pscName: 'TGPSC (Telangana Public Service Commission)',
    pscUrl: 'https://tspsc.gov.in',
    subordinateBoardName: 'TREIRB (Telangana Residential Educational Institutions Recruitment Board)',
    subordinateBoardUrl: 'https://treirb.telangana.gov.in',
    policeBoardName: 'TSLPRB (Telangana State Level Police Recruitment Board)',
    policeBoardUrl: 'https://www.tslprb.in',
    popularExams: ['TGPSC Group 1', 'TGPSC Group 2', 'TGPSC Group 3', 'TGPSC Group 4', 'TSLPRB Police Constable & Sub-Inspector'],
    description: 'Direct recruitment commission across Telangana civil services, residential education, and uniformed forces.'
  },
  {
    state: 'Andhra Pradesh',
    region: 'South',
    capital: 'Amaravati',
    pscName: 'APPSC (Andhra Pradesh Public Service Commission)',
    pscUrl: 'https://psc.ap.gov.in',
    subordinateBoardName: 'Andhra Pradesh District Selection Committee (AP DSC)',
    subordinateBoardUrl: 'https://apdsc.apcfss.in',
    policeBoardName: 'SLPRB AP (State Level Police Recruitment Board)',
    policeBoardUrl: 'https://slprb.ap.gov.in',
    popularExams: ['APPSC Group 1', 'APPSC Group 2', 'AP DSC Teacher Recruitment', 'AP Police SI & Constable', 'Panchayat Secretary'],
    description: 'State recruitment commission overseeing civil services, village/ward secretariats, and primary/secondary teachers.'
  },
  {
    state: 'Kerala',
    region: 'South',
    capital: 'Thiruvananthapuram',
    pscName: 'Kerala PSC (Kerala Public Service Commission)',
    pscUrl: 'https://www.keralapsc.gov.in',
    subordinateBoardName: 'Kerala PSC Thulasi Single Window Portal',
    subordinateBoardUrl: 'https://thulasi.psc.kerala.gov.in',
    policeBoardName: 'Kerala Police Recruitment (via Kerala PSC)',
    policeBoardUrl: 'https://keralapolice.gov.in',
    popularExams: ['KAS (Kerala Administrative Service)', 'Secretariat Assistant', 'Lower Division Clerk (LDC)', 'Civil Police Officer (CPO)'],
    description: 'Unified single-window portal (Thulasi) handling zero-fee recruitment for 100% of state government departments in Kerala.'
  },

  // Eastern Region
  {
    state: 'Bihar',
    region: 'East',
    capital: 'Patna',
    pscName: 'BPSC (Bihar Public Service Commission)',
    pscUrl: 'https://bpsc.bih.nic.in',
    subordinateBoardName: 'BSSC (Bihar Staff Selection Commission)',
    subordinateBoardUrl: 'https://bssc.bihar.gov.in',
    policeBoardName: 'BPSSC (Sub-Inspector) & CSBC (Constable Board)',
    policeBoardUrl: 'https://bpssc.bih.nic.in',
    popularExams: ['BPSC CCE (SDO/DSP)', 'BPSC Teacher TRE', 'BSSC Inter Level', 'BSSC CGL', 'Bihar Police Constable', 'Bihar Daroga (SI)'],
    description: 'Dynamic recruitment landscape conducting nationwide teacher recruitment drives and competitive civil services.'
  },
  {
    state: 'West Bengal',
    region: 'East',
    capital: 'Kolkata',
    pscName: 'WBPSC (Public Service Commission, West Bengal)',
    pscUrl: 'https://psc.wb.gov.in',
    subordinateBoardName: 'WBSSC (West Bengal School Service Commission)',
    subordinateBoardUrl: 'https://westbengalssc.com',
    policeBoardName: 'WBPRB (West Bengal Police Recruitment Board)',
    policeBoardUrl: 'https://prb.wb.gov.in',
    popularExams: ['WBCS (Executive)', 'West Bengal Police Constable', 'Kolkata Police SI', 'WBPSC Miscellaneous Services', 'WBPSC Food SI'],
    description: 'Conducts examinations for executive magistracy, revenue services, civic police forces, and school teaching cadres.'
  },
  {
    state: 'Odisha',
    region: 'East',
    capital: 'Bhubaneswar',
    pscName: 'OPSC (Odisha Public Service Commission)',
    pscUrl: 'https://www.opsc.gov.in',
    subordinateBoardName: 'OSSSC (Odisha Subordinate Staff Selection Commission) & OSSC',
    subordinateBoardUrl: 'https://www.osssc.gov.in',
    policeBoardName: 'State Police Selection Board Odisha',
    policeBoardUrl: 'https://odishapolice.gov.in',
    popularExams: ['OAS (Odisha Administrative Service)', 'OSSSC RI, ARI & Amin', 'OSSC Combined Graduate Level (CGL)', 'Odisha Police Constable'],
    description: 'State recruitment organizations offering fee-free applications for state civil services and subordinate revenue cadres.'
  },
  {
    state: 'Jharkhand',
    region: 'East',
    capital: 'Ranchi',
    pscName: 'JPSC (Jharkhand Public Service Commission)',
    pscUrl: 'https://www.jpsc.gov.in',
    subordinateBoardName: 'JSSC (Jharkhand Staff Selection Commission)',
    subordinateBoardUrl: 'https://jssc.nic.in',
    policeBoardName: 'Jharkhand Police Recruitment Wing',
    policeBoardUrl: 'https://jhpolice.gov.in',
    popularExams: ['JPSC Combined Civil Services', 'JSSC CGL', 'JSSC Inter Level', 'Jharkhand Police Constable Bharti', 'Excise Constable'],
    description: 'Administering selection for administrative officers, block supply officers, excise constables, and secondary teachers.'
  },

  // North-Eastern Region
  {
    state: 'Assam',
    region: 'North-East',
    capital: 'Dispur / Guwahati',
    pscName: 'APSC (Assam Public Service Commission)',
    pscUrl: 'https://apsc.nic.in',
    subordinateBoardName: 'SLRC (State Level Recruitment Commission - ADRE)',
    subordinateBoardUrl: 'https://sebaonline.org',
    policeBoardName: 'SLPRB Assam (State Level Police Recruitment Board)',
    policeBoardUrl: 'https://slprb.assam.gov.in',
    popularExams: ['APSC CCE (ACS/APS)', 'ADRE Grade 3 & Grade 4', 'Assam Police Commando & Constable', 'Assam TET'],
    description: 'Direct recruitment model (ADRE) employing tens of thousands of youth with centralized merit tests.'
  },
  {
    state: 'Arunachal Pradesh',
    region: 'North-East',
    capital: 'Itanagar',
    pscName: 'APPSC (Arunachal Pradesh Public Service Commission)',
    pscUrl: 'https://appsc.gov.in',
    subordinateBoardName: 'APSSB (Arunachal Pradesh Staff Selection Board)',
    subordinateBoardUrl: 'https://apssb.nic.in',
    policeBoardName: 'Arunachal Police Recruitment Board',
    policeBoardUrl: 'https://arunpol.nic.in',
    popularExams: ['APPSC Combined Civil Services', 'APSSB CGL & CHSL', 'Forest Guard', 'Arunachal Police Constable'],
    description: 'Constitutional board and subordinate selection board for frontier state civil and technical services.'
  },
  {
    state: 'Meghalaya',
    region: 'North-East',
    capital: 'Shillong',
    pscName: 'Meghalaya PSC (Public Service Commission)',
    pscUrl: 'https://mpsc.nic.in',
    subordinateBoardName: 'District Selection Committees (DSC Meghalaya)',
    subordinateBoardUrl: 'https://meghalaya.gov.in',
    policeBoardName: 'Meghalaya Police Central Recruitment Board',
    policeBoardUrl: 'https://megpolice.gov.in',
    popularExams: ['Meghalaya Civil Services (MCS)', 'Meghalaya Police Sub-Inspector', 'LDA cum Typist'],
    description: 'Commission responsible for state administrative personnel, judicial services, and district selection boards.'
  },
  {
    state: 'Manipur',
    region: 'North-East',
    capital: 'Imphal',
    pscName: 'Manipur PSC (Public Service Commission)',
    pscUrl: 'https://mpscmanipur.gov.in',
    subordinateBoardName: 'Manipur Staff Selection Commission',
    subordinateBoardUrl: 'https://manipur.gov.in',
    policeBoardName: 'Manipur Police Headquarters',
    policeBoardUrl: 'https://manipurpolice.gov.in',
    popularExams: ['Manipur Civil Services', 'Manipur Police Constable', 'Secretariat Assistant'],
    description: 'State recruitment board for Manipur Civil Service, police service, and clerical cadres.'
  },
  {
    state: 'Mizoram',
    region: 'North-East',
    capital: 'Aizawl',
    pscName: 'Mizoram PSC (Public Service Commission)',
    pscUrl: 'https://mpsc.mizoram.gov.in',
    subordinateBoardName: 'MSSSB (Mizoram Subordinate Services Selection Board)',
    subordinateBoardUrl: 'https://msssb.mizoram.gov.in',
    policeBoardName: 'Mizoram Police Department',
    policeBoardUrl: 'https://police.mizoram.gov.in',
    popularExams: ['Mizoram Civil Services (MCS)', 'Mizoram Police Service (MPS)', 'Junior Division Clerk (UDC/LDC)'],
    description: 'Recruitment body for Group A, B, and C state services in Mizoram.'
  },
  {
    state: 'Nagaland',
    region: 'North-East',
    capital: 'Kohima',
    pscName: 'NPSC (Nagaland Public Service Commission)',
    pscUrl: 'https://npsc.nagaland.gov.in',
    subordinateBoardName: 'NSSB (Nagaland Staff Selection Board)',
    subordinateBoardUrl: 'https://nssb.nagaland.gov.in',
    policeBoardName: 'Nagaland Police Recruitment Cell',
    policeBoardUrl: 'https://police.nagaland.gov.in',
    popularExams: ['NPSC Combined Technical Services', 'NPSC NCS, NPS & Allied Services', 'NSSB Combined Staff Recruitment'],
    description: 'Oversees selection for gazetted administrative services and subordinate executive personnel.'
  },
  {
    state: 'Tripura',
    region: 'North-East',
    capital: 'Agartala',
    pscName: 'TPSC (Tripura Public Service Commission)',
    pscUrl: 'https://tpsc.tripura.gov.in',
    subordinateBoardName: 'JRBT (Joint Recruitment Board of Tripura)',
    subordinateBoardUrl: 'https://jrbtripura.com',
    policeBoardName: 'Tripura Police Recruitment Cell',
    policeBoardUrl: 'https://tripurapolice.gov.in',
    popularExams: ['Tripura Civil Services (TCS) & Police Service (TPS)', 'JRBT Group C & D', 'Tripura Police Rifleman'],
    description: 'State recruitment body conducting competitive exams for administrative, police, and municipal staff.'
  },
  {
    state: 'Sikkim',
    region: 'North-East',
    capital: 'Gangtok',
    pscName: 'SPSC (Sikkim Public Service Commission)',
    pscUrl: 'https://spsc.sikkim.gov.in',
    subordinateBoardName: 'Sikkim State Subordinate Services Division',
    subordinateBoardUrl: 'https://spsc.sikkim.gov.in',
    policeBoardName: 'Sikkim Police Department',
    policeBoardUrl: 'https://sikkimpolice.nic.in',
    popularExams: ['Sikkim State Civil Services', 'Under Secretary / DSP', 'Sikkim Police Constable', 'Accounts Clerk'],
    description: 'Conducts direct examinations for civil cadres, specialists, teachers, and law enforcement in Sikkim.'
  }
];
