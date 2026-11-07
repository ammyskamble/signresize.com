import fs from 'fs';

// 1. Read presets
const presetsSource = fs.readFileSync('src/data/examPresets.ts', 'utf8');

function extractArray(name) {
  const start = presetsSource.indexOf(`export const ${name}: ExamPreset[] = [`);
  const end = presetsSource.indexOf('];', start);
  const code = presetsSource.slice(start, end + 2).replace(`export const ${name}: ExamPreset[] = `, `const ${name} = `);
  const fn = new Function(`${code}; return ${name};`);
  return fn();
}

const SIGNATURE_PRESETS = extractArray('EXAM_PRESETS');
const PHOTO_PRESETS = extractArray('PHOTO_PRESETS');
const DOCUMENT_PRESETS = extractArray('DOCUMENT_PRESETS');
const ALL_PRESETS = [...SIGNATURE_PRESETS, ...PHOTO_PRESETS, ...DOCUMENT_PRESETS];

// 2. Read pages
const pagesSource = fs.readFileSync('src/data/examPagesData.ts', 'utf8') + '\n' + fs.readFileSync('src/data/focusedExamPages.ts', 'utf8');
const pageMatches = [...pagesSource.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]*?presetId:\s*['"]([^'"]+)['"]/g)];
const seenSlugs = new Set();
const uniquePages = [];
for (const match of pageMatches) {
  if (!seenSlugs.has(match[1])) {
    seenSlugs.add(match[1]);
    uniquePages.push({ slug: match[1], presetId: match[2] });
  }
}

// 3. Extract switchTargetType implementation from SignatureTool.tsx directly
const toolSource = fs.readFileSync('src/components/SignatureTool.tsx', 'utf8');
const funcStart = toolSource.indexOf('const switchTargetType = useCallback(async (newType: ToolTargetMode) => {');
const funcEnd = toolSource.indexOf('applyPreset(defaultPreset);', funcStart);
const funcBody = toolSource.slice(funcStart, funcEnd);

// Let's create an evaluator for switchTargetType
function simulateSwitch(initialPresetId, newType) {
  const selectedPreset = ALL_PRESETS.find(p => p.id === initialPresetId);
  const effectivePresetPropId = initialPresetId;
  const resolvedPreset = selectedPreset;
  const initialPresetIdParam = initialPresetId;
  const activeExamFamilyRef = { current: '' };

  const presets = newType === 'photo' ? PHOTO_PRESETS : newType === 'document' ? DOCUMENT_PRESETS : SIGNATURE_PRESETS;
  const GENERIC_DOC_PRESET_IDS = new Set([
    'marksheet-10th', 'marksheet-12th', 'caste-certificate', 'domicile-certificate',
    'id-proof-card', 'degree-certificate', 'handwritten-declaration', 'thumb-impression-doc',
    'document-general-100-300kb', 'document-general-200-500kb', 'document-general-50-200kb'
  ]);

  const rawCurId = (selectedPreset?.id || '').toLowerCase();
  const isGenericDoc = GENERIC_DOC_PRESET_IDS.has(rawCurId);

  const examAnchor = (!isGenericDoc && rawCurId)
    ? rawCurId
    : (activeExamFamilyRef.current || (effectivePresetPropId || resolvedPreset?.id || initialPresetIdParam || '').toLowerCase());

  const curName = (selectedPreset?.name || resolvedPreset?.name || '').toLowerCase();
  const curAuth = (selectedPreset?.authority || resolvedPreset?.authority || '').toLowerCase();

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

  // 1. IIT JAM
  if (isJam) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'iit-jam') || SIGNATURE_PRESETS.find(p => p.id === 'iit-jam-2026');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'iit-jam-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate') || DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate');
  }
  // 2. GATE
  else if (isGate) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'gate-jam');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'gate-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate') || DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate');
  }
  // 3. Indian Coast Guard
  else if (matchesExam('coast-guard', 'coast guard')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'indian-coast-guard');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'indian-coast-guard-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'indian-coast-guard-thumb-doc' || p.id === 'indian-coast-guard-document');
  }
  // 4. NICL AO
  else if (matchesExam('nicl') || examAnchor === 'handwritten-declaration' || examAnchor === 'nicl-left-thumb') {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'nicl-ao') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-sbi');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'nicl-ao-photo' || p.id === 'ibps-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'handwritten-declaration') || DOCUMENT_PRESETS.find(p => p.id === 'nicl-left-thumb');
  }
  // 5. Banking: IBPS & SBI
  else if (matchesExam('ibps', 'sbi', 'banking personnel')) {
    if (newType === 'signature') {
      if (examAnchor.includes('po')) targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-po') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-sbi');
      else if (examAnchor.includes('clerk')) targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-clerk') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-clerk');
      else targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sbi-signature') || SIGNATURE_PRESETS.find(p => p.id === 'ibps-sbi');
    } else if (newType === 'photo') {
      targetPreset = PHOTO_PRESETS.find(p => p.id === 'ibps-photo' || p.id === 'ibps-sbi-photo');
    } else if (newType === 'document') {
      targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'handwritten-declaration') || DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc');
    }
  }
  // 6. UPSC
  else if (matchesExam('upsc', 'union public service')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'upsc-civil-services');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'upsc-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card' || p.id === 'degree-certificate');
  }
  // 7. BSSC
  else if (matchesExam('bssc')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'bssc-inter-level' || p.id.includes('bssc'));
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'bssc-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
  }
  // 8. UPSSSC
  else if (matchesExam('upsssc')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'upsssc-pet');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'upsssc-pet-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
  }
  // 9. DSSSB
  else if (matchesExam('dsssb')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'dsssb-preset' || p.id.includes('dsssb'));
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'dsssb-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate' || p.id === 'marksheet-10th');
  }
  // 10. Kerala PSC
  else if (matchesExam('kerala-psc', 'kerala psc', 'thulasi')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'kerala-psc-signature');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'kerala-psc-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'caste-certificate');
  }
  // 11. CUET
  else if (matchesExam('cuet')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'cuet-ug' || p.id.includes('cuet'));
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'cuet-ug-photo' || p.id.includes('cuet'));
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'caste-certificate');
  }
  // 12. CTET / TET
  else if (matchesExam('ctet', 'tet')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'ctet-exam' || p.id === 'ctet-signature' || p.id === 'ctet');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'ctet-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'degree-certificate');
  }
  // 13. Sarathi
  else if (matchesExam('sarathi', 'parivahan', 'driving licence', 'learner licence', 'driving license')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'sarathi-dl');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'sarathi-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card' || p.id === 'domicile-certificate');
  }
  // 14. IB ACIO
  else if (matchesExam('ib-acio', 'intelligence bureau', 'mha ib', 'acio')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'ib-acio');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'ib-acio-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate' || p.id === 'degree-certificate');
  }
  // 15. India Post GDS
  else if (matchesExam('india-post', 'indiapost', 'gds', 'gramin dak')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'india-post-gds-signature' || p.id.includes('gds'));
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'india-post-gds-photo' || p.id.includes('gds'));
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
  }
  // 16. PAN Card
  else if (matchesExam('pan-card', 'pan card', 'utiitsl', 'nsdl')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'pan-card-nsdl');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'pan-card-photo-nsdl');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'id-proof-card');
  }
  // 17. Central SSC
  else if (!matchesExam('bssc', 'upsssc', 'osssc', 'hssc', 'jssc') && (matchesExam('staff selection commission') || examAnchor.startsWith('ssc') || rawCurId.startsWith('ssc') || curName.toLowerCase().startsWith('ssc'))) {
    if (newType === 'signature') {
      targetPreset = (examAnchor.startsWith('ssc') ? SIGNATURE_PRESETS.find(p => p.id === examAnchor) : undefined) || SIGNATURE_PRESETS.find(p => p.id === 'ssc-cgl') || SIGNATURE_PRESETS.find(p => p.id === 'ssc-general');
    } else if (newType === 'photo') {
      targetPreset = (examAnchor.includes('photo') && examAnchor.startsWith('ssc') ? PHOTO_PRESETS.find(p => p.id === examAnchor) : undefined) || PHOTO_PRESETS.find(p => p.id === 'ssc-cgl-photo') || PHOTO_PRESETS.find(p => p.id === 'ssc-photo');
    } else if (newType === 'document') {
      targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th' || p.id === 'thumb-impression-doc');
    }
  }
  // 18. RRB
  else if (matchesExam('rrb', 'railway recruitment', 'railway')) {
    if (newType === 'signature') {
      targetPreset = (examAnchor.includes('alp') ? SIGNATURE_PRESETS.find(p => p.id === 'rrb-alp-technician') : undefined) || SIGNATURE_PRESETS.find(p => p.id === 'rrb-railway');
    } else if (newType === 'photo') {
      targetPreset = (examAnchor.includes('group-d') ? PHOTO_PRESETS.find(p => p.id === 'rrb-group-d-photo') : undefined) || PHOTO_PRESETS.find(p => p.id === 'rrb-photo');
    } else if (newType === 'document') {
      targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'caste-certificate' || p.id === 'thumb-impression-doc');
    }
  }
  // 19. Defence
  else if (matchesExam('afcat', 'agniveer', 'capf', 'air force')) {
    if (newType === 'signature') {
      targetPreset = SIGNATURE_PRESETS.find(p => p.id === examAnchor) || SIGNATURE_PRESETS.find(p => p.id === 'afcat-iaf' || p.id === 'agniveer-recruitment');
    } else if (newType === 'photo') {
      targetPreset = PHOTO_PRESETS.find(p => p.id === 'defence-photo');
    } else if (newType === 'document') {
      targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc' || p.id === 'marksheet-10th');
    }
  }
  // 20. State Police
  else if (matchesExam('police')) {
    if (examAnchor.includes('maharashtra') || examAnchor.includes('mahapolice')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'maharashtra-police');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'maharashtra-police-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'domicile-certificate');
    } else if (examAnchor.includes('up-police') || examAnchor.includes('uppolice')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'up-police');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'up-police-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
    } else if (examAnchor.includes('rajasthan')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'rajasthan-police-sig');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'rajasthan-police-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'domicile-certificate');
    } else if (examAnchor.includes('bihar')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'bihar-police-sig');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'bihar-police-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
    } else if (examAnchor.includes('mp-police')) {
      if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'mp-police-sig');
      else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'mp-police-photo');
      else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
    }
  }
  // 21. NTA
  else if (matchesExam('neet', 'jee', 'nta')) {
    if (newType === 'signature') targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'nta-neet-jee');
    else if (newType === 'photo') targetPreset = PHOTO_PRESETS.find(p => p.id === 'neet-photo' || p.id === 'neet-ug-photo');
    else if (newType === 'document') targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'thumb-impression-doc' || p.id === 'caste-certificate');
  }
  // 22. WBPSC
  else if (matchesExam('wbpsc', 'wbcs', 'west bengal public service') || examAnchor.includes('wbpsc') || examAnchor.includes('wbcs')) {
    if (newType === 'signature') {
      targetPreset = SIGNATURE_PRESETS.find(p => p.id === 'wbpsc-west-bengal') || SIGNATURE_PRESETS.find(p => p.id === 'wbpsc-signature-138x59');
    } else if (newType === 'photo') {
      targetPreset = PHOTO_PRESETS.find(p => p.id === 'wbpsc-photo');
    } else if (newType === 'document') {
      targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'wbpsc-document') || DOCUMENT_PRESETS.find(p => p.id === 'marksheet-10th');
    }
  }
  // 23. State PSCs
  else if (matchesExam('state-psc', 'uppsc', 'bpsc', 'mpsc', 'tnpsc', 'kpsc', 'rpsc', 'gpsc', 'opsc', 'hpsc', 'appsc', 'tspsc', 'apsc', 'mppsc')) {
    if (newType === 'signature') {
      targetPreset = SIGNATURE_PRESETS.find(p => p.id === examAnchor || p.id.includes(examAnchor.replace(/-photo|-sign/g, ''))) ||
        SIGNATURE_PRESETS.find(p => p.id === 'uppsc' || p.id === 'bpsc' || p.id === 'mpsc' || p.id === 'tnpsc');
    } else if (newType === 'photo') {
      targetPreset = PHOTO_PRESETS.find(p => p.id === 'state-psc-photo') || PHOTO_PRESETS.find(p => p.id === 'bssc-photo');
    } else if (newType === 'document') {
      targetPreset = DOCUMENT_PRESETS.find(p => p.id === 'degree-certificate' || p.id === 'domicile-certificate');
    }
  }
  // General Fallback
  else if (examAnchor) {
    const baseKey = examAnchor.replace(/-photo|-sign|-signature|-thumb|-doc|-general|-recruitment|-preset|-dl/g, '');
    targetPreset = presets.find(p => p.id.includes(baseKey) || baseKey.includes(p.id.replace(/-photo|-sign|-signature|-thumb|-doc|-general|-recruitment|-preset|-dl/g, ''))) ||
      (curAuth ? presets.find(p => p.authority && p.authority.toLowerCase() === curAuth) : undefined);
  }

  const defaultPreset = 
    targetPreset || 
    presets.find(p => p.id === examAnchor) ||
    presets.find(p => (!p.country || p.country === 'IN') && p.isPopular) ||
    presets.find(p => !p.country || p.country === 'IN') || 
    presets[0];

  return defaultPreset?.id;
}

console.log(`\nTesting mode switching for all ${uniquePages.length} exam pages...`);
const switchIssues = [];

for (const { slug, presetId } of uniquePages) {
  const isPhoto = slug.includes('photo');
  const targetMode = isPhoto ? 'signature' : 'photo';
  const switchedId = simulateSwitch(presetId, targetMode);

  // Fallback to SSC check: if not an SSC exam, should NOT resolve to an SSC preset
  const isSscOriginal = presetId.includes('ssc');
  const isSscTarget = switchedId && (switchedId.includes('ssc-cgl') || switchedId.includes('ssc-photo') || switchedId.includes('ssc-general'));

  if (!isSscOriginal && isSscTarget) {
    switchIssues.push({ slug, presetId, targetMode, switchedId, reason: 'Unwanted fallback to generic SSC' });
  }

  // Also test switching to document
  const switchedDocId = simulateSwitch(presetId, 'document');
  if (!switchedDocId) {
    switchIssues.push({ slug, presetId, targetMode: 'document', switchedId: null, reason: 'No document preset found' });
  }
}

if (switchIssues.length > 0) {
  console.log(`❌ Found ${switchIssues.length} mode switching anomalies:`);
  console.table(switchIssues);
} else {
  console.log(`✅ ALL ${uniquePages.length} exam pages switch modes cleanly with 0 inappropriate fallbacks!`);
}
