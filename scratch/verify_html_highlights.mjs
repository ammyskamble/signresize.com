import fs from 'fs';

const html = fs.readFileSync('dist/blog/ctet-photo-signature-upload-error-solution-discrepancy/index.html', 'utf8');

const markMatches = html.match(/<mark[^>]*>.*?<\/mark>/g) || [];
console.log(`Total <mark> highlighted query answers found in built HTML: ${markMatches.length}`);

console.log('\nSample Highlights:');
markMatches.slice(0, 10).forEach((m, i) => {
  console.log(`${i + 1}: ${m}`);
});

const hasMicrodata = html.includes('itemprop="acceptedAnswer"') && html.includes('itemprop="name"');
console.log(`\nHas Schema.org Microdata on questions: ${hasMicrodata}`);

const hasFaqJsonLd = html.includes('"@type":"FAQPage"');
console.log(`Has FAQPage JSON-LD: ${hasFaqJsonLd}`);

const strayDelimiters = html.includes('==');
console.log(`Any stray unrendered "==" delimiters in HTML: ${strayDelimiters}`);
