import https from 'https';

https.get('https://ahrefs.com/assets/esbuild/3HKW4SDP__entry__static_universal__KeywordGeneratorIndex-release-20261002-bk45890-0d7d5550c5d95.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imports = data.match(/import\s*\(?["'][^"']+["']\)?/g) || [];
    console.log('Imports:', imports);
    const chunks = data.match(/\/assets\/esbuild\/[a-zA-Z0-9_-]+\.js/g) || [];
    console.log('Chunks:', [...new Set(chunks)]);
  });
});
