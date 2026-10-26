async function run() {
  const res = await fetch('http://localhost:4321/blog/wb-police-constable-si-2026-physical-test-syllabus-photo-signature-guide/');
  const html = await res.text();
  const m = html.match(/<ol[^>]*id="desktop-toc-list"[\s\S]*?<\/ol>/i);
  console.log(m ? m[0] : 'not found');
}
run();
