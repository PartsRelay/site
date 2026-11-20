import { mount } from './motion.js';

const root = document.querySelector('.home');
const ink = '#142b3a',
  teal = '#087781',
  green = '#57bc9d',
  mist = '#dff3ef',
  line = '#a6c2c2',
  gold = '#e0a937',
  white = '#fff';
const rect = (x, y, w, h, stroke = ink, fill = white, r = 0, sw = 1) =>
  '<rect x="' +
  x +
  '" y="' +
  y +
  '" width="' +
  w +
  '" height="' +
  h +
  '" rx="' +
  r +
  '" fill="' +
  fill +
  '" stroke="' +
  stroke +
  '" stroke-width="' +
  sw +
  '"/>';
const path = (d, stroke = ink, sw = 1, fill = 'none', extra = '') =>
  '<path d="' +
  d +
  '" stroke="' +
  stroke +
  '" stroke-width="' +
  sw +
  '" fill="' +
  fill +
  '" ' +
  extra +
  '/>';
const circle = (x, y, r, stroke = ink, fill = white, sw = 1) =>
  '<circle cx="' +
  x +
  '" cy="' +
  y +
  '" r="' +
  r +
  '" fill="' +
  fill +
  '" stroke="' +
  stroke +
  '" stroke-width="' +
  sw +
  '"/>';
const seq = (count, fn) => Array.from({ length: count }, (_, i) => fn(i)).join('');
const cross = (x, y, c = line) => path('M' + (x - 3) + ' ' + y + 'h6m-3 -3v6', c);
const corners = (x, y, w, h) =>
  [
    [x, y],
    [x + w, y],
    [x, y + h],
    [x + w, y + h],
  ]
    .map(([a, b]) => rect(a - 2, b - 2, 4, 4, teal, teal))
    .join('');
const bracket = (x, y, w, h, c = teal) =>
  path(
    'M' +
      x +
      ' ' +
      (y + 8) +
      'v-8h8m' +
      (w - 16) +
      ' 0h8v8m0 ' +
      (h - 16) +
      'v8h-8m' +
      (16 - w) +
      ' 0h-8v-8',
    c,
    1.5
  );
const strokeDash = 'stroke-dasharray="3 4"';
const car = (x, y, s = 1) =>
  '<g transform="translate(' +
  x +
  ' ' +
  y +
  ') scale(' +
  s +
  ')">' +
  path(
    'M5 30 10 20 35 17 47 5Q49 3 53 3H82Q87 4 92 10L105 21 117 24 122 31 121 36H109Q108 25 99 25Q90 25 88 36H38Q37 25 28 25Q18 25 17 36H6Z',
    teal,
    1.8,
    mist
  ) +
  path('M42 17 51 7h12v10Zm26 0V7h13l13 10zM32 22h50m-17 1v7', teal, 1) +
  circle(28, 35, 6.8, teal, white, 1.8) +
  circle(99, 35, 6.8, teal, white, 1.8) +
  '</g>';

function vehicle() {
  const x = 110,
    y = 15,
    w = 151,
    h = 171,
    cx = 185,
    cy = 101;
  const panel = rect(x, y, w, h, ink, white, 2, 1.7) + corners(x, y, w, h);
  const dial =
    path('M123 105a63 63 0 0 1 126 0', line, 1.25) +
    path('M130 104a55 55 0 0 1 110 0', green, 3) +
    path('M140 102a45 45 0 0 1 90 0', teal, 1.5) +
    '<g data-scale-ticks>' +
    seq(13, (i) => {
      const a = (i / 12) * Math.PI,
        dx = Math.cos(a),
        dy = Math.sin(a);
      return path(
        'M' + (cx - 52 * dx) + ' ' + (cy - 52 * dy) + 'l' + 5 * dx + ' ' + 5 * dy,
        i % 3 ? line : teal,
        1.5
      );
    }) +
    '</g>' +
    car(167, 83, 0.31) +
    '<g data-needle>' +
    path('M185 102l-2-42 4 0z', teal, 1, mist) +
    '</g>' +
    circle(cx, 102, 2.5, teal, white);
  const pads = seq(39, (i) =>
    rect(
      116 + (i % 13) * 11,
      116 + Math.floor(i / 13) * 11,
      7.8,
      7.8,
      'none',
      [teal, line, green, mist, line][(i * 7) % 5]
    )
  );
  const meter = seq(15, (i) => rect(122 + i * 9, 162, 6.6, 13, 'none', teal));
  const controls = rect(116, 156, 139, 25, ink, white, 1, 1) + '<g data-meter>' + meter + '</g>';
  const sides = [55, 279]
    .map(
      (base, i) =>
        rect(base, 47, 32, 30, line, white, 1) +
        rect(base + 3, 50, 26, 24, mist) +
        (i
          ? path('M' + (base + 6) + ' 65h5l3-6 5 12 5-8h3', teal, 1.7)
          : bracket(base + 9, 55, 14, 14, teal)) +
        rect(base, 99, 32, 31, line, white, 1) +
        (i
          ? seq(3, (j) => rect(base + 5, 105 + j * 6, 18 - j * 3, 2, 'none', j === 1 ? gold : teal))
          : circle(base + 16, 114, 6, green, white, 1.3) + cross(base + 16, 114, teal)) +
        path(
          'M' +
            (i ? 261 : 87) +
            ' 62h' +
            (i ? 18 : 24) +
            'm-' +
            (i ? 18 : 24) +
            ' 54h' +
            (i ? 18 : 24),
          line,
          0.8,
          'none',
          strokeDash
        )
    )
    .join('');
  return (
    sides +
    panel +
    rect(116, 21, 139, 89, line, white, 1) +
    dial +
    '<g data-pads>' +
    pads +
    '</g>' +
    controls +
    [47, 94, 270, 319].map((a) => cross(a, 144)).join('')
  );
}

function partsDiagram() {
  const traces = seq(5, (i) => {
    const y = 52 + i * 22,
      oy = 76 + i * 11,
      left = 'M18 ' + y + 'H85Q92 ' + y + ' 99 ' + (y + (i < 2 ? 3 : -3)) + 'L133 ' + oy + 'H151';
    const right = 'M221 ' + oy + 'H240L271 ' + y + 'H356';
    return (
      path(left, line, 1.2) +
      path(right, line, 1.2) +
      circle(18, y, 2.3, line, white) +
      circle(356, y, 2.3, line, white) +
      circle(90 + i * 9, y, 2, i % 2 ? teal : green, i % 2 ? mist : white)
    );
  });
  const caseArt =
    rect(152, 65, 70, 72, ink, teal, 2, 1.5) +
    corners(152, 65, 70, 72) +
    circle(187, 101, 28, white, white);
  const rotor =
    '<g transform="translate(187 101)">' +
    circle(0, 0, 21, teal, mist, 1.6) +
    circle(0, 0, 12, teal, white, 1.25) +
    circle(0, 0, 5.2, teal, mist, 1.25) +
    seq(5, (i) => {
      const angle = (i * Math.PI * 2) / 5;
      return circle(8.5 * Math.sin(angle), -8.5 * Math.cos(angle), 1, teal, teal, 0.6);
    }) +
    path('m-3-18 5 1m12 4 2 4m2 11-3 3m-8 9-5 1m-11-2-3-3m-7-10v-4m4-10 3-2', green, 1.4) +
    '</g>';
  return (
    traces +
    '<g data-signals></g><g data-intake>' +
    caseArt +
    rotor +
    '</g>' +
    cross(150, 148) +
    cross(220, 55) +
    path('M145 59h10m60 84h11', gold, 1)
  );
}

function ticket() {
  const outer =
    path('M30 45H344M42 151H334', ink, 1.1) +
    path('M76 41h224M64 157h249', line, 0.7, 'none', strokeDash) +
    seq(11, (i) =>
      rect(72 + i * 23, 23, i % 4 === 0 ? 15 : 5, 4, 'none', [line, green, mist, teal][i % 4])
    ) +
    seq(10, (i) =>
      rect(82 + i * 25, 171, i % 4 === 1 ? 19 : 5, 3, 'none', [mist, teal, line, gold][i % 4])
    );
  const record =
    rect(85, 62, 205, 75, ink, white, 2, 1.2) +
    rect(90, 67, 194, 65, line, 'none', 1, 0.7) +
    rect(100, 76, 46, 48, teal, mist, 0) +
    rect(151, 76, 70, 48, teal, teal) +
    rect(227, 76, 48, 48, line, white) +
    path('M113 87h15l5 5v20h-20z', teal, 1.5) +
    path('M128 87v6h5m-16 4h10m-10 5h9', teal, 1.3) +
    seq(13, (i) =>
      rect(159 + i * 4, 88, i % 3 === 0 ? 2.6 : 1.2, 16, 'none', i % 4 === 0 ? green : white)
    ) +
    circle(251, 100, 13, teal, mist, 1.4) +
    path('m244 100 5 5 9-11', teal, 2.5) +
    seq(7, (i) => rect(155 + 9 * i, 111, 5, 3, 'none', i % 2 ? white : green)) +
    seq(6, (i) => rect(104 + 30 * i, 57, 6, 2, 'none', i % 3 === 0 ? gold : line));
  const connectors = seq(2, (i) => {
    const x = i ? 317 : 36;
    return (
      path('M' + (i ? 290 : 58) + ' 99h' + (i ? 27 : 27), line, 1.3, 'none', strokeDash) +
      rect(x, 87, 22, 23, line, white, 3) +
      circle(x + 11, 98, 5, teal, white, 1.3) +
      cross(x + 11, 98, green)
    );
  });
  return (
    outer +
    record +
    corners(85, 62, 205, 75) +
    connectors +
    '<g data-ticket-motion></g>' +
    cross(34, 45, gold) +
    cross(337, 151, gold)
  );
}
function relay() {
  const rings = (x, c) =>
    circle(x, 100, 38, line, white, 1) +
    circle(x, 100, 29, c, white, 1.4) +
    circle(x, 100, 20, line, white, 1) +
    path('M' + x + ' 55a45 45 0 0 1 41 27', ink, 1.7) +
    path('M' + x + ' 145a45 45 0 0 1-40-25', ink, 1.7);
  const wire = seq(5, (i) => {
    const y = 72 + i * 14;
    return path(
      'M106 ' + (94 + i * 3) + ' L148 ' + y + 'H220L263 ' + (94 + i * 3),
      line,
      i === 2 ? 1.5 : 0.8,
      'none',
      i % 2 ? strokeDash : ''
    );
  });
  const center =
    rect(150, 60, 65, 80, line, 'none', 0, 0.9) +
    rect(156, 65, 53, 70, line, white, 1, 0.8) +
    path('M166 79h35v21h-18l-7 7v-7h-10z', teal, 1.5, mist) +
    path('M171 86h23m-23 5h13m0 16h16v12l-7-4h-9z', teal, 1.3) +
    seq(5, (i) => rect(162 + i * 9, 125, 5, 3, 'none', i % 2 ? line : green));
  return (
    wire +
    '<g data-hub="left">' +
    rings(65, green) +
    '</g><g data-hub="right">' +
    rings(308, teal) +
    '</g>' +
    center +
    corners(150, 60, 65, 80) +
    rect(57, 92, 16, 16, green, mist, 1, 1.6) +
    circle(308, 100, 9, teal, teal, 1) +
    path('M112 100h31m81 0h32', teal, 2) +
    rect(111, 94, 11, 11, green, green) +
    rect(246, 94, 11, 11, teal, teal) +
    seq(7, (i) => rect(145 + i * 13, 42, 5, 3, 'none', i % 2 ? line : green)) +
    seq(7, (i) => rect(149 + i * 13, 155, 5, 3, 'none', i % 3 ? line : teal))
  );
}

const pictures = { vehicle, filter: partsDiagram, ticket, relay };
root.querySelectorAll('[data-home-art]').forEach((el) => {
  const draw = pictures[el.dataset.homeArt];
  el.innerHTML =
    '<svg viewBox="0 0 375 205" fill="none" stroke-linecap="round" stroke-linejoin="round" focusable="false">' +
    draw() +
    '</svg>';
});

const track = root.querySelector('.home-track');
const prev = root.querySelector('.home-prev');
const next = root.querySelector('.home-next');
function setScrollState() {
  prev.disabled = track.scrollLeft < 2;
  next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
}
const scroll = (direction) => {
  const card = track.firstElementChild;
  const gap = parseFloat(getComputedStyle(track).columnGap);
  track.scrollBy({
    left: direction * (card.offsetWidth + gap),
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  });
};
prev.addEventListener('click', () => scroll(-1));
next.addEventListener('click', () => scroll(1));
track.addEventListener('scroll', setScrollState, { passive: true });
track.addEventListener('keydown', (event) => {
  if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  scroll(event.key === 'ArrowLeft' ? -1 : 1);
});
new ResizeObserver(setScrollState).observe(track);
setScrollState();

const reduce = matchMedia('(prefers-reduced-motion:reduce)');
const clamp = (n, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, n));
const smooth = (t) => clamp(t) ** 2 * (3 - 2 * clamp(t));
function node(tag, attrs) {
  const shape = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [name, value] of Object.entries(attrs)) shape.setAttribute(name, value);
  return shape;
}
function spring(current, goal, dt, tension, drag) {
  // Fixed time steps keep the spring consistent across refresh rates.
  while (dt > 0) {
    const step = Math.min(dt, 1 / 120);
    current.speed += (tension * (goal - current.pos) - drag * current.speed) * step;
    current.pos += current.speed * step;
    dt -= step;
  }
  return current.pos;
}

function blend(start, end, mix) {
  return (
    'rgb(' + start.map((value, i) => Math.round(value + (end[i] - value) * mix)).join(',') + ')'
  );
}
function instrument(svg) {
  const needle = svg.querySelector('[data-needle]'),
    bars = [...svg.querySelector('[data-meter]').children];
  const pads = [...svg.querySelector('[data-pads]').children];
  const overlays = pads.map((pad) => {
    const overlay = pad.cloneNode(false);
    overlay.setAttribute('fill', teal);
    overlay.setAttribute('opacity', 0);
    pad.parentNode.append(overlay);
    return overlay;
  });
  const ticks = [...svg.querySelector('[data-scale-ticks]').children];
  const levels = bars.map(() => 0),
    tickLevels = ticks.map(() => 0),
    heat = pads.map(() => 0);
  const dial = { pos: 0.07, speed: 0 };
  let origin = 0,
    previousHover = false;
  return (time, dt, hover, pointer) => {
    if (previousHover && !hover) origin = time - 6.3;
    previousHover = hover;
    const phase = (time - origin) % 8.7;
    let level = 0.07;
    if (hover || (phase >= 1.3 && phase < 6.3)) {
      const beat = hover ? time : phase - 1.3;
      level =
        0.92 + 0.018 * Math.sin(beat * Math.PI * 1.4) + 0.009 * Math.sin(beat * Math.PI * 4.6);
    } else if (phase >= 0.5 && phase < 1.3)
      level = 0.07 + (0.06 * (phase - 0.5)) / 0.8 + 0.008 * Math.sin(time * Math.PI * 2.8);
    else if (phase >= 6.3 && phase < 7.7) level = 0.92 - 0.85 * smooth((phase - 6.3) / 1.4);
    const value = clamp(spring(dial, level, dt, 110, 15));
    needle.setAttribute('transform', 'rotate(' + (-90 + value * 180).toFixed(2) + ' 185 102)');
    const fill = clamp((value - 0.15) / 0.77),
      follow = 1 - Math.exp(-5 * dt);
    bars.forEach((bar, i) => {
      levels[i] += (smooth((fill - i / bars.length) * 24) - levels[i]) * follow;
      bar.style.opacity = (0.16 + 0.84 * levels[i]).toFixed(4);
    });
    ticks.forEach((tick, i) => {
      const target = clamp((value - (i / 12 - 0.025)) / 0.05);
      tickLevels[i] += (target - tickLevels[i]) * follow;
      tick.setAttribute('stroke', blend([166, 194, 194], [8, 119, 129], tickLevels[i]));
    });
    const pitch = 11;
    const nearestCol = pointer ? Math.round(clamp((pointer.x - 120) / pitch, 0, 12)) : 0;
    const nearestRow = pointer ? Math.round(clamp((pointer.y - 120) / pitch, 0, 2)) : 0;
    const x = 120 + nearestCol * pitch,
      y = 120 + nearestRow * pitch;
    const proximity = pointer ? Math.exp(-((x - pointer.x) ** 2 + (y - pointer.y) ** 2) / 729) : 0;
    pads.forEach((pad, i) => {
      const delay = (i * 0.61) % 5.4,
        duration = 2.4 + ((i * 0.43) % 2.6);
      const phase = clamp((time - delay) / duration, 0, 1e8) % 1;
      const intensity = phase < 0.42 ? 1 - smooth(phase / 0.42) : smooth((phase - 0.42) / 0.58);
      pad.setAttribute('opacity', (0.25 + 0.75 * intensity).toFixed(4));
      const dx = ((i % 13) - nearestCol) * pitch,
        dy = (Math.floor(i / 13) - nearestRow) * pitch;
      const goal = proximity * Math.exp(-(dx * dx + dy * dy) / 729);
      heat[i] += (goal - heat[i]) * (1 - Math.exp(-3.5 * dt));
      overlays[i].setAttribute('opacity', heat[i].toFixed(4));
    });
  };
}
function easingLookup(x1, y1, x2, y2) {
  const cubic = (t, v1, v2) =>
    3 * (1 - t) * (1 - t) * t * v1 + 3 * (1 - t) * t * t * v2 + t * t * t;
  const table = [];
  for (let i = 0; i <= 128; i++) {
    let min = 0,
      max = 1;
    for (let step = 0; step < 14; step++) {
      const mid = (min + max) / 2;
      if (cubic(mid, x1, x2) < i / 128) min = mid;
      else max = mid;
    }
    table.push(cubic((min + max) / 2, y1, y2));
  }
  return (x) => {
    const position = clamp(x) * 128,
      index = Math.min(Math.floor(position), 127);
    return table[index] + (table[index + 1] - table[index]) * (position - index);
  };
}
function intake(svg) {
  const group = svg.querySelector('[data-signals]'),
    center = svg.querySelector('[data-intake]');
  const particles = [];
  for (let i = 0; i < 25; i++) {
    const isRound = i % 4 === 0;
    const inkColor = [teal, line, green, gold][i % 4];
    const shape = node(
      isRound ? 'circle' : 'rect',
      isRound
        ? { cx: 0, cy: 0, r: 3.5, fill: white, stroke: inkColor, 'stroke-width': 1.3 }
        : {
            x: -3,
            y: -3,
            width: 6,
            height: 6,
            rx: 0.6,
            fill: i % 3 ? white : inkColor,
            stroke: inkColor,
            'stroke-width': 1.2,
          }
    );
    group.append(shape);
    particles.push({
      shape,
      phase: ((i * 11) % 25) / 25,
      period: 5.3 + ((i * 17) % 42) / 10,
      side: i % 2 ? -1 : 1,
      lane: i % 5,
      spin: ((i % 7) - 3) * 16,
    });
  }
  let hoverProgress = 0;
  // Each detail compresses around the centre of the illustrated assembly.
  const compressor = [...center.querySelectorAll('path,rect,circle,ellipse')].map((shape, i) => {
    const placed = shape.closest('g[transform]');
    const origin = placed ? [0, 0] : [187, 101];
    return { shape, origin, pos: 1, speed: 0, stiffness: 38 + ((i * 7) % 23) };
  });
  const travel = easingLookup(0.45, 0.15, 0.96, 0.68);
  const growth = easingLookup(0.15, 1.18, 0.4, 1);
  const turn = easingLookup(0.38, 0.1, 0.94, 0.78);
  return (time, dt, hover) => {
    hoverProgress += (Number(hover) - hoverProgress) * (1 - Math.exp(-2.5 * dt));
    for (const piece of compressor) {
      const scale = spring(piece, hover ? 0.988 : 1, dt, piece.stiffness, 8);
      const [x, y] = piece.origin;
      piece.shape.setAttribute(
        'transform',
        'translate(' +
          x +
          ' ' +
          y +
          ') scale(' +
          scale.toFixed(5) +
          ') translate(' +
          -x +
          ' ' +
          -y +
          ')'
      );
    }
    for (const dot of particles) {
      dot.phase = (dot.phase + (dt * (1 - 0.55 * hoverProgress)) / dot.period) % 1;
      const t = dot.phase,
        start = dot.side === 1 ? 18 : 356;
      const route = travel(t);
      const x = start + (187 - start) * route,
        curve = smooth((route - 0.34) / 0.37);
      const y = 52 + dot.lane * 22 + curve * (24 - dot.lane * 11);
      const spin = turn(t) * dot.spin + Math.sin(t * Math.PI) * 8;
      const s = growth(t / 0.2) * (1 - 0.42 * turn(t));
      dot.shape.setAttribute(
        'transform',
        'translate(' +
          x.toFixed(2) +
          ' ' +
          y.toFixed(2) +
          ') rotate(' +
          spin.toFixed(2) +
          ') scale(' +
          s.toFixed(3) +
          ')'
      );
      dot.shape.style.opacity = clamp((1 - t) / 0.12);
    }
  };
}
function secure(svg) {
  const target = svg.querySelector('[data-ticket-motion]');
  const bits = Array.from({ length: 6 }, (_, i) => {
    const bit = node('rect', {
      x: 0,
      y: i < 3 ? 45 : 149,
      width: 5,
      height: 3,
      fill: i % 3 ? green : teal,
    });
    target.append(bit);
    return bit;
  });
  const endpieces = [41, 321].map((x) => {
    const g = node('g', {});
    g.innerHTML =
      rect(x - 11, 88, 22, 22, line, white, 3) +
      circle(x, 99, 5, teal, mist, 1) +
      cross(x, 99, teal);
    target.append(g);
    return g;
  });
  const blink = Array.from({ length: 10 }, (_, i) => {
    const light = node('circle', {
      cx: i < 5 ? 62 + (i % 5) * 4 : 291 + (i % 5) * 4,
      cy: 99,
      r: 1.3,
      fill: teal,
    });
    target.append(light);
    return light;
  });
  const cells = Array.from({ length: 4 }, (_, i) => {
    const g = node('g', {});
    const clip = node('clipPath', { id: 'home-code-clip-' + i });
    clip.append(node('rect', { x: 158 + i * 15, y: 85, width: 7, height: 19 }));
    target.append(clip);
    const box = node('g', { 'clip-path': 'url(#home-code-clip-' + i + ')' });
    for (let k = -5; k < 6; k++)
      g.append(
        node('rect', {
          x: 158 + i * 15,
          y: 85 + 9 * k,
          width: 7,
          height: 9,
          fill: k % 2 ? '#fff' : teal,
        })
      );
    box.append(g);
    target.append(box);
    return g;
  });
  let pulse = 0,
    hoverProgress = 0;
  const end = { pos: 0, speed: 0 };
  return (time, dt, hover) => {
    hoverProgress += (Number(hover) - hoverProgress) * (1 - Math.exp(-5 * dt));
    pulse += dt * (1.4 + 2.8 * hoverProgress);
    const x = spring(end, hover ? 7 : 0, dt, 110, 14);
    endpieces.forEach((el, i) =>
      el.setAttribute('transform', 'translate(' + ((i ? -1 : 1) * x).toFixed(3) + ' 0)')
    );
    bits.forEach((bit, i) =>
      bit.setAttribute(
        'x',
        (146 + (i % 3) * 32 + Math.sin(time * (0.4 + i * 0.044) + i) * [9, 7, 9][i % 3]).toFixed(2)
      )
    );
    blink.forEach(
      (dot, i) =>
        (dot.style.opacity = Math.max(
          0.06,
          [0.3, 0.65, 1, 0.65, 0.3][i % 5] *
            (0.5 + 0.5 * Math.sin(pulse + Math.abs(2 - (i % 5)) * 0.8))
        ))
    );
    cells.forEach((g, i) => {
      const period = [3.5, 4, 3.2, 4.5][i],
        t = time - 2 - 0.3 * i;
      if (t < 0) return;
      const p = clamp((t % period) / 0.9),
        cycle = Math.floor(t / period);
      const eased = 1 - (1 - p) * (1 - p) * (1 - 1.4 * p);
      g.setAttribute('transform', 'translate(0 ' + (-9 * ((cycle % 2) + eased)).toFixed(2) + ')');
    });
  };
}
function bridge(svg) {
  const hubs = [svg.querySelector('[data-hub="left"]'), svg.querySelector('[data-hub="right"]')];
  const colors = {};
  colors[teal] = [8, 119, 129];
  colors[green] = [87, 188, 157];
  const colored = [];
  svg.querySelectorAll('circle,rect,path').forEach((el) => {
    const channels = ['fill', 'stroke'].filter((name) => colors[el.getAttribute(name)]);
    if (!channels.length) return;
    const box = el.getBBox(),
      x = box.x + box.width / 2,
      y = box.y + box.height / 2;
    const paints = channels.map((attr) => {
      const color = el.getAttribute(attr),
        next = color === teal ? green : teal;
      return { attr, start: colors[color], end: colors[next] };
    });
    colored.push({ el, x, y, paints, distance: Math.hypot(x - 187, y - 100) });
  });
  const outer = Math.max(...colored.map((part) => part.distance));
  colored.forEach((part, i) => {
    const offset = part.distance / outer,
      jitter = (((i * 7 + 3) % 13) - 6) * 0.0065;
    part.out = 2.3 * offset + jitter;
    part.back = 3.49 + 2.3 * (1 - offset) + jitter;
  });
  const spin = { pos: 0, speed: 0 };
  return (time, dt, hover) => {
    const t = time % 7.23;
    colored.forEach(({ el, x, y, paints, out, back }) => {
      const forward = clamp((t - out) / 0.44),
        reverse = clamp((t - back) / 0.44);
      const phase = forward < 1 ? forward : reverse;
      const mix = smooth(forward) - smooth(reverse);
      for (const p of paints) el.setAttribute(p.attr, blend(p.start, p.end, mix));
      const pop = 1 + 0.022 * Math.sin(Math.PI * phase) + 0.004 * Math.sin(2 * Math.PI * phase);
      if (phase > 0 && phase < 1)
        el.setAttribute(
          'transform',
          'translate(' +
            x +
            ' ' +
            y +
            ') scale(' +
            pop.toFixed(4) +
            ') translate(' +
            -x +
            ' ' +
            -y +
            ')'
        );
      else el.removeAttribute('transform');
    });
    const angle = spring(spin, hover ? 90 : 0, dt, 110, 16);
    hubs.forEach((hub, i) =>
      hub.setAttribute(
        'transform',
        'rotate(' + ((i ? -1 : 1) * angle).toFixed(3) + ' ' + (i ? 308 : 65) + ' 100)'
      )
    );
  };
}
function featurePointerTarget(figure) {
  if (!['vehicle', 'relay'].includes(figure.dataset.homeArt)) return figure;
  const inset = document.createElement('span'),
    target = document.createElement('span');
  inset.className = 'home-art-inset';
  target.className = 'home-art-target';
  inset.append(target);
  figure.append(inset);
  return target;
}
const painters = { vehicle: instrument, filter: intake, ticket: secure, relay: bridge };
root.querySelectorAll('[data-home-art]').forEach((figure) => {
  const svg = figure.querySelector('svg'),
    draw = painters[figure.dataset.homeArt](svg);
  let hovering = false,
    pointer = null,
    activeTime = 0,
    previous = 0,
    raf = 0,
    visible = false;
  const mounted = performance.now();
  const wallClock = ['vehicle', 'relay'].includes(figure.dataset.homeArt);
  function paint(now) {
    const dt = previous ? Math.min(0.06, (now - previous) / 1000) : 1 / 60;
    previous = now;
    activeTime += dt;
    draw(wallClock ? (now - mounted) / 1000 : activeTime, dt, hovering, pointer);
    raf = requestAnimationFrame(paint);
  }
  function sync() {
    cancelAnimationFrame(raf);
    previous = 0;
    if (visible && !document.hidden && !reduce.matches) raf = requestAnimationFrame(paint);
  }
  draw(0.07, 1 / 60, false, null);
  new IntersectionObserver(
    (es) => {
      visible = es[0].isIntersecting;
      sync();
    },
    { rootMargin: '100px' }
  ).observe(figure);
  const pointerTarget = featurePointerTarget(figure);
  pointerTarget.addEventListener('pointerenter', (e) => {
    hovering = true;
    const matrix = svg.getScreenCTM();
    if (matrix) pointer = new DOMPoint(e.clientX, e.clientY).matrixTransform(matrix.inverse());
  });
  pointerTarget.addEventListener(
    'pointermove',
    (e) => {
      const m = svg.getScreenCTM();
      if (m) pointer = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
    },
    { passive: true }
  );
  pointerTarget.addEventListener('pointerleave', () => {
    hovering = false;
    pointer = null;
  });
  document.addEventListener('visibilitychange', sync);
  reduce.addEventListener('change', sync);
});

const statistics = root.querySelector('.home-metrics');
const canvas = document.createElement('canvas');
canvas.className = 'home-stat-field';
canvas.setAttribute('aria-hidden', 'true');
statistics.prepend(canvas);
const context = canvas.getContext('2d');
let areaW = 0,
  areaH = 0,
  dots = [],
  waveBegan = null,
  frameId = 0,
  cursor = null;
function resizeField() {
  areaW = canvas.clientWidth;
  areaH = canvas.clientHeight;
  if (!areaW || !areaH || !context) return;
  const ratio = devicePixelRatio || 1;
  canvas.width = Math.round(areaW * ratio);
  canvas.height = Math.round(areaH * ratio);
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  dots = [];
  for (let x = 16; x < areaW; x += 16) {
    const rim = Math.min(x, areaW - x) / areaW;
    const side = clamp((0.45 - rim) / 0.25);
    if (side === 0) continue;
    for (let y = 16; y < areaH; y += 16) {
      dots.push({
        x,
        y,
        alpha: side * clamp(Math.min(y, areaH - y) / 80),
        dist: Math.hypot(x - areaW / 2, y - areaH / 2),
      });
    }
  }
  invalidate();
}
function invalidate() {
  if (!frameId && context && !document.hidden) frameId = requestAnimationFrame(renderField);
}
function renderField(now) {
  frameId = 0;
  context.clearRect(0, 0, areaW, areaH);
  const progress = waveBegan === null ? 1 : (now - waveBegan) / 1400;
  const running = progress < 1 && !reduce.matches;
  const start = areaW * 0.08,
    end = Math.hypot(areaW / 2, areaH / 2) + 140;
  const radius = start + (end - start) * clamp(progress);
  for (const dot of dots) {
    let x = dot.x,
      y = dot.y;
    if (cursor && !reduce.matches) {
      const dx = x - cursor.x,
        dy = y - cursor.y,
        length = Math.hypot(dx, dy);
      if (length > 0 && length < 150) {
        const repulse = 8 * (1 - length / 150) ** 2;
        x += (repulse * dx) / length;
        y += (repulse * dy) / length;
      }
    }
    const offset = dot.dist - radius;
    const signal = running ? clamp(1 - Math.abs(offset) / (offset < 0 ? 140 : 42)) ** 2 : 0;
    context.fillStyle =
      signal > 0
        ? 'rgba(8,119,129,' + 0.95 * signal * dot.alpha + ')'
        : 'rgba(120,143,143,' + 0.3 * dot.alpha + ')';
    context.beginPath();
    context.arc(x, y, 0.8 + signal * 1.2, 0, Math.PI * 2);
    context.fill();
  }
  if (running) invalidate();
  else waveBegan = null;
}
new ResizeObserver(resizeField).observe(canvas);
statistics.addEventListener(
  'pointermove',
  (e) => {
    const b = canvas.getBoundingClientRect();
    cursor = { x: e.clientX - b.left, y: e.clientY - b.top };
    invalidate();
  },
  { passive: true }
);
statistics.addEventListener('pointerleave', () => {
  cursor = null;
  invalidate();
});
new IntersectionObserver(
  (entries, observer) => {
    if (entries[0].isIntersecting) {
      waveBegan = performance.now();
      invalidate();
      observer.disconnect();
    }
  },
  { rootMargin: '0px 0px -10% 0px' }
).observe(statistics.querySelector('.home-stat-content'));
document.addEventListener('visibilitychange', invalidate);
reduce.addEventListener('change', invalidate);

root.querySelectorAll('.home-cover img').forEach((image) => {
  const appear = () => image.classList.add('home-cover-loaded');
  if (image.complete && image.naturalWidth) appear();
  else image.addEventListener('load', appear, { once: true });
});

mount(document.querySelector('.site-traces'), { src: '/assets/hero-lines.webm', variant: 'hero' });
