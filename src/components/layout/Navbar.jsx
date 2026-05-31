import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Phone, Mail, Search, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import Breadcrumbs from './Breadcrumbs';
import AnnouncementBanner from './AnnouncementBanner';

const NAV_LINKS = [
  { name: 'Inicio', path: '/' },
  { 
    name: 'Nosotros', 
    path: '/nosotros',
    sublinks: [
      { name: 'Misión y Visión', path: '/nosotros#mision-vision' },
      { name: 'Historia', path: '/nosotros#historia' },
      { name: 'Colegios Aliados', path: '/nosotros#convenios-escuelas' }
    ]
  },
  { 
    name: 'Académico', 
    path: '/academico',
    sublinks: [
      { name: 'Perfil del Ingresante', path: '/academico#perfil-ingresante' },
      { name: 'Perfil del Egresado', path: '/academico#perfil-egresado' },
      { name: 'Plan de Estudios', path: '/academico#plan-estudios' },
      { name: 'Titulación', path: '/academico#titulacion' }
    ]
  },
  { 
    name: 'Autoridades', 
    path: '/autoridades',
    sublinks: [
      { name: 'Dirección', path: '/autoridades#direccion' },
      { name: 'Docentes', path: '/autoridades#docentes' },
      { name: 'Organigrama', path: '/autoridades#organigrama' }
    ]
  },
  { 
    name: 'Investigación', 
    path: '/investigacion',
    sublinks: [
      { name: 'Líneas', path: '/investigacion#lineas' },
      { name: 'Proyectos', path: '/investigacion#proyectos' },
      { name: 'Publicaciones', path: '/investigacion#publicaciones' },
      { name: 'Convenios', path: '/investigacion#convenios' }
    ]
  },
  { name: 'Contacto', path: '/contacto' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header 
      className={clsx(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-pucp-blue-dark shadow-md' : 'bg-pucp-blue-dark'
      )}
    >
      {/* Top Bar */}
      <div className="bg-[#243E4E] text-gray-300 text-[13px] py-2 border-b-2 border-[#D4A017] hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 md:gap-8">
            <span className="font-semibold text-white">¿Tienes alguna duda?</span>
            <span className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              (+51) 920 027 273
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#D4A017] transition-colors cursor-pointer">
              <Mail className="w-4 h-4" />
              facedu@unitru.edu.pe
            </span>
          </div>
          <div className="flex items-center">
            <div className="relative group flex items-center">
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="bg-transparent text-white placeholder-gray-400 text-[13px] px-3 py-1 outline-none border-b border-transparent focus:border-[#D4A017] transition-all w-32 focus:w-48"
              />
              <Search className="w-4 h-4 text-gray-400 ml-1 hover:text-[#D4A017] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Banner de Avisos Institucionales */}
      <AnnouncementBanner />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo / Marca */}
          <Link to="/" className="flex items-center gap-3 group py-3">
            <div className="h-16 md:h-20 flex items-center justify-center transition-transform group-hover:scale-105">
              <img src={logo} alt="Logo UNT" className="h-full w-auto object-contain drop-shadow-md" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-tight leading-tight text-lg md:text-xl">
                Educación Primaria
              </span>
              <span className="text-xs text-white/80 font-body hidden sm:block uppercase tracking-wider font-semibold mt-0.5">
                Universidad Nacional
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group h-full flex">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => clsx(
                  'font-body font-medium text-[15px] transition-colors flex items-center px-4 py-5 md:py-6',
                  isActive ? 'bg-[#D4A017] text-white' : 'text-white hover:bg-white/10'
                  )}
                >
                  {link.name}
                  {link.sublinks && (
                    <ChevronDown className="w-4 h-4 ml-1 opacity-70" />
                  )}
                </NavLink>
                
                {/* Dropdown */}
                {link.sublinks && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                    <div className="flex flex-col">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="block px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-pucp-blue-dark transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) => clsx(
                      'font-bold py-2 border-b border-gray-50',
                      isActive ? 'text-secondary' : 'text-primary'
                    )}
                  >
                    {link.name}
                  </NavLink>
                  {link.sublinks && (
                    <div className="pl-4 flex flex-col mt-2 gap-2 border-l-2 border-accent">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.name}
                          to={sublink.path}
                          className="text-sm text-gray-600 hover:text-primary py-1"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <Breadcrumbs />
    </header>
  );
}