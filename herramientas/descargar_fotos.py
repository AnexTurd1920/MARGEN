#!/usr/bin/env python3
"""
Descarga fotografías reales de Pexels y las guarda con los nombres exactos que usa el sitio.
SIN dependencias externas (solo biblioteca estándar de Python 3).

1) Crea una cuenta gratis en https://www.pexels.com/api/ y copia tu API key.
2) Ejecuta desde la carpeta del proyecto:
     Windows (PowerShell):  $env:PEXELS_API_KEY="tu_clave"; python herramientas/descargar_fotos.py
     Mac / Linux:           PEXELS_API_KEY=tu_clave python herramientas/descargar_fotos.py

Opciones:
  --todas     también reemplaza las fotos que ya sean reales (por defecto solo reemplaza marcadores, que pesan poco)
  --posicion N  usa el N-ésimo resultado de cada búsqueda (1 por defecto), útil para variar si no te gusta una foto

Las búsquedas están en herramientas/imagenes.json (campo "query"): puedes editarlas.
Los créditos (fotógrafo y enlace) se guardan en assets/images/CREDITOS.md.
NOTA: este script no se pudo probar en el entorno donde se creó el proyecto (sin internet). Si algo falla, usa la guía manual.
"""
import json, os, sys, time, urllib.request, urllib.parse

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KEY = os.environ.get("PEXELS_API_KEY")
if not KEY: sys.exit("Falta PEXELS_API_KEY. Lee las instrucciones al inicio de este archivo.")
todas = "--todas" in sys.argv
pos = int(sys.argv[sys.argv.index("--posicion") + 1]) if "--posicion" in sys.argv else 1
UMBRAL = 60 * 1024  # los marcadores pesan menos de 60 KB

def get(url, headers=None):
    req = urllib.request.Request(url, headers=headers or {"User-Agent": "margen-site"})
    with urllib.request.urlopen(req, timeout=30) as r: return r.read()

man = json.load(open(os.path.join(RAIZ, "herramientas", "imagenes.json"), encoding="utf-8"))
creditos, hechas = [], 0
for it in man:
    dest = os.path.join(RAIZ, "assets", "images", it["path"])
    if os.path.exists(dest) and os.path.getsize(dest) > UMBRAL and not todas: continue
    q = urllib.parse.urlencode({"query": it["query"], "orientation": it["orientation"], "per_page": max(pos, 3), "size": "large"})
    try:
        res = json.loads(get("https://api.pexels.com/v1/search?" + q, {"Authorization": KEY, "User-Agent": "margen-site"}))
        fotos = res.get("photos", [])
        if not fotos: print("sin resultados:", it["path"]); continue
        f = fotos[min(pos, len(fotos)) - 1]
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        open(dest, "wb").write(get(f["src"].get("large2x") or f["src"]["large"]))
        creditos.append(f"- `{it['path']}`: foto de {f['photographer']} en Pexels — {f['url']}")
        hechas += 1; print("ok", it["path"]); time.sleep(.4)
    except Exception as e:
        print("error", it["path"], e)
if creditos:
    open(os.path.join(RAIZ, "assets", "images", "CREDITOS.md"), "a", encoding="utf-8").write("\n".join(creditos) + "\n")
print(f"Listo: {hechas} fotos descargadas.")
