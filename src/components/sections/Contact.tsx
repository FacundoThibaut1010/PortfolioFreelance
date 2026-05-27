import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const WA_NUMBER = '541171247355';
const LINE1 = "¿Listo para tener";
const LINE2 = "tu web profesional?";

// ── Skiper31-style character animation ──
type CharProps = {
  char: string;
  index: number;
  center: number;
  scrollYProgress: any;
  start: number;
  end: number;
};

const AnimChar = ({ char, index, center, scrollYProgress, start, end }: CharProps) => {
  const isSpace = char === ' ';
  const dist = index - center;

  const x = useTransform(scrollYProgress, [start, end], [dist * 52, 0]);
  const rotateX = useTransform(scrollYProgress, [start, end], [dist * 38, 0]);
  const opacity = useTransform(scrollYProgress, [start, start + 0.18], [0.15, 1]);

  if (isSpace) return <span className="inline-block w-3 sm:w-4 lg:w-5" />;

  return (
    <motion.span className="inline-block" style={{ x, rotateX, opacity }}>
      {char}
    </motion.span>
  );
};

export const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Facundo! Me interesa hacer una web. ¿Podemos hablar?')}`;

  const chars1 = LINE1.split('');
  const chars2 = LINE2.split('');
  const center1 = Math.floor(chars1.length / 2);
  const center2 = Math.floor(chars2.length / 2);

  // Line 1: animates 0 → 0.45
  // Line 2: animates 0.05 → 0.50  (slight delay)
  // Buttons: fade in 0.52 → 0.72
  const btnOpacity = useTransform(scrollYProgress, [0.52, 0.72], [0, 1]);
  const btnY       = useTransform(scrollYProgress, [0.52, 0.72], [36, 0]);
  const subtitleOp = useTransform(scrollYProgress, [0.46, 0.60], [0, 1]);

  return (
    <section
      id="contacto"
      ref={containerRef}
      style={{ height: '220vh', background: '#0a0b14', position: 'relative' }}
    >
      {/* Sticky viewport */}
      <div
        style={{ position: 'sticky', top: 0, height: '100vh' }}
        className="flex flex-col items-center justify-center overflow-hidden px-5"
      >
        {/* Ambient glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full pointer-events-none blur-3xl opacity-10"
          style={{ background: 'radial-gradient(circle, #f43f5e, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Rainbow top stripe */}
        <div className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #f43f5e, #f97316, #f59e0b)' }} />

        {/* ── Animated title (Skiper31 style) ── */}
        <div
          className="relative z-10 text-center font-extrabold text-white leading-[1.1] tracking-tight mb-3"
          style={{ perspective: '700px', fontSize: 'clamp(32px, 6vw, 72px)' }}
        >
          {/* Line 1 */}
          <div>
            {chars1.map((char, i) => (
              <AnimChar
                key={i} char={char} index={i} center={center1}
                scrollYProgress={scrollYProgress}
                start={0} end={0.45}
              />
            ))}
          </div>
          {/* Line 2 — gradient text */}
          <div style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {chars2.map((char, i) => (
              <AnimChar
                key={i} char={char} index={i} center={center2}
                scrollYProgress={scrollYProgress}
                start={0.05} end={0.50}
              />
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          style={{ opacity: subtitleOp }}
          className="relative z-10 text-white/40 text-base sm:text-lg text-center max-w-md mb-10"
        >
          Escribime y charlamos sin compromiso. Respondo en menos de 24 horas.
        </motion.p>

        {/* ── Contact buttons ── */}
        <motion.div
          style={{ opacity: btnOpacity, y: btnY }}
          className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full max-w-md"
        >
          {/* WhatsApp — green */}
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-white font-bold text-base py-4 px-7 rounded-2xl w-full sm:w-auto flex-1"
            style={{ background: '#25D366', boxShadow: '0 0 32px rgba(37,211,102,0.35)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(37,211,102,0.55)' }}
            whileTap={{ scale: 0.97 }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </motion.a>

          {/* Mail — opens client */}
          <motion.a
            href="mailto:thibautfacundo7@gmail.com"
            className="flex items-center justify-center gap-3 text-white/70 font-bold text-base py-4 px-7 rounded-2xl w-full sm:w-auto flex-1 border border-white/10 hover:border-white/25 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.09)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={18} className="shrink-0" />
            Enviar mail
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.p
          style={{ opacity: btnOpacity }}
          className="relative z-10 flex items-center gap-2 text-white/25 text-sm mt-7 font-mono"
        >
          <MapPin size={13} />
          Buenos Aires, Argentina
        </motion.p>
      </div>
    </section>
  );
};
