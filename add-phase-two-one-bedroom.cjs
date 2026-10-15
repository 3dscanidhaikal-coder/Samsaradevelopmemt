const fs=require('fs');
const name='One-bedroom villa';
const description='A 47.7 m² one-bedroom villa at Solvyn City Phase 2, with a spacious bedroom, one bathroom and a kitchen-living room. A terrace with a relaxation area, a 7.5 m² private pool and an ocean view complete the layout. This residence type comprises 14 villas.';
let detail=fs.readFileSync('assets/residence-solvyn-1.html','utf8').replaceAll('46.3 m²','47.7 m²').replaceAll('1-bedroom villa',name);
detail=detail.replace(/<p class="villa-intro">[\s\S]*?<\/p>/,`<p class="villa-intro">${description}</p>`);
fs.writeFileSync('assets/residence-solvyn-1.html',detail);
const photo='assets/Sansara Pictures/Residences Pages/Phase 2/Villa 1br 47m2/1-bdr-.jpg';
const card=`<article class="residence-list-card reveal"><a class="residence-list-image" href="assets/residence-solvyn-1.html" aria-label="Explore one-bedroom villa"><img src="${photo}" alt="One-bedroom villa rendering" loading="lazy"><span class="image-circle" aria-hidden="true">↗</span></a><div class="residence-list-copy"><span class="eyebrow">Solvyn City Phase 2</span><h3>${name}</h3><p>47.7 m² · 1 bedroom</p><p class="muted">7.5 m² private pool · 14 villas</p><a class="text-link" href="assets/residence-solvyn-1.html">Explore more <span aria-hidden="true">↗</span></a></div></article>`;
let phase=fs.readFileSync('solvyn-phase-2.html','utf8');
if(!phase.includes('href="assets/residence-solvyn-1.html"'))phase=phase.replace('</div></section><section class="contact-section"',card+'</div></section><section class="contact-section"');
phase=phase.replace('5 residence types','6 residence types');
fs.writeFileSync('solvyn-phase-2.html',phase);
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html')).concat(fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f)).map(f=>'assets/'+f));
for(const file of files){let html=fs.readFileSync(file,'utf8');html=html.replace(/<article class="residence-list-card[^"]*">[\s\S]*?<\/article>/g,block=>block.includes('href="assets/residence-solvyn-1.html"')?block.replace(/<h3>.*?<\/h3>/,`<h3>${name}</h3>`).replace(/(<h3>.*?<\/h3>)<p>.*?<\/p>(?:<p class="muted">.*?<\/p>)?/,'$1<p>47.7 m² · 1 bedroom</p><p class="muted">7.5 m² private pool · 14 villas</p>'):block);fs.writeFileSync(file,html);}
let js=fs.readFileSync('script.js','utf8').replace("name: '1-bedroom villa', area: 46.3","name: 'One-bedroom villa', area: 47.7, quantity:14");fs.writeFileSync('script.js',js);
const translations=[[name,'Вилла с одной спальней'],['47.7 m² · 1 bedroom','47,7 м² · 1 спальня'],['7.5 m² private pool · 14 villas','Частный бассейн 7,5 м² · 14 вилл'],[description,'Вилла площадью 47,7 м² с одной спальней в Solvyn City Phase 2. Просторная спальня, ванная комната, кухня-гостиная, терраса с зоной отдыха, частный бассейн площадью 7,5 м² и вид на океан. Количество вилл этого типа — 14.']];
let lang=fs.readFileSync('assets/language.js','utf8');lang=lang.replace('const russianText = Object.fromEntries(`','const russianText = Object.fromEntries(`\n'+translations.filter(([en])=>!lang.includes(en+'|')).map(t=>t.join('|')).join('\n'));fs.writeFileSync('assets/language.js',lang);
if((phase.match(/<article class="residence-list-card reveal">/g)||[]).length!==6)throw Error('Expected six phase cards');
console.log('One-bedroom villa added to Phase 2 and shared specifications updated.');