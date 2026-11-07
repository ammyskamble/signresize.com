// scratch/list_ongoing_exams.mjs
import { ONGOING_EXAMS_DATA } from '../src/data/examNewsData.ts';
import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

const blogSlugSet = new Set(BLOG_POSTS.map(p => p.slug));

console.log('=== ONGOING EXAMS (examNewsData.ts) ===');
ONGOING_EXAMS_DATA.forEach((e, idx) => {
  const hasArticle = e.articleSlug ? blogSlugSet.has(e.articleSlug) : false;
  console.log(`${idx+1}. ID: ${e.id} | Name: ${e.examName}`);
  console.log(`   Tool: /${e.toolSlug}/ | Article: /blog/${e.articleSlug}/ [Exists in BLOG_POSTS: ${hasArticle}]`);
});
