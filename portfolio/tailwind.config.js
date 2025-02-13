/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customUnderline: '#f4db7d', // Your custom color
      },
     
    },
  },
  plugins: [],
}

