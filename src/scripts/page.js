import { mount } from './motion.js';

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

document.querySelector('.skip-main').addEventListener('click', (event) => {
  event.preventDefault();
  document.getElementById('main').focus({ preventScroll: true });
});

// Buttons that move to a section further down the same page.
document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-jump]');
  const target = button && document.getElementById(button.dataset.jump);
  if (!target) return;
  const menu = button.closest('details');
  if (menu) menu.open = false;
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  target.scrollIntoView({ block: 'start', behavior: reducedMotion.matches ? 'instant' : 'smooth' });
});

mount(document.querySelector('.base-motion'), { src: '/assets/cta-lines.webm', variant: 'cta' });
