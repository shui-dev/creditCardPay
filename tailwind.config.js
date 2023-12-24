/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        down: {
          '0%': { top: '-90px' },
          '100%': { top: '28px' },
        }
      }
    },
  },
  plugins: [],
}