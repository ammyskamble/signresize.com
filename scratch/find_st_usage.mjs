import https from 'https';

https.get('https://ahrefs.com/assets/esbuild/chunk-Q3IMUUTV-release-20261002-bk45890-0d7d5550c5d95.js', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    let idx = -1;
    while ((idx = d.indexOf('/api/endpoints_static/aa_fe/fe/stGetFreeKeywordIdeasInterface', idx + 1)) !== -1) {
      console.log('--- FOUND AT', idx, '---');
      console.log(d.slice(Math.max(0, idx - 200), idx + 400));
    }
  });
});
