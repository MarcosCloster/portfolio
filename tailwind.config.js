/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        colorGreenWater: '#12f7d6',
        title: '#85fae8'
      },
      backgroundColor: {
        background: '#292f36',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        spaceMono: ['Space Mono', 'sans-serif']
      },
      width: {
        forms: '450px'
      },
      borderColor: {
        colorGreenWater: '#12f7d6'
      }
    },
  },
  plugins: [],
}

