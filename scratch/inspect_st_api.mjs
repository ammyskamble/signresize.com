import https from 'https';

https.get('https://ahrefs.com/assets/esbuild/chunk-Q3IMUUTV-release-20261002-bk45890-0d7d5550c5d95.js', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const idx = d.indexOf('stGetFreeKeywordIdeasInterface');
    console.log(d.slice(Math.max(0, idx - 500), idx + 1000));
  });
});
