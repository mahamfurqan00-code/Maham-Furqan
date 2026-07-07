import { useState, useEffect, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, FileText, Trash2, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';

interface ContactProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function Contact({ isDarkMode, onOpenResume }: ContactProps) {
  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Validation / feedback states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Local Message Log state (simulates persistence for user interactive feedback)
  const [loggedMessages, setLoggedMessages] = useState<ContactMessage[]>([]);

  // Load message log from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('portfolio_messages_log');
    if (saved) {
      try {
        setLoggedMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse local contact messages", e);
      }
    }
  }, []);

  // Form validator
  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Please provide your full name.';
    else if (name.trim().length < 2) tempErrors.name = 'Name must be at least 2 characters.';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) tempErrors.email = 'Please provide your email address.';
    else if (!emailRegex.test(email)) tempErrors.email = 'Email address is invalid.';

    if (!subject.trim()) tempErrors.subject = 'Please specify a subject.';
    else if (subject.trim().length < 3) tempErrors.subject = 'Subject must be at least 3 characters.';

    if (!message.trim()) tempErrors.message = 'Please type a message.';
    else if (message.trim().length < 8) tempErrors.message = 'Message must be at least 8 characters.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate standard server latency
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: `msg-${Date.now()}`,
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      const updatedLogs = [newMessage, ...loggedMessages];
      setLoggedMessages(updatedLogs);
      localStorage.setItem('portfolio_messages_log', JSON.stringify(updatedLogs));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Clear fields
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto-clear success banner after 6 seconds
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1200);
  };

  const deleteMessage = (id: string) => {
    const filtered = loggedMessages.filter(msg => msg.id !== id);
    setLoggedMessages(filtered);
    localStorage.setItem('portfolio_messages_log', JSON.stringify(filtered));
  };

  const clearAllMessages = () => {
    setLoggedMessages([]);
    localStorage.removeItem('portfolio_messages_log');
  };

  return (
    <section id="contact" className="py-24 bg-[#111827] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Connect & Contact
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#3B82F6] to-[#b2ffff] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(178,255,255,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-base sm:text-lg">
            Let's discuss freelance projects, career positions, QA audits, or branding initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: Info channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-extrabold text-white">
                Let's Start a Conversation
              </h3>
              <p className="text-sm text-[#CBD5E1] leading-relaxed font-sans">
                Feel free to reach out via the secure contact portal or through my verified social channels. I usually respond to inquiries within 24 hours.
              </p>
            </div>

            {/* Visual Channel Cards */}
            <div className="space-y-4">
              {/* Email channel */}
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-5 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#b2ffff] flex items-center justify-center shrink-0 border border-white/5">
                  <Mail className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Email Address</h4>
                  <p className="text-sm font-bold text-white group-hover:text-[#b2ffff] transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>

              {/* Phone Channel */}
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-5 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#b2ffff] flex items-center justify-center shrink-0 border border-white/5">
                  <Phone className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Contact Number</h4>
                  <p className="text-sm font-bold text-white group-hover:text-[#b2ffff] transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </a>

              {/* Location Channel */}
              <div 
                className="p-5 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#b2ffff] flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">My Location</h4>
                  <p className="text-sm font-bold text-white group-hover:text-[#b2ffff] transition-colors">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* LinkedIn Channel */}
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#b2ffff] flex items-center justify-center shrink-0 border border-white/5">
                  <Linkedin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">LinkedIn Corporate</h4>
                  <p className="text-sm font-bold text-white group-hover:text-[#b2ffff] transition-colors">
                    linkedin.com/in/mahamfurqan00
                  </p>
                </div>
              </a>

              {/* GitHub Channel */}
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#b2ffff] flex items-center justify-center shrink-0 border border-white/5">
                  <Github className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">GitHub Code Hub</h4>
                  <p className="text-sm font-bold text-white group-hover:text-[#b2ffff] transition-colors">
                    github.com/mahamfurqan
                  </p>
                </div>
              </a>

              {/* Offline Document channel */}
              <div 
                onClick={onOpenResume}
                className="p-5 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#3B82F6]/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] flex items-center gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 text-[#b2ffff] flex items-center justify-center shrink-0 border border-white/5">
                  <FileText className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Printable Resume</h4>
                  <p className="text-sm font-bold text-white group-hover:text-[#b2ffff] transition-colors">
                    Click to Open print-ready format
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Validated Submission form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10">
              
              <h3 className="font-display text-xl font-extrabold text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#CBD5E1]">Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => { const { name, ...rest } = prev; return rest; });
                    }}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none font-bold bg-[#1E293B] text-white placeholder-[#94A3B8] ${
                      errors.name 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-white/10 focus:border-[#3B82F6]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#CBD5E1]">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => { const { email, ...rest } = prev; return rest; });
                      }}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none font-bold bg-[#1E293B] text-white placeholder-[#94A3B8] ${
                        errors.email 
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-white/10 focus:border-[#3B82F6]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#CBD5E1]">Subject *</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors(prev => { const { subject, ...rest } = prev; return rest; });
                      }}
                      placeholder="Inquiry or Project Offer"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none font-bold bg-[#1E293B] text-white placeholder-[#94A3B8] ${
                        errors.subject 
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-white/10 focus:border-[#3B82F6]'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#CBD5E1]">Your Message *</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors(prev => { const { message, ...rest } = prev; return rest; });
                    }}
                    placeholder="Type details of your project or offer..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none resize-none font-bold bg-[#1E293B] text-white placeholder-[#94A3B8] ${
                      errors.message 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'border-white/10 focus:border-[#3B82F6]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Feedback state */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[#10B981] flex items-center gap-2.5 text-xs font-bold"
                    >
                      <CheckCircle className="w-5 h-5 text-[#10B981] shrink-0" />
                      <span>Success! Your test message was simulated and logged below.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full text-sm font-bold bg-gradient-to-r from-[#3B82F6] to-[#b2ffff] text-slate-950 shadow-lg shadow-blue-500/10 hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Secure Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Local Messages Log Section - Interactive Proof of functional forms */}
        <AnimatePresence>
          {loggedMessages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 max-w-4xl mx-auto space-y-6 pt-12 border-t border-white/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-extrabold text-white flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-amber-500" />
                    <span>Interactive Contact Logs Dashboard</span>
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    To demonstrate frontend capability, your submissions are cached locally. You can inspect or clear them.
                  </p>
                </div>

                <button
                  onClick={clearAllMessages}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/25 transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-center"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All Logs</span>
                </button>
              </div>

              {/* Message cards directory */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {loggedMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    className="p-5 rounded-3xl border bg-[#1F2937]/75 backdrop-blur-md border-white/10 transition-all duration-300 space-y-3 relative group hover:border-[#3B82F6]/30"
                  >
                    {/* Delete button */}
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="absolute top-4 right-4 p-1 rounded-md text-[#94A3B8] hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                      title="Delete log"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="space-y-1 pr-6">
                      <span className="text-[10px] text-[#b2ffff] font-bold font-mono uppercase bg-[#b2ffff]/10 px-2.5 py-0.5 rounded-full border border-[#b2ffff]/20">
                        Logged Submission
                      </span>
                      <h4 className="font-display font-bold text-sm text-white">
                        {msg.subject}
                      </h4>
                    </div>

                    <p className="text-xs text-[#CBD5E1] leading-relaxed italic pr-2 font-mono">
                      "{msg.message}"
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-[#94A3B8]">
                      <div>
                        By: <span className="font-bold text-[#CBD5E1]">{msg.name}</span> ({msg.email})
                      </div>
                      <span className="font-mono">{msg.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
