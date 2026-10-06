import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

const targetSlugs = [
  'ppsc-fpsc-pakistan-photo-signature-resizer-guide-2026',
  'prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026',
  'teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026',
  'lok-sewa-aayog-nepal-photo-signature-resizer-guide-2026',
  'bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026',
  'bcs-exam-bangladesh-complete-guide-2026-syllabus-preparation-photo-upload'
];

targetSlugs.forEach((slug, idx) => {
  const startStr = `slug: "${slug}"`;
  const idxStart = content.indexOf(startStr);
  if (idxStart === -1) {
    console.log(`Slug ${slug} not found!`);
    return;
  }
  
  // Find next post slug or end of BLOG_POSTS
  let nextIdx = content.length;
  for (const s of targetSlugs) {
    if (s !== slug) {
      const pos = content.indexOf(`slug: "${s}"`, idxStart + 20);
      if (pos !== -1 && pos < nextIdx) nextIdx = pos;
    }
  }

  // Also check if any other post starts before nextIdx
  const nextSlugMatch = content.substring(idxStart + 20).match(/slug:\s*["']([^"']+)["']/);
  if (nextSlugMatch) {
    const pos = content.indexOf(nextSlugMatch[0], idxStart + 20);
    if (pos !== -1 && pos < nextIdx) nextIdx = pos;
  }

  const postChunk = content.substring(idxStart, nextIdx);

  console.log(`\n======================================================`);
  console.log(`[POST ${idx + 1}] SLUG: ${slug}`);
  
  const presetM = postChunk.match(/relatedExamPreset:\s*["']([^"']+)["']/);
  console.log(`Preset: ${presetM ? presetM[1] : 'NONE'}`);

  const hrefs = [...postChunk.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`ALL HREFS (${hrefs.length}):`);
  hrefs.forEach(h => console.log(`   - ${h}`));
});
