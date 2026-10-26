import fs from 'fs';

const lines = fs.readFileSync('public/_redirects', 'utf8')
  .split(/\r?\n/)
  .map(l => l.trim().split(/\s+/))
  .filter(([src, dst, code]) => src && dst && code === '301');

console.log('Total 301 rules in public/_redirects:', lines.length);

const targets = [...new Set(lines.map(([src, dst]) => dst))];
console.log('Unique targets:', targets.length);

async function testTargets() {
  const brokenTargets = [];
  for (const t of targets) {
    if (t.includes('*')) continue;
    const url = 'https://signresize.in' + t;
    try {
      const res = await fetch(url);
      if (res.status !== 200) {
        brokenTargets.push({ target: t, status: res.status });
      }
    } catch (err) {
      brokenTargets.push({ target: t, error: err.message });
    }
  }
  console.log('Broken targets found:', brokenTargets);
}

testTargets();
