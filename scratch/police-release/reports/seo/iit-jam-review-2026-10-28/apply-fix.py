from pathlib import Path
p=Path('src/data/examGuidance.ts');s=p.read_text(encoding='utf-8')
block='''const jamSource = 'https://www.jam.iitkgp.ac.in/doc-req.html';
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

'''
s=s.replace('export const GUIDANCE_PRESET_UPDATES:',block+'export const GUIDANCE_PRESET_UPDATES:')
s=s.replace('export const GUIDANCE_PRESET_UPDATES: Record<string, Partial<ExamPreset>> = {','''export const GUIDANCE_PRESET_UPDATES: Record<string, Partial<ExamPreset>> = {
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
  },''')
p.write_text(s,encoding='utf-8')
p=Path('src/pages/[exam].astro');s=p.read_text(encoding='utf-8').replace("{examData.slug.includes('iit-jam') && (", "{examData.slug.includes('iit-jam') && !examGuidance && (").replace('isCoastGuard || isNtpc;', 'isCoastGuard || isNtpc || isJam;').replace('(isBpsc || isCoastGuard || isNtpc) ? []','(isBpsc || isCoastGuard || isNtpc || isJam) ? []');p.write_text(s,encoding='utf-8')
p=Path('src/components/Footer.astro');s=p.read_text(encoding='utf-8').replace('IIT JAM Photo (20–200 KB)','IIT JAM Photo (50–200 KB)');p.write_text(s,encoding='utf-8')
p=Path('src/components/SignatureTool.tsx');s=p.read_text(encoding='utf-8').replace("  const isNtpcActive =", "  const isJam2027Active = selectedPreset?.id === 'iit-jam' || selectedPreset?.id === 'iit-jam-photo';\n  const isNtpcActive =")
s=s.replace('    : isNtpcActive\n', """    : isJam2027Active
    ? ALL_COMBINED_PRESETS.filter(preset => ['iit-jam', 'iit-jam-photo'].includes(preset.id))
        .map(preset => ({ id: preset.id, short: preset.id === 'iit-jam' ? 'JAM Signature' : 'JAM Photo', label: preset.name, specs: `${preset.widthPx}×${preset.heightPx} • ${preset.minKb}–${preset.maxKb} KB` }))
    : isNtpcActive
""")
# Current JAM image workflow has no verified generic certificate preset.
s=s.replace("(['signature', 'photo', 'document'] as const).map((type, index)", "(isJam2027Active ? (['signature', 'photo'] as const) : (['signature', 'photo', 'document'] as const)).map((type, index)")
p.write_text(s,encoding='utf-8')
print('Updated JAM source-scoped pages, image presets and switching controls')
