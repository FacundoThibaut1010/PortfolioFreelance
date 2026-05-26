import { motion } from 'framer-motion';
import { ArrowRight, Layout, LayoutGrid, ShoppingCart, Check } from 'lucide-react';

const SERVICES = [
  {
    icon: Layout,
    name: 'Landing Page',
    price: '$130.000',
    tagline: 'Ideal para captar clientes con un solo objetivo.',
    color: 'blue',
    features: [
      'Diseño a medida y responsivo',
      'Sección de servicios o producto',
      'Formulario de contacto',
      'Botón de WhatsApp',
      'Optimizado para Google',
    ],
  },
  {
    icon: LayoutGrid,
    name: 'Sitio Multi-sección',
    price: '$160.000',
    tagline: 'Para mostrar todo tu negocio en un solo lugar.',
    color: 'indigo',
    popular: true,
    features: [
      'Todo lo de Landing Page',
      'Múltiples secciones (Nosotros, Servicios, Galería…)',
      'Navegación interna suave',
      'Sección de testimonios',
      'Integración con redes sociales',
    ],
  },
  {
    icon: ShoppingCart,
    name: 'Tienda Online',
    price: '$340.000',
    tagline: 'Vendé tus productos las 24hs con pagos integrados.',
    color: 'violet',
    features: [
      'Catálogo de productos',
      'Carrito de compras',
      'Pagos con Mercado Pago',
      'Panel de administración',
      'Stock y pedidos incluidos',
    ],
  },
];

const colorMap: Record<string, { bg: string; icon: string; text: string; check: string; btn: string }> = {
  blue:   { bg: 'bg-blue-50',   icon: 'bg-blue-100 text-blue-600',   text: 'text-blue-600',   check: 'bg-blue-50 text-blue-500',   btn: 'bg-blue-600 hover:bg-blue-700' },
  indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-100 text-indigo-600', text: 'text-indigo-600', check: 'bg-indigo-50 text-indigo-500', btn: 'bg-indigo-600 hover:bg-indigo-700' },
  violet: { bg: 'bg-violet-50', icon: 'bg-violet-100 text-violet-600', text: 'text-violet-600', check: 'bg-violet-50 text-violet-500', btn: 'bg-violet-600 hover:bg-violet-700' },
};

export const Services = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  return (
    <section id="servicios" className="py-20 sm:py-28 px-5 sm:px-8"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #ffffff 100%)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Servicios</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
            ¿Qué necesitás?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Tres opciones claras, con precio incluido. Sin sorpresas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((svc, i) => {
            const c = colorMap[svc.color];
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl border-2 p-7 flex flex-col ${
                  svc.popular
                    ? 'border-indigo-300 shadow-xl shadow-indigo-100 bg-gradient-to-b from-indigo-50 to-white'
                    : 'border-slate-100 shadow-sm hover:shadow-md bg-white'
                } transition-shadow`}
              >
                {svc.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[11px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm">
                    Más popular
                  </div>
                )}

                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${c.icon}`}>
                  <Icon size={20} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{svc.name}</h3>
                <p className="text-slate-500 text-sm mb-5">{svc.tagline}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-extrabold text-slate-900">{svc.price}</span>
                  <span className="text-slate-400 text-sm">ARS</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${c.check}`}>
                        <Check size={9} strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/541171247355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 ${c.btn} text-white font-semibold text-sm py-3.5 px-5 rounded-xl transition-colors`}
                >
                  Lo quiero <ArrowRight size={15} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-sm mt-10"
        >
          ¿Tenés algo diferente en mente?{' '}
          <button onClick={() => scrollTo('contacto')} className="text-blue-600 font-semibold hover:underline">
            Hablemos y lo cotizamos.
          </button>
        </motion.p>
      </div>
    </section>
  );
};
