// Contenido del panel lateral de Admisión (FloatingAdmissions).
// Las modalidades se muestran como tarjetas (en el orden de la lista).

export interface ModalidadAdmision {
  titulo: string;
  dirigidoA: string;
  vacantes: string;
  descripcion: string;
}

export interface InfoUtilItem {
  titulo: string;
  detalle: string;
}

export const modalidadesAdmision: ModalidadAdmision[] = [
  {
    titulo: 'Modalidad de ingreso 1',
    dirigidoA: 'A quién está dirigida esta modalidad.',
    vacantes: 'Aprox. 00 vacantes',
    descripcion: 'Descripción breve de la primera modalidad de ingreso.',
  },
  {
    titulo: 'Modalidad de ingreso 2',
    dirigidoA: 'A quién está dirigida esta modalidad.',
    vacantes: 'Aprox. 00 vacantes',
    descripcion: 'Descripción breve de la segunda modalidad de ingreso.',
  },
  {
    titulo: 'Modalidad de ingreso 3',
    dirigidoA: 'A quién está dirigida esta modalidad.',
    vacantes: 'Aprox. 00 vacantes',
    descripcion: 'Descripción breve de la tercera modalidad de ingreso.',
  },
];

export const infoUtilAdmision: InfoUtilItem[] = [
  { titulo: 'Requisitos', detalle: 'Documentos que debe presentar el postulante.' },
  { titulo: 'Fechas', detalle: 'Periodos o meses en que se realizan los exámenes de admisión.' },
];

// Botón inferior: portal oficial de admisión de la universidad.
export const portalAdmision = {
  label: 'Portal de Admisión',
  url: '#',
};
