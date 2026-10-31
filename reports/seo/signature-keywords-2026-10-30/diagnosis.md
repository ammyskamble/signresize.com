# Signature resize and sign resize: diagnosis

Reviewed 30 October 2026 (IST). No website changes or deployment.

**Title recommendation corrected after history review:** Keep the current title for now. It was introduced in source on 25 October, whereas this export ends 26 October; 26 of its 28 dates precede that commit. Deployment and Google processing dates are unknown. The proposed replacement below is an untested future option, not an immediate action. See [the in-depth title recheck](title-recheck.md), which supersedes that part of this report.

**Additional competitor evidence:** A later browser inspection successfully loaded Ahrefs' public traffic and backlink reports for Pi7 and SignResize. See [Pi7 comparison](pi7-competitor-analysis.md). Its measured backlink evidence supersedes the earlier access limitation below; live GSC remains unavailable.

## Finding

The saved Google Search Console export confirms different problems for the two queries. “sign resize” already received search visibility at an average position of 6.61. “signature resize” had weak visibility at an average position of 63.96. The available evidence cannot isolate the cause of that gap.

Source: ../keyword-focus-2026-10-28/Queries.csv. Chart.csv establishes 29 September–26 October 2026; Filters.csv specifies Web search, last 28 days, with no country/device filter recorded.

| Exact query | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| sign resize | 2 | 105 | 1.9% | 6.61 |
| signature resize | 1 | 23 | 4.35% | 63.96 |
| resize signature | 0 | 11 | 0% | 57.64 |
| signature resizer | 0 | 3 | 0% | 47.67 |

These are historical averages across recorded impressions, not today's fixed positions or India-only rankings. Samples are small. In particular, two clicks do not establish an abnormal CTR or a defective snippet. The export contains separate query and page tables, so it cannot identify the URL ranking for either query, split each query by device/country, or demonstrate competing pages.

## Confirmed issues and plausible explanations

1. **Inconsistent instructions are a confirmed editorial defect.** The live homepage tool shows SSC CGL at 600×200 pixels and Any Ink; the FAQ says 140×60 and black ink. Its approximate equivalence between 140×60 pixels and 4×2 cm also conflicts in aspect ratio. Resolve the current official rule, explain optional preparation defaults, and update all shared displays together. This audit does not determine which exam rule is correct.
2. **Trust claims need correction.** The live author section promises first-attempt acceptance, claims monthly specification reviews, and names a February 2026 revision. Remove guarantees that the tool cannot substantiate; publish dated reviews only when performed. The effect on rankings is unknown.
3. **The broad homepage is a relevance and usability hypothesis.** Its title combines signatures and photos; international photo rules, document tools and study guidance occupy substantial content, and an application calendar precedes upload. Test a clearer signature-first page with upload immediately after the introduction. A broad page is not inherently a ranking violation, and no penalty is demonstrated.
4. **The generic query faces dedicated alternatives.** Public search surfaced signatureresizerr.com and signatureresize.com. The former's live page presents signature editing, exam selection and upload early. These observations support testing task clarity; they do not measure Google India order, authority, backlinks or competitor traffic.
5. **The site already has search traction for specific tasks.** In the same Pages.csv export, the homepage had 61 clicks, 1,542 impressions and average position 10.44; the Coast Guard page had 394 clicks and average position 4.97; WBPSC had 119 clicks and average position 5.23. These are all-query page totals, not the target queries' results. They argue against assuming complete site invisibility, but do not prove today's homepage indexing state.

## One action this week

Improve the existing homepage as the trustworthy general signature resizing destination, starting with consistent instructions. Then test a shorter signature-focused title, for example **Signature Resize Online in KB & Pixels | SignResize**, with an immediate upload area and a short explanation of KB versus pixel sizing. Keep detailed photo, document and study content on its relevant pages, linked concisely from the homepage. Record the change date.

Keep the current homepage URL and useful exam/size pages. Do not create separate near-identical pages for “sign resize” and “signature resize” or merge existing pages without query-to-page evidence. Exact keyword order alone is not a demonstrated ranking problem. Adding meta keywords will not improve Google rankings.

## Measurement needed to settle the cause

In Google Search Console directly, open Performance → Search results → Web. Set a 28-day window ending on the latest settled day and compare the preceding 28 days. Filter Query → Exact query for each term separately. Inspect Pages, Countries and Devices, then apply India and compare mobile/desktop. Export each query's Pages and daily results. Use URL Inspection on the homepage to confirm its indexing state and Google's selected canonical (preferred URL).

This will distinguish weak rankings from low exposure, device/market differences, or different landing pages. Assess title/CTR changes only with enough impressions. Investigate relevant referring links when backlink data becomes available; weak authority is currently an untested explanation. No ranking guarantee or recovery deadline is justified.

## Sources and limitations

- First-party saved export: `reports/seo/keyword-focus-2026-10-28/{Queries,Pages,Chart,Filters,Countries,Devices}.csv`.
- Live homepage and public search checked 30 October: https://signresize.in/ ; https://signatureresizerr.com/ ; https://www.signatureresize.com/ . Public search results are not a Google India rank tracker.
- Source inspection: src/pages/index.astro (title, H1, section order, index/follow, self-declared canonical); src/pages/robots.txt.ts (allows crawling); shared FAQ, SEO content and author components.
- The 28 October report had found HTTP 200, permissive robots and a self-declared canonical. Today's direct shell requests failed with fetch errors, and the web tool could not retrieve robots/sitemap/alias URLs. Do not infer an outage or repeat the older HTTP findings as fresh checks. Today's homepage content was retrievable through the web tool. Current Google-selected canonical remains unknown.
- OpenSEO tools unavailable. GSC Wizard returned subscription_required; live access requires an active plan/trial and connected Google account, or use Search Console directly. Ahrefs returned Insufficient plan. No current backlink comparison, keyword search volume/difficulty, exact-query live comparison or Core Web Vitals measurement is available.
- Earlier reports were reused as context; all numbers above were checked against the saved CSVs, and the cited editorial issues were rechecked on the live homepage. The earlier diagnosis's lack of query evidence is superseded by the saved export located during this review.
- Google guidance: https://developers.google.com/search/docs/fundamentals/creating-helpful-content ; https://developers.google.com/search/docs/appearance/title-link ; https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag .
- An independent review checked the interpretation, sample sizes, causal claims and recommended scope.
