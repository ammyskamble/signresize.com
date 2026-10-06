import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');
const lines = content.split('\n');

const postStarts = [];
lines.forEach((line, i) => {
  const match = line.match(/slug:\s*["']([^"']+)["']/);
  if (match) {
    postStarts.push({ lineNum: i + 1, slug: match[1] });
  }
});

console.log(`Total posts found by 'slug:': ${postStarts.length}\n`);

postStarts.forEach((p, idx) => {
  const startLine = p.lineNum - 2; // object opens around slug - 1
  const nextP = postStarts[idx + 1];
  const endLine = nextP ? nextP.lineNum - 3 : lines.length;

  const postLines = lines.slice(startLine, endLine);
  const postText = postLines.join('\n');

  const countryM = postText.match(/country:\s*["']([^"']+)["']/);
  const country = countryM ? countryM[1] : 'IN';
  
  const presetM = postText.match(/relatedExamPreset:\s*["']([^"']+)["']/);
  const preset = presetM ? presetM[1] : 'NONE';

  const hrefs = [...postText.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
  const toolHrefs = hrefs.filter(h => h.startsWith('/') && !h.startsWith('/#'));

  console.log(`========================================`);
  console.log(`Post #${idx + 1} | Lines ${startLine+1} - ${endLine+1}`);
  console.log(`Slug: ${p.slug}`);
  console.log(`Country: [${country}]`);
  console.log(`relatedExamPreset: ${preset}`);
  console.log(`Tool Hrefs (${toolHrefs.length}):`);
  toolHrefs.forEach(h => console.log(`   -> ${h}`));
});
