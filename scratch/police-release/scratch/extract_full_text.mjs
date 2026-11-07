import fs from 'fs';

const filePath = 'C:/Users/Admin/.gemini/antigravity-ide/brain/9d20a0b2-0a29-4d1f-9ad6-1d080fe0df69/.system_generated/steps/4/content.md';
const content = fs.readFileSync(filePath, 'utf8');

const startTag = 'property="schema:articleBody" dir="auto">';
const startIdx = content.indexOf(startTag);
if (startIdx !== -1) {
  const contentStart = startIdx + startTag.length;
  // find closing div
  const endIdx = content.indexOf('</div></div></div>', contentStart);
  const rawHtml = content.slice(contentStart, endIdx !== -1 ? endIdx : contentStart + 30000);
  
  // Clean html to readable text
  const cleaned = rawHtml
    .replace(/<h[1-6][^>]*>/gi, '\n\n### ')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<\/li>/gi, '')
    .replace(/<ol[^>]*>|<\/ol>|<ul[^>]*>|<\/ul>/gi, '')
    .replace(/<strong[^>]*>|<\/strong>|<b[^>]*>|<\/b>/gi, '**')
    .replace(/<em[^>]*>|<\/em>|<i[^>]*>|<\/i>/gi, '*')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/<[^>]+>/g, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n');

  fs.writeFileSync('scratch/extracted_article_full.txt', cleaned, 'utf8');
  console.log('Saved extracted article! Length:', cleaned.length);
} else {
  console.log('Start tag not found');
}
