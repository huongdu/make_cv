/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{js,html}"],
  theme: {
    extend: {
      animation: {
        '50': '50ms',
      },
    },
  },
  plugins: [],
}

