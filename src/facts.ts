export const appUrl: string = import.meta.env.APP_URL ?? 'http://localhost:5173'

export const sections = [
  'how',
  'gain',
  'costs',
  'price',
  'counter',
  'whatsapp',
  'film',
  'questions',
  'start',
]

export const example = { plate: 'AB123CD', vehicle: 'Fiat Panda 1.2', code: '77367141' }

export const price = '[YOUR PRICE]'

export const measured = {
  source: '[CUSTOMER NAME, CITY] · [PERIOD]',
  minutes: '[N]',
  returns: '[N]',
  hours: '[N]',
}

export const film = {
  src: undefined as string | undefined,
  poster: undefined as string | undefined,
  length: '[00:30]',
}
