import fs from 'fs';
import { BLOG_POSTS } from './blogPostsData.bundle.mjs';

const existingRedirects = fs.readFileSync('public/_redirects', 'utf8');

const missingHi = BLOG_POSTS.filter(p => !p.contentHtml_hi);
const missingMr = BLOG_POSTS.filter(p => !p.contentHtml_mr);

const newRules = [];

for (const p of missingHi) {
  const lineNoSlash = `/hi/blog/${p.slug} /blog/${p.slug}/ 301`;
  const lineSlash = `/hi/blog/${p.slug}/ /blog/${p.slug}/ 301`;
  if (!existingRedirects.includes(`/hi/blog/${p.slug} `) && !existingRedirects.includes(`/hi/blog/${p.slug}/ `)) {
    newRules.push(lineNoSlash);
    newRules.push(lineSlash);
  }
}

for (const p of missingMr) {
  const lineNoSlash = `/mr/blog/${p.slug} /blog/${p.slug}/ 301`;
  const lineSlash = `/mr/blog/${p.slug}/ /blog/${p.slug}/ 301`;
  if (!existingRedirects.includes(`/mr/blog/${p.slug} `) && !existingRedirects.includes(`/mr/blog/${p.slug}/ `)) {
    newRules.push(lineNoSlash);
    newRules.push(lineSlash);
  }
}

console.log('New non-duplicate rules to add:', newRules.length);
console.log('Sample:', newRules.slice(0, 10));
