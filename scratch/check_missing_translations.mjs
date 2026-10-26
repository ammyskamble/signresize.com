import { BLOG_POSTS } from './blogPostsData.bundle.mjs';

console.log('Total blog posts:', BLOG_POSTS.length);

const missingHi = BLOG_POSTS.filter(p => !p.contentHtml_hi);
const missingMr = BLOG_POSTS.filter(p => !p.contentHtml_mr);

console.log('Missing Hindi:', missingHi.length);
console.log('Missing Marathi:', missingMr.length);

console.log('\nMissing Hindi slugs (' + missingHi.length + '):');
missingHi.forEach(p => console.log(' -', p.slug));

console.log('\nMissing Marathi slugs (' + missingMr.length + '):');
missingMr.forEach(p => console.log(' -', p.slug));
