import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, X, Check } from 'lucide-react';
import type { T } from '../../i18n';

const ACCENTS = ['#f43f5e', '#a855f7', '#06b6d4', '#f59e0b', '#10b981', '#f97316'];

type Review = { name: string; role: string; stars: number; text: string; initials: string; accent: string };

export const Testimonials = ({ t }: { t: T }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm]         = useState({ name: '', role: '', stars: 5, text: '' });
  const [hover, setHover]       = useState(0);
  const [success, setSuccess]   = useState(false);
  const fg = (op: number) => `rgba(var(--rgb-fg), ${op})`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const words = form.name.trim().split(' ');
    const initials = words.map(w => w[0]).join('').slice(0, 2).toUpperCase();
    const accent = ACCENTS[reviews.length % ACCENTS.length];
    setReviews(prev => [...prev, { name: form.name.trim(), role: form.role.trim() || 'Cliente', stars: form.stars, text: form.text.trim(), initials, accent }]);
    setForm({ name: '', role: '', stars: 5, text: '' });
    setShowForm(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <section id="resenas" className="pt-14 sm:pt-20 pb-8 sm:pb-10 px-5 sm:px-8" style={{ background: 'var(--bg-2)' }}>
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="font-semibold text-sm tracking-widest uppercase" style={{ color: fg(0.3) }}>{t.test_label}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-4 tracking-tight" style={{ color: fg(0.92) }}>{t.test_heading}</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: fg(0.4) }}>{t.test_sub}</p>
        </motion.div>

        {reviews.length === 0 && !success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.15)' }}>
              <Star size={24} className="text-amber-400/50" />
            </div>
            <p className="text-sm" style={{ color: fg(0.25) }}>{t.test_empty}</p>
          </motion.div>
        )}

        {reviews.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <AnimatePresence>
              {reviews.map((r, i) => (
                <motion.div key={`${r.name}-${i}`}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6, boxShadow: `0 20px 50px ${r.accent}20` }}
                  className="rounded-2xl p-6 flex flex-col gap-4 border cursor-default"
                  style={{ background: 'var(--bg-3)', borderColor: `${r.accent}30` }}>
                  <div className="h-[2px] rounded-full w-12" style={{ background: r.accent }} />
                  <div className="flex gap-1">
                    {Array.from({ length: r.stars }).map((_, s) => <Star key={s} size={14} fill="#f59e0b" className="text-amber-400" />)}
                  </div>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: fg(0.5) }}>"{r.text}"</p>
                  <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: fg(0.05) }}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0"
                      style={{ background: `${r.accent}20`, color: r.accent }}>{r.initials}</div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: fg(0.9) }}>{r.name}</p>
                      <p className="text-xs" style={{ color: fg(0.3) }}>{r.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        <AnimatePresence>
          {success && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="flex items-center justify-center gap-2 mb-6 text-sm font-semibold" style={{ color: '#10b981' }}>
              <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'rgba(16,185,129,0.15)' }}>
                <Check size={13} />
              </div>
              {t.test_success}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center">
          <motion.button onClick={() => setShowForm(true)}
            className="flex items-center gap-2.5 font-bold text-sm py-3 px-6 rounded-xl border transition-colors"
            style={{ background: fg(0.04), borderColor: fg(0.1), color: fg(0.6) }}
            whileHover={{ scale: 1.04, borderColor: 'rgba(249,115,22,0.35)', color: '#f97316' }}
            whileTap={{ scale: 0.97 }}>
            <Plus size={15} /> {t.test_btn}
          </motion.button>
        </div>
      </div>

      {/* ── Modal ── */}
      <AnimatePresence>
        {showForm && (
          <>
            <motion.div key="backdrop" className="fixed inset-0 z-50 bg-black/70"
              style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowForm(false)} />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={() => setShowForm(false)}>
              <motion.div key="modal" className="relative w-full max-w-lg rounded-2xl border"
                style={{ background: 'var(--bg-3)', borderColor: 'rgba(249,115,22,0.25)' }}
                initial={{ scale: 0.88, opacity: 0, y: 28 }} animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={e => e.stopPropagation()}>
                <div className="h-[2px] rounded-t-2xl" style={{ background: 'linear-gradient(90deg, #f97316, #f43f5e)' }} />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold" style={{ color: fg(0.92) }}>{t.test_modal_title}</h3>
                    <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                      style={{ background: fg(0.06), color: fg(0.5) }}><X size={15} /></button>
                  </div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: fg(0.3) }}>{t.test_rating}</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(n => (
                          <button type="button" key={n}
                            onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
                            onClick={() => setForm(f => ({ ...f, stars: n }))}
                            className="transition-transform hover:scale-110 active:scale-95">
                            <Star size={26} className={n <= (hover || form.stars) ? 'text-amber-400 fill-amber-400' : 'fill-white/10 text-white/10'} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: fg(0.3) }}>{t.test_name_label}</label>
                        <input type="text" required placeholder={t.test_name_ph} value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                          style={{ background: fg(0.05), border: `1px solid ${fg(0.08)}`, color: fg(0.9) }} />
                      </div>
                      <div>
                        <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: fg(0.3) }}>{t.test_role_label}</label>
                        <input type="text" placeholder={t.test_role_ph} value={form.role}
                          onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                          className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none"
                          style={{ background: fg(0.05), border: `1px solid ${fg(0.08)}`, color: fg(0.9) }} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-widest mb-2 block" style={{ color: fg(0.3) }}>{t.test_text_label}</label>
                      <textarea required rows={4} placeholder={t.test_text_ph} value={form.text}
                        onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                        className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none resize-none"
                        style={{ background: fg(0.05), border: `1px solid ${fg(0.08)}`, color: fg(0.9) }} />
                    </div>
                    <motion.button type="submit"
                      className="flex items-center justify-center gap-2 text-white font-bold text-sm py-3.5 px-6 rounded-xl"
                      style={{ background: 'linear-gradient(135deg, #f97316, #f43f5e)' }}
                      whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(249,115,22,0.35)' }}
                      whileTap={{ scale: 0.97 }}>
                      <Check size={15} /> {t.test_submit}
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
