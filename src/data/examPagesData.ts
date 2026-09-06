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
  }
];
