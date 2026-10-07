import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ShieldCheck, ExternalLink, Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { Certification } from '../types';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCertId?: string;
}

export default function CertificateModal({ isOpen, onClose, initialCertId }: CertificateModalProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (initialCertId) {
      const idx = CERTIFICATIONS.findIndex(
        (c) => c.id === initialCertId || c.title === initialCertId
      );
      if (idx !== -1) {
        setSelectedIndex(idx);
      }
    } else {
      setSelectedIndex(0);
    }
  }, [initialCertId, isOpen]);

  if (!isOpen) return null;

  const currentCert: Certification = CERTIFICATIONS[selectedIndex] || CERTIFICATIONS[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? CERTIFICATIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === CERTIFICATIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#14101C] border border-[#FB923C]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        >
          {/* Top Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 bg-[#1C1626] border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FB923C] to-[#FDA4AF] flex items-center justify-center text-slate-950 shadow-md shrink-0">
                {currentCert.documentType === 'internship_letter' ? (
                  <FileText className="w-5 h-5" />
                ) : (
                  <Award className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FB923C]/20 text-[#FED7AA] border border-[#FB923C]/30 font-bold">
                    {currentCert.category}
                  </span>
                  {currentCert.certificateId && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      ID: {currentCert.certificateId}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-black text-white text-sm sm:text-lg leading-snug mt-0.5">
                  {currentCert.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {currentCert.credentialUrl && (
                <a
                  href={currentCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span className="hidden sm:inline">Verify Online</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {currentCert.imageUrl && (
                <a
                  href={currentCert.imageUrl}
                  download={`${currentCert.title.replace(/\s+/g, '-')}.svg`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-[#FB923C]/20 text-[#FED7AA] border border-white/10 hover:border-[#FB923C]/40 text-xs font-mono font-bold transition-colors"
                  title="Download Document"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Tabs Bar */}
          <div className="flex items-center gap-2 px-5 py-2.5 bg-[#0F0C16] border-b border-white/10 overflow-x-auto no-scrollbar">
            {CERTIFICATIONS.map((cert, idx) => {
              const active = idx === selectedIndex;
              return (
                <button
                  key={cert.id || idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                    active
                      ? 'bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 border-transparent shadow-md'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:border-[#FB923C]/40 hover:text-white'
                  }`}
                >
                  {cert.documentType === 'internship_letter' ? (
                    <FileText className="w-3.5 h-3.5" />
                  ) : (
                    <Award className="w-3.5 h-3.5" />
                  )}
                  <span>
                    {cert.documentType === 'internship_letter'
                      ? 'Clickpad Internship Letter'
                      : cert.title.replace('Training Certificate — ', 'DigiSkills: ').replace(' — Certificate of Completion', '')}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Document Display */}
          <div className="relative flex-1 overflow-y-auto p-4 sm:p-6 bg-[#09070E] flex items-center justify-center min-h-[360px]">
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-5 z-20 p-2.5 rounded-full bg-[#16131D]/90 hover:bg-[#FB923C] text-white hover:text-slate-950 border border-white/15 shadow-xl transition-all cursor-pointer"
              title="Previous Document"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="max-w-3xl w-full flex flex-col items-center">
              {currentCert.imageUrl && (
                <div className="w-full rounded-2xl overflow-hidden border-2 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] bg-white">
                  <img
                    src={currentCert.imageUrl}
                    alt={currentCert.title}
                    className="w-full max-h-[62vh] object-contain mx-auto block"
                  />
                </div>
              )}
            </div>

            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-5 z-20 p-2.5 rounded-full bg-[#16131D]/90 hover:bg-[#FB923C] text-white hover:text-slate-950 border border-white/15 shadow-xl transition-all cursor-pointer"
              title="Next Document"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Metadata Bar */}
          <div className="px-6 py-3.5 bg-[#1C1626] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
            <div className="text-slate-300 font-sans">
              <strong className="text-[#FED7AA]">{currentCert.issuer}</strong> · Issued: {currentCert.year}
              {currentCert.batch ? ` · ${currentCert.batch}` : ''}
            </div>
            <div className="font-mono text-[#FED7AA] text-[11px] shrink-0">
              Document {selectedIndex + 1} of {CERTIFICATIONS.length}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
