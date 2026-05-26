import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Martina R.',
    role: 'Emprendedora',
    stars: 5,
    text: 'Facundo me hizo la landing page en una semana y quedó increíble. Mis clientes me preguntan cómo la hice. 100% recomendado.',
    initials: 'MR',
    accent: '#f43f5e',
  },
  {
    name: 'Lucas P.',
    role: 'Dueño de tienda',
    stars: 5,
    text: 'La tienda online superó mis expectativas. El proceso fue muy claro y me acompañó en cada paso. Un crack.',
    initials: 'LP',
    accent: '#a855f7',
  },
  {
    name: 'Carolina M.',
    role: 'Profesional independiente',
    stars: 5,
    text: 'Muy buena comunicación y resultado final. Mi sitio quedó moderno, rápido y exactamente como lo pensé.',
    initials: 'CM',
    accent: '#06b6d4',
  },
];

export const Testimonials = () => {
  const [form, setForm] = useState({ name: '', stars: 5, text: '' });
  const [hover, setHover] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Facundo! Te dejo mi reseña:\n\n⭐ ${form.stars}/5\n👤 ${form.name}\n💬 ${form.text}`
    );
    window.open(`https://wa.me/541171247355?text=${msg}`, '_blank');
  };

  return (
    <section id="resenas" className="py-20 sm:py-28 px-5 sm:px-8" style={{ background: '#0a0b14' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-white/30 font-semibold text-sm tracking-widest uppercase">Reseñas</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4 tracking-tight">
            Lo que dicen mis clientes
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">Proyectos reales, clientes satisfechos.</p>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-4 border"
              style={{ background: '#111220', borderColor: `${r.accent}30` }}
            >
              <div className="h-[2px] rounded-full w-12" style={{ background: r.accent }} />

              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} size={14} fill="#f59e0b" className="text-amber-400" />
                ))}
              </div>

              <p className="text-white/50 text-sm leading-relaxed flex-1">"{r.text}"</p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                  style={{ background: `${r.accent}20`, color: r.accent }}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-white/30">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leave review form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto border"
          style={{ background: '#111220', borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <h3 className="text-xl font-bold text-white mb-1">¿Ya trabajamos juntos?</h3>
          <p className="text-white/35 text-sm mb-7">Dejá tu reseña — llega directo a mi WhatsApp.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">Tu puntuación</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(n => (
                  <button type="button" key={n}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setForm(f => ({ ...f, stars: n }))}
                    className="transition-transform hover:scale-110">
                    <Star size={26} className={n <= (hover || form.stars) ? 'text-amber-400 fill-amber-400' : 'text-white/10 fill-white/10'} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">Tu nombre</label>
              <input type="text" required placeholder="Ej: María G."
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">Tu reseña</label>
              <textarea required rows={4} placeholder="Contá tu experiencia trabajando conmigo..."
                value={form.text}
                onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors resize-none"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
            </div>

            <button type="submit"
              className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all active:scale-95"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #f97316)' }}>
              <Send size={14} /> Enviar reseña por WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
