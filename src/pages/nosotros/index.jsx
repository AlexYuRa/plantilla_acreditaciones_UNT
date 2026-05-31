import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHero from '../../components/layout/PageHero';
import MisionVision from './MisionVision';
import ConveniosEscuelas from './ConveniosEscuelas';
import Historia from './Historia';
import { BookHeart } from 'lucide-react';

export default function NosotrosIndex() {
  return (
    <PageWrapper>
      <div className="flex flex-col">
        <PageHero
          title="Sobre Nosotros"
          subtitle="Conoce la identidad, valores e historia de la Escuela de Educación Primaria."
          icon={BookHeart}
          breadcrumbs={[{ label: 'Nosotros' }]}
        />

        <section id="mision-vision" className="scroll-mt-24">
          <MisionVision />
        </section>

        <section id="historia" className="scroll-mt-24">
          <Historia />
        </section>

        <section id="convenios-escuelas" className="scroll-mt-24">
          <ConveniosEscuelas />
        </section>
      </div>
    </PageWrapper>
  );
}