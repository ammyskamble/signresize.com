import type { APIRoute } from 'astro';
import { EXAM_PRESETS } from '../data/examPresets';
import { EXAM_PAGES_DATA } from '../data/examPagesData';
import { BLOG_POSTS } from '../data/blogPostsData';
import { PAN_INDIA_GOV_JOBS } from '../data/governmentJobsData';

const CORE_TOOLS = [
  {
    type: 'tool',
    id: 'tool-signature-resizer',
    slug: '',
    title: 'Signature Resizer (10–20 KB, 140x60 px)',
    shortCode: 'Sign Resize',
    desc: 'Dual-boundary 10–20 KB image compression & clean background remover',
    url: '/#tool-workspace',
    category: 'Core Resizer',
    badge: 'FLAGSHIP',
    keywords: 'signature resizer 10 to 20 kb signature compressor crop sign convert resize sign signature maker'
  },
  {
    type: 'tool',
    id: 'tool-photo-resizer',
    slug: 'photo-resizer',
    title: 'Passport Photo Resizer (3.5x4.5 cm / 20–50 KB)',
    shortCode: 'Photo Resize',
    desc: 'Crop, resize & compress passport size photos for central & state recruitment exams',
    url: '/photo-resizer/',
    category: 'Core Resizer',
    badge: 'POPULAR',
    keywords: 'photo resizer passport photo resize 20 to 50 kb 3.5x4.5 cm passport photo cropper face compressor'
  },
  {
    type: 'tool',
    id: 'tool-doc-resizer',
    slug: 'document-resizer',
    title: 'Document & Marksheet Resizer (100–300 KB)',
    shortCode: 'Doc Resize',
    desc: 'Compress 10th marksheet, caste certificate, degree, and domicile to official portal limits',
    url: '/document-resizer/',
    category: 'Core Resizer',
    badge: 'UTILITY',
    keywords: 'document resizer marksheet resize 10th marksheet compress degree certificate domicile 100 to 300 kb'
  },
  {
    type: 'tool',
    id: 'tool-compress-kb',
    slug: 'compress-image-to-kb',
    title: 'Compress Image to Specific KB (Custom Target)',
    shortCode: 'Compress KB',
    desc: 'Precise binary-search image compression to any exact target size (e.g., 20 KB, 50 KB, 100 KB)',
    url: '/compress-image-to-kb/',
    category: 'Core Resizer',
    badge: 'PRECISION',
    keywords: 'compress image to kb reduce image size kb compressor reduce photo size in kb exact kb converter'
  },
  {
    type: 'tool',
    id: 'tool-signature-creator',
    slug: 'signature-creator',
    title: 'Online Signature Creator (Touch & Pen Canvas)',
    shortCode: 'Sign Creator',
    desc: 'Draw smooth, pressure-sensitive digital signatures directly on your screen or mobile phone',
    url: '/signature-generator/',
    category: 'Signature Suite',
    badge: 'CREATIVE',
    keywords: 'signature creator online signature maker draw signature digital signature pad smooth sign maker'
  },
  {
    type: 'tool',
    id: 'tool-signature-generator',
    slug: 'signature-generator',
    title: 'Signature Generator (40+ Cursive Fonts)',
    shortCode: 'Sign Generator',
    desc: 'Generate stylish signature styles from your typed name with SVG export & transparent backgrounds',
    url: '/signature-generator/',
    category: 'Signature Suite',
    badge: 'GENERATOR',
    keywords: 'signature generator style signature name to signature cursive font signature electronic sign maker'
  },
  {
    type: 'tool',
    id: 'tool-electronic-signature',
    slug: 'electronic-signature',
    title: 'Electronic Signature Tool (Audit Trail & PDF Sign)',
    shortCode: 'E-Sign PDF',
    desc: 'Sign PDF contracts, application forms, declarations with cryptographic SHA-256 hash stamp',
    url: '/electronic-signature/',
    category: 'Signature Suite',
    badge: 'ENTERPRISE',
    keywords: 'electronic signature pdf signer sign pdf online digital document sign legally valid electronic sign'
  },
  {
    type: 'tool',
    id: 'tool-thumb-impression',
    slug: 'thumb-impression-resize',
    title: 'Left Thumb Impression Resizer (10–50 KB)',
    shortCode: 'Thumb Resize',
    desc: 'Crop and compress biometric left thumb impressions for IBPS, SSC, and state exam portals',
    url: '/thumb-impression-resize/',
    category: 'Biometric Tool',
    badge: 'BANKING',
    keywords: 'thumb impression resize lti resize ibps thumb size ssc thumb compressor biometric thumb upload'
  },
  {
    type: 'tool',
    id: 'tool-gov-jobs',
    slug: 'government-jobs',
    title: 'Pan-India Government Jobs Directory (2026 Active Vacancies)',
    shortCode: 'Govt Jobs',
    desc: 'Live verified directory of 50+ central & state recruitment notifications with direct photo/sign specs',
    url: '/government-jobs/',
    category: 'Job Directory',
    badge: 'LIVE 2026',
    keywords: 'government jobs sarkari naukri 2026 ssc vacancies railway jobs bank recruitment upsc notifications'
  },
  {
    type: 'tool',
    id: 'tool-blog-home',
    slug: 'blog',
    title: 'Exam Preparation Guides & Documentation Blog',
    shortCode: 'Blog & FAQs',
    desc: 'Authoritative study roadmaps, exam syllabus blueprints, and step-by-step document upload tutorials',
    url: '/blog/',
    category: 'Editorial',
    badge: 'KNOWLEDGE',
    keywords: 'exam blog ssc preparation tips upsc study plan rrb cutoffs photo rejection fixes exam study guides'
  }
];

const presetSlugMap = new Map([
  ['ssc-general', 'ssc-signature-resize'],
  ['upsc-civil-services', 'upsc-signature-resize'],
  ['rrb-railway', 'rrb-signature-resize'],
  ['ibps-sbi', 'ibps-signature-resize'],
  ['pan-card-nsdl', 'pan-card-signature-resize'],
  ['gate-jam', 'gate-signature-resize'],
  ['thumb-impression-general', 'thumb-impression-resize'],
  ['nta-neet-jee', 'nta-neet-jee-signature-resize'],
  ['uppsc', 'uppsc-signature-resize'],
  ['bpsc', 'bpsc-signature-resize'],
  ['mpsc', 'mpsc-signature-resize'],
  ['maharashtra-police', 'maharashtra-police-signature-resize'],
  ['tnpsc', 'tnpsc-signature-resize'],
  ['up-police', 'up-police-signature-resize'],
  ['sarathi-dl', 'sarathi-dl-signature-resize'],
  ['passport-seva', 'passport-seva-signature-resize'],
  ['clat-law', 'clat-signature-resize'],
  ['ailet-law', 'ailet-signature-resize'],
  ['lsat-india', 'lsat-india-signature-resize'],
  ['cat-iim', 'cat-signature-resize'],
  ['xat-mba', 'xat-signature-resize'],
  ['snap-mba', 'snap-signature-resize'],
  ['cmat-nmat-mat', 'cmat-nmat-signature-resize'],
  ['kpsc-karnataka', 'kpsc-signature-resize'],
  ['wbpsc-west-bengal', 'wbpsc-signature-resize'],
  ['appsc-tspsc', 'appsc-tspsc-signature-resize'],
  ['appsc-preset', 'appsc-signature-resize'],
  ['tspsc-preset', 'tspsc-signature-resize'],
  ['apsc-preset', 'apsc-signature-resize'],
  ['dsssb-preset', 'dsssb-signature-resize'],
  ['mppsc-preset', 'mppsc-signature-resize'],
  ['osssc-preset', 'osssc-signature-resize'],
  ['rpsc-ras', 'rpsc-signature-resize'],
  ['opsc-odisha', 'opsc-signature-resize'],
  ['gpsc-ojas', 'gpsc-signature-resize'],
  ['hpsc-ppsc', 'hpsc-ppsc-signature-resize'],
  ['afcat-iaf', 'afcat-signature-resize'],
  ['capf-ac', 'capf-signature-resize'],
  ['indian-coast-guard', 'indian-coast-guard-signature-resize'],
  ['agniveer-recruitment', 'agniveer-signature-resize'],
  ['ctet-exam', 'ctet-signature-resize'],
  ['state-tet', 'state-tet-signature-resize'],
  ['ugc-net-csir', 'ugc-net-signature-resize'],
  ['rbi-grade-b', 'rbi-signature-resize'],
  ['sebi-nabard-sidbi', 'sebi-nabard-signature-resize'],
  ['lic-aao-ado', 'lic-signature-resize'],
  ['isro-drdo', 'isro-drdo-signature-resize'],
  ['pan-card-photo-nsdl', 'pan-card-photo-resize'],
  ['india-post-gds-photo', 'india-post-gds-photo-resize'],
  ['kerala-psc-photo', 'kerala-psc-photo-resize'],
  ['teletalk-bd', 'teletalk-photo-signature-resize'],
  ['ppsc-pk', 'ppsc-signature-resize'],
  ['fpsc-pk', 'fpsc-photo-resize'],
  ['prc-ph', 'prc-photo-signature-resize-philippines'],
  ['loksewa-np', 'lok-sewa-photo-resize-nepal']
]);

const examPageMap = new Map(EXAM_PAGES_DATA.map((p) => [p.presetId, p]));

const searchableExams = EXAM_PRESETS.map((p) => {
  const page = examPageMap.get(p.id);
  const slug = page?.slug || presetSlugMap.get(p.id) || null;
  return {
    type: 'exam',
    id: p.id,
    slug: slug,
    url: slug ? `/${slug}/` : `/?preset=${encodeURIComponent(p.id)}#tool-workspace`,
    title: p.name,
    shortCode: p.shortCode,
    category: p.category,
    widthPx: p.widthPx,
    heightPx: p.heightPx,
    minKb: p.minKb,
    maxKb: p.maxKb,
    inkRequirement: p.inkRequirement,
    keywords: `${p.id} ${p.shortCode} ${p.name} ${p.category} ${page ? page.keywords + ' ' + page.targetExams + ' ' + page.authority : ''}`
  };
});

const searchableBlogs = BLOG_POSTS.map((b) => ({
  type: 'blog',
  id: b.slug,
  slug: b.slug,
  url: `/blog/${b.slug}/`,
  title: b.title,
  shortCode: b.category,
  category: b.category,
  excerpt: b.excerpt.slice(0, 150) + (b.excerpt.length > 150 ? '...' : ''),
  readTime: b.readTime,
  publishDate: b.publishDate,
  keywords: `${b.title} ${b.slug} ${b.category} ${(b.tags || []).join(' ')} ${b.excerpt.slice(0, 200)}`
}));

const searchableJobs = PAN_INDIA_GOV_JOBS.map((j) => ({
  type: 'job',
  id: j.id,
  slug: j.toolPresetSlug || '',
  url: j.toolPresetSlug ? `/${j.toolPresetSlug}/` : `/government-jobs/#${j.id}`,
  title: j.title,
  shortCode: j.shortCode,
  organization: j.organization,
  category: j.category,
  vacancies: j.vacancies,
  qualification: j.qualification,
  lastDate: j.lastDate,
  badge: j.badge || 'ACTIVE',
  keywords: `${j.id} ${j.title} ${j.shortCode} ${j.organization} ${j.category} ${j.state} ${j.vacancies} ${j.qualification} ${j.keyPosts ? j.keyPosts.join(' ') : ''}`
}));

const websiteSearchIndex = [
  ...CORE_TOOLS,
  ...searchableExams,
  ...searchableBlogs,
  ...searchableJobs
];

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(websiteSearchIndex), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000'
    }
  });
};
