const fs=require('fs');
// Shared residence destinations. Distinct 109 m² and 153 m² layouts keep their own pages.
const aliases={
 'phase-1-1':'pandawa-1','phase-1-2':'pandawa-2','phase-1-3':'pandawa-3',
 'phase-2-1':'solvyn-0','phase-2-2':'solvyn-2','phase-2-4':'solvyn-4','phase-2-5':'solvyn-3'
};
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html')).concat(fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f)).map(f=>'assets/'+f));
for(const file of files){let html=fs.readFileSync(file,'utf8');for(const [from,to] of Object.entries(aliases))html=html.replaceAll(`href="assets/residence-${from}.html"`,`href="assets/residence-${to}.html"`);fs.writeFileSync(file,html);}
for(const [from,to] of Object.entries(aliases)){
 const target=`residence-${to}.html`;
 fs.writeFileSync(`assets/residence-${from}.html`,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${target}"><title>Residence</title><link rel="canonical" href="${target}"></head><body><a href="${target}">View this residence</a><script>location.replace(${JSON.stringify(target)});</script></body></html>`);
}
for(const phase of [1,2]){const html=fs.readFileSync(`solvyn-phase-${phase}.html`,'utf8');for(const from of Object.keys(aliases))if(html.includes(`href="assets/residence-${from}.html"`))throw Error('Duplicate destination still linked');}
console.log('Matching phase and directory cards now use the same dedicated pages. Old duplicate URLs redirect.');