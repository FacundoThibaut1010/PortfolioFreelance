import { motion } from 'framer-motion';
import { Zap, Palette, Target, ArrowRight } from 'lucide-react';

const CARDS = [
  {
    icon: Palette,
    title: 'Diseño a medida',
    desc: 'Sin templates. Tu sitio, hecho desde cero con tu identidad y para tu negocio.',
    color: 'from-blue-500/10 to-indigo-500/10 border-blue-200/60',
    iconColor: 'text-blue-500 bg-blue-100',
  },
  {
    icon: Zap,
    title: 'Entrega rápida',
    desc: 'De la idea al sitio online en 1 a 2 semanas. Sin demoras, sin vueltas.',
    color: 'from-amber-400/10 to-orange-400/10 border-amber-200/60',
    iconColor: 'text-amber-600 bg-amber-100',
  },
  {
    icon: Target,
    title: 'Orientado a vender',
    desc: 'Cada decisión de diseño tiene un objetivo: convertir visitas en clientes.',
    color: 'from-emerald-500/10 to-teal-400/10 border-emerald-200/60',
    iconColor: 'text-emerald-600 bg-emerald-100',
  },
];

export const Hero = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-5 sm:px-8 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1629 0%, #131d3b 50%, #0f1629 100%)' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }} />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-12">

        {/* ── Profile card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10"
        >
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full blur-2xl scale-110 opacity-40"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }} />
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[3px] border-white/20 shadow-2xl">
              <img
                src="/projets/avatarFacu.jpeg"
                alt="Facundo Thibaut"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online dot */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0f1629]" />
          </div>

          {/* Name + title + tagline */}
          <div className="text-center sm:text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-3 self-center sm:self-start tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Disponible para proyectos
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none mb-2">
              Facundo Thibaut
            </h1>
            <p className="text-blue-400 text-lg sm:text-xl font-semibold tracking-wide mb-4">
              Desarrollador Web Freelance
            </p>
            <p className="text-white/50 text-base sm:text-lg max-w-md leading-relaxed">
              Creo sitios web que captan clientes y hacen crecer tu negocio.
              <br className="hidden sm:block" /> Diseño, desarrollo y lanzamiento en tiempo récord.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-6">
              <a
                href="https://wa.me/541171247355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-blue-500 hover:bg-blue-400 active:scale-95 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-blue-900/40 w-full sm:w-auto justify-center"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hablemos
              </a>
              <button
                onClick={() => scrollTo('servicios')}
                className="flex items-center gap-2 text-white/60 hover:text-white font-medium text-sm px-5 py-3.5 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all w-full sm:w-auto justify-center"
              >
                Ver servicios <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── 3 cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.1 }}
                className={`bg-gradient-to-br ${card.color} border rounded-2xl p-5 backdrop-blur-sm`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-4 ${card.iconColor}`}>
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-semibold text-base mb-1.5">{card.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
