const fs=require('fs');
const files=fs.readdirSync('.').filter(f=>/\.(html|js|cjs)$/.test(f)).concat(fs.readdirSync('assets').filter(f=>/\.(html|js)$/.test(f)).map(f=>'assets/'+f));
for(const file of files){
 let text=fs.readFileSync(file,'utf8');
 text=text.replaceAll('Solvyn City Phase 1','Solvyn City Phase 1').replaceAll('SOLVYN CITY PHASE 1','SOLVYN CITY PHASE 1').replaceAll('See Solvyn City Phase 1 in person.','See Solvyn City Phase 1 in person.').replaceAll('Arrange a Phase 1 tour','Arrange a Phase 1 tour');
 if(file.endsWith('.html')){
  const project=file.includes('solvyn-phase-2')||file.includes('residence-solvyn-')?'Solvyn City Phase 2':'Solvyn City Phase 1';
  text=text.replaceAll('<option>Solvyn City</option>','<option>Solvyn City Phase 2</option>').replaceAll('Solvyn City and Solvyn City Phase 1','Solvyn City Phase 1 and Phase 2');
  text=text.replace(/<article class="(?:residence-list-card|residence)[^"]*">[\s\S]*?<\/article>/g,card=>{
   const phase=file==='solvyn-phase-2.html'?'Solvyn City Phase 2':file==='solvyn-phase-1.html'?'Solvyn City Phase 1':card.includes('residence-solvyn-')?'Solvyn City Phase 2':card.includes('residence-pandawa-')?'Solvyn City Phase 1':null;
   if(!phase)return card;
   return card.replace(/(<span class="eyebrow">)(?:Solvyn City(?: Phase [12])?)(<\/span>)/g,`$1${phase}$2`);
  });
  if(file.includes('residence-solvyn-'))text=text.replace(/Solvyn City(?! Phase)/g,'Solvyn City Phase 2');
  if(file.includes('residence-pandawa-'))text=text.replace(/Solvyn City(?! Phase)/g,'Solvyn City Phase 1');
 }
 fs.writeFileSync(file,text);
}
console.log('Removed former project branding from active pages, scripts and generators.');