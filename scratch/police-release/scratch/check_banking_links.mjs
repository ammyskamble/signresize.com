import fs from 'fs';

const content = fs.readFileSync('src/data/blogPostsData.ts', 'utf8');

const bankingSlugs = [
  'ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines',
  'ibps-po-2026-top-10-faq-banking-aspirants',
  'sbi-clerk-2026-top-10-faq-junior-associates',
  'ibps-rrb-po-prelims-mains-preparation-strategy-interview-guide'
];

for (const slug of bankingSlugs) {
  const match = content.match(new RegExp(`"?slug"?:\\s*"${slug}"[\\s\\S]*?(?="?slug"?:|$)`));
  if (!match) {
    console.log('Not found:', slug);
    continue;
  }
  const block = match[0];
  const links = block.match(/href=\\?[\"'][^\"'\\]+\\?[\"']/g) || [];
  console.log(`\n=== ${slug} ===`);
  console.log('Links count:', links.length);
  console.log([...new Set(links)]);
}
