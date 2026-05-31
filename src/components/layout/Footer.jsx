import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { informacionContacto, redesSociales } from '../../constants/contacto';
import logo from '../../assets/logo.png';

// Iconos SVG de Redes Sociales
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
  </svg>
);
const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialIcons = {
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  youtube: <YoutubeIcon />,
  twitter: <TwitterXIcon />,
};

const socialLabels = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'YouTube',
  twitter: 'X (Twitter)',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main footer body */}
      <div className="pt-14 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

            {/* Columna 1: Identidad + Redes */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src={logo} alt="Logo UNT" className="h-14 w-auto object-contain drop-shadow brightness-200" />
                <div className="flex flex-col">
                  <span className="font-display font-bold leading-tight text-base text-white">
                    Educación Primaria
                  </span>
                  <span className="text-white/60 text-xs uppercase tracking-wider">
                    UNT – Fac. Educación
                  </span>
                </div>
              </div>
              <p className="text-gray-300 font-body text-sm leading-relaxed mb-6">
                Formando educadores de excelencia con vocación, liderazgo y compromiso social para transformar la educación peruana.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 flex-wrap">
                {Object.entries(redesSociales).map(([red, url]) => (
                  <a
                    key={red}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={socialLabels[red] || red}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F58220] flex items-center justify-center transition-colors duration-200"
                    aria-label={`Visitar ${socialLabels[red] || red}`}
                  >
                    {socialIcons[red] || <span className="text-xs font-bold uppercase">{red.charAt(0)}</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div>
              <h3 className="font-display font-bold text-base mb-5 text-[#F58220] uppercase tracking-wider">
                Información
              </h3>
              <ul className="space-y-2.5">
                {[
                  { label: 'Misión y Visión', to: '/nosotros#mision-vision' },
                  { label: 'Historia de la Escuela', to: '/nosotros#historia' },
                  { label: 'Plan de Estudios', to: '/academico#plan-estudios' },
                  { label: 'Perfil del Egresado', to: '/academico#perfil-egresado' },
                  { label: 'Titulación y Grados', to: '/academico#titulacion' },
                  { label: 'Plana Docente', to: '/autoridades#docentes' },
                ].map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-150 text-sm flex items-center gap-1.5"
                    >
                      <span className="text-[#F58220] text-xs">›</span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h3 className="font-display font-bold text-base mb-5 text-[#F58220] uppercase tracking-wider">
                Contacto
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-300 text-sm items-start">
                  <MapPin className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                  <span>{informacionContacto.direccion}</span>
                </li>
                <li className="flex gap-3 text-gray-300 text-sm items-center">
                  <Phone className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>{informacionContacto.telefonos.join(' / ')}</span>
                </li>
                <li className="flex gap-3 text-sm items-center">
                  <Mail className="w-4 h-4 text-[#F58220] shrink-0" />
                  <a href={`mailto:${informacionContacto.correo}`} className="text-gray-300 hover:text-white transition-colors">
                    {informacionContacto.correo}
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Horarios + Links institucionales */}
            <div>
              <h3 className="font-display font-bold text-base mb-5 text-[#F58220] uppercase tracking-wider">
                Horarios de Atención
              </h3>
              <div className="flex gap-3 text-gray-300 text-sm items-start mb-6">
                <Clock className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-white font-semibold">Lunes a Viernes</p>
                  <p>08:00 – 13:00 hrs</p>
                  <p>14:00 – 16:00 hrs</p>
                </div>
              </div>
              <div className="space-y-2 border-t border-white/10 pt-5">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-3 font-semibold">
                  Portal Institucional
                </p>
                <a
                  href="https://www.unitru.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Portal UNT
                </a>
                <a
                  href="https://www.unitru.edu.pe/transparencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Transparencia
                </a>
                <a
                  href="https://sga.unitru.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Portal del Estudiante
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>© {currentYear} Escuela Profesional de Educación Primaria — UNT. Todos los derechos reservados.</p>
          <p>Ley de Transparencia N° 27806 — Acceso a la Información Pública</p>
        </div>
      </div>
    </footer>
  );
}