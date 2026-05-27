import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Sun, Moon } from 'lucide-react';
import type { T, Lang } from '../../i18n';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4.5"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

interface NavbarProps {
  t: T;
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: 'dark' | 'light';
  setTheme: (th: 'dark' | 'light') => void;
  scrollTo: (id: string) => void;
  activeSection: string;
}

export const Navbar = ({ t, lang, setLang, theme, setTheme, scrollTo, activeSection }: NavbarProps) => {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const DESKTOP_LINKS = [
    { id: 'hero',      label: t.nav_inicio },
    { id: 'sobre-mi',  label: t.nav_sobre },
    { id: 'servicios', label: t.nav_servicios },
    { id: 'trabajos',  label: t.nav_trabajos },
    { id: 'contacto',  label: t.nav_contacto },
  ];

  const MOBILE_LINKS = [
    { id: 'hero',      label: t.nav_inicio },
    { id: 'sobre-mi',  label: t.nav_sobre },
    { id: 'servicios', label: t.nav_servicios },
    { id: 'trabajos',  label: t.nav_trabajos },
    { id: 'contacto',  label: t.nav_contacto },
  ];

  const SECTION_LABEL: Record<string, string> = {
    'hero':      t.nav_inicio,
    'sobre-mi':  t.nav_sobre,
    'servicios': t.nav_servicios,
    'trabajos':  t.nav_trabajos,
    'contacto':  t.nav_contacto,
    'resenas':   lang === 'es' ? 'Reseñas' : 'Reviews',
    'faq':       'FAQ',
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handle = (id: string) => { scrollTo(id); setOpen(false); };
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'var(--nav-scrolled)' : 'var(--nav-idle)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid var(--nav-bdr-s)' : '1px solid var(--nav-bdr)',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-3">

          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
              style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)' }}>
              <span className="text-white font-black text-xs font-mono">FT</span>
            </div>
            <span className="font-semibold text-sm hidden sm:block tracking-tight" style={{ color: fg(0.9) }}>
              Facundo Thibaut
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {DESKTOP_LINKS.map(l => {
              const isActive = activeSection === l.id;
              return (
                <button
                  key={l.id}
                  onClick={() => handle(l.id)}
                  className="relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    color: isActive ? fg(1) : fg(0.5),
                    background: isActive ? 'rgba(249,115,22,0.1)' : 'transparent',
                  }}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: '#f97316' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: lang + theme + WA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            {/* Lang toggle */}
            <div className="flex rounded-full overflow-hidden border" style={{ borderColor: fg(0.1) }}>
              {(['es', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors"
                  style={{
                    background: lang === l ? 'rgba(249,115,22,0.15)' : 'transparent',
                    color: lang === l ? '#f97316' : fg(0.35),
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors hover:border-orange-500/40"
              style={{ borderColor: fg(0.12), color: fg(0.5) }}
              title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* WA CTA */}
            <a
              href="https://wa.me/541171247355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-semibold text-sm px-4 py-2 rounded-xl transition-all hover:opacity-90 active:scale-95"
              style={{ background: '#25D366', boxShadow: '0 0 20px rgba(37,211,102,0.25)' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              {t.nav_hablemos}
            </a>
          </div>

          {/* Mobile right: section indicator + lang + theme + burger */}
          <div className="md:hidden flex items-center gap-1.5">
            {/* Active section pill */}
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide uppercase"
              style={{ background: 'rgba(249,115,22,0.12)', color: '#f97316', border: '1px solid rgba(249,115,22,0.25)' }}
            >
              {SECTION_LABEL[activeSection] ?? t.nav_inicio}
            </span>

            {/* Lang pill */}
            <div className="flex rounded-full overflow-hidden border" style={{ borderColor: fg(0.1) }}>
              {(['es', 'en'] as const).map(l => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-colors"
                  style={{
                    background: lang === l ? 'rgba(249,115,22,0.15)' : 'transparent',
                    color: lang === l ? '#f97316' : fg(0.35),
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center rounded-full border transition-colors"
              style={{ borderColor: fg(0.12), color: fg(0.5) }}
            >
              {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
            </button>

            {/* Burger */}
            <button
              onClick={() => setOpen(v => !v)}
              className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors border"
              style={{ color: fg(0.7), borderColor: fg(0.1), background: 'transparent' }}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: 'var(--mob-overlay)' }}
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-10 blur-3xl"
              style={{ background: 'radial-gradient(circle, #f97316, transparent 70%)' }} />

            {/* Header row */}
            <div className="h-16 px-5 flex items-center justify-between border-b shrink-0"
              style={{ borderColor: fg(0.06) }}>
              <button onClick={() => { scrollTo('hero'); setOpen(false); }} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)' }}>
                  <span className="text-white font-black text-xs font-mono">FT</span>
                </div>
                <span className="font-semibold text-sm tracking-tight" style={{ color: fg(0.9) }}>Facundo Thibaut</span>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-xl border transition-colors"
                style={{ borderColor: fg(0.1), color: fg(0.6) }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-4 pt-4 gap-0.5 flex-1 overflow-y-auto">
              {MOBILE_LINKS.map((l, i) => {
                const isActive = activeSection === l.id;
                return (
                  <motion.button
                    key={l.id}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.06 }}
                    onClick={() => handle(l.id)}
                    className="flex items-center justify-between text-left px-4 py-3.5 rounded-xl transition-all border"
                    style={{
                      color: isActive ? '#f97316' : fg(0.55),
                      background: isActive ? 'rgba(249,115,22,0.08)' : 'transparent',
                      borderColor: isActive ? 'rgba(249,115,22,0.2)' : 'transparent',
                    }}
                  >
                    <span className="text-lg font-bold tracking-tight">{l.label}</span>
                    <span className="font-mono text-xs"
                      style={{ color: isActive ? '#f97316' : fg(0.2) }}>
                      0{i + 1}
                    </span>
                  </motion.button>
                );
              })}
            </nav>

            {/* Bottom */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="px-4 pb-8 pt-4 border-t flex flex-col gap-3 shrink-0"
              style={{ borderColor: fg(0.06) }}
            >
              <a
                href="https://wa.me/541171247355"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 text-white font-bold text-base px-6 py-4 rounded-2xl"
                style={{ background: '#25D366', boxShadow: '0 0 24px rgba(37,211,102,0.3)' }}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {t.nav_whatsapp}
              </a>

              {/* Lang + theme row */}
              <div className="flex items-center justify-center gap-3">
                {/* Lang */}
                <div className="flex rounded-full overflow-hidden border" style={{ borderColor: fg(0.1) }}>
                  {(['es', 'en'] as const).map(l => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors"
                      style={{
                        background: lang === l ? 'rgba(249,115,22,0.15)' : 'transparent',
                        color: lang === l ? '#f97316' : fg(0.4),
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                {/* Theme */}
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 flex items-center justify-center rounded-full border transition-colors"
                  style={{ borderColor: fg(0.12), color: fg(0.5) }}
                >
                  {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="mailto:thibautfacundo7@gmail.com"
                  className="flex items-center gap-2 text-sm transition-colors py-1"
                  style={{ color: fg(0.4) }}
                >
                  <Mail size={15} />
                  thibautfacundo7@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/facuthibaut.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors py-1"
                  style={{ color: fg(0.4) }}
                >
                  <InstagramIcon />
                  Instagram
                </a>
              </div>

              <p className="text-xs text-center font-mono" style={{ color: fg(0.15) }}>
                © {new Date().getFullYear()} Facundo Thibaut
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
