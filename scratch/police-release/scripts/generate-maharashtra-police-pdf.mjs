// scripts/generate-maharashtra-police-pdf.mjs
// Generates official-grade, vector-crisp PDF handbook for Maharashtra Police Bharti 2026

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

    let out = '%PDF-1.4\n%\xFF\xFF\xFF\xFF\n';
    const offsets = [];

    for (let i = 1; i < objects.length; i++) {
      offsets[i] = Buffer.byteLength(out, 'utf8');
      out += `${i} 0 obj\n${objects[i]}\nendobj\n`;
    }

    const xrefOffset = Buffer.byteLength(out, 'utf8');
    out += `xref\n0 ${objects.length}\n`;
    out += `0000000000 65535 f \n`;

    for (let i = 1; i < objects.length; i++) {
      const offStr = String(offsets[i]).padStart(10, '0');
      out += `${offStr} 00000 n \n`;
    }

    out += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\n`;
    out += `startxref\n${xrefOffset}\n%%EOF\n`;

    return Buffer.from(out, 'utf8');
  }
}

function createPageStream(pageNumber, totalPages, title, subtitle, sections) {
  let s = '';

  // Header Bar (Navy Blue rectangle)
  s += `0.08 0.18 0.36 rg\n`;
  s += `36 792 523 38 re f\n`;

  // Header Title
  s += `BT /F2 13 Tf 1 1 1 rg 46 808 Td (${title}) Tj ET\n`;
  s += `BT /F1 8.5 Tf 0.85 0.9 1 rg 46 798 Td (${subtitle}) Tj ET\n`;

  // Footer line
  s += `0.85 0.88 0.92 RG 1 w 36 36 m 559 36 l S\n`;
  // Footer text
  s += `BT /F1 7.5 Tf 0.45 0.45 0.5 rg 46 25 Td (SignResize.in | Official Maharashtra Police Recruitment Handbook | Source: mahapolice.gov.in) Tj ET\n`;
  s += `BT /F2 8 Tf 0.2 0.3 0.6 rg 470 25 Td (Page ${pageNumber} of ${totalPages}) Tj ET\n`;

  let y = 762;

  for (const sec of sections) {
    if (sec.type === 'heading') {
      y -= 12;
      s += `0.12 0.35 0.65 rg 36 ${y - 2} 4 14 re f\n`;
      s += `BT /F2 11 Tf 0.1 0.15 0.25 rg 46 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 16;
    } else if (sec.type === 'subheading') {
      y -= 6;
      s += `BT /F2 9.5 Tf 0.2 0.3 0.4 rg 46 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 13;
    } else if (sec.type === 'paragraph') {
      s += `BT /F1 8.5 Tf 0.25 0.25 0.3 rg 46 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 12;
    } else if (sec.type === 'bullet') {
      s += `0.2 0.4 0.7 rg 48 ${y + 2.5} 2.5 2.5 re f\n`;
      s += `BT /F1 8 Tf 0.2 0.2 0.25 rg 56 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 11.5;
    } else if (sec.type === 'table') {
      y -= 4;
      const headers = sec.headers;
      const rows = sec.rows;
      const colWidths = sec.colWidths || [160, 160, 180];
      const startX = 46;
      const tableWidth = colWidths.reduce((a, b) => a + b, 0);

      // Header row
      s += `0.92 0.94 0.98 rg 46 ${y - 3} ${tableWidth} 15 re f\n`;
      s += `0.8 0.85 0.92 RG 0.5 w 46 ${y - 3} ${tableWidth} 15 re S\n`;

      let curX = startX;
      for (let h = 0; h < headers.length; h++) {
        s += `BT /F2 8 Tf 0.15 0.25 0.45 rg ${curX + 6} ${y + 1} Td (${headers[h]}) Tj ET\n`;
        curX += colWidths[h];
      }
      y -= 15;

      // Data rows
      for (let r = 0; r < rows.length; r++) {
        const rowBg = (r % 2 === 0) ? '1 1 1' : '0.97 0.98 1';
        s += `${rowBg} rg 46 ${y - 3} ${tableWidth} 13.5 re f\n`;
        s += `0.88 0.9 0.94 RG 0.3 w 46 ${y - 3} ${tableWidth} 13.5 re S\n`;

        curX = startX;
        for (let c = 0; c < rows[r].length; c++) {
          const font = (c === rows[r].length - 1) ? '/F2' : '/F1';
          const color = (c === rows[r].length - 1) ? '0.1 0.4 0.2' : '0.2 0.2 0.25';
          s += `BT ${font} 7.5 Tf ${color} rg ${curX + 6} ${y + 0.5} Td (${rows[r][c]}) Tj ET\n`;
          curX += colWidths[c];
        }
        y -= 13.5;
      }
      y -= 6;
    } else if (sec.type === 'notice') {
      y -= 4;
      s += `0.98 0.95 0.9 rg 46 ${y - 20} 500 24 re f\n`;
      s += `0.85 0.65 0.2 RG 0.8 w 46 ${y - 20} 500 24 re S\n`;
      s += `BT /F2 8 Tf 0.6 0.35 0.05 rg 54 ${y - 8} Td (IMPORTANT RULE: ${sec.title}) Tj ET\n`;
      s += `BT /F1 7.5 Tf 0.35 0.25 0.1 rg 54 ${y - 17} Td (${sec.text}) Tj ET\n`;
      y -= 28;
    }
  }

  return s;
}

// Ensure destination exists
const outDir = path.resolve('public/downloads');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const pdf = new SimplePdf();

// PAGE 1: PHYSICAL EFFICIENCY TEST (PET - 50 MARKS GROUND CHART)
const p1Sections = [
  { type: 'heading', text: '1. PHYSICAL EFFICIENCY TEST (PET) - 50 TOTAL MARKS' },
  { type: 'paragraph', text: 'Candidates must score at least 50% (25 out of 50 marks) to qualify for the 100-mark written test (1:10 shortlisting ratio).' },
  
  { type: 'subheading', text: 'Event 1: Male 1600m Running Time vs Marks Scale (20 Marks Max)' },
  {
    type: 'table',
    headers: ['Running Time Bracket (1600m)', 'Marks Awarded', 'Status / Evaluation'],
    colWidths: [180, 140, 180],
    rows: [
      ['5 min 10 sec or less', '20 Marks', 'Maximum Score (Full Marks)'],
      ['5 min 11 sec to 5 min 30 sec', '18 Marks', 'High Merit Tier'],
      ['5 min 31 sec to 5 min 50 sec', '15 Marks', 'Competitive Tier'],
      ['5 min 51 sec to 6 min 10 sec', '12 Marks', 'Average Tier'],
      ['6 min 11 sec to 6 min 30 sec', '10 Marks', 'Minimum Borderline'],
      ['Over 6 min 30 sec', '0 Marks', 'Disqualified from Recruitment']
    ]
  },

  { type: 'subheading', text: 'Event 2: Female 800m Running Time vs Marks Scale (20 Marks Max)' },
  {
    type: 'table',
    headers: ['Running Time Bracket (800m)', 'Marks Awarded', 'Status / Evaluation'],
    colWidths: [180, 140, 180],
    rows: [
      ['2 min 50 sec or less', '20 Marks', 'Maximum Score (Full Marks)'],
      ['2 min 51 sec to 3 min 00 sec', '18 Marks', 'High Merit Tier'],
      ['3 min 01 sec to 3 min 10 sec', '15 Marks', 'Competitive Tier'],
      ['3 min 11 sec to 3 min 20 sec', '12 Marks', 'Average Tier'],
      ['3 min 21 sec to 3 min 30 sec', '10 Marks', 'Minimum Borderline'],
      ['Over 4 min 00 sec', '0 Marks', 'Disqualified from Recruitment']
    ]
  },

  { type: 'subheading', text: 'Event 3: 100m Sprint Time vs Marks Scale (15 Marks Max)' },
  {
    type: 'table',
    headers: ['Male 100m Time', 'Female 100m Time', 'Marks Awarded'],
    colWidths: [170, 170, 160],
    rows: [
      ['11.50 sec or less', '14.00 sec or less', '15 Marks (Full Marks)'],
      ['11.51 to 12.50 sec', '14.01 to 15.00 sec', '12 Marks'],
      ['12.51 to 13.50 sec', '15.01 to 16.00 sec', '10 Marks'],
      ['13.51 to 14.50 sec', '16.01 to 17.00 sec', '8 Marks'],
      ['14.51 to 15.50 sec', '17.01 to 18.00 sec', '6 Marks'],
      ['15.51 to 16.50 sec', '18.01 to 19.00 sec', '4 Marks'],
      ['16.51 to 17.50 sec', '19.01 to 20.00 sec', '2 Marks'],
      ['Over 17.50 sec', 'Over 20.00 sec', '0 Marks']
    ]
  },

  { type: 'subheading', text: 'Event 4: Shot Put (Gola Phek) - Male 7.26 kg / Female 4.0 kg (15 Marks Max)' },
  {
    type: 'table',
    headers: ['Male Distance (7.26 kg)', 'Female Distance (4.0 kg)', 'Marks Awarded'],
    colWidths: [170, 170, 160],
    rows: [
      ['8.50 meters or more', '6.00 meters or more', '15 Marks (Full Marks)'],
      ['7.90m to 8.49m', '5.50m to 5.99m', '12 Marks'],
      ['7.30m to 7.89m', '5.00m to 5.49m', '10 Marks'],
      ['6.70m to 7.29m', '4.50m to 4.99m', '8 Marks'],
      ['6.10m to 6.69m', '4.00m to 4.49m', '6 Marks'],
      ['5.50m to 6.09m', '3.50m to 3.99m', '4 Marks'],
      ['Less than 3.10m', 'Less than 2.00m', '0 Marks']
    ]
  }
];

pdf.addPage(createPageStream(
  1, 2,
  'MAHARASHTRA POLICE BHARTI 2026 - PHYSICAL (PET) MARKS CHART',
  'Official 50-Mark Physical Test Criteria & Running Timings (Home Department, Govt of Maharashtra)',
  p1Sections
));

// PAGE 2: WRITTEN EXAM SCHEME & DOCUMENT UPLOAD SPECIFICATIONS
const p2Sections = [
  { type: 'heading', text: '2. WRITTEN EXAMINATION PATTERN (100 MARKS - 90 MINUTES)' },
  { type: 'paragraph', text: 'Conducted in OMR / CBT format with 100 multiple choice questions. ZERO negative marking.' },
  {
    type: 'table',
    headers: ['Subject / Syllabus Section', 'Questions', 'Marks', 'Strategic Focus'],
    colWidths: [160, 70, 70, 200],
    rows: [
      ['Marathi Grammar (Marathi Vyakaran)', '25', '25 Marks', 'Highest ROI section; Walimbe / Shinde books'],
      ['Mathematics (Ankganit)', '25', '25 Marks', 'Percentages, Ratios, Time-Speed-Distance'],
      ['General Knowledge & Current Affairs', '25', '25 Marks', 'Maharashtra History, Geography, Constitution'],
      ['Intellectual Test / Reasoning', '25', '25 Marks', 'Coding-decoding, Series, Logical deductions'],
      ['TOTAL WRITTEN SCHEME', '100', '100 Marks', 'Time: 90 Minutes | Penalty: 0 Negative Marks']
    ]
  },

  {
    type: 'notice',
    title: 'MINIMUM QUALIFYING CRITERIA',
    text: 'Aspirants must score a minimum of 40% (40 out of 100 marks) in the written test to be considered in the final selection merit list.'
  },

  { type: 'heading', text: '3. OFFICIAL MAHAIT PORTAL DOCUMENT UPLOAD RULES' },
  { type: 'paragraph', text: 'Strict automated bounds are enforced during application on mahapolice.gov.in / policerecruitment.mahait.org.' },
  {
    type: 'table',
    headers: ['Document Type', 'Allowed Pixel Dimensions', 'File Size Limit', 'Format & Ink Rules'],
    colWidths: [130, 130, 110, 130],
    rows: [
      ['Passport Photograph', '160 x 200 pixels (160x200)', '5 KB to 20 KB (Max 50 KB)', 'JPG/JPEG, light background'],
      ['Candidate Signature', '256 x 64 pixels (256x64)', '5 KB to 20 KB strictly', 'Black ink, clean white paper'],
      ['Cursive Handwriting', 'Natural Running Script', 'Must NOT be in ALL CAPS', 'Capital letters disqualify form']
    ]
  },

  { type: 'heading', text: '4. DIRECT RESIZER & DOCUMENT TOOLS' },
  { type: 'bullet', text: 'Dedicated Maharashtra Police Resizer: https://signresize.in/maharashtra-police-signature-resize/' },
  { type: 'bullet', text: 'General Passport Photo Resizer: https://signresize.in/photo-resizer/' },
  { type: 'bullet', text: 'Convert Blue Ink Signature to Black & White: https://signresize.in/make-signature-background-white/' },
  { type: 'bullet', text: '100% Free, Secure Client-Side Processing: Zero server uploads ensure candidate privacy.' }
];

pdf.addPage(createPageStream(
  2, 2,
  'MAHARASHTRA POLICE BHARTI 2026 - WRITTEN SYLLABUS & UPLOAD RULES',
  '100-Mark Written Blueprint, Subject Weightage & Official MahaIT Photo/Signature Specifications',
  p2Sections
));

const outPath = path.resolve('public/downloads/maharashtra-police-bharti-2026-physical-chart-and-syllabus.pdf');
fs.writeFileSync(outPath, pdf.build());
console.log(`Generated official PDF at: ${outPath} (${fs.statSync(outPath).size} bytes)`);

