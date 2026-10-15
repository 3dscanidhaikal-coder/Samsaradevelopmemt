const fs=require('fs');
const source=fs.readFileSync('assets/residence-pandawa-1.html','utf8');
const cells=[...source.match(/<dl class="villa-facts">([\s\S]*?)<\/dl>/)[1].matchAll(/<div>[\s\S]*?<\/div>/g)].map(m=>m[0]);
const matching={'phase-1-1':'pandawa-1','phase-1-2':'pandawa-2','phase-2-4':'solvyn-4'};
for(const file of fs.readdirSync('assets').filter(f=>/^residence-phase-\d-\d\.html$/.test(f))){
 const slug=file.replace('residence-','').replace('.html','');
 let html=fs.readFileSync('assets/'+file,'utf8');
 let facts;
 if(matching[slug])facts=fs.readFileSync(`assets/residence-${matching[slug]}.html`,'utf8').match(/<dl class="villa-facts">[\s\S]*?<\/dl>/)[0];
 else{
 const area=html.match(/<dt>Floor area<\/dt><dd>(.*?)<\/dd>/)[1];
 const name=html.match(/<h1>(.*?)<\/h1>/)[1];
 const bedrooms=name.match(/(\d)-bedroom/);
 const values=[area,bedrooms?bedrooms[1]:'Ask the team','Ask the team','Ask the team','Ask the team','Bukit, Bali'];
 facts='<dl class="villa-facts">'+cells.map((cell,i)=>cell.replace(/<dd>.*?<\/dd>/,`<dd>${values[i]}</dd>`)).join('')+'</dl>';
 }
 html=html.replace(/<dl class="villa-facts">[\s\S]*?<\/dl>/,facts);
 fs.writeFileSync('assets/'+file,html);
 const labels=[...facts.matchAll(/<dt>(.*?)<\/dt>/g)].map(m=>m[1]);
 if(labels.join('|')!=='Floor area|Bedrooms|Bathrooms|Floors|Pool|Location')throw Error('Inconsistent facts '+file);
}
console.log('All eight phase pages now share the six-field residence details format.');