import fs from 'fs';
import { BLOG_POSTS } from './blogPostsData.bundle.mjs';

const missingHi = BLOG_POSTS.filter(p => !p.contentHtml_hi);
const missingMr = BLOG_POSTS.filter(p => !p.contentHtml_mr);

console.log(`Generating redirects for ${missingHi.length} missing Hindi and ${missingMr.length} missing Marathi posts.`);

const redirects = [];
for (const p of missingHi) {
  redirects.push(`/hi/blog/${p.slug} /blog/${p.slug}/ 301`);
  redirects.push(`/hi/blog/${p.slug}/ /blog/${p.slug}/ 301`);
}
for (const p of missingMr) {
  redirects.push(`/mr/blog/${p.slug} /blog/${p.slug}/ 301`);
  redirects.push(`/mr/blog/${p.slug}/ /blog/${p.slug}/ 301`);
}

console.log(`Total redirect lines: ${redirects.length}`);
