# Week 1 status review

Checked: 28 October 2026. Scope: current production HTML, local effective page/preset data, source references and existing verification records. No website edits or deployment.

## Verdict

Partially implemented. All five pages are live, but none is signed off as completing every Week 1 acceptance criterion. Existing content and links are present; their presence is not evidence that the newly proposed plan was executed.

## Shared checks

- All five URLs returned HTTP 200 in direct live fetches.
- All five have one H1, index/follow directives and a self-referencing canonical. These checks do not establish Google indexing.
- Local effective page data matches each selected preset on width, height, minimum KB and maximum KB. This does not establish correctness against an official notice or consistency of all prose.
- Current uncommitted page/template changes concern UPPSC RO/ARO, not completion of this five-page plan. Blog data also has unrelated uncommitted edits. They were preserved.
- Fresh mobile upload-to-download testing was not performed in this read-only review. The October 3 report records JAM mobile sample processing at 390 px, but download-event capture timed out and the saved file was not independently checked. This dated record cannot sign off all five current pages.

## Page status

| Page | Already present live | Remaining work |
| --- | --- | --- |
| WBPSC | Clerkship references, size/format FAQ, upload-error FAQ, signature/photo switching controls | Black-only labels conflict with black/dark-blue instructions. The page equates 140×60 px with 4×2 cm and attributes the conversion to 200 DPI; these ratios and conversions do not match. Source links are general portals rather than the precise cycle-specific notice. |
| BPSC | General 220×100, 10–25 KB tool; links to Hindi and English TRE tools | Main page remains CCE-focused, without a focused, source-reviewed TRE 4.0 section. Do not merge CCE and TRE limits without official evidence. Only a general authority link is exposed; no precise reviewed TRE notice is cited. |
| Coast Guard | Established URL, separate signature/slate-photo/thumb/certificate controls, filenames, physical-slate instructions | The page calls 140×60 px and 4×2 cm equivalent at 200 DPI. Verify and distinguish actual notice requirements from tool defaults. Sources link to portal/department pages, not an identifiable dated advertisement. Do not interpret a “verified” label as completed independent verification. |
| IIT JAM | JAM 2027 signature preset 560×160 and 50–150 KB, precise official source, photo-tool link, min/max pixel explanation | Intro presents 560×160 as the required official dimensions even though the detailed section allows a range. Signature-page photo advice says 20–200 KB, while the current official JAM 2027 requirements state 50–200 KB. Remove language implying padding prevents application rejection. |
| RRB NTPC | NTPC tool set to 30–70 KB, cycle mentions and related guide link | A separate shared instruction section says 10–50 KB and permits black/blue ink, while the header/preset require 30–70 KB and black ink. The text combines multiple cycles without a precise notice reference. Review each applicable CEN before choosing the correct limits. |

## Official source checked

[JAM 2027 document requirements](https://www.jam.iitkgp.ac.in/doc-req.html): signature JPG/JPEG 50–150 KB, signing box 7 cm wide by 2 cm high, black or dark-blue ink, and a minimum/maximum image range. Photo size is 50–200 KB. The source writes signature dimensions height-first; the site uses width-first. Do not confuse orientation conventions with a disagreement.

The other four pages' current exact-cycle requirements were not independently established in this review. Their internal contradictions and incomplete source attribution are sufficient to keep their review status open.

## Completion order

1. Resolve RRB's contradictory KB and ink instructions using the relevant CEN, then update the shared instruction section.
2. Resolve WBPSC ink and dimensions using an identified Clerkship notice.
3. Add source-reviewed BPSC TRE 4.0 guidance to the existing main page and align its Hindi/English destinations.
4. Correct JAM's photo-limit advice and describe the signature canvas as a preset within allowed bounds.
5. Verify Coast Guard cycle-specific limits and distinguish physical signing/photo instructions from tool defaults.
6. Test every page at a mobile viewport: upload a synthetic signature, crop, export, download, reopen the JPG, and verify dimensions, file type and byte limits. Check unreadable or out-of-bounds inputs as well.

## Evidence

Live pages: [WBPSC](https://signresize.in/wbpsc-signature-resize/), [BPSC](https://signresize.in/bpsc-signature-resize/), [Coast Guard](https://signresize.in/indian-coast-guard-signature-resize/), [IIT JAM](https://signresize.in/iit-jam-signature-resize/), [NTPC](https://signresize.in/rrb-ntpc-signature-resize/).

Fetched HTML and extracted main text are saved in this folder. Direct requests were used because several web-retrieval responses failed or served older text. Source locations: src/data/examPagesData.ts, src/data/examPresets.ts, src/data/focusedExamPages.ts and src/pages/[exam].astro. Historical mobile record: reports/seo/implementation-2026-10-03.md.
