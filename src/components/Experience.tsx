import { useState } from 'react';
import { Briefcase, Calendar, CheckSquare, Award, Database, Code2, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../data';
import Card3D from './Card3D';
import CertificateModal from './CertificateModal';

interface ExperienceProps {
  isDarkMode: boolean;
}

export default function Experience({ isDarkMode: _isDarkMode }: ExperienceProps) {
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCertId, setActiveCertId] = useState<string | undefined>(undefined);

  const openCredential = (expId: string) => {
    if (expId === 'exp-clickpad') setActiveCertId('cert-clickpad-letter');
    else if (expId === 'exp-python-bootcamp') setActiveCertId('cert-python-grin');
    else if (expId === 'exp-digiskills') setActiveCertId('cert-digiskills-graphic');
    else if (expId === 'exp-anthropic-ai') setActiveCertId('cert-claude-101');
    else setActiveCertId('cert-clickpad-letter');
    setCertModalOpen(true);
  };

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

  const getRoleIcon = (company: string) => {
    if (company.includes('Clickpad')) return Database;
    if (company.includes('DigiSkills') || company.includes('Anthropic')) return Award;
    return Code2;
  };

  return (
    <section id="experience" className="py-24 bg-[#0C0A10] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] uppercase tracking-widest bg-white/5 border border-[#FB923C]/30 px-3.5 py-1 rounded-full mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Verified Career History</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Work Experience &amp; Verified Roles
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-sm sm:text-base leading-relaxed">
            Verified roles and milestones backed by official documents: Clickpad AppSheet development (4 July, 2025 – 4 October, 2025 · Letter issued Oct 30, 2025), GRIN Python engineering, DigiSkills certified Graphic Design &amp; Digital Marketing, and Anthropic Claude 101 AI systems.
          </p>

        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar with Peach Gradient */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#FB923C] via-[#FDA4AF] to-[#F59E0B] -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#FB923C] via-[#FDA4AF] to-[#F59E0B] md:hidden" />

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
              const RoleIcon = getRoleIcon(exp.company);
              return (
                <motion.div 
                  key={exp.id} 
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-stretch gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge icon in Peach Palette */}
                  <span className="absolute left-4 md:left-1/2 top-6 w-10 h-10 rounded-full border-4 border-[#0B0F19] bg-gradient-to-tr from-[#FB923C] to-[#FDA4AF] text-slate-950 flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(251,146,60,0.4)]">
                    <RoleIcon className="w-4 h-4 text-slate-950" />
                  </span>

                  {/* Left Column (spacer for symmetry on desktop) */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Right Column (Actual 3D content card) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <Card3D 
                      maxTilt={8}
                      className="p-6 sm:p-8 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#FB923C]/50 shadow-xl"
                    >
                      {/* Period Badge */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FB923C]/10 text-[#FED7AA] border border-[#FB923C]/20 mb-4">
                        <Calendar className="w-3.5 h-3.5 text-[#FB923C]" />
                        {exp.period}
                      </span>

                      {/* Header */}
                      <div className="space-y-1 mb-4">
                        <h3 className="font-display font-black text-xl text-white leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-bold text-[#FB923C] flex flex-wrap items-center gap-1.5">
                          <span>{exp.company}</span>
                          {exp.company.includes('Clickpad') && (
                            <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              Official Letter Verified
                            </span>
                          )}
                        </p>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-5 font-sans">
                        {exp.description}
                      </p>

                      {/* Highlights lists */}
                      <div className="space-y-2.5 pt-4 border-t border-white/5">
                        <h4 className="font-display font-bold text-xs text-white/90 uppercase tracking-wider flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-[#FB923C]" />
                          <span>Key Deliverables &amp; Responsibilities</span>
                        </h4>
                        
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex gap-2.5 text-xs text-[#CBD5E1] leading-relaxed font-sans">
                              <CheckSquare className="w-4 h-4 text-[#FB923C] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Pills */}
                      {exp.technologies && (
                        <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                          {exp.technologies.map(tech => (
                            <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#FED7AA] border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {exp.id !== 'exp-clickpad' && (
                        <div className="mt-5 pt-4 border-t border-white/10">
                          <button
                            onClick={() => openCredential(exp.id)}
                            className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#FB923C]/20 text-[#FED7AA] border border-[#FB923C]/30 hover:border-[#FB923C] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#FB923C]" />
                            <span>View {exp.certificateTitle || 'Official Certificate'}</span>
                          </button>
                        </div>
                      )}
                    </Card3D>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>

      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        initialCertId={activeCertId}
      />
    </section>
  );
}
