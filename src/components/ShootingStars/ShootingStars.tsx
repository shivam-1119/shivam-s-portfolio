import React, { useEffect, useState } from 'react';

interface Meteor {
  id: number;
  top: number;
  left: number;
  duration: number;
  length: number;
  angle: number;
  color: string;
}

export const ShootingStars: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion = false }) => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    if (reducedMotion) return;

    let idCounter = 0;
    const colors = [
      'linear-gradient(90deg, #FFFFFF, #38BDF8, transparent)',
      'linear-gradient(90deg, #FFFFFF, #8B5CF6, transparent)',
      'linear-gradient(90deg, #FFFFFF, #A78BFA, transparent)',
    ];

    const spawnMeteor = () => {
      const newMeteor: Meteor = {
        id: idCounter++,
        top: Math.random() * 45, // Top 45% of viewport
        left: 20 + Math.random() * 70, // Start between 20% and 90% width
        duration: 0.8 + Math.random() * 0.9,
        length: 120 + Math.random() * 140,
        angle: -35 - Math.random() * 20, // -35 to -55 deg
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setMeteors(prev => [...prev.slice(-3), newMeteor]);

      setTimeout(() => {
        setMeteors(prev => prev.filter(m => m.id !== newMeteor.id));
      }, newMeteor.duration * 1000 + 200);
    };

    // Initial streak
    const firstTimer = setTimeout(spawnMeteor, 1800);

    // Periodic streaks
    const interval = setInterval(() => {
      if (Math.random() > 0.3) {
        spawnMeteor();
      }
    }, 4500);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {meteors.map(m => (
        <div
          key={m.id}
          className="absolute origin-left"
          style={{
            top: `${m.top}%`,
            left: `${m.left}%`,
            width: `${m.length}px`,
            height: '2px',
            background: m.color,
            transform: `rotate(${m.angle}deg)`,
            boxShadow: '0 0 10px rgba(56, 189, 248, 0.8), 0 0 20px rgba(139, 92, 246, 0.5)',
            animation: `shootingStar ${m.duration}s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
          }}
        >
          {/* Head sparkle */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
        </div>
      ))}
    </div>
  );
};
