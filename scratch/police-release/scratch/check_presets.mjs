import fs from 'fs';

const content = fs.readFileSync('src/data/examPresets.ts', 'utf8');

function getArray(name) {
  const start = content.indexOf('export const ' + name);
  const end = content.indexOf('export const', start + 1);
  const chunk = end !== -1 ? content.slice(start, end) : content.slice(start);
  const idMatches = [...chunk.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
  return idMatches;
}

const exams = getArray('EXAM_PRESETS');
const photos = getArray('PHOTO_PRESETS');
const docs = getArray('DOCUMENT_PRESETS');

console.log('EXAM_PRESETS count:', exams.length);
console.log('PHOTO_PRESETS count:', photos.length);
console.log('DOCUMENT_PRESETS count:', docs.length);

const checkIds = [
  'sarathi-dl', 'sarathi-photo',
  'ib-acio', 'ib-acio-photo',
  'pan-card-nsdl', 'pan-card-photo-nsdl',
  'kerala-psc-signature', 'kerala-psc-photo',
  'dsssb-preset', 'dsssb-photo',
  'india-post-gds-signature', 'india-post-gds-photo',
  'ssc-mts', 'ssc-cgl', 'ssc-cgl-photo',
  'iit-jam', 'iit-jam-photo',
  'gate-jam', 'gate-photo'
];

for (const id of checkIds) {
  const inE = exams.includes(id);
  const inP = photos.includes(id);
  const inD = docs.includes(id);
  console.log(id.padEnd(26), '=>', inE ? 'EXAM ' : '', inP ? 'PHOTO ' : '', inD ? 'DOC ' : '', (!inE && !inP && !inD) ? 'MISSING!' : '');
}
