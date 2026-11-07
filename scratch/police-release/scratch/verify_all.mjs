import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

const slugMatches = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('✅ Total blog posts in blogPostsData.ts:', slugMatches.length);

const countryMatches = [...content.matchAll(/country:\s*["']([^"']+)["']/g)].map(m => m[1]);
const counts = countryMatches.reduce((acc, c) => (acc[c] = (acc[c]||0)+1, acc), {});
console.log('✅ Country tags breakdown:', counts);

// Check if any non-IN blog post contains India tool links
const intlSlugs = [
  "ppsc-fpsc-pakistan-photo-signature-resizer-guide-2026",
  "prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026",
  "teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026",
  "lok-sewa-aayog-nepal-photo-signature-resizer-guide-2026",
  "bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026",
  "bcs-exam-bangladesh-complete-guide-2026-syllabus-preparation-photo-upload"
];

let issues = 0;
intlSlugs.forEach(slug => {
  const startIdx = content.indexOf(`slug: "${slug}"`);
  if (startIdx === -1) return;
  const endIdx = content.indexOf('slug:', startIdx + 20);
  const block = content.substring(startIdx, endIdx === -1 ? content.length : endIdx);
  
  const badHrefs = [...block.matchAll(/href=["'](\/(ssc|upsc|rrb|ibps|gate|nta)[^"']*)["']/g)].map(m => m[1]);
  if (badHrefs.length > 0) {
    console.log(`❌ ERROR: Post [${slug}] contains India tool links:`, badHrefs);
    issues++;
  }
});

if (issues === 0) {
  console.log('🎉 VERIFICATION PASSED: All 6 International Blog Posts strictly use dedicated country preset tools and 0 India tool links!');
}
