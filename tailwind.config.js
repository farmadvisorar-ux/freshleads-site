/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fresh: {
          black: '#07080B',
          dark: '#0D0F14',
          card: '#13161F',
          cardHover: '#181C28',
          border: '#202636',
          borderLight: '#2C3449',
          orange: '#FF5C00',
          orangeHover: '#FF6E1A',
          orangeGlow: 'rgba(255, 92, 0, 0.22)',
          amber: '#F59E0B',
          emerald: '#10B981',
          slate: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'orange-glow': '0 0 25px -4px rgba(255, 92, 0, 0.35)',
        'orange-sm': '0 0 12px -2px rgba(255, 92, 0, 0.3)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 1.2s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'scaleY(0.3)' },
          '50%': { transform: 'scaleY(1)' },
        }
      }
    },
  },
  plugins: [],
}
