import { useState } from 'react';
import { Palette, Share2, ShieldCheck, Laptop, ExternalLink, Calendar, CheckCircle2, ChevronRight, X, Sparkles, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface PortfolioProps {
  isDarkMode: boolean;
}

export default function Portfolio({ isDarkMode }: PortfolioProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'design' | 'marketing' | 'software'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filters = [
    { label: 'All Projects', value: 'all', icon: Sparkles },
    { label: 'Graphic Design', value: 'design', icon: Palette },
    { label: 'Digital Marketing', value: 'marketing', icon: Share2 },
    { label: 'Software & QA', value: 'software', icon: Laptop },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#111827] border-t border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#06B6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            A selective showcase of real-world deliverables, design portfolios, and software applications.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isSelected = selectedFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value as any)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105'
                    : 'bg-[#1F2937]/50 text-[#CBD5E1] border-white/10 hover:border-white/20 hover:bg-[#1F2937]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-[#3B82F6]'}`} />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          key={selectedFilter}
        >
          {filteredProjects.map((project: Project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onClick={() => setActiveProject(project)}
              whileHover={{ y: -8 }}
              className="group flex flex-col h-full rounded-3xl overflow-hidden border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-[#3B82F6]/30 cursor-pointer"
            >
              {/* Card Image and category hover overlay */}
              <div className="relative overflow-hidden aspect-video bg-white/5">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Blue Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/90 via-[#0F172A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
                  <span className="px-5 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>View Project</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

                {/* Category Badge on Image */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold text-white shadow-md bg-[#0F172A]/90 backdrop-blur-sm border ${
                    project.category === 'design' ? 'border-pink-500/30' :
                    project.category === 'marketing' ? 'border-amber-500/30' :
                    'border-blue-500/30'
                  }`}>
                    {project.category === 'design' && <Palette className="w-3 h-3 text-pink-400" />}
                    {project.category === 'marketing' && <Share2 className="w-3 h-3 text-amber-400" />}
                    {project.category === 'software' && <Laptop className="w-3 h-3 text-cyan-400" />}
                    <span className="capitalize">{project.category}</span>
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-[#3B82F6] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#CBD5E1] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags bottom list */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-[#CBD5E1] border border-white/5">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[10px] font-mono font-bold text-[#94A3B8] px-1 py-0.5">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project details overlay modal */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto no-print">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProject(null)}
                className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border bg-[#1F2937] border-white/10 max-h-[90vh] overflow-y-auto no-scrollbar"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full backdrop-blur-md bg-[#0F172A]/80 hover:bg-[#1F2937] text-white border border-white/10 transition-colors cursor-pointer"
                  aria-label="Close specifications"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Hero Cover Image on top */}
                <div className="relative aspect-video max-h-80 w-full overflow-hidden bg-white/5">
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/40 to-transparent" />
                  
                  {/* Floating Title on Cover */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#3B82F6] text-white shadow">
                      <span className="capitalize">{activeProject.category} Project</span>
                    </span>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl text-white tracking-tight drop-shadow">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left panel - Main info */}
                  <div className="md:col-span-8 space-y-6">
                    {/* Objectives */}
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-base text-white">
                        Project Objectives
                      </h4>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed font-sans">
                        {activeProject.objective}
                      </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-base text-white">
                        Detailed Case & Overview
                      </h4>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed font-sans">
                        {activeProject.longDescription}
                      </p>
                    </div>

                    {/* Development / Design Steps */}
                    <div className="space-y-3">
                      <h4 className="font-display font-bold text-base text-white">
                        Methodology & Implementation Steps
                      </h4>
                      <div className="space-y-2">
                        {activeProject.process.map((step, idx) => (
                          <div key={idx} className="flex gap-3 text-sm text-[#CBD5E1] font-sans">
                            <span className="w-5 h-5 rounded-full bg-white/5 border border-white/10 text-[#06B6D4] flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features list (if applicable) */}
                    {activeProject.features && (
                      <div className="space-y-3">
                        <h4 className="font-display font-bold text-base text-white">
                          Application Features
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeProject.features.map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 text-xs text-[#CBD5E1] font-sans">
                              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Panel - Stats and Metrics */}
                  <div className="md:col-span-4 space-y-6">
                    {/* Metrics/Results Box */}
                    <div className="p-5 rounded-2xl border bg-[#0F172A] border-white/5 space-y-4">
                      <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                        <TrendingUp className="w-4.5 h-4.5 text-[#10B981]" />
                        <span>Project Results & Metrics</span>
                      </h4>
                      
                      {activeProject.resultsMetrics ? (
                        <div className="space-y-3">
                          {activeProject.resultsMetrics.map((met, idx) => (
                            <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
                              <span className="text-sm font-bold text-white font-sans">{met.split(' ')[0]}</span>
                              <span className="text-[10px] text-[#94A3B8] font-semibold">{met.substring(met.indexOf(' ') + 1)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                          {activeProject.results}
                        </p>
                      )}
                    </div>

                    {/* Technical Stack used */}
                    <div className="space-y-2">
                      <h4 className="font-display font-bold text-sm text-white">
                        Core Tech Stack & Skills
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tags.map(tag => (
                          <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/5 text-[#06B6D4] border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer and Close Button */}
                <div className="p-5 border-t flex justify-end gap-3 bg-[#0F172A] border-white/5">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2 rounded-xl text-sm font-bold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
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
