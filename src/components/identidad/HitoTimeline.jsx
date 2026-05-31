import React from 'react';
import { motion } from 'framer-motion';

/**
 * HitoTimeline — Línea de tiempo vertical elegante, alineada a la izquierda.
 * Diseño: línea azul vertical con punto naranja, año en naranja, descripción en gris.
 */
export default function HitoTimeline({ hitos }) {
  return (
    <div className="relative pl-8 md:pl-12">
      {/* Línea vertical */}
      <div className="absolute left-3 md:left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#F58220] via-[#002D62]/40 to-transparent" />

      <div className="space-y-8">
        {hitos?.map((hito, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className="relative flex gap-6 group"
          >
            {/* Punto en la línea */}
            <div className="absolute -left-[26px] md:-left-[34px] top-1 w-4 h-4 rounded-full border-2 border-[#F58220] bg-white group-hover:bg-[#F58220] transition-colors duration-300 z-10 shrink-0" />

            {/* Contenido */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 hover:border-[#F58220]/30 hover:shadow-md transition-all duration-300 p-5 flex gap-4 items-start">
              {/* Año destacado */}
              <div className="shrink-0 text-right">
                <span className="text-2xl font-display font-black text-[#F58220] leading-none">
                  {hito.año}
                </span>
              </div>
              <div className="w-px self-stretch bg-gray-100 shrink-0" />
              <p className="text-gray-600 font-body text-sm leading-relaxed flex-1 pt-1">
                {hito.descripcion}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
