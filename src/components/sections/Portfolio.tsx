import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, Heart } from 'lucide-react';

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
  return (
    <section id="trabajos" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0d0e1a' }}>
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
          <p className="text-white/40 text-lg max-w-xl mx-auto">Sitios online generando resultados.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((proj, i) => {
            const TypeIcon = proj.typeIcon;
            return (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-2xl overflow-hidden border"
                style={{ background: '#111220', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                {/* Top accent */}
                <div className="h-[2px]" style={{ background: proj.accent }} />

                {/* Image */}
                <div className="relative overflow-hidden h-52 sm:h-60">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold border"
                    style={{ background: 'rgba(10,11,20,0.85)', borderColor: `${proj.accent}40`, color: proj.accent }}>
                    <TypeIcon size={11} />
                    {proj.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{proj.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{proj.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-full border"
                        style={{ background: `${proj.accent}10`, borderColor: `${proj.accent}25`, color: proj.accent }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-colors hover:opacity-80"
                    style={{ color: proj.accent }}
                  >
                    Ver sitio en vivo <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
