import { motion } from 'framer-motion';
import { Code2, Clock, Layers, CheckCircle } from 'lucide-react';

const STATS = [
  { icon: Code2,       value: '2+',   label: 'Años con React y TS',    accent: '#f97316' },
  { icon: Layers,      value: '15+',  label: 'Proyectos entregados',   accent: '#f43f5e' },
  { icon: Clock,       value: '24hs', label: 'Tiempo de respuesta',    accent: '#10b981' },
  { icon: CheckCircle, value: '100%', label: 'Código propio, sin Wix', accent: '#f59e0b' },
];

const STACK = ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Vercel'];

export const About = () => {
  return (
    <section id="sobre-mi" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0d0e1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
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
              Sin Wix. Sin WordPress. Sin templates de terceros. Cada proyecto que entrego es construido desde cero con React, TypeScript y las mejores herramientas del ecosistema moderno, para que tu sitio sea único, veloz y fácil de escalar.
            </p>

            <div className="h-[2px] w-16 rounded-full mb-8" style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }} />

            {/* Stack chips */}
            <div>
              <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-3">Stack técnico</p>
              <div className="flex flex-wrap gap-2">
                {STACK.map(tech => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full border cursor-default"
                    style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: stat cards ── */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -8, boxShadow: `0 20px 50px ${stat.accent}22` }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-2xl p-6 border flex flex-col gap-3 cursor-default"
                  style={{ background: '#111220', borderColor: `${stat.accent}20` }}
                >
                  <div className="h-[2px] rounded-full w-10" style={{ background: stat.accent }} />
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${stat.accent}15`, color: stat.accent }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-4xl font-black text-white leading-none mb-1">{stat.value}</p>
                    <p className="text-sm text-white/40 leading-snug">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
