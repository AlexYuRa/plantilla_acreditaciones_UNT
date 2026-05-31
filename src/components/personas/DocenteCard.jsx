import React from 'react';
import { motion } from 'framer-motion';
import { Mail, User } from 'lucide-react';

/**
 * DocenteCard — Tarjeta premium para cada docente.
 * Avatar: foto cuadrada, silueta de placeholder si no hay foto.
 * Diseño limpio, sin bordes genéricos, hover elevado con sombra naranja suave.
 */
export default function DocenteCard({ docente }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group h-full"
    >
      <div className="h-full bg-white rounded-2xl border border-gray-100 hover:border-[#F58220]/30 hover:shadow-[0_8px_32px_rgba(245,130,32,0.12)] transition-all duration-300 flex flex-col overflow-hidden">
        {/* Franja superior con avatar */}
        <div className="relative bg-gradient-to-br from-[#002D62] to-[#001a3d] pt-8 pb-12 flex justify-center items-end">
          {/* Patrón sutil */}
          <div className="absolute inset-0 opacity-[0.06]"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
          />
          {/* Avatar Cuadrado / Foto */}
          <div className="relative w-24 h-28 bg-white overflow-hidden border-4 border-white/20 shadow-xl rounded-sm">
            {docente.foto ? (
              <img src={docente.foto} alt={docente.nombre} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-end justify-center">
                <User className="w-20 h-20 text-gray-300 -mb-2" />
              </div>
            )}
          </div>
          {/* Acento naranja bajo el avatar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F58220]/60 to-transparent" />
        </div>

        {/* Contenido textual */}
        <div className="flex flex-col flex-1 p-5 text-center">
          <p className="text-[#F58220] text-[10px] font-black uppercase tracking-[0.2em] mb-1.5">
            {docente.grado}
          </p>
          <h4 className="font-display font-bold text-[#002D62] text-sm leading-tight mb-1 group-hover:text-[#002D62]">
            {docente.nombre}
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
            {docente.especialidad}
          </p>
          {/* Correo */}
          {docente.correo && (
            <a
              href={`mailto:${docente.correo}`}
              className="inline-flex items-center justify-center gap-1.5 text-[10px] font-bold text-[#002D62]/60 hover:text-[#F58220] transition-colors py-2 border-t border-gray-100"
            >
              <Mail className="w-3 h-3" />
              {docente.correo}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}