from pathlib import Path
p=Path('src/data/examGuidance.ts')
s=p.read_text(encoding='utf-8')
block='''const coastGuardPortal = 'https://cgept.parikshasaarthi.in/';
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

'''
s=s.replace('export const GUIDANCE_PRESET_UPDATES:',block+'export const GUIDANCE_PRESET_UPDATES:')
needle='export const GUIDANCE_PRESET_UPDATES: Record<string, Partial<ExamPreset>> = {\n'
s=s.replace(needle,needle+'''  ...Object.fromEntries(['indian-coast-guard', 'indian-coast-guard-photo', 'indian-coast-guard-document', 'indian-coast-guard-thumb', 'indian-coast-guard-thumb-doc'].map(id => [id, {
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
''')
p.write_text(s,encoding='utf-8')
p=Path('src/types/index.ts');s=p.read_text(encoding='utf-8').replace('  requiresNameDate?: boolean;', '  requiresNameDate?: boolean;\n  /** Only true when the selected recruitment source requires a physical slate. */\n  requiresPhysicalSlate?: boolean;');p.write_text(s,encoding='utf-8')
p=Path('src/data/examPresets.ts');s=p.read_text(encoding='utf-8').replace('export const DOCUMENT_PRESETS: ExamPreset[] = [','const BASE_DOCUMENT_PRESETS: ExamPreset[] = [').replace('export const SIGNATURE_PRESETS = EXAM_PRESETS;', 'export const DOCUMENT_PRESETS: ExamPreset[] = BASE_DOCUMENT_PRESETS.map(preset => ({ ...preset, ...GUIDANCE_PRESET_UPDATES[preset.id] }));\n\nexport const SIGNATURE_PRESETS = EXAM_PRESETS;');p.write_text(s,encoding='utf-8')
p=Path('src/pages/[exam].astro');s=p.read_text(encoding='utf-8').replace('const isPreparationGuide = isWbpsc || isBpsc;', 'const isPreparationGuide = isWbpsc || isBpsc || isCoastGuard;').replace('const relevantBlogPosts = isBpsc ? []', 'const relevantBlogPosts = (isBpsc || isCoastGuard) ? []');p.write_text(s,encoding='utf-8')
p=Path('src/components/tool/ComplianceRejectionAudit.tsx');s=p.read_text(encoding='utf-8');start=s.index('  const isCoastGuardPhoto = Boolean(');end=s.index('\n\n',start);s=s[:start]+"  const requiresPhysicalSlate = mode === 'photo' && preset?.requiresPhysicalSlate === true;"+s[end:];s=s.replace('isCoastGuardPhoto','requiresPhysicalSlate');p.write_text(s,encoding='utf-8')
p=Path('src/components/SignatureTool.tsx');s=p.read_text(encoding='utf-8')
s=s.replace("isCoastGuardActive && targetType === 'photo' && !slateConfirmed", "selectedPreset?.requiresPhysicalSlate === true && targetType === 'photo' && !slateConfirmed")
s=s.replace("DOCUMENT_PRESETS.find(p => p.id === 'indian-coast-guard-thumb-doc' || p.id === 'indian-coast-guard-document')", "DOCUMENT_PRESETS.find(p => p.id === 'indian-coast-guard-document')")
# Remove both prominent legacy thumb tabs; keep legacy preset discoverable with explicit caveat.
import re
s,n=re.subn(r'<button\s+type="button"\s+data-mode="document"\s+data-step="03"\s+aria-pressed=\{targetType === \'document\' && \(selectedPreset\?\.id === \'indian-coast-guard-thumb-doc\'.*?</button>', '', s, flags=re.S)
assert n==2,n
s=s.replace('1. Signature','1. Signature').replace('2. Slate Photo','2. Photo').replace('4. Certificate','3. Document')
s=s.replace('Signature.jpg • 140×60 px • 10–50 KB','Signature.jpg • 10–100 KB • editable 140×60 px canvas').replace('Passport_Photograph.jpg • 350×450 px • 10–50 KB (Chalk Slate)','Passport_Photograph.jpg • 10–100 KB • editable 350×450 px canvas')
s=s.replace('Coast Guard Slate Photo','Coast Guard Photo').replace('Coast Guard Documents & Thumb','Coast Guard Documents').replace('350×450 px • 10–50 KB • Slate + DoP','10–100 KB • Separate live capture in portal').replace('140×60 px • 10–50 KB • Signature.jpg','10–100 KB • Signature.jpg').replace('Marksheets (50–150 KB) & LTI (10–50 KB)','Identity proof 50–150 KB • Check other fields')
s=s.replace('01/2026 Batch','01/2027 & 02/2027').replace('https://joinindiancoastguard.cdac.in/cgept/','https://cgept.parikshasaarthi.in/').replace('<span>joinindiancoastguard.cdac.in</span>','<span>CGEPT recruitment portal</span>')
s=s.replace('Hold black chalkboard with <strong>Name &amp; Date in white chalk</strong>. Auto-saved as', 'Recent colour front portrait on a light background. Complete <strong>live capture separately in the portal</strong>. Saved as')
s=s.replace('Running cursive handwriting on plain white paper (no capital letters). Auto-saved as', 'Keep your scanned signature clear and complete. Saved as')
s=s.replace('Scanned from <strong>ORIGINAL</strong> certificate/marksheet (no photocopies). Auto-saved as', '<strong>Original</strong> identity-proof scan: 50–150 KB. Check other document fields separately. Convenience filename:')
s=s.replace('Clear left thumb impression ridge lines on plain white paper. Auto-saved as', '<strong>Legacy preset:</strong> thumb-image upload is not listed in the reviewed 2027 instructions. Saved as')
s=s.replace("'350×450 px • 10–50 KB'", "'Default 350×450 px • 10–100 KB'").replace("'140×60 px • 10–50 KB'", "'Default 140×60 px • 10–100 KB'").replace("'700×990 px • 50–150 KB'", "'Default 700×990 px • 50–150 KB'")
p.write_text(s,encoding='utf-8')
print('Updated Coast Guard guidance, preset consumers and tool UI')
