import type { APIRoute } from 'astro';

const getRobotsTxt = (siteUrl: URL) => `
User-agent: *
Allow: /
Disallow: /cdn-cgi/l/email-protection
Disallow: /search-index.json

# Explicit rules for AI Search Engines & Conversational Bots (Maximize Citations & Discoverability)
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Applebot-Extended
Allow: /

# Consistent AI Training Crawlers Policy
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${new URL('sitemap-index.xml', siteUrl).href}
Sitemap: ${new URL('sitemap.xml', siteUrl).href}
LLM-txt: ${new URL('llms.txt', siteUrl).href}
`.trim();

export const GET: APIRoute = ({ site }) => {
  return new Response(getRobotsTxt(site as URL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
