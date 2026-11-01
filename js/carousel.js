/* MARGEN — carousel.js: carrusel circular tipo rueda (CSS 3D + rAF)
   Uso: <div data-wheel> con .ring > .wheel-item. Botones: [data-wheel-prev] [data-wheel-next] [data-wheel-play] */
(function(){
  'use strict';
  const wheel = document.querySelector('[data-wheel]'); if (!wheel) return;
  const ring = wheel.querySelector('.ring'), items = [...ring.children], n = items.length, step = 360 / n;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let rot = 0, target = null, radius = 300, auto = !reduce, hover = false, drag = null, moved = 0, visible = true, last = 0;

  function layout(){
    const w = wheel.clientWidth, iw = Math.round(Math.min(300, Math.max(150, w * (w < 640 ? .46 : .21))));
    wheel.style.setProperty('--iw', iw + 'px');
    radius = iw * .55 / Math.tan(Math.PI / n) * 1.5;
    items.forEach((el, i) => el.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`);
    paint();
  }
  const norm = a => ((a + 180) % 360 + 360) % 360 - 180;
  function paint(){
    ring.style.transform = `translateZ(${-radius}px) rotateY(${-rot}deg)`;
    let best = 0, bd = 999;
    items.forEach((el, i) => {
      const d = Math.abs(norm(i * step - rot));
      el.style.opacity = Math.max(0, 1 - d / 150).toFixed(2);
      el.style.zIndex = Math.round(100 - d);
      if (d < bd) { bd = d; best = i; }
    });
    items.forEach((el, i) => { const f = i === best; el.classList.toggle('front', f); el.setAttribute('aria-current', f); el.tabIndex = f ? 0 : -1; });
  }
  function go(dir){ target = (Math.round(rot / step) + dir) * step; }
  function frame(t){
    const dt = Math.min(50, t - last || 16); last = t;
    if (visible && !drag) {
      if (target !== null) { rot += (target - rot) * Math.min(1, dt * .008); if (Math.abs(target - rot) < .05) { rot = target; target = null; } }
      else if (auto) rot += dt * (hover ? .002 : .0065); // grados por ms: lento; casi detenido al pasar el cursor
      paint();
    }
    requestAnimationFrame(frame);
  }

  /* Arrastrar con ratón o dedo */
  wheel.addEventListener('pointerdown', e => { drag = {x:e.clientX, rot}; moved = 0; target = null; wheel.setPointerCapture(e.pointerId); wheel.classList.add('drag'); });
  wheel.addEventListener('pointermove', e => { if (!drag) return; const dx = e.clientX - drag.x; moved = Math.max(moved, Math.abs(dx)); rot = drag.rot - dx * .28; paint(); });
  const end = () => { if (!drag) return; drag = null; wheel.classList.remove('drag'); if (moved > 5) target = Math.round(rot / step) * step; };
  wheel.addEventListener('pointerup', end); wheel.addEventListener('pointercancel', end);
  wheel.addEventListener('mouseenter', () => hover = true); wheel.addEventListener('mouseleave', () => hover = false);

  /* Clic: lleva la foto al frente; si ya está al frente, la amplía */
  items.forEach((el, i) => el.addEventListener('click', () => {
    if (moved > 5) return;
    if (el.classList.contains('front')) { const im = el.querySelector('img');
      window.dispatchEvent(new CustomEvent('open-lb', {detail:{src:im.currentSrc || im.src, alt:im.alt, title:el.dataset.title, cat:el.dataset.cat, desc:el.dataset.desc}})); }
    else target = rot + norm(i * step - rot);
  }));

  document.querySelector('[data-wheel-prev]')?.addEventListener('click', () => go(-1));
  document.querySelector('[data-wheel-next]')?.addEventListener('click', () => go(1));
  const play = document.querySelector('[data-wheel-play]');
  if (play) { play.setAttribute('aria-pressed', !auto); play.textContent = auto ? 'Pausar' : 'Reproducir';
    play.addEventListener('click', () => { auto = !auto; play.setAttribute('aria-pressed', !auto); play.textContent = auto ? 'Pausar' : 'Reproducir'; }); }
  wheel.tabIndex = 0;
  wheel.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') go(-1); if (e.key === 'ArrowRight') go(1); });

  new IntersectionObserver(es => visible = es[0].isIntersecting).observe(wheel);
  addEventListener('resize', layout);
  layout(); requestAnimationFrame(frame);
})();
