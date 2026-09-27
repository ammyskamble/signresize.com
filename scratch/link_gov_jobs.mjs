import fs from 'fs';

let content = fs.readFileSync('src/data/governmentJobsData.ts', 'utf8');

// 1. Add guideSlug?: string to GovernmentJob interface
if (!content.includes('guideSlug?: string;')) {
  content = content.replace(
    '  toolPresetSlug: string; // matches [exam].astro or tool route',
    '  toolPresetSlug: string; // matches [exam].astro or tool route\n  guideSlug?: string; // Optional related blog guide slug'
  );
}

// Map of job ID to guideSlug
const guideMapping = {
  'ssc-cgl-2026': 'ssc-cgl-2026-master-application-preparation-guide',
  'ssc-chsl-2026': 'ssc-chsl-2026-top-10-faq-aspirants-guide',
  'ssc-gd-2026': 'ssc-gd-constable-2026-top-10-faq-complete-guide',
  'ssc-mts-2026': 'top-5-mistakes-photo-signature-rejection-govt-exams',
  'rrb-ntpc-2026': 'rrb-ntpc-2026-master-document-rules-preparation-strategy',
  'rrb-alp-2026': 'rrb-alp-technician-2026-top-10-faq-guide',
  'rrb-tech-2026': 'rrb-alp-technician-2026-top-10-faq-guide',
  'upsc-cse-2026': 'upsc-cse-2026-preparation-roadmap-daily-study-plan',
  'upsc-cds-2026': 'upsc-cds-nda-2026-top-10-faq-defence-guide',
  'upsc-nda-2026': 'upsc-cds-nda-2026-top-10-faq-defence-guide',
  'ibps-po-2026': 'ibps-po-2026-top-10-faq-banking-aspirants',
  'ibps-clerk-2026': 'ibps-po-clerk-2026-photo-signature-thumb-declaration-guidelines',
  'sbi-clerk-2026': 'sbi-clerk-2026-top-10-faq-junior-associates',
  'rbi-grade-b-2026': 'rbi-grade-b-assistant-2026-top-10-faq-guide',
  'uppsc-ro-aro-2026': 'uppsc-ro-aro-2026-top-10-faq-aspirants',
  'bpsc-cce-2026': 'bpsc-cce-teacher-2026-top-10-faq-guide',
  'bpsc-teacher-2026': 'bpsc-cce-teacher-2026-top-10-faq-guide',
  'up-police-constable-2026': 'up-police-constable-si-2026-top-10-faq-guide',
  'mah-police-constable-2026': 'maharashtra-police-bharti-2026-top-10-faq-guide',
  'india-post-gds-2026': 'india-post-gds-2026-top-10-faq-complete-guide',
  'mpsc-rajyaseva-2026': 'state-psc-otr-registration-photo-signature-guidelines',
  'kpsc-kas-2026': 'state-psc-otr-registration-photo-signature-guidelines',
  'rpsc-ras-2026': 'state-psc-otr-registration-photo-signature-guidelines',
  'tnpsc-group4-2026': 'state-psc-otr-registration-photo-signature-guidelines'
};

for (const [id, guideSlug] of Object.entries(guideMapping)) {
  const regex = new RegExp(`(id:\\s*['"]${id}['"][\\s\\S]*?toolLabel:\\s*['"][^'"]+['"])`, 'g');
  content = content.replace(regex, (match) => {
    if (!match.includes('guideSlug:')) {
      return `${match},\n    guideSlug: '${guideSlug}'`;
    }
    return match;
  });
}

fs.writeFileSync('src/data/governmentJobsData.ts', content, 'utf8');
console.log('Successfully updated governmentJobsData.ts with guideSlug properties.');
