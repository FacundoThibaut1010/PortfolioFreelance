import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingCart, Heart, X } from 'lucide-react';
import type { T } from '../../i18n';

const GRID_BG = 'linear-gradient(rgba(var(--rgb-fg),0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--rgb-fg),0.05) 1px, transparent 1px)';

const PROJECT_CONFIG = [
  { url: 'https://newave-suplementos.vercel.app',  image: '/projets/newave.png',            tags: ['React', 'TypeScript', 'Mercado Pago'], accent: '#06b6d4', typeIcon: ShoppingCart },
  { url: 'https://invitacion-muestra.vercel.app',  image: '/projets/invitacionDigital.png', tags: ['React', 'Framer Motion', 'Vite'],      accent: '#a855f7', typeIcon: Heart },
];

export const Portfolio = ({ t }: { t: T }) => {
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

  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  const area = winW - 40 - 16;
  const expW = Math.max(180, Math.floor(area * 0.68));
  const colW = area - expW;

  const handleMobileTap = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hovered === i) setSelected(i);
    else setHovered(i);
  };

  const projects = PROJECT_CONFIG.map((cfg, i) => ({
    ...cfg,
    ...(t.port_projects as { name: string; type: string; desc: string }[])[i],
  }));

  const proj = selected !== null ? projects[selected] : null;

  return (
    <section
      id="trabajos"
      className="relative py-20 sm:py-28 px-5 sm:px-8 overflow-hidden"
      style={{ background: 'var(--bg-0)' }}
      onClick={() => isMobile && setHovered(null)}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 5 }} />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: GRID_BG, backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-end justify-center gap-4">
          {projects.map((p, i) => {
            const isHov = hovered === i;
            const dW = isHov ? 400 : 150;
            const dH = isHov ? 290 : 150;
            const mW = isHov ? expW : colW;
            const mH = isHov ? Math.floor(expW * 0.68) : Math.max(100, Math.floor(colW * 0.85));

            return (
              <motion.button
                key={p.name}
                animate={{ width: isMobile ? mW : dW, height: isMobile ? mH : dH }}
                transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                onMouseEnter={() => !isMobile && setHovered(i)}
                onMouseLeave={() => !isMobile && setHovered(null)}
                onClick={isMobile ? (e) => handleMobileTap(i, e) : () => setSelected(i)}
                className="relative overflow-hidden rounded-2xl shrink-0 cursor-pointer"
                style={{ boxShadow: isHov ? `0 0 0 2px ${p.accent}80, 0 20px 60px ${p.accent}25` : `0 0 0 1px ${fg(0.07)}` }}
              >
                <img src={p.image} alt={p.name} draggable={false}
                  className="w-full h-full object-cover pointer-events-none select-none transition-all duration-500"
                  style={{ filter: isHov ? 'brightness(1)' : 'brightness(0.5)' }} />
                <AnimatePresence>
                  {isHov && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col justify-end p-4"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }}>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border w-fit"
                        style={{ background: `${p.accent}22`, borderColor: `${p.accent}50`, color: p.accent }}>
                        {p.type}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Giant label */}
        <div className="w-full text-center overflow-hidden pointer-events-none"
          style={{ marginTop: isMobile ? '0.35em' : '0.2em' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={hovered ?? 'idle'}
              initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -36 }}
              transition={{ duration: 0.2 }}
              className="font-black tracking-tighter leading-[0.88] select-none break-words uppercase"
              style={{ fontSize: 'clamp(2.8rem, 10vw, 11rem)', color: hovered !== null ? '#f97316' : fg(0.04) }}
            >
              {hovered !== null ? projects[hovered].name : t.port_label}
            </motion.p>
          </AnimatePresence>
        </div>

        {isMobile && hovered === null && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center text-xs mt-4 tracking-wide" style={{ color: fg(0.2) }}>
            {t.port_hint_mobile}
          </motion.p>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {proj && (
          <>
            <motion.div key="bd" className="fixed inset-0 z-50 bg-black/75"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelected(null)} />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelected(null)}>
              <motion.div key="modal" className="relative w-full max-w-lg rounded-2xl overflow-hidden border"
                style={{ background: 'var(--bg-3)', borderColor: `${proj.accent}40` }}
                initial={{ scale: 0.88, opacity: 0, y: 28 }} animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={e => e.stopPropagation()}>
                <div className="h-[2px]" style={{ background: proj.accent }} />
                <button onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.7)' }}>
                  <X size={15} />
                </button>
                <div className="h-52 sm:h-60 overflow-hidden">
                  <img src={proj.image} alt={proj.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-block text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3"
                    style={{ background: `${proj.accent}15`, borderColor: `${proj.accent}35`, color: proj.accent }}>
                    {proj.type}
                  </span>
                  <h3 className="text-xl font-bold mb-2" style={{ color: fg(0.92) }}>{proj.name}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: fg(0.45) }}>{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{ background: `${proj.accent}10`, borderColor: `${proj.accent}25`, color: proj.accent }}>{tag}</span>
                    ))}
                  </div>
                  <motion.a href={proj.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl w-full"
                    style={{ background: `linear-gradient(135deg, ${proj.accent}, ${proj.accent}cc)`, boxShadow: `0 0 24px ${proj.accent}40` }}
                    whileHover={{ scale: 1.03, boxShadow: `0 8px 30px ${proj.accent}55` }}
                    whileTap={{ scale: 0.97 }}>
                    {t.port_view} <ExternalLink size={14} />
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
