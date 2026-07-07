import { GraduationCap, Award, BookOpen, Target, Calendar, MapPin, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION } from '../data';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  const qualities = [
    {
      title: "Creativity & Artistry",
      description: "Visual design background allows me to build engaging, aesthetic layouts, logos, and digital branding assets that capture target audience attention.",
      bulletColor: "bg-pink-500"
    },
    {
      title: "Engineering & Rigor",
      description: "Pursuing BS Software Engineering has structured my critical thinking, helping me translate visual masterpieces into clean, scalable front-end and back-end logic.",
      bulletColor: "bg-[#2563EB]"
    },
    {
      title: "Quality Validation",
      description: "Meticulous eye for detail. Experienced in writing test cases, manual system validation, and documenting clear bug lifecycles for superior UX stability.",
      bulletColor: "bg-[#b2ffff]"
    },
    {
      title: "Workflow Automation",
      description: "Keen interest in enterprise efficiency. Skilled at turning complex spreadsheets into mobile-optimized, real-time Google AppSheet workflows.",
      bulletColor: "bg-amber-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#111827] border-t border-white/5 relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            Discover my professional story, educational foundation, and how I fuse artistic design with software engineering disciplines.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column - Narrative & Story */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#3B82F6]" />
                <span>My Professional Story</span>
              </h3>
              <p className="text-[#F8FAFC] leading-relaxed text-base">
                I am {PERSONAL_INFO.name}, currently pursuing a Bachelor of Science in <strong className="text-white">Software Engineering</strong> at Virtual University of Pakistan. My journey has been unique: before diving into software systems, I earned a <strong className="text-white">Bachelor of Arts from Punjab University (2022)</strong>, where I developed deep perspectives on human communication, artistic balance, and creative narratives.
              </p>
              <p className="text-[#F8FAFC] leading-relaxed text-base">
                This academic duality gave rise to my passion for combining <strong className="text-white">creativity with advanced technology</strong>. I don't just see code as mathematical syntax—I view it as an empty digital canvas waiting to be brought to life. On the flip side, I don't just see graphics as marketing collateral—I view them as the core interface layer of a software system that must be engineered with accessibility and user ergonomics in mind.
              </p>
              <p className="text-[#F8FAFC] leading-relaxed text-base">
                Whether managing dynamic organic social media campaigns, designing custom business automation apps through low-code AppSheet structures, or conducting rigorous manual QA testing, my driving force is to **improve product quality** and **deliver maximum business value**.
              </p>
            </motion.div>

            {/* Core Values / Qualities Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {qualities.map((item, index) => (
                <div 
                  key={index} 
                  className="p-5 rounded-2xl border bg-white/[0.03] backdrop-blur-md border-white/5 hover:border-[#3B82F6]/40 hover:bg-[#1F2937]/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1"
                >
                  <h4 className="font-display font-bold text-sm mb-2 flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${item.bulletColor}`} />
                    <span className="text-white">{item.title}</span>
                  </h4>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Education & Info Details */}
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
              className="p-6 rounded-2xl border bg-white/[0.03] backdrop-blur-md border-white/5 hover:border-[#3B82F6]/40 hover:bg-[#1F2937]/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
            >
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-[#06B6D4]" />
                <span>Quick Facts</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <MapPin className="w-4.5 h-4.5 text-[#94A3B8]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <Heart className="w-4.5 h-4.5 text-rose-500 animate-pulse" />
                  <span>Full-Time & Contract</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <BookOpen className="w-4.5 h-4.5 text-[#94A3B8]" />
                  <span>Dual Track (Tech + Creative)</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#CBD5E1]">
                  <GraduationCap className="w-4.5 h-4.5 text-[#94A3B8]" />
                  <span>BS Software Eng.</span>
                </div>
              </div>
            </motion.div>

            {/* Education timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#3B82F6]" />
                <span>Education History</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-white/10">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    {/* Circle timeline dot with blue glow */}
                    <span className="absolute left-1.5 top-1.5 w-5 h-5 rounded-full border-2 border-[#3B82F6] bg-[#0F172A] flex items-center justify-center z-10 shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                    </span>
                    
                    <div className="p-5 rounded-2xl border bg-white/[0.03] backdrop-blur-md border-white/5 hover:border-[#3B82F6]/40 hover:bg-[#1F2937]/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="font-display font-bold text-base text-white">
                          {edu.degree}
                        </h4>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 text-[#06B6D4] border border-white/10 shrink-0 self-start sm:self-center">
                          <Calendar className="w-3 h-3" />
                          {edu.period}
                        </span>
                      </div>
                      
                      <p className="text-xs font-bold text-[#3B82F6] mb-2">{edu.school}</p>
                      
                      <p className="text-xs text-[#CBD5E1] leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
