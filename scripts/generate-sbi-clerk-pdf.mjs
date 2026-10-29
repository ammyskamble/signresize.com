// scripts/generate-sbi-clerk-pdf.mjs
// Generates official-grade, vector-crisp PDF handbook for SBI Clerk (Junior Associates) 2026

import fs from 'node:fs';
import path from 'node:path';

class SimplePdf {
  constructor() {
    this.pages = [];
  }

  escapeText(str) {
    return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  }

  addPage(commands) {
    this.pages.push(commands);
  }

  build() {
    const pageCount = this.pages.length;
    const pageObjIds = [];
    const contentObjIds = [];

    for (let i = 0; i < pageCount; i++) {
      pageObjIds.push(5 + i * 2);
      contentObjIds.push(6 + i * 2);
    }

    const objects = [];

    // 1: Catalog
    objects[1] = `<< /Type /Catalog /Pages 2 0 R >>`;

    // 2: Pages
    objects[2] = `<< /Type /Pages /Kids [${pageObjIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pageCount} >>`;

    // 3: Regular font
    objects[3] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;

    // 4: Bold font
    objects[4] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`;

    // Pages & Content streams
    for (let i = 0; i < pageCount; i++) {
      const pId = pageObjIds[i];
      const cId = contentObjIds[i];
      const streamContent = this.pages[i];
      const streamLen = Buffer.byteLength(streamContent, 'utf8');

      objects[pId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${cId} 0 R >>`;
      objects[cId] = `<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream`;
    }

    // Assemble PDF with exact xref table
    let output = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
    const offsets = [];

    for (let i = 1; i < objects.length; i++) {
      offsets[i] = Buffer.byteLength(output, 'utf8');
      output += `${i} 0 obj\n${objects[i]}\nendobj\n`;
    }

    const xrefOffset = Buffer.byteLength(output, 'utf8');
    output += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;

    for (let i = 1; i < objects.length; i++) {
      const off = String(offsets[i]).padStart(10, '0');
      output += `${off} 00000 n \n`;
    }

    output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
    return Buffer.from(output, 'utf8');
  }
}

function buildSbiClerkPdf() {
  const pdf = new SimplePdf();

  // PAGE 1: 4 Digital Upload Specifications & Exam Structure
  let p1 = '';

  // Background tint header
  p1 += `0.93 0.95 0.99 rg 36 750 523 60 re f\n`;
  p1 += `0.15 0.28 0.55 RG 1.5 w 36 750 523 60 re S\n`;

  // Header Title
  p1 += `BT /F2 14 Tf 0.12 0.25 0.52 rg 48 788 Td (STATE BANK OF INDIA - JUNIOR ASSOCIATES 2026) Tj ET\n`;
  p1 += `BT /F1 9 Tf 0.25 0.32 0.42 rg 48 772 Td (Official Candidate Document Upload & Examination Standards Handbook | SignResize.in) Tj ET\n`;
  p1 += `BT /F2 8.5 Tf 0.15 0.45 0.25 rg 48 757 Td (VERIFIED STANDARDS: CRPD/CR/2026 NOTIFICATION GUIDELINES - NO SECTIONAL CUT-OFF) Tj ET\n`;

  // Section 1: Overview
  p1 += `BT /F2 11 Tf 0.1 0.1 0.1 rg 36 728 Td (1. The 4 Mandatory Digital Uploads for SBI Portal (sbi.co.in/careers)) Tj ET\n`;
  p1 += `BT /F1 8.5 Tf 0.3 0.3 0.3 rg 36 714 Td (Candidates must upload all four digital assets during online registration. Failing any parameter causes rejection.) Tj ET\n`;

  // Table 1: 4 Digital Assets
  const t1Top = 702;
  const colX = [36, 126, 216, 336, 559];
  const t1RowH = 26;

  // Header background
  p1 += `0.18 0.30 0.55 rg 36 ${t1Top - 20} 523 20 re f\n`;
  p1 += `BT /F2 8.5 Tf 1 1 1 rg 42 ${t1Top - 14} Td (Digital Asset) Tj ET\n`;
  p1 += `BT /F2 8.5 Tf 1 1 1 rg 132 ${t1Top - 14} Td (File Size (KB)) Tj ET\n`;
  p1 += `BT /F2 8.5 Tf 1 1 1 rg 222 ${t1Top - 14} Td (Dimensions & Aspect) Tj ET\n`;
  p1 += `BT /F2 8.5 Tf 1 1 1 rg 342 ${t1Top - 14} Td (Mandatory Composition & Ink Rules) Tj ET\n`;

  const rows1 = [
    [
      'Passport Photo',
      '20 KB to 50 KB',
      '200 x 230 px (3.5 x 4.5 cm)',
      'Light/white background. Recent (<3 mo). No caps/tinted glasses.'
    ],
    [
      'Candidate Signature',
      '10 KB to 20 KB',
      '140 x 60 px (4.0 x 2.0 cm)',
      'BLACK INK ONLY on white paper. Running cursive (NO ALL CAPS).'
    ],
    [
      'Left Thumb Impression',
      '20 KB to 50 KB',
      '240 x 240 px (3.0 x 3.0 cm)',
      'Blue or Black ink stamp pad. Clear ridges. White unruled paper.'
    ],
    [
      'Handwritten Decl.',
      '50 KB to 100 KB',
      '800 x 400 px (10.0 x 5.0 cm)',
      'Own handwriting in English. BLACK INK. Official verbatim text.'
    ]
  ];

  let curY = t1Top - 20;
  rows1.forEach((r, idx) => {
    const bg = idx % 2 === 0 ? '1 1 1' : '0.96 0.97 0.99';
    p1 += `${bg} rg 36 ${curY - t1RowH} 523 ${t1RowH} re f\n`;
    p1 += `0.8 0.82 0.85 RG 0.5 w 36 ${curY - t1RowH} 523 ${t1RowH} re S\n`;

    p1 += `BT /F2 8 Tf 0.15 0.25 0.45 rg 42 ${curY - 16} Td (${r[0]}) Tj ET\n`;
    p1 += `BT /F2 8 Tf 0.1 0.5 0.2 rg 132 ${curY - 16} Td (${r[1]}) Tj ET\n`;
    p1 += `BT /F1 7.8 Tf 0.2 0.2 0.2 rg 222 ${curY - 16} Td (${r[2]}) Tj ET\n`;
    p1 += `BT /F1 7.5 Tf 0.25 0.25 0.25 rg 342 ${curY - 16} Td (${r[3]}) Tj ET\n`;
    curY -= t1RowH;
  });

  // Section 2: Rejection Traps & Pre-flight Checklist
  curY -= 14;
  p1 += `BT /F2 11 Tf 0.1 0.1 0.1 rg 36 ${curY} Td (2. Critical Rejection Traps to Avoid (CRPD Audit Rules)) Tj ET\n`;
  curY -= 12;

  // Warning Box
  p1 += `0.99 0.96 0.93 rg 36 ${curY - 70} 523 70 re f\n`;
  p1 += `0.85 0.45 0.15 RG 1 w 36 ${curY - 70} 523 70 re S\n`;

  const warnings = [
    'Trap 1: ALL-CAPITAL SIGNATURES - Signatures in block letters are rejected automatically by SBI scrutiny servers.',
    'Trap 2: BLUE INK SIGNATURE - The signature MUST be in BLACK INK ballpoint pen. Blue ink risks threshold scan dropouts.',
    'Trap 3: INCORRECT DECLARATION TEXT - SBI requires candidate Name AND Date of Birth in the declaration statement.',
    'Trap 4: THIRD-PARTY DECLARATION - If declaration is penned by someone else, applicant is disqualified & debarred.'
  ];

  warnings.forEach((w, i) => {
    p1 += `BT /F2 7.8 Tf 0.7 0.2 0.1 rg 44 ${curY - 16 - i * 14} Td (*) Tj ET\n`;
    p1 += `BT /F1 7.8 Tf 0.2 0.2 0.2 rg 54 ${curY - 16 - i * 14} Td (${w}) Tj ET\n`;
  });
  curY -= 82;

  // Section 3: Examination Architecture & Scoring Advantage
  p1 += `BT /F2 11 Tf 0.1 0.1 0.1 rg 36 ${curY} Td (3. SBI Clerk Exam Architecture & Aggregate Scoring Advantage) Tj ET\n`;
  curY -= 12;

  // Highlights Callout
  p1 += `0.93 0.97 0.94 rg 36 ${curY - 24} 523 24 re f\n`;
  p1 += `0.2 0.6 0.3 RG 0.8 w 36 ${curY - 24} 523 24 re S\n`;
  p1 += `BT /F2 8.5 Tf 0.12 0.45 0.22 rg 44 ${curY - 16} Td (CRITICAL ADVANTAGE: NO SECTIONAL CUT-OFFS IN PRELIMS OR MAINS (Overall Aggregate Score Only!)) Tj ET\n`;
  curY -= 32;

  // Table 2: Prelims Pattern
  p1 += `0.22 0.25 0.32 rg 36 ${curY - 18} 523 18 re f\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 42 ${curY - 13} Td (Prelims Test Section) Tj ET\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 180 ${curY - 13} Td (No. of Questions) Tj ET\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 280 ${curY - 13} Td (Total Marks) Tj ET\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 380 ${curY - 13} Td (Time Duration) Tj ET\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 470 ${curY - 13} Td (Sectional Cut-Off) Tj ET\n`;

  const prelimsRows = [
    ['1. English Language', '30 Questions', '30 Marks', '20 Minutes (Separate)', 'NO Cut-off (0.25 neg.)'],
    ['2. Numerical Ability (Quant)', '35 Questions', '35 Marks', '20 Minutes (Separate)', 'NO Cut-off (0.25 neg.)'],
    ['3. Reasoning Ability', '35 Questions', '35 Marks', '20 Minutes (Separate)', 'NO Cut-off (0.25 neg.)'],
    ['TOTAL COMPOSITE', '100 Questions', '100 Marks', '60 Minutes (1 Hour)', 'Aggregate Merit Only']
  ];

  curY -= 18;
  prelimsRows.forEach((pr, idx) => {
    const isTot = idx === 3;
    const bg = isTot ? '0.90 0.94 0.98' : (idx % 2 === 0 ? '1 1 1' : '0.97 0.98 0.99');
    const fId = isTot ? '/F2' : '/F1';
    p1 += `${bg} rg 36 ${curY - 16} 523 16 re f\n`;
    p1 += `0.82 0.84 0.88 RG 0.5 w 36 ${curY - 16} 523 16 re S\n`;

    p1 += `BT ${fId} 7.5 Tf 0.15 0.2 0.35 rg 42 ${curY - 12} Td (${pr[0]}) Tj ET\n`;
    p1 += `BT ${fId} 7.5 Tf 0.2 0.2 0.2 rg 180 ${curY - 12} Td (${pr[1]}) Tj ET\n`;
    p1 += `BT ${fId} 7.5 Tf 0.2 0.2 0.2 rg 280 ${curY - 12} Td (${pr[2]}) Tj ET\n`;
    p1 += `BT ${fId} 7.5 Tf 0.2 0.2 0.2 rg 380 ${curY - 12} Td (${pr[3]}) Tj ET\n`;
    p1 += `BT /F2 7.5 Tf ${isTot ? '0.1 0.5 0.2' : '0.2 0.4 0.2'} rg 470 ${curY - 12} Td (${pr[4]}) Tj ET\n`;
    curY -= 16;
  });

  // Footer P1
  p1 += `0.7 0.7 0.7 RG 0.5 w 36 45 523 0.1 re S\n`;
  p1 += `BT /F1 7.5 Tf 0.4 0.4 0.4 rg 36 34 Td (Page 1 of 2 | SBI Clerk 2026 Candidate Handbook | Prepared for Instant Client-Side Processing at https://signresize.in) Tj ET\n`;
  p1 += `BT /F2 7.5 Tf 0.18 0.32 0.58 rg 480 34 Td (SignResize.in) Tj ET\n`;

  pdf.addPage(p1);

  // PAGE 2: Official Handwritten Declaration Template, LPT Language Rules & Practice Sheet
  let p2 = '';

  // Background tint header
  p2 += `0.93 0.95 0.99 rg 36 750 523 60 re f\n`;
  p2 += `0.15 0.28 0.55 RG 1.5 w 36 750 523 60 re S\n`;

  // Header Title
  p2 += `BT /F2 13 Tf 0.12 0.25 0.52 rg 48 788 Td (SBI CLERK 2026: OFFICIAL HANDWRITTEN DECLARATION TEMPLATE) Tj ET\n`;
  p2 += `BT /F1 8.5 Tf 0.25 0.32 0.42 rg 48 772 Td (Print this sheet, write verbatim in candidate's own running handwriting with BLACK INK, and scan at 800x400 px) Tj ET\n`;
  p2 += `BT /F2 8 Tf 0.6 0.15 0.15 rg 48 757 Td (STRICT RULE: Declarations in CAPITAL / BLOCK letters or written by others are CANCELLED IMMEDIATELY) Tj ET\n`;

  let curY2 = 726;

  // Section 4: Verbatim SBI Declaration Text Box
  p2 += `BT /F2 10.5 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (4. Official Verbatim Text of SBI Handwritten Declaration) Tj ET\n`;
  curY2 -= 12;

  p2 += `0.98 0.98 0.96 rg 36 ${curY2 - 55} 523 55 re f\n`;
  p2 += `0.3 0.45 0.65 RG 1 w 36 ${curY2 - 55} 523 55 re S\n`;

  const declLines = [
    '"I, _______ (Name of the candidate), Date of Birth ______ hereby declare that all the',
    'information submitted by me in the application form is correct, true and valid. I will present',
    'the supporting documents as and when required. The signature, photograph and thumb impression',
    'is of mine."'
  ];

  declLines.forEach((dl, i) => {
    p2 += `BT /F2 8.5 Tf 0.15 0.2 0.3 rg 46 ${curY2 - 14 - i * 12} Td (${dl}) Tj ET\n`;
  });
  curY2 -= 67;

  // Section 5: Printable Physical Canvas (800 x 400 px representation)
  p2 += `BT /F2 10.5 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (5. Printable Practice & Scannable Canvas (Aspect 2:1 | Target 50-100 KB)) Tj ET\n`;
  curY2 -= 12;

  // Large printable bounding box
  p2 += `1 1 1 rg 36 ${curY2 - 130} 523 130 re f\n`;
  p2 += `0.2 0.3 0.5 RG 1.2 w 36 ${curY2 - 130} 523 130 re S\n`;
  // Corner marks
  p2 += `0.5 0.5 0.5 RG 0.5 w [3 3] 0 d 44 ${curY2 - 8} m 551 ${curY2 - 8} l S [] 0 d\n`;

  p2 += `BT /F2 7.5 Tf 0.5 0.5 0.5 rg 42 ${curY2 - 16} Td (WRITE IN CANDIDATE'S OWN RUNNING HANDWRITING USING BLACK BALLPOINT INK ONLY:) Tj ET\n`;

  // Ruled guidelines for neat writing
  for (let line = 1; line <= 5; line++) {
    const lineY = curY2 - 20 - line * 18;
    p2 += `0.88 0.9 0.93 RG 0.5 w 44 ${lineY} m 550 ${lineY} l S\n`;
  }

  p2 += `BT /F1 7.2 Tf 0.55 0.55 0.55 rg 44 ${curY2 - 122} Td (Signature of Candidate: ___________________________   Date: ______________   Place: _____________________) Tj ET\n`;
  curY2 -= 142;

  // Section 6: Left Thumb Impression Practice Box & Dimensions
  p2 += `BT /F2 10.5 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (6. Left Thumb Impression (LTI) & Signature Verification Stamp Boxes) Tj ET\n`;
  curY2 -= 12;

  // Left Thumb Box (Square 240x240 px representation)
  p2 += `0.98 0.98 1 rg 36 ${curY2 - 80} 250 80 re f\n`;
  p2 += `0.2 0.35 0.6 RG 1 w 36 ${curY2 - 80} 250 80 re S\n`;
  p2 += `BT /F2 8 Tf 0.15 0.25 0.5 rg 46 ${curY2 - 16} Td (LEFT THUMB IMPRESSION (240 x 240 px)) Tj ET\n`;
  p2 += `BT /F1 7 Tf 0.3 0.3 0.3 rg 46 ${curY2 - 28} Td (Size: 20 KB to 50 KB | Blue or Black Ink Stamp Pad) Tj ET\n`;
  // Dotted thumb print area
  p2 += `1 1 1 rg 180 ${curY2 - 72} 90 60 re f\n`;
  p2 += `0.6 0.6 0.6 RG 0.5 w [2 2] 0 d 180 ${curY2 - 72} 90 60 re S [] 0 d\n`;
  p2 += `BT /F1 6.5 Tf 0.5 0.5 0.5 rg 195 ${curY2 - 42} Td (Affix Left Thumb) Tj ET\n`;

  // Candidate Signature Box (140x60 px representation)
  p2 += `0.98 1 0.98 rg 300 ${curY2 - 80} 259 80 re f\n`;
  p2 += `0.2 0.5 0.25 RG 1 w 300 ${curY2 - 80} 259 80 re S\n`;
  p2 += `BT /F2 8 Tf 0.1 0.45 0.2 rg 310 ${curY2 - 16} Td (CANDIDATE SIGNATURE (140 x 60 px)) Tj ET\n`;
  p2 += `BT /F1 7 Tf 0.3 0.3 0.3 rg 310 ${curY2 - 28} Td (Size: 10 KB to 20 KB | STRICTLY BLACK INK) Tj ET\n`;
  // Dotted sign area
  p2 += `1 1 1 rg 440 ${curY2 - 72} 110 40 re f\n`;
  p2 += `0.6 0.6 0.6 RG 0.5 w [2 2] 0 d 440 ${curY2 - 72} 110 40 re S [] 0 d\n`;
  p2 += `BT /F1 6.5 Tf 0.5 0.5 0.5 rg 460 ${curY2 - 52} Td (Sign Here in Cursive) Tj ET\n`;
  p2 += `BT /F2 6.5 Tf 0.7 0.2 0.2 rg 310 ${curY2 - 68} Td (NO CAPITAL LETTERS!) Tj ET\n`;
  curY2 -= 92;

  // Section 7: State Selection & Local Language Test (LPT) Rules
  p2 += `BT /F2 10.5 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (7. State-wise Vacancy & Local Language Test (LPT) Eligibility) Tj ET\n`;
  curY2 -= 12;

  p2 += `0.96 0.97 0.99 rg 36 ${curY2 - 58} 523 58 re f\n`;
  p2 += `0.7 0.75 0.85 RG 0.8 w 36 ${curY2 - 58} 523 58 re S\n`;

  const lptRules = [
    'Rule 1: SINGLE-STATE APPLICATION - Candidate can apply for vacancies in only ONE State/UT. Multiple applications nullify prior attempts.',
    'Rule 2: LPT EXEMPTION - If you studied the state\'s local language in 10th or 12th standard (shown on marksheet), you are 100% EXEMPT from LPT.',
    'Rule 3: INTER-CIRCLE TRANSFER LOCK - Junior Associates cannot transfer out of their assigned Circle for 5 years (women) / 8 years (men).',
    'Rule 4: 50% WAITLIST RESERVE - SBI maintains a 50% reserve waitlist released in quarterly tranches over 1 year based on non-joining dropouts.'
  ];

  lptRules.forEach((lr, i) => {
    p2 += `BT /F2 7.5 Tf 0.15 0.3 0.6 rg 44 ${curY2 - 14 - i * 13} Td ([OK]) Tj ET\n`;
    p2 += `BT /F1 7.5 Tf 0.2 0.2 0.2 rg 66 ${curY2 - 14 - i * 13} Td (${lr}) Tj ET\n`;
  });

  // Footer P2
  p2 += `0.7 0.7 0.7 RG 0.5 w 36 45 523 0.1 re S\n`;
  p2 += `BT /F1 7.5 Tf 0.4 0.4 0.4 rg 36 34 Td (Page 2 of 2 | SBI Clerk 2026 Declaration & LPT Sheet | Free 1-Click Client-Side Resizing at https://signresize.in) Tj ET\n`;
  p2 += `BT /F2 7.5 Tf 0.18 0.32 0.58 rg 480 34 Td (SignResize.in) Tj ET\n`;

  pdf.addPage(p2);

  const pdfBuffer = pdf.build();
  const outDir = path.resolve('public/downloads');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'sbi-clerk-2026-photo-sign-and-declaration-guide.pdf');
  fs.writeFileSync(outPath, pdfBuffer);
  console.log(`[OK] Generated official SBI Clerk PDF at ${outPath} (${pdfBuffer.length} bytes)`);
}

buildSbiClerkPdf();
