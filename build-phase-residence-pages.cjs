const fs=require('fs');
const template=fs.readFileSync('assets/residence-solvyn-1.html','utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;');
const units=[];
for(const phase of [1,2]){
 const file=`solvyn-phase-${phase}.html`;
 let html=fs.readFileSync(file,'utf8'),index=0;
 html=html.replace(/<article class="residence-list-card reveal">[\s\S]*?<\/article>/g,card=>{
 const name=card.match(/<h3>(.*?)<\/h3>/)[1];
 const area=card.match(/<p>(.*?)<\/p>/)[1];
 const image=card.match(/<img src="([^"]+)"/)[1];
 const slug=`phase-${phase}-${++index}`;
 const href=`assets/residence-${slug}.html`;
 units.push({phase,name,area,image,slug,href});
 return card.replace(/<button([^>]+)>([\s\S]*?)<\/button>/g,(_,attrs,body)=>`<a${attrs.replace(/ data-consult/g,'').replace(/ data-interest="[^"]*"/g,'').replace('Enquire about','Explore')} href="${href}">${body}</a>`);
 });
 fs.writeFileSync(file,html);
}
for(const unit of units){
 let html=template;
 const interest=`Solvyn City Phase ${unit.phase} — ${unit.name}`;
 html=html.replace(/<title>.*?<\/title>/,`<title>${unit.name} · Solvyn City Phase ${unit.phase}</title>`);
 html=html.replace(/(<div class="residence-banner-slides"[\s\S]*?src=")[^"]+/,`$1${unit.image}`);
 html=html.replace(/(<div class="wrap residences-banner-copy">)[\s\S]*?<\/div><\/section>/,`$1<span class="eyebrow">SOLVYN CITY PHASE ${unit.phase} / BUKIT, BALI</span><h1>${unit.name}.</h1><p>${unit.area}</p><button type="button" class="outline-link" data-consult data-interest="${escape(interest)}">Enquire about this residence <span aria-hidden="true">↗</span></button></div></section>`);
 const pin='<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>';
 html=html.replace(/<section class="wrap section" id="villa-details">[\s\S]*?<\/section>/,`<section class="wrap section" id="villa-details"><div class="section-label"><span>YOUR RESIDENCE</span><a href="solvyn-phase-${unit.phase}.html">All Phase ${unit.phase} residences ↗</a></div><h2>Residence details.</h2><p class="villa-intro">Explore ${unit.name.toLowerCase()} at Solvyn City Phase ${unit.phase} in Bukit, Bali. Request the final floor plan, specification and availability from our team.</p><dl class="villa-facts"><div><dt>Floor area</dt><dd>${unit.area}</dd></div><div><dt>Project</dt><dd>Solvyn City · Phase ${unit.phase}</dd></div><div>${pin}<dt>Location</dt><dd>Bukit, Bali</dd></div></dl></section>`);
 const folder=unit.image.slice(0,unit.image.lastIndexOf('/'));
 const images=fs.readdirSync(folder).filter(f=>/\.(jpe?g|png)$/i.test(f)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
 html=html.replace(/<div class="villa-gallery-grid">[\s\S]*?<\/div>/,`<div class="villa-gallery-grid">${images.slice(0,5).map((f,i)=>`<a href="${folder}/${f}" target="_blank" rel="noopener" aria-label="Open residence image ${i+1}"><img src="${folder}/${f}" alt="${unit.name} rendering ${i+1}" loading="lazy"></a>`).join('')}</div>`);
 const recommendations=units.filter(r=>r.slug!==unit.slug).sort((a,b)=>(a.phase!==unit.phase)-(b.phase!==unit.phase)).slice(0,3);
 html=html.replace(/<div class="villa-recommendations">[\s\S]*?<\/article><\/div>/,`<div class="villa-recommendations">${recommendations.map(r=>`<article class="residence-list-card"><a class="residence-list-image" href="${r.href}"><img src="${r.image}" alt="${r.name} rendering" loading="lazy"><span class="image-circle" aria-hidden="true">↗</span></a><div class="residence-list-copy"><span class="eyebrow">Solvyn City Phase ${r.phase}</span><h3>${r.name}</h3><p>${r.area}</p><a class="text-link" href="${r.href}">Explore more <span aria-hidden="true">↗</span></a></div></article>`).join('')}</div>`);
 html=html.replace(/data-interest="Solvyn City — 1-bedroom villa"/g,`data-interest="${escape(interest)}"`).replace('<option>Solvyn City — 1-bedroom villa</option>',`<option>${escape(interest)}</option>`);
 fs.writeFileSync(unit.href,html);
}
console.log(`Created ${units.length} phase residence pages and linked the images and Explore more buttons.`);
require('./sync-residence-formats.cjs');

require('./consolidate-residence-pages.cjs');

require('./sync-phase-cards.cjs');

require('./normalize-project-names.cjs');

require('./add-villa-floor-plans.cjs');
