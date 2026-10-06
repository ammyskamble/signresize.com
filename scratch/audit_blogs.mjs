import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

// Match each post entry
const posts = [];
const postBlocks = content.split(/{\s*id:\s*["']/);

for (let i = 1; i < postBlocks.length; i++) {
  const block = postBlocks[i];
  const idM = block.match(/^([^"']+)/);
  const slugM = block.match(/slug:\s*["']([^"']+)["']/);
  const titleM = block.match(/title:\s*["']([^"']+)["']/);
  const countryM = block.match(/country:\s*["']([^"']+)["']/);
  const presetM = block.match(/relatedExamPreset:\s*["']([^"']+)["']/);
  
  const hrefs = [...block.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);

  if (slugM) {
    posts.push({
      id: idM ? idM[1] : '',
      slug: slugM[1],
      title: titleM ? titleM[1] : '',
      country: countryM ? countryM[1] : 'IN',
      preset: presetM ? presetM[1] : '',
      hrefs
    });
  }
}

console.log(`Parsed ${posts.length} blog posts total.`);

const nonIndia = posts.filter(p => p.country !== 'IN');
console.log(`Non-India posts count: ${nonIndia.length}\n`);

nonIndia.forEach(p => {
  console.log(`========================================`);
  console.log(`ID: ${p.id}`);
  console.log(`Slug: ${p.slug}`);
  console.log(`Country: [${p.country}]`);
  console.log(`Title: ${p.title}`);
  console.log(`relatedExamPreset: ${p.preset}`);
  console.log(`Internal Tool Hrefs:`);
  p.hrefs.filter(h => h.startsWith('/')).forEach(h => console.log(`   -> ${h}`));
});
