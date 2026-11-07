import React from 'react';
import { StarField } from '../StarField/StarField';
import { ShootingStars } from '../ShootingStars/ShootingStars';

interface SpaceBackgroundProps {
  reducedMotion: boolean;
}

export const SpaceBackground: React.FC<SpaceBackgroundProps> = ({ reducedMotion }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#03030B]">
      {/* Deep Space Cosmic Nebulas (Multi-layered subtle radial gradients) */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `
            radial-gradient(circle at 82% 35%, rgba(139, 92, 246, 0.22) 0%, transparent 45%),
            radial-gradient(circle at 25% 65%, rgba(56, 189, 248, 0.14) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(76, 29, 149, 0.28) 0%, transparent 55%),
            radial-gradient(circle at 90% 15%, rgba(217, 70, 239, 0.12) 0%, transparent 40%)
          `,
        }}
      />

      {/* 2. Twinkling Starlight Particles */}
      <StarField reducedMotion={reducedMotion} />

      {/* 3. Streaking Shooting Stars / Meteors */}
      <ShootingStars reducedMotion={reducedMotion} />

      {/* 4. Soft Vignette Overlay for Depth & High Readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#03030B]/20 via-transparent to-[#03030B]/80 pointer-events-none"
      />
    </div>
  );
};
