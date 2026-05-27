import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingCart, Heart, X } from 'lucide-react';

const GRID_BG = 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)';

const PROJECTS = [
  {
    name: 'Newave Suplementos',
    type: 'Tienda Online',
    typeIcon: ShoppingCart,
    desc: 'E-commerce completo para una marca de suplementos. Catálogo de productos, carrito y checkout seguro con Mercado Pago.',
    url: 'https://newave-suplementos.vercel.app',
    image: '/projets/newave.png',
    tags: ['React', 'TypeScript', 'Mercado Pago'],
    accent: '#06b6d4',
  },
  {
    name: 'Invitación Digital',
    type: 'Landing Page',
    typeIcon: Heart,
    desc: 'Invitación de boda digital con cuenta regresiva, galería de fotos, mapa del venue y confirmación de asistencia.',
    url: 'https://invitacion-muestra.vercel.app',
    image: '/projets/invitacionDigital.png',
    tags: ['React', 'Framer Motion', 'Vite'],
    accent: '#a855f7',
  },
];

export const Portfolio = () => {
  const [hovered, setHovered]   = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [winW, setWinW]         = useState(375);

  useEffect(() => {
    const check = () => { setIsMobile(window.innerWidth < 768); setWinW(window.innerWidth); };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const proj = selected !== null ? PROJECTS[selected] : null;

  // Responsive accordion widths (2 items, 16px gap, 40px padding)
  const area = winW - 40 - 16;
  const expW = Math.max(180, Math.floor(area * 0.68));
  const colW = area - expW;

  // Mobile: first tap expands, second tap on same card opens modal
  const handleMobileTap = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hovered === i) {
      setSelected(i); // already expanded → open modal
    } else {
      setHovered(i);  // expand first
    }
  };

  const proj_modal = selected !== null ? PROJECTS[selected] : null;

  return (
    <section
      id="trabajos"
      className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
      style={{ background: '#07080f' }}
      // Tap outside card on mobile collapses the expanded one
      onClick={() => isMobile && setHovered(null)}
    >
      {/* Background: same as Hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: GRID_BG, backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Accordion thumbnails ── */}
        <div className="flex items-end justify-center gap-4">
          {PROJECTS.map((p, i) => {
            const isHov = hovered === i;

            // Desktop sizes
            const dW = isHov ? 400 : 150;
            const dH = isHov ? 290 : 150;
            // Mobile sizes
            const mW = isHov ? expW : colW;
            const mH = isHov ? Math.floor(expW * 0.68) : Math.max(100, Math.floor(colW * 0.85));

            return (
              <motion.button
                key={p.name}
                animate={{
                  width:  isMobile ? mW : dW,
                  height: isMobile ? mH : dH,
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                // Desktop
                onMouseEnter={() => !isMobile && setHovered(i)}
                onMouseLeave={() => !isMobile && setHovered(null)}
                onClick={isMobile
                  ? (e) => handleMobileTap(i, e)
                  : () => setSelected(i)
                }
                className="relative overflow-hidden rounded-2xl shrink-0 cursor-pointer"
                style={{
                  boxShadow: isHov ? `0 0 0 2px ${p.accent}80, 0 20px 60px ${p.accent}25` : '0 0 0 1px rgba(255,255,255,0.07)',
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none transition-all duration-500"
                  style={{ filter: isHov ? 'brightness(1)' : 'brightness(0.5)' }}
                />

                {/* Gradient + badge on hover */}
                <AnimatePresence>
                  {isHov && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col justify-end p-4"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }}
                    >
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border w-fit flex items-center gap-1"
                        style={{ background: `${p.accent}22`, borderColor: `${p.accent}50`, color: p.accent }}
                      >
                        {p.type}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* ── Giant label ── */}
        <div
          className="w-full text-center overflow-hidden pointer-events-none"
          style={{ marginTop: isMobile ? '0.35em' : '0.2em' }}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={hovered ?? 'idle'}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -36 }}
              transition={{ duration: 0.2 }}
              className="font-black tracking-tighter leading-[0.88] select-none break-words uppercase"
              style={{
                fontSize: 'clamp(2.8rem, 10vw, 11rem)',
                color: hovered !== null ? '#f97316' : 'rgba(255,255,255,0.04)',
              }}
            >
              {hovered !== null ? PROJECTS[hovered].name : 'PROYECTOS'}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Mobile hint */}
        {isMobile && hovered === null && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/20 text-xs mt-4 tracking-wide"
          >
            Tocá una imagen para ver · Tocá de nuevo para abrir
          </motion.p>
        )}

      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {proj_modal && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/75"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                key="modal"
                className="relative w-full max-w-lg rounded-2xl overflow-hidden border"
                style={{ background: '#111220', borderColor: `${proj_modal.accent}40` }}
                initial={{ scale: 0.88, opacity: 0, y: 28 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="h-[2px]" style={{ background: proj_modal.accent }} />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.7)' }}
                >
                  <X size={15} />
                </button>

                <div className="h-52 sm:h-60 overflow-hidden">
                  <img src={proj_modal.image} alt={proj_modal.name} className="w-full h-full object-cover" />
                </div>

                <div className="p-6">
                  <span
                    className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3"
                    style={{ background: `${proj_modal.accent}15`, borderColor: `${proj_modal.accent}35`, color: proj_modal.accent }}
                  >
                    {proj_modal.type}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2">{proj_modal.name}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{proj_modal.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj_modal.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{ background: `${proj_modal.accent}10`, borderColor: `${proj_modal.accent}25`, color: proj_modal.accent }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={proj_modal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl w-full"
                    style={{ background: `linear-gradient(135deg, ${proj_modal.accent}, ${proj_modal.accent}cc)`, boxShadow: `0 0 24px ${proj_modal.accent}40` }}
                    whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${proj_modal.accent}55` }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Ver sitio en vivo <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
