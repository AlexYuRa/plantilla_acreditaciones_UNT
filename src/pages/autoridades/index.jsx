import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import Direccion from './Direccion';
import Docentes from './Docentes';
import Organigrama from './Organigrama';
import { Users } from 'lucide-react';

export default function AutoridadesIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <PageHero
          title="Autoridades y Docentes"
          subtitle="Conoce a los profesionales encargados de liderar la educación y la enseñanza."
          icon={Users}
          breadcrumbs={[{ label: 'Autoridades' }]}
        />

        <section id="direccion" className="scroll-mt-24">
          <Direccion />
        </section>

        <section id="docentes" className="scroll-mt-24">
          <Docentes />
        </section>

        <section id="organigrama" className="scroll-mt-24">
          <Organigrama />
        </section>
      </div>
    </PageWrapper>
  );
}