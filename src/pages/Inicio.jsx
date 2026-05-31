import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { BookOpen, Users, FlaskConical, GraduationCap, Handshake, ArrowRight, Calendar, Sparkles, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import frontImage from '../assets/frontunt.jpg';
import { noticias } from '../constants/noticias';
import { director } from '../constants/autoridades';

export default function Inicio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const accesosRapidos = [
    { titulo: "Plan de Estudios", descripcion: "Malla curricular actualizada por ciclos.", icono: BookOpen, link: "/academico#plan-estudios", imagen: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" },
    { titulo: "Plana Docente", descripcion: "Profesores e investigadores comprometidos.", icono: Users, link: "/autoridades#docentes", imagen: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80" },
    { titulo: "Investigación", descripcion: "Líneas, proyectos y publicaciones activas.", icono: FlaskConical, link: "/investigacion#proyectos", imagen: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80" },
    { titulo: "Grados y Títulos", descripcion: "Pasos y requisitos para tu titulación.", icono: GraduationCap, link: "/academico#titulacion", imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80" },
    { titulo: "Colegios Aliados", descripcion: "Red de instituciones educativas socias.", icono: Handshake, link: "/nosotros#convenios-escuelas", imagen: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80" },
  ];

  const cifras = [
    { numero: "+50", etiqueta: "Años formando maestros", sub: "de trayectoria ininterrumpida" },
    { numero: "2500+", etiqueta: "Egresados en todo el país", sub: "transformando la educación" },
    { numero: "100%", etiqueta: "Malla actualizada", sub: "al currículo nacional 2025" },
    { numero: "SINEACE", etiqueta: "Acreditación de calidad", sub: "reconocimiento oficial" },
  ];

  return (
    <PageWrapper>
      {/* ══════════════════════════════════════════
          HERO — Motivador y enérgico para estudiantes
          ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-white min-h-[680px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${frontImage})` }}
      >
        {/* Overlay doble: izquierda transparente, derecha azul sólido */}
        <div className="absolute inset-0 z-0"
          style={{ background: 'linear-gradient(110deg, rgba(0,0,0,0.1) 0%, rgba(0,29,70,0.82) 42%, rgba(0,20,55,0.97) 70%, #001232 100%)' }}
        />

        {/* Patrón de puntos sutil */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        {/* Acento naranja diagonal en la derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#F58220] via-[#F58220]/60 to-transparent z-10" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 pt-24 pb-24 lg:pt-32 lg:pb-36">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-2xl ml-auto text-right"
          >
            <motion.p variants={itemVariants} className="text-base md:text-lg font-display font-semibold text-white/70 uppercase tracking-widest mb-1">
              Escuela Profesional de
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display font-black leading-none mb-3 text-white"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              Educación<br />
              <span style={{ color: '#F58220' }}>Primaria</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl lg:text-2xl text-white/85 mb-8 font-body leading-relaxed"
            >
              Tu vocación merece una carrera que{' '}
              <em className="not-italic font-bold text-white">cambie vidas</em>.
              Forma parte de quienes construyen el futuro del Perú.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-end">
              <Link to="/academico#plan-estudios">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(245,130,32,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F58220] hover:bg-[#e07010] text-white font-black px-8 py-3.5 rounded-xl text-base transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  Ver Plan de Estudios
                </motion.button>
              </Link>
              <Link to="/nosotros#historia">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl text-base backdrop-blur-sm transition-all"
                >
                  Conocer más
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CIFRAS — Franja de impacto oscura
          ══════════════════════════════════════════ */}
      <section className="bg-[#001232] py-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {cifras.map((cifra, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`py-8 px-6 text-center border-white/10 ${idx < 3 ? 'lg:border-r' : ''} ${idx < 2 ? 'border-r' : ''} border-b lg:border-b-0`}
              >
                <div
                  className="text-4xl md:text-5xl font-display font-black mb-1"
                  style={{ color: '#F58220', textShadow: '0 0 20px rgba(245,130,32,0.3)' }}
                >
                  {cifra.numero}
                </div>
                <p className="text-white font-bold text-sm md:text-base">{cifra.etiqueta}</p>
                <p className="text-white/40 text-xs mt-0.5">{cifra.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIENVENIDA / VIDEO
          ══════════════════════════════════════════ */}

      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna de Texto */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-pucp-blue-dark uppercase mb-2">
                Bienvenida de la <span className="text-[#F58220]">Rectora</span>
              </h2>
              <div className="w-16 h-1 bg-[#F58220] mb-6"></div>
              
              <div className="text-gray-700 font-body space-y-4 text-justify leading-relaxed">
                <p>
                  "¡Bienvenidos a la Carrera de Educación Primaria! Este espacio educativo te invita a sumergirte en la asombrosa travesía de formar parte de la enseñanza fundamental. Prepárate para iniciar un viaje significativo, donde cultivarás habilidades esenciales y descubrirás la gratificación de guiar los primeros pasos en el aprendizaje de los más jóvenes."
                </p>
                <p>
                  "Estamos emocionados de acompañarte en este camino educativo, contribuyendo al desarrollo integral de los estudiantes en sus años iniciales de educación. ¡Comencemos juntos este emocionante viaje hacia un futuro repleto de descubrimientos y aprendizaje en la Educación Primaria!"
                </p>
              </div>
            </motion.div>

            {/* Columna de Video */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-xl overflow-hidden shadow-2xl relative border-4 border-gray-50"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/6mmdvUizSbk?start=7" 
                title="Video Institucional Educación Primaria UNT" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>
      {/* ─── Sección Noticias y Actualidad ─── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <SectionTitle title="Noticias y Actualidad" subtitle="Últimas novedades, eventos y comunicados de la Escuela." />
            <Link
              to="/investigacion"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#002D62] hover:text-[#F58220] transition-colors whitespace-nowrap shrink-0"
            >
              Ver todas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {noticias.map((noticia, idx) => (
              <motion.div
                key={noticia.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link to={noticia.link} className="block h-full group">
                  <Card className="h-full flex flex-col p-0 overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Franja superior de color por categoría */}
                    <div className="h-1.5 bg-[#002D62] w-full" />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.categoriaColor}`}>
                          {noticia.categoria}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-xs ml-auto">
                          <Calendar className="w-3 h-3" />
                          {noticia.fechaFormateada}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-[#002D62] text-base leading-snug mb-3 group-hover:text-[#F58220] transition-colors flex-1">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {noticia.resumen}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 text-[#F58220] text-sm font-bold group-hover:gap-2 transition-all">
                        Leer más <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mensaje del Director / Decana ─── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-[#002D62] rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Foto / Silueta */}
              <div className="relative flex items-end justify-center bg-gradient-to-br from-[#003580] to-[#001a3d] min-h-[220px] md:min-h-0">
                <div className="w-full h-full flex flex-col items-center justify-end pb-0 pt-8 px-8">
                  {/* Silueta SVG de persona */}
                  <svg
                    viewBox="0 0 200 260"
                    className="w-40 md:w-full max-w-[180px] opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    {/* Cabeza */}
                    <ellipse cx="100" cy="65" rx="38" ry="42" fill="rgba(255,255,255,0.25)" />
                    {/* Cuerpo */}
                    <path
                      d="M30 260 C30 170 60 140 100 135 C140 140 170 170 170 260Z"
                      fill="rgba(255,255,255,0.2)"
                    />
                    {/* Cuello */}
                    <rect x="88" y="103" width="24" height="22" rx="8" fill="rgba(255,255,255,0.2)" />
                    {/* Blazer/toga decorativa */}
                    <path d="M50 175 L100 155 L150 175 L155 260 L45 260Z" fill="rgba(245,130,32,0.25)" />
                  </svg>
                </div>
                {/* Plaquita con nombre */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#F58220] text-white text-center py-2 px-3">
                  <p className="font-display font-bold text-sm leading-tight">{director.nombre}</p>
                  <p className="text-xs text-white/80 font-medium">{director.cargo}</p>
                </div>
              </div>

              {/* Texto */}
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center text-white">
                <div className="w-10 h-1 bg-[#F58220] mb-5 rounded-full" />
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-5 leading-tight">
                  Mensaje de la <span className="text-[#F58220]">Dirección</span>
                </h2>
                <blockquote className="text-white/80 font-body text-base leading-relaxed mb-6 italic border-l-2 border-[#F58220]/50 pl-4">
                  "{director.bio}"
                </blockquote>
                <Link to="/autoridades#direccion">
                  <button className="inline-flex items-center gap-2 bg-[#F58220] hover:bg-[#e07010] text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm">
                    Conocer más <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ACCESOS RÁPIDOS — Cards premium numeradas
          ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Todo lo que necesitas **saber**"
            subtitle="Accede directo a la información más importante de nuestra escuela."
            center
            badge="Explora"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-12">
            {accesosRapidos.map((acceso, idx) => {
              const IconComp = acceso.icono;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Link to={acceso.link} className="block h-full group">
                    <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-[#F58220]/40 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(245,130,32,0.15)] flex flex-col">
                      
                      {/* Imagen de Portada */}
                      <div className="h-32 w-full relative overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-[#002D62]/40 mix-blend-multiply z-10 group-hover:bg-[#002D62]/20 transition-colors duration-500" />
                        <img 
                          src={acceso.imagen} 
                          alt={acceso.titulo} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>

                      {/* Contenido */}
                      <div className="p-6 flex flex-col flex-1 relative bg-white">
                        <h3 className="text-lg font-display font-black text-[#002D62] mb-2 leading-tight group-hover:text-[#F58220] transition-colors">
                          {acceso.titulo}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">
                          {acceso.descripcion}
                        </p>

                        {/* CTA flecha */}
                        <div className="mt-4 flex items-center gap-1 text-[#F58220] text-xs font-bold group-hover:gap-2 transition-all">
                          Ver más <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════
          AMBIENTES — Infraestructura Especializada
          ══════════════════════════════════════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nuestros **Ambientes**"
            subtitle="Espacios diseñados para tu desarrollo práctico y tecnológico."
            center
            badge="Infraestructura"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            {/* Módulo de Estimulación Temprana */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-[#001232] h-[380px] md:h-[450px] flex items-end shadow-xl"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1587691592099-24045742c181?w=800&q=80" 
                  alt="Módulo de Estimulación Temprana" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001232] via-[#001232]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#002D62]/20 mix-blend-multiply" />
              </div>
              <div className="relative z-10 p-8 md:p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="inline-block px-3.5 py-1.5 bg-[#F58220] text-white text-[10px] font-black tracking-widest uppercase rounded-md mb-4 shadow-lg">
                  Aula Principal
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-tight">
                  Módulo de Estimulación Temprana
                </h3>
                <div className="w-12 h-1 bg-[#F58220] mb-4 transition-all duration-500 group-hover:w-24"></div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                  Un espacio especializado y equipado con materiales didácticos de vanguardia para potenciar el desarrollo cognitivo y psicomotriz en la primera infancia.
                </p>
              </div>
            </motion.div>

            {/* Centro de Cómputo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-[#001232] h-[380px] md:h-[450px] flex items-end shadow-xl"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1517430816045-df4b7ef11df1?w=800&q=80" 
                  alt="Centro de Cómputo" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001232] via-[#001232]/80 to-transparent" />
                <div className="absolute inset-0 bg-[#002D62]/20 mix-blend-multiply" />
              </div>
              <div className="relative z-10 p-8 md:p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="inline-block px-3.5 py-1.5 bg-[#F58220] text-white text-[10px] font-black tracking-widest uppercase rounded-md mb-4 shadow-lg">
                  Laboratorio
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-tight">
                  Centro de<br/>Cómputo
                </h3>
                <div className="w-12 h-1 bg-[#F58220] mb-4 transition-all duration-500 group-hover:w-24"></div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                  Laboratorio tecnológico moderno con equipos de última generación, donde nuestros estudiantes desarrollan competencias digitales esenciales.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}