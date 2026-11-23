// VIN format check. The details the visitor typed are kept for the session,
// so coming back to the page doesn't mean typing the VIN again.
const STORAGE_KEY = 'parts-relay-enquiry';
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/;

const workspace = document.querySelector('#page-workspace');
const form = workspace.querySelector('[data-tool-form]');
const formView = workspace.querySelector('[data-tool-view="form"]');
const resultView = workspace.querySelector('[data-tool-view="result"]');

const saved = restore();
const details = { vin: '', vehicle: '' };
for (const name of Object.keys(details)) {
  if (typeof saved[name] === 'string') details[name] = saved[name];
}

function restore() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}
function remember() {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(details));
  } catch {
    // Private browsing can refuse storage. The tool still works on this page.
  }
}

function focusIn(view, selector) {
  const target = view.querySelector(selector);
  if (!target) return;
  target.focus({ preventScroll: true });
  target.scrollIntoView({ block: 'center', behavior: 'instant', inline: 'nearest' });
}
function show(view, selector) {
  formView.hidden = view !== formView;
  resultView.hidden = view !== resultView;
  focusIn(view, selector);
}

function clearFieldError(input) {
  const message = document.getElementById('page-error-' + input.name);
  if (!message) return;
  message.remove();
  input.removeAttribute('aria-invalid');
  input.removeAttribute('aria-describedby');
}
function showFieldError(input, text) {
  let message = document.getElementById('page-error-' + input.name);
  if (!message) {
    message = document.createElement('p');
    message.id = 'page-error-' + input.name;
    message.className = 'page-error';
    input.after(message);
  }
  message.textContent = text;
  input.setAttribute('aria-invalid', 'true');
  input.setAttribute('aria-describedby', message.id);
  input.focus();
}

form.addEventListener('input', (event) => {
  const input = event.target;
  if (!Object.hasOwn(details, input.name)) return;
  clearFieldError(input);
  details[input.name] = input.value;
  remember();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  for (const [name, value] of new FormData(form)) {
    if (Object.hasOwn(details, name)) details[name] = value.trim();
  }
  const vin = details.vin.replace(/\s/g, '').toUpperCase();
  if (!VIN_PATTERN.test(vin)) {
    // The message comes from the page, in the page's language.
    showFieldError(form.elements.vin, form.dataset.vinError);
    return;
  }
  details.vin = vin;
  form.elements.vin.value = vin;
  resultView.querySelector('#page-checked-vin').value = vin;
  remember();
  show(resultView, 'h2');
});

document.addEventListener('click', (event) => {
  const control = event.target.closest('[data-tool-action]');
  if (!control) return;
  switch (control.dataset.toolAction) {
    case 'jump':
      focusIn(formView.hidden ? resultView : formView, 'h2');
      break;
    case 'edit-vin':
      show(formView, '#page-field-vin');
      break;
  }
});

for (const field of form.elements) {
  field.disabled = false;
  if (Object.hasOwn(details, field.name)) field.value = details[field.name];
}
