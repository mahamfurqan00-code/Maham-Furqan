import { Award, ShieldCheck, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../data';

interface CertificationsProps {
  isDarkMode: boolean;
}

export default function Certifications({ isDarkMode }: CertificationsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#111827] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            Credential validations demonstrating my continuous learning path in design tools, marketing frameworks, and SEO methodologies.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="p-6 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header visual badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-tr ${
                    cert.category === 'Design' 
                      ? 'from-pink-500 to-rose-500' 
                      : 'from-amber-500 to-orange-500'
                  } shadow-md`}>
                    <Award className="w-5 h-5" />
                  </div>
                  
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    cert.category === 'Design'
                      ? 'bg-pink-500/10 text-pink-400 border-pink-500/20'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-base text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-bold text-[#3B82F6]">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Card Footer details */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-sans">
                  <Calendar className="w-4 h-4 text-[#94A3B8]" />
                  <span>Issued {cert.year}</span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-bold text-[#10B981] font-sans">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Active</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
