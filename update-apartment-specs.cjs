const fs=require('fs');
for(const [file,area] of [['assets/residence-pandawa-0.html',40],['assets/residence-apartment-50.html',50]]){
 let html=fs.readFileSync(file,'utf8');
 const values={Bedrooms:'1',Bathrooms:'1',Pool:'Communal pool'};
 for(const[k,v]of Object.entries(values))html=html.replace(new RegExp(`(<dt>${k}</dt><dd>).*?(</dd>)`),'$1'+v+'$2');
 const description=`A ${area} m² apartment at Solvyn City Phase 1 with one bedroom, one bathroom and a balcony. The residence includes parking, access to a shared pool and an ocean view.`;
 html=html.replace(/<p class="villa-intro">[\s\S]*?<\/p>/,`<p class="villa-intro">${description}</p>`);
 html=html.replace(/(<div class="wrap residences-banner-copy">[\s\S]*?<h1>[\s\S]*?<\/h1><p>)[\s\S]*?(<\/p>)/,'$1'+`${area} m² · 1 bedroom · Communal pool`+'$2');
 fs.writeFileSync(file,html);
}
for(const file of ['solvyn-phase-1.html','residences.html']){
 let html=fs.readFileSync(file,'utf8');
 html=html.replace(/<article class="residence-list-card reveal">[\s\S]*?<\/article>/g,card=>{
 if(!/residence-(pandawa-0|apartment-50)\.html/.test(card))return card;
 const area=card.includes('apartment-50')?50:40;
 return card.replace(/(<h3>.*?<\/h3>)<p>.*?<\/p>(?:<p class="muted">.*?<\/p>)?/,'$1'+`<p>${area} m² · 1 bedroom</p><p class="muted">Communal pool · Balcony · Parking · Ocean view</p>`);
 });
 fs.writeFileSync(file,html);
}
let lang=fs.readFileSync('assets/language.js','utf8');
const translations=[
 ['Communal pool · Balcony · Parking · Ocean view','Общий бассейн · Балкон · Парковка · Вид на океан'],
 ...[40,50].map(area=>[`A ${area} m² apartment at Solvyn City Phase 1 with one bedroom, one bathroom and a balcony. The residence includes parking, access to a shared pool and an ocean view.`,`Апартаменты площадью ${area} м² в Solvyn City Phase 1: 1 спальня, 1 ванная комната и балкон. Включены парковка, доступ к общему бассейну и вид на океан.`]),
 ...[40,50].map(area=>[`${area} m² · 1 bedroom · Communal pool`,`${area} м² · 1 спальня · Общий бассейн`])
];
lang=lang.replace('const russianText = Object.fromEntries(`','const russianText = Object.fromEntries(`\n'+translations.map(t=>t.join('|')).join('\n'));
fs.writeFileSync('assets/language.js',lang);
console.log('Both apartment detail pages and cards updated with supplied specifications.');