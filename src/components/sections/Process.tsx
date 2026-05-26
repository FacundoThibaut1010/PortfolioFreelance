import { motion } from 'framer-motion';
import { MessageCircle, Palette, Eye, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Me contás tu idea',
    desc: 'Hablamos por WhatsApp sin costo. Me contás qué necesitás, cuál es tu negocio y qué querés lograr.',
    accent: '#60a5fa',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Diseño y desarrollo',
    desc: 'Me pongo a trabajar. Diseño a medida con tu identidad, orientado a convertir visitas en clientes.',
    accent: '#a78bfa',
  },
  {
    icon: Eye,
    number: '03',
    title: 'Revisás y aprobás',
    desc: 'Te muestro el avance y hacemos ajustes hasta que quede exactamente como lo imaginaste.',
    accent: '#34d399',
  },
  {
    icon: Rocket,
    number: '04',
    title: '¡Lanzamos!',
    desc: 'Publicamos tu sitio. Te entrego todos los accesos y te explico cómo manejarlo.',
    accent: '#fb923c',
  },
];

export const Process = () => {
  return (
    <section
      id="proceso"
      className="py-20 sm:py-28 px-5 sm:px-8 relative overflow-hidden"
      style={{ background: '#0a0b14' }}
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #3b82f6, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Proceso</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Cómo trabajamos juntos
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Simple, claro y sin vueltas. De la idea al sitio en línea.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/8 transition-colors"
              >
                <span className="absolute top-4 right-5 text-white/5 font-black text-5xl select-none leading-none">{step.number}</span>

                <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${step.accent}20`, color: step.accent }}>
                  <Icon size={20} />
                </div>

                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>

                {/* Connector */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3.5 -translate-y-1/2 text-white/20 text-lg font-bold z-10">›</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Time badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white/60">
            <span className="text-xl">⚡</span>
            De la charla al sitio online en{' '}
            <strong className="text-white">1 a 2 semanas</strong>.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
