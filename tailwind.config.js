// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#A78BFA',
        },
        pink: {
          500: '#EC4899',
        },
        red: {
          500: '#EF4444',
        },
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
        },
        gray: {
          300: '#D1D5DB',
        },
        green: {
          500: '#10B981',
        },
        white: '#FFFFFF',
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        full: '9999px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
