import fs from 'fs';

const filePath = 'src/data/blogPostsData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Helper to do replacement in JSON-encoded strings
function replaceInPost(slug, targetFragment, replacementFragment) {
  const postStart = content.indexOf(`"slug": "${slug}"`);
  if (postStart === -1) {
    console.log(`Slug ${slug} not found`);
    return false;
  }
  const postEnd = content.indexOf('"slug":', postStart + 30);
  const end = postEnd !== -1 ? postEnd : postStart + 30000;
  const postText = content.substring(postStart, end);
  
  if (!postText.includes(targetFragment)) {
    console.log(`Target fragment not found in ${slug}`);
    return false;
  }
  
  const updatedPostText = postText.replace(targetFragment, replacementFragment);
  content = content.substring(0, postStart) + updatedPostText + content.substring(end);
  console.log(`✓ Replaced fragment in ${slug}`);
  return true;
}

// 1. In ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines:
// Replace the table rows
const targetTable = `<td class=\\"p-3 font-semibold text-primary\\">Passport Photo</td>`;
const replaceTable = `<td class=\\"p-3 font-semibold\\"><a href=\\"/photo-resizer/\\" class=\\"text-primary hover:underline flex items-center gap-1\\"><span>📸</span> Passport Photo</a></td>`;
replaceInPost('ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines', targetTable, replaceTable);

const targetSign = `<td class=\\"p-3 font-semibold text-primary\\">Candidate Signature</td>`;
const replaceSign = `<td class=\\"p-3 font-semibold\\"><a href=\\"/ibps-signature-resize/\\" class=\\"text-primary hover:underline flex items-center gap-1\\"><span>✍️</span> Candidate Signature</a></td>`;
replaceInPost('ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines', targetSign, replaceSign);

const targetThumb = `<td class=\\"p-3 font-semibold text-primary\\">Left Thumb Impression (LTI)</td>`;
const replaceThumb = `<td class=\\"p-3 font-semibold\\"><a href=\\"/ibps-thumb-impression-resize/\\" class=\\"text-primary hover:underline flex items-center gap-1\\"><span>👍</span> Left Thumb Impression (LTI)</a></td>`;
replaceInPost('ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines', targetThumb, replaceThumb);

const targetDecl = `<td class=\\"p-3 font-semibold text-primary\\">Handwritten Declaration</td>`;
const replaceDecl = `<td class=\\"p-3 font-semibold\\"><a href=\\"/ibps-handwritten-declaration-resize/\\" class=\\"text-primary hover:underline flex items-center gap-1\\"><span>📝</span> Handwritten Declaration</a></td>`;
replaceInPost('ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines', targetDecl, replaceDecl);

// Replace Mid CTA
const targetMidCta = `<div class=\\"flex flex-wrap gap-3 mt-3\\">\\n          <a href=\\"/ibps-signature-resize/\\" class=\\"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition\\">\\n            Resize IBPS Signature &rarr;\\n          </a>\\n          <a href=\\"/thumb-impression-resize/\\" class=\\"inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-95 transition\\">\\n            Format Thumb Impression &rarr;\\n          </a>\\n        </div>`;

const replaceMidCta = `<div class=\\"grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3\\">\\n          <a href=\\"/photo-resizer/\\" class=\\"p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-center transition group shadow-xs\\">\\n            <span class=\\"text-base block mb-0.5 group-hover:scale-110 transition\\">📸</span>\\n            <span class=\\"text-xs font-bold block text-foreground\\">Passport Photo</span>\\n            <span class=\\"text-[10px] text-muted-foreground font-mono\\">20–50 KB (200×230)</span>\\n          </a>\\n          <a href=\\"/ibps-signature-resize/\\" class=\\"p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-center transition group shadow-xs\\">\\n            <span class=\\"text-base block mb-0.5 group-hover:scale-110 transition\\">✍️</span>\\n            <span class=\\"text-xs font-bold block text-foreground\\">IBPS Signature</span>\\n            <span class=\\"text-[10px] text-muted-foreground font-mono\\">10–20 KB (140×60)</span>\\n          </a>\\n          <a href=\\"/ibps-thumb-impression-resize/\\" class=\\"p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-center transition group shadow-xs\\">\\n            <span class=\\"text-base block mb-0.5 group-hover:scale-110 transition\\">👍</span>\\n            <span class=\\"text-xs font-bold block text-foreground\\">Thumb Impression</span>\\n            <span class=\\"text-[10px] text-muted-foreground font-mono\\">20–50 KB (240×240)</span>\\n          </a>\\n          <a href=\\"/ibps-handwritten-declaration-resize/\\" class=\\"p-2.5 rounded-xl bg-card border border-border hover:border-primary/50 text-center transition group shadow-xs\\">\\n            <span class=\\"text-base block mb-0.5 group-hover:scale-110 transition\\">📝</span>\\n            <span class=\\"text-xs font-bold block text-foreground\\">Declaration</span>\\n            <span class=\\"text-[10px] text-muted-foreground font-mono\\">50–100 KB (800×400)</span>\\n          </a>\\n        </div>\\n        <div class=\\"mt-3 pt-3 border-t border-border/50 flex flex-wrap items-center gap-2 text-xs text-muted-foreground\\">\\n          <span class=\\"font-semibold text-foreground\\">Exam Presets:</span>\\n          <a href=\\"/sbi-clerk-signature-resize/\\" class=\\"underline hover:text-primary\\">SBI Clerk Signature (10–20 KB)</a> •\\n          <a href=\\"/sbi-po-signature-resize/\\" class=\\"underline hover:text-primary\\">SBI PO Signature</a> •\\n          <a href=\\"/ibps-clerk-signature-resize/\\" class=\\"underline hover:text-primary\\">IBPS Clerk Signature</a>\\n        </div>`;

replaceInPost('ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines', targetMidCta, replaceMidCta);

// Replace Bottom CTA in ibps-po-clerk
const targetBottom = `<div class=\\"flex flex-wrap gap-2 w-full sm:w-auto\\">\\n      <a href=\\"/photo-resizer/\\" class=\\"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all\\">\\n        <span>📸</span> Resize Photo\\n      </a>\\n      <a href=\\"/\\" class=\\"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all\\">\\n        <span>✍️</span> Resize Signature\\n      </a>\\n    </div>\\n  </div>\\n</div>`;

const replaceBottom = `<div class=\\"flex flex-wrap gap-2 w-full sm:w-auto\\">\\n      <a href=\\"/ibps-signature-resize/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 shadow-sm transition-all\\">\\n        <span>✍️</span> Signature (10–20 KB)\\n      </a>\\n      <a href=\\"/ibps-thumb-impression-resize/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all\\">\\n        <span>👍</span> Thumb (20–50 KB)\\n      </a>\\n      <a href=\\"/ibps-handwritten-declaration-resize/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all\\">\\n        <span>📝</span> Declaration (50–100 KB)\\n      </a>\\n      <a href=\\"/photo-resizer/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all\\">\\n        <span>📸</span> Photo\\n      </a>\\n    </div>\\n  </div>\\n  <div class=\\"mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center gap-2 text-xs text-muted-foreground\\">\\n    <span class=\\"font-semibold text-foreground\\">Related Banking Guides:</span>\\n    <a href=\\"/blog/ibps-po-2026-top-10-faq-banking-aspirants/\\" class=\\"underline hover:text-primary\\">IBPS PO Top 10 FAQs</a> •\\n    <a href=\\"/blog/sbi-clerk-2026-top-10-faq-junior-associates/\\" class=\\"underline hover:text-primary\\">SBI Clerk Selection Guide</a> •\\n    <a href=\\"/blog/ibps-rrb-po-prelims-mains-preparation-strategy-interview-guide/\\" class=\\"underline hover:text-primary\\">IBPS RRB Officer Guide</a>\\n  </div>\\n</div>`;

replaceInPost('ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines', targetBottom, replaceBottom);

// 2. In ibps-po-2026-top-10-faq-banking-aspirants
const targetIbpsFaqBottom = `Prepare Your IBPS PO 2026 Documents in Seconds</h4>\\n      <p class=\\"text-sm text-muted-foreground mt-1\\">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>\\n    </div>\\n    <div class=\\"flex flex-wrap gap-2 w-full sm:w-auto\\">\\n      <a href=\\"/photo-resizer/\\" class=\\"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all\\">\\n        <span>📸</span> Resize Photo\\n      </a>\\n      <a href=\\"/\\" class=\\"inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all\\">\\n        <span>✍️</span> Resize Signature\\n      </a>\\n    </div>`;

const replaceIbpsFaqBottom = `Prepare All IBPS PO 2026 Uploads in Seconds</h4>\\n      <p class=\\"text-sm text-muted-foreground mt-1\\">Resize photo, signature, thumb impression, and declaration with instant portal compliance.</p>\\n    </div>\\n    <div class=\\"flex flex-wrap gap-2 w-full sm:w-auto\\">\\n      <a href=\\"/ibps-signature-resize/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 shadow-sm transition-all\\">\\n        <span>✍️</span> Signature (10–20 KB)\\n      </a>\\n      <a href=\\"/ibps-thumb-impression-resize/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all\\">\\n        <span>👍</span> Thumb (20–50 KB)\\n      </a>\\n      <a href=\\"/ibps-handwritten-declaration-resize/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all\\">\\n        <span>📝</span> Declaration (50–100 KB)\\n      </a>\\n      <a href=\\"/blog/ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines/\\" class=\\"inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition-all\\">\\n        <span>📘</span> Master Handbook\\n      </a>\\n    </div>`;

replaceInPost('ibps-po-2026-top-10-faq-banking-aspirants', targetIbpsFaqBottom, replaceIbpsFaqBottom);

// 3. In sbi-clerk-2026-top-10-faq-junior-associates
const targetSbiCta = `<div class=\\"my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30\\">\\n          <h4 class=\\"text-base font-bold text-foreground\\">Resize Your SBI Clerk Photo &amp; Signature</h4>\\n          <p class=\\"text-sm text-muted-foreground mt-1\\">Ensure 100% compliance with SBI portal file boundaries using our instant client-side resizer tool.</p>\\n          <a href=\\"/ibps-signature-resize/\\" class=\\"inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition\\">Launch SBI Resizer Preset &rarr;</a>\\n        </div>`;

const replaceSbiCta = `<div class=\\"my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30\\">\\n          <div class=\\"flex items-center justify-between mb-2\\">\\n            <h4 class=\\"text-base font-bold text-foreground flex items-center gap-2\\"><span>🏛️</span> Resize Your SBI Clerk Photo &amp; Signature</h4>\\n            <a href=\\"/blog/ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines/\\" class=\\"text-xs text-primary font-semibold hover:underline\\">Read Master Banking Handbook &rarr;</a>\\n          </div>\\n          <p class=\\"text-xs sm:text-sm text-muted-foreground mt-1 mb-3\\">Ensure 100% compliance with State Bank of India portal file boundaries using our dedicated client-side tools:</p>\\n          <div class=\\"flex flex-wrap gap-2.5\\">\\n            <a href=\\"/sbi-clerk-signature-resize/\\" class=\\"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-95 transition shadow-xs\\">\\n              <span>✍️</span> SBI Clerk Signature (10–20 KB) &rarr;\\n            </a>\\n            <a href=\\"/sbi-signature-resize/\\" class=\\"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition shadow-xs\\">\\n              <span>✍️</span> All SBI Signature Resizer &rarr;\\n            </a>\\n            <a href=\\"/photo-resizer/\\" class=\\"inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card hover:bg-muted text-foreground font-semibold text-xs border border-border transition shadow-xs\\">\\n              <span>📸</span> Passport Photo (20–50 KB) &rarr;\\n            </a>\\n          </div>\\n        </div>`;

replaceInPost('sbi-clerk-2026-top-10-faq-junior-associates', targetSbiCta, replaceSbiCta);

// Save file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Update script completed.');
