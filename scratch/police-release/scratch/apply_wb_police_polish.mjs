import fs from 'fs';
import path from 'path';

const blogFilePath = path.resolve('src/data/blogPostsData.ts');
let content = fs.readFileSync(blogFilePath, 'utf8');

// 1. Update guideTool href to signature tool
const oldGuideTool = `    guideTool: {
      href: '/wb-police-photo-resize/',
      label: 'WB Police Photo & Signature Resizer'
    },`;

const newGuideTool = `    guideTool: {
      href: '/wb-police-signature-resize/',
      label: 'WB Police Signature Resizer (5–20 KB)'
    },`;

if (content.includes(oldGuideTool)) {
  content = content.replace(oldGuideTool, newGuideTool);
  console.log("Updated guideTool href to signature tool!");
} else {
  console.warn("Could not find old guideTool block!");
}

// 2. Update Quick Jump Pill Bar with fade mask & scroll cues
const oldQuickJumpBar = `  <!-- Sticky Quick-Jump Pill Bar -->
  <div class="my-4 p-3 rounded-2xl bg-card border border-border shadow-xs backdrop-blur-md sticky top-20 z-20">
    <div class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-2 mb-1.5 flex items-center gap-1.5">
      <span class="text-primary">⚡</span> Quick Jump Navigation:
    </div>
    <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs whitespace-nowrap">`;

const newQuickJumpBar = `  <!-- Sticky Quick-Jump Pill Bar -->
  <div class="my-4 p-3 rounded-2xl bg-card border border-border shadow-xs backdrop-blur-md sticky top-20 z-20 relative quick-jump-wrapper">
    <div class="text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-2 mb-1.5 flex items-center justify-between">
      <span class="flex items-center gap-1.5"><span class="text-primary">⚡</span> Quick Jump Navigation:</span>
      <span class="text-[10px] text-muted-foreground font-medium flex items-center gap-1 opacity-70 sm:hidden">
        <span>Scroll</span> <span>&rarr;</span>
      </span>
    </div>
    <div class="relative">
      <div class="quick-jump-fade-mask"></div>
      <div class="flex items-center gap-1.5 overflow-x-auto scrollbar-thin pb-1 text-xs whitespace-nowrap pr-8">`;

if (content.includes(oldQuickJumpBar)) {
  content = content.replace(oldQuickJumpBar, newQuickJumpBar);
  // Also close the extra relative div
  const oldQuickJumpBarEnd = `      <a href="#faqs" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">\n        <span>❓</span> <span>10 FAQs</span>\n      </a>\n    </div>\n  </div>`;
  const newQuickJumpBarEnd = `      <a href="#faqs" class="px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground font-semibold transition flex items-center gap-1 shrink-0">\n        <span>❓</span> <span>10 FAQs</span>\n      </a>\n    </div>\n    </div>\n  </div>`;
  content = content.replace(oldQuickJumpBarEnd, newQuickJumpBarEnd);
  console.log("Updated Quick Jump Pill Bar with fade mask & scroll cues!");
} else {
  console.warn("Could not find old quick jump bar block!");
}

// 3. Update heading tags inside cards to semantic <h3>
// Kolkata Police Clarification
content = content.replace(
  '<strong class="font-bold text-blue-900 dark:text-blue-300 block">Kolkata Police (KP) vs West Bengal Police (WBP) Standards Clarification:</strong>',
  '<h3 class="font-bold text-blue-900 dark:text-blue-300 text-sm">Kolkata Police (KP) vs West Bengal Police (WBP) Standards Clarification</h3>'
);

// Common Upload Errors Callout
content = content.replace(
  '<div class="flex items-center gap-2 text-foreground font-bold text-xs sm:text-sm">\n      <span class="text-base">💡</span>\n      <span>Common Upload Errors & Quick-Fix Tips (Before You Drop Your File)</span>\n    </div>',
  '<h3 class="flex items-center gap-2 text-foreground font-bold text-xs sm:text-sm">\n      <span class="text-base">💡</span>\n      <span>Common Upload Errors & Quick-Fix Tips (Before You Drop Your File)</span>\n    </h3>'
);

// Educational Qualification Benchmark
content = content.replace(
  '<div class="flex items-center gap-2 text-foreground font-bold text-sm">\n        <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">📖</span>\n        <span>Educational Qualification Benchmark</span>\n      </div>',
  '<h3 class="flex items-center gap-2 text-foreground font-bold text-sm">\n        <span class="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">📖</span>\n        <span>Educational Qualification Benchmark</span>\n      </h3>'
);

// Age Limit & Reservation Window
content = content.replace(
  '<div class="flex items-center gap-2 text-foreground font-bold text-sm">\n        <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">🎂</span>\n        <span>Age Limit & Reservation Window</span>\n      </div>',
  '<h3 class="flex items-center gap-2 text-foreground font-bold text-sm">\n        <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">🎂</span>\n        <span>Age Limit & Reservation Window</span>\n      </h3>'
);

fs.writeFileSync(blogFilePath, content, 'utf8');
console.log("Successfully polished WB Police post!");
