import React from 'react';

interface LogoSymbolProps {
  className?: string;
}

export const LogoSymbol: React.FC<LogoSymbolProps> = ({ className = 'w-8 h-8' }) => {
  return (
    <svg
      viewBox="0 0 36 36"
      className={`filter drop-shadow-[0_0_10px_rgba(168,85,247,0.85)] ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shivam-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C084FC" />
          <stop offset="45%" stopColor="#A855F7" />
          <stop offset="80%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id="shivam-core-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>

      {/* Cybernetic Cosmic 'S' Path */}
      <path
        d="M27 6.5H12L5.5 13.5L10 17.5H21.5L26 21.5L19.5 28.5H7"
        stroke="url(#shivam-logo-grad)"
        strokeWidth="3.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Glowing Central Diamond Star */}
      <path
        d="M16 14.5L19 17.5L16 20.5L13 17.5Z"
        fill="url(#shivam-core-accent)"
        opacity="0.9"
      />

      {/* Radiant Terminal Starlight Orbs */}
      <circle cx="27" cy="6.5" r="1.8" fill="#38BDF8" />
      <circle cx="7" cy="28.5" r="1.8" fill="#C084FC" />
    </svg>
  );
};
