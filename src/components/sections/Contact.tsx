import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Play } from 'lucide-react';

export const Contact = ({ t }: { t: any }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const telefono = "541171247355";
    const texto = `Hola! Mi nombre es *${formData.name}*.%0A%0A` +
      `Te escribo por el siguiente asunto: *${formData.subject}*.%0A%0A` +
      `*Mensaje:* ${formData.message}%0A%0A` +
      `Mi correo de contacto es: ${formData.email}`;
    window.open(`https://wa.me/${telefono}?text=${texto}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col justify-start pt-12 pb-40 px-6 relative z-10 border-t border-gray-900/50"
    >
      <div className="max-w-[85rem] mx-auto w-full">

        {/* --- TÍTULO DE SECCIÓN: CONTACT (UNIFICADO CON SKILLS) --- */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          {/* Icono Phone: Mismo tamaño y brillo que el Cpu de Skills */}
          <Phone
            size={40}
            className="text-orange-500 shrink-0 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
          />

          {/* Texto: Mismas clases text-4xl lg:text-5xl y font-mono */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono text-gray-200 font-bold flex items-center gap-4">
            <span className="text-orange-500 font-bold">$</span>
            {t.contact_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden shadow-2xl max-w-2xl w-full font-mono"
          >
            {/* Header de la ventana */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#1a1a1a]/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-mono">
                {/* Usamos texto puro con el color azul, se ve igual de bien y no rompe nada */}
                <span className="text-blue-400 font-bold text-[12px]">{"</>"}</span>

                <span className="text-[12px] uppercase tracking-tight text-gray-400">
                  contact_info.json
                </span>
              </div>
            </div>

            {/* Editor de código */}
            <div className="p-4 sm:p-6 md:p-10 text-xs sm:text-[15px] flex relative overflow-x-auto w-full">
              {/* Números de línea laterales */}
              <div className="flex flex-col text-gray-700 text-right pr-4 sm:pr-6 select-none border-r border-white/5 mr-2 sm:mr-4 w-6 sm:w-10 shrink-0">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i} className="h-[20px] sm:h-[24px] leading-[20px] sm:leading-[24px]">{i + 1}</span>
                ))}
              </div>

              <div className="flex-1 space-y-0 text-xs sm:text-[15px] min-w-max">
                {/* Línea 1 */}
                <div className="h-[24px] leading-[24px]"><span className="text-[#e7c787]">{'{'}</span></div>

                {/* Línea 2: Status (VERDE) */}
                <div className="pl-5 h-[24px] leading-[24px]">
                  <span className="text-[#ef8b51]">{t.contact_json_status_key}</span>: <span className="text-[#67d391]">{t.contact_json_status_val}</span>,
                </div>

                {/* Línea 3: Email (AZUL CIAN) */}
                <div className="pl-5 h-[24px] leading-[24px]">
                  <span className="text-[#ef8b51]">"email"</span>:
                  <a href="mailto:thibautfacundo7@gmail.com" className="text-[#4fd1ed] hover:text-white transition-colors ml-1">
                    "thibautfacundo7@gmail.com"</a>,
                </div>

                {/* Línea 4: Socials */}
                <div className="pl-5 h-[24px] leading-[24px]">
                  <span className="text-[#ef8b51]">"socials"</span>: <span className="text-[#e7c787]">{'{'}</span>
                </div>

                {/* Líneas 5-7: Social Links (VIOLETA/PÚRPURA) */}
                <div className="pl-10 h-[24px] leading-[24px]">
                  <span className="text-[#ef8b51]">"github"</span>:
                  <a href="https://github.com/FacundoThibaut1010" target="_blank" className="text-[#c678dd] hover:text-white transition-colors ml-1">
                    "@FacundoThibaut1010"
                  </a>,
                </div>

                <div className="pl-10 h-[24px] leading-[24px]">
                  <span className="text-[#ef8b51]">"linkedin"</span>:
                  <a href="https://www.linkedin.com/in/facundo-thibaut-384223352/?skipRedirect=true" target="_blank" className="text-[#c678dd] hover:text-white transition-colors ml-1">
                    "@Facundo Thibaut"
                  </a>,
                </div>

                <div className="pl-10 h-[24px] leading-[24px]">
                  <span className="text-[#ef8b51]">"instagram"</span>:
                  <a href="https://www.instagram.com/facuthibaut_/" target="_blank" className="text-[#c678dd] hover:text-white transition-colors ml-1">
                    "@facuthibaut_"
                  </a>
                </div>

                {/* Línea 8: Cierre Socials */}
                <div className="pl-5 h-[24px] leading-[24px]"><span className="text-[#e7c787]">{'}'}</span>,</div>

                {/* Línea 9: Location (NARANJA SUAVE) */}
                <div className="pl-5 h-[24px] leading-[24px]">
                  <span className="text-[#ef8b51]">{t.contact_json_loc_key}</span>: <span className="text-[#ef8b51]/80">{t.contact_json_loc_val}</span>
                </div>

                {/* Línea 10: Cierre JSON */}
                <div className="h-[20px] sm:h-[24px] leading-[20px] sm:leading-[24px]"><span className="text-[#e7c787]">{'}'}</span></div>

                <div className="h-[20px] sm:h-[24px]"></div>

                {/* Línea 12: Comentario */}
                <div className="text-gray-500 italic h-[20px] sm:h-[24px] leading-[20px] sm:leading-[24px]">
                  {t.contact_json_wait}
                </div>

                {/* Línea 13: Cursor */}
                <div className="flex items-center h-[20px] sm:h-[24px]">
                  <span className="inline-block w-2.5 h-0.5 bg-[#ef8b51] animate-pulse"></span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- VENTANA 2: sendMessage.ts --- */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#16161a] border border-gray-800 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center border-b border-gray-800 bg-[#1c1c21]">
              {/* Pestaña pegada a la izquierda y arriba */}
              <div className="flex items-center gap-3 bg-[#16161a] border-r border-gray-800 px-4 py-2.5 relative">
                {/* Línea azul superior de pestaña activa */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500"></div>

                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold text-[11px]">TS</span>
                  <span className="text-[11px] uppercase tracking-tight text-gray-300 font-mono">
                    sendMessage.ts
                  </span>
                </div>

                <div className="text-gray-600 hover:text-gray-200 hover:bg-gray-800 rounded-sm p-0.5 transition-colors cursor-pointer">
                  <span className="text-[10px] font-mono leading-none">×</span>
                </div>
              </div>

              {/* El resto de la barra hacia la derecha */}
              <div className="flex-1 h-full"></div>
            </div>

            <form onSubmit={handleWhatsApp} className="p-4 sm:p-6 md:p-10 space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.contact_name}</label>
                  <input
                    type="text" required placeholder={t.contact_name_placeholder}
                    className="w-full bg-[#0d0d0f] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all font-mono text-gray-300"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.contact_email}</label>
                  <input
                    type="email" required placeholder={t.contact_email_placeholder}
                    className="w-full bg-[#0d0d0f] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all font-mono text-gray-300"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.contact_subject}</label>
                <input
                  type="text" required placeholder={t.contact_subject_placeholder}
                  className="w-full bg-[#0d0d0f] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all font-mono text-gray-300"
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t.contact_message}</label>
                <textarea
                  rows={4} required placeholder={t.contact_message_placeholder}
                  className="w-full bg-[#0d0d0f] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-orange-500/50 outline-none transition-all font-mono resize-none text-gray-300"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="w-full sm:w-auto min-w-[240px] px-8 py-3 rounded-xl bg-[#3d2317] border border-orange-900/30 text-[#ef8b51] font-mono text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#4d2d1d] hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group">
                <Play size={14} className="fill-[#ef8b51] group-hover:fill-white transition-colors shrink-0" />
                {t.contact_send}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
