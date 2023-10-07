/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        special: '#ff5c50',
        'service-bg': '#F8714726',
        'des-text': '#6a6a6a',
      }
    },
  },
  plugins: [require("daisyui")],
});