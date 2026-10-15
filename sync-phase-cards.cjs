const fs=require('fs');
const directory=fs.readFileSync('residences.html','utf8');
const cards=[...directory.matchAll(/<article class="residence-list-card reveal">[\s\S]*?<\/article>/g)].map(m=>m[0]);
const byPage=Object.fromEntries(cards.map(card=>[card.match(/href="(assets\/residence-[^"]+)"/)[1],card]));
let reused=0;
for(const phase of [1,2]){
 const file=`solvyn-phase-${phase}.html`;
 let html=fs.readFileSync(file,'utf8');
 html=html.replace(/<article class="residence-list-card reveal">[\s\S]*?<\/article>/g,card=>{const href=card.match(/href="(assets\/residence-[^"]+)"/)?.[1];if(byPage[href]){reused++;return byPage[href];}return card;});
 fs.writeFileSync(file,html);
}
console.log(`Reused ${reused} identical residence cards on the phase pages.`);