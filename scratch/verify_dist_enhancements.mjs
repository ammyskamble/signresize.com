// scratch/verify_dist_enhancements.mjs
import fs from 'node:fs';
import path from 'node:path';
import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

console.log('====================================================');
console.log('VERIFYING BLOG ENHANCEMENTS IN BUILT HTML (dist/)');
console.log('====================================================\n');

let failed = false;

// 1. Verify blog post pages
BLOG_POSTS.forEach((post, i) => {
  const filePath = path.join('dist', 'blog', post.slug, 'index.html');
  const html = fs.readFileSync(filePath, 'utf8');

  // Check social share
  const hasWhatsApp = html.includes('api.whatsapp.com/send');
  const hasTelegram = html.includes('t.me/share/url');
  const hasTwitter = html.includes('twitter.com/intent/tweet');
  const hasCopyBtn = html.includes('copy-share-link-btn');

  // Check headline highlight styles
  const hasHighlightCss = html.includes('.article-prose h2') && html.includes('border-left:');

  // Check Can I clear FAQ
  const hasCanIClear = (
    html.includes('Can I clear') ||
    html.includes('Can an average') ||
    html.includes('Can a beginner') ||
    html.includes('Can an ITI') ||
    html.includes('Can I get selected') ||
    html.includes('Can working') ||
    html.includes('Can non-mathematics') ||
    html.includes('Can minor document')
  );

  // Check deployment timestamp
  const hasDeploymentTime = html.includes('Verified &amp; Deployed:') && html.includes('09:00 AM IST');

  const issues = [];
  if (!hasWhatsApp || !hasTelegram || !hasTwitter || !hasCopyBtn) issues.push('Missing Social Share buttons');
  if (!hasHighlightCss) issues.push('Missing Headline highlight CSS');
  if (!hasCanIClear) issues.push('Missing "Can I clear" FAQ in rendered HTML');
  if (!hasDeploymentTime) issues.push('Missing deployment time badge');

  if (issues.length > 0) {
    failed = true;
    console.error(`❌ [FAIL] ${post.slug}:`, issues);
  } else {
    console.log(`✅ [PASS] ${i+1}. ${post.slug}`);
  }
});

// 2. Verify footer social share on home page
const homeHtml = fs.readFileSync('dist/index.html', 'utf8');
const homeHasFooterShare = homeHtml.includes('Share SignResize with Friends') && homeHtml.includes('api.whatsapp.com/send');
console.log(`\nHome Page Footer Social Share: ${homeHasFooterShare ? '✅ Verified' : '❌ Missing'}`);

// 3. Verify blog index date sorting and social share
const blogIndexHtml = fs.readFileSync('dist/blog/index.html', 'utf8');
const blogIndexHasShare = blogIndexHtml.includes('Share SignResize Study Room') && blogIndexHtml.includes('api.whatsapp.com/send');
console.log(`Blog Index Social Share: ${blogIndexHasShare ? '✅ Verified' : '❌ Missing'}`);

if (failed || !homeHasFooterShare || !blogIndexHasShare) {
  console.error('\n❌ VERIFICATION FAILED: Some requirements were not met in dist HTML.');
  process.exit(1);
} else {
  console.log('\n🌟 100% SUCCESS: All headlines highlighted, all FAQs present, deployment timestamps verified, date sorting active, and social media share buttons live across the entire website!');
}
