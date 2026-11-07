import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

const rrbSlug = 'ibps-rrb-po-prelims-mains-preparation-strategy-interview-guide';
const start = content.indexOf(rrbSlug);
const end = content.indexOf('slug:', start + 30);
let postBlock = content.substring(start, end);

// Let's inspect where handwritten-declaration-resizer is used
console.log('Matches for handwritten:');
const matches = postBlock.match(/<a[^>]*handwritten[^>]*>[^<]*<\/a>/g);
console.log(matches);

// Replace handwritten-declaration-resizer with ibps-handwritten-declaration-resize and add thumb link
if (postBlock.includes('href="/handwritten-declaration-resizer/"')) {
  postBlock = postBlock.replaceAll(
    'href="/handwritten-declaration-resizer/"',
    'href="/ibps-handwritten-declaration-resize/"'
  );
  console.log('Updated handwritten declaration links to ibps-handwritten-declaration-resize');
}

// Check for the bottom tool banner
const targetBottomBanner = `<a href="/ibps-signature-resize/" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 shadow-sm transition-all">
            <span>✍️</span> आईबीपीएस हस्ताक्षर (10–20 KB)
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all">
            <span>📸</span> पासपोर्ट फोटो (20–50 KB)
          </a>
          <a href="/ibps-handwritten-declaration-resize/" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all">
            <span>📝</span> हस्तलिखित घोषणा (50–100 KB)
          </a>`;

const replacementBottomBanner = `<a href="/ibps-signature-resize/" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 shadow-sm transition-all">
            <span>✍️</span> आईबीपीएस हस्ताक्षर (10–20 KB)
          </a>
          <a href="/ibps-thumb-impression-resize/" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all">
            <span>👍</span> अंगूठे का निशान (20–50 KB)
          </a>
          <a href="/ibps-handwritten-declaration-resize/" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all">
            <span>📝</span> हस्तलिखित घोषणा (50–100 KB)
          </a>
          <a href="/photo-resizer/" class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all">
            <span>📸</span> पासपोर्ट फोटो
          </a>`;

if (postBlock.includes(targetBottomBanner)) {
  postBlock = postBlock.replace(targetBottomBanner, replacementBottomBanner);
  console.log('Updated bottom banner to include thumb resizer');
} else {
  console.log('Target bottom banner not found');
}

// Add a cross-link box to Master Banking Guide
const relatedSection = `<div class="mt-4 pt-3 border-t border-slate-700 flex flex-wrap items-center gap-2 text-xs text-slate-300">
            <span class="font-semibold text-white">संबंधित बैंकिंग मार्गदर्शिकाएँ:</span>
            <a href="/blog/ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines/" class="text-cyan-400 underline hover:text-cyan-300">IBPS मास्टर अपलोड हैंडबुक (4-इन-1)</a> •
            <a href="/blog/ibps-po-2026-top-10-faq-banking-aspirants/" class="text-cyan-400 underline hover:text-cyan-300">IBPS PO टॉप 10 FAQs</a> •
            <a href="/blog/sbi-clerk-2026-top-10-faq-junior-associates/" class="text-cyan-400 underline hover:text-cyan-300">SBI क्लर्क चयन रणनीति</a>
          </div>`;

if (!postBlock.includes('IBPS मास्टर अपलोड हैंडबुक (4-इन-1)')) {
  // Insert before closing div of the functional card
  postBlock = postBlock.replace('<!-- SECTION 6: HIGH-YIELD DAILY ROUTINE & RETENTION SYSTEM -->', relatedSection + '\n\n      <!-- SECTION 6: HIGH-YIELD DAILY ROUTINE & RETENTION SYSTEM -->');
  console.log('Inserted related banking guides cross-link in RRB PO post');
}

content = content.substring(0, start) + postBlock + content.substring(end);
fs.writeFileSync(filePath, content, 'utf8');
console.log('Saved RRB PO post updates.');
