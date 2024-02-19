/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': '#ecd19a',
      }
    },
    container: {
      center: true,
      padding:'2rem',
    },
  },
  plugins: [],
}

