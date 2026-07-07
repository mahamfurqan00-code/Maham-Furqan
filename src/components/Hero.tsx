import { ArrowRight, Send, Download, Sparkles, CheckCircle2, Award, Laptop } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function Hero({ isDarkMode, onOpenResume }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const specialties = [
    { text: 'Graphic Design', color: 'from-pink-500 to-rose-500', icon: Sparkles },
    { text: 'Digital Marketing', color: 'from-amber-500 to-orange-500', icon: Award },
    { text: 'Quality Assurance', color: 'from-emerald-500 to-teal-500', icon: CheckCircle2 },
    { text: 'Software Engineering', color: 'from-blue-500 to-cyan-500', icon: Laptop },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#111827] to-[#0F172A]">
      {/* Background blobs / grids / floating shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Floating Shapes */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0] 
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-[10%] w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -15, 0] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 right-[15%] w-44 h-44 bg-[#06B6D4]/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            x: [0, 15, 0],
            y: [0, -15, 0] 
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#8B5CF6]/5 rounded-full blur-2xl" 
        />
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants} 
              className="text-[#06B6D4] font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full w-max flex items-center gap-2 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#06B6D4] animate-pulse" />
              <span>Hi, I'm {PERSONAL_INFO.name} — Software Engineering Student</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants} 
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-[1.1] mb-6 text-white"
            >
              Bridging <span className="text-[#3B82F6] drop-shadow-[0_0_15px_rgba(59,130,246,0.2)]">Creativity</span> & Technical <span className="bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] bg-clip-text text-transparent font-extrabold">Precision.</span>
            </motion.h1>

            <motion.h2 
              variants={itemVariants} 
              className="hidden"
            >
              {/* Maintained for semantic search or SEO, hidden for design visual flow */}
              {PERSONAL_INFO.headline}
            </motion.h2>

            <motion.p 
              variants={itemVariants} 
              className="text-lg text-[#CBD5E1] leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Quick Badges Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {specialties.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col p-4 rounded-2xl border bg-[#1F2937]/75 border-white/10 hover:border-[#3B82F6]/50 hover:bg-[#1F2937] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-tr ${spec.color} flex items-center justify-center text-white mb-3 shadow-md`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white">{spec.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-95 transition-all duration-200 cursor-pointer text-base shadow-lg shadow-blue-500/20"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold border border-white bg-transparent text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] active:scale-95 transition-all duration-200 cursor-pointer text-base"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 transition-all duration-200 cursor-pointer text-base"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar and Visual Showcase */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.3 }}
          >
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96">
              {/* Outer Glow & Rotating Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#3B82F6] via-[#06B6D4] to-[#8B5CF6] rounded-2xl blur-xl opacity-40 animate-pulse" />
              
              {/* Main Avatar Card */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0F172A]">
                <img 
                  src={PERSONAL_INFO.avatarUrl} 
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float Badge 1: Software Student */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#1F2937]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#06B6D4] to-[#3B82F6] flex items-center justify-center text-white shrink-0">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">Virtual University</h4>
                    <p className="text-[10px] text-[#CBD5E1]">BS Software Engineering (In Progress)</p>
                  </div>
                </div>
              </div>

              {/* Decorative design nodes */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 flex items-center justify-center text-[#8B5CF6] animate-bounce" style={{ animationDuration: '4s' }}>
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-10 h-10 rounded-full bg-[#10B981]/20 border border-[#10B981]/50 flex items-center justify-center text-[#10B981] animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
