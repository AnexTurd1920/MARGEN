# Guía para reemplazar las fotografías

Cada foto del sitio es una etiqueta `<img>` con una ruta local. Para cambiar una foto: **guarda tu imagen con el mismo nombre y la misma extensión (`.jpg`) en la misma carpeta**. No hay que tocar HTML, CSS ni JavaScript.

- Recomendación general: JPG, calidad 75–85, máximo ~400 KB por foto. Las fotos usan `object-fit: cover`, así que se recortan sin deformarse si la proporción cambia un poco.
- Si necesitas otro punto de recorte, cambia `--pos` en el CSS o `object-position` en la etiqueta (por ejemplo `object-position: 50% 20%`).
- Si un archivo falta, el sitio muestra `assets/images/placeholder.svg` en lugar de un hueco roto.
- Los archivos actuales son **marcadores** de color con el nombre del archivo escrito encima. Ver `README.md` para descargar fotos reales con el script de `herramientas/`.

Total de fotografías: **226**.

| Archivo | Ubicación | Página(s) donde aparece | Tamaño recomendado | Fotografía recomendada |
|---|---|---|---|---|
| `categoria-audiovisual.jpg` | `assets/images/audiovisual/` | servicios.html | 960×1200 px (4:5 vertical) | Portada de categoría: Producción audiovisual |
| `contenido-video-redes-01.jpg` | `assets/images/audiovisual/` | pages/videos-promocionales.html, pages/videos-publicitarios.html, pages/videos-corporativos.html, pages/contenido-video-redes.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `contenido-video-redes-02.jpg` | `assets/images/audiovisual/` | pages/contenido-video-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Producción de contenido para redes sociales |
| `contenido-video-redes-03.jpg` | `assets/images/audiovisual/` | pages/contenido-video-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Producción de contenido para redes sociales |
| `contenido-video-redes-04.jpg` | `assets/images/audiovisual/` | pages/contenido-video-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Producción de contenido para redes sociales |
| `edicion-video-01.jpg` | `assets/images/audiovisual/` | pages/contenido-video-redes.html, pages/videos-eventos.html, pages/reels-tiktok.html, pages/edicion-video.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `edicion-video-02.jpg` | `assets/images/audiovisual/` | pages/edicion-video.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Edición de video |
| `edicion-video-03.jpg` | `assets/images/audiovisual/` | pages/edicion-video.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Edición de video |
| `edicion-video-04.jpg` | `assets/images/audiovisual/` | pages/edicion-video.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Edición de video |
| `motion-graphics-01.jpg` | `assets/images/audiovisual/` | pages/reels-tiktok.html, pages/edicion-video.html, pages/postproduccion-audiovisual.html, pages/motion-graphics.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `motion-graphics-02.jpg` | `assets/images/audiovisual/` | pages/motion-graphics.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Motion graphics y animaciones gráficas |
| `motion-graphics-03.jpg` | `assets/images/audiovisual/` | pages/motion-graphics.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Motion graphics y animaciones gráficas |
| `motion-graphics-04.jpg` | `assets/images/audiovisual/` | pages/motion-graphics.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Motion graphics y animaciones gráficas |
| `postproduccion-audiovisual-01.jpg` | `assets/images/audiovisual/` | pages/videos-eventos.html, pages/reels-tiktok.html, pages/edicion-video.html, pages/postproduccion-audiovisual.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `postproduccion-audiovisual-02.jpg` | `assets/images/audiovisual/` | pages/postproduccion-audiovisual.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Postproducción audiovisual |
| `postproduccion-audiovisual-03.jpg` | `assets/images/audiovisual/` | pages/postproduccion-audiovisual.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Postproducción audiovisual |
| `postproduccion-audiovisual-04.jpg` | `assets/images/audiovisual/` | pages/postproduccion-audiovisual.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Postproducción audiovisual |
| `reels-tiktok-01.jpg` | `assets/images/audiovisual/` | index.html, pages/videos-corporativos.html, pages/contenido-video-redes.html, pages/videos-eventos.html, pages/reels-tiktok.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Reels y TikToks |
| `reels-tiktok-02.jpg` | `assets/images/audiovisual/` | pages/reels-tiktok.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Reels y TikToks |
| `reels-tiktok-03.jpg` | `assets/images/audiovisual/` | pages/reels-tiktok.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Reels y TikToks |
| `reels-tiktok-04.jpg` | `assets/images/audiovisual/` | pages/reels-tiktok.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Reels y TikToks |
| `videos-corporativos-01.jpg` | `assets/images/audiovisual/` | pages/videos-promocionales.html, pages/videos-publicitarios.html, pages/videos-corporativos.html, pages/videos-institucionales.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `videos-corporativos-02.jpg` | `assets/images/audiovisual/` | pages/videos-corporativos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos corporativos |
| `videos-corporativos-03.jpg` | `assets/images/audiovisual/` | pages/videos-corporativos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos corporativos |
| `videos-corporativos-04.jpg` | `assets/images/audiovisual/` | pages/videos-corporativos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos corporativos |
| `videos-eventos-01.jpg` | `assets/images/audiovisual/` | pages/videos-publicitarios.html, pages/videos-corporativos.html, pages/contenido-video-redes.html, pages/videos-eventos.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `videos-eventos-02.jpg` | `assets/images/audiovisual/` | pages/videos-eventos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos de eventos |
| `videos-eventos-03.jpg` | `assets/images/audiovisual/` | pages/videos-eventos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos de eventos |
| `videos-eventos-04.jpg` | `assets/images/audiovisual/` | pages/videos-eventos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos de eventos |
| `videos-institucionales-01.jpg` | `assets/images/audiovisual/` | pages/edicion-video.html, pages/postproduccion-audiovisual.html, pages/motion-graphics.html, pages/videos-institucionales.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `videos-institucionales-02.jpg` | `assets/images/audiovisual/` | pages/videos-institucionales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos institucionales |
| `videos-institucionales-03.jpg` | `assets/images/audiovisual/` | pages/videos-institucionales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos institucionales |
| `videos-institucionales-04.jpg` | `assets/images/audiovisual/` | pages/videos-institucionales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos institucionales |
| `videos-promocionales-01.jpg` | `assets/images/audiovisual/` | index.html, pages/videos-promocionales.html, pages/postproduccion-audiovisual.html, pages/motion-graphics.html, pages/videos-institucionales.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Grabación de videos promocionales |
| `videos-promocionales-02.jpg` | `assets/images/audiovisual/` | pages/videos-promocionales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Grabación de videos promocionales |
| `videos-promocionales-03.jpg` | `assets/images/audiovisual/` | pages/videos-promocionales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Grabación de videos promocionales |
| `videos-promocionales-04.jpg` | `assets/images/audiovisual/` | pages/videos-promocionales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Grabación de videos promocionales |
| `videos-publicitarios-01.jpg` | `assets/images/audiovisual/` | pages/videos-promocionales.html, pages/videos-publicitarios.html, pages/motion-graphics.html, pages/videos-institucionales.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `videos-publicitarios-02.jpg` | `assets/images/audiovisual/` | pages/videos-publicitarios.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos publicitarios |
| `videos-publicitarios-03.jpg` | `assets/images/audiovisual/` | pages/videos-publicitarios.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos publicitarios |
| `videos-publicitarios-04.jpg` | `assets/images/audiovisual/` | pages/videos-publicitarios.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Videos publicitarios |
| `diseno-logotipos-01.jpg` | `assets/images/branding/` | index.html, pages/diseno-logotipos.html, pages/diseno-menus.html, pages/diseno-presentaciones.html, pages/diseno-publicitario.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Diseño de logotipos |
| `diseno-logotipos-02.jpg` | `assets/images/branding/` | pages/diseno-logotipos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de logotipos |
| `diseno-logotipos-03.jpg` | `assets/images/branding/` | pages/diseno-logotipos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de logotipos |
| `diseno-logotipos-04.jpg` | `assets/images/branding/` | pages/diseno-logotipos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de logotipos |
| `identidad-visual-01.jpg` | `assets/images/branding/` | pages/diseno-logotipos.html, pages/identidad-visual.html, pages/diseno-presentaciones.html, pages/diseno-publicitario.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `identidad-visual-02.jpg` | `assets/images/branding/` | pages/identidad-visual.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Identidad visual corporativa |
| `identidad-visual-03.jpg` | `assets/images/branding/` | pages/identidad-visual.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Identidad visual corporativa |
| `identidad-visual-04.jpg` | `assets/images/branding/` | pages/identidad-visual.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Identidad visual corporativa |
| `manual-identidad-01.jpg` | `assets/images/branding/` | pages/diseno-logotipos.html, pages/identidad-visual.html, pages/manual-identidad.html, pages/diseno-publicitario.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `manual-identidad-02.jpg` | `assets/images/branding/` | pages/manual-identidad.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Manual de identidad de marca |
| `manual-identidad-03.jpg` | `assets/images/branding/` | pages/manual-identidad.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Manual de identidad de marca |
| `manual-identidad-04.jpg` | `assets/images/branding/` | pages/manual-identidad.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Manual de identidad de marca |
| `brochures-catalogos-01.jpg` | `assets/images/diseno-grafico/` | pages/manual-identidad.html, pages/papeleria-corporativa.html, pages/flyers-afiches.html, pages/brochures-catalogos.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `brochures-catalogos-02.jpg` | `assets/images/diseno-grafico/` | pages/brochures-catalogos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de brochures y catálogos |
| `brochures-catalogos-03.jpg` | `assets/images/diseno-grafico/` | pages/brochures-catalogos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de brochures y catálogos |
| `brochures-catalogos-04.jpg` | `assets/images/diseno-grafico/` | pages/brochures-catalogos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de brochures y catálogos |
| `categoria-branding-grafico.jpg` | `assets/images/diseno-grafico/` | servicios.html | 960×1200 px (4:5 vertical) | Portada de categoría: Diseño gráfico y branding |
| `categoria-creativos-adicionales.jpg` | `assets/images/diseno-grafico/` | servicios.html | 960×1200 px (4:5 vertical) | Portada de categoría: Servicios creativos adicionales |
| `diseno-certificados-01.jpg` | `assets/images/diseno-grafico/` | pages/invitaciones-digitales.html, pages/diseno-curriculums.html, pages/menus-digitales.html, pages/diseno-certificados.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `diseno-certificados-02.jpg` | `assets/images/diseno-grafico/` | pages/diseno-certificados.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de certificados |
| `diseno-certificados-03.jpg` | `assets/images/diseno-grafico/` | pages/diseno-certificados.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de certificados |
| `diseno-certificados-04.jpg` | `assets/images/diseno-grafico/` | pages/diseno-certificados.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de certificados |
| `diseno-curriculums-01.jpg` | `assets/images/diseno-grafico/` | pages/invitaciones-digitales.html, pages/diseno-curriculums.html, pages/material-promocional.html, pages/fotomontajes-composiciones.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `diseno-curriculums-02.jpg` | `assets/images/diseno-grafico/` | pages/diseno-curriculums.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de currículums |
| `diseno-curriculums-03.jpg` | `assets/images/diseno-grafico/` | pages/diseno-curriculums.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de currículums |
| `diseno-curriculums-04.jpg` | `assets/images/diseno-grafico/` | pages/diseno-curriculums.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de currículums |
| `diseno-menus-01.jpg` | `assets/images/diseno-grafico/` | pages/flyers-afiches.html, pages/brochures-catalogos.html, pages/packaging-etiquetas.html, pages/diseno-menus.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `diseno-menus-02.jpg` | `assets/images/diseno-grafico/` | pages/diseno-menus.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de menús |
| `diseno-menus-03.jpg` | `assets/images/diseno-grafico/` | pages/diseno-menus.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de menús |
| `diseno-menus-04.jpg` | `assets/images/diseno-grafico/` | pages/diseno-menus.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de menús |
| `diseno-presentaciones-01.jpg` | `assets/images/diseno-grafico/` | pages/brochures-catalogos.html, pages/packaging-etiquetas.html, pages/diseno-menus.html, pages/diseno-presentaciones.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `diseno-presentaciones-02.jpg` | `assets/images/diseno-grafico/` | pages/diseno-presentaciones.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de presentaciones |
| `diseno-presentaciones-03.jpg` | `assets/images/diseno-grafico/` | pages/diseno-presentaciones.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de presentaciones |
| `diseno-presentaciones-04.jpg` | `assets/images/diseno-grafico/` | pages/diseno-presentaciones.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de presentaciones |
| `diseno-publicitario-01.jpg` | `assets/images/diseno-grafico/` | pages/packaging-etiquetas.html, pages/diseno-menus.html, pages/diseno-presentaciones.html, pages/diseno-publicitario.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `diseno-publicitario-02.jpg` | `assets/images/diseno-grafico/` | pages/diseno-publicitario.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño publicitario |
| `diseno-publicitario-03.jpg` | `assets/images/diseno-grafico/` | pages/diseno-publicitario.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño publicitario |
| `diseno-publicitario-04.jpg` | `assets/images/diseno-grafico/` | pages/diseno-publicitario.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño publicitario |
| `flyers-afiches-01.jpg` | `assets/images/diseno-grafico/` | pages/identidad-visual.html, pages/manual-identidad.html, pages/papeleria-corporativa.html, pages/flyers-afiches.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `flyers-afiches-02.jpg` | `assets/images/diseno-grafico/` | pages/flyers-afiches.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de flyers y afiches |
| `flyers-afiches-03.jpg` | `assets/images/diseno-grafico/` | pages/flyers-afiches.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de flyers y afiches |
| `flyers-afiches-04.jpg` | `assets/images/diseno-grafico/` | pages/flyers-afiches.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de flyers y afiches |
| `fotomontajes-composiciones-01.jpg` | `assets/images/diseno-grafico/` | pages/menus-digitales.html, pages/diseno-certificados.html, pages/material-promocional.html, pages/fotomontajes-composiciones.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `fotomontajes-composiciones-02.jpg` | `assets/images/diseno-grafico/` | pages/fotomontajes-composiciones.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotomontajes y composiciones digitales |
| `fotomontajes-composiciones-03.jpg` | `assets/images/diseno-grafico/` | pages/fotomontajes-composiciones.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotomontajes y composiciones digitales |
| `fotomontajes-composiciones-04.jpg` | `assets/images/diseno-grafico/` | pages/fotomontajes-composiciones.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotomontajes y composiciones digitales |
| `invitaciones-digitales-01.jpg` | `assets/images/diseno-grafico/` | index.html, pages/invitaciones-digitales.html, pages/diseno-certificados.html, pages/material-promocional.html, pages/fotomontajes-composiciones.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Invitaciones digitales |
| `invitaciones-digitales-02.jpg` | `assets/images/diseno-grafico/` | pages/invitaciones-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Invitaciones digitales |
| `invitaciones-digitales-03.jpg` | `assets/images/diseno-grafico/` | pages/invitaciones-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Invitaciones digitales |
| `invitaciones-digitales-04.jpg` | `assets/images/diseno-grafico/` | pages/invitaciones-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Invitaciones digitales |
| `material-promocional-01.jpg` | `assets/images/diseno-grafico/` | pages/diseno-curriculums.html, pages/menus-digitales.html, pages/diseno-certificados.html, pages/material-promocional.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `material-promocional-02.jpg` | `assets/images/diseno-grafico/` | pages/material-promocional.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de material promocional |
| `material-promocional-03.jpg` | `assets/images/diseno-grafico/` | pages/material-promocional.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de material promocional |
| `material-promocional-04.jpg` | `assets/images/diseno-grafico/` | pages/material-promocional.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de material promocional |
| `menus-digitales-01.jpg` | `assets/images/diseno-grafico/` | pages/invitaciones-digitales.html, pages/diseno-curriculums.html, pages/menus-digitales.html, pages/fotomontajes-composiciones.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `menus-digitales-02.jpg` | `assets/images/diseno-grafico/` | pages/menus-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de menús digitales |
| `menus-digitales-03.jpg` | `assets/images/diseno-grafico/` | pages/menus-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de menús digitales |
| `menus-digitales-04.jpg` | `assets/images/diseno-grafico/` | pages/menus-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de menús digitales |
| `packaging-etiquetas-01.jpg` | `assets/images/diseno-grafico/` | pages/papeleria-corporativa.html, pages/flyers-afiches.html, pages/brochures-catalogos.html, pages/packaging-etiquetas.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `packaging-etiquetas-02.jpg` | `assets/images/diseno-grafico/` | pages/packaging-etiquetas.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de packaging y etiquetas |
| `packaging-etiquetas-03.jpg` | `assets/images/diseno-grafico/` | pages/packaging-etiquetas.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de packaging y etiquetas |
| `packaging-etiquetas-04.jpg` | `assets/images/diseno-grafico/` | pages/packaging-etiquetas.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de packaging y etiquetas |
| `papeleria-corporativa-01.jpg` | `assets/images/diseno-grafico/` | pages/diseno-logotipos.html, pages/identidad-visual.html, pages/manual-identidad.html, pages/papeleria-corporativa.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `papeleria-corporativa-02.jpg` | `assets/images/diseno-grafico/` | pages/papeleria-corporativa.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de papelería corporativa |
| `papeleria-corporativa-03.jpg` | `assets/images/diseno-grafico/` | pages/papeleria-corporativa.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de papelería corporativa |
| `papeleria-corporativa-04.jpg` | `assets/images/diseno-grafico/` | pages/papeleria-corporativa.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de papelería corporativa |
| `categoria-diseno-web.jpg` | `assets/images/diseno-web/` | servicios.html | 960×1200 px (4:5 vertical) | Portada de categoría: Diseño web |
| `diseno-paginas-web-01.jpg` | `assets/images/diseno-web/` | index.html, pages/diseno-paginas-web.html, pages/diseno-ui-ux.html, pages/rediseno-web.html, pages/mantenimiento-web.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Diseño de páginas web |
| `diseno-paginas-web-02.jpg` | `assets/images/diseno-web/` | pages/diseno-paginas-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de páginas web |
| `diseno-paginas-web-03.jpg` | `assets/images/diseno-web/` | pages/diseno-paginas-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de páginas web |
| `diseno-paginas-web-04.jpg` | `assets/images/diseno-web/` | pages/diseno-paginas-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de páginas web |
| `diseno-ui-ux-01.jpg` | `assets/images/diseno-web/` | pages/paginas-informativas.html, pages/landing-pages.html, pages/tiendas-online.html, pages/diseno-ui-ux.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `diseno-ui-ux-02.jpg` | `assets/images/diseno-web/` | pages/diseno-ui-ux.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño UI/UX |
| `diseno-ui-ux-03.jpg` | `assets/images/diseno-web/` | pages/diseno-ui-ux.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño UI/UX |
| `diseno-ui-ux-04.jpg` | `assets/images/diseno-web/` | pages/diseno-ui-ux.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño UI/UX |
| `landing-pages-01.jpg` | `assets/images/diseno-web/` | pages/diseno-paginas-web.html, pages/paginas-informativas.html, pages/landing-pages.html, pages/mantenimiento-web.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `landing-pages-02.jpg` | `assets/images/diseno-web/` | pages/landing-pages.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Landing pages |
| `landing-pages-03.jpg` | `assets/images/diseno-web/` | pages/landing-pages.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Landing pages |
| `landing-pages-04.jpg` | `assets/images/diseno-web/` | pages/landing-pages.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Landing pages |
| `mantenimiento-web-01.jpg` | `assets/images/diseno-web/` | pages/tiendas-online.html, pages/diseno-ui-ux.html, pages/rediseno-web.html, pages/mantenimiento-web.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `mantenimiento-web-02.jpg` | `assets/images/diseno-web/` | pages/mantenimiento-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Mantenimiento web |
| `mantenimiento-web-03.jpg` | `assets/images/diseno-web/` | pages/mantenimiento-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Mantenimiento web |
| `mantenimiento-web-04.jpg` | `assets/images/diseno-web/` | pages/mantenimiento-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Mantenimiento web |
| `paginas-informativas-01.jpg` | `assets/images/diseno-web/` | pages/diseno-paginas-web.html, pages/paginas-informativas.html, pages/rediseno-web.html, pages/mantenimiento-web.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `paginas-informativas-02.jpg` | `assets/images/diseno-web/` | pages/paginas-informativas.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Desarrollo de páginas web informativas |
| `paginas-informativas-03.jpg` | `assets/images/diseno-web/` | pages/paginas-informativas.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Desarrollo de páginas web informativas |
| `paginas-informativas-04.jpg` | `assets/images/diseno-web/` | pages/paginas-informativas.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Desarrollo de páginas web informativas |
| `rediseno-web-01.jpg` | `assets/images/diseno-web/` | pages/landing-pages.html, pages/tiendas-online.html, pages/diseno-ui-ux.html, pages/rediseno-web.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `rediseno-web-02.jpg` | `assets/images/diseno-web/` | pages/rediseno-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Rediseño de sitios web |
| `rediseno-web-03.jpg` | `assets/images/diseno-web/` | pages/rediseno-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Rediseño de sitios web |
| `rediseno-web-04.jpg` | `assets/images/diseno-web/` | pages/rediseno-web.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Rediseño de sitios web |
| `tiendas-online-01.jpg` | `assets/images/diseno-web/` | pages/diseno-paginas-web.html, pages/paginas-informativas.html, pages/landing-pages.html, pages/tiendas-online.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `tiendas-online-02.jpg` | `assets/images/diseno-web/` | pages/tiendas-online.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de tiendas online |
| `tiendas-online-03.jpg` | `assets/images/diseno-web/` | pages/tiendas-online.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de tiendas online |
| `tiendas-online-04.jpg` | `assets/images/diseno-web/` | pages/tiendas-online.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de tiendas online |
| `categoria-fotografia.jpg` | `assets/images/fotografia/` | servicios.html | 960×1200 px (4:5 vertical) | Portada de categoría: Fotografía |
| `edicion-retoque-01.jpg` | `assets/images/fotografia/` | pages/fotografia-eventos.html, pages/fotografia-redes.html, pages/fotografia-gastronomica.html, pages/edicion-retoque.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `edicion-retoque-02.jpg` | `assets/images/fotografia/` | pages/edicion-retoque.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Edición y retoque fotográfico |
| `edicion-retoque-03.jpg` | `assets/images/fotografia/` | pages/edicion-retoque.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Edición y retoque fotográfico |
| `edicion-retoque-04.jpg` | `assets/images/fotografia/` | pages/edicion-retoque.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Edición y retoque fotográfico |
| `fotografia-comercial-01.jpg` | `assets/images/fotografia/` | pages/fotografia-productos.html, pages/fotografia-comercial.html, pages/fotografia-gastronomica.html, pages/edicion-retoque.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `fotografia-comercial-02.jpg` | `assets/images/fotografia/` | pages/fotografia-comercial.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía comercial |
| `fotografia-comercial-03.jpg` | `assets/images/fotografia/` | pages/fotografia-comercial.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía comercial |
| `fotografia-comercial-04.jpg` | `assets/images/fotografia/` | pages/fotografia-comercial.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía comercial |
| `fotografia-corporativa-01.jpg` | `assets/images/fotografia/` | pages/fotografia-productos.html, pages/fotografia-comercial.html, pages/fotografia-retratos.html, pages/fotografia-corporativa.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `fotografia-corporativa-02.jpg` | `assets/images/fotografia/` | pages/fotografia-corporativa.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía corporativa |
| `fotografia-corporativa-03.jpg` | `assets/images/fotografia/` | pages/fotografia-corporativa.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía corporativa |
| `fotografia-corporativa-04.jpg` | `assets/images/fotografia/` | pages/fotografia-corporativa.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía corporativa |
| `fotografia-eventos-01.jpg` | `assets/images/fotografia/` | pages/fotografia-comercial.html, pages/fotografia-retratos.html, pages/fotografia-corporativa.html, pages/fotografia-eventos.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `fotografia-eventos-02.jpg` | `assets/images/fotografia/` | pages/fotografia-eventos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de eventos |
| `fotografia-eventos-03.jpg` | `assets/images/fotografia/` | pages/fotografia-eventos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de eventos |
| `fotografia-eventos-04.jpg` | `assets/images/fotografia/` | pages/fotografia-eventos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de eventos |
| `fotografia-gastronomica-01.jpg` | `assets/images/fotografia/` | pages/fotografia-corporativa.html, pages/fotografia-eventos.html, pages/fotografia-redes.html, pages/fotografia-gastronomica.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `fotografia-gastronomica-02.jpg` | `assets/images/fotografia/` | pages/fotografia-gastronomica.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía gastronómica |
| `fotografia-gastronomica-03.jpg` | `assets/images/fotografia/` | pages/fotografia-gastronomica.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía gastronómica |
| `fotografia-gastronomica-04.jpg` | `assets/images/fotografia/` | pages/fotografia-gastronomica.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía gastronómica |
| `fotografia-productos-01.jpg` | `assets/images/fotografia/` | index.html, pages/fotografia-productos.html, pages/fotografia-redes.html, pages/fotografia-gastronomica.html, pages/edicion-retoque.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Fotografía de productos |
| `fotografia-productos-02.jpg` | `assets/images/fotografia/` | pages/fotografia-productos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de productos |
| `fotografia-productos-03.jpg` | `assets/images/fotografia/` | pages/fotografia-productos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de productos |
| `fotografia-productos-04.jpg` | `assets/images/fotografia/` | pages/fotografia-productos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de productos |
| `fotografia-redes-01.jpg` | `assets/images/fotografia/` | pages/fotografia-retratos.html, pages/fotografia-corporativa.html, pages/fotografia-eventos.html, pages/fotografia-redes.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `fotografia-redes-02.jpg` | `assets/images/fotografia/` | pages/fotografia-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía para redes sociales |
| `fotografia-redes-03.jpg` | `assets/images/fotografia/` | pages/fotografia-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía para redes sociales |
| `fotografia-redes-04.jpg` | `assets/images/fotografia/` | pages/fotografia-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía para redes sociales |
| `fotografia-retratos-01.jpg` | `assets/images/fotografia/` | index.html, pages/fotografia-productos.html, pages/fotografia-comercial.html, pages/fotografia-retratos.html, pages/edicion-retoque.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Fotografía de retratos |
| `fotografia-retratos-02.jpg` | `assets/images/fotografia/` | pages/fotografia-retratos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de retratos |
| `fotografia-retratos-03.jpg` | `assets/images/fotografia/` | pages/fotografia-retratos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de retratos |
| `fotografia-retratos-04.jpg` | `assets/images/fotografia/` | pages/fotografia-retratos.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Fotografía de retratos |
| `agencia-01.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Espacio o equipo creativo trabajando |
| `agencia-02.jpg` | `assets/images/inicio/` | index.html | 1000×1000 px (1:1 cuadrada) | Detalle de proceso creativo (bocetos, color, impresión) |
| `hero-02.jpg` | `assets/images/inicio/` | index.html | 1200×800 px (3:2 horizontal) | Producción audiovisual o fotografía comercial en acción |
| `hero-03.jpg` | `assets/images/inicio/` | index.html | 1000×1000 px (1:1 cuadrada) | Retrato creativo o detalle de diseño gráfico |
| `hero-principal.jpg` | `assets/images/inicio/` | index.html | 1200×800 px (3:2 horizontal) | Fotografía creativa de estudio (mesa de trabajo, diseño, cámara) |
| `rueda-01.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Identidad visual de una marca |
| `rueda-02.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Fotografía comercial de producto |
| `rueda-03.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Retrato profesional |
| `rueda-04.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Producción de video profesional |
| `rueda-05.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Contenido para redes sociales |
| `rueda-06.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Diseño web en pantalla |
| `rueda-07.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Empaque y etiquetas |
| `rueda-08.jpg` | `assets/images/inicio/` | index.html | 960×1200 px (4:5 vertical) | Fotografía de comida |
| `anuncios-digitales-01.jpg` | `assets/images/marketing/` | pages/calendarios-contenido.html, pages/estrategias-contenido.html, pages/campanas-publicitarias.html, pages/anuncios-digitales.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `anuncios-digitales-02.jpg` | `assets/images/marketing/` | pages/anuncios-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Creación de anuncios digitales |
| `anuncios-digitales-03.jpg` | `assets/images/marketing/` | pages/anuncios-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Creación de anuncios digitales |
| `anuncios-digitales-04.jpg` | `assets/images/marketing/` | pages/anuncios-digitales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Creación de anuncios digitales |
| `branding-redes-sociales-01.jpg` | `assets/images/marketing/` | pages/estrategias-contenido.html, pages/campanas-publicitarias.html, pages/anuncios-digitales.html, pages/branding-redes-sociales.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `branding-redes-sociales-02.jpg` | `assets/images/marketing/` | pages/branding-redes-sociales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Branding para redes sociales |
| `branding-redes-sociales-03.jpg` | `assets/images/marketing/` | pages/branding-redes-sociales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Branding para redes sociales |
| `branding-redes-sociales-04.jpg` | `assets/images/marketing/` | pages/branding-redes-sociales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Branding para redes sociales |
| `calendarios-contenido-01.jpg` | `assets/images/marketing/` | pages/diseno-contenido-redes.html, pages/gestion-redes-sociales.html, pages/calendarios-contenido.html, pages/branding-redes-sociales.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `calendarios-contenido-02.jpg` | `assets/images/marketing/` | pages/calendarios-contenido.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Creación de calendarios de contenido |
| `calendarios-contenido-03.jpg` | `assets/images/marketing/` | pages/calendarios-contenido.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Creación de calendarios de contenido |
| `calendarios-contenido-04.jpg` | `assets/images/marketing/` | pages/calendarios-contenido.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Creación de calendarios de contenido |
| `campanas-publicitarias-01.jpg` | `assets/images/marketing/` | pages/gestion-redes-sociales.html, pages/calendarios-contenido.html, pages/estrategias-contenido.html, pages/campanas-publicitarias.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `campanas-publicitarias-02.jpg` | `assets/images/marketing/` | pages/campanas-publicitarias.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de campañas publicitarias |
| `campanas-publicitarias-03.jpg` | `assets/images/marketing/` | pages/campanas-publicitarias.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de campañas publicitarias |
| `campanas-publicitarias-04.jpg` | `assets/images/marketing/` | pages/campanas-publicitarias.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de campañas publicitarias |
| `categoria-marketing-digital.jpg` | `assets/images/marketing/` | servicios.html | 960×1200 px (4:5 vertical) | Portada de categoría: Marketing digital y redes sociales |
| `diseno-contenido-redes-01.jpg` | `assets/images/marketing/` | pages/diseno-contenido-redes.html, pages/campanas-publicitarias.html, pages/anuncios-digitales.html, pages/branding-redes-sociales.html | 1200×800 px (3:2 horizontal) | Hero del servicio: Diseño de contenido para redes sociales |
| `diseno-contenido-redes-02.jpg` | `assets/images/marketing/` | pages/diseno-contenido-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de contenido para redes sociales |
| `diseno-contenido-redes-03.jpg` | `assets/images/marketing/` | pages/diseno-contenido-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de contenido para redes sociales |
| `diseno-contenido-redes-04.jpg` | `assets/images/marketing/` | pages/diseno-contenido-redes.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Diseño de contenido para redes sociales |
| `estrategias-contenido-01.jpg` | `assets/images/marketing/` | pages/diseno-contenido-redes.html, pages/gestion-redes-sociales.html, pages/calendarios-contenido.html, pages/estrategias-contenido.html | 1200×800 px (3:2 horizontal) | Servicio relacionado |
| `estrategias-contenido-02.jpg` | `assets/images/marketing/` | pages/estrategias-contenido.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Estrategias de contenido |
| `estrategias-contenido-03.jpg` | `assets/images/marketing/` | pages/estrategias-contenido.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Estrategias de contenido |
| `estrategias-contenido-04.jpg` | `assets/images/marketing/` | pages/estrategias-contenido.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Estrategias de contenido |
| `gestion-redes-sociales-01.jpg` | `assets/images/marketing/` | index.html, pages/diseno-contenido-redes.html, pages/gestion-redes-sociales.html, pages/anuncios-digitales.html, pages/branding-redes-sociales.html | 1200×800 px (3:2 horizontal) | Fotografía representativa de: Gestión de redes sociales |
| `gestion-redes-sociales-02.jpg` | `assets/images/marketing/` | pages/gestion-redes-sociales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Gestión de redes sociales |
| `gestion-redes-sociales-03.jpg` | `assets/images/marketing/` | pages/gestion-redes-sociales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Gestión de redes sociales |
| `gestion-redes-sociales-04.jpg` | `assets/images/marketing/` | pages/gestion-redes-sociales.html | 1200×800 px (3:2 horizontal) | Ejemplo visual de Gestión de redes sociales |
| `nosotros-01.jpg` | `assets/images/nosotros/` | nosotros.html | 960×1200 px (4:5 vertical) | Equipo creativo en el estudio |
| `nosotros-02.jpg` | `assets/images/nosotros/` | nosotros.html | 1000×1000 px (1:1 cuadrada) | Detalle de materiales de diseño |
| `nosotros-03.jpg` | `assets/images/nosotros/` | nosotros.html | 1200×800 px (3:2 horizontal) | Espacio del estudio o proceso de trabajo |
| `portfolio-proyecto-01.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto destacado: Branding |
| `portfolio-proyecto-02.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto destacado: Diseño gráfico |
| `portfolio-proyecto-03.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto destacado: Fotografía |
| `portfolio-proyecto-04.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto destacado: Audiovisual |
| `portfolio-proyecto-05.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto destacado: Redes sociales |
| `portfolio-proyecto-06.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto del portafolio |
| `portfolio-proyecto-07.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto del portafolio |
| `portfolio-proyecto-08.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto del portafolio |
| `portfolio-proyecto-09.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto del portafolio |
| `portfolio-proyecto-10.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto del portafolio |
| `portfolio-proyecto-11.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto del portafolio |
| `portfolio-proyecto-12.jpg` | `assets/images/portafolio/` | index.html, portafolio.html | 1200×800 px (3:2 horizontal) | Proyecto del portafolio |
