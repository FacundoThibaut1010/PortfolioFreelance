import { motion } from 'framer-motion';
import { MessageCircle, Palette, Eye, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Me contás tu idea',
    desc: 'Hablamos por WhatsApp sin costo. Me contás qué necesitás, cuál es tu negocio y qué querés lograr con la web.',
    color: 'blue',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Diseño y desarrollo',
    desc: 'Me pongo a trabajar. Diseño la web a medida, con tu identidad y orientada a convertir visitantes en clientes.',
    color: 'indigo',
  },
  {
    icon: Eye,
    number: '03',
    title: 'Revisás y aprobás',
    desc: 'Te muestro el avance, hacemos los ajustes necesarios hasta que quede exactamente como lo imaginaste.',
    color: 'violet',
  },
  {
    icon: Rocket,
    number: '04',
    title: '¡Lanzamos!',
    desc: 'Publicamos tu sitio online. Te entrego todo el acceso y te explico cómo manejarlo desde tu celular.',
    color: 'blue',
  },
];

const iconColor: Record<string, string> = {
  blue:   'text-blue-600 bg-blue-50',
  indigo: 'text-indigo-600 bg-indigo-50',
  violet: 'text-violet-600 bg-violet-50',
};

export const Process = () => {
  return (
    <section id="proceso" className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Proceso</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Cómo trabajamos juntos
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Simple, claro y sin vueltas. De la idea al sitio en línea.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Step number */}
                <span className="absolute top-5 right-5 text-slate-100 font-black text-4xl select-none leading-none">{step.number}</span>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${iconColor[step.color]}`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>

                {/* Connector arrow (not on last) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-slate-200 z-10 text-xl font-bold">→</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm text-sm text-slate-600">
            <span className="text-2xl">⚡</span>
            <span>El tiempo promedio desde que hablamos hasta lanzar es de <strong className="text-slate-900">1 a 2 semanas</strong>.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
