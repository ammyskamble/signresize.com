import fs from 'fs';
import { BLOG_POSTS } from './blogPostsData.bundle.mjs';

const redirectsFile = 'public/_redirects';
let content = fs.readFileSync(redirectsFile, 'utf8').trimEnd();

const missingHi = BLOG_POSTS.filter(p => !p.contentHtml_hi);
const missingMr = BLOG_POSTS.filter(p => !p.contentHtml_mr);

const newRules = [];

for (const p of missingHi) {
  const lineNoSlash = `/hi/blog/${p.slug} /blog/${p.slug}/ 301`;
  const lineSlash = `/hi/blog/${p.slug}/ /blog/${p.slug}/ 301`;
  if (!content.includes(`/hi/blog/${p.slug} `) && !content.includes(`/hi/blog/${p.slug}/ `)) {
    newRules.push(lineNoSlash);
    newRules.push(lineSlash);
  }
}

for (const p of missingMr) {
  const lineNoSlash = `/mr/blog/${p.slug} /blog/${p.slug}/ 301`;
  const lineSlash = `/mr/blog/${p.slug}/ /blog/${p.slug}/ 301`;
  if (!content.includes(`/mr/blog/${p.slug} `) && !content.includes(`/mr/blog/${p.slug}/ `)) {
    newRules.push(lineNoSlash);
    newRules.push(lineSlash);
  }
}

console.log(`Adding ${newRules.length} rules to ${redirectsFile}`);

const sectionHeader = `\n\n# 4. Untranslated Regional Blog Posts (Redirects historical untranslated shells to English canonical guide)\n`;
fs.writeFileSync(redirectsFile, content + sectionHeader + newRules.join('\n') + '\n', 'utf8');

console.log('Successfully updated public/_redirects');
