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
    badge: 'Laboratorio',
    titulo: 'Laboratorio de Calidad de Agua',
    descripcion:
      'Espacio equipado con instrumentación para el análisis físico, químico y biológico del agua, base para el monitoreo y tratamiento de los recursos hídricos.',
    imagen: 'https://picsum.photos/seed/laboratorio-calidad-agua/800/600',
    alt: 'Laboratorio de Calidad de Agua',
  },
  {
    badge: 'Laboratorio',
    titulo: 'Monitoreo de Calidad del Aire',
    descripcion:
      'Laboratorio con equipos para medir material particulado y gases contaminantes, donde los estudiantes desarrollan competencias en gestión de la calidad del aire.',
    imagen: 'https://picsum.photos/seed/monitoreo-calidad-aire/800/600',
    alt: 'Monitoreo de Calidad del Aire',
  },
];
