// scratch/compile_all_blog_posts_final.mjs
import fs from 'node:fs';
import path from 'node:path';

// Load batch modules
import part1Cleaned from './part1_cleaned.mjs';
import { part1Enrichment } from './enrich_part1_posts.mjs';
import { livePostsBatch1 } from './live_posts_batch1.mjs';
import { livePostsBatch2Seo } from './posts_live_batch2_seo.mjs';
import { remainingOngoingBatch1 } from './posts_remaining_ongoing1.mjs';
import { remainingOngoingBatch2 } from './posts_remaining_ongoing2.mjs';
import { canIClearFaqMap } from './add_can_i_clear_faqs.mjs';

// Common Rejection Box HTML snippet
function createRejectionBox(examName = "Govt Exam") {
  return `
<div class="my-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-foreground space-y-2">
  <h4 class="font-bold text-amber-600 dark:text-amber-400 text-base flex items-center gap-2">
    <span>⚠️</span> Critical Application Rejection Traps to Avoid
  </h4>
  <p class="text-sm text-muted-foreground leading-relaxed">
    Over 15% of online recruitment applications are rejected during preliminary scrutiny due to non-compliant digital uploads. Avoid these common mistakes:
  </p>
  <ul class="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
    <li><strong>Spectacles / Caps:</strong> Wearing glasses, tinted sunglasses, or caps obscures biometrics.</li>
    <li><strong>Block Letter Signature:</strong> Signing in ALL CAPITAL letters causes immediate disqualification.</li>
    <li><strong>Blurred Thumb / Details:</strong> Smudged ink or low DPI leads to automated portal rejection.</li>
    <li><strong>Exceeding File Size Bounds:</strong> Uploading files outside the strict KB range fails verification.</li>
  </ul>
</div>`;
}

// Common 1-Click Tool CTA snippet
function createToolCta(examName = "Exam") {
  return `
<div class="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
  <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <div>
      <h4 class="font-bold text-lg text-foreground">Prepare Your ${examName} Documents in Seconds</h4>
      <p class="text-sm text-muted-foreground mt-1">Resize your photo, signature, and certificates to exact official portal specifications for free.</p>
    </div>
    <div class="flex flex-wrap gap-2 w-full sm:w-auto">
      <a href="/photo-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
        <span>📸</span> Resize Photo
      </a>
      <a href="/signature-resizer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-all">
        <span>✍️</span> Resize Signature
      </a>
    </div>
  </div>
</div>`;
}

// Helper to normalize contentHtml with anchors, rejection box, and tool CTAs
function normalizeContentHtml(html, examName, category) {
  let updated = html;

  // 1. Ensure id="overview" exists on first H2 if not already present
  if (!updated.includes('id="overview"') && !updated.includes("id='overview'")) {
    updated = updated.replace(/<h2([^>]*)>/, '<h2 id="overview"$1>');
  }

  // 2. Ensure id="exam-pattern" exists
  if (!updated.includes('id="exam-pattern"') && !updated.includes("id='exam-pattern'")) {
    const patternH2Match = updated.match(/<h2[^>]*>(?:[^<]*(?:Blueprint|Pattern|Selection|Stages|Syllabus|Breakdown|Comparison|Workflow|Navigation|Scrutiny)[^<]*)<\/h2>/i);
    if (patternH2Match) {
      updated = updated.replace(patternH2Match[0], patternH2Match[0].replace('<h2', '<h2 id="exam-pattern"'));
    } else {
      updated += `\n<h2 id="exam-pattern">${examName}: Examination Structure &amp; Selection Blueprint</h2>\n<p>Understanding the multi-tier selection stages, sectional weightages, and negative marking scheme ensures strategic preparation without risking disqualification.</p>`;
    }
  }

  // 3. Ensure id="document-specs" exists
  if (!updated.includes('id="document-specs"') && !updated.includes("id='document-specs'")) {
    const docsH2Match = updated.match(/<h2[^>]*>(?:[^<]*(?:Document|Upload|Photo|Signature|Verification|Compliance|Rules|Gateways|Traps)[^<]*)<\/h2>/i);
    if (docsH2Match) {
      updated = updated.replace(docsH2Match[0], docsH2Match[0].replace('<h2', '<h2 id="document-specs"'));
    } else {
      updated += `\n<h2 id="document-specs">${examName}: Official Document Upload Specifications</h2>\n<p>Strict compliance with portal dimensions, resolution, and file sizes is mandatory to clear preliminary automated portal verification.</p>`;
    }
  }

  // 4. Ensure id="strategy" exists
  if (!updated.includes('id="strategy"') && !updated.includes("id='strategy'")) {
    const stratH2Match = updated.match(/<h2[^>]*>(?:[^<]*(?:Strategy|Preparation|Study|Roadmap|Checklist|Routine|Tips|Timetable)[^<]*)<\/h2>/i);
    if (stratH2Match) {
      updated = updated.replace(stratH2Match[0], stratH2Match[0].replace('<h2', '<h2 id="strategy"'));
    } else {
      updated += `\n<h2 id="strategy">${examName}: High-Yield Preparation Strategy &amp; Daily Routine</h2>\n<p>Focus on high-weightage topics, daily revision schedules, and solving previous year question papers under strict exam timer conditions.</p>`;
    }
  }

  // 5. Ensure Rejection Box is present
  if (!updated.includes('Critical Application Rejection Traps') && !updated.includes('Rejection Traps to Avoid')) {
    // Insert after the document-specs section
    const docSpecsIdx = updated.indexOf('id="document-specs"');
    if (docSpecsIdx !== -1) {
      const nextH2AfterDocs = updated.indexOf('<h2', docSpecsIdx + 25);
      if (nextH2AfterDocs !== -1) {
        updated = updated.slice(0, nextH2AfterDocs) + createRejectionBox(examName) + '\n\n' + updated.slice(nextH2AfterDocs);
      } else {
        updated += createRejectionBox(examName);
      }
    } else {
      updated += createRejectionBox(examName);
    }
  }

  // 6. Ensure Tool CTAs linking to both /photo-resizer and /signature-resizer are present
  if (!updated.includes('/signature-resizer') || !updated.includes('/photo-resizer')) {
    updated += createToolCta(examName);
  }

  return updated;
}

// ─── 1. PROCESS ORIGINAL 7 POSTS ───
const processedPart1 = part1Cleaned.map(post => {
  const enrich = part1Enrichment[post.slug] || {};
  const examShort = post.title.split(':')[0].trim();
  const normalizedHtml = normalizeContentHtml(post.contentHtml, examShort, post.category);

  return {
    ...post,
    metaTitle: enrich.metaTitle || post.title.slice(0, 58),
    metaDescription: enrich.metaDescription || post.excerpt.slice(0, 155),
    quickFacts: enrich.quickFacts || [],
    faqs: enrich.faqs || [],
    contentHtml: normalizedHtml
  };
});

// ─── 2. PROCESS LIVE POSTS BATCH 1 (4 posts) ───
const metaBatch1 = {
  "rrb-ntpc-2026-top-10-faq-complete-guide": {
    metaTitle: "RRB NTPC 2026 FAQs: Photo Rules, CBT Cutoff & Pay Scale",
    metaDescription: "Official RRB NTPC 2026 FAQ guide: 35x45mm photo rules, CBT-1 & 2 exam pattern, Station Master cutoffs and medical standards. Resize documents online free!"
  },
  "ibps-po-2026-top-10-faq-banking-aspirants": {
    metaTitle: "IBPS PO 2026 FAQs: Handwritten Text, Thumb & Photo Rules",
    metaDescription: "Official IBPS PO 2026 FAQ guide: handwritten declaration text, left thumb impression specs, 140x60 sign rules & Prelims cutoffs. Resize documents online free!"
  },
  "sbi-clerk-2026-top-10-faq-junior-associates": {
    metaTitle: "SBI Clerk 2026 FAQs: State Vacancy, LPT & Photo Rules",
    metaDescription: "Official SBI Clerk 2026 guide: State vacancy rules, Language Proficiency Test (LPT), Prelims pattern & photo/sign guidelines. Resize documents online free!"
  }
};

const processedBatch1 = livePostsBatch1.map(post => {
  const customMeta = metaBatch1[post.slug] || {};
  const examShort = post.title.split(':')[0].trim();
  const normalizedHtml = normalizeContentHtml(post.contentHtml, examShort, post.category);

  return {
    ...post,
    metaTitle: customMeta.metaTitle || post.metaTitle,
    metaDescription: customMeta.metaDescription || post.metaDescription,
    contentHtml: normalizedHtml
  };
});

// ─── 3. PROCESS LIVE POSTS BATCH 2 SEO (3 posts) ───
const processedBatch2 = livePostsBatch2Seo.map(post => {
  const examShort = post.title.split(':')[0].trim();
  const normalizedHtml = normalizeContentHtml(post.contentHtml, examShort, post.category);

  return {
    ...post,
    contentHtml: normalizedHtml
  };
});

// ─── 4. PROCESS REMAINING ONGOING BATCH 1 (4 posts) ───
const processedRemaining1 = remainingOngoingBatch1.map(post => {
  const examShort = post.title.split(':')[0].trim();
  let metaDesc = post.metaDescription;
  if (post.slug === 'maharashtra-police-bharti-2026-top-10-faq-guide') {
    metaDesc = "Maharashtra Police Bharti 2026 guide: 50-mark physical test standards, 100-mark written exam, eligibility & top FAQs. Resize police documents online free!";
  }
  const normalizedHtml = normalizeContentHtml(post.contentHtml, examShort, post.category);

  return {
    ...post,
    metaDescription: metaDesc,
    contentHtml: normalizedHtml
  };
});

// ─── 5. PROCESS REMAINING ONGOING BATCH 2 (3 posts) ───
const processedRemaining2 = remainingOngoingBatch2.map(post => {
  const examShort = post.title.split(':')[0].trim();
  const normalizedHtml = normalizeContentHtml(post.contentHtml, examShort, post.category);

  return {
    ...post,
    contentHtml: normalizedHtml
  };
});

// Combine all 21 posts
const raw21Posts = [
  ...processedPart1,
  ...processedBatch1,
  ...processedBatch2,
  ...processedRemaining1,
  ...processedRemaining2
];

const titleOverrides = {
  "ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines": "IBPS PO & Clerk Document Guide: Photo, Sign, Thumb Rules",
  "upsc-cds-nda-2026-top-10-faq-defence-guide": "UPSC CDS, NDA 2026: Photo Rules, SSB & Eligibility FAQs",
  "uppsc-ro-aro-2026-top-10-faq-aspirants": "UPPSC RO/ARO 2026: O-Level, Typing, Prelims Pattern FAQs",
  "maharashtra-police-bharti-2026-top-10-faq-guide": "Maharashtra Police Bharti 2026: Physical Test, FAQ Guide",
  "rrb-alp-technician-2026-top-10-faq-guide": "RRB ALP, Tech 2026: Vision Rules, ITI & CBT Pattern FAQs",
  "rbi-grade-b-assistant-2026-top-10-faq-guide": "RBI Grade B 2026: 60% Rule, Phase-II Pattern, Salary FAQs"
};

const ALL_21_POSTS = raw21Posts.map(p => {
  const canIClear = canIClearFaqMap[p.slug];
  let faqs = p.faqs || [];
  if (canIClear && !faqs.some(f => f.question.toLowerCase().includes('can') && f.question.toLowerCase().includes('clear'))) {
    faqs = [...faqs, canIClear];
  }

  const pubDate = p.publishDate || "Sept 20, 2026";
  const updatedDate = p.lastUpdated || "Sept 20, 2026";
  const deployedTimestamp = `${updatedDate} • 09:00 AM IST`;

  return {
    ...p,
    metaTitle: titleOverrides[p.slug] || p.metaTitle,
    publishDate: pubDate,
    publishTime: "09:00 AM IST",
    lastUpdated: updatedDate,
    deployedAt: deployedTimestamp,
    faqs
  };
});

console.log(`\nSynthesizing ${ALL_21_POSTS.length} posts...`);

// Validate every post against SEO criteria
ALL_21_POSTS.forEach((p, idx) => {
  if (!p.slug) throw new Error(`Post ${idx} missing slug`);
  if (!p.metaTitle || p.metaTitle.length > 60) {
    console.warn(`[WARN] Post ${p.slug} metaTitle is ${p.metaTitle?.length} chars: "${p.metaTitle}"`);
    if (p.metaTitle && p.metaTitle.length > 60) {
      p.metaTitle = p.metaTitle.slice(0, 59).trim();
    }
  }
  if (!p.metaDescription || p.metaDescription.length > 160) {
    console.warn(`[WARN] Post ${p.slug} metaDescription is ${p.metaDescription?.length} chars: "${p.metaDescription}"`);
    if (p.metaDescription && p.metaDescription.length > 160) {
      p.metaDescription = p.metaDescription.slice(0, 159).trim();
    }
  }
  if (!p.quickFacts || p.quickFacts.length < 6) {
    console.warn(`[WARN] Post ${p.slug} has only ${p.quickFacts?.length || 0} quickFacts`);
  }
  if (!p.faqs || p.faqs.length < 10) {
    console.warn(`[WARN] Post ${p.slug} has only ${p.faqs?.length || 0} faqs`);
  }
  if (!p.contentHtml.includes('id="overview"') ||
      !p.contentHtml.includes('id="exam-pattern"') ||
      !p.contentHtml.includes('id="document-specs"') ||
      !p.contentHtml.includes('id="strategy"')) {
    console.warn(`[WARN] Post ${p.slug} is missing one or more TOC section IDs`);
  }
});

// Generate TypeScript Output
const tsHeader = `// src/data/blogPostsData.ts
// Comprehensive, SEO-optimized Govt Examination & Document Preparation Master Blog Repository

export interface QuickFact {
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
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  category: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity';
  publishDate: string;
  publishTime?: string;
  lastUpdated?: string;
  deployedAt?: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  relatedExamPreset?: string;
  quickFacts?: QuickFact[];
  faqs?: FAQItem[];
  contentHtml: string;
}

export const BLOG_POSTS: BlogPost[] = [
`;

function formatPostTs(p) {
  return `  {
    slug: ${JSON.stringify(p.slug)},
    title: ${JSON.stringify(p.title)},
    ${p.metaTitle ? `metaTitle: ${JSON.stringify(p.metaTitle)},` : ''}
    ${p.metaDescription ? `metaDescription: ${JSON.stringify(p.metaDescription)},` : ''}
    excerpt: ${JSON.stringify(p.excerpt)},
    category: ${JSON.stringify(p.category)},
    publishDate: ${JSON.stringify(p.publishDate)},
    publishTime: ${JSON.stringify(p.publishTime || "09:00 AM IST")},
    lastUpdated: ${JSON.stringify(p.lastUpdated || "Sept 20, 2026")},
    deployedAt: ${JSON.stringify(p.deployedAt || `${p.lastUpdated || p.publishDate} • 09:00 AM IST`)},
    author: ${JSON.stringify(p.author)},
    authorRole: ${JSON.stringify(p.authorRole)},
    readTime: ${JSON.stringify(p.readTime)},
    featured: ${p.featured ? 'true' : 'false'},
    tags: ${JSON.stringify(p.tags)},
    relatedExamPreset: ${p.relatedExamPreset ? JSON.stringify(p.relatedExamPreset) : 'undefined'},
    quickFacts: ${JSON.stringify(p.quickFacts || [], null, 4).replace(/^/gm, '    ').trim()},
    faqs: ${JSON.stringify(p.faqs || [], null, 4).replace(/^/gm, '    ').trim()},
    contentHtml: \`
${p.contentHtml.trim()}
    \`
  }`;
}

const fullTsContent = tsHeader + ALL_21_POSTS.map(formatPostTs).join(',\n\n') + '\n];\n';

const destination = path.resolve('src/data/blogPostsData.ts');
fs.writeFileSync(destination, fullTsContent, 'utf8');
console.log(`\nSuccessfully compiled all ${ALL_21_POSTS.length} posts to ${destination}`);
