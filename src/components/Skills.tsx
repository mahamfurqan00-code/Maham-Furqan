import { useState } from 'react';
import { Palette, Share2, ShieldCheck, Cpu, Heart, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { SKILLS } from '../data';

interface SkillsProps {
  isDarkMode: boolean;
}

type SkillCategory = 'All' | 'Design' | 'Marketing' | 'QA' | 'Technical' | 'Soft';

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
    <section id="skills" className="py-24 bg-[#0C0A10] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] uppercase tracking-widest bg-white/5 border border-[#FB923C]/30 px-3.5 py-1 rounded-full mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Expertise & Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            My technical, automation, QA, design, and professional skills at a glance.
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
                    ? 'bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] text-slate-950 font-black border-transparent shadow-[0_0_15px_rgba(251,146,60,0.3)] scale-105'
                    : 'bg-[#16131D] text-[#CBD5E1] border-white/10 hover:border-[#FB923C]/30 hover:bg-[#1C1624]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-slate-950' : cat.color}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Keyword Skills */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          key={selectedCategory} // Force re-render animations on filter switch
        >
          {filteredSkills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="rounded-full border border-[#FB923C]/25 bg-[#16131D]/80 px-4 py-2.5 text-sm font-semibold text-[#FED7AA] transition-colors hover:border-[#FB923C]/60 hover:bg-[#FB923C]/10"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
