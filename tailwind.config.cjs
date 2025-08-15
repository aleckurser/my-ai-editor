/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Dark mode toggle support
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'logo-spin': { // logo spin animation එකේ keyframes මෙතනට දානවා
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        'logo-spin': 'logo-spin infinite 20s linear', // animation එක මෙතනට දානවා
      }
    }
  },
  plugins: []
}