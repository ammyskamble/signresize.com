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
    keywords: 'rrb signature resize, rrb signature 10 to 20 kb, railway signature resize, rrb ntpc signature size, rrb alp signature resizer, rrb group d signature format, railway recruitment board signature resize',
    h1: 'Railway RRB Signature Resize & Compressor (10 KB – 20 KB)',
    subheading: 'Standard 140×60 px (4.0×2.0 cm) format with strict 10 KB to 20 KB file bounds for Railway Recruitment Boards nationwide.',
    authority: 'Railway Recruitment Boards (RRB / RRC)',
    targetExams: 'RRB NTPC, RRB ALP (Assistant Loco Pilot), RRB Technician, RRB Group D (Level 1), RRB JE, RPF Sub-Inspector & Constable',
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
  }
];
