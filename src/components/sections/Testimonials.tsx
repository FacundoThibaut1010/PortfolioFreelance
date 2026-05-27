import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, X, Check } from 'lucide-react';

const ACCENT_COLORS = ['#f43f5e', '#a855f7', '#06b6d4', '#f59e0b', '#10b981', '#f97316'];

type Review = {
  name: string;
  role: string;
  stars: number;
  text: string;
  initials: string;
  accent: string;
};

export const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ name: '', role: '', stars: 5, text: '' });
  const [hover, setHover]       = useState(0);
  const [success, setSuccess]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const words    = form.name.trim().split(' ');
    const initials = words.map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const accent   = ACCENT_COLORS[reviews.length % ACCENT_COLORS.length];
    setReviews(prev => [...prev, {
      name:     form.name.trim(),
      role:     form.role.trim() || 'Cliente',
      stars:    form.stars,
      text:     form.text.trim(),
      initials,
      accent,
    }]);
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

        {/* Empty state */}
        {reviews.length === 0 && !success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 mb-6"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <Star size={24} className="text-amber-400/50" />
            </div>
            <p className="text-white/25 text-sm">Sé el primero en dejar tu reseña.</p>
          </motion.div>
        )}

        {/* Review cards grid */}
        {reviews.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <AnimatePresence>
              {reviews.map((r, i) => (
                <motion.div
                  key={`${r.name}-${i}`}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
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
        )}

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

        {/* Open modal button */}
        <div className="flex justify-center">
          <motion.button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2.5 font-bold text-sm py-3 px-6 rounded-xl border transition-colors"
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderColor: 'rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)',
            }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(249,115,22,0.35)', color: '#f97316' }}
            whileTap={{ scale: 0.97 }}
          >
            <Plus size={15} />
            ¿Ya trabajamos juntos? Dejá tu reseña
          </motion.button>
        </div>

      </div>

      {/* ── Review Modal ── */}
      <AnimatePresence>
        {showForm && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-50 bg-black/70"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)}
            />

            {/* Panel */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setShowForm(false)}>
              <motion.div
                key="modal"
                className="relative w-full max-w-lg rounded-2xl border"
                style={{ background: '#111220', borderColor: 'rgba(249,115,22,0.25)' }}
                initial={{ scale: 0.88, opacity: 0, y: 28 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={e => e.stopPropagation()}
              >
                {/* Top accent bar */}
                <div className="h-[2px] rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }} />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">Contá tu experiencia</h3>
                    <button
                      onClick={() => setShowForm(false)}
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    >
                      <X size={15} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Stars */}
                    <div>
                      <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">
                        Tu puntuación
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(n => (
                          <button
                            type="button"
                            key={n}
                            onMouseEnter={() => setHover(n)}
                            onMouseLeave={() => setHover(0)}
                            onClick={() => setForm(f => ({ ...f, stars: n }))}
                            className="transition-transform hover:scale-110 active:scale-95"
                          >
                            <Star
                              size={26}
                              className={n <= (hover || form.stars) ? 'text-amber-400 fill-amber-400' : 'text-white/10 fill-white/10'}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name + role */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">
                          Tu nombre
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej: María G."
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">
                          Tu rubro (opcional)
                        </label>
                        <input
                          type="text"
                          placeholder="Ej: Emprendedora"
                          value={form.role}
                          onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                        />
                      </div>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 block">
                        Tu reseña
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Contá tu experiencia trabajando conmigo..."
                        value={form.text}
                        onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none resize-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl"
                      style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)' }}
                      whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(249,115,22,0.35)' }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Check size={15} /> Publicar reseña
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
};
