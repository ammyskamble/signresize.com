// scripts/generate-wb-police-pdf.mjs
// Generates official-grade, vector-crisp 4-Page Master Handbooks for West Bengal Police:
// 1. English Edition: wb-police-constable-si-2026-physical-chart-and-syllabus-en.pdf
// 2. Bengali Edition: wb-police-constable-si-2026-physical-chart-and-syllabus-bn.pdf
// 3. Default Canonical: wb-police-constable-si-2026-physical-chart-and-syllabus.pdf

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

function getBrowserExecutable() {
  const candidates = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

function renderHtmlToPdf(browserPath, htmlContent, tempHtmlPath, outputPdfPath) {
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');
  execFileSync(browserPath, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${outputPdfPath}`,
    tempHtmlPath
  ]);
  if (!fs.existsSync(outputPdfPath)) {
    throw new Error(`Failed to generate PDF at ${outputPdfPath}`);
  }
}

// Common CSS styling for both editions ensuring identical typography, spacing, and 4-page structure
const commonCss = `
  @page {
    size: A4 portrait;
    margin: 0;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #1e293b;
    font-family: -apple-system, BlinkMacSystemFont, "Nirmala UI", "Segoe UI", "Vrinda", Arial, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    width: 210mm;
    height: 297mm;
    padding: 10mm 12mm 12mm 12mm;
    position: relative;
    page-break-after: always;
    break-after: page;
    overflow: hidden;
    background: #ffffff;
  }
  .page:last-child {
    page-break-after: avoid;
    break-after: avoid;
  }
  .header {
    background: #0b1f3a;
    border-bottom: 2.5px solid #d97706;
    border-radius: 5px;
    padding: 6px 12px;
    margin-bottom: 6px;
  }
  .header-title {
    color: #ffffff;
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    line-height: 1.25;
  }
  .header-subtitle {
    color: #bfdbfe;
    font-size: 8.5px;
    font-weight: 500;
    margin-top: 1.5px;
    line-height: 1.2;
  }
  .footer {
    position: absolute;
    bottom: 6.5mm;
    left: 12mm;
    right: 12mm;
    border-top: 1px solid #cbd5e1;
    padding-top: 3.5px;
    display: flex;
    justify-content: space-between;
    font-size: 7.5px;
    color: #64748b;
  }
  .footer-right {
    font-weight: 700;
    color: #1d4ed8;
  }
  .section-heading {
    display: flex;
    align-items: center;
    font-size: 10px;
    font-weight: 800;
    color: #0f172a;
    margin: 5px 0 2.5px 0;
    border-left: 3.5px solid #1d4ed8;
    padding-left: 6px;
    line-height: 1.2;
  }
  .section-subheading {
    font-size: 8.8px;
    font-weight: 700;
    color: #1e3a8a;
    margin: 4px 0 2px 0;
    line-height: 1.2;
  }
  .section-paragraph {
    font-size: 7.8px;
    color: #334155;
    line-height: 1.35;
    margin-bottom: 3.5px;
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.5px;
    margin-bottom: 4px;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
    overflow: hidden;
  }
  .data-table th {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
    text-align: left;
    padding: 3px 5px;
    border-bottom: 1.5px solid #cbd5e1;
    font-size: 7.5px;
    line-height: 1.2;
  }
  .data-table td {
    padding: 2.8px 5px;
    border-bottom: 1px solid #e2e8f0;
    color: #1e293b;
    line-height: 1.25;
  }
  .data-table tr:nth-child(even) td {
    background: #f8fafc;
  }
  .badge {
    display: inline-block;
    padding: 1px 4.5px;
    border-radius: 3px;
    font-size: 6.8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.2px;
  }
  .badge-blue { background: #dbeafe; color: #1e40af; }
  .badge-emerald { background: #d1fae5; color: #065f46; }
  .badge-amber { background: #fef3c7; color: #92400e; }
  .badge-purple { background: #ede9fe; color: #5b21b6; }
  .badge-rose { background: #ffe4e6; color: #9f1239; }
  .callout-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 4.5px 7px;
    margin: 4px 0;
  }
  .callout-warning {
    background: #fffbeb;
    border-left: 3px solid #d97706;
  }
  .callout-info {
    background: #eff6ff;
    border-left: 3px solid #2563eb;
  }
  .callout-success {
    background: #ecfdf5;
    border-left: 3px solid #059669;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5px;
  }
  .card-box {
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    padding: 4.5px 6.5px;
  }
  .card-box-title {
    font-size: 8px;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .check-list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 7.5px;
    line-height: 1.35;
    color: #334155;
  }
  .check-list li {
    position: relative;
    padding-left: 11px;
    margin-bottom: 2px;
  }
  .check-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #059669;
    font-weight: 800;
    font-size: 8px;
  }
  .spec-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
    margin-top: 3px;
  }
  .spec-item {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
    padding: 3px 4.5px;
    text-align: center;
  }
  .spec-label {
    font-size: 6.6px;
    color: #64748b;
    text-transform: uppercase;
    font-weight: 700;
  }
  .spec-val {
    font-size: 8.5px;
    color: #1e3a8a;
    font-weight: 800;
    margin-top: 1px;
  }
`;

// ==========================================
// 1. ENGLISH EDITION HTML (4 Full Pages)
// ==========================================
const englishHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>West Bengal Police Constable & SI 2026 Master Handbook - SignResize</title>
<style>${commonCss}</style>
</head>
<body>

<!-- PAGE 1: PHYSICAL MEASUREMENT (PMT) & PHYSICAL EFFICIENCY TEST (PET) -->
<div class="page">
  <div class="header">
    <div class="header-title">WEST BENGAL POLICE & KOLKATA POLICE CANDIDATE HANDBOOK 2026</div>
    <div class="header-subtitle">Official WBPRB Standards: Constable, Lady Constable, Sub-Inspector (UB & AB) | PMT & PET Guidelines</div>
  </div>

  <div class="section-heading">1. PHYSICAL MEASUREMENT TEST (PMT) — HEIGHT, CHEST & WEIGHT STANDARDS</div>
  <p class="section-paragraph">
    Physical Measurement Test (PMT) is strictly qualifying in nature. Height and weight are digitally scanned using Electronic Height-Weight Scales, followed by biometric chest measurement for male candidates.
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:23%;">Post & Category</th>
        <th style="width:25%;">Candidate Category / Tribe</th>
        <th style="width:14%;">Min Height</th>
        <th style="width:14%;">Min Weight</th>
        <th style="width:24%;">Chest (Unexpanded / Expansion)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"><strong>Constable (Male)</strong></td>
        <td>All categories (UR, EWS, OBC-A, OBC-B, SC)</td>
        <td><strong>167 cm</strong></td>
        <td><strong>57 kg</strong></td>
        <td><strong>78 cm</strong> (min 5 cm expansion to 83 cm)</td>
      </tr>
      <tr>
        <td>Gorkhas, Garhwalis, Rajbanshis &amp; ST</td>
        <td><strong>160 cm</strong></td>
        <td><strong>53 kg</strong></td>
        <td><strong>76 cm</strong> (min 5 cm expansion to 81 cm)</td>
      </tr>
      <tr>
        <td rowspan="2"><strong>Lady Constable (Female)</strong></td>
        <td>All categories (UR, EWS, OBC-A, OBC-B, SC)</td>
        <td><strong>160 cm</strong></td>
        <td><strong>49 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
      <tr>
        <td>Gorkhas, Garhwalis, Rajbanshis &amp; ST</td>
        <td><strong>152 cm</strong></td>
        <td><strong>45 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
      <tr>
        <td rowspan="2"><strong>Constable (Third Gender)</strong></td>
        <td>All categories (UR, EWS, OBC-A, OBC-B, SC)</td>
        <td><strong>163 cm</strong></td>
        <td><strong>52 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
      <tr>
        <td>Gorkhas, Garhwalis, Rajbanshis &amp; ST</td>
        <td><strong>155 cm</strong></td>
        <td><strong>48 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
      <tr>
        <td rowspan="2"><strong>Sub-Inspector (UB - Male)</strong></td>
        <td>All categories (UR, EWS, OBC-A, OBC-B, SC)</td>
        <td><strong>167 cm</strong></td>
        <td><strong>56 kg</strong></td>
        <td><strong>79 cm</strong> (min 5 cm expansion to 84 cm)</td>
      </tr>
      <tr>
        <td>Gorkhas, Garhwalis, Rajbanshis &amp; ST</td>
        <td><strong>160 cm</strong></td>
        <td><strong>52 kg</strong></td>
        <td><strong>74 cm</strong> (min 5 cm expansion to 79 cm)</td>
      </tr>
      <tr>
        <td rowspan="2"><strong>Sub-Inspector (AB - Male)</strong></td>
        <td>All categories (UR, EWS, OBC-A, OBC-B, SC)</td>
        <td><strong>173 cm</strong></td>
        <td><strong>60 kg</strong></td>
        <td><strong>81 cm</strong> (min 5 cm expansion to 86 cm)</td>
      </tr>
      <tr>
        <td>Gorkhas, Garhwalis, Rajbanshis &amp; ST</td>
        <td><strong>163 cm</strong></td>
        <td><strong>54 kg</strong></td>
        <td><strong>76 cm</strong> (min 5 cm expansion to 81 cm)</td>
      </tr>
      <tr>
        <td rowspan="2"><strong>Lady Sub-Inspector (UB)</strong></td>
        <td>All categories (UR, EWS, OBC-A, OBC-B, SC)</td>
        <td><strong>160 cm</strong></td>
        <td><strong>45 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
      <tr>
        <td>Gorkhas, Garhwalis, Rajbanshis &amp; ST</td>
        <td><strong>155 cm</strong></td>
        <td><strong>40 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
      <tr>
        <td rowspan="2"><strong>Sub-Inspector (Third Gender)</strong></td>
        <td>All categories (UR, EWS, OBC-A, OBC-B, SC)</td>
        <td><strong>163 cm</strong></td>
        <td><strong>52 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
      <tr>
        <td>Gorkhas, Garhwalis, Rajbanshis &amp; ST</td>
        <td><strong>155 cm</strong></td>
        <td><strong>48 kg</strong></td>
        <td><span class="badge badge-emerald">Not Applicable</span></td>
      </tr>
    </tbody>
  </table>

  <div class="section-heading">2. PHYSICAL EFFICIENCY TEST (PET) — ENDURANCE RUNNING TIMINGS</div>
  <p class="section-paragraph">
    Candidates who qualify in PMT appear for the Physical Efficiency Test (PET). PET is strictly qualifying in nature. Timings are tracked using <strong>Radio Frequency Identification Device (RFID)</strong> chips attached to candidates' ankle or chest bibs.
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:26%;">Post & Cadre</th>
        <th style="width:22%;">Gender Category</th>
        <th style="width:18%;">Running Distance</th>
        <th style="width:20%;">Prescribed Time Limit</th>
        <th style="width:14%;">Evaluation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>WBP &amp; KP Constable</strong></td>
        <td>Male Candidates</td>
        <td><strong>1600 meters</strong></td>
        <td><strong>6 minutes 30 seconds (6:30 min)</strong></td>
        <td><span class="badge badge-blue">Qualifying Only</span></td>
      </tr>
      <tr>
        <td><strong>Lady Constable</strong></td>
        <td>Female Candidates</td>
        <td><strong>800 meters</strong></td>
        <td><strong>4 minutes 00 seconds (4:00 min)</strong></td>
        <td><span class="badge badge-blue">Qualifying Only</span></td>
      </tr>
      <tr>
        <td><strong>Constable (Third Gender)</strong></td>
        <td>Transgender Candidates</td>
        <td><strong>800 meters</strong></td>
        <td><strong>3 minutes 30 seconds (3:30 min)</strong></td>
        <td><span class="badge badge-blue">Qualifying Only</span></td>
      </tr>
      <tr>
        <td><strong>Sub-Inspector (UB &amp; AB)</strong></td>
        <td>Male Candidates</td>
        <td><strong>800 meters</strong></td>
        <td><strong>3 minutes 00 seconds (3:00 min)</strong></td>
        <td><span class="badge badge-blue">Qualifying Only</span></td>
      </tr>
      <tr>
        <td><strong>Lady Sub-Inspector (UB)</strong></td>
        <td>Female Candidates</td>
        <td><strong>400 meters</strong></td>
        <td><strong>2 minutes 00 seconds (2:00 min)</strong></td>
        <td><span class="badge badge-blue">Qualifying Only</span></td>
      </tr>
      <tr>
        <td><strong>Sub-Inspector (Third Gender)</strong></td>
        <td>Transgender Candidates</td>
        <td><strong>400 meters</strong></td>
        <td><strong>1 minute 40 seconds (1:40 min)</strong></td>
        <td><span class="badge badge-blue">Qualifying Only</span></td>
      </tr>
    </tbody>
  </table>

  <div class="callout-box callout-warning">
    <div style="font-size:7.8px; font-weight:800; color:#92400e; margin-bottom:1.5px;">⚠️ CRITICAL PMT / PET GROUND REGULATIONS (WBPRB DIRECTIVE):</div>
    <div style="font-size:7.2px; color:#78350f; line-height:1.35;">
      • <strong>Single Chance Rule:</strong> Only ONE chance is given for the endurance run. No repeat or re-run is granted under any circumstances.<br>
      • <strong>Automated RFID System:</strong> Optical timing sensors detect start, mid-lap, and finish crossings automatically. Manual stopwatch timing has been completely eliminated.<br>
      • <strong>Chest Expansion Strictness:</strong> Male candidates must demonstrate a minimum 5 cm expansion from unexpanded chest. Failure to expand 5 cm leads to instant disqualification even if total chest size exceeds standard.
    </div>
  </div>

  <div class="footer">
    <span>West Bengal Police &amp; Kolkata Police Recruitment 2026 | SignResize Handbook</span>
    <span class="footer-right">Page 1 of 4 (Physical Standards &amp; PET)</span>
  </div>
</div>

<!-- PAGE 2: SPECIAL CADRES, QUOTAS, KP VS WBP & AGE RELAXATIONS -->
<div class="page">
  <div class="header">
    <div class="header-title">WEST BENGAL POLICE & KOLKATA POLICE CANDIDATE HANDBOOK 2026</div>
    <div class="header-subtitle">Cadre Differentiation, NVF / Home Guard / Civic Volunteer Quota, Age Relaxations & Eligibility</div>
  </div>

  <div class="section-heading">1. KOLKATA POLICE (KP) VS WEST BENGAL POLICE (WBP) COMPARATIVE MATRIX</div>
  <p class="section-paragraph">
    Both forces are recruited centrally by the West Bengal Police Recruitment Board (WBPRB). Candidates frequently ask regarding transferability, administrative jurisdiction, and uniform rules.
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:20%;">Parameter</th>
        <th style="width:40%;">West Bengal Police (WBP)</th>
        <th style="width:40%;">Kolkata Police (KP)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Governing Act</strong></td>
        <td>Police Act, 1861 (Bengal Act)</td>
        <td>Kolkata Police Act, 1866 &amp; Suburban Police Act, 1866</td>
      </tr>
      <tr>
        <td><strong>Geographic Scope</strong></td>
        <td>All 23 districts of West Bengal (Rural, Highway &amp; Commissionerates)</td>
        <td>Kolkata Metropolitan Area &amp; designated port jurisdiction</td>
      </tr>
      <tr>
        <td><strong>Uniform Style</strong></td>
        <td>Standard Khaki uniform with WBP shoulder badges</td>
        <td>Traditional White uniform (Khaki for Combat/Armed units)</td>
      </tr>
      <tr>
        <td><strong>Recruiting Agency</strong></td>
        <td>WBPRB (prb.wb.gov.in)</td>
        <td>WBPRB (prb.wb.gov.in) — Common examination stream</td>
      </tr>
      <tr>
        <td><strong>Pay Matrix (ROPA 2019)</strong></td>
        <td>Level 6: ₹22,700 – ₹58,500 (Constable) | Level 10: ₹32,100 – ₹82,900 (SI)</td>
        <td>Level 6: ₹22,700 – ₹58,500 (Constable) | Level 10: ₹32,100 – ₹82,900 (SI)</td>
      </tr>
      <tr>
        <td><strong>Allowances &amp; Perks</strong></td>
        <td>Basic + DA (State Govt) + HRA (12%) + MA (₹500) + Ration Money</td>
        <td>Basic + DA (State Govt) + HRA (12% urban) + MA (₹500) + Ration Money</td>
      </tr>
    </tbody>
  </table>

  <div class="section-heading">2. NVF, HOME GUARD & CIVIC VOLUNTEER (CV) QUOTA & RELAXATIONS</div>
  <p class="section-paragraph">
    Government of West Bengal provides horizontal reservation and age relaxations to currently serving auxiliary personnel.
  </p>

  <div class="grid-3">
    <div class="card-box">
      <div class="card-box-title"><span>🛡️</span> Civic Volunteers (CV)</div>
      <ul class="check-list">
        <li><strong>Service Tenure:</strong> Minimum 3 continuous years of completed service as of 01.01.2026.</li>
        <li><strong>Age Relaxation:</strong> Upper age relaxed up to <strong>35 years</strong> (up to 40 for SC/ST, 38 for OBC).</li>
        <li><strong>Quota:</strong> 10% horizontal reservation in Constable vacancies.</li>
        <li><strong>Requirement:</strong> Authentic Certificate from SP / DCP / Commissionerate.</li>
      </ul>
    </div>
    <div class="card-box">
      <div class="card-box-title"><span>👮‍♂️</span> Home Guards (HG)</div>
      <ul class="check-list">
        <li><strong>Service Tenure:</strong> Minimum 3 continuous years of completed enrollment in WBP / KP.</li>
        <li><strong>Age Relaxation:</strong> Upper age relaxed up to <strong>35 years</strong> (inclusive of categories).</li>
        <li><strong>Quota:</strong> 10% horizontal reservation in Constable cadre.</li>
        <li><strong>Requirement:</strong> Clean service sheet with no pending departmental inquiries.</li>
      </ul>
    </div>
    <div class="card-box">
      <div class="card-box-title"><span>🎖️</span> National Volunteer Force (NVF)</div>
      <ul class="check-list">
        <li><strong>Service Tenure:</strong> Minimum 3 years of active volunteer training and duties.</li>
        <li><strong>Age Relaxation:</strong> Upper age relaxed up to <strong>35 years</strong> as per state gazette.</li>
        <li><strong>Quota:</strong> Horizontal reservation as notified in specific roster vacancies.</li>
        <li><strong>Requirement:</strong> Official discharge/enrollment book issued by NVF Directorate.</li>
      </ul>
    </div>
  </div>

  <div class="section-heading" style="margin-top:6px;">3. AGE LIMITS, CATEGORY RELAXATIONS & LANGUAGE ELIGIBILITY</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width:24%;">Candidate Category</th>
        <th style="width:20%;">Constable Age Range</th>
        <th style="width:20%;">Sub-Inspector Age Range</th>
        <th style="width:36%;">Mandatory Domicile / Documentary Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Unreserved (UR) &amp; EWS</strong></td>
        <td>18 to 30 Years</td>
        <td>20 to 30 Years</td>
        <td>Age calculated as of 1st January of recruitment year.</td>
      </tr>
      <tr>
        <td><strong>SC &amp; ST (West Bengal)</strong></td>
        <td>18 to 35 Years (+5 yrs)</td>
        <td>20 to 35 Years (+5 yrs)</td>
        <td>Valid Caste Certificate issued by SDO / DWO in WB.</td>
      </tr>
      <tr>
        <td><strong>OBC-A &amp; OBC-B (West Bengal)</strong></td>
        <td>18 to 33 Years (+3 yrs)</td>
        <td>20 to 33 Years (+3 yrs)</td>
        <td>Revalidated NCL Certificate issued after 1st April of financial year.</td>
      </tr>
      <tr>
        <td><strong>Ex-Servicemen (ESM)</strong></td>
        <td>Military Svc + 3 yrs</td>
        <td>Military Svc + 3 yrs</td>
        <td>Discharge Book &amp; PPO. Maximum relaxation capped by state rules.</td>
      </tr>
      <tr>
        <td><strong>Other States Candidates</strong></td>
        <td>18 to 30 Years (UR only)</td>
        <td>20 to 30 Years (UR only)</td>
        <td>Treated strictly as Unreserved; no category benefits or age relaxations.</td>
      </tr>
    </tbody>
  </table>

  <div class="callout-box callout-info">
    <div style="font-size:7.8px; font-weight:800; color:#1e40af; margin-bottom:1.5px;">ℹ️ BENGALI LANGUAGE PROFICIENCY RULE (WEST BENGAL OFFICIAL LANGUAGE ACT, 1961):</div>
    <div style="font-size:7.2px; color:#1e3a8a; line-height:1.35;">
      Every candidate must be able to <strong>speak, read, and write in Bengali</strong>. Proficiency is formally verified at the Interview / Personality Test stage via viva reading and dictation. <em>Exemption:</em> Permanent residents of hill sub-divisions of Darjeeling and Kalimpong districts are exempted (Nepali language provisions apply).
    </div>
  </div>

  <div class="footer">
    <span>West Bengal Police &amp; Kolkata Police Recruitment 2026 | SignResize Handbook</span>
    <span class="footer-right">Page 2 of 4 (Cadres, Quotas &amp; Age Eligibility)</span>
  </div>
</div>

<!-- PAGE 3: WRITTEN EXAM PATTERN, SYLLABUS & MERIT FORMULA -->
<div class="page">
  <div class="header">
    <div class="header-title">WEST BENGAL POLICE & KOLKATA POLICE CANDIDATE HANDBOOK 2026</div>
    <div class="header-subtitle">Written Exam Scheme: Constable Single-Exam Model (85 Marks) vs SI Multi-Stage Pattern & Merit Formula</div>
  </div>

  <div class="section-heading">1. WBP CONSTABLE WRITTEN EXAM PATTERN (REVISED SINGLE-EXAM MODEL)</div>
  <p class="section-paragraph">
    Under WBPRB's streamlined selection system, candidates appear directly for the <strong>Single Written Examination (85 Marks)</strong>. Marks secured in this examination are directly added to the Interview (15 Marks) for the final 100-mark merit list.
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:30%;">Subject / Test Section</th>
        <th style="width:16%;">Total Questions</th>
        <th style="width:16%;">Maximum Marks</th>
        <th style="width:18%;">Duration &amp; Mode</th>
        <th style="width:20%;">Marking Scheme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>General Awareness &amp; GK</strong></td>
        <td>25 Questions</td>
        <td>25 Marks</td>
        <td rowspan="4"><strong>60 Minutes (1 Hour)</strong><br><span class="badge badge-purple">OMR Offline MCQ</span></td>
        <td rowspan="4">• <strong>+1.0 Mark</strong> for each correct answer<br>• <strong>-0.25 Mark</strong> (1/4th) penalty per wrong answer<br>• Medium: Bengali &amp; Nepali</td>
      </tr>
      <tr>
        <td><strong>Elementary Mathematics (10th Std)</strong></td>
        <td>25 Questions</td>
        <td>25 Marks</td>
      </tr>
      <tr>
        <td><strong>Reasoning &amp; Logical Analysis</strong></td>
        <td>25 Questions</td>
        <td>25 Marks</td>
      </tr>
      <tr>
        <td><strong>English Language</strong></td>
        <td>10 Questions</td>
        <td>10 Marks</td>
      </tr>
      <tr style="background:#f1f5f9; font-weight:bold;">
        <td>TOTAL / AGGREGATE</td>
        <td>85 Questions</td>
        <td>85 Marks</td>
        <td>1 Hour</td>
        <td>Negative Marking: 1/4th</td>
      </tr>
    </tbody>
  </table>

  <div class="section-heading">2. WBP SUB-INSPECTOR (SI) EXAMINATION SCHEME (PRELIMS & MAINS)</div>
  <p class="section-paragraph">
    Sub-Inspector recruitment features a 2-tier written structure: Preliminary Screening followed by a descriptive Final Combined Competitive Examination.
  </p>

  <div class="grid-2">
    <div class="card-box">
      <div class="card-box-title"><span>📝</span> Stage 1: Preliminary Exam (Screening)</div>
      <p style="font-size:7.2px; color:#475569; margin-bottom:3px;">
        100 Questions | 200 Marks | 90 Minutes | 0.50 Negative Marking. Qualifying only.
      </p>
      <table class="data-table" style="font-size:7px; margin-bottom:0;">
        <thead>
          <tr><th>Section</th><th>Qs</th><th>Marks</th></tr>
        </thead>
        <tbody>
          <tr><td>General Studies</td><td>50</td><td>100</td></tr>
          <tr><td>Logical &amp; Analytical Reasoning</td><td>25</td><td>50</td></tr>
          <tr><td>Arithmetic</td><td>25</td><td>50</td></tr>
          <tr style="font-weight:bold;"><td>Total</td><td>100</td><td>200</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card-box">
      <div class="card-box-title"><span>✍️</span> Stage 2: Final Combined Competitive (Mains)</div>
      <p style="font-size:7.2px; color:#475569; margin-bottom:3px;">
        3 Conventional Descriptive Papers | 200 Marks Total | Baseline for Merit.
      </p>
      <table class="data-table" style="font-size:7px; margin-bottom:0;">
        <thead>
          <tr><th>Paper &amp; Content</th><th>Duration</th><th>Marks</th></tr>
        </thead>
        <tbody>
          <tr><td>Paper I: GS (50), Reasoning (25), Math (25)</td><td>2 Hours</td><td>100</td></tr>
          <tr><td>Paper II: English (Drafting, Translation, Precis)</td><td>1 Hour</td><td>50</td></tr>
          <tr><td>Paper III: Bengali / Hindi / Urdu / Nepali</td><td>1 Hour</td><td>50</td></tr>
          <tr style="font-weight:bold;"><td>Total Mains Marks</td><td>4 Hours</td><td>200</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="section-heading" style="margin-top:6px;">3. INTERVIEW, TIE-BREAKING & FINAL MERIT COMPUTATION FORMULA</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width:22%;">Cadre / Post</th>
        <th style="width:30%;">Merit Components &amp; Marks</th>
        <th style="width:18%;">Total Merit Scale</th>
        <th style="width:30%;">Interview Minimum Qualifying Rule</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Constable &amp; Lady Constable</strong></td>
        <td>Written Exam (85 M) + Interview (15 M)</td>
        <td><strong>100 Marks</strong></td>
        <td>Candidates must secure qualifying marks in Interview as determined by WBPRB.</td>
      </tr>
      <tr>
        <td><strong>Sub-Inspector (UB &amp; AB)</strong></td>
        <td>Final Mains Exam (200 M) + Personality Test (30 M)</td>
        <td><strong>230 Marks</strong></td>
        <td>Mandatory minimum <strong>8 Marks</strong> (out of 30) required in Personality Test.</td>
      </tr>
    </tbody>
  </table>

  <div class="callout-box callout-success">
    <div style="font-size:7.8px; font-weight:800; color:#065f46; margin-bottom:1.5px;">🎯 TIE-BREAKING PROTOCOL FOR FINAL SELECTION (WBPRB MERIT PRINCIPLE):</div>
    <div style="font-size:7.2px; color:#047857; line-height:1.35;">
      When two or more candidates secure identical aggregate marks:<br>
      1. <strong>Higher Written Marks:</strong> Candidate scoring higher in the Written Examination (Constable) or Final Mains Exam (SI) is placed higher.<br>
      2. <strong>Seniority in Age:</strong> If written marks are tied, the candidate older in age (DOB) receives seniority.<br>
      3. <strong>Alphabetical Order:</strong> If age is also identical, ranking is resolved by alphabetical order of candidate names as per Madhyamik Admit.
    </div>
  </div>

  <div class="footer">
    <span>West Bengal Police &amp; Kolkata Police Recruitment 2026 | SignResize Handbook</span>
    <span class="footer-right">Page 3 of 4 (Exam Scheme, Syllabus &amp; Merit)</span>
  </div>
</div>

<!-- PAGE 4: DOCUMENT VERIFICATION (DV) & WBPRB PHOTO/SIGN RULES -->
<div class="page">
  <div class="header">
    <div class="header-title">WEST BENGAL POLICE & KOLKATA POLICE CANDIDATE HANDBOOK 2026</div>
    <div class="header-subtitle">12-Point Document Verification Checklist & WBPRB Portal Photo / Signature Standards</div>
  </div>

  <div class="section-heading">1. 12-POINT MANDATORY DOCUMENT VERIFICATION (DV) CHECKLIST</div>
  <p class="section-paragraph">
    Original documents along with self-attested photocopies must be produced during the Personality Test / DV stage. Discrepancies or outdated certificates result in immediate disqualification.
  </p>

  <div class="grid-2">
    <div class="card-box">
      <div class="card-box-title"><span>📋</span> Identity &amp; Educational Documents</div>
      <ul class="check-list">
        <li><strong>Madhyamik Admit Card / Certificate:</strong> Sole valid proof of Date of Birth (DOB) and candidate name spelling.</li>
        <li><strong>Madhyamik Marksheet &amp; Pass Certificate:</strong> Minimum qualification for Constable (WBBSE or equivalent).</li>
        <li><strong>Graduation Degree &amp; Marksheets:</strong> Mandatory for Sub-Inspector (Bachelor's degree from UGC recognized university).</li>
        <li><strong>Bengali Language Proof:</strong> 10th/12th marksheet showing Bengali/Nepali language subject.</li>
        <li><strong>Permanent Domicile Certificate:</strong> Issued by competent authority (SDO / BDO / District Magistrate).</li>
        <li><strong>Valid Photo Identity Card:</strong> Original Aadhaar Card, EPIC Voter ID, PAN Card, or Passport.</li>
      </ul>
    </div>

    <div class="card-box">
      <div class="card-box-title"><span>🏛️</span> Category, Quota &amp; Special Certificates</div>
      <ul class="check-list">
        <li><strong>SC / ST Certificate:</strong> Issued by SDO / DWO (BCW Department, Govt of West Bengal).</li>
        <li><strong>OBC-A / OBC-B Revalidation (NCL):</strong> Digital NCL certificate revalidated/issued after 1st April of current financial year.</li>
        <li><strong>EWS Certificate:</strong> Issued in prescribed format by SDO / DWO valid for current year.</li>
        <li><strong>NVF / HG / Civic Volunteer Tenure Certificate:</strong> Certified 3+ years completed service by SP / DCP / Commandant.</li>
        <li><strong>Ex-Servicemen Discharge Book:</strong> Military discharge certificate and PPO copy.</li>
        <li><strong>Verification Roll (VR Roll):</strong> Duly filled police verification roll with character antecedents.</li>
      </ul>
    </div>
  </div>

  <div class="section-heading" style="margin-top:6px;">2. WBPRB OFFICIAL PHOTO & SIGNATURE UPLOAD SPECIFICATIONS</div>
  <p class="section-paragraph">
    WBPRB portal (<code style="font-size:7.5px; background:#f1f5f9; padding:1px 3px; border-radius:2px;">prb.wb.gov.in</code>) uses automated algorithmic checks. Files violating pixel dimensions or file bounds are rejected outright.
  </p>

  <div class="grid-2">
    <!-- Photo Specs -->
    <div class="card-box" style="border: 1.5px solid #2563eb;">
      <div class="card-box-title" style="color:#1d4ed8;"><span>📸</span> Passport Photograph Requirements</div>
      <div class="spec-grid">
        <div class="spec-item">
          <div class="spec-label">Pixel Size</div>
          <div class="spec-val">138 × 177 px</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Physical Size</div>
          <div class="spec-val">3.5 × 4.5 cm</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">File Size</div>
          <div class="spec-val">10 – 50 KB</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Format</div>
          <div class="spec-val">JPG / JPEG</div>
        </div>
      </div>
      <ul class="check-list" style="margin-top:4px;">
        <li>Clean, crisp <strong>plain white background</strong> only (no textured walls or patterns).</li>
        <li>Face must occupy <strong>70% to 80%</strong> of the frame; both ears and eyes visible.</li>
        <li>No sunglasses, tinted spectacles, caps, hats, or religious coverings concealing face.</li>
        <li>Recent color photograph taken within the last 3 months.</li>
      </ul>
    </div>

    <!-- Signature Specs -->
    <div class="card-box" style="border: 1.5px solid #d97706;">
      <div class="card-box-title" style="color:#b45309;"><span>✍️</span> Candidate Signature Requirements</div>
      <div class="spec-grid">
        <div class="spec-item">
          <div class="spec-label">Pixel Size</div>
          <div class="spec-val">138 × 59 px</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Physical Size</div>
          <div class="spec-val">3.5 × 1.5 cm</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">File Size</div>
          <div class="spec-val">5 – 20 KB</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">Ink &amp; Pen</div>
          <div class="spec-val">Black Ink</div>
        </div>
      </div>
      <ul class="check-list" style="margin-top:4px;">
        <li>Sign on clean unlined plain white paper with a <strong>black ballpoint pen</strong>.</li>
        <li><strong>STRICT SCRUTINY RULE:</strong> Sign in natural <em>cursive running handwriting</em>.</li>
        <li>Signatures rendered in <strong>CAPITAL / BLOCK LETTERS ARE REJECTED</strong> without appeal!</li>
        <li>Crop closely without cutting off top/bottom ascenders or loops.</li>
      </ul>
    </div>
  </div>

  <div class="callout-box callout-info" style="margin-top:6px;">
    <div style="font-size:7.8px; font-weight:800; color:#1e40af; margin-bottom:1.5px;">⚡ INSTANT ONE-CLICK BROWSER RESIZING ON SIGNRESIZE:</div>
    <div style="font-size:7.2px; color:#1e3a8a; line-height:1.35;">
      Format your WB Police credentials in 2 seconds with zero software install:<br>
      • <strong>Photo Resizer:</strong> <span style="font-family:monospace; font-weight:bold;">signresize.in/wb-police-photo-resize/</span> (Locks 138×177 px &amp; 10–50 KB instantly)<br>
      • <strong>Signature Resizer:</strong> <span style="font-family:monospace; font-weight:bold;">signresize.in/wb-police-signature-resize/</span> (Locks 138×59 px &amp; 5–20 KB with background cleanup)
    </div>
  </div>

  <div class="footer">
    <span>West Bengal Police &amp; Kolkata Police Recruitment 2026 | SignResize Handbook</span>
    <span class="footer-right">Page 4 of 4 (DV Checklist &amp; Portal Upload Standards)</span>
  </div>
</div>

</body>
</html>`;

// ==========================================
// 2. BENGALI EDITION HTML (বাংলা সংস্করণ - 4 Full Pages)
// ==========================================
const bengaliHtml = `<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="utf-8">
<title>পশ্চিমবঙ্গ পুলিশ কনস্টেবল ও সাব-ইন্সপেক্টর ২০২৬ মাস্টার হ্যান্ডবুক - SignResize</title>
<style>${commonCss}</style>
</head>
<body>

<!-- PAGE 1: PHYSICAL MEASUREMENT (PMT) & PHYSICAL EFFICIENCY TEST (PET) -->
<div class="page">
  <div class="header">
    <div class="header-title">পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ প্রার্থী নির্দেশিকা ২০২৬</div>
    <div class="header-subtitle">অফিসিয়াল WBPRB মানদণ্ড: কনস্টেবল, লেডি কনস্টেবল, সাব-ইন্সপেক্টর (UB ও AB) | PMT ও PET নিয়মাবলী</div>
  </div>

  <div class="section-heading">১. শারীরিক পরিমাপ পরীক্ষা (PMT) — উচ্চতা, বুকের মাপ ও ওজন মানদণ্ড</div>
  <p class="section-paragraph">
    শারীরিক পরিমাপ পরীক্ষা (PMT) সম্পূর্ণ কোয়ালিফাইং প্রকৃতির। ডিজিটাল ইলেকট্রনিক স্কেলের মাধ্যমে উচ্চতা ও ওজন পরিমাপ করা হয় এবং পুরুষ প্রার্থীদের জন্য বায়োমেট্রিক বুকের মাপ নেওয়া হয়।
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:23%;">পদ ও বিভাগ</th>
        <th style="width:25%;">প্রার্থীর শ্রেণি / উপজাতি</th>
        <th style="width:14%;">ন্যূনতম উচ্চতা</th>
        <th style="width:14%;">ন্যূনতম ওজন</th>
        <th style="width:24%;">বুকের মাপ (সাধারণ / প্রসারণ)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2"><strong>কনস্টেবল (পুরুষ)</strong></td>
        <td>সাধারণ, EWS, OBC-A, OBC-B, SC</td>
        <td><strong>১৬৭ সেমি</strong></td>
        <td><strong>৫৭ কেজি</strong></td>
        <td><strong>৭৮ সেমি</strong> (ন্যূনতম ৫ সেমি ফুলিয়ে ৮৩ সেমি)</td>
      </tr>
      <tr>
        <td>গোর্খা, গাড়োয়ালি, রাজবংশী ও ST</td>
        <td><strong>১৬০ সেমি</strong></td>
        <td><strong>৫৩ কেজি</strong></td>
        <td><strong>৭৬ সেমি</strong> (ন্যূনতম ৫ সেমি ফুলিয়ে ৮১ সেমি)</td>
      </tr>
      <tr>
        <td rowspan="2"><strong>লেডি কনস্টেবল (মহিলা)</strong></td>
        <td>সাধারণ, EWS, OBC-A, OBC-B, SC</td>
        <td><strong>১৬০ সেমি</strong></td>
        <td><strong>৪৯ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
      <tr>
        <td>গোর্খা, গাড়োয়ালি, রাজবংশী ও ST</td>
        <td><strong>১৫২ সেমি</strong></td>
        <td><strong>৪৫ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
      <tr>
        <td rowspan="2"><strong>কনস্টেবল (তৃতীয় লিঙ্গ)</strong></td>
        <td>সাধারণ, EWS, OBC-A, OBC-B, SC</td>
        <td><strong>১৬৩ সেমি</strong></td>
        <td><strong>৫২ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
      <tr>
        <td>গোর্খা, গাড়োয়ালি, রাজবংশী ও ST</td>
        <td><strong>১৫৫ সেমি</strong></td>
        <td><strong>৪৮ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
      <tr>
        <td rowspan="2"><strong>সাব-ইন্সপেক্টর (UB - পুরুষ)</strong></td>
        <td>সাধারণ, EWS, OBC-A, OBC-B, SC</td>
        <td><strong>১৬৭ সেমি</strong></td>
        <td><strong>৫৬ কেজি</strong></td>
        <td><strong>৭৯ সেমি</strong> (ন্যূনতম ৫ সেমি ফুলিয়ে ৮৪ সেমি)</td>
      </tr>
      <tr>
        <td>গোর্খা, গাড়োয়ালি, রাজবংশী ও ST</td>
        <td><strong>১৬০ সেমি</strong></td>
        <td><strong>৫২ কেজি</strong></td>
        <td><strong>৭৪ সেমি</strong> (ন্যূনতম ৫ সেমি ফুলিয়ে ৭৯ সেমি)</td>
      </tr>
      <tr>
        <td rowspan="2"><strong>সাব-ইন্সপেক্টর (AB - পুরুষ)</strong></td>
        <td>সাধারণ, EWS, OBC-A, OBC-B, SC</td>
        <td><strong>১৭৩ সেমি</strong></td>
        <td><strong>৬০ কেজি</strong></td>
        <td><strong>৮১ সেমি</strong> (ন্যূনতম ৫ সেমি ফুলিয়ে ৮৬ সেমি)</td>
      </tr>
      <tr>
        <td>গোর্খা, গাড়োয়ালি, রাজবংশী ও ST</td>
        <td><strong>১৬৩ সেমি</strong></td>
        <td><strong>৫৪ কেজি</strong></td>
        <td><strong>৭৬ সেমি</strong> (ন্যূনতম ৫ সেমি ফুলিয়ে ৮১ সেমি)</td>
      </tr>
      <tr>
        <td rowspan="2"><strong>লেডি সাব-ইন্সপেক্টর (UB)</strong></td>
        <td>সাধারণ, EWS, OBC-A, OBC-B, SC</td>
        <td><strong>১৬০ সেমি</strong></td>
        <td><strong>৪৫ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
      <tr>
        <td>গোর্খা, গাড়োয়ালি, রাজবংশী ও ST</td>
        <td><strong>১৫৫ সেমি</strong></td>
        <td><strong>৪০ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
      <tr>
        <td rowspan="2"><strong>সাব-ইন্সপেক্টর (তৃতীয় লিঙ্গ)</strong></td>
        <td>সাধারণ, EWS, OBC-A, OBC-B, SC</td>
        <td><strong>১৬৩ সেমি</strong></td>
        <td><strong>৫২ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
      <tr>
        <td>গোর্খা, গাড়োয়ালি, রাজবংশী ও ST</td>
        <td><strong>১৫৫ সেমি</strong></td>
        <td><strong>৪৮ কেজি</strong></td>
        <td><span class="badge badge-emerald">প্রযোজ্য নয়</span></td>
      </tr>
    </tbody>
  </table>

  <div class="section-heading">২. শারীরিক সক্ষমতা পরীক্ষা (PET) — দৌড় পরীক্ষার সময়সীমা</div>
  <p class="section-paragraph">
    PMT পরীক্ষায় উত্তীর্ণ প্রার্থীরা শারীরিক সক্ষমতা পরীক্ষা (PET)-তে অংশ নেন। PET সম্পূর্ণ কোয়ালিফাইং প্রকৃতির। প্রার্থীর গোড়ালি বা বুকে সংযুক্ত <strong>রেডিও ফ্রিকোয়েন্সি আইডেন্টিফিকেশন (RFID)</strong> চিপের সাহায্যে সময় স্বয়ংক্রিয়ভাবে রেকর্ড করা হয়।
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:26%;">পদ ও ক্যাডার</th>
        <th style="width:22%;">প্রার্থীর লিঙ্গ / বিভাগ</th>
        <th style="width:18%;">দৌড়ের দূরত্ব</th>
        <th style="width:20%;">নির্ধারিত সময়সীমা</th>
        <th style="width:14%;">মূল্যায়ন</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>WBP ও KP কনস্টেবল</strong></td>
        <td>পুরুষ প্রার্থী</td>
        <td><strong>১৬০০ মিটার</strong></td>
        <td><strong>৬ মিনিট ৩০ সেকেন্ড</strong></td>
        <td><span class="badge badge-blue">কোয়ালিফাইং মাত্র</span></td>
      </tr>
      <tr>
        <td><strong>লেডি কনস্টেবল</strong></td>
        <td>মহিলা প্রার্থী</td>
        <td><strong>৮০০ মিটার</strong></td>
        <td><strong>৪ মিনিট ০০ সেকেন্ড</strong></td>
        <td><span class="badge badge-blue">কোয়ালিফাইং মাত্র</span></td>
      </tr>
      <tr>
        <td><strong>কনস্টেবল (তৃতীয় লিঙ্গ)</strong></td>
        <td>রূপান্তরকামী প্রার্থী</td>
        <td><strong>৮০০ মিটার</strong></td>
        <td><strong>৩ মিনিট ৩০ সেকেন্ড</strong></td>
        <td><span class="badge badge-blue">কোয়ালিফাইং মাত্র</span></td>
      </tr>
      <tr>
        <td><strong>সাব-ইন্সপেক্টর (UB ও AB)</strong></td>
        <td>পুরুষ প্রার্থী</td>
        <td><strong>৮০০ মিটার</strong></td>
        <td><strong>৩ মিনিট ০০ সেকেন্ড</strong></td>
        <td><span class="badge badge-blue">কোয়ালিফাইং মাত্র</span></td>
      </tr>
      <tr>
        <td><strong>লেডি সাব-ইন্সপেক্টর (UB)</strong></td>
        <td>মহিলা প্রার্থী</td>
        <td><strong>৪০০ মিটার</strong></td>
        <td><strong>২ মিনিট ০০ সেকেন্ড</strong></td>
        <td><span class="badge badge-blue">কোয়ালিফাইং মাত্র</span></td>
      </tr>
      <tr>
        <td><strong>সাব-ইন্সপেক্টর (তৃতীয় লিঙ্গ)</strong></td>
        <td>রূপান্তরকামী প্রার্থী</td>
        <td><strong>৪০০ মিটার</strong></td>
        <td><strong>১ মিনিট ৪০ সেকেন্ড</strong></td>
        <td><span class="badge badge-blue">কোয়ালিফাইং মাত্র</span></td>
      </tr>
    </tbody>
  </table>

  <div class="callout-box callout-warning">
    <div style="font-size:7.8px; font-weight:800; color:#92400e; margin-bottom:1.5px;">⚠️ গ্রাউন্ডের গুরুত্বপূর্ণ নিয়মাবলী (WBPRB নির্দেশিকা):</div>
    <div style="font-size:7.2px; color:#78350f; line-height:1.35;">
      • <strong>একক সুযোগ নিয়ম:</strong> দৌড়ের জন্য কেবল একটি সুযোগ দেওয়া হবে। কোনো অবস্থাতেই দ্বিতীয়বার দৌড়ানোর অনুমতি মিলবে না।<br>
      • <strong>স্বয়ংক্রিয় RFID প্রযুক্তি:</strong> স্টার্ট এবং ফিনিশ লাইনে রাখা অপটিক্যাল ম্যাট স্বয়ংক্রিয়ভাবে সেকেন্ডের ভগ্নাংশ পর্যন্ত রেকর্ড করে। ম্যানুয়াল স্টপওয়াচ সম্পূর্ণ বাতিল করা হয়েছে।<br>
      • <strong>বুকের মাপ প্রসারণের বাধ্যবাধকতা:</strong> সাধারণ পরিমাপের চেয়ে ন্যূনতম ৫ সেমি প্রসারণ বাধ্যতামূলক। ৫ সেমি না ফোলালে সরাসরি বাতিল বলে গণ্য হবে।
    </div>
  </div>

  <div class="footer">
    <span>পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ রিক্রুটমেন্ট ২০২৬ | SignResize হ্যান্ডবুক</span>
    <span class="footer-right">পৃষ্ঠা ১ / ৪ (শারীরিক মানদণ্ড ও দৌড় পরীক্ষা)</span>
  </div>
</div>

<!-- PAGE 2: SPECIAL CADRES, QUOTAS, KP VS WBP & AGE RELAXATIONS -->
<div class="page">
  <div class="header">
    <div class="header-title">পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ প্রার্থী নির্দেশিকা ২০২৬</div>
    <div class="header-subtitle">ক্যাডার পার্থক্য, NVF / হোমগার্ড / সিভিক ভলান্টিয়ার কোটা, বয়সের ছাড় ও যোগ্যতা</div>
  </div>

  <div class="section-heading">১. কলকাতা পুলিশ (KP) বনাম পশ্চিমবঙ্গ পুলিশ (WBP) তুলনামূলক বিবরণ</div>
  <p class="section-paragraph">
    দুটি বাহিনীই পশ্চিমবঙ্গ পুলিশ রিক্রুটমেন্ট বোর্ড (WBPRB) দ্বারা যৌথভাবে নিয়োগপ্রাপ্ত হয়। বদলি, কাজের এলাকা এবং বেতন পরিকাঠামোর মূল পার্থক্য নিচে দেওয়া হলো:
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:20%;">বিষয়</th>
        <th style="width:40%;">পশ্চিমবঙ্গ পুলিশ (WBP)</th>
        <th style="width:40%;">কলকাতা পুলিশ (KP)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>আইন ও অধিনিয়ম</strong></td>
        <td>পুলিশ আইন, ১৮৬১ (Bengal Police Act)</td>
        <td>কলকাতা পুলিশ আইন, ১৮৬৬ ও শহরতলি পুলিশ আইন, ১৮৬৬</td>
      </tr>
      <tr>
        <td><strong>কাজের ভৌগোলিক এলাকা</strong></td>
        <td>পশ্চিমবঙ্গের সমস্ত ২৩টি জেলা (গ্রামীণ, হাইওয়ে ও কমিশনারেট)</td>
        <td>কলকাতা মেট্রোপলিটান অঞ্চল ও নির্দিষ্ট বন্দর এলাকা</td>
      </tr>
      <tr>
        <td><strong>পোশাকের ধরণ (Uniform)</strong></td>
        <td>খাকি পোশাক এবং কাঁধে WBP ধাতব ব্যাজ</td>
        <td>ঐতিহ্যবাহী সাদা পোশাক (কমব্যাট ইউনিটের জন্য খাকি)</td>
      </tr>
      <tr>
        <td><strong>নিয়োগকারী বোর্ড</strong></td>
        <td>WBPRB (prb.wb.gov.in)</td>
        <td>WBPRB (prb.wb.gov.in) — যৌথ নিয়োগ পরীক্ষা</td>
      </tr>
      <tr>
        <td><strong>বেতন স্কেল (ROPA ২০১৯)</strong></td>
        <td>লেভেল ৬: ₹২২,৭০০ – ₹৫৮,৫০০ (কনস্টেবল) | লেভেল ১০: ₹৩২,১০০ – ₹৮২,৯০০ (SI)</td>
        <td>লেভেল ৬: ₹২২,৭০০ – ₹৫৮,৫০০ (কনস্টেবল) | লেভেল ১০: ₹৩২,১০০ – ₹৮২,৯০০ (SI)</td>
      </tr>
      <tr>
        <td><strong>ভাতা ও সুযোগ-সুবিধা</strong></td>
        <td>মূল বেতন + মহার্ঘ ভাতা (DA) + বাড়িভাড়া (১২%) + চিকিৎসা (₹৫০০) + রেশন</td>
        <td>মূল বেতন + মহার্ঘ ভাতা (DA) + বাড়িভাড়া (১২% শহর) + চিকিৎসা (₹৫০০) + রেশন</td>
      </tr>
    </tbody>
  </table>

  <div class="section-heading">২. NVF, হোমগার্ড ও সিভিক ভলান্টিয়ার (CV) কোটা ও বয়সের ছাড়</div>
  <p class="section-paragraph">
    পশ্চিমবঙ্গ সরকার কর্মরত সহায়ক পুলিশ কর্মীদের জন্য বিশেষ অনুভূমিক সংরক্ষণ ও বয়সের ছাড় প্রদান করে থাকে:
  </p>

  <div class="grid-3">
    <div class="card-box">
      <div class="card-box-title"><span>🛡️</span> সিভিক ভলান্টিয়ার (CV)</div>
      <ul class="check-list">
        <li><strong>চাকরির মেয়াদ:</strong> ০১.০১.২০২৬ অনুযায়ী ন্যূনতম ৩ বছর নিরবচ্ছিন্ন কর্মরত থাকতে হবে।</li>
        <li><strong>বয়সের ছাড়:</strong> সর্বোচ্চ বয়সসীমা <strong>৩৫ বছর</strong> পর্যন্ত শিথিলযোগ্য (SC/ST ৪০, OBC ৩৮)।</li>
        <li><strong>সংরক্ষণ কোটা:</strong> কনস্টেবল পদে ১০% অনুভূমিক সংরক্ষণ।</li>
        <li><strong>বাধ্যতামূলক প্রমাণ:</strong> সংশ্লিষ্ট SP / DCP দ্বারা স্বাক্ষরিত আসল শংসাপত্র।</li>
      </ul>
    </div>
    <div class="card-box">
      <div class="card-box-title"><span>👮‍♂️</span> হোমগার্ড (HG)</div>
      <ul class="check-list">
        <li><strong>চাকরির মেয়াদ:</strong> WBP অথবা KP-তে ন্যূনতম ৩ বছরের সন্তোষজনক পরিষেবা।</li>
        <li><strong>বয়সের ছাড়:</strong> সাধারণ নিয়মে সর্বোচ্চ বয়সসীমা <strong>৩৫ বছর</strong> পর্যন্ত ছাড়।</li>
        <li><strong>সংরক্ষণ কোটা:</strong> কনস্টেবল ক্যাডারে ১০% অনুভূমিক পদ সংরক্ষিত।</li>
        <li><strong>বাধ্যতামূলক প্রমাণ:</strong> কোনো বিভাগীয় তদন্ত বা অভিযোগ না থাকার শংসাপত্র।</li>
      </ul>
    </div>
    <div class="card-box">
      <div class="card-box-title"><span>🎖️</span> জাতীয় ভলান্টিয়ার ফোর্স (NVF)</div>
      <ul class="check-list">
        <li><strong>চাকরির মেয়াদ:</strong> রাজ্য NVF নির্দেশিকা অনুযায়ী ন্যূনতম ৩ বছরের সক্রিয় পরিষেবা।</li>
        <li><strong>বয়সের ছাড়:</strong> সরকারি গেজেট মোতাবেক সর্বোচ্চ বয়স <strong>৩৫ বছর</strong> পর্যন্ত ছাড়।</li>
        <li><strong>সংরক্ষণ কোটা:</strong> নির্দিষ্ট রোস্টার অনুযায়ী সংরক্ষিত আসন বণ্টন।</li>
        <li><strong>বাধ্যতামূলক প্রমাণ:</strong> NVF ডিরেক্টরেট প্রদত্ত সক্রিয় এনরোলমেন্ট বই।</li>
      </ul>
    </div>
  </div>

  <div class="section-heading" style="margin-top:6px;">৩. বয়সের মানদণ্ড, জাতিগত ছাড় ও বাংলা ভাষার যোগ্যতা</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width:24%;">প্রার্থীর শ্রেণি</th>
        <th style="width:20%;">কনস্টেবল বয়সসীমা</th>
        <th style="width:20%;">সাব-ইন্সপেক্টর বয়সসীমা</th>
        <th style="width:36%;">বাধ্যতামূলক শর্ত ও প্রয়োজনীয় নথি</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>সাধারণ (UR) ও EWS</strong></td>
        <td>১৮ থেকে ৩০ বছর</td>
        <td>২০ থেকে ৩০ বছর</td>
        <td>বিজ্ঞপ্তির বছরের ১লা জানুয়ারি অনুযায়ী বয়স গণনা করা হবে।</td>
      </tr>
      <tr>
        <td><strong>তফসিলি জাতি (SC) ও উপজাতি (ST)</strong></td>
        <td>১৮ থেকে ৩৫ বছর (+৫ বছর)</td>
        <td>২০ থেকে ৩৫ বছর (+৫ বছর)</td>
        <td>পশ্চিমবঙ্গের SDO / DWO দ্বারা প্রদত্ত বৈধ কাস্ট সার্টিফিকেট।</td>
      </tr>
      <tr>
        <td><strong>ওবিসি-এ (OBC-A) ও ওবিসি-বি (OBC-B)</strong></td>
        <td>১৮ থেকে ৩৩ বছর (+৩ বছর)</td>
        <td>২০ থেকে ৩৩ বছর (+৩ বছর)</td>
        <td>চলতি আর্থিক বছরের ১লা এপ্রিলের পর পুনর্নবীকরণকৃত NCL সার্টিফিকেট।</td>
      </tr>
      <tr>
        <td><strong>প্রাক্তন সেনাকর্মী (ESM)</strong></td>
        <td>সামরিক চাকরি + ৩ বছর</td>
        <td>সামরিক চাকরি + ৩ বছর</td>
        <td>আর্মি ডিসচার্জ বুক ও পিঁপিও (PPO) বই দাখিল করতে হবে।</td>
      </tr>
      <tr>
        <td><strong>অন্য রাজ্যের প্রার্থীরা</strong></td>
        <td>১৮ থেকে ৩০ বছর (সাধারণ)</td>
        <td>২০ থেকে ৩০ বছর (সাধারণ)</td>
        <td>কোনো জাতিগত সংরক্ষণ পাবেন না; সাধারণ প্রার্থী হিসেবে গণ্য হবেন।</td>
      </tr>
    </tbody>
  </table>

  <div class="callout-box callout-info">
    <div style="font-size:7.8px; font-weight:800; color:#1e40af; margin-bottom:1.5px;">ℹ️ বাংলা ভাষার দক্ষতা সংক্রান্ত সরকারি আইন (Official Language Act, 1961):</div>
    <div style="font-size:7.2px; color:#1e3a8a; line-height:1.35;">
      প্রত্যেক প্রার্থীকে <strong>বাংলা ভাষায় কথা বলতে, পড়তে ও লিখতে সক্ষম</strong> হতে হবে। ইন্টারভিউ / পার্সোনালিটি টেস্টের সময় সরাসরি রিডিং ও ডিকটেশনের মাধ্যমে এটি যাচাই করা হয়। <em>ছাড়:</em> দার্জিলিং ও কালিম্পং জেলার পাহাড়ি মহকুমার স্থায়ী বাসিন্দাদের ক্ষেত্রে নেপালি ভাষার বিধান প্রযোজ্য হবে।
    </div>
  </div>

  <div class="footer">
    <span>পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ রিক্রুটমেন্ট ২০২৬ | SignResize হ্যান্ডবুক</span>
    <span class="footer-right">পৃষ্ঠা ২ / ৪ (ক্যাডার, কোটা ও বয়সের মানদণ্ড)</span>
  </div>
</div>

<!-- PAGE 3: WRITTEN EXAM PATTERN, SYLLABUS & MERIT FORMULA -->
<div class="page">
  <div class="header">
    <div class="header-title">পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ প্রার্থী নির্দেশিকা ২০২৬</div>
    <div class="header-subtitle">লিখিত পরীক্ষা পদ্ধতি: কনস্টেবল একক পরীক্ষা (৮৫ নম্বর) বনাম SI মেইনস ও মেধা তালিকা নিয়মাবলী</div>
  </div>

  <div class="section-heading">১. WBP কনস্টেবল লিখিত পরীক্ষা পদ্ধতি (সংশোধিত একক পরীক্ষা মডেল)</div>
  <p class="section-paragraph">
    WBPRB-এর বর্তমান সংশোধিত নিয়ম অনুযায়ী কনস্টেবল পদে একটিমাত্র <strong>লিখিত পরীক্ষা (৮৫ নম্বর)</strong> নেওয়া হয়। এই পরীক্ষায় প্রাপ্ত নম্বর ইন্টারভিউয়ের (১৫ নম্বর) সাথে যুক্ত করে মোট ১০০ নম্বরের চূড়ান্ত মেধা তালিকা তৈরি করা হয়।
  </p>

  <table class="data-table">
    <thead>
      <tr>
        <th style="width:30%;">পরীক্ষার বিষয়</th>
        <th style="width:16%;">মোট প্রশ্ন</th>
        <th style="width:16%;">মোট নম্বর</th>
        <th style="width:18%;">সময় ও পরীক্ষার মাধ্যম</th>
        <th style="width:20%;">নম্বর প্রদান পদ্ধতি</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>সাধারণ জ্ঞান ও জিকে (General Awareness)</strong></td>
        <td>২৫টি প্রশ্ন</td>
        <td>২৫ নম্বর</td>
        <td rowspan="4"><strong>৬০ মিনিট (১ ঘণ্টা)</strong><br><span class="badge badge-purple">OMR অফলাইন MCQ</span></td>
        <td rowspan="4">• প্রতিটি সঠিক উত্তরে <strong>+১.০ নম্বর</strong><br>• প্রতিটি ভুল উত্তরে <strong>-০.২৫ নম্বর</strong> (১/৪র্থ) নেগেটিভ<br>• মাধ্যম: বাংলা ও নেপালি</td>
      </tr>
      <tr>
        <td><strong>প্রাথমিক গণিত (মাধ্যমিক মান)</strong></td>
        <td>২৫টি প্রশ্ন</td>
        <td>২৫ নম্বর</td>
      </tr>
      <tr>
        <td><strong>রিজনিং ও লজিক্যাল অ্যানালাইসিস</strong></td>
        <td>২৫টি প্রশ্ন</td>
        <td>২৫ নম্বর</td>
      </tr>
      <tr>
        <td><strong>ইংরেজি ভাষা (English)</strong></td>
        <td>১০টি প্রশ্ন</td>
        <td>১০ নম্বর</td>
      </tr>
      <tr style="background:#f1f5f9; font-weight:bold;">
        <td>মোট সর্বমোট</td>
        <td>৮৫টি প্রশ্ন</td>
        <td>৮৫ নম্বর</td>
        <td>১ ঘণ্টা</td>
        <td>নেগেটিভ মার্কিং: ১/৪র্থ</td>
      </tr>
    </tbody>
  </table>

  <div class="section-heading">২. WBP সাব-ইন্সপেক্টর (SI) পরীক্ষা পদ্ধতি (প্রিলিমিনারি ও মেইনস)</div>
  <p class="section-paragraph">
    সাব-ইন্সপেক্টর নিয়োগে দুই স্তরের পরীক্ষা অনুষ্ঠিত হয়: প্রিলিমিনারি স্ক্রিনিং পরীক্ষা এবং বর্ণনামূলক কম্বাইন্ড কম্পিটিটিভ মেইনস পরীক্ষা।
  </p>

  <div class="grid-2">
    <div class="card-box">
      <div class="card-box-title"><span>📝</span> প্রথম ধাপ: প্রিলিমিনারি পরীক্ষা (স্ক্রিনিং)</div>
      <p style="font-size:7.2px; color:#475569; margin-bottom:3px;">
        ১০০টি প্রশ্ন | ২০০ নম্বর | ৯০ মিনিট | ০.৫০ নেগেটিভ মার্কিং। কেবল কোয়ালিফাইং।
      </p>
      <table class="data-table" style="font-size:7px; margin-bottom:0;">
        <thead>
          <tr><th>বিষয়</th><th>প্রশ্ন</th><th>নম্বর</th></tr>
        </thead>
        <tbody>
          <tr><td>সাধারণ অধ্যয়ন (GS)</td><td>৫০</td><td>১০০</td></tr>
          <tr><td>লজিক্যাল ও অ্যানালিটিক্যাল রিজনিং</td><td>২৫</td><td>৫০</td></tr>
          <tr><td>পাটিগণিত (Arithmetic)</td><td>২৫</td><td>৫০</td></tr>
          <tr style="font-weight:bold;"><td>মোট প্রিলিমিনারি</td><td>১০০</td><td>২০০</td></tr>
        </tbody>
      </table>
    </div>

    <div class="card-box">
      <div class="card-box-title"><span>✍️</span> দ্বিতীয় ধাপ: ফাইনাল মেইনস পরীক্ষা (বর্ণনামূলক)</div>
      <p style="font-size:7.2px; color:#475569; margin-bottom:3px;">
        ৩টি প্রচলিত বর্ণনামূলক পেপার | মোট ২০০ নম্বর | চূড়ান্ত মেধার ভিত্তি।
      </p>
      <table class="data-table" style="font-size:7px; margin-bottom:0;">
        <thead>
          <tr><th>পেপার ও বিষয়বস্তু</th><th>সময়</th><th>নম্বর</th></tr>
        </thead>
        <tbody>
          <tr><td>পেপার ১: GS (৫০), রিজনিং (২৫), গণিত (২৫)</td><td>২ ঘণ্টা</td><td>১০০</td></tr>
          <tr><td>পেপার ২: ইংরেজি (প্রতিবেদন, অনুবাদ, সারসংক্ষেপ)</td><td>১ ঘণ্টা</td><td>৫০</td></tr>
          <tr><td>পেপার ৩: বাংলা / হিন্দি / উর্দু / নেপালি</td><td>১ ঘণ্টা</td><td>৫০</td></tr>
          <tr style="font-weight:bold;"><td>মোট মেইনস নম্বর</td><td>৪ ঘণ্টা</td><td>২০০</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="section-heading" style="margin-top:6px;">৩. ইন্টারভিউ, টাই-ব্রেকিং নিয়ম ও চূড়ান্ত মেধা তালিকা সূত্র</div>
  <table class="data-table">
    <thead>
      <tr>
        <th style="width:22%;">পদবী</th>
        <th style="width:30%;">মেধার উপাদান ও নম্বর</th>
        <th style="width:18%;">মোট মেধা স্কেল</th>
        <th style="width:30%;">ইন্টারভিউয়ের ন্যূনতম নিয়ম</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>কনস্টেবল ও লেডি কনস্টেবল</strong></td>
        <td>লিখিত পরীক্ষা (৮৫) + ইন্টারভিউ (১৫)</td>
        <td><strong>১০০ নম্বর</strong></td>
        <td>ইন্টারভিউতে WBPRB কর্তৃক নির্ধারিত কাটঅফ নম্বর পেতে হবে।</td>
      </tr>
      <tr>
        <td><strong>সাব-ইন্সপেক্টর (UB ও AB)</strong></td>
        <td>ফাইনাল মেইনস (২০০) + পার্সোনালিটি টেস্ট (৩০)</td>
        <td><strong>২৩০ নম্বর</strong></td>
        <td>পার্সোনালিটি টেস্টে ন্যূনতম <strong>৮ নম্বর</strong> (৩০-এর মধ্যে) পাওয়া বাধ্যতামূলক।</td>
      </tr>
    </tbody>
  </table>

  <div class="callout-box callout-success">
    <div style="font-size:7.8px; font-weight:800; color:#065f46; margin-bottom:1.5px;">🎯 মেধা তালিকায় সমান নম্বর পেলে টাই-ব্রেকিং নিয়ম (WBPRB নীতি):</div>
    <div style="font-size:7.2px; color:#047857; line-height:1.35;">
      দুই বা ততোধিক প্রার্থী মোট সমান নম্বর অর্জন করলে:<br>
      ১. <strong>লিখিত পরীক্ষায় বেশি নম্বর:</strong> কনস্টেবল লিখিত পরীক্ষা অথবা SI মেইনস পরীক্ষায় যিনি বেশি পাবেন, তিনি অগ্রাধিকার পাবেন।<br>
      ২. <strong>বয়সের জ্যেষ্ঠতা:</strong> লিখিত নম্বরও সমান হলে বয়সে বড় প্রার্থীকে মেধা তালিকায় উপরে রাখা হবে।<br>
      ৩. <strong>নামের বর্ণানুক্রম:</strong> বয়সও একই হলে মাধ্যমিক অ্যাডমিট কার্ডে নামের ইংরেজি বর্ণানুক্রমিক ক্রমানুসারে তালিকা তৈরি হবে।
    </div>
  </div>

  <div class="footer">
    <span>পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ রিক্রুটমেন্ট ২০২৬ | SignResize হ্যান্ডবুক</span>
    <span class="footer-right">পৃষ্ঠা ৩ / ৪ (পরীক্ষা পদ্ধতি, সিলেবাস ও মেধা সূত্র)</span>
  </div>
</div>

<!-- PAGE 4: DOCUMENT VERIFICATION (DV) & WBPRB PHOTO/SIGN RULES -->
<div class="page">
  <div class="header">
    <div class="header-title">পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ প্রার্থী নির্দেশিকা ২০২৬</div>
    <div class="header-subtitle">১২-দফা ডকুমেন্ট ভেরিফিকেশন (DV) চেকলিস্ট ও WBPRB ফটো/স্বাক্ষর আপলোড নির্দেশিকা</div>
  </div>

  <div class="section-heading">১. ১২-দফা বাধ্যতামূলক ডকুমেন্ট ভেরিফিকেশন (DV) চেকলিস্ট</div>
  <p class="section-paragraph">
    ইন্টারভিউ এবং পার্সোনালিটি টেস্টের সময় আসল নথিপত্রের সাথে এক সেট স্ব-প্রত্যয়িত (Self-Attested) জেরক্স কপি জমা দিতে হবে। কোনো তথ্যে গরমিল থাকলে সরাসরি প্রার্থিপদ বাতিল হবে।
  </p>

  <div class="grid-2">
    <div class="card-box">
      <div class="card-box-title"><span>📋</span> পরিচয় ও শিক্ষাগত যোগ্যতার নথি</div>
      <ul class="check-list">
        <li><strong>মাধ্যমিক অ্যাডমিট কার্ড / সার্টিফিকেট:</strong> জন্মতারিখ (DOB) এবং নামের বানানের একমাত্র সরকারি প্রমাণ।</li>
        <li><strong>মাধ্যমিক মার্কশিট ও পাসের শংসাপত্র:</strong> কনস্টেবল পদের জন্য ন্যূনতম শিক্ষাগত যোগ্যতা।</li>
        <li><strong>স্নাতক ডিগ্রি ও মার্কশিট:</strong> সাব-ইন্সপেক্টর (SI) পদের জন্য ইউজিসি অনুমোদিত বিশ্ববিদ্যালয় থেকে ডিগ্রি।</li>
        <li><strong>বাংলা ভাষার প্রমাণপত্র:</strong> দশম/দ্বাদশ শ্রেণীতে বাংলা বা নেপালি বিষয় হিসেবে পড়ার মার্কশিট।</li>
        <li><strong>স্থায়ী বাসস্থানের শংসাপত্র (Domicile):</strong> সংশ্লিষ্ট SDO / BDO / জেলাশাসক কর্তৃক প্রদত্ত আবাসিক প্রমাণ।</li>
        <li><strong>বৈধ সচিত্র পরিচয়পত্র:</strong> আসল আধার কার্ড, ভোটার কার্ড, প্যান কার্ড অথবা পাসপোর্ট।</li>
      </ul>
    </div>

    <div class="card-box">
      <div class="card-box-title"><span>🏛️</span> সংরক্ষণ, কোটা ও বিশেষ শংসাপত্র</div>
      <ul class="check-list">
        <li><strong>SC / ST কাস্ট সার্টিফিকেট:</strong> পশ্চিমবঙ্গের মহকুমা শাসক (SDO) বা জেলা অনগ্রসর কল্যাণ আধিকারিক (DWO) প্রদত্ত।</li>
        <li><strong>OBC-A / OBC-B রিভ্যালিডেশন (NCL):</strong> চলতি আর্থিক বছরের ১লা এপ্রিলের পর নবীকরণকৃত ডিজিটাল NCL সার্টিফিকেট।</li>
        <li><strong>EWS শংসাপত্র:</strong> নির্দিষ্ট সরকারি ফর্মে SDO বা উপযুক্ত কর্তৃপক্ষ কর্তৃক চলতি বছরে প্রদত্ত।</li>
        <li><strong>NVF / হোমগার্ড / CV চাকরির শংসাপত্র:</strong> SP / DCP কর্তৃক প্রত্যয়িত ন্যূনতম ৩ বছরের নিরবচ্ছিন্ন সেবার প্রমাণপত্র।</li>
        <li><strong>প্রাক্তন সেনাকর্মী ডিসচার্জ সার্টিফিকেট:</strong> সেনাবাহিনীর ডিসচার্জ বুক এবং পেনশন পেমেন্ট অর্ডার (PPO)।</li>
        <li><strong>ভেরিফিকেশন রোল (VR Roll):</strong> চরিত্র ও পূর্ববৃত্তান্তের জন্য যথাযথভাবে পূরণকৃত সরকারি ফর্ম।</li>
      </ul>
    </div>
  </div>

  <div class="section-heading" style="margin-top:6px;">২. WBPRB পোর্টাল ফটো ও স্বাক্ষর আপলোডের সঠিক নিয়মাবলী</div>
  <p class="section-paragraph">
    WBPRB-এর পোর্টাল (<code style="font-size:7.5px; background:#f1f5f9; padding:1px 3px; border-radius:2px;">prb.wb.gov.in</code>) স্বয়ংক্রিয় অ্যালগরিদমের মাধ্যমে আপলোড স্ক্যান করে। নির্ধারিত পিক্সেল বা ফাইলের আকারের বাইরে হলে আবেদন সরাসরি বাতিল হয়।
  </p>

  <div class="grid-2">
    <!-- Photo Specs -->
    <div class="card-box" style="border: 1.5px solid #2563eb;">
      <div class="card-box-title" style="color:#1d4ed8;"><span>📸</span> পাসপোর্ট ছবির অফিসিয়াল নিয়মাবলী</div>
      <div class="spec-grid">
        <div class="spec-item">
          <div class="spec-label">পিক্সেল সাইজ</div>
          <div class="spec-val">138 × 177 px</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">বাস্তব মাপ</div>
          <div class="spec-val">3.5 × 4.5 cm</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">ফাইলের আকার</div>
          <div class="spec-val">10 – 50 KB</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">ফরম্যাট</div>
          <div class="spec-val">JPG / JPEG</div>
        </div>
      </div>
      <ul class="check-list" style="margin-top:4px;">
        <li>সম্পূর্ণ <strong>পরিষ্কার সাদা ব্যাকগ্রাউন্ড</strong> হতে হবে (কোনো রঙিন বা দেয়ালের ছায়া চলবে না)।</li>
        <li>মুখমণ্ডল ফ্রেমের <strong>৭০% থেকে ৮০%</strong> অংশ জুড়ে থাকতে হবে; দুটি কান স্পষ্টভাবে দেখা যেতে হবে।</li>
        <li>কোনো সানগ্লাস, টুপি, রঙিন চশমা বা মুখ ঢাকা থাকা ছবি গ্রহণযোগ্য নয়।</li>
        <li>সাম্প্রতিক ৩ মাসের মধ্যে তোলা রঙিন পাসপোর্ট ছবি হতে হবে।</li>
      </ul>
    </div>

    <!-- Signature Specs -->
    <div class="card-box" style="border: 1.5px solid #d97706;">
      <div class="card-box-title" style="color:#b45309;"><span>✍️</span> প্রার্থীর স্বাক্ষরের অফিসিয়াল নিয়মাবলী</div>
      <div class="spec-grid">
        <div class="spec-item">
          <div class="spec-label">পিক্সেল সাইজ</div>
          <div class="spec-val">138 × 59 px</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">বাস্তব মাপ</div>
          <div class="spec-val">3.5 × 1.5 cm</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">ফাইলের আকার</div>
          <div class="spec-val">5 – 20 KB</div>
        </div>
        <div class="spec-item">
          <div class="spec-label">কালি ও কলম</div>
          <div class="spec-val">কালো বলপেন</div>
        </div>
      </div>
      <ul class="check-list" style="margin-top:4px;">
        <li>দাগহীন সাদা কাগজের ওপর <strong>কালো বলপেন (Black Ballpoint Pen)</strong> দিয়ে স্বাক্ষর করতে হবে।</li>
        <li><strong>কড়া সতর্কবার্তা:</strong> স্বাভাবিক <em>প্রবাহিত হাতে (Running Cursive)</em> স্বাক্ষর করতে হবে।</li>
        <li><strong>বড় হাতের অক্ষরে (CAPITAL LETTERS) স্বাক্ষর করলে আবেদন তৎক্ষণাৎ বাতিল হবে!</strong></li>
        <li>স্বাক্ষরের কোনো অংশ বা অক্ষরের প্রান্ত যেন কেটে না যায় সেদিকে খেয়াল রাখুন।</li>
      </ul>
    </div>
  </div>

  <div class="callout-box callout-info" style="margin-top:6px;">
    <div style="font-size:7.8px; font-weight:800; color:#1e40af; margin-bottom:1.5px;">⚡ SIGNRESIZE-এ মাত্র ২ সেকেন্ডে নির্ভুল সাইজ করুন:</div>
    <div style="font-size:7.2px; color:#1e3a8a; line-height:1.35;">
      কোনো সফটওয়্যার ইনস্টল ছাড়াই আপনার ব্রাউজারে বিনামূল্যে ফরম্যাট করুন:<br>
      • <strong>ছবি রিসাইজার:</strong> <span style="font-family:monospace; font-weight:bold;">signresize.in/wb-police-photo-resize/</span> (স্বয়ংক্রিয় ১৩৮×১৭৭ px ও ১০–৫০ KB লক)<br>
      • <strong>স্বাক্ষর রিসাইজার:</strong> <span style="font-family:monospace; font-weight:bold;">signresize.in/wb-police-signature-resize/</span> (স্বয়ংক্রিয় ১৩৮×৫৯ px ও ৫–২০ KB লক ব্যাকগ্রাউন্ড পরিচ্ছন্নতাসহ)
    </div>
  </div>

  <div class="footer">
    <span>পশ্চিমবঙ্গ পুলিশ ও কলকাতা পুলিশ রিক্রুটমেন্ট ২০২৬ | SignResize হ্যান্ডবুক</span>
    <span class="footer-right">পৃষ্ঠা ৪ / ৪ (DV চেকলিস্ট ও পোর্টাল আপলোড নিয়ম)</span>
  </div>
</div>

</body>
</html>`;

// Ensure output directories exist
const outDir = path.resolve('public/downloads');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
const scratchDir = path.resolve('scratch');
if (!fs.existsSync(scratchDir)) {
  fs.mkdirSync(scratchDir, { recursive: true });
}

const browserPath = getBrowserExecutable();
if (!browserPath) {
  console.error('Error: Headless Chromium browser (Edge or Chrome) not found for PDF compilation.');
  process.exit(1);
}

console.log(`Using Browser executable: ${browserPath}`);

// 1. Generate English Edition PDF
const enHtmlPath = path.join(scratchDir, 'temp-wb-handbook-en.html');
const enPdfPath = path.join(outDir, 'wb-police-constable-si-2026-physical-chart-and-syllabus-en.pdf');
console.log('Compiling English Edition PDF...');
renderHtmlToPdf(browserPath, englishHtml, enHtmlPath, enPdfPath);
console.log(`✓ English Edition generated: ${enPdfPath} (${fs.statSync(enPdfPath).size} bytes)`);

// Also copy English to canonical default filename
const canonicalPdfPath = path.join(outDir, 'wb-police-constable-si-2026-physical-chart-and-syllabus.pdf');
fs.copyFileSync(enPdfPath, canonicalPdfPath);
console.log(`✓ Canonical PDF synced: ${canonicalPdfPath} (${fs.statSync(canonicalPdfPath).size} bytes)`);

// 2. Generate Bengali Edition PDF (বাংলা সংস্করণ)
const bnHtmlPath = path.join(scratchDir, 'temp-wb-handbook-bn.html');
const bnPdfPath = path.join(outDir, 'wb-police-constable-si-2026-physical-chart-and-syllabus-bn.pdf');
console.log('Compiling Bengali Edition PDF (বাংলা সংস্করণ)...');
renderHtmlToPdf(browserPath, bengaliHtml, bnHtmlPath, bnPdfPath);
console.log(`✓ Bengali Edition generated: ${bnPdfPath} (${fs.statSync(bnPdfPath).size} bytes)`);

// Sync to dist/downloads if dist exists
const distDir = path.resolve('dist/downloads');
if (fs.existsSync(distDir)) {
  fs.copyFileSync(enPdfPath, path.join(distDir, 'wb-police-constable-si-2026-physical-chart-and-syllabus-en.pdf'));
  fs.copyFileSync(canonicalPdfPath, path.join(distDir, 'wb-police-constable-si-2026-physical-chart-and-syllabus.pdf'));
  fs.copyFileSync(bnPdfPath, path.join(distDir, 'wb-police-constable-si-2026-physical-chart-and-syllabus-bn.pdf'));
  console.log(`✓ Synchronized all PDFs to dist/downloads/`);
}

