/* MARGEN — animations.js: revelado al scroll, titulares por palabras, parallax, proceso, cintas */
(function(){
  'use strict';
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Titulares: cada palabra sube desde una máscara */
  $$('.split').forEach(el => {
    const words = el.textContent.trim().split(/\s+/);
    el.setAttribute('aria-label', el.textContent.trim());
    el.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(' ');
  });

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), {threshold:.15, rootMargin:'0px 0px -6% 0px'});
  $$('.reveal, .split').forEach(el => reduce ? el.classList.add('in') : io.observe(el));

  /* Parallax ligero */
  const par = $$('[data-parallax]');
  if (par.length && !reduce) {
    let t = false;
    const run = () => { par.forEach(el => { const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > innerHeight) return;
        el.style.translate = `0 ${((r.top + r.height / 2 - innerHeight / 2) * -Number(el.dataset.parallax)).toFixed(1)}px`; });
      t = false; };
    addEventListener('scroll', () => { if (!t) { t = true; requestAnimationFrame(run); } }, {passive:true}); run();
  }

  /* Línea de tiempo del proceso */
  $$('.process').forEach(p => {
    const steps = $$('.step', p);
    const o = new IntersectionObserver(es => { if (!es[0].isIntersecting) return; o.disconnect();
      p.style.setProperty('--prog', '100%');
      steps.forEach((s, i) => setTimeout(() => s.classList.add('on'), reduce ? 0 : i * 320)); }, {threshold:.35});
    o.observe(p);
  });

  /* Cintas horizontales automáticas: se duplica el contenido para un bucle continuo */
  $$('.marquee-track').forEach(tr => {
    [...tr.children].forEach(c => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); k.querySelectorAll('a,button').forEach(x => x.tabIndex = -1); tr.appendChild(k); });
  });
})();
