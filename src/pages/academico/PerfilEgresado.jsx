import React from 'react';
import { SectionTitle } from '../../components/ui/SectionTitle';
import CompetenciaItem from '../../components/academico/CompetenciaItem';
import { perfilEgresado, gradoAcademico, tituloProfesional } from '../../constants/academico';

export default function PerfilEgresado() {
  return (
    <div className="bg-light py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto">
          <SectionTitle
            title="Perfil del Egresado"
            center
            subtitle="Al término de la carrera, el estudiante de Educación Primaria de la Universidad Nacional de Trujillo (UNT) tendrá las siguientes cualidades:"
          />
          <div className="mt-8 grid gap-4">
            {perfilEgresado.map((comp, idx) => (
              <CompetenciaItem key={idx} competencia={comp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}