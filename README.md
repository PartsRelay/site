# Parts Relay site

The showcase site of Parts Relay: one static page built with [Astro](https://astro.build) and Tailwind. It calls no service: the fonts come from packages, the texts and the numbers live in the code, and Sign in is a link to the app.

## Run it

```sh
bun install
cp .env.example .env
bun run dev
```

- `APP_URL`: the address of the app, where every Sign in link leads (`<APP_URL>/login`).
- `SITE_URL`: the public address of this site, for the canonical link, `og:url` and `og:image`. Without it the page has none of the three.

## Structure

- `src/pages/index.astro`: the page, one component per section.
- `src/facts.ts`: the sections of the contents list and what is still a placeholder.
- `src/costs.ts`: the sliders, the assumptions and the sum of the worked example. The page renders it at build time and the browser runs the same function on every change.
- `src/styles/global.css`: the brand tokens of the app (navy, teal, mist, canvas, slate), the fonts and the animations, which stop under `prefers-reduced-motion`.
- `public/`: the favicon, the image of a shared link and `robots.txt`.

## Before going live

Replace every value in brackets:

- `price` and `measured` in `src/facts.ts`: the price with its terms, and the numbers measured at a customer.
- `film` in `src/facts.ts`: set `src` and `poster` to files in `public/` and the section plays the film instead of showing its placeholder.
- `assumptions` in `src/costs.ts`: the minutes a request takes with Parts Relay and the share of wrong parts avoided.

## Checks and deploy

- `bun run check`: types of the Astro and TypeScript files.
- `bun run build`: the static site in `dist`, which any static host serves as it is.
