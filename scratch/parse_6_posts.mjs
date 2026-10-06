import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

// Function to find exact post by slug or keyword
const targetSlugs = [
  'ppsc-fpsc-pakistan-photo-signature-resizer-guide-2026',
  'prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026',
  'teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026',
  'lok-sewa-aayog-nepal-photo-signature-resizer-guide-2026',
  'bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026',
  'bcs-exam-bangladesh-complete-guide-2026-syllabus-preparation-photo-upload'
];

targetSlugs.forEach(slug => {
  const slugIdx = content.indexOf(`slug: "${slug}"`) !== -1 
    ? content.indexOf(`slug: "${slug}"`)
    : content.indexOf(`slug: '${slug}'`);
    
  if (slugIdx === -1) {
    console.log(`NOT FOUND: ${slug}`);
    return;
  }

  // Find start of this post object (look back for { id:)
  const postStart = content.lastIndexOf('{', slugIdx);
  
  // Find end of this post object (look forward for next id: or end of array)
  let postEnd = content.indexOf('id:', slugIdx);
  if (postEnd === -1) postEnd = content.length;
  else postEnd = content.lastIndexOf('{', postEnd);

  const postText = content.substring(postStart, postEnd);

  console.log(`\n==================================================`);
  console.log(`SLUG: ${slug}`);
  
  // Extract all hrefs
  const hrefMatches = [...postText.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
  console.log(`ALL HREF ATTRIBUTES (${hrefMatches.length}):`);
  hrefMatches.forEach(h => console.log(`  - ${h}`));

  // Check relatedExamPreset
  const presetM = postText.match(/relatedExamPreset:\s*["']([^"']+)["']/);
  console.log(`relatedExamPreset: ${presetM ? presetM[1] : 'NONE'}`);

  // Search for any mentions of India exams like SSC, UPSC, RRB, IBPS in postText
  const indiaMentions = [...postText.matchAll(/\b(SSC|UPSC|RRB|IBPS|GATE|NEET|JEE|UPPSC|MPSC|BPSC Bihar|TNPSC|KPSC|WBPSC)\b/gi)].map(m => m[0]);
  if (indiaMentions.length > 0) {
    console.log(`⚠️ MENTIONS OF INDIA EXAMS FOUND IN BODY:`, [...new Set(indiaMentions)]);
  }
});
