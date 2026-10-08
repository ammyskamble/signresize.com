// scripts/dev-server.mjs
import { dev } from 'astro';

try {
  const server = await dev({ root: '.' });
  const address = server.address;
  console.log(`Astro dev server active at http://${address.address === '::' || address.address === '0.0.0.0' ? 'localhost' : address.address}:${address.port}`);
} catch (err) {
  console.error('Failed to start Astro dev server:', err);
  process.exit(1);
}
