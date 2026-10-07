const fs=require('fs');
const cta=fs.readFileSync('projects.html','utf8').match(/<section class="contact-section" id="contact">[\s\S]*?<\/section>/)[0];
const paths={
 'Floor area':'<rect x="4" y="4" width="16" height="16" rx="1"/><path d="M4 9h4M4 14h3M9 4v4M14 4v3"/>',
 'Bedrooms':'<path d="M3 18v-8m18 8v-8M3 15h18M3 10h18v5M6 10V6h12v4M8 6v4m8-4v4"/>',
 'Bathrooms':'<path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3Zm2 0V5a2 2 0 0 1 4 0M6 20v2m12-2v2"/>',
 'Floors':'<path d="M3 20h5v-5h5v-5h5V5h3M3 4v16h18"/>',
 'Pool':'<path d="M2 17q3-3 6 0t6 0t8 0M2 21q3-3 6 0t6 0t8 0M8 13V5a2 2 0 0 1 4 0m3 8V5a2 2 0 0 1 4 0M8 8h7m-7 4h7"/>'
};
const icon=k=>`<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[k]||'<path d="m5 12 4 4 10-10"/>'}</svg>`;
const descriptions={
 'Kitchen-living room':'A combined kitchen and living area for cooking, dining and spending time together.',
 'Terrace with seating':'An outdoor seating area that extends the living space.',
 'Ocean view':'An ocean-view feature listed in the published specifications. Confirm the outlook for your selected unit.',
 'Balcony':'Private outdoor space adjoining the residence.',
 'Parking':'Parking is included in the published residence features.',
 'BBQ':'A barbecue area for outdoor dining.',
 'Shared recreation area':'Communal recreation space shared with neighbouring residents.',
 'Bedroom with seating area':'A bedroom layout that includes space to sit and unwind.'
};
for(const file of fs.readdirSync('assets').filter(f=>/^residence-(solvyn|pandawa)-\d\.html$/.test(f))){
 let html=fs.readFileSync('assets/'+file,'utf8');
 const interest=html.match(/class="dark-button" data-consult data-interest="([^"]+)"/)[1];
 html=html.replace(/<section class="wrap section villa-enquiry">[\s\S]*?<\/section>/,'');
 html=html.replace('</main>',cta.replace('data-consult class="light-button"',`data-consult data-interest="${interest}" class="light-button"`)+'</main>');
 html=html.replace(/<h2>Space to make<br><em>your own\.<\/em><\/h2>/,'<h2>Residence details.</h2>');
 html=html.replace(/<dl class="villa-facts">([\s\S]*?)<\/dl>/,(_,inner)=>'<dl class="villa-facts">'+inner.replace(/<div><dt>(.*?)<\/dt><dd>(.*?)<\/dd><\/div>/g,(_,k,v)=>`<div>${icon(k)}<dt>${k}</dt><dd>${v}</dd></div>`)+`<div>${icon('location')}<dt>Location</dt><dd>Bukit, Bali</dd></div></dl>`);
 html=html.replace(/<h3 class="villa-subtitle">.*?<\/h3><ul class="villa-features">([\s\S]*?)<\/ul>/,(_,inner)=>'<h3 class="villa-subtitle">Included in the layout.</h3><div class="villa-feature-grid">'+inner.replace(/<li>(.*?)<\/li>/g,(_,f)=>`<div class="villa-feature">${icon('feature')}<div><h4>${f}</h4><p>${descriptions[f]||'Ask the team for further details about this residence feature.'}</p></div></div>`)+ '</div><div class="villa-plan-note"><strong>Planning your next step</strong><p>Request the floor plan and confirm current pricing, availability and the final specification with our team.</p></div>');
 html=html.replace(/<h3 class=\"villa-subtitle\">Included in the layout\.<\/h3>[\s\S]*?<div class=\"villa-plan-note\">[\s\S]*?<\/div>/,'');
 fs.writeFileSync('assets/'+file,html);
 if(!html.includes('id="contact"')||html.includes('class="wrap section villa-enquiry"'))throw Error('CTA check failed');
}
console.log('Updated all nine residence pages with shared CTA and bordered details.');