import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingCart, Heart, X, Eye } from 'lucide-react';

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
  const [selected, setSelected] = useState<number | null>(null);
  const proj = selected !== null ? PROJECTS[selected] : null;

  return (
    <section id="trabajos" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#161728' }}>
      <div className="max-w-6xl mx-auto">

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
          <p className="text-white/40 text-lg max-w-xl mx-auto">Sitios online generando resultados. Hacé click para ver más.</p>
        </motion.div>

        {/* Image grid — clickable */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => {
            const TypeIcon = p.typeIcon;
            return (
              <motion.button
                key={p.name}
                onClick={() => setSelected(i)}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden border text-left"
                style={{
                  background: '#111220',
                  borderColor: 'rgba(255,255,255,0.06)',
                  boxShadow: '0 0 0px transparent',
                }}
              >
                {/* Top accent */}
                <div className="h-[2px]" style={{ background: p.accent }} />

                {/* Image */}
                <div className="relative overflow-hidden h-56 sm:h-64">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                  />

                  {/* Bottom gradient + name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5">
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1"
                          style={{ background: `${p.accent}20`, borderColor: `${p.accent}40`, color: p.accent }}
                        >
                          <TypeIcon size={10} /> {p.type}
                        </span>
                      </div>
                      <p className="text-white font-bold text-lg leading-tight">{p.name}</p>
                    </div>
                  </div>

                  {/* Eye icon — hover hint */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center border border-white/20">
                      <Eye size={15} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {proj && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/70"
              style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />

            {/* Modal panel */}
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelected(null)}
            >
              <motion.div
                key="modal"
                className="relative w-full max-w-lg rounded-2xl overflow-hidden border"
                style={{ background: '#111220', borderColor: `${proj.accent}40` }}
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={e => e.stopPropagation()}
              >
                {/* Top accent */}
                <div className="h-[2px]" style={{ background: proj.accent }} />

                {/* Close btn */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(0,0,0,0.55)', color: 'rgba(255,255,255,0.7)' }}
                >
                  <X size={15} />
                </button>

                {/* Project image */}
                <div className="h-52 sm:h-60 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Type badge */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full border flex items-center gap-1"
                      style={{ background: `${proj.accent}15`, borderColor: `${proj.accent}35`, color: proj.accent }}
                    >
                      {proj.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{proj.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{ background: `${proj.accent}10`, borderColor: `${proj.accent}25`, color: proj.accent }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
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
