/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        colorGreenWater: '#12f7d6',
      },
      backgroundColor: {
        background: '#292f36',
      }
    },
  },
  plugins: [],
}

