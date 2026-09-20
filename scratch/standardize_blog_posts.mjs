// scratch/standardize_blog_posts.mjs
import fs from 'node:fs';
import path from 'node:path';

const outPath = path.resolve('src/data/blogPostsData.ts');

const fileHeader = `export interface QuickFact {
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

export const BLOG_POSTS: BlogPost[] = [
`;

// We will construct the posts cleanly
console.log('Writing standard formatted blog posts to', outPath);
