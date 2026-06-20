import React, { useState, useEffect } from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import { Tabs } from '../../components/ui/Tabs';
import { Accordion } from '../../components/ui/Accordion';
import { Badge } from '../../components/ui/Badge';
import { planEstudios } from '../../constants/academico';
import { Download } from 'lucide-react';

interface Curso {
  codigo: string;
  nombre: string;
  creditos: number | string;
  tipo: string;
}

export default function PlanEstudios() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile(); // Check on initial load
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderCursos = (cursos: Curso[]) => (
    <div className="overflow-x-auto rounded-lg border border-gray-100">
      <table className="w-full text-left border-collapse bg-white">
        <thead>
          <tr className="bg-gray-50 text-gray-700">
            <th className="p-4 border-b font-semibold text-sm w-24">Código</th>
            <th className="p-4 border-b font-semibold text-sm">Asignatura</th>
            <th className="p-4 border-b font-semibold text-sm text-center w-24">Créditos</th>
            <th className="p-4 border-b font-semibold text-sm w-32">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((curso, idx) => (
            <tr key={idx} className="hover:bg-gray-50/50 border-b border-gray-50 transition-colors">
              <td className="p-4 text-sm font-mono text-gray-500">{curso.codigo}</td>
              <td className="p-4 text-sm font-medium text-gray-900">{curso.nombre}</td>
              <td className="p-4 text-sm text-gray-600 text-center">{curso.creditos}</td>
              <td className="p-4 text-sm">
                <Badge variant={curso.tipo === 'Obligatorio' ? 'primary' : 'gray'}>
                  {curso.tipo}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle 
          title="Plan de Estudios" 
          center 
          subtitle="Conoce nuestra malla curricular actualizada, estructurada por ciclos académicos." 
        />

        <div className="flex justify-center mt-6">
          <a 
            href={`${import.meta.env.BASE_URL}Plan_de_Estudios_2025.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-blue-deep font-bold rounded-lg hover:bg-gold-deep transition-colors shadow-md"
          >
            <Download className="w-5 h-5" />
            Descargar Malla Curricular (PDF)
          </a>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12">
          {isMobile ? (
            <div className="space-y-4">
              {planEstudios.map((ciclo, idx) => (
                <Accordion key={idx} title={ciclo.ciclo} defaultOpen={idx === 0}>
                  {renderCursos(ciclo.cursos)}
                </Accordion>
              ))}
            </div>
          ) : (
            <Tabs 
              activeTab={activeTab} 
              onChange={setActiveTab}
              tabs={planEstudios.map(ciclo => ({ label: ciclo.ciclo, content: renderCursos(ciclo.cursos) }))} 
            />
          )}
        </div>
      </div>
    </div>
  );
}