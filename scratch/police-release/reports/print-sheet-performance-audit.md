# Print sheet usability and performance — 17 October 2026

Implemented locally; not deployed.

## Measured scope

Production build dependency graphs were compared before and after the changes using `scripts/measure-page-payload.mjs`. The graph includes scripts referenced by HTML and their static imports, including idle islands. It excludes dynamic imports, inline scripts, CSS, images, and fonts. Gzip sizes are local estimates, not observed network transfer sizes. See `performance-before.json` and `performance-after.json` for exact file lists and byte totals.

| Page | Before JS, raw | After JS, raw (approximately) | Reduction |
| --- | ---: | ---: | ---: |
| Homepage | 487 KB | 475 KB | 2.6% |
| 8-photo print sheet | 248 KB | 228 KB | 8.2% |
| About | 233 KB | 24 KB | 90% |

## Core Web Vitals

| Metric | Value | Rating |
| --- | --- | --- |
| LCP | Not measured | Unavailable |
| INP | Not measured | Unavailable |
| CLS | Not measured | Unavailable |

No Lighthouse, device-throttled performance trace, or live field-data tool was available in this session. Bundle reductions do not establish equivalent load-time improvements.

## Issues fixed

1. **High impact on informational pages:** React was loaded for closed help and a compact deadline strip. The strip now uses a small native script; help loads React and the chat component on first use. First opening help now requires a network request, with loading and retry feedback.
2. **Medium impact during cropping:** Each adjustment resampled the original photo eight times. It now resamples once into a full-resolution photo tile and copies that tile eight times. Rendering is scheduled with requestAnimationFrame; export synchronously renders the latest crop.
3. **Lower initial payload:** Sample-photo code loads only when requested.
4. **Upload usability:** Replaced the small native file picker with a large Upload photo button, drop target, format/size guidance, selected filename and Replace photo action. A shorter intro and mobile Upload → Preview → Adjust → Download order make the task easier to follow.

## Validation

- Production build: 294 pages.
- Existing toolkit, homepage, 110-page studio, upload-validation and hero-motion checks passed.
- Browser: photo upload, sample, PDF and JPG downloads, crop-confirmation reset, help opening/reopening, and deadline dismissal persistence.
- Downloaded PDF MediaBox: 432 × 288 points (6 × 4 inches); downloaded JPG: 1800 × 1200 pixels.
- Desktop and 390px/320px mobile checks; no document horizontal overflow at those mobile widths.

## Remaining performance work

The main resizer remains the largest initial component. Before further splitting it, obtain production mobile/desktop traces and identify the actual LCP and interaction bottlenecks. Preserve immediate access to upload and preset selection; avoid deferring essential controls solely to improve a synthetic score. Existing Astro minification, hashed-asset caching, self-hosted fonts and on-demand image-processing models remain in place.
