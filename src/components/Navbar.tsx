import { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, FileText, ChevronDown, Github, Linkedin, 
  Mail, Phone, MapPin, Send, Sparkles, FolderGit2,
  Award, Briefcase, Code2, MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode?: () => void;
  onOpenResume: () => void;
  onOpenScanner?: () => void;
}

export default function Navbar({ onOpenResume, onOpenScanner }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [openDropdown, setOpenDropdown] = useState<'explore' | 'connect' | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    setOpenDropdown(null);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        scrolled 
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30' 
          : 'bg-[#0B0F19]/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" ref={dropdownRef}>
          
          {/* ZONE 1: BRAND ZONE with User Profile Picture */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center gap-3 group" 
            onClick={() => scrollToSection('home')}
          >
            {/* User Profile Picture in Header */}
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FB923C] shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <img 
                src={PERSONAL_INFO.avatarUrl} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tight text-white group-hover:text-[#FED7AA] transition-colors leading-tight">
                Maham Furqan
              </span>
              <span className="text-[10px] font-mono text-[#FED7AA]/70 tracking-wider uppercase">
                AppSheet & Software Engineer
              </span>
            </div>
          </div>

          {/* ZONE 2: DESKTOP NAVIGATION LINKS WITH 3D DROPDOWNS */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => scrollToSection('home')}
              className={`px-3 py-2 text-xs font-bold transition-colors cursor-pointer rounded-lg ${
                activeSection === 'home' ? 'text-[#FB923C]' : 'text-slate-200 hover:text-white'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className={`px-3 py-2 text-xs font-bold transition-colors cursor-pointer rounded-lg ${
                activeSection === 'about' ? 'text-[#FB923C]' : 'text-slate-200 hover:text-white'
              }`}
            >
              About
            </button>

            {/* DROPDOWN 1: EXPLORE WORK & CODE */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'explore' ? null : 'explore')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold transition-colors cursor-pointer rounded-lg ${
                  openDropdown === 'explore' || activeSection === 'portfolio'
                    ? 'text-[#FB923C] bg-white/5'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Explore</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'explore' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'explore' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#192231] border border-white/15 shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-white/5 text-[10px] font-mono font-bold text-[#FED7AA] uppercase">
                      Portfolio Navigation
                    </div>

                    <button
                      onClick={() => scrollToSection('portfolio')}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FB923C]/15 text-[#FB923C] flex items-center justify-center shrink-0">
                        <FolderGit2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-[#FB923C] transition-colors">Featured Projects</div>
                        <div className="text-[10px] text-slate-400">AppSheet, Python & Automation</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        scrollToSection('portfolio');
                        if (onOpenScanner) onOpenScanner();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FDA4AF]/15 text-[#FDA4AF] flex items-center justify-center shrink-0">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold flex items-center gap-1.5 group-hover:text-[#FDA4AF] transition-colors">
                          <span>GitHub Live Scanner</span>
                          <span className="text-[9px] bg-[#FB923C]/20 text-[#FED7AA] px-1.5 py-0.5 rounded-full font-mono font-bold">14 repos</span>
                        </div>
                        <div className="text-[10px] text-slate-400">Sync & manage repositories</div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollToSection('skills')}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-amber-400 transition-colors">Technical Skills</div>
                        <div className="text-[10px] text-slate-400">AppSheet, Python, QA & Design</div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollToSection('experience')}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-[#FB923C] flex items-center justify-center shrink-0">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-[#FB923C] transition-colors">Work Experience</div>
                        <div className="text-[10px] text-slate-400">Clickpad & Python Roles</div>
                      </div>
                    </button>

                    <button
                      onClick={() => scrollToSection('certifications')}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-left transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-rose-400 transition-colors">Certifications</div>
                        <div className="text-[10px] text-slate-400">Python, Claude 101, DigiSkills</div>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Link to Portfolio */}
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`px-3 py-2 text-xs font-bold transition-colors cursor-pointer rounded-lg ${
                activeSection === 'portfolio' ? 'text-[#FB923C]' : 'text-slate-200 hover:text-white'
              }`}
            >
              Portfolio
            </button>

            {/* Direct Link to Experience */}
            <button
              onClick={() => scrollToSection('experience')}
              className={`px-3 py-2 text-xs font-bold transition-colors cursor-pointer rounded-lg ${
                activeSection === 'experience' ? 'text-[#FB923C]' : 'text-slate-200 hover:text-white'
              }`}
            >
              Experience
            </button>

            {/* DROPDOWN 2: CONNECT & CONTACT CHANNELS */}
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(openDropdown === 'connect' ? null : 'connect')}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-bold transition-colors cursor-pointer rounded-lg ${
                  openDropdown === 'connect' || activeSection === 'contact'
                    ? 'text-[#FB923C] bg-white/5'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                <span>Connect</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  openDropdown === 'connect' ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'connect' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-80 rounded-2xl bg-[#192231] border border-white/15 shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    <div className="px-3 py-2 border-b border-white/5 text-[10px] font-mono font-bold text-[#FED7AA] uppercase">
                      Direct Contact Channels
                    </div>

                    {/* GitHub Link */}
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                        <Github className="w-4 h-4 text-[#FB923C]" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-[#FED7AA] transition-colors">GitHub Account</div>
                        <div className="text-[10px] text-slate-400">@{PERSONAL_INFO.githubUsername}</div>
                      </div>
                    </a>

                    {/* LinkedIn Link */}
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#0077B5]/20 text-[#0077B5] flex items-center justify-center shrink-0">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-[#38BDF8] transition-colors">LinkedIn Profile</div>
                        <div className="text-[10px] text-slate-400">mahamfurqan00</div>
                      </div>
                    </a>

                    {/* Direct Call Link */}
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-emerald-400 transition-colors">Direct Call</div>
                        <div className="text-[10px] text-slate-400">{PERSONAL_INFO.phone}</div>
                      </div>
                    </a>

                    {/* WhatsApp Link */}
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-300 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-emerald-300 transition-colors">WhatsApp Direct</div>
                        <div className="text-[10px] text-slate-400">+92 328 5778746</div>
                      </div>
                    </a>

                    {/* Email Link */}
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-rose-400 transition-colors">Email Message</div>
                        <div className="text-[10px] text-slate-400">{PERSONAL_INFO.email}</div>
                      </div>
                    </a>

                    {/* Location Link */}
                    <a
                      href={PERSONAL_INFO.locationMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors text-xs text-white group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold group-hover:text-amber-400 transition-colors">Location</div>
                        <div className="text-[10px] text-slate-400">{PERSONAL_INFO.location}</div>
                      </div>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className={`px-3 py-2 text-xs font-bold transition-colors cursor-pointer rounded-lg ${
                activeSection === 'contact' ? 'text-[#FB923C]' : 'text-slate-200 hover:text-white'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* ZONE 3: ACTIONS with Peach Styling */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-[#FB923C]" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] hover:opacity-90 shadow-md shadow-orange-500/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-xl text-white bg-white/5 border border-white/10"
              title="View Resume"
            >
              <FileText className="w-4 h-4 text-[#FB923C]" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-white bg-white/5 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t bg-[#0B0F19] border-white/10 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto"
          >
            {/* Header info with profile avatar in mobile drawer */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 mb-2">
              <img 
                src={PERSONAL_INFO.avatarUrl} 
                alt={PERSONAL_INFO.name} 
                className="w-10 h-10 rounded-full object-cover object-top border border-[#FB923C]"
              />
              <div>
                <span className="font-bold text-sm text-white block">{PERSONAL_INFO.name}</span>
                <span className="text-[10px] text-[#FED7AA] font-mono">AppSheet & Software Engineer</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
              <button
                onClick={() => scrollToSection('home')}
                className="p-2.5 rounded-xl bg-white/5 text-left text-xs font-bold text-white hover:bg-white/10"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="p-2.5 rounded-xl bg-white/5 text-left text-xs font-bold text-white hover:bg-white/10"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="p-2.5 rounded-xl bg-white/5 text-left text-xs font-bold text-white hover:bg-white/10"
              >
                Featured Works
              </button>
              <button
                onClick={() => {
                  scrollToSection('portfolio');
                  if (onOpenScanner) onOpenScanner();
                }}
                className="p-2.5 rounded-xl bg-[#FB923C]/10 text-left text-xs font-bold text-[#FB923C] hover:bg-[#FB923C]/20"
              >
                GitHub Scanner
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="p-2.5 rounded-xl bg-white/5 text-left text-xs font-bold text-white hover:bg-white/10"
              >
                Skills & Tech
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="p-2.5 rounded-xl bg-white/5 text-left text-xs font-bold text-white hover:bg-white/10"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('certifications')}
                className="p-2.5 rounded-xl bg-white/5 text-left text-xs font-bold text-white hover:bg-white/10"
              >
                Certifications
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="p-2.5 rounded-xl bg-white/5 text-left text-xs font-bold text-white hover:bg-white/10"
              >
                Contact
              </button>
            </div>

            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-mono text-[#FED7AA] uppercase tracking-wider block px-1">
                Direct Clickable Channels
              </span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 text-xs text-white"
              >
                <Github className="w-4 h-4 text-[#FB923C]" />
                <span>GitHub: @mahamfurqan00-code</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 text-xs text-white"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 text-xs text-white"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call: {PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 text-xs text-white"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {PERSONAL_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-full text-xs font-bold bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Open Printable Resume</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
