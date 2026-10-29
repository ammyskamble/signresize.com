# Exam updates production deployment — 28 October 2026

Status: deployed successfully to signresize.in.
Cloudflare Pages project: signresize; production branch: main.
Deployment: https://4cb16dbb.signresize.pages.dev
Command: npm run deploy (existing project script; Wrangler 4.151.3).

Build succeeded: 246 pages. Cloudflare uploaded 253 changed files, reused 169 files, compiled the Worker and published the deployment.

Post-deploy verification: all 11 checked URLs returned HTTP 200. Titles match the local build, each has one H1 and the expected canonical URL, reviewed exam pages include their requirements section, and local generated script references match production. A deployed script asset also returned HTTP 200. Evidence: production-check.json and deploy.log.

Verified homepage, WBPSC signature/photo, BPSC overview and Hindi/English TRE pages, Coast Guard, NTPC signature/document guide, and JAM signature/photo.

All reviewed exam updates are now live, including previously pending BPSC, Coast Guard, NTPC and JAM changes. No Git commit or push performed. Existing uncommitted content in the reviewed workspace was included by the normal full-site build; no database migrations or configuration changes were made.
