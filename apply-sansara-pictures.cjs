const fs=require('fs'),path=require('path');
const root='assets/Sansara Pictures/';
const url=p=>root+p;
const image=(html,selector,src)=>html.replace(selector,(_,a,b)=>a+src+b);
const blockImages=(html,pattern,urls)=>html.replace(pattern,block=>{let i=0;return block.replace(/(<img\b[^>]*src=")[^"]+("[^>]*>)/g,(_,a,b)=>a+(urls[i++]||urls[urls.length-1])+b);});
const landing=['1.jpg','2.jpeg','3.jpg'].map(f=>url('Landing Page/Hero Section/'+f));
const discover=['Solvyn-City.jpg','Restaurant.jpg','Cafe.jpg','Hall.jpg','Spa.jpg','River Surf.jpg'].map(f=>url('Landing Page/Discover Solvyn City/'+f));
const cta=url('Landing Page/CTA Picture background section.jpg');
const unitFolders={
 'pandawa-1':'Phase 1/Villa 101m', 'pandawa-2':'Phase 1/Villa 129m',
 'solvyn-0':'Phase 2/Apartment+Penthouse','pandawa-0':'Phase 2/Apartment+Penthouse',
 'solvyn-1':'Phase 2/Villa 1br 47m2','solvyn-2':'Phase 2/Villa 2 br 104m2','solvyn-3':'Phase 2/Villa 3br 167m2','solvyn-4':'Phase 2/Villa 3br 121 m2'
};
const gallery=folder=>fs.readdirSync(root+'Residences Pages/'+folder).filter(f=>/\.(jpe?g|png)$/i.test(f)).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).map(f=>url('Residences Pages/'+folder+'/'+f));
const units=Object.fromEntries(Object.entries(unitFolders).map(([k,f])=>[k,gallery(f)]));
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html')).concat(fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f)).map(f=>'assets/'+f));
for(const file of files){
 let html=fs.readFileSync(file,'utf8');
 html=blockImages(html,/<section class="contact-section"[\s\S]*?<\/section>/g,[cta]);
 if(file==='index.html'){
 html=blockImages(html,/<section class="hero"[\s\S]*?<\/section>/,landing);
 html=blockImages(html,/<figure class="about-editorial-image[\s\S]*?<\/figure>/,[url('Landing Page/The Samsara way/01_The Samsara Way.jpg')]);
 html=blockImages(html,/<div class="flagship-slides"[\s\S]*?<\/div>/,discover);
 html=blockImages(html,/<article class="residence reveal">[\s\S]*?<\/article>/,[url('Landing Page/Selected Residences/Apartment.jpg')]);
 html=blockImages(html,/<article class="residence residence-offset reveal">[\s\S]*?<\/article>/,[url('Landing Page/Selected Residences/Villa 101.jpg')]);
 html=html.replace('href="assets/hero.webp"','href="'+landing[0]+'"');
 }
 if(file==='about.html'){
 const urls=[url('About us Page/Hero Section/1.jpg'),url('About us Page/A longer Perspective.jpg'),url('About us Page/Our Commitment.jpg')];let n=0;
 html=html.replace(/(<img\b[^>]*src=")assets\/(?:hero|interior)\.webp("[^>]*>)/g,(_,a,b)=>a+(urls[n++]||cta)+b);
 }
 if(file==='projects.html'){
 let n=0;html=blockImages(html,/<article class="highlight-slide[\s\S]*?<\/article>/g,[]); // restore by assigning per slide below
 html=html.replace(/<article class="highlight-slide[\s\S]*?<\/article>/g,block=>blockImages(block,/[\s\S]*/,[url('Projects Page/Hero Images/Solvyn City Phase '+(++n)+(n===1?'.jpg':'.png'))]));
 n=0;html=html.replace(/<article class="portfolio-card[\s\S]*?<\/article>/g,block=>blockImages(block,/[\s\S]*/,[url('Projects Page/Cards Image/Phase '+(++n)+(n===1?'.jpeg':'.png'))]));
 }
 if(file==='residences.html'){
 html=blockImages(html,/<div class="residence-banner-slides"[\s\S]*?<\/div>/,landing);
 html=html.replace(/<article class="residence-list-card[\s\S]*?<\/article>/g,block=>{const k=block.match(/residence-((?:solvyn|pandawa)-\d)\.html/);return k&&units[k[1]]?blockImages(block,/[\s\S]*/,[units[k[1]][0]]):block;});
 }
 const detail=file.match(/assets\/residence-(.*)\.html/);
 if(detail&&units[detail[1]]){
 const imgs=units[detail[1]];
 html=blockImages(html,/<div class="residence-banner-slides"[\s\S]*?<\/div>/,[imgs[0]]);
 html=html.replace(/<div class="villa-gallery-grid">[\s\S]*?<\/div>/,`<div class="villa-gallery-grid">${imgs.slice(0,5).map((src,i)=>`<a href="${src}" target="_blank" rel="noopener" aria-label="Open residence image ${i+1}"><img src="${src}" alt="Residence rendering ${i+1}" loading="lazy"></a>`).join('')}</div>`);
 html=html.replace('Illustrative concept imagery, shared across residence types.','Residence imagery supplied by Sansara Development.');
 }
 html=html.replace(/<article class="residence-list-card">[\s\S]*?<\/article>/g,block=>{const k=block.match(/residence-((?:solvyn|pandawa)-\d)\.html/);return k&&units[k[1]]?blockImages(block,/[\s\S]*/,[units[k[1]][0]]):block;});
 if(/^solvyn-phase-/.test(file)){
 const phase=file.includes('-1.')?1:2;
 const phaseImages=phase===1?['Phase 1/Villa 101m','Phase 1/Villa 129m','Phase 1/Villa 153m']:['Phase 2/Apartment+Penthouse','Phase 2/Villa 2 br 104m2','Phase 2/Villa 2 br 109 m2','Phase 2/Villa 3br 121 m2','Phase 2/Villa 3br 167m2'];
 html=blockImages(html,/<div class="residence-banner-slides"[\s\S]*?<\/div>/,[url('Projects Page/Hero Images/Solvyn City Phase '+phase+(phase===1?'.jpg':'.png'))]);
 let n=0;html=html.replace(/<article class="residence-list-card[\s\S]*?<\/article>/g,block=>blockImages(block,/[\s\S]*/,[gallery(phaseImages[n++])[0]]));
 }
 // Clear outdated image dimensions where replacement imagery has a different aspect ratio.
 html=html.replace(/<img\b[^>]*>/g,tag=>tag.includes('Sansara Pictures')?tag.replace(/ (?:width|height)="\d+"/g,''):tag);
 fs.writeFileSync(file,html);
}
console.log('Updated image assignments across all active pages.');