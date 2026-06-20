/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Paleta Institucional ──
           Uso general → 'primary' (#12377B) y 'gold' (#E6AC09).
           Superficies oscuras → 'blue-deep' (#000C4A) · Texto base → 'ink' (#1B1711).
           'gold-bright' (#FDF107) y 'blue-electric' (#092EFF): SOLO para degradados,
           nunca como relleno/texto/borde sólido. */
        'blue-deep': '#000C4A',
        'blue-electric': '#092EFF',
        gold: '#E6AC09',
        'gold-deep': '#C49308',
        'gold-bright': '#FDF107',
        ink: '#1B1711',
        'pucp-blue-dark': '#12377B',
        'pucp-blue-light': '#12377B',
        'pucp-gray-dark': '#333333',
        'pucp-gray-light': '#F8FAFC',
        /* Mapeo de compatibilidad */
        primary: '#12377B',
        secondary: '#12377B',
        accent: '#F8FAFC',
        dark: '#333333',
        light: '#FFFFFF',
        success: '#2D6A4F',
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