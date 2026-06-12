import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GraduationCap, Award, Info, ChevronRight, ExternalLink, BookOpen, Star } from 'lucide-react';
import useHeaderHeight from '../../hooks/useHeaderHeight';

/**
 * Panel lateral deslizante (slide-out drawer) con pestaña "INGRESO".
 * Oculto fuera de pantalla (-translate-x-full); aparece al hacer hover.
 * Se posiciona justo debajo del header (altura dinámica vía useHeaderHeight),
 * así no se rompe al cerrar el banner de avisos ni por el responsive.
 * Se monta una vez dentro del Router para flotar sobre todas las páginas.
 */
export default function FloatingAdmissions() {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const headerHeight = useHeaderHeight();

  return (
    <div
      style={{ top: headerHeight }}
      className={`fixed left-0 bottom-4 z-[40] flex items-start transition-transform duration-500 ease-in-out ${isHovered ? 'translate-x-0' : '-translate-x-full'} ${!isHome ? 'max-md:hidden' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenido del panel */}
      <div className="w-[300px] md:w-[350px] bg-[#12377B] rounded-br-3xl rounded-tr-3xl text-white p-4 md:p-5 shadow-xl h-full max-h-full flex flex-col relative">
        <div className="flex items-center gap-2 mb-4 shrink-0">
          <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />
          <h3 className="font-display font-black text-xl md:text-3xl">¿Cómo Postular?</h3>
        </div>

        <p className="text-sm md:text-base leading-tight mb-4 text-white/95 shrink-0">
          Descubre las modalidades de ingreso para formar parte de la Escuela de Educación Primaria.
        </p>

        <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
          {/* Modalidad 1: Examen Ordinario */}
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5" />
              <h4 className="font-bold text-base">Examen Ordinario</h4>
            </div>
            <p className="text-[13px] mb-2">
              <strong className="font-bold">Dirigido a:</strong> Egresados de Educación Secundaria.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-[13px]">Vacantes:</span>
              <span className="bg-white/20 text-[12px] px-2 py-0.5 rounded font-medium">Aprox. 20 vacantes</span>
            </div>
            <p className="text-[12px] text-white/80 pt-2 border-t border-white/20 leading-tight">
              Examen general que evalúa Aptitud Académica y Conocimientos.
            </p>
          </div>

          {/* Modalidad 2: Vía CEPUNT */}
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5" />
              <h4 className="font-bold text-base">Vía CEPUNT</h4>
            </div>
            <p className="text-[13px] mb-2">
              <strong className="font-bold">Dirigido a:</strong> Estudiantes del Centro Preuniversitario UNT.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-[13px]">Vacantes:</span>
              <span className="bg-white/20 text-[12px] px-2 py-0.5 rounded font-medium">Aprox. 15 vacantes</span>
            </div>
            <p className="text-[12px] text-white/80 pt-2 border-t border-white/20 leading-tight">
              Ingreso directo por estricto orden de mérito tras sumatoria de exámenes.
            </p>
          </div>

          {/* Modalidad 3: Examen Extraordinario */}
          <div className="bg-white/10 rounded-lg p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5" />
              <h4 className="font-bold text-base">Examen Extraordinario</h4>
            </div>
            <p className="text-[13px] mb-2">
              <strong className="font-bold">Dirigido a:</strong> 1ros y 2dos puestos, deportistas, traslados, etc.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-bold text-[13px]">Vacantes:</span>
              <span className="bg-white/20 text-[12px] px-2 py-0.5 rounded font-medium">Aprox. 5 vacantes</span>
            </div>
            <p className="text-[12px] text-white/80 pt-2 border-t border-white/20 leading-tight">
              Evaluación especial según el reglamento de admisión vigente.
            </p>
          </div>

          {/* Información Útil */}
          <div className="pt-2">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-5 h-5" />
              <h4 className="font-bold text-base">Información Útil</h4>
            </div>
            <ul className="space-y-2 text-[13px]">
              <li className="flex gap-1.5">
                <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong className="font-bold">Requisitos:</strong> DNI original, certificado de estudios y recibo de pago por derecho de admisión.</span>
              </li>
              <li className="flex gap-1.5">
                <ChevronRight className="w-4 h-4 shrink-0 mt-0.5" />
                <span><strong className="font-bold">Fechas:</strong> Los exámenes ordinarios suelen realizarse en los meses de Marzo y Setiembre.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/20 shrink-0">
          <a
            href="https://www.admisionunt.info/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-[#12377B] font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-md text-base"
          >
            Portal de Admisión UNT <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Pestaña visible (INGRESO) */}
      <div
        className="absolute right-0 top-[82px] translate-x-full bg-[#E6AC09] text-[#12377B] py-4 px-2 md:py-6 md:px-3.5 rounded-r-lg md:rounded-r-xl cursor-pointer flex flex-col items-center gap-3 md:gap-4 shadow-[4px_0_15px_rgba(0,0,0,0.15)]"
      >
        <GraduationCap className="w-5 h-5 md:w-7 md:h-7" />
        <span className="[writing-mode:vertical-rl] rotate-180 font-bold tracking-[0.2em] text-[18px] md:text-[26px]">
          INGRESO
        </span>
      </div>
    </div>
  );
}
