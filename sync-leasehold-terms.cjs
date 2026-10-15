const fs=require('fs');
const terms={1:'23+ years, with a guaranteed extension.',2:'80 years.'};
const answer='Leasehold terms depend on the project phase. Phase 1 offers 23+ years, with a guaranteed extension. Phase 2 offers 80 years. This grants owners a long-term right to use the property and supports long-term ownership planning.';
let home=fs.readFileSync('index.html','utf8');
home=home.replace(/(<summary>What form of ownership is provided for\?[\s\S]*?<\/summary>)<p>[\s\S]*?<\/p>/,'$1<p>'+answer+'</p>');fs.writeFileSync('index.html',home);
for(const file of fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f))){
 let html=fs.readFileSync('assets/'+file,'utf8');
 if(!html.includes('residences-banner-copy'))continue;
 const title=html.match(/<title>(.*?)<\/title>/)?.[1]||'';
 const phase=title.includes('Phase 1')?1:2;
 const block=`<div class="phase-leasehold"><span>Leasehold terms</span><p>${terms[phase]}</p></div>`;
 html=html.replace(/<div class="phase-leasehold">[\s\S]*?<\/div>/g,'');
 html=html.replace(/(<div class="wrap residences-banner-copy">[\s\S]*?)(<button[^>]*class="outline-link")/,'$1'+block+'$2');
 fs.writeFileSync('assets/'+file,html);
}
let lang=fs.readFileSync('assets/language.js','utf8');
const translations=[['Leasehold terms','Условия аренды'],[terms[1],'23+ года с гарантированным продлением.'],[terms[2],'80 лет.'],[answer,'Условия leasehold зависят от этапа проекта. Phase 1: 23+ года с гарантированным продлением. Phase 2: 80 лет. Это предоставляет владельцам долгосрочное право пользования недвижимостью и возможность долгосрочного планирования.']];
lang=lang.replace('const russianText = Object.fromEntries(`','const russianText = Object.fromEntries(`\n'+translations.filter(([en])=>!lang.includes(en+'|')).map(t=>t.join('|')).join('\n'));fs.writeFileSync('assets/language.js',lang);
const files=fs.readdirSync('.').filter(f=>f.endsWith('.html')).concat(fs.readdirSync('assets').filter(f=>/\.(html|js)$/.test(f)).map(f=>'assets/'+f),['script.js']);
for(const file of files){if(/pandawa\s+residence/i.test(fs.readFileSync(file,'utf8')))throw Error('Former project name in '+file);}
console.log('No former project branding in active pages or scripts. FAQ and residence leasehold terms are phase-specific.');