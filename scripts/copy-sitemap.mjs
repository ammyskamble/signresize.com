import fs from 'fs';
import path from 'path';

const distDir = path.resolve('./dist');
const sitemap0Path = path.join(distDir, 'sitemap-0.xml');
const sitemapXmlPath = path.join(distDir, 'sitemap.xml');
const sitemapIndexPath = path.join(distDir, 'sitemap-index.xml');

if (fs.existsSync(sitemap0Path)) {
  // Move sitemap-0.xml to sitemap.xml to prevent duplicate sitemap crawls
  fs.copyFileSync(sitemap0Path, sitemapXmlPath);
  fs.unlinkSync(sitemap0Path);
  console.log('✨ Successfully created canonical sitemap.xml in dist!');

  // Update sitemap-index.xml to reference sitemap.xml instead of sitemap-0.xml
  if (fs.existsSync(sitemapIndexPath)) {
    let indexContent = fs.readFileSync(sitemapIndexPath, 'utf8');
    indexContent = indexContent.replace(/sitemap-0\.xml/g, 'sitemap.xml');
    fs.writeFileSync(sitemapIndexPath, indexContent, 'utf8');
    console.log('✨ Updated sitemap-index.xml to point to sitemap.xml!');
  }
} else {
  console.error('❌ sitemap-0.xml not found in dist directory');
  process.exitCode = 1;
}
