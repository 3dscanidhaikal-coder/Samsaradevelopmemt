const fs=require('fs');
let changed=0;
for(const file of fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f))){
 let html=fs.readFileSync('assets/'+file,'utf8');
 html=html.replace(/<div class="villa-gallery-grid">([\s\S]*?)<\/div>/g,(_,inner)=>{const images=[...inner.matchAll(/<a\b[\s\S]*?<\/a>/g)].map(m=>m[0]);if(images.length>5)changed++;return '<div class="villa-gallery-grid">'+images.slice(0,5).join('')+'</div>';});
 fs.writeFileSync('assets/'+file,html);
 const gallery=html.match(/<div class="villa-gallery-grid">([\s\S]*?)<\/div>/);
 if(gallery&&[...gallery[1].matchAll(/<img\b/g)].length>5)throw Error('Too many gallery images');
}
console.log(`Limited ${changed} galleries; all residence galleries contain at most five images.`);