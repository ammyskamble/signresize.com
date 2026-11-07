// scratch/check_posts.mjs
import { livePostsBatch1 } from './live_posts_batch1.mjs';
import { livePostsBatch2Seo } from './posts_live_batch2_seo.mjs';
import { remainingOngoingBatch1 } from './posts_remaining_ongoing1.mjs';
import { remainingOngoingBatch2 } from './posts_remaining_ongoing2.mjs';
import { part1Enrichment } from './enrich_part1_posts.mjs';

const all14 = [
  ...livePostsBatch1,
  ...livePostsBatch2Seo,
  ...remainingOngoingBatch1,
  ...remainingOngoingBatch2
];

console.log('=== CHECKING BATCH POSTS (14 posts) ===');
all14.forEach((p, i) => {
  const titleLen = p.metaTitle ? p.metaTitle.length : 0;
  const descLen = p.metaDescription ? p.metaDescription.length : 0;
  const h2Count = (p.contentHtml.match(/<h2/g) || []).length;
  const h3Count = (p.contentHtml.match(/<h3/g) || []).length;
  const faqCount = p.faqs ? p.faqs.length : 0;
  const qfCount = p.quickFacts ? p.quickFacts.length : 0;
  const hasOverview = p.contentHtml.includes('id="overview"') || p.contentHtml.includes("id='overview'");
  const hasPattern = p.contentHtml.includes('id="exam-pattern"') || p.contentHtml.includes("id='exam-pattern'");
  const hasDocs = p.contentHtml.includes('id="document-specs"') || p.contentHtml.includes("id='document-specs'");
  const hasStrat = p.contentHtml.includes('id="strategy"') || p.contentHtml.includes("id='strategy'");
  const hasPhotoResizer = p.contentHtml.includes('/photo-resizer');
  const hasSignResizer = p.contentHtml.includes('/signature-resizer');

  console.log(`${i+1}. [${p.slug}]`);
  console.log(`   metaTitle (${titleLen} chars): "${p.metaTitle}"`);
  console.log(`   metaDesc  (${descLen} chars): "${p.metaDescription}"`);
  console.log(`   H2s: ${h2Count}, H3s: ${h3Count}, FAQs: ${faqCount}, QuickFacts: ${qfCount}`);
  console.log(`   Anchors: overview=${hasOverview}, pattern=${hasPattern}, docs=${hasDocs}, strategy=${hasStrat}`);
  console.log(`   Tool links: photo=${hasPhotoResizer}, sign=${hasSignResizer}`);
});

console.log('\n=== CHECKING PART 1 ENRICHMENT (7 posts) ===');
Object.entries(part1Enrichment).forEach(([slug, data], i) => {
  const titleLen = data.metaTitle ? data.metaTitle.length : 0;
  const descLen = data.metaDescription ? data.metaDescription.length : 0;
  const faqCount = data.faqs ? data.faqs.length : 0;
  const qfCount = data.quickFacts ? data.quickFacts.length : 0;
  console.log(`${i+1}. [${slug}]`);
  console.log(`   metaTitle (${titleLen} chars): "${data.metaTitle}"`);
  console.log(`   metaDesc  (${descLen} chars): "${data.metaDescription}"`);
  console.log(`   FAQs: ${faqCount}, QuickFacts: ${qfCount}`);
});
