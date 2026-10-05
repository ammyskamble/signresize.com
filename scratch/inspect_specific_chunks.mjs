import https from 'https';

for (const name of ['chunk-YBERPLDC', 'chunk-XTPM3OJW']) {
  https.get(`https://ahrefs.com/assets/esbuild/${name}-release-20261002-bk45890-0d7d5550c5d95.js`, (res) => {
    let data = '';
    res.on('data', c => data += c);
    res.on('end', () => {
      console.log(`=== ${name} (len: ${data.length}) ===`);
      const apiMatches = data.match(/https?:\/\/[^\s"'`)]+|["']\/[^"']*(?:api|v3|keyword)[^"']*["']/gi) || [];
      console.log('API matches:', [...new Set(apiMatches)].slice(0, 20));
      // Look for fetch or request
      const reqMatches = data.match(/(?:fetch|axios|request|post|get)\s*\([^)]+\)/gi) || [];
      console.log('Req matches:', reqMatches.slice(0, 10));
    });
  });
}
