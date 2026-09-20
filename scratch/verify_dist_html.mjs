// scratch/verify_dist_html.mjs
import fs from 'node:fs';
import path from 'node:path';
import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

console.log('====================================================');
console.log(`VERIFYING COMPILED HTML IN dist/blog/ (21 Pages)`);
console.log('====================================================\n');

let failedCount = 0;

BLOG_POSTS.forEach((post, i) => {
  const filePath = path.join('dist', 'blog', post.slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`❌ [MISSING] File not found: ${filePath}`);
    failedCount++;
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Title check
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : '';

  // Meta description check
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const desc = descMatch ? descMatch[1] : '';

  // Schema checks
  const hasFaqSchema = html.includes('"@type":"FAQPage"');
  const hasBreadcrumb = html.includes('"@type":"BreadcrumbList"');
  const hasBlogPosting = html.includes('"@type":"BlogPosting"');

  // Details accordion check
  const detailsCount = (html.match(/<details\b/gi) || []).length;

  // TOC section IDs
  const hasOverview = html.includes('id="overview"');
  const hasExamPattern = html.includes('id="exam-pattern"');
  const hasDocSpecs = html.includes('id="document-specs"');
  const hasStrategy = html.includes('id="strategy"');

  // Rejection warnings & Tool CTAs
  const hasRejection = html.includes('Rejection Traps to Avoid') || html.includes('Critical Application Rejection Traps');
  const hasPhotoTool = html.includes('/photo-resizer');
  const hasSignTool = html.includes('/signature-resizer');

  const issues = [];
  if (!title) issues.push('Missing <title>');
  if (!desc) issues.push('Missing <meta name="description">');
  if (!hasFaqSchema) issues.push('Missing FAQPage Schema');
  if (!hasBreadcrumb) issues.push('Missing BreadcrumbList Schema');
  if (!hasBlogPosting) issues.push('Missing BlogPosting Schema');
  if (detailsCount !== 10) issues.push(`Details count is ${detailsCount} (expected 10)`);
  if (!hasOverview) issues.push('Missing id="overview"');
  if (!hasExamPattern) issues.push('Missing id="exam-pattern"');
  if (!hasDocSpecs) issues.push('Missing id="document-specs"');
  if (!hasStrategy) issues.push('Missing id="strategy"');
  if (!hasRejection) issues.push('Missing Rejection Box');
  if (!hasPhotoTool || !hasSignTool) issues.push('Missing Photo/Sign Tool CTA links');

  if (issues.length > 0) {
    console.error(`❌ [FAIL] ${post.slug}`);
    issues.forEach(iss => console.error(`      - ${iss}`));
    failedCount++;
  } else {
    console.log(`✅ [PASS] ${i+1}. ${post.slug}`);
    console.log(`      Title: "${title}" (${title.length} chars)`);
    console.log(`      Schemas: FAQPage=${hasFaqSchema}, Breadcrumbs=${hasBreadcrumb}, BlogPosting=${hasBlogPosting}`);
    console.log(`      Accordions: ${detailsCount} | Anchors: 4/4 | Tools: Photo & Sign`);
  }
});

if (failedCount > 0) {
  console.error(`\n❌ VERIFICATION FAILED for ${failedCount} pages.`);
  process.exit(1);
} else {
  console.log('\n🌟 PERFECT: All 21 blog pages generated flawless HTML with all schemas, accordions, and SEO meta tags!');
}
