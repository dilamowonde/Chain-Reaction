/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      'primary':'#ee3190', 
      'secondary':'#274f69', 
      'color-base':'#67b3e4', 
      'color-extra':'<div id="97a3e0"></div>', 
    }
  }
  },
  plugins: [],
}
