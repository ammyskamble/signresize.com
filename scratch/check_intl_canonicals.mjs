import fs from 'fs';

const pagesToCheck = [
  'dist/ph/prc-photo-signature-resize-philippines/index.html',
  'dist/pk/ppsc-signature-resize/index.html',
  'dist/pk/fpsc-photo-resizer/index.html'
];

for (const p of pagesToCheck) {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    console.log(p, '-> canonical:', canonical);
  } else {
    console.log(p, 'does not exist');
  }
}
