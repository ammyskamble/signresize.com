import csv
import html
import io
import json
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SOURCE = Path(r'D:/Testing/Tools/sign resize/issue/signresize.in-Performance-on-Search-2026-10.zip')
DATA = {}
with zipfile.ZipFile(SOURCE) as archive:
    for name in ['Chart.csv', 'Queries.csv', 'Pages.csv', 'Countries.csv', 'Devices.csv', 'Search appearance.csv', 'Filters.csv']:
        raw = archive.read(name)
        (ROOT / name).write_bytes(raw)
        rows = list(csv.DictReader(io.StringIO(raw.decode('utf-8-sig'))))
        for row in rows:
            for key in ['Clicks', 'Impressions']:
                if key in row:
                    row[key] = int(row[key])
            if 'Position' in row:
                row['Position'] = float(row['Position'])
        DATA[name] = rows

QUERIES = DATA['Queries.csv']
PAGES = DATA['Pages.csv']
LOOKUP = {r['Top queries']: r for r in QUERIES}
PAGE_LOOKUP = {r['Top pages']: r for r in PAGES}
assert len(LOOKUP) == len(QUERIES)

def summary(rows):
    c = sum(r['Clicks'] for r in rows)
    i = sum(r['Impressions'] for r in rows)
    return {'rows': len(rows), 'clicks': c, 'impressions': i,
            'ctr': round(100*c/i, 4) if i else None,
            'position_approx': round(sum(r['Position']*r['Impressions'] for r in rows)/i, 4) if i else None}

# Targets below are editorial recommendations, not observed query/page joins.
GROUPS = [
    ('1 · Protect and grow', 'Coast Guard photo and signature', '/indian-coast-guard-signature-resize/',
     ['indian coast guard photo and signature size', 'icg photo format', 'indian coast guard photo upload', 'indian coast guard photo format'],
     'Keep the combined photo/signature answer prominent and link the appropriate tools. Verify cycle-specific rules and physical name/date instructions against the official notice. Preserve the URL already attracting clicks.'),
    ('1 · Grow now', 'WBPSC and Clerkship signatures', '/wbpsc-signature-resize/',
     ['wbpsc clerkship signature size', 'wbpsc signature size', 'psc clerkship signature size', 'wbpsc signature resize', 'wbpsc signature size in cm', 'psc clerkship signature format', 'wbpsc clerkship signature format', 'psc clerkship signature resize', 'wbpsc clerkship signature', 'wbpsc clerkship photo and signature resize', 'wbpsc photo and signature resize', 'psc clerkship form fill up photo and signature size'],
     'Use one signature tool page for size, format and resize variants. Add a concise Clerkship-specific section with reviewed source links. Keep form-fill instructions in the existing guide and link directly to the tool.'),
    ('1 · Grow now', 'BPSC TRE 4 signature', '/bpsc-signature-resize/',
     ['bpsc tre 4.0 signature size', 'bpsc tre 4 signature size', 'bpsc tre 4 signature resizer', 'bpsc tre 4 signature resize', 'bpsc tre 4.0 signature resize', 'signature resize for bpsc tre 4.0', 'bpsc tre 4.0 photo and signature size'],
     'Add a reviewed TRE 4.0 section and preset entry to the existing BPSC page. Cover size, format and upload errors together. Do not publish separate pages for 4 versus 4.0 spellings.'),
    ('1 · Grow now', 'NTPC signature resizing', '/rrb-ntpc-signature-resize/',
     ['ntpc signature resize', 'signature resize for ntpc recruitment', 'signature resize for ntpc', 'rrb ntpc ug signature size', 'rrb ntpc signature size'],
     'Make the NTPC-specific tool the intended target for NTPC resizing. Link from the CEN and undergraduate document guides. Confirm the actual ranking URL with a query/page export before redirecting anything.'),
    ('1 · Protect and grow', 'IIT JAM signatures', '/iit-jam-signature-resize/',
     ['iit jam signature resize', 'jam signature resize', 'jam signature'],
     'Retain and improve the existing page. Verify the relevant cycle, explain output requirements and link to the photo tool. Current query counts are small but the page already attracts meaningful clicks.'),
    ('2 · Grow next', 'WBPSC photos', '/wbpsc-photo-resize/',
     ['wbpsc photo resize', 'psc clerkship form fill up photo size', 'wbpsc clerkship photo', 'psc clerkship photo resizer'],
     'Keep photo intent separate from signature intent. Review dimensions and ink/background claims, then cross-link from the signature page and Clerkship guide.'),
    ('2 · Grow next', 'RRB NTPC undergraduate documents', '/rrb-ntpc-undergraduate-document-guide/',
     ['rrb ntpc undergraduate document', 'rrb ntpc document upload', 'rrb ntpc ug documents required', 'ntpc document upload', 'rrb ntpc undergraduate document required', 'ntpc ug documents required', 'documents required for ntpc under graduate', 'ntpc under graduate documents', 'rrb ntpc ug document', 'rrb ntpc undergraduate documents'],
     'Improve the existing checklist page around undergraduate documents and upload steps. Its 820 page impressions produced only two clicks. Inspect queries and search appearance before assuming the title is the sole cause.'),
    ('2 · Grow next', 'IBPS signatures', '/ibps-signature-resize/',
     ['ibps signature resizer', 'ibps signature resize online', 'ibps sign resizer', 'ibps photo signature resizer'],
     'Improve the existing IBPS tool and link it from banking document guidance. Keep handwritten declaration and thumb requirements distinct.'),
    ('2 · Grow next', 'APPSC signatures', '/appsc-signature-resize/',
     ['appsc signature resize'],
     'The exact query averages 10.43 while the page has 22 clicks across all queries. Improve this existing page and its internal links; the two averages describe different populations.'),
    ('2 · Grow next', 'RRB general signature', '/rrb-signature-resize/',
     ['rrb signature resizer', 'rrb signature resize', 'rrb sign resizer', 'rrb signature size', 'rrb signature size 60 140 pixels'],
     'Keep generic RRB requirements and links to recruitment-specific presets here. Confirm query-to-page splits before changing the relationship with the NTPC page.'),
    ('3 · Small experiment', 'Exact dimensions and upload errors', '/',
     ['signature must be max width 450px and max height 200px.', 'signature must be max width 450px and max height 200px', 'signature 3.5x1.5', 'signature 3.5x1 5 cm'],
     'Add custom-dimension examples to the existing tool help. The error queries do not name an exam, so do not infer WBPSC or treat maximum dimensions as mandatory exact dimensions. Keep cm/pixel conversions consistent with DPI.'),
    ('3 · Small experiment', 'Thumb impression compression', '/thumb-impression-resize/',
     ['thumb compressor', 'thumb impression compressor', 'thumb resizer', 'thumb impression resizer'],
     'Clarify the existing tool title and controls around compression and selected form limits. Small impression counts justify a bounded improvement, not a large content expansion.'),
    ('3 · Small experiment', 'White signature background', '/make-signature-background-white/',
     ['sign background white', 'make sign background white', 'make signature background white online', 'add white background to signature', 'white background signature', 'make background white for signature'],
     'Maintain this distinct cleanup intent and link the result to resizing. These are small first-page signals, not established large demand.'),
    ('3 · Small experiment', 'IIT JAM photos', '/iit-jam-photo-resize/',
     ['iit jam photo requirements', 'jam photo resizer', 'iit jam photo resizer', 'photo resizer for iit jam'],
     'Improve the existing photo page and its signature-page link. Validate current-cycle guidance before promoting it.'),
    ('Longer term', 'Broad signature resizing', '/',
     ['signature resize', 'resize signature', 'signature resizer', 'resize sign', 'photo and signature resize'],
     'Keep the homepage as the broad target. Resolve the verified conflicting guidance, simplify the first upload task and link naturally from successful relevant tool pages. Treat this as longer-term work because the main exact terms average positions 48–70.'),
    ('Longer term', 'Signature 10–20 KB', '/resize-signature-to-10kb-20kb/',
     ['signature resize 10 to 20 kb'],
     'Keep the existing page as the intended size-specific target. Eight query impressions are insufficient to justify heavy investment; query-to-page mapping remains unknown.'),
    ('Longer term', 'SSC broad signature resizing', '/ssc-signature-resize/',
     ['ssc signature resize'],
     'Correct requirements consistently across the tool and homepage. The exact query averages 42.47; treat this as a build-up target, while separately maintaining useful live-photo troubleshooting content.'),
]

assigned = {}
focus = []
for priority, cluster, target, terms, action in GROUPS:
    assert 'https://signresize.in' + target in PAGE_LOOKUP, target
    for term in terms:
        assert term in LOOKUP, term
        assert term not in assigned, term
        assigned[term] = cluster
        focus.append({**LOOKUP[term], 'priority': priority, 'cluster': cluster,
                      'recommended_target': 'https://signresize.in' + target, 'action': action})

def topic(q):
    q = q.lower()
    if q in assigned:
        return assigned[q]
    if q in {'ha', 'yes', 'no', 'ok'}:
        return 'Ambiguous terms: do not target'
    if re.search(r'signresize|signature\s*resize\.in', q) or q == 'sign resize':
        return 'Brand-like or ambiguous navigation'
    if re.search(r'police|bharti|भर्ती|पोलीस|पोलिस', q):
        return 'Police and recruitment information'
    if re.search(r'\bro\b|\baro\b|eligibility|syllabus|salary|vacancy|exam pattern', q):
        return 'Other exam information'
    if re.search(r'sign|photo|image|resize|compress|thumb|pixel|dpi|kb|discrepan', q):
        return 'Other image and document tasks'
    return 'Other or ambiguous queries'

totals = {n: summary(rows) for n, rows in DATA.items() if rows and 'Clicks' in rows[0]}
assert totals['Chart.csv']['clicks'] == totals['Countries.csv']['clicks'] == totals['Devices.csv']['clicks'] == 1012
assert totals['Chart.csv']['impressions'] == totals['Countries.csv']['impressions'] == totals['Devices.csv']['impressions'] == 41415
overview = {
    'period': [DATA['Chart.csv'][0]['Date'], DATA['Chart.csv'][-1]['Date']],
    'totals': totals, 'first14': summary(DATA['Chart.csv'][:14]), 'last14': summary(DATA['Chart.csv'][14:]),
    'query_click_coverage_percent': round(120/1012*100, 2),
    'query_impression_coverage_percent': round(6751/41415*100, 2),
    'india_click_share_percent': round(1006/1012*100, 2),
    'mobile_click_share_percent': round(672/1012*100, 2),
    'focus_keywords': len(focus), 'focus_groups': len(GROUPS),
}
(ROOT/'analysis-summary.json').write_text(json.dumps(overview, indent=2), encoding='utf-8')
(ROOT/'keyword-mapping.json').write_text(json.dumps(focus, ensure_ascii=False, indent=2), encoding='utf-8')

def esc(x):
    return html.escape(str(x))

def table(headers, rows, searchable=False):
    return '<div class="scroll"><table'+(' id="all-queries"' if searchable else '')+'><thead><tr>'+''.join('<th>'+esc(h)+'</th>' for h in headers)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+esc(v)+'</td>' for v in r)+'</tr>' for r in rows)+'</tbody></table></div>'

def perfrows(rows, name):
    return [[r[name], r['Clicks'], f"{r['Impressions']:,}", r['CTR'], f"{r['Position']:.2f}"] for r in rows]

content = '''<header><p class="eyebrow">SIGNRESIZE · SEARCH CONSOLE REVIEW</p><h1>Focus on exam-specific signature tools</h1><p>29 September–26 October 2026 · Web search · Prepared 28 October 2026</p><p class="lead">Grow WBPSC, BPSC TRE 4 and NTPC queries, protect Coast Guard and IIT JAM traffic, and retain broad signature resizing as a longer-term homepage target.</p></header>
<section><h2>What the export establishes</h2><p>All seven CSVs were analyzed: 28 daily rows, 1,000 query rows, 342 page rows, 85 countries, three devices, one search-appearance row and the filter settings.</p>'''
content += table(['Metric','Result'], [
    ['Property clicks / impressions','1,012 / 41,415'], ['Calculated property CTR',f"{totals['Chart.csv']['ctr']:.2f}%"],
    ['Exact “signature resize”','1 click · 23 impressions · average position 63.96'],
    ['First 14 days → last 14 days','242 → 770 clicks; 9,928 → 31,487 impressions'],
    ['India share of property clicks',f"{overview['india_click_share_percent']}%"],
    ['Mobile share of property clicks',f"{overview['mobile_click_share_percent']}%"],
    ['Visible query coverage',f"{overview['query_click_coverage_percent']}% of clicks; {overview['query_impression_coverage_percent']}% of impressions"],
])
content += '''<p>The last half gained 218.2% more clicks and 217.2% more impressions than the first half. Calculated CTR stayed near 2.44–2.45%. These are adjacent halves of one export, not a prior-month comparison, and there is no query-level daily history to attribute the growth.</p>
<p class="note">The query file has exactly 1,000 rows and accounts for only 120 clicks and 6,751 impressions. Anonymization and the export row cap can omit queries; this export cannot separate their effects. Impressions are exposure earned by this site, not market search volume. Average positions combine dates, countries and devices, and are not current fixed ranks. Low-count terms are unstable.</p></section>'''
content += '<section><h2>Priority keyword map</h2><p>Priority reflects product fit, existing page traffic, visible query exposure and proximity to the top results. No keyword-difficulty, search-volume, revenue or conversion figures were available. Targets are recommended destinations; the separate query and page CSVs do not establish which URL ranks for each query.</p>'
for priority, cluster, target, terms, action in GROUPS:
    content += '<article><p class="eyebrow">'+esc(priority)+'</p><h3>'+esc(cluster)+'</h3><p>Recommended existing page: <a href="https://signresize.in'+esc(target)+'">'+esc(target)+'</a></p>'
    content += table(['Exact exported keyword','Clicks','Impressions','CTR','Avg position'],perfrows([LOOKUP[t] for t in terms], 'Top queries'))
    content += '<p><b>Action:</b> '+esc(action)+'</p></article>'
content += '</section><section><h2>Page-level evidence and CTR investigations</h2><p>These page totals include all reported searches for each URL. Do not attribute them only to the visible keywords above. Low CTR at a good average position is a reason to inspect intent and search results, not proof that a title rewrite will fix it.</p>'
keypaths=['/indian-coast-guard-signature-resize/','/wbpsc-signature-resize/','/','/iit-jam-signature-resize/','/bpsc-signature-resize/','/appsc-signature-resize/','/rrb-ntpc-signature-resize/','/rrb-ntpc-undergraduate-document-guide/','/blog/wbpsc-miscellaneous-clerkship-form-fill-up-photo-signature-resize-guide/','/blog/blue-ink-vs-black-ink-signature-guidelines-govt-exams/','/blog/maharashtra-police-bharti-2026-top-10-faq-guide/','/blog/mp-police-constable-2026-vacancy-syllabus-physical-chart-salary/','/blog/ssc-live-photo-webcam-guidelines-troubleshooting-2026/']
content += table(['Existing URL','Clicks','Impressions','CTR','Avg position'],perfrows([PAGE_LOOKUP['https://signresize.in'+p] for p in keypaths],'Top pages'))
content += '''<p>The Coast Guard tool has 394 clicks and the WBPSC tool has 119. Protect these working destinations. The WBPSC guide has 4,797 impressions but 32 clicks; the NTPC undergraduate guide has 820 impressions and two clicks. Improve these guides’ task-specific answers and tool links after checking the actual queries.</p></section>
<section><h2>Where to limit new effort</h2><ul><li><b>Broad “signature resize”:</b> keep improving the homepage, but its position 63.96 makes it a longer-term target. The homepage’s all-query position 10.44 does not mean this exact keyword ranks at 10.</li><li><b>Police physical tests, syllabus, salary and eligibility:</b> retain useful existing guides, but do not let high impressions drive the main tool roadmap. For example, “1600 meter police bharti time” has 162 impressions and zero clicks at 7.88. This is informational demand; tool usage and revenue are unknown.</li><li><b>Ambiguous and brand-like queries:</b> do not build pages for “ha” or “yes”. Treat “sign resize” as ambiguous and “signature resize.in” as potentially another brand’s navigation. Neither establishes strong performance for “signature resize”.</li><li><b>International expansion:</b> India accounts for 1,006 of 1,012 clicks. Maintain existing international pages but prioritize India in the next optimization cycle.</li><li><b>Year-specific variants:</b> verify application cycles and official sources before updating year labels. Do not create duplicate pages for every spelling, date or punctuation variant.</li></ul></section>
<section><h2>Devices, countries and search appearance</h2>'''
content += table(['Device','Clicks','Impressions','CTR','Avg position'],perfrows(DATA['Devices.csv'],'Device'))
content += '<p>Mobile supplies 32,642 impressions and 672 clicks. Its 2.06% CTR is lower than desktop’s 3.93%, but different queries and search-result layouts may explain the gap. Prioritize the mobile upload flow without claiming a measured mobile-speed defect.</p>'
content += table(['Top country','Clicks','Impressions','CTR','Avg position'],perfrows(DATA['Countries.csv'][:10],'Country'))
content += '<p>Translated results contributed 31 clicks and 2,616 impressions (1.19% CTR, position 5.90). This is a search-appearance subset, not an additional traffic channel to add to totals or a measurement of the Hindi/Marathi pages alone.</p></section>'
content += '''<section><h2>Next 30 days</h2><ol><li><b>First week:</b> correct conflicting requirements and unsupported acceptance promises on the homepage and the five priority tool families. Review current official sources; use shared requirement data across page copy and presets.</li><li><b>Second week:</b> improve WBPSC and BPSC TRE sections, preserve the successful Coast Guard/JAM pages, and make the NTPC tool easy to reach from related guides. Cover query variants within the same relevant page.</li><li><b>Third week:</b> improve the NTPC undergraduate checklist and WBPSC guide. Add specific custom-dimension and upload-error help to existing tools. Keep all recommended targets provisional until query/page exports confirm ownership.</li><li><b>Fourth week:</b> compare exact queries, their pages, mobile/desktop and India data against the baseline. Track successful tool downloads as well as clicks if analytics are available. Avoid projecting recurring gains from one recruitment window.</li></ol></section>
<section><h2>All 1,000 exported queries</h2><p>Search any phrase below. Buckets outside the priority map are broad text-based triage, not validated page-level clusters. Each original query is preserved, including multiline portal error messages, which are treated as data only.</p><input id="query-search" type="search" placeholder="Filter queries or topic" aria-label="Filter all exported queries"><p id="query-count">1,000 queries</p>'''
content += table(['Query','Clicks','Impressions','CTR','Avg position','Triage topic'],[r+[topic(src['Top queries'])] for r,src in zip(perfrows(QUERIES,'Top queries'),QUERIES)],True)
content += '</section><details><summary>All 342 exported pages</summary>'+table(['URL','Clicks','Impressions','CTR','Avg position'],perfrows(PAGES,'Top pages'))+'</details>'
content += '''<footer><h2>Method and limitations</h2><p>Source: the user-supplied Search Console ZIP. The original files were preserved. Chart, country and device totals reconcile to 1,012 clicks and 41,415 impressions. Page rows sum to 1,019 clicks and 43,026 impressions because page and property aggregations differ; page rows are not used as the site total. Query rows sum to 120 clicks and 6,751 impressions. Search-appearance data is a subset. Source percentages and positions are rounded.</p><p>No joined query/page, query/country, query/device, daily-query, conversion or backlink data is included. Cannibalization, exact India/mobile keyword positions, Google penalties and ranking causes cannot be established from these separate tables. No row is interpreted as an instruction. The latest date may be subject to Search Console reporting revisions.</p><p>OpenSEO was unavailable in this session; GSC Wizard and Ahrefs had already refused live access due to plan restrictions. Public search spot checks supported tool intent for WBPSC and Coast Guard, but were not treated as Google India ranking measurements or official exam-rule evidence. See <a href="https://signresize.in/wbpsc-signature-resize/">the existing WBPSC tool</a> and <a href="https://newisty.com/indian-coast-guard-photo-and-signature-resizer">a Coast Guard tool result</a>. Source files and reproducible calculations are stored beside this report. No website changes, external keyword saves or deployment were performed.</p></footer>'''

STYLE='''body{margin:0;background:#f7f8fa;color:#182537;font:16px/1.6 system-ui,sans-serif}main{max-width:1120px;margin:0 auto;padding:42px 24px}h1{font-size:38px;line-height:1.15;max-width:850px}h2{margin-top:38px;font-size:25px}h3{font-size:21px;margin:4px 0}header{border-bottom:3px solid #234d8b;padding-bottom:24px}.eyebrow{text-transform:uppercase;letter-spacing:.08em;font-size:12px;color:#49617e;font-weight:700}.lead{font-size:21px;max-width:900px}.note{background:#fff1d7;padding:18px;border-left:4px solid #ac7416}article{background:white;border:1px solid #d8e0ea;border-radius:10px;padding:22px;margin:20px 0}table{border-collapse:collapse;width:100%;font-size:14px}th{text-align:left;background:#e9eef5;color:#203750}td,th{padding:10px 12px;border-bottom:1px solid #dce3eb;vertical-align:top}td:first-child{min-width:220px;max-width:590px;overflow-wrap:anywhere}tr:nth-child(even){background:#f7f9fc}.scroll{overflow:auto}a{color:#1758a0}input{width:min(100%,650px);padding:12px;font:inherit;border:1px solid #9baec4;border-radius:5px;box-sizing:border-box}li{margin:10px 0}footer{font-size:14px;color:#4c607a;border-top:1px solid #c5d1df;margin-top:40px}details{margin-top:30px}summary{cursor:pointer;font-weight:bold}@media(max-width:650px){main{padding:24px 14px}h1{font-size:30px}article{padding:14px}}'''
SCRIPT="""document.getElementById('query-search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();let n=0;document.querySelectorAll('#all-queries tbody tr').forEach(r=>{r.hidden=!r.textContent.toLowerCase().includes(q);if(!r.hidden)n++});document.getElementById('query-count').textContent=n.toLocaleString()+' queries'});"""
(ROOT/'keyword-focus-report.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SignResize keyword priorities</title><style>'+STYLE+'</style><main>'+content+'</main><script>'+SCRIPT+'</script></html>',encoding='utf-8')
print(json.dumps(overview, indent=2))
print('Report written:', ROOT/'keyword-focus-report.html')
