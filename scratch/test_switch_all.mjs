import fs from 'fs';

const presetsCode = fs.readFileSync('src/data/examPresets.ts', 'utf8');

function getPresets(name) {
  const start = presetsCode.indexOf('export const ' + name);
  const end = presetsCode.indexOf('export const', start + 1);
  const chunk = end !== -1 ? presetsCode.slice(start, end) : presetsCode.slice(start);
  
  // Match each object block { ... }
  const ids = [];
  const re = /id:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(chunk)) !== null) {
    ids.push(m[1]);
  }
  return ids;
}

const SIGNATURE_PRESETS = getPresets('EXAM_PRESETS');
const PHOTO_PRESETS = getPresets('PHOTO_PRESETS');
const DOCUMENT_PRESETS = getPresets('DOCUMENT_PRESETS');

console.log(`Loaded ${SIGNATURE_PRESETS.length} sigs, ${PHOTO_PRESETS.length} photos, ${DOCUMENT_PRESETS.length} docs`);

const keyFamilies = [
  { name: 'Sarathi Parivahan', sigId: 'sarathi-dl', photoId: 'sarathi-photo' },
  { name: 'IB ACIO', sigId: 'ib-acio', photoId: 'ib-acio-photo' },
  { name: 'India Post GDS', sigId: 'india-post-gds-signature', photoId: 'india-post-gds-photo' },
  { name: 'PAN Card', sigId: 'pan-card-nsdl', photoId: 'pan-card-photo-nsdl' },
  { name: 'CUET', sigId: 'cuet-ug', photoId: 'cuet-ug-photo' },
  { name: 'UPSSSC PET', sigId: 'upsssc-pet', photoId: 'upsssc-pet-photo' },
  { name: 'BSSC', sigId: 'bssc-inter-level', photoId: 'bssc-photo' },
  { name: 'DSSSB', sigId: 'dsssb-preset', photoId: 'dsssb-photo' },
  { name: 'Kerala PSC', sigId: 'kerala-psc-signature', photoId: 'kerala-psc-photo' },
  { name: 'IIT JAM', sigId: 'iit-jam', photoId: 'iit-jam-photo' },
  { name: 'GATE', sigId: 'gate-jam', photoId: 'gate-photo' },
  { name: 'SSC CGL', sigId: 'ssc-cgl', photoId: 'ssc-cgl-photo' },
  { name: 'SSC MTS', sigId: 'ssc-mts', photoId: 'ssc-photo' },
  { name: 'Indian Coast Guard', sigId: 'indian-coast-guard', photoId: 'indian-coast-guard-photo' },
  { name: 'NICL AO', sigId: 'nicl-ao', photoId: 'nicl-ao-photo' },
  { name: 'NEET', sigId: 'nta-neet-jee', photoId: 'neet-photo' },
  { name: 'UPSC', sigId: 'upsc-civil-services', photoId: 'upsc-photo' },
  { name: 'IBPS / SBI', sigId: 'ibps-sbi', photoId: 'ibps-photo' },
  { name: 'RRB', sigId: 'rrb-railway', photoId: 'rrb-photo' },
  { name: 'CTET', sigId: 'ctet-signature', photoId: 'ctet-photo' },
  { name: 'Maharashtra Police', sigId: 'maharashtra-police', photoId: 'maharashtra-police-photo' },
  { name: 'UP Police', sigId: 'up-police', photoId: 'up-police-photo' },
  { name: 'Rajasthan Police', sigId: 'rajasthan-police-sig', photoId: 'rajasthan-police-photo' },
  { name: 'Bihar Police', sigId: 'bihar-police-sig', photoId: 'bihar-police-photo' },
  { name: 'MP Police', sigId: 'mp-police-sig', photoId: 'mp-police-photo' },
];

for (const fam of keyFamilies) {
  const sig = SIGNATURE_PRESETS.includes(fam.sigId);
  const photo = PHOTO_PRESETS.includes(fam.photoId);
  console.log(`${fam.name.padEnd(22)} | Sig (${fam.sigId}): ${sig ? '✅' : '❌ MISSING'} | Photo (${fam.photoId}): ${photo ? '✅' : '❌ MISSING'}`);
}
