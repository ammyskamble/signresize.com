import fs from 'fs';
import path from 'path';

const slugAstroPath = path.resolve('src/pages/blog/[slug].astro');
let content = fs.readFileSync(slugAstroPath, 'utf8');

const targetStr = `      /* Prevent global h2/h3 banner styles from distorting card titles */
      :global(.article-prose [class*="bg-slate-900"] h2),
      :global(.article-prose [class*="bg-slate-950"] h2),
      :global(.article-prose [class*="bg-slate-900"] h3),
      :global(.article-prose [class*="bg-slate-950"] h3),
      :global(.article-prose [class*="bg-gradient-"] h2),
      :global(.article-prose [class*="bg-gradient-"] h3) {
        background: transparent !important;
        border-left: none !important;
        padding: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0.5rem !important;
        color: #ffffff !important;
      }
      :global(.article-prose [class*="bg-card"] h2),
      :global(.article-prose [class*="bg-card"] h3) {
        background: transparent !important;
        border-left: none !important;
        padding: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0.5rem !important;
        color: var(--color-foreground) !important;
      }
      :global(.article-prose table) {
        color: var(--color-foreground);
      }
      :global(.article-prose th) {
        color: var(--color-foreground) !important;
      }
      :global(.article-prose td) {
        color: var(--color-foreground);
      }`;

const replacementStr = `      /* Prevent global h2/h3/h4/h5 banner styles from distorting card titles */
      :global(.article-prose [class*="bg-slate-900"] h2),
      :global(.article-prose [class*="bg-slate-950"] h2),
      :global(.article-prose [class*="bg-slate-900"] h3),
      :global(.article-prose [class*="bg-slate-950"] h3),
      :global(.article-prose [class*="bg-slate-900"] h4),
      :global(.article-prose [class*="bg-slate-950"] h4),
      :global(.article-prose [class*="bg-slate-900"] h5),
      :global(.article-prose [class*="bg-slate-950"] h5),
      :global(.article-prose [class*="bg-gradient-"] h2),
      :global(.article-prose [class*="bg-gradient-"] h3),
      :global(.article-prose [class*="bg-gradient-"] h4),
      :global(.article-prose [class*="bg-gradient-"] h5) {
        background: transparent !important;
        border: none !important;
        padding: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0.5rem !important;
        color: #ffffff !important;
      }
      :global(.article-prose [class*="bg-card"] h2),
      :global(.article-prose [class*="bg-card"] h3),
      :global(.article-prose [class*="bg-card"] h4),
      :global(.article-prose [class*="bg-card"] h5) {
        background: transparent !important;
        border: none !important;
        padding: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0.5rem !important;
        color: var(--color-foreground) !important;
      }
      /* Dark Container Table Anti-Blending */
      :global(.article-prose [class*="bg-slate-900"] table),
      :global(.article-prose [class*="bg-slate-950"] table),
      :global(.article-prose [class*="bg-gradient-"] table) {
        color: #f8fafc !important;
      }
      :global(.article-prose [class*="bg-slate-900"] th),
      :global(.article-prose [class*="bg-slate-950"] th),
      :global(.article-prose [class*="bg-gradient-"] th) {
        color: #ffffff !important;
        background-color: rgba(30, 41, 59, 0.9) !important;
      }
      :global(.article-prose [class*="bg-slate-900"] td),
      :global(.article-prose [class*="bg-slate-950"] td),
      :global(.article-prose [class*="bg-gradient-"] td) {
        color: #cbd5e1 !important;
      }
      :global(.article-prose table) {
        color: var(--color-foreground);
      }
      :global(.article-prose th) {
        color: var(--color-foreground);
      }
      :global(.article-prose td) {
        color: var(--color-foreground);
      }`;

// Normalize line endings for replacement
const normalizedContent = content.replace(/\r\n/g, '\n');
const normalizedTarget = targetStr.replace(/\r\n/g, '\n');

if (!normalizedContent.includes(normalizedTarget)) {
  console.error("Target string not found in normalized content!");
  process.exit(1);
}

const updated = normalizedContent.replace(normalizedTarget, replacementStr);
fs.writeFileSync(slugAstroPath, updated, 'utf8');
console.log("Successfully updated [slug].astro anti-blending rules!");
