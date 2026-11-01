/* MARGEN — form.js: validación y envío del formulario de contacto */
(function(){
  'use strict';
  const f = document.getElementById('contact-form'); if (!f) return;
  const S = window.SITE || {}, out = document.getElementById('form-msg');
  const rules = {
    nombre: v => v.trim().length >= 2 || 'Escribe tu nombre (mínimo 2 letras).',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Escribe un correo válido, por ejemplo nombre@correo.com.',
    whatsapp: v => v.replace(/\D/g, '').length >= 10 || 'Escribe tu número con al menos 10 dígitos.',
    servicio: v => !!v || 'Selecciona el servicio que necesitas.',
    mensaje: v => v.trim().length >= 20 || 'Cuéntanos tu proyecto en al menos 20 caracteres.'
  };
  function check(name){
    const el = f.elements[name], box = el.closest('.field'), r = rules[name] ? rules[name](el.value) : true;
    box.classList.toggle('bad', r !== true); el.setAttribute('aria-invalid', r !== true);
    box.querySelector('.err').textContent = r === true ? '' : r; return r === true;
  }
  Object.keys(rules).forEach(n => { f.elements[n].addEventListener('blur', () => check(n)); f.elements[n].addEventListener('input', () => f.elements[n].closest('.field').classList.contains('bad') && check(n)); });

  /* Preselecciona el servicio si llega desde una página de servicio (?servicio=slug) */
  const q = new URLSearchParams(location.search).get('servicio');
  if (q) { const o = [...f.elements.servicio.options].find(x => x.value === q); if (o) f.elements.servicio.value = q; }

  function show(type, html){ out.className = 'msg ' + type; out.innerHTML = html; out.focus(); }
  f.addEventListener('submit', async e => {
    e.preventDefault();
    const bad = Object.keys(rules).filter(n => !check(n));
    if (bad.length) { f.elements[bad[0]].focus(); return show('ko', 'Revisa los campos marcados antes de enviar.'); }
    if (!S.formEndpoint) {
      return show('ko', 'El formulario está validado, pero todavía no está conectado a un servicio de envío, por lo que este mensaje <strong>no se ha enviado</strong>. Mientras tanto, escríbenos por WhatsApp o correo.');
    }
    const btn = f.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = 'Enviando…';
    try {
      const r = await fetch(S.formEndpoint, {method:'POST', headers:{'Accept':'application/json'}, body:new FormData(f)});
      if (!r.ok) throw new Error(r.status);
      f.reset(); show('ok', '¡Gracias! Recibimos tu mensaje y te responderemos pronto.');
    } catch (err) {
      show('ko', 'No pudimos enviar el mensaje. Inténtalo de nuevo o escríbenos por WhatsApp o correo.');
    } finally { btn.disabled = false; btn.textContent = 'Enviar mensaje'; }
  });
})();
