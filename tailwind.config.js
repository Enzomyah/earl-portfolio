/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#080C14',
          subtle: '#0B101D',
          card: '#0E1526',
          cardHover: '#131C31',
        },
        border: {
          subtle: '#172239',
          hover: '#26385C',
        },
        accent: {
          indigo: '#4F46E5',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(79, 70, 229, 0.45)',
        glowSm: '0 0 15px -3px rgba(79, 70, 229, 0.35)',
        glowCard: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(79, 70, 229, 0.08)',
      }
    },
  },
  plugins: [],
}

