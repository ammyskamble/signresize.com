import fs from 'fs';

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);

console.log('Total URLs in dist/sitemap.xml:', locs.length);

const nonSlashSitemap = locs.filter(u => !u.endsWith('/'));
console.log('Non-slash URLs in sitemap:', nonSlashSitemap);

const redirects = fs.readFileSync('public/_redirects', 'utf8')
  .split(/\r?\n/)
  .map(l => l.trim().split(/\s+/))
  .filter(([src, dst, code]) => src && code === '301')
  .map(([src]) => src);

const redirectedInSitemap = locs.filter(u => {
  const path = new URL(u).pathname;
  return redirects.includes(path) || redirects.includes(path.replace(/\/$/, ''));
});

console.log('Redirected paths present in sitemap:', redirectedInSitemap);
