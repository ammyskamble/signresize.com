// scripts/generate-maharashtra-police-pdf.mjs
// Generates dual official-grade, vector-crisp 4-Page Master Handbooks:
// 1. English Edition: maharashtra-police-bharti-2026-physical-chart-and-syllabus-en.pdf
// 2. Marathi Edition: maharashtra-police-bharti-2026-physical-chart-and-syllabus-mr.pdf
// 3. Default Canonical: maharashtra-police-bharti-2026-physical-chart-and-syllabus.pdf

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

// Find Edge or Chrome executable for perfect UTF-8 Devanagari text shaping and vector PDF output
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
    font-family: -apple-system, BlinkMacSystemFont, "Nirmala UI", "Segoe UI", Arial, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    width: 210mm;
    height: 297mm;
    padding: 11mm 13mm 13mm 13mm;
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
    padding: 6.5px 12px;
    margin-bottom: 7px;
  }
  .header-title {
    color: #ffffff;
    font-size: 13px;
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
    bottom: 7.5mm;
    left: 13mm;
    right: 13mm;
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
    font-size: 10.5px;
    font-weight: 800;
    color: #0f172a;
    margin: 6px 0 3px 0;
    border-left: 3.5px solid #1d4ed8;
    padding-left: 6px;
    line-height: 1.2;
  }
  .section-subheading {
    font-size: 9px;
    font-weight: 700;
    color: #1e3a8a;
    margin: 4px 0 2px 0;
    line-height: 1.2;
  }
  .section-paragraph {
    font-size: 8px;
    color: #334155;
    line-height: 1.35;
    margin-bottom: 4px;
  }
  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.8px;
    margin-bottom: 4.5px;
    border: 1px solid #cbd5e1;
    border-radius: 3px;
    overflow: hidden;
  }
  .data-table th {
    background: #f1f5f9;
    color: #0f172a;
    font-weight: 700;
    text-align: left;
    padding: 3.5px 5.5px;
    border-bottom: 1.5px solid #cbd5e1;
    font-size: 7.8px;
    line-height: 1.2;
  }
  .data-table td {
    padding: 3px 5.5px;
    border-bottom: 1px solid #e2e8f0;
    color: #1e293b;
    line-height: 1.25;
  }
  .data-table tr:nth-child(even) td {
    background: #f8fafc;
  }
  .highlight-green {
    color: #047857;
    font-weight: 700;
  }
  .highlight-amber {
    color: #b45309;
    font-weight: 700;
  }
  .highlight-red {
    color: #b91c1c;
    font-weight: 700;
  }
  .notice-box {
    background: #fffbeb;
    border: 1px solid #f59e0b;
    border-left: 3.5px solid #d97706;
    border-radius: 3px;
    padding: 4px 6.5px;
    margin: 3.5px 0 4.5px 0;
  }
  .notice-title {
    color: #92400e;
    font-weight: 800;
    font-size: 7.8px;
    text-transform: uppercase;
    margin-bottom: 1.5px;
    line-height: 1.2;
  }
  .notice-text {
    color: #78350f;
    font-size: 7.3px;
    line-height: 1.3;
  }
  .bullet-list {
    margin: 2.5px 0 4px 0;
    padding-left: 14px;
    font-size: 7.8px;
    color: #334155;
    line-height: 1.35;
  }
  .bullet-list li {
    margin-bottom: 2px;
  }
`;

// ============================================================================
// ENGLISH EDITION HTML
// ============================================================================
const englishHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Maharashtra Police Bharti 2026 - Official Handbook (English)</title>
  <style>${commonCss}</style>
</head>
<body>

  <!-- PAGE 1: PHYSICAL MEASUREMENTS & 50-MARK GROUND TEST -->
  <div class="page">
    <header class="header">
      <div class="header-title">Maharashtra Police Bharti 2026 - Physical (PET / PST) Handbook</div>
      <div class="header-subtitle">Official 50-Mark Physical Test Criteria, Running Timing Slabs & Measurements (mahapolice.gov.in)</div>
    </header>

    <div class="section-heading">1. PHYSICAL STANDARDS (PST / PMT) & CATEGORY RELAXATIONS</div>
    <div class="section-paragraph">Candidates must strictly satisfy physical measurement criteria before ground qualification. Measurements are verified at the recruitment ground:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 32%;">Cadre & Candidate Category</th>
          <th style="width: 20%;">Minimum Height</th>
          <th style="width: 24%;">Chest (Male Candidates)</th>
          <th style="width: 24%;">Relaxation Rule / Authority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Police Constable Male (Open / OBC / EWS)</strong></td>
          <td>165 cm</td>
          <td>79 cm unexpanded (+5 cm expansion = 84 cm)</td>
          <td>Standard Statutory Baseline</td>
        </tr>
        <tr>
          <td><strong>Police Constable Female (Open / Reserved)</strong></td>
          <td>155 cm</td>
          <td>Not Applicable (N/A)</td>
          <td>Standard Statutory Baseline</td>
        </tr>
        <tr>
          <td><strong>Scheduled Tribe (ST) Male Aspirants</strong></td>
          <td>160 cm (5 cm relaxed)</td>
          <td>76 cm unexpanded (+5 cm expansion)</td>
          <td>Home Dept Gazette Rule (Tribal)</td>
        </tr>
        <tr>
          <td><strong>Scheduled Tribe (ST) Female Aspirants</strong></td>
          <td>152 cm (3 cm relaxed)</td>
          <td>Not Applicable (N/A)</td>
          <td>Home Dept Gazette Rule (Tribal)</td>
        </tr>
        <tr>
          <td><strong>Meritorious Sportspersons (Male & Female)</strong></td>
          <td>Relaxed by 2.5 cm</td>
          <td>Proportionate chest relaxation</td>
          <td>Dy. Director of Sports verification</td>
        </tr>
        <tr>
          <td><strong>Police Wards (Son/Daughter of Personnel)</strong></td>
          <td>Relaxed by 2.5 cm</td>
          <td>Proportionate chest relaxation</td>
          <td>Service Certificate / Unit Head</td>
        </tr>
      </tbody>
    </table>

    <div class="section-heading">2. PHYSICAL EFFICIENCY TEST (PET) - 50 TOTAL MARKS</div>
    <div class="section-paragraph">Scoring minimum 50% (25 out of 50 marks) is mandatory to qualify for the 100-mark written test (1:10 shortlisting ratio per vacancy):</div>

    <div class="section-subheading">Event 1: Male 1600m Running Time vs Marks Scale (20 Marks Max)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 36%;">1600m Running Time Bracket (Male)</th>
          <th style="width: 24%;">Marks Awarded</th>
          <th style="width: 40%;">Competitive Status & Evaluation Tier</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>5 min 10 sec or less</td><td class="highlight-green">20 Marks</td><td class="highlight-green">Maximum Score (Top Merit Tier)</td></tr>
        <tr><td>5 min 11 sec to 5 min 30 sec</td><td class="highlight-green">18 Marks</td><td>High Merit Tier (Strong Score)</td></tr>
        <tr><td>5 min 31 sec to 5 min 50 sec</td><td>15 Marks</td><td>Competitive Tier</td></tr>
        <tr><td>5 min 51 sec to 6 min 10 sec</td><td>12 Marks</td><td>Average Tier</td></tr>
        <tr><td>6 min 11 sec to 6 min 30 sec</td><td class="highlight-amber">10 Marks</td><td class="highlight-amber">Minimum Borderline Pass</td></tr>
        <tr><td>Over 6 min 30 sec</td><td class="highlight-red">0 Marks</td><td class="highlight-red">Disqualified from Recruitment</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">Event 2: Female 800m Running Time vs Marks Scale (20 Marks Max)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 36%;">800m Running Time Bracket (Female)</th>
          <th style="width: 24%;">Marks Awarded</th>
          <th style="width: 40%;">Competitive Status & Evaluation Tier</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>2 min 50 sec or less</td><td class="highlight-green">20 Marks</td><td class="highlight-green">Maximum Score (Top Merit Tier)</td></tr>
        <tr><td>2 min 51 sec to 3 min 00 sec</td><td class="highlight-green">18 Marks</td><td>High Merit Tier (Strong Score)</td></tr>
        <tr><td>3 min 01 sec to 3 min 10 sec</td><td>15 Marks</td><td>Competitive Tier</td></tr>
        <tr><td>3 min 11 sec to 3 min 20 sec</td><td>12 Marks</td><td>Average Tier</td></tr>
        <tr><td>3 min 21 sec to 3 min 30 sec</td><td class="highlight-amber">10 Marks</td><td class="highlight-amber">Minimum Borderline Pass</td></tr>
        <tr><td>Over 4 min 00 sec</td><td class="highlight-red">0 Marks</td><td class="highlight-red">Disqualified from Recruitment</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">Event 3: 100m Sprint Time vs Marks Scale (Male & Female - 15 Marks Max)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 35%;">Male 100m Time</th>
          <th style="width: 35%;">Female 100m Time</th>
          <th style="width: 30%;">Marks Awarded</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>11.50 sec or less</td><td>14.00 sec or less</td><td class="highlight-green">15 Marks (Full Marks)</td></tr>
        <tr><td>11.51 to 12.50 sec</td><td>14.01 to 15.00 sec</td><td>12 Marks</td></tr>
        <tr><td>12.51 to 13.50 sec</td><td>15.01 to 16.00 sec</td><td>10 Marks</td></tr>
        <tr><td>13.51 to 14.50 sec</td><td>16.01 to 17.00 sec</td><td>8 Marks</td></tr>
        <tr><td>14.51 to 15.50 sec</td><td>17.01 to 18.00 sec</td><td>6 Marks</td></tr>
        <tr><td>15.51 to 16.50 sec</td><td>18.01 to 19.00 sec</td><td>4 Marks</td></tr>
        <tr><td>16.51 to 17.50 sec</td><td>19.01 to 20.00 sec</td><td class="highlight-amber">2 Marks (Borderline)</td></tr>
        <tr><td>Over 17.50 sec</td><td>Over 20.00 sec</td><td class="highlight-red">0 Marks (Disqualified)</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">Event 4: Shot Put (Gola Phek) Distance vs Marks (Male 7.26 kg / Female 4.0 kg - 15 Marks Max)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 35%;">Male Distance (7.26 kg)</th>
          <th style="width: 35%;">Female Distance (4.0 kg)</th>
          <th style="width: 30%;">Marks Awarded</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>8.50 meters or more</td><td>6.00 meters or more</td><td class="highlight-green">15 Marks (Full Marks)</td></tr>
        <tr><td>7.90m to 8.49m</td><td>5.50m to 5.99m</td><td>12 Marks</td></tr>
        <tr><td>7.30m to 7.89m</td><td>5.00m to 5.49m</td><td>10 Marks</td></tr>
        <tr><td>6.70m to 7.29m</td><td>4.50m to 4.99m</td><td>8 Marks</td></tr>
        <tr><td>6.10m to 6.69m</td><td>4.00m to 4.49m</td><td>6 Marks</td></tr>
        <tr><td>5.50m to 6.09m</td><td>3.50m to 3.99m</td><td>4 Marks</td></tr>
        <tr><td>Less than 3.10m</td><td>Less than 2.00m</td><td class="highlight-red">0 Marks (Disqualified)</td></tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">IMPORTANT RULE: 50% GROUND PASSING THRESHOLD FOR WRITTEN SHORTLISTING</div>
      <div class="notice-text">Aspirants scoring less than 25 out of 50 marks in PET are disqualified from taking the written examination regardless of academic background. Shortlisting ratio for the written test is 1:10 per category vacancy.</div>
    </div>

    <footer class="footer">
      <div class="footer-left">SignResize.in | Official Maharashtra Police Bharti Handbook | Source: mahapolice.gov.in</div>
      <div class="footer-right">Page 1 of 4</div>
    </footer>
  </div>

  <!-- PAGE 2: SRPF 100-MARK PHYSICAL, DRIVER SKILL TEST & NCC 'C' BONUS MARKS -->
  <div class="page">
    <header class="header">
      <div class="header-title">Maharashtra Police Bharti 2026 - SRPF, Driver & NCC Rules</div>
      <div class="header-subtitle">SRPF 5 KM Ground Chart, Police Driver 50-Mark Skill Test & Home Dept NCC "C" 5 Bonus Marks GR</div>
    </header>

    <div class="section-heading">3. SRPF ARMED POLICE CONSTABLE PHYSICAL SCHEME (100 TOTAL MARKS)</div>
    <div class="section-paragraph">State Reserve Police Force (SRPF Groups 1 to 19) recruits male candidates only. Minimum height is 168 cm. Physical test carries 100 marks:</div>

    <div class="section-subheading">Event 1: SRPF 5000 Meter (5 KM) Endurance Run Time vs Marks Scale (50 Marks Max)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 36%;">5000m (5 KM) Running Time Bracket</th>
          <th style="width: 24%;">Marks Awarded</th>
          <th style="width: 40%;">Competitive Status & Evaluation Tier</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>25 minutes 00 seconds or less</td><td class="highlight-green">50 Marks</td><td class="highlight-green">Maximum Score (Full Marks Tier)</td></tr>
        <tr><td>25 min 01 sec to 26 min 00 sec</td><td class="highlight-green">45 Marks</td><td>High Merit Tier (Strong Endurance)</td></tr>
        <tr><td>26 min 01 sec to 27 min 00 sec</td><td>40 Marks</td><td>Competitive Tier</td></tr>
        <tr><td>27 min 01 sec to 28 min 00 sec</td><td>35 Marks</td><td>Above Average Tier</td></tr>
        <tr><td>28 min 01 sec to 29 min 00 sec</td><td>30 Marks</td><td>Average Tier</td></tr>
        <tr><td>29 min 01 sec to 30 min 00 sec</td><td class="highlight-amber">25 Marks</td><td class="highlight-amber">Minimum Qualifying Borderline</td></tr>
        <tr><td>Over 30 minutes 00 seconds</td><td class="highlight-red">0 Marks</td><td class="highlight-red">Disqualified from Recruitment</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">SRPF Events 2 & 3: 100m Sprint (25 Marks) & Shot Put (25 Marks)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 27%;">100m Sprint Time Bracket</th>
          <th style="width: 23%;">100m Marks</th>
          <th style="width: 27%;">Shot Put Distance (7.26 kg)</th>
          <th style="width: 23%;">Shot Put Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>11.50 sec or less</td><td class="highlight-green">25 Marks (Full)</td><td>8.50 meters or more</td><td class="highlight-green">25 Marks (Full)</td></tr>
        <tr><td>11.51 to 12.50 sec</td><td>22 Marks</td><td>7.90m to 8.49m</td><td>20 Marks</td></tr>
        <tr><td>12.51 to 13.50 sec</td><td>18 Marks</td><td>7.30m to 7.89m</td><td>16 Marks</td></tr>
        <tr><td>13.51 to 14.50 sec</td><td>14 Marks</td><td>6.70m to 7.29m</td><td>12 Marks</td></tr>
        <tr><td>14.51 to 15.50 sec</td><td>10 Marks</td><td>6.10m to 6.69m</td><td>8 Marks</td></tr>
        <tr><td>Over 17.50 sec</td><td class="highlight-red">0 Marks</td><td>Less than 3.10 meters</td><td class="highlight-red">0 Marks</td></tr>
      </tbody>
    </table>

    <div class="section-heading">4. POLICE CONSTABLE DRIVER (CHALAK) 50-MARK DRIVING SKILL TEST</div>
    <div class="section-paragraph">Under Maharashtra Police Driver Recruitment Rules, eligible candidates must clear a practical driving test conducted by RTO committees:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 32%;">Vehicle Driving Test Component</th>
          <th style="width: 18%;">Max Marks</th>
          <th style="width: 25%;">Qualifying Threshold</th>
          <th style="width: 25%;">Impact on Final Selection Merit</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Light Motor Vehicle (LMV) Driving Test</strong></td>
          <td>25 Marks</td>
          <td>Combined min 40% (20 marks)</td>
          <td>Qualifying Only - Not in Merit</td>
        </tr>
        <tr>
          <td><strong>Jeep-Type / Medium Vehicle Test</strong></td>
          <td>25 Marks</td>
          <td>Combined min 40% (20 marks)</td>
          <td>Qualifying Only - Not in Merit</td>
        </tr>
        <tr>
          <td><strong>Total Driving Skill Test</strong></td>
          <td><strong>50 Marks</strong></td>
          <td class="highlight-green"><strong>20 out of 50 (40% Passing)</strong></td>
          <td>Mandatory qualifying clearance</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">IMPORTANT RULE: DRIVER LICENSE MANDATE & QUALIFYING STATUS</div>
      <div class="notice-text">
        • Candidates must possess a valid LMV or LMV-TR / HMV license on the last date of application.<br>
        • Driving skill test marks are purely qualifying; final merit is formed from Ground Marks (50) + Written Marks (100) + NCC bonus.
      </div>
    </div>

    <div class="section-heading">5. NCC "C" CERTIFICATE BONUS MARKS (HOME DEPT GR DATED 20 OCT 2022)</div>
    <div class="section-paragraph">Government of Maharashtra, Home Department Resolution (GR) No. RECRUIT-2022/CR-268/POL-5A mandates bonus marks:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 28%;">NCC Certificate Level</th>
          <th style="width: 22%;">Bonus Marks Awarded</th>
          <th style="width: 25%;">Stage Added</th>
          <th style="width: 25%;">Official Eligibility Verification</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>NCC "C" Certificate Holder</strong></td>
          <td class="highlight-green"><strong>5 (Five) Bonus Marks</strong></td>
          <td>Final Merit Calculation</td>
          <td>Added after Ground (50) + Written (100)</td>
        </tr>
        <tr>
          <td>NCC "B" Certificate Holder</td>
          <td>0 Bonus Marks</td>
          <td>Not Applicable</td>
          <td>No bonus marks provided under 2022 GR</td>
        </tr>
        <tr>
          <td>NCC "A" Certificate Holder</td>
          <td>0 Bonus Marks</td>
          <td>Not Applicable</td>
          <td>No bonus marks provided under 2022 GR</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">IMPORTANT RULE: NCC "C" CERTIFICATE VERIFICATION RULE</div>
      <div class="notice-text">
        • Bonus marks are added ONLY to candidates holding an authentic NCC "C" Certificate verified by Directorate of NCC.<br>
        • Bonus marks are added at the time of final selection merit calculation and cannot be used to achieve the 50% ground cutoff.
      </div>
    </div>

    <footer class="footer">
      <div class="footer-left">SignResize.in | Official Maharashtra Police Bharti Handbook | Source: mahapolice.gov.in</div>
      <div class="footer-right">Page 2 of 4</div>
    </footer>
  </div>

  <!-- PAGE 3: 100-MARK WRITTEN EXAMINATION PATTERN & SUBJECT-WISE SYLLABUS -->
  <div class="page">
    <header class="header">
      <div class="header-title">Maharashtra Police Bharti 2026 - Written Syllabus & Merit Matrix</div>
      <div class="header-subtitle">100-Mark Written Exam Pattern, Subject Topics, Zero Negative Marking & Selection Formula</div>
    </header>

    <div class="section-heading">6. WRITTEN EXAMINATION SCHEME (100 MARKS - 90 MINUTES)</div>
    <div class="section-paragraph">Conducted in OMR / CBT mode. Features 100 objective multiple-choice questions. ZERO negative marking is enforced:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 32%;">Subject / Syllabus Section</th>
          <th style="width: 14%;">Questions</th>
          <th style="width: 14%;">Marks</th>
          <th style="width: 40%;">Strategic Scoring Highlights & Reference Textbooks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Marathi Grammar (Marathi Vyakaran)</strong></td>
          <td>25</td>
          <td class="highlight-green">25 Marks</td>
          <td>Highest ROI section; M.R. Walimbe or Balasaheb Shinde books</td>
        </tr>
        <tr>
          <td><strong>Mathematics (Ankganit)</strong></td>
          <td>25</td>
          <td class="highlight-green">25 Marks</td>
          <td>Percentages, Ratios, Speed-Distance, LCM/HCF; P. Rane / Nitin Mahale</td>
        </tr>
        <tr>
          <td><strong>Intellectual Test / Reasoning</strong></td>
          <td>25</td>
          <td class="highlight-green">25 Marks</td>
          <td>Coding-decoding, Series, Blood relations, Venn; Anil Kolte / Dhawale</td>
        </tr>
        <tr>
          <td><strong>General Knowledge & Current Affairs</strong></td>
          <td>25</td>
          <td class="highlight-green">25 Marks</td>
          <td>Maharashtra History, Geography, Constitution; Tatya Thokla (E. Patil)</td>
        </tr>
        <tr style="background: #f1f5f9; font-weight: bold;">
          <td>TOTAL WRITTEN SCHEME</td>
          <td>100</td>
          <td>100 Marks</td>
          <td>Duration: 90 Minutes | Penalty: 0 (Zero Negative Marking)</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">IMPORTANT RULE: WRITTEN QUALIFYING CRITERIA & 1:10 SHORTLISTING RATIO</div>
      <div class="notice-text">
        • Candidates shortlisted from Ground PET at a 1:10 ratio must score a minimum of 40% (40 out of 100 marks) in written test.<br>
        • Because there is NO negative marking, candidates should strategically attempt all 100 questions before the 90-minute timer ends.
      </div>
    </div>

    <div class="section-heading">7. FINAL SELECTION MERIT SCORE CALCULATION FORMULA</div>
    <div class="section-paragraph">The final district-wise merit list is computed by combining physical marks, written marks, and NCC bonus marks:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 28%;">Recruitment Cadre</th>
          <th style="width: 18%;">Physical (PET)</th>
          <th style="width: 18%;">Written Exam</th>
          <th style="width: 20%;">Qualifying / Bonus</th>
          <th style="width: 16%;">Final Merit Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Police Constable (Shipai)</strong></td>
          <td>50 Marks</td>
          <td>100 Marks</td>
          <td>+5 NCC "C" Bonus</td>
          <td class="highlight-green"><strong>Total: 150 / 155</strong></td>
        </tr>
        <tr>
          <td><strong>SRPF Armed Constable</strong></td>
          <td>100 Marks</td>
          <td>100 Marks</td>
          <td>+5 NCC "C" Bonus</td>
          <td class="highlight-green"><strong>Total: 200 / 205</strong></td>
        </tr>
        <tr>
          <td><strong>Police Constable Driver</strong></td>
          <td>50 Marks</td>
          <td>100 Marks</td>
          <td>50M Skill (Qualifying)</td>
          <td class="highlight-green"><strong>Total: 150 / 155</strong></td>
        </tr>
        <tr>
          <td><strong>Jail Constable (Karagruh)</strong></td>
          <td>50 Marks</td>
          <td>100 Marks</td>
          <td>+5 NCC "C" Bonus</td>
          <td class="highlight-green"><strong>Total: 150 / 155</strong></td>
        </tr>
        <tr>
          <td><strong>Bandsman Constable</strong></td>
          <td>50 Marks</td>
          <td>100 Marks</td>
          <td>Band Skill (Qualifying)</td>
          <td class="highlight-green"><strong>Total: 150 / 155</strong></td>
        </tr>
      </tbody>
    </table>

    <div class="section-heading">8. CORE SYLLABUS TOPICS BREAKDOWN</div>
    <ul class="bullet-list">
      <li><strong>Marathi Vyakaran:</strong> Sandhi, Samas, Prayog, Alankar, Shabdanche Prakar, Samanarthi/Virudharthi Shabd, Vakyaprachar, Mhani.</li>
      <li><strong>Ankganit:</strong> Number System, Decimal Fractions, LCM & HCF, Ratio & Proportion, Percentage, Profit & Loss, Simple & Compound Interest.</li>
      <li><strong>Buddhimatta:</strong> Number/Alphabet Series, Analogy, Classification, Coding-Decoding, Direction Sense, Calendar, Clock, Venn Diagrams.</li>
      <li><strong>General Knowledge:</strong> Maharashtra History & 19th Century Social Reformers, Maharashtra Geography & Rivers, Indian Constitution.</li>
      <li><strong>Current Affairs:</strong> State and National appointments, sports tournaments, awards, government schemes, and police administration.</li>
    </ul>

    <div class="notice-box">
      <div class="notice-title">STRATEGIC TIP: 60-DAY DUAL PREPARATION BLUEPRINT</div>
      <div class="notice-text">
        • Dedicate early mornings (5:30 AM to 7:30 AM) to interval sprints and shot put practice on ground.<br>
        • Devote 4 hours daily to high-yield written subjects: 1.5 hrs Marathi Grammar, 1.5 hrs Maths/Reasoning, and 1 hr GK/Current Affairs.
      </div>
    </div>

    <footer class="footer">
      <div class="footer-left">SignResize.in | Official Maharashtra Police Bharti Handbook | Source: mahapolice.gov.in</div>
      <div class="footer-right">Page 3 of 4</div>
    </footer>
  </div>

  <!-- PAGE 4: DOCUMENT VERIFICATION (DV) CHECKLIST & MAHAIT UPLOAD RULES -->
  <div class="page">
    <header class="header">
      <div class="header-title">Maharashtra Police Bharti 2026 - Documents & Upload Rules</div>
      <div class="header-subtitle">12-Point Verification Checklist, NCL Validity, MahaIT Photo/Signature Rules & Free Tools</div>
    </header>

    <div class="section-heading">9. MANDATORY 12-POINT DOCUMENT VERIFICATION (DV) CHECKLIST</div>
    <div class="section-paragraph">Bring original documents along with 2 sets of self-attested photocopies to the physical verification venue:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 30%;">Required Document</th>
          <th style="width: 30%;">Issuing Authority / Purpose</th>
          <th style="width: 40%;">Crucial Validity & Compliance Rule</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>10th (SSC) Marksheet & Certificate</strong></td>
          <td>Maharashtra State / Recognized Board</td>
          <td>Mandatory proof of Date of Birth (DOB) and name spelling</td>
        </tr>
        <tr>
          <td><strong>12th (HSC) Marksheet & Certificate</strong></td>
          <td>Recognized Higher Secondary Board</td>
          <td>Mandatory educational eligibility benchmark</td>
        </tr>
        <tr>
          <td><strong>Domicile & Nationality Certificate</strong></td>
          <td>Competent SDO / Tehsildar (Govt of MH)</td>
          <td>Mandatory proof of Maharashtra residency for all applicants</td>
        </tr>
        <tr>
          <td><strong>Caste Certificate (Jat Dakhla)</strong></td>
          <td>Sub-Divisional Officer (SDO) / Magistrate</td>
          <td>Mandatory for SC/ST/OBC/VJNT/SBC category claims</td>
        </tr>
        <tr>
          <td><strong>Caste Validity Certificate</strong></td>
          <td>Divisional Caste Scrutiny Committee</td>
          <td>Mandatory at verification (or undertaking if applied)</td>
        </tr>
        <tr>
          <td><strong>Non-Creamy Layer (NCL) Certificate</strong></td>
          <td>Tehsildar / Sub-Divisional Magistrate</td>
          <td class="highlight-red"><strong>MUST be valid for current financial year (OBC/VJNT/SBC)</strong></td>
        </tr>
        <tr>
          <td><strong>EWS Eligibility Certificate</strong></td>
          <td>Competent Revenue Authority (State of MH)</td>
          <td>Must be valid for the financial year of recruitment</td>
        </tr>
        <tr>
          <td><strong>NCC "C" Certificate (Original)</strong></td>
          <td>Commanding Officer / Directorate of NCC</td>
          <td>Mandatory to claim 5 bonus marks under 2022 GR</td>
        </tr>
        <tr>
          <td><strong>Driving License (LMV / HMV)</strong></td>
          <td>Regional Transport Authority (RTO)</td>
          <td>Mandatory for Police Constable Driver post applicants</td>
        </tr>
        <tr>
          <td><strong>Sports Verification Certificate</strong></td>
          <td>Divisional Deputy Director of Sports</td>
          <td>Must be officially validated before application deadline</td>
        </tr>
        <tr>
          <td><strong>Small Family Declaration (Namuna A)</strong></td>
          <td>Self-attested prescribed declaration form</td>
          <td>Rule: Not more than 2 living children after cutoff date</td>
        </tr>
        <tr>
          <td><strong>Parallel Reservation Certificates</strong></td>
          <td>Competent District / Defense / Dept Authority</td>
          <td>Home Guard (3 yrs service), Ex-Servicemen, Earthquake</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">CRITICAL SCRUTINY TRAP: NON-CREAMY LAYER & DOMICILE DATE VALIDITY</div>
      <div class="notice-text">
        • NCL certificate must be valid up to the last date of online form submission. Expired certificates cause rejection.<br>
        • Spelling of candidate and parents names must match exactly across 10th marksheet, Aadhaar card, and Domicile certificate.
      </div>
    </div>

    <div class="section-heading">10. OFFICIAL MAHAIT PORTAL DIGITAL UPLOAD SPECIFICATIONS</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 25%;">Asset Type</th>
          <th style="width: 25%;">Pixel Dimensions</th>
          <th style="width: 20%;">File Size Limit</th>
          <th style="width: 30%;">Format & Strict Disqualification Rules</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Passport Photograph</strong></td>
          <td>160 x 200 px (or 160x212)</td>
          <td>5 KB to 20 KB (Max 50 KB)</td>
          <td>JPG/JPEG, light background, no caps/goggles</td>
        </tr>
        <tr>
          <td><strong>Candidate Signature</strong></td>
          <td>256 x 64 px (4:1 banner)</td>
          <td class="highlight-green"><strong>5 KB to 20 KB strictly</strong></td>
          <td>Black ballpoint ink, unruled white paper</td>
        </tr>
        <tr>
          <td><strong>Handwriting Script</strong></td>
          <td>Natural Running Cursive</td>
          <td>Must NOT be in ALL CAPS</td>
          <td class="highlight-red"><strong>Signatures in CAPITAL letters cause form rejection</strong></td>
        </tr>
      </tbody>
    </table>

    <div class="section-heading">11. 100% FREE CLIENT-SIDE PREPARATION & RESIZING TOOLS</div>
    <ul class="bullet-list">
      <li><strong>Official Maharashtra Police Resizer:</strong> https://signresize.in/maharashtra-police-signature-resize/</li>
      <li><strong>Universal Passport Photo Resizer:</strong> https://signresize.in/photo-resizer/</li>
      <li><strong>Convert Blue Ink Signature to Clean Black & White:</strong> https://signresize.in/make-signature-background-white/</li>
      <li><strong>Interactive Running Time Practice Planner:</strong> https://signresize.in/blog/maharashtra-police-bharti-2026-top-10-faq-guide/</li>
      <li><strong>Zero Server Uploads:</strong> 100% client-side browser privacy ensures candidate photos and signatures are never stored on external servers.</li>
    </ul>

    <footer class="footer">
      <div class="footer-left">SignResize.in | Official Maharashtra Police Bharti Handbook | Source: mahapolice.gov.in</div>
      <div class="footer-right">Page 4 of 4</div>
    </footer>
  </div>

</body>
</html>`;

// ============================================================================
// MARATHI EDITION HTML (मराठी आवृत्ती - १००% तंतोतंत जुळणारी माहिती)
// ============================================================================
const marathiHtml = `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>महाराष्ट्र पोलीस भरती २०२६ - अधिकृत नियमावली पुस्तिका (मराठी आवृत्ती)</title>
  <style>${commonCss}</style>
</head>
<body>

  <!-- पृष्ठ १: शारीरिक मोजमाप व ५० गुण मैदानी चाचणी तक्ता -->
  <div class="page">
    <header class="header">
      <div class="header-title">महाराष्ट्र पोलीस भरती २०२६ - शारीरिक व मैदानी चाचणी (PST / PET) अधिकृत नियमावली</div>
      <div class="header-subtitle">शारीरिक पात्रता (उंची व छाती), ५० गुण मैदानी चाचणी व धावणे गुणदान तक्ता (गृह विभाग, mahapolice.gov.in)</div>
    </header>

    <div class="section-heading">१. शारीरिक मोजमाप पात्रता (PST / PMT) व प्रवर्गनिहाय सवलती</div>
    <div class="section-paragraph">उमेदवारांनी मैदानी परीक्षेपूर्वी खालील शारीरिक पात्रता निकष पूर्ण करणे अनिवार्य आहे. भरती मैदानावर प्रत्यक्ष मोजमाप घेतले जाते:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 32%;">संवर्ग व उमेदवार प्रवर्ग</th>
          <th style="width: 20%;">किमान उंची</th>
          <th style="width: 24%;">छाती (पुरुष उमेदवार)</th>
          <th style="width: 24%;">सवलत नियम व संदर्भ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>पोलीस शिपाई पुरुष (खुला / इतर मागास / ईडब्ल्यूएस)</strong></td>
          <td>१६५ सेमी</td>
          <td>७९ सेमी न फुगवता (किमान ५ सेमी फुगवून ८४ सेमी)</td>
          <td>अधिकृत सेवाप्रवेश नियम निकष</td>
        </tr>
        <tr>
          <td><strong>पोलीस शिपाई महिला (सर्व प्रवर्ग)</strong></td>
          <td>१५५ सेमी</td>
          <td>लागू नाही (N/A)</td>
          <td>अधिकृत सेवाप्रवेश नियम निकष</td>
        </tr>
        <tr>
          <td><strong>अनुसूचित जमाती (ST) पुरुष उमेदवार</strong></td>
          <td>१६० सेमी (५ सेमी सवलत)</td>
          <td>७६ सेमी न फुगवता (किमान ५ सेमी फुगवून)</td>
          <td>शासन निर्णय व राजपत्र तरतूद</td>
        </tr>
        <tr>
          <td><strong>अनुसूचित जमाती (ST) महिला उमेदवार</strong></td>
          <td>१५२ सेमी (३ सेमी सवलत)</td>
          <td>लागू नाही (N/A)</td>
          <td>शासन निर्णय व राजपत्र तरतूद</td>
        </tr>
        <tr>
          <td><strong>गुणवंत खेळाडू (महिला व पुरुष)</strong></td>
          <td>२.५ सेमी उंची सवलत</td>
          <td>छातीत नियमानुसार प्रमाणात सवलत</td>
          <td>विभागीय क्रीडा उपसंचालक प्रमाणीकरण</td>
        </tr>
        <tr>
          <td><strong>पोलीस पाल्य (सेवेत असताना मृत/अक्षम)</strong></td>
          <td>२.५ सेमी उंची सवलत</td>
          <td>छातीत नियमानुसार प्रमाणात सवलत</td>
          <td>संबंधित पोलीस घटक प्रमुख दाखला</td>
        </tr>
      </tbody>
    </table>

    <div class="section-heading">२. शारीरिक चाचणी (PET) - एकूण ५० गुण गुणदान तक्ता</div>
    <div class="section-paragraph">उमेदवारास लेखी परीक्षेसाठी पात्र ठरण्याकरिता शारीरिक चाचणीत किमान ५०% गुण (५० पैकी २५ गुण) मिळवणे अनिवार्य आहे (एका पदास १:१० निवड गुणोत्तर):</div>

    <div class="section-subheading">चाचणी १: १६०० मीटर धावणे वेळ विरुद्ध गुण तक्ता (पुरुष उमेदवार - कमाल २० गुण)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 36%;">१६०० मीटर धावणे वेळ टप्पा (पुरुष)</th>
          <th style="width: 24%;">मिळणारे गुण</th>
          <th style="width: 40%;">कामगिरी स्तर व गुणवत्ता मूल्यांकन</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>५ मिनिटे १० सेकंद किंवा त्यापेक्षा कमी</td><td class="highlight-green">२० गुण</td><td class="highlight-green">कमाल गुण (अव्वल गुणवत्ता स्तर)</td></tr>
        <tr><td>५ मि. ११ से. ते ५ मि. ३० से.</td><td class="highlight-green">१८ गुण</td><td>उत्कृष्ट कामगिरी स्तर</td></tr>
        <tr><td>५ मि. ३१ से. ते ५ मि. ५० से.</td><td>१५ गुण</td><td>चांगली स्पर्धात्मक कामगिरी</td></tr>
        <tr><td>५ मि. ५१ से. ते ६ मि. १० से.</td><td>१२ गुण</td><td>मध्यम कामगिरी</td></tr>
        <tr><td>६ मि. ११ से. ते ६ मि. ३० से.</td><td class="highlight-amber">१० गुण</td><td class="highlight-amber">किमान पात्र मर्यादा (बॉर्डरलाइन)</td></tr>
        <tr><td>६ मिनिटे ३० सेकंदांपेक्षा जास्त वेळ</td><td class="highlight-red">० गुण</td><td class="highlight-red">भरती प्रक्रियेतून अपात्र</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">चाचणी २: ८०० मीटर धावणे वेळ विरुद्ध गुण तक्ता (महिला उमेदवार - कमाल २० गुण)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 36%;">८०० मीटर धावणे वेळ टप्पा (महिला)</th>
          <th style="width: 24%;">मिळणारे गुण</th>
          <th style="width: 40%;">कामगिरी स्तर व गुणवत्ता मूल्यांकन</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>२ मिनिटे ५० सेकंद किंवा त्यापेक्षा कमी</td><td class="highlight-green">२० गुण</td><td class="highlight-green">कमाल गुण (अव्वल गुणवत्ता स्तर)</td></tr>
        <tr><td>२ मि. ५१ से. ते ३ मि. ०० से.</td><td class="highlight-green">१८ गुण</td><td>उत्कृष्ट कामगिरी स्तर</td></tr>
        <tr><td>३ मि. ०१ से. ते ३ मि. १० से.</td><td>१५ गुण</td><td>चांगली स्पर्धात्मक कामगिरी</td></tr>
        <tr><td>३ मि. ११ से. ते ३ मि. २० से.</td><td>१२ गुण</td><td>मध्यम कामगिरी</td></tr>
        <tr><td>३ मि. २१ से. ते ३ मि. ३० से.</td><td class="highlight-amber">१० गुण</td><td class="highlight-amber">किमान पात्र मर्यादा (बॉर्डरलाइन)</td></tr>
        <tr><td>४ मिनिटांपेक्षा जास्त वेळ</td><td class="highlight-red">० गुण</td><td class="highlight-red">भरती प्रक्रियेतून अपात्र</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">चाचणी ३: १०० मीटर धावणे स्प्रिंट वेळ विरुद्ध गुण तक्ता (पुरुष व महिला - कमाल १५ गुण)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 35%;">पुरुष १०० मीटर वेळ</th>
          <th style="width: 35%;">महिला १०० मीटर वेळ</th>
          <th style="width: 30%;">मिळणारे गुण</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>११.५० सेकंद किंवा कमी</td><td>१४.०० सेकंद किंवा कमी</td><td class="highlight-green">१५ गुण (कमाल गुण)</td></tr>
        <tr><td>११.५१ ते १२.५० सेकंद</td><td>१४.०१ ते १५.०० सेकंद</td><td>१२ गुण</td></tr>
        <tr><td>१२.५१ ते १३.५० सेकंद</td><td>१५.०१ ते १६.०० सेकंद</td><td>१० गुण</td></tr>
        <tr><td>१३.५१ ते १४.५० सेकंद</td><td>१६.०१ ते १७.०० सेकंद</td><td>८ गुण</td></tr>
        <tr><td>१४.५१ ते १५.५० सेकंद</td><td>१७.०१ ते १८.०० सेकंद</td><td>६ गुण</td></tr>
        <tr><td>१५.५१ ते १६.५० सेकंद</td><td>१८.०१ ते १९.०० सेकंद</td><td>४ गुण</td></tr>
        <tr><td>१६.५१ ते १७.५० सेकंद</td><td>१९.०१ ते २०.०० सेकंद</td><td class="highlight-amber">२ गुण (सीमावर्ती पात्र)</td></tr>
        <tr><td>१७.५० सेकंदांपेक्षा जास्त</td><td>२०.०० सेकंदांपेक्षा जास्त</td><td class="highlight-red">० गुण (अपात्र)</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">चाचणी ४: गोळाफेक अंतर विरुद्ध गुण तक्ता (पुरुष ७.२६० किलो / महिला ४.००० किलो - कमाल १५ गुण)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 35%;">पुरुष गोळाफेक अंतर (७.२६० किग्रॅ)</th>
          <th style="width: 35%;">महिला गोळाफेक अंतर (४.००० किग्रॅ)</th>
          <th style="width: 30%;">मिळणारे गुण</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>८.५० मीटर किंवा जास्त</td><td>६.०० मीटर किंवा जास्त</td><td class="highlight-green">१५ गुण (कमाल गुण)</td></tr>
        <tr><td>७.९० ते ८.४९ मीटर</td><td>५.५० ते ५.९९ मीटर</td><td>१२ गुण</td></tr>
        <tr><td>७.३० ते ७.८९ मीटर</td><td>५.०० ते ५.४९ मीटर</td><td>१० गुण</td></tr>
        <tr><td>६.७० ते ७.२९ मीटर</td><td>४.५० ते ४.९९ मीटर</td><td>८ गुण</td></tr>
        <tr><td>६.१० ते ६.६९ मीटर</td><td>४.०० ते ४.४९ मीटर</td><td>६ गुण</td></tr>
        <tr><td>५.५० ते ६.०९ मीटर</td><td>३.५० ते ३.९९ मीटर</td><td>४ गुण</td></tr>
        <tr><td>३.१० मीटरपेक्षा कमी</td><td>२.०० मीटरपेक्षा कमी</td><td class="highlight-red">० गुण (अपात्र)</td></tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">महत्त्वाचा नियम: लेखी परीक्षेसाठी ५०% मैदानी गुण मिळवणे अनिवार्य</div>
      <div class="notice-text">शारीरिक चाचणीमध्ये ५० पैकी किमान ५०% गुण (२५ गुण) न मिळवणारे उमेदवार भरती प्रक्रियेतून बाद ठरतात. एका जागेसाठी १:१० प्रमाणात उमेदवारांची लेखी परीक्षेसाठी निवड केली जाते.</div>
    </div>

    <footer class="footer">
      <div class="footer-left">SignResize.in | अधिकृत महाराष्ट्र पोलीस भरती नियमावली | संदर्भ: mahapolice.gov.in</div>
      <div class="footer-right">पृष्ठ १ पैकी ४</div>
    </footer>
  </div>

  <!-- पृष्ठ २: SRPF, चालक व NCC ५ बोनस गुण -->
  <div class="page">
    <header class="header">
      <div class="header-title">महाराष्ट्र पोलीस भरती २०२६ - SRPF, चालक व NCC बोनस गुण नियमावली</div>
      <div class="header-subtitle">राज्य राखीव पोलीस बल ५ किमी धावणे तक्ता, चालक ५० गुण कौशल्य चाचणी व NCC ५ बोनस गुण GR</div>
    </header>

    <div class="section-heading">३. राज्य राखीव पोलीस बल (SRPF) सशस्त्र पोलीस शिपाई (एकूण १०० गुण मैदानी चाचणी)</div>
    <div class="section-paragraph">SRPF गट क्रमांक १ ते १९ मधील भरती फक्त पुरुष उमेदवारांसाठी असते. किमान उंची १६८ सेमी असणे अनिवार्य आहे. मैदानी चाचणी १०० गुणांची असते:</div>

    <div class="section-subheading">SRPF चाचणी १: ५००० मीटर (५ किमी) धावणे वेळ विरुद्ध गुण तक्ता (कमाल ५० गुण)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 36%;">५००० मीटर (५ किमी) धावणे वेळ टप्पा</th>
          <th style="width: 24%;">मिळणारे गुण</th>
          <th style="width: 40%;">कामगिरी स्तर व गुणवत्ता मूल्यांकन</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>२५ मिनिटे ०० सेकंद किंवा त्यापेक्षा कमी</td><td class="highlight-green">५० गुण</td><td class="highlight-green">कमाल गुण (अव्वल स्टॅमिना स्तर)</td></tr>
        <tr><td>२५ मि. ०१ से. ते २६ मि. ०० से.</td><td class="highlight-green">४५ गुण</td><td>उत्कृष्ट कामगिरी स्तर</td></tr>
        <tr><td>२६ मि. ०१ से. ते २७ मि. ०० से.</td><td>४० गुण</td><td>चांगली स्पर्धात्मक कामगिरी</td></tr>
        <tr><td>२७ मि. ०१ से. ते २८ मि. ०० से.</td><td>३५ गुण</td><td>मध्यमापेक्षा जास्त कामगिरी</td></tr>
        <tr><td>२८ मि. ०१ से. ते २९ मि. ०० से.</td><td>३० गुण</td><td>मध्यम कामगिरी</td></tr>
        <tr><td>२९ मि. ०१ से. ते ३० मि. ०० से.</td><td class="highlight-amber">२५ गुण</td><td class="highlight-amber">किमान पात्र मर्यादा (बॉर्डरलाइन)</td></tr>
        <tr><td>३० मिनिटांपेक्षा जास्त वेळ</td><td class="highlight-red">० गुण</td><td class="highlight-red">भरती प्रक्रियेतून अपात्र</td></tr>
      </tbody>
    </table>

    <div class="section-subheading">SRPF चाचणी २ व ३: १०० मीटर धावणे (२५ गुण) व गोळाफेक ७.२६० किग्रॅ (२५ गुण)</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 27%;">१०० मीटर वेळ टप्पा</th>
          <th style="width: 23%;">१०० मीटर गुण</th>
          <th style="width: 27%;">गोळाफेक अंतर (७.२६० किग्रॅ)</th>
          <th style="width: 23%;">गोळाफेक गुण</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>११.५० सेकंद किंवा कमी</td><td class="highlight-green">२५ गुण (कमाल)</td><td>८.५० मीटर किंवा जास्त</td><td class="highlight-green">२५ गुण (कमाल)</td></tr>
        <tr><td>११.५१ ते १२.५० सेकंद</td><td>२२ गुण</td><td>७.९० ते ८.४९ मीटर</td><td>२० गुण</td></tr>
        <tr><td>१२.५१ ते १३.५० सेकंद</td><td>१८ गुण</td><td>७.३० ते ७.८९ मीटर</td><td>१६ गुण</td></tr>
        <tr><td>१३.५१ ते १४.५० सेकंद</td><td>१४ गुण</td><td>६.७० ते ७.२९ मीटर</td><td>१२ गुण</td></tr>
        <tr><td>१४.५१ ते १५.५० सेकंद</td><td>१० गुण</td><td>६.१० ते ६.६९ मीटर</td><td>८ गुण</td></tr>
        <tr><td>१७.५० सेकंदांपेक्षा जास्त</td><td class="highlight-red">० गुण</td><td>३.१० मीटरपेक्षा कमी</td><td class="highlight-red">० गुण</td></tr>
      </tbody>
    </table>

    <div class="section-heading">४. पोलीस शिपाई चालक (५० गुण वाहन चालवणे कौशल्य चाचणी)</div>
    <div class="section-paragraph">महाराष्ट्र पोलीस चालक सेवाप्रवेश नियमांनुसार उमेदवारांना आरटीओ समितीमार्फत ५० गुणांची प्रात्यक्षिक वाहन चालवणे चाचणी द्यावी लागते:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 32%;">वाहन चालवणे चाचणी प्रकार</th>
          <th style="width: 18%;">कमाल गुण</th>
          <th style="width: 25%;">किमान पात्रता निकष</th>
          <th style="width: 25%;">अंतिम निवड गुणवत्तेवरील परिणाम</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>हलके मोटार वाहन (LMV) चालवणे चाचणी</strong></td>
          <td>२५ गुण</td>
          <td>एकत्रित किमान ४०% गुण (२० गुण)</td>
          <td>केवळ अर्हताकारी - अंतिम यादीत गुण धरले जात नाहीत</td>
        </tr>
        <tr>
          <td><strong>जीप किंवा मध्यम अवजड वाहन चाचणी</strong></td>
          <td>२५ गुण</td>
          <td>एकत्रित किमान ४०% गुण (२० गुण)</td>
          <td>केवळ अर्हताकारी - अंतिम यादीत गुण धरले जात नाहीत</td>
        </tr>
        <tr>
          <td><strong>एकूण वाहन चालवणे कौशल्य चाचणी</strong></td>
          <td><strong>५० गुण</strong></td>
          <td class="highlight-green"><strong>५० पैकी २० गुण (४०% उत्तीर्ण)</strong></td>
          <td>प्रात्यक्षिक चाचणी उत्तीर्ण होणे अनिवार्य</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">महत्त्वाचा नियम: वाहन परवाना अनिवार्यता व अर्हताकारी स्वरूप</div>
      <div class="notice-text">
        • अर्ज करण्याच्या अंतिम दिनांकास उमेदवाराकडे वैध LMV किंवा LMV-TR / HMV वाहन परवाना असणे आवश्यक आहे.<br>
        • चालक कौशल्य चाचणीचे गुण केवळ अर्हताकारी आहेत; अंतिम निवड यादी शारीरिक चाचणी (५०) + लेखी परीक्षा (१००) + NCC बोनस यावरच बनते.
      </div>
    </div>

    <div class="section-heading">५. राष्ट्रीय छात्र सेना (NCC) 'क' प्रमाणपत्र ५ बोनस गुण (गृह विभाग शासन निर्णय २० ऑक्टोबर २०२२)</div>
    <div class="section-paragraph">महाराष्ट्र शासन, गृह विभाग राजपत्र शासन निर्णय क्र. RECRUIT-२०२२/प्र.क्र.२६८/पोल-५अ अन्वये तरतूद:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 28%;">NCC प्रमाणपत्र स्तर</th>
          <th style="width: 22%;">मिळणारे बोनस गुण</th>
          <th style="width: 25%;">गुण जोडण्याचा टप्पा</th>
          <th style="width: 25%;">अधिकृत पडताळणी</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>NCC 'क' (C) प्रमाणपत्र धारक</strong></td>
          <td class="highlight-green"><strong>५ (पाच) बोनस गुण</strong></td>
          <td>अंतिम निवड गुणवत्ता यादीत</td>
          <td>शारीरिक (५०) + लेखी (१००) नंतर जोडले जातात</td>
        </tr>
        <tr>
          <td>NCC 'ब' (B) प्रमाणपत्र धारक</td>
          <td>० बोनस गुण</td>
          <td>लागू नाही</td>
          <td>२०२२ च्या शासन निर्णयानुसार बोनस गुण नाहीत</td>
        </tr>
        <tr>
          <td>NCC 'अ' (A) प्रमाणपत्र धारक</td>
          <td>० बोनस गुण</td>
          <td>लागू नाही</td>
          <td>२०२२ च्या शासन निर्णयानुसार बोनस गुण नाहीत</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">महत्त्वाचा नियम: NCC 'क' प्रमाणपत्र पडताळणी अट</div>
      <div class="notice-text">
        • बोनस गुण केवळ NCC संचालनालयाद्वारे अधिकृतरीत्या पडताळणी झालेल्या 'क' (C) प्रमाणपत्र धारकांनाच दिले जातात.<br>
        • हे ५ बोनस गुण अंतिम निवड यादी तयार करताना जोडले जातात; शारीरिक चाचणीच्या ५०% पात्रतेसाठी हे गुण ग्राह्य धरले जात नाहीत.
      </div>
    </div>

    <footer class="footer">
      <div class="footer-left">SignResize.in | अधिकृत महाराष्ट्र पोलीस भरती नियमावली | संदर्भ: mahapolice.gov.in</div>
      <div class="footer-right">पृष्ठ २ पैकी ४</div>
    </footer>
  </div>

  <!-- पृष्ठ ३: लेखी परीक्षा अभ्यासक्रम व निवड सूत्र -->
  <div class="page">
    <header class="header">
      <div class="header-title">महाराष्ट्र पोलीस भरती २०२६ - लेखी परीक्षा अभ्यासक्रम व निवड सूत्र</div>
      <div class="header-subtitle">१०० गुण लेखी परीक्षा आराखडा, विषयानुसार गुणविभागणी, निगेटिव्ह मार्किंग नाही व अंतिम गुणवत्ता सूत्र</div>
    </header>

    <div class="section-heading">६. लेखी परीक्षा आराखडा (१०० गुण - ९० मिनिटे वेळ)</div>
    <div class="section-paragraph">ओएमआर (OMR) किंवा संगणक आधारित (CBT) पद्धतीने घेतली जाते. १०० बहुपर्यायी प्रश्न (MCQ) असतात. निगेटिव्ह मार्किंग शून्य (०) आहे:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 32%;">विषय / अभ्यासक्रम विभाग</th>
          <th style="width: 14%;">प्रश्न संख्या</th>
          <th style="width: 14%;">गुण</th>
          <th style="width: 40%;">परीक्षेतील महत्त्व व संदर्भ पुस्तके</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>मराठी व्याकरण (Marathi Grammar)</strong></td>
          <td>२५</td>
          <td class="highlight-green">२५ गुण</td>
          <td>सर्वाधिक गुण देणारा विषय; मो.रा. वाळंबे किंवा बाळासाहेब शिंदे पुस्तके</td>
        </tr>
        <tr>
          <td><strong>अंकगणित (Mathematics)</strong></td>
          <td>२५</td>
          <td class="highlight-green">२५ गुण</td>
          <td>टक्केवारी, नफा-तोटा, लसावि-मसावि, वेग-वेळ-अंतर; पंढरीनाथ राणे / नितीन महाले</td>
        </tr>
        <tr>
          <td><strong>बुद्धिमत्ता चाचणी (Reasoning)</strong></td>
          <td>२५</td>
          <td class="highlight-green">२५ गुण</td>
          <td>संख्या/अक्षर मालिका, सांकेतिक भाषा, नातेसंबंध; अनिल कोलते / सचिन ढवळे</td>
        </tr>
        <tr>
          <td><strong>सामान्य ज्ञान व चालू घडामोडी</strong></td>
          <td>२५</td>
          <td class="highlight-green">२५ गुण</td>
          <td>महाराष्ट्राचा इतिहास, भूगोल, राज्यघटना; एकनाथ पाटील (तात्यांचा ठोकळा)</td>
        </tr>
        <tr style="background: #f1f5f9; font-weight: bold;">
          <td>एकूण लेखी परीक्षा आराखडा</td>
          <td>१००</td>
          <td>१०० गुण</td>
          <td>वेळ: ९० मिनिटे | नकारात्मक गुणदान (Negative Marking) नाही</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">महत्त्वाचा नियम: लेखी पात्रता निकष व १:१० निवड गुणोत्तर</div>
      <div class="notice-text">
        • शारीरिक चाचणीतून १:१० प्रमाणात निवड झालेल्या उमेदवारांनी लेखी परीक्षेत किमान ४०% (४० गुण) मिळवणे आवश्यक आहे.<br>
        • निगेटिव्ह मार्किंग नसल्यामुळे सर्व १०० प्रश्न वेळेत सोडवणे उमेदवारांच्या मेरिटसाठी सर्वाधिक फायद्याचे ठरते.
      </div>
    </div>

    <div class="section-heading">७. अंतिम निवड गुणवत्ता यादी गणना सूत्र</div>
    <div class="section-paragraph">प्रत्येक घटकाची अंतिम निवड गुणवत्ता यादी शारीरिक गुण, लेखी परीक्षेतील गुण व NCC बोनस गुण एकत्र करून लावली जाते:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 28%;">संवर्ग / पद</th>
          <th style="width: 18%;">शारीरिक चाचणी</th>
          <th style="width: 18%;">लेखी परीक्षा</th>
          <th style="width: 20%;">कौशल्य चाचणी / बोनस</th>
          <th style="width: 16%;">अंतिम गुणवत्ता एकूण</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>पोलीस शिपाई (Constable)</strong></td>
          <td>५० गुण</td>
          <td>१०० गुण</td>
          <td>+५ NCC 'क' बोनस</td>
          <td class="highlight-green"><strong>एकूण: १५० / १५५</strong></td>
        </tr>
        <tr>
          <td><strong>SRPF सशस्त्र पोलीस शिपाई</strong></td>
          <td>१०० गुण</td>
          <td>१०० गुण</td>
          <td>+५ NCC 'क' बोनस</td>
          <td class="highlight-green"><strong>एकूण: २०० / २०५</strong></td>
        </tr>
        <tr>
          <td><strong>पोलीस शिपाई चालक</strong></td>
          <td>५० गुण</td>
          <td>१०० गुण</td>
          <td>५० गुण चाचणी (अर्हताकारी)</td>
          <td class="highlight-green"><strong>एकूण: १५० / १५५</strong></td>
        </tr>
        <tr>
          <td><strong>कारागृह शिपाई (Jail Warder)</strong></td>
          <td>५० गुण</td>
          <td>१०० गुण</td>
          <td>+५ NCC 'क' बोनस</td>
          <td class="highlight-green"><strong>एकूण: १५० / १५५</strong></td>
        </tr>
        <tr>
          <td><strong>बँड्समन पोलीस</strong></td>
          <td>५० गुण</td>
          <td>१०० गुण</td>
          <td>बँड चाचणी (अर्हताकारी)</td>
          <td class="highlight-green"><strong>एकूण: १५० / १५५</strong></td>
        </tr>
      </tbody>
    </table>

    <div class="section-heading">८. विषयानुसार महत्त्वाचे घटक व अभ्यासक्रम</div>
    <ul class="bullet-list">
      <li><strong>मराठी व्याकरण:</strong> वर्णविचार, संधी, नाम, सर्वनाम, विशेषण, क्रियापद, समास, प्रयोग, अलंकार, शब्दसिद्धी, म्हणी, वाक्प्रचार व समानार्थी-विरुद्धार्थी शब्द.</li>
      <li><strong>अंकगणित:</strong> संख्याज्ञान, वर्ग व वर्गमूळ, लसावि-मसावि, अपूर्णांक, टक्केवारी, सरासरी, नफा-तोटा, सरळव्याज व चक्रवाढ व्याज, काम-काळ-वेग व रेल्वे आधारित उदाहरणे.</li>
      <li><strong>बुद्धिमत्ता चाचणी:</strong> संख्या व अक्षर मालिका, विसंगत घटक, सांकेतिक भाषा, दिशाज्ञान, घड्याळ व दिनदर्शिका, नातेसंबंध, वेन आकृत्या, बैठक व्यवस्था व तर्कशुद्ध विचार.</li>
      <li><strong>सामान्य ज्ञान:</strong> महाराष्ट्राचा इतिहास, १९ व्या शतकातील समाजसुधारक, महाराष्ट्राचा भूगोल, नद्या व पर्वत, भारतीय संविधान, पंचायत राज व पोलीस प्रशासन.</li>
      <li><strong>चालू घडामोडी:</strong> राज्य व राष्ट्रीय घडामोडी, क्रीडा स्पर्धा व पुरस्कार, महत्त्वाच्या शासकीय योजना, विज्ञान-तंत्रज्ञान व नवीन शासकीय नियुक्त्या.</li>
    </ul>

    <div class="notice-box">
      <div class="notice-title">रणनीती: ६० दिवसांचे मैदानी व लेखी नियोजन</div>
      <div class="notice-text">
        • पहाटे ५:३० ते ७:३० दरम्यान धावणे व गोळाफेक सराव करून जास्तीत जास्त मैदानी गुण खेचण्याचे उद्दिष्ट ठेवा.<br>
        • दररोज ४ तास लेखी अभ्यास: १.५ तास मराठी व्याकरण, १.५ तास गणित व बुद्धिमत्ता, आणि १ तास सामान्य ज्ञान व चालू घडामोडी.
      </div>
    </div>

    <footer class="footer">
      <div class="footer-left">SignResize.in | अधिकृत महाराष्ट्र पोलीस भरती नियमावली | संदर्भ: mahapolice.gov.in</div>
      <div class="footer-right">पृष्ठ ३ पैकी ४</div>
    </footer>
  </div>

  <!-- पृष्ठ ४: कागदपत्र पडताळणी व अपलोड नियम -->
  <div class="page">
    <header class="header">
      <div class="header-title">महाराष्ट्र पोलीस भरती २०२६ - कागदपत्र पडताळणी व अपलोड नियम</div>
      <div class="header-subtitle">१२ अनिवार्य मूळ कागदपत्रे, नॉन-क्रिमीलेयर वैधता, महाआयटी फोटो-स्वाक्षरी नियम व मोफत टूल्स</div>
    </header>

    <div class="section-heading">९. अनिवार्य १२ मूळ कागदपत्रे पडताळणी (DV) चेकलिस्ट</div>
    <div class="section-paragraph">मैदानी चाचणी व अंतिम पडताळणी वेळी सर्व मूळ कागदपत्रे आणि प्रत्येकी २ साक्षांकित (Attested) छायाप्रती सोबत ठेवणे बंधनकारक आहे:</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 30%;">आवश्यक प्रमाणपत्र</th>
          <th style="width: 30%;">देणारा सक्षम अधिकारी / उद्देश</th>
          <th style="width: 40%;">महत्त्वाची वैधता व पडताळणी अट</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>१० वी (SSC) गुणपत्रिका व बोर्ड प्रमाणपत्र</strong></td>
          <td>महाराष्ट्र राज्य माध्यमिक मंडळ / मान्यताप्राप्त बोर्ड</td>
          <td>जन्मदिनांक (DOB) आणि नावाचा अधिकृत पुरावा</td>
        </tr>
        <tr>
          <td><strong>१२ वी (HSC) गुणपत्रिका व बोर्ड प्रमाणपत्र</strong></td>
          <td>मान्यताप्राप्त उच्च माध्यमिक शिक्षण मंडळ</td>
          <td>किमान शैक्षणिक पात्रता सिद्ध करणारा पुरावा</td>
        </tr>
        <tr>
          <td><strong>वय, अधिवास व राष्ट्रीयत्व दाखला (डोमिसाईल)</strong></td>
          <td>सक्षम उपविभागीय अधिकारी (SDO) / तहसीलदार</td>
          <td>महाराष्ट्राचा रहिवासी असण्याचा अनिवार्य पुरावा</td>
        </tr>
        <tr>
          <td><strong>जात प्रमाणपत्र (Caste Certificate)</strong></td>
          <td>उपविभागीय दंडाधिकारी (SDM) / सक्षम अधिकारी</td>
          <td>एससी/एसटी/ओबीसी/व्हीजेएनटी/एसबीसी आरक्षणासाठी</td>
        </tr>
        <tr>
          <td><strong>जात वैधता प्रमाणपत्र (Caste Validity)</strong></td>
          <td>विभागीय जात प्रमाणपत्र पडताळणी समिती</td>
          <td>पडताळणी वेळी उपलब्ध असणे (किंवा अर्ज पावती व हमीपत्र)</td>
        </tr>
        <tr>
          <td><strong>नॉन-क्रिमीलेयर प्रमाणपत्र (NCL)</strong></td>
          <td>सक्षम महसूल अधिकारी / तहसीलदार</td>
          <td class="highlight-red"><strong>अर्ज वर्षातील चालू आर्थिक वर्षाचे वैध असणे बंधनकारक</strong></td>
        </tr>
        <tr>
          <td><strong>आर्थिक दुर्बल घटक (EWS) प्रमाणपत्र</strong></td>
          <td>सक्षम महसूल अधिकारी (महाराष्ट्र शासन)</td>
          <td>चालू भरती आर्थिक वर्षासाठी वैध असणारा दाखला</td>
        </tr>
        <tr>
          <td><strong>NCC 'क' (C) मूळ प्रमाणपत्र</strong></td>
          <td>संबंधित युनिट कमांडिंग ऑफिसर / संचालनालय</td>
          <td>५ जादा बोनस गुणांचा लाभ मिळवण्यासाठी मूळ प्रत</td>
        </tr>
        <tr>
          <td><strong>वाहन चालवण्याचा परवाना (LMV/HMV)</strong></td>
          <td>प्रादेशिक परिवहन अधिकारी (RTO)</td>
          <td>पोलीस शिपाई चालक पदासाठी अर्ज करण्याच्या दिनांकास वैध</td>
        </tr>
        <tr>
          <td><strong>क्रीडा प्रमाणपत्र पडताळणी दाखला</strong></td>
          <td>विभागीय क्रीडा उपसंचालक</td>
          <td>अर्जाच्या अंतिम दिनांकापूर्वी अधिकृतरीत्या प्रमाणित</td>
        </tr>
        <tr>
          <td><strong>लहान कुटुंबाचे प्रतिज्ञापत्र (नमुना 'अ')</strong></td>
          <td>उमेदवाराचे स्वाक्षरीकृत स्वघोषणापत्र</td>
          <td>२८ मार्च २००५ नंतर तिसरे हयात मूल नसल्याची हमी</td>
        </tr>
        <tr>
          <td><strong>समांतर आरक्षण प्रमाणपत्रे</strong></td>
          <td>संबंधित सक्षम जिल्हा / संरक्षण प्राधिकरण</td>
          <td>होमगार्ड (३ वर्षे सेवा), माजी सैनिक, प्रकल्प/भूकंपग्रस्त दाखला</td>
        </tr>
      </tbody>
    </table>

    <div class="notice-box">
      <div class="notice-title">सावधानता इशारा: नॉन-क्रिमीलेयर (NCL) व अधिवास प्रमाणपत्र वैधता</div>
      <div class="notice-text">
        • नॉन-क्रिमीलेयर (NCL) प्रमाणपत्र ऑनलाईन अर्ज करण्याच्या शेवटच्या दिनांकास वैध असलेच पाहिजे. मुदत संपलेले प्रमाणपत्र ग्राह्य धरले जात नाही.<br>
        • उमेदवाराचे व वडिलांचे नाव १० वी गुणपत्रिका, आधार कार्ड व अधिवास दाखल्यावर तंतोतंत जुळणे बंधनकारक आहे.
      </div>
    </div>

    <div class="section-heading">१०. महाआयटी (MahaIT) पोर्टल अधिकृत डिजिटल अपलोड निकष</div>
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 25%;">दस्तऐवज प्रकार</th>
          <th style="width: 25%;">पिक्सेल आकार</th>
          <th style="width: 20%;">फाईल साईज मर्यादा</th>
          <th style="width: 30%;">फॉरमॅट व बाद होण्याचे कडक नियम</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>पासपोर्ट साईज फोटो</strong></td>
          <td>१६० × २०० पिक्सेल (किंवा १६०x२१२)</td>
          <td>५ KB ते २० KB (कमाल ५० KB)</td>
          <td>JPG फॉरमॅट, फिकट पार्श्वभूमी, चष्मा/टोपी चालणार नाही</td>
        </tr>
        <tr>
          <td><strong>उमेदवाराची स्वाक्षरी</strong></td>
          <td>२५६ × ६४ पिक्सेल (४:१ बॅनर)</td>
          <td class="highlight-green"><strong>strictly ५ KB ते २० KB</strong></td>
          <td>काळ्या बॉलपेनने स्वच्छ पांढऱ्या कागदावर स्वाक्षरी</td>
        </tr>
        <tr>
          <td><strong>स्वाक्षरीची लिपी</strong></td>
          <td>नैसर्गिक रनिंग इंग्रजी किंवा मराठी</td>
          <td>कॅपिटल (BLOCK) अक्षरे नसावी</td>
          <td class="highlight-red"><strong>संपूर्ण कॅपिटल अक्षरातील स्वाक्षरी पोर्टलवर बाद ठरते</strong></td>
        </tr>
      </tbody>
    </table>

    <div class="section-heading">११. मोफत ऑनलाइन टूल्स व सुविधा (SignResize.in)</div>
    <ul class="bullet-list">
      <li><strong>महाराष्ट्र पोलीस स्वाक्षरी व फोटो रिसायझर:</strong> https://signresize.in/maharashtra-police-signature-resize/</li>
      <li><strong>पासपोर्ट फोटो रिसायझर टूल:</strong> https://signresize.in/photo-resizer/</li>
      <li><strong>निळ्या शाईची स्वाक्षरी पांढऱ्या बॅकग्राउंडमध्ये बदला:</strong> https://signresize.in/make-signature-background-white/</li>
      <li><strong>धावण्याचा सराव वेळ प्लॅनर टूल:</strong> https://signresize.in/blog/maharashtra-police-bharti-2026-top-10-faq-guide/</li>
      <li><strong>१००% गोपनीयता:</strong> उमेदवारांचे फोटो व स्वाक्षरी कोणत्याही सर्व्हरवर जात नाहीत; सर्व रिसायझिंग ब्राउझरमध्ये सुरक्षितपणे होते.</li>
    </ul>

    <footer class="footer">
      <div class="footer-left">SignResize.in | अधिकृत महाराष्ट्र पोलीस भरती नियमावली | संदर्भ: mahapolice.gov.in</div>
      <div class="footer-right">पृष्ठ ४ पैकी ४</div>
    </footer>
  </div>

</body>
</html>`;

// Ensure output directory exists
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
const enHtmlPath = path.join(scratchDir, 'temp-handbook-en.html');
const enPdfPath = path.join(outDir, 'maharashtra-police-bharti-2026-physical-chart-and-syllabus-en.pdf');
console.log('Compiling English Edition PDF...');
renderHtmlToPdf(browserPath, englishHtml, enHtmlPath, enPdfPath);
console.log(`✓ English Edition generated: ${enPdfPath} (${fs.statSync(enPdfPath).size} bytes)`);

// Also copy English to canonical default filename for backward compatibility
const canonicalPdfPath = path.join(outDir, 'maharashtra-police-bharti-2026-physical-chart-and-syllabus.pdf');
fs.copyFileSync(enPdfPath, canonicalPdfPath);
console.log(`✓ Canonical PDF synced: ${canonicalPdfPath} (${fs.statSync(canonicalPdfPath).size} bytes)`);

// 2. Generate Marathi Edition PDF (मराठी आवृत्ती)
const mrHtmlPath = path.join(scratchDir, 'temp-handbook-mr.html');
const mrPdfPath = path.join(outDir, 'maharashtra-police-bharti-2026-physical-chart-and-syllabus-mr.pdf');
console.log('Compiling Marathi Edition PDF (मराठी आवृत्ती)...');
renderHtmlToPdf(browserPath, marathiHtml, mrHtmlPath, mrPdfPath);
console.log(`✓ Marathi Edition generated: ${mrPdfPath} (${fs.statSync(mrPdfPath).size} bytes)`);

// Sync to dist/downloads if dist exists
const distDir = path.resolve('dist/downloads');
if (fs.existsSync(distDir)) {
  fs.copyFileSync(enPdfPath, path.join(distDir, 'maharashtra-police-bharti-2026-physical-chart-and-syllabus-en.pdf'));
  fs.copyFileSync(canonicalPdfPath, path.join(distDir, 'maharashtra-police-bharti-2026-physical-chart-and-syllabus.pdf'));
  fs.copyFileSync(mrPdfPath, path.join(distDir, 'maharashtra-police-bharti-2026-physical-chart-and-syllabus-mr.pdf'));
  console.log(`✓ Synchronized all PDFs to dist/downloads/`);
}
