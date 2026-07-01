import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';

/**
 * Página agrupada "Objetivos". El navbar muestra "Objetivos educativos" y
 * "Objetivos académicos" por separado; ambos llevan aquí (#educativos / #academicos).
 */
export default function Objetivos() {
  return (
    <>
      <AnchoredSection id="academicos">
        <EnConstruccion titulo="Objetivos **Académicos**" />
      </AnchoredSection>
      <AnchoredSection id="educativos">
        <EnConstruccion titulo="Objetivos **Educacionales**" bg="bg-gray-50" />
      </AnchoredSection>
    </>
  );
}
