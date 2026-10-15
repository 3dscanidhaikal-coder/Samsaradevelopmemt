const fs=require('fs');
const phase=fs.readFileSync('assets/residence-phase-1-3.html','utf8');
let shared=fs.readFileSync('assets/residence-pandawa-3.html','utf8');
const phaseHero=phase.match(/<div class="residence-banner-slides">[\s\S]*?<\/div>/)[0];
const phaseGallery=phase.match(/<div class="villa-gallery-grid">[\s\S]*?<\/div>/)[0];
shared=shared.replace(/<div class="residence-banner-slides">[\s\S]*?<\/div>/,phaseHero).replace(/<div class="villa-gallery-grid">[\s\S]*?<\/div>/,phaseGallery);
shared=shared.replaceAll('Solvyn City Phase 1','Solvyn City Phase 1').replace('<dd>234 m²</dd>','<dd>234 m² including rooftop</dd>');
fs.writeFileSync('assets/residence-pandawa-3.html',shared);
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html')).concat(fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f)).map(f=>'assets/'+f));
for(const file of files){let html=fs.readFileSync(file,'utf8').replaceAll('153 m²','234 m²').replace('101 / 129 / 153 m²','101 / 129 / 234 m²');
html=html.replace(/(<h3>Villa type 3<\/h3><p>)234 m²/, '$1234 m² including rooftop');
fs.writeFileSync(file,html);}