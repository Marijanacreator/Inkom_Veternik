/* Small, progressive enhancements. Contact and section links also work without JS. */
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) closeMenu();
});

const desktop = window.matchMedia('(min-width: 901px)');
desktop.addEventListener('change', closeMenu);

// Product rail: native scroll remains available to touch, keyboard and no-JS visitors.
const productTrack = document.querySelector('#product-track');
if (productTrack) {
  const previous = document.querySelectorAll('[data-carousel-prev]');
  const next = document.querySelectorAll('[data-carousel-next]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const updateButtons = () => {
    previous.forEach(button => button.disabled = productTrack.scrollLeft < 2);
    next.forEach(button => button.disabled = productTrack.scrollLeft + productTrack.clientWidth >= productTrack.scrollWidth - 2);
  };
  const move = direction => productTrack.scrollBy({left: direction * (productTrack.querySelector('.product-card').getBoundingClientRect().width + parseFloat(getComputedStyle(productTrack).columnGap)), behavior: motion.matches ? 'auto' : 'smooth'});
  previous.forEach(button => button.addEventListener('click', () => move(-1)));
  next.forEach(button => button.addEventListener('click', () => move(1)));
  productTrack.addEventListener('scroll', updateButtons, {passive:true});
  new ResizeObserver(updateButtons).observe(productTrack);
  updateButtons();
}
// Preserve old links to topics that now have their own pages.
if (location.pathname.endsWith('/resenja.html')) {
  const relocatedTopics = {'#povezani-sistemi':'sistemska-tehnologija.html', '#klimatizacija':'klima-uredjaji.html'};
  const followRelocatedTopic = () => {
    const destination = relocatedTopics[location.hash];
    if (destination) location.replace(destination);
  };
  window.addEventListener('hashchange', followRelocatedTopic);
  followRelocatedTopic();
}

// Local-page return control for long category and catalog pages.
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const updateTopControl = () => { backToTop.hidden = window.scrollY < 480; };
  window.addEventListener('scroll', updateTopControl, {passive: true});
  updateTopControl();
  backToTop.addEventListener('click', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top: 0, behavior: reduced ? 'instant' : 'smooth'});
    document.querySelector('.header .wordmark').focus({preventScroll: true});
  });
}
