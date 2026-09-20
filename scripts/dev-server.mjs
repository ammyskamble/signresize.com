import { dev } from 'astro';

console.log('Starting Astro programmatic dev server...');
try {
  const server = await dev({
    root: '.',
    server: {
      port: 4321,
      host: true
    }
  });
  console.log('Astro dev server is actively listening on port 4321');
} catch (err) {
  console.error('Failed to start dev server:', err);
}
