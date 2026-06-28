import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';

/**
 * Página agrupada "Comités". El navbar muestra los 5 comités por separado; todos
 * llevan aquí, a su ancla correspondiente.
 */
const COMITES = [
  { id: 'calidad', titulo: 'Comité de **Calidad**', descripcion: 'Autoevaluación y acreditación de la calidad del programa.' },
  { id: 'coteccu', titulo: 'Comité de **Currículo**' },
  { id: 'consejeria', titulo: 'Consejería y **tutoría**' },
  { id: 'investigacion', titulo: 'Comité de **Investigación**' },
  { id: 'comision', titulo: 'Comisión' },
];

export default function Comites() {
  return (
    <>
      {COMITES.map((comite, idx) => (
        <AnchoredSection key={comite.id} id={comite.id}>
          <EnConstruccion
            titulo={comite.titulo}
            descripcion={comite.descripcion}
            bg={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
          />
        </AnchoredSection>
      ))}
    </>
  );
}
