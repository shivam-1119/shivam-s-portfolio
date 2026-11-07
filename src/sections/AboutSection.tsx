import React from 'react';
import {
  GraduationCap,
  Code2,
  Rocket,
  Star,
  Briefcase,
  Users,
  Monitor,
  Handshake,
  Trophy,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen py-24 overflow-hidden z-10">
      {/* Background Video (Only for About Section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        >
          <source src="/images/about-cosmic-bg.mp4" type="video/mp4" />
          <source src="/images/gemini_generated_video_800d57a6.mp4" type="video/mp4" />
        </video>

        {/* Ambient Darkening & Contrast Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-[#03030B]/80 pointer-events-none backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03030B] via-transparent to-[#03030B] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Half: Astronaut Illustration + Header & Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Left Column: Contemplative Astronaut on Asteroid (Matching Reference Image) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden glass-panel border border-purple-500/30 shadow-[0_0_40px_rgba(139,92,246,0.3)] group">
              {/* Ambient Cosmic Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 via-indigo-600/20 to-sky-400/30 rounded-3xl blur-2xl -z-10 group-hover:opacity-100 transition-opacity" />

              <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[#08091A]">
                <img
                  src="/images/ab2dad42-7128-4228-894d-35f5a78cb8ce.jpg"
                  alt="Shivam Nikam"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Subtle gradient vignette to seamlessly merge image edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#03030B] via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#03030B]/60 opacity-60 pointer-events-none" />
              </div>

              {/* Astronaut Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-[#08091A]/80 backdrop-blur-md border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
                  </span>
                  <span className="text-xs font-mono text-zinc-300">Shivam Nikam</span>
                </div>
                <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30">
                  EARTH &bull; GALAXY
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle & 4 Pillars (Matching Reference Image) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge: ABOUT ME */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-wider mb-5 max-w-max shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <Star className="w-3.5 h-3.5 text-purple-400 fill-purple-400" />
              <span>ABOUT ME</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.15] mb-5">
              Beyond the Code,<br />
              Discover{' '}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                My Journey.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.aboutIntro}
            </p>

            {/* 4 Core Horizon Cards (Education, Passion, Goal, Dream) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
              {/* Card 1: Education */}
              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_12px_#8B5CF6] transition-all">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Education</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">BCA Student</div>
                </div>
              </div>

              {/* Card 2: Passion */}
              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_12px_#8B5CF6] transition-all">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Passion</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate">Development</div>
                </div>
              </div>

              {/* Card 3: Goal */}
              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_12px_#8B5CF6] transition-all">
                  <Rocket className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Goal</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate" title="Become a Skilled Software Developer">
                    Become a Skilled Developer
                  </div>
                </div>
              </div>

              {/* Card 4: Dream */}
              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 group flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 group-hover:shadow-[0_0_12px_#8B5CF6] transition-all">
                  <Star className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">Dream</div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate" title="Build Something Meaningful">
                    Build Meaningful
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Half: 3 Major Detailed Glassmorphism Cards (Education, Experience, Leadership) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-12">
          {/* Card 1: Education (Timeline with glowing milestone points & planet watermark) */}
          <div className="md:col-span-4 glass-panel p-6 sm:p-7 rounded-3xl border border-purple-500/25 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Education</h3>
              </div>

              {/* Glowing Vertical Timeline */}
              <div className="relative pl-6 space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-400 before:via-indigo-400 before:to-sky-400">
                {/* Timeline Item 1: 10th */}
                <div className="relative group/item">
                  <div className="absolute -left-[23px] top-1.5 w-4 h-4 rounded-full bg-[#03030B] border-2 border-purple-400 flex items-center justify-center shadow-[0_0_10px_#8B5CF6]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      10th Standard
                    </h4>
                    <p className="text-xs text-purple-300 font-mono mt-0.5">Warana</p>
                  </div>
                </div>

                {/* Timeline Item 2: 12th */}
                <div className="relative group/item">
                  <div className="absolute -left-[23px] top-1.5 w-4 h-4 rounded-full bg-[#03030B] border-2 border-indigo-400 flex items-center justify-center shadow-[0_0_10px_#6366F1]">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      12th Standard
                    </h4>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5">Warana</p>
                  </div>
                </div>

                {/* Timeline Item 3: Current BCA SY */}
                <div className="relative group/item">
                  <div className="absolute -left-[23px] top-1.5 w-4 h-4 rounded-full bg-[#03030B] border-2 border-sky-400 flex items-center justify-center shadow-[0_0_10px_#38BDF8]">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-white leading-snug">
                        BCA (Second Year)
                      </h4>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                        Current
                      </span>
                    </div>
                    <p className="text-xs text-sky-300 font-mono mt-0.5">D.Y. Patil, Talsande</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Planetary Motif Watermark in Corner */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-end relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600/20 to-sky-400/20 border border-purple-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-4 border border-purple-400/30 rounded-full rotate-[-25deg] absolute" />
                <div className="w-8 h-8 rounded-full bg-purple-900/60 shadow-inner" />
              </div>
            </div>
          </div>

          {/* Card 2: My Experience (Timeline with authentic circular logos) */}
          <div className="md:col-span-5 glass-panel p-6 sm:p-7 rounded-3xl border border-purple-500/25 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">My Experience</h3>
              </div>

              {/* Experience Items with Circular Logo Emblems */}
              <div className="space-y-6">
                {/* Item 1: WebSoftera */}
                <div className="flex items-start gap-4">
                  {/* Circular Logo Badge */}
                  <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex flex-col items-center justify-center shrink-0 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] p-1">
                    <span className="font-display font-black text-xs leading-none text-indigo-700">W</span>
                    <span className="text-[7px] font-bold text-slate-700 tracking-tighter scale-90">WebSoftera</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-sky-400 font-display">
                        WebSoftera
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300">
                        Front-End Intern
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Worked on responsive interfaces, e-commerce features, HTML, CSS, JavaScript, Bootstrap, PHP and WordPress.
                    </p>
                  </div>
                </div>

                {/* Connecting Dotted Line */}
                <div className="ml-6 w-[2px] h-3 bg-purple-500/40 border-l border-dashed border-purple-400" />

                {/* Item 2: Warana University */}
                <div className="flex items-start gap-4">
                  {/* Circular Logo Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#0A192F] text-sky-400 flex flex-col items-center justify-center shrink-0 border border-sky-400/40 shadow-[0_0_15px_rgba(56,189,248,0.3)] p-1">
                    <div className="w-5 h-5 rounded-full border border-sky-400/60 flex items-center justify-center text-[9px] font-serif font-bold">
                      WU
                    </div>
                    <span className="text-[6.5px] font-bold text-sky-300 uppercase tracking-tighter scale-90 mt-0.5">WARANA</span>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="text-sm sm:text-base font-bold text-sky-400 font-display">
                        Warana University
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-500/40 text-sky-300">
                        Software Developer Intern / Flutter Developer
                      </span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      Working on a Farmer and Dairy Management Application using Flutter and Firebase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Leadership (4 Roles with distinct purple icons) */}
          <div className="md:col-span-3 glass-panel p-6 sm:p-7 rounded-3xl border border-purple-500/25 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">Leadership</h3>
              </div>

              {/* Leadership List (Matching Screenshot) */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-center gap-3 group/lead">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover/lead:scale-105 group-hover/lead:shadow-[0_0_8px_#8B5CF6] transition-all">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/lead:text-white transition-colors">
                    BCA Technical Coordinator
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-3 group/lead">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover/lead:scale-105 group-hover/lead:shadow-[0_0_8px_#8B5CF6] transition-all">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/lead:text-white transition-colors">
                    Placement Coordinator
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-3 group/lead">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover/lead:scale-105 group-hover/lead:shadow-[0_0_8px_#8B5CF6] transition-all">
                    <Users className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/lead:text-white transition-colors">
                    NSS Volunteer and Camp Coordinator
                  </span>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-3 group/lead">
                  <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover/lead:scale-105 group-hover/lead:shadow-[0_0_8px_#8B5CF6] transition-all">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200 group-hover/lead:text-white transition-colors">
                    Technical Events and Workshop Contributor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quote + Explore My Projects CTA (Matching Reference Image) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Quote on Left */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-950/50 flex items-center justify-center text-purple-400 shrink-0">
              <Quote className="w-4 h-4" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium italic text-zinc-300">
                Code. Create. Innovate.
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                &mdash; Shivam Satish Nikam
              </span>
            </div>
          </div>

          {/* Explore My Projects CTA Button on Right */}
          <button
            onClick={handleScrollToProjects}
            className="px-6 py-2.5 rounded-full btn-cosmic-primary text-white text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all group"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
