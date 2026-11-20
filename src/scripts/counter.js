// Headlamp checklist that opens over the photo on the counter guide.
const panel = document.querySelector('.team-exchange');
const checks = JSON.parse(panel.dataset.checks);
const opener = panel.parentElement.querySelector('[data-team-open]');
const previous = panel.querySelector('[data-team-prev]');
const next = panel.querySelector('[data-team-next]');
let current = 0;

function show(index, control) {
  current = index;
  panel.querySelector('small').textContent = checks[index].topic;
  panel.querySelector('blockquote').textContent = checks[index].text;
  panel.querySelector('.team-exchange-controls span').textContent =
    index + 1 + ' / ' + checks.length;
  previous.disabled = index === 0;
  next.disabled = index === checks.length - 1;
  // Keep keyboard focus on a usable arrow when the one just pressed becomes disabled.
  if (control?.disabled) (control === next ? previous : next).focus({ preventScroll: true });
}
function close() {
  panel.hidden = true;
  opener.hidden = false;
  opener.setAttribute('aria-expanded', 'false');
  opener.focus({ preventScroll: true });
}

opener.addEventListener('click', () => {
  panel.hidden = false;
  opener.hidden = true;
  opener.setAttribute('aria-expanded', 'true');
  show(0);
  panel.querySelector('[data-team-close]').focus({ preventScroll: true });
});
panel.querySelector('[data-team-close]').addEventListener('click', close);
previous.addEventListener('click', () => show(current - 1, previous));
next.addEventListener('click', () => show(current + 1, next));
panel.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') close();
  else if (event.key === 'ArrowLeft' && current > 0) show(current - 1);
  else if (event.key === 'ArrowRight' && current < checks.length - 1) show(current + 1);
  else return;
  event.preventDefault();
});
