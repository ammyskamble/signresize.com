# IIT JAM review — 28 October 2026

Status: implemented locally, not deployed or committed.
Preview: http://localhost:4321/iit-jam-signature-resize/
Photo: http://localhost:4321/iit-jam-photo-resize/

## Evidence
Official JAM 2027 document requirements: https://www.jam.iitkgp.ac.in/doc-req.html
Fetched successfully and saved as official-document-requirements.html.

- Signature: JPG/JPEG 50–150 KB, white paper, black or dark-blue ink, horizontal signing box 7 cm wide × 2 cm high; no all-capital signatures or initials. Source asks for professional scanning and cropping to the box border.
- Source signature pixels are height-first: 80×280 minimum, 160×560 maximum. Our pages consistently display width-first, 280×80 to 560×160.
- Photo: recent colour JPG/JPEG 50–200 KB; white or very light background; face at least 50%; physical size 3.5×4.5 cm; pixel bounds 240×320 to 480×640.
- Physical photo ratio is 7:9 while the pixel-bound pairs are 3:4. The new 420×540 canvas follows 7:9 and remains within the bounds. It is explicitly a preparation choice, not an official exact-pixel mandate.
- OpenSEO tools remain unavailable. Existing keyword plan reused; no fresh ranking or search-volume claims.

## Changes
- Corrected photo minimum from 20 KB to 50 KB in effective data, titles, tool limits, FAQs and footer link.
- Aligned photo canvas dimensions and crop ratio. Signature remains at the published upper pixel bound.
- Added requirements table, dated official source and reciprocal photo/signature links above the tools.
- Suppressed obsolete duplicate JOAPS tables and unsupported padding/acceptance assurances.
- Source-scoped preset audits now distinguish local file checks from portal acceptance.
- JAM mode offers signature and photo switching, with matching quick presets. Generic certificate settings are not presented as verified JAM document rules.
- Fixed data merge order for focused pages: source-reviewed overrides now apply to them too. This was necessary for JAM's old introduction and FAQs to be replaced.
- Unreviewed JAM blog recommendations suppressed on these pages; prior exam fixes and unrelated user edits retained.

## Validation
- Synthetic sample exported on mobile viewport 390×844 through review dialog and final download.
- Signature JPEG independently reopened: 560×160 pixels, 51,200 bytes.
- Photo JPEG independently reopened: 420×540 pixels, 51,200 bytes.
- Tests cover 50 KB floors, respective upper limits, below/above-limit failures, canvas/crop ratio consistency, allowed pixel bounds, focused-page override application and no obsolete acceptance guarantee in page data.
- Both landing-page links verified in browser. Viewport reset and signature preview left open.
- Screenshots: preview.png and mobile-photo-export.png. Sample files and export-results.json retained.

Synthetic samples verify export mechanics only. They do not establish candidate eligibility, image authenticity or JOAPS acceptance. Production deployment remains pending user instruction.
