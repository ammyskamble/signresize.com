import fs from 'fs';
import path from 'path';

const distDir = 'dist';

console.log('=== VERIFYING COUNTRY ISOLATION IN DIST HTML FILES ===');

const countries = [
  { code: 'pk', expectedPreset: 'ppsc-pk', expectedFaqText: 'PPSC', forbiddenText: 'SSC (CGL' },
  { code: 'ph', expectedPreset: 'prc-ph', expectedFaqText: 'PRC LERIS', forbiddenText: 'CAT (IIMs)' },
  { code: 'bd', expectedPreset: 'teletalk-bd', expectedFaqText: 'Teletalk Bangladesh', forbiddenText: 'IBPS (PO' },
  { code: 'np', expectedPreset: 'loksewa-np', expectedFaqText: 'Lok Sewa Aayog', forbiddenText: 'UPSC (Civil' }
];

let allPassed = true;

for (const country of countries) {
  const filePath = path.join(distDir, country.code, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing built page: ${filePath}`);
    allPassed = false;
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Check expected preset
  const hasPreset = html.includes(country.expectedPreset);
  // Check expected FAQ
  const hasFaq = html.includes(country.expectedFaqText);
  // Check forbidden text (Indian exams shouldn't be in the table)
  const hasForbidden = html.includes(country.forbiddenText);

  console.log(`\n--- [/${country.code}/] ---`);
  console.log(`✓ File exists: ${filePath}`);
  console.log(`${hasPreset ? '✓' : '❌'} Local Preset (${country.expectedPreset}): ${hasPreset}`);
  console.log(`${hasFaq ? '✓' : '❌'} Local FAQ (${country.expectedFaqText}): ${hasFaq}`);
  console.log(`${!hasForbidden ? '✓' : '❌'} No Indian exam leak (${country.forbiddenText}): ${!hasForbidden}`);

  if (!hasPreset || !hasFaq || hasForbidden) {
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n✅ ALL Dedicated Country Hub Pages 100% Isolated & Verified Clean!');
} else {
  console.error('\n❌ Isolation check failed!');
  process.exit(1);
}
