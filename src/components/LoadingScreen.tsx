import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TEXT = {
  en: { subtitle: 'Web Development', btn: 'Start Project' },
  es: { subtitle: 'Desarrollo Web',  btn: 'Iniciar Proyecto' },
};

export const LoadingScreen = ({ onComplete }: { onComplete: (lang: 'en' | 'es') => void }) => {
  const [lang, setLang]       = useState<'en' | 'es'>('es');
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible]   = useState(true);
  const txt = TEXT[lang];

  const handleStart = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (!started) return;

    const duration = 2000;
    const interval = 20;
    const steps    = duration / interval;
    let current    = 0;

    const timer = setInterval(() => {
      current++;
      const eased = 1 - Math.pow(1 - current / steps, 2);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          setTimeout(() => onComplete(lang), 500);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [started, onComplete, lang]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0f0f12] flex flex-col items-center justify-center"
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #f9741686 1px, transparent 1px), linear-gradient(to bottom, #f9741686 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Language toggle */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-6 right-6 z-10 flex items-center bg-gray-900 border border-gray-800 rounded-full p-1"
          >
            <button
              onClick={() => setLang('en')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-colors ${lang === 'es' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
              ES
            </button>
          </motion.div>

          {/* Name + subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 text-center mb-10"
          >
            <h1 className="text-4xl sm:text-6xl font-mono font-black tracking-tighter text-white mb-1">
              Facundo{' '}
              <span className="text-orange-500">Thibaut</span>
            </h1>
            <AnimatePresence mode="wait">
              <motion.p
                key={lang}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="text-gray-500 font-mono text-xs tracking-[0.35em] uppercase mt-2"
              >
                {txt.subtitle}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Button → Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <AnimatePresence mode="wait">
              {!started ? (
                <motion.button
                  key="btn"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleStart}
                  className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-mono font-bold text-sm tracking-widest rounded-xl transition-colors shadow-[0_0_24px_rgba(249,115,22,0.45)]"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={lang}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {txt.btn}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              ) : (
                <motion.div
                  key="bar"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-48 sm:w-64 h-[2px] bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-orange-500 rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.02 }}
                    />
                  </div>
                  <span className="text-gray-600 font-mono text-[10px] tracking-widest">
                    {progress}%
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
