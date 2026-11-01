/* MARGEN — main.js: navegación, progreso, datos editables, lightbox, filtros, respaldo de imágenes */
(function(){
  'use strict';
  const S = window.SITE || {};
  const $ = (s, c=document) => c.querySelector(s), $$ = (s, c=document) => [...c.querySelectorAll(s)];
  const root = document.body.dataset.root || '';

  /* Respaldo si falta una imagen: evita espacios rotos */
  window.addEventListener('error', e => {
    const t = e.target;
    if (t && t.tagName === 'IMG' && !t.dataset.fb) { t.dataset.fb = '1'; t.src = root + 'assets/images/placeholder.svg'; }
  }, true);

  /* Menú sticky + indicador de progreso */
  const nav = $('.nav'), bar = $('#progress');
  let tick = false;
  function onScroll(){
    if (tick) return; tick = true;
    requestAnimationFrame(() => {
      const y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
      nav.classList.toggle('scrolled', y > 30);
      if (bar) bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
      tick = false;
    });
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  /* Menú hamburguesa */
  const burger = $('.burger'), menu = $('#menu');
  function setMenu(open){
    burger.setAttribute('aria-expanded', open); menu.classList.toggle('open', open);
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  $$('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  matchMedia('(min-width:901px)').addEventListener('change', () => setMenu(false));

  /* Datos editables desde config.js */
  const pending = v => !v || /EDITAR/i.test(v);
  const wa = S.whatsapp ? `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(S.whatsappMensaje || '')}` : '';
  $$('[data-site]').forEach(el => {
    const k = el.dataset.site, v = S[k];
    if (k === 'whatsapp') { el.textContent = S.whatsapp ? '+' + S.whatsapp : 'WhatsApp (pendiente de configurar)'; return; }
    el.textContent = v || '';
  });
  $$('[data-href]').forEach(a => {
    const k = a.dataset.href;
    if (k === 'email' && !pending(S.email)) a.href = 'mailto:' + S.email;
    else if (k === 'whatsapp' && wa) { a.href = wa; a.target = '_blank'; a.rel = 'noopener'; }
    else if (['instagram','behance','pinterest'].includes(k) && !pending(S[k])) { a.href = S[k]; a.target = '_blank'; a.rel = 'noopener'; }
    else if (a.dataset.href) { a.dataset.pending = k; }
  });
  /* Toast para datos aún no configurados */
  let toast;
  function say(msg){
    toast = toast || Object.assign(document.createElement('div'), {className:'msg ko', role:'status'});
    Object.assign(toast.style, {position:'fixed', left:'50%', bottom:'5.5rem', transform:'translateX(-50%)', zIndex:500, maxWidth:'90vw'});
    toast.textContent = msg; document.body.appendChild(toast);
    clearTimeout(toast._t); toast._t = setTimeout(() => toast.remove(), 4200);
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-pending]'); if (!a) return;
    if (a.getAttribute('href') === '#' || !a.getAttribute('href')) { e.preventDefault();
      say('Este dato aún no está configurado. Edítalo en js/config.js.'); }
  });
  $$('[data-pending]').forEach(a => { if (!a.getAttribute('href')) a.setAttribute('href', '#'); });
  const y = $('[data-year]'); if (y) y.textContent = new Date().getFullYear();

  /* Lightbox / vista de proyecto */
  const lb = $('#lb');
  if (lb) {
    const im = $('img', lb), t = $('h3', lb), c = $('.lb-c', lb), d = $('.lb-d', lb);
    let list = [], idx = 0, last;
    const show = i => { idx = (i + list.length) % list.length; const o = list[idx];
      im.src = o.src; im.alt = o.alt; t.textContent = o.title; c.textContent = o.cat; d.textContent = o.desc; };
    const open = (items, i) => { list = items; last = document.activeElement; show(i); lb.classList.add('open'); document.body.style.overflow = 'hidden'; $('.x', lb).focus(); };
    const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; last && last.focus(); };
    const grab = el => { const i = $('img', el); return {src:i.currentSrc || i.src, alt:i.alt, title:el.dataset.title || i.alt, cat:el.dataset.cat || '', desc:el.dataset.desc || ''}; };
    document.addEventListener('click', e => {
      const b = e.target.closest('[data-lb]'); if (!b) return;
      const group = $$('[data-lb="' + b.dataset.lb + '"]').filter(x => !x.classList.contains('hide'));
      open(group.map(grab), group.indexOf(b));
    });
    window.addEventListener('open-lb', e => open([e.detail], 0));
    $('.x', lb).addEventListener('click', close);
    $('.prev', lb).addEventListener('click', () => show(idx - 1));
    $('.next', lb).addEventListener('click', () => show(idx + 1));
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    addEventListener('keydown', e => { if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); });
  }

  /* Filtros del portafolio */
  const chips = $$('[data-filter]');
  chips.forEach(ch => ch.addEventListener('click', () => {
    chips.forEach(x => { x.classList.toggle('on', x === ch); x.setAttribute('aria-pressed', x === ch); });
    const f = ch.dataset.filter;
    $$('.m-item').forEach(it => it.classList.toggle('hide', f !== 'all' && it.dataset.cat !== f));
  }));
})();
