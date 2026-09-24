import fs from 'fs';

// 1. Update [slug].astro h2 color
const slugPath = 'D:/Testing/Blogs/BionicsMetrix.online/src/pages/articles/[slug].astro';
let slugText = fs.readFileSync(slugPath, 'utf8');

slugText = slugText.replace(
  `color: var(--text-primary); margin-bottom: 1rem; letter-spacing: -0.02em; word-break: break-word;"`,
  `color: #38bdf8; margin-bottom: 1rem; letter-spacing: -0.02em; word-break: break-word;"`
);

fs.writeFileSync(slugPath, slugText, 'utf8');
console.log("Updated [slug].astro section h2 color to #38bdf8 (soft blue)");

// 2. Append CSS rules to article.css for soft blue subheadlines
const cssPath = 'D:/Testing/Blogs/BionicsMetrix.online/src/styles/article.css';
let cssText = fs.readFileSync(cssPath, 'utf8');

const softBlueRule = `
/* Soft Blue Subheadlines & High-Priority Yellow Snippets */
.center-reading-column h2,
.center-reading-column h3,
.article-section h2,
.article-section h3 {
  color: #38bdf8 !important;
}
`;

if (!cssText.includes("Soft Blue Subheadlines")) {
  cssText += softBlueRule;
  fs.writeFileSync(cssPath, cssText, 'utf8');
  console.log("Appended soft blue CSS rules to article.css");
}
