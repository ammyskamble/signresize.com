export interface NepalPresetChip {
  presetId: string;
  mode: 'photo' | 'signature';
  label: string;
  specBadge: string;
}

export interface NepalNoticeItem {
  badge: string;
  heading: string;
  meta: string;
  body: string;
  portalLabel?: string;
  portalUrl?: string;
}

export interface NepalSpecRow {
  parameter: string;
  value: string;
  source: string;
}

export interface NepalCalloutSection {
  heading: string;
  paragraphs: string[];
  bullets?: { label: string; text: string }[];
}

export interface NepalCrossLink {
  href: string;
  anchorText: string;
  context: string;
}

export interface NepalPageConfig {
  slug: string;
  canonicalUrl: string;
  pageTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  badgeText: string;
  datesStrip?: string;
  answerParagraph: string;
  initialPresetId: string;
  initialMode: 'photo' | 'signature';
  presetChips: NepalPresetChip[];
  noticesHeading: string;
  notices: NepalNoticeItem[];
  calloutSection?: NepalCalloutSection;
  specTableHeading: string;
  specs: NepalSpecRow[];
  verificationNote: string;
  howToHeading: string;
  howToSteps: string[];
  officialPortals: { label: string; url: string }[];
  faqs: { q: string; a: string }[];
  crossLinks: NepalCrossLink[];
}

export const NEPAL_EXAM_PAGES: Record<string, NepalPageConfig> = {
  'pradesh-lok-sewa-photo-resize': {
    slug: 'pradesh-lok-sewa-photo-resize',
    canonicalUrl: 'https://signresize.in/np/pradesh-lok-sewa-photo-resize/',
    pageTitle: 'Pradesh Lok Sewa Photo & Signature Resize Nepal 2026',
    metaDescription:
      'Free Pradesh Lok Sewa Aayog photo & signature resizer for Gandaki (closes 17 Nov) and Karnali PPSC (153 posts, closes 30 Nov). Matches verified ≤500 KB JPG/PNG portal limits.',
    keywords:
      'pradesh lok sewa photo size, gandaki lok sewa photo resize, karnali ppsc photo size, ppsc nepal signature resize, onlineppsc.gandaki.gov.np, ppsconline.karnali.gov.np',
    h1: 'Pradesh Lok Sewa Aayog Photo and Signature Resizer',
    badgeText: '🇳🇵 Nepal Provincial PSC Family · Checked 12 Nov 2026',
    datesStrip:
      'Gandaki 7th Level (Notice 169/2083-84) closes 17 Nov 2026 (double fee 24 Nov) · Karnali 4th Level (Notice 30/2083-84 · 153 posts) closes 30 Nov 2026 (double fee 7 Dec)',
    answerParagraph:
      'For Nepal’s active Provincial Public Service Commission portals (Gandaki onlineppsc.gandaki.gov.np and Karnali ppsconline.karnali.gov.np), photographs, signatures, and citizenship scans must be uploaded in JPG or PNG format at 500 KB or less (PDF documents ≤500 KB). Regular deadlines close 17 Nov 2026 for Gandaki 7th Level and 30 Nov 2026 for Karnali 4th Level.',
    initialPresetId: 'pradesh-loksewa-photo-np',
    initialMode: 'photo',
    presetChips: [
      {
        presetId: 'pradesh-loksewa-photo-np',
        mode: 'photo',
        label: 'Provincial Photo (3.5×4.5 cm)',
        specBadge: 'JPG ≤200 KB (Portal cap 500 KB)',
      },
      {
        presetId: 'pradesh-loksewa-sign-np',
        mode: 'signature',
        label: 'Provincial Signature',
        specBadge: 'JPG ≤100 KB (Portal cap 500 KB)',
      },
      {
        presetId: 'pradesh-loksewa-doc-np',
        mode: 'document',
        label: 'Citizenship / Doc JPG',
        specBadge: 'JPG ≤500 KB',
      },
    ],
    noticesHeading: 'Open Provincial Lok Sewa Rounds & Province Status (Nov 2026)',
    notices: [
      {
        badge: 'OPEN · CLOSES 17 NOV 2026',
        heading: 'Gandaki Province PSC — 7th Level (Technical & Non-Technical), Notice 169/2083-84',
        meta: 'Published 2083/07/11 · Regular deadline 17 Nov 2026 (2083/08/01) · Double fee 24 Nov 2026 (2083/08/08)',
        body: 'Permanent recruitment across Provincial Civil Service and Local Service 7th-level engineering, health, administration, and accounts groups. Portal: onlineppsc.gandaki.gov.np.',
        portalLabel: 'onlineppsc.gandaki.gov.np',
        portalUrl: 'https://onlineppsc.gandaki.gov.np/',
      },
      {
        badge: 'OPEN · CLOSES 30 NOV 2026 · 153 POSTS',
        heading: 'Karnali Province PSC — 4th Level Local Service, Notice 30/2083-84',
        meta: 'Published 2083/07/24 · Regular deadline 30 Nov 2026 (2083/08/14) · Double fee 7 Dec 2026 (2083/08/21)',
        body: '153 posts open across Karnali local levels: Administration Assistant (52), Assistant Sub-Engineer (44), ANM (17), Veterinary (14), AHW (13), Agriculture / JTA (10), Amin (2), and WSS Technician (1). Portal: ppsconline.karnali.gov.np.',
        portalLabel: 'ppsconline.karnali.gov.np',
        portalUrl: 'https://ppsconline.karnali.gov.np/',
      },
      {
        badge: 'NEXT ROUND AWAITED',
        heading: 'Lumbini Province PSC',
        meta: 'Previous 9th/8th-level round closed 12 Nov 2026',
        body: 'Next advertisement round awaited; no active dates currently listed.',
        portalLabel: 'ppsc.lumbini.gov.np',
        portalUrl: 'https://ppsc.lumbini.gov.np/',
      },
      {
        badge: 'NO OPEN ROUND · NOV 2026',
        heading: 'Koshi, Madhesh, Bagmati & Sudurpashchim Province PSCs',
        meta: 'Checked Nov 2026',
        body: 'Koshi Province PSC: no open round as of Nov 2026 (previous cycle closed 8 Nov) · Madhesh Province PSC: no open round as of Nov 2026 (advertisements postponed) · Bagmati Province PSC: no open round as of Nov 2026 · Sudurpashchim Province PSC: no open round as of Nov 2026.',
      },
    ],
    specTableHeading: 'Verified Pradesh Lok Sewa Upload Rules (Official Portal Checks)',
    specs: [
      {
        parameter: 'Photograph file limit & format',
        value: '≤ 500 KB · JPG or PNG (Tool defaults to 20–200 KB JPG)',
        source: 'Gandaki PPSC live form validator ("Photograph file size should not be more than 500KB") & Karnali FAQ Q4',
      },
      {
        parameter: 'Signature file limit & format',
        value: '≤ 500 KB · JPG or PNG (Tool defaults to 10–100 KB JPG)',
        source: 'Gandaki PPSC live form validator ("Signature file size should not be more than 500KB") & Karnali FAQ Q4',
      },
      {
        parameter: 'Citizenship certificate scan',
        value: 'Front & back · JPG or PNG · ≤ 500 KB',
        source: 'Gandaki Notice 169/2083-84 PDF Page 7 (JPG format) + live validator (≤500 KB)',
      },
      {
        parameter: 'Academic, council & inclusive PDFs',
        value: 'PDF format · ≤ 500 KB per file',
        source: 'Gandaki Notice 169/2083-84 PDF Page 7 & Karnali FAQ Q4 ("pdf, png, jpeg · ५०० के.बि वा सो भन्दा कम")',
      },
    ],
    verificationNote:
      'Conflict Check Resolved (12 Nov 2026): General Lok Sewa guides for the federal system often cite <200 KB photo / <100 KB signature (or ≤50 KB on psconline.psc.gov.np), while direct inspection of Gandaki (onlineppsc.gandaki.gov.np) and Karnali (ppsconline.karnali.gov.np FAQ Q4) shows a ≤500 KB upload cap. Exporting under 200 KB (photo) and 100 KB (signature) passes cleanly under both rules.',
    howToHeading: 'How to Upload Your Photo & Signature on Provincial PPSC Portals',
    howToSteps: [
      'Crop a recent clear passport photograph on a plain light background using the Provincial Photo preset above and download the JPG.',
      'Switch to the Provincial Signature preset, crop your dark-ink signature on clean unruled white paper, and export the JPG.',
      'Sign in on onlineppsc.gandaki.gov.np (for Notice 169/2083-84) or ppsconline.karnali.gov.np (for Notice 30/2083-84) and open your Master Profile.',
      'Upload photo, signature, and front/back citizenship JPGs along with ≤500 KB academic/inclusive PDFs before submitting the advertisement fee voucher.',
    ],
    officialPortals: [
      { label: 'Gandaki PPSC Portal (onlineppsc.gandaki.gov.np)', url: 'https://onlineppsc.gandaki.gov.np/' },
      { label: 'Karnali PPSC Portal (ppsconline.karnali.gov.np)', url: 'https://ppsconline.karnali.gov.np/' },
      { label: 'Karnali Notice 30/2083-84 Summary Page', url: 'https://ppsc.karnali.gov.np/content/9883/advertisement-of-promotion-and-open-and-internal/' },
    ],
    faqs: [
      {
        q: 'What is the photo size for Pradesh Lok Sewa Aayog?',
        a: 'Verified live checks on Gandaki (onlineppsc.gandaki.gov.np) and Karnali (ppsconline.karnali.gov.np FAQ Q4) confirm a maximum upload limit of 500 KB in JPG or PNG format for photographs and signatures. Using this preset’s 3.5×4.5 cm (≤200 KB) JPG satisfies the 500 KB provincial cap and stricter federal-style guides alike.',
      },
      {
        q: 'How do I apply online for Gandaki Lok Sewa 7th level?',
        a: 'Create or sign in to your candidate profile at onlineppsc.gandaki.gov.np, upload your passport photo, signature, and front/back citizenship in JPG/PNG (under 500 KB) plus educational certificates in PDF (under 500 KB), choose your Notice 169/2083-84 advertisement number, and pay the fee by 17 Nov 2026 (or double fee by 24 Nov 2026).',
      },
      {
        q: 'What is the last date for Karnali Lok Sewa 4th level?',
        a: 'Per Karnali Province PSC Notice 30/2083-84 (153 Local Service posts), regular-fee applications close on 30 Nov 2026 (2083/08/14), and double-fee applications close on 7 Dec 2026 (2083/08/21) at ppsconline.karnali.gov.np.',
      },
      {
        q: 'Can I use the same photo and signature for all provincial PSC applications?',
        a: 'Because each province hosts its own PPSC database (Gandaki, Karnali, Lumbini, Koshi, Madhesh, Bagmati, Sudurpashchim), you must register separately on each portal—but you can reuse the same clean ≤200 KB JPG passport photo and ≤100 KB JPG signature file across all provincial forms unless a specific notice states a newer date rule.',
      },
    ],
    crossLinks: [
      { href: '/np/', anchorText: 'Nepal Exam Photo & Signature Resizer Hub', context: 'All open Nepal windows by deadline' },
      { href: '/np/lok-sewa-photo-resize-nepal/', anchorText: 'Federal Lok Sewa Photo & Signature Resizer (≤50 KB)', context: 'Applying to federal psconline.psc.gov.np instead?' },
      { href: '/np/nepal-telecom-photo-signature-resize/', anchorText: 'Nepal Telecom signature resize', context: 'NTC 06/2083-84 closes 19 Nov (100–200 KB)' },
      { href: '/np/nea-photo-signature-resize/', anchorText: 'NEA photo resize', context: 'NEA closes 26 Nov (both ears visible)' },
    ],
  },

  'nepal-telecom-photo-signature-resize': {
    slug: 'nepal-telecom-photo-signature-resize',
    canonicalUrl: 'https://signresize.in/np/nepal-telecom-photo-signature-resize/',
    pageTitle: 'Nepal Telecom Photo & Signature Resize (≤200 KB) 2026',
    metaDescription:
      'Official Nepal Telecom (NTC) Notice 06/2083-84 photo & signature resizer. Strictly 100–200 KB .JPG per file (≤200 KB cap) for recruit.ntc.net.np before 19 Nov 2026.',
    keywords:
      'nepal telecom photo size, ntc vacancy 2083 photo resize, recruit.ntc.net.np signature size, ntc 200 kb photo, ntc 06/2083-84',
    h1: 'Nepal Telecom (NTC) Photo and Signature Resizer',
    badgeText: '🇳🇵 Notice 06/2083-84 · Closes 19 Nov 2026',
    datesStrip:
      'Notice 06/2083-84 (Published 30 Oct 2026 / 2083/07/13) · 80 Posts (Levels 3–9) · Regular Deadline 19 Nov 2026 (2083/08/03) · Double Fee 26 Nov 2026 (2083/08/10)',
    answerParagraph:
      'Nepal Telecom (recruit.ntc.net.np) enforces a strict file-size band where every uploaded document and photo must be strictly between 100 KB and 200 KB (never under 100 KB and never over 200 KB), and photo, signature, and citizenship scans must be .JPG format. Regular applications for Notice 06/2083-84 (80 posts, Levels 3–9) close on 19 Nov 2026.',
    initialPresetId: 'ntc-photo-np',
    initialMode: 'photo',
    presetChips: [
      {
        presetId: 'ntc-photo-np',
        mode: 'photo',
        label: 'NTC Photo Preset',
        specBadge: '100–200 KB (≤200 KB · rec 165 KB) · .JPG',
      },
      {
        presetId: 'ntc-sign-np',
        mode: 'signature',
        label: 'NTC Signature Preset',
        specBadge: '100–200 KB (≤200 KB · rec 150 KB) · .JPG',
      },
      {
        presetId: 'ntc-doc-np',
        mode: 'document',
        label: 'NTC Citizenship / Doc',
        specBadge: '100–200 KB (≤200 KB) · .JPG',
      },
    ],
    noticesHeading: 'Nepal Telecom (NTC) Recruitment Notice 06/2083-84 Overview',
    notices: [
      {
        badge: 'OPEN · CLOSES 19 NOV 2026 · 80 POSTS',
        heading: 'NTC Open & Inclusive Competition — Notice 06/2083-84 (Levels 3–9)',
        meta: 'Gorkhapatra Date: 2083/07/13 (30 Oct 2026) · Regular Fee: 2083/08/03 (19 Nov 2026) · Double Fee: 2083/08/10 (26 Nov 2026)',
        body: '80 permanent vacancies across 14 advertisements from Level 3 to Level 9: Level 9 (1 Deputy Manager CA), Level 8 (3 Sr. Engineers/Officers), Level 7 (16 Telecom Engineers), Level 6 (19 Assistant Officers), Level 5 (3 Overseers), Level 4 (26 Telecom Technicians & Assistants), and Level 3 (12 Junior Technicians). Online applications accepted exclusively via recruit.ntc.net.np.',
        portalLabel: 'recruit.ntc.net.np',
        portalUrl: 'https://recruit.ntc.net.np/',
      },
    ],
    calloutSection: {
      heading: 'Why 100–200 KB Per File Matters on recruit.ntc.net.np',
      paragraphs: [
        'Unlike generic portals that only cap maximum size, NTC Online Form Manual 2083 (Page 2, Point iv) states verbatim: "Upload गरिने Document तथा फोटोको Size 100 KB भन्दा कम वा 200 KB भन्दा बढी हुनु हुँदैन" — files smaller than 100 KB OR larger than 200 KB violate the portal rule.',
        'Page 5 of the official manual further advises not compressing scanned photos below 150 KB so printed A4 application sheets stay readable. This tool automatically bounds your JPG output between 100 KB and 200 KB (targeting ~165 KB for photos and ~150 KB for signatures) so your upload stays safely under the ≤200 KB ceiling without triggering a minimum-size or readability failure.',
      ],
    },
    specTableHeading: 'Verified NTC Upload Rules (Online Form Manual 2083 & Official FAQ)',
    specs: [
      {
        parameter: 'Mandatory File Size Range',
        value: '100 KB to 200 KB (≤ 200 KB max, ≥ 100 KB min)',
        source: 'NTC Online Form Manual 2083 PDF Page 2, Point iv ("100 KB भन्दा कम वा 200 KB भन्दा बढी हुनु हुँदैन")',
      },
      {
        parameter: 'Recommended Scan Clarity Floor',
        value: '150–200 KB when reducing oversized photo scans',
        source: 'NTC Online Form Manual 2083 PDF Page 5 Note (for sharp A4 print legibility)',
      },
      {
        parameter: 'Photo, Signature & Citizenship Formats',
        value: '.JPG format required (other certificates in .PDF)',
        source: 'NTC Official Recruitment FAQ Page 8 ("फोटो .JPG, हस्ताक्षर .JPG, नागरिकताको अगाडि/पछाडि .JPG")',
      },
      {
        parameter: 'Regular & Double Fee Deadlines',
        value: '19 Nov 2026 (2083/08/03) · Double fee 26 Nov 2026 (2083/08/10)',
        source: 'NTC Official Notice 06/2083-84 Point ङ (resolves aggregator "20 Nov" conflict)',
      },
    ],
    verificationNote:
      'Conflict Check Resolved (12 Nov 2026): One external aggregator listed 20 Nov 2026 as the closing date. Direct verification of Notice 06/2083-84 (published 2083/07/13, 21-day window) confirms regular applications close on 2083/08/03 (19 Nov 2026). Both photo and signature presets enforce 100–200 KB .JPG.',
    howToHeading: 'How to Prepare & Upload Documents on recruit.ntc.net.np',
    howToSteps: [
      'Upload a recent clear passport photograph above using the NTC Photo preset (locked to 100–200 KB, .JPG) and download.',
      'Switch to the NTC Signature preset, crop your black/dark-ink signature on plain white paper, and download the 100–200 KB .JPG.',
      'Prepare Citizenship Front & Back as separate .JPG files (also ≤200 KB) and convert academic, council, or inclusive certificates into .PDF.',
      'Log in at recruit.ntc.net.np, verify extension rules match (.JPG for photo/signature/citizenship, .PDF for certificates) to avoid "कागजात नमिलेको", and submit before 19 Nov 2026.',
    ],
    officialPortals: [
      { label: 'Nepal Telecom Recruitment Portal (recruit.ntc.net.np)', url: 'https://recruit.ntc.net.np/' },
      { label: 'NTC All Career Notices (ntc.net.np)', url: 'https://www.ntc.net.np/post/new-career' },
      { label: 'Official NTC Online Form Manual 2083 PDF', url: 'https://cms.ntc.net.np/storage/media/QMQ3125qayZ307GeHw6nF3dmB23ZPG5asGUyqo28.pdf' },
    ],
    faqs: [
      {
        q: 'What is the photo size for Nepal Telecom vacancy?',
        a: 'Per the official NTC Online Form Manual 2083 and FAQ, your passport-size photograph must be in .JPG format between 100 KB and 200 KB (strictly ≤200 KB and ≥100 KB). Manual Page 5 recommends staying near 150–200 KB when resizing scans so your printed admit card photo stays clear.',
      },
      {
        q: 'What is the last date for NTC vacancy 2083?',
        a: 'According to official Nepal Telecom Notice 06/2083-84 (published 2083/07/13 / 30 Oct 2026), regular-fee applications close on 19 Nov 2026 (2083/08/03 BS), and double-fee applications close on 26 Nov 2026 (2083/08/10 BS).',
      },
      {
        q: 'Why is my photo rejected on recruit.ntc.net.np?',
        a: 'Most rejections happen because the file exceeds 200 KB, drops below 100 KB, or uses a non-.JPG extension such as PNG/WEBP or .PDF for an image slot (triggering the "कागजात नमिलेको" error). Ensure photo, signature, and citizenship scans are .JPG inside 100–200 KB.',
      },
      {
        q: 'How many posts are open in Nepal Telecom 2026?',
        a: 'Notice 06/2083-84 opens 80 permanent posts across Levels 3 to 9 (Level 9: 1, Level 8: 3, Level 7: 16, Level 6: 19, Level 5: 3, Level 4: 26, Level 3: 12).',
      },
    ],
    crossLinks: [
      { href: '/np/nea-photo-signature-resize/', anchorText: 'NEA photo resize', context: 'Also applying to Nepal Electricity Authority? (Closes 26 Nov)' },
      { href: '/np/', anchorText: 'Nepal Exam Photo & Signature Resizer Hub', context: 'View all open Nepal deadlines' },
      { href: '/np/lok-sewa-photo-resize-nepal/', anchorText: 'Federal Lok Sewa Photo & Signature Resizer (≤50 KB)', context: 'Need ≤50 KB federal PSC presets instead?' },
      { href: '/np/pradesh-lok-sewa-photo-resize/', anchorText: 'Pradesh Lok Sewa resizer', context: 'Gandaki & Karnali provincial rounds' },
    ],
  },

  'nea-photo-signature-resize': {
    slug: 'nea-photo-signature-resize',
    canonicalUrl: 'https://signresize.in/np/nea-photo-signature-resize/',
    pageTitle: 'NEA Photo & Signature Resize — Nepal Electricity 2026',
    metaDescription:
      'Free Nepal Electricity Authority (NEA) 2083/2026 photo & signature resizer for career.nea.org.np. Format recent both-ears-visible JPG photo & signature before 26 Nov 2026.',
    keywords:
      'nea photo size nepal, career.nea.org.np photo resize, nepal electricity authority vacancy 2083 signature, nea both ears visible photo',
    h1: 'NEA (Nepal Electricity Authority) Photo and Signature Resizer',
    badgeText: '🇳🇵 Open Competition 2083 · Closes 26 Nov 2026',
    datesStrip:
      'Published 6 Nov 2026 (2083/07/20) · Officer Levels 10, 8, 7 & Assistant Level 5 · Regular Deadline 26 Nov 2026 (2083/08/10) · Double Fee 3 Dec 2026 (2083/08/17)',
    answerParagraph:
      'For the Nepal Electricity Authority (NEA) 2083 open competition on career.nea.org.np, Point 19(क) of the official notice requires a recent passport-size JPG photograph with both ears visible (दुवै कान देखिने), a scanned signature in JPG format, and citizenship in JPG format (supporting certificates in PDF). Regular applications close on 26 Nov 2026.',
    initialPresetId: 'nea-photo-np',
    initialMode: 'photo',
    presetChips: [
      {
        presetId: 'nea-photo-np',
        mode: 'photo',
        label: 'NEA Passport Photo (Both Ears Visible)',
        specBadge: 'JPG · Editable 3.5×4.5 cm (rec 80 KB)',
      },
      {
        presetId: 'nea-sign-np',
        mode: 'signature',
        label: 'NEA Signature',
        specBadge: 'JPG · White Paper (rec 45 KB)',
      },
      {
        presetId: 'nea-doc-np',
        mode: 'document',
        label: 'NEA Citizenship JPG',
        specBadge: 'JPG · Notice Point 19(क)',
      },
    ],
    noticesHeading: 'NEA Open Competition Notice 2083/07/20 Details',
    notices: [
      {
        badge: 'OPEN · CLOSES 26 NOV 2026',
        heading: 'Nepal Electricity Authority — Permanent Officer & Assistant Positions (2083)',
        meta: 'Published 2083/07/20 (6 Nov 2026) · Regular Deadline: 26 Nov 2026 (2083/08/10) · Double Fee: 3 Dec 2026 (2083/08/17)',
        body: 'Permanent open competition covering Officer levels (Levels 10, 8, and 7 across engineering, administration, accounts, and technical roles) and Assistant level (Level 5 Supervisors/Assistants). Open candidates apply via career.nea.org.np (internal NEA staff use hris.nea.org.np). Because the official provincial-quota tables do not print a combined grand total row, no unverified post count is published here.',
        portalLabel: 'career.nea.org.np',
        portalUrl: 'https://career.nea.org.np/',
      },
    ],
    calloutSection: {
      heading: 'Why NEA Requires Both Ears Visible — Photo Do & Don’t Checklist',
      paragraphs: [
        'Point 19(क) of NEA’s official advertisement states verbatim: "हालसालै खिचिएको दुवै कान देखिने पासपोर्ट साइजको फोटो" — your photo must be recently taken with both ears clearly visible.',
      ],
      bullets: [
        { label: 'Show both ears', text: 'Pin or tuck hair behind both ears before taking your portrait; tilted heads or hidden ears are a frequent NEA scrutiny objection.' },
        { label: 'Plain light background', text: 'Stand against an uncluttered plain wall with even front lighting and no shadows behind your ears or neck.' },
        { label: 'No glare or headwear', text: 'Keep spectacles off if lenses reflect studio light; avoid caps or tinted glasses unless medically documented.' },
        { label: 'Use crisp JPG', text: 'Save the photo, signature, and Nepali citizenship scans strictly as JPG files (not PNG/WEBP), and keep all academic/council documents as PDFs.' },
      ],
    },
    specTableHeading: 'Verified NEA Application Upload Rules (Notice 2083/07/20 Point 19)',
    specs: [
      {
        parameter: 'Photograph Rule & Format',
        value: 'Recent passport size · JPG · Both ears visible (दुवै कान देखिने)',
        source: 'NEA Open Competition Notice 2083/07/20, Point 19(क)',
      },
      {
        parameter: 'Signature & Citizenship Format',
        value: 'JPG format required',
        source: 'NEA Open Competition Notice 2083/07/20, Point 19(क)',
      },
      {
        parameter: 'Numeric KB / Pixel Limits',
        value: 'Not specified in notice PDF (Editable 3.5×4.5 cm JPG ~80 KB photo / ~45 KB signature)',
        source: 'Official NEA advertisement PDF states format and "both ears visible" without publishing numeric KB or pixel limits',
      },
      {
        parameter: 'Education, Council & Inclusive Docs',
        value: 'PDF format (merged per required category)',
        source: 'NEA Open Competition Notice 2083/07/20, Point 19(क)',
      },
    ],
    verificationNote:
      'Conflict Check Resolved (12 Nov 2026): External blogs report conflicting NEA totals (392 vs 405 vs 408). Inspection of the official NEA advertisement PDF (nea.org.np/en/recruitment/open/advertisements/426) confirms separate provincial tables without a printed grand total, so this page omits any unverified total.',
    howToHeading: 'How to Apply Online on career.nea.org.np',
    howToSteps: [
      'Crop a recent straight-on passport photo with both ears clearly visible using the NEA Photo preset above and save as JPG.',
      'Switch to NEA Signature, sign with a black or dark pen on unruled white paper, remove paper shadows with Clean White Paper if needed, and save as JPG.',
      'Scan your Nepali citizenship certificate as JPG and save transcripts, character certificates, NEC/ICAN council registrations, and inclusive certificates as PDFs.',
      'Register or log in on career.nea.org.np (open candidates), upload all documents into the designated fields, and complete payment before 26 Nov 2026 (or double fee by 3 Dec 2026).',
    ],
    officialPortals: [
      { label: 'NEA Career Portal (career.nea.org.np)', url: 'https://career.nea.org.np/' },
      { label: 'NEA Official Vacancy Notice #426', url: 'https://nea.org.np/en/recruitment/open/advertisements/426' },
    ],
    faqs: [
      {
        q: 'What is the photo size for NEA vacancy?',
        a: 'NEA’s official 2083/07/20 notice requires a recent passport-size JPG photograph showing both ears clearly ("दुवै कान देखिने"), without printing a fixed KB or pixel number. Preparing a sharp 3.5×4.5 cm JPG around 50–150 KB keeps uploads reliable on career.nea.org.np.',
      },
      {
        q: 'What is the last date for NEA application 2083?',
        a: 'Per Point 8 of the official NEA notice (published 2083/07/20 / 6 Nov 2026), regular-fee applications close on 26 Nov 2026 (2083/08/10 BS), and double-fee applications close on 3 Dec 2026 (2083/08/17 BS).',
      },
      {
        q: 'Why does NEA ask for a photo with both ears visible?',
        a: 'Point 19(क) explicitly mandates "दुवै कान देखिने पासपोर्ट साइजको फोटो" for clear identity matching from your online form through admit-card verification and biometric exam entry. If hair covers your ears or your head is angled, the application can face document scrutiny.',
      },
      {
        q: 'What documents are required for the NEA online form?',
        a: 'You need a JPG passport photo (both ears visible), JPG signature, and JPG Nepali citizenship certificate, plus PDF scans of minimum educational qualifications, character certificates, Nepal Engineering/CA council registration (where required), foreign equivalence (if applicable), and inclusive group proof.',
      },
    ],
    crossLinks: [
      { href: '/np/nepal-telecom-photo-signature-resize/', anchorText: 'Nepal Telecom signature resize', context: 'Also applying to Nepal Telecom? NTC 06/2083-84 closes 19 Nov (100–200 KB).' },
      { href: '/np/', anchorText: 'Nepal Exam Photo & Signature Resizer Hub', context: 'View all open Nepal recruitment windows' },
      { href: '/np/lok-sewa-photo-resize-nepal/', anchorText: 'Federal Lok Sewa Photo & Signature Resizer (≤50 KB)', context: 'Need federal psconline.psc.gov.np specs?' },
      { href: '/np/pradesh-lok-sewa-photo-resize/', anchorText: 'Pradesh Lok Sewa resizer', context: 'Gandaki & Karnali provincial portals' },
    ],
  },

  'university-entrance-photo-resize': {
    slug: 'university-entrance-photo-resize',
    canonicalUrl: 'https://signresize.in/np/university-entrance-photo-resize/',
    pageTitle: 'Nepal University Entrance Photo Resize 2026 (KU & PU)',
    metaDescription:
      'Free photo resizer for Nepal university entrances: Kathmandu University (≤500 KB, 50–60% face) & Purbanchal University BE/B.Arch (51×51 mm JPG/PNG).',
    keywords:
      'kathmandu university photo size, apply.ku.edu.np photo resize, purbanchal university photo 51x51 mm, nepal university entrance photo size',
    h1: 'University Entrance Photo Resizer — Nepal',
    badgeText: '🇳🇵 University Entrance Family · KU · Purbanchal · TU',
    datesStrip:
      'Kathmandu Univ. SoE Course-Based Master’s 2026/27 (Check apply.ku.edu.np; Nov 2026 cycle) · Purbanchal Univ. FoE Re-Entrance (Check entrance.puexam.edu.np)',
    answerParagraph:
      'For Nepal university entrance portals, select your exact university preset above: Kathmandu University (apply.ku.edu.np) mandates a recent colour photo on a light plain background with your face covering 50–60% of the frame at ≤500 KB (supporting files ≤500 KB each), while Purbanchal University Engineering (entrance.puexam.edu.np) mandates a 51×51 mm square colour photo in JPG, JPEG, or PNG.',
    initialPresetId: 'ku-entrance-photo-np',
    initialMode: 'photo',
    presetChips: [
      {
        presetId: 'ku-entrance-photo-np',
        mode: 'photo',
        label: 'Kathmandu Univ. (KU)',
        specBadge: '≤500 KB · Face 50–60% · Light BG',
      },
      {
        presetId: 'pu-entrance-photo-np',
        mode: 'photo',
        label: 'Purbanchal Univ. (FoE)',
        specBadge: '51×51 mm Square · JPG/PNG',
      },
    ],
    noticesHeading: 'Active University Entrance Rounds & Placeholders (Nov 2026)',
    notices: [
      {
        badge: 'ADMISSION OPEN · KU SOE',
        heading: 'Kathmandu University — School of Engineering Master’s Programs (Course-Based 2026/27)',
        meta: 'Call published on ku.edu.np (SoE) · Target Nov 2026 cycle (deadline 25 Nov 2026; tests/interviews 30 Nov–4 Dec — confirm active round on apply.ku.edu.np)',
        body: 'Official KU Procedure Appendix A1 & A2 rules verified: upload a recent colour passport photo with light plain background and 50–60% face coverage (≤500 KB), plus readable supporting documents (≤500 KB each).',
        portalLabel: 'apply.ku.edu.np',
        portalUrl: 'https://apply.ku.edu.np/',
      },
      {
        badge: 'RE-ENTRANCE PORTAL · 51×51 MM',
        heading: 'Purbanchal University — Faculty of Engineering BE / B.Arch Re-Entrance 2083/84',
        meta: 'Notice dated 2083/06/02: Regular deadline 2083 Kartik 19 (5 Nov 2026) · Late fee 2083 Kartik 27 (13 Nov 2026) — verify active round schedule directly on entrance.puexam.edu.np',
        body: 'Notice Point 8(क) strictly specifies a recent 51 mm × 51 mm digital colour photo with full face visible and plain background in JPEG, JPG, or PNG format (any other size/format is invalid). Because the notice prints no KB ceiling, no KB limit is fabricated here.',
        portalLabel: 'entrance.puexam.edu.np',
        portalUrl: 'https://entrance.puexam.edu.np/',
      },
      {
        badge: 'FUTURE CYCLES · PLACEHOLDER',
        heading: 'Tribhuvan University Entrances (IOE / IOM / BBA)',
        meta: 'Future central & institute entrance cycles will appear here (IoST B.Sc. re-entrance closing 13 Nov excluded)',
        body: 'Bookmark this page for upcoming TU IOE, IOM, and FOM entrance form requirements once the next official notice opens.',
        portalLabel: 'puexam.edu.np / tu.edu.np',
        portalUrl: 'https://puexam.edu.np/',
      },
      {
        badge: 'CLOSED CYCLE · NO OPEN NOTICE',
        heading: 'Medical Education Commission (MEC)',
        meta: 'No PG entrance notice published yet as of 12 Nov 2026',
        body: 'MECEE-BL round has closed; PG sections will be added only when MEC publishes an official notice.',
      },
    ],
    specTableHeading: 'Verified University Entrance Photo Rules (Official Notices)',
    specs: [
      {
        parameter: 'Kathmandu University Photo Spec',
        value: 'Recent colour · light plain background · 50–60% face coverage · ≤ 500 KB',
        source: 'KU Official Procedure 2026 PDF, Appendix A1',
      },
      {
        parameter: 'Kathmandu University Document Spec',
        value: 'Clear scanned copies · ≤ 500 KB per file',
        source: 'KU Official Procedure 2026 PDF, Appendix A2',
      },
      {
        parameter: 'Purbanchal University BE/B.Arch Photo Spec',
        value: '51 mm × 51 mm square · plain background · full face · JPEG / JPG / PNG',
        source: 'Purbanchal University BE/B.Arch Re-Entrance Notice, Point 8(क) ("51mm×51mm Passport size")',
      },
      {
        parameter: 'Purbanchal KB Limit',
        value: 'Not specified in Point 8(क) notice text (Preset exports clean ~200 KB JPG)',
        source: 'entrance.puexam.edu.np official notice image',
      },
    ],
    verificationNote:
      'Audit Note (12 Nov 2026): Live check of entrance.puexam.edu.np showed the 2083/06/02 notice image listing Kartik 19 / Kartik 27 alongside re-entrance portal links, while KU SoE published the 2026/27 course-based Master’s call on ku.edu.np. Always verify your active closing date inside apply.ku.edu.np or entrance.puexam.edu.np before fee payment.',
    howToHeading: 'How to Prepare Your University Entrance Photo',
    howToSteps: [
      'Click the Kathmandu Univ. (KU) or Purbanchal Univ. (FoE) preset chip above the workspace to lock the matching ratio and file limit.',
      'Upload a front-facing colour portrait taken against a plain light or white wall, and align your face inside the crop guide (covering ~50–60% for KU, or centred squarely inside 51×51 mm for Purbanchal).',
      'Export your JPG and verify the downloaded image is crisp and under 500 KB.',
      'Upload on apply.ku.edu.np or entrance.puexam.edu.np along with your citizenship and academic scans.',
    ],
    officialPortals: [
      { label: 'Kathmandu University Admission Portal (apply.ku.edu.np)', url: 'https://apply.ku.edu.np/' },
      { label: 'KU School of Engineering (soe.ku.edu.np)', url: 'https://soe.ku.edu.np/' },
      { label: 'Purbanchal University Entrance Portal (entrance.puexam.edu.np)', url: 'https://entrance.puexam.edu.np/' },
    ],
    faqs: [
      {
        q: 'What photo size do Nepali universities ask for entrance forms?',
        a: 'Specifications depend on the university: Kathmandu University requires a recent colour photo on a light plain background with 50–60% face coverage and file size ≤500 KB, whereas Purbanchal University Faculty of Engineering strictly requires a 51×51 mm square digital colour photo in JPG, JPEG, or PNG.',
      },
      {
        q: 'What is the Kathmandu University online application photo size?',
        a: 'Per KU Admission Procedure Appendix A1, your photo must be in colour on a light plain background with at least 50–60% covered by your face and file size no larger than 500 KB (supporting documents are also capped at ≤500 KB each).',
      },
      {
        q: 'What photo size does Purbanchal University BE/B.Arch entrance require?',
        a: 'Point 8(क) of the Purbanchal University BE/B.Arch Re-Entrance notice specifies an exact 51 mm × 51 mm square colour photo showing the full face on a plain background in JPEG, JPG, or PNG format.',
      },
      {
        q: 'Does this page cover TU or MEC medical entrance forms?',
        a: 'This page hosts university entrance presets for Nepal; TU IOE/IOM/BBA future rounds will extend the Tribhuvan section when open, and MEC PG sections will only be published once an official MEC notice is released.',
      },
    ],
    crossLinks: [
      { href: '/np/', anchorText: 'Nepal Exam Photo & Signature Resizer Hub', context: 'Browse all Nepal job and admission resizers' },
      { href: '/np/lok-sewa-photo-resize-nepal/', anchorText: 'Federal Lok Sewa Photo & Signature Resizer (≤50 KB)', context: 'PSC applications after graduation' },
      { href: '/np/driving-license-photo-resize/', anchorText: 'Nepal driving license photo resize', context: 'Apply or renew via provincial eDLVRS' },
    ],
  },

  'driving-license-photo-resize': {
    slug: 'driving-license-photo-resize',
    canonicalUrl: 'https://signresize.in/np/driving-license-photo-resize/',
    pageTitle: 'Nepal Driving License Photo Resize Online — eDLVRS',
    metaDescription:
      'Free Nepal Driving License (eDLVRS) photo resizer for provincial transport portals. Prepare clean white-background JPGs matching live ≤1 MB image rules.',
    keywords:
      'nepal driving license photo size, edlvrs photo resize, driving license nepal photo kb, edlvrs bagmati gandaki photo',
    h1: 'Driving License Application Photo Resizer — Nepal',
    badgeText: '🇳🇵 Evergreen Service · Provincial eDLVRS Portals',
    answerParagraph:
      'Nepal driving license applications now run on provincial Electronic Driving License and Vehicle Registration System portals (edlvrs.[province].gov.np, replacing the retired applydlnew.dotm.gov.np portal). Live eDLVRS portal validation accepts JPG or PNG images up to 1 MB (general documents PDF/image up to 2 MB) and links applicant identity via National ID (NID), with official licence biometrics captured in person at the Transport Management Office.',
    initialPresetId: 'driving-license-np',
    initialMode: 'photo',
    presetChips: [
      {
        presetId: 'driving-license-np',
        mode: 'photo',
        label: 'Nepal eDLVRS Photo (3.5×4.5 cm)',
        specBadge: 'JPG ≤500 KB (Live portal cap 1 MB)',
      },
      {
        presetId: 'driving-license-doc-np',
        mode: 'document',
        label: 'Citizenship Image (JPG)',
        specBadge: 'JPG ≤500 KB (Portal cap 1 MB)',
      },
    ],
    noticesHeading: 'How Provincial eDLVRS Driving License Portals Work in 2026',
    notices: [
      {
        badge: 'ALWAYS OPEN · PROVINCIAL PORTALS',
        heading: 'Provincial eDLVRS Systems (Bagmati · Gandaki · Koshi · Lumbini & Provinces)',
        meta: 'Replaces legacy applydlnew.dotm.gov.np · Mandatory National ID (NID)',
        body: 'Driving licence registration and renewal moved from DoTM’s central applydlnew portal to province-hosted eDLVRS portals (e.g. edlvrs.bagamati.gov.np, edlvrs.gandaki.gov.np, edlvrs.lumbini.gov.np, edlvrs.koshi.gov.np). Live portals prominently require National ID (राष्ट्रिय परिचयपत्र अनिवार्य).',
        portalLabel: 'edlvrs.gandaki.gov.np',
        portalUrl: 'https://edlvrs.gandaki.gov.np/edl',
      },
    ],
    calloutSection: {
      heading: 'Online Upload vs. Biometric Capture at the Transport Office',
      paragraphs: [
        'Your uploaded JPG/PNG photo on eDLVRS is for your online application record and verification alongside your National ID (NID) and citizenship image. During your scheduled Transport Management Office (Yatayat Karyalaya) visit, staff capture your official driving licence biometric photograph, digital signature, and thumbprints live on site.',
        'Do not confuse India’s Sarathi Parivahan limits (often circulated as 10–20 KB or 420×525 px) or unverified 3–50 KB blog numbers with Nepal’s eDLVRS system.',
      ],
    },
    specTableHeading: 'Verified Live eDLVRS Portal Rules',
    specs: [
      {
        parameter: 'Image / Citizenship Upload Limit',
        value: 'Maximum 1 MB · JPG or PNG format',
        source: 'Live eDLVRS JS Validator ("तस्बिर मात्र, बढीमा १ MB" / "JPG वा PNG") on edlvrs.gandaki.gov.np',
      },
      {
        parameter: 'General Document Upload Limit',
        value: 'Maximum 2 MB · Image or PDF format',
        source: 'Live eDLVRS JS Validator ("कृपया २ MB भन्दा सानो छनोट गर्नुहोस्")',
      },
      {
        parameter: 'National ID & Biometrics',
        value: 'National ID (NID) mandatory; card biometrics taken in person at office',
        source: 'Live eDLVRS portal banner ("सबै सवारी चालक अनुमतिपत्र सेवाहरूका लागि राष्ट्रिय परिचयपत्र (NID) अनिवार्य छ")',
      },
    ],
    verificationNote:
      'Conflict Check Resolved (12 Nov 2026): Aggregator blogs conflict between "max 200 KB white background" and "3–50 KB". Direct inspection of live eDLVRS portal bundles (18obn4y6h8y9y.js & 1oam16zqymmg7.js) shows client validation caps images at 1 MB (JPG/PNG) and general documents at 2 MB, with no 3–50 KB check. This tool targets a clean 20–500 KB JPG (150 KB recommended) so it passes easily under both 1 MB live limits and strict 200 KB tips.',
    howToHeading: 'How to Prepare Photos for Your Provincial eDLVRS Application',
    howToSteps: [
      'Upload your passport photograph or citizenship front/back image above using the Nepal eDLVRS Photo preset (plain white or light background recommended).',
      'Adjust the crop so your head and shoulders are centred, enable Clean White Paper only for dark background shadows if needed, and download the JPG.',
      'Confirm your National ID (NID) number is ready before visiting your province’s edlvrs portal (such as edlvrs.bagamati.gov.np or edlvrs.gandaki.gov.np).',
      'Upload the JPG/PNG image under 1 MB, book your biometric slot, and attend the Transport Office visit for live photo and signature capture.',
    ],
    officialPortals: [
      { label: 'Department of Transport Management (dotm.gov.np)', url: 'https://dotm.gov.np/' },
      { label: 'Gandaki Province eDLVRS Portal (edlvrs.gandaki.gov.np)', url: 'https://edlvrs.gandaki.gov.np/edl' },
      { label: 'Bagmati Province eDLVRS Portal (edlvrs.bagamati.gov.np)', url: 'https://edlvrs.bagamati.gov.np/' },
    ],
    faqs: [
      {
        q: 'What is the photo size for Nepal driving license online application?',
        a: 'Live provincial eDLVRS portals allow JPG or PNG image uploads up to 1 MB (2 MB for general PDF/image documents) and do not enforce the 3–50 KB or 10–20 KB limits often copied from Indian RTO blogs. Keeping a clear white-background 3.5×4.5 cm JPG under 200–500 KB uploads cleanly.',
      },
      {
        q: 'Does Nepal eDLVRS require a white background photo?',
        a: 'A plain white or light background with even lighting is recommended for application photo and citizenship clarity alongside your mandatory National ID (NID) record.',
      },
      {
        q: 'What happens to my photo and signature at the biometric visit?',
        a: 'During your scheduled Transport Management Office biometric appointment, officials verify your National ID and original documents and capture your live digital photograph, signature, and fingerprints directly for the printed smart driving licence.',
      },
      {
        q: 'How do I fix a rejected photo upload on the eDLVRS portal?',
        a: 'Make sure the file is exported as genuine .JPG or .PNG (not HEIC, WEBP, or an unsupported screenshot), check that the file weight is below 1 MB, and ensure good lighting without glare on citizenship scans.',
      },
    ],
    crossLinks: [
      { href: '/np/', anchorText: 'Nepal Exam Photo & Signature Resizer Hub', context: 'Open job & entrance photo tools in Nepal' },
      { href: '/np/lok-sewa-photo-resize-nepal/', anchorText: 'Federal Lok Sewa Photo & Signature Resizer (≤50 KB)', context: 'Applying to federal psc.gov.np?' },
      { href: '/np/university-entrance-photo-resize/', anchorText: 'University Entrance Photo Resizer — Nepal', context: 'KU ≤500 KB & Purbanchal 51×51 mm' },
    ],
  },
};

