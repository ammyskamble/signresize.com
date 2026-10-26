import fs from 'fs';

// 1. Fix public/_redirects
let redirects = fs.readFileSync('public/_redirects', 'utf8');

// Replace broken targets in public/_redirects
redirects = redirects
  .replace(/\/hi\/blog\/state-psc-otr-registration-photo-signature-guidelines\//g, '/blog/state-psc-otr-registration-photo-signature-guidelines/')
  .replace(/\/mr\/blog\/state-psc-otr-registration-photo-signature-guidelines\//g, '/blog/state-psc-otr-registration-photo-signature-guidelines/')
  .replace(/\/hi\/blog\/rrb-ntpc-2026-master-document-rules-preparation-strategy\//g, '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/')
  .replace(/\/mr\/blog\/rrb-ntpc-2026-master-document-rules-preparation-strategy\//g, '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/')
  .replace(/\/hi\/blog\/upsc-csat-paper-2-master-blueprint-comprehension-hacks\//g, '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/')
  .replace(/\/mr\/blog\/upsc-csat-paper-2-master-blueprint-comprehension-hacks\//g, '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/');

fs.writeFileSync('public/_redirects', redirects, 'utf8');
console.log('Fixed public/_redirects targets!');

// 2. Fix astro.config.mjs
let astroConfig = fs.readFileSync('astro.config.mjs', 'utf8');

astroConfig = astroConfig
  .replace(/'\/hi\/blog\/state-psc-otr-registration-photo-signature-guidelines\/'/g, "'/blog/state-psc-otr-registration-photo-signature-guidelines/'")
  .replace(/'\/mr\/blog\/state-psc-otr-registration-photo-signature-guidelines\/'/g, "'/blog/state-psc-otr-registration-photo-signature-guidelines/'")
  .replace(/'\/hi\/blog\/rrb-ntpc-2026-master-document-rules-preparation-strategy\/'/g, "'/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/'")
  .replace(/'\/mr\/blog\/rrb-ntpc-2026-master-document-rules-preparation-strategy\/'/g, "'/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/'")
  .replace(/'\/hi\/blog\/upsc-csat-paper-2-master-blueprint-comprehension-hacks\/'/g, "'/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/'")
  .replace(/'\/mr\/blog\/upsc-csat-paper-2-master-blueprint-comprehension-hacks\/'/g, "'/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/'");

fs.writeFileSync('astro.config.mjs', astroConfig, 'utf8');
console.log('Fixed astro.config.mjs targets!');
