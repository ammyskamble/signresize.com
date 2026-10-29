const fs = require('fs');
const path = 'C:/Users/Admin/.gemini/antigravity/brain/70eef820-7853-4644-ab89-28be15e2046c/gsc_export';

function parseCSV(content) {
  const lines = content.trim().split(/\r?\n/);
  const parseLine = (text) => {
    const res = [];
    let cur = '';
    let inQuotes = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i];
      if (c === '"') {
        inQuotes = !inQuotes;
      } else if (c === ',' && !inQuotes) {
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

console.log('=== FILTERS ===');
console.log(fs.readFileSync(path + '/Filters.csv', 'utf-8'));

console.log('=== DEVICES ===');
console.log(fs.readFileSync(path + '/Devices.csv', 'utf-8'));

console.log('=== SEARCH APPEARANCE ===');
console.log(fs.readFileSync(path + '/Search appearance.csv', 'utf-8'));

const chart = parseCSV(fs.readFileSync(path + '/Chart.csv', 'utf-8'));
let totalClicks = 0, totalImpressions = 0;
chart.forEach(r => {
  totalClicks += parseInt(r.Clicks || 0);
  totalImpressions += parseInt(r.Impressions || 0);
});
console.log('=== OVERALL TOTALS (Chart.csv) ===');
console.log(`Clicks: ${totalClicks}, Impressions: ${totalImpressions}, Overall CTR: ${((totalClicks/totalImpressions)*100).toFixed(2)}%`);
console.log('Chart days count:', chart.length);
if (chart.length > 0) {
  console.log('First day:', chart[0]);
  console.log('Last day:', chart[chart.length - 1]);
}

const pages = parseCSV(fs.readFileSync(path + '/Pages.csv', 'utf-8'));
console.log('\n=== TOP PAGES BY IMPRESSIONS ===');
const sortedPages = pages.map(p => ({
  page: p['Top pages'] || p.Page,
  clicks: parseInt(p.Clicks || 0),
  impressions: parseInt(p.Impressions || 0),
  ctr: p.CTR,
  position: parseFloat(p.Position || 0)
})).sort((a, b) => b.impressions - a.impressions);

console.log(sortedPages.slice(0, 15));

const queries = parseCSV(fs.readFileSync(path + '/Queries.csv', 'utf-8'));
console.log('\n=== TOP QUERIES BY IMPRESSIONS ===');
const sortedQueries = queries.map(q => ({
  query: q['Top queries'] || q.Query,
  clicks: parseInt(q.Clicks || 0),
  impressions: parseInt(q.Impressions || 0),
  ctr: q.CTR,
  position: parseFloat(q.Position || 0)
})).sort((a, b) => b.impressions - a.impressions);

console.log(sortedQueries.slice(0, 20));

console.log('\n=== QUERIES WITH POSITION <= 10 (PAGE 1) BY IMPRESSIONS ===');
const p1Queries = sortedQueries.filter(q => q.position <= 10 && q.impressions >= 10);
console.log(p1Queries.slice(0, 25));

console.log('\n=== POSITION DISTRIBUTION OF IMPRESSIONS ===');
let impPos1to3 = 0, impPos4to10 = 0, impPos11to20 = 0, impPos20plus = 0;
let clkPos1to3 = 0, clkPos4to10 = 0, clkPos11to20 = 0, clkPos20plus = 0;
queries.forEach(q => {
  const pos = parseFloat(q.Position || 0);
  const imp = parseInt(q.Impressions || 0);
  const clk = parseInt(q.Clicks || 0);
  if (pos <= 3.5) {
    impPos1to3 += imp;
    clkPos1to3 += clk;
  } else if (pos <= 10.5) {
    impPos4to10 += imp;
    clkPos4to10 += clk;
  } else if (pos <= 20.5) {
    impPos11to20 += imp;
    clkPos11to20 += clk;
  } else {
    impPos20plus += imp;
    clkPos20plus += clk;
  }
});
console.log(`Pos 1-3: Imp=${impPos1to3}, Clk=${clkPos1to3}, CTR=${((clkPos1to3/impPos1to3)*100).toFixed(2)}%`);
console.log(`Pos 4-10: Imp=${impPos4to10}, Clk=${clkPos4to10}, CTR=${((clkPos4to10/impPos4to10)*100).toFixed(2)}%`);
console.log(`Pos 11-20: Imp=${impPos11to20}, Clk=${clkPos11to20}, CTR=${((clkPos11to20/impPos11to20)*100).toFixed(2)}%`);
console.log(`Pos >20: Imp=${impPos20plus}, Clk=${clkPos20plus}, CTR=${((clkPos20plus/impPos20plus)*100).toFixed(2)}%`);
