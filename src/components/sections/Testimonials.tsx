import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, X, Check } from 'lucide-react';

const ACCENT_COLORS = ['#f43f5e', '#a855f7', '#06b6d4', '#f59e0b', '#10b981', '#f97316'];

const INITIAL_REVIEWS = [
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

type Review = (typeof INITIAL_REVIEWS)[0];

export const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', stars: 5, text: '' });
  const [hover, setHover] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const words = form.name.trim().split(' ');
    const initials = words.map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const accent = ACCENT_COLORS[reviews.length % ACCENT_COLORS.length];
    const newReview: Review = {
      name: form.name.trim(),
      role: form.role.trim() || 'Cliente',
      stars: form.stars,
      text: form.text.trim(),
      initials,
      accent,
    };
    setReviews(prev => [...prev, newReview]);
    setForm({ name: '', role: '', stars: 5, text: '' });
    setShowForm(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <section id="resenas" className="pt-20 sm:pt-28 pb-10 sm:pb-14 px-5 sm:px-8" style={{ background: '#0d0e1a' }}>
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

        {/* Review cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <AnimatePresence>
            {reviews.map((r, i) => (
              <motion.div
                key={`${r.name}-${i}`}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i < 3 ? i * 0.1 : 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, boxShadow: `0 20px 50px ${r.accent}20` }}
                className="rounded-2xl p-6 flex flex-col gap-4 border cursor-default"
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
          </AnimatePresence>
        </div>

        {/* Success toast */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="flex items-center justify-center gap-2 mb-6 text-sm font-semibold"
              style={{ color: '#10b981' }}
            >
              <div className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(16,185,129,0.15)' }}>
                <Check size={13} />
              </div>
              ¡Tu reseña fue publicada! Gracias 🙌
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add review button */}
        <div className="flex justify-center mb-6">
          <motion.button
            onClick={() => setShowForm(v => !v)}
            className="flex items-center gap-2.5 font-bold text-sm py-3 px-6 rounded-xl border transition-colors"
            style={{
              background: showForm ? 'rgba(168,85,247,0.15)' : 'rgba(255,255,255,0.04)',
              borderColor: showForm ? 'rgba(168,85,247,0.4)' : 'rgba(255,255,255,0.1)',
              color: showForm ? '#a855f7' : 'rgba(255,255,255,0.6)',
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {showForm ? <X size={15} /> : <Plus size={15} />}
            {showForm ? 'Cancelar' : '¿Ya trabajamos juntos? Dejá tu reseña'}
          </motion.button>
        </div>

        {/* Inline form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              key="form"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div
                className="rounded-2xl p-8 sm:p-10 max-w-2xl mx-auto border mt-2"
                style={{ background: '#111220', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                <h3 className="text-lg font-bold text-white mb-6">Contá tu experiencia</h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Stars */}
                  <div>
                    <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">Tu puntuación</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(n => (
                        <button type="button" key={n}
                          onMouseEnter={() => setHover(n)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setForm(f => ({ ...f, stars: n }))}
                          className="transition-transform hover:scale-110 active:scale-95">
                          <Star size={26} className={n <= (hover || form.stars) ? 'text-amber-400 fill-amber-400' : 'text-white/10 fill-white/10'} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name + role row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">Tu rubro (opcional)</label>
                      <input type="text" placeholder="Ej: Emprendedora"
                        value={form.role}
                        onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    </div>
                  </div>

                  {/* Review text */}
                  <div>
                    <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">Tu reseña</label>
                    <textarea required rows={4} placeholder="Contá tu experiencia trabajando conmigo..."
                      value={form.text}
                      onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none transition-colors resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl"
                    style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(168,85,247,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Check size={15} /> Publicar reseña
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
