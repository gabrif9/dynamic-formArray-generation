/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
    themes: ["dark"],
  },
  plugins: [
    require('daisyui'),
  ],
}

