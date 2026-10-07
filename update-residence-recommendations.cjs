const fs=require('fs');
const vm=require('vm');
const data=vm.runInNewContext('('+fs.readFileSync('script.js','utf8').match(/const residences = (\{[\s\S]*?\n\});/)[1]+')');
const rows=Object.entries(data).flatMap(([project,items])=>items.map((r,index)=>({...r,slug:`${project}-${index}`,label:project==='solvyn'?'Solvyn City':'Pandawa Residence'})));
for(const [index,r] of rows.entries()){
 const file=`assets/residence-${r.slug}.html`;
 let html=fs.readFileSync(file,'utf8');
 const recommendations=[1,2,3].map(offset=>rows[(index+offset)%rows.length]);
 const cards=recommendations.map(next=>`<article class="residence-list-card"><a class="residence-list-image" href="assets/residence-${next.slug}.html" aria-label="Explore ${next.label} ${next.name}"><img src="${next.slug.endsWith('-0')?'assets/interior.webp':next.slug.endsWith('-2')?'assets/project.webp':'assets/hero.webp'}" alt="Illustrative architectural concept" loading="lazy" width="1536" height="1024"><span class="image-circle" aria-hidden="true">↗</span></a><div class="residence-list-copy"><span class="eyebrow">${next.label}</span><h3>${next.name}</h3><p>${next.area} m² · ${next.bedrooms} bedroom${next.bedrooms>1?'s':''}</p><a class="text-link" href="assets/residence-${next.slug}.html">Explore more <span aria-hidden="true">↗</span></a></div></article>`).join('');
 html=html.replace(/<article class="residence-list-card villa-next">[\s\S]*?<\/article>/,`<div class="villa-recommendations">${cards}</div>`);
 if(!html.includes('class="villa-recommendations"'))throw Error('Recommendation not found '+file);
 fs.writeFileSync(file,html);
}
console.log('Three recommendations added on each of nine pages.');