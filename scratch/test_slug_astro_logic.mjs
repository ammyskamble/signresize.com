import fs from 'fs';

const blogContent = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const examPagesContent = fs.readFileSync('src/data/examPagesData.ts', 'utf8');

// Read actual objects using regex split
const posts = [];
const blocks = blogContent.split(/slug:\s*["']/);

for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const slug = block.substring(0, block.indexOf('"'));
  const countryM = block.match(/country:\s*["']([^"']+)["']/);
  const presetM = block.match(/relatedExamPreset:\s*["']([^"']+)["']/);

  posts.push({
    slug,
    country: countryM ? countryM[1] : 'IN',
    relatedExamPreset: presetM ? presetM[1] : null
  });
}

// Read exam pages
const examPages = [];
const eBlocks = examPagesContent.split(/slug:\s*["']/);
for (let i = 1; i < eBlocks.length; i++) {
  const block = eBlocks[i];
  const slug = block.substring(0, block.indexOf("'"));
  const presetM = block.match(/presetId:\s*["']([^"']+)["']/);
  examPages.push({
    slug,
    presetId: presetM ? presetM[1] : null
  });
}

console.log(`Testing new logic on ALL ${posts.length} posts...`);

posts.forEach(post => {
  const focusedPreset = /sbi/i.test(post.slug) ? 'sbi-signature' : /iit-jam/i.test(post.slug) ? 'iit-jam' : post.relatedExamPreset;

  let relatedExamSlug = 'ssc-signature-resize';
  if (post.country === 'BD') {
    relatedExamSlug = 'teletalk-photo-signature-resize';
  } else if (post.country === 'PK') {
    relatedExamSlug = 'ppsc-signature-resize';
  } else if (post.country === 'PH') {
    relatedExamSlug = 'prc-photo-signature-resize-philippines';
  } else if (post.country === 'NP') {
    relatedExamSlug = 'lok-sewa-photo-resize-nepal';
  } else if (focusedPreset) {
    const matchedPage = examPages.find(p => p.presetId === focusedPreset || p.slug === focusedPreset);
    if (matchedPage) {
      relatedExamSlug = matchedPage.slug;
    }
  }

  if (post.country !== 'IN') {
    console.log(`\n========================================`);
    console.log(`POST: [${post.slug}]`);
    console.log(`Country: [${post.country}]`);
    console.log(`relatedExamPreset: ${post.relatedExamPreset}`);
    console.log(`Resolved Tool Slug: /${relatedExamSlug}/`);
  }
});
