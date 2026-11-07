import fs from 'fs';
const lines = fs.readFileSync('./src/data/examPagesData.ts', 'utf8').split('\n');
const targets = [
  'cuet-signature-resize', 'upsssc-pet-signature-resize', 'bssc-signature-resize',
  'dsssb-signature-resize', 'kerala-psc-photo-resize', 'ctet-signature-resize', 'rrb-signature-resize'
];
lines.forEach((l, i) => {
  targets.forEach(t => {
    if (l.includes("slug: '" + t + "'")) console.log(t, 'at line', i + 1);
  });
});
