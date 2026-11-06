# Elotes Los Gonzalez: sitio web

Next.js 15 (App Router) + TypeScript, exportado como sitio estático.

## Correr localmente
```bash
npm install
npm run dev        # http://localhost:3000
```
Requiere Node 18.18+ y conexión a internet (las fuentes se descargan de Google Fonts al compilar).

## Publicar
```bash
npm run build      # genera la carpeta /out (sitio estático)
```
Sube `/out` a Netlify, Cloudflare Pages o Vercel (en Vercel basta conectar el repo).

## Dónde editar
| Qué | Archivo |
|---|---|
| WhatsApp, redes, ciudad, dominio | `src/data/site.ts` |
| Menú | `src/data/menu.ts` |
| Toppings básicos y premium | `src/data/toppings.ts` |
| Tipos de evento y condiciones | `src/data/events.ts` |
| Preguntas frecuentes | `src/data/faq.ts` |
| Testimonios (con foto) | `src/data/testimonials.ts` |
| Fotos de galería y portada | `src/data/gallery.ts` |
| Colores y tema de temporada | `src/app/globals.css` (arriba) |

## Agregar fotos
1. Copia las imágenes a `public/images/` (ideal: .webp o .jpg, máx. ~200 KB c/u).
2. En el archivo de datos, agrega `image: "/images/mi-foto.jpg"` al elemento. Escribe un `alt` descriptivo.
3. Para la vista previa al compartir, agrega `public/og.jpg` (1200x630) y descomenta `images` en `src/app/layout.tsx`.

## Pendientes
- Confirmar precios (hoy no se muestran), horarios, anticipación, mínimo de invitados y anticipo.
- Cambiar `url` en `src/data/site.ts` por el dominio real.
- Reemplazar textos de ejemplo (testimonios, preguntas frecuentes).
