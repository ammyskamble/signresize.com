# SBI and IIT JAM implementation

Implemented and deployed to production on 3 October 2026.

Deployment: https://67e76299.signresize.pages.dev
Production: https://signresize.in/
Previous production deployment (rollback reference): fed51755-7f5b-409b-88ea-6a5ca2f8a79b.

- Added `/sbi-signature-resize/` and `/iit-jam-signature-resize/` using the existing exam page layout.
- Added distinct SBI, JAM 2027 and previous-cycle JAM 2026 signature presets.
- Corrected the GATE signature preset and guidance against the official GATE 2027 source. Preserved its legacy `gate-jam` ID for existing links.
- Corrected SBI centimetre conversions in presets; focused pages lead with pixels and KB instead of implying official physical dimensions.
- Added source references, cycle labels, FAQ answers, crop examples and handwritten-scan guidance. SBI source example is explicitly identified as specialist recruitment, with instructions to check the current PO/Clerk notification.
- Added desktop/mobile navigation, homepage specification-table and footer links. SBI news links and the existing SBI blog's related tool now point to SBI destinations. Existing PO/Clerk URLs remain intact.
- Sitemap and site search include both new destinations automatically.
- Signature compression preserves the requested pixel dimensions. File-size validity uses exact bytes, not rounded KB. Minimum-size repair now repairs the JPG within the selected limits instead of lowering the minimum. Output metrics show actual dimensions, format and bytes.

## Validation

Run `npm run build`, then `node scripts/verify-focused-exam-seo.mjs`.

The production build generated 121 pages. Regression checks verify page/preset consistency, unique slugs and preset IDs, existing homepage default, canonical URLs, indexing directives, valid structured-data JSON, sitemap/search entries, sources, internal links, JPEG padding and exact byte limits, and preservation of signature dimensions.

Browser checks covered 390-pixel mobile and 1440-pixel desktop layouts and sample processing. JAM sample: 560×160 JPG, 52,024 bytes (50.8 KB). SBI sample: 140×60 JPG, 11,064 bytes (10.8 KB). The browser download-event capture timed out, so a file saved to disk was not independently inspected. The output bytes and dimensions were checked in the tool and the compression decisions were regression-tested.

Development browser cache briefly served an old JavaScript module; verification used the separate production preview at `http://localhost:4323/` to avoid mixing updated HTML with cached development code. No production cache configuration was changed.

## Pending external steps

1. Completed: deployed the verified `dist` build through the existing Cloudflare Pages project (`signresize`, production branch `main`). Pre-existing changes to `astro.config.mjs` and an untracked `src/data/signatureFonts.ts` were already present before this work and were not intentionally modified by this task; review them before choosing what to release.
2. In Search Console, inspect both new production URLs after deployment; confirm access and the selected canonical URL, then request indexing. Check the sitemap.
3. Filter India, compare consecutive 28-day periods and track query families weekly for 4–8 weeks. Record impressions, clicks, CTR, position and the ranking destination. This is a measurement window, not a ranking promise.
4. Investigate overlapping SBI destinations using actual performance before merging or redirecting pages. Assess backlink opportunities after these accurate destinations are live. No backlinks were bought and no outreach messages were sent.

Search Console and OpenSEO were not connected, so indexing requests, rank measurement and live backlink research could not be performed.

## Post-deployment checks

Live HTTP checks passed for SBI, JAM, GATE, SBI PO/Clerk, homepage, photo and document resizers. Their main content, titles and canonical URLs match the tested build; referenced Astro assets are available. Cloudflare injects a hidden security link, so full HTML byte equality is not expected. Both new URLs are present in the live sitemap and search index.
