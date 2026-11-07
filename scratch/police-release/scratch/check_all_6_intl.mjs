import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

const slugs = [
  "ppsc-fpsc-pakistan-photo-signature-resizer-guide-2026",
  "prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026",
  "teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026",
  "lok-sewa-aayog-nepal-photo-signature-resizer-guide-2026",
  "bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026",
  "bcs-exam-bangladesh-complete-guide-2026-syllabus-preparation-photo-upload"
];

slugs.forEach(slug => {
  const startIdx = content.indexOf(`slug: "${slug}"`);
  if (startIdx === -1) {
    console.log('NOT FOUND:', slug);
    return;
  }
  
  // Find next slug or end
  let endIdx = content.length;
  for (const s of slugs) {
    if (s !== slug) {
      const idx = content.indexOf(`slug: "${s}"`, startIdx + 10);
      if (idx !== -1 && idx < endIdx) endIdx = idx;
    }
  }

  const postBlock = content.substring(startIdx, endIdx);
  const hrefs = [...postBlock.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
  const presetM = postBlock.match(/relatedExamPreset:\s*["']([^"']+)["']/);

  console.log(`==================================================`);
  console.log(`SLUG: ${slug}`);
  console.log(`Related Preset: ${presetM ? presetM[1] : 'NONE'}`);
  console.log(`Internal Hrefs:`);
  hrefs.filter(h => h.startsWith('/')).forEach(h => console.log(`   -> ${h}`));
});
