import https from 'https';

https.get('https://ahrefs.com/assets/esbuild/chunk-RVBTDRW4-release-20261002-bk45890-0d7d5550c5d95.js', res => {
  let d = '';
  res.on('data', chunk => d += chunk);
  res.on('end', () => {
    const lines = d.split(';');
    for (const l of lines) {
      if (l.includes('onDataRequest') || l.includes('ze=') || l.includes('Bt=')) {
        console.log('MATCH:', l.slice(0, 300));
      }
    }
  });
});
