---
name: Escuela de Educación Primaria — UNT
description: Sistema visual institucional para el sitio de la Escuela Profesional de Educación Primaria (Universidad Nacional de Trujillo).
colors:
  institutional-blue: "#12377B"
  deep-navy: "#000C4A"
  gold: "#E6AC09"
  gold-deep: "#C49308"
  gold-bright: "#FDF107"
  electric-blue: "#092EFF"
  ink: "#1B1711"
  surface: "#FFFFFF"
  surface-muted: "#F9FAFB"
  border-subtle: "#F3F4F6"
  success: "#2D6A4F"
typography:
  display:
    fontFamily: "\"Roboto Slab\", Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "\"Roboto Slab\", Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.1
  title:
    fontFamily: "\"Roboto Slab\", Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    letterSpacing: "0.18em"
rounded:
  md: "6px"
  lg: "8px"
  xl: "12px"
  2xl: "16px"
  3xl: "24px"
  full: "9999px"
spacing:
  card: "24px"
  section-y: "64px"
  section-y-lg: "80px"
  gutter: "32px"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "14px 32px"
  button-gold-hover:
    backgroundColor: "{colors.gold-deep}"
  button-primary:
    backgroundColor: "{colors.institutional-blue}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "10px 24px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "24px"
  nav-item-active:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.surface}"
---

# Design System: Escuela de Educación Primaria — UNT

## 1. Overview

**Creative North Star: "La Cátedra Acreditada"**

El sistema viste a la Escuela con la autoridad de una cátedra universitaria respaldada por la acreditación. El azul institucional profundo es el aula y el papel oficial; el dorado es el sello —escaso, deliberado— que marca la calidad. La densidad es media-baja: aire generoso, jerarquía clara, nada de relleno. Cada bloque debe sentirse como evidencia ordenada, no como decoración.

La voz es formal pero no fría: la solidez y trayectoria de la UNT conviven con la calidez de una carrera cuya esencia es formar maestros de primaria. La ejecución es moderna y ordenada (limpia, jerarquizada, vigente), nunca anticuada ni burocrática.

Este sistema **rechaza explícitamente**: el look de SaaS/startup (degradados de moda, números gigantes con glow, copy buzzword), la estética de portal gubernamental anticuado (tablas crudas, gris sin jerarquía, densidad de trámite), lo infantil/caricaturesco (aunque forme docentes de primaria, el público es institucional), y la plantilla corporativa fría sin identidad propia.

**Key Characteristics:**
- Azul institucional como base; dorado como sello escaso.
- Jerarquía al servicio de la lectura: lo importante se encuentra en segundos.
- Evidencia visible: mostrar calidad con orden, no con adjetivos.
- Calidez con seriedad; identidad UNT específica, cero genérico.

## 2. Colors

Paleta de dos voces institucionales —azul y dorado— ancladas en superficies neutras, con dos colores vivos reservados exclusivamente a degradados.

### Primary
- **Azul Institucional** (#12377B): el color de marca. Navbar, banners de sección (`PageHero`), footer, títulos, estados activos, íconos y bordes de acento. Es la voz por defecto del sistema.
- **Azul Profundo** (#000C4A): superficies oscuras de impacto —franja de cifras, tarjetas con imagen, cierre del degradado del hero, fondos de paneles—. El azul más serio, casi tinta.

### Secondary
- **Dorado** (#E6AC09): el sello de calidad. Subrayado de pestañas, botones de acción, íconos de acento, resaltado de una palabra en los títulos, pestaña "INGRESO". Su escasez es el punto.
- **Dorado Profundo** (#C49308): solo para el estado hover de los elementos dorados.

### Neutral
- **Tinta** (#1B1711): color de texto base (negro cálido). Reemplaza al negro puro y a los grises fríos por defecto.
- **Superficie** (#FFFFFF): fondo principal de secciones y tarjetas.
- **Superficie Tenue** (#F9FAFB): fondo alterno de secciones para crear ritmo.
- **Borde Sutil** (#F3F4F6): bordes y divisores de tarjetas.

### Named Rules
**La Regla del Sello.** El dorado es un sello, no un fondo. Se usa en proporción mínima (acentos, subrayados, un botón, una palabra). Si el dorado cubre más del ~10% de una pantalla, deja de ser sello y se vuelve ruido.

**La Regla Solo-Degradado.** El **Amarillo Vivo** (#FDF107) y el **Azul Eléctrico** (#092EFF) existen únicamente dentro de degradados. Prohibido usarlos como relleno sólido, texto o borde. Para todo lo demás están el azul institucional y el dorado.

## 3. Typography

**Display Font:** Roboto Slab (con fallback Georgia, serif)
**Body Font:** Arial / Helvetica (sans-serif del sistema)

**Character:** El contraste serif + sans es deliberado: el slab serif da peso institucional y voz de cátedra a los títulos; el sans neutro mantiene el cuerpo legible y sobrio. Una sola familia display en peso black (900) carga toda la presencia.

### Hierarchy
- **Display** (900, clamp(3rem, 8vw, 6rem), line-height 1): solo el H1 del hero ("Educación / Primaria"). Tope duro en 6rem; nunca grita más alto.
- **Headline** (900, clamp(1.875rem, 4vw, 3rem), line-height 1.1): títulos de sección (`SectionTitle`), con una palabra resaltada en dorado vía `**palabra**`.
- **Title** (700, 1.125rem): encabezados de tarjeta, nombres, subtítulos de bloque.
- **Body** (400, 1rem, line-height 1.6): párrafos y descripciones, en tinta o gris-600 sobre claro. Máximo 65–75 caracteres por línea en bloques de lectura.
- **Label** (800, 0.75rem, tracking 0.18em, MAYÚSCULAS): badges y etiquetas cortas (≤4 palabras). Nunca frases completas.

### Named Rules
**La Regla del Eyebrow Único.** Las etiquetas mayúsculas con tracking ancho NO van encima de cada sección como scaffolding. Un kicker deliberado es voz; un eyebrow en cada sección es gramática de IA. Reservar para badges puntuales.

## 4. Elevation

Sistema mayormente plano con elevación funcional. La profundidad se construye con **capas tonales** (alternancia blanco / gris-50 / azul profundo) más que con sombras pesadas. Las sombras existen como respuesta de estado y para despegar tarjetas del fondo, nunca como decoración ambiente exagerada.

### Shadow Vocabulary
- **Reposo de tarjeta** (`box-shadow: 0 1px 2px rgba(0,0,0,0.05)`, `shadow-sm`): tarjetas y botones primarios en reposo.
- **Elevación media** (`shadow-md` / `shadow-lg`): tarjetas destacadas, paneles, contenedores con imagen.
- **Elevación alta** (`shadow-xl` / `shadow-2xl`): hero secundario, tarjetas de "Ambientes", el panel lateral de admisión.

### Named Rules
**La Regla Anti-Ghost-Card.** Prohibido combinar `border 1px` + `box-shadow` con blur ≥16px como decoración en el mismo elemento. Una cosa u otra: borde sólido limpio, o sombra definida; nunca ambos como adorno.

## 5. Components

### Buttons
- **Shape:** esquinas suavemente redondeadas — `rounded-xl` (12px) en CTAs del hero, `rounded-md` (6px) en el botón base del sistema.
- **Gold (acción principal):** fondo dorado (#E6AC09), texto blanco, padding 14px 32px, peso black. Hover: dorado profundo (#C49308) y, en el hero, glow dorado sutil al pasar el mouse.
- **Primary (azul):** fondo azul institucional (#12377B), texto blanco, `rounded-md`. Variante base del componente `Button`.
- **Ghost / Outline:** sobre fondos oscuros, `bg-white/10` con borde `white/30` y `backdrop-blur` sutil; sobre claro, borde azul que se invierte al hover.

### Chips / Badges
- **Style:** píldora (`rounded-full`) compacta. Badges de categoría en relleno sólido institucional (azul `#12377B` texto blanco, dorado `#E6AC09` texto tinta, navy `#000C4A` texto blanco) — nunca pasteles genéricos.
- **Label badge:** mayúsculas, tracking 0.18em, dorado sobre dorado/10 — uso escaso.

### Cards / Containers
- **Corner Style:** `rounded-xl` (12px) por defecto; `rounded-2xl`/`rounded-3xl` en tarjetas con imagen grande. Tope: 24px. Nunca 32px+.
- **Background:** blanco; o azul profundo (#000C4A) con imagen + degradado para tarjetas de impacto.
- **Shadow Strategy:** ver Elevation — reposo suave, elevación al hover.
- **Border:** `border-subtle` (#F3F4F6) de 1px en tarjetas claras.
- **Internal Padding:** 24px (`p-6`).

### Navigation
- **Style:** navbar blanco sticky con altura medida en vivo; barra de menú azul institucional con ítem activo en dorado sólido. Dropdowns blancos por sección.
- **Tabs de sección (`SectionTabs`):** sticky bajo el header, indicador dorado deslizante (layout animation), activo en azul. Foco de teclado visible (ring dorado).
- **Mobile:** menú colapsable animado; gutter unificado `px-8`.

### Panel lateral de Admisión (signature)
Drawer deslizante con pestaña vertical "INGRESO". Panel azul institucional (texto blanco, alto contraste), pestaña dorada (texto azul) que asoma en el borde izquierdo. Posicionado dinámicamente bajo el header. Es el CTA de admisión persistente del sitio.

## 6. Do's and Don'ts

### Do:
- **Do** usar el azul institucional (#12377B) como voz por defecto y el dorado (#E6AC09) como sello escaso (≤10%).
- **Do** mantener el texto base en tinta (#1B1711) o gris-600; contraste mínimo 4.5:1 (3:1 en texto grande) — meta WCAG AA.
- **Do** alternar fondos (blanco / gris-50 / azul profundo) para el ritmo, con espaciado de sección consistente (`py-16 md:py-20`) y gutter `px-8`.
- **Do** respetar `prefers-reduced-motion` en toda animación (subrayados, reveals, transiciones).
- **Do** reservar #FDF107 y #092EFF exclusivamente para degradados.

### Don't:
- **Don't** caer en el look SaaS/startup: nada de números gigantes con glow estilo hero-metric, degradados de moda ni copy buzzword.
- **Don't** parecer portal gubernamental anticuado: nada de tablas crudas, gris sin jerarquía ni densidad de trámite.
- **Don't** usar colores infantiles/caricaturescos ni ilustraciones tipo doodle; el público es institucional.
- **Don't** quedar como plantilla corporativa fría: cada pantalla debe sentirse específicamente UNT — Educación Primaria.
- **Don't** poner eyebrows mayúsculos encima de cada sección, ni bordes laterales de color (>1px) como acento, ni texto con `background-clip` en degradado.
- **Don't** redondear tarjetas a 32px+ ni combinar borde 1px con sombra ancha como decoración.
