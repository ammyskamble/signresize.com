# Coast Guard page review — 28 October 2026

Status: implemented locally, not deployed.
Preview: http://localhost:4321/indian-coast-guard-signature-resize/

## Evidence
- Portal: https://cgept.parikshasaarthi.in/
- Portal-linked document pack: https://cgept.parikshasaarthi.in/formats/CGEPT_Formats.zip
- Guidelines_ICG.pdf: page 1 identifies CGEPT 01/2027 and 02/2027; page 5 item 26 specifies identity proof JPG/JPEG 50–150 KB; page 15 specifies signature/photo base names; page 16 items 47.1–47.3 specify signature/photo JPG/JPEG 10–100 KB and separate live capture. Pages 15–16 rendered and visually inspected; originals and text retained here.
- Advertisement: https://cgept.parikshasaarthi.in/docs/CGEPT012027_Adv_Bilingual.pdf. Sections 5.1 and 7.5 describe live capture, uploaded photo/signature, original document scans, clarity and complete pages. Thumb biometrics at Stage I are distinct from an upload file.
- The reviewed upload sections do not establish exact pixels, DPI, centimeter dimensions, signature ink colour, or a slate requirement. No claim is made that these rules apply to every recruitment cycle.
- Public government homepage requests timed out. Evidence used is the recruitment portal's linked documents, not competitor summaries. No applicant login or submission was attempted.

## Changes
- Corrected signature/photo range from 10–50 KB to 10–100 KB, including effective presets, page title, metadata, H1, FAQs and mode hints.
- Labelled pixel dimensions as editable preparation canvases; removed incorrect centimeter equivalences and acceptance claims.
- Added source table before tool, dated review, correct filenames and separate live-photo instructions.
- Removed prominent thumb-upload step. Legacy thumb presets remain labelled unconfirmed for 2027 and are not popular presets.
- Removed automatic slate requirement from both audit and final download dialog. A physical slate now requires an explicit preset flag, false for these presets.
- Changed document mode default to identity proof, with 50–150 KB and field-specific caveats. Applied shared guidance updates to document presets too.
- Suppressed unreviewed Coast Guard blog recommendations on this page.
- Clarified shared name/date overlay helper to follow the active application, removing its unsupported blanket exam list.

## Validation
- Production build: 246 pages, successful; see build.log.
- verify-exam-guidance.mjs: 13 guided pages pass consistency, canonical, H1, source links and internal links.
- verify-preparation-status.mjs: passes WBPSC/BPSC regression checks, Coast Guard 60 KB acceptance and 101 KB rejection, and enabled final export without slate confirmation.
- Mobile browser at 390×844: signature, photo and document mode switches verified; signature and photo downloads completed.
- Signature.jpg: JPEG, 140×60 px, 10,240 bytes.
- Passport_Photograph.jpg: JPEG, 350×450 px, 16,286 bytes.
- Test downloads use the built-in synthetic sample, not a candidate identity photo. They verify export mechanics, not application acceptance.
- Screenshots: mobile-tool.png and desktop-review.png. Temporary viewport reset; preview left open.

Existing WBPSC/BPSC work and unrelated user edits were preserved. No deployment or commit performed.
