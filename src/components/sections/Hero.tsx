import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const BADGES = [
  'Entrega rápida',
  'Diseño personalizado',
  'Soporte incluido',
];

export const Hero = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-16 pb-12 px-5 sm:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 relative overflow-hidden">

      {/* Subtle background blobs */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[350px] h-[350px] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto text-center relative z-10">

        {/* Availability tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Disponible para nuevos proyectos
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6"
        >
          Tu negocio,{' '}
          <span className="text-blue-600">online</span>{' '}
          y listo para{' '}
          <span className="relative inline-block">
            vender.
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 9C50 3 100 1 150 3C200 5 250 7 298 4" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" opacity="0.35"/>
            </svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Diseño y desarrollo sitios web profesionales para emprendedores y negocios de Argentina.
          Rápido, personalizado y listo para atraer clientes.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
        >
          {BADGES.map(b => (
            <div key={b} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <Check size={11} className="text-green-600" strokeWidth={3} />
              </div>
              {b}
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/541171247355"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-base px-7 py-4 rounded-2xl transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hablemos por WhatsApp
          </a>

          <button
            onClick={() => scrollTo('servicios')}
            className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-semibold text-base px-6 py-4 rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all w-full sm:w-auto justify-center"
          >
            Ver servicios <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-400"
        >
          <img src="/projets/avatarFacu.jpeg" alt="Facundo" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" />
          <span>Proyectos reales entregados · <strong className="text-slate-600">Buenos Aires, Argentina</strong></span>
        </motion.div>

      </div>
    </section>
  );
};
