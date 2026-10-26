import fs from 'fs';

const html = fs.readFileSync('dist/index.html', 'utf8');
const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
styles.forEach((s, i) => {
  console.log(`Style tag ${i}: ${s[1].length} chars`);
  // print first 200 chars
  console.log(s[1].slice(0, 200));
});
