import React, { useState } from 'react';
import { 
  ArrowRight, Send, Download, Sparkles, Award, 
  Github, Phone, ExternalLink, Code2, Database,
  Layers, RotateCw, FileCode, Palette, ShieldCheck, FileText
} from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import Card3D from './Card3D';
import CertificateModal from './CertificateModal';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [deck, setDeck] = useState([0, 1, 2, 3]);
  const [isFlipping, setIsFlipping] = useState<number | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [initialCertId, setInitialCertId] = useState<string | undefined>('cert-clickpad-letter');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Specialties matching user's verified credentials with warm peach/coral scheme
  const specialties = [
    { text: 'AppSheet Automation', color: 'from-[#FB923C] to-[#F97316]', icon: Database },
    { text: 'Python & REST APIs', color: 'from-[#FDA4AF] to-[#FB7185]', icon: Code2 },
    { text: 'Anthropic Claude AI', color: 'from-[#F59E0B] to-[#D97706]', icon: Award },
    { text: 'DigiSkills Design', color: 'from-[#F472B6] to-[#E11D48]', icon: Sparkles },
  ];

  const handlePageTurn = () => {
    if (isFlipping !== null) return;
    const topCard = deck[0];
    setIsFlipping(topCard);
    setTimeout(() => {
      setDeck((prev) => [...prev.slice(1), prev[0]]);
      setIsFlipping(null);
    }, 320);
  };

  const selectSheet = (sheetId: number) => {
    if (isFlipping !== null || deck[0] === sheetId) return;
    const idx = deck.indexOf(sheetId);
    if (idx === -1) return;
    setDeck([...deck.slice(idx), ...deck.slice(0, idx)]);
  };

  const pages = [
    {
      id: 0,
      title: 'Profile & Identity',
      subtitle: 'AppSheet Developer & Software Engineer',
      color: 'border-[#FB923C]/50 bg-[#16131B]',
      badgeColor: 'text-[#FED7AA] bg-[#FB923C]/15 border-[#FB923C]/30',
      content: (
        <div className="flex flex-col h-full justify-between">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FB923C] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FED7AA] font-bold">
                Sheet 01 // Identity
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold">
              Active &amp; Available
            </span>
          </div>

          {/* Permanently Large Portrait Image Container - No click-to-enlarge needed */}
          <div className="relative flex-1 w-full rounded-2xl overflow-hidden bg-[#0C0A10] border border-[#FB923C]/30 my-1 shadow-inner">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top select-none"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom summary bar */}
          <div className="pt-2.5 mt-2 border-t border-white/10 flex items-center justify-between">
            <div>
              <h3 className="font-display font-black text-white text-base leading-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-[11px] font-mono text-[#FED7AA]">
                Clickpad Intern · VU Software Engineering
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-[#FB923C]/15 border border-[#FB923C]/30 text-[#FED7AA] text-[10px] font-mono font-bold">
              Tap to Flip →
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'AppSheet Operations Matrix',
      subtitle: 'Clickpad Internship (4 Jul – 4 Oct, 2025)',
      color: 'border-[#FDA4AF]/40 bg-[#181420]',
      badgeColor: 'text-[#FDA4AF] bg-[#FDA4AF]/15 border-[#FDA4AF]/30',
      content: (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-[#FDA4AF]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#FDA4AF] font-bold">
                Sheet 02 // Low-Code ERP
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Clickpad Verified
            </span>
          </div>

          <div className="space-y-3 my-auto py-2">
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-xs font-bold text-white mb-1 flex items-center justify-between">
                <span>Multi-Table Relational DB</span>
                <span className="text-[#FB923C] font-mono text-[10px]">100% Automated</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Engineered inventory tracking, job management, and attendance systems with table relationships, formulas, and automation bots.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-[#FB923C]/10 border border-[#FB923C]/20">
                <span className="text-[10px] font-mono text-[#FED7AA] block">Workflow Bots</span>
                <span className="text-sm font-display font-black text-white">Automated Alerts</span>
              </div>
              <div className="p-3 rounded-xl bg-[#FDA4AF]/10 border border-[#FDA4AF]/20">
                <span className="text-[10px] font-mono text-[#FDA4AF] block">Access Control</span>
                <span className="text-sm font-display font-black text-white">Role-Based Views</span>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setInitialCertId('cert-clickpad-letter');
                setIsCertModalOpen(true);
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-[#FB923C]/20 hover:bg-[#FB923C]/30 border border-[#FB923C]/40 text-[#FED7AA] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#FB923C]" />
              <span>View Official Internship Letter</span>
            </button>
          </div>

          <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>Letter Issued: Oct 30, 2025</span>
            <span className="text-[#FED7AA]">Tap card to flip →</span>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Python & AI Architecture',
      subtitle: 'GRIN Python Crash Course & Anthropic Claude 101',
      color: 'border-amber-500/40 bg-[#17151E]',
      badgeColor: 'text-amber-300 bg-amber-500/15 border-amber-500/30',
      content: (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <FileCode className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                Sheet 03 // Python &amp; AI
              </span>
            </div>
            <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              12+ GitHub Repos
            </span>
          </div>

          <div className="space-y-3 my-auto py-2">
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-[10px] text-slate-300 space-y-1">
              <div className="text-[#FB923C]"># Verified GitHub Engineering</div>
              <div><span className="text-pink-400">class</span> <span className="text-amber-300">PortfolioEngine</span>:</div>
              <div className="pl-3">repos = [<span className="text-emerald-300">"Lahore-City-Explorer"</span>,</div>
              <div className="pl-3"><span className="text-emerald-300">"Bank-OOP"</span>, <span className="text-emerald-300">"Advance-Blog-APIs"</span>]</div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[10px] font-mono text-amber-300">Anthropic Certified</div>
                <div className="text-xs font-bold text-white mt-0.5">Claude 101 AI</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[10px] font-mono text-[#FDA4AF]">GRIN Certified</div>
                <div className="text-xs font-bold text-white mt-0.5">Python Crash Course</div>
              </div>
            </div>
          </div>

          <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>github.com/mahamfurqan00-code</span>
            <span className="text-amber-300">Tap card to flip →</span>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Graphic Design & Digital Marketing',
      subtitle: 'DigiSkills.pk Certified (FVNRB59MK & BYJAWJ6MK)',
      color: 'border-pink-500/40 bg-[#19131D]',
      badgeColor: 'text-pink-300 bg-pink-500/15 border-pink-500/30',
      content: (
        <div className="flex flex-col h-full justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <Palette className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-pink-300 font-bold">
                Sheet 04 // Design &amp; Marketing
              </span>
            </div>
            <span className="text-[10px] font-mono text-pink-300 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
              DigiSkills.pk
            </span>
          </div>

          <div className="space-y-3 my-auto py-2">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
                <span>DSTP3.0-Batch-02 (Dec 2025 – Mar 2026)</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Govt-certified Graphic Design (ID: FVNRB59MK) and Digital Marketing (ID: BYJAWJ6MK) issued 14/03/2026 by Ministry of IT &amp; Telecom, Ignite &amp; VU.
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {['Brand Identity', 'UI/UX Mockups', 'Digital Marketing', 'Manual & API QA', 'Typography'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-pink-500/10 border border-pink-500/25 text-pink-200 text-[10px] font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span>BS Software Engineering (VU)</span>
            <span className="text-pink-300">Tap card to flip →</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#121824] to-[#0B0F19]">
      {/* Background ambient lighting matching peach & coral palette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 8, 0] 
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[8%] w-52 h-52 bg-[#FB923C]/15 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0] 
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 right-[12%] w-64 h-64 bg-[#FDA4AF]/15 rounded-full blur-3xl" 
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text Content (Small click-to-enlarge pic removed as requested) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status Badge */}
            <motion.div 
              variants={itemVariants} 
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <div className="bg-white/5 border border-[#FB923C]/30 px-4 py-1.5 rounded-full w-max flex items-center gap-2 shadow-sm shadow-[#FB923C]/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[#FED7AA] font-bold tracking-wider uppercase text-[11px] font-mono">
                  AppSheet Developer (Clickpad) · Software Engineer
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FED7AA]/70 font-mono">
                Software Engineering &amp; QA Portfolio
              </span>
            </motion.div>

            {/* HIGHLY PROMINENT NAME with PEACH / CORAL PALETTE */}
            <motion.div variants={itemVariants} className="mb-4 relative">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FED7AA]/70 block mb-1 font-mono">
                Hello, I am
              </span>
              <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-[82px] tracking-tight leading-[0.92] text-white">
                <span className="bg-gradient-to-r from-white via-[#FED7AA] to-[#FDBA74] bg-clip-text text-transparent">
                  Maham
                </span>{' '}
                <span className="bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,146,60,0.45)]">
                  Furqan
                </span>
              </h1>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.h2 
              variants={itemVariants} 
              className="font-display font-bold text-lg sm:text-2xl text-slate-200 leading-snug mb-5"
            >
              Enterprise <span className="text-[#FB923C]">Business Automation</span> &amp; Verified <span className="text-[#FDA4AF]">Software Engineering.</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-2xl mb-6 font-sans"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Direct Clickable Quick Badges / Contacts with Peach Styling */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-8 text-xs font-mono">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#FB923C]/10 text-slate-200 border border-[#FB923C]/20 hover:border-[#FB923C]/50 transition-colors"
                title="View GitHub Account"
              >
                <Github className="w-3.5 h-3.5 text-[#FB923C]" />
                <span>github.com/mahamfurqan00-code</span>
                <ExternalLink className="w-3 h-3 text-[#FED7AA]" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 text-slate-200 border border-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                title="Click to Call"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+92 328 5778746</span>
              </a>

              <a
                href={PERSONAL_INFO.locationMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-amber-500/10 text-slate-200 border border-amber-500/20 hover:border-amber-500/50 transition-colors"
                title="Open in Google Maps"
              >
                <span className="w-2 h-2 rounded-full bg-[#FB923C]" />
                <span>Shahdara, Lahore</span>
              </a>
            </motion.div>

            {/* Quick Specialties Grid with 3D Tilt */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {specialties.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <Card3D
                    key={index}
                    maxTilt={10}
                    className="p-3.5 rounded-2xl border bg-[#192231]/80 border-white/10 hover:border-[#FB923C]/50 transition-all shadow-md"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${spec.color} flex items-center justify-center text-slate-950 font-black mb-2 shadow`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-bold text-white block">{spec.text}</span>
                  </Card3D>
                );
              })}
            </motion.div>

            {/* Clickable Actions with Peach Gradient + Internship Letter & Certificates Button */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] hover:opacity-95 active:scale-95 transition-all cursor-pointer text-sm shadow-lg shadow-orange-500/25"
              >
                <span>View Portfolio Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setInitialCertId('cert-clickpad-letter');
                  setIsCertModalOpen(true);
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-[#FED7AA] bg-[#FB923C]/15 hover:bg-[#FB923C]/25 border border-[#FB923C]/40 active:scale-95 transition-all cursor-pointer text-sm shadow-md"
              >
                <FileText className="w-4 h-4 text-[#FB923C]" />
                <span>Internship Letter &amp; Certificates</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-[#FB923C]/10 border border-[#FB923C]/30 active:scale-95 transition-all cursor-pointer text-sm"
              >
                <Github className="w-4 h-4 text-[#FB923C]" />
                <span>GitHub Profile</span>
              </a>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-transparent hover:bg-white/5 border border-white/20 active:scale-95 transition-all cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Contact</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-bold border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4 text-[#FB923C]" />
                <span>CV</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Permanently Large 3D Interactive Paper Sheet Stack */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.2 }}
          >
            {/* Interactive instruction pill */}
            <div className="mb-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#FB923C]/30 text-xs font-mono text-[#FED7AA] shadow-sm">
              <RotateCw className="w-3.5 h-3.5 text-[#FB923C] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Click card to turn paper sheet ({deck.indexOf(deck[0]) + 1}/{pages.length})</span>
            </div>

            {/* Permanently Larger 3D Paper Stack Container */}
            <div 
              onClick={handlePageTurn}
              className="relative w-[340px] h-[490px] sm:w-[400px] sm:h-[560px] cursor-pointer group select-none"
              style={{ perspective: '1200px' }}
            >
              {deck.map((pageIndex, stackPosition) => {
                const page = pages[pageIndex];
                const isTop = stackPosition === 0;
                const isCurrentlyFlipping = isFlipping === pageIndex;

                return (
                  <motion.div
                    key={page.id}
                    layout
                    initial={false}
                    animate={{
                      scale: 1 - stackPosition * 0.04,
                      y: stackPosition * 12,
                      x: stackPosition * 6,
                      rotateZ: isCurrentlyFlipping ? -12 : stackPosition * 2.5,
                      rotateY: isCurrentlyFlipping ? -110 : 0,
                      opacity: stackPosition > 2 ? 0 : 1 - stackPosition * 0.18,
                      zIndex: pages.length - stackPosition,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 22,
                    }}
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'left center' }}
                    className={`absolute inset-0 rounded-3xl p-5 border-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-colors ${page.color} ${
                      isTop ? 'hover:border-[#FB923C]/80' : 'pointer-events-none'
                    }`}
                  >
                    {page.content}
                  </motion.div>
                );
              })}
            </div>

            {/* Sheet Selector Dots & Current Sheet Label */}
            <div className="mt-7 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                {pages.map((p) => {
                  const isActive = deck[0] === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => selectSheet(p.id)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        isActive ? 'w-7 bg-[#FB923C]' : 'w-2 bg-white/25 hover:bg-white/50'
                      }`}
                      title={`Switch to ${p.title}`}
                    />
                  );
                })}
              </div>
              <span className="text-[11px] font-mono text-[#FED7AA]/80 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#FB923C]" />
                Viewing: <strong className="text-white">{pages[deck[0]].title}</strong>
              </span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Official Internship Letter & Certificates Viewer Modal */}
      <CertificateModal
        isOpen={isCertModalOpen}
        onClose={() => setIsCertModalOpen(false)}
        initialCertId={initialCertId}
      />
    </section>
  );
}
