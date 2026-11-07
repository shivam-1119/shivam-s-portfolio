import React, { useState } from 'react';
import { Layers, Sparkles, Terminal, Database, Wrench, Server, Cpu, CheckCircle } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import type { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const categories = [
    { id: 'All', label: 'Entire Galaxy', icon: Sparkles },
    { id: 'Programming', label: 'Programming', icon: Terminal },
    { id: 'Frameworks', label: 'Frameworks', icon: Layers },
    { id: 'Backend', label: 'Backend & Cloud', icon: Server },
    { id: 'Database', label: 'Databases', icon: Database },
    { id: 'Tools', label: 'Dev Tools', icon: Wrench },
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
          <Cpu className="w-3.5 h-3.5 text-sky-400" />
          <span>Orbital Stack</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          My <span className="bg-gradient-to-r from-purple-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Technology Universe</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Technologies and developer tools I utilize to engineer scalable web architectures and native mobile applications.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'btn-cosmic-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]'
                  : 'glass-panel text-zinc-400 hover:text-white hover:border-purple-500/40'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Skills Orbital Display Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {filteredSkills.map((skill) => {
          const isSelected = activeSkill?.name === skill.name;
          return (
            <div
              key={skill.name}
              onClick={() => setActiveSkill(skill)}
              className={`group relative glass-panel rounded-3xl p-5 border transition-all duration-300 cursor-pointer flex flex-col items-center text-center justify-between hover:-translate-y-1.5 ${
                isSelected
                  ? 'border-purple-400 shadow-[0_0_25px_rgba(139,92,246,0.4)] bg-purple-950/30'
                  : 'border-white/10 hover:border-purple-500/40 hover:shadow-[0_8px_25px_rgba(0,0,0,0.5)]'
              }`}
            >
              {/* Orbital Glow Ring Effect */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 relative"
                style={{
                  background: `radial-gradient(circle, ${skill.color}25 0%, rgba(8,9,26,0.9) 100%)`,
                  border: `1.5px solid ${skill.color}55`,
                  boxShadow: `0 0 15px ${skill.color}33`,
                }}
              >
                <div
                  className="w-3 h-3 rounded-full absolute -top-1 -right-1 shadow-[0_0_8px_currentColor]"
                  style={{ backgroundColor: skill.color, color: skill.color }}
                />
                <span className="font-display font-bold text-lg text-white">
                  {skill.name.substring(0, 2).toUpperCase()}
                </span>
              </div>

              {/* Skill Info */}
              <div className="w-full">
                <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="inline-block mt-1 text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded-full bg-white/5 border border-white/5">
                  {skill.experienceLevel}
                </span>
              </div>

              {/* Hover Hint */}
              <div className="mt-4 pt-3 border-t border-white/5 w-full flex items-center justify-center text-[11px] text-zinc-500 group-hover:text-sky-300 transition-colors">
                <span>View Details &rarr;</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Skill Detail Floating Panel */}
      {activeSkill && (
        <div className="mt-10 p-6 sm:p-8 rounded-3xl glass-panel border border-purple-500/30 max-w-2xl mx-auto shadow-2xl animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full shadow-[0_0_8px_currentColor]"
                style={{ backgroundColor: activeSkill.color, color: activeSkill.color }}
              />
              <h4 className="text-xl font-bold text-white font-display">
                {activeSkill.name}
              </h4>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/30">
                {activeSkill.category}
              </span>
            </div>
            <button
              onClick={() => setActiveSkill(null)}
              className="text-xs font-mono text-zinc-400 hover:text-white px-2 py-1 rounded-lg bg-white/5"
            >
              Dismiss
            </button>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed mb-4">
            {activeSkill.description}
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 bg-sky-950/40 border border-sky-500/20 px-3 py-2 rounded-xl">
            <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>Applied in live deployments and core academic capstone projects.</span>
          </div>
        </div>
      )}
    </section>
  );
};
