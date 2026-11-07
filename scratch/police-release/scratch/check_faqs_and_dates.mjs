// scratch/check_faqs_and_dates.mjs
import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

console.log('=== CHECKING ALL 21 POSTS FOR "CAN I CLEAR" FAQ & DEPLOYMENT TIMESTAMPS ===');
let missingClearCount = 0;

BLOG_POSTS.forEach((p, idx) => {
  const clearFaq = p.faqs.find(f => 
    (f.question.toLowerCase().includes('can') && f.question.toLowerCase().includes('clear')) ||
    (f.question.toLowerCase().includes('can') && f.question.toLowerCase().includes('selected'))
  );
  if (!clearFaq) {
    console.error(`❌ [MISSING FAQ] ${p.slug}`);
    missingClearCount++;
  } else {
    console.log(`✅ ${idx+1}. [${p.slug}]`);
    console.log(`     Deployed: ${p.deployedAt}`);
    console.log(`     Q: "${clearFaq.question}"`);
  }
});

if (missingClearCount === 0) {
  console.log('\n🌟 ALL 21 POSTS HAVE THE TAILORED "CAN I CLEAR THIS EXAM?" FAQ & DEPLOYMENT TIMESTAMP!');
} else {
  console.error(`\n❌ ${missingClearCount} posts are missing the FAQ.`);
  process.exit(1);
}
