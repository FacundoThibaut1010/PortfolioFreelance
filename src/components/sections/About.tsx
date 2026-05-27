import { motion } from 'framer-motion';
import { MessageCircle, Palette, Eye, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Me contás tu idea',
    desc: 'Hablamos por WhatsApp sin costo. Me contás qué necesitás, cuál es tu negocio y qué querés lograr.',
    accent: '#f97316',
  },
  {
    icon: Palette,
    number: '02',
    title: 'Diseño y desarrollo',
    desc: 'Me pongo a trabajar. Diseño a medida con tu identidad, orientado a convertir visitas en clientes.',
    accent: '#f43f5e',
  },
  {
    icon: Eye,
    number: '03',
    title: 'Revisás y aprobás',
    desc: 'Te muestro el avance y hacemos ajustes hasta que quede exactamente como lo imaginaste.',
    accent: '#10b981',
  },
  {
    icon: Rocket,
    number: '04',
    title: '¡Lanzamos!',
    desc: 'Publicamos tu sitio. Te entrego todos los accesos y te explico cómo manejarlo.',
    accent: '#a855f7',
  },
];

export const About = () => {
  return (
    <section
      id="sobre-mi"
      className="py-20 sm:py-28 px-5 sm:px-8 relative overflow-hidden"
      style={{ background: '#111220' }}
    >
      {/* Subtle bg glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.05] blur-3xl"
        style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.04] blur-3xl"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Bio: photo + text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 sm:mb-24">

          {/* Left: badge + photo */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full tracking-widest border"
              style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.25)', color: '#10b981' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10b981' }} />
              Disponible para proyectos
            </div>

            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl scale-125"
                style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)', opacity: 0.45 }}
                animate={{ opacity: [0.45, 0.72, 0.45] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div
                className="absolute -inset-5 rounded-full border opacity-15 pointer-events-none"
                style={{ borderColor: '#f97316', borderStyle: 'dashed' }}
              />
              <div
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl"
                style={{ border: '3px solid rgba(249,115,22,0.42)' }}
              >
                <img
                  src="/projets/fotoFacu.jpeg"
                  alt="Facundo Thibaut"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="text-white/30 font-semibold text-sm tracking-widest uppercase">Sobre mí</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-6 tracking-tight leading-tight">
              El código detrás<br />
              <span style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                de tu sitio web
              </span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed mb-5">
              Soy Facundo, desarrollador web freelance de Buenos Aires. Me especializo en crear sitios modernos, rápidos y orientados a resultados — usando{' '}
              <span className="text-white/80 font-semibold">código real</span>.
            </p>

            <p className="text-white/35 text-base leading-relaxed mb-8">
              Sin Wix. Sin WordPress. Sin templates. Cada proyecto es construido desde cero para que tu sitio sea único, veloz y diferente.
            </p>

            <div className="h-[2px] w-14 rounded-full" style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }} />
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full mb-16 sm:mb-20"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />

        {/* ── Cómo trabajamos juntos ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-white/30 font-semibold text-sm tracking-widest uppercase">Proceso</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 mb-4 tracking-tight">
            Cómo trabajamos juntos
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            Simple, claro y sin vueltas. De la idea al sitio en línea.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${step.accent}20` }}
                className="relative rounded-2xl p-6 border cursor-default transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderColor: `${step.accent}30`,
                }}
              >
                <span className="absolute top-4 right-5 text-white/[0.04] font-black text-5xl select-none leading-none">
                  {step.number}
                </span>

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${step.accent}18`, color: step.accent }}
                >
                  <Icon size={18} />
                </div>

                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>

                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/15 text-xl font-bold z-10">›</div>
                )}
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
};
