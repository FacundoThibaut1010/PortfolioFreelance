import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import type { T } from '../../i18n';

const WA_NUMBER = '541171247355';
const GRID_BG = 'linear-gradient(rgba(var(--rgb-fg),0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--rgb-fg),0.06) 1px, transparent 1px)';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

export const Contact = ({ t }: { t: T }) => {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t.contact_wa_msg)}`;
  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  return (
    <section id="contacto" className="relative py-14 sm:py-20 px-5 sm:px-8 overflow-hidden" style={{ background: 'var(--bg-0)' }}>

      {/* Same bg as Hero/Services */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.08), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <div className="absolute inset-0 opacity-[0.018]"
          style={{ backgroundImage: GRID_BG, backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-10 sm:p-16 text-center overflow-hidden border"
          style={{
            background: 'linear-gradient(135deg, var(--bg-3) 0%, var(--bg-2) 100%)',
            borderColor: 'rgba(249,115,22,0.22)',
            boxShadow: '0 0 80px rgba(249,115,22,0.07)',
          }}
        >
          {/* Glow orbs inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(244,63,94,0.08), transparent 70%)' }} />

          {/* Rainbow top bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: 'linear-gradient(90deg, #f43f5e, #f97316, #f59e0b)' }} />

          <div className="relative z-10">
            <span
              className="inline-block text-xs font-bold px-4 py-2 rounded-full tracking-widest uppercase mb-6 border"
              style={{ background: 'rgba(249,115,22,0.12)', borderColor: 'rgba(249,115,22,0.28)', color: '#f97316' }}
            >
              {t.contact_badge}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-5"
              style={{ color: fg(0.92) }}>
              {t.contact_h1}<br />{t.contact_h2}
            </h2>

            <p className="text-lg max-w-xl mx-auto mb-10 leading-relaxed" style={{ color: fg(0.4) }}>
              {t.contact_sub}
            </p>

            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold text-base px-8 py-4 rounded-2xl text-white mb-8"
              style={{ background: '#25D366', boxShadow: '0 0 40px rgba(37,211,102,0.35)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(37,211,102,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.contact_wa}
              <ArrowRight size={17} />
            </motion.a>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 text-sm flex-wrap"
              style={{ color: fg(0.3) }}>
              <motion.a href="mailto:thibautfacundo7@gmail.com"
                className="flex items-center gap-2 transition-colors" style={{ color: fg(0.3) }}
                whileHover={{ scale: 1.03, color: fg(0.6) }}>
                <Mail size={15} /> thibautfacundo7@gmail.com
              </motion.a>
              <motion.a
                href="https://www.instagram.com/facuthibaut.dev/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors" style={{ color: fg(0.3) }}
                whileHover={{ scale: 1.03, color: fg(0.6) }}>
                <InstagramIcon /> @facuthibaut.dev
              </motion.a>
              <div className="flex items-center gap-2">
                <MapPin size={15} /> Buenos Aires, Argentina
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
