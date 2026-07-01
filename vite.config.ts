import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// Perfil de escuela activo (build-time). Crear una escuela nueva = añadir
// `profiles/<slug>/` y construir con PROFILE=<slug>. El slug de deploy
// (outDir/base) es independiente del perfil y se mantiene fijo.
const PROFILE = process.env.PROFILE ?? 'escuela';

// Slug del theme de WordPress donde se publica el build (carpeta dist).
// Cámbialo aquí (o vía `THEME_SLUG=<slug> npm run build`) si tu programa se
// publica en otro theme. Es independiente del PROFILE.
const THEME_SLUG = process.env.THEME_SLUG ?? 'educacion-primaria';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const isVercel = process.env.VERCEL === '1';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@profile': fileURLToPath(new URL(`./profiles/${PROFILE}`, import.meta.url)),
      },
    },
    base: isVercel || command === 'serve' ? '/' : `/wp-content/themes/${THEME_SLUG}/dist/`,
    build: {
      outDir: isVercel ? 'dist' : `../wp-content/themes/${THEME_SLUG}/dist`,
      emptyOutDir: true,
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          // Agrupa las dependencias de terceros en chunks separados y cacheables,
          // así no se redescargan cuando cambia el código de la app.
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-icons': ['lucide-react'],
          },
        },
      },
    }
  };
})