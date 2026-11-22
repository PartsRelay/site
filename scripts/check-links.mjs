// Checks the built site in dist/ for links and asset paths that point at nothing.
// Run `npm run build` first. External links are not fetched.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const root = 'dist';

if (!existsSync(root)) {
  console.error('No dist/ folder. Run npm run build first.');
  process.exit(1);
}

function filesIn(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? filesIn(path) : [path];
  });
}

const files = filesIn(root);
const pages = files.filter((file) => file.endsWith('.html'));
const styles = files.filter((file) => file.endsWith('.css'));

// The file a URL path is served from, or null if there is none.
function target(path) {
  const file = join(root, decodeURIComponent(path));
  if (existsSync(file) && statSync(file).isFile()) return file;
  const index = join(file, 'index.html');
  return existsSync(index) ? index : null;
}

const ids = new Map();
function idsOf(page) {
  if (!ids.has(page)) {
    const html = readFileSync(page, 'utf8');
    ids.set(page, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])));
  }
  return ids.get(page);
}

const problems = new Set();

function check(from, link) {
  if (!link || /^([a-z]+:|\/\/)/i.test(link)) return;
  const [beforeHash, hash] = link.split('#');
  const path = beforeHash.split('?')[0];
  const folder = relative(root, dirname(from)).replaceAll('\\', '/');
  const base = new URL(folder ? folder + '/' : '', 'http://site/');
  const absolute = path === '' ? null : new URL(path, base).pathname;
  const file = absolute === null ? from : target(absolute);
  if (!file) {
    problems.add(`${from}: ${link} does not exist`);
  } else if (hash && file.endsWith('.html') && !idsOf(file).has(hash)) {
    problems.add(`${from}: ${link} has no element with id "${hash}"`);
  }
}

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const [, link] of html.matchAll(/\s(?:href|src|poster|data-image)="([^"]*)"/g)) {
    check(page, link);
  }
}
for (const sheet of styles) {
  const css = readFileSync(sheet, 'utf8');
  for (const [, link] of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)) {
    if (!link.startsWith('data:')) check(sheet, link);
  }
}

if (problems.size) {
  console.error([...problems].join('\n'));
  console.error(`\n${problems.size} broken link${problems.size === 1 ? '' : 's'}.`);
  process.exit(1);
}
console.log(
  `Checked ${pages.length} pages and ${styles.length} stylesheet${styles.length === 1 ? '' : 's'}. No broken links.`
);
