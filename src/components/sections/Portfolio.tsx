import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ShoppingCart, Heart, ChevronDown } from 'lucide-react';

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
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="trabajos" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0d0e1a' }}>
      <div className="max-w-4xl mx-auto">

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
          <p className="text-white/40 text-lg max-w-xl mx-auto">Sitios online generando resultados.</p>
        </motion.div>

        <div className="space-y-3">
          {PROJECTS.map((proj, i) => {
            const TypeIcon = proj.typeIcon;
            const isOpen = open === i;

            return (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-2xl overflow-hidden border"
                style={{
                  background: '#111220',
                  borderColor: isOpen ? `${proj.accent}50` : 'rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s',
                }}
              >
                {/* Clickable header row */}
                <motion.button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 px-6 py-5 text-left group"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
                >
                  {/* Number */}
                  <span
                    className="text-4xl font-black font-mono leading-none shrink-0 w-10 select-none transition-colors"
                    style={{ color: isOpen ? proj.accent : 'rgba(255,255,255,0.08)' }}
                  >
                    0{i + 1}
                  </span>

                  {/* Name */}
                  <h3
                    className="flex-1 text-lg sm:text-xl font-bold transition-colors"
                    style={{ color: isOpen ? proj.accent : 'rgba(255,255,255,0.85)' }}
                  >
                    {proj.name}
                  </h3>

                  {/* Type badge */}
                  <div
                    className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold border shrink-0"
                    style={{
                      background: `${proj.accent}15`,
                      borderColor: `${proj.accent}35`,
                      color: proj.accent,
                    }}
                  >
                    <TypeIcon size={11} />
                    {proj.type}
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: isOpen ? `${proj.accent}20` : 'rgba(255,255,255,0.05)',
                      color: isOpen ? proj.accent : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6" style={{ borderTop: `1px solid rgba(255,255,255,0.05)` }}>
                        <div className="flex flex-col sm:flex-row gap-6 pt-5">
                          {/* Image */}
                          <div className="sm:w-56 shrink-0 rounded-xl overflow-hidden h-36 sm:h-auto">
                            <img
                              src={proj.image}
                              alt={proj.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex flex-col gap-4 flex-1">
                            <p className="text-white/45 text-sm leading-relaxed">{proj.desc}</p>

                            <div className="flex flex-wrap gap-2">
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
                              className="self-start inline-flex items-center gap-2 font-bold text-sm py-2.5 px-5 rounded-xl text-white"
                              style={{ background: `${proj.accent}20`, border: `1px solid ${proj.accent}40`, color: proj.accent }}
                              whileHover={{ scale: 1.04, background: `${proj.accent}30` }}
                              whileTap={{ scale: 0.97 }}
                            >
                              Ver sitio en vivo <ExternalLink size={13} />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
