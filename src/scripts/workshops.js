// Role filter on the workshops directory. The status text comes from the page
// so it reads in the page language; {count} is replaced with the number shown.
const directory = document.querySelector('.workshop-directory');
const filters = directory.querySelectorAll('[data-workshop-filter]');
const status = directory.querySelector('.workshop-status');

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
  const text = shown === 1 ? status.dataset.statusOne : status.dataset.statusOther;
  status.textContent = text.replace('{count}', String(shown));
});
