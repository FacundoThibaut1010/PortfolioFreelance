import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Testimonials } from './components/sections/Testimonials';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/FooterFreelance';

const SECTION_IDS = ['hero', 'sobre-mi', 'servicios', 'trabajos', 'contacto'];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= vh * 0.45) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden" style={{ background: '#0a0b14' }}>
      <Navbar scrollTo={scrollTo} activeSection={activeSection} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Services scrollTo={scrollTo} />
      <Portfolio />
      <Contact />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
