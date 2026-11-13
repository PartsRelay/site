# Parts Relay site

The showcase site of Parts Relay: one static page per language built with [Astro](https://astro.build) and Tailwind. It calls no service: the fonts come from packages, the texts come from the [PartsRelay/locales](https://github.com/PartsRelay/locales) submodule, the favicon, the image of a shared link and `robots.txt` from the [PartsRelay/public](https://github.com/PartsRelay/public) one, the numbers live in the code, and Sign in is a link to the app.

## Run it

```sh
git clone --recurse-submodules https://github.com/PartsRelay/site.git
cd site
bun install
cp .env.example .env
bun run dev
```

A clone made without `--recurse-submodules` needs `git submodule update --init`.

- `SITE_URL`: the public address of this site, for the canonical link, `og:url` and `og:image`. Without it the page has none of the three.
- `UI_URL`: the address of the app, where every Sign in link leads (`<UI_URL>/login`).

The UI and the core use the same names: `SITE_URL`, `UI_URL` and `CORE_URL` always name the site, the app and the core.

The dev container of `.devcontainer` checks out the submodules, copies `.env` and installs, then runs `bun run dev` in the terminal of the editor that attaches, where Ctrl+C stops it and frees the port. `docker-compose.yml` publishes port 4321 on `127.0.0.1`. To share the site, run `cloudflared tunnel --url http://localhost:4321`, which the dev container has installed.

## Structure

- `src/pages/[...locale].astro`: the page of every language, one component per section.
- `src/facts.ts`: the order of the sections, the vehicle of the examples and what is still a placeholder.
- `src/costs.ts`: the sliders, the assumptions and the sum of the worked example. The page renders it at build time and the browser runs the same function on every change.
- `index.css`: the brand tokens of the app (navy, teal, mist, canvas, slate), the colors of the chat, the fonts and the animations, which stop under `prefers-reduced-motion`.
- `public/`: the git submodule of PartsRelay/public (branch `main`). Only its `static` folder is published: the favicon, the image of a shared link and `robots.txt`, the same files the UI serves. A file only this site needs goes in `src/assets` and is imported.
- `tests/unit` and `tests/e2e`: where the Vitest and the Playwright tests go. None exists yet.

## Texts and languages

- `locales/`: the git submodule of PartsRelay/locales (branch `main`), the only home of the texts, in ICU MessageFormat. `src/i18n.ts` reads every file at build time, so `t('site.cover.title')` reads `cover.title` of `<locale>/site.json`. The example chat shows the real WhatsApp replies of the `assistant` namespace.
- To add or change a text, commit it to the locales repository, run `git submodule update --remote locales` and commit the new pointer with the code.
- `i18n` of `astro.config.ts` lists the languages: English at `/`, Italian at `/it/`. Every page links the others with `hreflang`.
- The site is static, so the browser picks the language: the English page sends a visitor whose browser prefers another listed language to that page, once, unless they chose a language with the link in the header, which `localStorage` remembers.

## Before going live

Replace every value in brackets:

- `price` and `measured` in `src/facts.ts`: the price, and the numbers measured at a customer.
- `film` in `src/facts.ts`: import the film and its poster from `src/assets`, set `src` and `poster` to them and the section plays the film instead of showing its placeholder.
- `price.terms`, `questions.items.cost.answer`, `film.hint` and `film.label` in `site.json` of every locale.
- `assumptions` in `src/costs.ts`: the minutes a request takes with Parts Relay and the share of wrong parts avoided.

## Checks and deploy

- `bun run check`: types of the Astro and TypeScript files.
- `bun run build`: the static site in `dist`, which any static host serves as it is.
- `bun run test:unit` and `bun run test:e2e`: Vitest and Playwright, as described in `CLAUDE.md`. Both pass without tests for now.
