// Placeholder plans and prices. Replace with the real ones before launch.
// Prices are euros per month. "yearly" is the monthly price when billed once a year.
// Plan names, taglines and feature lists are in src/i18n/pricing.js.

export const currency = 'EUR';
export const yearlySaving = 20;

export const plans = [
  { id: 'starter', monthly: 49, yearly: 39 },
  { id: 'workshop', monthly: 99, yearly: 79, featured: true },
  { id: 'enterprise', custom: true },
];

// Rows of the comparison table, one value per plan in the order above.
// true is a tick, false a dash, a number is formatted, and 'custom' or 'unlimited'
// take their word from the translations.
export const comparison = [
  ['teamMembers', 3, 10, 'unlimited'],
  ['searches', 500, 2000, 'custom'],
  ['plateVin', true, true, true],
  ['oem', true, true, true],
  ['aftermarket', true, true, true],
  ['history', true, true, true],
  ['whatsapp', false, true, true],
  ['priority', false, true, true],
  ['onboarding', false, false, true],
];
