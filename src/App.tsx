/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Modular Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ResumeView from './components/ResumeView';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) return saved === 'dark';
    return true; // Default to eye-safe dark mode
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark class on the HTML document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  // Handle scroll-to-top button visibility
  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-x-hidden ${
      isDarkMode ? 'dark bg-[#0F172A] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background ambient radial glows for dark mode */}
      {isDarkMode && (
        <>
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[1000px] opacity-30 pointer-events-none z-0">
            <div className="w-full h-full bg-glow-cyan" />
          </div>
          <div className="absolute top-[30%] left-0 w-full lg:w-1/2 h-[1000px] opacity-20 pointer-events-none z-0">
            <div className="w-full h-full bg-glow-blue" />
          </div>
          <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-[1000px] opacity-25 pointer-events-none z-0">
            <div className="w-full h-full bg-glow-cyan" />
          </div>
        </>
      )}

      {/* Sticky Navigation bar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onOpenResume={() => setIsResumeOpen(true)} 
      />

      {/* Main Layout Sections */}
      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} onOpenResume={() => setIsResumeOpen(true)} />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Portfolio isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Certifications isDarkMode={isDarkMode} />
        <Blog isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Structured Footer */}
      <footer className="border-t py-12 no-print relative z-10 bg-[#0B0F19]/90 border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Branding */}
            <div className="text-center md:text-left space-y-1.5">
              <span className="font-display font-extrabold text-lg tracking-tight text-white">
                Maham Furqan<span className="text-[#b2ffff]">.Portfolio</span>
              </span>
              <p className="text-xs text-[#CBD5E1]">
                Graphic Designer | Digital Marketer | QA Associate | Software Engineering Student
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4">
              <a 
                href="mailto:mahamfurqan00@gmail.com" 
                className="p-2.5 rounded-xl border border-white/10 text-[#94A3B8] hover:text-[#b2ffff] hover:border-[#3B82F6]/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                title="Email Me"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mahamfurqan00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-[#94A3B8] hover:text-[#b2ffff] hover:border-[#3B82F6]/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://github.com/mahamfurqan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-white/10 text-[#94A3B8] hover:text-[#b2ffff] hover:border-[#3B82F6]/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300"
                title="GitHub Repositories"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]">
            <p>© {new Date().getFullYear()} Maham Furqan. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>using React, Tailwind CSS, & Lucide Icons</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Printable Digital Resume Overlay Sheet */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeView 
            isOpen={isResumeOpen} 
            onClose={() => setIsResumeOpen(false)} 
            isDarkMode={isDarkMode} 
          />
        )}
      </AnimatePresence>

      {/* Smooth Back to Top Trigger Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full shadow-2xl bg-gradient-to-r from-[#3B82F6] to-[#b2ffff] text-slate-950 hover:opacity-95 cursor-pointer no-print focus:outline-none border border-white/10"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

