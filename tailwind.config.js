/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:'575px',
      md:'767px',
      lg:'992px',
      xl:'1200px',
    },
    
    extend: {
      colors:{
        
      },
    },
  },
  plugins: [],
}