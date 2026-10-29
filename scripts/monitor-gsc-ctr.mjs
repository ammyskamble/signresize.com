// scripts/monitor-gsc-ctr.mjs
// Automated Google Search Console CTR Diagnostic & Monitoring Tool

import fs from 'fs';
import path from 'path';

// Baseline established on Oct 29, 2026
const BASELINE = {
  overallCTR: 2.44,
  toolCTR: 6.53,
  blogCTR: 0.68,
  targets: {
    '/blog/maharashtra-police-bharti-2026-top-10-faq-guide/': { baseImp: 5299, baseClicks: 14, baseCTR: 0.26 },
    '/blog/wbpsc-miscellaneous-clerkship-form-fill-up-photo-signature-resize-guide/': { baseImp: 4797, baseClicks: 32, baseCTR: 0.67 },
    '/blog/blue-ink-vs-black-ink-signature-guidelines-govt-exams/': { baseImp: 2523, baseClicks: 20, baseCTR: 0.79 },
    '/blog/mp-police-constable-2026-vacancy-syllabus-physical-chart-salary/': { baseImp: 1873, baseClicks: 11, baseCTR: 0.59 },
    '/blog/uppsc-ro-aro-2026-top-10-faq-aspirants/': { baseImp: 1358, baseClicks: 2, baseCTR: 0.15 },
    '/rrb-ntpc-undergraduate-document-guide/': { baseImp: 820, baseClicks: 2, baseCTR: 0.24 },
  }
};

function parseCSV(content) {
  const lines = content.trim().split(/\r?\n/);
  const parseLine = (text) => {
    const res = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') inQuotes = !inQuotes;
      else if (c === ',' && !inQuotes) {
        res.push(cur.trim());
        cur = '';
      } else {
        cur += c;
      }
    }
    res.push(cur.trim());
    return res;
  };

  const headers = parseLine(lines[0]);
  return lines.slice(1).map(line => {
    const row = parseLine(line);
    const obj = {};
    headers.forEach((h, i) => {
      obj[h] = row[i];
    });
    return obj;
  });
}

function findGscDir() {
  const defaultDir = 'C:/Users/Admin/.gemini/antigravity/brain/70eef820-7853-4644-ab89-28be15e2046c/gsc_export';
  if (fs.existsSync(path.join(defaultDir, 'Pages.csv'))) return defaultDir;
  if (fs.existsSync('gsc_export/Pages.csv')) return 'gsc_export';
  return null;
}

const gscDir = findGscDir();
if (!gscDir) {
  console.log('⚠️ No GSC export directory found. Place unzipped GSC files in "gsc_export/" or pass path as argument.');
  process.exit(0);
}

console.log('======================================================');
console.log('       SIGNRESIZE.IN - SEARCH CONSOLE CTR AUDIT       ');
console.log('======================================================\n');
console.log(`Analyzing GSC data from: ${gscDir}\n`);

const pages = parseCSV(fs.readFileSync(path.join(gscDir, 'Pages.csv'), 'utf-8'));

let totalImp = 0, totalClk = 0;
let blogImp = 0, blogClk = 0;
let toolImp = 0, toolClk = 0;

pages.forEach(p => {
  const url = p['Top pages'] || p.Page || '';
  const clk = parseInt(p.Clicks || 0);
  const imp = parseInt(p.Impressions || 0);
  totalImp += imp;
  totalClk += clk;
  if (url.includes('/blog/')) {
    blogImp += imp;
    blogClk += clk;
  } else if (url.includes('resize') || url.endsWith('.in/')) {
    toolImp += imp;
    toolClk += clk;
  }
});

const currentOverallCTR = ((totalClk / totalImp) * 100).toFixed(2);
const currentToolCTR = ((toolClk / toolImp) * 100).toFixed(2);
const currentBlogCTR = ((blogClk / blogImp) * 100).toFixed(2);

console.log('--- 📊 MACRO CTR BREAKDOWN ---');
console.log(`Site Overall CTR : ${currentOverallCTR}% (Baseline: ${BASELINE.overallCTR}%) [${totalClk} clicks / ${totalImp} imp]`);
console.log(`Tool Pages CTR   : ${currentToolCTR}% (Baseline: ${BASELINE.toolCTR}%) [${toolClk} clicks / ${toolImp} imp]`);
console.log(`Blog Articles CTR: ${currentBlogCTR}% (Baseline: ${BASELINE.blogCTR}%) [${blogClk} clicks / ${blogImp} imp]\n`);

console.log('--- 🎯 TRACKING TARGET URLS (BASELINE COMPARISON) ---');
Object.keys(BASELINE.targets).forEach(key => {
  const base = BASELINE.targets[key];
  const pageMatch = pages.find(p => (p['Top pages'] || p.Page || '').includes(key));
  if (pageMatch) {
    const curClk = parseInt(pageMatch.Clicks || 0);
    const curImp = parseInt(pageMatch.Impressions || 0);
    const curCTR = ((curClk / curImp) * 100).toFixed(2);
    const deltaCTR = (curCTR - base.baseCTR).toFixed(2);
    console.log(`URL: ${key}`);
    console.log(`  Current : ${curCTR}% CTR (${curClk} clicks / ${curImp} imp)`);
    console.log(`  Baseline: ${base.baseCTR}% CTR (${base.baseClicks} clicks / ${base.baseImp} imp)`);
    console.log(`  Status  : ${deltaCTR >= 0 ? '🟢 +' + deltaCTR + '%' : '🔴 ' + deltaCTR + '%'}\n`);
  } else {
    console.log(`URL: ${key} -> [No current data in export]\n`);
  }
});

console.log('--- ⚠️ CTR OPPORTUNITY WATCHLIST (Impressions > 500, CTR < 1.0%) ---');
const leakPages = pages.filter(p => {
  const imp = parseInt(p.Impressions || 0);
  const clk = parseInt(p.Clicks || 0);
  const ctr = (clk / imp) * 100;
  return imp >= 500 && ctr < 1.0;
}).sort((a, b) => parseInt(b.Impressions) - parseInt(a.Impressions));

leakPages.forEach(p => {
  const url = p['Top pages'] || p.Page;
  const imp = parseInt(p.Impressions);
  const clk = parseInt(p.Clicks);
  const ctr = ((clk / imp) * 100).toFixed(2);
  const pos = p.Position;
  console.log(`• ${url}`);
  console.log(`  ${imp} imp | ${clk} clicks | CTR: ${ctr}% | Avg Pos: ${pos}`);
});

