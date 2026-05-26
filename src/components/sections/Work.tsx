import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Folder, ExternalLink, X } from 'lucide-react';
import { containerVariants, itemVariants } from '../../utils/animations';
import { getProjects } from '../../data/projects';

// Icons that need extra scale inside their container
const TECH_ICON_SCALE: Record<string, string> = {
  'Vite': 'scale-[1.3]',
};

const TECH_ICONS: Record<string, string> = {
  'Java':       '/projets/java-logo-Photoroom.png',
  'HTML':       '/projets/html5_23403-Photoroom.png',
  'CSS':        '/projets/css-icon5555.logowik.com-Photoroom.png',
  'Javascript': '/projets/kisspng-javascript-clip-art-openclipart-logo-number-1713949408965-Photoroom.png',
  'JavaScript': '/projets/kisspng-javascript-clip-art-openclipart-logo-number-1713949408965-Photoroom.png',
  'Spring mvc': '/projets/spring-Photoroom.png',
  'MySql':      '/projets/mysql-6-logo-png-transparent-Photoroom.png',
  'React':      '/projets/react-logo-png_seeklogo-507247-Photoroom.png',
  'React.js':   '/projets/react-logo-png_seeklogo-507247-Photoroom.png',
  'TypeScript': '/projets/png-transparent-angularjs-typescript-javascript-vue-js-others-blue-angle-text-thumbnail-Photoroom.png',
  'Node.js':    '/projets/87-879058_formation-node-js-node-js-logo-vector-Photoroom.png',
  'Angular':    '/projets/java-logo-angular-angularjs-software-testing-template-computer-icons-computer-font-ppt-png-clipart-thumbnail-Photoroom.png',
  'Python':     '/projets/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn-Photoroom.png',
  'MySQL':      '/projets/mysql-6-logo-png-transparent-Photoroom.png',
  'SQLite':        '/projets/sqlite.png',
  'Framer Motion': '/projets/frameMotion.png',
  'Vite':          '/projets/vite.png',
};

export const Work = ({ t, setIsProjectOpen }: { t: any, setIsProjectOpen: (val: boolean) => void }) => {
  const [hoveredIndex, setHoveredIndex]               = useState<number | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile]       = useState(false);
  const [windowWidth, setWindowWidth] = useState(375);
  const detailRef        = useRef<HTMLDivElement>(null);
  const touchTimer       = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressed      = useRef(false);
  const touchHandled     = useRef(false);

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      setWindowWidth(w);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: detailRef,
    offset: ['start start', 'end end'],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const projects        = getProjects(t);

  // Responsive thumbnail sizes — dynamic for any number of projects
  const thumbPad    = 48;               // px-6 * 2
  const thumbGap    = 16;               // gap-4
  const numProjects = projects.length;
  const totalGaps   = thumbGap * (numProjects - 1);
  const thumbsArea  = windowWidth - thumbPad - totalGaps;
  const mThumbExp   = Math.max(140, Math.floor(thumbsArea * 0.60));
  const mThumbNorm  = Math.max(36,  Math.floor((thumbsArea - mThumbExp) / (numProjects - 1)));
  const selectedProject = selectedProjectIndex !== null ? projects[selectedProjectIndex] : null;

  useEffect(() => { setIsProjectOpen(false); }, [setIsProjectOpen]);

  const handleSelect = (i: number) => {
    setSelectedProjectIndex(i);
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  const handleClose = () => {
    setSelectedProjectIndex(null);
    setHoveredIndex(null);
    setTimeout(() => {
      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);
  };

  return (
    <section id="work" className="w-full flex flex-col justify-start pt-16 pb-16 md:pb-32 md:pt-16 px-6 relative z-10">
      <div className="max-w-[85rem] mx-auto w-full">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" className="space-y-16">

          {/* Section header */}
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-mono text-gray-200 font-bold flex items-center gap-4">
            <Folder size={40} className="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]" />
            <span className="text-orange-500 font-bold">$</span>
            {t.work_title}
          </motion.h2>

          <AnimatePresence mode="wait">

            {/* ── THUMBNAIL VIEW ── */}
            {selectedProject === null && (
              <motion.div
                key="thumbnails"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-0"
              >
                <div className="flex items-end justify-center gap-4 z-10 relative">
                  {projects.map((project, i) => {
                    const isHov = hoveredIndex === i;
                    return (
                      <motion.div
                        key={i}
                        className="relative cursor-pointer overflow-hidden rounded-2xl shrink-0 select-none"
                        style={{
                          boxShadow: '0 0 0 1px rgba(255,255,255,0.08)',
                          WebkitTouchCallout: 'none' as any,
                        }}
                        animate={{
                          width:  isHov ? (isMobile ? mThumbExp  : 380) : (isMobile ? mThumbNorm : 145),
                          height: isHov ? (isMobile ? Math.floor(mThumbExp * 0.75) : 280) : (isMobile ? mThumbNorm : 145),
                        }}
                        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onContextMenu={(e) => e.preventDefault()}
                        onTouchStart={() => {
                          longPressed.current = false;
                          if (touchTimer.current) clearTimeout(touchTimer.current);
                          touchTimer.current = setTimeout(() => {
                            longPressed.current = true;
                            setHoveredIndex(i);
                          }, 450);
                        }}
                        onTouchMove={() => {
                          if (touchTimer.current) { clearTimeout(touchTimer.current); touchTimer.current = null; }
                        }}
                        onTouchEnd={() => {
                          if (touchTimer.current) { clearTimeout(touchTimer.current); touchTimer.current = null; }
                          touchHandled.current = true;
                          if (!longPressed.current) handleSelect(i);
                          longPressed.current = false;
                          setTimeout(() => { touchHandled.current = false; }, 600);
                        }}
                        onClick={() => {
                          if (touchHandled.current) return;
                          handleSelect(i);
                        }}
                      >
                        <img src={project.image} alt={project.name} draggable={false} className="w-full h-full object-cover pointer-events-none" />
                        <AnimatePresence>
                          {isHov && (
                            <motion.div
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                            />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Giant label */}
                <div className="w-full text-center overflow-hidden pointer-events-none" style={{ marginTop: isMobile ? '1em' : '-0.15em' }}>
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={hoveredIndex ?? 'default'}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.18 }}
                      className="font-mono font-black tracking-tighter leading-[0.9] select-none break-words"
                      style={{
                        fontSize: 'clamp(2.2rem, 10vw, 14rem)',
                        color: hoveredIndex !== null ? '#f97316' : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      {hoveredIndex !== null ? projects[hoveredIndex].name.toUpperCase() : t.work_big_label}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {/* ── DETAIL VIEW ── */}
            {selectedProject !== null && (
              <motion.div
                key={`detail-${selectedProjectIndex}`}
                ref={detailRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="relative"
              >
                {/* Scroll progress bar — vertical, fixed left */}
                <div className="fixed left-0 top-0 h-screen z-50 w-[3px] bg-gray-900/40">
                  <motion.div className="w-full bg-orange-500 absolute top-0 left-0" style={{ height: progressWidth }} />
                </div>

                {/* Close button — below the EN/ES selector (top-4 right-4 ~36px tall) */}
                <button
                  onClick={handleClose}
                  className="fixed top-20 right-4 sm:right-6 z-[200] flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white hover:border-orange-500 transition-all text-xs font-mono tracking-widest uppercase"
                >
                  <X size={14} /> {t.work_modal_close}
                </button>

                {/* Panel 1 — Thumbnail congelado + texto gigante (igual al hover) */}
                <div className="flex flex-col items-center gap-0 mt-20 sm:mt-6">
                  {/* Thumbnail fijo al tamaño hover — responsive on mobile */}
                  <div
                    className="relative overflow-hidden rounded-2xl w-full"
                    style={{ maxWidth: 380, height: isMobile ? 200 : 280, boxShadow: '0 0 0 2px rgba(249,115,22,0.5), 0 0 30px rgba(249,115,22,0.15)' }}
                  >
                    <img src={selectedProject.image} alt={selectedProject.name} draggable={false} className="w-full h-full object-cover" />
                  </div>

                  {/* Texto gigante naranja — igual al hover state */}
                  <div className="w-full text-center overflow-hidden pointer-events-none" style={{ marginTop: isMobile ? '0.6em' : '-0.15em' }}>
                    <p
                      className="font-mono font-black tracking-tighter leading-[0.9] select-none break-words"
                      style={{ fontSize: 'clamp(2.2rem, 10vw, 14rem)', color: '#f97316' }}
                    >
                      {selectedProject.name.toUpperCase()}
                    </p>
                  </div>

                  <motion.p
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-orange-500/70 font-mono text-sm tracking-widest mt-2"
                  >
                    scroll ↓
                  </motion.p>
                </div>

                {/* Panel 2 — Descripción */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="py-24 space-y-10"
                >
                  <div className="flex items-center">
                    <div className="shrink-0 w-9 h-9 bg-orange-500 flex items-center justify-center font-mono font-black text-black text-sm">1</div>
                    <div className="flex-1 h-px bg-orange-500/50" />
                  </div>
                  <div className="max-w-3xl space-y-6">
                    <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter">{t.work_about_project}</h3>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-mono">{selectedProject.longDesc}</p>
                  </div>
                </motion.div>

                {/* Panel 3 — Stack */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="pb-24 space-y-10"
                >
                  <div className="flex items-center">
                    <div className="shrink-0 w-9 h-9 bg-orange-500 flex items-center justify-center font-mono font-black text-black text-sm">2</div>
                    <div className="flex-1 h-px bg-orange-500/50" />
                    <div className="shrink-0 px-4 h-9 bg-orange-500/10 border border-orange-500/40 flex items-center font-mono font-bold text-orange-500 text-xs tracking-[0.25em] uppercase">
                      Stack
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6">
                    {selectedProject.tech.map((tech: string) => {
                      const src = TECH_ICONS[tech];
                      // tech not in map at all → skip
                      if (src === undefined) return null;
                      // text-only badge (empty string in map)
                      if (src === '') {
                        return (
                          <div key={tech} className="flex flex-col items-center gap-2">
                            <div className="size-20 flex items-center justify-center p-3 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-orange-500/40 transition-colors">
                              <span className="text-orange-500 font-mono font-bold text-[10px] tracking-widest text-center leading-tight uppercase">{tech}</span>
                            </div>
                            <span className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">{tech}</span>
                          </div>
                        );
                      }
                      return (
                        <div key={tech} className="flex flex-col items-center gap-2">
                          <div className="size-20 flex items-center justify-center p-3 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-orange-500/40 transition-colors">
                            <img src={src} alt={tech} className={`w-full h-full object-contain ${TECH_ICON_SCALE[tech] || ''}`} />
                          </div>
                          <span className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">{tech}</span>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-2xl transition-colors text-base"
                  >
                    {t.work_modal_view} <ExternalLink size={20} />
                  </a>
                </motion.div>

              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
