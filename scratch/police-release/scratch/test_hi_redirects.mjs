import https from 'https';
import fs from 'fs';

const lines = fs.readFileSync('dist/_redirects', 'utf8').split('\n').filter(l => l.trim().startsWith('/hi/blog/'));

console.log('Total /hi/blog/ rules:', lines.length);

async function testUrl(path) {
  return new Promise((resolve) => {
    https.get(`https://signresize.in${path}`, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve('ERR'));
  });
}

async function run() {
  for (let i = 0; i < lines.length; i += 5) {
    const parts = lines[i].trim().split(/\s+/);
    const source = parts[0];
    const status = await testUrl(source);
    console.log(`[${i}] ${source} -> ${status}`);
  }
}

run();
