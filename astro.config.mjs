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
    '/rrb': '/rrb-signature-resize/',
    '/ibps': '/ibps-signature-resize/',
    '/pan': '/pan-card-signature-resize/',
    '/neet': '/nta-neet-jee-signature-resize/',
    '/jee': '/nta-neet-jee-signature-resize/',
    '/gate': '/gate-signature-resize/'
  },

  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
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
