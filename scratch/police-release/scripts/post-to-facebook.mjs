#!/usr/bin/env node
/**
 * Auto-publish SignResize Blog Articles & Tool Preset Info to Facebook Page via Meta Graph API.
 *
 * Usage:
 *   node scripts/post-to-facebook.mjs --latest
 *   node scripts/post-to-facebook.mjs --slug upsc-cse-syllabus-2026-complete-guide-prelims-mains-pdf
 *   node scripts/post-to-facebook.mjs --dry-run
 */

import { readFileSync } from 'node:fs';
import path from 'node:path';

// Parse CLI flags
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const isLatest = args.includes('--latest') || args.length === 0;
const slugIndex = args.indexOf('--slug');
const targetSlug = slugIndex !== -1 ? args[slugIndex + 1] : null;

// Read blog posts directly to avoid TS-runtime dependency issues
const blogDataRaw = readFileSync(path.resolve('src/data/blogPostsData.ts'), 'utf8');

function extractBlogPosts() {
  // Simple extraction of posts
  const slugMatches = [...blogDataRaw.matchAll(/slug:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const titleMatches = [...blogDataRaw.matchAll(/title:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const excerptMatches = [...blogDataRaw.matchAll(/excerpt:\s*["']([^"']+)["']/g)].map(m => m[1]);
  const dateMatches = [...blogDataRaw.matchAll(/publishDate:\s*["']([^"']+)["']/g)].map(m => m[1]);
  
  const posts = [];
  for (let i = 0; i < slugMatches.length; i++) {
    posts.push({
      slug: slugMatches[i],
      title: titleMatches[i] || 'Exam Preparation Guide',
      excerpt: excerptMatches[i] || '',
      publishDate: dateMatches[i] || '',
    });
  }
  return posts;
}

const allPosts = extractBlogPosts();

if (allPosts.length === 0) {
  console.error('❌ No blog posts found in src/data/blogPostsData.ts');
  process.exit(1);
}

// Select post to share
let postToShare = allPosts[0]; // First post is newest
if (targetSlug) {
  const found = allPosts.find(p => p.slug === targetSlug);
  if (found) {
    postToShare = found;
  } else {
    console.error(`❌ Post with slug "${targetSlug}" not found.`);
    process.exit(1);
  }
}

// Determine related resizer tool URL based on slug
function getRelatedToolUrl(slug) {
  const lower = slug.toLowerCase();
  if (lower.includes('upsc')) return 'https://signresize.in/upsc-photo-resize/';
  if (lower.includes('ssc')) return 'https://signresize.in/ssc-signature-resize/';
  if (lower.includes('rrb')) return 'https://signresize.in/rrb-signature-resize/';
  if (lower.includes('ibps') || lower.includes('sbi')) return 'https://signresize.in/ibps-signature-resize/';
  if (lower.includes('neet')) return 'https://signresize.in/neet-photo-resize/';
  if (lower.includes('police')) return 'https://signresize.in/up-police-signature-resize/';
  if (lower.includes('signature')) return 'https://signresize.in/#tool-workspace';
  if (lower.includes('photo')) return 'https://signresize.in/photo-resizer/';
  return 'https://signresize.in/#tool-workspace';
}

const articleUrl = `https://signresize.in/blog/${postToShare.slug}/`;
const toolUrl = getRelatedToolUrl(postToShare.slug);

// Generate relevant hashtags
function generateHashtags(title, slug) {
  const tags = new Set(['#SignResize', '#GovtJobs', '#ExamPreparation']);
  const text = (title + ' ' + slug).toLowerCase();
  if (text.includes('upsc')) { tags.add('#UPSC'); tags.add('#IAS'); tags.add('#CivilServices'); }
  if (text.includes('ssc')) { tags.add('#SSCCGL'); tags.add('#SSC'); }
  if (text.includes('rrb') || text.includes('railway')) { tags.add('#RRBNTPC'); tags.add('#RailwayJobs'); }
  if (text.includes('banking') || text.includes('ibps') || text.includes('sbi')) { tags.add('#BankingExams'); tags.add('#IBPS'); }
  if (text.includes('neet')) { tags.add('#NEETUG'); tags.add('#MedicalEntrance'); }
  if (text.includes('police')) { tags.add('#PoliceBharti'); tags.add('#PoliceConstable'); }
  return Array.from(tags).join(' ');
}

const hashtags = generateHashtags(postToShare.title, postToShare.slug);

// Format Facebook post message
const message = `📢 NEW EXAM GUIDE & SPECIFICATIONS UPDATE

🎯 ${postToShare.title}

${postToShare.excerpt}

📌 Key Resources & Tools:
📖 Read Full Guide: ${articleUrl}
⚡ Free 1-Click Photo & Signature Resizer: ${toolUrl}
📥 Download Official Guidelines & Specs: ${articleUrl}

🔒 100% Client-Side & Private • No Signup • Free for All Aspirants

${hashtags}`;

console.log('----------------------------------------------------');
console.log('📝 Prepared Facebook Post:');
console.log('----------------------------------------------------');
console.log(message);
console.log('----------------------------------------------------');
console.log(`🔗 Link Attachment: ${articleUrl}`);
console.log('----------------------------------------------------');

if (isDryRun) {
  console.log('✨ [DRY RUN] Simulation complete. No API call made to Facebook.');
  process.exit(0);
}

// Credentials from environment (Supports both Facebook Pages and Groups)
const targetId = process.env.FB_GROUP_ID || process.env.FB_PAGE_ID || process.env.FB_TARGET_ID;
const accessToken = process.env.FB_PAGE_ACCESS_TOKEN || process.env.FB_ACCESS_TOKEN;
const isGroup = Boolean(process.env.FB_GROUP_ID);

if (!targetId || !accessToken) {
  console.log('\n⚠️ Facebook auto-publish skipped: Target ID or Access Token is not configured.');
  console.log('👉 To enable auto-posting:');
  console.log('   - For Facebook Group: Set FB_GROUP_ID and FB_PAGE_ACCESS_TOKEN');
  console.log('   - For Facebook Page:  Set FB_PAGE_ID and FB_PAGE_ACCESS_TOKEN');
  console.log('   (The rest of the build/publishing workflow continues normally).\n');
  process.exit(0); // Exit cleanly without breaking CI/CD
}

async function publishToFacebook() {
  const url = `https://graph.facebook.com/v21.0/${targetId}/feed`;
  console.log(`🚀 Publishing to Facebook ${isGroup ? 'Group' : 'Page'} (ID: ${targetId})...`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        link: articleUrl,
        access_token: accessToken,
      }),
    });

    const data = await response.json();

    if (!response.ok || data.error) {
      console.error('❌ Facebook API Error:', JSON.stringify(data.error, null, 2));
      process.exit(0); // Do not crash the entire GitHub Action workflow
    }

    console.log(`✅ Successfully published to Facebook Page!`);
    console.log(`📌 Post ID: ${data.id}`);
    console.log(`🌐 Live URL: https://facebook.com/${data.id}`);
  } catch (err) {
    console.error('❌ Network error while connecting to Facebook Graph API:', err.message);
    process.exit(0);
  }
}

publishToFacebook();
