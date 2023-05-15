/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "v-blue" : "#4f46e5",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

