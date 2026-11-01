# MARGEN Creative Studio — sitio web

Sitio multipágina en HTML5, CSS3 y JavaScript vanilla (sin frameworks). Ábrelo en Visual Studio Code y usa la extensión **Live Server** (clic derecho en `index.html` → *Open with Live Server*), o abre `index.html` directamente en el navegador.

## Estructura
- `index.html`, `servicios.html`, `nosotros.html`, `portafolio.html`, `contacto.html`, `privacidad.html`, `terminos.html`
- `pages/` → **48 páginas de servicio**, una por cada servicio (hero, qué incluye, paquetes en RD$, galería, proceso, FAQ, relacionados)
- `css/` → `style.css`, `responsive.css`, `animations.css`
- `js/` → `config.js` (tus datos), `main.js`, `carousel.js` (rueda 3D), `animations.js`, `form.js`
- `assets/logos/` → logo original, isotipo y favicon · `assets/images/` → fotos por carpeta · `assets/fonts`, `assets/videos`, `assets/icons`
- `GUIA-REEMPLAZAR-IMAGENES.md` → lista de las 226 fotos (archivo, carpeta, página, tamaño y tipo de foto)
- `herramientas/` → `descargar_fotos.py` e `imagenes.json`

## Lo primero que debes hacer
1. **Datos de contacto:** edita `js/config.js` (correo, WhatsApp con código de país, Instagram, Behance, Pinterest). Mientras tengan "EDITAR" o estén vacíos, los botones avisan que faltan.
2. **Formulario:** pega en `formEndpoint` la URL de un servicio de envío (por ejemplo Formspree: `https://formspree.io/f/xxxxxxx`). Sin ella, el formulario valida pero **no envía** y se lo dice al visitante.
3. **Fotos reales:** las imágenes que trae el ZIP son **marcadores de color con el nombre del archivo** (no hubo acceso a internet para descargar fotos al crear el proyecto). Tienes dos caminos:
   - **Automático:** consigue una API key gratuita en pexels.com/api y ejecuta `PEXELS_API_KEY=tu_clave python herramientas/descargar_fotos.py` (en PowerShell: `$env:PEXELS_API_KEY="tu_clave"; python herramientas/descargar_fotos.py`). Descarga fotos con los nombres exactos y guarda los créditos en `assets/images/CREDITOS.md`. Revisa que cada foto encaje; usa `--posicion 2` para pedir otra opción. Este script no pudo probarse en el entorno de creación.
   - **Manual:** guarda tu foto con el mismo nombre y extensión en la misma carpeta (ver la guía). No se toca código.
4. **Textos legales** (`privacidad.html`, `terminos.html`): son una base; revísalos con asesoría legal.
5. **Fuentes:** se cargan desde Google Fonts (Bricolage Grotesque y Figtree). Para usarlas sin conexión descárgalas a `assets/fonts/` y cambia el `<link>` por `@font-face`.
6. **Open Graph:** para que las vistas previas al compartir funcionen, cambia las rutas `og:image` por URLs absolutas cuando publiques el dominio.

## Precios
Todos en RD$ y son estimaciones razonadas (horas de trabajo, complejidad, equipos y mercado local), **no datos de mercado verificados**. Valídalos con tus costos reales antes de publicar. Para ajustarlos, edita el precio en la página de cada servicio dentro de `pages/`.

## Notas
- No se incluyen clientes, testimonios, teléfonos, correos ni equipo inventados. Los proyectos del portafolio están marcados como **conceptuales**.
- Respeta `prefers-reduced-motion`. Todos los botones y enlaces tienen destino real.
