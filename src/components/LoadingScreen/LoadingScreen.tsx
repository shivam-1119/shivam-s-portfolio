import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { LogoSymbol } from '../Icons/LogoSymbol';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFading(true);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#03030B] transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-28 h-28 flex items-center justify-center mb-8">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/40 animate-spin-slow" />
        <div className="absolute inset-2 rounded-full border-2 border-dotted border-sky-400/40 animate-spin" />
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-sky-400 p-[1.5px] shadow-[0_0_30px_rgba(139,92,246,0.8)]">
          <div className="w-full h-full bg-[#03030B] rounded-[14px] flex items-center justify-center">
            <LogoSymbol className="w-9 h-9" />
          </div>
        </div>
      </div>

      <h1 className="font-display font-bold text-xl sm:text-2xl text-white tracking-widest mb-3">
        SHIVAM<span className="text-purple-400">VERSE</span>
      </h1>

      <p className="font-mono text-xs text-purple-300 uppercase tracking-widest mb-6 flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
        <span>Entering Subspace Simulation... {progress}%</span>
      </p>

      {/* Progress Bar */}
      <div className="w-56 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-sky-400 to-indigo-500 transition-all duration-150 rounded-full shadow-[0_0_10px_#8B5CF6]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
