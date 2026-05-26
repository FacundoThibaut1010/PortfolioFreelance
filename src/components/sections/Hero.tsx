import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, Folder } from 'lucide-react';
import { Typewriter } from '../ui/Typewriter';

export const Hero = ({ t, scrollTo }: { t: any, scrollTo: (id: string) => void }) => {
  const [codeActive, setCodeActive] = useState(false);
  const [waHovered, setWaHovered] = useState(false);

  // Live clock
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  });

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const handleRunProfile = () => {
    setCodeActive(true);
  };

  return (
    <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center p-6 pt-28 md:p-12 relative">
      <div className="max-w-[85rem] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-24">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center space-y-10"
        >
          {/* Status Tag — schedule label + live clock */}
          <div className="inline-flex items-center gap-3 border border-orange-500/30 bg-orange-500/10 px-4 py-2 rounded-md text-xs sm:text-sm font-mono tracking-widest text-orange-500 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
            {t.hero_schedule} · {time}
          </div>

          {/* Titles */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold text-white leading-tight tracking-tight">
              {t.hero_hello}
            </h1>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[90px] font-bold leading-tight tracking-tight bg-gradient-to-r from-orange-400 via-pink-400 to-blue-500 text-transparent bg-clip-text pb-2">
              Facundo Thibaut
            </h1>
          </div>

          {/* Description */}
          <div className="space-y-4 text-base sm:text-xl text-gray-400 max-w-2xl">
            <p className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-orange-500 font-mono text-sm sm:text-base whitespace-nowrap">&lt;{t.hero_title} /&gt;</span>
              <span className="text-gray-200 font-medium text-sm sm:text-base">{t.hero_desc1}</span>
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-mono">
              {t.hero_desc2}
            </p>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            {/* WhatsApp button */}
            <a
              href="https://wa.me/541171247355"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setWaHovered(true)}
              onMouseLeave={() => setWaHovered(false)}
              onTouchStart={() => setWaHovered(true)}
              onTouchEnd={() => setWaHovered(false)}
              onTouchCancel={() => setWaHovered(false)}
              onContextMenu={(e) => e.preventDefault()}
              className="group relative flex items-center justify-between gap-5 border border-gray-700 bg-[#16161a]/80 hover:bg-[#1e2a1e] hover:border-[#25D366]/40 rounded-2xl p-5 w-full sm:w-[380px] shadow-lg overflow-hidden transition-colors"
            >
              <div className="flex gap-5 items-center w-full">
                <div className="bg-[#1e2a1e] border border-[#25D366]/30 rounded-lg p-3.5 flex items-center justify-center shrink-0">
                  {/* WhatsApp SVG */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow text-left">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-white font-bold text-[15px]">{t.hero_btn_init}</span>
                    <ExternalLink size={16} className="text-gray-500 group-hover:text-[#25D366]/70" />
                  </div>
                  <div className="flex justify-between items-center mt-2 w-full text-[12px] font-mono">
                    <span className="text-gray-500"></span>
                    <span className="text-[#25D366]/70">Online</span>
                  </div>
                  <div className="w-full h-1 bg-gray-800 rounded-full mt-3 overflow-hidden">
                    <motion.div
                      animate={{ width: waHovered ? "100%" : "20%" }}
                      transition={{ duration: waHovered ? 0.5 : 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#128C7E] to-[#25D366]"
                    />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/FacundoThibaut1010"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-5 border border-gray-700 bg-black/40 hover:bg-gray-800 rounded-2xl px-8 py-5 shadow-xl overflow-hidden transition-all group min-w-[240px]"
            >
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </div>
              <div className="flex flex-col items-start z-10">
                <span className="text-xs text-gray-500 font-mono tracking-[0.2em] mb-1">
                  {t.hero_btn_check}
                </span>
                <span className="text-white font-bold tracking-widest flex items-center gap-3 text-lg">
                  GitHub
                  <svg className="text-gray-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        {/* IDE Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center relative"
        >
          <div className="w-full max-w-2xl bg-[#16161a] border border-gray-700/50 rounded-[2rem] shadow-2xl overflow-hidden relative flex flex-col">

            {/* HEADER */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-[#1e1e24] border-b border-gray-800 shrink-0">
              <div className="flex gap-2 sm:gap-2.5">
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-mono cursor-default">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-orange-500"></span>
                portfolio.tsx
              </div>
              <div className="hidden sm:flex w-8 h-8 border border-gray-700 rounded items-center justify-center">
                <span className="text-xs font-mono text-gray-400">&lt;/&gt;</span>
              </div>
            </div>

            {/* CUERPO DEL CÓDIGO */}
            <div className="flex p-4 sm:p-6 text-xs sm:text-[15px] font-mono leading-[1.8rem] sm:leading-[2rem] overflow-x-auto relative min-h-[300px] sm:min-h-[420px] w-full">
              {/* Números de línea */}
              <div className="flex flex-col text-gray-600 select-none pr-4 sm:pr-6 border-r border-gray-800 mr-4 sm:mr-6 text-right shrink-0">
                {[...Array(12)].map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>

              {/* Contenedor de texto animado */}
              <div className="flex flex-col whitespace-pre">
                <div>
                  <span className="text-gray-500">// </span>
                  <span className="text-gray-500 italic">
                    <Typewriter text={t.ide_welcome} delay={500} showCursor={true} trigger={codeActive} />
                  </span>
                </div>

                <div>
                  <span className="text-[#c678dd]">import</span>{' '}
                  <span className="text-[#e5c07b]">&#123; Developer &#125;</span>{' '}
                  <span className="text-[#c678dd]">from</span>{' '}
                  <span className="text-[#98c379]">
                    '<Typewriter text="./universe" delay={2000} showCursor={true} trigger={codeActive} />'
                  </span>
                  <span className="text-gray-400">;</span>
                </div>

                <div className="h-4"></div>

                <div>
                  <span className="text-[#c678dd]">const</span>{' '}
                  <span className="text-[#e5c07b]">Portfolio</span>{' '}
                  <span className="text-[#56b6c2]">=</span>{' '}
                  <span className="text-[#56b6c2]">() =&gt;</span>{' '}
                  <span className="text-gray-300">&#123;</span>
                </div>

                <div className="ml-4">
                  <span className="text-[#c678dd]">return</span> <span className="text-gray-300">(</span>
                </div>

                <div className="ml-8">
                  <span className="text-gray-400">&lt;</span><span className="text-[#e5c07b]">Developer</span>
                </div>

                <div className="ml-12">
                  <span className="text-[#e06c75]">{t.ide_prop_name}</span><span className="text-[#56b6c2]">=</span>
                  <span className="text-[#98c379]">"</span>
                  <span className="text-[#98c379]"><Typewriter text={t.ide_val_name} delay={3500} showCursor={true} trigger={codeActive} /></span>
                  <span className="text-[#98c379]">"</span>
                </div>

                <div className="ml-12">
                  <span className="text-[#e06c75]">{t.ide_prop_role}</span><span className="text-[#56b6c2]">=</span>
                  <span className="text-[#98c379]">"</span>
                  <span className="text-[#98c379]"><Typewriter text={t.ide_val_role} delay={5200} showCursor={true} trigger={codeActive} /></span>
                  <span className="text-[#98c379]">"</span>
                </div>

                <div className="ml-12">
                  <span className="text-[#e06c75]">{t.ide_prop_passion}</span><span className="text-[#56b6c2]">=</span>
                  <span className="text-[#98c379]">"</span>
                  <span className="text-[#98c379]"><Typewriter text={t.ide_val_passion} delay={7000} showCursor={true} trigger={codeActive} /></span>
                  <span className="text-[#98c379]">"</span>
                </div>

                <div className="ml-8 text-gray-400">/&gt;</div>
                <div className="ml-4 text-gray-300">);</div>
                <div>
                  <span className="text-gray-300">&#125;;</span>
                  {codeActive && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        opacity: {
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "steps(2)" as any,
                          delay: 9.5
                        }
                      }}
                      className="inline-block w-2 h-5 bg-orange-500 ml-1 translate-y-1"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* FOOTER: Botones */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 p-4 sm:p-6 border-t border-gray-800 bg-[#16161a] mt-auto shrink-0 w-full">
              <button
                onClick={handleRunProfile}
                disabled={codeActive}
                className="flex justify-center items-center gap-3 border border-orange-500/30 text-orange-500 hover:bg-orange-500/10 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-4 sm:px-8 py-3 sm:py-3.5 text-xs uppercase tracking-[0.2em] font-mono transition-colors w-full sm:w-auto"
              >
                <Play size={14} fill="currentColor" /> {t.btn_run_profile}
              </button>
              <button
                onClick={() => scrollTo('work')}
                className="flex justify-center items-center gap-3 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-xl px-4 sm:px-8 py-3 sm:py-3.5 text-xs uppercase tracking-[0.2em] font-mono transition-colors w-full sm:w-auto"
              >
                <Folder size={14} /> {t.btn_view_projects}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
