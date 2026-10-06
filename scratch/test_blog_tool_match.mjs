import fs from 'fs';

const blogContent = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const examPagesContent = fs.readFileSync('src/data/examPagesData.ts', 'utf8');

// Parse blog posts
const posts = [];
const lines = blogContent.split('\n');
lines.forEach((line, i) => {
  const match = line.match(/slug:\s*["']([^"']+)["']/);
  if (match) {
    const slug = match[1];
    const slice = lines.slice(i, i + 20).join('\n');
    const countryM = slice.match(/country:\s*["']([^"']+)["']/);
    const presetM = slice.match(/relatedExamPreset:\s*["']([^"']+)["']/);
    posts.push({
      slug,
      country: countryM ? countryM[1] : 'IN',
      relatedExamPreset: presetM ? presetM[1] : null
    });
  }
});

// Parse EXAM_PAGES_DATA
const examPages = [];
const eLines = examPagesContent.split('\n');
eLines.forEach((line, i) => {
  const match = line.match(/slug:\s*["']([^"']+)["']/);
  if (match) {
    const slug = match[1];
    const slice = eLines.slice(i, i + 10).join('\n');
    const presetM = slice.match(/presetId:\s*["']([^"']+)["']/);
    examPages.push({
      slug,
      presetId: presetM ? presetM[1] : null
    });
  }
});

console.log('Total Exam Pages parsed:', examPages.length);

posts.forEach(post => {
  const focusedPreset = /sbi/i.test(post.slug) ? 'sbi-signature' : /iit-jam/i.test(post.slug) ? 'iit-jam' : post.relatedExamPreset;
  const relatedExamPage = focusedPreset
    ? examPages.find(p => p.presetId === focusedPreset || p.slug === focusedPreset)
    : null;
  
  const relatedExamSlug = relatedExamPage ? relatedExamPage.slug : 'ssc-signature-resize';

  if (post.country !== 'IN') {
    console.log(`\n----------------------------------------`);
    console.log(`Post: [${post.slug}] (Country: ${post.country})`);
    console.log(`relatedExamPreset: ${post.relatedExamPreset}`);
    console.log(`focusedPreset: ${focusedPreset}`);
    console.log(`Matched Exam Page Slug: ${relatedExamPage ? relatedExamPage.slug : 'NONE (FALLBACK TO ssc-signature-resize)'}`);
    console.log(`Final relatedExamSlug: ${relatedExamSlug}`);
    if (relatedExamSlug === 'ssc-signature-resize') {
      console.log(`🚨 DANGER: Country ${post.country} post falls back to SSC INDIA tool!`);
    }
  }
});
