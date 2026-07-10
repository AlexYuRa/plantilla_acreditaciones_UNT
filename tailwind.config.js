/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Paleta Institucional (UNT) — actualizada ──
           Identidad: azul 'primary' (#12377B) + 'gold' (#E6AD09).
           Superficies oscuras → 'primary' (la paleta nueva no tiene navy).
           Texto base → 'ink' (#1E1A17). Hover del dorado → 'gold-deep'. */
        primary: '#12377B',       // Azul institucional (color base)
        gold: '#E6AD09',          // Dorado (acento) — solo sobre fondos oscuros (primary): ≥4.5:1
        'gold-deep': '#C49308',   // Dorado oscuro (hover del dorado, derivado)
        'gold-ink': '#8B6804',    // Dorado para texto sobre fondos claros (blanco/gray-50): 5.1:1, AA
        'gold-bright': '#FDF107', // Amarillo vivo (solo degradados)
        ink: '#1E1A17',           // Casi negro cálido (texto base)
        graphite: '#373435',      // Gris oscuro institucional
        white: '#FFFFFF',         // Blanco puro

        /* Semánticos */
        success: '#0C8F3D',       // Verde institucional (éxito)
        danger: '#D82610',        // Rojo institucional (error / alerta)
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