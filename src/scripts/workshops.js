// Role filter on the workshops directory.
const directory = document.querySelector('.workshop-directory');
const filters = directory.querySelectorAll('[data-workshop-filter]');

directory.addEventListener('click', (event) => {
  const filter = event.target.closest('[data-workshop-filter]');
  if (!filter) return;
  const role = filter.dataset.workshopFilter;
  filters.forEach((button) => button.setAttribute('aria-pressed', String(button === filter)));
  let shown = 0;
  directory.querySelectorAll('[data-workshop-role]').forEach((row) => {
    row.hidden = role !== 'All' && row.dataset.workshopRole !== role;
    if (!row.hidden) shown++;
  });
  directory.querySelector('.workshop-status').textContent =
    shown + (shown === 1 ? ' workshop' : ' workshops');
});
