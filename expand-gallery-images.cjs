const fs=require('fs');
const mappings={ 'pandawa-1':'Phase 1/Villa 101m','pandawa-2':'Phase 1/Villa 129m','pandawa-3':'Phase 1/Villa 153m','solvyn-0':'Phase 2/Apartment+Penthouse','pandawa-0':'Phase 2/Apartment+Penthouse','solvyn-1':'Phase 2/Villa 1br 47m2','solvyn-2':'Phase 2/Villa 2 br 104m2','solvyn-3':'Phase 2/Villa 3br 167m2','solvyn-4':'Phase 2/Villa 3br 121 m2','phase-2-3':'Phase 2/Villa 2 br 109 m2'};
for(const[slug,folder]of Object.entries(mappings)){
 const file=`assets/residence-${slug}.html`;
 let html=fs.readFileSync(file,'utf8');
 if(!html.includes('villa-gallery-grid'))continue;
 const dir=`assets/Sansara Pictures/Residences Pages/${folder}`;
 const images=fs.readdirSync(dir).filter(f=>/\.(jpe?g|png)$/i.test(f)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).slice(0,5);
 html=html.replace(/<div class="villa-gallery-grid">[\s\S]*?<\/div>/,`<div class="villa-gallery-grid">${images.map((f,i)=>`<a href="${dir}/${f}" target="_blank" rel="noopener" aria-label="Open residence image ${i+1}"><img src="${dir}/${f}" alt="Residence rendering ${i+1}" loading="lazy"></a>`).join('')}</div>`);
 fs.writeFileSync(file,html);
}
for(const f of ['apply-sansara-pictures.cjs','build-phase-residence-pages.cjs','limit-gallery-images.cjs']){
 let s=fs.readFileSync(f,'utf8').replaceAll('slice(0,4)','slice(0,5)').replaceAll('length>4','length>5').replaceAll('four images','five images');fs.writeFileSync(f,s);
}
console.log('Gallery maximum updated to five; fifth pictures restored where available.');