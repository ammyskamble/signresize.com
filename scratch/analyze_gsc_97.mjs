import https from 'https';

const urls = [
  'https://signresize.in/?filter=clean',
  'https://signresize.in/neet-photo-resize/?preset=neet&photoW=3.5&photoH=4.5&photoMin=10&photoMax=200&postcardW=4.0&postcardH=6.0&postcardMin=10&postcardMax=200&signMin=4&signMax=30',
  'https://signresize.in/background-remover/?background=transparent',
  'https://signresize.in/document-resizer/?preset=nicl-left-thumb',
  'https://signresize.in/maharashtra-police-signature-resize/?preset=maharashtra-police&photoW=160&photoH=200&photoMin=5&photoMax=20&signW=256&signH=64&signMin=5&signMax=20',
  'https://signresize.in/?preset=mahapolice&photoW=160&photoH=200&photoMin=5&photoMax=20&signW=256&signH=64&signMin=5&signMax=20',
  'https://signresize.in/hi/blog/ssc-cgl-2026-master-application-preparation-guide/',
  'https://signresize.in/mr/blog/ssc-cgl-2026-master-application-preparation-guide/',
  'https://signresize.in/hi/blog/ssc-cgl-photo-and-signature-size-2026-guidelines/',
  'https://signresize.in/mr/blog/ssc-cgl-photo-and-signature-size-2026-guidelines/',
  'https://signresize.in/hi/blog/ppsc-online-apply-guide-photo-resizer-25kb-roll-no-slip-challan-2026/',
  'https://signresize.in/hi/blog/teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026/',
  'https://signresize.in/mr/blog/ssc-live-photo-webcam-guidelines-troubleshooting-2026/',
  'https://signresize.in/mr/blog/wbpsc-miscellaneous-clerkship-form-fill-up-photo-signature-resize-guide/',
  'https://signresize.in/tspsc-signature-resize/?preset=tgpsc&w=3.5&h=4.5&maxKb=50',
  'https://signresize.in/hi/blog/upsc-cse-2026-preparation-roadmap-daily-study-plan/',
  'https://signresize.in/hi/blog/rrb-ntpc-2026-top-10-faq-complete-guide/',
  'https://signresize.in/hi/blog/ssc-live-photo-webcam-guidelines-troubleshooting-2026/',
  'https://signresize.in/mr/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
  'https://signresize.in/mr/blog/indian-coast-guard-navik-yantrik-2026-master-guide/',
  'https://signresize.in/mr/blog/india-post-gds-2026-bpm-abpm-merit-salary-photo-signature-rules/',
  'https://signresize.in/hi/blog/indian-coast-guard-navik-yantrik-2026-master-guide/',
  'https://signresize.in/hi/blog/cpns-sscasn-2026-panduan-daftar-pasfoto-merah-swafoto-kompres-100-300kb/',
  'https://signresize.in/hi/blog/upsc-csat-paper-2-master-blueprint-comprehension-hacks/',
  'https://signresize.in/mppsc-signature-resize/?preset=mppsc&photoW=3.5&photoH=4.5&photoMin=20&photoMax=100&signW=3.5&signH=1.5&signMin=10&signMax=100',
  'https://signresize.in/mr/blog/rrb-ntpc-2026-master-document-rules-preparation-strategy/',
  'https://signresize.in/hi/blog/india-post-gds-2026-top-10-faq-complete-guide/',
  'https://signresize.in/mr/blog/india-post-gds-2026-top-10-faq-complete-guide/',
  'https://signresize.in/hi/blog/dsssb-tgt-pgt-prt-2026-master-guide-postcard-photo-signature-rules/',
  'https://signresize.in/mr/blog/state-psc-otr-registration-photo-signature-guidelines/',
  'https://signresize.in/mr/blog/top-5-mistakes-photo-signature-rejection-govt-exams/',
  'https://signresize.in/hi/blog/india-post-gds-2026-bpm-abpm-merit-salary-photo-signature-rules/',
  'https://signresize.in/appsc-signature-resize/?preset=appsc&photoMax=100&signMax=50',
  'https://signresize.in/hi/blog/mppsc-state-service-2026-master-guide-prelims-mains-photo-rules/',
  'https://signresize.in/mr/blog/rbi-grade-b-assistant-2026-top-10-faq-guide/',
  'https://signresize.in/mr/blog/blue-ink-vs-black-ink-signature-guidelines-govt-exams/',
  'https://signresize.in/hi/blog/blue-ink-vs-black-ink-signature-guidelines-govt-exams/',
  'https://signresize.in/hi/blog/bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026/',
  'https://signresize.in/mr/blog/mppsc-state-service-2026-master-guide-prelims-mains-photo-rules/',
  'https://signresize.in/hi/blog/state-psc-otr-registration-photo-signature-guidelines/',
  'https://signresize.in/mr/blog/bpsc-teletalk-bangladesh-photo-signature-resize-guide-2026/',
  'https://signresize.in/hi/blog/neet-ug-2026-master-guide-postcard-photo-signature-rules/',
  'https://signresize.in/mr/blog/ppsc-fpsc-pakistan-photo-signature-resizer-guide-2026/',
  'https://signresize.in/osssc-signature-resize/?preset=osssc&photoMax=100&signMax=50',
  'https://signresize.in/mr/blog/uppsc-ro-aro-2026-top-10-faq-aspirants/',
  'https://signresize.in/hi/blog/rbi-grade-b-assistant-2026-top-10-faq-guide/',
  'https://signresize.in/mr/blog/up-police-constable-si-2026-top-10-faq-guide/',
  'https://signresize.in/hi/blog/rrb-group-d-2026-master-guide-exam-date-syllabus-salary-photo-rules/',
  'https://signresize.in/mr/blog/rrb-ntpc-cen-06-2026-photo-signature-guidelines/',
  'https://signresize.in/hi/blog/up-police-constable-syllabus-exam-pattern-2026/',
  'https://signresize.in/hi/blog/top-5-mistakes-photo-signature-rejection-govt-exams/',
  'https://signresize.in/mr/blog/lok-sewa-aayog-nepal-photo-signature-resizer-guide-2026/',
  'https://signresize.in/mr/blog/iit-jam-2026-master-guide-syllabus-eligibility-photo-signature-joaps/',
  'https://signresize.in/mr/blog/upsc-cse-syllabus-2026-complete-guide-prelims-mains-pdf/',
  'https://signresize.in/hi/blog/kerala-psc-thulasi-2026-otr-registration-photo-name-date-signature-rules/',
  'https://signresize.in/hi/blog/rrb-ntpc-cen-06-2026-photo-signature-guidelines/',
  'https://signresize.in/mr/blog/ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines/',
  'https://signresize.in/mr/blog/how-to-change-signature-in-outlook/',
  'https://signresize.in/hi/blog/iit-jam-2026-master-guide-syllabus-eligibility-photo-signature-joaps/',
  'https://signresize.in/hi/blog/ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines/',
  'https://signresize.in/mr/blog/bpsc-cce-teacher-2026-top-10-faq-guide/',
  'https://signresize.in/hi/blog/how-to-change-signature-in-outlook/',
  'https://signresize.in/mr/blog/rrb-group-d-2026-master-guide-exam-date-syllabus-salary-photo-rules/',
  'https://signresize.in/mr/blog/what-is-a-digital-signature-cryptography-security-guide/',
  'https://signresize.in/hi/blog/what-is-a-digital-signature-cryptography-security-guide/',
  'https://signresize.in/hi/blog/uppsc-ro-aro-2026-top-10-faq-aspirants/',
  'https://signresize.in/mr/blog/kerala-psc-thulasi-2026-otr-registration-photo-name-date-signature-rules/',
  'https://signresize.in/mr/blog/handwritten-signature-transparent-png-pdf-word/',
  'https://signresize.in/hi/blog/handwritten-signature-transparent-png-pdf-word/',
  'https://signresize.in/mr/blog/resize-remove-bg-photo-kb/,2026-10-18', // clean trailing comma if any
  'https://signresize.in/hi/blog/resize-remove-bg-photo-kb/',
  'https://signresize.in/mr/blog/osssc-cre-2026-master-guide-ri-ari-amin-peo-photo-signature-rules/',
  'https://signresize.in/hi/blog/appsc-group-1-2-2026-master-guide-otpr-photo-signature-rules/',
  'https://signresize.in/hi/blog/ppsc-fpsc-pakistan-photo-signature-resizer-guide-2026/',
  'https://signresize.in/mr/blog/mp-police-constable-2026-vacancy-syllabus-physical-chart-salary/',
  'https://signresize.in/hi/blog/rrb-ntpc-exam-date-2026-city-intimation-slip-admit-card/',
  'https://signresize.in/mr/blog/cpns-sscasn-2026-panduan-daftar-pasfoto-merah-swafoto-kompres-100-300kb/',
  'https://signresize.in/mr/blog/online-signature-generator-guide-us-create-pdf-esign-rules/',
  'https://signresize.in/mr/blog/ctet-photo-signature-upload-error-solution-discrepancy/',
  'https://signresize.in/hi/blog/ctet-photo-signature-upload-error-solution-discrepancy/',
  'https://signresize.in/hi/blog/us-visa-passport-photo-resizer-ds160-greencard-guide-2026/',
  'https://signresize.in/mr/blog/us-visa-passport-photo-resizer-ds160-greencard-guide-2026/',
  'https://signresize.in/mr/blog/ssc-chsl-2026-top-10-faq-aspirants-guide/',
  'https://signresize.in/hi/blog/ssc-chsl-2026-top-10-faq-aspirants-guide/',
  'https://signresize.in/hi/blog/upsc-cds-nda-2026-top-10-faq-defence-guide/',
  'https://signresize.in/mr/blog/upsc-cds-nda-2026-top-10-faq-defence-guide/',
  'https://signresize.in/mr/blog/ssc-gd-constable-2026-top-10-faq-complete-guide/',
  'https://signresize.in/hi/blog/online-signature-generator-guide-us-create-pdf-esign-rules/',
  'https://signresize.in/hi/blog/prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026/',
  'https://signresize.in/mr/blog/prc-leris-2x2-photo-resizer-philippines-csc-dfa-guide-2026/',
  'https://signresize.in/hi/blog/ibps-po-2026-top-10-faq-banking-aspirants/',
  'https://signresize.in/mr/blog/online-signature-maker-guide-india-create-verify-resize-pdf/',
  'https://signresize.in/mr/blog/rrb-alp-technician-2026-top-10-faq-guide/',
  'https://signresize.in/ph/prc-photo-signature-resize-philippines/',
  'https://signresize.in/pk/ppsc-signature-resize/',
  'https://signresize.in/pk/fpsc-photo-resize/',
  'https://signresize.in/?preset=rrb-photo'
].map(u => u.split(',')[0].trim());

console.log('Total URLs loaded:', urls.length);

const categories = {
  queryParams: [],
  regionalBlog: [],
  international: [],
  other: []
};

for (const u of urls) {
  if (u.includes('?')) {
    categories.queryParams.push(u);
  } else if (u.includes('/hi/blog/') || u.includes('/mr/blog/')) {
    categories.regionalBlog.push(u);
  } else if (u.startsWith('https://signresize.in/ph/') || u.startsWith('https://signresize.in/pk/')) {
    categories.international.push(u);
  } else {
    categories.other.push(u);
  }
}

console.log('\n--- Breakdown ---');
console.log('Query Parameter URLs (presets/filters):', categories.queryParams.length);
console.log('Regional Blog URLs (/hi/blog/ & /mr/blog/):', categories.regionalBlog.length);
console.log('International Presets (/ph/ & /pk/):', categories.international.length);
console.log('Other:', categories.other.length);
