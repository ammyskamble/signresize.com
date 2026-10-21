import fs from 'fs';

// 1. Read examPresets.ts
const presetsSource = fs.readFileSync('src/data/examPresets.ts', 'utf8');

// Parse presets directly
function parsePresetList(arrayName) {
  const start = presetsSource.indexOf(`export const ${arrayName}: ExamPreset[] = [`);
  if (start === -1) {
    throw new Error(`Could not find ${arrayName}`);
  }
  const end = presetsSource.indexOf('];', start);
  const chunk = presetsSource.slice(start, end + 2);
  
  // Extract objects using regex
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  const ids = [];
  let match;
  while ((match = idRegex.exec(chunk)) !== null) {
    ids.push(match[1]);
  }
  return ids;
}

const examPresetIds = parsePresetList('EXAM_PRESETS');
const photoPresetIds = parsePresetList('PHOTO_PRESETS');
const docPresetIds = parsePresetList('DOCUMENT_PRESETS');
const allPresetIds = [...examPresetIds, ...photoPresetIds, ...docPresetIds];

console.log('📊 Total Presets:');
console.log(`- EXAM_PRESETS (Signature): ${examPresetIds.length}`);
console.log(`- PHOTO_PRESETS (Photo): ${photoPresetIds.length}`);
console.log(`- DOCUMENT_PRESETS (Doc): ${docPresetIds.length}`);
console.log(`- TOTAL: ${allPresetIds.length}\n`);

// Check 1: Duplicate Preset IDs
const duplicates = allPresetIds.filter((id, idx) => allPresetIds.indexOf(id) !== idx);
if (duplicates.length > 0) {
  console.log('❌ DUPLICATE PRESET IDs FOUND:', duplicates);
} else {
  console.log('✅ No duplicate preset IDs found.');
}

// Check 2: Verify all page presetIds across examPagesData.ts & focusedExamPages.ts
const pagesSource = fs.readFileSync('src/data/examPagesData.ts', 'utf8');
const focusedSource = fs.readFileSync('src/data/focusedExamPages.ts', 'utf8');

const combinedPagesSource = pagesSource + '\n' + focusedSource;
const pagePresetMatches = [...combinedPagesSource.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?presetId:\s*['"]([^'"]+)['"]/g)];
// Deduplicate page slugs
const seenSlugs = new Set();
const uniquePages = [];
for (const match of pagePresetMatches) {
  const slug = match[1];
  const presetId = match[2];
  if (!seenSlugs.has(slug)) {
    seenSlugs.add(slug);
    uniquePages.push({ slug, presetId });
  }
}

console.log(`\n📄 Total Unique Exam Pages: ${uniquePages.length}`);

const missingPagePresets = [];
for (const { slug, presetId } of uniquePages) {
  if (!allPresetIds.includes(presetId)) {
    missingPagePresets.push({ slug, presetId });
  }
}

if (missingPagePresets.length > 0) {
  console.log('❌ PAGES WITH INVALID / MISSING PRESET ID:', missingPagePresets);
} else {
  console.log('✅ ALL exam pages map to a valid preset in examPresets.ts.');
}

// Check 3: PRESET_KEY_MAPPINGS in SignatureTool.tsx
const toolSource = fs.readFileSync('src/components/SignatureTool.tsx', 'utf8');
const mapStart = toolSource.indexOf('const PRESET_KEY_MAPPINGS: Record<string, string> = {');
let mappingMatches = [];
if (mapStart !== -1) {
  const mapEnd = toolSource.indexOf('};', mapStart);
  const mapChunk = toolSource.slice(mapStart, mapEnd);
  mappingMatches = [...mapChunk.matchAll(/['"]?([a-zA-Z0-9_-]+)['"]?:\s*['"]([^'"]+)['"]/g)];
}

const brokenKeyMappings = [];
for (const [_, key, targetPresetId] of mappingMatches) {
  if (key === 'Record' || key === 'string') continue;
  if (!allPresetIds.includes(targetPresetId)) {
    brokenKeyMappings.push({ key, targetPresetId });
  }
}

if (brokenKeyMappings.length > 0) {
  console.log('\n❌ BROKEN PRESET_KEY_MAPPINGS IN SignatureTool.tsx:');
  console.table(brokenKeyMappings);
} else {
  console.log(`\n✅ ALL ${mappingMatches.length} PRESET_KEY_MAPPINGS point to existing presets!`);
}

// Check 4: WorkspacePresetPicker quickPresetIds
const pickerSource = fs.readFileSync('src/components/tool/WorkspacePresetPicker.tsx', 'utf8');
const quickArrayMatch = pickerSource.match(/const quickPresetIds =[\s\S]*?;\n\n/);
const quickMatches = quickArrayMatch ? [...quickArrayMatch[0].matchAll(/'([a-zA-Z0-9_-]+)'/g)].map(m => m[1]) : [];
const brokenPickerIds = quickMatches.filter(id => id !== 'photo' && id !== 'document' && !allPresetIds.includes(id));
if (brokenPickerIds.length > 0) {
  console.log('\n❌ WorkspacePresetPicker has unknown preset IDs:', brokenPickerIds);
} else {
  console.log(`✅ ALL ${quickMatches.length} WorkspacePresetPicker quick presets are valid.`);
}

// Check 5: search-index.json.ts
const searchSource = fs.readFileSync('src/pages/search-index.json.ts', 'utf8');
const searchMatches = [...searchSource.matchAll(/\['([^']+)',\s*'([^']+)'\]/g)];
const brokenSearchEntries = [];
const allPageSlugs = uniquePages.map(p => p.slug);
for (const [_, presetId, slug] of searchMatches) {
  const presetExists = allPresetIds.includes(presetId);
  const slugExists = allPageSlugs.includes(slug) || slug === 'photo-resizer' || slug === 'signature-resizer';
  if (!presetExists || !slugExists) {
    brokenSearchEntries.push({ presetId, presetExists, slug, slugExists });
  }
}
if (brokenSearchEntries.length > 0) {
  console.log('\n❌ BROKEN SEARCH INDEX ENTRIES:');
  console.table(brokenSearchEntries);
} else {
  console.log(`\n✅ ALL ${searchMatches.length} search-index entries point to valid presets and pages!`);
}
