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
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Lucas P.',
    role: 'Dueño de tienda',
    stars: 5,
    text: 'La tienda online superó mis expectativas. El proceso fue muy claro y me acompañó en cada paso. Un crack.',
    initials: 'LP',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'Carolina M.',
    role: 'Profesional independiente',
    stars: 5,
    text: 'Muy buena comunicación y resultado final. Mi sitio quedó moderno, rápido y exactamente como lo pensé.',
    initials: 'CM',
    color: 'bg-emerald-100 text-emerald-700',
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
    <section id="resenas" className="py-20 sm:py-28 px-5 sm:px-8"
      style={{ background: 'linear-gradient(160deg, #fefce8 0%, #fef9f0 50%, #fff7ed 100%)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Reseñas</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
            Lo que dicen mis clientes
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Proyectos reales, clientes satisfechos.
          </p>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-amber-100/80 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: r.stars }).map((_, s) => (
                  <Star key={s} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${r.color}`}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{r.name}</p>
                  <p className="text-xs text-slate-400">{r.role}</p>
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
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl border border-amber-100 shadow-sm p-8 sm:p-10 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-1">¿Ya trabajamos juntos?</h3>
          <p className="text-slate-500 text-sm mb-7">Dejá tu reseña — llega directo a mi WhatsApp.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Star rating */}
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Tu puntuación</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    type="button"
                    key={n}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setForm(f => ({ ...f, stars: n }))}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={28}
                      className={n <= (hover || form.stars) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Tu nombre</label>
              <input
                type="text"
                required
                placeholder="Ej: María G."
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>

            {/* Review text */}
            <div>
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2 block">Tu reseña</label>
              <textarea
                required
                rows={4}
                placeholder="Contá tu experiencia trabajando conmigo..."
                value={form.text}
                onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-semibold text-sm py-3.5 px-6 rounded-xl transition-all"
            >
              <Send size={15} /> Enviar reseña por WhatsApp
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};
