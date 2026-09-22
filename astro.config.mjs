// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://signresize.in',
  trailingSlash: 'always',

  redirects: {
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
    '/blog/rrb-ntpc-2026-document-upload-rules-preparation-strategy': '/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
    '/blog/ssc-cgl-2026-notification-dates-signature-guidelines': '/blog/ssc-cgl-2026-master-application-preparation-guide/',
    '/blog/upsc-csat-paper-2-qualifying-speed-strategy-comprehension-hacks': '/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
    '/blog/state-psc-one-time-registration-otr-document-standards': '/blog/state-psc-otr-registration-photo-signature-guidelines/',
    '/blog/ssc-chsl-tier-1-speed-typing-photo-signature-guidelines': '/blog/ssc-chsl-2026-top-10-faq-aspirants-guide/',
    '/blog/ssc-rrb-quantitative-aptitude-reasoning-speed-strategy': '/blog/',
    '/blog/mega-railway-banking-recruitment-2026-opportunities': '/government-jobs/',
    '/blog/how-to-change-signature-in-outlook': '/blog/how-to-change-signature-in-outlook/',
  },


  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
    }
  },

  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const url = item.url;
        item.lastmod = new Date().toISOString();

        if (url === 'https://signresize.in/' || url.includes('/photo-resizer') || url.includes('/document-resizer') || url.includes('/compress-image-to-kb') || url.includes('/signature-creator') || url.includes('/government-jobs')) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('-signature-resize') || url.includes('-photo-resize')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (url.includes('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      }
    })
  ]
});
