/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '825px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightgray: "#a2a2a2",
        dark:"#404040",
        highlight:"#48b5e9",
      },
      fontFamily: {
        archivo:['Archivo', 'sans-serif']
      }
    },
  },
  plugins: [],
}
