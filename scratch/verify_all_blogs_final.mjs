// scratch/verify_all_blogs_final.mjs
import fs from 'node:fs';
import path from 'node:path';
import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

console.log('====================================================');
console.log(`AUDITING ALL ${BLOG_POSTS.length} BLOG POSTS IN BLOG_POSTS`);
console.log('====================================================\n');

let failed = false;

BLOG_POSTS.forEach((post, i) => {
  const issues = [];
  
  // Title checks
  if (!post.metaTitle) issues.push('Missing metaTitle');
  else if (post.metaTitle.length > 60) issues.push(`metaTitle exceeds 60 chars (${post.metaTitle.length}): "${post.metaTitle}"`);
  
  // Meta description checks
  if (!post.metaDescription) issues.push('Missing metaDescription');
  else if (post.metaDescription.length > 160) issues.push(`metaDescription exceeds 160 chars (${post.metaDescription.length}): "${post.metaDescription}"`);

  // Quick Facts
  if (!post.quickFacts || post.quickFacts.length !== 6) {
    issues.push(`quickFacts count is ${post.quickFacts ? post.quickFacts.length : 0} (expected 6)`);
  }

  // FAQs
  if (!post.faqs || post.faqs.length !== 10) {
    issues.push(`faqs count is ${post.faqs ? post.faqs.length : 0} (expected 10)`);
  }

  // TOC Anchors
  if (!post.contentHtml.includes('id="overview"') && !post.contentHtml.includes("id='overview'")) {
    issues.push('Missing id="overview" anchor');
  }
  if (!post.contentHtml.includes('id="exam-pattern"') && !post.contentHtml.includes("id='exam-pattern'")) {
    issues.push('Missing id="exam-pattern" anchor');
  }
  if (!post.contentHtml.includes('id="document-specs"') && !post.contentHtml.includes("id='document-specs'")) {
    issues.push('Missing id="document-specs" anchor');
  }
  if (!post.contentHtml.includes('id="strategy"') && !post.contentHtml.includes("id='strategy'")) {
    issues.push('Missing id="strategy" anchor');
  }

  // Rejection Warning Box
  if (!post.contentHtml.includes('Critical Application Rejection Traps') && !post.contentHtml.includes('Rejection Traps to Avoid')) {
    issues.push('Missing Rejection Warning Box');
  }

  // Tool links
  if (!post.contentHtml.includes('/photo-resizer') || !post.contentHtml.includes('/signature-resizer')) {
    issues.push('Missing 1-Click Tool CTA links (/photo-resizer and /signature-resizer)');
  }

  if (issues.length > 0) {
    failed = true;
    console.log(`❌ [FAIL] Post ${i+1}: ${post.slug}`);
    issues.forEach(iss => console.log(`      - ${iss}`));
  } else {
    console.log(`✅ [PASS] Post ${i+1}: ${post.slug}`);
    console.log(`      Title (${post.metaTitle.length}ch): "${post.metaTitle}"`);
    console.log(`      Desc  (${post.metaDescription.length}ch): "${post.metaDescription.slice(0, 70)}..."`);
    console.log(`      QuickFacts: ${post.quickFacts.length} | FAQs: ${post.faqs.length} | Section Anchors: 4/4`);
  }
});

if (failed) {
  console.error('\n❌ AUDIT FAILED: Some posts violated SEO or structure requirements.');
  process.exit(1);
} else {
  console.log('\n🎉 ALL 21 POSTS PASSED 100% OF SEO, FORMATTING & STRUCTURAL CRITERIA!');
}
