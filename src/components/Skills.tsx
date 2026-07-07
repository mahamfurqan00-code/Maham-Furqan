import { useState } from 'react';
import { 
  Palette, Share2, ShieldCheck, Cpu, Heart, Award, Sparkles, Image, 
  Megaphone, Compass, TrendingUp, Users, Bug, ClipboardCheck, 
  Smartphone, Table, Presentation, MessageSquare, Lightbulb, Clock, 
  Puzzle, Key, Eye, Workflow, CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';

interface SkillsProps {
  isDarkMode: boolean;
}

type SkillCategory = 'All' | 'Design' | 'Marketing' | 'QA' | 'Technical' | 'Soft';

// Map skills to beautiful colored icons
const getSkillIcon = (name: string, category: string) => {
  const normName = name.toLowerCase();
  
  if (normName.includes('photoshop')) return { icon: Image, color: 'from-[#31A8FF] to-[#001E36]', textColor: 'text-[#31A8FF]' };
  if (normName.includes('canva')) return { icon: Sparkles, color: 'from-[#00C4CC] to-[#7D2AE8]', textColor: 'text-[#00C4CC]' };
  if (normName.includes('branding')) return { icon: Award, color: 'from-pink-500 to-rose-500', textColor: 'text-pink-400' };
  if (normName.includes('social media design')) return { icon: Palette, color: 'from-purple-500 to-pink-500', textColor: 'text-pink-400' };
  if (normName.includes('logo design')) return { icon: Palette, color: 'from-amber-400 to-rose-500', textColor: 'text-amber-400' };
  
  if (normName.includes('social media marketing')) return { icon: Megaphone, color: 'from-blue-500 to-indigo-500', textColor: 'text-blue-400' };
  if (normName.includes('content strategy')) return { icon: Compass, color: 'from-indigo-500 to-purple-500', textColor: 'text-indigo-400' };
  if (normName.includes('campaign planning')) return { icon: TrendingUp, color: 'from-orange-500 to-amber-500', textColor: 'text-orange-400' };
  if (normName.includes('seo')) return { icon: SearchIcon, color: 'from-emerald-500 to-teal-500', textColor: 'text-emerald-400' };
  if (normName.includes('audience engagement')) return { icon: Users, color: 'from-pink-500 to-purple-500', textColor: 'text-pink-400' };
  
  if (normName.includes('manual testing')) return { icon: Bug, color: 'from-emerald-500 to-teal-500', textColor: 'text-emerald-400' };
  if (normName.includes('bug reporting')) return { icon: Bug, color: 'from-rose-500 to-red-600', textColor: 'text-rose-400' };
  if (normName.includes('test cases')) return { icon: ClipboardCheck, color: 'from-teal-500 to-blue-500', textColor: 'text-teal-400' };
  if (normName.includes('quality control')) return { icon: ShieldCheck, color: 'from-green-500 to-emerald-600', textColor: 'text-emerald-400' };
  if (normName.includes('software validation')) return { icon: Eye, color: 'from-cyan-500 to-blue-500', textColor: 'text-cyan-400' };
  
  if (normName.includes('appsheet')) return { icon: Smartphone, color: 'from-[#3B82F6] to-[#06B6D4]', textColor: 'text-[#3B82F6]' };
  if (normName.includes('excel') || normName.includes('sheets')) return { icon: Table, color: 'from-emerald-600 to-green-500', textColor: 'text-emerald-400' };
  if (normName.includes('powerpoint')) return { icon: Presentation, color: 'from-orange-600 to-red-500', textColor: 'text-orange-400' };
  
  if (normName.includes('communication')) return { icon: MessageSquare, color: 'from-indigo-500 to-blue-500', textColor: 'text-indigo-400' };
  if (normName.includes('teamwork')) return { icon: Users, color: 'from-cyan-500 to-teal-500', textColor: 'text-cyan-400' };
  if (normName.includes('adaptability')) return { icon: Compass, color: 'from-pink-500 to-orange-500', textColor: 'text-pink-400' };
  if (normName.includes('problem solving')) return { icon: Lightbulb, color: 'from-amber-400 to-orange-500', textColor: 'text-amber-400' };
  if (normName.includes('time management')) return { icon: Clock, color: 'from-purple-500 to-indigo-500', textColor: 'text-purple-400' };

  // Fallback category mapping
  if (category === 'Design') return { icon: Palette, color: 'from-pink-500 to-rose-500', textColor: 'text-pink-400' };
  if (category === 'Marketing') return { icon: Megaphone, color: 'from-amber-500 to-orange-500', textColor: 'text-amber-400' };
  if (category === 'QA') return { icon: ShieldCheck, color: 'from-emerald-500 to-teal-500', textColor: 'text-emerald-400' };
  if (category === 'Technical') return { icon: Cpu, color: 'from-blue-500 to-cyan-500', textColor: 'text-cyan-400' };
  return { icon: Heart, color: 'from-rose-500 to-indigo-500', textColor: 'text-rose-400' };
};

// Fallback SEO / Search Icon
function SearchIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>('All');

  const categories = [
    { label: 'All Fields', value: 'All', icon: Award, color: 'text-[#3B82F6]' },
    { label: 'Graphic Design', value: 'Design', icon: Palette, color: 'text-pink-500' },
    { label: 'Digital Marketing', value: 'Marketing', icon: Share2, color: 'text-amber-500' },
    { label: 'Quality Assurance', value: 'QA', icon: ShieldCheck, color: 'text-emerald-500' },
    { label: 'Technical Skills', value: 'Technical', icon: Cpu, color: 'text-cyan-500' },
    { label: 'Soft Skills', value: 'Soft', icon: Heart, color: 'text-rose-500' },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#0F172A] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B5CF6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Expertise & Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            An organized directory of my creative, technical, operational, and interpersonal proficiencies.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value as SkillCategory)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold transition-all duration-350 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#3B82F6] text-white border-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105'
                    : 'bg-[#1F2937]/50 text-[#CBD5E1] border-white/10 hover:border-white/20 hover:bg-[#1F2937]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : cat.color}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Skill Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          key={selectedCategory} // Force re-render animations on filter switch
        >
          {filteredSkills.map((skill: Skill) => {
            const iconConfig = getSkillIcon(skill.name, skill.category);
            const IconComponent = iconConfig.icon;
            
            // Generate glowing shadow based on skill category
            const getGlowColor = () => {
              if (skill.category === 'Design') return 'hover:shadow-[0_0_25px_rgba(236,72,153,0.15)] hover:border-pink-500/30';
              if (skill.category === 'Marketing') return 'hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:border-amber-500/30';
              if (skill.category === 'QA') return 'hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:border-emerald-500/30';
              if (skill.category === 'Technical') return 'hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-[#06B6D4]/30';
              return 'hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] hover:border-[#8B5CF6]/30';
            };

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`p-6 rounded-2xl border bg-[#1F2937]/70 backdrop-blur-md border-white/10 transition-all duration-350 flex flex-col justify-between ${getGlowColor()}`}
              >
                <div>
                  {/* Top Row with Colorful Icon & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${iconConfig.color} flex items-center justify-center text-white shadow-lg`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${
                      skill.category === 'Design' ? 'bg-pink-500/10 text-pink-400 border-pink-500/20' :
                      skill.category === 'Marketing' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                      skill.category === 'QA' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                      skill.category === 'Technical' ? 'bg-[#06B6D4]/10 text-[#06B6D4] border-[#06B6D4]/20' :
                      'bg-[#8B5CF6]/10 text-purple-400 border-[#8B5CF6]/20'
                    }`}>
                      {skill.category}
                    </span>
                  </div>

                  {/* Name and Tagline */}
                  <h3 className="font-display font-extrabold text-lg text-white mb-2 leading-tight">
                    {skill.name}
                  </h3>
                  
                  {/* Skill level stats */}
                  <div className="flex items-baseline gap-1.5 mb-1 mt-3">
                    <span className="text-3xl font-extrabold font-display bg-gradient-to-r from-white to-[#CBD5E1] bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                    <span className="text-xs text-[#94A3B8] font-bold uppercase tracking-wider">
                      Mastery
                    </span>
                  </div>
                </div>

                {/* Micro verification badge */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#94A3B8] font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Applied in Core Deliverables</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
