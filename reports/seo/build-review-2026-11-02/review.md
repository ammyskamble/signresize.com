# Local SEO build review — 2 November 2026

Status: built locally for review. No commit, push, deployment, cache-rule change, bulk noindex, or URL consolidation was performed.

## Changes

- Replaced the homepage's two lengthy general guidance components with a concise preparation guide; retained tools, directory, resource links and canonical/hreflang declarations.
- Rewrote general FAQs to distinguish pixels, physical dimensions and file size. Removed unsupported acceptance guarantees and old freshness/portal-testing claims from the author and changelog sections.
- Reworked the 10–20 KB page around that file-size task; removed its inaccurate universal 140×60 / 4×2 cm claims and exam matrix. The tool retains its existing 600×200 preparation preset and editable controls.
- Reworked the general photo page around custom sizes and current application instructions. Its explicit initial preset is now honestly labelled General Photo (413×531, 20–100 KB), with portal verification disabled; this is not an official passport specification.
- Shortened homepage, photo-page, signature-page and government-jobs metadata where edited.
- Extracted the existing crop illustrations into three small SVG image files with alt text, explicit dimensions and lazy loading. Used on the homepage, size-specific guide and existing exam pages.
- Removed stale SSC 140×60 labels in the shared footer.
- Flattened eight existing translated-blog redirect chains to their existing final destination. No content URLs were newly merged.

## Existing exam work reviewed

Effective data already includes the later WBPSC, BPSC, Coast Guard, IIT JAM and NTPC corrections, overriding older entries. Preserved those effective settings. JAM's official source was checked again: https://www.jam.iitkgp.ac.in/doc-req.html. This pass did not independently re-certify every other official notice.

## Validation

- Final `npm run build`: PASS, 266 pages.
- `node scripts/verify-exam-guidance.mjs`: PASS, 16 source-backed pages and page/preset consistency.
- `node scripts/verify-preparation-status.mjs`: PASS, file boundaries, dimensions and preparation status behavior.
- `node scripts/verify-indexing.mjs`: PASS, 256 sitemap URLs, 450 redirect rules and internal page links.
- Additional output checks: one H1 on eight reviewed pages, parsable JSON-LD, crop image assets present, removed claims absent on edited main pages, built redirect file matches source.
- `git diff --check`: PASS.
- Browser at 390×844: homepage, photo page and size-specific signature page have no document-width overflow (382px content width). Photo sample reached 413×531 px / 37,595 bytes (36.71 KB); signature sample reached 600×200 px / 16,986 bytes (16.59 KB). No browser errors observed on those two tool pages. This checked preview processing, not a downloaded/reopened file or real portal submission.

## Build size comparison

Local gzip estimates, not measured production transfer sizes or Core Web Vitals:

| Page | HTML before → after | Gzip before → after |
|---|---:|---:|
| Homepage | 441,313 → 371,021 bytes | 80,607 → 66,488 bytes |
| Photo resizer | 242,938 → 235,846 bytes | 41,452 → 40,129 bytes |
| 10–20 KB signature | 249,491 → 239,920 bytes | 43,792 → 41,784 bytes |

Homepage: approximately 16% less HTML and 18% less gzip payload. JavaScript execution and field Core Web Vitals were not measured. See sizes.json for the eight-page comparison.

## Limitations and follow-up

- OpenSEO unavailable; GSC Wizard subscription prevents current indexing/query data. No ranking or indexing improvement is claimed.
- Two legacy layout scripts are stale relative to existing code: verify-studio-layout requires three tabs where JAM deliberately offers two, and verify-home-workspace expects the old 10–20 KB homepage heading and more than 90 table rows. Their original files were preserved; they are not counted as passing checks.
- Daily publishing, vacancy freshness, other country pages and site-wide historic marketing claims need separate review. No publishing automation was changed.
- Review the local preview at http://localhost:4321/ and the two edited tool routes before deployment. Cloudflare Pages caching remains unchanged pending measured production evidence.

## Deployment — 2 November 2026

User approved deployment after requesting the site-wide back-to-top fix. Published to Cloudflare Pages project signresize, production branch main: https://04674c1a.signresize.pages.dev (custom domain https://signresize.in/).

Removed the homepage CSS that hid the up-arrow. Shared control now uses one click handler and one scroll action, respects reduced motion, is hidden at the top, updates after history restoration, and sits above the bottom safe area. Footer action uses the same handler. No canvas processing changes.

Final build: 266 pages. Scroll behavior, indexing, exam guidance and preparation-status checks pass. All 264 footer-bearing built pages have exactly one scroll-to-top button. Live homepage and both edited tool pages return 200 and serve the new button markup; live inline script verified. Browser refresh loaded the deployed content and the homepage button appeared after scrolling. Source remains locally modified; no git push was performed.
