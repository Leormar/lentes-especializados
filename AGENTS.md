<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Reglas del proyecto

## No usar iconos

Este sitio no se ilustra con iconos. Cuando un elemento tiene que *mostrar* algo
—una tarjeta de servicio, el resultado del selector, la portada de un artículo—
va una **fotografía real** del consultorio, del equipo o del caso clínico
(`public/servicios/`, `public/equipo/`, `public/banners/`). Nunca un SVG
decorativo, nunca un dibujo, nunca un emoji, nunca imagen tipo cómic.

Las únicas excepciones son los iconos **funcionales**, los que actúan como
señal de interfaz y no como contenido:

- Logos de terceros donde la marca es el dato: Google, Instagram, WhatsApp.
- Afordancias de navegación: hamburguesa, cerrar, flechas, estrellas de reseña.
- Datos de contacto en listas compactas: ubicación, reloj, teléfono.

Si hace falta ilustrar un concepto y no existe la foto, se deja el espacio en
blanco o se resuelve con tipografía y color —**no** se rellena con un icono— y
se avisa a Leo de qué foto falta.
