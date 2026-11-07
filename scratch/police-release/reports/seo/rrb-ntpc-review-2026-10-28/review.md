# RRB NTPC review — 28 October 2026

Status: completed locally; not deployed or committed.
Preview: http://localhost:4321/rrb-ntpc-signature-resize/

## Verified sources
- Graduate CEN 06/2025, section 14.5.1, PDF page 22: https://rrbsecunderabad.gov.in/wp-content/uploads/2025/10/Final-CEN-06-2025-21-10-2025-Publish.pdf
- Undergraduate CEN 07/2025 FAQ, Q60 and Q73–74 (pages 12, 14–15): https://rrbsecunderabad.gov.in/wp-content/uploads/2025/10/FAQs-CEN_07_2025_NTPC-UG_Hindi_English.pdf
- Local source PDFs and page renders retained. Graduate page 22 and UG FAQ page 15 were visually inspected.
- Both specify signature JPG/JPEG 30–49 KB, black ink on white paper, running handwriting, minimum 140×60 pixels, scan resolution of at least 100 DPI and a 35×20 mm box. Photo capture happens live inside the RRB application.
- UG FAQ Q32 says certificate PDF below 400 KB; Q60 says up to 400 KB. The guide recommends staying below 400 KB and checking the current field.
- No 2026 NTPC CEN was independently verified. The site now clearly scopes the guidance to the verified 2025 references instead of combining several cycles.
- Chandigarh PDF download failed certificate hostname validation; it was not bypassed. Official Secunderabad PDFs were downloaded using the system trust store.
- OpenSEO tools unavailable; existing priority report reused. No new SEO metrics or ranking claims.

## Changes
- Updated effective NTPC preset, title, meta description, heading, requirements table, FAQs and checklist from 30–70 KB to 30–49 KB.
- New 280×160 preparation canvas exceeds both published pixel minimums and matches the 35:20 box proportions. Exact pixels and 200 DPI are tool choices, not claimed mandates or guarantees about the original scan.
- Source-scoped preset prevents old Railway-wide 10–50 KB and blue-ink audit guidance from appearing on NTPC.
- NTPC mode no longer offers a generic saved-photo workflow in place of live capture. Requirement links point to the live-camera practice page and UG document checklist.
- NTPC quick preset stays on NTPC rather than promoting the generic Railway preset. Corrected NTPC links in footer.
- Updated UG document guide: explicit 2025 source scope, signature link to NTPC tool, live capture, SC/ST free-travel PDF instructions; removed unverified 2026 dates/vacancies.
- Unreviewed NTPC blog recommendations are suppressed on this landing page. Existing unrelated content and prior WBPSC/BPSC/Coast Guard edits preserved.

## Verification
- Production build passed: 246 pages (build.log).
- verify-exam-guidance.mjs passed: 14 pages, effective page/preset consistency, source links, canonical, one H1, internal links and prior regressions.
- verify-preparation-status.mjs passed: NTPC 30/40/49 KB accepted by local checks; 29/50/70 KB rejected; wrong dimensions rejected; prior exam regressions pass.
- Mobile viewport 390×844: Try Sample, Auto-Fit, review dialog and final download completed. Saved JPEG independently reopened: 280×160 pixels, 30,720 bytes. See export-results.json and sample-signature.jpg.
- Synthetic sample verifies mechanics only, not handwriting authenticity or RRB acceptance.
- UG checklist link and return to signature tool verified in browser.
- Screenshots: mobile-export.png (download checks) and preview.png (final responsive preview). desktop-review.png captured a clipped embedded-browser viewport and is not the final review image.
- Viewport override reset, NTPC preview left open. git diff --check passed.
