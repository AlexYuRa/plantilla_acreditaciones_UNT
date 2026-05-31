import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import Lineas from './Lineas';
import Proyectos from './Proyectos';
import Publicaciones from './Publicaciones';
import Convenios from './convenios';
import { FlaskConical } from 'lucide-react';

export default function InvestigacionIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <PageHero
          title="Investigación"
          subtitle="Nuestros aportes al conocimiento pedagógico y científico de la educación."
          icon={FlaskConical}
          breadcrumbs={[{ label: 'Investigación' }]}
        />

        <section id="lineas" className="scroll-mt-24">
          <Lineas />
        </section>

        <section id="proyectos" className="scroll-mt-24">
          <Proyectos />
        </section>

        <section id="publicaciones" className="scroll-mt-24">
          <Publicaciones />
        </section>

        <section id="convenios" className="scroll-mt-24">
          <Convenios />
        </section>
      </div>
    </PageWrapper>
  );
}