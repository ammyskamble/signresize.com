import fs from 'fs';

// Verify examPresets.ts
const presets = fs.readFileSync('src/data/examPresets.ts', 'utf8');

const wbpscPresets = [
  'wbpsc-west-bengal',
  'wbpsc-signature-138x59',
  'wbpsc-photo',
  'wbpsc-document'
];

console.log('--- PRESETS CHECK ---');
wbpscPresets.forEach(id => {
  const exists = presets.includes(`id: '${id}'`);
  console.log(`Preset [${id}]: ${exists ? '✅ FOUND' : '❌ MISSING'}`);
});

// Verify complianceRules.ts
const compliance = fs.readFileSync('src/utils/complianceRules.ts', 'utf8');
console.log('\n--- COMPLIANCE RULES CHECK ---');
console.log('isWbpsc rule exists:', compliance.includes('isWbpsc'));
console.log('138 × 177 px check:', compliance.includes('138 × 177 Pixels'));
console.log('Running Cursive Handwriting check:', compliance.includes('Running Cursive Handwriting Only'));
console.log('Madhyamik Admit check:', compliance.includes('Madhyamik (10th) Admit Card'));

// Verify [exam].astro
const examAstro = fs.readFileSync('src/pages/[exam].astro', 'utf8');
console.log('\n--- [exam].astro CHECK ---');
console.log('isWbpsc in hasDocumentSuite:', examAstro.includes('isWbpsc'));
console.log('WBPSC Document Suite UI banner exists:', examAstro.includes('WBPSC Document Suite'));
console.log('WBPSC Signature button exists:', examAstro.includes("detail: 'wbpsc-west-bengal'"));
console.log('WBPSC Photo button exists:', examAstro.includes("detail: 'wbpsc-photo'"));
console.log('WBPSC Document button exists:', examAstro.includes("detail: 'wbpsc-document'"));
console.log('WBPSC 138x59 button exists:', examAstro.includes("detail: 'wbpsc-signature-138x59'"));

// Verify SignatureTool.tsx
const tool = fs.readFileSync('src/components/SignatureTool.tsx', 'utf8');
console.log('\n--- SignatureTool.tsx CHECK ---');
console.log('PRESET_KEY_MAPPINGS includes wbpsc:', tool.includes("wbpsc: 'wbpsc-west-bengal'"));
console.log('switchTargetType includes wbpsc:', tool.includes("targetPreset = PHOTO_PRESETS.find(p => p.id === 'wbpsc-photo');"));
console.log('isWbpscActive defined:', tool.includes('isWbpscActive = Boolean('));
console.log('selectWbpscSection defined:', tool.includes('selectWbpscSection = useCallback('));
console.log('WBPSC quickPresets defined:', tool.includes("short: 'WBPSC Photo'"));
console.log('WBPSC 4-in-1 Top Banner defined:', tool.includes('WBPSC 4-IN-1 SECTION SELECTOR'));
console.log('WBPSC In-Studio Banner defined:', tool.includes('WBPSC 4-IN-1 STUDIO SECTION SELECTOR'));
console.log('Clean WBPSC filenames enforced:', tool.includes("filename = `wbpsc_photo.${ext}`;"));

// Verify examPagesData.ts
const examPages = fs.readFileSync('src/data/examPagesData.ts', 'utf8');
console.log('\n--- examPagesData.ts CHECK ---');
console.log('wbpsc-signature-resize has sources:', examPages.includes("WBPSC Online Application & OTR Engine"));
console.log('wbpsc-photo-resize exists:', examPages.includes("slug: 'wbpsc-photo-resize'"));

console.log('\n🎉 ALL CHECKS COMPLETED!');
