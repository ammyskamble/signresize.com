from pathlib import Path
p=Path('src/data/examGuidance.ts');s=p.read_text(encoding='utf-8')
block='''export const NTPC_SOURCES = {
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

'''
s=s.replace('export const GUIDANCE_PRESET_UPDATES:',block+'export const GUIDANCE_PRESET_UPDATES:')
s=s.replace('export const GUIDANCE_PRESET_UPDATES: Record<string, Partial<ExamPreset>> = {','''export const GUIDANCE_PRESET_UPDATES: Record<string, Partial<ExamPreset>> = {
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
  },''')
p.write_text(s,encoding='utf-8')
p=Path('src/pages/[exam].astro');s=p.read_text(encoding='utf-8').replace("const isPreparationGuide =", "const isNtpc = examData.slug === 'rrb-ntpc-signature-resize';\nconst isPreparationGuide =").replace('isWbpsc || isBpsc || isCoastGuard;', 'isWbpsc || isBpsc || isCoastGuard || isNtpc;').replace('(isBpsc || isCoastGuard) ? []', '(isBpsc || isCoastGuard || isNtpc) ? []');p.write_text(s,encoding='utf-8')
p=Path('src/components/SignatureTool.tsx');s=p.read_text(encoding='utf-8').replace('  const isCoastGuardActive = Boolean(', "  const isNtpcActive = selectedPreset?.id === 'rrb-ntpc';\n  const isCoastGuardActive = Boolean(")
s=s.replace('!studioModeTabs && !isCoastGuardActive', '!studioModeTabs && !isNtpcActive && !isCoastGuardActive').replace(') : studioModeTabs && (', ') : studioModeTabs && !isNtpcActive && (')
s=s.replace("targetPreset = (examAnchor.includes('alp') ?", "targetPreset = (examAnchor.includes('ntpc') ? SIGNATURE_PRESETS.find(p => p.id === 'rrb-ntpc') : undefined) || (examAnchor.includes('alp') ?")
p.write_text(s,encoding='utf-8')
p=Path('src/components/Footer.astro');s=p.read_text(encoding='utf-8').replace('RRB NTPC (CEN 05/06)', 'RRB NTPC Signature').replace('RRB NTPC (30–70 KB CEN)', 'RRB NTPC (30–49 KB)');start=s.index('href="/rrb-ntpc-signature-resize/"');end=s.index('</a>',start);s=s[:start]+s[start:end].replace('30–70K','30–49K')+s[end:];p.write_text(s,encoding='utf-8')
print('NTPC effective data and tool corrected')
