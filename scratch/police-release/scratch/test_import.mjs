import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

console.log('Successfully imported BLOG_POSTS! Count:', BLOG_POSTS.length);
const neet = BLOG_POSTS.find(p => p.slug.includes('neet-ug'));
console.log('NEET post found:', neet ? neet.slug : 'not found');
const ssc = BLOG_POSTS.find(p => p.slug.includes('ssc-gd'));
console.log('SSC GD post found:', ssc ? ssc.slug : 'not found');
console.log('SSC GD has_hi:', Boolean(ssc?.contentHtml_hi), 'has_mr:', Boolean(ssc?.contentHtml_mr));
const nicl = BLOG_POSTS.find(p => p.slug.includes('nicl-assistant'));
console.log('NICL post found:', nicl ? nicl.slug : 'not found');
console.log('NICL has_hi:', Boolean(nicl?.contentHtml_hi), 'has_mr:', Boolean(nicl?.contentHtml_mr));
