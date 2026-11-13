# Parts Relay site

## Structure

- Repository root: `index.css` and the tool configs (`astro.config.ts`, `vitest.config.ts`, `playwright.config.ts`, `tsconfig.json`).
- `public/`: the git submodule of [PartsRelay/public](https://github.com/PartsRelay/public) (branch `main`), the files this site and the UI both serve from their root. `publicDir` of `astro.config.ts` is `public/static`, so only that folder is published: the favicon, the image of a shared link (`og.png`, 1200 by 630) and `robots.txt`. To add or change one, commit it to the public repository, run `git submodule update --remote public` and commit the new pointer. A file only this site needs goes in `src/assets` and is imported.
- `locales/`: the git submodule of [PartsRelay/locales](https://github.com/PartsRelay/locales) (branch `main`), the only home of the texts, in ICU MessageFormat. `src/i18n.ts` reads every file at build time, so `t('site.cover.title')` reads `cover.title` of `<locale>/site.json`. To add or change a text, commit it to the locales repository, run `git submodule update --remote locales` and commit the new pointer with the code. Clone with `--recurse-submodules` or run `git submodule update --init`.
- `src/pages/[...locale].astro`: the page of every language. `i18n` of `astro.config.ts` lists them: English at `/`, Italian at `/it/`.
- `src/layouts/Page.astro`: the head, the header and the footer. The head holds the canonical link, the `hreflang` links and the Open Graph tags.
- `src/components/`: one component per section of the page.
- `src/facts.ts`: the order of the sections, the vehicle of the examples and what is still a placeholder. `src/costs.ts`: the sliders and the sum of the worked example, which the build and the browser both run.
- Environment: `SITE_URL` is the public address of this site, for the canonical link, `og:url` and `og:image`, and `UI_URL` the address of the app, where every Sign in link leads. The three apps share these names: `SITE_URL`, `UI_URL` and `CORE_URL` always name the site, the app and the core. `astro.config.ts` reads the `.env` files of `NODE_ENV`, which Astro sets to `development` for `dev` and `production` for `build`.
- The code has no comments.

## Tests

- `vitest.config.ts` is the only Vitest config: it runs `tests/unit/**/*.test.ts` in Node and in UTC, through `getViteConfig` of Astro, so a test imports the code of `src` as the site does. Import the test API from `vitest`.
- `playwright.config.ts` is the only Playwright config: it runs `tests/e2e/**/*.spec.ts`, fully parallel, on headless Chromium, Firefox and WebKit (the `chromium`, `firefox` and `webkit` projects), against the dev server it starts on port 4330. It starts it with `--ignore-lock`, so it runs beside a dev server already open and stays in the foreground also when an AI agent runs the tests, where Astro would send it to the background. Use role based locators and web first assertions.
- No test exists yet, only the structure. Both runs pass without tests, Vitest with `passWithNoTests` and Playwright with `--pass-with-no-tests` in the `test:e2e` script: drop both with the first tests.
- `bun run test:unit` runs the unit tests, `bun run test:e2e` the e2e tests on the three browsers and `bun run test` both. Add `--project=firefox` to `test:e2e` for one browser. CI installs the `node_modules` once in the `install` job, then runs check, build, unit and one e2e job per browser in parallel, as one matrix in the official Playwright image of the installed version (`mcr.microsoft.com/playwright:v<version>-noble`). The first job that fails cancels the others. The unit and e2e jobs pass without running when the pull request changes only Markdown, `.devcontainer` or `docker-compose.yml`. A draft pull request runs none of them.
- Playwright needs the headless browsers of its version: `bunx playwright install --only-shell chromium firefox webkit`, with `--with-deps` the first time on Linux.

## Pull requests

- Their title follows Conventional Commits, `<type>(<optional scope>)!: <subject>`, with the type one of `feat`, `fix`, `perf`, `revert`, `refactor`, `style`, `test`, `docs`, `build`, `ci` and `chore`: the `PR title` workflow fails on any other.
