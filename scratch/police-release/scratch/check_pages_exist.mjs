import fs from 'fs';

const pages = fs.readFileSync('src/data/examPagesData.ts', 'utf8');
const slugs = [...pages.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);

const checkSlugs = [
  'india-post-gds-signature-resize',
  'india-post-gds-photo-resize',
  'ssc-cgl-signature-resize',
  'ssc-photo-resize',
  'ssc-mts-signature-resize',
  'pan-card-signature-resize',
  'pan-card-photo-resize',
  'sarathi-dl-signature-resize',
  'sarathi-dl-photo-resize',
  'ib-acio-signature-resize',
  'ib-acio-photo-resize',
  'bssc-signature-resize',
  'bssc-photo-resize',
  'upsssc-pet-signature-resize',
  'upsssc-pet-photo-resize',
  'cuet-signature-resize',
  'cuet-photo-resize',
  'dsssb-signature-resize',
  'dsssb-photo-resize',
  'kerala-psc-signature-resize',
  'kerala-psc-photo-resize',
  'rrb-signature-resize',
  'rrb-photo-resize',
  'iit-jam-signature-resize',
  'iit-jam-photo-resize',
  'gate-signature-resize',
  'gate-photo-resize',
  'upsc-signature-resize',
  'upsc-photo-resize'
];

for (const slug of checkSlugs) {
  console.log(slug.padEnd(35), '=>', slugs.includes(slug) ? 'EXISTS ✅' : 'NOT FOUND ❌');
}
