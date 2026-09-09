// scripts/publish-daily-article.mjs
// Automation helper for 9:00 AM Daily Latest Articles & Daily Preparation publishing

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const dataFilePath = path.join(projectRoot, 'src', 'data', 'blogPostsData.ts');

/**
 * Validates and appends a new article to src/data/blogPostsData.ts
 * @param {import('../src/data/blogPostsData').BlogPost} post 
 */
export function appendArticle(post) {
  if (!fs.existsSync(dataFilePath)) {
    throw new Error(`Data file not found at ${dataFilePath}`);
  }

  const fileContent = fs.readFileSync(dataFilePath, 'utf-8');

  // Verify slug uniqueness
  const slugRegex = new RegExp(`slug:\\s*['"\`]${post.slug}['"\`]`, 'i');
  if (slugRegex.test(fileContent)) {
    throw new Error(`Article with slug "${post.slug}" already exists in blogPostsData.ts`);
  }

  // Format post object to TypeScript string
  const postString = `  {
    slug: ${JSON.stringify(post.slug)},
    title: ${JSON.stringify(post.title)},
    excerpt: ${JSON.stringify(post.excerpt)},
    category: ${JSON.stringify(post.category)},
    publishDate: ${JSON.stringify(post.publishDate)},
    author: ${JSON.stringify(post.author || 'SignResize Examination Standards Desk')},
    authorRole: ${JSON.stringify(post.authorRole || 'Official Document Compliance Team')},
    readTime: ${JSON.stringify(post.readTime || '5 min read')},
    featured: ${post.featured ? 'true' : 'false'},
    tags: ${JSON.stringify(post.tags || [])},
    relatedExamPreset: ${post.relatedExamPreset ? JSON.stringify(post.relatedExamPreset) : 'undefined'},
    contentHtml: \`
${post.contentHtml.trim()}
    \`
  },
`;

  // Insert at the beginning of BLOG_POSTS array (after export const BLOG_POSTS: BlogPost[] = [)
  const marker = 'export const BLOG_POSTS: BlogPost[] = [';
  const markerIndex = fileContent.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error(`Marker "${marker}" not found in blogPostsData.ts`);
  }

  const insertionPoint = markerIndex + marker.length;
  const updatedContent = 
    fileContent.slice(0, insertionPoint) + 
    '\n' + 
    postString + 
    fileContent.slice(insertionPoint);

  fs.writeFileSync(dataFilePath, updatedContent, 'utf-8');
  console.log(`Successfully published article "${post.title}" (${post.slug}) to ${dataFilePath}`);
}

// CLI check / status
if (process.argv[1] === __filename) {
  const args = process.argv.slice(2);
  if (args.includes('--status')) {
    const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
    const matches = [...fileContent.matchAll(/slug:\s*['"]([^'"]+)['"]/g)];
    console.log(`Total Published Articles: ${matches.length}`);
    console.log('Recent Slugs:');
    matches.slice(0, 5).forEach((m, idx) => console.log(`  ${idx + 1}. ${m[1]}`));
  } else {
    console.log('Daily Article Publisher Helper Ready.');
    console.log('Usage: node scripts/publish-daily-article.mjs --status');
  }
}
