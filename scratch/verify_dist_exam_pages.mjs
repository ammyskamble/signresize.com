import fs from 'fs';
import path from 'path';
import { EXAM_PAGES_DATA } from '../src/data/examPagesData.ts';

let passed = 0;
let errors = [];

for (const exam of EXAM_PAGES_DATA) {
  const filePath = path.join('dist', exam.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    errors.push('Missing dist file: ' + filePath);
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  const hasFAQ = content.includes('"@type":"FAQPage"');
  const hasHowTo = content.includes('"@type":"HowTo"');
  const hasCanonical = content.includes(`href="https://signresize.in/${exam.slug}/"`);
  
  if (!hasFAQ || !hasHowTo || !hasCanonical) {
    errors.push(`Issue in ${exam.slug}: FAQ=${hasFAQ}, HowTo=${hasHowTo}, Canonical=${hasCanonical}`);
  } else {
    passed++;
  }
}

console.log(`Passed checks: ${passed} / ${EXAM_PAGES_DATA.length}`);
if (errors.length) {
  console.log('Errors:', errors);
} else {
  console.log('ALL EXAM PAGES VALIDATED PERFECTLY WITH FULL SEO, CANONICAL, AND SCHEMA MARKUP!');
}
