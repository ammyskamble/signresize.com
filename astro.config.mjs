// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import { BLOG_POSTS } from './src/data/blogPostsData.ts';

const hiSlugsWithContent = new Set(BLOG_POSTS.filter((p) => Boolean(p.contentHtml_hi)).map((p) => p.slug));
const mrSlugsWithContent = new Set(BLOG_POSTS.filter((p) => Boolean(p.contentHtml_mr)).map((p) => p.slug));
// Submit destinations to search engines, never redirect sources or error pages.
const redirectedPaths = new Set(readFileSync(new URL('./public/_redirects', import.meta.url), 'utf8')
  .split(/\r?\n/)
  .map(line => line.trim().split(/\s+/))
  .filter(([source, target, status]) => source?.startsWith('/') && !source.includes('*') && /^30[1278]$/.test(status)
    && source.replace(/\/$/, '') !== target.replace(/\/$/, ''))
  .map(([source]) => source.replace(/\/$/, '') || '/'));

// https://astro.build/config
export default defineConfig({
  site: 'https://signresize.in',
  trailingSlash: 'always',
  compressHTML: true,
  devToolbar: { enabled: false },

  redirects: {
    '/signature-resizer': '/',
    '/signature-creator': '/signature-generator/',
    '/bd/teletalk-photo-signature-resize': '/teletalk-photo-signature-resize/',
    '/rrb-railway': '/rrb-signature-resize/',
    '/ssc-general': '/ssc-signature-resize/',
    '/ibps-sbi': '/ibps-signature-resize/',
    '/appsc-tspsc': '/appsc-tspsc-signature-resize/',
    '/jobs': '/government-jobs/',
    '/govt-jobs': '/government-jobs/',
    '/ssc-cgl': '/ssc-cgl-signature-resize/',
    '/ssc': '/ssc-signature-resize/',
    '/upsc': '/upsc-signature-resize/',
    '/upsc-civil-services': '/upsc-signature-resize/',
    '/rrb': '/rrb-signature-resize/',
    '/ibps': '/ibps-signature-resize/',
    '/pan': '/pan-card-signature-resize/',
    '/neet': '/nta-neet-jee-signature-resize/',
    '/jee': '/nta-neet-jee-signature-resize/',
    '/gate': '/gate-signature-resize/',
    '/thumb': '/thumb-impression-resize/',
    // International Single-Canonical Presets
    '/prc-photo-signature-resize-philippines': '/ph/prc-photo-signature-resize-philippines/',
    '/lok-sewa-photo-resize-nepal': '/np/lok-sewa-photo-resize-nepal/',
    '/ppsc-signature-resize': '/pk/ppsc-signature-resize/',
    '/fpsc-photo-resize': '/pk/fpsc-photo-resizer/',
    '/pk/fpsc-photo-resize': '/pk/fpsc-photo-resizer/',
    // Blog Redirects & Hash Cleanup
    '/blog/rrb-ntpc-2026-top-10-faq-complete-guide': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-cen-06-2026-photo-signature-guidelines': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-exam-date-2026-city-intimation-slip-admit-card': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-syllabus-exam-pattern-cbt-1-cbt-2': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/ssc-cgl-2026-top-10-faq-aspirants-guide': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/blog/ssc-cgl-photo-and-signature-size-2026-guidelines': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/blog/india-post-gds-2026-top-10-faq-complete-guide': '/blog/india-post-gds-2026-bpm-abpm-merit-salary-photo-signature-rules/',
    '/hi/blog/rrb-ntpc-2026-top-10-faq-complete-guide': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-2026-top-10-faq-complete-guide': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-cen-06-2026-photo-signature-guidelines': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-cen-06-2026-photo-signature-guidelines': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-exam-date-2026-city-intimation-slip-admit-card': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-exam-date-2026-city-intimation-slip-admit-card': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-syllabus-exam-pattern-cbt-1-cbt-2': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-syllabus-exam-pattern-cbt-1-cbt-2': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/ssc-cgl-2026-top-10-faq-aspirants-guide': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/mr/blog/ssc-cgl-2026-top-10-faq-aspirants-guide': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/hi/blog/ssc-cgl-photo-and-signature-size-2026-guidelines': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/mr/blog/ssc-cgl-photo-and-signature-size-2026-guidelines': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/hi/blog/india-post-gds-2026-top-10-faq-complete-guide': '/blog/india-post-gds-2026-bpm-abpm-merit-salary-photo-signature-rules/',
    '/mr/blog/india-post-gds-2026-top-10-faq-complete-guide': '/blog/india-post-gds-2026-bpm-abpm-merit-salary-photo-signature-rules/',
    '/hi/blog/appsc-2026-master-guide-group-1-2-otr-photo-signature-rules': '/blog/',
    '/mr/blog/appsc-2026-master-guide-group-1-2-otr-photo-signature-rules': '/blog/',
    '/mr/blog/appsc-group-1-2-2026-master-guide-otpr-photo-signature-rules': '/mr/blog/',
    '/mr/blog/dsssb-tgt-pgt-prt-2026-master-guide-postcard-photo-signature-rules': '/mr/blog/',
    '/mr/blog/ppsc-online-apply-guide-photo-resizer-25kb-roll-no-slip-challan-2026': '/mr/blog/',
    '/blog/state-psc-otr-registration-photo-signature-guidelines-muqsg7l9': '/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/hi/blog/state-psc-otr-registration-photo-signature-guidelines-muqsg7l9': '/hi/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/mr/blog/state-psc-otr-registration-photo-signature-guidelines-muqsg7l9': '/mr/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/blog/state-psc-otr-registration-photo-signature-guidelines-mufa2ff3': '/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/hi/blog/state-psc-otr-registration-photo-signature-guidelines-mufa2ff3': '/hi/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/mr/blog/state-psc-otr-registration-photo-signature-guidelines-mufa2ff3': '/mr/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/blog/state-psc-otr-registration-photo-signature-guidelines-mucfcta1': '/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/hi/blog/state-psc-otr-registration-photo-signature-guidelines-mucfcta1': '/hi/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/mr/blog/state-psc-otr-registration-photo-signature-guidelines-mucfcta1': '/mr/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/blog/state-psc-otr-registration-photo-signature-guidelines-mul2uamk': '/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/hi/blog/state-psc-otr-registration-photo-signature-guidelines-mul2uamk': '/hi/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/mr/blog/state-psc-otr-registration-photo-signature-guidelines-mul2uamk': '/mr/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/blog/state-psc-otr-registration-photo-signature-guidelines-muxyprqk': '/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/hi/blog/state-psc-otr-registration-photo-signature-guidelines-muxyprqk': '/hi/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/mr/blog/state-psc-otr-registration-photo-signature-guidelines-muxyprqk': '/mr/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mub0xzde': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mub0xzde': '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mub0xzde': '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muduvfwu': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muduvfwu': '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muduvfwu': '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mutne4bd': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mutne4bd': '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mutne4bd': '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-munxeoxc': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-munxeoxc': '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-munxeoxc': '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mujm3shd': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mujm3shd': '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-mujm3shd': '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muwjkuc2': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muwjkuc2': '/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muwjkuc2': '/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mus6j1ip': '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/hi/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mus6j1ip': '/hi/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mus6j1ip': '/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mumi8zhv': '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/hi/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mumi8zhv': '/hi/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mumi8zhv': '/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mui58dj6': '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/hi/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mui58dj6': '/hi/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mui58dj6': '/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/blog/rrb-ntpc-2026-document-upload-rules-preparation-strategy': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/ssc-cgl-2026-notification-dates-signature-guidelines': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/blog/upsc-csat-paper-2-qualifying-speed-strategy-comprehension-hacks': '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/blog/state-psc-one-time-registration-otr-document-standards': '/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/blog/appsc-2026-master-guide-group-1-2-otr-photo-signature-rules': '/blog/',
    '/blog/ssc-chsl-tier-1-speed-typing-photo-signature-guidelines': '/blog/ssc-chsl-2026-top-10-faq-aspirants-guide/',
    '/blog/ssc-rrb-quantitative-aptitude-reasoning-speed-strategy': '/blog/',
    '/blog/mega-railway-banking-recruitment-2026-opportunities': '/government-jobs/'
  },

  build: {
    // The homepage's complete stylesheet is small enough to fit comfortably in
    // the document. Inline it to remove CSS requests from the LCP render path.
    inlineStylesheets: 'always',
  },

  vite: {
    define: {
      __SIGNRESIZE_RELEASE__: JSON.stringify(process.env.CF_PAGES_COMMIT_SHA || new Date().toISOString()),
    },
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime']
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime']
    },
    build: {
      cssMinify: true,
      minify: 'esbuild',
    }
  },

  integrations: [
    react(),
    sitemap({
      filter(page) {
        const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';
        // Exclude redirects, error pages, preview/admin pages, and legal/utility boilerplate from sitemap crawl budget
        if (
          redirectedPaths.has(pathname) ||
          [
            '/404', '/500', '/404.html', '/500.html',
            '/studio-preview', '/live-layout-preview', '/feedback-admin',
            '/about', '/privacy', '/terms', '/disclaimer', '/contact'
          ].includes(pathname)
        ) return false;

        // Exclude untranslated /hi/blog/ posts
        const hiMatch = page.match(/\/hi\/blog\/([^/]+)\/?$/);
        if (hiMatch) {
          return hiSlugsWithContent.has(hiMatch[1]);
        }
        // Exclude untranslated /mr/blog/ posts
        const mrMatch = page.match(/\/mr\/blog\/([^/]+)\/?$/);
        if (mrMatch) {
          return mrSlugsWithContent.has(mrMatch[1]);
        }
        return true;
      },
      serialize(item) {
        const url = item.url;
        const blogSlug = new URL(url).pathname.match(/\/(?:blog)\/([^/]+)\/$/)?.[1];
        const post = BLOG_POSTS.find(post => post.slug === blogSlug);
        const modified = post && new Date((post.lastUpdated || post.publishDate).replace(/Sept\b/i, 'Sep'));
        if (modified && !Number.isNaN(modified.getTime())) {
          item.lastmod = modified.toISOString().slice(0, 10);
        } else {
          // Omit fake static lastmod for tools and static pages.
          // Google trusts sitemaps that only provide authentic lastmod timestamps when content actually updates.
          delete item.lastmod;
        }

        // Do not set hardcoded priority and changefreq.
        // Googlebot explicitly ignores them, and uniform 1.0/daily across 200 pages signals low-quality automated sitemaps.
        delete item.priority;
        delete item.changefreq;

        return item;
      }
    })
  ]
});
