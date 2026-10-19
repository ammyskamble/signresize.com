import fs from 'fs';

const content = fs.readFileSync('src/data/examPresets.ts', 'utf8');

function getArrayChunk(name) {
  const start = content.indexOf('export const ' + name);
  const end = content.indexOf('export const', start + 1);
  return end !== -1 ? content.slice(start, end) : content.slice(start);
}

const examsChunk = getArrayChunk('EXAM_PRESETS');
const photosChunk = getArrayChunk('PHOTO_PRESETS');
const docsChunk = getArrayChunk('DOCUMENT_PRESETS');

const examsTotal = [...examsChunk.matchAll(/id:\s*['"]([^'"]+)['"]/g)].length;
const examsWithTargetType = [...examsChunk.matchAll(/targetType:\s*['"]([^'"]+)['"]/g)].length;

const photosTotal = [...photosChunk.matchAll(/id:\s*['"]([^'"]+)['"]/g)].length;
const photosWithTargetType = [...photosChunk.matchAll(/targetType:\s*['"]([^'"]+)['"]/g)].length;

const docsTotal = [...docsChunk.matchAll(/id:\s*['"]([^'"]+)['"]/g)].length;
const docsWithTargetType = [...docsChunk.matchAll(/targetType:\s*['"]([^'"]+)['"]/g)].length;

console.log(`EXAM_PRESETS: ${examsWithTargetType} of ${examsTotal} have targetType`);
console.log(`PHOTO_PRESETS: ${photosWithTargetType} of ${photosTotal} have targetType`);
console.log(`DOCUMENT_PRESETS: ${docsWithTargetType} of ${docsTotal} have targetType`);
