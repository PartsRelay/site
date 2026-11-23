// Search and topic filter for the guide library and the journal.
const list = document.querySelector('[data-lib-list]');
const search = list.querySelector('[data-lib-search]');
const filters = [...list.querySelectorAll('[data-lib-filter]')];
const items = [...list.querySelectorAll('[data-lib-item]')];
// The count message comes from the page in its own language, with {n} for the number.
const count = list.querySelector('[data-lib-count]');
const plural = new Intl.PluralRules(document.documentElement.lang);

function updateResults() {
  const words = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const active = filters.find((button) => button.getAttribute('aria-pressed') === 'true');
  const topic = active.dataset.libFilter;
  let shown = 0;
  for (const item of items) {
    // Every entry shows its topic label, so the visible text covers the topic in any language.
    const text = item.textContent.toLocaleLowerCase();
    const visible =
      (topic === 'All' || item.dataset.libTopic === topic) &&
      words.every((word) => text.includes(word));
    item.hidden = !visible;
    if (visible) shown++;
  }
  const message =
    plural.select(shown) === 'one' ? count.dataset.libCountOne : count.dataset.libCountOther;
  count.textContent = message.replace('{n}', String(shown));
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
