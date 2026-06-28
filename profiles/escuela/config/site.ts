import type { SiteConfig } from '@/profile-types';

/**
 * Identidad de la escuela. Editar este archivo (y `branding.ts`) cubre la mayor
 * parte de la re-tematización para una escuela nueva.
 *
 * Los textos de abajo son PLANTILLA: describen qué va en cada campo. Reemplázalos
 * por los datos de tu escuela.
 */
export const site: SiteConfig = {
  programa: {
    nombre: 'Nombre de la Escuela Profesional',
    nombreCorto: 'Nombre de la Escuela',
  },
  universidad: {
    nombre: 'Nombre de la Universidad',
    siglas: 'SIGLAS',
    url: '#',
    // Dominio para acotar el buscador del navbar (site:dominio). Déjalo vacío
    // para una búsqueda general en Google.
    dominio: '',
  },
  facultad: 'Nombre de la Facultad',

  // Wordmark del navbar: se muestra en dos líneas (línea 1 en azul, línea 2 en dorado).
  wordmark: { linea1: 'Nombre', linea2: 'Escuela' },

  tagline:
    'Lema o frase que resume el propósito de la escuela en una línea. Reemplázalo por el de tu escuela.',

  hero: {
    eyebrow: 'Escuela Profesional de',
    titulo: { linea1: 'Nombre De', linea2: 'La Escuela' },
    descripcion:
      'Descripción breve de la escuela para el hero: a quién forma y con qué enfoque. Reemplaza este texto por el de tu escuela.',
    ctas: {
      primary: { label: 'Ver Plan de Estudios', to: '/academico/malla-curricular' },
      secondary: { label: 'Perfiles académicos', to: '/academico/perfiles' },
    },
  },

  // Sello de acreditación (badge del hero). Si tu escuela no está acreditada,
  // pon `mostrarSello: false` y ajusta `estado`.
  acreditacion: {
    entidad: 'Entidad Acreditadora',
    estado: 'acreditada',
    texto: 'Acreditada por la Entidad',
    mostrarSello: true,
  },

  // Cifras destacadas de la franja del hero. Reemplaza números y etiquetas.
  cifras: [
    { numero: '00', etiqueta: 'Primera cifra destacada', sub: 'Descripción breve de la cifra' },
    { numero: '000+', etiqueta: 'Segunda cifra destacada', sub: 'Descripción breve de la cifra' },
    { numero: '00%', etiqueta: 'Tercera cifra destacada', sub: 'Descripción breve de la cifra' },
  ],

  decana: {
    nombre: 'Nombre del Decano(a)',
    cargo: 'Decano(a) de la Escuela Profesional',
    mensaje:
      'Mensaje de bienvenida del decano(a). Aquí va un párrafo que recibe a los visitantes y resume el espíritu del programa. Reemplaza este texto por el de tu escuela.',
    // ID del video de YouTube para el mensaje de bienvenida. Déjalo vacío hasta
    // tener el video de tu escuela; al ponerlo, el reproductor aparece solo.
    video: { youtubeId: '', start: 0 },
  },

  enlaces: {
    libroReclamaciones: '#',
    bolsaTrabajo: '#',
  },

  enlacesInstitucionales: [
    { label: 'Enlace institucional 1', url: '#' },
    { label: 'Enlace institucional 2', url: '#' },
    { label: 'Enlace institucional 3', url: '#' },
  ],
};
