import type { ExamPageInfo } from './examPagesData';

const verifiedOn = '2026-10-03';
const sbiSources = [
  { label: 'SBI Careers: choose your current PO or Clerk notification', url: 'https://sbi.co.in/web/careers/current-openings' },
  { label: 'SBI signature guidance example (specialist recruitment, January 2026)', url: 'https://home.sbi.bank.in/documents/77530/52947104/12012026_FINAL%2BDETAILED%2BADVT%2BSCO%2B20%2BAVP%2BHR%2B%281%29.pdf/12012026_FINAL%20DETAILED%20ADVT%20SCO%2020%20AVP%20HR%20%281%295c0e.pdf?t=1768197915210' },
];
const sbi: ExamPageInfo = {
  slug: 'sbi-signature-resize', presetId: 'sbi-signature',
  pageTitle: 'SBI Signature Resizer – 10–20 KB, 140×60 px | SignResize',
  metaDescription: 'Resize your handwritten SBI signature to 140×60 pixels and 10–20 KB JPG online. Free private tool for PO and Clerk applicants, with upload guidance and source links.',
  keywords: 'sbi signature resizer, sbi signature resize, sbi signature size 10 to 20 kb, sbi po signature resize, sbi clerk signature resizer',
  h1: 'SBI Signature Resizer',
  subheading: 'Upload a scan or photograph of your handwritten signature, crop to 140×60 pixels and download a 10–20 KB JPG. Check your recruitment notification before submitting.',
  authority: 'State Bank of India (SBI)', targetExams: 'SBI PO and SBI Clerk applications, subject to the current notification',
  widthPx: 140, heightPx: 60, widthCm: 1.778, heightCm: 0.762,
  minKb: 10, maxKb: 20, recommendedKb: 15, dpi: 200,
  ink: 'Black ink on white paper', aspectRatioLabel: '7:3', hidePhysicalSize: true,
  guidanceLabel: 'SBI upload guidance', verifiedOn, sources: sbiSources,
  pixelNote: '140×60 pixels is a preferred size in the linked SBI example; confirm your current PO or Clerk notification.',
  strictNotice: 'Use your own handwritten signature in black ink on white paper. Capital-letter signatures are not accepted. Resizing cannot guarantee acceptance by SBI.',
  tips: [
    'Photograph or scan your own handwritten signature in clear, even light.',
    'Crop away unused paper without cutting off any signature strokes.',
    'Download JPG and verify the actual file is between 10 KB and 20 KB.',
    'Check your exact PO or Clerk notification and inspect the portal preview before submission.',
  ],
  faqs: [
    { q: 'How do I use the SBI signature resizer?', a: 'Upload your handwritten signature image, adjust the crop, review the 140×60 pixel output and download the JPG. Check that its size is within 10–20 KB before uploading to SBI.' },
    { q: 'What is the SBI signature size?', a: 'The linked SBI recruitment example specifies 10–20 KB and prefers 140×60 pixels. PO and Clerk candidates should confirm the upload instructions in their own current notification.' },
    { q: 'Can I use a typed or drawn digital signature?', a: 'Use a scan or photograph of your physical handwritten signature for the exam application. The drawing and typing tools on this website serve other purposes.' },
    { q: 'Why does SBI reject my signature file?', a: 'Check the file format, both file-size limits, legibility, complete crop and black ink on white paper. A suitable file size alone does not guarantee acceptance.' },
  ],
  relatedTools: ['sbi-po-signature-resize', 'sbi-clerk-signature-resize', 'ibps-signature-resize'],
};

export const FOCUSED_EXAM_PAGES: ExamPageInfo[] = [sbi, {
  slug: 'iit-jam-signature-resize', presetId: 'iit-jam',
  pageTitle: 'IIT JAM Signature Resize 2027 (50–150 KB) | SignResize',
  metaDescription: 'Resize a handwritten IIT JAM 2027 signature to JPG, 50–150 KB. Dedicated 560×160 pixel preset, official requirements, crop guidance and private browser processing.',
  keywords: 'iit jam signature resize, iit jam signature resizer, iit jam signature size 2027, jam signature 50 to 150 kb',
  h1: 'IIT JAM Signature Resizer',
  subheading: 'Prepare your handwritten signature for JAM 2027 with a 560×160 pixel JPG preset and 50–150 KB file-size bounds. This preset is one output size within the official limits.',
  authority: 'IIT Kharagpur · JAM 2027', targetExams: 'IIT JAM 2027',
  widthPx: 560, heightPx: 160, widthCm: 7, heightCm: 2,
  minKb: 50, maxKb: 150, recommendedKb: 100, dpi: 203.2,
  ink: 'Black or dark blue ink on white paper', aspectRatioLabel: '7:2 (3.5:1)',
  guidanceLabel: 'JAM 2027 requirements', verifiedOn,
  physicalSizeNote: 'Official signing box: 7 cm wide × 2 cm high; this is not a universal pixel-to-centimetre conversion.',
  pixelNote: 'Width first: minimum 280×80 px, maximum 560×160 px. The tool defaults to the maximum size.',
  sources: [
    { label: 'JAM 2027 official signature requirements', url: 'https://www.jam.iitkgp.ac.in/doc-req.html' },
    { label: 'JAM 2026 brochure (previous cycle: 10–150 KB)', url: 'https://jam2026.iitb.ac.in/files/JAM2026_Brochure-2.pdf' },
  ],
  strictNotice: 'Sign inside a 7 cm wide × 2 cm high box on white paper using black or dark blue ink. All-capital names and initials are not accepted. Upload a clear JPG/JPEG.',
  tips: [
    'Sign horizontally inside the 7×2 cm box and scan the complete signature.',
    'Crop to the box border without clipping any strokes; inspect the preview for blur.',
    'Download JPG and check both the 50 KB minimum and 150 KB maximum for JAM 2027.',
    'Use the JAM preset rather than GATE. Their file-size and aspect-ratio requirements differ.',
  ],
  faqs: [
    { q: 'What is the IIT JAM 2027 signature size?', a: 'The official JAM 2027 documents page specifies JPG/JPEG, 50–150 KB and a 7 cm wide × 2 cm high signing box. Expressed width first, the pixel limits are 280×80 minimum and 560×160 maximum.' },
    { q: 'How do I resize a signature for IIT JAM?', a: 'Upload a clear scan of your handwritten signature, crop it to the box border, use the 560×160 pixel JAM preset, then download and inspect the JPG and its actual file size.' },
    { q: 'Is the IIT JAM signature size the same as GATE?', a: 'No. Use the dedicated JAM 2027 preset. GATE has its own aspect-ratio and file-size limits; check the official page for the exam and cycle you are applying to.' },
    { q: 'Why is my signature below 50 KB?', a: 'A clean signature may encode as a small JPG even at high quality. The tool can add safe JPEG comment padding to meet the minimum without changing the visible pixels. Inspect the downloaded file and the portal preview; acceptance is decided by JAM.' },
    { q: 'Does JAM 2026 use the same file-size limits?', a: 'No. The linked JAM 2026 brochure specifies 10–150 KB and a width-to-height ratio between 3.15 and 4.04. This page defaults to JAM 2027; choose the separately labelled JAM 2026 preset if you need the previous cycle.' },
  ], relatedTools: ['gate-signature-resize', 'photo-resizer'],
}];

export const EXAM_PAGE_UPDATES: Record<string, Partial<ExamPageInfo>> = {
  'ibps-signature-resize': {
    pageTitle: 'IBPS Signature Resizer – 10–20 KB, 140×60 px | SignResize',
    metaDescription: 'Resize your handwritten IBPS signature to 140×60 pixels and 10–20 KB JPG. Private online tool; check the current PO, Clerk, SO or RRB notification.',
    h1: 'IBPS Signature Resizer (10–20 KB)', keywords: 'ibps signature resize, ibps signature resizer, ibps signature 10 to 20 kb, ibps po signature size, ibps clerk signature resize',
    subheading: 'Resize a handwritten IBPS signature to 140×60 pixels and 10–20 KB JPG. Confirm the requirements in your current recruitment notification.',
    authority: 'Institute of Banking Personnel Selection (IBPS)', targetExams: 'IBPS PO, Clerk, SO and RRB, subject to the current notification',
    hidePhysicalSize: true, guidanceLabel: 'IBPS upload guidance',
    strictNotice: 'Use your own handwritten signature in black ink on white paper. Check the current IBPS notification for all upload rules.',
    faqs: [ { q: 'What size should an IBPS signature be?', a: 'This preset produces a 140×60 pixel JPG within 10–20 KB. Check the exact upload requirements in the current IBPS recruitment notification.' }, { q: 'Where is the SBI signature resizer?', a: 'Use the dedicated SBI signature resizer linked below for SBI PO and Clerk guidance.' } ],
    relatedTools: ['sbi-signature-resize', 'ibps-clerk-signature-resize'],
  },
  'sbi-po-signature-resize': {
    ...sbi, slug: 'sbi-po-signature-resize', presetId: 'sbi-po',
    pageTitle: 'SBI PO Signature Resizer – 10–20 KB JPG | SignResize', h1: 'SBI PO Signature Resizer',
    metaDescription: 'Prepare a handwritten SBI PO signature as a 140×60 pixel, 10–20 KB JPG. Private tool with PO upload checklist and links to official recruitment guidance.',
    keywords: 'sbi po signature resize, sbi po signature resizer, sbi po signature size', targetExams: 'SBI PO, subject to the current recruitment notification',
    relatedTools: ['sbi-signature-resize', 'sbi-clerk-signature-resize'],
    faqs: [...sbi.faqs.slice(0, 2), { q: 'What should SBI PO candidates check before submitting?', a: 'Open the current Probationary Officer notification from SBI Careers, confirm its signature instructions, and inspect the final signature preview before submitting your application.' }],
  },
  'sbi-clerk-signature-resize': {
    ...sbi, slug: 'sbi-clerk-signature-resize', presetId: 'sbi-clerk',
    pageTitle: 'SBI Clerk Signature Resizer – 10–20 KB JPG | SignResize', h1: 'SBI Clerk Signature Resizer',
    metaDescription: 'Prepare a handwritten SBI Clerk signature as a 140×60 pixel, 10–20 KB JPG. Private tool with Junior Associate upload guidance and official source links.',
    keywords: 'sbi clerk signature resize, sbi clerk signature resizer, sbi junior associate signature size', targetExams: 'SBI Clerk / Junior Associates, subject to the current recruitment notification',
    relatedTools: ['sbi-signature-resize', 'sbi-po-signature-resize'],
    faqs: [...sbi.faqs.slice(0, 2), { q: 'What should SBI Clerk candidates check before submitting?', a: 'Choose the current Junior Associates advertisement on SBI Careers. Check the signature instructions and the separate photograph, thumb impression and declaration requirements in that notification.' }],
  },
  'gate-signature-resize': {
    pageTitle: 'GATE Signature Resizer 2027 (3–300 KB JPG) | SignResize',
    metaDescription: 'Resize your handwritten GATE 2027 signature to JPG, 3–300 KB. Dedicated 480×160 pixel preset, official aspect-ratio guidance and private browser processing.',
    h1: 'GATE Signature Resizer', keywords: 'gate signature resize, gate signature resizer, gate signature size 2027, gate signature 3 to 300 kb',
    subheading: 'Use the 480×160 pixel JPG preset for GATE 2027, with a 3:1 aspect ratio and 3–300 KB bounds. This is one preset within the official range.',
    authority: 'IIT Madras · GATE 2027', targetExams: 'GATE 2027', widthPx: 480, heightPx: 160, minKb: 3, maxKb: 300,
    hidePhysicalSize: true, guidanceLabel: 'GATE 2027 requirements', verifiedOn,
    pixelNote: 'Official limits: 250×80 to 580×180 px; width-to-height ratio 2.75–3.75. Preset: 480×160 px (3:1).',
    sources: [{ label: 'GATE 2027 official photograph and signature requirements', url: 'https://gate2027.iitm.ac.in/photograph_and_signature' }],
    strictNotice: 'Use your own handwritten signature in black or dark blue ink. The signature should occupy 70–80% of the cropped image. Digital signatures are not accepted.',
    tips: ['Scan your own handwritten signature clearly on white paper.', 'Crop to a width-to-height ratio between 2.75 and 3.75.', 'Keep the signature within the crop and occupying 70–80% of the image.', 'Download JPG within 3–300 KB and inspect the portal preview. Use the separate IIT JAM tool for JAM.'],
    faqs: [{ q: 'What are the GATE 2027 signature requirements?', a: 'The official page specifies JPG/JPEG, 3–300 KB, a width-to-height ratio between 2.75 and 3.75 and pixel bounds from 250×80 to 580×180. This tool defaults to 480×160 pixels.' }, { q: 'Can I use the GATE preset for IIT JAM?', a: 'Use the separate IIT JAM signature resizer because JAM has different requirements. The related tool link below opens the current JAM preset.' }],
    relatedTools: ['iit-jam-signature-resize'],
  },
};
