import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import PerfilIngresante from './PerfilIngresante';
import PerfilEgresado from './PerfilEgresado';
import PlanEstudios from './PlanEstudios';
import Titulacion from './Titulacion';
import { GraduationCap } from 'lucide-react';

export default function AcademicoIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <PageHero
          title="Área Académica"
          subtitle="Descubre todo lo relacionado con tu formación profesional en Educación Primaria."
          icon={GraduationCap}
          breadcrumbs={[{ label: 'Académico' }]}
        />

        <div className="bg-light py-10 lg:py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <PerfilIngresante />
              <PerfilEgresado />
            </div>
          </div>
        </div>

        <section id="perfil-ingresante" className="scroll-mt-24 hidden" />
        <section id="perfil-egresado" className="scroll-mt-24 hidden" />

        <section id="plan-estudios" className="scroll-mt-24">
          <PlanEstudios />
        </section>

        <section id="titulacion" className="scroll-mt-24">
          <Titulacion />
        </section>
      </div>
    </PageWrapper>
  );
}