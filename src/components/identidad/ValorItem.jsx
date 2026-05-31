import React from 'react';
import { motion } from 'framer-motion';

export default function ValorItem({ valor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <div className="h-full bg-white rounded-2xl border border-gray-100 hover:border-[#F58220]/40 hover:shadow-lg transition-all duration-300 p-6 flex gap-4 items-start">
        {/* Índice numérico */}
        <div className="shrink-0 w-10 h-10 rounded-xl bg-[#002D62] flex items-center justify-center group-hover:bg-[#F58220] transition-colors duration-300">
          <span className="text-white font-display font-black text-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div>
          <h4 className="font-display font-bold text-[#002D62] text-base mb-1 group-hover:text-[#F58220] transition-colors">
            {valor.nombre}
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            {valor.descripcion}
          </p>
        </div>
      </div>
    </motion.div>
  );
}