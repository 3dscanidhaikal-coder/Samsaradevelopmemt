(() => {
  const hero = document.querySelector('.projects-hero');
  if (!hero) return;
  const slides = [...hero.querySelectorAll('.highlight-slide')];
  const pause = hero.querySelector('.highlight-pause');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0, timer, paused = false, visible = true, focused = false, hovered = false;
  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
      slide.inert = i !== index;
      slide.setAttribute('aria-hidden', String(i !== index));
    });
    hero.querySelector('.highlight-count').textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  function schedule() {
    clearInterval(timer);
    if (!paused && !motion.matches && !document.hidden && visible && !focused && !hovered)
      timer = setInterval(() => show(index + 1), 6500);
  }
  hero.querySelectorAll('[data-slide-step]').forEach(button => button.addEventListener('click', () => {show(index + Number(button.dataset.slideStep)); schedule();}));
  pause.addEventListener('click', () => {
    paused = !paused;
    pause.textContent = paused ? '▶' : 'Ⅱ';
    pause.setAttribute('aria-pressed', String(paused));
    pause.setAttribute('aria-label', paused ? 'Play project carousel' : 'Pause project carousel');
    schedule();
  });
  hero.addEventListener('focusin', () => {focused = true; schedule();});
  hero.addEventListener('focusout', event => {focused = hero.contains(event.relatedTarget); schedule();});
  hero.addEventListener('pointerenter', event => {if (event.pointerType === 'mouse') {hovered = true; schedule();}});
  hero.addEventListener('pointerleave', () => {hovered = false; schedule();});
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', schedule);
  new IntersectionObserver(entries => {visible = entries[0].isIntersecting; schedule();}).observe(hero);
  schedule();
})();
