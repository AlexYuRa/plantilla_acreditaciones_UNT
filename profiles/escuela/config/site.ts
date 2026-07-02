import type { SiteConfig } from '@/profile-types';

/**
 * Identidad del programa de estudios. Editar este archivo (y `branding.ts`) cubre
 * la mayor parte de la re-tematización para un programa nuevo.
 *
 * Los textos de abajo son PLANTILLA: describen qué va en cada campo. Reemplázalos
 * por los datos de tu programa.
 */
export const site: SiteConfig = {
  programa: {
    nombre: 'Programa de Estudios de la Carrera',
    nombreCorto: 'Programa de Estudios',
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

  // Denominación del tipo de unidad académica. Se usa en subtítulos genéricos.
  denominacion: 'Programa de Estudios',

  // Wordmark del navbar: se muestra en dos líneas (línea 1 en azul, línea 2 en dorado).
  wordmark: { linea1: 'Nombre', linea2: 'Programa' },

  tagline:
    'Lema o frase que resume el propósito del programa de estudios en una línea. Reemplázalo por el de tu programa.',

  hero: {
    eyebrow: 'Programa de Estudios de',
    titulo: { linea1: 'Ingenieria', linea2: 'Ambiental' },
    descripcion:
      'Descripción breve del programa de estudios para el hero: a quién forma y con qué enfoque. Reemplaza este texto por el de tu programa.',
    ctas: {
      primary: { label: 'Ver Plan de Estudios', to: '/academico/malla-curricular' },
      secondary: { label: 'Perfiles académicos', to: '/academico/perfiles' },
    },
  },

  // Sello de acreditación (badge del hero). Si tu programa no está acreditado,
  // pon `mostrarSello: false` y ajusta `estado`.
  acreditacion: {
    entidad: 'Entidad Acreditadora',
    estado: 'acreditada',
    texto: 'Acreditada por la Entidad',
    mostrarSello: true,
  },

  // Cifras destacadas de la franja del hero. Reemplaza números y etiquetas.
  cifras: [
    { numero: '---', etiqueta: 'Primera cifra destacada', sub: 'Descripción breve de la cifra' },
    { numero: '---+', etiqueta: 'Segunda cifra destacada', sub: 'Descripción breve de la cifra' },
    { numero: '---%', etiqueta: 'Tercera cifra destacada', sub: 'Descripción breve de la cifra' },
  ],

  decana: {
    nombre: 'Nombre del Decano(a)',
    cargo: 'Decano(a) de la Nombre de la Escuela/Carrera Profesional',
    mensaje:
      'Mensaje de bienvenida del decano(a). Aquí va un párrafo que recibe a los visitantes y resume el espíritu del programa. Reemplazar por texto real del decano(a) de tu programa.',
    // ID del video de YouTube para el mensaje de bienvenida. Déjalo vacío hasta
    // tener el video de tu programa; al ponerlo, el reproductor aparece solo.
    video: { youtubeId: '', start: 0 },
  },

  enlaces: {
    libroReclamaciones: 'https://reclamos.servicios.gob.pe/?institution_id=247',
    bolsaTrabajo: '#',
  },

  enlacesInstitucionales: [
    { label: 'Enlace institucional 1', url: '#' },
    { label: 'Enlace institucional 2', url: '#' },
    { label: 'Enlace institucional 3', url: '#' },
  ],
};
