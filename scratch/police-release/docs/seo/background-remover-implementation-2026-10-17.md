# Background remover implementation and evidence

Date: 17 October 2026. Status: implemented and verified locally; not deployed.

## Completed product and content work

| Entry point | Purpose and implementation |
| --- | --- |
| `/background-remover/` | Signature-first landing page; generated blue, faint and shadowed samples; paper/ink controls; transparent PNG and white/custom-colour JPG exports. |
| `/photo-background-remover/` | Separate portrait landing page with the existing local MediaPipe model; intended for people, not general product/background extraction. |
| `/make-signature-background-white/` | White-paper intent; working cleanup studio, lighting guidance, FAQs and onward links. Removed unsupported “100% Passed” and acceptance claims. |
| Relevant resizers | One-click local image transfer with mode, source dimensions and full-image crop retained. Starts with neutral filters, white JPEG output and custom settings. Users explicitly choose their dimensions/preset. |
| `/blog/handwritten-signature-transparent-png-pdf-word/` | Practical handwriting-to-PNG guide. Acknowledges Remove.bg's signature capability and does not claim universal quality superiority. |
| `/blog/resize-remove-bg-photo-kb/` | Practical next step for an exported Remove.bg photo: dimensions, white JPEG and actual byte checks. 20/50/100 KB are examples, not universal official requirements. |

Navigation, site search, sitemap generation and contextual links connect these routes. The generic blog template now supports a relevant tool CTA and practical FAQ labels for these two articles rather than claiming official-exam verification.

Changing preview backgrounds composites the same transparent cutout without rerunning extraction. Direct PNG/JPG downloads retain original dimensions. Local resizer handoffs accept PNGs up to 15 MB, use IndexedDB and an opaque URL-fragment token, expire logically after ten minutes, and delete the record when read. Abandoned expired records are pruned on a subsequent save; expiry is not a promise of immediate physical deletion while the site is closed.

Workflow analytics use fixed stages and image mode, with optional output format. They do not include image bytes, filenames or transfer IDs. The GA page-location configuration excludes fragments. Minimum KB controls now accept zero when the destination specifies only a maximum.

## Evidence used in the copy

| Finding | Evidence | Treatment |
| --- | --- | --- |
| Remove.bg offers signature removal | https://www.remove.bg/f/remove-signature-background and https://www.remove.bg/b/how-to-remove-background-from-signature/ | Explicitly acknowledged. Do not publish a blanket “Remove.bg breaks signatures” claim. |
| Remove.bg offers white portrait backgrounds | https://www.remove.bg/f/white-background-portrait | The article focuses on finishing dimensions and byte limits, not a claim that Remove.bg lacks white backgrounds. |
| Browser processing is feasible | Existing local workers and bundled model/runtime; https://github.com/imgly/background-removal-js | A product benefit, not an exclusive advantage or a claim of zero operating costs. |
| Official photo editing rules vary | https://travel.state.gov/en/passports/apply/help/photos.html and https://www.gov.uk/photos-for-passports/photo-requirements | New portrait guidance links to restrictions; white-background output does not certify acceptance. |
| A signature-white page has early search exposure | Connected GSC, 2026-09-17 to 2026-10-14: 27 impressions, 1 click, average position 8.59 | Preserve its URL and distinct intent; this is a small baseline, not a traffic forecast. |
| A narrow white-signature query has exposure | “make signature background white online”: 5 impressions, 0 clicks, average position 5.4 in that GSC window | Candidate intent, not proven high search volume. |
| Photo background evidence is sparse | “tnpsc photo white background change”: one impression on each of two query-page rows, no clicks | Do not sum these as unique searches or claim established demand. |

Raw baseline files: `signature-background-strategy-2026-10-17-data.json` and `photo-background-search-baseline-2026-10-17.json`. Earlier research analysis: `signature-background-strategy-2026-10-17.md`.

OpenSEO MCP access was unavailable. The available Ahrefs request returned an insufficient-plan error. Keyword volume, difficulty, competitor traffic, CPM and revenue forecasts remain unverified and are not presented as facts. No new GSC performance uplift can be measured before deployment.

## Verification

- Production build: **302 pages generated**, successful sitemap copy. Log: `reports/background-workflow-build-2026-10-17.log`.
- Indexing checks: **189 sitemap URLs and 160 redirect rules** pass the existing audit. Page generation includes routes deliberately omitted from the sitemap by the project's existing filters.
- Five background/content routes: unique titles, one H1 each, expected canonical URLs, sitemap and site-search inclusion, valid local links and parseable structured data pass.
- Existing paper-worker tests pass ink preservation, paper/shadow cleanup, transparency, unclear-paper handling and bounds cases.
- Existing portrait-worker tests pass compositing, soft mask edges, no-subject refusal, load failure and resource cleanup. These mocked-model checks are functional coverage, not an accuracy benchmark.
- Upload-validation checks pass exact byte boundaries, formats and active output dimensions.
- Real-browser IndexedDB checks pass mode-specific destinations, exact blob retention, read-and-delete, invalid/expired/future/malformed timestamps, empty/wrong-format/oversized transfers and concurrent consumption.
- Real signature browser flow: generated shadow sample → background removal → transparent PNG download → local resizer handoff → preset selection → export checks → JPEG download.
- Downloaded signature PNG verified at **900×360**, with corner alpha **0**. Downloaded preset JPEG verified at **140×60**, **10,240 bytes**, with opaque white corner RGB **255/255/255**. These checks establish file properties, not portal acceptance or competitor superiority.
- Real portrait browser flow: existing local test photo → actual model inference → transparent/white output → local photo resizer handoff. Source dimensions **820×1024** retained. The test image is not added to published assets or used as a testimonial.
- Custom photo settings verified in the browser: width **200 px** with aspect lock produced **200×250 px**; changing the minimum from 20 back to **0 KB** worked; a **50 KB** ceiling produced a ready preview measuring **18,250 bytes**.
- Responsive portrait page tested at a 390×844 viewport; document/client widths both **382 px**, without horizontal overflow. Screenshot: `reports/background-photo-mobile-2026-10-17.png`.
- TypeScript comparison with a temporary committed-source snapshot: **no new diagnostics**; 19 existing application diagnostics remain. The whole-repository command also encounters an existing syntax error in `scratch/part1_existing.ts`. This is not a claim that the repository-wide type check is clean.

Repeat automated checks after a build with `npm run verify:background` and `npm run verify:indexing`. For browser storage and built-site checks, run `node scripts/serve-background-checks.mjs`, use its printed local URL and visit `/__background-checks/`. The harness lives outside `dist`; it is not deployed. On this machine, sandbox-local listeners were unreachable by the browser; a hidden, loopback-only QA server outside the sandbox resolved it.

## Remaining scope and measurement

The broader 30–50-image comparison benchmark and comparison-led articles remain deferred until the same original inputs, output settings and review criteria are available. Generated sample illustrations and the single local portrait test do not establish a quality win over Remove.bg. Other articles in the six-week plan are future work, not published by this change.

Existing site-wide exam preset requirements and legacy photo-resizer editorial claims were not comprehensively re-audited in this change. The new pages and articles instruct readers to consult current destination rules; applying a preset does not certify those rules or acceptance.

After deployment, verify the five live routes and sitemap, then review GSC query/page impressions and clicks at 7/28/56 days. In analytics, compare `image_selected → processing_complete → download` and `handoff → resizer_open → resizer_export` by image mode. Events measure workflow activity; download clicks alone do not prove successful submission or satisfaction. Use observed queries and completion/failure patterns to choose the next articles and fixes.
