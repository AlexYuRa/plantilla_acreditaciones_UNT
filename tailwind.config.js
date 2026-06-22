/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Paleta Institucional (UNT · Ingeniería Ambiental) ──
           Identidad: azul 'primary' (#12377B) + 'gold' (#E6AC09).
           Superficies oscuras y hover del azul → 'blue-deep' (#000C4A).
           Texto base → 'ink' (#1B1711). Hover del dorado → 'gold-deep'. */
        primary: '#12377B',       // Azul institucional (color base)
        gold: '#E6AC09',          // Dorado (acento)
        'gold-deep': '#C49308',   // Dorado oscuro (hover)
        'blue-deep': '#000C4A',   // Azul profundo (fondos oscuros / hover)
        ink: '#1B1711',           // Casi negro cálido (texto base)

        /* Solo para degradados, nunca como relleno/texto/borde sólido. */
        'gold-bright': '#FDF107',
        'blue-electric': '#092EFF',

        /* Semántico (los neutros usan la escala nativa de Tailwind:
           white / black / slate-50 / gray-*). */
        success: '#2D6A4F',       // Verde (estados de éxito)
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['"Roboto Slab"', 'Georgia', 'serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}