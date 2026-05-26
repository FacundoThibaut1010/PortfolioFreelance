import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cuánto tarda en estar lista la web?',
    a: 'Landing page: 5 a 7 días. Multi-sección: 7 a 10 días. Tienda online: 2 a 3 semanas. Depende también de la rapidez con que me mandés los textos y fotos.',
    accent: '#f43f5e',
  },
  {
    q: '¿El precio incluye dominio y hosting?',
    a: 'No están incluidos, pero te recomiendo las mejores opciones y te ayudo a contratarlos. El costo suele ser entre $5 y $15 USD al año por el dominio y similar por el hosting.',
    accent: '#a855f7',
  },
  {
    q: '¿Puedo pedir cambios una vez que esté lista?',
    a: 'Sí. Durante el proceso hacemos todas las revisiones necesarias. Una vez publicada, podés pedirme ajustes menores sin costo adicional dentro de los primeros 15 días.',
    accent: '#06b6d4',
  },
  {
    q: '¿Cómo se paga?',
    a: '50% para arrancar el proyecto y 50% al entregar. Acepto transferencia bancaria y Mercado Pago.',
    accent: '#f59e0b',
  },
  {
    q: '¿Qué necesito tener listo para empezar?',
    a: 'Con que me cuentes tu idea ya podemos arrancar. Si tenés logo, textos y fotos, mejor. Si no, te oriento para conseguirlos. No es necesario tener todo listo desde el día uno.',
    accent: '#10b981',
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0d0e1a' }}>
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-white/30 font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-white/40 text-lg">Las dudas más comunes, respondidas.</p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-2xl overflow-hidden border transition-colors"
              style={{
                background: '#111220',
                borderColor: open === i ? `${faq.accent}40` : 'rgba(255,255,255,0.06)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
              >
                <span className="font-semibold text-white/80 text-base leading-snug pr-2">{faq.q}</span>
                <div
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: open === i ? faq.accent : 'rgba(255,255,255,0.06)',
                    color: open === i ? '#fff' : 'rgba(255,255,255,0.4)',
                    border: open === i ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                  >
                    <p
                      className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed pt-4"
                      style={{
                        color: 'rgba(255,255,255,0.45)',
                        borderTop: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
