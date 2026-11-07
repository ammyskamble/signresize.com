import fs from 'fs';

const pagesCode = fs.readFileSync('src/data/examPagesData.ts', 'utf8');
const presetsCode = fs.readFileSync('src/data/examPresets.ts', 'utf8');

// 1. Extract all preset IDs from examPresets.ts
const allPresetIds = [...presetsCode.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total preset IDs in examPresets.ts:', allPresetIds.length);

// 2. Extract all pages from examPagesData.ts
const pageMatches = [...pagesCode.matchAll(/slug:\s*['"]([^'"]+)['"],\s*presetId:\s*['"]([^'"]+)['"]/g)];
console.log('Total pages with presetId in examPagesData.ts:', pageMatches.length);

const missingPresets = [];
for (const [_, slug, presetId] of pageMatches) {
  if (!allPresetIds.includes(presetId)) {
    missingPresets.push({ slug, presetId });
  }
}

if (missingPresets.length > 0) {
  console.log('❌ PAGES WITH INVALID / MISSING PRESET ID:');
  console.table(missingPresets);
} else {
  console.log('✅ ALL page presetIds match a valid preset in examPresets.ts!');
}

// 3. Check CTET presets
const ctet = allPresetIds.filter(id => id.includes('ctet'));
console.log('CTET presets:', ctet);
