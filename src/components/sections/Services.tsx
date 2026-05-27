import { motion } from 'framer-motion';
import { ExternalLink, Layout, LayoutGrid, ShoppingCart, Check } from 'lucide-react';
import type { T } from '../../i18n';

const GRID_BG = 'linear-gradient(rgba(var(--rgb-fg),0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--rgb-fg),0.08) 1px, transparent 1px)';
const PLAN_CONFIG = [
  { icon: Layout,      accent: '#f43f5e', popular: false },
  { icon: LayoutGrid,  accent: '#a855f7', popular: true  },
  { icon: ShoppingCart, accent: '#06b6d4', popular: false },
];

export const Services = ({ t, scrollTo }: { t: T; scrollTo: (id: string) => void }) => {
  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  return (
    <section id="servicios" className="relative py-14 sm:py-20 px-5 sm:px-8 overflow-hidden" style={{ background: 'var(--bg-0)' }}>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.14), transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.1), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: GRID_BG, backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: fg(0.3) }}>
            {t.svc_label}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight" style={{ color: fg(0.92) }}>
            {t.svc_heading}
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: fg(0.4) }}>{t.svc_sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {(t.svc_plans as { tag: string; name: string; price: string; tagline: string; features: string[] }[]).map((plan, i) => {
            const { icon: Icon, accent, popular } = { icon: PLAN_CONFIG[i].icon, accent: PLAN_CONFIG[i].accent, popular: PLAN_CONFIG[i].popular };
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -12, boxShadow: `0 28px 70px ${accent}28`, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
                className="relative rounded-2xl flex flex-col overflow-hidden cursor-default"
                style={{
                  background: 'var(--bg-3)',
                  border: popular ? `1px solid ${accent}` : `1px solid ${fg(0.06)}`,
                  boxShadow: popular ? `0 0 40px ${accent}22` : '0 0 0px transparent',
                }}
              >
                <div className="h-[3px] w-full" style={{ background: accent }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase"
                      style={{ background: `${accent}22`, color: accent }}>{plan.tag}</span>
                    {popular && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded tracking-widest uppercase text-white"
                        style={{ background: accent }}>{t.svc_popular}</span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-1">
                    <span className="text-lg font-bold" style={{ color: fg(0.4) }}>$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight" style={{ color: fg(0.92) }}>{plan.price}</span>
                    <span className="text-sm font-semibold" style={{ color: fg(0.3) }}>ARS</span>
                  </div>

                  <h3 className="text-xl font-black uppercase tracking-wide mb-1" style={{ color: fg(0.92) }}>{plan.name}</h3>
                  <p className="text-sm mb-6" style={{ color: fg(0.35) }}>{plan.tagline}</p>

                  <div className="h-px w-full mb-6" style={{ background: fg(0.06) }} />

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-sm" style={{ color: fg(0.6) }}>
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                          style={{ background: `${accent}20`, color: accent }}>
                          <Check size={9} strokeWidth={3} />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://wa.me/541171247355"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-5 rounded-xl"
                    style={{
                      background: popular ? accent : fg(0.06),
                      border: popular ? 'none' : `1px solid ${fg(0.1)}`,
                      color: popular ? '#fff' : fg(0.7),
                    }}
                    whileHover={{ scale: 1.04, boxShadow: `0 8px 30px ${accent}45`, background: popular ? accent : `${accent}20`, color: '#fff' }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {t.svc_start} <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm mt-10"
          style={{ color: fg(0.25) }}
        >
          {t.svc_custom}
          <button onClick={() => scrollTo('contacto')} className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: '#a855f7' }}>
            {t.svc_custom_link}
          </button>
        </motion.p>
      </div>
    </section>
  );
};
