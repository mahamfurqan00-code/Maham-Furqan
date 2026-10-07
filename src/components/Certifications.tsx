import { useState } from 'react';
import { Award, ShieldCheck, Calendar, FileText, Eye, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../data';
import Card3D from './Card3D';
import CertificateModal from './CertificateModal';

interface CertificationsProps {
  isDarkMode: boolean;
}

export default function Certifications({ isDarkMode: _isDarkMode }: CertificationsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<string | undefined>(undefined);

  const openDocument = (certId?: string) => {
    setSelectedCertId(certId);
    setModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#0C0A10] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] uppercase tracking-widest bg-white/5 border border-[#FB923C]/30 px-3.5 py-1 rounded-full mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Official Letters &amp; Accredited Qualifications</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Internship Letter &amp; Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-sm sm:text-base leading-relaxed">
            Official Clickpad Internship Completion Letter (Oct 30, 2025), Government of Pakistan DigiSkills Training Certificates in Graphic Design (ID: FVNRB59MK) &amp; Digital Marketing (ID: BYJAWJ6MK), Anthropic Claude 101 Certificate, and GRIN Python Crash Course Certificate.
          </p>

          {/* Quick Action Buttons to View Internship Letter & Certificates */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => openDocument('cert-clickpad-letter')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] hover:opacity-95 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm shadow-lg shadow-orange-500/25"
            >
              <FileText className="w-4 h-4" />
              <span>View Clickpad Internship Letter</span>
            </button>

            <button
              onClick={() => openDocument('cert-digiskills-graphic')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-white/10 hover:bg-[#FB923C]/15 border border-[#FB923C]/40 active:scale-95 transition-all cursor-pointer text-xs sm:text-sm"
            >
              <Award className="w-4 h-4 text-[#FB923C]" />
              <span>Browse All 5 Official Certificates</span>
            </button>
          </div>
        </div>

        {/* Certifications Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <Card3D
              key={cert.id || index}
              maxTilt={8}
              className="rounded-3xl overflow-hidden border bg-[#16131D]/90 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#FB923C]/50 hover:shadow-[0_10px_30px_rgba(251,146,60,0.18)] shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Document Image Preview */}
                {cert.imageUrl && (
                  <div
                    onClick={() => openDocument(cert.id)}
                    className="relative aspect-[16/11] w-full bg-[#09070E] overflow-hidden border-b border-white/10 cursor-pointer"
                  >
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16131D] via-transparent to-transparent opacity-40" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${
                        cert.documentType === 'internship_letter'
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : cert.category === 'Technical'
                          ? 'bg-[#FB923C]/20 text-[#FED7AA] border-[#FB923C]/40'
                          : cert.category === 'Design'
                          ? 'bg-rose-500/20 text-rose-200 border-rose-500/40'
                          : 'bg-amber-500/20 text-amber-200 border-amber-500/40'
                      }`}>
                        {cert.category}
                      </span>
                    </div>
                    {cert.certificateId && (
                      <span className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/85 text-[#FED7AA] border border-white/15">
                        ID: {cert.certificateId}
                      </span>
                    )}
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 space-y-2.5">
                  <h3 className="font-display font-black text-base sm:text-lg text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-bold text-[#FB923C]">
                    {cert.issuer}
                  </p>
                  {cert.batch && (
                    <p className="text-[11px] font-mono text-[#FED7AA]/90">
                      {cert.batch}
                    </p>
                  )}
                  {cert.description && (
                    <p className="text-xs text-[#CBD5E1] font-sans leading-relaxed pt-1">
                      {cert.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer details & Action Button */}
              <div className="px-6 pb-6 pt-3 border-t border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#FED7AA]/80 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#FB923C]" />
                    <span>{cert.year}</span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 font-mono">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openDocument(cert.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:opacity-95 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>
                      {cert.documentType === 'internship_letter'
                        ? 'View Internship Letter'
                        : 'View Certificate'}
                    </span>
                  </button>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#FED7AA] border border-white/10 transition-colors"
                      title="Verify Certificate Online"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card3D>
          ))}
        </motion.div>

      </div>

      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCertId={selectedCertId}
      />
    </section>
  );
}
