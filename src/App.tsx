/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { 
  ArrowUp, Github, Linkedin, Mail, Phone, MapPin, 
  Heart, ExternalLink, RefreshCw, CheckCircle2, ShieldCheck,
  Sparkles, Code2, Database
} from 'lucide-react';
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
import ThreeDBackground from './components/ThreeDBackground';
import Cursor3D from './components/Cursor3D';

// Data & Types
import { PERSONAL_INFO, PROJECTS as DEFAULT_PROJECTS, INITIAL_GITHUB_REPOS } from './data';
import { Project, GitHubRepo } from './types';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) return saved === 'dark';
    return true; // Default to eye-safe dark mode
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // GitHub Repositories state (persisted in localStorage for dynamic add/remove)
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>(() => {
    const saved = localStorage.getItem('portfolio_github_repos_v4');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_GITHUB_REPOS;
      }
    }
    return INITIAL_GITHUB_REPOS;
  });

  // Projects state (derived & synced with GitHub repos)
  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('portfolio_custom_projects_v4');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_PROJECTS;
      }
    }
    return DEFAULT_PROJECTS;
  });

  const [isScanning, setIsScanning] = useState(false);
  const [lastScannedTime, setLastScannedTime] = useState<string>(() => {
    return localStorage.getItem('portfolio_last_scanned') || 'Just now';
  });

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

  // Toggle repository visibility in portfolio
  const handleToggleRepo = (repoId: number) => {
    setGithubRepos(prev => {
      const updated = prev.map(repo => {
        if (repo.id === repoId) {
          const nextState = !repo.isIncluded;
          return { ...repo, isIncluded: nextState };
        }
        return repo;
      });
      localStorage.setItem('portfolio_github_repos', JSON.stringify(updated));
      return updated;
    });

    // Update corresponding project in portfolio view
    setProjects(prev => {
      const targetRepo = githubRepos.find(r => r.id === repoId);
      if (!targetRepo) return prev;

      const updated = prev.map(p => {
        if (p.githubUrl?.toLowerCase().includes(targetRepo.name.toLowerCase())) {
          return { ...p, inPortfolio: !targetRepo.isIncluded };
        }
        return p;
      });
      localStorage.setItem('portfolio_custom_projects', JSON.stringify(updated));
      return updated;
    });
  };

  // Select all repositories
  const handleSelectAllRepos = () => {
    setGithubRepos(prev => {
      const updated = prev.map(r => ({ ...r, isIncluded: true }));
      localStorage.setItem('portfolio_github_repos', JSON.stringify(updated));
      return updated;
    });

    setProjects(prev => {
      const updated = prev.map(p => ({ ...p, inPortfolio: true }));
      localStorage.setItem('portfolio_custom_projects', JSON.stringify(updated));
      return updated;
    });
  };

  // Deselect all repositories
  const handleDeselectAllRepos = () => {
    setGithubRepos(prev => {
      const updated = prev.map(r => ({ ...r, isIncluded: false }));
      localStorage.setItem('portfolio_github_repos', JSON.stringify(updated));
      return updated;
    });

    setProjects(prev => {
      const updated = prev.map(p => (p.isFromGithub ? { ...p, inPortfolio: false } : p));
      localStorage.setItem('portfolio_custom_projects', JSON.stringify(updated));
      return updated;
    });
  };

  // Reset to initial defaults
  const handleResetRepoDefaults = () => {
    setGithubRepos(INITIAL_GITHUB_REPOS);
    setProjects(DEFAULT_PROJECTS);
    localStorage.removeItem('portfolio_github_repos');
    localStorage.removeItem('portfolio_custom_projects');
  };

  // Add custom repo
  const handleAddCustomRepo = (newRepo: GitHubRepo) => {
    const updatedRepos = [newRepo, ...githubRepos];
    setGithubRepos(updatedRepos);
    localStorage.setItem('portfolio_github_repos', JSON.stringify(updatedRepos));

    // Also add to project cards
    const newProject: Project = {
      id: `proj-custom-${newRepo.id}`,
      title: newRepo.name.replace(/[-_]/g, ' '),
      category: newRepo.language?.toLowerCase().includes('python') ? 'python' : 'software',
      description: newRepo.description || 'Custom repository synced via live portfolio manager.',
      longDescription: newRepo.description || 'Custom verified repository added from GitHub profile @' + PERSONAL_INFO.githubUsername,
      objective: 'Engineering automated solutions and sharing open source deliverables on GitHub.',
      process: [
        'Version control and modular source architecture initialized on GitHub.',
        'Continuous refinement of documentation and clean code standards.',
        'Integration into portfolio showcase.'
      ],
      results: 'Repository live and synchronized with GitHub.',
      resultsMetrics: ['Live on GitHub', 'Version Controlled', 'Clean Architecture'],
      features: ['Source code repository', 'Version history tracking'],
      tags: [newRepo.language || 'Code', 'GitHub', 'Open Source'],
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      githubUrl: newRepo.html_url,
      language: newRepo.language || 'Code',
      isFromGithub: true,
      inPortfolio: true,
    };

    const updatedProjects = [newProject, ...projects];
    setProjects(updatedProjects);
    localStorage.setItem('portfolio_custom_projects', JSON.stringify(updatedProjects));
  };

  // Live GitHub Account Scanner API call
  const handleRefreshFromGitHub = useCallback(async () => {
    setIsScanning(true);
    try {
      const response = await fetch(`https://api.github.com/users/${PERSONAL_INFO.githubUsername}/repos?sort=updated&per_page=30`);
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const mappedRepos: GitHubRepo[] = data.map((r: any) => ({
            id: r.id,
            name: r.name,
            full_name: r.full_name,
            description: r.description,
            html_url: r.html_url,
            language: r.language,
            stargazers_count: r.stargazers_count || 0,
            forks_count: r.forks_count || 0,
            updated_at: r.updated_at,
            topics: r.topics || [],
            default_branch: r.default_branch || 'main',
            isIncluded: true,
          }));

          setGithubRepos(mappedRepos);
          localStorage.setItem('portfolio_github_repos', JSON.stringify(mappedRepos));

          const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          setLastScannedTime(timestamp);
          localStorage.setItem('portfolio_last_scanned', timestamp);
        }
      }
    } catch (e) {
      console.warn('GitHub API fetch failed or rate-limited, continuing with seeded cache', e);
    } finally {
      setIsScanning(false);
    }
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-x-hidden ${
      isDarkMode ? 'dark bg-[#0F172A] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* 3D Interactive Spatial Particle Background */}
      <ThreeDBackground />

      {/* 3D Cursor Rotator and Follower */}
      <Cursor3D />

      {/* Background ambient radial glows */}
      {isDarkMode && (
        <>
          <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[900px] opacity-25 pointer-events-none z-0">
            <div className="w-full h-full bg-glow-cyan" />
          </div>
          <div className="absolute top-[28%] left-0 w-full lg:w-1/2 h-[900px] opacity-20 pointer-events-none z-0">
            <div className="w-full h-full bg-glow-blue" />
          </div>
          <div className="absolute bottom-0 right-0 w-full lg:w-1/2 h-[900px] opacity-20 pointer-events-none z-0">
            <div className="w-full h-full bg-glow-cyan" />
          </div>
        </>
      )}

      {/* Sticky Navigation bar with 3D Dropdowns */}
      <Navbar 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenScanner={() => {
          const el = document.getElementById('portfolio');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Layout Sections */}
      <main className="relative z-10">
        <Hero 
          isDarkMode={isDarkMode} 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenScanner={() => {
            const el = document.getElementById('portfolio');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <About isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Portfolio 
          isDarkMode={isDarkMode} 
          projects={projects}
          githubRepos={githubRepos}
          onToggleRepo={handleToggleRepo}
          onSelectAllRepos={handleSelectAllRepos}
          onDeselectAllRepos={handleDeselectAllRepos}
          onResetRepoDefaults={handleResetRepoDefaults}
          onAddCustomRepo={handleAddCustomRepo}
          onRefreshFromGitHub={handleRefreshFromGitHub}
          isScanning={isScanning}
          lastScannedTime={lastScannedTime}
        />
        <Experience isDarkMode={isDarkMode} />
        <Certifications isDarkMode={isDarkMode} />
        <Blog isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Comprehensive Professional Footer with User's Peach Scheme & Avatar */}
      <footer className="border-t py-16 no-print relative z-10 bg-[#0C0A10]/95 border-white/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Column 1: Brand & Profile Picture */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-[#FB923C] p-0.5 bg-gradient-to-tr from-[#FB923C] to-[#FDA4AF] shadow-lg shrink-0">
                  <img 
                    src={PERSONAL_INFO.avatarUrl} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover rounded-[14px] object-top"
                  />
                </div>
                <div>
                  <span className="font-display font-black text-xl tracking-tight text-white block">
                    Maham Furqan<span className="text-[#FB923C]">.portfolio</span>
                  </span>
                  <span className="text-[10px] font-mono text-[#FED7AA]/70 tracking-wider uppercase">
                    AppSheet Developer & QA Specialist
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans">
                Software Engineering student, AppSheet Automation Developer (Clickpad), QA Specialist, and Graphic Designer based in Shahdara, Lahore, Pakistan.
              </p>
              
              {/* GitHub live sync indicator with Peach accent */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-[#FB923C]/30 text-xs font-mono text-[#FED7AA]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>GitHub Sync: @{PERSONAL_INFO.githubUsername}</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FED7AA]">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-bold text-slate-300">
                <li><a href="#home" className="hover:text-[#FB923C] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#FB923C] transition-colors">About Me</a></li>
                <li><a href="#portfolio" className="hover:text-[#FB923C] transition-colors">Portfolio & Repos</a></li>
                <li><a href="#experience" className="hover:text-[#FB923C] transition-colors">Work Experience</a></li>
                <li><a href="#certifications" className="hover:text-[#FB923C] transition-colors">Certifications</a></li>
                <li><a href="#contact" className="hover:text-[#FB923C] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Direct Clickable Contacts */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FED7AA]">
                Clickable Contacts
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
                <li>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                    <span className="w-3.5 h-3.5 flex items-center justify-center font-bold text-emerald-400">WA</span>
                    <span>WhatsApp Direct</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-[#FB923C] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#FB923C] shrink-0" />
                    <span>{PERSONAL_INFO.email}</span>
                  </a>
                </li>
                <li>
                  <a href={PERSONAL_INFO.locationMapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Shahdara, Lahore, Punjab</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Verified External Channels */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#FED7AA]">
                Code & Profiles
              </h4>
              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-[#FB923C]/10 border border-white/10 hover:border-[#FB923C]/30 transition-colors flex items-center justify-between text-xs text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-[#FB923C]" />
                    <span>GitHub: @mahamfurqan00-code</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between text-xs text-white group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn: mahamfurqan00</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
                </a>

                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="w-full p-3 rounded-2xl bg-white/5 hover:bg-[#FB923C]/10 border border-white/10 hover:border-[#FB923C]/30 transition-colors flex items-center justify-between text-xs text-white group cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#FDA4AF]" />
                    <span>Printable Digital Resume</span>
                  </div>
                  <ArrowUp className="w-3.5 h-3.5 rotate-45 text-slate-500 group-hover:text-white" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Credits */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
            <p>© {new Date().getFullYear()} Maham Furqan. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Interactive 3D Portfolio & GitHub Sync Engine</span>
              <span className="text-slate-600">·</span>
              <span className="text-[#FB923C] font-bold">Shahdara, Lahore</span>
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

      {/* Smooth Back to Top Trigger Button with Peach Gradient */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full shadow-2xl bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] text-slate-950 font-black hover:opacity-95 cursor-pointer no-print focus:outline-none border border-white/20 active:scale-95 shadow-orange-500/30"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5 text-slate-950" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
