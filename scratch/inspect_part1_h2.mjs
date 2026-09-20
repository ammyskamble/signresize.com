// scratch/inspect_part1_h2.mjs
import posts from './part1_cleaned.mjs';

posts.forEach((p, idx) => {
  console.log(`\nPost ${idx+1}: ${p.slug}`);
  const h2s = p.contentHtml.match(/<h2[^>]*>.*?<\/h2>/g) || [];
  h2s.forEach(h => console.log('   H2: ' + h));
});
