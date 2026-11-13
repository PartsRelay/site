import { i18n } from 'astro:config/client'
import { getRelativeLocaleUrl } from 'astro:i18n'
import { IntlMessageFormat } from 'intl-messageformat'

type Messages = { [key: string]: string | Messages }

const files = import.meta.glob<Messages>('../locales/*/*.json', { eager: true, import: 'default' })
const { defaultLocale, locales } = i18n!

export function translator(locale = 'en-US') {
  return (key: string, values?: Record<string, string | number>) => {
    const [namespace, ...path] = key.split('.')
    const message = path.reduce<string | Messages | undefined>(
      (messages, part) => (messages as Messages | undefined)?.[part],
      files[`../locales/${locale}/${namespace}.json`]
    )

    if (typeof message !== 'string') throw new Error(`No text for ${key} in ${locale}`)

    return String(new IntlMessageFormat(message, locale).format(values))
  }
}

export const languages = (locales as { path: string; codes: string[] }[]).map(
  ({ path, codes: [code] }) => ({
    path,
    code,
    main: path === defaultLocale,
    href: getRelativeLocaleUrl(path),
    name: translator(code)(`languages.${code}`),
  })
)
