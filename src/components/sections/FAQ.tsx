import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { T } from '../../i18n';

export const FAQ = ({ t }: { t: T }) => {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  const toggle = (i: number) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const faqs = t.faq_items as { q: string; a: string; accent: string }[];

  return (
    <section id="faq" className="pt-8 sm:pt-10 pb-20 sm:pb-28 px-5 sm:px-8 relative" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="h-px mb-12 sm:mb-16"
          style={{ background: `linear-gradient(90deg, transparent, ${fg(0.07)}, transparent)` }} />

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="text-center mb-14">
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: fg(0.3) }}>{t.faq_label}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4 tracking-tight" style={{ color: fg(0.92) }}>{t.faq_heading}</h2>
          <p style={{ color: fg(0.4) }}>{t.faq_sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 items-start">
          {faqs.map((faq, i) => {
            const isOpen = openSet.has(i);
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl overflow-hidden border"
                style={{ background: 'var(--bg-3)', borderColor: isOpen ? `${faq.accent}45` : fg(0.06), transition: 'border-color 0.25s' }}>
                <button onClick={() => toggle(i)} className="w-full flex items-start gap-4 p-5 text-left">
                  <span className="text-xs font-black font-mono mt-0.5 shrink-0 w-6 transition-colors duration-200"
                    style={{ color: isOpen ? faq.accent : fg(0.18) }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors duration-200"
                    style={{ color: isOpen ? fg(0.95) : fg(0.7) }}>
                    {faq.q}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
                    className="shrink-0 mt-0.5 transition-colors duration-200"
                    style={{ color: isOpen ? faq.accent : fg(0.25) }}>
                    <ChevronDown size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="answer"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.4, 0, 0.2, 1] }} style={{ overflow: 'hidden' }}>
                      <div className="flex gap-4 px-5 pb-5 pt-3" style={{ borderTop: `1px solid ${fg(0.05)}` }}>
                        <div className="w-[2px] rounded-full self-stretch shrink-0" style={{ background: faq.accent }} />
                        <p className="text-sm leading-relaxed" style={{ color: fg(0.45) }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
