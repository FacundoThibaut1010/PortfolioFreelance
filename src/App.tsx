import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Process } from './components/sections/Process';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/FooterFreelance';

const SECTION_IDS = ['hero', 'sobre-mi', 'proceso', 'servicios', 'trabajos', 'contacto'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <div className="font-sans overflow-x-hidden" style={{ background: '#0a0b14' }}>
      <Navbar scrollTo={scrollTo} activeSection={activeSection} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Process />
      <Services scrollTo={scrollTo} />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
