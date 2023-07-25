/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      // 'metal':'#164B60',
      // Add your custom colors here
      primary: 'F11A7B', // Custom primary color (example: orange-red)
      secondary: '#4169E1', // Custom secondary color (example: royal blue)
      customGray: '#777', // Custom gray color (example: medium gray)
      // You can add as many custom colors as you need
    },
    extend: {},
  },
  plugins: [],
}