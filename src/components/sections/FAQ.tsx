import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cuánto tarda en estar lista la web?',
    a: 'Landing page: 5 a 7 días. Multi-sección: 7 a 10 días. Tienda online: 2 a 3 semanas. Depende también de la rapidez con que me mandés los textos y fotos.',
    accent: '#f97316',
  },
  {
    q: '¿El precio incluye dominio y hosting?',
    a: 'No están incluidos, pero te recomiendo las mejores opciones y te ayudo a contratarlos. El costo suele ser entre $5 y $15 USD al año por el dominio.',
    accent: '#f43f5e',
  },
  {
    q: '¿Puedo pedir cambios una vez que esté lista?',
    a: 'Sí. Durante el proceso hacemos todas las revisiones necesarias. Una vez publicada, podés pedirme ajustes menores sin costo adicional dentro de los primeros 15 días.',
    accent: '#10b981',
  },
  {
    q: '¿Cómo se paga?',
    a: '50% para arrancar el proyecto y 50% al entregar. Acepto transferencia bancaria y Mercado Pago.',
    accent: '#f59e0b',
  },
  {
    q: '¿Qué necesito tener listo para empezar?',
    a: 'Con que me cuentes tu idea ya podemos arrancar. Si tenés logo, textos y fotos, mejor. Si no, te oriento para conseguirlos.',
    accent: '#06b6d4',
  },
  {
    q: '¿Usás Wix, WordPress o constructores de páginas?',
    a: 'No. Todo el código es escrito a mano con React y TypeScript. Eso garantiza velocidad, flexibilidad total y un resultado único que ningún template puede dar.',
    accent: '#a855f7',
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0a0b14' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-white/30 font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-white/40 text-lg">Las dudas más comunes, respondidas.</p>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileTap={{ scale: 0.995 }}
                className="rounded-2xl overflow-hidden border"
                style={{
                  background: '#111220',
                  borderColor: isOpen ? `${faq.accent}45` : 'rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start gap-4 p-5 text-left group"
                >
                  {/* Number accent */}
                  <span
                    className="text-xs font-black font-mono mt-0.5 shrink-0 w-6 transition-colors"
                    style={{ color: isOpen ? faq.accent : 'rgba(255,255,255,0.18)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Question */}
                  <span
                    className="flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors"
                    style={{ color: isOpen ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.7)' }}
                  >
                    {faq.q}
                  </span>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.22 }}
                    className="shrink-0 mt-0.5"
                    style={{ color: isOpen ? faq.accent : 'rgba(255,255,255,0.25)' }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Left accent bar — shows when open */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="flex gap-4 px-5 pb-5"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
                      >
                        {/* Colored left bar */}
                        <div
                          className="w-[2px] rounded-full shrink-0 mt-3"
                          style={{ background: faq.accent, minHeight: '100%' }}
                        />
                        <p className="text-sm text-white/45 leading-relaxed pt-3">{faq.a}</p>
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
