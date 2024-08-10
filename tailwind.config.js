/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./ui/**/*.{js,tsx,ts,jsx}', './client/*.html'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '3-dynamic': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};
