import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function processArticleContent(rawHtml, faqs) {
  if (!rawHtml) return { processedHtml: '', navItems: [] };

  let html = rawHtml;
  const navItems = [];
  const registeredIds = new Set();

  // 1. First ensure all <h2> tags have an id attribute (using dotAll / [\s\S]*?)
  html = html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, content) => {
    const rawText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const idMatch = attrs.match(/id="([^"]+)"/);
    let id = idMatch ? idMatch[1] : slugify(rawText);
    if (!id) id = `section-h2-${navItems.length + 1}`;

    if (!attrs.includes('id=')) {
      return `<h2 id="${id}"${attrs}>${content}</h2>`;
    }
    return match;
  });

  // 2. Parse all <h2> elements (using [\s\S]*?)
  const h2Regex = /<h2[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/gi;
  let h2Match;
  while ((h2Match = h2Regex.exec(html)) !== null) {
    const id = h2Match[1];
    const rawTitle = h2Match[2].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    const cleanTitle = rawTitle.replace(/^[⚡📐⚖️💡❓📚🏃💼📸📊🎫📝🏛️📖\d\.\s-]+/, '').trim() || rawTitle;

    if (!registeredIds.has(id)) {
      registeredIds.add(id);
      navItems.push({ id, title: cleanTitle });
    }
  }

  if (faqs && faqs.length > 0) {
    navItems.push({ id: 'faqs', title: `Frequently Asked Questions (${faqs.length} Clarified)` });
  }

  return { processedHtml: html, navItems };
}

const post = BLOG_POSTS.find(p => p.slug === 'maharashtra-police-bharti-2026-top-10-faq-guide');
if (!post) {
  console.log('Post not found');
} else {
  const result = processArticleContent(post.contentHtml, post.faqs);
  console.log('Nav items count:', result.navItems.length);
  console.log('Nav items:', JSON.stringify(result.navItems, null, 2));
}
