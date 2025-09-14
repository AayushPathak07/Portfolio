/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sparkle: 'sparkle 480ms ease-out forwards',
        burst: 'burst 600ms ease-out forwards',
        breathing: 'breathing 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '30%': { opacity: 1 },
          '100%': { transform: 'scale(1.3)', opacity: 0 },
        },
        burst: {
          '0%': { transform: 'scale(0.7)', opacity: 0.8 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)', textShadow: '0 0 8px rgba(186, 230, 253, 0.4)' },
          '50%': { transform: 'scale(1.03)', textShadow: '0 0 16px rgba(186, 230, 253, 0.7)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
