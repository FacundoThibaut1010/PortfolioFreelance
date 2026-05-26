import { motion } from 'framer-motion';
import { ExternalLink, Layout, LayoutGrid, ShoppingCart, Check } from 'lucide-react';

const SERVICES = [
  {
    icon: Layout,
    tag: 'SITIO WEB',
    name: 'Landing Page',
    price: '130.000',
    tagline: 'Para captar clientes con un solo objetivo.',
    accent: '#f43f5e',
    features: [
      'Diseño UI/UX exclusivo',
      'Desarrollo con código propio',
      'Deploy incluido en Vercel',
      '100% adaptada a mobile',
      'Formulario de contacto',
    ],
  },
  {
    icon: LayoutGrid,
    tag: 'SITIO WEB',
    name: 'Multi-sección',
    price: '160.000',
    tagline: 'Para mostrar todo tu negocio en un lugar.',
    accent: '#a855f7',
    popular: true,
    features: [
      'Todo lo de Landing',
      'Múltiples secciones',
      'Galería o portfolio',
      'Animaciones premium',
      'SEO optimizado',
    ],
  },
  {
    icon: ShoppingCart,
    tag: 'E-COMMERCE',
    name: 'Tienda Online',
    price: '340.000',
    tagline: 'Vendé tus productos las 24hs.',
    accent: '#06b6d4',
    features: [
      'Diseño UI/UX exclusivo',
      'Carrito de compras',
      'Pasarela de pago (MP)',
      'Panel de administración',
      'Gestión de stock',
    ],
  },
];

export const Services = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  return (
    <section id="servicios" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0a0b14' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-white/30 font-semibold text-sm tracking-widest uppercase">Servicios</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            ¿Qué necesitás?
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Tres opciones claras, precio incluido. Sin sorpresas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl flex flex-col overflow-hidden"
                style={{
                  background: '#111220',
                  border: svc.popular ? `1px solid ${svc.accent}` : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: svc.popular ? `0 0 40px ${svc.accent}22` : 'none',
                }}
              >
                {/* Top accent bar */}
                <div className="h-[3px] w-full" style={{ background: svc.accent }} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Tags row */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase"
                      style={{ background: `${svc.accent}22`, color: svc.accent }}>
                      {svc.tag}
                    </span>
                    {svc.popular && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase"
                        style={{ background: svc.accent, color: '#fff' }}>
                        POPULAR
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-white/40 text-lg font-bold">$</span>
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{svc.price}</span>
                    <span className="text-white/30 text-sm font-semibold">ARS</span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-1">{svc.name}</h3>
                  <p className="text-white/35 text-sm mb-6">{svc.tagline}</p>

                  {/* Divider */}
                  <div className="h-px w-full mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-white/60">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${svc.accent}20`, color: svc.accent }}>
                          <Check size={9} strokeWidth={3} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://wa.me/541171247355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-5 rounded-xl transition-all active:scale-95"
                    style={{
                      background: svc.popular ? svc.accent : 'rgba(255,255,255,0.06)',
                      border: svc.popular ? 'none' : `1px solid rgba(255,255,255,0.1)`,
                    }}
                  >
                    EMPEZAR <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/25 text-sm mt-10"
        >
          ¿Tenés algo diferente?{' '}
          <button onClick={() => scrollTo('contacto')} className="font-semibold hover:text-white transition-colors"
            style={{ color: '#a855f7' }}>
            Hablemos y lo cotizamos.
          </button>
        </motion.p>

      </div>
    </section>
  );
};
