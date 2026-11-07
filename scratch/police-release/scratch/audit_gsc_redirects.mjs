// using global fetch

const gscUrls = [
  "https://signresize.in/gate-signature-resize",
  "https://signresize.in/clat-signature-resize",
  "https://signresize.in/ugc-net-signature-resize",
  "https://signresize.in/blog",
  "https://signresize.in/ssc-signature-resize",
  "https://signresize.in/thumb-impression-resize",
  "http://signresize.in/",
  "https://signresize.in/blog/state-psc-otr-registration-photo-signature-guidelines-mul2uamk/",
  "https://signresize.in/rrb-signature-resize",
  "https://signresize.in/agniveer-signature-resize",
  "https://signresize.in/tnpsc-signature-resize",
  "https://signresize.in/blog/ssc-rrb-quantitative-aptitude-reasoning-speed-strategy/",
  "https://signresize.in/ssc-general/",
  "https://signresize.in/hi",
  "https://signresize.in/bpsc-signature-resize",
  "https://signresize.in/signature-creator",
  "https://signresize.in/wbpsc-signature-resize",
  "https://signresize.in/mr/blog/rrb-ntpc-exam-date-2026-city-intimation-slip-admit-card/",
  "https://signresize.in/blog/state-psc-otr-registration-photo-signature-guidelines-muqsg7l9/",
  "https://signresize.in/rbi-signature-resize",
  "https://signresize.in/blog/mega-railway-banking-recruitment-2026-opportunities",
  "https://signresize.in/blog/ssc-rrb-quantitative-aptitude-reasoning-speed-strategy",
  "https://signresize.in/lok-sewa-photo-resize-nepal/",
  "https://signresize.in/privacy",
  "https://signresize.in/hpsc-ppsc-signature-resize",
  "https://signresize.in/state-tet-signature-resize",
  "https://signresize.in/kpsc-signature-resize",
  "https://signresize.in/blog/mega-railway-banking-recruitment-2026-opportunities/",
  "https://signresize.in/government-jobs",
  "https://signresize.in/document-resizer",
  "https://signresize.in/ibps-signature-resize",
  "https://signresize.in/cat-signature-resize",
  "https://signresize.in/appsc-tspsc-signature-resize",
  "https://signresize.in/mr",
  "https://signresize.in/blog/ssc-cgl-2026-notification-dates-signature-guidelines",
  "https://signresize.in/pan-card-signature-resize",
  "https://signresize.in/terms",
  "https://signresize.in/gpsc-signature-resize",
  "https://signresize.in/ctet-signature-resize",
  "https://signresize.in/indian-coast-guard-signature-resize",
  "https://signresize.in/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muwjkuc2/",
  "https://signresize.in/passport-seva-signature-resize",
  "https://signresize.in/blog/state-psc-one-time-registration-otr-document-standards/",
  "https://signresize.in/opsc-signature-resize",
  "https://signresize.in/photo-resizer",
  "https://signresize.in/disclaimer",
  "https://signresize.in/xat-signature-resize",
  "https://signresize.in/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mus6j1ip/",
  "https://signresize.in/afcat-signature-resize",
  "https://signresize.in/blog/rrb-ntpc-2026-document-upload-rules-preparation-strategy/",
  "https://signresize.in/sebi-nabard-signature-resize",
  "https://signresize.in/blog/state-psc-otr-registration-photo-signature-guidelines-muxyprqk/",
  "https://signresize.in/upsc-signature-resize",
  "https://signresize.in/uppsc-signature-resize",
  "https://signresize.in/hi/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muwjkuc2/",
  "https://signresize.in/blog/upsc-csat-paper-2-qualifying-speed-strategy-comprehension-hacks/",
  "https://signresize.in/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muduvfwu/",
  "https://signresize.in/isro-drdo-signature-resize",
  "https://signresize.in/capf-signature-resize",
  "https://signresize.in/blog/top-5-mistakes-photo-signature-rejection-govt-exams",
  "https://signresize.in/pan-card-photo-resize",
  "https://signresize.in/cmat-nmat-signature-resize",
  "https://signresize.in/rpsc-signature-resize",
  "https://signresize.in/lsat-india-signature-resize",
  "https://signresize.in/about",
  "https://signresize.in/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy-muwjkuc2/",
  "https://signresize.in/signature-creator/",
  "https://signresize.in/blog/state-psc-otr-registration-photo-signature-guidelines-mufa2ff3/",
  "https://signresize.in/ailet-signature-resize",
  "https://signresize.in/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mui58dj6/",
  "https://signresize.in/mpsc-signature-resize",
  "https://signresize.in/blog/ssc-chsl-tier-1-speed-typing-photo-signature-guidelines/",
  "https://signresize.in/contact",
  "https://signresize.in/blog/ssc-cgl-2026-notification-dates-signature-guidelines/",
  "https://signresize.in/blog/state-psc-otr-registration-photo-signature-guidelines-mucfcta1/",
  "https://signresize.in/sarathi-dl-signature-resize",
  "https://signresize.in/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks-mui58dj6/",
  "https://signresize.in/compress-image-to-kb",
  "https://signresize.in/nta-neet-jee-signature-resize",
  "https://signresize.in/snap-signature-resize",
  "https://signresize.in/signature-resizer/",
  "https://signresize.in/blog/upsc-cse-2026-preparation-roadmap-daily-study-plan"
];

async function runAudit() {
  console.log(`Auditing ${gscUrls.length} URLs from GSC report...`);
  const results = {
    cleanRedirect: 0,
    chainedRedirect: 0,
    brokenRedirect: 0,
    other: 0
  };

  const issues = [];

  for (const url of gscUrls) {
    try {
      const res = await fetch(url, { redirect: 'manual' });
      const status = res.status;
      const location = res.headers.get('location');

      if (status === 301 || status === 308 || status === 302) {
        // Verify destination
        const dest = new URL(location, url).href;
        const finalRes = await fetch(dest, { redirect: 'manual' });
        if (finalRes.status === 200) {
          results.cleanRedirect++;
        } else if (finalRes.status === 301 || finalRes.status === 308 || finalRes.status === 302) {
          results.chainedRedirect++;
          issues.push({ url, status, location, finalStatus: finalRes.status, finalLocation: finalRes.headers.get('location') });
        } else {
          results.brokenRedirect++;
          issues.push({ url, status, location, finalStatus: finalRes.status });
        }
      } else {
        results.other++;
        issues.push({ url, status, location: location || 'none' });
      }
    } catch (err) {
      results.other++;
      issues.push({ url, error: err.message });
    }
  }

  console.log('\n--- Audit Summary ---');
  console.log(`Total URLs Audited: ${gscUrls.length}`);
  console.log(`Clean 1-hop 301 to 200 OK: ${results.cleanRedirect}`);
  console.log(`Chained Redirects (2+ hops): ${results.chainedRedirect}`);
  console.log(`Broken Redirects (404/500): ${results.brokenRedirect}`);
  console.log(`Other Statuses: ${results.other}`);

  if (issues.length > 0) {
    console.log('\n--- Issues / Non-Clean Redirects ---');
    console.log(JSON.stringify(issues, null, 2));
  }
}

runAudit();
