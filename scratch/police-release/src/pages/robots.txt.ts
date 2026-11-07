import type { APIRoute } from 'astro';

const getRobotsTxt = (siteUrl: URL) => `
User-agent: *
Allow: /
Disallow: /cdn-cgi/l/email-protection
Disallow: /search-index.json

Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}
`.trim();

export const GET: APIRoute = ({ site }) => {
  return new Response(getRobotsTxt(site as URL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
