/* ═══════════════════════════════════════════════════════════════
   template-musica-001 — Accademia Mozart — script.js
   creative-music scroll · single-page · pt-BR
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll animation — frame config ──────────────────────────
var FRAME_PATH   = 'https://8ispuxmgjxgu2r5q.public.blob.vercel-storage.com/templates/musica-001/frames/';
var FRAME_PREFIX = 'frame_';
var FRAME_PAD    = 4;
var FRAME_EXT    = '.webp';
var FRAME_COUNT  = 151;  // creative-music — HARD

// ── Image fallback (3-layer, SKILL.md §Layer 2) ───────────────
window.__imgFallback = function (img, label) {
  var wrapper = document.createElement('div');
  wrapper.className = 'img-svg-fallback img-fallback';
  wrapper.setAttribute('role', 'img');
  wrapper.setAttribute('aria-label', label || 'imagem em breve');
  var gid = 'g' + Date.now() + Math.random().toString(36).substr(2, 4);
  wrapper.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"'
    + ' viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">'
    + '<defs>'
    + '<linearGradient id="' + gid + '" x1="0%" y1="0%" x2="100%" y2="100%">'
    + '<stop offset="0%"  stop-color="#6B2D3E" stop-opacity="0.08"/>'
    + '<stop offset="100%" stop-color="#C4872A" stop-opacity="0.06"/>'
    + '</linearGradient>'
    + '</defs>'
    + '<rect width="100%" height="100%" fill="url(#' + gid + ')"/>'
    + '<text x="50%" y="50%"'
    + ' font-family="\'Lato\',sans-serif" font-size="13" fill="#7A726C"'
    + ' text-anchor="middle" dominant-baseline="middle"'
    + ' letter-spacing="0.08em">'
    + (label || 'imagem em breve')
    + '</text>'
    + '</svg>';
  img.replaceWith(wrapper);
};

// ── Phosphor Regular icons (stroke-width 12-14) ───────────────
var PHOSPHOR_ICONS = {

  'WhatsappLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M128,32 C76,32 32,72 32,120 C32,142 40,163 54,179 L40,216 L79,203 C95,211 111,216 128,216 C180,216 224,176 224,128 C224,80 180,32 128,32 Z"/><path d="M100,88 C100,88 92,108 108,124 C124,140 148,132 148,132"/></svg>',

  'InstagramLogo': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><rect x="32" y="32" width="192" height="192" rx="48"/><circle cx="128" cy="128" r="48"/><circle cx="180" cy="76" r="8" fill="currentColor" stroke="none"/></svg>',

  'MapPin': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="128" cy="104" r="40"/><path d="M128,224 C128,224 40,152 40,104 a88,88,0,0,1,176,0 C216,152,128,224,128,224 Z"/></svg>',

  'Clock': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="128" cy="128" r="96"/><polyline points="128,72 128,128 168,168"/></svg>',

  'Phone': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M164,164 L184,184 a16,16,0,0,1,0,22.6 C152,240 16,104 49.4,72 a16,16,0,0,1,22.6,0 L92,92 a16,16,0,0,1,0,22.6 L80,126.4 C98,158 98,158 130,176 Z"/></svg>',

  'Check': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><polyline points="40,128 104,192 216,64"/></svg>',

  'Star': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><polygon points="128,32 160,96 232,107 181,157 193,229 128,196 63,229 75,157 24,107 96,96"/></svg>',

  'MusicNote': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M88,160 L88,48 L208,24 L208,136"/><circle cx="64" cy="160" r="24"/><circle cx="184" cy="136" r="24"/></svg>',

  'GraduationCap': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><path d="M32,104 L128,56 L224,104 L128,152 Z"/><path d="M64,124 L64,180 a64,16,0,0,0,128,0 L192,124"/><line x1="224" y1="104" x2="224" y2="152"/></svg>',

  'Users': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="88" cy="96" r="40"/><path d="M16,216 a96,40,0,0,1,144,0"/><circle cx="192" cy="96" r="32"/><path d="M216,216 a72,32,0,0,0,-48,-32"/></svg>',

  'ArrowRight': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" stroke="currentColor" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true"><line x1="40" y1="128" x2="216" y2="128"/><polyline points="144,56 216,128 144,200"/></svg>'
};

(function () {
  'use strict';

  // ── Inject icons ─────────────────────────────────────────
  document.querySelectorAll('[data-icon]').forEach(function (el) {
    var name = el.getAttribute('data-icon');
    var svg  = PHOSPHOR_ICONS[name];
    if (svg) el.innerHTML = svg;
  });

  // ── Footer year ──────────────────────────────────────────
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Navbar scroll class ──────────────────────────────────
  var navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Mobile nav toggle ────────────────────────────────────
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      document.body.classList.toggle('nav-mobile-open', !expanded);
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // ── IntersectionObserver — fade-up + stagger-card ────────
  if ('IntersectionObserver' in window) {
    var animObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      animObserver.observe(el);
    });
  } else {
    // Fallback — force all visible
    document.querySelectorAll('.fade-up, .stagger-card').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ── Scroll animation — canvas cover mode ─────────────────
  var section = document.getElementById('scroll-anim');
  var canvas  = document.getElementById('scroll-canvas');
  if (!section || !canvas) return;

  var ctx    = canvas.getContext('2d');
  var images = [];
  var loaded = 0;
  var currentFrame = 0;
  var pin    = section.querySelector('.scroll-anim-pin');
  var DPR    = Math.min(window.devicePixelRatio || 1, 2);

  function setupCanvas() {
    var cw = pin.clientWidth;
    var ch = pin.clientHeight;
    canvas.width  = cw * DPR;
    canvas.height = ch * DPR;
    canvas.style.width  = cw + 'px';
    canvas.style.height = ch + 'px';
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  // Cover mode: Math.max(cw/iw, ch/ih)
  function renderFrame(img) {
    var cw = pin.clientWidth;
    var ch = pin.clientHeight;
    var iw = img.naturalWidth;
    var ih = img.naturalHeight;
    if (!iw || !ih) return;
    var scale = Math.max(cw / iw, ch / ih);
    var sw = iw * scale;
    var sh = ih * scale;
    var sx = (cw - sw) / 2;
    var sy = (ch - sh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh);
  }

  function drawFrame(index) {
    var img = images[index];
    if (img && img.complete && img.naturalWidth) {
      renderFrame(img);
      currentFrame = index;
    }
  }

  function onScroll() {
    var rect     = section.getBoundingClientRect();
    var total    = section.offsetHeight - window.innerHeight;
    var scrolled = Math.max(0, -rect.top);
    var progress = Math.min(1, scrolled / total);
    var frameIdx = Math.round(progress * (FRAME_COUNT - 1));
    if (frameIdx !== currentFrame) drawFrame(frameIdx);
  }

  // Preload from Vercel Blob CDN
  for (var i = 0; i < FRAME_COUNT; i++) {
    (function (idx) {
      var img = new Image();
      img.onload = function () {
        loaded++;
        if (idx === 0 || loaded === 1) {
          setupCanvas();
          renderFrame(img);
          currentFrame = 0;
        }
      };
      img.src = FRAME_PATH + FRAME_PREFIX + String(idx + 1).padStart(FRAME_PAD, '0') + FRAME_EXT;
      images[idx] = img;
    })(i);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { setupCanvas(); drawFrame(currentFrame); }, { passive: true });
  setupCanvas();

})();
