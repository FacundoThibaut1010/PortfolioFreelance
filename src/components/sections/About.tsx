import { motion } from 'framer-motion';

const STATS = [
  { value: '2+',   label: 'Años de\nexperiencia',     accent: '#f97316' },
  { value: '15+',  label: 'Proyectos\ncompletados',   accent: '#f43f5e' },
  { value: '24hs', label: 'Tiempo de\nrespuesta',     accent: '#10b981' },
  { value: '100%', label: 'Código\na medida',         accent: '#f59e0b' },
];

export const About = () => {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0d0e1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: badge + photo ── */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Disponible badge */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full tracking-widest border"
              style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.25)', color: '#10b981' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10b981' }} />
              Disponible para proyectos
            </div>

            {/* Photo — floating with glow */}
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl scale-125"
                style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)', opacity: 0.45 }}
                animate={{ opacity: [0.45, 0.72, 0.45] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Decorative ring */}
              <div
                className="absolute -inset-5 rounded-full border opacity-15 pointer-events-none"
                style={{ borderColor: '#f97316', borderStyle: 'dashed' }}
              />
              {/* Photo */}
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

          {/* ── Right: text + stat cards ── */}
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

            {/* Accent line */}
            <div className="h-[2px] w-14 rounded-full mb-8" style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }} />

            {/* Stat cards — small 2x2 grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: `0 12px 30px ${stat.accent}18` }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl p-4 border cursor-default"
                  style={{ background: '#111220', borderColor: `${stat.accent}22` }}
                >
                  {/* Top accent */}
                  <div className="h-[2px] w-8 rounded-full mb-3" style={{ background: stat.accent }} />
                  <p className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">{stat.value}</p>
                  <p className="text-xs text-white/38 leading-snug whitespace-pre-line">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
