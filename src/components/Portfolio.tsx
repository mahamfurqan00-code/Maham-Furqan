import { useState } from 'react';
import { 
  Palette, Share2, Laptop, ExternalLink, CheckCircle2, 
  ChevronRight, X, Sparkles, TrendingUp, Github, Code2, 
  Database, RefreshCw, SlidersHorizontal, Star, GitFork, 
  Copy, Check, ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, GitHubRepo } from '../types';
import { PERSONAL_INFO } from '../data';
import Card3D from './Card3D';
import GitHubScanner from './GitHubScanner';

interface PortfolioProps {
  isDarkMode: boolean;
  projects: Project[];
  githubRepos: GitHubRepo[];
  onToggleRepo: (repoId: number) => void;
  onSelectAllRepos: () => void;
  onDeselectAllRepos: () => void;
  onResetRepoDefaults: () => void;
  onAddCustomRepo: (repo: GitHubRepo) => void;
  onRefreshFromGitHub: () => Promise<void>;
  isScanning: boolean;
  lastScannedTime: string;
}

export default function Portfolio({
  projects,
  githubRepos,
  onToggleRepo,
  onSelectAllRepos,
  onDeselectAllRepos,
  onResetRepoDefaults,
  onAddCustomRepo,
  onRefreshFromGitHub,
  isScanning,
  lastScannedTime,
}: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'python' | 'apis' | 'software' | 'design'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showScannerPanel, setShowScannerPanel] = useState(false);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all', icon: Sparkles },
    { label: 'AppSheet & Automation', value: 'software', icon: Database },
    { label: 'Python & Data Science', value: 'python', icon: Code2 },
    { label: 'REST APIs', value: 'apis', icon: Laptop },
    { label: 'Graphic Design', value: 'design', icon: Palette },
  ];

  // Only display projects that are marked active in the portfolio
  const visibleProjects = projects.filter(p => p.inPortfolio !== false);

  const filteredProjects = selectedFilter === 'all'
    ? visibleProjects
    : visibleProjects.filter(p => p.category === selectedFilter);

  const copyCloneCommand = (repoUrl: string, id: string) => {
    navigator.clipboard.writeText(`git clone ${repoUrl}.git`);
    setCopiedCloneId(id);
    setTimeout(() => setCopiedCloneId(null), 2000);
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0C0A10] border-t border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#FDA4AF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] uppercase tracking-widest bg-white/5 border border-[#FB923C]/30 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Works & Real Repositories</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Featured Portfolio & Systems
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-sm sm:text-base leading-relaxed">
            Real client deliverables, AppSheet automation workflows (Clickpad), Python data science analytics, and live synced GitHub repositories from @{PERSONAL_INFO.githubUsername}.
          </p>
        </div>

        {/* GitHub Scanner Trigger & Stats Bar with Peach Accents */}
        <div className="mb-10 p-4 sm:p-5 rounded-3xl bg-[#14101A]/90 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FB923C] to-[#FDA4AF] text-slate-950 flex items-center justify-center shrink-0 shadow-md">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">GitHub Account Sync Active</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Synced
                </span>
              </div>
              <p className="text-xs text-[#FED7AA]/80 font-mono mt-0.5">
                Showing {filteredProjects.length} projects · GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-[#FB923C] hover:underline font-bold">@{PERSONAL_INFO.githubUsername}</a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
            <button
              onClick={() => setShowScannerPanel(!showScannerPanel)}
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-[#FB923C]/10 text-white border border-[#FB923C]/30 hover:border-[#FB923C] transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-95"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FB923C]" />
              <span>{showScannerPanel ? 'Hide GitHub Scanner' : 'Manage GitHub Projects (Add/Remove)'}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/20 active:scale-95 font-bold"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Visit GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Collapsible GitHub Scanner & Project Management System */}
        <AnimatePresence>
          {showScannerPanel && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="mb-12 overflow-hidden"
            >
              <GitHubScanner
                repos={githubRepos}
                onToggleRepo={onToggleRepo}
                onSelectAll={onSelectAllRepos}
                onDeselectAll={onDeselectAllRepos}
                onResetDefaults={onResetRepoDefaults}
                onAddCustomRepo={onAddCustomRepo}
                onRefreshFromGitHub={onRefreshFromGitHub}
                isScanning={isScanning}
                lastScannedTime={lastScannedTime}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isSelected = selectedFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] text-slate-950 font-black border-transparent shadow-lg shadow-orange-500/25 scale-105'
                    : 'bg-[#192231]/80 text-[#CBD5E1] border-white/10 hover:border-[#FB923C]/40 hover:bg-[#192231]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-[#FB923C]'}`} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => (
            <Card3D
              key={project.id}
              maxTilt={12}
              className="group flex flex-col h-full rounded-3xl overflow-hidden border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(251,146,60,0.18)] hover:border-[#FB923C]/50 cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              {/* Card Image and category hover overlay */}
              <div className="relative overflow-hidden aspect-video bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Category Badge on Image */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-md bg-slate-950/85 backdrop-blur-md border border-white/15">
                    {project.category === 'python' && <Code2 className="w-3 h-3 text-[#FDA4AF]" />}
                    {project.category === 'software' && <Database className="w-3 h-3 text-[#FB923C]" />}
                    {project.category === 'apis' && <Laptop className="w-3 h-3 text-[#F59E0B]" />}
                    {project.category === 'design' && <Palette className="w-3 h-3 text-[#F472B6]" />}
                    <span className="capitalize">{project.category}</span>
                  </span>

                  {project.language && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-[#FED7AA] backdrop-blur-md border border-white/10">
                      {project.language}
                    </span>
                  )}
                </div>

                {/* Direct GitHub External Link Icon */}
                {project.githubUrl && (
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white border border-white/15 shadow-md flex items-center justify-center transition-all hover:scale-110"
                      title="Open Repository on GitHub"
                    >
                      <Github className="w-3.5 h-3.5 text-[#FB923C]" />
                    </a>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-2.5">
                  <h3 className="font-display font-black text-lg text-white group-hover:text-[#FED7AA] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] line-clamp-3 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tags bottom list */}
                <div className="mt-5 pt-4 border-t border-white/5 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-[#FED7AA] border border-white/5">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-mono text-[#FB923C] px-1 py-0.5 font-bold">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#FB923C] pt-1">
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                    {project.githubUrl && (
                      <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <Github className="w-3 h-3" />
                        <span>Repo</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto no-print">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 bg-[#0B0F19]/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border bg-[#192231] border-white/15 max-h-[90vh] overflow-y-auto no-scrollbar z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md bg-[#0B0F19]/80 hover:bg-[#1F2937] text-white border border-white/15 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Cover Image on top */}
                <div className="relative aspect-video max-h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192231] via-[#192231]/50 to-transparent" />
                  
                  {/* Floating Title on Cover */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FB923C] text-slate-950 shadow font-black">
                      <span className="capitalize">{activeProject.category}</span>
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight drop-shadow">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left Column */}
                  <div className="md:col-span-8 space-y-6">
                    {/* Objectives */}
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider text-[#FB923C]">
                        Project Objective
                      </h4>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed font-sans">
                        {activeProject.objective}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider text-[#FB923C]">
                        Architecture & Overview
                      </h4>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed font-sans">
                        {activeProject.longDescription}
                      </p>
                    </div>

                    {/* Methodology */}
                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider text-[#FB923C]">
                        Engineering & Implementation Steps
                      </h4>
                      <div className="space-y-2">
                        {activeProject.process.map((step, idx) => (
                          <div key={idx} className="flex gap-3 text-xs sm:text-sm text-[#CBD5E1] font-sans">
                            <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#FB923C] flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features list */}
                    {activeProject.features && (
                      <div className="space-y-3">
                        <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider text-[#FB923C]">
                          System Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeProject.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 text-xs text-[#CBD5E1] font-sans">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="md:col-span-4 space-y-6">
                    {/* GitHub Link & Clone Command Box */}
                    {activeProject.githubUrl && (
                      <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-3">
                        <span className="text-[11px] font-mono text-[#FED7AA] uppercase block font-bold">
                          GitHub Repository
                        </span>
                        
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md"
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* Git Clone command button */}
                        <button
                          onClick={() => copyCloneCommand(activeProject.githubUrl!, activeProject.id)}
                          className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-mono border border-white/10 transition-colors flex items-center justify-between"
                          title="Copy clone command"
                        >
                          <span className="truncate">git clone {activeProject.githubUrl}.git</span>
                          {copiedCloneId === activeProject.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                          )}
                        </button>
                      </div>
                    )}

                    {/* Results / Metrics Box */}
                    <div className="p-4 rounded-2xl border bg-[#0B0F19] border-white/10 space-y-3">
                      <h4 className="font-display font-bold text-xs text-white flex items-center gap-1.5 uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span>Key Metrics & Results</span>
                      </h4>
                      
                      {activeProject.resultsMetrics ? (
                        <div className="space-y-2">
                          {activeProject.resultsMetrics.map((met, idx) => (
                            <div key={idx} className="p-2 rounded-xl bg-white/5 border border-white/10 text-xs">
                              <span className="font-bold text-white block">{met.split(' ')[0]}</span>
                              <span className="text-[10px] text-[#FED7AA]">{met.substring(met.indexOf(' ') + 1)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                          {activeProject.results}
                        </p>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white/5 text-[#FED7AA] border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer and Close Button */}
                <div className="p-5 border-t flex justify-end gap-3 bg-[#0B0F19] border-white/10">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2 rounded-full text-xs font-bold border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
