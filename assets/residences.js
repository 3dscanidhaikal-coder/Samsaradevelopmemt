(() => {
  const directory = document.querySelector('.residence-directory');
  if (!directory) return;
  const buttons = [...directory.querySelectorAll('[data-residence-filter]')];
  const sections = [...directory.querySelectorAll('.residence-list-section')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let animation;
  function select(id, animate = false) {
    const selected = sections.find(section => section.id === id);
    const showAll = !selected;
    animation?.cancel();
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.residenceFilter === (showAll ? 'all' : selected.id))));
    sections.forEach(section => {section.hidden = !showAll && section !== selected;});
    if (animate && !motion.matches) animation = (showAll ? directory : selected).animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}], {duration:300,easing:'ease-out'});
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    select(button.dataset.residenceFilter, true);
    history.replaceState(null, '', '#' + button.dataset.residenceFilter);
  }));
  window.addEventListener('hashchange', () => {
    select(location.hash.slice(1));
  });
  select(location.hash.slice(1));
})();

(() => {
 const banner = document.querySelector('.residences-banner');
 if (!banner) return;
 const images = [...banner.querySelectorAll('.residence-banner-slides img')];
 const headlines = [
   ['Space to unwind.', 'Room to feel at home.', 'Explore thoughtfully arranged apartments with space for the everyday moments that matter.'],
   ['Solvyn City villas.', 'A more private retreat.', 'Discover private villas with room to relax and settle into life in Bali.'],
   ['Solvyn City.', 'A place to connect.', 'Explore a collection of residences where contemporary spaces meet the rhythm of island life.']
 ];
 const heading = banner.querySelector('h1');
 const paragraph = banner.querySelector('.residences-banner-copy > p');
 let copyAnimations = [];

 const motion = matchMedia('(prefers-reduced-motion: reduce)');
 let current = 0, timer, visible = true, focused = false;
 function show(index) {
   current = (index + images.length) % images.length;
   images.forEach((image, i) => image.classList.toggle('is-active', i === current));
   const [title, emphasis, description] = headlines[current];
   heading.querySelector('span').textContent = title;
   heading.querySelector('em').textContent = emphasis;
   paragraph.textContent = description;
   copyAnimations.forEach(animation => animation.cancel());
   copyAnimations = motion.matches ? [] : [heading, paragraph].map((element, i) => element.animate(
     [{opacity:0, transform:'translateY(8px)'}, {opacity:1, transform:'translateY(0)'}],
     {duration:650, delay:i*70, easing:'ease-out', fill:'backwards'}
   ));
   banner.querySelector('[data-banner-count]').textContent = `${String(current+1).padStart(2,'0')} / 03`;
 }
 function schedule() {
   clearInterval(timer);
   if (!motion.matches && !document.hidden && visible && !focused) timer = setInterval(() => show(current+1), 6000);
 }
 banner.querySelectorAll('[data-banner-step]').forEach(button => button.addEventListener('click', () => {show(current+Number(button.dataset.bannerStep));schedule();}));
 banner.addEventListener('focusin',()=>{focused=true;schedule();});
 banner.addEventListener('focusout',event=>{focused=banner.contains(event.relatedTarget);schedule();});
 document.addEventListener('visibilitychange',schedule);
 motion.addEventListener('change',schedule);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();}).observe(banner);
 schedule();
})();
