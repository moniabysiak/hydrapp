/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "page":"#0F172A"
      },
      fontFamily: {
        "roboto": "'Roboto', sans-serif"
      },
    },
  },
  plugins: [],
}

