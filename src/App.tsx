import React, { useEffect } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import AppRouter from './router/index';
import FloatingSocials from './components/layout/FloatingSocials';
import { seo } from './profile';

export default function App() {
  // SEO del perfil activo: título, idioma y descripción se aplican desde el perfil.
  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = seo.lang;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', seo.description);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait">
        <AppRouter />
      </AnimatePresence>
      <FloatingSocials />
    </MotionConfig>
  );
}