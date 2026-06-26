import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { BookOpen, Users, FlaskConical, GraduationCap, Handshake, ArrowRight, Calendar, ShieldCheck } from 'lucide-react';
import frontImage from '../assets/front_ingAmbi.webp';
import frontImage2 from '../assets/front_ingAmbi1.webp';
import frontImage3 from '../assets/frontunt.webp';
import libroReclamaciones from '../assets/libro-de-reclamaciones-37735_logosenvector.com_5.svg';
import useLogo from '../assets/uselogo-icon.png';
import { noticias } from '../constants/noticias';
import { libroReclamacionesUrl } from '../constants/contacto';
import useHeaderHeight from '../hooks/useHeaderHeight';

export default function Inicio() {
  // Alto del header sticky (varía con el banner de avisos y el responsive).
  const headerHeight = useHeaderHeight();

  // Mide el alto de la franja de cifras para descontarlo del hero, de modo que
  // la franja aparezca completa al entrar (sin scroll) y no se mueva al cerrar
  // el banner de avisos. Se recalcula en resize/reflow (1 fila en escritorio,
  // 2 en móvil).
  const cifrasRef = useRef<HTMLElement>(null);
  const [cifrasHeight, setCifrasHeight] = useState(0);
  useLayoutEffect(() => {
    const el = cifrasRef.current;
    if (!el) return;
    const update = () => setCifrasHeight(el.offsetHeight);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener('resize', update);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  // Carrusel del hero (máx. 3 imágenes): crossfade suave entre fondos.
  // Fotos de la Escuela de Ingeniería Ambiental (src/assets).
  const heroImages = [
    frontImage,
    frontImage2,
    frontImage3,
  ];
  const [heroIdx, setHeroIdx] = useState(0);
  // Carga progresiva: solo pedimos las imágenes ya mostradas + la siguiente.
  // Así la primera pinta rápido en móvil (mejor LCP) y las demás no compiten
  // con el render inicial; cada una llega antes de su turno en el crossfade.
  const [loadedImgs, setLoadedImgs] = useState(() => new Set([0, 1 % heroImages.length]));

  useEffect(() => {
    if (heroImages.length < 2) return;
    // Respeta la preferencia del sistema de reducir movimiento: sin auto-rotación.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % heroImages.length), 6000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  useEffect(() => {
    setLoadedImgs((prev) => {
      if (prev.has(heroIdx) && prev.has((heroIdx + 1) % heroImages.length)) return prev;
      const next = new Set(prev);
      next.add(heroIdx);
      next.add((heroIdx + 1) % heroImages.length);
      return next;
    });
  }, [heroIdx, heroImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const accesosRapidos = [
    { titulo: "Plan de Estudios", descripcion: "Malla curricular actualizada por ciclos.", icono: BookOpen, link: "/academico/malla-curricular", imagen: "https://picsum.photos/seed/malla-plan-estudios/600/400" },
    { titulo: "Plana Docente", descripcion: "Profesores e investigadores comprometidos.", icono: Users, link: "/organizacion/docentes", imagen: "https://picsum.photos/seed/plana-docente/600/400" },
    { titulo: "Investigación", descripcion: "Líneas, proyectos y publicaciones activas.", icono: FlaskConical, link: "/investigacion/proyectos", imagen: "https://picsum.photos/seed/investigacion-ambiental/600/400" },
    { titulo: "Grados y Títulos", descripcion: "Pasos y requisitos para tu titulación.", icono: GraduationCap, link: "/academico/titulacion", imagen: "https://picsum.photos/seed/grados-titulos/600/400" },
    { titulo: "Convenios", descripcion: "Alianzas con entidades del sector ambiental.", icono: Handshake, link: "/academico/convenios", imagen: "https://picsum.photos/seed/convenios-alianzas/600/400" },
  ];

  // Cifras de impacto (datos de EJEMPLO para el demo; reemplazar por cifras
  // verificables). El estado de acreditación se muestra como sello en el hero,
  // no aquí.
  const cifras = [
    { numero: "+15", etiqueta: "Años formando ingenieros", sub: "de trayectoria ininterrumpida" },
    { numero: "800+", etiqueta: "Egresados a nivel nacional", sub: "aportando a la sostenibilidad" },
    { numero: "100%", etiqueta: "Malla actualizada", sub: "con enfoque en sostenibilidad" },
  ];

  return (
    <PageWrapper>
      {/* ══════════════════════════════════════════
          HERO — Motivador y enérgico para estudiantes
          ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden text-white flex items-center"
        style={{ minHeight: `max(420px, calc(100svh - ${headerHeight}px - ${cifrasHeight}px))` }}
      >
        {/* Carrusel de fondo: capas <img> con composición en GPU para que el
            navegador no repinte la imagen en cada scroll (clave en Firefox
            móvil). El crossfade es solo opacidad; cada capa va en su propia
            capa de compositor (transform-gpu + will-change). */}
        {heroImages.map((img, i) =>
          loadedImgs.has(i) ? (
            <img
              key={i}
              src={img}
              alt=""
              aria-hidden="true"
              decoding="async"
              loading={i === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 z-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out transform-gpu"
              style={{ opacity: i === heroIdx ? 1 : 0, willChange: 'opacity' }}
            />
          ) : null
        )}

        {/* Degradado institucional azul + máscara negra semitransparente encima */}
        <div className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(110deg, rgba(18,55,123,0.05) 0%, rgba(18,55,123,0.52) 42%, rgba(18,55,123,0.78) 70%, rgba(18,55,123,0.88) 100%)' }}
        />
        <div className="absolute inset-0 z-[1] bg-black/40 md:bg-black/30" />

        {/* Patrón de puntos sutil (radial-gradient CSS en vez de SVG: una capa
            de pintura menos que recalcular durante el scroll). */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[2] opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,1) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}
        />

        {/* Acento naranja diagonal en la derecha */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-gold via-gold/60 to-transparent z-10" />

        <div className="container relative z-10 mx-auto px-4 md:px-8 pt-10 pb-28 md:pt-12 md:pb-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl lg:max-w-2xl mx-auto md:mr-0 md:ml-auto text-center md:text-right"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-lg font-display font-semibold text-white/80 uppercase tracking-widest mb-2"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
            >
              Escuela Profesional de
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display font-black leading-[0.95] mb-4 text-white"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)', textShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              Ingeniería<br />
              <span className="text-gold">Ambiental</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base lg:text-xl text-white/85 mb-7 font-body leading-relaxed text-balance max-w-md md:max-w-none mx-auto"
            >
              Formamos ingenieros ambientales en la Universidad Nacional de Trujillo,
              con rigor científico y compromiso con la sostenibilidad.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end max-w-xs sm:max-w-none mx-auto md:mr-0 md:ml-auto"
            >
              <Link to="/academico/malla-curricular" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(230,173,9,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-deep text-white font-black px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-sm sm:text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  <GraduationCap className="w-5 h-5 shrink-0" />
                  Ver Plan de Estudios
                </motion.button>
              </Link>
              <Link to="/academico/perfiles" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl text-sm sm:text-base backdrop-blur-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Perfiles académicos
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Sello de acreditación (después de los CTAs). TEXTO DE EJEMPLO para el
                demo (plantilla): reemplazar por el estado/ente real y su logo oficial. */}
            <motion.div variants={itemVariants} className="mt-6 flex justify-center md:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-3 py-1.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                Acreditada por SINEACE
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Accesos del pie del hero: Libro de Reclamaciones + Bolsa de trabajo */}
        <div className="absolute inset-x-0 bottom-4 md:bottom-8 z-10 pointer-events-none">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 flex-wrap">
              {/* Libro de Reclamaciones (oficial) */}
              <a
                href={libroReclamacionesUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Libro de Reclamaciones (abre en pestaña nueva)"
                className="pointer-events-auto inline-block rounded transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <img src={libroReclamaciones} alt="Libro de Reclamaciones" className="w-20 md:w-32 h-auto drop-shadow-md" />
              </a>

              {/* Bolsa de trabajo (UNT · USE) */}
              <a
                href="https://use-dpa.unitru.edu.pe/bolsadetrabajo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bolsa de trabajo (abre en pestaña nueva)"
                className="pointer-events-auto inline-block rounded transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <img src={useLogo} alt="Bolsa de trabajo UNT" className="h-[54px] md:h-[87px] w-auto drop-shadow-md" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CIFRAS — Franja de impacto oscura
          ══════════════════════════════════════════ */}
      <section ref={cifrasRef} className="bg-primary py-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-3">
            {cifras.map((cifra, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`py-5 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 text-center border-white/10 ${idx < 2 ? 'border-r' : ''}`}
              >
                <div className="text-base sm:text-2xl md:text-4xl font-display font-black mb-1 text-gold">
                  {cifra.numero}
                </div>
                <p className="text-white font-bold text-xs leading-tight sm:text-sm md:text-base">{cifra.etiqueta}</p>
                <p className="hidden sm:block text-white/60 text-xs mt-0.5">{cifra.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIENVENIDA / VIDEO
          ══════════════════════════════════════════ */}

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna de Texto */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <SectionTitle title="Bienvenida de la **Decana**" />

              <div className="text-gray-700 font-body space-y-4 leading-relaxed">
                <p>
                  «Bienvenidos a la Escuela Profesional de Ingeniería Ambiental. Formamos
                  ingenieros capaces de prevenir y resolver los problemas ambientales con
                  rigor científico y compromiso con la sostenibilidad. Te invitamos a conocer
                  un programa que cuida cada detalle de tu formación.»
                </p>
                <footer className="text-sm text-gray-600 not-italic font-semibold">
                  Karen Valderrama, Decana de la Escuela Profesional de Ingeniería Ambiental
                </footer>
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
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://www.youtube-nocookie.com/embed/6mmdvUizSbk?start=7"
                title="Video Institucional Ingeniería Ambiental UNT"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>
      {/* ─── Sección Noticias y Actualidad ─── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <SectionTitle title="Noticias y **Actualidad**" subtitle="Últimas novedades, eventos y comunicados de la Escuela." />
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors whitespace-nowrap shrink-0"
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
                    <div className="h-1.5 bg-primary w-full" />
                    {/* Imagen de la noticia */}
                    <div className="h-48 w-full overflow-hidden shrink-0">
                      <img
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${noticia.categoriaColor}`}>
                          {noticia.categoria}
                        </span>
                        <span className="flex items-center gap-1 text-gray-500 text-xs ml-auto">
                          <Calendar className="w-3 h-3" />
                          {noticia.fechaFormateada}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-primary text-base leading-snug mb-3 group-hover:text-gold transition-colors flex-1">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {noticia.resumen}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 text-gold text-sm font-bold group-hover:gap-2 transition-[gap]">
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



      {/* ══════════════════════════════════════════
          ACCESOS RÁPIDOS — Cards premium numeradas
          ══════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Todo lo que necesitas **saber**"
            subtitle="Accede directo a la información más importante de nuestra escuela."
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
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
                    <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-100 hover:border-gold/40 transition duration-300 hover:shadow-[0_12px_40px_rgba(230,173,9,0.15)] flex flex-col">
                      
                      {/* Imagen de Portada */}
                      <div className="h-32 w-full relative overflow-hidden shrink-0">
                        <div className="absolute inset-0 bg-primary/40 z-10 group-hover:bg-primary/20 transition-colors duration-500" />
                        <img
                          src={acceso.imagen}
                          alt={acceso.titulo}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Ícono de categoría */}
                        <div className="absolute bottom-2 left-2 z-20 w-9 h-9 rounded-lg bg-gold flex items-center justify-center shadow-md">
                          <IconComp className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="p-6 flex flex-col flex-1 relative bg-white">
                        <h3 className="text-lg font-display font-black text-primary mb-2 leading-tight group-hover:text-gold transition-colors">
                          {acceso.titulo}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed flex-1">
                          {acceso.descripcion}
                        </p>

                        {/* CTA flecha */}
                        <div className="mt-4 flex items-center gap-1 text-gold text-xs font-bold group-hover:gap-2 transition-[gap]">
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle
            title="Nuestros **Ambientes**"
            subtitle="Espacios diseñados para tu desarrollo práctico y tecnológico."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            
            {/* Módulo de Estimulación Temprana */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-primary h-[380px] md:h-[450px] flex items-end shadow-xl"
            >
              <div className="absolute inset-0">
                <img
                  src="https://picsum.photos/seed/laboratorio-calidad-agua/800/600"
                  alt="Laboratorio de Calidad de Agua"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                <div className="absolute inset-0 bg-primary/25" />
              </div>
              <div className="relative z-10 p-8 md:p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="inline-block px-3.5 py-1.5 bg-gold text-primary text-[10px] font-black tracking-widest uppercase rounded-md mb-4 shadow-lg">
                  Laboratorio
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-tight">
                  Laboratorio de Calidad de Agua
                </h3>
                <div className="w-24 h-1 bg-gold mb-4 origin-left scale-x-50 transition-transform duration-500 group-hover:scale-x-100"></div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                  Espacio equipado con instrumentación para el análisis físico, químico y biológico del agua, base para el monitoreo y tratamiento de los recursos hídricos.
                </p>
              </div>
            </motion.div>

            {/* Centro de Cómputo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-primary h-[380px] md:h-[450px] flex items-end shadow-xl"
            >
              <div className="absolute inset-0">
                <img
                  src="https://picsum.photos/seed/monitoreo-calidad-aire/800/600"
                  alt="Monitoreo de Calidad del Aire"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                <div className="absolute inset-0 bg-primary/25" />
              </div>
              <div className="relative z-10 p-8 md:p-10 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
                <span className="inline-block px-3.5 py-1.5 bg-gold text-primary text-[10px] font-black tracking-widest uppercase rounded-md mb-4 shadow-lg">
                  Laboratorio
                </span>
                <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-3 leading-tight">
                  Monitoreo de<br/>Calidad del Aire
                </h3>
                <div className="w-24 h-1 bg-gold mb-4 origin-left scale-x-50 transition-transform duration-500 group-hover:scale-x-100"></div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-lg">
                  Laboratorio con equipos para medir material particulado y gases contaminantes, donde los estudiantes desarrollan competencias en gestión de la calidad del aire.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
}