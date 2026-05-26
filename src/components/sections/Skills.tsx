import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { SkillSphere } from '../SkillSphere';
import { containerVariants, itemVariants } from '../../utils/animations';

export const Skills = ({ t }: { t: any }) => {
  return (
    <section id="skills" className="w-full py-12 lg:py-16 px-4 sm:px-6 relative z-10">
      <div className="max-w-[85rem] mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          {/* Title — left-aligned like other sections */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-mono text-gray-200 font-bold flex items-center gap-3 sm:gap-4"
          >
            <Cpu size={30} className="text-orange-500 shrink-0 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)] sm:w-10 sm:h-10" />
            <span className="text-orange-500 font-bold">#</span>
            {t.skills_title}
          </motion.h2>

          {/* Sphere — responsive container clips overflow */}
          <motion.div
            variants={itemVariants}
            className="w-full flex justify-center items-center overflow-hidden"
            style={{ height: 'clamp(300px, 68vw, 480px)' }}
          >
            <div
              className="scale-[0.65] sm:scale-[0.85] lg:scale-[0.95] xl:scale-[1.15] origin-center transition-transform duration-300 shrink-0"
              style={{ width: 460, height: 460 }}
            >
              <SkillSphere />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center -mt-4 lg:-mt-8">
            <div className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.4)] whitespace-nowrap">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-gray-300 font-bold">
                {t.skills_interactive}
              </span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
