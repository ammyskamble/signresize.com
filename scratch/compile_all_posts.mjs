// scratch/compile_all_posts.mjs
import fs from 'node:fs';
import path from 'node:path';
import { livePostsBatch1 } from './live_posts_batch1.mjs';
import { livePostsBatch2 } from './live_posts_batch2.mjs';

const allLivePosts = [...livePostsBatch1, ...livePostsBatch2];
console.log(`Loaded ${allLivePosts.length} live FAQ master posts.`);

// Read part1 existing posts
const part1Raw = fs.readFileSync('scratch/part1_existing.ts', 'utf8');

// The new TypeScript file header
const tsHeader = `export interface QuickFact {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity';
  publishDate: string;
  lastUpdated?: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  relatedExamPreset?: string; // e.g. 'ssc-general', 'ibps-sbi', 'rrb-railway', 'upsc-civil-services'
  quickFacts?: QuickFact[];
  faqs?: FAQItem[];
  contentHtml: string;
}

`;

// Let's replace the top interface of part1 with our tsHeader
const postsArrayStartIndex = part1Raw.indexOf('export const BLOG_POSTS: BlogPost[] = [');
if (postsArrayStartIndex === -1) {
  throw new Error('Could not find BLOG_POSTS declaration in part1');
}

// Slice from BLOG_POSTS declaration to the end of post 7
let part1PostsSection = part1Raw.substring(postsArrayStartIndex);
// Trim trailing whitespace
part1PostsSection = part1PostsSection.trimEnd();

// Ensure it ends with comma after post 7
if (part1PostsSection.endsWith('}')) {
  part1PostsSection += ',\n';
} else if (part1PostsSection.endsWith('},')) {
  part1PostsSection += '\n';
}

// Format each of allLivePosts as TypeScript object
function formatPost(p) {
  return `  {
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    excerpt: ${JSON.stringify(p.excerpt)},
    category: ${JSON.stringify(p.category)},
    publishDate: ${JSON.stringify(p.publishDate)},
    lastUpdated: ${JSON.stringify(p.lastUpdated || p.publishDate)},
    author: ${JSON.stringify(p.author)},
    authorRole: ${JSON.stringify(p.authorRole)},
    readTime: ${JSON.stringify(p.readTime)},
    featured: ${p.featured ? 'true' : 'false'},
    tags: ${JSON.stringify(p.tags)},
    relatedExamPreset: ${p.relatedExamPreset ? JSON.stringify(p.relatedExamPreset) : 'undefined'},
    quickFacts: ${JSON.stringify(p.quickFacts || [], null, 4).replace(/^/gm, '    ').trim()},
    contentHtml: \`
${p.contentHtml.trim()}
    \`,
    faqs: ${JSON.stringify(p.faqs || [], null, 4).replace(/^/gm, '    ').trim()}
  }`;
}

const livePostsFormatted = allLivePosts.map(formatPost).join(',\n\n');

const fullTsContent = `${tsHeader}${part1PostsSection}
  // ─── BATCH: Standardized Top-10 FAQ Master Posts for Live Exams ───

${livePostsFormatted}
];
`;

const destination = path.resolve('src/data/blogPostsData.ts');
fs.writeFileSync(destination, fullTsContent, 'utf8');
console.log(`Successfully compiled all 14 posts to ${destination}`);
