// Fetch primary-source text for human review; HTTP success never implies inclusion.
import { mkdir, readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cache = path.join(root, 'audit/source-cache');
await mkdir(cache, { recursive: true });
// The 2026-10-29 audit has a fixed baseline; rebuilding the catalog must not alter it.
const records = JSON.parse(await readFile(path.join(root, 'audit/evidence-review-2026-10-29.json'), 'utf8')).records;
const urls = [...new Set(records.flatMap(r => [...Object.values(r.originalLinks), r.evidenceUrl].filter(Boolean)))];
const decode = s => s.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([a-f\d]+);/gi, (_, n) => String.fromCodePoint(parseInt(n,16))).replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const text = s => decode(s.replace(/<(script|style|nav|footer|svg)[\s\S]*?<\/\1>/gi, ' ').replace(/<\/(p|div|h\d|li|section|tr|blockquote)>/gi, '\n').replace(/<[^>]*>/g, ' ')).replace(/[ \t\r]+/g, ' ').replace(/\n\s*\n/g,'\n').trim();
let next = 0, finished = 0;
async function worker() {
  while (next < urls.length) {
    const i = next++, url = urls[i];
    const file = path.join(cache, `${String(i).padStart(4,'0')}.json`);
    try { const old = JSON.parse(await readFile(file,'utf8')); if (old.url === url) { finished++; continue; } } catch {}
    const result = { url, checkedAt: new Date().toISOString() };
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(18000), headers: { 'User-Agent': 'WorldModelDataAtlas-SourceReview/1.0' } });
      result.status = response.status; result.finalUrl = response.url;
      const type = response.headers.get('content-type') || '';
      if (type.includes('pdf')) { result.error = 'PDF_REQUIRES_SEPARATE_REVIEW'; }
      else {
        const html = await response.text();
        result.title = text(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '');
        const abstract = html.match(/<blockquote[^>]*class="abstract[^"]*"[^>]*>([\s\S]*?)<\/blockquote>/i)?.[1];
        const article = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i)?.[1];
        result.text = text(abstract || article || html).slice(0,100000);
      }
    } catch (error) { result.error = error.message; }
    await writeFile(file, JSON.stringify(result,null,2)+'\n');
    finished++;
    if (finished % 25 === 0) console.log(`Fetched ${finished}/${urls.length} source URLs`);
  }
}
await Promise.all(Array.from({length:4},worker));
const sources = (await Promise.all((await readdir(cache)).filter(f=>/^\d+\.json$/.test(f)).map(async f=>JSON.parse(await readFile(path.join(cache,f),'utf8')))));
console.log(JSON.stringify({urls:urls.length, fetched:sources.length, readable:sources.filter(s=>s.status===200&&s.text?.length>100).length,errors:sources.filter(s=>s.error).length}));
