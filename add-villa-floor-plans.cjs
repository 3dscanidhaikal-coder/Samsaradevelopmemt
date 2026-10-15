const fs=require('fs');
const placeholder=`<section class="villa-floor-plan" aria-label="Floor plan"><div class="villa-floor-plan-heading"><h3>Floor plan</h3><p>A closer look at the layout.</p></div><div class="villa-floor-plan-placeholder"><svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="34" height="34"/><path d="M7 23h15V7m0 16h19M22 23v18M7 33h8m15-10v9h11"/></svg><span>Floor plan coming soon</span><p>The detailed layout will be added here.</p></div></section>`;
let count=0;
for(const file of fs.readdirSync('assets').filter(f=>/^residence-.*\.html$/.test(f))){
 let html=fs.readFileSync('assets/'+file,'utf8');
 const title=html.match(/<title>(.*?)<\/title>/)?.[1]||'';
 if(!/villa/i.test(title)||!html.includes('id="villa-details"'))continue;
 if(html.includes('class="villa-floor-plan"'))continue;
 html=html.replace(/(<section[^>]*id="villa-details"[^>]*>[\s\S]*?<\/dl>)([\s\S]*?<\/section>)/,'$1'+placeholder+'$2');
 if(!html.includes('class="villa-floor-plan"'))throw Error('Insertion failed '+file);
 fs.writeFileSync('assets/'+file,html);count++;
}
console.log(`Floor plan placeholders added to ${count} villa pages.`);