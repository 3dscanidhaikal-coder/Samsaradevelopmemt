const fs=require('fs');
const geo=JSON.parse(fs.readFileSync('assets/world-countries.geojson','utf8'));
const project=([lon,lat])=>[(lon+180)/360*1200,(85-lat)/145*520+15];
let paths='';
for(const feature of geo.features){if(feature.properties.name==='Antarctica')continue;const polys=feature.geometry.type==='MultiPolygon'?feature.geometry.coordinates:[feature.geometry.coordinates];for(const poly of polys){let current=[],segments=[];for(const coord of poly[0]){const p=project(coord);if(current.length&&Math.abs(p[0]-current[current.length-1][0])>600){segments.push(current);current=[];}current.push(p);}segments.push(current);for(const points of segments)if(points.length>2 && Math.abs(points.reduce((area,p,i)=>{const q=points[(i+1)%points.length];return area+p[0]*q[1]-q[0]*p[1];},0))/2>14)paths+=`<path d="M${points.map(p=>p.map(v=>v.toFixed(1)).join(',')).join('L')}Z"/>`;}}
const places=[['California',-119,36],['New Jersey',-74,40],['Jamaica',-77,18],['Guyana',-59,5],['Great Britain',-2,54],['Ireland',-8,53],['Estonia',25,59],['Latvia',24,57],['Lithuania',24,55],['Czech Republic',15,50],['Libya',17,27],['Ghana',-2,8],['Israel',35,31],['UAE',54,24],['Kazakhstan',67,48],['Uzbekistan',64,41],['Kyrgyzstan',75,41],['China',105,35],['Thailand',101,15],['Indonesia',118,-3],['Australia',134,-25]];
const dots=places.map(([name,lon,lat])=>{const[x,y]=project([lon,lat]);return `<circle cx="${x}" cy="${y}" r="2.3" fill="#E3D6BF"><title>${name}</title></circle>`;}).join('');
// Individual labels arranged in the same geographic clusters as the supplied reference.
const labels=[
 ['California','USA, California',203,158],['New Jersey','USA, New Jersey',353,141],
 ['Jamaica','Jamaica',343,230],['Guyana','Guyana',402,275],
 ['Great Britain','Great Britain',550,66],['Ireland','Ireland',537,110],
 ['Estonia','Estonia',686,37],['Latvia','Latvia',688,67],['Lithuania','Lithuania',688,89],['Czech Republic','Czech',612,124],
 ['Libya','Libya',657,193],['Ghana','Ghana',568,258],['Israel','Israel',734,163],['UAE','UAE',792,206],
 ['Kazakhstan','Kazakhstan',828,97],['Uzbekistan','Uzbekistan',790,131],['Kyrgyzstan','Kyrgyzstan',890,165],
 ['China','China',986,195],['Thailand','Thailand',937,266],['Indonesia','Indonesia',993,328],['Australia','Australia',1047,425]
];
const text=labels.map(([key,name,x,y])=>{
 const p=places.find(p=>p[0]===key),[px,py]=project([p[1],p[2]]);
 const start=y+(py>y?9:-18);
 return `<g><path d="M${x},${start} V${py} H${px}" fill="none" stroke="#FBFBFB" stroke-opacity=".55" stroke-width=".8" stroke-dasharray="2.5 4"/><text x="${x}" y="${y}" text-anchor="middle" stroke="#19403f" stroke-width="3" paint-order="stroke" stroke-linejoin="round">${name}</text></g>`;
}).join('');
fs.writeFileSync('assets/global-presence-map.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 580" role="img" aria-labelledby="title desc"><title id="title">Worldwide steel framing and construction presence</title><desc id="desc">Country boundaries with gold location markers across the Americas, Europe, Africa, Asia and Australia.</desc><g fill="none" stroke="#CBB896" stroke-opacity=".42" stroke-width=".65" stroke-linejoin="round">${paths}</g>${dots}<g fill="#FBFBFB" font-family="Arial,sans-serif" font-size="16" font-weight="600">${text}</g></svg>`);
console.log('Clean SVG world map generated.');