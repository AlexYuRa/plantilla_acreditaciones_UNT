import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingAdmissions from '../components/layout/FloatingAdmissions';
import ScrollToHash from '../components/ScrollToHash';
import EnConstruccion from '../components/layout/EnConstruccion';

// Inicio / utilitarias
import Inicio from '../pages/Inicio';
import Noticias from '../pages/Noticias';
import Contacto from '../pages/Contacto';
import NotFound from '../pages/NotFound';

// Módulo: Nosotros
import NosotrosIndex from '../pages/nosotros/index';
import Historia from '../pages/nosotros/Historia';
import MisionVision from '../pages/nosotros/MisionVision'; // agrupa Misión + Visión (#mision / #vision)
import Objetivos from '../pages/nosotros/Objetivos';        // agrupa educativos + académicos
import Perfiles from '../pages/nosotros/Perfiles';          // agrupa ingreso + egreso

// Módulo: Organización
import OrganizacionIndex from '../pages/organizacion/index';
import OrganizacionDireccion from '../pages/organizacion/Direccion'; // agrupa escuela + departamento
import Comites from '../pages/organizacion/Comites';                 // agrupa los 5 comités

// Módulo: Académico
import AcademicoIndex from '../pages/academico/index';
import PlanEstudios from '../pages/academico/PlanEstudios';
import Titulacion from '../pages/academico/Titulacion';

// Módulo: Investigación
import InvestigacionIndex from '../pages/investigacion/index';
import Lineas from '../pages/investigacion/Lineas';
import Publicaciones from '../pages/investigacion/Publicaciones';
import ProyectosGrupo from '../pages/investigacion/ProyectosGrupo'; // agrupa proyectos + tesis
import Convenios from '../pages/investigacion/convenios';            // reutilizado en Académico

// Páginas reutilizadas
import Docentes from '../pages/autoridades/Docentes';       // Organización › Docentes
import Organigrama from '../pages/autoridades/Organigrama'; // Organización › Estructura organizacional

// Módulo: Admisión (enlazado desde el panel lateral)
import GuiaPostulante from '../pages/admision/GuiaPostulante';
import Resoluciones from '../pages/admision/Resoluciones';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <FloatingAdmissions />
      <div className="flex flex-col min-h-[100svh]">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Inicio */}
            <Route path="/" element={<Inicio />} />

            {/* ── Nosotros ── */}
            <Route path="/nosotros" element={<NosotrosIndex />}>
              <Route index element={<Historia />} />
              <Route path="historia" element={<Historia />} />
              <Route path="mision-vision" element={<MisionVision />} />
              <Route path="objetivos" element={<Objetivos />} />
              <Route path="perfiles" element={<Perfiles />} />
            </Route>

            {/* ── Organización ── */}
            <Route path="/organizacion" element={<OrganizacionIndex />}>
              <Route index element={<OrganizacionDireccion />} />
              <Route path="direccion" element={<OrganizacionDireccion />} />
              <Route path="docentes" element={<Docentes />} />
              <Route path="administrativos" element={<EnConstruccion titulo="Administrativos" />} />
              <Route path="comites" element={<Comites />} />
              <Route path="estructura" element={<Organigrama />} />
            </Route>

            {/* ── Académico ── */}
            <Route path="/academico" element={<AcademicoIndex />}>
              <Route index element={<PlanEstudios />} />
              <Route path="malla-curricular" element={<PlanEstudios />} />
              <Route path="laboratorios" element={<EnConstruccion titulo="Laboratorios" />} />
              <Route path="responsabilidad-social" element={<EnConstruccion titulo="Responsabilidad **Social**" />} />
              <Route path="convenios" element={<Convenios />} />
              <Route path="movilidad" element={<EnConstruccion titulo="Movilidad" />} />
              {/* Ruta conservada (Titulación), fuera del menú */}
              <Route path="titulacion" element={<Titulacion />} />
            </Route>

            {/* ── Investigación ── */}
            <Route path="/investigacion" element={<InvestigacionIndex />}>
              <Route index element={<Lineas />} />
              <Route path="lineas" element={<Lineas />} />
              <Route path="publicaciones" element={<Publicaciones />} />
              <Route path="revistas" element={<EnConstruccion titulo="Revistas" />} />
              <Route path="proyectos" element={<ProyectosGrupo />} />
            </Route>

            {/* ── Admisión (panel lateral) ── */}
            <Route path="/admision/guia" element={<GuiaPostulante />} />
            <Route path="/admision/resoluciones" element={<Resoluciones />} />

            {/* Conservadas fuera del menú */}
            <Route path="/noticias" element={<Noticias />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
