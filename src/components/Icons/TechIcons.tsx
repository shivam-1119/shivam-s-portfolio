import React from 'react';

// 1. .NET Logo (Purple square with .NET)
export const DotNetIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#68217A] to-[#512BD4] shadow-[0_0_12px_rgba(104,33,122,0.5)] border border-purple-400/30 ${className}`}>
    <span className="text-[11px] font-black tracking-tight text-white font-mono">.NET</span>
  </div>
);

// 2. C# Logo (Purple hexagon / badge with C#)
export const CSharpIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#7B2CBF] to-[#5A189A] shadow-[0_0_12px_rgba(123,44,191,0.5)] border border-purple-400/30 ${className}`}>
    <div className="flex items-center text-white font-black text-xs">
      <span>C</span>
      <span className="text-purple-300 text-[10px] -ml-0.5">#</span>
    </div>
  </div>
);

// 3. Flutter Logo
export const FlutterIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-[#09152E]/90 border border-sky-500/30 shadow-[0_0_12px_rgba(56,189,248,0.3)] ${className}`}>
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#42A5F5]" preserveAspectRatio="xMidYMid meet">
      <path d="M14.314 0L2.3 12 6 15.7 21.686 0h-7.372zm0 14.186L8.457 20 12.157 23.7l9.529-9.514h-7.372z" fill="#02569B" />
      <path d="M14.314 0L6 8.314l3.7 3.7L21.686 0h-7.372z" fill="#29B6F6" />
      <path d="M12.157 14.186l-3.7 3.7 3.7 3.7 3.7-3.7-3.7-3.7z" fill="#01579B" />
      <path d="M14.314 14.186L12.157 16.343 15.857 20.043 21.686 14.186h-7.372z" fill="#29B6F6" />
    </svg>
  </div>
);

// 4. Dart / Cross-platform layers icon
export const DartLayerIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-[#082032]/90 border border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.3)] ${className}`}>
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#00B4D8" stroke="#90E0EF" strokeWidth="1" />
      <path d="M2 17l10 5 10-5" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
      <path d="M2 12l10 5 10-5" stroke="#0096C7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

// 5. React Atom Icon
export const ReactIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-[#081B2B]/90 border border-cyan-400/35 shadow-[0_0_12px_rgba(97,218,251,0.35)] ${className}`}>
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-[#61DAFB] animate-spin-slow">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  </div>
);

// 6. Firebase Flame Icon
export const FirebaseIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-[#261605]/90 border border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.3)] ${className}`}>
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path d="M4.5 18.5L9 2l3.5 6.5-8 10z" fill="#FFA000" />
      <path d="M19.5 18.5L15 8l-2.5 5 7 5.5z" fill="#F57C00" />
      <path d="M4.5 18.5L12 22.5l7.5-4-7.5-12-7.5 12z" fill="#FFCA28" />
    </svg>
  </div>
);

// 7. JavaScript Icon
export const JavaScriptIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-[#F7DF1E] shadow-[0_0_12px_rgba(247,223,30,0.4)] ${className}`}>
    <span className="text-[12px] font-black text-black tracking-tight font-mono">JS</span>
  </div>
);

// 8. SQL / Database Icon
export const SqlIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <div className={`relative flex items-center justify-center rounded-xl bg-[#09233A]/90 border border-blue-400/35 shadow-[0_0_12px_rgba(56,189,248,0.35)] ${className}`}>
    <div className="flex flex-col items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#38BDF8]" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
      <span className="text-[7px] font-black text-[#38BDF8] tracking-tighter -mt-0.5">SQL</span>
    </div>
  </div>
);
