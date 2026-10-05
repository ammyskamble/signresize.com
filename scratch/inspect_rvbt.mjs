import https from 'https';

https.get('https://ahrefs.com/assets/esbuild/chunk-RVBTDRW4-release-20261002-bk45890-0d7d5550c5d95.js', res => {
  let d = '';
  res.on('data', chunk => d += chunk);
  res.on('end', () => {
    console.log('Length:', d.length);
    const idx = d.indexOf('Find keywords');
    console.log('Surrounding code:', d.slice(Math.max(0, idx - 400), idx + 400));
    
    // search for fetch, api, post, endpoint
    const postUrls = d.match(/https?:\/\/[^\s"'`)]+|\/api\/[a-zA-Z0-9_\/-]+/g) || [];
    console.log('URLs/Endpoints:', [...new Set(postUrls)]);
  });
});
