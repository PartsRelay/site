export const assumptions = { days: 22, relayMinutes: 1, avoidedShare: 0.5 }

export const sliders = [
  {
    name: 'requests',
    letter: 'a',
    label: 'Requests a day',
    min: 5,
    max: 200,
    step: 5,
    value: 40,
    before: '',
    after: '',
  },
  {
    name: 'minutes',
    letter: 'b',
    label: 'Minutes to look one up by hand',
    min: 1,
    max: 20,
    step: 1,
    value: 6,
    before: '',
    after: ' min',
  },
  {
    name: 'hourly',
    letter: 'c',
    label: 'Cost of an hour at the counter',
    min: 10,
    max: 60,
    step: 1,
    value: 22,
    before: '€ ',
    after: '',
  },
  {
    name: 'returns',
    letter: 'd',
    label: 'Wrong parts sent back a month',
    min: 0,
    max: 60,
    step: 1,
    value: 8,
    before: '',
    after: '',
  },
  {
    name: 'returnCost',
    letter: 'e',
    label: 'Cost of each return',
    min: 5,
    max: 150,
    step: 5,
    value: 25,
    before: '€ ',
    after: '',
  },
] as const

export type Inputs = Record<(typeof sliders)[number]['name'], number>

export function sum({ requests, minutes, hourly, returns, returnCost }: Inputs) {
  const hours =
    (requests * assumptions.days * Math.max(0, minutes - assumptions.relayMinutes)) / 60
  const avoided = returns * assumptions.avoidedShare
  const month = hours * hourly + avoided * returnCost

  return {
    hours: format(hours),
    time: format(hours * hourly),
    avoided: format(avoided, 1),
    saved: format(avoided * returnCost),
    month: format(month),
    year: format(month * 12),
  }
}

function format(amount: number, digits = 0) {
  return amount.toLocaleString('en-GB', { maximumFractionDigits: digits })
}
