import { BookOpen, Users, FlaskConical, GraduationCap, Handshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Contenido de la página de Inicio (accesos rápidos + ambientes destacados).

export interface AccesoRapido {
  titulo: string;
  descripcion: string;
  icono: LucideIcon;
  link: string;
  imagen: string;
}

export const accesosRapidos: AccesoRapido[] = [
  { titulo: 'Plan de Estudios', descripcion: 'Malla curricular actualizada por ciclos.', icono: BookOpen, link: '/academico/malla-curricular', imagen: 'https://picsum.photos/seed/malla-plan-estudios/600/400' },
  { titulo: 'Plana Docente', descripcion: 'Profesores e investigadores comprometidos.', icono: Users, link: '/organizacion/docentes', imagen: 'https://picsum.photos/seed/plana-docente/600/400' },
  { titulo: 'Investigación', descripcion: 'Líneas, proyectos y publicaciones activas.', icono: FlaskConical, link: '/investigacion/proyectos', imagen: 'https://picsum.photos/seed/investigacion-ambiental/600/400' },
  { titulo: 'Grados y Títulos', descripcion: 'Pasos y requisitos para tu titulación.', icono: GraduationCap, link: '/academico/titulacion', imagen: 'https://picsum.photos/seed/grados-titulos/600/400' },
  { titulo: 'Convenios', descripcion: 'Alianzas con entidades del sector ambiental.', icono: Handshake, link: '/academico/convenios', imagen: 'https://picsum.photos/seed/convenios-alianzas/600/400' },
];

export interface Ambiente {
  badge: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  alt: string;
}

export const ambientes: Ambiente[] = [
  {
    badge: 'Ambiente',
    titulo: 'Nombre del Ambiente 1',
    descripcion:
      'Descripción breve del primer ambiente o laboratorio: con qué cuenta y para qué se usa en la formación. Reemplaza este texto por el de tu escuela.',
    imagen: 'https://picsum.photos/seed/ambiente-1/800/600',
    alt: 'Nombre del Ambiente 1',
  },
  {
    badge: 'Ambiente',
    titulo: 'Nombre del Ambiente 2',
    descripcion:
      'Descripción breve del segundo ambiente o laboratorio: con qué cuenta y para qué se usa en la formación. Reemplaza este texto por el de tu escuela.',
    imagen: 'https://picsum.photos/seed/ambiente-2/800/600',
    alt: 'Nombre del Ambiente 2',
  },
];
