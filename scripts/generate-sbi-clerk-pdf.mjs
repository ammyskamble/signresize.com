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

  // PAGE 1: 4 Digital Upload Specifications, Visual Traps & Exam Structure (Prelims + Mains)
  let p1 = '';

  // Background tint header
  p1 += `0.93 0.95 0.99 rg 36 752 523 58 re f\n`;
  p1 += `0.15 0.28 0.55 RG 1.5 w 36 752 523 58 re S\n`;

  // Header Title
  p1 += `BT /F2 13 Tf 0.12 0.25 0.52 rg 48 788 Td (STATE BANK OF INDIA - JUNIOR ASSOCIATES 2026) Tj ET\n`;
  p1 += `BT /F1 8.5 Tf 0.25 0.32 0.42 rg 48 773 Td (Official Candidate Upload Specifications, Exam Architecture & Compliance Handbook | SignResize.in) Tj ET\n`;
  p1 += `BT /F2 8 Tf 0.12 0.45 0.22 rg 48 759 Td (VERIFIED CRPD GUIDELINES: ZERO SECTIONAL CUT-OFFS | 10:1 PRELIMS TO MAINS RATIO) Tj ET\n`;

  // Section 1: Overview
  p1 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 732 Td (1. The 4 Mandatory Digital Uploads for SBI Portal (sbi.co.in/careers)) Tj ET\n`;

  // Table 1: 4 Digital Assets
  const t1Top = 724;
  const t1RowH = 24;

  p1 += `0.18 0.30 0.55 rg 36 ${t1Top - 18} 523 18 re f\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 42 ${t1Top - 13} Td (Digital Asset) Tj ET\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 132 ${t1Top - 13} Td (File Size (KB)) Tj ET\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 222 ${t1Top - 13} Td (Dimensions & Aspect) Tj ET\n`;
  p1 += `BT /F2 8 Tf 1 1 1 rg 342 ${t1Top - 13} Td (Mandatory Composition & Ink Rules) Tj ET\n`;

  const rows1 = [
    [
      'Passport Photo',
      '20 KB to 50 KB',
      '200 x 230 px (3.5 x 4.5 cm)',
      'Light/white background. Recent (<3 mo). Face 75-80%. No glare/caps.'
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
      'Own handwriting in English. BLACK INK. Official verbatim text with DOB.'
    ]
  ];

  let curY = t1Top - 18;
  rows1.forEach((r, idx) => {
    const bg = idx % 2 === 0 ? '1 1 1' : '0.96 0.97 0.99';
    p1 += `${bg} rg 36 ${curY - t1RowH} 523 ${t1RowH} re f\n`;
    p1 += `0.8 0.82 0.85 RG 0.5 w 36 ${curY - t1RowH} 523 ${t1RowH} re S\n`;

    p1 += `BT /F2 7.8 Tf 0.15 0.25 0.45 rg 42 ${curY - 15} Td (${r[0]}) Tj ET\n`;
    p1 += `BT /F2 7.8 Tf 0.1 0.5 0.2 rg 132 ${curY - 15} Td (${r[1]}) Tj ET\n`;
    p1 += `BT /F1 7.5 Tf 0.2 0.2 0.2 rg 222 ${curY - 15} Td (${r[2]}) Tj ET\n`;
    p1 += `BT /F1 7.2 Tf 0.25 0.25 0.25 rg 342 ${curY - 15} Td (${r[3]}) Tj ET\n`;
    curY -= t1RowH;
  });

  // Section 2: Visual Do / Don't Guide Badges
  curY -= 12;
  p1 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 ${curY} Td (2. Visual "Do / Don't" Scrutiny Standards (Preventing Portal Disqualification)) Tj ET\n`;
  curY -= 10;

  // 4 Side-by-side DO/DON'T boxes
  const doDontItems = [
    ['SIGNATURE', 'DO: Running cursive handwriting in black ink.', 'DONT: ALL CAPS (AMIT SHARMA) or blue ink.'],
    ['PASSPORT PHOTO', 'DO: 75% face, white background, no glasses glare.', 'DONT: Selfies, dark shades, caps, filters, shadows.'],
    ['LEFT THUMB (LTI)', 'DO: Clear unsmudged ridges on white sheet.', 'DONT: Solid black ink blob or cropped borders.'],
    ['DECLARATION', 'DO: Own hand in English, includes Name & DOB.', 'DONT: Typed, Hindi/regional, or written by others.']
  ];

  const cardW = 125;
  doDontItems.forEach((item, idx) => {
    const cardX = 36 + idx * 132;
    p1 += `0.98 0.98 0.99 rg ${cardX} ${curY - 50} ${cardW} 50 re f\n`;
    p1 += `0.75 0.8 0.88 RG 0.6 w ${cardX} ${curY - 50} ${cardW} 50 re S\n`;

    p1 += `BT /F2 7 Tf 0.15 0.25 0.5 rg ${cardX + 4} ${curY - 10} Td (${item[0]}) Tj ET\n`;
    p1 += `BT /F2 6.2 Tf 0.1 0.5 0.2 rg ${cardX + 4} ${curY - 22} Td ([OK] ${item[1].slice(0, 24)}) Tj ET\n`;
    p1 += `BT /F1 6 Tf 0.2 0.2 0.2 rg ${cardX + 8} ${curY - 30} Td (${item[1].slice(24)}) Tj ET\n`;
    p1 += `BT /F2 6.2 Tf 0.7 0.2 0.1 rg ${cardX + 4} ${curY - 40} Td ([NO] ${item[2].slice(0, 24)}) Tj ET\n`;
    p1 += `BT /F1 6 Tf 0.2 0.2 0.2 rg ${cardX + 8} ${curY - 48} Td (${item[2].slice(24)}) Tj ET\n`;
  });
  curY -= 62;

  // Section 3: Phase I Prelims Pattern
  p1 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 ${curY} Td (3. Phase I: Preliminary Exam Pattern (100 Marks | 60 Min | 10:1 Shortlisting to Mains)) Tj ET\n`;
  curY -= 10;

  p1 += `0.22 0.25 0.32 rg 36 ${curY - 14} 523 14 re f\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 42 ${curY - 10} Td (Prelims Test Section) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 190 ${curY - 10} Td (Questions) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 280 ${curY - 10} Td (Marks) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 370 ${curY - 10} Td (Duration) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 460 ${curY - 10} Td (Sectional Cut-Off) Tj ET\n`;

  const prelimsRows = [
    ['English Language', '30 Questions', '30 Marks', '20 Minutes', 'NO Cut-off (0.25 neg.)'],
    ['Numerical Ability (Quant)', '35 Questions', '35 Marks', '20 Minutes', 'NO Cut-off (0.25 neg.)'],
    ['Reasoning Ability', '35 Questions', '35 Marks', '20 Minutes', 'NO Cut-off (0.25 neg.)'],
    ['PRELIMS COMPOSITE TOTAL', '100 Questions', '100 Marks', '60 Minutes', '10:1 Ratio Shortlist']
  ];

  curY -= 14;
  prelimsRows.forEach((pr, idx) => {
    const isTot = idx === 3;
    const bg = isTot ? '0.90 0.94 0.98' : (idx % 2 === 0 ? '1 1 1' : '0.97 0.98 0.99');
    const fId = isTot ? '/F2' : '/F1';
    p1 += `${bg} rg 36 ${curY - 13} 523 13 re f\n`;
    p1 += `0.82 0.84 0.88 RG 0.5 w 36 ${curY - 13} 523 13 re S\n`;

    p1 += `BT ${fId} 7 Tf 0.15 0.2 0.35 rg 42 ${curY - 10} Td (${pr[0]}) Tj ET\n`;
    p1 += `BT ${fId} 7 Tf 0.2 0.2 0.2 rg 190 ${curY - 10} Td (${pr[1]}) Tj ET\n`;
    p1 += `BT ${fId} 7 Tf 0.2 0.2 0.2 rg 280 ${curY - 10} Td (${pr[2]}) Tj ET\n`;
    p1 += `BT ${fId} 7 Tf 0.2 0.2 0.2 rg 370 ${curY - 10} Td (${pr[3]}) Tj ET\n`;
    p1 += `BT /F2 7 Tf ${isTot ? '0.1 0.5 0.2' : '0.2 0.4 0.2'} rg 460 ${curY - 10} Td (${pr[4]}) Tj ET\n`;
    curY -= 13;
  });

  // Section 4: Phase II Mains Pattern
  curY -= 12;
  p1 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 ${curY} Td (4. Phase II: Mains Examination Pattern (190 Questions | 200 Marks | 160 Min)) Tj ET\n`;
  curY -= 10;

  p1 += `0.18 0.28 0.45 rg 36 ${curY - 14} 523 14 re f\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 42 ${curY - 10} Td (Mains Test Section) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 190 ${curY - 10} Td (Questions) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 280 ${curY - 10} Td (Marks) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 370 ${curY - 10} Td (Duration) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 1 1 1 rg 460 ${curY - 10} Td (Sectional Cut-Off) Tj ET\n`;

  const mainsRows = [
    ['General / Financial Awareness', '50 Questions', '50 Marks', '35 Minutes', 'NO Cut-off (0.25 neg.)'],
    ['General English', '40 Questions', '40 Marks', '35 Minutes', 'NO Cut-off (0.25 neg.)'],
    ['Quantitative Aptitude', '50 Questions', '50 Marks', '45 Minutes', 'NO Cut-off (0.25 neg.)'],
    ['Reasoning Ability & Computer', '50 Questions', '60 Marks', '45 Minutes', 'NO Cut-off (0.25 neg.)'],
    ['MAINS FINAL SELECTION SCORE', '190 Questions', '200 Marks', '160 Min (2h 40m)', 'Aggregate Score Merit']
  ];

  curY -= 14;
  mainsRows.forEach((mr, idx) => {
    const isTot = idx === 4;
    const bg = isTot ? '0.90 0.94 0.98' : (idx % 2 === 0 ? '1 1 1' : '0.97 0.98 0.99');
    const fId = isTot ? '/F2' : '/F1';
    p1 += `${bg} rg 36 ${curY - 13} 523 13 re f\n`;
    p1 += `0.82 0.84 0.88 RG 0.5 w 36 ${curY - 13} 523 13 re S\n`;

    p1 += `BT ${fId} 7 Tf 0.15 0.2 0.35 rg 42 ${curY - 10} Td (${mr[0]}) Tj ET\n`;
    p1 += `BT ${fId} 7 Tf 0.2 0.2 0.2 rg 190 ${curY - 10} Td (${mr[1]}) Tj ET\n`;
    p1 += `BT ${fId} 7 Tf 0.2 0.2 0.2 rg 280 ${curY - 10} Td (${mr[2]}) Tj ET\n`;
    p1 += `BT ${fId} 7 Tf 0.2 0.2 0.2 rg 370 ${curY - 10} Td (${mr[3]}) Tj ET\n`;
    p1 += `BT /F2 7 Tf ${isTot ? '0.1 0.5 0.2' : '0.2 0.4 0.2'} rg 460 ${curY - 10} Td (${mr[4]}) Tj ET\n`;
    curY -= 13;
  });

  // Footer P1
  p1 += `0.7 0.7 0.7 RG 0.5 w 36 45 523 0.1 re S\n`;
  p1 += `BT /F1 7.2 Tf 0.4 0.4 0.4 rg 36 34 Td (Page 1 of 2 | SBI Clerk 2026 Handbook | 4 Upload Specs, Do/Don't & Exam Architecture | https://signresize.in) Tj ET\n`;
  p1 += `BT /F2 7.2 Tf 0.18 0.32 0.58 rg 480 34 Td (SignResize.in) Tj ET\n`;

  pdf.addPage(p1);

  // PAGE 2: Official Handwritten Declaration Template, Ruled Canvas & Circle-Cadre Transfer & LPT Mapping
  let p2 = '';

  // Background tint header
  p2 += `0.93 0.95 0.99 rg 36 752 523 58 re f\n`;
  p2 += `0.15 0.28 0.55 RG 1.5 w 36 752 523 58 re S\n`;

  // Header Title
  p2 += `BT /F2 12.5 Tf 0.12 0.25 0.52 rg 48 788 Td (SBI CLERK 2026: OFFICIAL HANDWRITTEN DECLARATION TEMPLATE) Tj ET\n`;
  p2 += `BT /F1 8.2 Tf 0.25 0.32 0.42 rg 48 773 Td (Print, pen verbatim in candidate's own running English handwriting with BLACK INK, and scan at 800x400 px) Tj ET\n`;
  p2 += `BT /F2 7.5 Tf 0.6 0.15 0.15 rg 48 759 Td (STRICT RULE: Declarations in CAPITAL / BLOCK letters or penned by another person cause instant cancellation) Tj ET\n`;

  let curY2 = 730;

  // Section 5: Verbatim SBI Declaration Text Box
  p2 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (5. Official Verbatim Text of SBI Handwritten Declaration (Includes Date of Birth)) Tj ET\n`;
  curY2 -= 10;

  p2 += `0.98 0.98 0.96 rg 36 ${curY2 - 48} 523 48 re f\n`;
  p2 += `0.3 0.45 0.65 RG 1 w 36 ${curY2 - 48} 523 48 re S\n`;

  const declLines = [
    '"I, _______ (Name of the candidate), Date of Birth ______ hereby declare that all the',
    'information submitted by me in the application form is correct, true and valid. I will present',
    'the supporting documents as and when required. The signature, photograph and thumb impression',
    'is of mine."'
  ];

  declLines.forEach((dl, i) => {
    p2 += `BT /F2 8 Tf 0.15 0.2 0.3 rg 46 ${curY2 - 12 - i * 11} Td (${dl}) Tj ET\n`;
  });
  curY2 -= 58;

  // Section 6: Printable Physical Canvas (800 x 400 px representation)
  p2 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (6. Printable Scannable Practice Canvas (Aspect 2:1 | Target 50-100 KB)) Tj ET\n`;
  curY2 -= 10;

  // Ruled Box
  p2 += `1 1 1 rg 36 ${curY2 - 110} 523 110 re f\n`;
  p2 += `0.2 0.3 0.5 RG 1 w 36 ${curY2 - 110} 523 110 re S\n`;
  p2 += `BT /F2 7 Tf 0.5 0.5 0.5 rg 42 ${curY2 - 12} Td (WRITE IN CANDIDATE'S OWN RUNNING HANDWRITING USING BLACK BALLPOINT INK ONLY:) Tj ET\n`;

  for (let line = 1; line <= 4; line++) {
    const lineY = curY2 - 16 - line * 18;
    p2 += `0.88 0.9 0.93 RG 0.5 w 44 ${lineY} m 550 ${lineY} l S\n`;
  }
  p2 += `BT /F1 6.8 Tf 0.55 0.55 0.55 rg 44 ${curY2 - 104} Td (Signature of Candidate: ___________________________   Date: ______________   Place: _____________________) Tj ET\n`;
  curY2 -= 120;

  // Section 7: Left Thumb Impression & Signature Boxes
  p2 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (7. Left Thumb Impression (240x240 px) & Candidate Signature (140x60 px) Boxes) Tj ET\n`;
  curY2 -= 10;

  // Thumb Box
  p2 += `0.98 0.98 1 rg 36 ${curY2 - 65} 250 65 re f\n`;
  p2 += `0.2 0.35 0.6 RG 0.8 w 36 ${curY2 - 65} 250 65 re S\n`;
  p2 += `BT /F2 7.5 Tf 0.15 0.25 0.5 rg 46 ${curY2 - 14} Td (LEFT THUMB IMPRESSION (240 x 240 px)) Tj ET\n`;
  p2 += `BT /F1 6.5 Tf 0.3 0.3 0.3 rg 46 ${curY2 - 24} Td (20 KB to 50 KB | Blue or Black Stamp Pad) Tj ET\n`;
  p2 += `1 1 1 rg 180 ${curY2 - 58} 80 50 re f\n`;
  p2 += `0.6 0.6 0.6 RG 0.5 w [2 2] 0 d 180 ${curY2 - 58} 80 50 re S [] 0 d\n`;
  p2 += `BT /F1 6 Tf 0.5 0.5 0.5 rg 192 ${curY2 - 34} Td (Affix Thumb) Tj ET\n`;

  // Signature Box
  p2 += `0.98 1 0.98 rg 300 ${curY2 - 65} 259 65 re f\n`;
  p2 += `0.2 0.5 0.25 RG 0.8 w 300 ${curY2 - 65} 259 65 re S\n`;
  p2 += `BT /F2 7.5 Tf 0.1 0.45 0.2 rg 310 ${curY2 - 14} Td (CANDIDATE SIGNATURE (140 x 60 px)) Tj ET\n`;
  p2 += `BT /F1 6.5 Tf 0.3 0.3 0.3 rg 310 ${curY2 - 24} Td (10 KB to 20 KB | STRICTLY BLACK INK) Tj ET\n`;
  p2 += `1 1 1 rg 440 ${curY2 - 58} 100 35 re f\n`;
  p2 += `0.6 0.6 0.6 RG 0.5 w [2 2] 0 d 440 ${curY2 - 58} 100 35 re S [] 0 d\n`;
  p2 += `BT /F1 6 Tf 0.5 0.5 0.5 rg 455 ${curY2 - 42} Td (Sign in Cursive) Tj ET\n`;
  p2 += `BT /F2 6 Tf 0.7 0.2 0.2 rg 310 ${curY2 - 54} Td (NO CAPITAL LETTERS!) Tj ET\n`;
  curY2 -= 75;

  // Section 8: Circle Cadre Transfer Rule & LPT Language Mapping
  p2 += `BT /F2 10 Tf 0.1 0.1 0.1 rg 36 ${curY2} Td (8. Strict Circle Cadre Transfer Policy & Local Language Test (LPT) Standards) Tj ET\n`;
  curY2 -= 10;

  // Alert on Transfer
  p2 += `0.99 0.95 0.93 rg 36 ${curY2 - 22} 523 22 re f\n`;
  p2 += `0.85 0.35 0.1 RG 0.8 w 36 ${curY2 - 22} 523 22 re S\n`;
  p2 += `BT /F2 7.2 Tf 0.7 0.15 0.1 rg 42 ${curY2 - 10} Td (STRICT CADRE RULE: Inter-Circle Transfer (ICT) is NOT permitted for Junior Associates during clerical service.) Tj ET\n`;
  p2 += `BT /F1 6.8 Tf 0.25 0.25 0.25 rg 42 ${curY2 - 18} Td (Recruitment is strictly Circle-specific. Candidates can only change circles after promotion to Officer Cadre (Scale-I).) Tj ET\n`;
  curY2 -= 30;

  // LPT Mapping Mini-Table
  p2 += `0.22 0.28 0.42 rg 36 ${curY2 - 13} 523 13 re f\n`;
  p2 += `BT /F2 6.8 Tf 1 1 1 rg 42 ${curY2 - 9} Td (Recruitment Circle) Tj ET\n`;
  p2 += `BT /F2 6.8 Tf 1 1 1 rg 170 ${curY2 - 9} Td (States Covered) Tj ET\n`;
  p2 += `BT /F2 6.8 Tf 1 1 1 rg 310 ${curY2 - 9} Td (Recognized Local Language(s)) Tj ET\n`;
  p2 += `BT /F2 6.8 Tf 1 1 1 rg 440 ${curY2 - 9} Td (LPT Exemption Condition) Tj ET\n`;

  const lptData = [
    ['Maharashtra Circle', 'Maharashtra, Goa', 'Marathi, Konkani', '10th/12th studied Marathi/Konkani'],
    ['Ahmedabad Circle', 'Gujarat, Daman & Diu', 'Gujarati', '10th/12th studied Gujarati'],
    ['Bengaluru Circle', 'Karnataka', 'Kannada', '10th/12th studied Kannada'],
    ['Chennai Circle', 'Tamil Nadu, Puducherry', 'Tamil', '10th/12th studied Tamil'],
    ['Hyderabad / Amaravati', 'Telangana, Andhra Pradesh', 'Telugu, Urdu', '10th/12th studied Telugu/Urdu'],
    ['Kolkata / Bhubaneswar', 'West Bengal, Odisha, Sikkim', 'Bengali, Odia, Nepali', '10th/12th studied local language'],
    ['Chandigarh / Delhi / Bhopal', 'Punjab, Haryana, Delhi, MP, UP, Raj', 'Punjabi, Hindi, Urdu', '10th/12th studied Punjabi/Hindi']
  ];

  curY2 -= 13;
  lptData.forEach((ld, idx) => {
    const bg = idx % 2 === 0 ? '1 1 1' : '0.97 0.98 0.99';
    p2 += `${bg} rg 36 ${curY2 - 11} 523 11 re f\n`;
    p2 += `0.85 0.85 0.88 RG 0.4 w 36 ${curY2 - 11} 523 11 re S\n`;

    p2 += `BT /F2 6.5 Tf 0.15 0.25 0.45 rg 42 ${curY2 - 8} Td (${ld[0]}) Tj ET\n`;
    p2 += `BT /F1 6.5 Tf 0.2 0.2 0.2 rg 170 ${curY2 - 8} Td (${ld[1]}) Tj ET\n`;
    p2 += `BT /F2 6.5 Tf 0.15 0.4 0.2 rg 310 ${curY2 - 8} Td (${ld[2]}) Tj ET\n`;
    p2 += `BT /F1 6.2 Tf 0.25 0.25 0.25 rg 440 ${curY2 - 8} Td (${ld[3]}) Tj ET\n`;
    curY2 -= 11;
  });

  // Footer P2
  p2 += `0.7 0.7 0.7 RG 0.5 w 36 45 523 0.1 re S\n`;
  p2 += `BT /F1 7.2 Tf 0.4 0.4 0.4 rg 36 34 Td (Page 2 of 2 | SBI Clerk 2026 Declaration Sheet, Cadre Policy & LPT Language Mapping | https://signresize.in) Tj ET\n`;
  p2 += `BT /F2 7.2 Tf 0.18 0.32 0.58 rg 480 34 Td (SignResize.in) Tj ET\n`;

  pdf.addPage(p2);

  const pdfBuffer = pdf.build();
  const outDir = path.resolve('public/downloads');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'sbi-clerk-2026-photo-sign-and-declaration-guide.pdf');
  fs.writeFileSync(outPath, pdfBuffer);

  const distDir = path.resolve('dist/downloads');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sbi-clerk-2026-photo-sign-and-declaration-guide.pdf'), pdfBuffer);
  }
  console.log(`[OK] Generated official SBI Clerk PDF at ${outPath} (${pdfBuffer.length} bytes)`);
}

buildSbiClerkPdf();
