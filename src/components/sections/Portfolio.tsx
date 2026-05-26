import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, Heart } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Newave Suplementos',
    type: 'Tienda Online',
    typeIcon: ShoppingCart,
    desc: 'E-commerce completo para una marca de suplementos. Catálogo de productos, carrito de compras y checkout seguro con Mercado Pago.',
    url: 'https://newave-suplementos.vercel.app',
    image: '/projets/newave.png',
    tags: ['React', 'TypeScript', 'Mercado Pago'],
    color: 'blue',
  },
  {
    name: 'Invitación Digital',
    type: 'Landing Page',
    typeIcon: Heart,
    desc: 'Invitación de boda digital con cuenta regresiva, galería de fotos, mapa del venue y confirmación de asistencia en un solo link.',
    url: 'https://invitacion-muestra.vercel.app',
    image: '/projets/invitacionDigital.png',
    tags: ['React', 'Framer Motion', 'Vite'],
    color: 'violet',
  },
];

const tagColor: Record<string, string> = {
  blue:   'bg-blue-50 text-blue-700 border-blue-100',
  violet: 'bg-violet-50 text-violet-700 border-violet-100',
};

export const Portfolio = () => {
  return (
    <section id="trabajos" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Trabajos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Proyectos reales
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Sitios que ya están online y generando resultados.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((proj, i) => {
            const TypeIcon = proj.typeIcon;
            return (
              <motion.div
                key={proj.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56 sm:h-64 bg-slate-100">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Type badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                    <TypeIcon size={12} className="text-blue-600" />
                    {proj.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{proj.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{proj.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map(tag => (
                      <span key={tag} className={`text-xs font-semibold px-3 py-1 rounded-full border ${tagColor[proj.color]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group/link"
                  >
                    Ver sitio en vivo
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
