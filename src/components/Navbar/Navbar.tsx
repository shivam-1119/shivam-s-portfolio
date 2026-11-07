import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Sparkles, Orbit, Home, User, Box, Code2, Briefcase } from 'lucide-react';
import { LogoSymbol } from '../Icons/LogoSymbol';

interface NavbarProps {
  activeSection: string;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  reducedMotion,
  onToggleReducedMotion,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'About', href: '#about', icon: User },
    { label: 'Projects', href: '#projects', icon: Box },
    { label: 'Skills', href: '#skills', icon: Code2 },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Contact', href: '#contact', icon: Send },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-8 ${
        isScrolled
          ? 'bg-[#03030B]/85 backdrop-blur-xl border-b border-purple-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3'
          : 'bg-transparent pt-5 pb-3'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2.5 cursor-pointer text-decoration-none"
        >
          <LogoSymbol className="w-8 h-8 group-hover:scale-105 transition-transform" />
          <div className="flex items-center tracking-wider text-base sm:text-lg font-bold font-display">
            <span className="text-white">SHIVAM</span>
            <span className="text-[#A855F7]">VERSE</span>
          </div>
        </a>

        {/* Desktop Navigation Links (Clean text with active glow underline matching screenshot) */}
        <nav className="hidden md:flex items-center gap-7 px-6 py-2 rounded-full bg-[#0B091E]/60 backdrop-blur-xl border border-purple-500/25 shadow-[0_4px_25px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.label.toLowerCase();
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-xs sm:text-sm font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-gradient-to-r from-purple-500 via-indigo-400 to-sky-400 rounded-full shadow-[0_0_10px_#A855F7]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-3">
          {/* Motion toggle for accessibility */}
          <button
            onClick={onToggleReducedMotion}
            title={reducedMotion ? 'Enable Full 3D Motion' : 'Enable Reduced Motion'}
            aria-label="Toggle motion effects"
            className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border border-white/10"
          >
            <Orbit className={`w-3.5 h-3.5 ${reducedMotion ? 'opacity-40' : 'text-purple-400'}`} />
          </button>

          {/* Let's Talk CTA button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-medium text-white border border-purple-500/50 bg-[#2D124D]/50 hover:bg-[#3B1765]/70 hover:border-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] group"
          >
            <span>Let's Talk</span>
            <Send className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 p-5 rounded-2xl glass-panel border border-purple-500/30 shadow-2xl animate-in fade-in duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.label.toLowerCase();
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40 font-semibold'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span>{link.label}</span>
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl btn-cosmic-primary text-white text-sm font-semibold tracking-wide"
              >
                <span>Let's Talk</span>
                <Send className="w-4 h-4" />
              </a>

              <button
                onClick={onToggleReducedMotion}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-zinc-400 hover:text-white"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>Motion Mode: {reducedMotion ? 'Reduced' : 'Immersive 3D'}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
