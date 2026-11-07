import https from 'https';

const testUrls = [
  'https://signresize.in/?filter=clean',
  'https://signresize.in/neet-photo-resize/?preset=neet',
  'https://signresize.in/ph/prc-photo-signature-resize-philippines/',
  'https://signresize.in/pk/ppsc-signature-resize/',
  'https://signresize.in/pk/fpsc-photo-resize/',
  'https://signresize.in/hi/blog/ssc-cgl-2026-master-application-preparation-guide/',
  'https://signresize.in/mr/blog/ssc-cgl-2026-master-application-preparation-guide/'
];

function fetchStatus(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' } }, (res) => {
      let body = '';
      res.on('data', chunk => { if (body.length < 5000) body += chunk; });
      res.on('end', () => {
        const canonical = body.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
        resolve({
          url,
          statusCode: res.statusCode,
          location: res.headers.location,
          canonical
        });
      });
    }).on('error', (err) => {
      resolve({ url, error: err.message });
    });
  });
}

async function run() {
  for (const u of testUrls) {
    const res = await fetchStatus(u);
    console.log(res);
  }
}

run();
