import { useState, useEffect } from 'react';
import { TRANS, type Lang } from './i18n';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/FooterFreelance';

const SECTION_IDS = ['hero', 'sobre-mi', 'servicios', 'trabajos', 'contacto'];

export default function App() {
  const [lang, setLang]           = useState<Lang>(() => (localStorage.getItem('lang') as Lang) || 'es');
  const [theme, setTheme]         = useState<'dark' | 'light'>(() => (localStorage.getItem('theme') as 'dark' | 'light') || 'dark');
  const [activeSection, setActiveSection] = useState('hero');

  const t = TRANS[lang];

  // Persist + apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Persist lang
  useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= vh * 0.45) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden" style={{ background: 'var(--bg-1)' }}>
      <Navbar
        t={t} lang={lang} setLang={setLang}
        theme={theme} setTheme={setTheme}
        scrollTo={scrollTo} activeSection={activeSection}
      />
      <Hero t={t} scrollTo={scrollTo} />
      <About t={t} />
      <Services t={t} scrollTo={scrollTo} />
      <Portfolio t={t} />
      <Contact t={t} />
      <Testimonials t={t} />
      <FAQ t={t} />
      <Footer t={t} />
    </div>
  );
}
