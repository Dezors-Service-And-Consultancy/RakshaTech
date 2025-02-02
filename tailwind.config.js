/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading:'Roboto',
        buttonText:'Ubuntu',
        text:'Poppins',
        quantico:'Quantico',
        playw:"Playwrite VN",
      },
      screens:{
        'xs':'376px',
      }
    },
  },
  plugins: [],
}