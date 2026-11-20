/* The greyscale loops set the shape of the strokes. The colours come from the palette below. */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
let reducedMotion = reduce.matches;
const preferenceListeners = new Set();
reduce.addEventListener('change', (event) => {
  reducedMotion = event.matches;
  for (const update of preferenceListeners) update();
});
const profiles = {
  hero: { paper: '#ffffff', inks: ['#c79732', '#77bd9f', '#4faeab', '#087781'], pointer: true },
  cta: { paper: '#087781', inks: ['#ffffff', '#efd096', '#8dcbbf', '#ffffff'], pointer: false },
};
const GRID = 0.07;
const bands = [0.0625, 0.25, 0.375, 0.5];
const glslVertex = 'attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}';
const filmShader =
  `
  precision highp float;
  uniform sampler2D film;
  uniform vec2 viewport, ` +
  `cover;
  void main(){
    vec2 uv=gl_FragCoord.xy/viewport;
    gl_FragColor=texture2D(film,(uv-.5)*cover+.5);
  }
`;
const brushShader =
  `
  precision highp float;
  uniform vec2 viewport, ` +
  `brush[8];
  uniform float viewAspect;
  void main(){
    vec2 uv=gl_FragCoord.xy/viewport;
    float added=0.;
    float contribution=.3;
    for(int i=0;i<8;++i){
      vec2 delta=(uv-brush[i])*vec2(viewAspect,1.);
      added+=contribution*(1.-smoothstep(0.,.18,length(delta)));
      contribution*=.65704682;
    }
    gl_FragColor=vec4(1.,1.,1.,min(1.,added));
  }
`;
const strokeShader =
  `
  precision highp float;
  uniform sampler2D field;
  uniform vec2 viewport;
  uniform vec3 paper, ` +
  `edgeInk, ink0, ink1, ink2, ` +
  `ink3;
  const float density = 0.07;
  float category(vec2 tile) {
    vec2 samplePoint=(tile+.5)/(viewport*density);
    float tone=dot(texture2D(field,samplePoint).rgb,vec3(.299,.587,.114));
    return min(3.,floor(5.*clamp(3.1*(tone-.5)+.5,0.,1.))-1.);
  }
  void main(){
    vec2 pos=gl_FragCoord.xy*density;
    vec2 tile=floor(pos);
    float tier=category(tile);
    vec2 limit=max(viewport*density-1.,0.);
    float edgeTier=category(clamp(tile,vec2(0.),limit));
    if(edgeTier<0.){gl_FragColor=vec4(paper,1.);return;}
    float w=edgeTier<.5?.0625:edgeTier<1.5?.25:edgeTier<2.5?.375:.5;
    float radius=w*.66;
    float corner=radius*.44;
    bool joinBelow=category(clamp(tile-vec2(0.,1.),vec2(0.),limit))==edgeTier;
    bool joinAbove=category(clamp(tile+vec2(0.,1.),vec2(0.),limit))==edgeTier;
    vec2 f=fract(pos);
    float edge=abs(f.x-.5);
    float coverage=1.-smoothstep(radius,radius+.02,edge);
    float endDistance=min(joinBelow?2.:f.y,joinAbove?2.:1.-f.y);
    if(endDistance<.0225){coverage=0.;}
    else if(endDistance<.0225+corner && edge>radius-corner){
      vec2 d=vec2(edge-(radius-corner),endDistance-(.0225+corner));
      coverage*=1.-smoothstep(corner,corner+.02,length(d));
    }
    vec3 ink=tier<0.?edgeInk:tier<.5?ink0:tier<1.5?ink1:tier<2.5?ink2:ink3;
    gl_FragColor=vec4(mix(paper,ink,coverage),1.);
  }
`;
const rgb = (color) => [1, 3, 5].map((start) => parseInt(color.slice(start, start + 2), 16) / 255);

function gpu(canvas, profile) {
  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    powerPreference: 'low-power',
  });
  if (!gl) return null;
  function compile(type, code) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, code);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw Error(gl.getShaderInfoLog(shader));
    return shader;
  }
  function makeProgram(source) {
    const program = gl.createProgram(),
      vertex = compile(gl.VERTEX_SHADER, glslVertex),
      fragment = compile(gl.FRAGMENT_SHADER, source);
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.bindAttribLocation(program, 0, 'position');
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS))
      throw Error(gl.getProgramInfoLog(program));
    return program;
  }
  const videoPass = makeProgram(filmShader),
    inkPass = makeProgram(strokeShader);
  const brushPass = profile.pointer ? makeProgram(brushShader) : null;
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  function newTexture() {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    for (const key of [gl.TEXTURE_MAG_FILTER, gl.TEXTURE_MIN_FILTER])
      gl.texParameteri(gl.TEXTURE_2D, key, gl.LINEAR);
    for (const key of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T])
      gl.texParameteri(gl.TEXTURE_2D, key, gl.CLAMP_TO_EDGE);
    return texture;
  }
  const frame = gl.createFramebuffer(),
    fitted = newTexture(),
    texture = newTexture();
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  const loc = (program, name) => gl.getUniformLocation(program, name);
  gl.useProgram(videoPass);
  gl.uniform1i(loc(videoPass, 'film'), 0);
  const videoSize = loc(videoPass, 'viewport'),
    cover = loc(videoPass, 'cover');
  const brushSize = brushPass && loc(brushPass, 'viewport'),
    brush = brushPass && loc(brushPass, 'brush[0]');
  const brushAspect = brushPass && loc(brushPass, 'viewAspect');
  const gpuTrail = new Float32Array(16);
  gl.useProgram(inkPass);
  gl.uniform1i(loc(inkPass, 'field'), 0);
  gl.uniform3fv(loc(inkPass, 'paper'), rgb(profile.paper));
  gl.uniform3fv(loc(inkPass, 'edgeInk'), rgb('#4faeab'));
  profile.inks.forEach((c, i) => gl.uniform3fv(loc(inkPass, 'ink' + i), rgb(c)));
  const inkSize = loc(inkPass, 'viewport');
  let width = 0,
    height = 0;
  return (film, trail, viewAspect) => {
    const frameWidth = film.videoWidth || film.naturalWidth,
      frameHeight = film.videoHeight || film.naturalHeight;
    const w = canvas.width,
      h = canvas.height,
      ratio = viewAspect / (frameWidth / frameHeight);
    gl.bindFramebuffer(gl.FRAMEBUFFER, frame);
    if (width !== w || height !== h) {
      width = w;
      height = h;
      gl.bindTexture(gl.TEXTURE_2D, fitted);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, fitted, 0);
    }
    gl.viewport(0, 0, w, h);
    gl.useProgram(videoPass);
    gl.uniform2f(videoSize, w, h);
    gl.uniform2f(cover, Math.min(1, ratio), Math.min(1, 1 / ratio));
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, film);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (brushPass) {
      gpuTrail.set(trail);
      gl.useProgram(brushPass);
      gl.uniform2f(brushSize, w, h);
      gl.uniform1f(brushAspect, viewAspect);
      gl.uniform2fv(brush, gpuTrail);
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.disable(gl.BLEND);
    }
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.useProgram(inkPass);
    gl.uniform2f(inkSize, w, h);
    gl.bindTexture(gl.TEXTURE_2D, fitted);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
}

// Draw the same source frames when GPU acceleration is unavailable.
function cpu(canvas, profile) {
  const out = canvas.getContext('2d');
  const sample = document.createElement('canvas');
  const ctx = sample.getContext('2d', { willReadFrequently: true });
  if (!out || !ctx) return null;
  let lastFrame = -1,
    lastSource = null,
    pixels;
  return (film, trail, viewAspect) => {
    if (lastSource !== film || lastFrame !== film.currentTime) {
      const width = film.videoWidth || film.naturalWidth,
        height = film.videoHeight || film.naturalHeight;
      if (sample.width !== width || sample.height !== height) {
        sample.width = width;
        sample.height = height;
      }
      ctx.drawImage(film, 0, 0);
      pixels = ctx.getImageData(0, 0, sample.width, sample.height).data;
      lastFrame = film.currentTime;
      lastSource = film;
    }
    const W = canvas.width,
      H = canvas.height,
      step = 1 / GRID;
    const ratio = viewAspect / (sample.width / sample.height);
    const sx = Math.min(1, ratio),
      sy = Math.min(1, 1 / ratio);
    const cols = Math.ceil(W * GRID),
      rows = Math.ceil(H * GRID);
    const codes = new Int8Array(rows);
    out.fillStyle = profile.paper;
    out.fillRect(0, 0, W, H);
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const u = (col + 0.5) / (W * GRID),
          v = (row + 0.5) / (H * GRID);
        const fx = Math.min(
          sample.width - 1,
          Math.max(0, ((u - 0.5) * sx + 0.5) * sample.width - 0.5)
        );
        const fy = Math.min(
          sample.height - 1,
          Math.max(0, ((0.5 - v) * sy + 0.5) * sample.height - 0.5)
        );
        const x = Math.floor(fx),
          y = Math.floor(fy),
          idx = (y * sample.width + x) * 4;
        const nextX = x + 1 < sample.width ? 4 : 0,
          nextY = y + 1 < sample.height ? sample.width * 4 : 0;
        const rowA = pixels[idx] + (pixels[idx + nextX] - pixels[idx]) * (fx - x);
        const rowB =
          pixels[idx + nextY] + (pixels[idx + nextX + nextY] - pixels[idx + nextY]) * (fx - x);
        let tone = (rowA + (rowB - rowA) * (fy - y)) / 255;
        if (profile.pointer) {
          let amount = 0,
            weight = 0.3;
          for (let i = 0; i < 16; i += 2) {
            const distance = Math.hypot((u - trail[i]) * viewAspect, v - trail[i + 1]);
            const r = Math.min(1, distance / 0.18);
            amount += weight * (1 - r * r * (3 - 2 * r));
            weight *= 0.65704682;
          }
          tone += (1 - tone) * Math.min(amount, 1);
        }
        codes[row] = Math.max(-1, Math.min(3, Math.floor(5 * (3.1 * (tone - 0.5) + 0.5)) - 1));
      }
      for (let row = 0; row < rows;) {
        const code = codes[row],
          begin = row;
        while (++row < rows && codes[row] === code) {}
        if (code < 0) continue;
        const radius = bands[code] * 0.66 * step,
          gap = step * 0.0225;
        out.fillStyle = profile.inks[code];
        out.beginPath();
        out.roundRect(
          (col + 0.5) * step - radius,
          H - row * step + gap,
          radius * 2,
          (row - begin) * step - 2 * gap,
          radius * 0.44
        );
        out.fill();
      }
    }
  };
}

export function mount(container, { src, variant }) {
  if (!container || container.querySelector('canvas[data-relay-motion]')) return;
  const profile = profiles[variant];
  if (!profile) return;
  const video = document.createElement('video');
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.setAttribute('aria-hidden', 'true');
  video.hidden = true;
  const stem = src.slice(0, src.lastIndexOf('.'));
  const formats = [
    ['.webm', 'video/webm; codecs="vp9"'],
    ['.mp4', 'video/mp4; codecs="avc1.4D401E"'],
  ].filter(([, type]) => video.canPlayType(type));
  const poster = new Image();
  let sourceIndex = 0,
    sourceTimer = 0,
    posterReady = false,
    playbackDenied = false,
    allowPoster = reducedMotion;
  let canvas = document.createElement('canvas'),
    draw;
  canvas.setAttribute('aria-hidden', 'true');
  try {
    draw = gpu(canvas, profile);
  } catch {}
  const usesGPU = Boolean(draw);
  if (!draw) {
    canvas = document.createElement('canvas');
    draw = cpu(canvas, profile);
  }
  if (!draw) return;
  canvas.dataset.relayMotion = variant;
  canvas.style.cssText = 'display:block;width:100%;height:100%;';
  container.replaceChildren(canvas, video);
  const movieCanvas = canvas;
  let stillCanvas, drawStill;
  function rendererFor(still) {
    if (still && usesGPU && !stillCanvas) {
      stillCanvas = movieCanvas.cloneNode(false);
      drawStill = cpu(stillCanvas, profile);
    }
    const useStillCanvas = still && Boolean(drawStill);
    const target = useStillCanvas ? stillCanvas : movieCanvas;
    if (canvas !== target) {
      canvas.replaceWith(target);
      canvas = target;
      resize();
    }
    return useStillCanvas ? drawStill : draw;
  }
  const trail = new Float64Array(16).fill(0.5);
  let active = false,
    raf = 0,
    lastX = null,
    lastY = null,
    viewAspect = 1;
  function resize() {
    const rect = container.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    viewAspect = rect.width / rect.height;
    const ratio = Math.min(2, Math.max(1, devicePixelRatio || 1));
    const w = Math.floor(rect.width * ratio),
      h = Math.floor(rect.height * ratio);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  }
  function pointer(event) {
    if (!event.isPrimary) return;
    const events = event.getCoalescedEvents?.();
    const latest = events?.length ? events[events.length - 1] : event;
    lastX = latest.clientX;
    lastY = latest.clientY;
    wake();
  }
  if (profile.pointer) {
    window.addEventListener('pointermove', pointer, { passive: true });
    window.addEventListener('pointerdown', pointer, { passive: true });
  }
  function paint() {
    raf = 0;
    if (!active || document.hidden) return;
    const filmReady = video.readyState >= 2 && !video.error;
    const usePoster =
      posterReady && (reducedMotion || playbackDenied || (!filmReady && allowPoster));
    const source = usePoster ? poster : filmReady ? video : null;
    if (!source) return;
    let settling = false;
    if (profile.pointer && !reducedMotion) {
      const rect = container.getBoundingClientRect();
      if (lastX !== null && rect.width && rect.height) {
        trail[0] = (lastX - rect.left) / rect.width;
        trail[1] = 1 - (lastY - rect.top) / rect.height;
      }
      for (let i = 2; i < trail.length; i++) {
        const delta = trail[i - 2] - trail[i];
        trail[i] += 0.18 * delta;
        if (Math.abs(delta) > 0.0001) settling = true;
      }
    }
    rendererFor(usePoster)(source, trail, viewAspect);
    if (!container.classList.contains('relay-motion-ready'))
      container.classList.add('relay-motion-ready');
    if (!reducedMotion && ((source === video && !video.paused) || settling))
      raf = requestAnimationFrame(paint);
  }
  function wake() {
    if (!raf && active && !document.hidden) raf = requestAnimationFrame(paint);
  }
  function requestPlayback() {
    if (reducedMotion) {
      video.pause();
      wake();
      return;
    }
    video.play().catch((error) => {
      if (error.name === 'NotAllowedError') {
        playbackDenied = true;
        wake();
      }
    });
  }
  function nextMovie() {
    clearTimeout(sourceTimer);
    if (sourceIndex === formats.length) {
      allowPoster = true;
      wake();
      return;
    }
    video.src = stem + formats[sourceIndex++][0];
    sourceTimer = setTimeout(() => {
      if (video.readyState < 2 && sourceIndex < formats.length && !reducedMotion) nextMovie();
    }, 6000);
    requestPlayback();
  }
  function preference() {
    if (reducedMotion) {
      allowPoster = true;
      video.pause();
    } else if (video.currentSrc && !video.error) requestPlayback();
    wake();
  }
  new ResizeObserver(() => {
    resize();
    wake();
  }).observe(container);
  new IntersectionObserver(
    ([entry]) => {
      active = entry.isIntersecting;
      if (active) {
        resize();
        wake();
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    },
    { rootMargin: '100px' }
  ).observe(container);
  poster.addEventListener('load', () => {
    posterReady = true;
    wake();
  });
  poster.src = stem + '-poster.webp';
  video.addEventListener('error', nextMovie);
  video.addEventListener('loadeddata', () => {
    clearTimeout(sourceTimer);
    wake();
  });
  video.addEventListener('seeked', wake);
  video.addEventListener('playing', () => {
    playbackDenied = false;
    wake();
  });
  document.addEventListener('visibilitychange', wake);
  preferenceListeners.add(preference);
  // Fall back to the still image when the video is slow or cannot be decoded.
  setTimeout(() => {
    allowPoster = true;
    wake();
  }, 1400);
  nextMovie();
  return {
    get canvas() {
      return canvas;
    },
    video,
  };
}
