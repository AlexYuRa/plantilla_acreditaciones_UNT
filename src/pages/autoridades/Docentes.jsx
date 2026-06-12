import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import DocenteCard from '../../components/personas/DocenteCard';
import { docentes } from '../../constants/docentes';

export default function Docentes() {
  return (
    <div className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Plana **Docente**"
          subtitle="Profesores, investigadores y especialistas comprometidos con tu formación de calidad."
          center
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-12 max-w-7xl mx-auto">
          {docentes.map((docente, idx) => (
            <DocenteCard key={idx} docente={docente} />
          ))}
        </div>
      </div>
    </div>
  );
}