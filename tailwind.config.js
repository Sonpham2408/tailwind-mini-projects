/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(200px, auto))',
      }
    },
  },
  plugins: [],
}
