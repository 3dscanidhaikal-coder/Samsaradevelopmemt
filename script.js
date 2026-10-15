'use strict';

const header = document.querySelector('#header');
const menu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let menuExpanded = false;
let menuAnimation;
let menuLinkAnimations = [];
function setMenuExpanded(expanded) {
  const start = menu.hidden ? { opacity: '0', transform: 'translateY(-18px)' } : {
    opacity: getComputedStyle(menu).opacity, transform: getComputedStyle(menu).transform
  };
  menuAnimation?.cancel();
  menuLinkAnimations.forEach(animation => animation.cancel());
  menuLinkAnimations = [];
  menuExpanded = expanded;
  menuToggle.setAttribute('aria-expanded', String(expanded));
  menuToggle.querySelector('.menu-label').textContent = expanded ? 'Close' : 'Menu';
  menu.inert = !expanded;
  if (expanded) {
    menu.hidden = false;
    header.classList.add('menu-open');
    document.body.classList.add('modal-open');
  }
  const finish = () => {
    if (!menuExpanded) {
      menu.hidden = true;
      header.classList.remove('menu-open');
      if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open');
    }
  };
  if (reducedMotion.matches || !menu.animate) { finish(); return; }
  menuAnimation = menu.animate([start, {
    opacity: expanded ? 1 : 0, transform: expanded ? 'translateY(0)' : 'translateY(-12px)'
  }], {duration: expanded ? 460 : 280, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards'});
  menuAnimation.onfinish = finish;
  if (expanded) menuLinkAnimations = [...menu.children].map((item, index) => item.animate([
    {opacity: 0, transform: 'translateY(16px)'}, {opacity: 1, transform: 'translateY(0)'}
  ], {duration: 420, delay: 70 + index * 45, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both'}));
}
function closeMenu() { setMenuExpanded(false); }
menuToggle.addEventListener('click', () => setMenuExpanded(!menuExpanded));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuExpanded) { closeMenu(); menuToggle.focus(); }
  if (e.key === 'Tab' && menuExpanded) {
    const last = menu.querySelector('button');
    if (e.shiftKey && document.activeElement === menuToggle) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); menuToggle.focus(); }
  }
});
window.matchMedia('(min-width: 1024px)').addEventListener('change', e => { if (e.matches) closeMenu(); });

reducedMotion.addEventListener('change', () => setMenuExpanded(menuExpanded));

let scrollQueued = false;
function updateScroll() {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 60);

  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateScroll); }
}, { passive: true });
updateScroll();

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('js-motion');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

const quotes = [
  '“Your client’s experience goes here — in their own words, from the first conversation to finding their home.”',
  '“Add an approved testimonial about the design, the process, or the details that made a difference.”',
  '“Share a real homeowner’s perspective on what makes living here meaningful to them.”'
];
let quoteIndex = 0;
function changeQuote(direction) {
  quoteIndex = (quoteIndex + direction + quotes.length) % quotes.length;
  document.querySelector('#quote-text').textContent = quotes[quoteIndex];
  document.querySelector('#quote-count').textContent = `0${quoteIndex + 1} / 03`;
}
document.querySelector('#quote-prev')?.addEventListener('click', () => changeQuote(-1));
document.querySelector('#quote-next')?.addEventListener('click', () => changeQuote(1));

const detailDialog = document.querySelector('#detail-dialog');
const consultDialog = document.querySelector('#consult-dialog');
// Published residence data read from the old site's dynamically rendered cards.
// Null means the source does not specify a floor count; it is not assumed to be one.
const residences = {
  pandawa: [
    { name: 'Apartments', area: 40, bedrooms: 1, floors: null, bathrooms: 1, pool: 'Communal pool', extras: 'Kitchen-living room · Balcony · Parking · Ocean view' },
    { name: 'Villa type 1', area: 101, quantity:36, bedrooms: 2, floors: 2, bathrooms: 3, pool: '15 m² private pool', extras: 'Kitchen-living room · BBQ · Ocean view' },
    { name: 'Villa type 2', area: 129, quantity:20, bedrooms: 3, floors: 2, bathrooms: 4, pool: '15 m² private pool', extras: 'Kitchen-living room · BBQ · Ocean view' },
    { name: 'Villa type 3', area: 234, quantity:8, includesRooftop:true, bedrooms: 3, floors: 3, bathrooms: 4, pool: '18 m² private pool', extras: 'Kitchen-living room · BBQ · Ocean view' }
  ],
  solvyn: [
    { name: 'Studio apartments', area: 34.6, quantity:78, studio:true, bedrooms: 1, floors: null, bathrooms: 1, pool: 'Communal pool', extras: 'Bedroom with seating area · Balcony · Shared recreation area' },
    { name: 'One-bedroom villa', area: 47.7, quantity:14, bedrooms: 1, floors: 1, bathrooms: 1, pool: '7.5 m² private pool', extras: 'Kitchen-living room · Terrace with seating · Ocean view' },
    { name: '2-bedroom villa · Type 1', area: 104, quantity:11, bedrooms: 2, floors: 2, bathrooms: 2, guestWC:true, pool: '11.7 m² private pool', extras: 'Kitchen-living room · Guest WC · Terrace with relaxation area · Lower-level pool · Ocean view' },
    { name: '3-bedroom villa · Type 1', area: 167, quantity:7, bedrooms: 3, floors: 3, bathrooms: 3, guestWC:true, pool: '12 m² lower-level pool + 12.2 m² upper-level pool', extras: 'Kitchen-living room · Guest WC · Terrace with relaxation area · Balcony · Ocean view' },
    { name: '3-bedroom villa · Type 2', area: 121, quantity:1, bedrooms: 3, floors: 2, bathrooms: 3, guestWC:true, pool: '11.7 m² private pool', extras: 'Kitchen-living room · Guest WC · Terrace with relaxation area · Ocean view' }
  ]
};
// Homepage unit cards follow the updated Solvyn City project naming.
residences['solvyn-apartment'] = [{ ...residences.pandawa[0], name: 'Apartment' }];
residences['solvyn-villa101'] = [{ ...residences.pandawa[1], name: 'Villa 101' }];
function showResidence(project, index) {
  const residence = residences[project][index];
  const facts = [
    ['Floor area', `${residence.area} m²`], ['Bedrooms', residence.bedrooms],
    ['Floors', residence.floors ?? 'Ask the team'], ['Bathrooms', residence.bathrooms], ['Pool', residence.pool]
  ];
  document.querySelector('#residence-specifications').innerHTML = `<dl class="residence-facts">${facts.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl><p class="residence-features">${residence.extras}</p>`;
}
const details = {
  solvyn: { title: 'Solvyn City.', label: 'OUR FLAGSHIP / BUKIT, BALI', image: 'assets/project.webp', body: 'A premium villa and apartment development with a planned surf wave, a wellness cluster focused on biohacking and preventive health, and an event space for weddings and gatherings.', rows: ['Published location guide · 2 minutes from the ocean', 'Published location guide · 20 minutes from Ngurah Rai Airport', 'Travel times are indicative and vary with route and traffic.'], note: 'Specifications are from the company website. Confirm current availability, pricing and final plans with the team. The image is a concept illustration, not an approved project rendering.' },
  pandawa: { title: 'Solvyn City Phase 1.', label: 'RESIDENCES / BUKIT, BALI', image: 'assets/hero.webp', body: 'Apartments and two- to three-bedroom villas in Bukit, with published layouts from 40 to 234 m². Visit the project in person with the Sansara Development team.', rows: ['Apartments · Balcony, shared pool and parking', 'Villas · BBQ area and 15 m² private pools', 'Personal tours · Available by arrangement'], note: 'Specifications are from the company website. Confirm current availability, pricing and final plans with the team. The image is a concept illustration, not an approved project rendering.' },
  progress: { title: 'See Solvyn City Phase 1 in person.', label: 'PERSONAL PROJECT TOUR / BALI', body: 'The team invites visitors in Bali to a personal tour of Solvyn City Phase 1. Arrange a time to see the project and ask about its latest construction progress.', rows: ['Project · Solvyn City Phase 1', 'Contact · WhatsApp +62 822 3537 2572', 'Please share your preferred date and time.'], note: 'The source website does not publish dated milestones or a completion percentage. Ask the team for the latest progress report.' },
  privacy: { title: 'Your privacy.', label: 'WEBSITE PREVIEW', body: 'Preparing an enquiry happens locally in your browser. No form entries are submitted automatically. You can download a copy or choose to continue to WhatsApp.', rows: ['Opening the WhatsApp draft shares its contents with WhatsApp; you decide whether to send it to the team.', 'No analytics or marketing cookies are implemented. Google Fonts, Tailwind CDN, the map-library CDN and OpenStreetMap receive normal resource requests.', 'External social and messaging services apply their own privacy policies.'], note: 'Form entries are not saved by this prototype after the page session. A final legal privacy policy is still needed before launch.' }
};
details['solvyn-apartment'] = { ...details.pandawa, title: 'Apartment', label: 'SOLVYN CITY / RESIDENCES', image: 'assets/interior.webp', body: 'A one-bedroom apartment at Solvyn City, with space for everyday living.', rows: [] };
details['solvyn-villa101'] = { ...details.pandawa, title: 'Villa 101', label: 'SOLVYN CITY / RESIDENCES', image: 'assets/hero.webp', body: 'A two-bedroom villa at Solvyn City, with a private pool and room to unwind.', rows: [] };
function openConsult() {
  closeMenu();
  if (detailDialog.open) detailDialog.close();
  consultDialog.showModal();
  document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-consult]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.interest) document.querySelector('#interest').value = button.dataset.interest;
  openConsult();
}));
document.querySelectorAll('[data-detail]').forEach(button => button.addEventListener('click', () => {
  const data = details[button.dataset.detail];
  const project = button.dataset.detail;
  const selector = residences[project] ? `<label for="residence-type">Explore residence types</label><select id="residence-type">${residences[project].map((r, i) => `<option value="${i}">${r.name} — ${r.area} m²</option>`).join('')}</select><div id="residence-specifications" aria-live="polite"></div>` : '';
  document.querySelector('#detail-content').innerHTML = `<span class="eyebrow">${data.label}</span><h2 id="detail-title">${data.title}</h2>${data.image ? `<img src="${data.image}" alt="Architectural concept illustration">` : ''}<p class="detail-body">${data.body}</p><div class="detail-list">${data.rows.map(row => `<p>${row}</p>`).join('')}</div>${selector}<p class="small-note">${data.note}</p>${project !== 'privacy' ? `<button class="dark-button" id="detail-consult">${project === 'progress' ? 'Arrange a personal tour' : 'Enquire about this residence'} <span aria-hidden="true">↗</span></button>` : ''}${project === 'solvyn' ? '<button class="text-link" id="request-presentation">Request the project presentation ↗</button>' : ''}`;
  if (residences[project]) {
    const requestedIndex = Number(button.dataset.residenceIndex ?? 0);
    const selectedIndex = Number.isInteger(requestedIndex) && residences[project][requestedIndex] ? requestedIndex : 0;
    document.querySelector('#residence-type').value = String(selectedIndex);
    showResidence(project, selectedIndex);
    document.querySelector('#residence-type').addEventListener('change', e => showResidence(project, Number(e.target.value)));
  }
  document.querySelector('#request-presentation')?.addEventListener('click', () => {
    document.querySelector('#interest').value = 'Solvyn City presentation';
    openConsult();
  });
  document.querySelector('#detail-consult')?.addEventListener('click', () => {
    const interest = document.querySelector('#interest');
    interest.querySelector('[data-residence]')?.remove();
    if (residences[project]) {
      const residence = residences[project][Number(document.querySelector('#residence-type').value)];
      const option = new Option(`${project === 'solvyn' ? 'Solvyn City Phase 2' : 'Solvyn City Phase 1'} — ${residence.name} (${residence.area} m²)`);
      option.dataset.residence = 'true';
      interest.add(option);
      interest.value = option.value;
    } else interest.value = 'Solvyn City Phase 1 tour';
    openConsult();
  });
  detailDialog.showModal();
  document.body.classList.add('modal-open');
}));
const stageDialog = document.querySelector('#stage-dialog');
document.querySelectorAll('.stage-image').forEach(button => {
  button.addEventListener('click', () => {
    const source = button.querySelector('img');
    const image = document.querySelector('#stage-dialog-image');
    image.src = source.currentSrc || source.src;
    image.alt = source.alt;
    document.querySelector('#stage-dialog-title').textContent = button.closest('li').querySelector('h3').textContent;
    stageDialog.showModal();
    document.body.classList.add('modal-open');
  });
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { if (!document.querySelector('dialog[open]')) document.body.classList.remove('modal-open'); });
  dialog.addEventListener('click', e => {
    const bounds = dialog.getBoundingClientRect();
    if (e.target === dialog && (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom)) dialog.close();
  });
});

let enquiryUrl;
const form = document.querySelector('#consult-form');
const download = document.querySelector('#enquiry-download');
const formStatus = document.querySelector('#form-status');
const whatsappDraft = document.querySelector('#enquiry-whatsapp');
function clearPreparedEnquiry() {
  whatsappDraft.hidden = true;
  whatsappDraft.removeAttribute('href');
  download.hidden = true;
  formStatus.hidden = true;
  if (enquiryUrl) { URL.revokeObjectURL(enquiryUrl); enquiryUrl = undefined; }
}
// Programmatic interest changes should also invalidate an older prepared draft.
consultDialog.addEventListener('close', clearPreparedEnquiry);
form.addEventListener('input', () => {
  clearPreparedEnquiry();
});
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const draft = `Hello Sansara Development,\nMy name is ${values.get('name')}.\nEmail: ${values.get('email')}\nI am interested in: ${values.get('interest')}.\n\n${values.get('message') || 'Please send me the current details and next steps.'}`;
  const text = `SANSARA DEVELOPMENT — CONSULTATION ENQUIRY\n\nName: ${values.get('name')}\nEmail: ${values.get('email')}\nInterest: ${values.get('interest')}\n\n${values.get('message') || 'No additional message.'}\n\nPrepared locally. This enquiry has not been sent.`;
  if (enquiryUrl) URL.revokeObjectURL(enquiryUrl);
  enquiryUrl = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
  download.href = enquiryUrl;
  download.hidden = false;
  whatsappDraft.href = `https://wa.me/6282235372572?text=${encodeURIComponent(draft)}`;
  whatsappDraft.hidden = false;
  formStatus.textContent = 'Your enquiry is ready. Continue in WhatsApp to review and send it, or download a copy. Nothing has been sent yet.';
  formStatus.hidden = false;
});
/* Shared accordion motion keeps native details semantics and keyboard activation. */
const accordionControllers = [];
document.querySelectorAll('#faq details').forEach(details => {
  const summary = details.querySelector('summary');
  const group = details.getAttribute('name');
  // Coordinate exclusive groups ourselves so closing siblings can animate too.
  details.removeAttribute('name');
  const content = document.createElement('div');
  content.className = 'accordion-content';
  while (summary.nextSibling) content.append(summary.nextSibling);
  details.append(content);
  let expanded = details.open;
  let heightAnimation;
  let textAnimation;
  const finish = () => {
    heightAnimation?.cancel();
    textAnimation?.cancel();
    heightAnimation = null;
    textAnimation = null;
    details.open = expanded;
    details.style.removeProperty('height');
    details.style.removeProperty('overflow');
    content.inert = !expanded;
    summary.setAttribute('aria-expanded', String(expanded));
  };
  const setExpanded = next => {
    const startHeight = details.getBoundingClientRect().height;
    const startOpacity = details.open ? getComputedStyle(content).opacity : '0';
    expanded = next;
    summary.setAttribute('aria-expanded', String(next));
    heightAnimation?.cancel();
    textAnimation?.cancel();
    if (reducedMotion.matches || !details.animate) { finish(); return; }
    details.open = true;
    content.inert = !next;
    details.style.height = 'auto';
    const style = getComputedStyle(details);
    const border = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    const endHeight = next ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + border;
    details.style.height = `${startHeight}px`;
    details.style.overflow = 'hidden';
    heightAnimation = details.animate([{ height: `${startHeight}px` }, { height: `${endHeight}px` }], {
      duration: 380, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'forwards'
    });
    textAnimation = content.animate([{ opacity: startOpacity }, { opacity: next ? 1 : 0 }], {
      duration: next ? 320 : 180, easing: 'ease-out', fill: 'forwards'
    });
    heightAnimation.onfinish = finish;
  };
  const controller = { group, setExpanded, finish, isExpanded: () => expanded };
  accordionControllers.push(controller);
  summary.setAttribute('aria-expanded', String(expanded));
  content.inert = !expanded;
  summary.addEventListener('click', event => {
    event.preventDefault();
    const next = !expanded;
    if (next && group) accordionControllers.forEach(other => {
      if (other !== controller && other.group === group && other.isExpanded()) other.setExpanded(false);
    });
    setExpanded(next);
  });
});
window.addEventListener('resize', () => accordionControllers.forEach(item => item.finish()));
reducedMotion.addEventListener('change', () => accordionControllers.forEach(item => item.finish()));



const technologyFlips = new Map();
let cancelTechnologyDemo = () => {};
document.querySelectorAll('.technology-flip').forEach(card => {
  const front = card.querySelector('.technology-front');
  const back = card.querySelector('.technology-back');
  const returnButton = card.querySelector('.technology-flip-back');
  const flip = (expanded, moveFocus = true) => {
    card.dataset.flipped = String(expanded);
    front.setAttribute('aria-expanded', String(expanded));
    front.inert = expanded;
    back.inert = !expanded;
    front.setAttribute('aria-hidden', String(expanded));
    back.setAttribute('aria-hidden', String(!expanded));
    if (moveFocus) (expanded ? returnButton : front).focus({ preventScroll: true });
  };
  technologyFlips.set(card, flip);
  card.addEventListener('pointerenter', event => {
    if (event.pointerType !== 'mouse') return;
    cancelTechnologyDemo(true);
    flip(true, false);
  });
  card.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse' && !card.contains(document.activeElement)) flip(false, false);
  });
  card.addEventListener('focusout', event => {
    if (!card.contains(event.relatedTarget) && !card.matches(':hover')) flip(false, false);
  });
  front.addEventListener('click', () => flip(true));
  returnButton.addEventListener('click', () => flip(false));
  back.addEventListener('click', event => {
    if (!event.target.closest('a, button')) flip(false);
  });
});

// Preserve each rule's brand color while revealing only the line itself.
const dividerObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('line-visible');
      dividerObserver.unobserve(entry.target);
    }
  });
}, { threshold: .2 }) : null;
document.querySelectorAll('.section-label, .stage-caption').forEach(divider => {
  divider.style.setProperty('--divider-color', getComputedStyle(divider).borderTopColor);
  divider.style.borderTopColor = 'transparent';
  divider.classList.add('divider-reveal');
  if (reducedMotion.matches || !dividerObserver) divider.classList.add('line-visible');
  else dividerObserver.observe(divider);
});

const invitationRow = document.querySelector('.technology-flip-row');
const invitationCard = invitationRow?.querySelector('.technology-flip');
// Demonstrate once per page load, without moving focus.
if (invitationCard && 'IntersectionObserver' in window && !reducedMotion.matches) {
  let started = false;
  let demonstrating = false;
  let startTimer;
  let returnTimer;
  const stopDemo = (restore = false) => {
    clearTimeout(startTimer);
    clearTimeout(returnTimer);
    invitationObserver.disconnect();
    if (restore && demonstrating) technologyFlips.get(invitationCard)(false, false);
    demonstrating = false;
  };
  cancelTechnologyDemo = stopDemo;
  const invitationObserver = new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio < .55) {
      if (started) stopDemo(true);
      return;
    }
    if (started) return;
    started = true;
    startTimer = setTimeout(() => {
      demonstrating = true;
      technologyFlips.get(invitationCard)(true, false);
      returnTimer = setTimeout(() => stopDemo(true), 2400);
    }, 450);
  }, { threshold: [0, .55] });
  invitationObserver.observe(invitationCard);
  // User interaction takes ownership so no timer fights a manual flip.
  invitationRow.addEventListener('pointerdown', () => stopDemo(), { capture: true });
  invitationRow.addEventListener('focusin', () => stopDemo());
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) stopDemo(true);
  });
}

const floatingContact = document.querySelector('.floating-contact');
const contactToggle = floatingContact.querySelector('.contact-toggle');
const contactOptions = floatingContact.querySelector('.contact-options');
const setContactOpen = open => {
  floatingContact.dataset.open = String(open);
  contactToggle.setAttribute('aria-expanded', String(open));
  contactToggle.setAttribute('aria-label', open ? 'Close contact options' : 'Open contact options');
  contactOptions.inert = !open;
  contactOptions.setAttribute('aria-hidden', String(!open));
};
contactToggle.addEventListener('click', () => {
  const open = floatingContact.dataset.open !== 'true';
  setContactOpen(open);
  if (open) contactOptions.querySelector('a').focus({ preventScroll: true });
});
document.addEventListener('pointerdown', event => {
  if (!floatingContact.contains(event.target)) setContactOpen(false);
});
floatingContact.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setContactOpen(false);
    contactToggle.focus({ preventScroll: true });
  }
});
floatingContact.addEventListener('focusout', event => {
  if (!floatingContact.contains(event.relatedTarget)) setContactOpen(false);
});

const heroSlides = [...document.querySelectorAll('.hero-slide')];
if (heroSlides.length > 1) {
  const zooms = new Map();
  let currentSlide = 0;
  let carouselTimer;
  let heroVisible = true;
  let ready = false;
  const zoomSlide = slide => {
    zooms.get(slide)?.cancel();
    zooms.set(slide, slide.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.09)' }], {
      duration: 8000, easing: 'linear', fill: 'forwards'
    }));
  };
  const syncCarousel = () => {
    clearInterval(carouselTimer);
    const running = ready && !reducedMotion.matches && !document.hidden && heroVisible;
    zooms.forEach(animation => running ? animation.play() : animation.pause());
    if (!running) return;
    if (!zooms.has(heroSlides[currentSlide])) zoomSlide(heroSlides[currentSlide]);
    carouselTimer = setInterval(() => {
      const next = (currentSlide + 1) % heroSlides.length;
      const incoming = heroSlides[next];
      if (!incoming.complete || !incoming.naturalWidth) return;
      zoomSlide(incoming);
      incoming.classList.add('is-active');
      heroSlides[currentSlide].classList.remove('is-active');
      currentSlide = next;
    }, 6000);
  };
  document.addEventListener('visibilitychange', syncCarousel);
  reducedMotion.addEventListener('change', syncCarousel);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    syncCarousel();
  }).observe(document.querySelector('#home'));
  Promise.allSettled(heroSlides.map(slide => slide.decode())).then(() => {
    ready = true;
    syncCarousel();
  });
}

const baliMapElement = document.querySelector('#bali-map');
if (baliMapElement) {
  // Google Maps user pin: 6P3Q554G+34, Kutuh (centre of the Plus Code cell).
  const origin = [-8.8448125, 115.1753125];
  const destinations = [
    {name:'Pandawa Beach',kind:'Ocean & coast',point:[-8.8453,115.1864]},
    {name:'Melasti Beach',kind:'Ocean & coast',point:[-8.8482935,115.1631697],mapsUrl:'https://maps.app.goo.gl/9gdF7s6V9hFVWqTi9'},
    {name:'GWK Cultural Park',kind:'Culture',point:[-8.81039,115.16462]},
    {name:'Uluwatu Temple',kind:'Culture & sunset',point:[-8.82939,115.08441]},
    {name:'Ngurah Rai Airport',kind:'International connections',point:[-8.7475,115.169167]},
    {name:'Asian Intercultural School Bali',kind:'Education',point:[-8.800690638377342,115.14609869280723],mapsUrl:'https://maps.app.goo.gl/CxVK1GqEST3Uav5N9'},
    {name:'Nusa Medica Clinic Pecatu',kind:'Healthcare',point:[-8.8301691,115.1252524],mapsUrl:'https://maps.app.goo.gl/pXxoXecSuK33SHYg6'},
    {name:'Bali Collection',kind:'Shopping & dining',point:[-8.80137,115.23204],mapsUrl:'https://maps.app.goo.gl/rwHysEJNVHM7946Y7'}
  ];
  const distanceKm = point => {
    const rad = value => value * Math.PI / 180;
    const a = Math.sin(rad(point[0]-origin[0])/2)**2 + Math.cos(rad(origin[0]))*Math.cos(rad(point[0]))*Math.sin(rad(point[1]-origin[1])/2)**2;
    return (6371 * 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a))).toFixed(1);
  };
  const list = document.querySelector('#location-list');
  let map, selectedLine;
  const markers = [];
  const buttons = [];
  const directions = item => 'https://www.google.com/maps/dir/?api=1&origin='+origin.join(',')+'&destination='+encodeURIComponent(item.point.join(','))+'&travelmode=driving';
  destinations.forEach((item,index) => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'location-choice';button.setAttribute('aria-pressed','false');
    button.innerHTML = `<div>${item.name}<span>${item.kind}</span></div><strong>${distanceKm(item.point)} km</strong>`;
    button.addEventListener('click', () => {
      buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      if (!map) { window.open(directions(item),'_blank','noopener,noreferrer'); return; }
      if (selectedLine) map.removeLayer(selectedLine);
      selectedLine = L.polyline([origin,item.point],{color:'#B69E72',weight:2,dashArray:'6 8'}).addTo(map);
      map.fitBounds([origin,item.point],{padding:[55,55],maxZoom:14,animate:!reducedMotion.matches});
      markers[index].openPopup();
    });
    list.append(button); buttons.push(button);
  });
  const locationScrollHint = document.querySelector('.location-scroll-hint');
  if (locationScrollHint) {
    const updateLocationScrollHint = () => {
      locationScrollHint.disabled = list.scrollTop + list.clientHeight >= list.scrollHeight - 2;
    };
    list.addEventListener('scroll', updateLocationScrollHint, {passive:true});
    locationScrollHint.addEventListener('click', () => list.scrollBy({top:list.clientHeight, behavior:reducedMotion.matches ? 'instant' : 'smooth'}));
    updateLocationScrollHint();
  }
  if (window.L) {
    baliMapElement.replaceChildren();
    map = L.map(baliMapElement,{scrollWheelZoom:true});
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    const destinationSymbols = {
      'Ocean & coast':'<path d="M3 17c2-2 4 2 6 0s4 2 6 0 4 2 6 0M3 21c2-2 4 2 6 0s4 2 6 0 4 2 6 0M5 13a7 7 0 0 1 14 0H5Zm7-7v10"/>',
      'Culture':'<path d="m3 9 9-6 9 6H3Zm2 3v7m5-7v7m4-7v7m5-7v7M3 21h18"/>',
      'Culture & sunset':'<path d="M4 21h16M6 21V11h12v10M4 11l8-4 8 4M8 7l4-4 4 4M10 21v-5h4v5"/>',
      'International connections':'<path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2"/>',
      'Education':'<path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v7"/>',
      'Healthcare':'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6m-3-3v6m-3 10v-5h6v5"/>',
      'Shopping & dining':'<path d="M4 9h16l-1 12H5L4 9Zm4 0V7a4 4 0 0 1 8 0v2"/>'
    };
    const icon = item => L.divIcon({className:'map-pin',html:`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${destinationSymbols[item.kind]}</svg>`,iconSize:[32,32],iconAnchor:[16,16]});
    L.marker(origin,{icon:L.divIcon({className:'map-pin-solvyn-logo',html:'<img src=\"assets/Logo/solvyn-city-map-icon.png\" alt=\"Solvyn City\">',iconSize:[42,42],iconAnchor:[21,42],popupAnchor:[0,-42]}),title:'Solvyn City'}).addTo(map).bindPopup('<strong>Solvyn City</strong><br>Jl. Karang Pandawa, Kutuh');
    destinations.forEach((item,index) => {
      const marker = L.marker(item.point,{icon:icon(item),title:item.name}).addTo(map).bindPopup(`<strong>${item.name}</strong><br>${distanceKm(item.point)} km straight-line from Solvyn City<br><a href="${directions(item)}" target="_blank" rel="noopener noreferrer">Driving directions ↗</a>${item.mapsUrl ? `<br><a href="${item.mapsUrl}" target="_blank" rel="noopener noreferrer">View on Google Maps ↗</a>` : ''}`);
      marker.on('click',()=>buttons[index].click());markers.push(marker);
    });
    const reset = () => {
      if(selectedLine) {map.removeLayer(selectedLine);selectedLine=null;}
      buttons.forEach(b=>b.setAttribute('aria-pressed','false'));map.closePopup();
      map.fitBounds([origin,...destinations.map(d=>d.point)],{padding:[45,45],animate:!reducedMotion.matches});
    };
    document.querySelector('#map-reset').addEventListener('click',reset);reset();
  } else {
    baliMapElement.innerHTML='<p class="map-fallback">The interactive map could not load. Select a destination to open driving directions in Google Maps.</p>';
    document.querySelector('#map-reset').hidden=true;
  }
}

// Floating back navigation on the interior pages.
document.querySelector('.floating-back')?.addEventListener('click', () => {
  if (window.history.length > 1) window.history.back();
  else window.location.assign('index.html');
});