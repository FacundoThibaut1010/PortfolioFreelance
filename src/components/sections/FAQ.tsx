import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cuánto tarda en estar lista la web?',
    a: 'El tiempo depende del tipo de proyecto. Una landing page está lista en 5 a 7 días. Un sitio multi-sección en 7 a 10 días. Una tienda online puede llevar de 2 a 3 semanas. Todo depende también de la rapidez con que me mandes los textos, fotos y detalles.',
  },
  {
    q: '¿El precio incluye dominio y hosting?',
    a: 'El precio del servicio no incluye dominio ni hosting, ya que eso depende de qué proveedor prefieras. Te recomiendo las mejores opciones según tu caso y te ayudo a contratarlos. El costo suele ser entre $5 y $15 USD al año por el dominio y similar por el hosting básico.',
  },
  {
    q: '¿Puedo pedir cambios una vez que esté lista?',
    a: 'Sí. Durante el proceso hacemos todas las revisiones necesarias hasta que quede como lo querés. Una vez publicada la web, podés pedirme ajustes menores sin costo adicional dentro de los primeros 15 días.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Se paga en dos partes: el 50% para comenzar el proyecto y el 50% restante al entregarlo. Acepto transferencia bancaria y Mercado Pago.',
  },
  {
    q: '¿Qué necesito tener listo para empezar?',
    a: 'Con que me cuentes tu idea ya podemos arrancar. Si ya tenés logo, textos y fotos, mejor. Si no, te puedo orientar para conseguirlos o puedo ayudarte a redactar los textos. No es necesario tener todo listo desde el día uno.',
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 px-5 sm:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-500 text-lg">
            Las dudas más comunes, respondidas.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-slate-50/50 transition-colors"
              >
                <span className="font-semibold text-slate-900 text-base leading-snug pr-2">{faq.q}</span>
                <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${open === i ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
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
