// Offers the visitor's own language when this page exists in it. Nothing is redirected:
// the bar only links to the other version, and closing it keeps the current language.
// A language chosen from the bar or the footer is remembered in this browser.
const data = document.getElementById('language-data');

if (data) {
  const { current, versions, offers } = JSON.parse(data.textContent);
  const KEY = 'parts-relay-language';

  const read = () => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  };
  const save = (locale) => {
    try {
      localStorage.setItem(KEY, locale);
    } catch {
      // Storage can be blocked. The bar then shows again on the next visit.
    }
  };
  const fromBrowser = () => {
    for (const tag of navigator.languages ?? [navigator.language]) {
      const base = String(tag).toLowerCase().split('-')[0];
      if (Object.hasOwn(versions, base)) return base;
    }
    return null;
  };

  for (const link of document.querySelectorAll('.base-languages a')) {
    link.addEventListener('click', () => save(link.dataset.language));
  }

  const stored = read();
  const wanted = stored && Object.hasOwn(versions, stored) ? stored : fromBrowser();

  if (wanted && wanted !== current) {
    const offer = offers[wanted];
    const bar = document.createElement('div');
    bar.className = 'lang-offer';
    bar.lang = wanted;
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', offer.text);

    const text = document.createElement('p');
    text.textContent = offer.text;

    const go = document.createElement('a');
    go.href = versions[wanted] + location.hash;
    go.hreflang = wanted;
    go.textContent = offer.go;
    go.addEventListener('click', () => save(wanted));

    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'lang-offer-close';
    close.setAttribute('aria-label', offer.close);
    close.innerHTML = '<span aria-hidden="true">×</span>';
    close.addEventListener('click', () => {
      save(current);
      bar.remove();
    });

    bar.append(text, go, close);
    document.querySelector('.site-chrome').before(bar);
  }
}
