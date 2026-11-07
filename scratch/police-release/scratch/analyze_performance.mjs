import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('dist/index.html', 'utf8');
console.log('--- HOMEPAGE (dist/index.html) ---');
console.log('Size:', (html.length / 1024).toFixed(1), 'KB');

const scriptSrcs = [...html.matchAll(/<script\b[^>]*src=["']([^"']+)["'][^>]*>/gi)].map(m => m[1]);
console.log('\nExternal Scripts (' + scriptSrcs.length + '):');
let totalScriptBytes = 0;
for (const s of scriptSrcs) {
  const filePath = path.join('dist', s.replace(/^\//, ''));
  if (fs.existsSync(filePath)) {
    const size = fs.statSync(filePath).size;
    totalScriptBytes += size;
    console.log(` - ${s} : ${(size / 1024).toFixed(1)} KB`);
  } else {
    console.log(` - ${s} (external or not on disk)`);
  }
}
console.log(`Total External JS: ${(totalScriptBytes / 1024).toFixed(1)} KB`);

const styleHrefs = [...html.matchAll(/<link\b[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('\nExternal Stylesheets (' + styleHrefs.length + '):');
for (const s of styleHrefs) {
  const filePath = path.join('dist', s.replace(/^\//, ''));
  if (fs.existsSync(filePath)) {
    const size = fs.statSync(filePath).size;
    console.log(` - ${s} : ${(size / 1024).toFixed(1)} KB`);
  } else {
    console.log(` - ${s}`);
  }
}

// Check inline styles
const inlineStyles = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)];
console.log('\nInline <style> tags count:', inlineStyles.length);
let totalInlineCss = 0;
inlineStyles.forEach((s, i) => {
  totalInlineCss += s[1].length;
});
console.log(`Total Inline CSS: ${(totalInlineCss / 1024).toFixed(1)} KB`);

// Check preload links
const preloads = [...html.matchAll(/<link\b[^>]*rel=["']preload["'][^>]*href=["']([^"']+)["'][^>]*>/gi)];
console.log('\nPreload tags (' + preloads.length + '):');
preloads.forEach(p => console.log(' -', p[0]));
