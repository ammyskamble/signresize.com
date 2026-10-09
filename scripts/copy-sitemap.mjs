import fs from 'fs';
import path from 'path';

const distDir = path.resolve('./dist');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const sitemapXmlPath = path.join(distDir, 'sitemap.xml');

if (fs.existsSync(sitemap0Path)) {
  fs.copyFileSync(sitemap0Path, sitemapXmlPath);
  console.log('✨ Successfully copied sitemap-0.xml to sitemap.xml in dist!');
} else {
  console.error('❌ sitemap-0.xml not found in dist directory');
}
