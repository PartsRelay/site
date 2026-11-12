export const appUrl: string = import.meta.env.APP_URL ?? 'http://localhost:5173'

export const sections = [
  { id: 'how', name: 'How it works', hint: 'four steps' },
  { id: 'gain', name: 'What you gain', hint: 'at the counter' },
  { id: 'costs', name: 'What it costs you today', hint: 'a worked example' },
  { id: 'price', name: 'The price', hint: 'what is included' },
  { id: 'counter', name: 'The counter', hint: 'one queue' },
  { id: 'whatsapp', name: 'On WhatsApp', hint: 'a conversation' },
  { id: 'film', name: 'The film', hint: '[30 s]' },
  { id: 'questions', name: 'Questions', hint: 'six answers' },
  { id: 'start', name: 'Sign in', hint: 'open your counter' },
]

export const price = {
  amount: '[YOUR PRICE]',
  terms: '[BILLING TERMS, TRIAL OR SETUP DETAILS]',
  answer: '[YOUR PRICE AND TERMS]',
}

export const measured = {
  source: '[CUSTOMER NAME, CITY] · [PERIOD]',
  minutes: '[N]',
  fewerReturns: '[N]',
  hours: '[N]',
}

export const film = {
  src: undefined as string | undefined,
  poster: undefined as string | undefined,
  label: '[BRAND FILM · 30 S]',
  length: '[00:30]',
}
