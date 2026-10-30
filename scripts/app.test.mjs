import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import fs from 'node:fs';
const source=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
const records=JSON.parse(fs.readFileSync(new URL('../datasets.json',import.meta.url),'utf8'));
async function page({language='en',blocked=false,failed=false}={}) {
  const elements=new Map();
  const element=id=>{if(!elements.has(id))elements.set(id,{value:'',hidden:false,innerHTML:'',textContent:'',listeners:{},addEventListener(name,fn){this.listeners[name]=fn;},setAttribute(){},insertAdjacentHTML(_,html){this.innerHTML+=html;}});return elements.get(id);};
  const context=vm.createContext({document:{querySelector:element,querySelectorAll:()=>[],documentElement:{},title:''},localStorage:{getItem(){if(blocked)throw Error('Storage denied');return language;},setItem(){if(blocked)throw Error('Storage denied');}},fetch:async()=>{if(failed)throw Error('Network offline');return {ok:true,json:async()=>records};},console});
  vm.runInContext(source,context);
  await new Promise(resolve=>setImmediate(resolve));
  return {element,run:code=>vm.runInContext(code,context)};
}
test('invalid or inaccessible language storage does not prevent loading',async()=>{
  for(const options of [{language:'fr'},{blocked:true}]){
    const p=await page(options);assert.equal(p.element('#metricDatasets').textContent,String(records.length));
    assert.match(p.element('#datasetGrid').innerHTML,/class="card"/);
    p.element('#languageToggle').listeners.click();
    assert(p.element('#resultCount').textContent.includes(String(records.length)));
  }
});
test('search covers Chinese organizations, localized tags and aliases',async()=>{
  const p=await page();
  p.run("state.datasets=[{...state.datasets[0],id:'probe',name:'Probe',shortName:'Probe',summary:'probe',summaryEn:'probe',organizations:'University Test',organizationsZh:'独有机构匹配',modalities:['Robot State'],aliases:['unique-alias']}]");
  for(const query of ['独有机构匹配','机器人状态','unique-alias']){
    p.element('#searchInput').listeners.input({target:{value:query}});
    assert.notEqual(p.element('#datasetGrid').innerHTML,'',query);
  }
});
test('combined filters and reset use the complete catalog',async()=>{
  const p=await page();
  p.element('#typeFilter').listeners.change({target:{value:'derived'}});
  assert.equal(Number(p.element('#resultCount').textContent.split(' ')[0]),records.filter(r=>r.resourceType==='derived').length);
  p.element('#domainFilter').listeners.change({target:{value:'Autonomous Driving'}});
  assert.equal(p.element('#resultCount').textContent,records.filter(r=>r.resourceType==='derived'&&r.domain.includes('Autonomous Driving')).length+' resources');
  p.element('#resetButton').listeners.click();assert.equal(p.element('#resultCount').textContent,records.length+' resources');
});
test('load errors survive reset and language switching',async()=>{
  const p=await page({failed:true});
  p.element('#resetButton').listeners.click();
  p.element('#languageToggle').listeners.click();
  assert.match(p.element('#emptyState').textContent,/数据加载失败/);
  assert.equal(p.element('#emptyState').hidden,false);
});
test('rendering escapes untrusted titles and evidence text',async()=>{
  const p=await page();
  const html=p.run("card({...state.datasets[0],name:'<script>alert(1)</script>',evidence:{...state.datasets[0].evidence,statement:'<img src=x onerror=alert(1)>'}})");
  assert(!html.includes('<script>'));assert(!html.includes('<img src=x'));assert(html.includes('&lt;script&gt;'));
});
