'use strict';
(() => {
  const counters = [...document.querySelectorAll('[data-count-to]')];
  if (!counters.length) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const formatter = new Intl.NumberFormat('en-US');
  let frame;
  const render = progress => counters.forEach(counter => {
    counter.textContent = formatter.format(Math.round(Number(counter.dataset.countTo) * progress));
  });
  const finish = () => { cancelAnimationFrame(frame); render(1); };
  const start = () => {
    cancelAnimationFrame(frame);
    if (reducedMotion.matches) return finish();
    render(0);
    const began = performance.now();
    const tick = now => {
      const progress = Math.min((now - began) / 1700, 1);
      render(1 - Math.pow(1 - progress, 3));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
  };
  let observer;
  const watch = () => {
    observer?.disconnect();
    finish();
    if (reducedMotion.matches) return;
    observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        start();
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(counters[0].closest('dl'));
  };
  window.addEventListener('pageshow', watch);
  window.addEventListener('pagehide', finish);
  reducedMotion.addEventListener('change', finish);
})();
