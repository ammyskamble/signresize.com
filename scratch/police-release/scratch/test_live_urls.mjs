const urls = [
  'https://signresize.in/mr/blog/neet-ug-2026-master-guide-postcard-photo-signature-rules/',
  'https://signresize.in/mr/blog/nicl-assistant-recruitment-2026-notification-syllabus-photo-signature-guide/',
  'https://signresize.in/mr/blog/teletalk-bangladesh-photo-signature-300x300-300x80-guide-2026/',
  'https://signresize.in/hi/blog/ssc-gd-exam-date-2026-cbt-shift-timings-schedule-guide/',
  'https://signresize.in/mr/blog/ssc-gd-exam-date-2026-cbt-shift-timings-schedule-guide/'
];

async function test() {
  for (const url of urls) {
    const res = await fetch(url, { redirect: 'manual' });
    console.log(url);
    console.log('Status:', res.status);
    if (res.status === 301 || res.status === 302 || res.status === 308) {
      console.log('Redirect Location:', res.headers.get('location'));
    } else {
      const text = await res.text();
      const hasNoindex = text.includes('noindex');
      const canonical = text.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
      console.log('hasNoindex:', hasNoindex, 'canonical:', canonical);
    }
    console.log('---');
  }
}
test();
