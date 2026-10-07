import { X, Printer, Download, MapPin, Mail, Phone, Linkedin, Github, Award, CheckSquare, GraduationCap, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data';

interface ResumeViewProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function ResumeView({ isOpen, onClose, isDarkMode }: ResumeViewProps) {
  if (!isOpen) return null;

  const triggerPrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto no-scrollbar bg-slate-950/80 backdrop-blur-md no-print">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Resume Sheet */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border ${
          isDarkMode ? 'bg-[#0B0F19] border-white/10 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        } max-h-[92vh] overflow-y-auto no-scrollbar z-10`}
      >
        {/* Floating Controls Row */}
        <div className={`p-4 border-b flex items-center justify-between sticky top-0 backdrop-blur-md z-20 ${
          isDarkMode ? 'bg-[#0B0F19]/95 border-white/10' : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FB923C] animate-pulse" />
            <span className="text-xs font-semibold text-slate-400">Verified Resume & CV</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Print Button */}
            <button
              onClick={triggerPrint}
              className="px-4 py-2 rounded-full text-xs font-black bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 shadow-lg shadow-orange-500/15 flex items-center gap-1.5 cursor-pointer hover:opacity-95 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print or Save PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isDarkMode 
                  ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white' 
                  : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
              title="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Paper Area */}
        <div id="printable-resume-body" className="p-8 sm:p-12 space-y-8 print:p-0 print:text-black">
          {/* Resume Header with Profile Picture */}
          <div className="border-b pb-6 border-slate-200 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Profile Avatar in Resume */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-28 h-36 rounded-2xl overflow-hidden border-2 border-[#FB923C]/60 shadow-lg bg-slate-900">
                <img 
                  src={PERSONAL_INFO.avatarUrl} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-5 space-y-1.5 text-center md:text-left">
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white print:text-black">
                {PERSONAL_INFO.name}
              </h2>
              <h3 className="font-sans font-bold text-xs sm:text-sm text-[#FB923C] print:text-orange-700">
                {PERSONAL_INFO.headline}
              </h3>
              <p className="text-xs text-slate-600 dark:text-[#CBD5E1] leading-relaxed font-sans max-w-xl">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Contacts sidebar list */}
            <div className="md:col-span-4 space-y-2 text-xs text-slate-600 dark:text-[#CBD5E1] print:text-slate-700 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FB923C] shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">{PERSONAL_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={PERSONAL_INFO.locationMapUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {PERSONAL_INFO.location}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline text-[#FB923C] font-bold">
                  @{PERSONAL_INFO.githubUsername}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/mahamfurqan00
                </a>
              </div>
            </div>
          </div>

          {/* Two Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Main column - Exp & Education */}
            <div className="md:col-span-8 space-y-8">
              {/* Professional Experience Section */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-[#FB923C] print:text-orange-700 uppercase tracking-wider flex items-center gap-2">
                  <Printer className="w-4 h-4 shrink-0" />
                  <span>Work Experience</span>
                </h4>
                
                <div className="space-y-6">
                  {EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                        <h5 className="font-bold text-slate-800 dark:text-white print:text-black">
                          {exp.role} <span className="font-normal text-slate-400">at</span> <span className="text-[#FB923C] font-bold">{exp.company}</span>
                        </h5>
                        <span className="text-xs font-mono text-slate-500 dark:text-white/40">{exp.period}</span>
                      </div>
                      
                      <p className="text-xs text-slate-500 dark:text-[#CBD5E1] leading-relaxed italic">{exp.description}</p>
                      
                      <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-600 dark:text-[#CBD5E1] print:text-slate-700 font-sans">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="space-y-4 pt-4 border-t border-slate-150 dark:border-white/10 print:border-slate-300">
                <h4 className="font-display font-bold text-sm text-[#FB923C] print:text-orange-700 uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4.5 h-4.5 shrink-0" />
                  <span>Academic Qualifications</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="space-y-1 p-4 rounded-xl border border-slate-200/60 dark:border-white/10 print:border-slate-300">
                      <div className="flex items-center justify-between gap-1 text-xs font-mono text-slate-500 dark:text-white/40">
                        <span>{edu.period}</span>
                      </div>
                      <h5 className="font-bold text-slate-800 dark:text-white print:text-black text-sm">
                        {edu.degree}
                      </h5>
                      <p className="text-xs font-bold text-[#FB923C]">{edu.school}</p>
                      <p className="text-[11px] text-slate-500 dark:text-[#CBD5E1] leading-relaxed font-sans">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Skills & Certifications */}
            <div className="md:col-span-4 space-y-8">
              {/* Organized Skills Section */}
              <div className="space-y-4">
                <h4 className="font-display font-bold text-sm text-[#FB923C] print:text-orange-700 uppercase tracking-wider flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 shrink-0" />
                  <span>Skills & Core Competencies</span>
                </h4>
                
                <div className="space-y-4 text-xs">
                  {/* Technical & AppSheet */}
                  <div className="space-y-1.5">
                    <h5 className="font-bold text-[10px] text-[#FB923C] uppercase tracking-wider">Technical & Low-Code</h5>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.filter(s => s.category === 'Technical').map(s => (
                        <span key={s.name} className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#FB923C]/10 text-[#FED7AA] border border-[#FB923C]/20 print:bg-slate-100 print:text-black print:border-none">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* QA & Automations */}
                  <div className="space-y-1.5">
                    <h5 className="font-bold text-[10px] text-emerald-400 uppercase tracking-wider">Quality Assurance</h5>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.filter(s => s.category === 'QA').map(s => (
                        <span key={s.name} className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-[#10B981] border border-[#10B981]/20 print:bg-slate-100 print:text-black print:border-none">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Design */}
                  <div className="space-y-1.5">
                    <h5 className="font-bold text-[10px] text-[#FDA4AF] uppercase tracking-wider">Graphic Design</h5>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.filter(s => s.category === 'Design').map(s => (
                        <span key={s.name} className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-300 border border-rose-500/20 print:bg-slate-100 print:text-black print:border-none">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Marketing */}
                  <div className="space-y-1.5">
                    <h5 className="font-bold text-[10px] text-amber-400 uppercase tracking-wider">Digital Marketing</h5>
                    <div className="flex flex-wrap gap-1">
                      {SKILLS.filter(s => s.category === 'Marketing').map(s => (
                        <span key={s.name} className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 print:bg-slate-100 print:text-black print:border-none">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Box */}
              <div className="space-y-4 pt-4 border-t border-slate-150 dark:border-white/10 print:border-slate-300">
                <h4 className="font-display font-bold text-sm text-[#FB923C] print:text-orange-700 uppercase tracking-wider flex items-center gap-2">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>Certifications</span>
                </h4>
                
                <div className="space-y-2.5 text-xs text-slate-600 dark:text-white/60">
                  {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FB923C] mt-1.5 shrink-0" />
                      <div>
                        <p className="font-bold text-slate-800 dark:text-white print:text-black text-xs">{cert.title}</p>
                        <p className="text-[10px] text-slate-400 dark:text-white/40 font-semibold">{cert.issuer} ({cert.year})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer controls */}
        <div className={`p-4 border-t flex justify-end gap-3 ${
          isDarkMode ? 'bg-[#0b0f19] border-white/10' : 'bg-slate-50 border-slate-200'
        }`}>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-bold border border-slate-300 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            Close Resume
          </button>
        </div>
      </motion.div>
    </div>
  );
}
