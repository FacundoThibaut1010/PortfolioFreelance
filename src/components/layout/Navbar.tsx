import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'proceso',   label: 'Cómo trabajo' },
  { id: 'trabajos',  label: 'Trabajos' },
  { id: 'faq',       label: 'FAQ' },
];

export const Navbar = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handle = (id: string) => { scrollTo(id); setOpen(false); };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl border-b border-white/5' : ''
        }`}
        style={{ background: scrolled ? 'rgba(10,11,20,0.92)' : 'transparent' }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
              <span className="text-white font-black text-xs font-mono">FT</span>
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block tracking-tight">Facundo Thibaut</span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => handle(l.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/541171247355"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-white font-semibold text-sm px-4 py-2 rounded-xl transition-all border border-violet-500/40 hover:border-violet-400 hover:bg-violet-500/10"
            style={{ background: 'rgba(139,92,246,0.12)' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Hablemos
          </a>

          {/* Burger */}
          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-white/70 hover:bg-white/5 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 px-6 md:hidden"
          style={{ background: '#0a0b14' }}>
          <nav className="flex flex-col gap-2 mt-4">
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => handle(l.id)}
                className="text-left px-4 py-3.5 rounded-xl text-lg font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all"
              >
                {l.label}
              </button>
            ))}
          </nav>
          <a
            href="https://wa.me/541171247355"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 text-white font-bold text-base px-6 py-4 rounded-2xl transition-colors"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            Hablar por WhatsApp
          </a>
        </div>
      )}
    </>
  );
};
