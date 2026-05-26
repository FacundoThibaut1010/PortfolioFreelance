import { motion } from 'framer-motion';
import { Play, Folder, Settings, Coffee } from 'lucide-react';
import { containerVariants, itemVariants } from '../../utils/animations';

export const About = ({ t, scrollTo }: { t: any, scrollTo: (id: string) => void }) => {
  return (
    <section
      id="about"
      className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-0"
    >
      <div className="max-w-[85rem] mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8"
        >

          <h2 className="text-4xl lg:text-5xl font-mono text-gray-200 font-bold flex items-center gap-4">
            <span className="text-orange-500 font-bold">&gt;_</span>
            {t.about_title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

            {/* LEFT BOX (Profile Card) */}
            <motion.div variants={itemVariants} className="lg:col-span-5 bg-[#1a1b26]/95 border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-2xl flex flex-col items-center">
              {/* Glow background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] pointer-events-none rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] pointer-events-none rounded-full"></div>

              {/* Central Avatar - Reduced slightly to save vertical space */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-56 lg:h-56 xl:w-72 xl:h-72 mx-auto mb-10 flex flex-col justify-center items-center">
                {/* Decorative arcs */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="transparent" stroke="#2a2a30" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="48" fill="transparent" stroke="#f97316" strokeWidth="1.5" strokeDasharray="50 300" />
                  <circle cx="50" cy="50" r="48" fill="transparent" stroke="#10b981" strokeWidth="1.5" strokeDasharray="30 300" strokeDashoffset="-120" />
                  <circle cx="50" cy="50" r="48" fill="transparent" stroke="#3b82f6" strokeWidth="1" strokeDasharray="80 300" strokeDashoffset="-180" />
                </svg>

                <span className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-emerald-500 z-10 border-2 border-[#1a1b26] shadow-[0_0_15px_#10b981]"></span>

                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 rounded-full border border-gray-700 bg-[#16161a] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 overflow-hidden flex items-center justify-center">
                  <img src="/projets/fotoFacu.jpeg" className="w-full h-full object-cover object-top scale-105" alt="Facundo Thibaut" />
                </div>
              </div>

              {/* Profile Data Table */}
              <div className="space-y-4 text-sm font-mono w-full mt-auto">
                <div className="flex justify-between items-center border-b border-gray-800/80 pb-4">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-[11px]">{t.about_operator}</span>
                  <span className="text-orange-500 font-bold tracking-widest text-xs sm:text-sm">FACUNDO THIBAUT</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/80 py-4 gap-2">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-[11px] shrink-0">{t.about_role}</span>
                  <span className="text-[#61afef] font-medium tracking-wide text-[10px] sm:text-xs text-right break-words">{t.about_dev_role}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800/80 py-4 gap-2">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-[11px] shrink-0">{t.about_location}</span>
                  <span className="text-gray-300 font-medium text-xs sm:text-sm text-right break-words">{t.about_location_val}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-[11px] shrink-0">{t.about_status}</span>
                  <span className="text-emerald-400 bg-emerald-950/50 border border-emerald-500/20 px-3 py-1 rounded text-[10px] sm:text-xs tracking-widest font-bold shadow-[0_0_10px_rgba(16,185,129,0.1)] text-right break-words">{t.about_status_val}</span>
                </div>
              </div>
            </motion.div>


            {/* RIGHT BOX (Terminal Log) */}
            <div className="lg:col-span-7 flex flex-col gap-6 h-full">

              <motion.div variants={itemVariants} className="bg-[#1a1b26] border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl flex-grow h-full">
                <h3 className="text-gray-500 font-mono text-sm border-b border-gray-800 pb-4 mb-6 flex items-center gap-3">
                  <span className="text-gray-600">&gt;_</span> {t.about_cmd_header}
                </h3>

                <div className="space-y-10 font-mono text-[14px] leading-7">
                  {/* Command 1 */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-blue-500 font-bold text-lg">-&gt;</span>
                      <span className="text-[#c678dd] font-semibold text-lg">{t.about_cmd_whoami}</span>
                    </div>
                    <p className="border-l-[4px] border-gray-700/40 pl-5 text-gray-400">
                      {t.about_whoami_desc}
                    </p>
                  </div>

                  {/* Command 2 */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-blue-500 font-bold text-lg">-&gt;</span>
                      <span className="text-[#c678dd] font-semibold text-lg">{t.about_cmd_mission_file}</span>
                    </div>
                    <p className="border-l-[4px] border-gray-700/40 pl-5 text-gray-400">
                      {t.about_mission_desc_1}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Metric Cards Row - Reduced internal padding to save height */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: t.metric_exp, v: '4+', sub: t.metric_exp_sub, Icon: Settings },
                  { title: t.metric_caf, v: '∞', sub: t.metric_caf_sub, Icon: Coffee },
                ].map((m, i) => (
                  <motion.div variants={itemVariants} key={i} className="bg-[#1a1b26] border border-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col gap-3 relative overflow-hidden group hover:border-gray-600 transition-colors">
                    <div className="relative z-10 flex items-center gap-3 text-gray-500 text-xs font-mono tracking-[0.2em]">
                      <m.Icon size={16} className="text-orange-500" />
                      {m.title}
                    </div>
                    <div className="relative z-10 flex items-baseline gap-3 mt-1">
                      <span className="text-4xl font-bold text-white group-hover:text-orange-400 transition-colors">{m.v}</span>
                      <span className="text-sm text-gray-600 font-mono tracking-widest">{m.sub}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
