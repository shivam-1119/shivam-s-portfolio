import React, { useState } from 'react';
import { Send, Copy, Check, Download, Mail, Radio, MessageSquare, User, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons/SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam bot protection
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-shivam-nikam.pdf';
    link.download = 'Shivam_Satish_Nikam_Software_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Spam protection check
    if (formData.honeypot) {
      // Bot detected, silently exit
      return;
    }

    // 2. Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your name, valid email, and transmission message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid communications email address.');
      return;
    }

    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // Simulate real asynchronous cosmic transmission
      // Store locally in session/localStorage so Admin panel can inspect contact messages!
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const newMsg = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Opportunity Inquiry',
        message: formData.message,
        createdAt: new Date().toISOString(),
      };

      const existingMessages = JSON.parse(
        localStorage.getItem('armanverse_contact_messages') || '[]'
      );
      localStorage.setItem(
        'shivamverse_contact_messages',
        JSON.stringify([newMsg, ...existingMessages])
      );

      // Trigger celebratory cosmic confetti burst!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#8B5CF6', '#38BDF8', '#D946EF', '#10B981'],
      });

      // Open mail client directly to deliver message to Shivam's linked email
      const mailSubject = encodeURIComponent(formData.subject || 'Portfolio Contact Transmission');
      const mailBody = encodeURIComponent(
        `Hi Shivam,\n\nSender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Communication error. Please send direct transmission to ' + PERSONAL_INFO.email);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>Subspace Transmission Channel</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Ready for Our <span className="bg-gradient-to-r from-emerald-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">Next Mission?</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Have an interesting project or opportunity? Let's connect and build something amazing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Orbital Comms */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/25 relative overflow-hidden shadow-2xl">
            <h3 className="text-xl font-bold text-white font-display mb-2">
              Connect With Earth
            </h3>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              Whether you're looking for an agile software engineer, discussing full-stack opportunities, or collaborating on innovative ideas, my orbital link is always open.
            </p>

            {/* Quick Action Buttons */}
            <div className="space-y-3 mb-8">
              <div className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-sm font-medium text-zinc-200 transition-all group">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 text-zinc-200 hover:text-white flex-1 min-w-0"
                  title="Send direct email"
                >
                  <Mail className="w-4 h-4 text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs sm:text-sm truncate">{PERSONAL_INFO.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200 font-mono ml-2 px-2.5 py-1 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 border border-purple-500/30 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <button
                onClick={handleDownloadResume}
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/40 text-sm font-medium text-zinc-200 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Curriculum Vitae / Resume</span>
                </div>
                <span className="text-xs text-sky-300 font-mono">PDF</span>
              </button>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Social Star Networks
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-purple-900/30 border border-white/10 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all group shadow-sm"
                >
                  <GithubIcon className="w-5 h-5 mb-1.5 text-zinc-300 group-hover:text-purple-400 transition-colors" />
                  <span className="text-xs font-mono">GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-sky-950/30 border border-white/10 hover:border-sky-500/50 text-zinc-300 hover:text-white transition-all group shadow-sm"
                >
                  <LinkedinIcon className="w-5 h-5 mb-1.5 text-zinc-300 group-hover:text-sky-400 transition-colors" />
                  <span className="text-xs font-mono">LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-pink-950/30 border border-white/10 hover:border-pink-500/50 text-zinc-300 hover:text-white transition-all group shadow-sm"
                >
                  <InstagramIcon className="w-5 h-5 mb-1.5 text-zinc-300 group-hover:text-pink-400 transition-colors" />
                  <span className="text-xs font-mono">Instagram</span>
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 hover:bg-emerald-950/30 border border-white/10 hover:border-emerald-500/50 text-zinc-300 hover:text-white transition-all group shadow-sm"
                  title="Direct Email"
                >
                  <Mail className="w-5 h-5 mb-1.5 text-zinc-300 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs font-mono">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/25 shadow-2xl relative">
            <h3 className="text-2xl font-bold text-white font-display mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-purple-400" />
              <span>Dispatch Transmission</span>
            </h3>

            {status === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-sm flex items-start gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-in fade-in">
                <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Transmission Successful!</div>
                  <div className="text-xs text-emerald-300 mt-0.5">
                    Your message has been safely received. I will inspect the log and respond promptly to your coordinates.
                  </div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-rose-950/70 border border-rose-500/50 text-rose-300 text-sm flex items-start gap-3 shadow-[0_0_20px_rgba(244,63,94,0.3)] animate-in fade-in">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">{errorMessage}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Honeypot Field (invisible to users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Commander Alex"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@enterprise.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                  Mission Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Full-Stack Engineering Role / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                  Transmission Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl btn-cosmic-primary text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(139,92,246,0.6)] cursor-pointer disabled:opacity-50 disabled:cursor-wait"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>Routing Subspace Signal...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-sky-200" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Direct Email Fallback Link */}
              <div className="pt-2 text-center">
                <span className="text-xs text-zinc-400">Prefer direct email? </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs text-sky-400 hover:text-sky-300 font-mono underline underline-offset-4 decoration-sky-400/50 hover:decoration-sky-300 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
