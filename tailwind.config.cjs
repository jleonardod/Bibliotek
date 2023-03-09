/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#127369',
        secondary: '#0FBFAE',
        third: "#011F26",
        fourth: "#F5F7F9",
      }
    },
  },
  plugins: [],
}