import React, { useState } from 'react';
import { ExternalLink, Search, Globe, Sparkles, X, CheckCircle, Radio } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { GithubIcon } from '../components/Icons/SocialIcons';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Mobile', 'Web App', 'AI / Computer Vision'];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden z-10">
      {/* Background Video (Muted background video for Projects Section) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
        >
          <source src="/images/gemini_generated_video_e079d4d4.mp4" type="video/mp4" />
        </video>

        {/* Ambient Darkening & Contrast Overlay for High Text Readability */}
        <div className="absolute inset-0 bg-[#03030B]/85 pointer-events-none backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#03030B] via-transparent to-[#03030B] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/50 border border-sky-500/30 text-sky-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
          <Globe className="w-3.5 h-3.5 text-sky-400" />
          <span>Planetary Deployments</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
          Explore My <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">Planets & Projects</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Each project orbits in its own sphere, crafted with precision architecture, clean code, and user-centric problem solving.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/70 border border-white/10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech or keyword..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/50 transition-all"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative glass-panel rounded-3xl p-6 border border-purple-500/20 hover:border-purple-500/60 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)]"
          >
            {/* Top Row: Planet Badge & Status */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {/* Mini Planet Indicator */}
                  <div
                    className="w-4 h-4 rounded-full relative shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: project.planetColor, color: project.planetColor }}
                  >
                    <div
                      className="absolute -inset-1 rounded-full border border-dashed opacity-75 animate-spin-slow"
                      style={{ borderColor: project.planetColor }}
                    />
                  </div>
                  <span className="text-xs font-mono font-medium text-zinc-300">
                    {project.planetName}
                  </span>
                </div>

                <span
                  className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                    project.status === 'Live & Deployed'
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400 shadow-[0_0_8px_#10B981]'
                      : project.status === 'In Development'
                      ? 'bg-amber-950/60 border-amber-500/40 text-amber-400'
                      : 'bg-purple-950/60 border-purple-500/40 text-purple-300'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white font-display tracking-tight mb-2 group-hover:text-purple-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap items-center gap-1.5 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveModalProject(project)}
                className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Mission Details</span>
              </button>

              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/40 transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                    title="Open Live Deployment"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white border border-white/10 transition-colors"
                    title="View Source Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    title="Proprietary / College Organization Project"
                    className="p-2 rounded-xl bg-white/5 text-zinc-500 border border-white/5 cursor-not-allowed opacity-60"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel p-6 sm:p-8 border border-purple-500/40 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: activeModalProject.planetColor }}
              />
              <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                {activeModalProject.planetName} &bull; {activeModalProject.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
              {activeModalProject.title}
            </h3>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {activeModalProject.description}
            </p>

            {/* Architecture Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                <Radio className="w-3.5 h-3.5 text-sky-400" />
                <span>Core Mission Highlights</span>
              </h4>
              <div className="space-y-2.5">
                {activeModalProject.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                Propulsion & Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 text-sm font-medium transition-colors cursor-pointer"
              >
                Close Orbit
              </button>

              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl btn-cosmic-primary text-white text-sm font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.6)]"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
