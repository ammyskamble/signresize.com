import fs from 'fs';
import path from 'path';

const distDir = 'dist';

console.log('=== VERIFYING MAIN CONTENT AREA ISOLATION IN DIST HTML ===');

const countries = [
  { code: 'pk', expectedPreset: 'ppsc-pk', expectedFaqText: 'PPSC', forbiddenExams: ['SSC (CGL', 'IBPS (PO', 'UPSC (Civil', 'CAT (IIMs)'] },
  { code: 'ph', expectedPreset: 'prc-ph', expectedFaqText: 'PRC LERIS', forbiddenExams: ['SSC (CGL', 'IBPS (PO', 'UPSC (Civil', 'CAT (IIMs)'] },
  { code: 'bd', expectedPreset: 'teletalk-bd', expectedFaqText: 'Teletalk Bangladesh', forbiddenExams: ['SSC (CGL', 'IBPS (PO', 'UPSC (Civil', 'CAT (IIMs)'] },
  { code: 'np', expectedPreset: 'loksewa-np', expectedFaqText: 'Lok Sewa Aayog', forbiddenExams: ['SSC (CGL', 'IBPS (PO', 'UPSC (Civil', 'CAT (IIMs)'] }
];

let allPassed = true;

for (const country of countries) {
  const filePath = path.join(distDir, country.code, 'index.html');
  const html = fs.readFileSync(filePath, 'utf-8');

  // Extract <main> ... </main>
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  if (!mainMatch) {
    console.error(`❌ Could not find <main> in ${filePath}`);
    allPassed = false;
    continue;
  }

  const mainHtml = mainMatch[0];

  console.log(`\n--- [/${country.code}/ MAIN BODY CHECK] ---`);

  // Check expected local presets
  const hasLocalPreset = mainHtml.includes(country.expectedPreset);
  console.log(`${hasLocalPreset ? '✓' : '❌'} Local Preset (${country.expectedPreset}): ${hasLocalPreset}`);

  // Check expected local FAQs
  const hasLocalFaq = mainHtml.includes(country.expectedFaqText);
  console.log(`${hasLocalFaq ? '✓' : '❌'} Local FAQ (${country.expectedFaqText}): ${hasLocalFaq}`);

  // Check forbidden Indian exams in main body
  let leakedExams = [];
  for (const exam of country.forbiddenExams) {
    if (mainHtml.includes(exam)) {
      leakedExams.push(exam);
    }
  }

  if (leakedExams.length === 0) {
    console.log(`✓ 100% Main Content Isolation Verified (Zero foreign exams in main content)`);
  } else {
    console.error(`❌ Leaked foreign exams in main content: ${leakedExams.join(', ')}`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n🎉 ALL Dedicated Country Hub Main Content Areas are 100% Isolated!');
} else {
  console.error('\n❌ Main body isolation failed!');
  process.exit(1);
}
