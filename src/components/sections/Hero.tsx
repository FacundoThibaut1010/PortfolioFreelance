import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { T } from '../../i18n';

// ── Typewriter hook ──────────────────────────────────────────────
function useTypewriter(phrases: string[], speed = 72, delSpeed = 38, pause = 2200) {
  const [text, setText]       = useState('');
  const [idx, setIdx]         = useState(0);
  const [deleting, setDelete] = useState(false);

  // Reset on language change (phrases array reference changes)
  useEffect(() => { setText(''); setIdx(0); setDelete(false); }, [phrases]);

  useEffect(() => {
    const phrase = phrases[idx] ?? '';
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < phrase.length) {
      timer = setTimeout(() => setText(phrase.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === phrase.length) {
      timer = setTimeout(() => setDelete(true), pause);
    } else if (deleting && text.length > 0) {
      timer = setTimeout(() => setText(t => t.slice(0, -1)), delSpeed);
    } else if (deleting && text.length === 0) {
      setDelete(false);
      setIdx(i => (i + 1) % phrases.length);
    }
    return () => clearTimeout(timer);
  }, [text, idx, deleting, phrases, speed, delSpeed, pause]);

  return text;
}

// ── Scatter dots ─────────────────────────────────────────────────
const DOTS = [
  { left: '8%',  top: '22%', color: '#f97316', size: 5 },
  { left: '88%', top: '18%', color: '#f43f5e', size: 4 },
  { left: '92%', top: '55%', color: '#f59e0b', size: 3 },
  { left: '5%',  top: '68%', color: '#f43f5e', size: 4 },
  { left: '78%', top: '78%', color: '#f97316', size: 3 },
  { left: '55%', top: '12%', color: '#fbbf24', size: 4 },
  { left: '18%', top: '82%', color: '#06b6d4', size: 3 },
];

export const Hero = ({ t, scrollTo }: { t: T; scrollTo: (id: string) => void }) => {
  const role = useTypewriter(t.hero_roles as unknown as string[]);
  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-5 sm:px-8"
      style={{ background: 'var(--bg-0)' }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.18), transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: 'linear-gradient(rgba(var(--rgb-fg),1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--rgb-fg),1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {DOTS.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size, background: dot.color }}
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [1, 1.6, 1] }}
            transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center pt-20 pb-12">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="text-xl sm:text-2xl mb-6 leading-none select-none"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', color: fg(0.45) }}
        >
          {t.hero_greeting}
        </motion.p>

        {/* Giant name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1
            className="font-black uppercase leading-none select-none"
            style={{
              fontSize: 'clamp(52px, 11vw, 148px)',
              background: 'linear-gradient(90deg, #f97316 0%, #f43f5e 38%, #fbbf24 68%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
            }}
          >
            FACUNDO
          </h1>
          <p
            className="leading-none select-none"
            style={{
              fontSize: 'clamp(38px, 8.2vw, 112px)',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 400,
              background: 'linear-gradient(90deg, #f43f5e, #f97316 55%, #f43f5e)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.0,
              marginTop: '0.04em',
            }}
          >
            Thibaut
          </p>
        </motion.div>

        {/* Typewriter role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
          className="text-xs sm:text-sm tracking-[0.28em] uppercase mt-8 mb-6 font-mono h-5"
          style={{ color: fg(0.45) }}
        >
          · {role}<span className="tw-cursor ml-px">|</span> ·
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-base sm:text-lg max-w-xl leading-relaxed mb-8"
          style={{ color: fg(0.45) }}
        >
          {t.hero_desc}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <motion.a
            href="https://wa.me/541171247355"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white font-semibold text-sm px-7 py-3.5 rounded-2xl"
            style={{ background: '#25D366', boxShadow: '0 0 28px rgba(37,211,102,0.35)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 48px rgba(37,211,102,0.55)' }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {t.hero_cta1}
          </motion.a>
          <motion.button
            onClick={() => scrollTo('servicios')}
            className="flex items-center gap-2 font-medium text-sm px-6 py-3.5 rounded-2xl border transition-all"
            style={{
              color: fg(0.5),
              borderColor: fg(0.12),
              background: 'transparent',
            }}
            whileHover={{ scale: 1.03, borderColor: fg(0.25), color: fg(0.9) }}
            whileTap={{ scale: 0.97 }}
          >
            {t.hero_cta2} <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
