import { motion } from 'framer-motion';

const STACK = ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Vercel'];

export const About = () => {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0d0e1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Photo (same style as Hero) ── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl scale-125"
                style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)', opacity: 0.45 }}
                animate={{ opacity: [0.45, 0.7, 0.45] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Photo */}
              <div
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden shadow-2xl"
                style={{ border: '3px solid rgba(249,115,22,0.4)' }}
              >
                <img
                  src="/projets/fotoFacu.jpeg"
                  alt="Facundo Thibaut"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-full border opacity-20 pointer-events-none"
                style={{ borderColor: '#f97316' }}
              />
            </motion.div>
          </motion.div>

          {/* ── Text ── */}
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
              Sin Wix. Sin WordPress. Sin templates de terceros. Cada proyecto es construido desde cero con React y TypeScript para que tu sitio sea único, veloz y fácil de escalar.
            </p>

            {/* Accent line */}
            <div className="h-[2px] w-14 rounded-full mb-8" style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }} />

            {/* Stack */}
            <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Stack técnico</p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full border cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
