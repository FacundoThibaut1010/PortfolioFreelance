import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const WA_NUMBER = '541171247355';

export const Contact = () => {
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Facundo! Me interesa hacer una web. ¿Podemos hablar?')}`;

  return (
    <section id="contacto" className="py-20 sm:py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200"
        >
          {/* Deco circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block bg-white/15 border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase mb-6">
              Contacto
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-5">
              ¿Listo para tener<br />tu web profesional?
            </h2>

            <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Escribime por WhatsApp y charlamos sin compromiso.
              Te respondo en menos de 24 horas.
            </p>

            {/* Main CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-base px-8 py-4 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 mb-8"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hablar por WhatsApp
              <ArrowRight size={17} />
            </a>

            {/* Secondary info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <Mail size={15} />
                thibautfacundo7@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} />
                Buenos Aires, Argentina
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
