import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { CheckCircle2, MapPin } from 'lucide-react';

const colegios = [
  {
    nombre: "I.E. San Juan",
    descripcion: "Convenio de prácticas pre-profesionales que permite a nuestros estudiantes aplicar metodologías innovadoras en aulas de educación primaria.",
    tipo: "Prácticas Pre-profesionales",
    distrito: "Trujillo",
  },
  {
    nombre: "I.E. Modelo",
    descripcion: "Alianza estratégica para el desarrollo de proyectos de investigación conjunta y mejora de la calidad educativa local.",
    tipo: "Investigación Conjunta",
    distrito: "Trujillo",
  },
  {
    nombre: "I.E. Santa Rosa",
    descripcion: "Acuerdo de cooperación mutua para la implementación de talleres extracurriculares y apoyo psicopedagógico a estudiantes.",
    tipo: "Cooperación Mutua",
    distrito: "La Esperanza",
  },
];

export default function ConveniosEscuelas() {
  return (
    <div className="bg-white py-16 md:py-20 w-full">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Colegios **Aliados**"
          subtitle="Red de instituciones educativas donde nuestros estudiantes desarrollan sus prácticas pre-profesionales."
          center
          badge="Convenios"
        />

        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {colegios.map((colegio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-[#F58220]/30 hover:shadow-[0_8px_32px_rgba(245,130,32,0.1)] transition-all duration-300 overflow-hidden">
                {/* Cabecera */}
                <div className="bg-[#002D62] px-6 py-6 relative overflow-hidden flex items-center gap-4">
                  <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '14px 14px' }}
                  />
                  
                  {/* Espacio para Imagen / Logo */}
                  <div className="w-16 h-16 bg-white/5 rounded-full border-2 border-white/10 flex-shrink-0 relative overflow-hidden z-10 flex items-center justify-center shadow-inner">
                    {colegio.logo ? (
                      <img src={colegio.logo} alt={`Logo ${colegio.nombre}`} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest text-center leading-tight">Foto<br/>Logo</span>
                    )}
                  </div>

                  <div className="relative z-10 flex-1">
                    <span className="inline-block text-[9px] font-black uppercase tracking-[0.18em] text-[#F58220] bg-[#F58220]/15 border border-[#F58220]/25 px-2 py-0.5 rounded-full mb-1.5">
                      Convenio Activo
                    </span>
                    <h3 className="text-xl font-display font-black text-white leading-tight">
                      {colegio.nombre}
                    </h3>
                  </div>
                </div>

                {/* Cuerpo */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                    {colegio.descripcion}
                  </p>
                  <div className="space-y-2.5 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F58220] shrink-0" />
                      <span className="font-semibold">{colegio.tipo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{colegio.distrito}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
