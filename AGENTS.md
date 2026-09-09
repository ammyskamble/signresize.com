## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)

## Daily Content Publishing Agent (9:00 AM)

A recurring cron agent is scheduled to run every day at **9:00 AM** (`0 9 * * *`) to research, draft, and publish new articles for **"Latest Articles & Daily Preparation"**:

- **Target Data Source:** [`src/data/blogPostsData.ts`](file:///d:/Testing/sign%20resize/signresize.in/src/data/blogPostsData.ts)
- **Agent Skill & Protocol:** [`.agents/skills/daily-article-agent/SKILL.md`](file:///d:/Testing/sign%20resize/signresize.in/.agents/skills/daily-article-agent/SKILL.md)
- **Status & Helper Tool:** `npm run daily-article` (or `node scripts/publish-daily-article.mjs --status`)
- **Validation:** Every published article is verified with `npx astro build` to ensure all dynamic routes and sitemaps compile with 0 errors.

