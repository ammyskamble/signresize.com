import { build } from 'esbuild';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

// Local QA server: test harness is kept outside dist and cannot enter a deployment.
const bundle = await build({ entryPoints: ['scripts/verify-background-browser.ts'], bundle: true, write: false, format: 'esm', platform: 'browser' });
const root = path.resolve('dist');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.wasm': 'application/wasm' };
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (pathname === '/__background-checks/') { res.setHeader('Content-Type', 'text/html'); res.end('<!doctype html><title>Local background workflow checks</title><h1>Background transfer checks</h1><pre></pre><script type="module" src="/__background-checks.js"></script>'); return; }
  if (pathname === '/__background-checks.js') { res.setHeader('Content-Type', 'text/javascript'); res.end(bundle.outputFiles[0].text); return; }
  let file = path.resolve(root, `.${pathname}`);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).on('error', () => res.destroy()).pipe(res);
  } catch { res.writeHead(404).end('Not found'); }
});
server.listen(0, '127.0.0.1', () => console.log(`Built-site QA: http://127.0.0.1:${server.address().port}/background-remover/ ; transfer checks: /__background-checks/`));
