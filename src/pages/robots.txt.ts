import type { APIRoute } from 'astro';

const getRobotsTxt = (siteUrl: URL) => `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}
Sitemap: ${new URL('sitemap.xml', siteUrl).href}
`.trim();

export const GET: APIRoute = ({ site }) => {
  return new Response(getRobotsTxt(site as URL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
