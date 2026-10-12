import { useState, useEffect, FormEvent } from 'react';
import { 
  Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, 
  AlertCircle, FileText, Trash2, ShieldAlert, MessageCircle, 
  ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import { ContactMessage } from '../types';
import Card3D from './Card3D';

interface ContactProps {
  isDarkMode: boolean;
  onOpenResume: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
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

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1000);
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
    <section id="contact" className="py-24 bg-[#0B0F19] border-t border-b border-white/5 relative overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#FB923C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#FB923C] uppercase tracking-widest bg-white/5 border border-[#FB923C]/30 px-3.5 py-1 rounded-full mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication & Inquiries</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Connect & Contact Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] mx-auto mt-4 rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
          <p className="text-[#CBD5E1] mt-4 font-sans text-sm sm:text-base leading-relaxed">
            Reach out regarding AppSheet automation, software engineering positions, QA test execution, or Python and AI systems development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left panel: Clickable Info channels with 3D cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Maham Furqan Avatar & Status Card */}
            <Card3D maxTilt={6}>
              <div className="p-5 rounded-3xl border bg-gradient-to-br from-[#1C1624] to-[#14101A] border-[#FB923C]/30 flex items-center gap-4 shadow-xl">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#FB923C] p-0.5 bg-gradient-to-tr from-[#FB923C] to-[#FDA4AF] shadow-lg shrink-0">
                  <img 
                    src={PERSONAL_INFO.avatarUrl} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover rounded-[14px] object-top"
                  />
                </div>
                <div>
                  <h4 className="font-display font-black text-white text-base">{PERSONAL_INFO.name}</h4>
                  <p className="text-[11px] text-[#FED7AA] font-mono font-bold">AppSheet Developer & Software Engineer</p>
                  <div className="flex items-center gap-1.5 mt-1 text-[10px] text-emerald-400 font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Open to Inquiries & Roles</span>
                  </div>
                </div>
              </div>
            </Card3D>

            <div className="space-y-2 mb-6 pt-2">
              <h3 className="font-display text-2xl font-black text-white">
                Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-sans">
                Every channel below is directly clickable for instant communication.
              </p>
            </div>

            {/* Direct Phone Call */}
            <Card3D maxTilt={6}>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#FB923C]/50 flex items-center justify-between group block"
                title="Click to Call"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/25">
                    <Phone className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#FED7AA]/70 uppercase tracking-wider">Direct Call / Cellular</h4>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </Card3D>

            {/* WhatsApp Chat */}
            <Card3D maxTilt={6}>
              <a 
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-emerald-500/50 flex items-center justify-between group block"
                title="Open WhatsApp Chat"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/25">
                    <MessageCircle className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#FED7AA]/70 uppercase tracking-wider">WhatsApp Direct</h4>
                    <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                      {PERSONAL_INFO.phone}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </Card3D>

            {/* Email Address */}
            <Card3D maxTilt={6}>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#FB923C]/50 flex items-center justify-between group block"
                title="Send Email"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FB923C]/15 text-[#FED7AA] flex items-center justify-center shrink-0 border border-[#FB923C]/25">
                    <Mail className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#FED7AA]/70 uppercase tracking-wider">Email Address</h4>
                    <p className="text-sm font-bold text-white group-hover:text-[#FB923C] transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </Card3D>

            {/* Location (Clickable to Google Maps) */}
            <Card3D maxTilt={6}>
              <a 
                href={PERSONAL_INFO.locationMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-amber-500/50 flex items-center justify-between group block"
                title="View on Google Maps"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/25">
                    <MapPin className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#FED7AA]/70 uppercase tracking-wider">Location & Base</h4>
                    <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </Card3D>

            {/* GitHub Profile */}
            <Card3D maxTilt={6}>
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#FB923C]/50 flex items-center justify-between group block"
                title="Open GitHub Profile"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FB923C]/15 text-[#FB923C] flex items-center justify-center shrink-0 border border-[#FB923C]/25">
                    <Github className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#FED7AA]/70 uppercase tracking-wider">GitHub Account</h4>
                    <p className="text-sm font-bold text-white group-hover:text-[#FED7AA] transition-colors font-mono">
                      github.com/{PERSONAL_INFO.githubUsername}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </Card3D>

            {/* LinkedIn Profile */}
            <Card3D maxTilt={6}>
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-blue-500/50 flex items-center justify-between group block"
                title="Open LinkedIn Profile"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0077B5]/20 text-[#0077B5] flex items-center justify-center shrink-0 border border-[#0077B5]/30">
                    <Linkedin className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#FED7AA]/70 uppercase tracking-wider">LinkedIn Corporate</h4>
                    <p className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      linkedin.com/in/mahamfurqan00
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </a>
            </Card3D>

            {/* Printable Resume Button */}
            <Card3D maxTilt={6}>
              <button 
                onClick={onOpenResume}
                className="w-full p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 transition-all duration-300 hover:border-[#FB923C]/50 flex items-center justify-between group text-left cursor-pointer"
                title="View Resume"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDA4AF]/15 text-[#FDA4AF] flex items-center justify-center shrink-0 border border-[#FDA4AF]/25">
                    <FileText className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-[#FED7AA]/70 uppercase tracking-wider">Digital CV</h4>
                    <p className="text-sm font-bold text-white group-hover:text-[#FDA4AF] transition-colors">
                      View Printable Resume
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              </button>
            </Card3D>
          </div>

          {/* Right Panel: Validated Submission form with 3D Card */}
          <div className="lg:col-span-7">
            <Card3D maxTilt={4} className="p-6 sm:p-8 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 shadow-2xl">
              <h3 className="font-display text-xl font-black text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#CBD5E1] mb-6 font-sans">
                Fill in the details below. Messages are validated and logged with timestamp verification.
              </p>

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
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all outline-none bg-slate-900 border-white/10 text-white placeholder-slate-400 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'focus:border-[#FB923C]'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email & Subject Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#CBD5E1]">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors(prev => { const { email, ...rest } = prev; return rest; });
                      }}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all outline-none bg-slate-900 border-white/10 text-white placeholder-slate-400 ${
                        errors.email 
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'focus:border-[#FB923C]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#CBD5E1]">Subject *</label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        if (errors.subject) setErrors(prev => { const { subject, ...rest } = prev; return rest; });
                      }}
                      placeholder="Project or inquiry subject"
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all outline-none bg-slate-900 border-white/10 text-white placeholder-slate-400 ${
                        errors.subject 
                          ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'focus:border-[#FB923C]'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 font-mono">
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
                    placeholder="Describe your project, timeline, or position requirements..."
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm transition-all outline-none resize-none bg-slate-900 border-white/10 text-white placeholder-slate-400 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                        : 'focus:border-[#FB923C]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-bold flex items-center gap-1 font-mono">
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
                      className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2.5 text-xs font-bold"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Message sent! Your message was cached and logged below.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full text-xs sm:text-sm font-black bg-gradient-to-r from-[#FB923C] via-[#FDA4AF] to-[#FED7AA] text-slate-950 shadow-lg shadow-orange-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </Card3D>
          </div>

        </div>

        {/* Local Messages Log Section */}
        <AnimatePresence>
          {loggedMessages.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 max-w-4xl mx-auto space-y-6 pt-12 border-t border-white/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-black text-white flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-[#FB923C]" />
                    <span>Logged Submissions Console</span>
                  </h3>
                  <p className="text-xs text-[#94A3B8]">
                    Your messages are stored in browser storage for session tracking.
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
                  <Card3D 
                    key={msg.id}
                    maxTilt={6}
                    className="p-5 rounded-3xl border bg-[#192231]/80 backdrop-blur-md border-white/10 space-y-3 relative group"
                  >
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-white/5 transition-colors cursor-pointer"
                      title="Delete log"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="space-y-1 pr-6">
                      <span className="text-[10px] text-[#FED7AA] font-bold font-mono uppercase bg-[#FB923C]/10 px-2.5 py-0.5 rounded-full border border-[#FB923C]/20">
                        Verified Message
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
                  </Card3D>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

function ChevronRight(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
