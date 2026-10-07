(() => {
  const gallery = document.querySelector('.flagship-carousel');
  if (!gallery) return;
  const slides = [...gallery.querySelectorAll('.flagship-slides img')];
  const content = [
    ['Solvyn City', 'A new expression of', 'contemporary island living.', 'Villas and apartments in Bukit. Surf, wellness and spaces to come together.'],
    ['Solvyn Restaurant', 'Good food.', 'Time well spent.', 'A place to gather around the table, share flavours and enjoy unhurried moments together.'],
    ['Solvyn Cafe', 'Your daily pause.', 'An easy island rhythm.', 'From a morning coffee to an afternoon conversation, a welcoming space for the little rituals of everyday life.'],
    ['Solvyn Hall', 'Come together.', 'Make it memorable.', 'A dedicated setting for celebrations, gatherings and the occasions that bring people closer.'],
    ['Solvyn Spa', 'Slow down.', 'Return to yourself.', 'A quieter side of Solvyn City, with space to step away from the everyday and make time for wellbeing.'],
    ['Solvyn River Surf', 'Find your flow.', 'Feel the energy.', 'A signature surf experience at the heart of the project, bringing movement and a new rhythm to island life.']
  ];
  let copyAnimations = [];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, timer, visible = false;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    gallery.querySelector('[data-flagship-count]').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    const [name, intro, emphasis, description] = content[current];
    gallery.querySelector('[data-flagship-title]').textContent = name;
    gallery.querySelector('.flagship-intro > span').textContent = intro;
    gallery.querySelector('.flagship-intro > em').textContent = emphasis;
    gallery.querySelector('.flagship-description').textContent = description;
    gallery.querySelector('[data-flagship-caption]').textContent = name;
    copyAnimations.forEach(animation => animation.cancel());
    copyAnimations = motion.matches ? [] : [...gallery.querySelectorAll('#flagship-title,.flagship-intro,.flagship-description')].map((element,i) => element.animate(
      [{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'translateY(0)'}],
      {duration:650,delay:i*60,easing:'ease-out',fill:'backwards'}
    ));
  }
  function schedule() {
    clearInterval(timer);
    if (visible && !document.hidden && !motion.matches) timer = setInterval(() => show(current + 1), 7000);
  }
  gallery.querySelectorAll('[data-flagship-step]').forEach(button => button.addEventListener('click', () => {
    show(current + Number(button.dataset.flagshipStep));
    schedule();
  }));
  document.addEventListener('visibilitychange', schedule);
  motion.addEventListener('change', schedule);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; schedule(); }, {threshold: 0.15}).observe(gallery);
})();
