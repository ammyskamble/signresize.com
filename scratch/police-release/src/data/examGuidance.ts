import type { ExamPageInfo } from './examPagesData';
import type { ExamPreset } from '../types';

// These dates record a source review, not a new recruitment announcement.
export const GUIDANCE_REVIEWED_ON = '2026-10-20';
export const EXAM_SOURCES = {
  // The filename says 2025; the document served on the review date is CGL 2026.
  cgl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2025.pdf',
  chsl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2025.pdf',
  mts: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_mts_2025.pdf?mode=light',
  ctet: 'https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2026/05/202605111250310617.pdf',
  ctet2022: 'https://cdnbbsr.s3waas.gov.in/s3443dec3062d0286986e21dc0631734c9/uploads/2022/10/2022103152.pdf',
};

export interface RequirementRow {
  label: string;
  value: string;
  evidence: string;
}

export interface ExamGuidance {
  reviewedOn?: string;
  title: string;
  cycle: string;
  summary: string;
  rows: RequirementRow[];
  caution: string;
  links: Array<{ href: string; label: string }>;
  changes: string;
}

const sscLinks = [
  { href: '/ssc-signature-resize/', label: 'SSC signature tools overview' },
  { href: '/ssc-cgl-signature-resize/', label: 'CGL signature size and notice conflict' },
  { href: '/ssc-chsl-signature-resize/', label: 'CHSL signature upload guidance' },
  { href: '/ssc-mts-signature-resize/', label: 'MTS & Havaldar signature checklist' },
  { href: '/live-webcam-photo-checker/', label: 'Practise live photo framing' },
];
const sscRows: RequirementRow[] = [
  { label: 'Signature file', value: 'JPG/JPEG, 10–20 KB', evidence: 'Published upload requirement in the linked notices.' },
  { label: 'Signature dimensions', value: 'Read the notice for your cycle', evidence: 'CGL 2026 and CHSL 2025 each contain a 6 × 2 cm / 4 × 2 cm conflict. MTS 2025 states about 6 × 2 cm.' },
  { label: 'Photograph', value: 'Live capture in the SSC application', evidence: 'An edited photograph from this tool does not replace the application’s live capture step.' },
  { label: 'Tool output', value: '600 × 200 px preparation canvas', evidence: 'A 3:1 working preset, not an SSC-mandated pixel count. Confirm the active form before uploading.' },
];
const sscTips = [
  'Open the notice for your exact exam and cycle before selecting a preset.',
  'Keep every signature stroke visible. Inspect the downloaded JPEG at its actual size.',
  'For live photo capture, use the SSC application itself. A local webcam test is only practice.',
  'Check the application preview before submitting. File checks cannot confirm identity, authenticity or acceptance.',
];
const sscCommon: Partial<ExamPageInfo> = {
  widthPx: 600, heightPx: 200, widthCm: 6, heightCm: 2,
  minKb: 10, maxKb: 20, recommendedKb: 15, dpi: 254,
  aspectRatioLabel: '3:1 working canvas',
  hidePhysicalSize: true,
  pixelNote: 'Preparation preset only. The cited notices do not mandate 600 × 200 px or 254 DPI; check the dimension guidance above.',
  ink: 'Follow the signature instructions in your active application',
  verifiedOn: GUIDANCE_REVIEWED_ON,
  tips: sscTips,
  relatedTools: ['ssc-signature-resize', 'ssc-cgl-signature-resize', 'ssc-chsl-signature-resize', 'ssc-mts-signature-resize'],
};
const conflict = 'The main application instructions say about 6 × 2 cm, but an appendix says about 4 × 2 cm. We cannot resolve that discrepancy for SSC. Check the active form or seek SSC clarification before submitting; this tool does not certify portal acceptance.';

export const GUIDANCE_PAGE_UPDATES: Record<string, Partial<ExamPageInfo>> = {
  'ssc-signature-resize': {
    ...sscCommon,
    pageTitle: 'SSC Signature Resizer 10–20 KB | Exam-wise Upload Guide',
    metaDescription: 'Prepare a 10–20 KB signature JPEG and choose CGL, CHSL or MTS guidance. Compare source notices, dimension caveats and SSC live photo requirements.',
    keywords: 'ssc signature resizer, ssc signature 10 to 20 kb, ssc upload guide',
    h1: 'SSC signature resizer: choose your exam',
    subheading: 'Start with the exam-specific notice below, then prepare your signature. SignResize is independent of SSC.',
    targetExams: 'the cited CGL 2026, CHSL 2025 and MTS 2025 notices; other cycles need a separate check',
    guidanceLabel: 'Exam-wise source guide',
    sources: [
      { label: 'CGL 2026 notice: §9.4–9.6 and Annexure IV', url: EXAM_SOURCES.cgl },
      { label: 'CHSL 2025 notice: §9.4–9.6 and Annexure IV', url: EXAM_SOURCES.chsl },
      { label: 'MTS & Havaldar 2025 notice: application instructions', url: EXAM_SOURCES.mts },
    ],
    strictNotice: 'Do not apply one SSC preset to every recruitment. Confirm the exam, cycle and live form requirements.',
    faqs: [
      { q: 'Which SSC signature tool should I use?', a: 'Use this overview for general preparation, then open the CGL, CHSL or MTS page matching your application. Each page identifies the notice it covers.' },
      { q: 'Is 140 × 60 px a universal SSC requirement?', a: 'The notices reviewed here do not establish that universal pixel requirement. A tool preset is a preparation choice, not proof that SSC requires those pixels.' },
      { q: 'Can this tool replace SSC live photo capture?', a: 'No. Complete live capture inside the official SSC application. Our webcam checker can help you practise lighting and framing only.' },
    ],
  },
  'ssc-cgl-signature-resize': {
    ...sscCommon,
    pageTitle: 'SSC CGL Signature Size & Live Photo Rules | 2026 Notice',
    metaDescription: 'CGL 2026 signature upload: 10–20 KB JPEG, live photo capture and the notice’s conflicting cm dimensions. Prepare a file and check the official source.',
    keywords: 'ssc cgl signature size 2026, ssc cgl live photo, cgl signature resizer',
    h1: 'SSC CGL 2026 signature size and live photo guide',
    subheading: 'Prepare a signature JPEG using the CGL notice. Read the dimension discrepancy before choosing your crop.',
    targetExams: 'Combined Graduate Level Examination 2026',
    guidanceLabel: 'CGL 2026 notice reviewed',
    sources: [{ label: 'CGL 2026: §9.4–9.6, PDF p.18; Annexure IV, PDF p.71', url: EXAM_SOURCES.cgl }],
    strictNotice: conflict,
    faqs: [
      { q: 'What signature file does the CGL 2026 notice request?', a: 'A scanned JPG/JPEG of 10–20 KB. Section 9.6 says about 6 × 2 cm; Annexure IV says about 4 × 2 cm. Confirm the intended dimensions with the active form or SSC.' },
      { q: 'Why does the CGL source link have 2025 in its filename?', a: 'At our review on 20 October 2026, the linked SSC file opens with “Combined Graduate Level Examination, 2026”. We identify the cycle from the document, not its filename.' },
      { q: 'Do I upload a resized passport photo for CGL?', a: 'The cited application instructions use live photo capture. Do not substitute an edited or pre-existing photo for that step.' },
    ],
  },
  'ssc-chsl-signature-resize': {
    ...sscCommon,
    pageTitle: 'SSC CHSL Signature Size | 2025 Notice & Upload Checklist',
    metaDescription: 'Check CHSL 2025 signature JPEG limits, live photo instructions and conflicting dimensions in the official notice. Includes a 10–20 KB preparation tool.',
    keywords: 'ssc chsl signature size, chsl signature upload, chsl 2025 photo rules',
    h1: 'SSC CHSL signature upload: 2025 notice guide',
    subheading: 'This page covers the CHSL 2025 notice reviewed below. Confirm a newer notice separately if your application is for another cycle.',
    targetExams: 'Combined Higher Secondary (10+2) Level Examination 2025',
    guidanceLabel: 'CHSL 2025 source scope',
    sources: [{ label: 'CHSL 2025: §9.6, PDF p.12; Annexure IV, PDF p.53', url: EXAM_SOURCES.chsl }],
    strictNotice: conflict,
    faqs: [
      { q: 'Does this page verify CHSL 2026 rules?', a: 'No. The source checked for this page is the CHSL 2025 notice. Do not carry these requirements forward without checking the notice for your cycle.' },
      { q: 'What does the CHSL notice say about signature dimensions?', a: 'Section 9.6 states about 6 × 2 cm while Annexure IV states about 4 × 2 cm. Both specify 10–20 KB. Confirm the dimension discrepancy with SSC or the active application.' },
      { q: 'Can I reuse a CGL signature for CHSL?', a: 'Only after checking the CHSL application requirements and inspecting the actual file. Shared file-size limits alone do not establish compliance.' },
    ],
  },
  'ssc-mts-signature-resize': {
    ...sscCommon,
    pageTitle: 'SSC MTS Signature Size | 2025 Havaldar Upload Guide',
    metaDescription: 'MTS and Havaldar 2025 signature guidance: JPEG 10–20 KB, about 6 × 2 cm and live photo capture. Read the cited notice before using the resizer.',
    keywords: 'ssc mts signature size, havaldar signature resizer, mts 2025 photo',
    h1: 'SSC MTS & Havaldar signature upload guide',
    subheading: 'Prepare a signature with the MTS & Havaldar 2025 notice in view. New recruitment cycles require a fresh source check.',
    targetExams: 'MTS and Havaldar (CBIC & CBN) Examination 2025',
    guidanceLabel: 'MTS 2025 source scope',
    sources: [{ label: 'MTS & Havaldar 2025: Annexure IV, PDF p.56, item 1(b)', url: EXAM_SOURCES.mts }],
    strictNotice: 'The cited notice specifies about 6 × 2 cm. The pixel canvas is our working choice; inspect readability and confirm the active form.',
    faqs: [
      { q: 'What is the MTS 2025 signature size?', a: 'Annexure IV requests a JPEG of 10–20 KB and dimensions of about 6 × 2 cm. It does not specify the 600 × 200 px canvas used by this tool.' },
      { q: 'Does Havaldar use a separate signature size in this notice?', a: 'The cited MTS and Havaldar notice supplies one application-upload instruction for the signature. Check additional notices if your application displays different requirements.' },
    ],
  },
};

export const EXAM_GUIDANCE: Record<string, ExamGuidance> = {};
for (const [slug, page] of Object.entries(GUIDANCE_PAGE_UPDATES)) {
  const isHub = slug === 'ssc-signature-resize';
  EXAM_GUIDANCE[slug] = {
    title: isHub ? 'Compare SSC application requirements' : 'Read this before resizing',
    cycle: page.guidanceLabel!,
    summary: isHub ? 'Choose the page matching your exam. Similar file limits do not make different recruitment notices interchangeable.' : page.subheading!,
    rows: isHub ? sscRows : [
      sscRows[0],
      { label: 'Dimensions in this source', value: slug.includes('mts') ? 'About 6 × 2 cm' : '6 × 2 cm / 4 × 2 cm conflict', evidence: page.sources![0].label },
      sscRows[2], sscRows[3],
    ],
    caution: page.strictNotice!,
    links: sscLinks.filter(link => link.href !== `/${slug}/`),
    changes: 'Removed unsupported universal pixel/DPI claims and photo-upload assumptions. Added cycle-specific references and dimension caveats.',
  };
}

const ctetRows: RequirementRow[] = [
  { label: 'Photograph', value: 'JPG/JPEG · 10–100 KB · 3.5 × 4.5 cm', evidence: 'September 2026 bulletin, Important Notes (c), PDF p.3.' },
  { label: 'Signature', value: 'JPG/JPEG · 3–30 KB · 3.5 × 1.5 cm', evidence: 'September 2026 bulletin, Appendix IV, Step 3, PDF p.27.' },
  { label: 'Pixels and DPI', value: 'Tool defaults, not published mandates', evidence: 'The cited upload instructions specify centimeters and KB, not an exact pixel count or DPI.' },
];
GUIDANCE_PAGE_UPDATES['ssc-photo-resize'] = {
  pageTitle: 'SSC Live Photo Guidance | Optional Photo Preparation Tool',
  metaDescription: 'Understand SSC live photo capture and practise your framing. A resized photo does not replace live capture in the cited CGL, CHSL and MTS applications.',
  keywords: 'ssc live photo, ssc photograph, ssc photo preparation',
  h1: 'SSC live photo guidance and photo preparation',
  subheading: 'Use live capture inside the SSC application. The optional photo tool below is for separate file-preparation needs, not a substitute for that step.',
  targetExams: 'the cited CGL 2026, CHSL 2025 and MTS 2025 application instructions',
  guidanceLabel: 'Live capture is a separate step',
  hidePhysicalSize: true,
  pixelNote: 'Optional file-preparation canvas only; not a live capture upload requirement.',
  ink: 'Follow the official live capture instructions',
  verifiedOn: GUIDANCE_REVIEWED_ON,
  sources: GUIDANCE_PAGE_UPDATES['ssc-signature-resize'].sources,
  strictNotice: 'Do not photograph an existing photograph or use this export in place of the required live capture.',
  tips: sscTips,
  faqs: [
    { q: 'Can this photo resizer complete my SSC live capture?', a: 'No. The live capture happens in the official application. Our optional photo export and webcam practice tools are independent of that process.' },
    { q: 'Is the 20–50 KB setting a current SSC live photo requirement?', a: 'No. It is a legacy file-preparation setting retained in the optional tool. It should not be presented as a requirement for the live capture in the cited notices.' },
  ],
};
EXAM_GUIDANCE['ssc-photo-resize'] = {
  title: 'Live capture and photo files serve different purposes',
  cycle: 'CGL 2026 · CHSL 2025 · MTS 2025',
  summary: 'Read the application instructions before preparing a separate photo file.',
  rows: [
    sscRows[2],
    { label: 'Optional export below', value: '240 × 320 px · 20–50 KB', evidence: 'Legacy preparation defaults only; these are not the live capture requirements.' },
  ],
  caution: GUIDANCE_PAGE_UPDATES['ssc-photo-resize'].strictNotice!,
  links: sscLinks,
  changes: 'Removed the claim that all current SSC applications accept a 20–50 KB pre-uploaded photograph.',
};
for (const target of ['signature', 'photo'] as const) {
  const photo = target === 'photo';
  const slug = `ctet-${target}-resize`;
  GUIDANCE_PAGE_UPDATES[slug] = {
    pageTitle: photo ? 'CTET Photo Size 10–100 KB | September 2026 Guide' : 'CTET Signature Size 3–30 KB | September 2026 Guide',
    metaDescription: photo ? 'Prepare a CTET photo with the September 2026 bulletin: JPG/JPEG, 10–100 KB and 3.5 × 4.5 cm. Includes signature rules and a 2022 archive link.' : 'CTET September 2026 signature rules: JPG/JPEG, 3–30 KB and 3.5 × 1.5 cm. See source references, photo requirements and a free preparation tool.',
    keywords: `ctet ${target} size, ctet ${target} resize, ctet september 2026`,
    h1: photo ? 'CTET photo size: 10–100 KB' : 'CTET signature size: 3–30 KB',
    subheading: 'Source-based guidance for the September 2026 bulletin, with photo and signature requirements shown together.',
    targetExams: 'CTET September 2026; check the bulletin for any later session',
    guidanceLabel: 'CTET September 2026 bulletin',
    widthPx: 350, heightPx: photo ? 450 : 150, widthCm: 3.5, heightCm: photo ? 4.5 : 1.5,
    minKb: photo ? 10 : 3, maxKb: photo ? 100 : 30, recommendedKb: photo ? 40 : 15,
    dpi: 254, aspectRatioLabel: photo ? '7:9' : '7:3',
    pixelNote: 'Working canvas chosen to preserve the published aspect ratio. Exact pixels and 254 DPI are not mandated in the cited bulletin.',
    physicalSizeNote: 'Published centimeter dimensions. Physical print size depends on resolution metadata; pixels alone do not certify centimeters.',
    ink: photo ? 'Latest photograph of the candidate' : 'Legible scan of your handwritten signature',
    sources: [{ label: 'CTET September 2026: Important Notes (c), PDF p.3; Appendix IV, PDF p.27', url: EXAM_SOURCES.ctet }],
    verifiedOn: GUIDANCE_REVIEWED_ON,
    strictNotice: 'Check both uploaded images in the CTET application preview. Passing local file checks does not guarantee acceptance.',
    relatedTools: [photo ? 'ctet-signature-resize' : 'ctet-photo-resize'],
    tips: [
      'Keep your latest photograph and signature as separate JPG/JPEG files.',
      'Preserve the required aspect ratio without stretching the face or signature.',
      'Open the downloaded image and check its byte size, clarity and complete crop.',
      'Use the bulletin for your session; the December 2022 page is historical reference.',
    ],
    faqs: [
      { q: 'Is the CTET signature minimum 3 KB or 4 KB?', a: 'The September 2026 bulletin specifies 3–30 KB. We corrected the previous 4 KB tool minimum to match that source.' },
      { q: 'Are exact pixels or 200 DPI mandatory?', a: 'The cited upload section specifies centimeters and file-size ranges. It does not mandate exact pixels or 200 DPI. Our pixel canvas is a processing default.' },
      { q: 'Where can I check the CTET 2022 photo and signature size?', a: 'Use the separately labelled December 2022 archive linked above. Do not use an old session’s page as the authority for a later application.' },
    ],
  };
  EXAM_GUIDANCE[slug] = {
    title: 'CTET photo and signature requirements',
    cycle: 'September 2026 bulletin',
    summary: 'Both images are required. These values come from the bulletin’s upload instructions, not from a generic exam template.',
    rows: ctetRows,
    caution: GUIDANCE_PAGE_UPDATES[slug].strictNotice!,
    links: [
      { href: photo ? '/ctet-signature-resize/' : '/ctet-photo-resize/', label: photo ? 'Prepare a CTET signature (3–30 KB)' : 'Prepare a CTET photo (10–100 KB)' },
      { href: '/ctet-photo-signature-size-2022/', label: 'CTET December 2022: historical size reference' },
    ],
    changes: 'Corrected the signature minimum from 4 KB to 3 KB; separated published centimeter sizes from tool pixel defaults.',
  };
}

// Share corrections with the actual tool and every preset consumer.
const wbpscNotice = 'https://psc.wb.gov.in/Download?param1=CLERKSHIP2024.pdf&param2=advertisement';
const wbpscCaution = 'Read the image-upload instructions in your active WBPSC application before resizing. The values below are editable preparation defaults; they do not certify acceptance for Clerkship, WBCS or another recruitment.';
for (const target of ['signature', 'photo'] as const) {
  const photo = target === 'photo';
  const slug = `wbpsc-${target}-resize`;
  GUIDANCE_PAGE_UPDATES[slug] = {
    pageTitle: photo ? 'WBPSC Photo Resize | Size Settings & Upload Guide' : 'WBPSC Signature Resize | Size Settings & Upload Guide',
    metaDescription: `Resize your WBPSC ${target} with editable pixel and KB settings. Check Clerkship notice sources, match the active application instructions and preview your JPG.`,
    keywords: `wbpsc ${target} resize, wbpsc ${target} size, clerkship ${target} resizer`,
    h1: photo ? 'WBPSC photo resize and upload guide' : 'WBPSC signature resize and upload guide',
    subheading: 'Prepare a JPG, then check its size and clarity against your active application. The preset below is a starting point, not a universal WBPSC rule.',
    targetExams: 'WBPSC image preparation; check the notice for your exact exam and cycle',
    guidanceLabel: 'Check your application requirements',
    hidePhysicalSize: true,
    pixelNote: 'Editable preparation canvas. The reviewed Clerkship notice does not establish these pixel, KB, DPI or ink settings as upload requirements.',
    ink: photo ? 'Follow the photograph instructions in your application' : 'Use the ink specified in your application',
    aspectRatioLabel: photo ? '138:177 preparation canvas' : '7:3 preparation canvas',
    verifiedOn: '2026-10-28',
    sources: [
      { label: 'WBPSC Clerkship Examination 2024 — Advertisement 12/2024', url: wbpscNotice },
      { label: 'WBPSC official registration entry point', url: 'https://psc.wb.gov.in/candidateOTRegistration.jsp' },
    ],
    strictNotice: wbpscCaution,
    relatedTools: [photo ? 'wbpsc-signature-resize' : 'wbpsc-photo-resize'],
    tips: [
      'Find the photo or signature upload field in your active application and note the allowed format, dimensions and KB range.',
      'Choose the matching mode, upload your own image and adjust the tool settings if the form requests different values.',
      'Keep every signature stroke or the full face visible. Follow the application instructions for ink, background and photograph age.',
      'Download the JPG, reopen it at actual size and inspect the application preview before submitting.',
    ],
    faqs: [
      { q: 'What is the WBPSC signature size in KB?', a: 'Check the signature upload field for your exact application. Our tool starts at 10–20 KB, but the reviewed Clerkship Examination 2024 advertisement does not establish that range as a universal WBPSC rule.' },
      { q: 'Does WBPSC require 140 × 60 px or 138 × 59 px?', a: 'The public Clerkship notice reviewed here does not confirm either as a universal requirement. The signature tool starts at 140 × 60 px; change it if your active form specifies another size.' },
      { q: 'Is 140 × 60 px the same as 4 × 2 cm at 200 DPI?', a: 'No. At 200 DPI, 140 × 60 pixels corresponds to approximately 1.78 × 0.76 cm. Pixels and centimeters cannot be treated as interchangeable without a matching resolution and aspect ratio.' },
      { q: 'Should I sign in black or blue ink?', a: 'Follow the ink instructions in your application. The linked public Clerkship advertisement does not establish an ink rule, so this guide does not claim black-only or blue-ink acceptance.' },
      { q: 'Can I use the photo preset for every WBPSC exam?', a: 'No. The 138 × 177 px and 20–100 KB photo values are preparation defaults. Confirm the instructions for your exact recruitment before using them.' },
      { q: 'Does a successful download mean WBPSC will accept my image?', a: 'No. Local file checks can confirm pixels, format and byte size against the selected settings. Only the recruiting authority can determine whether the upload meets its application requirements.' },
    ],
  };
  EXAM_GUIDANCE[slug] = {
    reviewedOn: '2026-10-28',
    title: 'Check the upload instructions before resizing',
    cycle: 'Source reviewed: Clerkship Examination 2024 · Advertisement 12/2024',
    summary: 'The linked public advertisement identifies the recruitment, but does not specify signature or photo pixel dimensions, KB limits or ink colour. Image requirements could appear inside the application; they remain unconfirmed here.',
    rows: [
      { label: 'Signature preparation default', value: '140 × 60 px · 10–20 KB · JPG', evidence: 'Tool setting only. Use it only if it matches your active upload field.' },
      { label: 'Photo preparation default', value: '138 × 177 px · 20–100 KB · JPG', evidence: 'Tool setting only. Check the photograph instructions separately.' },
      { label: 'Ink, background and DPI', value: 'Follow your application instructions', evidence: 'No universal image rule established by the reviewed public advertisement.' },
    ],
    caution: wbpscCaution,
    links: [
      { href: photo ? '/wbpsc-signature-resize/' : '/wbpsc-photo-resize/', label: photo ? 'WBPSC signature resizer' : 'WBPSC photo resizer' },
      { href: '/compress-image-to-kb/', label: 'Custom image compression' },
    ],
    changes: 'Removed unsupported official-size and rejection claims, resolved contradictory ink guidance, and corrected the pixel-to-centimeter explanation. Added the specific Clerkship notice and distinguished image defaults from application requirements.',
  };
}

const bpscManual = 'https://bpsconline.bihar.gov.in/downloads/User_Manual.pdf';
const bpscPortal = 'https://bpsconline.bihar.gov.in/candidate/login';
const bpscCaution = 'The manual contains conflicting pixel instructions. Confirm the width, height and file-size cap in your active application before exporting. CCE and TRE advertisements may add different requirements; this tool does not certify acceptance.';
const bpscLinks = [
  { href: '/bpsc-signature-resize/', label: 'BPSC CCE and TRE overview' },
  { href: '/bpsc-tre-hindi-signature-resize/', label: 'Prepare Hindi signature' },
  { href: '/bpsc-tre-english-signature-resize/', label: 'Prepare English signature' },
  { href: '/live-webcam-photo-checker/', label: 'Practise webcam framing (not a BPSC upload)' },
];
const bpscRows: RequirementRow[] = [
  { label: 'Signature uploads', value: 'Separate Hindi and English images', evidence: 'BPSC user manual, Step 6, PDF pages 12–13.' },
  { label: 'Signature file size', value: 'Less than 20 KB in the manual', evidence: 'No minimum is stated there. Check your advertisement for any different cap.' },
  { label: 'Pixel conflict', value: 'English: width 150–220, height 250–320 px', evidence: 'PDF page 13 Hindi annotations reverse the ranges. We cannot resolve this discrepancy for BPSC.' },
  { label: 'Tool starting settings', value: '280 × 180 px · 1–19 KB · JPG', evidence: 'Editable landscape preparation canvas. The 1 KB floor and 19 KB ceiling are tool choices, not published minimum/maximum rules.' },
  { label: 'Photograph', value: 'Live capture in the BPSC application', evidence: 'A resized photo file or our webcam practice tool cannot replace the official capture step.' },
];
for (const kind of ['overview', 'hindi', 'english'] as const) {
  const overview = kind === 'overview';
  const language = kind === 'hindi' ? 'Hindi' : 'English';
  const slug = overview ? 'bpsc-signature-resize' : `bpsc-tre-${kind}-signature-resize`;
  GUIDANCE_PAGE_UPDATES[slug] = {
    pageTitle: overview ? 'BPSC Signature Resize | CCE & TRE 4.0 Upload Guide' : `BPSC TRE ${language} Signature Resize | Upload Guide`,
    metaDescription: overview
      ? 'Prepare separate BPSC Hindi and English signature JPGs. Compare CCE and TRE guidance, the official manual pixel conflict, size limits and live photo steps.'
      : `Prepare your BPSC TRE ${language} signature JPG. Check the official portal manual, conflicting pixel instructions and the limits in your active application.`,
    keywords: overview ? 'bpsc signature resize, bpsc tre 4.0 signature size, bpsc cce signature, bpsc photo and signature' : `bpsc tre ${kind} signature resize, bpsc ${kind} signature size, bpsc tre 4.0 signature`,
    h1: overview ? 'BPSC signature resize: CCE and TRE 4.0 guide' : `BPSC TRE ${language} signature resizer`,
    subheading: overview
      ? 'Start with your recruitment notice, then prepare Hindi and English signatures separately. Read the portal manual discrepancy below before choosing your pixel dimensions.'
      : `Upload a scan of your own ${language} signature and check the active form before exporting. This page uses portal-manual guidance; it is not a verified TRE 4.0 advertisement specification.`,
    targetExams: 'BPSC profile preparation; verify CCE and TRE cycle-specific requirements separately',
    guidanceLabel: 'Portal manual reviewed · pixel conflict',
    widthPx: 280, heightPx: 180, widthCm: 0, heightCm: 0,
    minKb: 1, maxKb: 19, recommendedKb: 15, dpi: 200,
    aspectRatioLabel: '14:9 landscape preparation canvas',
    hidePhysicalSize: true,
    pixelNote: '280 × 180 px is an editable landscape default. It does not satisfy the portrait ranges printed in the English manual text; confirm your active form.',
    ink: 'Ink specified in your application',
    strictNotice: bpscCaution,
    verifiedOn: '2026-10-28',
    sources: [
      { label: 'BPSC user manual: Step 6, PDF pages 12–13', url: `${bpscManual}#page=12` },
      { label: 'BPSC current online application entry point', url: bpscPortal },
    ],
    relatedTools: bpscLinks.filter(link => link.href !== `/${slug}/` && link.href.includes('signature')).map(link => link.href.slice(1, -1)),
    tips: [
      'Read the advertisement for your exact CCE or TRE recruitment. Do not reuse another cycle’s limits automatically.',
      `Scan ${overview ? 'your Hindi and English signatures as separate images' : `your own ${language} signature`}. Keep every stroke visible and follow the application’s ink instructions.`,
      'Set the width, height and KB bounds to match your active upload field. The page defaults can be changed in Custom Dimensions & Bounds.',
      'Reopen the downloaded JPG and check its clarity. Upload it to the matching language slot and inspect the application preview.',
    ],
    faqs: [
      { q: 'What is the BPSC signature size in KB?', a: 'The reviewed portal manual says less than 20 KB for each signature. Our tool uses a 19 KB ceiling to stay below that value and a 1 KB processing floor, not an official minimum. Check your own advertisement for a different or lower cap.' },
      { q: 'Is 220 × 100 px required for every BPSC exam?', a: 'No universal requirement is established by the reviewed manual. Its English pixel instructions and Hindi annotations disagree. This page no longer presents the old 220 × 100 px preset as the rule for every CCE and TRE recruitment.' },
      { q: 'Why does this tool start at 280 × 180 px?', a: 'It is a landscape preparation choice within the reversed ranges in the manual’s Hindi annotations. The English text describes a portrait range instead. Confirm the active form and change the tool dimensions if needed; neither interpretation is guaranteed here.' },
      { q: 'Are these verified TRE 4.0 advertisement limits?', a: 'No. This review verified the public BPSC portal manual. The TRE 4.0 and CCE advertisement PDFs could not be independently checked in this review. Use the official notice for your recruitment to confirm any additional requirements.' },
      { q: `How do I prepare ${overview ? 'Hindi and English signatures' : `my ${language} signature`}?`, a: `Use a scan or photograph of your own handwritten signature${kind === 'hindi' ? ' in Hindi (Devanagari)' : kind === 'english' ? ' in English' : ' in each language'}. Use separate files for the Hindi and English fields. A typed font is not a scan of your handwriting.` },
      { q: 'Can I upload a resized photo instead of using the webcam?', a: 'The reviewed manual describes live photo capture inside the BPSC application. Complete that step there. A photo resizer or webcam framing practice page does not submit a live BPSC photograph.' },
    ],
  };
  EXAM_GUIDANCE[slug] = {
    reviewedOn: '2026-10-28',
    title: overview ? 'CCE and TRE 4.0: choose your application first' : `Before preparing your TRE ${language} signature`,
    cycle: 'BPSC portal manual · Step 6 · not a cycle-specific advertisement',
    summary: 'CCE and teacher recruitment are separate applications. The guidance below comes from the portal manual; TRE 4.0 advertisement-specific limits remain unverified in this review. Choose the matching language tool and confirm the active form.',
    rows: bpscRows,
    caution: bpscCaution,
    links: bpscLinks.filter(link => link.href !== `/${slug}/`),
    changes: 'Removed the unsupported 10–25 KB rule, universal 220 × 100 px claim, incorrect centimeter equivalence and acceptance guarantees. Added separate language links, live-photo guidance and the manual’s unresolved dimension conflict.',
  };
}

const coastGuardPortal = 'https://cgept.parikshasaarthi.in/';
const coastGuardFormats = `${coastGuardPortal}formats/CGEPT_Formats.zip`;
const coastGuardCaution = 'Use the instructions for your exact recruitment. The 2027 guidelines specify file format and KB ranges but do not give exact pixels, centimeters or DPI. Our canvas sizes are editable preparation defaults. Complete live photo capture in the recruitment portal.';
GUIDANCE_PAGE_UPDATES['indian-coast-guard-signature-resize'] = {
  pageTitle: 'Indian Coast Guard Signature Resize 10–100 KB | CGEPT',
  metaDescription: 'Resize Indian Coast Guard signature and photo JPGs to 10–100 KB. Read CGEPT 01/2027 and 02/2027 upload guidance, file names and live photo requirements.',
  keywords: 'indian coast guard signature resize, coast guard signature size, cgept photo signature size, coast guard signature 10 to 100 kb',
  h1: 'Indian Coast Guard signature resize: 10–100 KB',
  subheading: 'Prepare your signature or photo for CGEPT 01/2027 and 02/2027. The portal guidelines specify JPG/JPEG files from 10 to 100 KB, with a separate live-photo capture step.',
  targetExams: 'CGEPT 01/2027 and 02/2027 — check your post and application instructions',
  guidanceLabel: 'CGEPT 2027 portal guidelines reviewed',
  widthPx: 140, heightPx: 60, widthCm: 0, heightCm: 0,
  minKb: 10, maxKb: 100, recommendedKb: 25, dpi: 200,
  hidePhysicalSize: true,
  pixelNote: '140 × 60 px is an editable signature canvas, not a mandated CGEPT pixel size. The reviewed guidelines do not specify exact pixels or DPI.',
  aspectRatioLabel: '7:3 preparation canvas',
  ink: 'Follow the signature instructions in your application',
  verifiedOn: '2026-10-28',
  strictNotice: coastGuardCaution,
  sources: [
    { label: 'CGEPT 2027 portal document pack: Guidelines_ICG.pdf, pages 15–16 (ZIP)', url: coastGuardFormats },
    { label: 'CGEPT 01/2027 and 02/2027 advertisement, sections 5.1 and 7.5', url: `${coastGuardPortal}docs/CGEPT012027_Adv_Bilingual.pdf` },
    { label: 'CGEPT recruitment portal', url: coastGuardPortal },
  ],
  relatedTools: ['compress-image-to-kb'],
  tips: [
    'Prepare separate signature and recent colour photo JPG/JPEG files, each 10–100 KB. Follow the active form if it gives additional instructions.',
    'Use Signature.jpg and Passport_Photograph.jpg: the guidelines specify these base names. Keep the signature strokes and face clear.',
    'Use a front portrait on a light background, taken no more than three months before applications opened. Complete the separate live capture inside the recruitment portal.',
    'Scan original documents, preserve every required page and inspect the application preview. Document fields have their own limits; the reviewed identity-proof field specifies 50–150 KB JPG/JPEG.',
  ],
  faqs: [
    { q: 'What is the Indian Coast Guard signature size?', a: 'Guidelines_ICG.pdf for CGEPT 01/2027 and 02/2027 specifies 10–100 KB in JPG/JPEG for the signature. The earlier 10–50 KB range on this page has been corrected. Check your own recruitment cycle before using these settings.' },
    { q: 'Is 140 × 60 px or 200 DPI mandatory?', a: 'The reviewed upload instructions do not specify exact pixels, centimeters or DPI. Our 140 × 60 px signature and 350 × 450 px photo canvases are editable processing defaults. They are not official dimension requirements.' },
    { q: 'Does the photo need a slate with my name and date?', a: 'The reviewed 2027 guidelines ask for a recent colour front portrait on a light background and a separate live image. They do not state a slate requirement. This tool no longer asks you to confirm a physical slate for this preset; follow any additional instructions in your application.' },
    { q: 'Do I need to upload a left thumb impression?', a: 'The reviewed 2027 upload list does not list a thumb-impression file. The advertisement describes biometric capture at Stage I, which is a separate process. Do not treat an old thumb-image preset as a required application upload.' },
    { q: 'What should I name the files?', a: 'Page 15 of the portal guidelines gives Signature and Passport_Photograph as the signature and photo base names. This tool exports Signature.jpg and Passport_Photograph.jpg. Certificate.jpg is only a convenience name; check the relevant document field.' },
    { q: 'Can a resized photograph replace live capture?', a: 'No. The advertisement and guidelines describe both an uploaded photograph and a live capture step in the recruitment portal. Our photo tool prepares the uploaded file only.' },
  ],
};
EXAM_GUIDANCE['indian-coast-guard-signature-resize'] = {
  reviewedOn: '2026-10-28',
  title: 'CGEPT photo, signature and live-capture requirements',
  cycle: 'CGEPT 01/2027 and 02/2027 · portal guidelines',
  summary: 'Read the source requirements before using the tool. File-size and format rules below come from the portal document pack; pixel canvases are our editable defaults.',
  rows: [
    { label: 'Signature upload', value: 'JPG/JPEG · 10–100 KB · Signature', evidence: 'Guidelines_ICG.pdf, pages 15–16, item 47.2. No exact pixels or ink colour specified in this section.' },
    { label: 'Photo upload', value: 'JPG/JPEG · 10–100 KB · Passport_Photograph', evidence: 'Page 16, item 47.1: recent colour front portrait, light background, no headgear except for Sikhs.' },
    { label: 'Live photograph', value: 'Separate capture in the recruitment portal', evidence: 'Page 16, item 47.3 and advertisement section 5.1. A resized file cannot replace this step.' },
    { label: 'Identity proof', value: 'JPG/JPEG · 50–150 KB', evidence: 'Page 5, item 26. Scan the original; confirm other document fields separately.' },
    { label: 'Tool pixel defaults', value: 'Signature 140 × 60 · photo 350 × 450 px', evidence: 'Preparation canvases only. No exact pixel, centimeter or DPI rule appears in these upload instructions.' },
    { label: 'Slate and thumb uploads', value: 'Not listed in the reviewed 2027 upload instructions', evidence: 'Do not carry forward old-cycle requirements. Stage-I biometric capture is a separate process.' },
  ],
  caution: coastGuardCaution,
  links: [
    { href: '/compress-image-to-kb/', label: 'Use custom image size settings' },
    { href: '/live-webcam-photo-checker/', label: 'Practise webcam framing (not an application upload)' },
  ],
  changes: 'Corrected photo and signature to 10–100 KB; removed unsupported fixed dimensions, slate confirmation and prominent thumb-upload step. Added the 2027 sources, filename guidance and separate live capture requirement.',
};

export const NTPC_SOURCES = {
  graduate: 'https://rrbsecunderabad.gov.in/wp-content/uploads/2025/10/Final-CEN-06-2025-21-10-2025-Publish.pdf',
  undergraduate: 'https://rrbsecunderabad.gov.in/wp-content/uploads/2025/10/FAQs-CEN_07_2025_NTPC-UG_Hindi_English.pdf',
};
const ntpcCaution = 'Verified sources: CEN 06/2025 Graduate and CEN 07/2025 Undergraduate FAQ. Check your active CEN before using these settings. A 2026-cycle specification has not been verified in this review. File checks do not certify RRB acceptance.';
GUIDANCE_PAGE_UPDATES['rrb-ntpc-signature-resize'] = {
  pageTitle: 'RRB NTPC Signature Resize 30–49 KB | Size & Upload Guide',
  metaDescription: 'Resize an RRB NTPC signature to 30–49 KB JPG. Check black-ink rules, minimum pixels, signing-box guidance and live photo steps against your CEN.',
  keywords: 'rrb ntpc signature resize, ntpc signature resize, rrb ntpc signature size, rrb ntpc ug signature size, rrb signature 30 to 49 kb',
  h1: 'RRB NTPC signature resize: 30–49 KB',
  subheading: 'Prepare a clear JPG signature in black ink on white paper. Read the Graduate and Undergraduate source scope below, then match your active CEN before uploading.',
  targetExams: 'Verified references: NTPC Graduate CEN 06/2025 and Undergraduate CEN 07/2025',
  guidanceLabel: '2025 CEN sources reviewed',
  widthPx: 280, heightPx: 160, widthCm: 0, heightCm: 0,
  minKb: 30, maxKb: 49, recommendedKb: 40, dpi: 200,
  hidePhysicalSize: true,
  pixelNote: '280 × 160 px is our editable canvas, above the published 140 × 60 px minimum and matching the 35:20 box proportions. It is not a mandated exact pixel size.',
  ink: 'Black ink on white paper; running handwriting',
  aspectRatioLabel: '7:4 preparation canvas',
  strictNotice: ntpcCaution,
  verifiedOn: '2026-10-28',
  sources: [
    { label: 'CEN 06/2025 Graduate: section 14.5.1, PDF page 22', url: `${NTPC_SOURCES.graduate}#page=22` },
    { label: 'CEN 07/2025 Undergraduate FAQ: Q60 and Q73–74, pages 12, 14–15', url: `${NTPC_SOURCES.undergraduate}#page=15` },
    { label: 'RRB application portal: confirm your active CEN', url: 'https://www.rrbapply.gov.in/' },
  ],
  relatedTools: ['rrb-ntpc-undergraduate-document-guide'],
  tips: [
    'Use your own running signature in black ink on white paper. Keep every stroke visible; avoid block, capital or disjointed lettering.',
    'The reviewed sources specify at least 100 DPI when scanning, minimum 140 × 60 pixels and a 35 × 20 mm box. These are separate measurements; exporting cannot improve a blurred original scan.',
    'Use JPG/JPEG between 30 and 49 KB. The tool starts at 280 × 160 pixels; adjust only after checking your form and inspect the downloaded file.',
    'Complete live photograph capture inside the RRB application. Follow the separate certificate instructions if requesting an SC/ST free travel pass.',
  ],
  faqs: [
    { q: 'Is the RRB NTPC signature size 30–49 KB or 30–70 KB?', a: 'The verified CEN 06/2025 notice and CEN 07/2025 FAQ specify 30–49 KB JPG/JPEG. We corrected this page’s old 30–70 KB setting. These sources do not establish the rules for every older or later CEN.' },
    { q: 'Does RRB require exactly 140 × 60 pixels?', a: 'The reviewed sources describe 140 × 60 pixels as a minimum. This tool starts at 280 × 160 pixels, which exceeds both minimum dimensions and has the same proportions as the separately stated 35 × 20 mm box. It is a preparation choice, not an exact-pixel mandate.' },
    { q: 'Can I sign with blue ink?', a: 'The reviewed NTPC sources specify black ink on white paper. The general Railway advice that previously allowed blue ink should not be applied to these CENs.' },
    { q: 'Can I upload a resized photo for NTPC?', a: 'The reviewed sources require live capture in the RRB application using a webcam or smartphone camera. A pre-existing photograph or resized image cannot replace that step.' },
    { q: 'Are these confirmed CEN 06/2026 or 07/2026 rules?', a: 'No. This review directly verified the 2025 Graduate notice and Undergraduate FAQ. Open the notice for your application to confirm any newer requirements. The review date is not a recruitment announcement.' },
    { q: 'What should I check if the signature upload fails?', a: 'Check the actual JPG/JPEG format and file size, then inspect the complete signature at normal size. Confirm black ink, white paper and legibility against your CEN. Renaming a file or adding bytes cannot repair an unreadable scan.' },
  ],
};
EXAM_GUIDANCE['rrb-ntpc-signature-resize'] = {
  reviewedOn: '2026-10-28',
  title: 'NTPC signature requirements: check your CEN',
  cycle: 'Graduate CEN 06/2025 · Undergraduate CEN 07/2025 FAQ',
  summary: 'Both verified references give the same signature limits. They also require live photograph capture in the RRB application. A newer recruitment cycle must be checked separately.',
  rows: [
    { label: 'Signature file', value: 'JPG/JPEG · 30–49 KB', evidence: 'Graduate section 14.5.1, page 22; Undergraduate FAQ Q74, page 15.' },
    { label: 'Handwriting and paper', value: 'Black ink · white paper · running handwriting', evidence: 'Use your own signature. Keep the entire signature clear; block, capital and disjointed letters are excluded.' },
    { label: 'Image and scan minimums', value: 'At least 140 × 60 px · scan at least 100 DPI', evidence: 'The sources state minimum dimensions, not one mandatory exact pixel canvas.' },
    { label: 'Signing box', value: '35 mm wide × 20 mm high', evidence: 'Position the signature centrally. Do not equate this box to 140 × 60 pixels at an arbitrary DPI.' },
    { label: 'Tool starting canvas', value: '280 × 160 px · JPG · 30–49 KB', evidence: 'Editable 7:4 canvas matching the box proportions; not an official exact-pixel requirement.' },
    { label: 'Photograph', value: 'Live capture in the RRB application', evidence: 'Graduate section 14.4; Undergraduate FAQ Q73, pages 14–15. No pre-existing photo upload.' },
  ],
  caution: ntpcCaution,
  links: [
    { href: '/rrb-ntpc-undergraduate-document-guide/', label: 'NTPC Undergraduate document checklist' },
    { href: '/live-webcam-photo-checker/', label: 'Practise live-photo framing (not an RRB submission)' },
  ],
  changes: 'Corrected 30–70 KB to 30–49 KB, removed conflicting Railway-wide ink guidance, separated minimum pixels from box dimensions, and replaced mixed-cycle claims with identified 2025 sources.',
};

const jamSource = 'https://www.jam.iitkgp.ac.in/doc-req.html';
const jamCaution = 'Use the JAM 2027 requirements for this cycle. Pixel ranges and physical measurements are listed separately below. The tool checks its selected settings; image clarity and application acceptance still require review. Adding bytes cannot restore missing detail.';
for (const kind of ['signature', 'photo'] as const) {
  const photo = kind === 'photo';
  const slug = `iit-jam-${kind}-resize`;
  const range = photo ? '50–200 KB' : '50–150 KB';
  GUIDANCE_PAGE_UPDATES[slug] = {
    pageTitle: `IIT JAM 2027 ${photo ? 'Photo' : 'Signature'} Resize ${range} | JOAPS Guide`,
    metaDescription: `Prepare your IIT JAM 2027 ${kind} JPG at ${range}. Check the official image-size range, ${photo ? 'photo framing' : 'signing box and ink'}, and preview the file before JOAPS upload.`,
    keywords: `iit jam ${kind} resize, jam ${kind} resizer, iit jam ${kind} size 2027, joaps ${kind} upload`,
    h1: `IIT JAM 2027 ${kind} resize: ${range}`,
    subheading: photo
      ? 'Prepare a recent colour photograph in JPG/JPEG. The official range is 50–200 KB; check the photo dimensions and framing guidance below.'
      : 'Prepare your own scanned signature in JPG/JPEG at 50–150 KB. The 560 × 160 px preset is the upper end of the allowed image range, not the only permitted size.',
    targetExams: 'IIT JAM 2027 · JOAPS application',
    guidanceLabel: 'JAM 2027 source reviewed',
    widthPx: photo ? 420 : 560, heightPx: photo ? 540 : 160,
    widthCm: photo ? 3.5 : 7, heightCm: photo ? 4.5 : 2,
    minKb: 50, maxKb: photo ? 200 : 150, recommendedKb: 100,
    dpi: photo ? 304.8 : 203.2,
    hidePhysicalSize: true,
    pixelNote: photo ? '420 × 540 px is our preparation canvas: within the published pixel bounds and matching the 3.5:4.5 physical-photo proportions.' : 'Width-first bounds: 280 × 80 to 560 × 160 px. The tool starts at the maximum; the source lists height first.',
    aspectRatioLabel: photo ? '7:9 preparation canvas' : '7:2 signature box',
    ink: photo ? 'Recent colour photo; white or very light background' : 'Black or dark-blue ink on white paper',
    strictNotice: jamCaution,
    verifiedOn: '2026-10-28',
    sources: [{ label: 'IIT Kharagpur: JAM 2027 official document requirements', url: jamSource }],
    relatedTools: [photo ? 'iit-jam-signature-resize' : 'iit-jam-photo-resize'],
    tips: photo ? [
      'Use a recent colour photograph that matches your appearance. Keep the face fully visible against white or a very light background.',
      'The source requires the face to occupy at least half of the photo; do not cover features with hair, shadows or tinted glasses.',
      'Crop without stretching. Our 420 × 540 px canvas follows the physical-photo proportions while staying inside the published pixel bounds.',
      'Download a JPG between 50 and 200 KB, inspect it at normal size and check the JOAPS preview.',
    ] : [
      'Sign horizontally inside a 7 cm wide × 2 cm high box on white paper using black or dark-blue ink.',
      'Use your own full signature, not all-capital lettering or initials. The source asks for a professional scan cropped to the box border.',
      'Keep every stroke visible. The width-first pixel range is 280 × 80 to 560 × 160; the tool starts at its upper end.',
      'Check the downloaded JPG is 50–150 KB and legible. Prepare your photo separately using the 50–200 KB photo tool.',
    ],
    faqs: [
      { q: 'What are the JAM 2027 photo and signature file sizes?', a: 'The official page lists JPG/JPEG at 50–200 KB for a photograph and 50–150 KB for a signature. The old 20 KB photo minimum on this site has been corrected.' },
      { q: 'Must a JAM signature be exactly 560 × 160 pixels?', a: 'No. That is the upper limit, written width first. The lower limit is 280 × 80 pixels. The source describes the signature box and pixel dimensions height first; this tool consistently shows width first.' },
      { q: 'Why does the photo tool use 420 × 540 pixels?', a: 'It is an editable canvas inside the published 240 × 320 to 480 × 640 pixel bounds. Its 7:9 proportions match the separately specified 3.5 × 4.5 cm photograph. The pixel-bound pairs themselves have a 3:4 ratio, so they should not be described as an exact centimeter conversion.' },
      { q: 'Does compression or padding guarantee JOAPS acceptance?', a: 'No. A file can meet the byte-size range and still be unclear, cropped incorrectly or otherwise unsuitable. Inspect your original and the exported image; adding bytes cannot improve missing detail.' },
      { q: 'Can I reuse a JAM 2026 preset?', a: 'Use the preset and official notice for your application year. This page is reviewed for JAM 2027; a previous-cycle preset should not be treated as current guidance.' },
    ],
  };
  EXAM_GUIDANCE[slug] = {
    reviewedOn: '2026-10-28',
    title: 'JAM 2027 photo and signature requirements',
    cycle: 'IIT Kharagpur · JAM 2027 document requirements',
    summary: 'Choose the correct image type. Published ranges appear below alongside the tool defaults; a preset is not the only allowed image size.',
    rows: [
      { label: 'Signature', value: 'JPG/JPEG · 50–150 KB', evidence: 'Black or dark-blue ink; white paper; no all-capital signatures or initials.' },
      { label: 'Signature size', value: 'Width × height: 280 × 80 to 560 × 160 px', evidence: 'Sign inside a 7 × 2 cm box. The source lists signature dimensions height first; we show width first.' },
      { label: 'Photograph', value: 'JPG/JPEG · 50–200 KB', evidence: 'Recent colour photo; white or very light background; face occupies at least 50%.' },
      { label: 'Photo size', value: '240 × 320 to 480 × 640 px; 3.5 × 4.5 cm', evidence: 'The source lists both. Their proportions differ; do not treat the pixel-bound pairs as exact cm equivalents.' },
      { label: 'Tool defaults', value: 'Signature 560 × 160 px · photo 420 × 540 px', evidence: 'Signature uses the upper bound. Photo follows the physical-photo proportions within the pixel bounds. Neither is the only permitted pixel size.' },
    ],
    caution: jamCaution,
    links: [{ href: photo ? '/iit-jam-signature-resize/' : '/iit-jam-photo-resize/', label: photo ? 'Prepare JAM signature (50–150 KB)' : 'Prepare JAM photo (50–200 KB)' }],
    changes: 'Corrected the photo minimum to 50 KB, aligned photo canvas and crop ratio, separated pixel bounds from physical dimensions, and removed acceptance guarantees.',
  };
}

export const GUIDANCE_PRESET_UPDATES: Record<string, Partial<ExamPreset>> = {
  'iit-jam': {
    targetType: 'signature', portalExactSpecsVerified: false,
    inkRequirement: 'Black or Blue Ink',
    notes: 'JAM 2027: JPG/JPEG 50–150 KB, black or dark-blue ink on white paper, 7×2 cm signing box. Width-first pixel range 280×80 to 560×160. The preset uses the maximum, not a universal exact size. Scan clearly, crop to the box border and review the application preview.',
    sourceUrl: jamSource, sourceLabel: 'JAM 2027 official signature requirements',
  },
  'iit-jam-photo': {
    widthPx: 420, heightPx: 540, aspectRatio: 7 / 9, dpi: 304.8,
    minKb: 50, maxKb: 200, portalExactSpecsVerified: false,
    inkRequirement: 'Any Ink',
    notes: 'JAM 2027: recent colour JPG/JPEG, 50–200 KB, white or very light background, face at least 50%. Published sizes: 3.5×4.5 cm; pixel bounds 240×320 to 480×640. Our 420×540 canvas follows the physical proportions inside those bounds. Inspect framing and clarity.',
    sourceUrl: jamSource, sourceLabel: 'JAM 2027 official photograph requirements',
  },
  'rrb-ntpc': {
    name: 'RRB NTPC Signature (30–49 KB) — CEN 06/2025 & 07/2025',
    widthPx: 280, heightPx: 160, aspectRatio: 280 / 160,
    widthCm: undefined, heightCm: undefined,
    minKb: 30, maxKb: 49, recommendedKb: 40, dpi: 200,
    portalExactSpecsVerified: false,
    inkRequirement: 'Black Ink Only',
    notes: 'Verified 2025 NTPC sources: JPG/JPEG 30–49 KB, black ink on white paper, running handwriting, minimum 140×60 px and scan resolution 100 DPI. The 35×20 mm box is separate; 280×160 px is our editable canvas. Confirm your active CEN. Photograph is captured live in the RRB portal.',
    sourceUrl: `${NTPC_SOURCES.graduate}#page=22`,
    sourceLabel: 'CEN 06/2025 Graduate, section 14.5.1 (page 22)',
  },
  ...Object.fromEntries(['indian-coast-guard', 'indian-coast-guard-photo', 'indian-coast-guard-document', 'indian-coast-guard-thumb', 'indian-coast-guard-thumb-doc'].map(id => [id, {
    name: id.includes('thumb') ? 'Coast Guard thumb image — legacy, not a listed 2027 upload' : id.endsWith('-photo') ? 'Coast Guard Photo (10–100 KB) — CGEPT 2027' : id.endsWith('-document') ? 'Coast Guard Identity Proof (50–150 KB) — check document field' : 'Coast Guard Signature (10–100 KB) — CGEPT 2027',
    widthCm: undefined, heightCm: undefined,
    portalExactSpecsVerified: false,
    requiresPhysicalSlate: false,
    requiresNameDate: false,
    isPopular: !id.includes('thumb'),
    inkRequirement: 'Ink specified in your application',
    ...(!id.includes('thumb') && !id.endsWith('-document') ? { minKb: 10, maxKb: 100 } : {}),
    notes: id.includes('thumb')
      ? 'Legacy preparation preset only. A thumb-impression upload is not listed in the reviewed CGEPT 2027 guidelines. Stage-I biometric capture is separate. Do not use these settings unless your active application requests such a file.'
      : id.endsWith('-document')
      ? 'CGEPT 2027 identity-proof field: original scan, JPG/JPEG, 50–150 KB. Confirm other document fields separately. 700×990 px is an editable canvas; Certificate.jpg is a convenience filename. Preserve all required pages.'
      : `CGEPT 2027 guidelines: JPG/JPEG 10–100 KB. ${id.endsWith('-photo') ? 'Recent colour front portrait on a light background; separate live capture in the recruitment portal. No slate stated in this upload section.' : 'Upload your own scanned signature, named Signature.jpg.'} Pixel dimensions and DPI are preparation defaults, not published mandates.`,
    sourceUrl: coastGuardFormats,
    sourceLabel: 'CGEPT 2027 document pack — Guidelines_ICG.pdf',
  } as Partial<ExamPreset>])),
  ...Object.fromEntries(['bpsc', 'bpsc-tre-hindi-sign', 'bpsc-tre-english-sign'].map(id => [id, {
    name: id === 'bpsc' ? 'BPSC Signature — check active application' : `BPSC TRE ${id.includes('hindi') ? 'Hindi' : 'English'} Signature — preparation preset`,
    authority: 'Bihar Public Service Commission (BPSC)',
    widthPx: 280, heightPx: 180, aspectRatio: 280 / 180,
    widthCm: undefined, heightCm: undefined,
    minKb: 1, maxKb: 19, recommendedKb: 15,
    portalExactSpecsVerified: false,
    inkRequirement: 'Ink specified in your application',
    notes: 'BPSC manual: separate Hindi and English signatures under 20 KB; English and Hindi pixel guidance conflict. 280×180 px and 1–19 KB JPG are editable preparation settings, not confirmed CCE or TRE advertisement limits. Verify the active form. Live photo capture happens in the official application.',
    sourceUrl: `${bpscManual}#page=12`,
    sourceLabel: 'BPSC portal manual — pixel conflict, pages 12–13',
  } as Partial<ExamPreset>])),
  ...Object.fromEntries(['wbpsc-west-bengal', 'wbpsc-signature-138x59', 'wbpsc-photo'].map(id => [id, {
    name: id === 'wbpsc-photo' ? 'WBPSC Photo — preparation preset' : id === 'wbpsc-signature-138x59' ? 'WBPSC Signature 138×59 — legacy preset' : 'WBPSC Signature — preparation preset',
    widthCm: undefined, heightCm: undefined,
    portalExactSpecsVerified: false,
    inkRequirement: 'Ink specified in your application',
    notes: `${id === 'wbpsc-photo' ? '138×177 px, 20–100 KB' : id === 'wbpsc-signature-138x59' ? '138×59 px, 10–20 KB' : '140×60 px, 10–20 KB'} JPG preparation defaults only. The reviewed Clerkship 2024 public notice does not confirm these image limits or an ink rule. Match your active application before exporting.`,
    sourceUrl: wbpscNotice,
    sourceLabel: 'Clerkship 2024 notice — image limits unconfirmed',
  } as Partial<ExamPreset>])),
  ...Object.fromEntries(['ssc-photo', 'ssc-cgl-photo'].map(id => [id, {
    portalExactSpecsVerified: false,
    notes: 'Optional photo-file preparation only. The cited SSC applications use live capture inside the official portal. This export cannot replace it; 20–50 KB is not a live capture rule.',
    sourceUrl: EXAM_SOURCES.cgl,
    sourceLabel: 'CGL 2026 notice, live photo instructions',
  }])),
  ...Object.fromEntries(['ssc-general', 'ssc-cgl', 'ssc-chsl', 'ssc-mts'].map(id => [id, {
    widthPx: 600, heightPx: 200, widthCm: 6, heightCm: 2, dpi: 254, aspectRatio: 3,
    portalExactSpecsVerified: false,
    inkRequirement: 'Any Ink',
    notes: '10–20 KB JPEG preparation preset. 600×200 px and 254 DPI are tool defaults, not official mandates. CGL 2026 and CHSL 2025 contain conflicting cm dimensions; verify your exact notice and active form.',
    sourceUrl: id === 'ssc-chsl' ? EXAM_SOURCES.chsl : id === 'ssc-mts' ? EXAM_SOURCES.mts : EXAM_SOURCES.cgl,
    sourceLabel: id === 'ssc-chsl' ? 'CHSL 2025 notice' : id === 'ssc-mts' ? 'MTS 2025 notice' : 'CGL 2026 notice (reviewed 20 Oct 2026)',
  } as Partial<ExamPreset>])),
  'ctet-exam': {
    widthPx: 350, heightPx: 150, dpi: 254, minKb: 3,
    portalExactSpecsVerified: false, inkRequirement: 'Any Ink',
    notes: 'CTET September 2026: signature JPG/JPEG 3–30 KB, 3.5×1.5 cm. 350×150 px and 254 DPI are working defaults, not bulletin mandates. Check the downloaded image and active form.',
    sourceUrl: EXAM_SOURCES.ctet, sourceLabel: 'CTET September 2026 bulletin, Appendix IV',
  },
  'ctet-photo': {
    widthPx: 350, heightPx: 450, dpi: 254,
    portalExactSpecsVerified: false,
    notes: 'CTET September 2026: latest photograph, JPG/JPEG 10–100 KB, 3.5×4.5 cm. 350×450 px and 254 DPI are working defaults, not bulletin mandates.',
    sourceUrl: EXAM_SOURCES.ctet, sourceLabel: 'CTET September 2026 bulletin, Appendix IV',
  },
};
