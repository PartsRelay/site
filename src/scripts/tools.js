// VIN format check and enquiry builder. Both pages share the details the visitor has typed,
// so a VIN checked on one page is already filled in on the other.
const STORAGE_KEY = 'parts-relay-enquiry';
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/;

const workspace = document.querySelector('#page-workspace');
const form = workspace.querySelector('[data-tool-form]');
const formView = workspace.querySelector('[data-tool-view="form"]');
const resultView = workspace.querySelector('[data-tool-view="result"]');
const isVinCheck = form.dataset.toolForm === 'vin';

const saved = restore();
const enquiry = { part: '', quantity: '1', vin: '', vehicle: '', notes: '' };
for (const name of Object.keys(enquiry)) {
  if (typeof saved[name] === 'string') enquiry[name] = saved[name];
}

function restore() {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
}
function remember(extra = {}) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...enquiry, ...extra }));
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
  for (const other of form.querySelectorAll('[aria-invalid]')) {
    if (other !== input) clearFieldError(other);
  }
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

function enquiryText() {
  const lines = [
    'Could you quote the following part?',
    '',
    'Part: ' + enquiry.part,
    'Quantity: ' + enquiry.quantity,
  ];
  if (enquiry.vehicle) lines.push('Vehicle: ' + enquiry.vehicle);
  if (enquiry.vin) lines.push('VIN: ' + enquiry.vin);
  if (enquiry.notes) lines.push('', enquiry.notes);
  return lines.join('\n');
}

async function copyEnquiry() {
  const output = resultView.querySelector('#page-enquiry-text');
  const status = resultView.querySelector('[data-tool-copy-status]');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(output.value);
    status.textContent = 'Enquiry copied.';
  } catch {
    output.focus();
    output.select();
    output.setSelectionRange(0, output.value.length);
    let copied = false;
    try {
      copied = document.execCommand('copy');
    } catch {
      // The visitor can still copy the selected text by hand.
    }
    status.textContent = copied
      ? 'Enquiry copied.'
      : 'The enquiry is selected. Choose Copy on your device.';
  }
}

form.addEventListener('input', (event) => {
  const input = event.target;
  if (!Object.hasOwn(enquiry, input.name)) return;
  clearFieldError(input);
  enquiry[input.name] = input.value;
  remember();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  for (const [name, value] of new FormData(form)) {
    if (Object.hasOwn(enquiry, name)) enquiry[name] = value.trim();
  }
  const vin = enquiry.vin.replace(/\s/g, '').toUpperCase();
  if ((vin || isVinCheck) && !VIN_PATTERN.test(vin)) {
    showFieldError(
      form.elements.vin,
      'Enter 17 letters and numbers. A VIN uses the digits 0 and 1 and excludes the letters I, O and Q.'
    );
    return;
  }
  enquiry.vin = vin;
  form.elements.vin.value = vin;

  if (isVinCheck) {
    resultView.querySelector('#page-checked-vin').value = vin;
  } else {
    if (!enquiry.part) {
      showFieldError(form.elements.part, 'Enter the name of the part.');
      return;
    }
    const count = Number(enquiry.quantity);
    if (!Number.isSafeInteger(count) || count < 1 || count > 9999) {
      showFieldError(form.elements.quantity, 'Enter a whole number of parts between 1 and 9999.');
      return;
    }
    enquiry.quantity = String(count);
    form.elements.quantity.value = enquiry.quantity;
    resultView.querySelector('#page-enquiry-text').value = enquiryText();
    resultView.querySelector('[data-tool-copy-status]').textContent = '';
  }
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
    case 'use-vehicle':
      remember({ startAtPart: true });
      break;
    case 'edit-vin':
      show(formView, '#page-field-vin');
      break;
    case 'edit-enquiry':
      show(formView, '#page-field-part');
      break;
    case 'copy':
      copyEnquiry();
      break;
  }
});

for (const field of form.elements) {
  field.disabled = false;
  if (Object.hasOwn(enquiry, field.name)) field.value = enquiry[field.name];
}
if (!isVinCheck && saved.startAtPart) {
  remember();
  focusIn(formView, '#page-field-part');
}
