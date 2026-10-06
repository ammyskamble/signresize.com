import fs from 'fs';

const lines = fs.readFileSync('src/data/blogPostsData.ts', 'utf8').split('\n');

const lineNumbers = [45, 536, 1061, 1390, 9524, 10120];

lineNumbers.forEach(ln => {
  // Grab lines from ln - 40 to ln + 200
  const start = Math.max(0, ln - 40);
  const end = Math.min(lines.length, ln + 400);
  const snippet = lines.slice(start, end).join('\n');
  
  const idM = snippet.match(/id:\s*["']([^"']+)["']/);
  const slugM = snippet.match(/slug:\s*["']([^"']+)["']/);
  const countryM = snippet.match(/country:\s*["']([^"']+)["']/);
  const presetM = snippet.match(/relatedExamPreset:\s*["']([^"']+)["']/);
  
  const hrefs = [...snippet.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);

  console.log(`========================================`);
  console.log(`Line: ${ln}`);
  console.log(`ID: ${idM ? idM[1] : 'N/A'}`);
  console.log(`Slug: ${slugM ? slugM[1] : 'N/A'}`);
  console.log(`Country: ${countryM ? countryM[1] : 'N/A'}`);
  console.log(`Related Preset: ${presetM ? presetM[1] : 'N/A'}`);
  console.log(`Hrefs found in post snippet:`);
  hrefs.forEach(h => console.log(`  -> ${h}`));
});
