const fs=require('fs');
const name='2-bedroom villa · Type 1';
const description='A 104 m² two-bedroom villa at Solvyn City Phase 2, arranged over two floors. The layout includes two bathrooms plus a guest WC, a kitchen-living room and a terrace with a relaxation area. An 11.7 m² private pool sits on the lower level, with an ocean view. This residence type comprises 11 villas.';
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html')).concat(fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f)).map(f=>'assets/'+f));
for(const file of files){
 let html=fs.readFileSync(file,'utf8');
 html=html.replace(/<article class="(?:residence-list-card|residence)[^"]*">[\s\S]*?<\/article>/g,card=>{
 if(!card.includes('href="assets/residence-solvyn-2.html"'))return card;
 return card.replace(/<h3>.*?<\/h3>/,`<h3>${name}</h3>`).replace(/(<h3>.*?<\/h3>)<p>.*?<\/p>(?:<p class="muted">.*?<\/p>)?/,'$1<p>104 m² · 2 bedrooms</p><p class="muted">11.7 m² private pool · 11 villas</p>').replaceAll('Explore Solvyn City 2-bedroom villa','Explore Solvyn City Phase 2 '+name);
 });
 if(file==='assets/residence-solvyn-2.html'){
  html=html.replace(/<title>.*?<\/title>/,`<title>${name} · Solvyn City Phase 2</title>`).replace(/<h1>.*?<\/h1>/,`<h1>${name}.</h1>`);
  html=html.replaceAll('102 m²','104 m²').replace(/<p class="villa-intro">[\s\S]*?<\/p>/,`<p class="villa-intro">${description}</p>`);
  html=html.replace(/(<dt>Bathrooms<\/dt><dd>).*?(<\/dd>)/,'$12 + guest WC$2');
  html=html.replace(/(<dt>Pool<\/dt><dd>).*?(<\/dd>)/,'$111.7 m² · lower level$2');
  html=html.replace(/data-interest="[^"]*— 2-bedroom villa"/g,`data-interest="Solvyn City Phase 2 — ${name}"`).replace(/<option>[^<]*— 2-bedroom villa<\/option>/,`<option>Solvyn City Phase 2 — ${name}</option>`);
 }
 fs.writeFileSync(file,html);
}
let js=fs.readFileSync('script.js','utf8');
js=js.replace("{ name: '2-bedroom villa', area: 102, bedrooms: 2, floors: 2, bathrooms: 2, pool: '11.7 m² private pool', extras: 'Kitchen-living room · Terrace with seating · Ocean view' }","{ name: '2-bedroom villa · Type 1', area: 104, quantity:11, bedrooms: 2, floors: 2, bathrooms: 2, guestWC:true, pool: '11.7 m² private pool', extras: 'Kitchen-living room · Guest WC · Terrace with relaxation area · Lower-level pool · Ocean view' }");
fs.writeFileSync('script.js',js);
const translations=[[name,'Вилла с 2 спальнями · Тип 1'],['11.7 m² private pool · 11 villas','Частный бассейн 11,7 м² · 11 вилл'],['2 + guest WC','2 + гостевой санузел'],['11.7 m² · lower level','11,7 м² · нижний уровень'],[description,'Вилла площадью 104 м² с 2 спальнями в Solvyn City Phase 2, расположенная на 2 этажах. Включает 2 ванные комнаты и гостевой санузел, кухню-гостиную, террасу с зоной отдыха, бассейн на нижнем уровне площадью 11,7 м² и вид на океан. Количество вилл этого типа — 11.']];
let lang=fs.readFileSync('assets/language.js','utf8');lang=lang.replace('const russianText = Object.fromEntries(`','const russianText = Object.fromEntries(`\n'+translations.filter(([en])=>!lang.includes(en+'|')).map(t=>t.join('|')).join('\n'));fs.writeFileSync('assets/language.js',lang);
console.log('Phase 2 villa type 1 updated across linked cards, shared page, source data and translations.');