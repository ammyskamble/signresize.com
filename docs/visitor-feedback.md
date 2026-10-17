# Visitor feedback

Feedback is stored in the `signresize-feedback` Cloudflare D1 database. The existing static Astro site is served by Pages; only `/api/*` invokes Pages Functions. Images, original filenames and document contents are never attached to feedback.

## Visitor flow

The shared resizer (single, batch and PDF), image compressor, background remover, signature creator and print-sheet tools show a satisfaction card after download. A rating click opens the optional follow-up form and immediately creates a record. Further ratings or submitted comments update that same record using a random per-record editing token; retrying a request does not create duplicate records. Editing expires after 24 hours. Session storage only suppresses repeated prompts; it is not the feedback database.

The side tab on desktop, mobile menu, footer, contextual links and contact form also accept feedback. Draft comments and emails are sent only on explicit submission. There is no automatic email delivery; the administrator reviews messages in the inbox and can reply separately when a visitor provides an address.

## Administrator

Open `https://signresize.in/feedback-admin/`. The generated password is in the Git-ignored `scratch/feedback-admin-access.txt` file. The password and signing key are Cloudflare secrets, not frontend environment variables. The dashboard page contains no records until the protected API authenticates the visitor. Sessions use a signed, HttpOnly, SameSite=Strict cookie, expire after 12 hours, and use Secure on HTTPS. Sign out on shared devices.

Filter by date, tool, rating, device, feedback type, status and website version. Search messages, categories, paths or exact record IDs. Add private review notes and move reports through New, Investigating and Fixed. Daily response totals help show trends. Positive percentage uses rated responses as its denominator. Anonymous ratings are self-selected feedback, not a representative sample of every visitor.

CSV exports use the selected filters and include at most 5,000 records; narrow the date range for larger exports. Formula-like text is escaped for spreadsheet safety. Export files may contain voluntary contact information, so keep them private. Cloudflare D1 also provides database export/recovery tools; keep a separate backup before making manual data changes.

## Configuration and local testing

The tracked `wrangler.toml` contains the production D1 binding. Preview deployments deliberately have no production database binding. Local Pages development uses local D1 storage, never production, unless explicitly requested with a remote command.

1. Run `node scripts/configure-feedback-access.mjs` once to prepare ignored local credentials.
2. Run `npx wrangler d1 migrations apply signresize-feedback --local`.
3. Run `npm run build`.
4. Run `npx wrangler pages dev dist --port 8788` and use the printed URL for the full stack. Astro dev alone does not run Pages Functions.

`npm run check:feedback` checks frontend and backend types. `npm run verify:feedback` runs API, authentication, validation, persistence and CSV tests in an isolated workerd/D1 instance. The test runner uses the installed Miniflare compatibility adapter. No verification records are written to production by these tests.

To provision a new deployment, apply the migrations with `npx wrangler d1 migrations apply signresize-feedback --remote`, upload `.dev.vars` with `npx wrangler pages secret bulk .dev.vars --project-name signresize`, then run `npm run deploy`. Secrets stay out of command arguments, source, build output and logs. To rotate credentials, edit the ignored `.dev.vars` values, upload them again, and rerun the access-file helper. Rotate `FEEDBACK_SECRET` to invalidate all existing administrator sessions. Do not overwrite production secrets from CI with local test values.

Request bodies are bounded to 8 KB and validated. Mutating APIs require same-origin JSON requests. Creation, editing and login attempts have database-backed rate limits using a daily keyed IP digest; raw IPs are not stored in feedback. Old rate-limit rows are pruned on subsequent traffic. For sustained hostile traffic, add an edge rule or Turnstile based on observed abuse.

Review recurring issues weekly, record which release addresses them, and compare later ratings using the version filter. Build versions come from `CF_PAGES_COMMIT_SHA` when present, otherwise the build timestamp.
