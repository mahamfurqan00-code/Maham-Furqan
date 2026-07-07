import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Briefcase, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ isDarkMode, toggleDarkMode, onOpenResume }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighters
      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120;

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

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Skills', value: 'skills' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'Experience', value: 'experience' },
    { label: 'Blog', value: 'blog' },
    { label: 'Contact', value: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
      scrolled 
        ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg flex items-center justify-center font-bold text-lg text-white shadow-md transition-colors">
              MF
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
              Maham<span className="text-[#06B6D4]">.Portfolio</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => scrollToSection(item.value)}
                className={`relative px-3 py-1.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === item.value
                    ? 'text-[#3B82F6] font-bold'
                    : 'text-white hover:text-[#3B82F6]'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.value && (
                  <motion.div 
                    layoutId="activeNavUnderline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#3B82F6]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <div className="h-6 w-px bg-white/10 mx-3" />

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="bg-[#3B82F6] hover:bg-[#2563EB] px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/10 text-white flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Action Buttons */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={onOpenResume}
              className="p-1.5 rounded-lg text-[#3B82F6] hover:bg-white/5 transition-colors"
              title="View Resume"
            >
              <FileText className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-white hover:bg-white/5"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.2 }}
            className="md:hidden border-t bg-[#0F172A] border-white/10"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => scrollToSection(item.value)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-semibold ${
                    activeSection === item.value
                      ? 'text-[#3B82F6] bg-white/5'
                      : 'text-white hover:bg-white/5 hover:text-[#3B82F6]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-base font-bold bg-[#3B82F6] hover:bg-[#2563EB] text-white shadow-md"
                >
                  <FileText className="w-5 h-5" />
                  <span>View Printable Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
