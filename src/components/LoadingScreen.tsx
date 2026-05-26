import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease-out: faster at start, slower at end
      const eased = 1 - Math.pow(1 - current / steps, 2);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 500);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#0f0f12] flex flex-col items-center justify-center"
        >
          {/* Grid background same as main app */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #f9741686 1px, transparent 1px), linear-gradient(to bottom, #f9741686 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Name */}
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
            <p className="text-gray-600 font-mono text-xs tracking-[0.35em] uppercase mt-2">
              Software Developer
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 flex flex-col items-center gap-3"
          >
            <div className="w-48 sm:w-64 h-[2px] bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-orange-500 rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.02 }}
              />
            </div>
            <span className="text-gray-700 font-mono text-[10px] tracking-widest">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
