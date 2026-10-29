# BPSC review — local preview

Date: 28 October 2026

Preview: http://localhost:4321/bpsc-signature-resize/

## Changes

- Updated the existing BPSC overview and TRE Hindi/English pages; retained their URLs and self canonicals.
- Added a CCE/TRE selection guide, separate language links and a link to webcam-framing practice with an explicit statement that it cannot replace BPSC live capture.
- Removed the unsupported universal 220 × 100 px claim, 10–25 KB limit, centimeter equivalence and acceptance guarantees from the effective page/preset data.
- Added the portal manual with page references and review date. The advertisement-specific limits remain unverified, clearly stated on all three pages.
- Selected 280 × 180 px as an editable landscape preparation canvas, not an official universal size. Both language tools use 1–19 KB: the 1 KB floor is a processing choice; the 19 KB ceiling stays below 20 KB under decimal or binary KB conventions. A recruitment-specific cap may be lower.
- Added BPSC presets to the tool's quick selector and distinct convenience filenames: bpsc_hindi_signature.jpg and bpsc_english_signature.jpg. These are not claimed to be mandatory portal filenames.
- Suppressed unreviewed blog recommendations on these three pages so their older upload claims do not contradict the reviewed guidance. The blog articles themselves were not rewritten.
- Unverified presets' post-download panel links to the reference and no longer shows an unrelated 48–72-hour deadline.

## Evidence and unresolved source issue

[Official BPSC portal manual](https://bpsconline.bihar.gov.in/downloads/User_Manual.pdf), Step 6, PDF pages 12–13, downloaded and visually inspected. It describes separate Hindi/English signatures below 20 KB and live photo capture. Its English text specifies width 150–220 px and height 250–320 px; Hindi annotations reverse these ranges and also contain a repeated width label. This review does not silently choose one text as authoritative.

[Current application entry point](https://bpsconline.bihar.gov.in/candidate/login) is identified by the manual.

The exact TRE 4.0 and 72nd CCE advertisement URLs in sources.json were discovered from third-party references, but downloads from bpsc.bihar.gov.in failed certificate-chain verification. Web retrieval also failed and the browser did not render the document. Retrying with the system trust store did not resolve it. Certificate verification was not disabled. Those advertisement contents, including competitor-reported dimensions or caps, were not treated as verified official evidence.

**Status:** local correction and preparation-tool testing complete; cycle-specific source verification remains open. This is not a full sign-off of TRE 4.0 or CCE upload specifications.

## Verification

- Production build: 246 pages, passed.
- Existing exam-guidance checks: passed for 12 guided pages, including all three BPSC pages; covers unique titles, page/preset consistency, source links, internal destinations, canonicals and one H1.
- Preparation-status regression: passed. Wrong dimensions and a 20 KB BPSC export cannot receive the preset-pass label.
- Browser at 390 × 844: followed the Hindi link, loaded a synthetic sample, used Auto-Fit, downloaded the Hindi JPG, switched to the English preset, refitted and downloaded the English JPG.
- Both saved files were reopened independently: JPEG, 280 × 180 px, 8,687 bytes each. These use the same synthetic test strokes; they do not validate a person's language, handwriting or application acceptance.
- The existing paper-line detector warned on the uncropped sample after a preset switch; using Auto-Fit cleared the warning. No detector algorithm was changed in this work.
- No horizontal page overflow: document width 382 px at a 390 px viewport. Mobile and normal-viewport screenshots saved; temporary viewport override reset.
- git diff --check passed. An early guidance-test invocation overlapped the build's output cleanup and failed on a not-yet-generated page; rerunning after build completion passed.

No deployment was performed. The previously deployed WBPSC changes and unrelated pre-existing user edits were preserved.
