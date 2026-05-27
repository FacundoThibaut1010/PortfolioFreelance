import { motion } from 'framer-motion';
import { MessageCircle, Palette, Eye, Rocket } from 'lucide-react';
import type { T } from '../../i18n';

const STEP_ICONS = [MessageCircle, Palette, Eye, Rocket];
const STEP_ACCENTS = ['#f97316', '#f43f5e', '#10b981', '#a855f7'];

export const About = ({ t }: { t: T }) => {
  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  return (
    <section
      id="sobre-mi"
      className="py-14 sm:py-20 px-5 sm:px-8 relative overflow-hidden"
      style={{ background: 'var(--bg-3)' }}
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.05] blur-3xl"
        style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.04] blur-3xl"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Bio ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-18">

          {/* Left: photo → badge below */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Photo */}
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
              <div className="absolute -inset-5 rounded-full border opacity-15 pointer-events-none"
                style={{ borderColor: '#f97316', borderStyle: 'dashed' }} />
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden shadow-2xl"
                style={{ border: '3px solid rgba(249,115,22,0.42)' }}>
                <img src="/projets/fotoFacu.jpeg" alt="Facundo Thibaut"
                  className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>

            {/* Badge — below photo */}
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full tracking-widest border"
              style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.25)', color: '#10b981' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10b981' }} />
              {t.about_available}
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: fg(0.3) }}>
              {t.about_label}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-6 tracking-tight leading-tight"
              style={{ color: fg(0.92) }}>
              {t.about_h1}<br />
              <span style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {t.about_h2}
              </span>
            </h2>

            <p className="text-lg leading-relaxed mb-5" style={{ color: fg(0.5) }}>
              {t.about_p1a}
              <span style={{ color: fg(0.8), fontWeight: 600 }}>{t.about_p1b}</span>
              {t.about_p1c}
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: fg(0.35) }}>
              {t.about_p2}
            </p>

            <div className="h-[2px] w-14 rounded-full" style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }} />
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px w-full mb-16 sm:mb-20"
          style={{ background: `linear-gradient(90deg, transparent, ${fg(0.08)}, transparent)` }} />

        {/* ── Process ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: fg(0.3) }}>
            {t.proc_label}
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-3 mb-4 tracking-tight" style={{ color: fg(0.92) }}>
            {t.proc_heading}
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: fg(0.4) }}>{t.proc_sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(t.proc_steps as { title: string; desc: string }[]).map((step, i) => {
            const Icon = STEP_ICONS[i];
            const accent = STEP_ACCENTS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 16px 40px ${accent}20` }}
                className="relative rounded-2xl p-6 border cursor-default"
                style={{ background: `rgba(var(--rgb-fg), 0.03)`, borderColor: `${accent}30` }}
              >
                <span className="absolute top-4 right-5 font-black text-5xl select-none leading-none"
                  style={{ color: `rgba(var(--rgb-fg), 0.04)` }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${accent}18`, color: accent }}>
                  <Icon size={18} />
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: fg(0.9) }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: fg(0.4) }}>{step.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-xl font-bold z-10"
                    style={{ color: fg(0.15) }}>›</div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
