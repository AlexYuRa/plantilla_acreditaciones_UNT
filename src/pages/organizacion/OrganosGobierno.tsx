import React from 'react';
import AnchoredSection from '../../components/layout/AnchoredSection';
import EnConstruccion from '../../components/layout/EnConstruccion';

/**
 * Página agrupada "Órganos de Gobierno". El navbar muestra cada órgano por
 * separado; todos llevan aquí, a su ancla correspondiente. Reúne las instancias
 * de gobierno de la facultad/escuela (Consejo de Facultad, consejeros y
 * representantes estudiantiles como el Centro Federado). Denominaciones oficiales;
 * pueden variar por facultad.
 */
const ORGANOS = [
  {
    id: 'consejo-facultad',
    titulo: 'Consejo de **Facultad**',
    descripcion: 'Máximo órgano de gobierno de la facultad: aprueba políticas académicas y administrativas.',
  },
  {
    id: 'consejeros',
    titulo: '**Consejeros**',
    descripcion: 'Docentes que integran el Consejo de Facultad en representación de los departamentos.',
  },
  {
    id: 'representantes',
    titulo: 'Centro **Federado**',
    descripcion: 'Representación estudiantil (Centro Federado) ante los órganos de gobierno.',
  },
];

export default function OrganosGobierno() {
  return (
    <>
      {ORGANOS.map((organo, idx) => (
        <AnchoredSection key={organo.id} id={organo.id}>
          <EnConstruccion
            titulo={organo.titulo}
            descripcion={organo.descripcion}
            bg={idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}
          />
        </AnchoredSection>
      ))}
    </>
  );
}
