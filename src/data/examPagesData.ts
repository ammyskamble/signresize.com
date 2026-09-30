export interface ExamPageInfo {
  slug: string; // e.g. 'ssc-signature-resize'
  presetId: string; // matches id in EXAM_PRESETS
  pageTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  subheading: string;
  authority: string;
  targetExams: string;
  widthPx: number;
  heightPx: number;
  widthCm: number;
  heightCm: number;
  minKb: number;
  maxKb: number;
  recommendedKb: number;
  dpi: number;
  ink: string;
  aspectRatioLabel: string;
  strictNotice: string;
  faqs: Array<{ q: string; a: string }>;
  tips: string[];
}

export const EXAM_PAGES_DATA: ExamPageInfo[] = [
  {
    slug: 'ssc-signature-resize',
    presetId: 'ssc-general',
    pageTitle: 'SSC Signature Resize 10 to 20 KB (140x60 px) Online - SignResize',
    metaDescription: 'Official SSC signature resize & compressor tool. Resize signature to 10 to 20 kb, 140x60 px (4x2 cm) at 200 DPI for SSC CGL, CHSL, MTS, GD Constable, and CPO portals. 100% free & private.',
    keywords: 'ssc signature resize, ssc signature resize 10 to 20 kb, ssc signature size 140x60, ssc signature in cm, ssc cgl signature resize, ssc chsl signature size, ssc gd signature resize, staff selection commission signature resizer',
    h1: 'SSC Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Exact 140×60 px (4.0×2.0 cm) dimensions with dual-boundary 10–20 KB compression strictly adhering to official Staff Selection Commission guidelines.',
    authority: 'Staff Selection Commission (SSC)',
    targetExams: 'SSC CGL, SSC CHSL, SSC MTS, SSC GD Constable, SSC CPO, SSC Stenographer, SSC Selection Posts',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures in CAPITAL LETTERS or BLOCK LETTERS will be disqualified by SSC. Signatures must be in running natural handwriting.',
    tips: [
      'Use a fresh black ballpoint pen on plain, unruled white paper (do not use ruled notebook sheets).',
      'Crop tight around your signature so it fills 75–85% of the frame without cutting edges.',
      'Enable the Clean White Paper filter to eliminate phone shadow and paper yellowness.',
      'Ensure the resulting file size displays between 10.0 KB and 19.9 KB before uploading to the SSC portal.'
    ],
    faqs: [
      {
        q: 'What is the official SSC signature size for 2026?',
        a: 'The official SSC signature size requires dimensions of 140 pixels width by 60 pixels height (approximately 4.0 cm × 2.0 cm) and a file size strictly between 10 KB and 20 KB in JPG or JPEG format.'
      },
      {
        q: 'Can I upload a signature in capital letters for SSC exams?',
        a: 'No. SSC exam guidelines strictly declare that signatures written in capital / block letters will be rejected. You must sign in natural, running cursive handwriting.'
      },
      {
        q: 'Which ink color is mandatory for SSC signature upload?',
        a: 'SSC mandates signing with a black ballpoint pen on an unruled, spotless white sheet of paper. Blue ink is generally discouraged and may lead to scrutiny.'
      },
      {
        q: 'Why does SSC reject signatures under 10 KB or over 20 KB?',
        a: 'Files under 10 KB suffer from severe compression artifacts making biometric verification impossible during exams. Files over 20 KB exceed the SSC server upload buffer.'
      }
    ]
  },
  {
    slug: 'upsc-signature-resize',
    presetId: 'upsc-civil-services',
    pageTitle: 'UPSC Signature Resize 20 to 300 KB (350x350 px) Online - SignResize',
    metaDescription: 'Free UPSC signature resize & cropper. Format signature to 350x350 px (3.5x3.5 cm), 20 to 300 KB file size for UPSC Civil Services (IAS, IFS), NDA, CDS, CMS, and IES portals.',
    keywords: 'upsc signature resize, upsc signature size 20 to 300 kb, upsc signature dimensions 350x350, upsc cse signature resizer, upsc nda signature size, upsc cds signature cropper, ias exam signature resize',
    h1: 'UPSC Signature Resize & Cropper (20 KB – 300 KB)',
    subheading: 'Precise 350×350 px square ratio with 20 KB to 300 KB file size limits compliant with UPSC Civil Services, NDA, CDS, and OTR registration.',
    authority: 'Union Public Service Commission (UPSC)',
    targetExams: 'UPSC Civil Services (IAS, IPS, IFS), NDA & NA, CDS, CMS, IES/ISS, CAPF, EPFO, UPSC OTR Registration',
    widthPx: 350,
    heightPx: 350,
    widthCm: 3.5,
    heightCm: 3.5,
    minKb: 20,
    maxKb: 300,
    recommendedKb: 50,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '1:1 Square (350×350 px)',
    strictNotice: 'UPSC requires a square aspect ratio (minimum 350×350 px, maximum 1000×1000 px). Must be clearly legible on white background.',
    tips: [
      'Keep the aspect ratio set to 1:1 square; do not stretch or compress non-proportionately.',
      'A file size between 40 KB and 80 KB ensures high sharpness while staying well within the 300 KB ceiling.',
      'Avoid blurry phone photos or shadows; use good lighting and the Clean Paper filter.',
      'Ensure the candidate name is spelled exactly as on the Matriculation certificate.'
    ],
    faqs: [
      {
        q: 'What is the required dimension for UPSC signature upload?',
        a: 'UPSC requires signatures to have equal width and height (1:1 square ratio), with minimum dimensions of 350 × 350 pixels and maximum dimensions of 1000 × 1000 pixels.'
      },
      {
        q: 'What is the allowed file size for UPSC signature in 2026?',
        a: 'The file size for UPSC signatures must be between 20 KB and 300 KB in JPG / JPEG format. SignResize automatically tunes your image to hit around 40–60 KB for optimal clarity.'
      },
      {
        q: 'Does UPSC accept blue ink signatures?',
        a: 'UPSC guidelines mandate signing with black ink pen on clean white unruled paper to ensure high machine-readability during biometric document verification.'
      },
      {
        q: 'How to crop signature for UPSC OTR (One Time Registration)?',
        a: 'Upload your photo, select the UPSC preset on SignResize, center the square crop box over your signature, and download the portal-compliant JPG.'
      }
    ]
  },
  {
    slug: 'rrb-signature-resize',
    presetId: 'rrb-railway',
    pageTitle: 'Railway RRB Signature Resize 10 to 20 KB (140x60 px) Online - SignResize',
    metaDescription: 'Resize signature for Railway RRB (NTPC, ALP, Group D, JE) online. Format to 140x60 px (4x2 cm), 10 KB to 20 KB JPG. Remove shadows and whiten background for instant upload acceptance.',
    keywords: 'rrb ntpc admit card 2026, rrb ntpc exam date 2026, rrb ntpc photo and signature size, rrb ntpc recruitment 2025, rrb ntpc apply online, rrb signature resize, rrb signature 10 to 20 kb, railway signature resize, rrb ntpc signature size, rrb alp signature resizer, rrb group d signature format, railway recruitment board signature resize',
    h1: 'Railway RRB Signature & Photo Resize (10 KB – 20 KB)',
    subheading: 'Standard 140×60 px (4.0×2.0 cm) format with strict 10 KB to 20 KB file bounds for Railway Recruitment Boards nationwide (NTPC, ALP, Group D).',
    authority: 'Railway Recruitment Boards (RRB / RRC)',
    targetExams: 'RRB NTPC (Graduate & Undergraduate CEN 05/2024 & 06/2024), RRB ALP (Assistant Loco Pilot), RRB Technician, RRB Group D (Level 1), RRB JE, RPF Sub-Inspector & Constable',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures in CAPITAL LETTERS or signed on behalf of candidate are strictly rejected by Railway Recruitment Boards.',
    tips: [
      'Draw signature in dark black ink in running hand on pure white paper.',
      'Crop out any table shadows or paper borders around the signature.',
      'Ensure the final file is strictly between 10 KB and 20 KB before submitting on the RRB portal.',
      'Check that the text remains crisp and not blurred at 100% zoom.'
    ],
    faqs: [
      {
        q: 'What is the signature size for RRB NTPC and ALP recruitment?',
        a: 'The standard RRB signature size is 140 pixels width by 60 pixels height (4 cm × 2 cm), with a file size strictly between 10 KB and 20 KB in JPG format.'
      },
      {
        q: 'Can I use a blue pen for my Railway RRB signature?',
        a: 'RRB notifications state a strong preference for black ink on unruled white paper. Blue ink signatures with low contrast often lead to application rejection during scrutinization.'
      },
      {
        q: 'What photo and signature must I carry on RRB NTPC exam day?',
        a: 'On exam day, carry your printed RRB NTPC admit card, original photo ID (Aadhaar/PAN/Voter ID), and one color passport photograph (35x45 mm) identical to the one submitted during online application. You must sign the attendance sheet in running handwriting in front of the invigilator.'
      },
      {
        q: 'Why was my RRB signature rejected in previous exams?',
        a: 'Common rejection causes include: all-caps lettering, file size under 10 KB or over 20 KB, blurry camera scan, dark grey background, or signature cropped off.'
      }
    ]
  },
  {
    slug: 'pan-card-signature-resize',
    presetId: 'pan-card-nsdl',
    pageTitle: 'PAN Card Signature Resize 200 DPI (4.5x2 cm, <50 KB) - SignResize',
    metaDescription: 'Resize PAN card signature for NSDL (Protean) & UTIITSL online. Set exact 200 DPI, 4.5 cm x 2 cm (400x200 px), and compress under 50 KB JPG. 100% browser-based private processing.',
    keywords: 'pan card signature resize, pan card signature size 200 dpi, nsdl signature resize, utiitsl signature size, pan card signature 4.5 x 2 cm, pan signature compressor under 50 kb, resize signature for pan card online',
    h1: 'PAN Card Signature Resize (NSDL & UTIITSL 200 DPI)',
    subheading: 'Official 4.5×2.0 cm dimensions at 200 DPI resolution, compressed under 50 KB for Protean (NSDL) and UTIITSL portals.',
    authority: 'Income Tax Department (NSDL Protean / UTIITSL)',
    targetExams: 'New PAN Card (Form 49A), PAN Card Correction / Update, Minor to Major PAN, Instant e-PAN, Reprint PAN Card',
    widthPx: 400,
    heightPx: 200,
    widthCm: 4.5,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '2:1 (4.5 cm × 2.0 cm)',
    strictNotice: 'NSDL and UTIITSL require scanning at 200 DPI resolution with file size strictly under 50 KB. Signature must not touch the box boundaries.',
    tips: [
      'Draw a light pencil rectangle of 4.5 cm × 2.0 cm on a white sheet and sign cleanly inside.',
      'Sign with a dense black ballpoint pen so the line weight is thick and legible on the plastic card.',
      'Ensure the final file size is greater than 10 KB and less than 50 KB.',
      'The Clean White Paper filter helps remove yellowish tint from indoor mobile photos.'
    ],
    faqs: [
      {
        q: 'What is the signature specification for NSDL PAN card application?',
        a: 'NSDL (Protean) specifies that signatures must be 200 DPI, 4.5 cm width by 2.0 cm height (~400 × 200 pixels), and under 50 KB file size in JPEG/JPG format.'
      },
      {
        q: 'Can I use blue ink on a PAN card signature?',
        a: 'The Income Tax Department and NSDL strongly advise signing with a black ink pen only. Blue ink often scans poorly when engraved onto the physical PAN card.'
      },
      {
        q: 'How to resize PAN card photo and signature together?',
        a: 'On SignResize, choose the PAN Card Signature preset (4.5x2 cm, <50KB) for your signature, then select the PAN Card Photo preset (3.5x2.5 cm, <50KB) for your applicant photograph.'
      }
    ]
  },
  {
    slug: 'ibps-signature-resize',
    presetId: 'ibps-sbi',
    pageTitle: 'IBPS & SBI Signature Resize 10 to 20 KB (140x60 px) Online - SignResize',
    metaDescription: 'Resize signature for IBPS & SBI (PO, Clerk, SO, RRB) recruitment. Format to 140x60 pixels, 10 to 20 kb JPG, black ink only. Running handwriting verified against bank guidelines.',
    keywords: 'ibps signature resize, sbi signature resize, ibps signature 10 to 20 kb, ibps po signature size, sbi clerk signature resizer, ibps rrb signature size, bank exam signature resize',
    h1: 'IBPS & SBI Signature Resize (10 KB – 20 KB)',
    subheading: 'Exact 140×60 px (4.0×2.0 cm) dimensions with dual-boundary 10–20 KB compression verified for IBPS and SBI banking portals.',
    authority: 'Institute of Banking Personnel Selection (IBPS) & State Bank of India (SBI)',
    targetExams: 'IBPS PO, IBPS Clerk, IBPS SO, IBPS RRB Scale I/II/Office Assistant, SBI PO, SBI Clerk (Junior Associate), SBI SO, RBI Assistant & Grade B',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures in CAPITAL / BLOCK letters are 100% disqualified by IBPS & SBI. Candidates must sign in natural cursive running handwriting.',
    tips: [
      'Sign only with a black ink pen on spotless white unruled paper.',
      'Sign in your normal, customary signature that matches your identity proofs.',
      'Keep the file between 10.0 KB and 19.9 KB.',
      'Do not compress using third-party lossy apps that blur edges; our client-side engine retains vector-like clarity.'
    ],
    faqs: [
      {
        q: 'What is the size and dimension of IBPS signature upload?',
        a: 'The required dimensions are 140 × 60 pixels (~4.0 cm × 2.0 cm) and the file size must be between 10 KB and 20 KB in JPEG/JPG format.'
      },
      {
        q: 'Does IBPS allow capital letter signatures?',
        a: 'No. The official IBPS brochure explicitly states that signatures in capital letters will NOT be accepted and will result in disqualification.'
      },
      {
        q: 'What about the IBPS left thumb impression (LTI)?',
        a: 'IBPS also requires a left thumb impression of 240 × 240 pixels (3 cm × 3 cm), between 10 KB and 20 KB (or up to 50 KB depending on exam notification), which you can format using our Thumb Impression tool.'
      }
    ]
  },
  {
    slug: 'gate-signature-resize',
    presetId: 'gate-jam',
    pageTitle: 'GATE Signature Resize (5x2 cm, 5 to 200 KB) Online - SignResize',
    metaDescription: 'Resize signature for GATE & IIT JAM exam applications. Format to 3:1 aspect ratio (480x160 px / 5x2 cm), 5 KB to 200 KB JPG. Ensure signature covers 70-80% of bounding box.',
    keywords: 'gate signature resize, gate signature size 5 to 200 kb, gate signature dimensions 5x2 cm, iit jam signature resize, gate exam signature resizer, gate 2026 signature requirements',
    h1: 'GATE & IIT JAM Signature Resize (5 cm × 2 cm)',
    subheading: 'Official 3:1 aspect ratio (480×160 px / 5.0×2.0 cm) with 5 KB to 200 KB size tolerance for IIT & IISc postgraduate exam portals.',
    authority: 'Indian Institutes of Technology (IITs / IISc)',
    targetExams: 'GATE 2026, IIT JAM, CEED, UCEED, CSIR NET, UGC NET',
    widthPx: 480,
    heightPx: 160,
    widthCm: 5.0,
    heightCm: 2.0,
    minKb: 5,
    maxKb: 200,
    recommendedKb: 30,
    dpi: 200,
    ink: 'Dark Blue or Black Ink Pen',
    aspectRatioLabel: '3:1 (~480×160 px)',
    strictNotice: 'The signature must occupy between 70% and 80% of the cropped rectangle and must not touch the borders.',
    tips: [
      'Draw a 5 cm × 2 cm box with light pencil on plain white paper and sign comfortably inside.',
      'Dark blue or black ink is accepted by GATE committee.',
      'Keep the file size above 5 KB and below 200 KB (around 30–50 KB is ideal).',
      'Avoid scanning with low-res webcams; use a sharp smartphone camera photo with SignResize shadow removal.'
    ],
    faqs: [
      {
        q: 'What are the GATE signature dimensions and aspect ratio?',
        a: 'The GATE signature aspect ratio is 3:1 (5.0 cm width by 2.0 cm height), which corresponds to approximately 480 × 160 pixels at 200 DPI.'
      },
      {
        q: 'What is the allowed file size for GATE 2026 signature?',
        a: 'The file size must be between 5 KB and 200 KB in JPG or JPEG format.'
      },
      {
        q: 'Can I use blue ink for GATE application?',
        a: 'Yes, GATE rules allow either dark blue or black ink on unruled white paper.'
      }
    ]
  },
  {
    slug: 'thumb-impression-resize',
    presetId: 'thumb-impression-general',
    pageTitle: 'Thumb Impression Resize & Compressor (10 to 50 KB) Online - SignResize',
    metaDescription: 'Resize and compress left thumb impression (LTI) online for SSC, IBPS, RRB, and NTA exams. Square 1:1 ratio (3x3 cm / 240x240 px), 10 KB to 50 KB. Clear ridgeline enhancement.',
    keywords: 'thumb impression resize, thumb impression 10 to 20 kb, thumb impression resize 10 to 50 kb, left thumb impression resize, ibps thumb impression size, ssc thumb impression resizer, lti resize online',
    h1: 'Thumb Impression Resizer & Compressor (10 KB – 50 KB)',
    subheading: 'Square 1:1 ratio (240×240 px / 3.0×3.0 cm) with high-contrast ridgeline enhancement for SSC, IBPS, RRB, and NTA portals.',
    authority: 'Government Recruitment Bodies (SSC, IBPS, RRB, NTA)',
    targetExams: 'IBPS PO/Clerk/RRB, Railway RRB, SSC Exams, NTA NEET / JEE Main, Central & State PSC Portals',
    widthPx: 240,
    heightPx: 240,
    widthCm: 3.0,
    heightCm: 3.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Blue or Black Stamp Pad Ink',
    aspectRatioLabel: '1:1 Square (240×240 px)',
    strictNotice: 'Thumb impression must show clear, distinct dermatoglyphic ridges without ink smudges or multiple impressions.',
    tips: [
      'Take impression of your LEFT THUMB unless specifically requested otherwise in the notification.',
      'Gently dab your thumb on a stamp pad (do not press too hard to prevent ink pooling and smudged ridges).',
      'Press firmly once on unruled white paper and lift straight up without sliding.',
      'Set target size slider between 10 KB and 20 KB (for SSC/RRB) or 20 KB and 50 KB (for IBPS/NTA).'
    ],
    faqs: [
      {
        q: 'Which thumb impression is required for IBPS and government exams?',
        a: 'Indian government recruitment portals almost universally mandate the candidate’s Left Thumb Impression (LTI). Only if the left thumb is missing may the right thumb be used (with appropriate notification).'
      },
      {
        q: 'What is the standard dimension for thumb impression upload?',
        a: 'The standard dimension is a 1:1 square ratio: 3.0 cm × 3.0 cm (or 240 × 240 pixels), with a file size between 10 KB and 20 KB or 10 KB and 50 KB depending on the specific exam.'
      },
      {
        q: 'How to fix smudged thumb impressions?',
        a: 'Clean your thumb with soap and water, let it dry completely, dab lightly on the stamp pad, and press gently onto clean white paper. Use the contrast enhancement slider on SignResize to highlight ridge detail.'
      }
    ]
  },
  // NTA NEET, JEE Main, CUET
  {
    slug: 'nta-neet-jee-signature-resize',
    presetId: 'nta-neet-jee',
    pageTitle: 'NTA Signature Resize (NEET, JEE Main, CUET) 4 to 30 KB - SignResize',
    metaDescription: 'Resize signature for NTA NEET UG/PG, JEE Main, and CUET exams. Format to 140x60 px (3.5x1.5 cm), 4 KB to 30 KB JPG, running handwriting in black ink on white paper.',
    keywords: 'nta signature resize, neet signature resize 4 to 30 kb, jee main signature size, cuet signature format, nta signature upload, neet 2026 signature resizer',
    h1: 'NTA Signature Resize & Compressor (NEET, JEE Main, CUET)',
    subheading: 'Exact 3.5×1.5 cm (140×60 px) dimensions with 4 KB to 30 KB strict file size bounds for National Testing Agency portals.',
    authority: 'National Testing Agency (NTA)',
    targetExams: 'NEET UG, NEET PG, JEE Main Session 1 & 2, JEE Advanced, CUET UG & PG, CMAT, GPAT',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 4,
    maxKb: 30,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'NTA notifications strictly declare that signatures in CAPITAL / BLOCK LETTERS will be rejected. Signatures must be in running natural handwriting.',
    tips: [
      'Sign with a black ballpoint pen on pure white paper.',
      'Crop tightly so signature covers 70% to 80% of the box without touching borders.',
      'Maintain the file size strictly between 4.0 KB and 30.0 KB.',
      'Use the Clean White Paper filter to eliminate smartphone camera shadows.'
    ],
    faqs: [
      {
        q: 'What is the official signature size for NEET 2026 and JEE Main?',
        a: 'NTA guidelines require dimensions of 3.5 cm × 1.5 cm (~140 × 60 pixels) and a file size strictly between 4 KB and 30 KB in JPG or JPEG format.'
      },
      {
        q: 'Can I upload a blue ink signature for NTA exams?',
        a: 'NTA guidelines state a strict preference for black ink ballpoint pens on white unruled sheets. Blue ink signatures may cause scanner contrast issues.'
      }
    ]
  },
  // UPPSC
  {
    slug: 'uppsc-signature-resize',
    presetId: 'uppsc',
    pageTitle: 'UPPSC Signature Resize 10 to 50 KB (3.5x1.5 cm) - SignResize',
    metaDescription: 'Resize signature for Uttar Pradesh Public Service Commission (UPPSC PCS, RO/ARO) online. Format to 140x60 px (3.5x1.5 cm), 10 KB to 50 KB JPG. 100% browser private.',
    keywords: 'uppsc signature resize, uppsc signature size 10 to 50 kb, uppsc pcs signature format, uppsc ro aro signature resizer, up psc signature upload',
    h1: 'UPPSC Signature Resize & Compressor (10 KB – 50 KB)',
    subheading: 'Official 3.5×1.5 cm (140×60 px) specifications compliant with UPPSC OTR registration and PCS application portal.',
    authority: 'Uttar Pradesh Public Service Commission (UPPSC)',
    targetExams: 'UPPSC Combined State / Upper Subordinate Services (PCS), RO / ARO, Staff Nurse, Assistant Conservator of Forest',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black Ballpoint Pen',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures must be high-contrast in natural running handwriting. Ensure OTR profile requirements are fulfilled.',
    tips: [
      'Draw signature in black ink on clean white unruled paper.',
      'Keep size between 10 KB and 50 KB.',
      'Avoid ruled lines or shadows across the text.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for UPPSC OTR?',
        a: 'UPPSC requires a signature size of 3.5 cm × 1.5 cm with file size between 10 KB and 50 KB in JPG format.'
      }
    ]
  },
  // BPSC
  {
    slug: 'bpsc-signature-resize',
    presetId: 'bpsc',
    pageTitle: 'BPSC Signature Resize 10 to 25 KB (English & Hindi) - SignResize',
    metaDescription: 'Resize signature for Bihar Public Service Commission (BPSC CCE, TRE, Headmaster). Format to 140x60 px (4x2 cm), 10 KB to 25 KB JPG in English & Hindi.',
    keywords: 'bpsc signature resize, bpsc signature size 10 to 25 kb, bpsc hindi signature resize, bpsc tre signature upload, bihar psc signature resizer',
    h1: 'BPSC Signature Resize & Compressor (10 KB – 25 KB)',
    subheading: 'Official 4.0×2.0 cm format with strict 10 KB to 25 KB limits for BPSC Combined Competitive Examination and Teacher Recruitment.',
    authority: 'Bihar Public Service Commission (BPSC)',
    targetExams: 'BPSC CCE (Integrated 70th/71st), BPSC TRE (Teacher Recruitment), BPSC Headmaster, Assistant Professor',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 25,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black or Blue Ink Pen',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'BPSC typically mandates uploading both English and Hindi signatures into separate upload slots. Resize both files under 25 KB.',
    tips: [
      'Format both English and Hindi signatures using this preset to ensure consistent dimensions.',
      'Strictly maintain file size between 10.0 KB and 24.9 KB.',
      'Crop neatly without clipping descending characters.'
    ],
    faqs: [
      {
        q: 'Does BPSC require Hindi signature as well?',
        a: 'Yes, most BPSC online application forms require two separate signature uploads: one in English and one in Hindi, both under 25 KB.'
      }
    ]
  },
  // MPSC
  {
    slug: 'mpsc-signature-resize',
    presetId: 'mpsc',
    pageTitle: 'MPSC Signature Resize 256x64 px (10 to 50 KB) - SignResize',
    metaDescription: 'Resize signature for Maharashtra Public Service Commission (MPSC Rajyaseva, Combine Group B & C). Format to 256x64 px (4:1 ratio), 10 KB to 50 KB JPG.',
    keywords: 'mpsc signature resize, mpsc signature 256x64, mpsc rajyaseva signature size, maharashtra psc signature format, mpsc combine signature resize',
    h1: 'MPSC Signature Resize & Compressor (256×64 px)',
    subheading: 'Exact 256×64 px 4:1 banner format with 10 KB to 50 KB file boundary matching Maharashtra PSC online portal requirements.',
    authority: 'Maharashtra Public Service Commission (MPSC)',
    targetExams: 'MPSC State Services (Rajyaseva), Maharashtra Subordinate Services Group B & C, RTO, Forest Services',
    widthPx: 256,
    heightPx: 64,
    widthCm: 4.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '4:1 Banner (256×64 px)',
    strictNotice: 'MPSC requires a unique 4:1 aspect ratio with exact 256 width by 64 height pixel dimensions. Signatures outside this ratio are rejected by the portal.',
    tips: [
      'Sign across a horizontal rectangle on clean unruled paper.',
      'Lock aspect ratio to 4:1 for exact 256x64 px compliance.',
      'Keep file size between 10 KB and 50 KB.'
    ],
    faqs: [
      {
        q: 'What is the required dimension for MPSC signature upload?',
        a: 'MPSC mandates 256 pixels width by 64 pixels height with a file size between 10 KB and 50 KB in JPG format.'
      }
    ]
  },
  // Maharashtra Police Bharti
  {
    slug: 'maharashtra-police-signature-resize',
    presetId: 'maharashtra-police',
    pageTitle: 'Maharashtra Police Bharti Signature & Photo Resize 5 to 20 KB - SignResize',
    metaDescription: 'Resize signature (256x64 px) and photo (160x212 px) for Maharashtra Police Bharti 2025/2026. File size 5 to 20 KB JPG for policerecruitment.mahait.org.',
    keywords: 'maharashtra police bharti 2026, maharashtra police bharti 2025, maharashtra police Bharti, maharashtra police bharti online form, maharashtra police bharti hall ticket, maharashtra police bharti ground marks, maharashtra police bharti 1600 meter running time, maharashtra police bharti syllabus, maharashtra police bharti age limit, maharashtra police bharti question paper, maharashtra police bharti 2025 online form date, maharashtra police bharti hall ticket 2026, maharashtra police bharti 2026 date, maharashtra police bharti 2025 pdf download',
    h1: 'Maharashtra Police Bharti Photo & Signature Resize (5 KB – 20 KB)',
    subheading: 'Official 256×64 px signature and 160×212 px photo format with strict 5 KB to 20 KB compression for policerecruitment.mahait.org online application.',
    authority: 'Maharashtra State Police Recruitment Board',
    targetExams: 'Maharashtra Police Constable (Sipahi), Police Constable Driver, SRPF Armed Police Constable, Bandsman, Jail Constable (Karagruh)',
    widthPx: 256,
    heightPx: 64,
    widthCm: 4.5,
    heightCm: 1.5,
    minKb: 5,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '4:1 Banner (256×64 px)',
    strictNotice: 'Signatures in CAPITAL or BLOCK LETTERS cause immediate disqualification on the MahaPolice recruitment portal. Use running cursive handwriting in black ink on clean white paper.',
    tips: [
      'Sign horizontally on clean unruled white paper using a dark black ballpoint pen.',
      'Crop cleanly around the signature ensuring it fills 75–85% of the frame without touching the border.',
      'Ensure the final file size is strictly between 5.0 KB and 20.0 KB in JPG format before portal upload.',
      'Enable the Clean White Paper filter to eliminate phone shadow and paper yellowness.'
    ],
    faqs: [
      {
        q: 'What is the required photo and signature size for Maharashtra Police Bharti online form?',
        a: 'On policerecruitment.mahait.org, the applicant photo must be 160 × 212 pixels (5 KB to 20 KB, JPG format) with a clear light background. The signature must be 256 × 64 pixels (5 KB to 20 KB, JPG format) signed with black ink.'
      },
      {
        q: 'What are the ground marks for Maharashtra Police Bharti (Physical Test)?',
        a: 'The physical ground test carries 50 marks total. For Male candidates: 1600m running carries 20 marks, 100m sprint carries 15 marks, and Shot Put (7.26 kg) carries 15 marks. For Female candidates: 800m running carries 20 marks, 100m sprint carries 15 marks, and Shot Put (4 kg) carries 15 marks. Minimum qualifying mark is 25 out of 50 (50%).'
      },
      {
        q: 'What is the 1600 meter running time and marks chart for Maharashtra Police Bharti?',
        a: 'For male candidates: Completing 1600m in 5 minutes 10 seconds or less scores the full 20 marks. 5m 11s to 5m 30s scores 18 marks, 5m 31s to 5m 50s scores 15 marks, 5m 51s to 6m 10s scores 12 marks, 6m 11s to 6m 30s scores 10 marks, and over 6m 30s results in 0 marks.'
      },
      {
        q: 'What is the age limit for Maharashtra Police Bharti 2025 and 2026?',
        a: 'For Open/General category candidates: 18 to 28 years. For Backward classes (OBC, SC, ST, VJNT, SBC, EWS): 18 to 33 years (5 years relaxation). Special relaxations apply for Home Guards, Sportspersons, and Ex-Servicemen.'
      },
      {
        q: 'What is the syllabus for the 100-mark Maharashtra Police written exam?',
        a: 'The written exam consists of 100 multiple-choice questions (100 marks, 90 minutes, no negative marking) across four subjects: Marathi Grammar (25 marks), Mathematics (25 marks), Intellectual Test / Reasoning (25 marks), and General Knowledge & Current Affairs (25 marks).'
      },
      {
        q: 'How to download Maharashtra Police Bharti Hall Ticket 2026?',
        a: 'Log in to policerecruitment.mahait.org using your Application ID and Password/Date of Birth. Click on "Download Hall Ticket / Admit Card" for the Physical Ground Test or Written Examination, and print 2 colored copies.'
      }
    ]
  },
  // TNPSC
  {
    slug: 'tnpsc-signature-resize',
    presetId: 'tnpsc',
    pageTitle: 'TNPSC Signature Resize 10 to 20 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for Tamil Nadu Public Service Commission (TNPSC Group 1, 2, 4). Format to 140x60 px (3.5x1.5 cm), strictly 10 to 20 KB JPG.',
    keywords: 'tnpsc signature resize, tnpsc signature 10 to 20 kb, tnpsc group 4 signature size, tnpsc group 2 signature resize, tamil nadu psc signature resizer',
    h1: 'TNPSC Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Strict 10 KB to 20 KB boundary and 3.5×1.5 cm (140×60 px) dimensions compliant with TNPSC One Time Registration (OTR).',
    authority: 'Tamil Nadu Public Service Commission (TNPSC)',
    targetExams: 'TNPSC Group 1, Group 2 & 2A, Group 4 (VAO), Combined Engineering Services, Forest Apprentice',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Blue or Black Ballpoint Pen',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'TNPSC portal rejects files under 10 KB and over 20 KB automatically during upload validation.',
    tips: [
      'Signature must be clearly legible and centered in the frame.',
      'Keep the file size within 10.0 KB and 19.9 KB.',
      'Avoid faint gel pens; use a bold ballpoint pen.'
    ],
    faqs: [
      {
        q: 'What is the TNPSC signature upload size limit?',
        a: 'The allowed file size is strictly between 10 KB and 20 KB in JPG/JPEG format.'
      }
    ]
  },
  // UP Police Constable (UPPRPB)
  {
    slug: 'up-police-signature-resize',
    presetId: 'up-police',
    pageTitle: 'UP Police Constable Signature & Photo Resize 5 to 20 KB – SignResize',
    metaDescription: 'Resize signature (140×60 px, 5–20 KB) and photo (200×230 px, 20–50 KB) for UP Police Constable & SI 2025/2026. Free online tool for uppbpb.gov.in. Covers vacancy, syllabus, admit card, result & salary.',
    keywords: 'up police vacancy 2026, up police constable, up police constable exam date 2026, up police vacancy 2025, up police constable syllabus, up police exam date 2026, up police constable vacancy 2025, up police constable result date 2026, up police admit card, up police syllabus, up police result 2026, up police constable admit card 2026, up police constable vacancy 2026, up police constable salary, up police constable result 2026, up police answer key 2026, up police vacancy 2025 online form date, up police exam city, up police logo',
    h1: 'UP Police Constable Photo & Signature Resize (5 KB – 20 KB)',
    subheading: 'Official 140×60 px signature (5–20 KB) and 200×230 px photo (20–50 KB) for UP Police Constable & SI 2025–2026 application at uppbpb.gov.in.',
    authority: 'UP Police Recruitment & Promotion Board (UPPRPB)',
    targetExams: 'UP Police Constable (Civil Police), PAC Constable, Fireman, Sub-Inspector (SI), Platoon Commander',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 5,
    maxKb: 20,
    recommendedKb: 12,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (140×60 px)',
    strictNotice: 'Signature must be in running cursive handwriting in black ink on plain white paper. Block or capital letter signatures cause immediate rejection on the UPPRPB portal.',
    tips: [
      'Sign on clean unruled white paper with a dark black ballpoint pen.',
      'Crop closely around the signature — it should fill 75–85% of the image frame.',
      'Ensure the final JPG file size is between 5.0 KB and 19.9 KB before uploading.',
      'Your photograph must have a plain white or light grey background — no dark backgrounds, sunglasses, or caps.'
    ],
    faqs: [
      {
        q: 'What are the photo and signature specifications for UP Police Constable & SI application?',
        a: 'For UP Police Constable (UPPRPB), the signature must be 140 × 60 pixels (3.5 cm × 1.5 cm), in JPG format, between 5 KB and 20 KB, signed in black ink on plain white paper. The photograph must be 200 × 230 pixels (3.5 cm × 4.5 cm), in JPG format, between 20 KB and 50 KB, on a plain white or light grey background, without caps or sunglasses. Both are uploaded on uppbpb.gov.in during online application.'
      },
      {
        q: 'What is the UP Police Constable vacancy 2026 and total posts?',
        a: 'UP Police Constable & SI 2026 notifies a total of 60,244 posts for direct recruitment. Posts include Reserve Civil Police Constable, Provincial Armed Constabulary (PAC) Constable, Fireman, and Sub-Inspector (Civil Police). The recruitment is conducted by the UP Police Recruitment & Promotion Board (UPPRPB) through Advertisement No. PRPB:One-1(138)/2026.'
      },
      {
        q: 'What is the UP Police Constable exam date 2026?',
        a: 'The UP Police Constable OMR-based written examination for 2026 is tentatively scheduled for November–December 2026. The online application window runs from September 1, 2026 to October 25, 2026. Fee correction and edit window: October 26–28, 2026. Official date notifications are published on uppbpb.gov.in.'
      },
      {
        q: 'What is the UP Police Constable syllabus and exam pattern 2026?',
        a: 'The written examination consists of 150 objective-type questions carrying 300 marks (2 marks each) to be completed in 2 hours on OMR sheets. The 4 subjects are: (1) General Knowledge (GK) — 38 questions, 76 marks; (2) General Hindi — 37 questions, 74 marks; (3) Numerical & Mental Ability Test — 38 questions, 76 marks; (4) Mental Aptitude/IQ/Reasoning — 37 questions, 74 marks. Negative marking: 0.50 marks deducted per wrong answer.'
      },
      {
        q: 'When is the UP Police admit card 2026 released and how to download?',
        a: 'UP Police Constable admit card 2026 (also called UP Police hall ticket or pravesh patra) is released approximately 10–15 days before the written examination on the official portal uppbpb.gov.in. Candidates can download by entering their registration number and date of birth. The admit card contains the exam center details, roll number, shift timings, and exam city information.'
      },
      {
        q: 'How to check UP Police result 2026 and what is the result date?',
        a: 'UP Police Constable result 2026 is published on uppbpb.gov.in after the written examination. After the written exam, the qualifying candidates proceed to Document Verification (DV), Physical Standard Test (PST), and Physical Efficiency Test (PET). The final result is merit-based combining written exam scores. Results are typically announced within 30–60 days of the exam.'
      },
      {
        q: 'When is the UP Police answer key 2026 released?',
        a: 'The provisional UP Police answer key 2026 is released on uppbpb.gov.in within 7–15 days after the written examination. Candidates can raise objections to any answer within a specified objection window (usually 3–7 days). A final answer key is published after reviewing all objections, and the result is based on the final verified answer key.'
      },
      {
        q: 'What are the physical running standards (PET) for UP Police Constable?',
        a: 'UP Police Physical Efficiency Test (PET) is qualifying only. Male candidates must run 4.8 km within 25 minutes. Female candidates must run 2.4 km within 14 minutes. Failing to complete the run within the time limit results in instant elimination regardless of written exam marks. No grace time or second attempt is provided.'
      },
      {
        q: 'What is the UP Police Constable salary (pay scale) 2026?',
        a: 'UP Police Constable salary as per the 7th Pay Commission Pay Matrix is Level 3: Basic Pay ₹21,700 per month. With all allowances including Dearness Allowance (DA), House Rent Allowance (HRA), and other perks, the gross monthly salary ranges approximately from ₹28,000 to ₹35,000 depending on posting location. Sub-Inspector (SI) salary is Level 6: Basic Pay ₹35,400 per month.'
      },
      {
        q: 'How to check UP Police exam city 2026?',
        a: 'UP Police exam city intimation slip (also called city intimation letter) is released on uppbpb.gov.in approximately 7–10 days before the written examination. Candidates log in with their registration number to view the assigned exam city and district. The actual exam center hall ticket with the complete address is released separately closer to the exam date.'
      },
      {
        q: 'What is the age limit for UP Police Constable 2025 and 2026?',
        a: 'For UP Police Constable (Civil): Male General candidates — 18 to 25 years; Female General candidates — 18 to 28 years (3-year relaxation). OBC male — up to 28 years; OBC female — up to 31 years. SC/ST male — up to 30 years; SC/ST female — up to 33 years. For Sub-Inspector (SI): 21 to 28 years (General). Age is calculated as on July 1 of the recruitment year.'
      }
    ]
  },
  // Sarathi Driving Licence
  {
    slug: 'sarathi-dl-signature-resize',
    presetId: 'sarathi-dl',
    pageTitle: 'Sarathi Driving Licence Signature Resize 10 to 20 KB - SignResize',
    metaDescription: 'Resize signature for Sarathi Parivahan Driving Licence & Learner Licence. Format to 200x100 px (4x2 cm), 10 KB to 20 KB JPG.',
    keywords: 'sarathi signature resize, driving licence signature resize, parivahan signature resize 10 to 20 kb, learner licence signature format, sarathi dl signature size',
    h1: 'Sarathi Driving Licence Signature Resize (10 KB – 20 KB)',
    subheading: 'Compliant with Ministry of Road Transport & Highways (MoRTH) Parivahan Sewa portal for Learner and Driving Licence applications.',
    authority: 'Ministry of Road Transport & Highways (Parivahan)',
    targetExams: 'Learner Licence (LL), Permanent Driving Licence (DL), DL Renewal, Address Change, International Driving Permit',
    widthPx: 200,
    heightPx: 100,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black or Dark Blue Ink',
    aspectRatioLabel: '2:1 (200×100 px)',
    strictNotice: 'The Parivahan portal requires clear, high-contrast signatures strictly between 10 KB and 20 KB in JPEG format.',
    tips: [
      'Sign with a bold black or dark blue pen on plain white paper.',
      'Ensure the final file is between 10 KB and 20 KB.',
      'The Clean Paper filter removes phone shadows for clean printing on the smart card.'
    ],
    faqs: [
      {
        q: 'What is the signature size for Sarathi Parivahan portal?',
        a: 'The Sarathi portal accepts JPG signatures sized between 10 KB and 20 KB with approximate 2:1 aspect ratio (200 × 100 px).'
      }
    ]
  },
  // Passport Seva
  {
    slug: 'passport-seva-signature-resize',
    presetId: 'passport-seva',
    pageTitle: 'Passport Seva Signature Resize 10 to 100 KB - SignResize',
    metaDescription: 'Resize signature for Passport Seva Kendra (MEA) applications online. Format to 350x150 px (4.5x2 cm), 10 KB to 100 KB JPG.',
    keywords: 'passport seva signature resize, passport signature size 4.5x2 cm, passport application signature format, mea passport signature resizer',
    h1: 'Passport Seva Signature Resize (10 KB – 100 KB)',
    subheading: 'Standard 4.5×2.0 cm dimensions with 10 KB to 100 KB file limits for Ministry of External Affairs Passport Seva Kendra portals.',
    authority: 'Passport Seva Kendra (Ministry of External Affairs)',
    targetExams: 'Fresh Passport, Passport Re-issue, Tatkaal Passport, Police Clearance Certificate (PCC)',
    widthPx: 350,
    heightPx: 150,
    widthCm: 4.5,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 100,
    recommendedKb: 40,
    dpi: 200,
    ink: 'Black or Dark Blue Ink',
    aspectRatioLabel: '350:150 (~4.5×2.0 cm)',
    strictNotice: 'Signatures must be sharp and clear without background smudges or scanner lines, as they are digitally engraved on the passport booklet.',
    tips: [
      'Sign in clear running handwriting inside a 4.5 cm x 2.0 cm light boundary.',
      'A file size between 30 KB and 60 KB provides optimal sharpness.',
      'Check that no characters touch or cross the border.'
    ],
    faqs: [
      {
        q: 'What is the allowed signature size for Indian passport applications?',
        a: 'The Passport Seva portal permits JPG signatures with a file size between 10 KB and 100 KB and dimensions of approximately 4.5 cm × 2.0 cm.'
      }
    ]
  },
  // 1. CLAT
  {
    slug: 'clat-signature-resize',
    presetId: 'clat-law',
    pageTitle: 'CLAT Signature Resize 10 to 50 KB (400x150 px) Online - SignResize',
    metaDescription: 'Resize signature for CLAT UG & PG (Common Law Admission Test). Format to 400x150 px (4x1.5 cm), 10 KB to 50 KB JPG. Consortium of NLUs compliant.',
    keywords: 'clat signature resize, clat signature size 10 to 50 kb, clat signature dimensions 400x150, consortium of nlu signature resize, clat 2026 signature format',
    h1: 'CLAT Signature Resize & Compressor (10 KB – 50 KB)',
    subheading: 'Official 4.0×1.5 cm (400×150 px) aspect ratio with 10 KB to 50 KB file boundaries for the Consortium of National Law Universities portal.',
    authority: 'Consortium of National Law Universities (NLUs)',
    targetExams: 'CLAT UG (5-Year Integrated LLB), CLAT PG (LLM), NLU Admission Portal',
    widthPx: 400,
    heightPx: 150,
    widthCm: 4.0,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black or Dark Blue Ink Pen',
    aspectRatioLabel: '8:3 (~400×150 px)',
    strictNotice: 'Signatures in capital letters will be disqualified. Must be candidate’s natural running hand signature in black or blue ink.',
    tips: [
      'Sign with a black or dark blue ballpoint pen on spotless white unruled paper.',
      'Crop closely so the signature fills 75–85% of the frame.',
      'Target around 20–30 KB for crisp rendering on the admit card.'
    ],
    faqs: [
      {
        q: 'What is the required signature size for CLAT 2026?',
        a: 'The Consortium of NLUs specifies a signature file size between 10 KB and 50 KB in JPG or JPEG format, with dimensions around 400 × 150 pixels (4.0 cm × 1.5 cm).'
      },
      {
        q: 'Can I use blue ink for CLAT application?',
        a: 'Yes, either black or dark blue ink on clean white unruled paper is accepted.'
      }
    ]
  },
  // 2. AILET
  {
    slug: 'ailet-signature-resize',
    presetId: 'ailet-law',
    pageTitle: 'AILET Signature Resize 10 to 30 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for AILET (All India Law Entrance Test - NLU Delhi). Format to 140x60 px, 10 KB to 30 KB JPG in dark ink.',
    keywords: 'ailet signature resize, ailet signature size 10 to 30 kb, nlu delhi signature format, ailet exam signature resizer',
    h1: 'AILET Signature Resize & Compressor (10 KB – 30 KB)',
    subheading: 'Standard 140×60 px format with strict 10 KB to 30 KB size tolerance for NLU Delhi online admissions.',
    authority: 'National Law University, Delhi (NLU Delhi)',
    targetExams: 'AILET BA LLB (Hons.), AILET LLM, AILET Ph.D.',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 30,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black or Dark Blue Ink',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures must be sharp and clear without border shadows. Ensure file size does not exceed 30 KB.',
    tips: [
      'Use dark black or blue ink on plain white paper.',
      'Keep file size strictly between 10 KB and 30 KB.',
      'Enable shadow removal to prevent portal upload rejection.'
    ],
    faqs: [
      {
        q: 'What is the file size limit for AILET signature?',
        a: 'The AILET application portal requires signature images between 10 KB and 30 KB in JPG/JPEG format.'
      }
    ]
  },
  // 3. LSAT—India
  {
    slug: 'lsat-india-signature-resize',
    presetId: 'lsat-india',
    pageTitle: 'LSAT—India Signature Resize (400x200 px, <100 KB) - SignResize',
    metaDescription: 'Resize signature for LSAT—India online exam registration. Format to 400x200 px (4.5x2 cm), 10 KB to 100 KB JPG. 100% private.',
    keywords: 'lsat india signature resize, lsat signature size, lsac global signature format, lsat exam signature resizer',
    h1: 'LSAT—India Signature Resize & Formatter',
    subheading: 'Clear 400×200 px resolution with 10 KB to 100 KB boundaries compliant with LSAC Global online test requirements.',
    authority: 'Law School Admission Council (LSAC Global)',
    targetExams: 'LSAT—India UG, LSAT—India PG, Participating Law College Portals',
    widthPx: 400,
    heightPx: 200,
    widthCm: 4.5,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 100,
    recommendedKb: 40,
    dpi: 200,
    ink: 'Black Ink Only',
    aspectRatioLabel: '2:1 (400×200 px)',
    strictNotice: 'Scanned signature must be high resolution, legible, and placed on pure white background.',
    tips: [
      'Sign with black pen on unruled paper.',
      'Maintain 2:1 aspect ratio.',
      'Ensure clear contrast for AI biometric identity verification during the online exam.'
    ],
    faqs: [
      {
        q: 'What is the signature format for LSAT—India?',
        a: 'LSAT—India requires a clean JPG/PNG signature under 100 KB with clear contrast on a white background.'
      }
    ]
  },
  // 4. CAT
  {
    slug: 'cat-signature-resize',
    presetId: 'cat-iim',
    pageTitle: 'CAT Signature Resize 10 to 80 KB (80x35 mm) Online - SignResize',
    metaDescription: 'Resize signature for CAT (Common Admission Test - IIMs). Format to 80mm x 35mm (300x132 px), 10 KB to 80 KB JPG. Verified against IIM guidelines.',
    keywords: 'cat signature resize, cat signature size 80x35 mm, cat signature 10 to 80 kb, iim cat signature format, cat exam signature resizer',
    h1: 'CAT (IIMs) Signature Resize & Compressor (10 KB – 80 KB)',
    subheading: 'Official 80 mm × 35 mm (approx. 300×132 px) format with 10 KB to 80 KB compression strictly adhering to Indian Institutes of Management guidelines.',
    authority: 'Indian Institutes of Management (IIMs)',
    targetExams: 'CAT (IIM Ahmedabad, Bangalore, Calcutta, etc.), Non-IIM Member Business Schools, FMS, SPJIMR',
    widthPx: 300,
    heightPx: 132,
    widthCm: 8.0,
    heightCm: 3.5,
    minKb: 10,
    maxKb: 80,
    recommendedKb: 40,
    dpi: 200,
    ink: 'Black or Blue Ink Pen',
    aspectRatioLabel: '80:35 mm (~300×132 px)',
    strictNotice: 'The candidate’s signature must be on clean white unruled paper. Signatures with shadows or grey paper background will lead to application scrutiny.',
    tips: [
      'Draw an 80 mm × 35 mm light boundary and sign comfortably inside.',
      'Sign with a black or blue ballpoint pen in natural cursive handwriting.',
      'Keep file size strictly between 10 KB and 80 KB (around 30–50 KB is ideal).'
    ],
    faqs: [
      {
        q: 'What is the exact signature size for CAT 2026?',
        a: 'CAT brochures mandate dimensions of 80 mm width by 35 mm height (~300 × 132 pixels at 200 DPI) and a file size between 10 KB and 80 KB in JPG or JPEG format.'
      },
      {
        q: 'Can I use black or blue pen for CAT signature?',
        a: 'Yes, IIM guidelines permit either black or blue ink on plain white paper.'
      }
    ]
  },
  // 5. XAT
  {
    slug: 'xat-signature-resize',
    presetId: 'xat-mba',
    pageTitle: 'XAT Signature Resize 10 to 50 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for XAT (Xavier Aptitude Test - XLRI). Format to 140x60 px, 10 KB to 50 KB JPG. 100% private client-side processing.',
    keywords: 'xat signature resize, xlri signature size, xat signature 10 to 50 kb, xat exam signature resizer',
    h1: 'XAT Signature Resize & Compressor (10 KB – 50 KB)',
    subheading: 'Standard 140×60 px (4.0×2.0 cm) format with 10 KB to 50 KB file boundaries for XLRI Jamshedpur admissions.',
    authority: 'XLRI Jamshedpur',
    targetExams: 'XAT (XLRI, XIMB, IMT, TAPMI, GIM), Xavier Associate Management Institutes',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black or Blue Ink Pen',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Must be in natural running hand. Signatures in capital letters are strictly prohibited.',
    tips: [
      'Sign on plain white paper with black ink.',
      'Keep the file between 10 KB and 50 KB.',
      'Ensure high contrast so the signature is easily verifiable on exam day.'
    ],
    faqs: [
      {
        q: 'What is the signature dimension for XAT registration?',
        a: 'XAT specifies standard 140 × 60 pixels (~4.0 cm × 2.0 cm) with a file size between 10 KB and 50 KB in JPG format.'
      }
    ]
  },
  // 6. SNAP
  {
    slug: 'snap-signature-resize',
    presetId: 'snap-mba',
    pageTitle: 'SNAP Signature Resize 10 to 50 KB (200x100 px) - SignResize',
    metaDescription: 'Resize signature for SNAP (Symbiosis National Aptitude Test). Format to 200x100 px, 10 KB to 50 KB JPG. Instant & secure.',
    keywords: 'snap signature resize, symbiosis signature size, snap exam signature 10 to 50 kb, snap resizer',
    h1: 'SNAP Signature Resize & Compressor (10 KB – 50 KB)',
    subheading: 'Optimized 200×100 px format with 10 KB to 50 KB bounds for Symbiosis International University exam portal.',
    authority: 'Symbiosis International (Deemed University)',
    targetExams: 'SNAP (SIBM Pune, SCMHRD, SIIB, SICS), Symbiosis Institutes',
    widthPx: 200,
    heightPx: 100,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black or Blue Ink',
    aspectRatioLabel: '2:1 (200×100 px)',
    strictNotice: 'Ensure file is strictly between 10 KB and 50 KB in JPG format.',
    tips: [
      'Sign clearly in black or blue ink.',
      'Crop tight around text without clipping strokes.',
      'Use the paper cleaner filter to ensure white background.'
    ],
    faqs: [
      {
        q: 'What is the file size limit for SNAP signature upload?',
        a: 'The allowed file size for SNAP candidate signatures is 10 KB to 50 KB in JPEG/JPG format.'
      }
    ]
  },
  // 7. CMAT / NMAT / MAT
  {
    slug: 'cmat-nmat-signature-resize',
    presetId: 'cmat-nmat-mat',
    pageTitle: 'CMAT, NMAT & MAT Signature Resize 4 to 30 KB - SignResize',
    metaDescription: 'Resize signature for NTA CMAT, NMAT by GMAC, and AIMA MAT. Format to 140x60 px (3.5x1.5 cm), 4 KB to 30 KB JPG in black ink.',
    keywords: 'cmat signature resize, nmat signature resize, aima mat signature format, cmat signature 4 to 30 kb, mba entrance signature resize',
    h1: 'CMAT, NMAT & MAT Signature Resize (4 KB – 30 KB)',
    subheading: 'Exact 3.5×1.5 cm (140×60 px) specifications compliant with NTA CMAT, AIMA MAT, and GMAC NMAT portals.',
    authority: 'NTA / AIMA / GMAC',
    targetExams: 'NTA CMAT, NMAT by GMAC (NMIMS), AIMA MAT (CBT/PBT/IBT), ATMA',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 4,
    maxKb: 30,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'NTA CMAT strictly enforces a 4 KB minimum and 30 KB maximum. Running handwriting in black ink only.',
    tips: [
      'Sign with a black ballpoint pen on plain white paper.',
      'Set target size slider between 10 KB and 20 KB to safely satisfy all 3 portals.',
      'Ensure the background is pure white without mobile camera shadows.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for NTA CMAT?',
        a: 'CMAT requires dimensions of 3.5 cm × 1.5 cm (140 × 60 px) and file size strictly between 4 KB and 30 KB in JPG format.'
      }
    ]
  },
  // 8. KPSC
  {
    slug: 'kpsc-signature-resize',
    presetId: 'kpsc-karnataka',
    pageTitle: 'KPSC Signature Resize 10 to 40 KB (150x50 px) - SignResize',
    metaDescription: 'Resize signature for Karnataka Public Service Commission (KPSC KAS, Group C). Format to 150x50 px (3.5x1.5 cm), 10 KB to 40 KB JPG.',
    keywords: 'kpsc signature resize, karnataka psc signature size 10 to 40 kb, kpsc kas signature format, kpsc group c signature upload',
    h1: 'KPSC Signature Resize & Compressor (10 KB – 40 KB)',
    subheading: 'Official 3.5×1.5 cm (150×50 px) format with 10 KB to 40 KB file tolerance for Karnataka PSC online portal.',
    authority: 'Karnataka Public Service Commission (KPSC)',
    targetExams: 'KPSC Gazetted Probationers (KAS), Group B & C Technical/Non-Technical, PDO, FDA / SDA',
    widthPx: 150,
    heightPx: 50,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 40,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '3:1 (~150×50 px)',
    strictNotice: 'KPSC mandates signing with a black ballpoint pen on white paper. Signatures exceeding 40 KB are rejected.',
    tips: [
      'Sign inside a light 3.5 cm x 1.5 cm rectangle on plain white sheet.',
      'Keep file size between 10 KB and 40 KB.',
      'Ensure crisp, dark strokes for biometric matching.'
    ],
    faqs: [
      {
        q: 'What is the signature size for KPSC exams?',
        a: 'KPSC requires a signature size between 10 KB and 40 KB with dimensions of approximately 150 × 50 pixels (3.5 cm × 1.5 cm).'
      }
    ]
  },
  // 9. WBPSC
  {
    slug: 'wbpsc-signature-resize',
    presetId: 'wbpsc-west-bengal',
    pageTitle: 'WBPSC Signature Resize 10 to 20 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for West Bengal PSC (WBCS, Clerkship, Miscellaneous). Format to 140x60 px (4x2 cm), strictly 10 to 20 KB JPG.',
    keywords: 'wbpsc signature resize, wbcs signature size 10 to 20 kb, west bengal psc signature format, wbpsc clerkship signature resizer',
    h1: 'WBPSC Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Exact 140×60 px (4.0×2.0 cm) format with strict 10 KB to 20 KB file bounds compliant with WBPSC OTR portal.',
    authority: 'West Bengal Public Service Commission (WBPSC)',
    targetExams: 'WBCS (Exe), WBPSC Clerkship, Miscellaneous Services, Food SI, ICDS Supervisor',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'WBPSC portal strictly disallows files under 10 KB and above 20 KB. Must be running handwriting in black ink.',
    tips: [
      'Sign in black ballpoint ink on spotless white paper.',
      'Crop cleanly around the text.',
      'Ensure the final file size shows between 10.0 KB and 19.9 KB.'
    ],
    faqs: [
      {
        q: 'What is the allowed signature size for WBCS / WBPSC?',
        a: 'The allowed signature size is strictly between 10 KB and 20 KB with dimensions of 140 × 60 pixels (~4 cm × 2 cm).'
      }
    ]
  },
  // 10. APPSC & TSPSC
  {
    slug: 'appsc-tspsc-signature-resize',
    presetId: 'appsc-tspsc',
    pageTitle: 'APPSC & TGPSC Signature Resize 10 to 30 KB - SignResize',
    metaDescription: 'Resize signature for APPSC & TGPSC (Group 1, 2, 3, 4). Format to 140x60 px (3.5x1.5 cm), 10 KB to 30 KB JPG in black ink.',
    keywords: 'appsc signature resize, tspsc signature resize, tgpsc group 1 signature size, appsc group 2 signature format, andhra telangana psc signature resizer',
    h1: 'APPSC & TGPSC Signature Resize (10 KB – 30 KB)',
    subheading: 'Standard 3.5×1.5 cm (140×60 px) specifications compliant with Andhra Pradesh & Telangana PSC OTR portals.',
    authority: 'APPSC & Telangana Public Service Commission (TGPSC)',
    targetExams: 'APPSC / TGPSC Group 1, Group 2, Group 3, Group 4, Assistant Executive Engineers (AEE), Polytechnic Lecturers',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 30,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black Ink Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures in CAPITAL LETTERS are strictly rejected. Black ink on white unruled paper is mandatory.',
    tips: [
      'Sign with a black ballpoint pen on plain white paper.',
      'Keep file size strictly between 10 KB and 30 KB.',
      'Do not crop too close to characters to avoid cutting diacritics or dots.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for APPSC and TGPSC OTR?',
        a: 'Both APPSC and TGPSC require signatures sized 3.5 cm × 1.5 cm with file size between 10 KB and 30 KB in JPG format.'
      }
    ]
  },
  // 11. RPSC
  {
    slug: 'rpsc-signature-resize',
    presetId: 'rpsc-ras',
    pageTitle: 'RPSC RAS Signature Resize 10 to 50 KB (280x80 px) - SignResize',
    metaDescription: 'Resize signature for Rajasthan PSC (RPSC RAS, School Lecturer, 2nd Grade). Format to 280x80 px (7x2 cm), 10 KB to 50 KB JPG.',
    keywords: 'rpsc signature resize, rpsc ras signature size 10 to 50 kb, rpsc signature dimensions 280x80, rajasthan psc signature upload, rpsc sso portal signature resizer',
    h1: 'RPSC RAS Signature Resize & Compressor (10 KB – 50 KB)',
    subheading: 'Official 7.0×2.0 cm (280×80 px) dimensions with 10 KB to 50 KB limits for Rajasthan Single Sign On (SSO) and RPSC recruitment.',
    authority: 'Rajasthan Public Service Commission (RPSC)',
    targetExams: 'RPSC RAS / RTS, School Lecturer (1st Grade), Senior Teacher (2nd Grade), SI, Junior Accountant',
    widthPx: 280,
    heightPx: 80,
    widthCm: 7.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black or Dark Blue Ink',
    aspectRatioLabel: '7:2 (280×80 px)',
    strictNotice: 'RPSC SSO portal requires a wide 7 cm × 2 cm box (280 × 80 px) with file size between 10 KB and 50 KB.',
    tips: [
      'Draw a light 7 cm x 2 cm rectangle on white paper and sign inside.',
      'Ensure the file size is between 10 KB and 50 KB.',
      'The Clean White Paper filter enhances readability for SSO portal acceptance.'
    ],
    faqs: [
      {
        q: 'What are the signature dimensions for RPSC RAS recruitment?',
        a: 'RPSC specifies dimensions of 7 cm × 2 cm (approximately 280 × 80 pixels) and a file size between 10 KB and 50 KB in JPG format.'
      }
    ]
  },
  // 12. OPSC
  {
    slug: 'opsc-signature-resize',
    presetId: 'opsc-odisha',
    pageTitle: 'OPSC Signature Resize 10 to 25 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for Odisha Public Service Commission (OPSC OAS, ASO). Format to 140x60 px (4x2 cm), 10 KB to 25 KB JPG.',
    keywords: 'opsc signature resize, opsc oas signature size 10 to 25 kb, odisha psc signature format, opsc aso signature resizer',
    h1: 'OPSC Signature Resize & Compressor (10 KB – 25 KB)',
    subheading: 'Standard 140×60 px format with strict 10 KB to 25 KB boundaries compliant with Odisha PSC online applications.',
    authority: 'Odisha Public Service Commission (OPSC)',
    targetExams: 'OPSC Odisha Civil Services (OAS, OPS), Assistant Section Officer (ASO), Medical Officers, Assistant Professor',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 25,
    recommendedKb: 18,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signature must be candidate’s natural running hand signature in dark black ink. Must be under 25 KB.',
    tips: [
      'Use a dark black ballpoint pen on plain white paper.',
      'Keep the file between 10 KB and 25 KB.',
      'Avoid ruled lines or shadows across the text.'
    ],
    faqs: [
      {
        q: 'What is the signature file limit for OPSC OAS applications?',
        a: 'OPSC requires signature files to be between 10 KB and 25 KB in JPG format.'
      }
    ]
  },
  // 13. GPSC
  {
    slug: 'gpsc-signature-resize',
    presetId: 'gpsc-ojas',
    pageTitle: 'GPSC OJAS Signature Resize 5 to 20 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for Gujarat PSC (GPSC Class 1 & 2, Talati) on OJAS portal. Format to 140x60 px (5x2 cm), strictly 5 to 20 KB JPG.',
    keywords: 'gpsc signature resize, ojas signature size 5 to 20 kb, gujarat psc signature format, ojas gujarat signature resizer',
    h1: 'GPSC OJAS Signature Resize & Compressor (5 KB – 20 KB)',
    subheading: 'Precise 5.0×2.0 cm (140×60 px) format strictly between 5 KB and 20 KB for the Gujarat OJAS recruitment portal.',
    authority: 'Gujarat Public Service Commission (GPSC / OJAS)',
    targetExams: 'GPSC Gujarat Administrative Service Class 1 & 2, Chief Officer, Mamlatdar, State Tax Inspector (STI), DYSO',
    widthPx: 140,
    heightPx: 60,
    widthCm: 5.0,
    heightCm: 2.0,
    minKb: 5,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'The OJAS portal strictly rejects signature files over 20 KB. Signatures must be in black ink on white paper.',
    tips: [
      'Sign with a black ballpoint pen on white unruled paper.',
      'Ensure the final file is strictly below 20.0 KB and above 5.0 KB.',
      'Crop tight around the signature without borders.'
    ],
    faqs: [
      {
        q: 'What is the maximum file size for GPSC OJAS signature upload?',
        a: 'The OJAS portal enforces a strict maximum file size of 20 KB in JPG format for signatures.'
      }
    ]
  },
  // 14. HPSC & PPSC
  {
    slug: 'hpsc-ppsc-signature-resize',
    presetId: 'hpsc-ppsc',
    pageTitle: 'HPSC & PPSC Signature Resize 10 to 20 KB - SignResize',
    metaDescription: 'Resize signature for Haryana PSC (HCS) & Punjab PSC (PCS). Format to 140x60 px (3.5x1.5 cm), 10 KB to 20 KB JPG in black ink.',
    keywords: 'hpsc signature resize, ppsc signature resize, haryana hcs signature size 10 to 20 kb, punjab psc signature format, hpsc ppsc resizer',
    h1: 'HPSC & PPSC Signature Resize (10 KB – 20 KB)',
    subheading: 'Exact 3.5×1.5 cm (140×60 px) format with strict 10 KB to 20 KB limits for Haryana and Punjab Civil Services.',
    authority: 'Haryana (HPSC) & Punjab (PPSC) Public Service Commissions',
    targetExams: 'HPSC HCS (Ex. Br.), PPSC Punjab Civil Services (PCS), Assistant Professor, Veterinary Surgeon, ADO',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Both HPSC and PPSC mandate black ink signatures strictly between 10 KB and 20 KB in running handwriting.',
    tips: [
      'Use a fresh black ballpoint pen on clean white unruled paper.',
      'Ensure file size displays between 10.0 KB and 19.9 KB before uploading.',
      'Never use all-caps signatures.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for HPSC and PPSC?',
        a: 'Dimensions are 140 × 60 pixels (3.5 × 1.5 cm) and file size must be strictly between 10 KB and 20 KB in JPG format.'
      }
    ]
  },
  // 15. AFCAT
  {
    slug: 'afcat-signature-resize',
    presetId: 'afcat-iaf',
    pageTitle: 'AFCAT Signature Resize 10 to 50 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for AFCAT (Air Force Common Admission Test - IAF). Format to 140x60 px (4x2 cm), 10 KB to 50 KB JPG. 100% private.',
    keywords: 'afcat signature resize, afcat signature size 10 to 50 kb, air force afcat signature format, indian air force cdac signature resizer',
    h1: 'AFCAT Signature Resize & Compressor (10 KB – 50 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) format with 10 KB to 50 KB bounds strictly compliant with Indian Air Force C-DAC portal.',
    authority: 'Indian Air Force (IAF C-DAC)',
    targetExams: 'AFCAT Flying Branch, AFCAT Ground Duty (Technical & Non-Technical), Meteorology Branch',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signature must be signed with a black ballpoint pen on unruled white paper. Signatures in blue ink or with grey shadows will be rejected by IAF.',
    tips: [
      'Sign with a black ballpoint pen in natural cursive handwriting.',
      'Keep the file size between 10 KB and 50 KB (around 20–30 KB is optimal).',
      'Ensure the background is pure white using the Clean Paper filter.'
    ],
    faqs: [
      {
        q: 'What is the official AFCAT signature size limit?',
        a: 'The IAF AFCAT application portal requires signature images between 10 KB and 50 KB in JPG/JPEG format.'
      },
      {
        q: 'Can I use blue pen for AFCAT signature?',
        a: 'No. AFCAT notifications strictly mandate signing with a black ballpoint pen on plain white paper.'
      }
    ]
  },
  // 16. CAPF
  {
    slug: 'capf-signature-resize',
    presetId: 'capf-ac',
    pageTitle: 'CAPF (AC) Signature Resize 20 to 300 KB (350x350 px) - SignResize',
    metaDescription: 'Resize signature for UPSC CAPF (Assistant Commandants - BSF, CRPF, CISF, ITBP, SSB). Format to 350x350 px square, 20 KB to 300 KB JPG.',
    keywords: 'capf signature resize, upsc capf signature size 20 to 300 kb, capf ac signature format, bsf crpf cisf signature resizer',
    h1: 'CAPF (AC) Signature Resize & Cropper (20 KB – 300 KB)',
    subheading: 'Square 1:1 ratio (350×350 px) with 20 KB to 300 KB file bounds compliant with UPSC OTR and CAPF (AC) registration.',
    authority: 'Union Public Service Commission (UPSC)',
    targetExams: 'UPSC CAPF (Assistant Commandants) in BSF, CRPF, CISF, ITBP, and SSB',
    widthPx: 350,
    heightPx: 350,
    widthCm: 3.5,
    heightCm: 3.5,
    minKb: 20,
    maxKb: 300,
    recommendedKb: 50,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '1:1 Square (350×350 px)',
    strictNotice: 'Follows standard UPSC OTR specifications: 1:1 square aspect ratio (minimum 350×350 px) and 20 KB to 300 KB file size.',
    tips: [
      'Lock aspect ratio to 1:1 square.',
      'Black ink pen on white paper is mandatory.',
      'Aim for 40–80 KB for optimal clarity on the physical admit card.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for CAPF (AC)?',
        a: 'CAPF (AC) is conducted by UPSC and requires a square 1:1 signature (minimum 350 × 350 pixels) between 20 KB and 300 KB in JPG format.'
      }
    ]
  },
  // 17. Indian Coast Guard
  {
    slug: 'indian-coast-guard-signature-resize',
    presetId: 'indian-coast-guard',
    pageTitle: 'Indian Coast Guard Signature Resize 10 to 50 KB - SignResize',
    metaDescription: 'Resize signature for Indian Coast Guard (Navik GD, Navik DB, Yantrik). Format to 140x60 px (4x2 cm), 10 KB to 50 KB JPG. Fast & private.',
    keywords: 'coast guard signature resize, indian coast guard signature size 10 to 50 kb, navik gd signature format, join indian coast guard signature resizer',
    h1: 'Indian Coast Guard Signature Resize (10 KB – 50 KB)',
    subheading: 'Standard 140×60 px format with 10 KB to 50 KB file boundaries for Join Indian Coast Guard recruitment portal.',
    authority: 'Indian Coast Guard (Ministry of Defence)',
    targetExams: 'Navik (General Duty), Navik (Domestic Branch), Yantrik (Mechanical, Electrical, Electronics)',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black or Dark Blue Ink',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures must be clear, without camera shadows or grey background. Capital letter signatures will be rejected.',
    tips: [
      'Sign with a black or dark blue pen in running handwriting.',
      'Keep file size strictly between 10 KB and 50 KB.',
      'Use the Clean Paper filter to produce a crisp white background.'
    ],
    faqs: [
      {
        q: 'What is the signature size for Coast Guard Navik recruitment?',
        a: 'The Indian Coast Guard portal accepts signature images between 10 KB and 50 KB in JPG/JPEG format.'
      }
    ]
  },
  // 18. Agniveer
  {
    slug: 'agniveer-signature-resize',
    presetId: 'agniveer-recruitment',
    pageTitle: 'Agniveer Signature Resize 5 to 20 KB (Army, Navy, Air Force) - SignResize',
    metaDescription: 'Resize signature for Agniveer Recruitment (Join Indian Army, Navy, Air Force Agnipath). Format to 160x100 px (4.5x3 cm), strictly 5 to 20 KB JPG.',
    keywords: 'agniveer signature resize, join indian army signature size 5 to 20 kb, agnipath signature format, agniveer vayu signature resize, agniveer navy signature upload',
    h1: 'Agniveer Recruitment Signature Resize (5 KB – 20 KB)',
    subheading: 'Official 4.5×3.0 cm (160×100 px) format with strict 5 KB to 20 KB limits compliant with Join Indian Army & Agnipath portals.',
    authority: 'Ministry of Defence (Join Indian Army / Agnipath)',
    targetExams: 'Agniveer General Duty (GD), Agniveer Technical, Agniveer Clerk / Store Keeper, Agniveer Tradesmen, Agniveervayu, Agniveer Navy SSR / MR',
    widthPx: 160,
    heightPx: 100,
    widthCm: 4.5,
    heightCm: 3.0,
    minKb: 5,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '16:10 (~160×100 px)',
    strictNotice: 'Join Indian Army portal strictly enforces file size between 5.0 KB and 20.0 KB in JPG format. Files outside this range cause instant upload rejection.',
    tips: [
      'Sign in dark black ink on plain white unruled paper.',
      'Ensure the final file displays between 5.0 KB and 19.9 KB.',
      'Crop cleanly around your signature so lines remain thick and legible.'
    ],
    faqs: [
      {
        q: 'What is the signature size for Join Indian Army Agniveer registration?',
        a: 'The Join Indian Army portal requires a signature image between 5 KB and 20 KB in JPG/JPEG format, with dimensions around 160 × 100 pixels.'
      },
      {
        q: 'Can I upload a signature with blue ink for Agniveer recruitment?',
        a: 'Army recruiting guidelines mandate signing with a black ballpoint pen on plain white unruled paper for high scanner contrast.'
      }
    ]
  },
  // 19. CTET
  {
    slug: 'ctet-signature-resize',
    presetId: 'ctet-exam',
    pageTitle: 'CTET Signature Resize 4 to 30 KB (3.5x1.5 cm) Online - SignResize',
    metaDescription: 'Resize signature for CTET (Central Teacher Eligibility Test - CBSE). Format to 140x60 px (3.5x1.5 cm), strictly 4 KB to 30 KB JPG in black ink.',
    keywords: 'ctet signature resize, ctet signature size 4 to 30 kb, cbse ctet signature format, ctet 2026 signature resizer, teacher eligibility test signature upload',
    h1: 'CTET Signature Resize & Compressor (4 KB – 30 KB)',
    subheading: 'Official 3.5×1.5 cm (140×60 px) specifications with strict 4 KB to 30 KB file bounds compliant with CBSE CTET online applications.',
    authority: 'Central Board of Secondary Education (CBSE)',
    targetExams: 'CTET Paper 1 (Class I to V), CTET Paper 2 (Class VI to VIII), KVS / NVS Teacher Recruitment Eligibility',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 4,
    maxKb: 30,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'CBSE guidelines declare that signatures in CAPITAL / BLOCK LETTERS will be rejected. Signatures must be in running natural handwriting.',
    tips: [
      'Sign with a black ballpoint pen on spotless white paper.',
      'Strictly maintain file size between 4.0 KB and 30.0 KB.',
      'Crop tight around text so signature fills 75% of the frame.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for CTET 2026?',
        a: 'CBSE CTET specifies dimensions of 3.5 cm width by 1.5 cm height (~140 × 60 pixels) and a file size strictly between 4 KB and 30 KB in JPG format.'
      },
      {
        q: 'Does CTET accept blue ink signatures?',
        a: 'CBSE instructions strongly recommend signing with a black ink ballpoint pen to prevent scanning rejection.'
      }
    ]
  },
  // 20. State TETs
  {
    slug: 'state-tet-signature-resize',
    presetId: 'state-tet',
    pageTitle: 'State TET Signature Resize 10 to 50 KB (UPTET, MAHATET, REET) - SignResize',
    metaDescription: 'Resize signature for State Teacher Eligibility Tests (UPTET, MAHATET, REET, KTET, TNTET). Format to 140x60 px (3.5x1.5 cm), 10 KB to 50 KB JPG.',
    keywords: 'state tet signature resize, uptet signature size, mahatet signature format, reet signature resize 10 to 50 kb, ktet signature resizer',
    h1: 'State TET Signature Resize (UPTET, MAHATET, REET, KTET)',
    subheading: 'Universal 3.5×1.5 cm (140×60 px) format with 10 KB to 50 KB bounds for state-level teacher eligibility tests nationwide.',
    authority: 'State Education & Examination Regulatory Boards',
    targetExams: 'UPTET (UP), MAHATET (Maharashtra), REET (Rajasthan), KTET (Kerala), TNTET (Tamil Nadu), HTET (Haryana), OTET (Odisha)',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Must be candidate’s natural running cursive handwriting on white paper. Keep file size between 10 KB and 50 KB.',
    tips: [
      'Draw signature in dark black ink on unruled white paper.',
      'Target between 15 KB and 30 KB to satisfy all state TET portals.',
      'Check that the text remains crisp and legible.'
    ],
    faqs: [
      {
        q: 'What is the signature format for REET and UPTET?',
        a: 'Standard dimensions are 3.5 cm × 1.5 cm (140 × 60 px) with file size between 10 KB and 50 KB in JPG format.'
      }
    ]
  },
  // 21. UGC-NET
  {
    slug: 'ugc-net-signature-resize',
    presetId: 'ugc-net-csir',
    pageTitle: 'UGC-NET & CSIR NET Signature Resize 4 to 30 KB - SignResize',
    metaDescription: 'Resize signature for UGC-NET and CSIR UGC-NET (NTA). Format to 140x60 px (3.5x1.5 cm), 4 KB to 30 KB JPG in running black ink.',
    keywords: 'ugc net signature resize, csir net signature size 4 to 30 kb, nta ugc net signature format, jrf signature upload, assistant professor signature resizer',
    h1: 'UGC-NET & CSIR NET Signature Resize (4 KB – 30 KB)',
    subheading: 'Strict 4 KB to 30 KB file bounds and 3.5×1.5 cm (140×60 px) format compliant with National Testing Agency UGC-NET portals.',
    authority: 'National Testing Agency (NTA)',
    targetExams: 'UGC-NET (for JRF & Assistant Professorship), CSIR UGC-NET (Chemical, Earth, Life, Mathematical & Physical Sciences)',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 4,
    maxKb: 30,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'NTA strictly rejects signatures written in capital letters or signed by someone else on behalf of candidate. Running handwriting only.',
    tips: [
      'Sign with a black ballpoint pen on plain white unruled paper.',
      'Keep the file size strictly between 4.0 KB and 30.0 KB.',
      'Enable shadow removal to eliminate uneven phone photo lighting.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for UGC-NET 2026?',
        a: 'NTA specifies dimensions of 3.5 cm × 1.5 cm (~140 × 60 pixels) and a file size strictly between 4 KB and 30 KB in JPG format.'
      }
    ]
  },
  // 22. RBI
  {
    slug: 'rbi-signature-resize',
    presetId: 'rbi-grade-b',
    pageTitle: 'RBI Grade B & Assistant Signature Resize 10 to 20 KB - SignResize',
    metaDescription: 'Resize signature for Reserve Bank of India (RBI Grade B Officer & RBI Assistant). Format to 140x60 px (4x2 cm), strictly 10 to 20 KB JPG.',
    keywords: 'rbi signature resize, rbi grade b signature size 10 to 20 kb, rbi assistant signature format, reserve bank of india signature resizer',
    h1: 'RBI Grade B & Assistant Signature Resize (10 KB – 20 KB)',
    subheading: 'Exact 140×60 px (4.0×2.0 cm) format with strict 10 KB to 20 KB limits matching Reserve Bank of India Services Board guidelines.',
    authority: 'Reserve Bank of India (RBI Services Board)',
    targetExams: 'RBI Grade B (General, DEPR, DSIM), RBI Assistant, RBI Officers in Grade A',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'RBI strictly enforces the IBPS format: signatures in capital letters will result in disqualification. Black ink only.',
    tips: [
      'Sign strictly with a black ballpoint pen on spotless white paper.',
      'Ensure the final file size is between 10.0 KB and 19.9 KB.',
      'Do not compress using lossy external tools that blur edges; our engine maintains vector-sharp text.'
    ],
    faqs: [
      {
        q: 'What is the signature size for RBI Grade B application?',
        a: 'The RBI portal requires a signature image of 140 × 60 pixels (4 cm × 2 cm) strictly between 10 KB and 20 KB in JPG format.'
      }
    ]
  },
  // 23. SEBI & NABARD
  {
    slug: 'sebi-nabard-signature-resize',
    presetId: 'sebi-nabard-sidbi',
    pageTitle: 'SEBI Grade A, NABARD & SIDBI Signature Resize 10 to 20 KB - SignResize',
    metaDescription: 'Resize signature for SEBI Grade A, NABARD Grade A/B, and SIDBI Officer exams. Format to 140x60 px (4x2 cm), strictly 10 to 20 KB JPG.',
    keywords: 'sebi signature resize, sebi grade a signature size 10 to 20 kb, nabard signature format, sidbi signature resizer, regulator exam signature upload',
    h1: 'SEBI Grade A, NABARD & SIDBI Signature Resize',
    subheading: 'Standard regulatory banking format (140×60 px / 4.0×2.0 cm) with dual-boundary 10 KB to 20 KB compression.',
    authority: 'Financial Regulatory Bodies (SEBI / NABARD / SIDBI)',
    targetExams: 'SEBI Grade A (Assistant Manager), NABARD Grade A & B (RDBS/Rajbhasha), SIDBI Grade A Assistant Manager, IFSCA',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Candidates must sign in natural cursive running handwriting in black ink only. Signatures in block letters are rejected.',
    tips: [
      'Use a fresh black ballpoint pen on unruled white sheet.',
      'Maintain the file size strictly between 10.0 KB and 19.9 KB.',
      'Check that strokes are dark and legible.'
    ],
    faqs: [
      {
        q: 'What are the signature specifications for SEBI Grade A and NABARD?',
        a: 'Both regulatory bodies follow the IBPS examination pattern requiring 140 × 60 pixels with a file size strictly between 10 KB and 20 KB in JPG format.'
      }
    ]
  },
  // 24. LIC
  {
    slug: 'lic-signature-resize',
    presetId: 'lic-aao-ado',
    pageTitle: 'LIC AAO & ADO Signature Resize 10 to 20 KB (140x60 px) - SignResize',
    metaDescription: 'Resize signature for Life Insurance Corporation of India (LIC AAO, ADO, HFL). Format to 140x60 px (4x2 cm), 10 to 20 KB JPG in black ink.',
    keywords: 'lic signature resize, lic aao signature size 10 to 20 kb, lic ado signature format, lic exam signature resizer, life insurance corporation signature upload',
    h1: 'LIC AAO & ADO Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Official 140×60 px format with strict 10 KB to 20 KB file bounds verified against Life Insurance Corporation guidelines.',
    authority: 'Life Insurance Corporation of India (LIC)',
    targetExams: 'LIC AAO (Generalist/IT/Chartered Accountant), LIC ADO (Apprentice Development Officer), LIC HFL, GIC Re',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Pen Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Signatures in CAPITAL LETTERS will NOT be accepted by LIC. Must be signed with a black ballpoint pen.',
    tips: [
      'Sign only with a black ink ballpoint pen on plain white paper.',
      'Ensure the final file size is between 10.0 KB and 19.9 KB.',
      'Clean background shadows for immediate acceptance.'
    ],
    faqs: [
      {
        q: 'What is the signature requirement for LIC AAO and ADO recruitment?',
        a: 'LIC specifies dimensions of 140 × 60 pixels (~4.0 cm × 2.0 cm) and a file size strictly between 10 KB and 20 KB in JPG format.'
      }
    ]
  },
  // 25. ISRO & DRDO
  {
    slug: 'isro-drdo-signature-resize',
    presetId: 'isro-drdo',
    pageTitle: 'ISRO & DRDO Signature Resize 10 to 40 KB Online - SignResize',
    metaDescription: 'Resize signature for ISRO (ICRB Scientist/Engineer) & DRDO (CEPTAM / RAC). Format to 150x80 px (4x2 cm), 10 KB to 40 KB JPG. 100% private.',
    keywords: 'isro signature resize, drdo signature size 10 to 40 kb, isro icrb signature format, drdo ceptam signature resizer, drdo rac signature upload',
    h1: 'ISRO (ICRB) & DRDO (CEPTAM) Signature Resize (10 KB – 40 KB)',
    subheading: 'Official 150×80 px (4.0×2.0 cm) dimensions with 10 KB to 40 KB tolerance for ISRO ICRB and DRDO RAC / CEPTAM portals.',
    authority: 'ISRO (ICRB) & DRDO (CEPTAM / RAC)',
    targetExams: 'ISRO ICRB Scientist/Engineer \'SC\', Technical Assistant, DRDO CEPTAM (Senior Technical Assistant, Tech A), DRDO RAC Scientist B',
    widthPx: 150,
    heightPx: 80,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 40,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black or Dark Blue Ink',
    aspectRatioLabel: '15:8 (~150×80 px)',
    strictNotice: 'High-contrast clean scan on unruled white paper. Must be under 40 KB for successful upload.',
    tips: [
      'Sign with dark black or blue ink on unruled white paper.',
      'Maintain the file size between 10 KB and 40 KB.',
      'Crop cleanly around the signature frame.'
    ],
    faqs: [
      {
        q: 'What is the signature size for ISRO and DRDO online applications?',
        a: 'Both ISRO and DRDO portals accept signature images between 10 KB and 40 KB in JPG/JPEG format with approximate dimensions of 150 × 80 pixels.'
      }
    ]
  },
  // PAN Card Photo
  {
    slug: 'pan-card-photo-resize',
    presetId: 'pan-card-photo-nsdl',
    pageTitle: 'PAN Card Photo Resize 200 DPI (3.5x2.5 cm, <50 KB) - SignResize',
    metaDescription: 'Resize and crop applicant photograph for PAN Card NSDL (Protean) & UTIITSL. Format to 213x213 px (3.5x2.5 cm) at 200 DPI, under 50 KB JPG.',
    keywords: 'pan card photo resize, nsdl photo resize 200 dpi, utiitsl photo size, pan card photo 3.5x2.5 cm, pan photo compressor under 50 kb',
    h1: 'PAN Card Photo Resize (NSDL & UTIITSL 200 DPI)',
    subheading: 'Official 200 DPI resolution, 3.5×2.5 cm (213×213 px) dimensions, compressed under 50 KB for Protean (NSDL) and UTIITSL portals.',
    authority: 'Income Tax Department (NSDL Protean / UTIITSL)',
    targetExams: 'New PAN Card (Form 49A), PAN Card Correction / Photo Change, Minor to Major PAN Card Update',
    widthPx: 213,
    heightPx: 213,
    widthCm: 3.5,
    heightCm: 2.5,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 30,
    dpi: 200,
    ink: 'Color Photograph',
    aspectRatioLabel: '1:1 Square (213×213 px)',
    strictNotice: 'NSDL and UTIITSL require color passport photographs scanned at 200 DPI, strictly under 50 KB with a clear white background.',
    tips: [
      'Use a recent color passport photo with clear front-facing view.',
      'Ensure the background is clean white or light-colored without patterns.',
      'Keep file size between 10 KB and 50 KB.'
    ],
    faqs: [
      {
        q: 'What is the photo size requirement for NSDL PAN card application?',
        a: 'NSDL requires a color passport photo scanned at 200 DPI, with dimensions of 3.5 cm × 2.5 cm (~213 × 213 pixels) and file size under 50 KB in JPG format.'
      }
    ]
  },
  // 1. APPSC Signature Resize
  {
    slug: 'appsc-signature-resize',
    presetId: 'appsc-preset',
    pageTitle: 'APPSC Signature Resize 10 to 30 KB (140x60 px, 3.5x1.5 cm) - SignResize',
    metaDescription: 'Free APPSC signature resize tool. Resize signature to 10 to 30 KB, 140x60 px (3.5x1.5 cm) at 200 DPI for Andhra Pradesh Public Service Commission (APPSC Group 1, 2, OTPR) portal.',
    keywords: 'appsc signature resize, appsc signature size 10 to 30 kb, appsc otpr signature upload, appsc group 1 2 signature, andhra psc signature compressor',
    h1: 'APPSC Signature Resize & Cropper (10 KB – 30 KB)',
    subheading: 'Exact 140×60 px (3.5×1.5 cm) dimensions with 10–30 KB compression strictly adhering to Andhra Pradesh Public Service Commission (APPSC OTPR) guidelines.',
    authority: 'Andhra Pradesh Public Service Commission (APPSC)',
    targetExams: 'APPSC Group 1, APPSC Group 2, Group 4, Panchayat Secretary, AEE, Forest Beat Officer, APPSC OTPR',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 30,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'APPSC mandates signatures in natural running handwriting with black ballpoint pen on plain white paper. Block/capital letters will cause OTPR rejection.',
    tips: [
      'Sign in a 3.5 cm × 1.5 cm box on clean, unruled white paper with black ballpoint pen.',
      'Crop closely to remove excess white margins and shadows.',
      'Keep the file size strictly between 10.0 KB and 30.0 KB in JPG/JPEG format.'
    ],
    faqs: [
      {
        q: 'What is the official APPSC signature size for 2026?',
        a: 'The official APPSC signature dimensions are 140 × 60 pixels (3.5 cm × 1.5 cm) with file size strictly between 10 KB and 30 KB in JPG format.'
      },
      {
        q: 'Which pen ink is required for APPSC OTPR signature upload?',
        a: 'APPSC requires black ballpoint ink on clean white paper. Signatures written in capital letters will be disqualified.'
      }
    ]
  },
  // 2. TSPSC / TGPSC Signature Resize
  {
    slug: 'tspsc-signature-resize',
    presetId: 'tspsc-preset',
    pageTitle: 'TSPSC Signature Resize 10 to 30 KB (140x60 px, 3.5x1.5 cm) - SignResize',
    metaDescription: 'Official TSPSC / TGPSC signature resize tool. Resize signature to 10 to 30 KB, 140x60 px (3.5x1.5 cm) for Telangana Public Service Commission (Group 1, 2, 3, 4, OTR).',
    keywords: 'tspsc signature resize, tgpsc signature size 10 to 30 kb, telangana psc otr signature upload, tspsc group 1 2 signature resizer',
    h1: 'TSPSC / TGPSC Signature Resize (10 KB – 30 KB)',
    subheading: 'Official 140×60 px (3.5×1.5 cm) dimensions and 10–30 KB file size limits for Telangana Public Service Commission (TGPSC OTR).',
    authority: 'Telangana Public Service Commission (TGPSC / TSPSC)',
    targetExams: 'TGPSC Group 1, Group 2, Group 3, Group 4, Assistant Executive Engineer, VRO, TSPSC OTR Registration',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 30,
    recommendedKb: 20,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'TGPSC/TSPSC requires running handwriting in black ink on plain white sheet. Signatures with shadows or ruled paper lines will be rejected.',
    tips: [
      'Ensure the background is spotless white with high contrast.',
      'Do not write full name in capital letters; use running signature.',
      'Check that file size displays between 10 KB and 30 KB before submitting.'
    ],
    faqs: [
      {
        q: 'What is the required signature size for TSPSC / TGPSC OTR?',
        a: 'TGPSC / TSPSC requires 140 × 60 px (3.5 cm × 1.5 cm) dimensions and 10 KB to 30 KB file size in JPG/JPEG format.'
      }
    ]
  },
  // 3. APSC Signature Resize
  {
    slug: 'apsc-signature-resize',
    presetId: 'apsc-preset',
    pageTitle: 'APSC Signature Resize 10 to 50 KB (140x60 px, 4x2 cm) - SignResize',
    metaDescription: 'Free APSC Assam signature resizer & cropper. Format signature to 140x60 px (4x2 cm), 10 to 50 KB file size for Assam Public Service Commission (CCE, JE, Inspector).',
    keywords: 'apsc signature resize, apsc cce signature size, apsc signature 10 to 50 kb, assam psc signature crop, apsc recruitment upload',
    h1: 'APSC Assam Signature Resize (10 KB – 50 KB)',
    subheading: 'Precise 140×60 px (4.0×2.0 cm) dimensions and 10–50 KB dual-boundary compression adhering to Assam Public Service Commission guidelines.',
    authority: 'Assam Public Service Commission (APSC)',
    targetExams: 'APSC CCE (Combined Competitive Exam), Junior Engineer, Forest Ranger, Inspector of Taxes, APSC Recruitment',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'APSC portal requires black ink signature on white background, strictly between 10 KB and 50 KB.',
    tips: [
      'Use dark black ink on plain white paper.',
      'Enable the Clean White Paper filter to eliminate shadows.',
      'Verify the file size is under 50 KB.'
    ],
    faqs: [
      {
        q: 'What is the signature file limit for APSC CCE Assam?',
        a: 'The APSC application portal requires signature images between 10 KB and 50 KB in JPG or JPEG format.'
      }
    ]
  },
  // 4. DSSSB Signature Resize
  {
    slug: 'dsssb-signature-resize',
    presetId: 'dsssb-preset',
    pageTitle: 'DSSSB Signature Resize 10 to 40 KB (140x110 px, 3.5x2.75 cm) - SignResize',
    metaDescription: 'Official DSSSB signature resize & crop tool. Resize signature to 140x110 px (3.5x2.75 cm), 10 to 40 KB for Delhi Subordinate Services Selection Board (OARS portal).',
    keywords: 'dsssb signature resize, dsssb signature size 140x110, dsssb oars signature upload, delhi subordinate signature compressor 40 kb',
    h1: 'DSSSB Signature Resize (140×110 px, 10 KB – 40 KB)',
    subheading: 'Official 140×110 px dimensions and 10–40 KB file size limits for Delhi Subordinate Services Selection Board (DSSSB OARS).',
    authority: 'Delhi Subordinate Services Selection Board (DSSSB)',
    targetExams: 'DSSSB PRT, TGT, PGT, Junior Assistant, Nursing Officer, DASS Grade-IV, DSSSB OARS Portal',
    widthPx: 140,
    heightPx: 110,
    widthCm: 3.5,
    heightCm: 2.75,
    minKb: 10,
    maxKb: 40,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Dark Black Ink Only',
    aspectRatioLabel: '14:11 (140×110 px)',
    strictNotice: 'DSSSB OARS portal requires a specific 140×110 pixel resolution in dark black ink. File size must not exceed 40 KB.',
    tips: [
      'Draw a 3.5 cm × 2.75 cm box on plain white paper and sign inside with a black pen.',
      'Crop neatly to the edges of the box.',
      'Ensure the final file size is between 10 KB and 40 KB.'
    ],
    faqs: [
      {
        q: 'What is the official DSSSB signature resolution and size?',
        a: 'DSSSB OARS specifies dimensions of 140 pixels width by 110 pixels height (approx 3.5 cm × 2.75 cm) and a file size between 10 KB and 40 KB in JPG format.'
      }
    ]
  },
  // 5. India Post GDS Photo Resize
  {
    slug: 'india-post-gds-photo-resize',
    presetId: 'india-post-gds-photo',
    pageTitle: 'India Post GDS Photo Resize 20 to 50 KB (200x230 px) - SignResize',
    metaDescription: 'Official India Post GDS photo & signature resize tool. Resize passport photo to 200x230 px (20 to 50 KB) and signature to 10 to 20 KB for Gramin Dak Sevak online portal.',
    keywords: 'india post gds photo resize, gds photo size 20 to 50 kb, india post gds signature resize, gramin dak sevak photo compressor 200x230',
    h1: 'India Post GDS Photo & Signature Resize (200×230 px)',
    subheading: 'Official 200×230 px dimensions and 20–50 KB dual-boundary compression for Department of Posts India Post GDS Online Engagement.',
    authority: 'Department of Posts (India Post GDS Online)',
    targetExams: 'India Post GDS (Branch Postmaster - BPM, Assistant Branch Postmaster - ABPM, Dak Sevak)',
    widthPx: 200,
    heightPx: 230,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 20,
    maxKb: 50,
    recommendedKb: 35,
    dpi: 200,
    ink: 'Color Photograph',
    aspectRatioLabel: '20:23 (200×230 px)',
    strictNotice: 'India Post GDS portal requires a clear recent color passport photograph (200×230 px, 20–50 KB) with white background.',
    tips: [
      'Use a recent color photo with eyes open and face clearly visible.',
      'Ensure the background is clean white or light grey.',
      'Keep the file size between 20.0 KB and 50.0 KB.'
    ],
    faqs: [
      {
        q: 'What is the photo dimension and file size for India Post GDS?',
        a: 'India Post GDS requires photo dimensions of 200 × 230 pixels with file size strictly between 20 KB and 50 KB in JPG/JPEG format.'
      },
      {
        q: 'What is the signature requirement for India Post GDS?',
        a: 'Signature must be 140 × 60 pixels, between 10 KB and 20 KB, in JPG format.'
      }
    ]
  },
  // 6. Kerala PSC Photo Resize
  {
    slug: 'kerala-psc-photo-resize',
    presetId: 'kerala-psc-photo',
    pageTitle: 'Kerala PSC Photo Resize 150x200 px (Name & Date, 20-30 KB) - SignResize',
    metaDescription: 'Kerala PSC Thulasi OTR photo resize tool. Format photo to 150x200 px (3.5x4.5 cm) with candidate name and date printed at bottom, 20 to 30 KB JPG.',
    keywords: 'kerala psc photo resize, kerala psc thulasi photo size 150x200, kerala psc name and date on photo, kerala psc photo compressor 20 to 30 kb',
    h1: 'Kerala PSC Thulasi Photo Resize (150×200 px with Name & Date)',
    subheading: 'Official 150×200 px (3.5×4.5 cm) photo formatting with candidate name & date text stamp, 20–30 KB for Kerala PSC Thulasi One Time Registration.',
    authority: 'Kerala Public Service Commission (KPSC Thulasi OTR)',
    targetExams: 'Kerala PSC LDC, KAS, Police Constable, Fireman, Village Extension Officer, Kerala PSC Thulasi Portal',
    widthPx: 150,
    heightPx: 200,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 20,
    maxKb: 30,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Color Photo with Name/Date',
    aspectRatioLabel: '3:4 (150×200 px)',
    strictNotice: 'Kerala PSC Thulasi strictly mandates candidate name and date of photo taken printed in black font on a white strip at the bottom of the photo.',
    tips: [
      'Enter your full name and recent photo date in the Name & Date on Photo section.',
      'Ensure the background is light colored or white.',
      'File size must strictly sit between 20.0 KB and 30.0 KB.'
    ],
    faqs: [
      {
        q: 'Is candidate name and date mandatory on Kerala PSC photo?',
        a: 'Yes. Kerala PSC guidelines strictly require the candidate name and date of photograph taken printed in a white box at the bottom of the image.'
      },
      {
        q: 'What is the exact photo resolution for Kerala PSC Thulasi OTR?',
        a: 'Dimensions must be 150 pixels width by 200 pixels height (3.5 cm × 4.5 cm), with file size between 20 KB and 30 KB.'
      }
    ]
  },
  // 7. MPPSC Signature Resize
  {
    slug: 'mppsc-signature-resize',
    presetId: 'mppsc-preset',
    pageTitle: 'MPPSC Signature Resize 10 to 50 KB (200x100 px, 5x2.5 cm) - SignResize',
    metaDescription: 'Official MPPSC signature resize & compressor tool. Resize signature to 200x100 px (5x2.5 cm), 10 to 50 KB for Madhya Pradesh Public Service Commission portal.',
    keywords: 'mppsc signature resize, mppsc signature size 10 to 50 kb, mppsc state service exam signature, mp psc signature compressor',
    h1: 'MPPSC Signature Resize & Cropper (10 KB – 50 KB)',
    subheading: 'Official 200×100 px (5.0×2.5 cm) dimensions and 10–50 KB file size limits for Madhya Pradesh Public Service Commission (mppsc.mp.gov.in).',
    authority: 'Madhya Pradesh Public Service Commission (MPPSC)',
    targetExams: 'MPPSC State Service Exam (SSE), State Forest Service (SFS), Assistant Professor, MPPSC Recruitment',
    widthPx: 200,
    heightPx: 100,
    widthCm: 5.0,
    heightCm: 2.5,
    minKb: 10,
    maxKb: 50,
    recommendedKb: 25,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '2:1 (200×100 px)',
    strictNotice: 'MPPSC requires clear black ink running signature on clean white paper. No blur or heavy shadows allowed.',
    tips: [
      'Sign with black pen inside a 5.0 cm × 2.5 cm rectangle.',
      'Crop tight to maintain 2:1 aspect ratio.',
      'Check file size is under 50 KB.'
    ],
    faqs: [
      {
        q: 'What is the signature dimension for MPPSC online application?',
        a: 'MPPSC specifies signature dimensions of 200 × 100 pixels (5.0 cm × 2.5 cm) and file size between 10 KB and 50 KB in JPG/JPEG format.'
      }
    ]
  },
  // 8. OSSSC Signature Resize
  {
    slug: 'osssc-signature-resize',
    presetId: 'osssc-preset',
    pageTitle: 'OSSSC Signature Resize 10 to 20 KB (140x60 px, 3.5x1.5 cm) - SignResize',
    metaDescription: 'Free OSSSC signature resize tool. Resize signature to 10 to 20 KB, 140x60 px for Odisha Sub-ordinate Staff Selection Commission (CRE, RI, ARI, Amin).',
    keywords: 'osssc signature resize, osssc signature size 10 to 20 kb, osssc cre signature upload, odisha subordinate signature compressor',
    h1: 'OSSSC Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Official 140×60 px dimensions and 10–20 KB dual-boundary compression for Odisha Sub-ordinate Staff Selection Commission (osssc.gov.in).',
    authority: 'Odisha Sub-ordinate Staff Selection Commission (OSSSC)',
    targetExams: 'OSSSC Combined Recruitment Exam (CRE), RI, ARI, Amin, ICDS Supervisor, Junior Assistant, Panchayat Executive Officer (PEO)',
    widthPx: 140,
    heightPx: 60,
    widthCm: 3.5,
    heightCm: 1.5,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'OSSSC mandates signature between 10 KB and 20 KB. Signatures in capital letters will be summarily rejected.',
    tips: [
      'Sign in running handwriting with black ballpoint ink on plain white paper.',
      'Use the Clean White Paper filter to remove paper texture and darkness.',
      'Confirm the file size is between 10.0 KB and 19.9 KB.'
    ],
    faqs: [
      {
        q: 'What is the signature file size limit for OSSSC applications?',
        a: 'The OSSSC portal requires signature files strictly between 10 KB and 20 KB in JPG or JPEG format.'
      }
    ]
  },
  // ─── NEW HIGH-PRIORITY PAGES — October 2026 Surge ───────────────────────────
  // 1. RRB ALP & Technician Signature
  {
    slug: 'rrb-alp-signature-resize',
    presetId: 'rrb-alp-technician',
    pageTitle: 'RRB ALP Signature Resize 10 to 20 KB (140x60 px) 2026 - SignResize',
    metaDescription: 'Resize signature for RRB ALP & Technician Grade 3 recruitment 2026 online. Format to 140x60 px (4x2 cm), 10 KB to 20 KB JPG for Railway Recruitment Board ALP/Technician portal. Free & private.',
    keywords: 'rrb alp signature resize, rrb alp signature size 10 to 20 kb, rrb alp signature 140x60, rrb technician signature resize, railway alp signature resizer, rrb alp technician 2026 apply online, rrb alp signature format',
    h1: 'RRB ALP & Technician Signature Resize (10 KB – 20 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) dimensions with strict 10 KB to 20 KB bounds for Railway Recruitment Board ALP & Technician Grade 3 portals (CEN 05/2024 & 06/2026).',
    authority: 'Railway Recruitment Board (RRB)',
    targetExams: 'RRB ALP (Assistant Loco Pilot) CEN 05/2024, RRB Technician Grade 3, RRB ALP 2026 CEN 06/2026',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Railway Recruitment Boards strictly reject signatures in CAPITAL LETTERS or any unnatural handwriting. Sign in running cursive script.',
    tips: [
      'Sign with a dense black ballpoint pen on clean, spotless unruled white paper.',
      'Crop tightly so the signature fills 75–85% of the frame without clipping edges.',
      'Use the Clean White Paper filter to remove mobile camera shadows and yellow tint.',
      'Verify the downloaded file is strictly between 10.0 KB and 19.9 KB before portal upload.'
    ],
    faqs: [
      {
        q: 'What is the RRB ALP signature size for 2026 recruitment?',
        a: 'The official RRB ALP & Technician signature size is 140 pixels wide by 60 pixels tall (approximately 4.0 cm × 2.0 cm) with a file size strictly between 10 KB and 20 KB in JPG/JPEG format.'
      },
      {
        q: 'Is the RRB ALP signature size the same as RRB NTPC?',
        a: 'Yes. RRB ALP, RRB NTPC, RRB Group D, and RRB JE all follow the same Railway Recruitment Board standard: 140×60 px, 10 KB to 20 KB, JPG format, black ink on white paper.'
      },
      {
        q: 'Can I use blue ink for RRB ALP signature?',
        a: 'RRB notifications strongly prefer black ink on plain white paper for all recruitment including ALP. Blue ink signatures with low contrast often face scrutiny and may be rejected during document verification.'
      },
      {
        q: 'What happens if my RRB ALP signature is over 20 KB?',
        a: 'The RRB online application portal will block the upload if the file exceeds 20 KB. Use SignResize to compress your signature precisely to 14–19 KB for a safe upload margin.'
      }
    ]
  },
  // 2. SSC GD Constable Signature
  {
    slug: 'ssc-gd-signature-resize',
    presetId: 'ssc-gd-constable',
    pageTitle: 'SSC GD Constable Signature Resize 10 to 20 KB (140x60 px) 2026 - SignResize',
    metaDescription: 'Resize signature for SSC GD Constable 2026 recruitment online. Format to 140x60 px, 10 to 20 KB JPG for BSF, CISF, CRPF, SSB, ITBP, AR, and SSF portals. Free, instant, 100% private.',
    keywords: 'ssc gd signature resize, ssc gd constable signature size, ssc gd signature 10 to 20 kb, ssc gd signature 140x60, ssc gd constable 2026 apply online, ssc gd signature format 2026, bsf cisf signature resize',
    h1: 'SSC GD Constable Signature Resize (10 KB – 20 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) dimensions with strict 10–20 KB SSC portal compliance for GD Constable recruitment in BSF, CISF, CRPF, SSB, ITBP, AR, and SSF.',
    authority: 'Staff Selection Commission (SSC)',
    targetExams: 'SSC GD Constable (BSF, CISF, CRPF, SSB, ITBP, AR, SSF, NCB), SSC GD 2026 Recruitment',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'SSC strictly rejects signatures written in CAPITAL LETTERS or BLOCK LETTERS for GD Constable applications. Signature must be in natural running cursive handwriting.',
    tips: [
      'Use a black ballpoint pen on clean, unruled white paper — not a gel or ink pen that smudges.',
      'Keep the signature consistent with your Class 10 admit card or school records.',
      'Apply the Clean White Paper filter to remove any shadow or phone camera light artifact.',
      'Ensure file size is between 10.0 KB and 19.9 KB — the SSC portal validates on upload.'
    ],
    faqs: [
      {
        q: 'What is the official SSC GD Constable signature size for 2026?',
        a: 'The official SSC GD Constable signature requirements are: 140 pixels wide × 60 pixels tall (4.0 cm × 2.0 cm), file size strictly between 10 KB and 20 KB, in JPG/JPEG format with a white background.'
      },
      {
        q: 'Is the SSC GD signature size different from SSC CGL?',
        a: 'No. SSC GD Constable and SSC CGL both use the same Staff Selection Commission portal standard: 140×60 px, 10 KB to 20 KB, JPG, black ink, no capital letters. The SSC uses one unified document upload module.'
      },
      {
        q: 'Which forces are covered under SSC GD Constable recruitment?',
        a: 'SSC GD Constable recruitment covers Border Security Force (BSF), Central Industrial Security Force (CISF), Central Reserve Police Force (CRPF), Sashastra Seema Bal (SSB), Indo-Tibetan Border Police (ITBP), Assam Rifles (AR), Secretariat Security Force (SSF), and Narcotics Control Bureau (NCB).'
      },
      {
        q: 'What if I accidentally upload a capital letters signature for SSC GD?',
        a: 'SSC\'s automated system flags capital-letter signatures during document verification. Candidates may be disqualified at the scrutiny stage, even after clearing the CBE and PET. Always sign in natural running handwriting.'
      }
    ]
  },
  // 3. SSC CHSL Signature
  {
    slug: 'ssc-chsl-signature-resize',
    presetId: 'ssc-chsl',
    pageTitle: 'SSC CHSL Signature Resize 10 to 20 KB (140x60 px) 2026 - SignResize',
    metaDescription: 'Resize signature for SSC CHSL (Combined Higher Secondary Level) 2026 online. Format to 140x60 px, 10 to 20 KB JPG for SSC CHSL Tier 1 and Tier 2 portals. Free, instant, private.',
    keywords: 'ssc chsl signature resize, ssc chsl signature size 2026, ssc chsl signature 10 to 20 kb, ssc chsl signature 140x60, ssc chsl tier 1 signature size, ssc chsl apply online 2026, chsl signature format',
    h1: 'SSC CHSL Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Exact 140×60 px (4.0×2.0 cm) dimensions with dual-boundary 10–20 KB compression for SSC CHSL Tier 1 CBE and Tier 2 (Skill Test) portals.',
    authority: 'Staff Selection Commission (SSC)',
    targetExams: 'SSC CHSL Tier 1 (CBE), SSC CHSL Tier 2 (Descriptive Paper & Skill Test), SSC CHSL 2026 Notification',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'SSC CHSL uses the same portal standard as SSC CGL. Signatures in CAPITAL / BLOCK LETTERS are categorically rejected during document verification.',
    tips: [
      'Sign with a fresh black ballpoint pen on white unruled paper. Avoid gel pens that bleed through.',
      'Keep your signature consistent across all SSC exams — a mismatch can raise identity concerns.',
      'Compress to exactly 14–19 KB for a comfortable margin within the 10–20 KB portal limit.',
      'Use Clean White Paper mode to eliminate mobile phone camera shadows before download.'
    ],
    faqs: [
      {
        q: 'What is the SSC CHSL signature size and dimensions for 2026?',
        a: 'The SSC CHSL portal requires a signature of 140 × 60 pixels (4.0 cm × 2.0 cm) in JPG/JPEG format with a file size strictly between 10 KB and 20 KB.'
      },
      {
        q: 'Is SSC CHSL signature size the same as SSC CGL and SSC MTS?',
        a: 'Yes. SSC CGL, SSC CHSL, SSC MTS, SSC CPO, and SSC GD all use the same Staff Selection Commission OTR portal document upload standards: 140×60 px, 10–20 KB, JPG, black ink on white paper.'
      },
      {
        q: 'What posts are covered under SSC CHSL 2026 recruitment?',
        a: 'SSC CHSL (Combined Higher Secondary Level) recruits for Lower Division Clerk (LDC), Junior Secretariat Assistant (JSA), Postal Assistant (PA), Sorting Assistant (SA), and Data Entry Operator (DEO) in various Central Government Ministries and Departments.'
      },
      {
        q: 'Do I need to upload signature again at SSC CHSL Tier 2 skill test?',
        a: 'Candidates shortlisted for Tier 2 may need to upload fresh documents if notification so specifies. Your original portal-uploaded signature from Tier 1 application is generally used for the entire recruitment cycle unless the SSC issues a separate instruction.'
      }
    ]
  },
  // 4. NEET UG Photo Resize
  {
    slug: 'neet-photo-resize',
    presetId: 'neet-ug-photo',
    pageTitle: 'NEET Photo Resize 10 to 200 KB (3.5x4.5 cm) Online 2026 - SignResize',
    metaDescription: 'Resize NEET UG & PG photo for NTA portal online. Format passport photo to 3.5x4.5 cm (400x500 px), 10 KB to 200 KB JPG with white background, name & date printed. Free & instant.',
    keywords: 'neet photo resize, neet ug photo size 10 to 200 kb, neet 2026 photo resize, nta neet photo dimensions, neet photo resizer online, neet ug photo 3.5x4.5 cm, neet photo with name and date, neet photo compressor',
    h1: 'NEET Photo Resize & Compressor (10 KB – 200 KB)',
    subheading: 'Official 3.5×4.5 cm passport-style photo with white background, 10 KB to 200 KB bounds, and name+date printing — fully compliant with the NTA NEET UG & PG portal.',
    authority: 'National Testing Agency (NTA)',
    targetExams: 'NEET UG 2026, NEET PG 2026, NEET SS, NTA CUET, JEE Main (Photo), JEE Advanced',
    widthPx: 400,
    heightPx: 500,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 10,
    maxKb: 200,
    recommendedKb: 50,
    dpi: 200,
    ink: 'Any (Passport Photo)',
    aspectRatioLabel: '4:5 (3.5×4.5 cm)',
    strictNotice: 'NTA NEET requires the candidate\'s name and photo-taken date to be clearly printed below the photograph. Photo must have 80% face coverage with both ears visible and a pure white background.',
    tips: [
      'Use a plain white background; avoid studio backgrounds, patterns, or coloured backdrops.',
      'Ensure both ears are visible and the face covers at least 80% of the photo frame.',
      'Print candidate name and date of photo in English below the image before scanning or clicking.',
      'Compress to 40–80 KB for optimal clarity well within the 200 KB ceiling.'
    ],
    faqs: [
      {
        q: 'What is the official NEET photo size for 2026 NTA portal?',
        a: 'The NTA NEET portal requires a passport-style photograph of 3.5 cm × 4.5 cm (approximately 400 × 500 pixels at 200 DPI), with a file size between 10 KB and 200 KB in JPG/JPEG format and a white background.'
      },
      {
        q: 'Is candidate name and date required on NEET photo?',
        a: 'Yes. NTA NEET guidelines require the candidate\'s name and the date the photo was taken to be clearly written/printed in English at the bottom of the passport photograph before uploading. Absence of this information can lead to form rejection.'
      },
      {
        q: 'Can I upload a coloured-background photo for NEET?',
        a: 'No. The NTA NEET portal mandates a pure white background for the passport photograph. Photos with studio gradients, coloured walls, or patterned backdrops will be rejected during scrutiny.'
      },
      {
        q: 'What is the NEET photo size in KB and pixels?',
        a: 'NEET photo must be 10 KB to 200 KB (JPG format) and ideally 400 × 500 pixels or a similar 4:5 ratio crop matching the 3.5 × 4.5 cm physical size at 200 DPI.'
      }
    ]
  },
  // 5. RRB Group D Photo Resize
  {
    slug: 'rrb-group-d-photo-resize',
    presetId: 'rrb-group-d-photo',
    pageTitle: 'RRB Group D Photo Resize 30 to 70 KB (3.5x4.5 cm) Online 2026 - SignResize',
    metaDescription: 'Resize passport photo for RRB Group D (Level 1) recruitment 2026. Format to 3.5x4.5 cm (240x320 px), 30 KB to 70 KB JPG with white background for Railway Recruitment Board portal. Free & instant.',
    keywords: 'rrb group d photo resize, rrb group d photo size 30 to 70 kb, rrb group d photo 3.5x4.5 cm, rrb group d photo dimensions 2026, railway group d photo resizer, rrc group d photo format, rrb group d photo compressor',
    h1: 'RRB Group D Photo Resize & Compressor (30 KB – 70 KB)',
    subheading: 'Official 3.5×4.5 cm (240×320 px) colour passport photo with white background and 30–70 KB size range — fully compliant with Railway Recruitment Board (RRC) Level 1 Group D portal.',
    authority: 'Railway Recruitment Board / Railway Recruitment Cell (RRB / RRC)',
    targetExams: 'RRB Group D (Level 1 Posts) — Track Maintainer Grade IV, Helper, Assistant Pointsman, Gateman, Porter, Hospital Attendant',
    widthPx: 240,
    heightPx: 320,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 30,
    maxKb: 70,
    recommendedKb: 50,
    dpi: 200,
    ink: 'Any (Passport Photo)',
    aspectRatioLabel: '3:4 (3.5×4.5 cm)',
    strictNotice: 'RRB Group D portal rejects photographs with tinted spectacles, headgear (except for religious reasons), or dark/patterned backgrounds. Photograph must have a white or light grey background.',
    tips: [
      'Take the photo in bright, even indoor or outdoor daylight — avoid flash as it creates shadows.',
      'Wear formal or semi-formal attire; avoid caps, hats, or heavy jewellery.',
      'Keep the photo background white or very light grey — patterned walls and studio backdrops are rejected.',
      'Compress to 45–65 KB for comfortable clearance within the 30–70 KB portal limit.'
    ],
    faqs: [
      {
        q: 'What is the photo size for RRB Group D 2026 application?',
        a: 'The RRB Group D (Level 1) portal requires a colour passport photograph of 3.5 cm × 4.5 cm (approximately 240 × 320 pixels), with a file size between 30 KB and 70 KB in JPG/JPEG format.'
      },
      {
        q: 'Can I use a selfie as my RRB Group D application photo?',
        a: 'RRB guidelines require a clear passport-style photograph with a white or light background taken in good lighting conditions. While professional studio photos are preferred, a good-quality selfie with a plain white background and proper framing can be acceptable if it meets all technical specs.'
      },
      {
        q: 'Should I wear spectacles in the RRB Group D photo?',
        a: 'RRB strongly advises candidates not to wear spectacles (especially tinted/sunglasses) in the passport photograph. If you wear prescription glasses for vision, check the specific notification, but the standard guidance is to photograph without glasses for consistency with biometric verification.'
      },
      {
        q: 'Is the RRB Group D photo size same as RRB NTPC and ALP?',
        a: 'The photo size is the same: 3.5 × 4.5 cm, 30–70 KB, JPG. However, Group D applications are handled through RRC (Railway Recruitment Cell) rather than RRB, though the document upload portal follows the same technical specifications.'
      }
    ]
  },
  // ─── BATCH 2: Week 2 October 2026 Pages ──────────────────────────────────────
  // 1. CTET Photo Resize
  {
    slug: 'ctet-photo-resize',
    presetId: 'ctet-photo',
    pageTitle: 'CTET Photo Resize 10 to 100 KB (3.5x4.5 cm) December 2026 - SignResize',
    metaDescription: 'Resize CTET photo for December 2026 exam online. Format passport photo to 3.5x4.5 cm, 10 KB to 100 KB JPG with white background for CBSE CTET portal (ctet.nic.in). Free & instant.',
    keywords: 'ctet photo resize, ctet photo size 10 to 100 kb, ctet 2026 photo resize, cbse ctet photo dimensions, ctet photo resizer online, ctet december 2026 photo size, ctet photo 3.5x4.5 cm, ctet photo and signature resize',
    h1: 'CTET Photo Resize & Compressor (10 KB – 100 KB)',
    subheading: 'Official 3.5×4.5 cm passport-style photo with white background and 10–100 KB bounds — fully compliant with the CBSE CTET portal for December 2026 exam.',
    authority: 'Central Board of Secondary Education (CBSE)',
    targetExams: 'CTET December 2026 (Paper I & Paper II), CTET July/September 2026',
    widthPx: 280,
    heightPx: 360,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 10,
    maxKb: 100,
    recommendedKb: 40,
    dpi: 200,
    ink: 'Any (Passport Photo)',
    aspectRatioLabel: '7:9 (3.5×4.5 cm)',
    strictNotice: 'CTET requires a recent passport-size photograph (taken within the last 6 months) with a white or light-coloured background. The photograph must be without dark glasses and in formal attire.',
    tips: [
      'Use a plain white or off-white background — no patterns, colours, or studio gradients.',
      'The photograph must have been taken within the last 6 months from the application date.',
      'Ensure the face is clearly visible, front-facing, with no headgear (except for religious reasons).',
      'Compress to 30–80 KB for optimal portal acceptance within the 10–100 KB range.'
    ],
    faqs: [
      {
        q: 'What is the official CTET photo size for December 2026 exam?',
        a: 'CBSE CTET requires a passport-size photograph of 3.5 cm × 4.5 cm, with a file size between 10 KB and 100 KB in JPG/JPEG format. The photo must have a white or light-coloured background.'
      },
      {
        q: 'What are the CTET photo and signature specifications together?',
        a: 'CTET photo: 3.5 × 4.5 cm, 10–100 KB JPG. CTET signature: 3.5 × 1.5 cm (140 × 60 px), 3–30 KB JPG in black ink running handwriting. Use our CTET Signature Resize tool for the signature.'
      },
      {
        q: 'Is CTET photo the same as NTA NEET photo size?',
        a: 'Both are passport size (3.5×4.5 cm), but the file size ranges differ slightly: CTET allows 10–100 KB while NEET allows 10–200 KB. The CTET portal is managed by CBSE (ctet.nic.in) while NEET is managed by NTA (neet.nta.nic.in).'
      },
      {
        q: 'Can I use an old photograph for CTET 2026 December application?',
        a: 'No. CBSE CTET guidelines require the photograph to have been taken within the last 6 months from the date of application. Using an old photograph can lead to identity mismatch issues at the examination centre.'
      }
    ]
  },
  // 2. IBPS Clerk Signature
  {
    slug: 'ibps-clerk-signature-resize',
    presetId: 'ibps-clerk',
    pageTitle: 'IBPS Clerk Signature Resize 10 to 20 KB (140x60 px) 2026 - SignResize',
    metaDescription: 'Resize signature for IBPS Clerk (Junior Associate & Office Assistant) recruitment 2026 online. Format to 140x60 px, 10 to 20 KB JPG for IBPS clerk portal. Free, instant, private.',
    keywords: 'ibps clerk signature resize, ibps clerk signature size 10 to 20 kb, ibps clerk signature 140x60, ibps clerk 2026 apply online, ibps clerk signature format, ibps rrb office assistant signature size, ibps clerk photo and signature',
    h1: 'IBPS Clerk Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) signature with strict 10–20 KB bounds for IBPS Clerk (Junior Associate) and IBPS RRB Office Assistant recruitment portals.',
    authority: 'Institute of Banking Personnel Selection (IBPS)',
    targetExams: 'IBPS Clerk (CRP Clerks-XVI), IBPS RRB Office Assistant (Multipurpose), IBPS RRB Junior Associate 2026',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'IBPS Clerk portal strictly rejects signatures in CAPITAL / BLOCK LETTERS. Candidates must use their usual natural running cursive handwriting identical to their identity proofs.',
    tips: [
      'Sign with a black ballpoint pen on white, unruled paper — maintain your natural signature style.',
      'Keep file size between 10.0 KB and 19.9 KB for guaranteed portal acceptance.',
      'Use the Clean White Paper filter to remove any shadow from mobile camera capture.',
      'Ensure your IBPS Clerk signature matches the one on your Aadhaar/PAN for biometric consistency.'
    ],
    faqs: [
      {
        q: 'What is the IBPS Clerk signature size and dimension for 2026?',
        a: 'The official IBPS Clerk signature specifications are: 140 × 60 pixels (4.0 cm × 2.0 cm), file size strictly between 10 KB and 20 KB, in JPG/JPEG format with a white background and black ink.'
      },
      {
        q: 'Is the IBPS Clerk signature size the same as IBPS PO?',
        a: 'Yes. IBPS PO and IBPS Clerk both use the same document upload portal (ibps.in) with identical specifications: 140×60 px, 10–20 KB JPG. The entire IBPS recruitment infrastructure shares one standard.'
      },
      {
        q: 'What is the IBPS Clerk photo size for 2026?',
        a: 'IBPS Clerk requires a passport-size photograph of 3.5 × 4.5 cm (approximately 240 × 320 px), between 20 KB and 50 KB in JPG format. The photo must have a white or light background taken within the past 3 months.'
      },
      {
        q: 'What posts are covered under IBPS Clerk CRP Clerks-XVI?',
        a: 'IBPS Clerk (CRP Clerks-XVI) recruits Junior Associates (Customer Support & Sales) across participating public sector banks including Bank of Baroda, Canara Bank, Punjab National Bank, Union Bank of India, and others.'
      }
    ]
  },
  // 3. SBI PO Signature
  {
    slug: 'sbi-po-signature-resize',
    presetId: 'sbi-po',
    pageTitle: 'SBI PO Signature Resize 10 to 20 KB (140x60 px) 2026 - SignResize',
    metaDescription: 'Resize signature for SBI PO (Probationary Officer) recruitment 2026 online. Format to 140x60 px, 10 to 20 KB JPG for SBI PO portal (sbi.co.in/careers). Free, instant, 100% private.',
    keywords: 'sbi po signature resize, sbi po signature size 10 to 20 kb, sbi po signature 140x60, sbi po 2026 apply online, sbi probationary officer signature format, sbi po signature resize online, state bank signature resize',
    h1: 'SBI PO Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Exact 140×60 px (4.0×2.0 cm) dimensions with 10–20 KB dual-boundary compression for State Bank of India Probationary Officer recruitment portal.',
    authority: 'State Bank of India (SBI)',
    targetExams: 'SBI PO (Probationary Officer) 2026, SBI Management Executive 2026',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'SBI PO portal mandates running cursive handwriting. Signatures in CAPITAL LETTERS or unnatural styles are rejected during document verification stage.',
    tips: [
      'Sign using a fresh black ballpoint pen on unruled white paper — avoid using a gel or ink pen.',
      'Keep the signature consistent with your bank account signature and identity proofs.',
      'Crop tightly to 140×60 px so the signature fills 75–85% of the image area.',
      'Target 13–18 KB file size for comfortable margin within the 10–20 KB portal limit.'
    ],
    faqs: [
      {
        q: 'What is the SBI PO signature size for 2026 recruitment?',
        a: 'The SBI PO portal requires a handwritten signature of 140 × 60 pixels (4.0 cm × 2.0 cm) in JPG/JPEG format, with a file size strictly between 10 KB and 20 KB and a white background.'
      },
      {
        q: 'Is SBI PO signature size different from SBI Clerk?',
        a: 'No. SBI PO and SBI Clerk both use the same State Bank recruitment portal with identical document upload standards: 140×60 px, 10–20 KB JPG, black ink on white paper.'
      },
      {
        q: 'What is the SBI PO photo size for application?',
        a: 'SBI PO requires a passport-size photo of 3.5 × 4.5 cm (240 × 320 px), between 20 KB and 50 KB in JPG format, with a white or light background taken within the past 3 months.'
      },
      {
        q: 'How many stages are there in the SBI PO 2026 selection process?',
        a: 'SBI PO selection involves 3 stages: Phase I (Preliminary Exam - 100 marks, 1 hour), Phase II (Main Exam - 250 marks + 50 marks Descriptive), and Phase III (Group Exercise + Personal Interview). Document upload is required at the application stage.'
      }
    ]
  },
  // 4. SBI Clerk Signature
  {
    slug: 'sbi-clerk-signature-resize',
    presetId: 'sbi-clerk',
    pageTitle: 'SBI Clerk Signature Resize 10 to 20 KB (140x60 px) 2026 - SignResize',
    metaDescription: 'Resize signature for SBI Clerk (Junior Associate) recruitment 2026 online. Format to 140x60 px, 10 to 20 KB JPG for SBI Clerk application portal. Free, instant, private.',
    keywords: 'sbi clerk signature resize, sbi clerk signature size 10 to 20 kb, sbi clerk signature format 2026, sbi junior associate signature resize, sbi clerk 2026 apply online, sbi clerk signature 140x60, state bank clerk signature',
    h1: 'SBI Clerk Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) signature with strict 10–20 KB bounds for State Bank of India Junior Associate (Clerk) recruitment 2026.',
    authority: 'State Bank of India (SBI)',
    targetExams: 'SBI Clerk (Junior Associate, Customer Support & Sales) 2026',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'SBI Clerk portal rejects signatures in CAPITAL / BLOCK LETTERS. Natural running handwriting is mandatory. Signature must match your bank account records.',
    tips: [
      'Sign with a black ballpoint pen — the same style as your bank passbook/Aadhaar signature.',
      'Photograph on spotless white unruled paper in good lighting with no shadows.',
      'Compress to exactly 13–18 KB for safe margin within the 10–20 KB portal bound.',
      'Ensure the file downloads as JPG (not PNG or WEBP) — the SBI portal only accepts JPG.'
    ],
    faqs: [
      {
        q: 'What is the SBI Clerk signature size for 2026?',
        a: 'SBI Clerk signature must be 140 × 60 pixels (4.0 cm × 2.0 cm), file size between 10 KB and 20 KB, in JPG/JPEG format with black ink on a white background.'
      },
      {
        q: 'Can SBI Clerk candidates upload a digital signature?',
        a: 'No. SBI requires a handwritten (physical) signature on white paper, photographed/scanned, and uploaded as a JPG. Digital signatures created on screens are not accepted for government bank recruitment portals.'
      },
      {
        q: 'What is the last date to apply for SBI Clerk 2026?',
        a: 'SBI Clerk 2026 notification and application dates are released by SBI at sbi.co.in/careers. Based on previous cycles, notifications typically appear between July and September, with examinations in November/December. Check the official SBI website for the current cycle dates.'
      },
      {
        q: 'Is there a negative marking in SBI Clerk Prelims 2026?',
        a: 'Yes. SBI Clerk Preliminary Exam has a negative marking of 0.25 marks for each wrong answer. The exam consists of 100 questions for 100 marks: English Language (30 Q), Numerical Ability (35 Q), and Reasoning Ability (35 Q).'
      }
    ]
  },
  // 5. Rajasthan Police Signature
  {
    slug: 'rajasthan-police-signature-resize',
    presetId: 'rajasthan-police-sig',
    pageTitle: 'Rajasthan Police Constable Signature Resize 10 to 20 KB Online 2026 - SignResize',
    metaDescription: 'Resize signature for Rajasthan Police Constable & SI recruitment 2026 online. Format to 140x60 px, 10 to 20 KB JPG for RPRB police portal. Free, instant, 100% private.',
    keywords: 'rajasthan police signature resize, rajasthan police constable signature size, rajasthan police bharti signature 10 to 20 kb, rprb signature resize 2026, rajasthan police si signature format, raj police signature resize online',
    h1: 'Rajasthan Police Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) signature format with 10–20 KB file size bounds for Rajasthan Police Recruitment Board (RPRB) Constable and SI recruitment portal.',
    authority: 'Rajasthan Police Recruitment Board (RPRB)',
    targetExams: 'Rajasthan Police Constable 2026, Rajasthan Police Sub-Inspector (SI) 2026, Rajasthan Police Driver Constable',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ballpoint Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'Rajasthan Police portal requires a running handwriting signature in black ink. Capital letter signatures are rejected during document verification.',
    tips: [
      'Sign in running cursive handwriting with a black ballpoint pen on white unruled paper.',
      'Ensure file size is between 10.0 KB and 19.9 KB for the RPRB portal.',
      'Use Clean White Paper filter to remove mobile camera yellowish tint from the background.',
      'Keep the signature consistent with your Class 10 board certificate and Aadhaar records.'
    ],
    faqs: [
      {
        q: 'What is the Rajasthan Police signature size for 2026 recruitment?',
        a: 'The Rajasthan Police Recruitment Board (RPRB) requires a handwritten signature of 140 × 60 pixels (4.0 cm × 2.0 cm), file size between 10 KB and 20 KB in JPG/JPEG format.'
      },
      {
        q: 'What is the Rajasthan Police Constable 2026 photo size?',
        a: 'Rajasthan Police Constable photo must be a recent passport-size photograph of 3.5 × 4.5 cm (approximately 240 × 320 px), between 20 KB and 50 KB in JPG format, with a white background.'
      },
      {
        q: 'How many vacancies are there in Rajasthan Police 2026?',
        a: 'Rajasthan Police recruitment cycles are announced by the RPRB (Rajasthan Police Recruitment Board). Check the official website policerecruit.rajasthan.gov.in for the latest vacancy notifications and application schedules.'
      },
      {
        q: 'Is Rajasthan Police signature upload different from RPSC?',
        a: 'Yes. Rajasthan Police uses the RPRB portal while RPSC uses rpsc.rajasthan.gov.in — both have different document upload interfaces, though the signature size standard (140×60 px, 10–20 KB) is similar across most Rajasthan state portals.'
      }
    ]
  },
  // 6. Rajasthan Police Photo
  {
    slug: 'rajasthan-police-photo-resize',
    presetId: 'rajasthan-police-photo',
    pageTitle: 'Rajasthan Police Photo Resize 20 to 50 KB (3.5x4.5 cm) Online 2026 - SignResize',
    metaDescription: 'Resize passport photo for Rajasthan Police Constable & SI recruitment 2026. Format to 3.5x4.5 cm, 20 to 50 KB JPG with white background for RPRB police portal. Free & instant.',
    keywords: 'rajasthan police photo resize, rajasthan police constable photo size, rajasthan police bharti photo 20 to 50 kb, rprb photo resize 2026, rajasthan police photo dimensions, raj police photo resizer online',
    h1: 'Rajasthan Police Photo Resize & Compressor (20 KB – 50 KB)',
    subheading: 'Official 3.5×4.5 cm (240×320 px) passport photo with white background and 20–50 KB size range for Rajasthan Police Recruitment Board (RPRB) Constable and SI portal.',
    authority: 'Rajasthan Police Recruitment Board (RPRB)',
    targetExams: 'Rajasthan Police Constable 2026, Rajasthan Police Sub-Inspector (SI), Rajasthan Police Driver Constable',
    widthPx: 240,
    heightPx: 320,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 20,
    maxKb: 50,
    recommendedKb: 35,
    dpi: 200,
    ink: 'Any (Passport Photo)',
    aspectRatioLabel: '3:4 (3.5×4.5 cm)',
    strictNotice: 'Rajasthan Police portal rejects photographs with dark backgrounds, tinted glasses, or headgear. The photograph must be recent (within 6 months) with a white or plain light background.',
    tips: [
      'Take the photo in bright, even natural light — avoid flash as it creates harsh shadows.',
      'Wear neat formal or semi-formal clothing; no caps or hats (except religious headgear).',
      'Background must be plain white or very light — no patterned walls or studio backdrops.',
      'Compress to 28–45 KB for safe clearance within the 20–50 KB portal limit.'
    ],
    faqs: [
      {
        q: 'What is the photo size for Rajasthan Police Constable 2026 application?',
        a: 'Rajasthan Police requires a recent passport-size photograph of 3.5 cm × 4.5 cm (approximately 240 × 320 pixels), with a file size between 20 KB and 50 KB in JPG/JPEG format and a white background.'
      },
      {
        q: 'Can I use a selfie photo for Rajasthan Police application?',
        a: 'RPRB requires a clear passport-style photograph meeting technical specifications. A well-lit selfie against a white background that meets the 3.5×4.5 cm dimensions and 20–50 KB file size may be acceptable, but a professional or controlled-environment photo is recommended.'
      },
      {
        q: 'What documents are required for Rajasthan Police physical test?',
        a: 'For the Rajasthan Police Physical Test (PST/PAT), candidates typically need: printed admit card, original + photocopy of 10th marksheet, Aadhaar card, domicile certificate, caste certificate (if applicable), and 4–6 passport photos matching the application photo.'
      },
      {
        q: 'Is Rajasthan Police photo size the same as RPSC?',
        a: 'The standard passport photo size (3.5×4.5 cm) is used by both RPRB and RPSC, but specific KB limits and exact portal requirements may vary. Always check the official notification for the exact specifications of each recruitment cycle.'
      }
    ]
  },
  // 7. Bihar Police Signature
  {
    slug: 'bihar-police-signature-resize',
    presetId: 'bihar-police-sig',
    pageTitle: 'Bihar Police Constable Signature Resize 10 to 20 KB Online 2026 - SignResize',
    metaDescription: 'Resize signature for Bihar Police Constable recruitment 2026 online. Format to 140x60 px, 10 to 20 KB JPG for BPSSC Bihar Police portal. Free, instant, 100% private.',
    keywords: 'bihar police signature resize, bihar police constable signature size, bpssc signature resize 2026, bihar police signature 10 to 20 kb, bihar police bharti signature format, bihar police si signature resize',
    h1: 'Bihar Police Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) signature format with 10–20 KB file bounds for Bihar Police Subordinate Services Commission (BPSSC) Constable recruitment portal.',
    authority: 'Bihar Police Subordinate Services Commission (BPSSC)',
    targetExams: 'Bihar Police Constable 2026, Bihar Police SI 2026, BPSSC Recruitment',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black or Blue Ink',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'BPSSC Bihar Police portal rejects signatures in capital letters. Candidates must sign in natural running handwriting with black or blue ink on white paper.',
    tips: [
      'Sign with a black or blue ballpoint pen on white unruled paper in your natural handwriting.',
      'Keep file size between 10.0 KB and 19.9 KB for BPSSC portal compatibility.',
      'Enable Clean White Paper filter to remove paper background yellow tint from the photo.',
      'Ensure the signature matches your identity proofs (Aadhaar, 10th certificate).'
    ],
    faqs: [
      {
        q: 'What is the Bihar Police signature size for 2026 recruitment?',
        a: 'The BPSSC Bihar Police portal requires a handwritten signature of 140 × 60 pixels (4.0 cm × 2.0 cm), file size between 10 KB and 20 KB in JPG/JPEG format, using black or blue ink on white paper.'
      },
      {
        q: 'What is the Bihar Police Constable 2026 photo size?',
        a: 'Bihar Police Constable requires a passport-size photograph of 3.5 × 4.5 cm, between 20 KB and 100 KB in JPG format, with a white or light background taken within the past 6 months.'
      },
      {
        q: 'Is there any BPSSC Bihar Police recruitment open in 2026?',
        a: 'Bihar Police recruitment is managed by the Bihar Police Subordinate Services Commission (BPSSC) at bpssc.bih.nic.in. Check their official website for the latest notifications as Bihar frequently holds large constable and SI recruitment drives.'
      },
      {
        q: 'Can I use blue ink for Bihar Police signature?',
        a: 'Yes. BPSSC Bihar Police accepts both black and blue ink for handwritten signatures, unlike SSC and IBPS which mandate black ink only. However, ensure the ink contrast is high and the signature is clearly legible.'
      }
    ]
  },
  // 8. Bihar Police Photo
  {
    slug: 'bihar-police-photo-resize',
    presetId: 'bihar-police-photo',
    pageTitle: 'Bihar Police Photo Resize 20 to 100 KB (3.5x4.5 cm) Online 2026 - SignResize',
    metaDescription: 'Resize passport photo for Bihar Police Constable & SI recruitment 2026. Format to 3.5x4.5 cm, 20 KB to 100 KB JPG with white background for BPSSC portal. Free & instant.',
    keywords: 'bihar police photo resize, bihar police constable photo size 2026, bpssc photo resize, bihar police photo 20 to 100 kb, bihar police photo dimensions 3.5x4.5, bihar police photo resizer online',
    h1: 'Bihar Police Photo Resize & Compressor (20 KB – 100 KB)',
    subheading: 'Official 3.5×4.5 cm (240×320 px) passport photo with white background and 20–100 KB bounds for Bihar Police Subordinate Services Commission (BPSSC) portal.',
    authority: 'Bihar Police Subordinate Services Commission (BPSSC)',
    targetExams: 'Bihar Police Constable 2026, Bihar Police SI 2026, BPSSC Driver Constable',
    widthPx: 240,
    heightPx: 320,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 20,
    maxKb: 100,
    recommendedKb: 50,
    dpi: 200,
    ink: 'Any (Passport Photo)',
    aspectRatioLabel: '3:4 (3.5×4.5 cm)',
    strictNotice: 'BPSSC requires a recent passport photograph (within 6 months) with a white or light background. No tinted glasses, heavy makeup, or headgear (except for religious reasons).',
    tips: [
      'Take the photo in good natural lighting — avoid harsh flash or dim indoor lighting.',
      'Ensure the face is clearly visible and occupies at least 70% of the photo frame.',
      'White or very light grey background is required — avoid patterned or coloured backdrops.',
      'Keep file size between 30–90 KB for safe clearance within the 20–100 KB range.'
    ],
    faqs: [
      {
        q: 'What is the photo size for Bihar Police Constable 2026?',
        a: 'BPSSC requires a passport-size photograph of 3.5 cm × 4.5 cm (approximately 240 × 320 pixels), file size between 20 KB and 100 KB in JPG/JPEG format, with a white or light background.'
      },
      {
        q: 'Can I submit the same photo for Bihar Police and BPSC exams?',
        a: 'You can use the same physical photo specifications (3.5×4.5 cm, white background, recent), but ensure the digital file meets each portal\'s specific KB limits: BPSSC allows up to 100 KB while BPSC may have different limits. Always check the specific recruitment notification.'
      },
      {
        q: 'What is the age limit for Bihar Police Constable 2026?',
        a: 'Bihar Police Constable age limit is typically 18–25 years for unreserved male candidates, with relaxations for SC/ST (5 years), OBC (3 years), women candidates, and Ex-servicemen as per Bihar state reservation norms.'
      },
      {
        q: 'Does Bihar Police require a photo with or without spectacles?',
        a: 'BPSSC requires candidates to submit photos without spectacles (especially dark/tinted glasses) for biometric verification accuracy. If you wear prescription glasses, it is advisable to photograph without them as per the standard recruitment portal guidelines.'
      }
    ]
  },
  // 9. MP Police Signature
  {
    slug: 'mp-police-signature-resize',
    presetId: 'mp-police-sig',
    pageTitle: 'MP Police Constable Signature Resize 10 to 20 KB Online 2026 - SignResize',
    metaDescription: 'Resize signature for MP Police Constable (MPPEB / Vyapam) recruitment 2026 online. Format to 140x60 px, 10 to 20 KB JPG for Madhya Pradesh police portal. Free & instant.',
    keywords: 'mp police signature resize, mp police constable signature size, mppeb signature resize 2026, mp police signature 10 to 20 kb, madhya pradesh police signature format, vyapam police signature resize, mp police bharti signature',
    h1: 'MP Police Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Official 140×60 px (4.0×2.0 cm) signature format with 10–20 KB file bounds for MP Police Constable recruitment via MPPEB (peb.mp.gov.in).',
    authority: 'Madhya Pradesh Professional Examination Board (MPPEB / Vyapam)',
    targetExams: 'MP Police Constable 2026, MP Police SI 2026, MPPEB Recruitment, MP Police GD, MP Police ASI',
    widthPx: 140,
    heightPx: 60,
    widthCm: 4.0,
    heightCm: 2.0,
    minKb: 10,
    maxKb: 20,
    recommendedKb: 15,
    dpi: 200,
    ink: 'Black Ink Only',
    aspectRatioLabel: '7:3 (~140×60 px)',
    strictNotice: 'MPPEB MP Police portal requires a running handwriting signature in black ink. Capital letters or printed signatures are rejected during document verification.',
    tips: [
      'Sign in natural running handwriting with black ballpoint ink on white unruled paper.',
      'Ensure file is between 10.0 KB and 19.9 KB before uploading to the MPPEB portal.',
      'Apply Clean White Paper filter to ensure the background is pure white for biometric clarity.',
      'Keep your signature consistent with your school records and Aadhaar documents.'
    ],
    faqs: [
      {
        q: 'What is the MP Police signature size for 2026 recruitment?',
        a: 'The MPPEB MP Police portal requires a handwritten signature of 140 × 60 pixels (4.0 cm × 2.0 cm), file size between 10 KB and 20 KB in JPG/JPEG format, using black ink on white paper.'
      },
      {
        q: 'Is MP Police recruitment done through MPPEB or Vyapam?',
        a: 'MP Police recruitment is conducted by the Madhya Pradesh Professional Examination Board (MPPEB), previously known as Vyapam (Vyavsayik Pareeksha Mandal). The official portal is peb.mp.gov.in. The brand name "Vyapam" is still widely used informally.'
      },
      {
        q: 'What is the MP Police Constable 2026 photo size?',
        a: 'MP Police Constable photo must be a passport-size photograph of 3.5 × 4.5 cm (approximately 240 × 320 px), between 20 KB and 50 KB in JPG format, with a white or light background.'
      },
      {
        q: 'How many stages are there in MP Police Constable selection?',
        a: 'MP Police Constable selection typically has 3 stages: (1) Written CBT Exam, (2) Physical Standard Test (PST) & Physical Efficiency Test (PET), and (3) Medical Examination followed by Document Verification.'
      }
    ]
  },
  // 10. MP Police Photo
  {
    slug: 'mp-police-photo-resize',
    presetId: 'mp-police-photo',
    pageTitle: 'MP Police Photo Resize 20 to 50 KB (3.5x4.5 cm) Online 2026 - SignResize',
    metaDescription: 'Resize passport photo for MP Police Constable (MPPEB) recruitment 2026. Format to 3.5x4.5 cm, 20 KB to 50 KB JPG with white background for MP Police portal. Free & instant.',
    keywords: 'mp police photo resize, mp police constable photo size 2026, mppeb photo resize, mp police photo 20 to 50 kb, madhya pradesh police photo dimensions, mp police photo resizer online, vyapam police photo size',
    h1: 'MP Police Photo Resize & Compressor (20 KB – 50 KB)',
    subheading: 'Official 3.5×4.5 cm (240×320 px) passport photo with white background and 20–50 KB bounds for MP Police Constable recruitment via MPPEB (peb.mp.gov.in).',
    authority: 'Madhya Pradesh Professional Examination Board (MPPEB / Vyapam)',
    targetExams: 'MP Police Constable 2026, MP Police Sub-Inspector (SI) 2026, MPPEB GD Constable',
    widthPx: 240,
    heightPx: 320,
    widthCm: 3.5,
    heightCm: 4.5,
    minKb: 20,
    maxKb: 50,
    recommendedKb: 35,
    dpi: 200,
    ink: 'Any (Passport Photo)',
    aspectRatioLabel: '3:4 (3.5×4.5 cm)',
    strictNotice: 'MPPEB rejects photographs with dark or patterned backgrounds, tinted glasses, or headgear. The photograph must show a clear front-facing view with a white or light plain background.',
    tips: [
      'Take the photo in bright even lighting — a well-lit room or outdoor shade works best.',
      'No sunglasses, caps, or hats; front-facing position with both ears visible.',
      'White or very light grey background only — avoid any studio patterned backdrops.',
      'Compress to 25–45 KB for safe clearance within the 20–50 KB MPPEB portal limit.'
    ],
    faqs: [
      {
        q: 'What is the photo size for MP Police Constable 2026?',
        a: 'MPPEB requires a passport-size photograph of 3.5 cm × 4.5 cm (approximately 240 × 320 pixels), file size between 20 KB and 50 KB in JPG/JPEG format, with a white or plain light background.'
      },
      {
        q: 'Can I use the same photo for MP Police and MPSC/MPPSC exams?',
        a: 'The standard passport photo specifications (3.5×4.5 cm, white background, recent) apply to most MP state recruitment portals. However, verify the exact KB limits per exam: MPPEB typically allows 20–50 KB while MPPSC may have different limits.'
      },
      {
        q: 'What is the physical fitness test for MP Police 2026?',
        a: 'MP Police Physical Efficiency Test (PET) typically includes a running test (1600m for men, 800m for women), long jump, shot put, and for SI category, high jump. Exact standards are published in the official notification on peb.mp.gov.in.'
      },
      {
        q: 'When will MP Police Constable 2026 notification be released?',
        a: 'MP Police Constable recruitment notifications are published by MPPEB on peb.mp.gov.in. Madhya Pradesh typically conducts large-scale police recruitment drives annually; check the official portal for the latest notification and application schedule.'
      }
    ]
  }
];
