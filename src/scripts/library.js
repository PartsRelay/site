// Search and topic filter for the guide library and the journal.
const list = document.querySelector('[data-lib-list]');
const search = list.querySelector('[data-lib-search]');
const filters = [...list.querySelectorAll('[data-lib-filter]')];
const items = [...list.querySelectorAll('[data-lib-item]')];

function updateResults() {
  const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const active = filters.find((button) => button.getAttribute('aria-pressed') === 'true');
  const topic = active.dataset.libFilter;
  let shown = 0;
  for (const item of items) {
    const text = (item.textContent + ' ' + item.dataset.libTopic).toLocaleLowerCase();
    const visible =
      (topic === 'All' || item.dataset.libTopic === topic) &&
      words.every((word) => text.includes(word));
    item.hidden = !visible;
    if (visible) shown++;
  }
  list.querySelector('[data-lib-count]').textContent =
    shown + ' ' + (shown === 1 ? 'result' : 'results');
  list.querySelector('[data-lib-empty]').hidden = shown !== 0;
  list.querySelector('[data-lib-results]').hidden = shown === 0;
}

search.addEventListener('input', updateResults);

list.addEventListener('click', (event) => {
  const control = event.target.closest('[data-lib-filter], [data-lib-reset]');
  if (!control) return;
  const resetting = control.hasAttribute('data-lib-reset');
  const topic = resetting ? 'All' : control.dataset.libFilter;
  for (const button of filters) {
    button.setAttribute('aria-pressed', String(button.dataset.libFilter === topic));
  }
  if (resetting) {
    search.value = '';
    search.focus();
  }
  updateResults();
});

// Entries below the first screen fade in as they are scrolled into view.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver((entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry, index) => {
          entry.target.style.setProperty('--lib-delay', Math.min(index, 4) * 35 + 'ms');
          entry.target.classList.add('lib-entered');
          observer.unobserve(entry.target);
        });
    });
    for (const item of items) {
      const box = item.getBoundingClientRect();
      if (box.top >= window.innerHeight || box.bottom <= 0) observer.observe(item);
    }
  });
}
