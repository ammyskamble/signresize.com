import https from 'https';

https.get('https://ahrefs.com/assets/esbuild/chunk-Q3IMUUTV-release-20261002-bk45890-0d7d5550c5d95.js', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('chunk-Q3IMUUTV length:', d.length);
    const postUrls = d.match(/https?:\/\/[^\s"'`)]+|\/api\/[a-zA-Z0-9_\/-]+/g) || [];
    console.log('Endpoints/URLs:', [...new Set(postUrls)]);
    const exp = d.match(/export\s*\{[^}]+\}/g) || [];
    console.log('Exports:', exp);
  });
});
