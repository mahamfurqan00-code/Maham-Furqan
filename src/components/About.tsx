import { GraduationCap, Award, BookOpen, Target, Calendar, MapPin, Heart, Laptop, Code2, Database, ShoppingBag, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION } from '../data';
import Card3D from './Card3D';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode: _isDarkMode }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const pillars = [
    {
      title: "AppSheet Automation (Clickpad)",
      description: "Proven record building relational Google AppSheet operations portals, barcode scanning inventory systems, and automated email triggers during my Clickpad internship.",
      icon: Database,
      accent: "text-[#FB923C]",
      border: "hover:border-[#FB923C]/50"
    },
    {
      title: "Python Systems & Geospatial",
      description: "Engineered OOP bank architectures, web scrapers, Lahore City Explorer with Folium & pandas, and RESTful CRUD endpoints.",
      icon: Code2,
      accent: "text-[#FDA4AF]",
      border: "hover:border-[#FDA4AF]/50"
    },
    {
      title: "Anthropic Claude AI Systems",
      description: "Certified proficiency in prompt engineering, agentic workflows, context window management, and Large Language Model architectures.",
      icon: Award,
      accent: "text-[#F59E0B]",
      border: "hover:border-[#F59E0B]/50"
    },
    {
      title: "DigiSkills Certified Design",
      description: "Ministry of IT accredited graphic designer crafting scalable vector logos, color harmonies, and marketing assets in Adobe Photoshop and Canva Pro.",
      icon: Award,
      accent: "text-[#F472B6]",
      border: "hover:border-[#F472B6]/50"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0F19] border-t border-white/5 relative overflow-hidden">
      {/* Subtle decorative peach glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#FB923C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] uppercase tracking-widest bg-white/5 border border-[#FB923C]/30 px-3.5 py-1 rounded-full mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Personal Profile & Journey</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            About Maham Furqan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FB923C] to-[#FDA4AF] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-sm sm:text-base leading-relaxed">
            Engineering automated business solutions, conducting quality validations, and creating digital identity.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Profile Picture & Narrative */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Split row with Permanently Larger Profile Picture and Intro */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <div className="w-44 h-60 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#FB923C]/50 shrink-0 shadow-xl shadow-orange-500/10 bg-[#16121E]">
                <img 
                  src={PERSONAL_INFO.avatarUrl} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-display font-black text-xl text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-[#FED7AA] font-bold">
                  AppSheet Developer (Clickpad) · Software Engineering Student
                </p>
                <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans pt-1">
                  Combining computing principles from Virtual University of Pakistan with real-world enterprise low-code development at Clickpad, Python software engineering, and certified visual design.
                </p>
              </div>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-display text-2xl font-black text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#FB923C]" />
                <span>Professional Background</span>
              </h3>
              <p className="text-[#CBD5E1] leading-relaxed text-sm sm:text-base font-sans">
                I am <strong className="text-white font-bold">{PERSONAL_INFO.name}</strong>, currently pursuing a Bachelor of Science in <strong className="text-white font-bold">Software Engineering</strong> at Virtual University of Pakistan. Previously, I earned a <strong className="text-white font-bold">Bachelor of Arts from Punjab University (2022)</strong>, providing me with deep communication and logical structuring strengths.
              </p>
              <p className="text-[#CBD5E1] leading-relaxed text-sm sm:text-base font-sans">
                At <strong className="text-[#FB923C] font-bold">Clickpad</strong> (where I completed an AppSheet Development Internship on October 30, 2025), I architected enterprise low-code applications that transformed paper spreadsheets into multi-table relational operational databases with mobile barcode scanning and automated alerts.
              </p>
              <p className="text-[#CBD5E1] leading-relaxed text-sm sm:text-base font-sans">
                I also build advanced Python data analysis and OOP applications (including the Lahore City Explorer, quote scraping pipelines, and banking logic) and develop certified AI agent workflows using Anthropic Claude models.
              </p>
            </motion.div>

            {/* Core Pillars Grid with 3D Tilt */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {pillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card3D
                    key={index} 
                    maxTilt={8}
                    className={`p-5 rounded-2xl border bg-white/[0.03] backdrop-blur-md border-white/5 ${item.border} hover:bg-[#192231]/60 transition-all duration-300 shadow-md`}
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${item.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="font-display font-bold text-sm text-white">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </Card3D>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Key Facts & Education */}
          <motion.div 
            className="lg:col-span-5 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Quick Profile Meta */}
            <motion.div 
              variants={itemVariants}
              className="p-6 rounded-2xl border bg-white/[0.03] backdrop-blur-md border-white/5 hover:border-[#FB923C]/40 hover:bg-[#192231]/50 transition-all duration-300 shadow-lg"
            >
              <h3 className="font-display text-base font-bold text-white flex items-center gap-2 mb-4">
                <Target className="w-4.5 h-4.5 text-[#FB923C]" />
                <span>Key Details & Location</span>
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Location:</span>
                  <a 
                    href={PERSONAL_INFO.locationMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold hover:text-[#FED7AA] transition-colors flex items-center gap-1"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FB923C]" />
                    <span>Shahdara, Lahore, Pakistan</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">Contact Number:</span>
                  <a 
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-white font-bold hover:text-[#FED7AA] transition-colors font-mono"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-white/5">
                  <span className="text-slate-400">GitHub Profile:</span>
                  <a 
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FB923C] font-bold hover:underline font-mono"
                  >
                    @{PERSONAL_INFO.githubUsername}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Availability:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Offers & Roles
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Education timeline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#FB923C]" />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {EDUCATION.map((edu, index) => (
                  <Card3D 
                    key={index} 
                    maxTilt={6}
                    className="p-5 rounded-2xl border bg-white/[0.03] backdrop-blur-md border-white/5 hover:border-[#FB923C]/40 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h4 className="font-display font-bold text-sm text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/5 text-[#FED7AA] border border-white/10 shrink-0 self-start sm:self-center">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-xs font-bold text-[#FB923C] mb-2">{edu.school}</p>
                    
                    <p className="text-xs text-[#CBD5E1] leading-relaxed font-sans">
                      {edu.description}
                    </p>
                  </Card3D>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
