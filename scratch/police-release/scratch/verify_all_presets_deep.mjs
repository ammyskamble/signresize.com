import fs from 'fs';

// Read examPresets.ts
const presetsSource = fs.readFileSync('src/data/examPresets.ts', 'utf8');

function extractArray(name) {
  const start = presetsSource.indexOf(`export const ${name}: ExamPreset[] = [`);
  const end = presetsSource.indexOf('];', start);
  const code = presetsSource.slice(start, end + 2);
  // Transform TS into evaluatable JS object array
  // Remove types or interface annotations if any
  const cleanCode = code
    .replace(`export const ${name}: ExamPreset[] = `, `const ${name} = `);
  
  const fn = new Function(`${cleanCode}; return ${name};`);
  return fn();
}

const EXAM_PRESETS = extractArray('EXAM_PRESETS');
const PHOTO_PRESETS = extractArray('PHOTO_PRESETS');
const DOCUMENT_PRESETS = extractArray('DOCUMENT_PRESETS');

const allPresets = [
  ...EXAM_PRESETS.map(p => ({ ...p, expectedMode: 'signature' })),
  ...PHOTO_PRESETS.map(p => ({ ...p, expectedMode: 'photo' })),
  ...DOCUMENT_PRESETS.map(p => ({ ...p, expectedMode: 'document' })),
];

console.log(`\n🔍 DEEP AUDITING ALL ${allPresets.length} PRESETS:\n`);

const issues = [];

allPresets.forEach((p, idx) => {
  const prefix = `[${p.expectedMode.toUpperCase()}] ${p.id}`;

  // 1. ID sanity
  if (!p.id || typeof p.id !== 'string' || p.id.trim() !== p.id || !/^[a-z0-9_-]+$/.test(p.id)) {
    issues.push(`${prefix}: Invalid ID format: "${p.id}"`);
  }

  // 2. Name & metadata sanity
  if (!p.name || p.name.length < 3) issues.push(`${prefix}: Missing or too short name: "${p.name}"`);
  if (!p.shortCode || p.shortCode.length < 2) issues.push(`${prefix}: Missing or too short shortCode: "${p.shortCode}"`);
  if (!p.authority || p.authority.length < 2) issues.push(`${prefix}: Missing authority: "${p.authority}"`);
  if (!p.category) issues.push(`${prefix}: Missing category`);
  if (!p.notes) issues.push(`${prefix}: Missing notes`);

  // 3. Dimensions
  if (typeof p.widthPx !== 'number' || p.widthPx <= 0 || !Number.isInteger(p.widthPx)) {
    issues.push(`${prefix}: Invalid widthPx: ${p.widthPx}`);
  }
  if (typeof p.heightPx !== 'number' || p.heightPx <= 0 || !Number.isInteger(p.heightPx)) {
    issues.push(`${prefix}: Invalid heightPx: ${p.heightPx}`);
  }

  // 4. File size limits
  if (typeof p.minKb !== 'number' || p.minKb <= 0) {
    issues.push(`${prefix}: Invalid minKb: ${p.minKb}`);
  }
  if (typeof p.maxKb !== 'number' || p.maxKb <= 0) {
    issues.push(`${prefix}: Invalid maxKb: ${p.maxKb}`);
  }
  if (p.minKb > p.maxKb) {
    issues.push(`${prefix}: minKb (${p.minKb}) > maxKb (${p.maxKb})`);
  }
  if (typeof p.recommendedKb === 'number') {
    if (p.recommendedKb < p.minKb || p.recommendedKb > p.maxKb) {
      issues.push(`${prefix}: recommendedKb (${p.recommendedKb}) is outside [${p.minKb}, ${p.maxKb}]`);
    }
  }

  // 5. Aspect Ratio
  if (typeof p.aspectRatio !== 'number' || p.aspectRatio <= 0 || isNaN(p.aspectRatio)) {
    issues.push(`${prefix}: Invalid aspectRatio: ${p.aspectRatio}`);
  }

  // 6. Format
  if (!['JPG', 'JPEG', 'PNG', 'PDF', 'JPG/JPEG'].includes(p.format)) {
    issues.push(`${prefix}: Unexpected format: "${p.format}"`);
  }

  // 7. DPI
  if (typeof p.dpi !== 'number' || p.dpi <= 0) {
    issues.push(`${prefix}: Invalid dpi: ${p.dpi}`);
  }

  // 8. Mode specific
  if (p.expectedMode === 'photo') {
    if (p.targetType !== 'photo') {
      issues.push(`${prefix}: Missing targetType: 'photo' (got ${p.targetType})`);
    }
  } else if (p.expectedMode === 'document') {
    if (p.targetType !== 'document') {
      issues.push(`${prefix}: Missing targetType: 'document' (got ${p.targetType})`);
    }
  }
});

if (issues.length > 0) {
  console.log(`❌ FOUND ${issues.length} ISSUES:`);
  issues.forEach(i => console.log('  - ' + i));
} else {
  console.log(`✅ ALL ${allPresets.length} presets passed all sanity checks with zero issues!`);
}
