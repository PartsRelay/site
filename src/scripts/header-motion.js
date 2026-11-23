const head = document.querySelector('.site-chrome');
const motion = matchMedia('(prefers-reduced-motion:reduce)');
const mobile = matchMedia('(max-width:767px)');
const ease = 'cubic-bezier(.16,1,.3,1)';
// Damped spring for the dropdown panel position and size.
const menuSpring =
  'linear(' +
  Array.from({ length: 41 }, (_, i) => {
    if (i === 40) return 1;
    const time = i / 40,
      frequency = 8.44,
      damping = 0.9,
      oscillation = Math.sqrt(1 - damping * damping);
    return (
      1 -
      Math.exp(-frequency * damping * time) *
        (Math.cos(frequency * oscillation * time) +
          (damping / oscillation) * Math.sin(frequency * oscillation * time))
    ).toFixed(5);
  }).join(',') +
  ')';
function animate(el, frames, ms, curve = ease, options = {}) {
  if (!el || motion.matches) return null;
  return el.animate(frames, { duration: ms, easing: curve, ...options });
}

// The 40px notice bar collapses over the first 80px of scroll.
head.classList.add('fx-ready');
const banner = head.querySelector('.site-banner');
const message = document.createElement('div');
message.className = 'fx-banner-message';
[...banner.children]
  .filter((el) => !el.classList.contains('site-dismiss'))
  .forEach((el) => message.append(el));
const visibility = document.createElement('div');
visibility.className = 'fx-banner-visibility';
visibility.append(message);
banner.prepend(visibility);
function placeHeader() {
  const y = Math.max(0, window.scrollY);
  const progress = Math.min(y / 80, 1);
  head.style.setProperty('--fx-header-y', (banner.hidden ? 0 : -40 * progress) + 'px');
  head.style.setProperty('--fx-banner-opacity', Math.max(0, 1 - y / 20));
  head.style.setProperty('--fx-header-alpha', progress);
}
window.addEventListener('scroll', placeHeader, { passive: true });
new MutationObserver(placeHeader).observe(banner, {
  attributes: true,
  attributeFilter: ['hidden'],
});
placeHeader();
if (!scrollY && !banner.hidden) {
  [visibility, banner.querySelector('.site-dismiss')].forEach((el) =>
    animate(el, [{ opacity: 0 }, { opacity: 1 }], 500, 'ease-out', {
      delay: 300,
      fill: 'backwards',
    })
  );
  animate(
    message,
    [{ translate: '0 8px' }, { translate: '0 0' }],
    600,
    'cubic-bezier(.23,1,.32,1)',
    { delay: 300, fill: 'backwards' }
  );
}

const menu = head.querySelector('.site-menu'),
  panels = [...menu.querySelectorAll('.site-dropdown')];
const svgNS = 'http://www.w3.org/2000/svg';
function glyph(paths, style) {
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 12 12');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('class', style);
  paths.forEach((d) => {
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', d);
    svg.append(path);
  });
  return svg;
}
head
  .querySelectorAll('.site-right')
  .forEach((icon) =>
    icon.replaceWith(glyph(['M4.4 2.5 8 6l-3.6 3.5', 'M1.2 6H8'], 'fx-action-arrow'))
  );
const navArrows = Array.from(head.querySelectorAll('.site-trigger i'), (icon) => {
  const arrow = glyph(['M2 4 L6 8 L10 4'], 'fx-nav-arrow');
  icon.replaceWith(arrow);
  return arrow;
});
function sizeNavArrows() {
  for (const arrow of navArrows) {
    arrow.setAttribute('viewBox', mobile.matches ? '0 0 16 16' : '0 0 12 12');
    arrow.firstElementChild.setAttribute(
      'd',
      mobile.matches ? 'M6 3 L11 8 L6 13' : 'M2 4 L6 8 L10 4'
    );
  }
}
sizeNavArrows();
mobile.addEventListener('change', sizeNavArrows);
// The moving hover surface is shared by all rows in the panel.
for (const panel of panels) {
  const rows = [...panel.querySelectorAll('a')];
  const highlight = document.createElement('span');
  highlight.className = 'fx-row-hover';
  highlight.setAttribute('aria-hidden', 'true');
  panel.prepend(highlight);
  let row = null;
  function placeRow(next) {
    if (mobile.matches || next === row) return;
    const from = row ? highlight.getBoundingClientRect() : null;
    row = next;
    if (!row) {
      highlight.hidden = true;
      return;
    }
    highlight.hidden = false;
    const top = row.offsetTop,
      left = row.offsetLeft;
    Object.assign(highlight.style, {
      top: top + 'px',
      left: left + 'px',
      width: row.offsetWidth + 'px',
      height: row.offsetHeight + 'px',
    });
    highlight.getAnimations().forEach((a) => a.cancel());
    if (from) {
      const to = highlight.getBoundingClientRect();
      animate(
        highlight,
        [{ translate: '0 ' + (from.y - to.y) + 'px' }, { translate: '0 0' }],
        300,
        menuSpring
      );
    }
  }
  rows.forEach((link) => {
    link.addEventListener('pointerenter', () => placeRow(link));
    link.addEventListener('focus', () => placeRow(link));
  });
  panel.addEventListener('pointerleave', () => placeRow(null));
  panel.addEventListener('focusout', (event) => {
    if (!panel.contains(event.relatedTarget)) placeRow(null);
  });
  highlight.hidden = true;
}
const pill = document.createElement('span');
pill.className = 'fx-menu-pill';
pill.setAttribute('aria-hidden', 'true');
menu.prepend(pill);
let wasOpen = head.classList.contains('site-open'),
  lastBox = null,
  pillBox = null,
  pillOpacity = 0;
const anims = new WeakMap();
function cancel(el) {
  for (const effect of anims.get(el) || []) effect?.cancel();
  anims.delete(el);
}
function play(el, frames, ms, curve, cleanup) {
  cancel(el);
  const effect = animate(el, frames, ms, curve);
  if (effect) {
    anims.set(el, [effect]);
    if (cleanup) effect.onfinish = cleanup;
  } else if (cleanup) cleanup();
}
function movePill(button) {
  if (!button || mobile.matches) {
    pill.style.opacity = '0';
    pillOpacity = 0;
    return;
  }
  const b = button.getBoundingClientRect(),
    m = menu.getBoundingClientRect(),
    x = b.left - m.left,
    y = b.top - m.top;
  const old = pillBox;
  const prevOpacity = pillOpacity;
  Object.assign(pill.style, {
    width: b.width + 'px',
    height: b.height + 'px',
    left: x + 'px',
    top: y + 'px',
    opacity: '1',
  });
  if (old && prevOpacity)
    play(
      pill,
      [
        { transform: 'translateX(' + (old.x - x) + 'px) scaleX(' + old.w / b.width + ')' },
        { transform: 'none' },
      ],
      300,
      'cubic-bezier(.17,.82,.23,1)'
    );
  else play(pill, [{ opacity: 0 }, { opacity: 1 }], 180, ease);
  pillBox = { x, w: b.width };
  pillOpacity = 1;
}
const openPanels = new Set();
let previousBox = null;
menu.addEventListener(
  'pointerover',
  (event) => {
    if (mobile.matches || !event.target.closest('.site-trigger')) return;
    const current = panels.find((el) => !el.hidden);
    if (current) previousBox = current.getBoundingClientRect();
  },
  true
);
function updatePanels() {
  const next = panels.filter((el) => !el.hidden),
    opening = next.filter((el) => !openPanels.has(el)),
    closing = [...openPanels].filter((el) => el.hidden);
  const oldRect = previousBox || lastBox;
  previousBox = null;
  closing.forEach((el) => {
    openPanels.delete(el);
    cancel(el);
    if (!mobile.matches && opening.length) {
      el.classList.remove('fx-panel-exit');
      return;
    }
    if (mobile.matches && !head.classList.contains('site-open')) {
      el.classList.remove('fx-panel-exit');
      return;
    }
    el.classList.add('fx-panel-exit');
    el.inert = true;
    const frames = mobile.matches
      ? [
          { height: el.scrollHeight + 'px', opacity: 1 },
          { height: '0px', opacity: 0 },
        ]
      : [
          { scale: 1, translate: '0 0', opacity: 1 },
          { scale: 0.97, translate: '0 -4px', opacity: 0 },
        ];
    play(
      el,
      frames,
      mobile.matches ? 250 : 200,
      mobile.matches ? 'cubic-bezier(.22,1,.36,1)' : ease,
      () => {
        el.classList.remove('fx-panel-exit');
        el.inert = false;
      }
    );
  });
  opening.forEach((el) => {
    el.classList.remove('fx-panel-exit');
    el.inert = false;
    cancel(el);
    openPanels.add(el);
    const b = el.getBoundingClientRect();
    if (mobile.matches) {
      play(
        el,
        [
          { height: '0px', opacity: 0 },
          { height: el.scrollHeight + 'px', opacity: 1 },
        ],
        250,
        'cubic-bezier(.22,1,.36,1)'
      );
    } else if (oldRect && closing.length) {
      const travel = oldRect.x + oldRect.width / 2 - (b.x + b.width / 2);
      const slide = animate(
        el,
        [{ translate: travel + 'px 0' }, { translate: '0 0' }],
        480,
        menuSpring
      );
      const grow = animate(
        el,
        [
          { width: oldRect.width + 'px', height: oldRect.height + 'px' },
          { width: b.width + 'px', height: b.height + 'px' },
        ],
        420,
        menuSpring
      );
      anims.set(el, [slide, grow]);
      const ghost = document.createElement('div');
      ghost.className = 'fx-panel-ghost';
      ghost.inert = true;
      ghost.setAttribute('aria-hidden', 'true');
      [...closing[0].querySelectorAll(':scope > a')].forEach((link) =>
        ghost.append(link.cloneNode(true))
      );
      el.append(ghost);
      const dissolve = animate(ghost, [{ opacity: 1 }, { opacity: 0 }], 280, ease);
      if (dissolve) dissolve.onfinish = () => ghost.remove();
      else ghost.remove();
      [...el.querySelectorAll(':scope > a')].forEach((item) =>
        animate(item, [{ opacity: 0 }, { opacity: 1 }], 280, ease)
      );
    } else {
      play(
        el,
        [
          { opacity: 0, scale: 0.96, translate: '0 -6px' },
          { opacity: 1, scale: 1, translate: '0 0' },
        ],
        200,
        ease
      );
      [...el.querySelectorAll(':scope > a')].forEach((item) =>
        animate(item, [{ opacity: 0 }, { opacity: 1 }], 280, ease)
      );
    }
    lastBox = b;
  });
  if (!mobile.matches) movePill(next[0]?.parentElement.querySelector('.site-trigger'));
  if (!next.length) lastBox = null;
}
const changes = new MutationObserver(updatePanels);
panels.forEach((el) => changes.observe(el, { attributes: true, attributeFilter: ['hidden'] }));
menu.addEventListener(
  'click',
  (event) => {
    const button = event.target.closest('.site-trigger');
    if (!mobile.matches || !button) return;
    event.stopPropagation();
    const el = document.getElementById(button.getAttribute('aria-controls'));
    button.setAttribute('aria-expanded', String(el.hidden));
    el.hidden = !el.hidden;
  },
  true
);
new MutationObserver(() => {
  const current = head.classList.contains('site-open');
  if (current === wasOpen) return;
  wasOpen = current;
  head.classList.remove('fx-mobile-exit');
  if (!mobile.matches) return;
  if (current)
    play(
      menu,
      [
        { opacity: 0, translate: '0 -6px' },
        { opacity: 1, translate: '0 0' },
      ],
      200,
      ease
    );
  else {
    head.classList.add('fx-mobile-exit');
    play(
      menu,
      [
        { opacity: 1, translate: '0 0' },
        { opacity: 0, translate: '0 -6px' },
      ],
      200,
      ease,
      () => head.classList.remove('fx-mobile-exit')
    );
  }
}).observe(head, { attributes: true, attributeFilter: ['class'] });

// Reveal the brand name through separating tiles, pixel glyphs, and final letters.
const mark = head.querySelector('.site-mark'),
  icon = mark.querySelector('img');
const film = document.createElement('canvas');
film.className = 'fx-logo-film';
film.setAttribute('aria-hidden', 'true');
mark.append(film);
const ctx = film.getContext('2d'),
  width = 184,
  height = 52;
const dpr = Math.min(3, devicePixelRatio || 1);
film.width = width * dpr;
film.height = height * dpr;
mark.style.setProperty('--fx-logo-width', width + 'px');
const groups = ['Par', 'ts ', 'Re', 'lay'];
let wanted = false,
  phase = 'rest',
  start = 0,
  raf = 0;
const clamp = (x) => Math.max(0, Math.min(1, x));
const peak = (t, damping, turns) =>
  1 - Math.exp(-damping * t) * (Math.cos(t * turns) + (damping / turns) * Math.sin(t * turns));
const revealOrder = [1, 3, 0, 2],
  retractOrder = [2, 0, 3, 1];
const renderSize = (28 * 110) / 60,
  dotSize = (28 * 115) / 60,
  settledScale = 0.6;
const baseline = height - 9.5;
const wordmarkFamily = getComputedStyle(mark).getPropertyValue('--heading-font').trim();
const renderText = '500 ' + renderSize + 'px ' + wordmarkFamily;
const blockText = '700 ' + dotSize + 'px ' + wordmarkFamily;
const renderSpacing = -0.01 * renderSize + 'px',
  dotSpacing = -0.025 * dotSize + 'px';
const samplePixels = () =>
  groups.map((str) => {
    const sample = document.createElement('canvas');
    sample.height = 74;
    const brush = sample.getContext('2d', { willReadFrequently: true });
    brush.font = blockText;
    brush.letterSpacing = dotSpacing;
    sample.width = Math.ceil(brush.measureText(str).width) + 3;
    brush.font = blockText;
    brush.letterSpacing = dotSpacing;
    brush.fillText(str, 0, 50);
    const bytes = brush.getImageData(0, 0, sample.width, sample.height).data,
      occupied = [];
    for (let y = 0; y < sample.height; y += 3)
      for (let x = 1; x < sample.width; x += 3)
        if (bytes[(y * sample.width + x) * 4 + 3] > 70) occupied.push([x, y - 50]);
    return occupied;
  });
let pixels = samplePixels();
Promise.allSettled([document.fonts.load(renderText), document.fonts.load(blockText)]).then(() => {
  pixels = samplePixels();
});
function frame(now) {
  const t = (now - start) / 1000,
    forward = phase === 'enter';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, width, height);
  const scale = forward
    ? 1 - (1 - settledScale) * clamp(t / 0.4)
    : settledScale + (1 - settledScale) * peak(clamp((t - 1.05) / 0.7), 5, 8);
  ctx.translate(0, baseline);
  ctx.scale(scale, scale);
  ctx.textBaseline = 'alphabetic';
  ctx.font = renderText;
  ctx.letterSpacing = renderSpacing;
  groups.forEach((str, i) => {
    const widthBefore = ctx.measureText(groups.slice(0, i).join('')).width;
    const slide = forward
      ? peak(clamp((t - i * 0.05) / 0.5), 6, 5)
      : 1 - (1 - Math.cos(Math.PI * clamp((t - 0.8) / 0.3))) / 2;
    const dx = widthBefore * slide;
    const switchAt = forward ? 1.2 + revealOrder[i] * 0.04 : retractOrder[i] * 0.04;
    const letter = forward ? t >= switchAt : t < switchAt;
    const solid = forward
      ? t < 0.9 + i * 0.05
      : t >= 0.36 + 0.03 * revealOrder[i] && (i === 0 || t < 1.8);
    const mono = forward ? t >= 0.5 + i * 0.05 && t < switchAt : t >= switchAt && t < 0.6;
    if (solid) {
      const endBlend = forward ? clamp(t / 0.12) : 1 - clamp((t - 1.55) / 0.25);
      ctx.fillStyle = '#087781';
      ctx.globalAlpha = endBlend;
      ctx.fillRect(dx, -28, 28, 28);
      if (i === 0 && icon.complete && icon.naturalWidth && endBlend < 1) {
        ctx.globalAlpha = 1 - endBlend;
        ctx.drawImage(icon, -5, -30, 39, 35);
      }
      ctx.globalAlpha = 1;
    }
    if (mono) {
      ctx.fillStyle = '#142b3a';
      for (const [x, y] of pixels[i]) ctx.fillRect(dx + x, y, 2, 2);
    }
    if (letter) {
      ctx.fillStyle = '#142b3a';
      ctx.fillText(str, dx, 0);
    }
    ctx.fillStyle = '#087781';
    pixels[i].forEach(([x, y], k) => {
      const phase = t - switchAt;
      const lit = forward
        ? t >= 0.001 * k + 0.05 * i && t < 1 + 0.008 * k + 0.05 * i
        : (phase >= 0.05 + 0.008 * k && phase < 0.5) ||
          (phase >= 0.55 + 0.01 * k &&
            phase < 0.65 + 0.01 * k &&
            Math.abs(phase - 0.6 - 0.01 * k) > 0.02);
      if (lit) ctx.fillRect(dx + x, y, 2.8, 2.8);
    });
  });
  if (forward && t >= 2.3) {
    ctx.clearRect(0, -baseline / scale, width / scale, height / scale);
    ctx.fillStyle = '#142b3a';
    ctx.fillText(groups.join(''), 0, 0);
    phase = 'shown';
    if (!wanted) begin('exit');
    return;
  }
  if (!forward && t >= 1.9) {
    phase = 'rest';
    film.hidden = true;
    icon.style.opacity = '';
    mark.classList.remove('fx-over');
    if (wanted) begin('enter');
    return;
  }
  raf = requestAnimationFrame(frame);
}
function begin(mode) {
  cancelAnimationFrame(raf);
  phase = mode;
  start = performance.now();
  film.hidden = false;
  icon.style.opacity = '0';
  mark.classList.add('fx-over');
  raf = requestAnimationFrame(frame);
}
film.hidden = true;
function trigger(on) {
  if (mobile.matches || motion.matches) return;
  wanted = on;
  if (on && phase === 'rest') begin('enter');
  else if (!on && phase === 'shown') begin('exit');
}
mark.addEventListener('pointerenter', (e) => {
  if (e.pointerType !== 'touch') trigger(true);
});
mark.addEventListener('pointerleave', () => trigger(false));
function resetLogo() {
  cancelAnimationFrame(raf);
  wanted = false;
  phase = 'rest';
  icon.style.opacity = '';
  film.hidden = true;
  mark.classList.remove('fx-over');
}
mobile.addEventListener('change', resetLogo);
motion.addEventListener('change', resetLogo);

const art = document.querySelector('.base-art');
if (art) {
  const home = document.createElement('a');
  // Same address and label as the logo in the header, so it follows the page language.
  const headerHome = document.querySelector('.site-mark');
  home.href = headerHome.getAttribute('href');
  home.className = 'fx-footer-home';
  home.setAttribute('aria-label', headerHome.getAttribute('aria-label'));
  art.before(home);
  home.append(art);
  const tiles = [...art.querySelectorAll('.base-tile')];
  let effects = [];
  const rest = [235, 240, 239],
    accent = [70, 170, 169];
  // Interpolate squared RGB channels across the four columns of the wave.
  // The offsets follow the two halves of an ease-in-out curve.
  const pulseFrames = Array.from({ length: 33 }, (_, i) => {
    const outbound = i <= 16,
      t = (outbound ? i : i - 16) / 16,
      opposite = 1 - t;
    const time = 3 * opposite * opposite * t * 0.42 + 3 * opposite * t * t * 0.58 + t * t * t;
    const eased = t * t * (3 - 2 * t),
      amount = outbound ? eased : 1 - eased;
    const color = rest.map((v, c) =>
      Math.round(Math.sqrt(v * v + (accent[c] * accent[c] - v * v) * amount))
    );
    return { offset: (outbound ? time : 1 + time) / 2, fill: 'rgb(' + color.join(',') + ')' };
  });
  function pulse(origin) {
    effects.forEach((a) => a?.cancel());
    effects = tiles.map((tile, i) =>
      animate(tile, pulseFrames, 600, 'linear', { delay: 100 * Math.abs(i - origin) })
    );
  }
  art.addEventListener('pointerenter', (event) => {
    const b = art.getBoundingClientRect();
    pulse(Math.max(0, Math.min(3, Math.floor(((event.clientX - b.x) * 4) / b.width))));
  });
  art.addEventListener('pointerleave', () => {
    const fills = tiles.map((tile) => getComputedStyle(tile).fill);
    effects.forEach((a) => a?.cancel());
    effects = tiles.map((tile, i) =>
      animate(tile, [{ fill: fills[i] }, { fill: '#ebf0ef' }], 300, 'ease-out')
    );
  });
}
