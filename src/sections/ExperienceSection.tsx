import React from 'react';
import { Shield, Terminal, CheckCircle2, Crosshair, Award } from 'lucide-react';
import { EXPERIENCES, LEADERSHIP_ROLES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/50 border border-violet-500/30 text-violet-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
          <Crosshair className="w-3.5 h-3.5 text-sky-400" />
          <span>Mission Logs & Telemetry</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Mission <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">History & Experience</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Operational track record across software engineering internships and departmental leadership roles.
        </p>
      </div>

      {/* Futuristic Mission Control Grid */}
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={exp.id}
            className="group relative glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/25 hover:border-purple-500/60 transition-all duration-300 shadow-xl overflow-hidden"
          >
            {/* Top HUD Telemetry Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-[11px] text-zinc-400">
                  SECTOR: 0{index + 1}
                </div>
                <div
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                    exp.status === 'Ongoing'
                      ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 shadow-[0_0_10px_#10B981]'
                      : 'bg-purple-950/80 border border-purple-500/50 text-purple-300'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span>{exp.badge}</span>
                </div>
              </div>

              <div className="font-mono text-xs text-zinc-400">
                TIMEFRAME: <span className="text-white font-semibold">{exp.period}</span>
              </div>
            </div>

            {/* Role & Organization Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-bold text-white font-display mb-1 group-hover:text-purple-300 transition-colors">
                  {exp.role}
                </h3>
                <div className="text-base font-semibold text-sky-400 mb-4 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-sky-400" />
                  <span>{exp.organization}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities Mission Log */}
              <div className="lg:col-span-8 bg-black/30 rounded-2xl p-5 border border-white/5">
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-purple-300 uppercase tracking-widest">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>Deployment Directives & Contributions</span>
                </div>

                <div className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leadership & Coordination Command Strip */}
      <div className="mt-14 pt-10 border-t border-white/10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <Award className="w-4 h-4 text-sky-400" />
            <span>Co-Curricular & Community Leadership</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LEADERSHIP_ROLES.map((lead, lIdx) => (
            <div
              key={lIdx}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-purple-300 block mb-1">
                  {lead.role}
                </span>
                <h4 className="text-base font-bold text-white mb-1">{lead.title}</h4>
                <div className="text-xs text-sky-400 font-medium mb-3">{lead.organization}</div>
              </div>

              <div className="text-xs text-zinc-400 space-y-1.5 pt-3 border-t border-white/5">
                {lead.highlights.slice(0, 2).map((h: string, i: number) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-400 mt-0.5">&bull;</span>
                    <span className="line-clamp-2">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
