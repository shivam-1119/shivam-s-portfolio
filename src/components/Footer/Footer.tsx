import React from 'react';
import { ArrowUp, Mail, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../Icons/SocialIcons';
import { LogoSymbol } from '../Icons/LogoSymbol';

interface FooterProps {
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 border-t border-purple-500/20 bg-[#03030B]/90 backdrop-blur-xl z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <LogoSymbol className="w-7 h-7" />
            <span className="font-display font-bold tracking-wider text-lg text-white">
              SHIVAM<span className="text-purple-400">VERSE</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-mono tracking-wider">
            &ldquo;{PERSONAL_INFO.tagline}&rdquo; &bull; Full-Stack &amp; Mobile Engineer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/40 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/40 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-zinc-400 hover:text-white transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top & Admin access */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-purple-900/30 border border-white/10 hover:border-purple-500/40 text-xs font-mono text-zinc-400 hover:text-purple-300 transition-colors"
            title="Open Mission Control / Admin Preview"
          >
            <Lock className="w-3 h-3 text-purple-400" />
            <span>Admin</span>
          </button>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-all hover:border-purple-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] group cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-zinc-500">
        <p>
          &copy; {new Date().getFullYear()} Shivam Satish Nikam. Designed &amp; Engineered for the Galaxy.
        </p>
      </div>
    </footer>
  );
};
