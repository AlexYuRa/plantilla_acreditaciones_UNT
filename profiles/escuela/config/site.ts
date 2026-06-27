import type { SiteConfig } from '@/profile-types';

/**
 * Identidad de la escuela. Editar este archivo (y `branding.ts`) cubre la mayor
 * parte de la re-tematización para una escuela nueva.
 */
export const site: SiteConfig = {
  programa: {
    nombre: 'Escuela Profesional de Ingeniería Ambiental',
    nombreCorto: 'Ingeniería Ambiental',
  },
  universidad: {
    nombre: 'Universidad Nacional de Trujillo',
    siglas: 'UNT',
    url: 'https://www.unitru.edu.pe',
  },
  facultad: 'Facultad de Ingeniería',

  wordmark: { linea1: 'Ingeniería', linea2: 'Ambiental' },

  tagline:
    'Formando ingenieros ambientales de excelencia, con rigor científico y compromiso con la sostenibilidad del país.',

  hero: {
    eyebrow: 'Escuela Profesional de',
    titulo: { linea1: 'Ingeniería', linea2: 'Ambiental' },
    descripcion:
      'Formamos ingenieros ambientales en la Universidad Nacional de Trujillo, con rigor científico y compromiso con la sostenibilidad.',
    ctas: {
      primary: { label: 'Ver Plan de Estudios', to: '/academico/malla-curricular' },
      secondary: { label: 'Perfiles académicos', to: '/academico/perfiles' },
    },
  },

  acreditacion: {
    entidad: 'SINEACE',
    estado: 'acreditada',
    texto: 'Acreditada por SINEACE',
    mostrarSello: true,
  },

  // Cifras de EJEMPLO (plantilla): reemplazar por datos verificables.
  cifras: [
    { numero: '+15', etiqueta: 'Años formando ingenieros', sub: 'de trayectoria ininterrumpida' },
    { numero: '800+', etiqueta: 'Egresados a nivel nacional', sub: 'aportando a la sostenibilidad' },
    { numero: '100%', etiqueta: 'Malla actualizada', sub: 'con enfoque en sostenibilidad' },
  ],

  decana: {
    nombre: 'Karen Valderrama',
    cargo: 'Decana de la Escuela Profesional de Ingeniería Ambiental',
    mensaje:
      'Bienvenidos a la Escuela Profesional de Ingeniería Ambiental. Formamos ingenieros capaces de prevenir y resolver los problemas ambientales con rigor científico y compromiso con la sostenibilidad. Te invitamos a conocer un programa que cuida cada detalle de tu formación.',
    video: { youtubeId: '6mmdvUizSbk', start: 7 },
  },

  enlaces: {
    libroReclamaciones: 'https://reclamos.servicios.gob.pe/?institution_id=247',
    bolsaTrabajo: 'https://use-dpa.unitru.edu.pe/bolsadetrabajo',
  },

  enlacesInstitucionales: [
    { label: 'Portal UNT', url: 'https://www.unitru.edu.pe' },
    { label: 'Transparencia', url: 'https://www.unitru.edu.pe/transparencia' },
    { label: 'Portal del Estudiante', url: 'https://sga.unitru.edu.pe' },
  ],
};
