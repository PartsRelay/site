# Parts Relay site

Marketing site for Parts Relay, parts enquiry software for distributors and repair shops.

Built with [Astro](https://astro.build). The output is static HTML, CSS and a small amount of JavaScript.

## Layout

- `src/pages/` one file per page. The file path is the URL, so `src/pages/tools/vin-check.astro` is `/tools/vin-check/`
- `src/layouts/` the page shell (`Layout.astro`) and the two shells built on it, for journal articles and workshop pages
- `src/components/` the header, the footer and blocks used on more than one page
- `src/styles/` stylesheets, loaded in the order listed in `Layout.astro`. Class names start with the area they belong to: `site-`, `home-`, `tool-`, `team-`, `lib-`, `workshop-`, `brand-`
- `src/scripts/` browser scripts for the menu, the home page drawings, the two tools and the filters
- `src/site.js` contact address and policy links used in more than one place
- `public/assets/` images, video, fonts and the brand kit download, copied as they are
- `public/worksheets/` the Markdown worksheets linked from the workshop pages

## Running it

Needs Node 22 or later.

```
npm install
npm run dev
```

The dev server prints its address, normally http://localhost:4321.

## Building

```
npm run build
```

The site is written to `dist/`. `npm run preview` serves that folder locally.

Set `SITE_ORIGIN` when building for production so canonical links are absolute and the sitemap is written:

```
SITE_ORIGIN=https://www.example.com npm run build
```

Without it the canonicals are root-relative and no sitemap is produced.

## Formatting

```
npm run format
```

`npm run format:check` reports files that need it.

## Notes

- Privacy Policy, Cookie Policy and the cookie banner come from iubenda. The embed script has to stay the first tag in `<head>` (see `src/layouts/Layout.astro`).
- Links and asset paths start at `/`, so the site has to be served from the domain root.
- `public/assets/parts-relay-brand-kit.zip` is the download on the brand page. Rebuild the archive by hand if a logo or font in it changes.
- Fonts are Manrope and Source Sans 3 under the SIL Open Font License. The licence texts are in `public/assets/licenses/`.
