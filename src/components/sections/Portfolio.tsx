import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingCart, Heart, X } from 'lucide-react';

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

  // Touch handling (mobile expand vs open)
  const touchTimer    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const longPressed   = useRef(false);
  const touchHandled  = useRef(false);

  useEffect(() => {
    const check = () => { setIsMobile(window.innerWidth < 768); setWinW(window.innerWidth); };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const proj = selected !== null ? PROJECTS[selected] : null;

  // Responsive accordion widths (2 items)
  const pad  = 40;
  const gap  = 16;
  const area = winW - pad - gap;
  const expW = Math.max(180, Math.floor(area * 0.68));
  const colW = area - expW;

  return (
    <section
      id="trabajos"
      className="py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
      style={{ background: '#161728' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-white/30 font-semibold text-sm tracking-widest uppercase">Trabajos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Proyectos reales
          </h2>
          <p className="text-white/40 text-base">
            {isMobile ? 'Tocá una imagen para ver más.' : 'Pasá el cursor encima y hacé click para ver más.'}
          </p>
        </motion.div>

        {/* ── Accordion thumbnails ── */}
        <div className="flex items-end justify-center gap-4">
          {PROJECTS.map((p, i) => {
            const isHov = hovered === i;
            const desktopW = isHov ? 400 : 150;
            const desktopH = isHov ? 290 : 150;
            const mobileW  = isHov ? expW : colW;
            const mobileH  = isHov ? Math.floor(expW * 0.68) : Math.floor(colW * 0.68 + 50);

            return (
              <motion.button
                key={p.name}
                animate={{
                  width:  isMobile ? mobileW  : desktopW,
                  height: isMobile ? mobileH  : desktopH,
                }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                onMouseEnter={() => !isMobile && setHovered(i)}
                onMouseLeave={() => !isMobile && setHovered(null)}
                onTouchStart={() => {
                  longPressed.current = false;
                  if (touchTimer.current) clearTimeout(touchTimer.current);
                  touchTimer.current = setTimeout(() => {
                    longPressed.current = true;
                    setHovered(v => v === i ? null : i);
                  }, 420);
                }}
                onTouchMove={() => {
                  if (touchTimer.current) { clearTimeout(touchTimer.current); touchTimer.current = null; }
                }}
                onTouchEnd={() => {
                  if (touchTimer.current) { clearTimeout(touchTimer.current); touchTimer.current = null; }
                  touchHandled.current = true;
                  if (!longPressed.current) setSelected(i);
                  longPressed.current = false;
                  setTimeout(() => { touchHandled.current = false; }, 600);
                }}
                onClick={() => { if (!touchHandled.current) setSelected(i); }}
                className="relative overflow-hidden rounded-2xl shrink-0 cursor-pointer"
                style={{ boxShadow: isHov ? `0 0 0 2px ${p.accent}80` : '0 0 0 1px rgba(255,255,255,0.06)' }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  style={{ transition: 'filter 0.3s', filter: isHov ? 'brightness(1)' : 'brightness(0.6)' }}
                />
                {/* Gradient overlay on hover */}
                <AnimatePresence>
                  {isHov && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
                    />
                  )}
                </AnimatePresence>
                {/* Type badge on hover */}
                <AnimatePresence>
                  {isHov && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-3 left-3"
                    >
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1"
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
        <div className="w-full text-center overflow-hidden pointer-events-none" style={{ marginTop: '0.25em' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={hovered ?? 'default'}
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

      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {proj && (
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
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setSelected(null)}>
              <motion.div
                key="modal"
                className="relative w-full max-w-lg rounded-2xl overflow-hidden border"
                style={{ background: '#111220', borderColor: `${proj.accent}40` }}
                initial={{ scale: 0.88, opacity: 0, y: 28 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="h-[2px]" style={{ background: proj.accent }} />

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.7)' }}
                >
                  <X size={15} />
                </button>

                <div className="h-52 sm:h-60 overflow-hidden">
                  <img src={proj.image} alt={proj.name} className="w-full h-full object-cover" />
                </div>

                <div className="p-6">
                  <span
                    className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3"
                    style={{ background: `${proj.accent}15`, borderColor: `${proj.accent}35`, color: proj.accent }}
                  >
                    {proj.type}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{proj.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{ background: `${proj.accent}10`, borderColor: `${proj.accent}25`, color: proj.accent }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl w-full"
                    style={{ background: `linear-gradient(135deg, ${proj.accent}, ${proj.accent}cc)`, boxShadow: `0 0 24px ${proj.accent}40` }}
                    whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${proj.accent}55` }}
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
