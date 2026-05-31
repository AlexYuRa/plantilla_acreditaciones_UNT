import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Megaphone, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Avisos institucionales — editar aquí para actualizar
const AVISOS = [
  {
    id: 1,
    texto: '📋 Matrícula 2025-II: Del 10 al 20 de junio. Revisa los requisitos en el Portal del Estudiante.',
    link: 'https://sga.unitru.edu.pe',
    externo: true,
  },
  {
    id: 2,
    texto: '🎓 Convocatoria: Proyecto FONDECYT 2025 — Inscripciones abiertas hasta el 30 de junio.',
    link: '/investigacion#proyectos',
    externo: false,
  },
  {
    id: 3,
    texto: '📢 Acreditación SINEACE: Resultados de la visita de evaluación externa disponibles.',
    link: '/nosotros#historia',
    externo: false,
  },
];

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!visible) return null;

  const aviso = AVISOS[currentIdx];

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % AVISOS.length);

  return (
    <AnimatePresence>
      <motion.div
        key="banner"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#F58220] text-white overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-3 py-2.5">
            {/* Ícono + Texto */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <Megaphone className="w-4 h-4 shrink-0" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdx}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 min-w-0"
                >
                  <span className="text-sm font-medium truncate">
                    {aviso.texto}
                  </span>
                  {aviso.link && (
                    aviso.externo ? (
                      <a
                        href={aviso.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-0.5 text-white font-bold text-sm underline underline-offset-2 shrink-0 hover:opacity-80 transition-opacity"
                      >
                        Ver más <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        to={aviso.link}
                        className="hidden sm:inline-flex items-center gap-0.5 text-white font-bold text-sm underline underline-offset-2 shrink-0 hover:opacity-80 transition-opacity"
                      >
                        Ver más <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Indicadores de página */}
              <div className="hidden sm:flex items-center gap-1">
                {AVISOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIdx ? 'bg-white w-3' : 'bg-white/50'}`}
                    aria-label={`Aviso ${i + 1}`}
                  />
                ))}
              </div>

              {AVISOS.length > 1 && (
                <button
                  onClick={handleNext}
                  className="text-white/80 hover:text-white transition-colors p-0.5"
                  aria-label="Siguiente aviso"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={() => setVisible(false)}
                className="text-white/80 hover:text-white transition-colors p-0.5 ml-1"
                aria-label="Cerrar aviso"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
