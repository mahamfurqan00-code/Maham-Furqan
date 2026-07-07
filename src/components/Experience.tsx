import { Briefcase, Calendar, CheckSquare, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../data';

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode }: ExperienceProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="experience" className="py-24 bg-[#0F172A] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            A chronological timeline of my professional roles, contract freelancing, and digital marketing accomplishments.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] md:hidden" />

          {/* Timeline Cards */}
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {EXPERIENCE.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={exp.id} 
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge icon */}
                  <span className="absolute left-4 md:left-1/2 top-6 w-10 h-10 rounded-full border-4 border-[#0F172A] bg-gradient-to-tr from-[#3B82F6] to-[#06B6D4] text-white flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    <Briefcase className="w-4 h-4" />
                  </span>

                  {/* Left Column (spacer for symmetry on desktop, or empty block) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Right Column (Actual content card) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="p-6 sm:p-8 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-[#06B6D4] border border-white/10 mb-4">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>

                      {/* Header */}
                      <div className="space-y-1 mb-4">
                        <h3 className="font-display font-extrabold text-xl text-white leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-bold text-[#3B82F6]">
                          {exp.company}
                        </p>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-[#CBD5E1] leading-relaxed mb-6 italic">
                        {exp.description}
                      </p>

                      {/* Highlights lists */}
                      <div className="space-y-3 pt-4 border-t border-white/5">
                        <h4 className="font-display font-bold text-xs text-white/80 uppercase tracking-wider flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-[#06B6D4]" />
                          <span>Key Contributions & Accomplishments</span>
                        </h4>
                        
                        <ul className="space-y-2.5">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-2.5 text-xs text-[#CBD5E1] leading-relaxed">
                              <CheckSquare className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
