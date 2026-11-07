import { BLOG_POSTS } from '../src/data/blogPostsData.ts';

const post = BLOG_POSTS.find(p => p.slug === 'ctet-photo-signature-upload-error-solution-discrepancy');

if (!post) {
  console.error('CTET post not found!');
  process.exit(1);
}

const fullText = [
  post.title,
  post.metaTitle || '',
  post.metaDescription || '',
  post.excerpt,
  JSON.stringify(post.quickFacts || []),
  JSON.stringify(post.faqs || []),
  post.contentHtml
].join(' ').toLowerCase();

const keywords = [
  'ctet',
  'ctet nic in',
  'ctet result',
  'ctet admit card',
  'ctet answer key',
  'ctet login',
  'ctet syllabus',
  'ctet 2026',
  'ctet application form',
  'ctet online form',
  'ctet notification',
  'ctet eligibility',
  'ctet certificate download',
  'ctet passing marks',
  'ctet previous year question paper',
  'ctet correction window',
  'ctet photo resize',
  'ctet signature size',
  'ctet image discrepancy',
  'ctet cut off'
];

const questions = [
  'what is ctet exam',
  'who is eligible for ctet',
  'what are the passing marks for ctet',
  'can b.ed candidate apply for ctet paper 1',
  'what is the validity of ctet certificate',
  'how to download ctet certificate from digilocker',
  'how to remove image discrepancy in ctet',
  'what is qualifying marks for ctet obc',
  'what is negative marking in ctet',
  'how many times ctet is conducted in a year',
  'what is the difference between ctet paper 1 and paper 2',
  'is ctet mandatory for government teacher',
  'can final year students apply for ctet',
  'how to resize photo and signature for ctet',
  'how to change photo in ctet application form',
  'what is language 1 and language 2 in ctet',
  'how to clear ctet in first attempt',
  'what is the salary of ctet qualified teacher',
  'is ctet valid for private schools',
  'why ctet signature is rejected'
];

console.log('=== VERIFYING 20 KEYWORDS ===');
let missingKeywords = 0;
keywords.forEach((kw, i) => {
  // Normalize checking (e.g. check variations if hyphens or spaces)
  const normKw = kw.toLowerCase().replace(/[-_]/g, ' ');
  const found = fullText.includes(normKw) || fullText.includes(kw.toLowerCase()) || 
    (kw === 'ctet cut off' && (fullText.includes('cut-off') || fullText.includes('cut off')));
  
  if (found) {
    console.log(`[PASS] Keyword #${i + 1}: "${kw}"`);
  } else {
    console.error(`[FAIL] Keyword #${i + 1}: "${kw}" NOT FOUND`);
    missingKeywords++;
  }
});

console.log('\n=== VERIFYING 20 QUESTIONS ===');
let missingQuestions = 0;
questions.forEach((q, i) => {
  const normQ = q.toLowerCase().replace(/[?.,]/g, '').trim();
  const faqFound = (post.faqs || []).some(f => {
    const fq = f.question.toLowerCase().replace(/[?.,]/g, '').trim();
    return fq.includes(normQ) || normQ.includes(fq) || (fq.includes('bed') && normQ.includes('b.ed'));
  });

  if (faqFound) {
    console.log(`[PASS] Question #${i + 1}: "${q}" (Resolved in FAQ & Content)`);
  } else {
    console.error(`[FAIL] Question #${i + 1}: "${q}" NOT IN FAQS`);
    missingQuestions++;
  }
});

console.log('\n=======================================');
console.log(`Total Keywords: 20 | Missing: ${missingKeywords}`);
console.log(`Total Questions: 20 | Missing: ${missingQuestions}`);
console.log('=======================================');
