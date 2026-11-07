import React from 'react';
import { Rocket, Download, ArrowRight, Briefcase, Code, GraduationCap, Users } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  DotNetIcon,
  CSharpIcon,
  FlutterIcon,
  DartLayerIcon,
  ReactIcon,
  FirebaseIcon,
  JavaScriptIcon,
  SqlIcon,
} from '../components/Icons/TechIcons';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-shivam-nikam.pdf';
    link.download = 'Shivam_Satish_Nikam_Software_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between"
    >
      {/* Background Video (Only for Home Page Section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-[50%] sm:left-[62%] lg:left-[66%] -translate-x-1/2 -translate-y-1/2 min-w-[135%] min-h-[110%] w-[135vw] h-[115vh] max-w-none object-cover"
        >
          <source src="/images/cosmic-hero-bg.mp4" type="video/mp4" />
          <source src="/images/WhatsApp Video 2026-10-31 at 2.48.56 PM.mp4" type="video/mp4" />
        </video>

        {/* Soft Vignettes & Text Readability Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03030B]/75 via-[#03030B]/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03030B]/40 via-transparent to-[#03030B] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full min-h-screen flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 lg:px-12">
        {/* Top / Main Hero Content Area */}
        <div className="flex-1 flex flex-col justify-center max-w-3xl lg:max-w-2xl mt-4 sm:mt-6">
          <div className="relative p-2 sm:p-4">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a0718]/85 border border-purple-500/30 text-xs font-semibold uppercase tracking-wider text-zinc-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
            </span>
            <span className="tracking-widest font-mono text-[11px] text-zinc-200">
              {PERSONAL_INFO.badge}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2 font-display">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-[#A855F7] via-[#818CF8] to-[#38BDF8] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              {PERSONAL_INFO.shortName}.
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 flex flex-wrap items-center gap-1.5">
            <span className="text-[#C084FC] font-semibold">Full-Stack</span>
            <span className="text-white font-medium">Developer</span>
            <span className="text-zinc-500 font-light mx-1">|</span>
            <span className="text-[#38BDF8] font-medium">Software Engineer</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#CBD5E1] font-normal leading-relaxed max-w-xl mb-7">
            {PERSONAL_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-7">
            <button
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#6366F1] to-[#38BDF8] text-white font-semibold text-sm sm:text-base flex items-center gap-3 group cursor-pointer shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(56,189,248,0.7)] hover:scale-[1.02] transition-all duration-300"
            >
              <Rocket className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Explore My Universe</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-6 py-3.5 rounded-2xl bg-[#090616]/70 border border-white/20 hover:border-purple-400/50 hover:bg-[#150F2C]/80 text-zinc-200 hover:text-white font-medium text-sm sm:text-base flex items-center gap-2.5 cursor-pointer backdrop-blur-md transition-all duration-300"
            >
              <Download className="w-4 h-4 text-zinc-300" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Technology Badges Capsule Matching Reference UI */}
          <div className="pt-1">
            <div className="flex flex-wrap items-center gap-2.5 p-2.5 rounded-2xl bg-[#0B081A]/70 border border-purple-500/25 backdrop-blur-md max-w-max shadow-inner">
              <DotNetIcon />
              <CSharpIcon />
              <FlutterIcon />
              <DartLayerIcon />
              <ReactIcon />
              <FirebaseIcon />
              <JavaScriptIcon />
              <SqlIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Achievement Cards Row (Matching Reference Image) */}
      <div className="mt-8 sm:mt-10 pt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {/* Card 1: Internship */}
          <div className="p-4 rounded-2xl bg-[#0B081A]/60 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-900/40 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:scale-105 group-hover:shadow-[0_0_15px_#8B5CF6] transition-all">
                <Briefcase className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">1</div>
                <div className="text-xs text-zinc-400 font-medium">Internship Experience</div>
              </div>
            </div>
          </div>

          {/* Card 2: Projects */}
          <div className="p-4 rounded-2xl bg-[#0B081A]/60 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:shadow-[0_0_15px_#38BDF8] transition-all">
                <Code className="w-5 h-5 text-sky-300" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">7+</div>
                <div className="text-xs text-zinc-400 font-medium">Projects</div>
              </div>
            </div>
          </div>

          {/* Card 3: BCA Student */}
          <div className="p-4 rounded-2xl bg-[#0B081A]/60 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400 group-hover:scale-105 group-hover:shadow-[0_0_15px_#8B5CF6] transition-all">
                <GraduationCap className="w-5 h-5 text-purple-300" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">BCA</div>
                <div className="text-xs text-zinc-400 font-medium">Student</div>
              </div>
            </div>
          </div>

          {/* Card 4: Technical Coordinator */}
          <div className="p-4 rounded-2xl bg-[#0B081A]/60 backdrop-blur-xl border border-purple-500/25 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] group">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:shadow-[0_0_15px_#818CF8] transition-all">
                <Users className="w-5 h-5 text-indigo-300" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">Technical</div>
                <div className="text-xs text-zinc-400 font-medium">Coordinator</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-6 flex flex-col items-center justify-center text-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="text-[11px] font-mono tracking-widest text-zinc-300 opacity-90">
              Scroll Down
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-purple-400/50 flex items-start justify-center p-1 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
              <div className="w-1.5 h-2.5 rounded-full bg-purple-400 animate-bounce mt-0.5 shadow-[0_0_6px_#8B5CF6]" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);
};
