import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FloatingAdmissions from '../components/layout/FloatingAdmissions';
import ScrollToHash from '../components/ScrollToHash';

// Pages
import Inicio from '../pages/Inicio';
import NotFound from '../pages/NotFound';

// Módulo: Nosotros
import NosotrosIndex from '../pages/nosotros/index';
import MisionVision from '../pages/nosotros/MisionVision';
import Historia from '../pages/nosotros/Historia';
import ConveniosEscuelas from '../pages/nosotros/ConveniosEscuelas';

// Módulo: Académico
import AcademicoIndex from '../pages/academico/index';
import PerfilIngresante from '../pages/academico/PerfilIngresante';
import PerfilEgresado from '../pages/academico/PerfilEgresado';
import PlanEstudios from '../pages/academico/PlanEstudios';
import Titulacion from '../pages/academico/Titulacion';

// Módulo: Autoridades
import AutoridadesIndex from '../pages/autoridades/index';
import Direccion from '../pages/autoridades/Direccion';
import Docentes from '../pages/autoridades/Docentes';
import Organigrama from '../pages/autoridades/Organigrama';

// Módulo: Investigación
import InvestigacionIndex from '../pages/investigacion/index';
import Lineas from '../pages/investigacion/Lineas';
import Proyectos from '../pages/investigacion/Proyectos';
import Publicaciones from '../pages/investigacion/Publicaciones';
import Convenios from '../pages/investigacion/convenios';

// Noticias
import Noticias from '../pages/Noticias';

// Contacto
import Contacto from '../pages/Contacto';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <FloatingAdmissions />
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Inicio */}
            <Route path="/" element={<Inicio />} />

            {/* Módulo: Nosotros */}
            <Route path="/nosotros" element={<NosotrosIndex />}>
              <Route index element={<MisionVision />} />
              <Route path="mision-vision" element={<MisionVision />} />
              <Route path="historia" element={<Historia />} />
              <Route path="convenios-escuelas" element={<ConveniosEscuelas />} />
            </Route>

            {/* Módulo: Académico */}
            <Route path="/academico" element={<AcademicoIndex />}>
              <Route index element={<PerfilIngresante />} />
              <Route path="perfil-ingresante" element={<PerfilIngresante />} />
              <Route path="perfil-egresado" element={<PerfilEgresado />} />
              <Route path="plan-estudios" element={<PlanEstudios />} />
              <Route path="titulacion" element={<Titulacion />} />
            </Route>

            {/* Módulo: Autoridades */}
            <Route path="/autoridades" element={<AutoridadesIndex />}>
              <Route index element={<Direccion />} />
              <Route path="direccion" element={<Direccion />} />
              <Route path="docentes" element={<Docentes />} />
              <Route path="organigrama" element={<Organigrama />} />
            </Route>

            {/* Módulo: Investigación */}
            <Route path="/investigacion" element={<InvestigacionIndex />}>
              <Route index element={<Lineas />} />
              <Route path="lineas" element={<Lineas />} />
              <Route path="proyectos" element={<Proyectos />} />
              <Route path="publicaciones" element={<Publicaciones />} />
              <Route path="convenios" element={<Convenios />} />
            </Route>

            {/* Noticias */}
            <Route path="/noticias" element={<Noticias />} />

            {/* Contacto */}
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
