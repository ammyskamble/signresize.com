# WBPSC review — local changes for verification

Reviewed 28 October 2026. Preview: http://localhost:4321/wbpsc-signature-resize/

## Changes

- Updated WBPSC signature and photo titles, descriptions, FAQs and checklists. Kept existing URLs and self canonicals.
- Added the exact Clerkship Examination 2024 advertisement (12/2024) and official registration entry point, with a review date.
- Labelled signature 140 × 60 px / 10–20 KB and photo 138 × 177 px / 20–100 KB as editable preparation defaults. These remain unconfirmed as requirements in the reviewed public notice.
- Removed the false 140 × 60 px = 4 × 2 cm claim. At 200 DPI those pixels correspond to approximately 1.78 × 0.76 cm. Removed unsupported physical-size fields from the WBPSC presets.
- Replaced conflicting black-only / blue-allowed claims with instructions to follow the active application.
- Removed prominent legacy signature-variant and certificate shortcuts. The remaining legacy document preset explicitly warns that a JPG does not meet the notice's category-certificate PDF requirement.
- Corrected the successful-export message for presets marked unverified: a preset check no longer claims official approval. Added a regression check for valid and wrong-dimension exports.
- Removed the unrelated 48–72-hour badge from the WBPSC post-download guidance.

## Official evidence and limits

[Clerkship advertisement](https://psc.wb.gov.in/Download?param1=CLERKSHIP2024.pdf&param2=advertisement): public PDF does not state signature/photo pixel, KB or ink requirements. Its category-certificate PDF limit is a separate requirement and must not be treated as an image limit.

[Registration entry point](https://psc.wb.gov.in/candidateOTRegistration.jsp): opened successfully in the browser. The public registration screen contains account fields, not image-upload specifications. No account was registered or submitted. Active application image limits therefore remain unconfirmed.

This is a correction of unsupported claims, not confirmation of new WBPSC upload limits. Separate WBPSC blog articles were not re-researched in this change.

## Verification

- Production build: 246 pages, passed.
- Existing exam-guidance check: passed for all 9 guided pages, including both WBPSC pages, internal links, source references, canonicals and page/preset consistency.
- Preparation-status regression: passed for WBPSC signature, photo and legacy presets. Wrong dimensions cannot show a preset pass.
- Mobile browser at 390 × 844: sample loaded, auto-fit crop, output preview and final JPG download completed. No horizontal document overflow (382 px document width at 390 px viewport).
- Saved JPG reopened successfully: JPEG, 140 × 60 px, 10,240 bytes. Visual inspection shows the sample signature; it is test data, not for an application.
- Saved screenshots: mobile-preview.png and review-preview.png. Browser viewport restored to its normal size; preview tab kept open.

Changes are local and have not been deployed. Existing unrelated user edits were preserved.
