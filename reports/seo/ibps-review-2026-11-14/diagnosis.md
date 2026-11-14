# IBPS Signature Resizer — Diagnosis + Plan (2026-11-14)
**Page:** https://signresize.in/ibps-signature-resize/  
**Evidence:** page crawled 14 Nov; GSC 28-day export (12 Nov); live Google India (hl=en, gl=in, pws=0) 14 Nov ~19:20–19:53 IST; official spec from IBPS CRP PO/MT-XVI Detailed Notification (30 Jun 2026, Annexure III) as quoted by multiple independent checkers.

## Verdict in one line
The page's spec is officially correct and its schema is complete, but it is **not in the live top 20 for any head query** — this SERP is owned by combined photo+signature pages, and SignResize has no IBPS photo tool and no combined IBPS page at all.

## Live rankings (Google India, 14 Nov)
| Query | SignResize | #1 | AIO cites |
|---|---|---|---|
| ibps signature size | NOT top 20 | ExamMint /ibps (combined) | ExamMint + official IBPS guidelines PDF |
| ibps signature resize | NOT top 20 | ExamMint /ibps | ExamMint, SahiPhoto, PhotocopyWala, PixelAI |
| ibps signature resize online | NOT top 20 | ExamMint /ibps | ExamMint, SahiPhoto, FormPhotoEditor, PhotocopyWala, photoresizer.net |

- The lookalike **signatureresize.in ranks #9 / #6 / #9** on all three — via its combined `/ibps-photo-signature-resize/` page. SahiPhoto ranks via its `/Exams` hub; page 1 is ~100% tool pages; Q1 page 2 degenerates into junk (the tail is worthless — page 1 is the whole game).
- GSC mirage again: the export shows the page at average pos 9.55 and "ibps signature resizer" at 6.83 — those averages are built from long-tail variants; on the head terms the page is invisible. Judge by live checks + clicks, as established.

## GSC 28 days (12 Nov export)
- `/ibps-signature-resize/`: **139 imp, 9 clicks, 6.47% CTR, pos 9.55** (prev 3 clicks — growing). Healthy CTR: people who see it, click it.
- Queries: "ibps signature resizer" 54 imp @ 6.83; "ibps signature resize online" @ 4.57; **"ibps photo signature resizer" @ 10.25 and "ibps photo resizer" @ 48 — combined/photo demand landing on a site with no such page.**
- `/ibps-clerk-signature-resize/`: 3 imp @ pos 31 (prev 22 imp) — dying. Identical spec to PO (CSA-XVI uses the same numbers, verified separately by competitors against the Clerk notification).

## Spec verification — CORRECT ✅
Official CRP PO/MT-XVI (Annexure III, pp. 36–38):
- Signature: **140×60 px (preferred), 10–20 KB, JPG/JPEG, black ink on white paper, NOT IN CAPITAL LETTERS**
- Photo: **200×230 px, 20–50 KB, clean light/white background**
- Left thumb impression: **240×240 px @ 200 DPI, 20–50 KB**
- Handwritten declaration: **800×400 px @ 200 DPI, 50–100 KB**

The page states the signature spec exactly, incl. the capital-letters rule (×4) and black ink (×8). Meta honestly says "check the current notification".

## Page state (crawled 14 Nov)
- HTTP 200, in sitemap, 260 KB raw, 3,444 words, **0 images**, 1 table.
- Title (57 ch): "IBPS Signature Resizer – 10–20 KB, 140×60 px".
- Schema: FULL stack (WebApplication + HowTo + FAQPage + Offer + BreadcrumbList).
- Dates: published 2026-01-15, modified 2026-11-14T17:00 (today's template wave).
- Structure thin: only 2 substantive H2s (one catch-all "Preparation & Upload Standards").
- IBPS family in sitemap (8): signature, clerk-signature, thumb, declaration tools + 3 blogs (+ Hindi copy). **No /ibps-photo-resize/, no combined page.**

## Diagnosis
1. **Architecture, not content.** Every ranking page in this cluster is a combined photo+signature (or all-documents) page: ExamMint `/ibps`, signatureresize.in `/ibps-photo-signature-resize/`, sahiphoto `/Exams`. His split set (signature-only + clerk twin + separate thumb/declaration) fragments the same intent across 4 URLs, none of which covers the photo half of the query.
2. **Split-twin cannibalisation.** The clerk page targets the identical spec/intent and is decaying (pos 31); it dilutes the main page rather than adding coverage.
3. **Accuracy is present but not signalled.** A new competitor wave (Zynocode, PlayWithFiles, Palz, DDAverse) stamps "read from the official notification PDF — last verified [date]" on-page. His page has the right numbers and a "check the notification" hedge, but no visible verification date/source line.
4. **Zero images** on a visual task (sample signature, spec diagram) — the recurring gap.
5. **Timing is off-season:** PO applied 1–21 Jul 2026, Clerk followed in Aug; next CRP cycle ~Jun–Aug 2027. Nothing here is urgent; everything here is December-consolidation groundwork, judged at the 2027 window.

## Fix plan (December, with the ExamMint Phase-1 consolidation)
1. **Build /ibps-photo-signature-resize/** as the IBPS hub: photo tool (200×230 px, 20–50 KB) + signature tool (140×60, 10–20 KB) on one page, full spec table for all four uploads (photo/signature/thumb/declaration with the Annexure III numbers), HowTo + FAQPage + WebApplication schema, cross-links down to the thumb and declaration tools and the guidelines blog. Mirror of the WBPSC/RO/ARO combined pattern that is already live.
2. **Resolve the clerk twin:** 301 `/ibps-clerk-signature-resize/` → the combined page (same spec, dying anyway), or keep it only if it is re-aimed purely at Clerk-cycle content. Recommendation: redirect; one intent, one URL.
3. **Keep /ibps-signature-resize/ as the deep signature tool** (it earns clicks at 6.47% CTR) — link it from the hub; do not retitle.
4. **Add the trust signals:** visible "Specs verified against IBPS CRP PO/MT-XVI notification (Annexure III) — last checked [date]" line + 2–3 images (spec diagram, sample compliant signature, capital-letters right/wrong example — IBPS's signature rejection rule is visual).
5. **Refresh timing:** ship in December, re-verify specs against the CRP-XVII notifications when they drop (~Jun 2027), and judge on the July 2027 window — not on off-season movement. Baseline for the cluster: 25 Nov GSC export.
