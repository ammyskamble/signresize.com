---
name: daily-article-agent
description: Automated daily workflow to curate, generate, format, and publish new articles for 'Latest Articles & Daily Preparation' on SignResize.in every day at 9:00 AM.
---

# Daily Article & Preparation Publisher Agent

This agent executes daily at 9:00 AM to research, draft, format, and publish fresh exam preparation guides and latest notification alerts for **SignResize.in**.

## Publishing Target

- **Destination File:** `src/data/blogPostsData.ts`
- **Output Page:** `/blog/` ("Latest Articles & Daily Preparation" section) and individual dynamic routes `/blog/[slug]/`

---

## Daily Workflow Sequence

1. **Date & Context Identification:**
   - Detect current date (format: `MMM DD, YYYY`, e.g., `Sept 10, 2026`).
   - Identify active/upcoming competitive exams (SSC CGL/CHSL/MTS, UPSC CSE/CDS/NDA, RRB NTPC/ALP, IBPS PO/Clerk, State PSCs, Teaching/Defense).

2. **Topic Selection (Rotate Daily across 4 Core Categories):**
   - **Exam Alerts:** New official notification releases, vacancy breakdowns, revised timeline alerts, and document upload rule changes.
   - **Study Prep:** Daily study schedules, subject-wise scoring blueprints (Quantitative Aptitude, General Intelligence, Current Affairs, CSAT), revision roadmaps, and PYQ analysis.
   - **Guidelines & Tips:** Common document rejection traps, signature/photo dimension matching in CM/pixels, 10-20KB dual boundary compression guides, and pen/ink compliance.
   - **Career Opportunity:** High-vacancy government recruitment analyses, salary structures, eligibility criteria, and selection stages.

3. **Article Data Model (`BlogPost`):**
   ```typescript
   export interface BlogPost {
     slug: string;             // Unique, lowercase, hyphenated slug (e.g., 'rrb-ntpc-2026-maths-preparation-strategy')
     title: string;            // Engaging, SEO-rich title
     excerpt: string;          // 2-3 sentence summary for card preview
     category: 'Exam Alerts' | 'Study Prep' | 'Guidelines & Tips' | 'Career Opportunity';
     publishDate: string;      // 'MMM DD, YYYY'
     author: string;           // e.g. 'SignResize Examination Standards Desk' or 'SignResize Academic Research Desk'
     authorRole: string;       // e.g. 'Official Document Compliance Team' or 'Competitive Exam Methodology Team'
     readTime: string;         // e.g. '5 min read'
     tags: string[];           // 3-5 relevant keywords
     featured?: boolean;       // Set true if breaking news, false for regular daily posts
     relatedExamPreset?: string;// Optional preset ID from examPresets (e.g. 'ssc-general', 'rrb-railway', 'upsc-civil-services')
     contentHtml: string;      // Semantic HTML with <h2>, <h3>, <p>, <ul>, <ol>, and action callout boxes
   }
   ```

4. **Internal Linking & Call-to-Action Standards:**
   - Every article must provide seamless utility links to relevant SignResize tools:
     - Signature Resizer: `/ssc-signature-resize/`, `/upsc-signature-resize/`, `/rrb-signature-resize/`, or `/#tool-workspace`
     - Photo Resizer: `/photo-resizer/`
     - KB Compressor: `/compress-image-to-kb/`
     - Document Resizer: `/document-resizer/`
   - Include a themed action card styled with Tailwind:
     ```html
     <div class="my-6 p-5 rounded-2xl bg-gradient-to-r from-card to-primary/10 border-2 border-primary/30">
       <h4 class="text-base font-bold text-foreground">Prepare Your Documents Instantly</h4>
       <p class="text-sm text-muted-foreground mt-1">Resize and compress your photo and signature to exact official portal specifications in seconds.</p>
       <a href="/photo-resizer/" class="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-95 transition">
         Open Resizer Tool &rarr;
       </a>
     </div>
     ```

5. **Quality & Validation Steps:**
   - Ensure the slug is completely unique (not already in `BLOG_POSTS`).
   - Run `npx astro build` to confirm zero compilation or TypeScript errors across all dynamic routes.
   - Summarize the newly added article with its title, category, slug, and word count.
