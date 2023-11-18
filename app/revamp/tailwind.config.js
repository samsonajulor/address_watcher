/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'cs-xs': '0px 2px 3px rgba(0,0,0,0.10)',
        'cs-sm': '0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)',
        'cs-2sm': '0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)',
        'cs-3sm': '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)',
        'cs-4sm': '0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)',
        'cs-md': '0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)',
        'cs-2md': '0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)',
        'cs-3md': '0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)',
        'cs-4md': '0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)',
        'cs-5md': '0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)',
        'cs-lg': '0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)',
        'cs-2lg': '0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)',
        'cs-3lg': '0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)',
        'cs-ll': '1px 2px 10px rgba(0,0,0,0.08)',
      },
      colors: {
        'cs-bg': '#FAFBFB',
        'cs-dark-bg': '#32363D',
        'cs-primary': '#FFFFFF',
        'cs-dark-primary': '#1a1d1d',
        'cs-purple': '#402E8D',
        'cs-light-purple': '#7352FF',
        'cs-bg-purple': '#E2DBFF',
      },
      backgroundImage: {
        'purple-grad': 'linear-gradient(180deg, #402E8D3C , #402E8D14)',
        'black-grad': 'linear-gradient(180deg, #32363D22, #32363D00',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
