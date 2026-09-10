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

## Daily Content Publishing Agent (9:00 AM IST)

A dual-tier automated publishing pipeline publishes fresh articles daily at **9:00 AM IST** for **"Latest Articles & Daily Preparation"**:

- **Unattended Cloud Runner:** GitHub Actions workflow [`.github/workflows/daily-publish.yml`](file:///d:/Testing/sign%20resize/signresize.in/.github/workflows/daily-publish.yml) triggers automatically at 03:30 UTC (9:00 AM IST). It compiles, checks existing dates, generates new guides (via Gemini API or rich editorial curriculum pool), verifies with `astro build`, and commits to `main` with live Cloudflare deployment.
- **Local Generation Script:** `npm run generate-article` (or `node scripts/generate-daily-article.mjs`)
- **Status Check:** `npm run daily-article`
- **Target Data Source:** [`src/data/blogPostsData.ts`](file:///d:/Testing/sign%20resize/signresize.in/src/data/blogPostsData.ts)
- **Agent Skill & Protocol:** [`.agents/skills/daily-article-agent/SKILL.md`](file:///d:/Testing/sign%20resize/signresize.in/.agents/skills/daily-article-agent/SKILL.md)


