import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Maximize2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface ProfilePhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfilePhotoModal: React.FC<ProfilePhotoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative max-w-2xl w-full max-h-[90vh] bg-[#14101A] border border-[#FB923C]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1C1624]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#FB923C] shrink-0">
                <img 
                  src={PERSONAL_INFO.avatarUrl} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm sm:text-base leading-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <span className="text-[11px] font-mono text-[#FED7AA] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#FB923C]" />
                  Original Profile Image (Unmodified)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href={PERSONAL_INFO.avatarUrl} 
                download="maham-furqan-profile.jpg"
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#FB923C]/50 hover:bg-[#FB923C]/20 text-[#FED7AA] transition-colors"
                title="Download original image"
              >
                <Download className="w-4 h-4" />
              </a>
              <button 
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Image presentation area: Full natural image displayed cleanly as it is */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-[#0C0A10]">
            <div className="relative max-h-[68vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={PERSONAL_INFO.avatarUrl} 
                alt={`${PERSONAL_INFO.name} Profile`} 
                className="max-h-[68vh] w-auto object-contain rounded-2xl select-none"
              />
            </div>
          </div>

          {/* Bottom info caption */}
          <div className="px-6 py-3 border-t border-white/10 bg-[#1C1624] flex items-center justify-between text-xs text-[#CBD5E1] font-mono">
            <span>Shahdara, Lahore · Software Engineering & AppSheet</span>
            <span className="text-[#FED7AA] hidden sm:inline">100% Authentic Photo</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProfilePhotoModal;
