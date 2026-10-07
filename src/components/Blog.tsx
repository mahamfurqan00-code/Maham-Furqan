import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogProps {
  isDarkMode: boolean;
}

export default function Blog({ isDarkMode: _isDarkMode }: BlogProps) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter posts based on search input and selected tag
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  // Extract all unique tags
  const allTags = Array.from(new Set(BLOG_POSTS.flatMap(post => post.tags)));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="blog" className="py-24 bg-[#0C0A10] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Insights & Technical Writing
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            Thoughts, practical automation workflows, and analytical deep-dives across design, manual QA testing, and software engineering.
          </p>
        </div>

        {/* Search and Filters panel */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#FED7AA]/70" />
            <input
              type="text"
              placeholder="Search articles by title, keywords, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border transition-all outline-none text-sm font-bold bg-[#16131D] border-white/10 text-white focus:border-[#FB923C] focus:ring-1 focus:ring-[#FB923C]/20 placeholder-[#FED7AA]/40"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-[#FED7AA]/70 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Tags row */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-xs font-bold text-[#FED7AA]/70 mr-1 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#FED7AA]" />
              <span>Filter:</span>
            </span>
            
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border ${
                selectedTag === null
                  ? 'bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 font-black border-transparent shadow-[0_0_15px_rgba(251,146,60,0.35)]'
                  : 'bg-[#16131D] text-[#CBD5E1] border-white/10 hover:border-[#FB923C]/30 hover:bg-[#1C1624]'
              }`}
            >
              All Tags
            </button>

            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer border ${
                  tag === selectedTag
                    ? 'bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] text-slate-950 font-black border-transparent shadow-[0_0_15px_rgba(251,146,60,0.35)]'
                    : 'bg-[#16131D] text-[#CBD5E1] border-white/10 hover:border-[#FB923C]/30 hover:bg-[#1C1624]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post List Grid */}
        {filteredPosts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            key={`${searchTerm}-${selectedTag}`}
          >
            {filteredPosts.map((post: BlogPost) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                onClick={() => setActivePost(post)}
                whileHover={{ y: -6 }}
                className="group flex flex-col h-full rounded-3xl overflow-hidden border bg-[#16131D]/90 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#FB923C]/40 hover:shadow-[0_10px_30px_rgba(251,146,60,0.18)] cursor-pointer"
              >
                {/* Visual Header / Color stripe in warm peach */}
                <div className="h-2 w-full bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FBBF24]" />

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-4">
                    {/* Category & Read Time */}
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-[#FB923C] uppercase tracking-wider font-mono">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#FED7AA]/70 font-mono text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-[#FB923C]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white group-hover:text-[#FED7AA] transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-[#CBD5E1] line-clamp-3 leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read More footer */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-[#FED7AA]/70 font-sans flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FB923C]" />
                      {post.date}
                    </span>
                    
                    <span className="text-xs font-bold text-[#FB923C] flex items-center gap-1 group-hover:translate-x-1.5 transition-transform duration-200">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400 font-bold">
              No articles matched your search query. Try clearing your filters.
            </p>
          </div>
        )}

        {/* Read Post Overlay Modal */}
        <AnimatePresence>
          {activePost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto no-print">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActivePost(null)}
                className="fixed inset-0 bg-[#0C0A10]/85 backdrop-blur-md"
              />

              {/* Reader Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border bg-[#16131D] border-white/10 max-h-[90vh] overflow-y-auto no-scrollbar z-10"
              >
                {/* Header details stripe */}
                <div className="h-3 w-full bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FBBF24]" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-6 right-6 z-20 p-2.5 rounded-full backdrop-blur-md bg-[#0C0A10]/80 hover:bg-[#1C1624] text-white border border-white/10 transition-colors cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content body */}
                <div className="p-6 sm:p-10 space-y-6">
                  {/* Metadata header */}
                  <div className="space-y-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#FB923C]/10 text-[#FED7AA] border border-[#FB923C]/30">
                      {activePost.category}
                    </span>
                    
                    <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight pt-1">
                      {activePost.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-[#FED7AA]/70 border-b border-white/5 pb-4 pt-1 font-sans">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#FB923C]" />
                        Published on {activePost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#FB923C]" />
                        {activePost.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Prose body formatted correctly */}
                  <div className="prose prose-invert max-w-none text-[#CBD5E1] leading-relaxed text-sm sm:text-base font-sans space-y-4">
                    {activePost.content.split('\n\n').map((paragraph, idx) => {
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h4 key={idx} className="font-display font-extrabold text-lg sm:text-xl text-white mt-6 mb-2">
                            {paragraph.replace('### ', '')}
                          </h4>
                        );
                      }
                      if (paragraph.startsWith('* ')) {
                        return (
                          <ul key={idx} className="list-disc pl-5 space-y-2 my-4 text-[#CBD5E1]">
                            {paragraph.split('\n').map((li, lIdx) => (
                              <li key={lIdx}>{li.replace('* ', '')}</li>
                            ))}
                          </ul>
                        );
                      }
                      if (paragraph.startsWith('1. ')) {
                        return (
                          <ol key={idx} className="list-decimal pl-5 space-y-2 my-4 text-[#CBD5E1]">
                            {paragraph.split('\n').map((li, lIdx) => (
                              <li key={lIdx}>{li.replace(/^\d+\.\s+/, '')}</li>
                            ))}
                          </ol>
                        );
                      }
                      return (
                        <p key={idx} className="whitespace-pre-line">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>

                  {/* Tags list */}
                  <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/5">
                    {activePost.tags.map(tag => (
                      <span key={tag} className="text-xs font-bold px-2.5 py-1 rounded bg-[#FB923C]/10 text-[#FED7AA] border border-[#FB923C]/20">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer close button */}
                <div className="p-5 border-t flex justify-end gap-3 bg-[#0C0A10] border-white/5">
                  <button
                    onClick={() => setActivePost(null)}
                    className="px-5 py-2 rounded-xl text-sm font-bold border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    Close Article
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
