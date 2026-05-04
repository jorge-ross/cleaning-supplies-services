# SSL — Soluciones de Limpieza 🫧

Empresa proveedora de productos de limpieza para hogares e industrias. Prototipo construido con React + Vite.

---

## ✨ Características

- **Header fijo** con logo, navegación y scroll suave a cada sección
- **Hero** animado con burbujas de productos y estadísticas clave
- **Nosotros** con historia, valores y números de la empresa
- **Catálogo** en grid de 8 categorías con link al catálogo completo
- **Contacto** con canales directos (email, WhatsApp, teléfono, ubicación) y horario de atención
- **Chatbot Sumi** — asistente virtual con forma de jabón animado, saludo inicial y respuestas automáticas
- **Footer** minimalista con nombre de empresa y año
- Diseño 100% **responsivo** (mobile, tablet, desktop)

---

## 🛠 Stack

| Tecnología | Versión |
|---|---|
| React | 18.x |
| Vite | 5.x |
| CSS Modules | — |

Sin librerías de UI externas. Todo el diseño está construido con CSS personalizado y variables de diseño propias.

---

## 📁 Estructura del proyecto

```
ssl-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx / Header.css
│   │   ├── Hero.jsx / Hero.css
│   │   ├── Nosotros.jsx / Nosotros.css
│   │   ├── Catalogo.jsx / Catalogo.css
│   │   ├── Contacto.jsx / Contacto.css
│   │   └── Chatbot.jsx / Chatbot.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 🚀 Instalación y uso local

**Requisitos:** Node.js 18+ y npm

```bash
# 1. Clona o descomprime el proyecto
cd ssl-landing

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173)

---

## 📦 Build para producción

```bash
npm run build
```

Los archivos optimizados quedan en la carpeta `dist/`.

Para previsualizar el build localmente:

```bash
npm run preview
```

---

## 🤖 Chatbot Sumi

Sumi es el asistente virtual de SSL. Responde preguntas frecuentes sobre:

- Productos disponibles y categorías
- Información de envíos
- Cotizaciones al mayoreo

Para ampliar las respuestas, edita el objeto `BOT_RESPONSES` y la función `getResponse` en `src/components/Chatbot.jsx`.

---

## 🎨 Personalización

Las variables de color y tipografía globales están definidas en `src/index.css` bajo `:root`. Desde ahí puedes ajustar la paleta completa del sitio:

```css
:root {
  --blue-deep: #0a2540;
  --aqua:      #06b6d4;
  --blue-bright: #2563eb;
  /* ... */
}
```

---

## 📄 Licencia

Proyecto privado de SSL — Soluciones de Limpieza. Todos los derechos reservados.
