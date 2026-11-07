import fs from 'fs';

const raw = fs.readFileSync('public/_redirects', 'utf8');
const lines = raw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

const staticRules = [];
const dynamicRules = [];

for (const line of lines) {
  if (line.startsWith('#')) {
    continue; // We will generate clean section headers
  }
  const parts = line.split(/\s+/);
  if (parts.length < 2) continue;
  
  if (line.includes('*') || line.includes(':')) {
    dynamicRules.push(line);
  } else {
    staticRules.push(line);
  }
}

// Deduplicate static rules while preserving order
const seen = new Set();
const dedupedStatic = [];
for (const r of staticRules) {
  const [src] = r.split(/\s+/);
  if (!seen.has(src)) {
    seen.add(src);
    dedupedStatic.push(r);
  }
}

const dedupedDynamic = [];
for (const r of dynamicRules) {
  const [src] = r.split(/\s+/);
  if (!seen.has(src)) {
    seen.add(src);
    dedupedDynamic.push(r);
  }
}

console.log('Deduped static rules:', dedupedStatic.length);
console.log('Deduped dynamic rules:', dedupedDynamic.length);

const output = [
  '# SignResize.in Cloudflare Pages Edge Redirects',
  '# All static rules must precede dynamic rules per Cloudflare Pages specification.',
  '',
  '# --- 1. Static Redirects (Clean exact 1-to-1 mappings) ---',
  ...dedupedStatic,
  '',
  '# --- 2. Dynamic Fallback Redirects (Splats / Wildcards) ---',
  ...dedupedDynamic,
  ''
].join('\n');

fs.writeFileSync('public/_redirects', output, 'utf8');
console.log('Successfully formatted and organized public/_redirects');
