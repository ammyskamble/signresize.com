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
export const GUIDANCE_PRESET_UPDATES: Record<string, Partial<ExamPreset>> = {
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
