import React, { useState } from 'react';
import { 
  Palette, Laptop, ExternalLink, CheckCircle2, 
  ChevronRight, X, Sparkles, TrendingUp, Github, Code2, 
  Database, Copy, Check, Plus, Trash2, RotateCcw,
  Upload, SlidersHorizontal, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data';
import Card3D from './Card3D';

interface PortfolioProps {
  isDarkMode: boolean;
  projects: Project[];
  onAddProject: (project: Project) => void;
  onRemoveProject: (projectId: string) => void;
  onResetProjects: () => void;
}

export default function Portfolio({
  projects,
  onAddProject,
  onRemoveProject,
  onResetProjects,
}: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'python' | 'apis' | 'software' | 'design'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);
  
  // Project Management states
  const [isManageMode, setIsManageMode] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'software' | 'python' | 'apis' | 'design'>('software');
  const [newDescription, setNewDescription] = useState('');
  const [newObjective, setNewObjective] = useState('');
  const [newTags, setNewTags] = useState('');
  const [newGithubUrl, setNewGithubUrl] = useState('');
  const [newLiveUrl, setNewLiveUrl] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [previewImage, setPreviewImage] = useState<string>('');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filters = [
    { label: 'All Projects', value: 'all', icon: Sparkles },
    { label: 'AppSheet & Automation', value: 'software', icon: Database },
    { label: 'Python & Data Science', value: 'python', icon: Code2 },
    { label: 'REST APIs', value: 'apis', icon: Laptop },
    { label: 'Graphic Design', value: 'design', icon: Palette },
  ];

  // Display projects that are marked active in the portfolio
  const visibleProjects = projects.filter(p => p.inPortfolio !== false);

  const filteredProjects = selectedFilter === 'all'
    ? visibleProjects
    : visibleProjects.filter(p => p.category === selectedFilter);

  const copyCloneCommand = (repoUrl: string, id: string) => {
    navigator.clipboard.writeText(`git clone ${repoUrl}.git`);
    setCopiedCloneId(id);
    setTimeout(() => setCopiedCloneId(null), 2000);
  };

  // Image file upload handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewImage(result);
        setNewImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Preset image thumbnails for convenience
  const presets = [
    { label: 'Coding / Tech', url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' },
    { label: 'Cloud / App', url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80' },
    { label: 'Data Analytics', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
    { label: 'Modern UI/UX', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80' },
  ];

  // Submit new project
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) {
      showToast('Please fill in at least Title and Description');
      return;
    }

    const tagArray = newTags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const fallbackImage = newCategory === 'python'
      ? 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
      : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';

    const project: Project = {
      id: `proj-custom-${Date.now()}`,
      title: newTitle.trim(),
      category: newCategory,
      description: newDescription.trim(),
      longDescription: newDescription.trim() + (newObjective ? ` Objective: ${newObjective.trim()}` : ''),
      objective: newObjective.trim() || 'Deliver robust, scalable, and user-centric software solutions.',
      process: [
        'Architecture specification, requirements analysis, and system wireframing.',
        'Core development and integration using best engineering standards.',
        'Thorough QA testing, performance benchmarking, and production release.'
      ],
      results: 'Successfully deployed and verified with outstanding performance and reliability.',
      resultsMetrics: ['Production Ready', '100% Validated', 'Modern Architecture'],
      features: ['Modern responsive design', 'Full lifecycle implementation', 'Modular codebase'],
      tags: tagArray.length > 0 ? tagArray : ['Engineering', 'Software', 'Custom'],
      imageUrl: newImageUrl.trim() || fallbackImage,
      githubUrl: newGithubUrl.trim() || undefined,
      liveUrl: newLiveUrl.trim() || undefined,
      language: newCategory === 'python' ? 'Python' : 'Full Stack',
      isFromGithub: false,
      inPortfolio: true,
    };

    onAddProject(project);
    showToast(`Project "${project.title}" added successfully!`);

    // Reset form
    setNewTitle('');
    setNewDescription('');
    setNewObjective('');
    setNewTags('');
    setNewGithubUrl('');
    setNewLiveUrl('');
    setNewImageUrl('');
    setPreviewImage('');
    setIsAddModalOpen(false);
  };

  const handleConfirmDelete = () => {
    if (projectToDelete) {
      onRemoveProject(projectToDelete.id);
      showToast(`Project "${projectToDelete.title}" removed!`);
      if (activeProject?.id === projectToDelete.id) {
        setActiveProject(null);
      }
      setProjectToDelete(null);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0C0A10] border-t border-white/5 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 font-bold text-xs shadow-2xl flex items-center gap-2 border border-white/20"
          >
            <CheckCircle2 className="w-4 h-4 text-slate-950" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background visual detail */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#FDA4AF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] uppercase tracking-widest bg-white/5 border border-[#FB923C]/30 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Works & Projects</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Featured Portfolio & Systems
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-sm sm:text-base leading-relaxed">
            Final Year Project (NLP Fraud Detection), Live Weather API Fetcher, Interactive Birthday Web Application, Clickpad Enterprise AppSheet Automations, and full-stack software systems.
          </p>
        </div>

        {/* Project Management & Control Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-3xl bg-[#14101A]/90 border border-white/10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3.5 text-left w-full md:w-auto">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#FB923C] to-[#FDA4AF] text-slate-950 flex items-center justify-center shrink-0 shadow-md">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">Project Manager</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {filteredProjects.length} Displayed
                </span>
                {isManageMode && (
                  <span className="text-[10px] font-mono bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/30 font-bold animate-pulse">
                    Manage Mode Active
                  </span>
                )}
              </div>
              <p className="text-xs text-[#FED7AA]/80 font-mono mt-0.5">
                Add custom projects or remove existing items with instant persistence.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-start md:justify-end">
            {/* Add Project Button */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 hover:opacity-95 transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/20 active:scale-95"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>

            {/* Toggle Manage Mode Button */}
            <button
              onClick={() => setIsManageMode(!isManageMode)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer border active:scale-95 ${
                isManageMode
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-md'
                  : 'bg-white/10 hover:bg-white/15 text-white border-white/15'
              }`}
              title="Toggle delete buttons on project cards"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FB923C]" />
              <span>{isManageMode ? 'Done Managing' : 'Remove Projects'}</span>
            </button>

            {/* Reset Defaults Button */}
            <button
              onClick={() => {
                if (window.confirm('Reset all projects back to defaults? Custom additions and deletions will be restored.')) {
                  onResetProjects();
                  showToast('Projects reset to defaults!');
                }
              }}
              className="px-3.5 py-2.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              title="Reset all projects to defaults"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#FED7AA]" />
              <span className="hidden sm:inline">Reset Defaults</span>
            </button>

            {/* GitHub Profile Direct Link */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              title="Visit GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 text-[#FB923C]" />
              <span className="hidden sm:inline">GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>

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
              maxTilt={10}
              className="group flex flex-col h-full rounded-3xl overflow-hidden border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(251,146,60,0.18)] hover:border-[#FB923C]/50 cursor-pointer relative"
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

                {/* Card Action Icons (Delete or GitHub) */}
                <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5">
                  {/* Remove Project Button */}
                  {(isManageMode || true) && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setProjectToDelete(project);
                      }}
                      className="p-2 rounded-full bg-rose-950/80 hover:bg-rose-600 text-rose-300 hover:text-white border border-rose-500/30 transition-all hover:scale-110 shadow-lg group/btn"
                      title="Remove this project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Direct GitHub External Link Icon */}
                  {project.githubUrl && (
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
                  )}
                </div>
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

                {/* Footer and Action Buttons */}
                <div className="p-5 border-t flex items-center justify-between gap-3 bg-[#0B0F19] border-white/10">
                  <button
                    onClick={() => {
                      setProjectToDelete(activeProject);
                    }}
                    className="px-4 py-2 rounded-full text-xs font-bold border border-rose-500/40 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 transition-colors flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Remove This Project</span>
                  </button>

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

        {/* ADD PROJECT MODAL */}
        <AnimatePresence>
          {isAddModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto no-print">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsAddModalOpen(false)}
                className="fixed inset-0 bg-[#0B0F19]/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border bg-[#14101A] border-white/20 p-6 sm:p-8 z-10 max-h-[92vh] overflow-y-auto"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FB923C] to-[#FDA4AF] text-slate-950 flex items-center justify-center font-bold">
                      <Plus className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl text-white">Add New Project</h3>
                      <p className="text-xs text-[#FED7AA]">Add an application or deliverable to your portfolio showcase</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsAddModalOpen(false)}
                    className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleCreateProject} className="space-y-4 pt-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1">
                      Project Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AI Fraud Detection Engine"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FB923C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1">
                        Category *
                      </label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#1E1728] border border-white/15 text-white text-xs focus:outline-none focus:border-[#FB923C]"
                      >
                        <option value="software">AppSheet & Automation / Software</option>
                        <option value="python">Python & Data Science</option>
                        <option value="apis">REST APIs</option>
                        <option value="design">Graphic Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1">
                        Technologies / Tags (comma-separated)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Python, NLP, Streamlit, Docker"
                        value={newTags}
                        onChange={(e) => setNewTags(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FB923C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1">
                      Short Description *
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Brief summary shown on project card..."
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FB923C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-200 mb-1">
                      Project Objective / Details (optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="What business problem or user goal does this system solve?"
                      value={newObjective}
                      onChange={(e) => setNewObjective(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FB923C]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1">
                        GitHub Repository URL (optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/mahamfurqan00-code/..."
                        value={newGithubUrl}
                        onChange={(e) => setNewGithubUrl(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FB923C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-200 mb-1">
                        Live Demo / Web Link (optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://..."
                        value={newLiveUrl}
                        onChange={(e) => setNewLiveUrl(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FB923C]"
                      />
                    </div>
                  </div>

                  {/* Thumbnail Image Picker / Upload */}
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-3">
                    <label className="block text-xs font-mono font-bold text-[#FED7AA]">
                      Thumbnail Image
                    </label>
                    
                    <div className="flex flex-col sm:flex-row gap-3 items-center">
                      {/* File upload input */}
                      <label className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-bold border border-white/20 transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0">
                        <Upload className="w-4 h-4 text-[#FB923C]" />
                        <span>Upload File from Device</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </label>

                      <span className="text-xs text-slate-400">or enter image URL:</span>

                      <input
                        type="url"
                        placeholder="https://..."
                        value={newImageUrl}
                        onChange={(e) => {
                          setNewImageUrl(e.target.value);
                          setPreviewImage(e.target.value);
                        }}
                        className="w-full px-3.5 py-2 rounded-xl bg-black/40 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FB923C]"
                      />
                    </div>

                    {/* Presets */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] text-slate-400 font-mono">Quick Presets:</span>
                      {presets.map((preset) => (
                        <button
                          key={preset.label}
                          type="button"
                          onClick={() => {
                            setNewImageUrl(preset.url);
                            setPreviewImage(preset.url);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#FB923C]/20 text-[10px] text-slate-300 hover:text-[#FED7AA] border border-white/10 transition-colors"
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>

                    {/* Preview Image Box */}
                    {previewImage && (
                      <div className="mt-2 relative aspect-video max-h-36 rounded-xl overflow-hidden border border-white/20 bg-slate-900">
                        <img
                          src={previewImage}
                          alt="Thumbnail Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPreviewImage('');
                            setNewImageUrl('');
                          }}
                          className="absolute top-2 right-2 p-1 rounded-full bg-black/70 text-white hover:bg-rose-600 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setIsAddModalOpen(false)}
                      className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-300 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 font-black shadow-lg shadow-orange-500/25 hover:opacity-95 transition-all cursor-pointer active:scale-95 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Portfolio</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* DELETE CONFIRMATION DIALOG */}
        <AnimatePresence>
          {projectToDelete && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 no-print">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setProjectToDelete(null)}
                className="fixed inset-0 bg-[#0B0F19]/85 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border bg-[#18131E] border-rose-500/30 p-6 z-10 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/30">
                  <AlertCircle className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-display font-black text-lg text-white">
                    Remove Project?
                  </h3>
                  <p className="text-xs text-[#CBD5E1] mt-1 leading-relaxed">
                    Are you sure you want to remove <span className="text-[#FB923C] font-bold">"{projectToDelete.title}"</span> from your portfolio? You can restore it anytime via "Reset Defaults".
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => setProjectToDelete(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="px-5 py-2.5 rounded-full text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white font-black shadow-lg shadow-rose-600/30 transition-all flex items-center gap-1.5"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Confirm Remove</span>
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
