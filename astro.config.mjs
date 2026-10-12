// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { BLOG_POSTS } from './src/data/blogPostsData.ts';

const hiSlugsWithContent = new Set(BLOG_POSTS.filter((p) => Boolean(p.contentHtml_hi)).map((p) => p.slug));
const mrSlugsWithContent = new Set(BLOG_POSTS.filter((p) => Boolean(p.contentHtml_mr)).map((p) => p.slug));

// https://astro.build/config
export default defineConfig({
  site: 'https://signresize.in',
  trailingSlash: 'always',

  redirects: {
    '/signature-resizer': '/',
    '/signature-creator': '/signature-generator/',
    '/rrb-railway': '/rrb-signature-resize/',
    '/ssc-general': '/ssc-signature-resize/',
    '/ibps-sbi': '/ibps-signature-resize/',
    '/appsc-tspsc': '/appsc-tspsc-signature-resize/',
    '/jobs': '/government-jobs/',
    '/govt-jobs': '/government-jobs/',
    '/ssc-cgl': '/ssc-signature-resize/',
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
    '/fpsc-photo-resize': '/pk/fpsc-photo-resize/',
    // Blog Redirects & Hash Cleanup
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
    '/blog/ssc-chsl-tier-1-speed-typing-photo-signature-guidelines': '/blog/ssc-chsl-2026-top-10-faq-aspirants-guide/',
    '/blog/ssc-rrb-quantitative-aptitude-reasoning-speed-strategy': '/blog/',
    '/blog/mega-railway-banking-recruitment-2026-opportunities': '/government-jobs/'
  },

  build: {
    inlineStylesheets: 'auto',
  },

  vite: {
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
        item.lastmod = new Date().toISOString();

        if (url === 'https://signresize.in/' || url.includes('/photo-resizer') || url.includes('/document-resizer') || url.includes('/compress-image-to-kb') || url.includes('/signature-generator') || url.includes('/government-jobs') || url.includes('/resize-signature-to-10kb-20kb') || url.includes('/make-signature-background-white')) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('-signature-resize') || url.includes('-photo-resize') || url.includes('-photo-resizer') || url.match(/https:\/\/signresize\.in\/[a-z]{2}\/$/)) {
          item.priority = 0.95;
          item.changefreq = 'daily';
        } else if (url.includes('/blog/')) {
          item.priority = 0.85;
          item.changefreq = 'daily';
        } else {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }

        return item;
      }
    })
  ]
});
