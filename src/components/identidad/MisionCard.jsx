import React from 'react';
import { motion } from 'framer-motion';

/**
 * MisionCard — Tarjeta premium para Misión / Visión.
 * Diseño: fondo azul oscuro institucional, ícono con glow naranja,
 * barra lateral de acento, tipografía en blanco.
 */
export default function MisionCard({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <div className="h-full relative bg-[#002D62] rounded-2xl overflow-hidden p-8 flex flex-col shadow-xl">
        {/* Patrón de fondo sutil */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`dots-mc-${title}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dots-mc-${title})`} />
        </svg>

        {/* Acento lateral */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F58220] via-[#F58220]/60 to-transparent rounded-l-2xl" />

        {/* Ícono */}
        {icon && (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
            style={{
              background: 'rgba(245,130,32,0.15)',
              border: '1px solid rgba(245,130,32,0.3)',
              boxShadow: '0 0 20px rgba(245,130,32,0.12)',
            }}
          >
            {icon}
          </div>
        )}

        {/* Línea naranja */}
        <div className="w-8 h-0.5 bg-[#F58220] rounded-full mb-4" />

        {/* Título */}
        <h3 className="text-xl md:text-2xl font-display font-black text-white mb-4 leading-tight">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-white/70 font-body text-sm md:text-base leading-relaxed flex-1">
          {description}
        </p>

        {/* Círculo decorativo */}
        <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-[#F58220]/8 pointer-events-none" />
      </div>
    </motion.div>
  );
}
