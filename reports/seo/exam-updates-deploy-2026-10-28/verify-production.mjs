import assert from 'node:assert/strict';
import {readFile,writeFile} from 'node:fs/promises';
const routes=['','wbpsc-signature-resize','wbpsc-photo-resize','bpsc-signature-resize','bpsc-tre-hindi-signature-resize','bpsc-tre-english-signature-resize','indian-coast-guard-signature-resize','rrb-ntpc-signature-resize','rrb-ntpc-undergraduate-document-guide','iit-jam-signature-resize','iit-jam-photo-resize'];
const results=await Promise.all(routes.map(async route=>{
 const url=`https://signresize.in/${route ? route+'/' : ''}`;
 const response=await fetch(url,{signal:AbortSignal.timeout(30000),headers:{'Cache-Control':'no-cache'}});
 const html=await response.text();
 const local=await readFile(`dist/${route ? route+'/' : ''}index.html`,'utf8');
 const title=(html.match(/<title>([\s\S]*?)<\/title>/)||[])[1];
 const localTitle=(local.match(/<title>([\s\S]*?)<\/title>/)||[])[1];
 assert.equal(response.status,200,url);
 assert.equal(title,localTitle,`${url}: deployed title differs from built version`);
 assert.equal((html.match(/<h1\b/g)||[]).length,1,`${url}: H1 count`);
 const canonical=(html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)||html.match(/<link\b[^>]*href="([^"]+)"[^>]*rel="canonical"/i)||[])[1];
 assert.equal(canonical,url,`${url}: canonical`);
 if(route && !route.includes('document-guide'))assert.ok(html.includes('id="exam-requirements-heading"'),`${url}: missing updated guidance`);
 const localScripts=[...local.matchAll(/<script\b[^>]*src="([^"]+)"/g)].map(m=>m[1]).filter(s=>s.startsWith('/_astro/'));
 for(const asset of localScripts)assert.ok(html.includes(asset),`${url}: old script reference ${asset}`);
 return {url,status:response.status,title,canonical,localScripts};
}));
const asset=[...new Set(results.flatMap(r=>r.localScripts))][0];
if(asset){const r=await fetch('https://signresize.in'+asset,{signal:AbortSignal.timeout(30000)});assert.equal(r.status,200,'Deployed script asset');}
await writeFile('reports/seo/exam-updates-deploy-2026-10-28/production-check.json',JSON.stringify({checkedAt:new Date().toISOString(),results,asset},null,2));
console.log(JSON.stringify(results.map(({url,status,title})=>({url,status,title})),null,2));
