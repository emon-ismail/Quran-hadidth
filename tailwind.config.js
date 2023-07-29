/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      green:'#008000',
      // 'metal':'#164B60',
      // Add your custom colors here
      primary: 'F11A7B', // Custom primary color (example: orange-red)
      secondary: '#4169E1', // Custom secondary color (example: royal blue)
      customGray: '#777', // Custom gray color (example: medium gray)
      // You can add as many custom colors as you need
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}