# GSC indexing fixes — October 16, 2026

## Evidence and limits

The supplied ZIP and CSVs contain summary counts, not affected URL lists. The chart ends October 12, 2026 with 267 indexed and 121 non-indexed URLs. The eight issue categories total 121. These historical counts cannot establish which URLs still need repairs.

The connected Search Console sitemap report returned zero errors and zero warnings for `https://signresize.in/sitemap.xml`. Its submitted/indexed fields must not be treated as the property's overall indexed total.

URL Inspection on October 16 reported:

- `/signature-creator/`: excluded by a noindex tag; both declared and Google-selected canonical are `/signature-generator/`. This supports keeping the generator as the destination.
- `/bd/teletalk-photo-signature-resize/`: discovered, currently not indexed; no crawl or canonical reported. Source and the previous build independently showed a canonical pointing to `/teletalk-photo-signature-resize/`.

The seven URLs discussed earlier were reported indexed in the October 15 inspections. Those results are a dated snapshot, not a guarantee of future indexing.

## Local changes

- Redirect both forms of the signature creator alias directly to the generator, with a matching static redirect page.
- Redirect both forms of the Bangladesh Teletalk alias to the existing root tool, with a matching static redirect page.
- Exclude redirect sources and error pages from the sitemap while preserving valid trailing-slash destinations and existing translated-content filtering.
- Emit article dates from known content dates instead of setting every page's last-modified date to each build time. Omit unknown tool modification dates.
- Replace an internal link to a nonexistent APPSC blog guide in the TSPSC article with the available APPSC signature tool, revising the surrounding text to match its purpose.
- Fail sitemap copying when the generated sitemap is missing.
- Add `npm run verify:indexing` to check sitemap canonicals and indexing directives, redirect destinations/chains, and internal page links after a build.

## Remaining work

Validation passed: production build (286 generated pages), indexing checks (180 sitemap URLs, 160 redirect rules, internal page links), the existing focused exam SEO verification, and `git diff --check`.

Deployed to the existing Cloudflare Pages production project `signresize` on branch `main` on October 16, 2026 (IST). Deployment: https://88d96637.signresize.pages.dev.

Production checks on `https://signresize.in` confirmed HTTP 301 redirects for both slash variants of the signature creator and Bangladesh Teletalk aliases, HTTP 200 responses from both destinations, and a published `sitemap.xml` identical to the validated 180-URL local build. Google must recrawl and process the changes before its indexing report reflects them. Local source changes remain uncommitted.

The CSV's 30 not-found URLs, one redirect-error URL, and one Google-selected-canonical disagreement still need their individual URL exports before they can be diagnosed or claimed fixed. The connected GSC indexing tracker was unconfigured and did not supply those lists. OpenSEO tools were unavailable in this session.

Redirect source URLs, valid canonical alternates, and intentionally noindexed error pages can remain excluded correctly. Do not remove those protections merely to lower GSC exclusion counts. Google ultimately decides whether to index crawlable pages.
