import React, { useEffect } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import { siteName } from '@/profile';
import { ClipboardList } from 'lucide-react';

// Nivel 3 opcional: algunas filas de Nivel 2 (p.ej. Gestión Curricular) no se subdividen más.
interface Fila {
  nivel3?: string;
}

interface GrupoNivel2 {
  nivel2: string;
  filas: Fila[];
}

const GRUPOS: GrupoNivel2[] = [
  {
    nivel2: 'M01.01.01 Gestión Curricular',
    filas: [{}],
  },
  {
    nivel2: 'M01.01.02 Gestión del Ingreso',
    filas: [
      { nivel3: 'M01.01.02.01 Admisión' },
      { nivel3: 'M01.01.02.02 Matrícula' },
    ],
  },
  {
    nivel2: 'M01.01.03 Enseñanza Aprendizaje',
    filas: [
      { nivel3: 'M01.01.03.01 Ejecución del Plan Curricular' },
      { nivel3: 'M01.01.03.02 Evaluación del Estudiante' },
      { nivel3: 'M01.01.03.03 Movilidad y Becas' },
      { nivel3: 'M01.01.03.04 Investigación Formativa' },
      { nivel3: 'M01.01.03.05 Seguimiento al Desempeño de los Estudiantes' },
    ],
  },
  {
    nivel2: 'M01.01.04 Resultados de la Formación',
    filas: [
      { nivel3: 'M01.01.04.01 Certificación' },
      { nivel3: 'M01.01.04.02 Graduación' },
      { nivel3: 'M01.01.04.03 Titulación' },
      { nivel3: 'M01.01.04.04 Seguimiento al Egresados' },
    ],
  },
];

const TOTAL_FILAS = GRUPOS.reduce((sum, g) => sum + g.filas.length, 0);

export default function GestionFormacionPregrado() {
  useEffect(() => {
    document.title = `Gestión de la Formación en Pregrado | Admisión | ${siteName}`;
  }, []);

  return (
    <PageWrapper>
      <PageHero
        title="Gestión de la Formación en Pregrado"
        subtitle="M01.01 — Mapa de procesos de la Oficina de Gestión de la Calidad."
        icon={ClipboardList}
        breadcrumbs={[{ label: 'Admisión' }, { label: 'Gestión de la Formación en Pregrado' }]}
      />

      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                M01.01 Gestión de la Formación en Pregrado: niveles 1, 2 y 3 del proceso.
              </caption>
              <thead>
                <tr className="bg-primary text-white">
                  <th scope="col" className="py-3 px-4 text-left font-bold uppercase tracking-wide text-xs w-1/4">Nivel 1</th>
                  <th scope="col" className="py-3 px-4 text-left font-bold uppercase tracking-wide text-xs w-1/4">Nivel 2</th>
                  <th scope="col" className="py-3 px-4 text-left font-bold uppercase tracking-wide text-xs w-1/2">Nivel 3</th>
                </tr>
              </thead>
              <tbody>
                {GRUPOS.map((grupo, gIdx) =>
                  grupo.filas.map((fila, fIdx) => (
                    <tr key={`${grupo.nivel2}-${fIdx}`} className="border-t border-slate-200 odd:bg-slate-50">
                      {gIdx === 0 && fIdx === 0 && (
                        <td
                          rowSpan={TOTAL_FILAS}
                          className="align-middle text-center font-bold text-primary bg-slate-100 border-r border-slate-200 py-3 px-4"
                        >
                          M01.01 Gestión de la Formación en pregrado
                        </td>
                      )}
                      {fIdx === 0 && (
                        <td
                          rowSpan={grupo.filas.length}
                          className="align-middle font-semibold text-slate-800 border-r border-slate-200 py-3 px-4"
                        >
                          {grupo.nivel2}
                        </td>
                      )}
                      <td className="py-3 px-4 text-slate-700">{fila.nivel3 ?? ''}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
