import fs from 'fs';

const presetsCode = fs.readFileSync('src/data/examPresets.ts', 'utf8');
const pagesCode = fs.readFileSync('src/data/examPagesData.ts', 'utf8');

function getPresets(name) {
  const start = presetsCode.indexOf('export const ' + name);
  const end = presetsCode.indexOf('export const', start + 1);
  const chunk = end !== -1 ? presetsCode.slice(start, end) : presetsCode.slice(start);
  const items = [];
  const re = /id:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?authority:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(chunk)) !== null) {
    items.push({ id: m[1], name: m[2], authority: m[3] });
  }
  return items;
}

const SIGNATURE_PRESETS = getPresets('EXAM_PRESETS');
const PHOTO_PRESETS = getPresets('PHOTO_PRESETS');
const DOCUMENT_PRESETS = getPresets('DOCUMENT_PRESETS');

const pageMatches = [...pagesCode.matchAll(/slug:\s*['"]([^'"]+)['"],\s*presetId:\s*['"]([^'"]+)['"]/g)];

console.log(`Checking ${pageMatches.length} pages...`);

// Extract switchTargetType logic as a pure function
function simulateSwitch(initialPresetId, newType) {
  const presets = newType === 'photo' ? PHOTO_PRESETS : newType === 'document' ? DOCUMENT_PRESETS : SIGNATURE_PRESETS;
  const initial = [...SIGNATURE_PRESETS, ...PHOTO_PRESETS, ...DOCUMENT_PRESETS].find(p => p.id === initialPresetId);
  const rawCurId = (initial?.id || '').toLowerCase();
  const examAnchor = rawCurId;
  const curName = (initial?.name || '').toLowerCase();
  const curAuth = (initial?.authority || '').toLowerCase();

  const matchesExam = (...tokens) => {
    return tokens.some(token => {
      const t = token.toLowerCase();
      return examAnchor.includes(t) || rawCurId.includes(t) || curName.includes(t) || curAuth.includes(t);
    });
  };

  let targetPreset;

  const isGate = examAnchor.includes('gate') || rawCurId.includes('gate') || curName.includes('gate') || curAuth.includes('gate');
  const isJam = !isGate && (
    examAnchor.includes('iit-jam') ||
    examAnchor.startsWith('jam') ||
    rawCurId.includes('iit-jam') ||
    curName.includes('jam') ||
    curAuth.includes('jam') ||
    curAuth.includes('kharagpur')
  );

  if (isJam) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'iit-jam' || p.id === 'iit-jam-2026');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'iit-jam-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate' || p.id === 'degree-certificate');
  } else if (isGate) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'gate-jam');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'gate-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate' || p.id === 'caste-certificate');
  } else if (matchesExam('coast-guard', 'coast guard')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'indian-coast-guard');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'indian-coast-guard-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'indian-coast-guard-thumb-doc' || p.id === 'indian-coast-guard-document');
  } else if (matchesExam('nicl')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'nicl-ao' || p.id === 'ibps-sbi');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'nicl-ao-photo' || p.id === 'ibps-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'handwritten-declaration' || p.id === 'nicl-left-thumb');
  } else if (matchesExam('ibps', 'sbi', 'banking personnel')) {
    if (newType === 'signature') {
      if (examAnchor.includes('po')) targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-po' || p.id === 'ibps-sbi');
      else if (examAnchor.includes('clerk')) targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-clerk' || p.id === 'ibps-clerk');
      else targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-signature' || p.id === 'ibps-sbi');
    } else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'ibps-photo' || p.id === 'ibps-sbi-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'handwritten-declaration' || p.id === 'thumb-impression-doc');
  } else if (matchesExam('upsc', 'union public service')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'upsc-civil-services');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'upsc-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card' || p.id === 'degree-certificate');
  } else if (matchesExam('ssc', 'staff selection')) {
    if (newType === 'signature') targetPreset = (examAnchor.startsWith('ssc') ? SIGNATURE_PRESETS.find(p => p.id === examAnchor) : undefined) || SIGNATURE_PRESETS.find(p => p.id === 'ssc-cgl' || p.id === 'ssc-general');
    else if (newType === 'photo') targetPreset = (examAnchor.includes('photo') && examAnchor.startsWith('ssc') ? PHOTO_PRESETS.find(p => p.id === examAnchor) : undefined) || PHOTO_PRESETS.find(p => p.id === 'ssc-cgl-photo' || p.id === 'ssc-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'thumb-impression-doc');
  } else if (matchesExam('rrb', 'railway recruitment', 'railway')) {
    if (newType === 'signature') targetPreset = (examAnchor.includes('alp') ? SIGNATURE_PRESETS.find(p => p.id === 'rrb-alp-technician') : undefined) || SIGNATURE_PRESETS.find(p => p.id === 'rrb-railway');
    else if (newType === 'photo') targetPreset = (examAnchor.includes('group-d') ? PHOTO_PRESETS.find(p => p.id === 'rrb-group-d-photo') : undefined) || PHOTO_PRESETS.find(p => p.id === 'rrb-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate' || p.id === 'thumb-impression-doc');
  } else if (matchesExam('afcat', 'agniveer', 'capf', 'air force')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === examAnchor) || SIGNATURE_PRESETS.find(p => p.id === 'afcat-iaf' || p.id === 'agniveer-recruitment');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'defence-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc' || p.id === 'marksheet-10th');
  } else if (matchesExam('neet', 'jee', 'nta', 'cuet')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'nta-neet-jee');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'neet-photo' || p.id === 'neet-ug-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc' || p.id === 'caste-certificate');
  } else if (matchesExam('pan-card', 'pan card', 'utiitsl', 'nsdl')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'pan-card-nsdl');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'pan-card-photo-nsdl' || p.id === 'pan-card-photo-nsdl-preset');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card');
  } else if (matchesExam('ctet', 'tet')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'ctet-signature' || p.id === 'ctet');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'ctet-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'degree-certificate');
  } else if (matchesExam('sarathi', 'parivahan', 'driving licence', 'learner licence', 'driving license')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sarathi-dl');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'sarathi-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card' || p.id === 'domicile-certificate');
  } else if (matchesExam('ib-acio', 'intelligence bureau', 'mha ib', 'acio')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'ib-acio');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'ib-acio-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate' || p.id === 'degree-certificate');
  } else if (matchesExam('india-post', 'indiapost', 'gds', 'gramin dak')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'india-post-gds-signature' || p.id.includes('gds'));
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'india-post-gds-photo' || p.id.includes('gds'));
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
  } else if (matchesExam('bssc')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'bssc-inter-level' || p.id.includes('bssc'));
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'bssc-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
  } else if (matchesExam('upsssc')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'upsssc-pet');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'upsssc-pet-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
  } else if (matchesExam('dsssb')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'dsssb-preset' || p.id.includes('dsssb'));
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'dsssb-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate' || p.id === 'marksheet-10th');
  } else if (matchesExam('kerala-psc', 'kerala psc', 'thulasi')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'kerala-psc-signature');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'kerala-psc-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'caste-certificate');
  } else if (examAnchor) {
    const baseKey = examAnchor.replace(/-photo|-sign|-signature|-thumb|-doc|-general|-recruitment|-preset|-dl/g, '');
    targetPreset = presets.find(p => p.id.includes(baseKey) || baseKey.includes(p.id.replace(/-photo|-sign|-signature|-thumb|-doc|-general|-recruitment|-preset|-dl/g, ''))) ||
      (curAuth ? presets.find(p => p.authority && p.authority.toLowerCase() === curAuth) : undefined);
  }

  const defaultPreset = targetPreset || presets.find(p => p.id === examAnchor) || presets.find(p => p.isPopular) || presets[0];
  return defaultPreset?.id;
}

// Test every single exam page
const results = [];
for (const [_, slug, presetId] of pageMatches) {
  const isPhotoPage = slug.includes('photo');
  const otherMode = isPhotoPage ? 'signature' : 'photo';
  const switchedId = simulateSwitch(presetId, otherMode);
  
  // Did it fall back to ssc-cgl or ssc-cgl-photo when the page was NOT ssc?
  const isSscFallback = !presetId.includes('ssc') && (switchedId === 'ssc-cgl' || switchedId === 'ssc-cgl-photo' || switchedId === 'ssc-general');
  results.push({ slug, presetId, otherMode, switchedId, isSscFallback });
}

const badSwitches = results.filter(r => r.isSscFallback);
console.log(`\nFound ${badSwitches.length} pages that fall back to SSC generic preset when switching modes!`);
console.table(badSwitches);
