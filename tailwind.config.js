/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#03030B',
          darker: '#020207',
          surface: '#08091A',
          card: 'rgba(13, 15, 36, 0.65)',
          border: 'rgba(139, 92, 246, 0.25)',
          borderLight: 'rgba(255, 255, 255, 0.1)',
        },
        neon: {
          purple: '#8B5CF6',
          blue: '#38BDF8',
          violet: '#4C1D95',
          cyan: '#06B6D4',
          glow: '#A855F7',
        },
        text: {
          main: '#F8FAFC',
          muted: '#A1A1AA',
          subtle: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Orbitron', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 25px rgba(139, 92, 246, 0.45)',
        'neon-blue': '0 0 25px rgba(56, 189, 248, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-hover': '0 12px 40px 0 rgba(139, 92, 246, 0.25)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
