/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'high-empathy': ['"High Empathy"', 'sans-serif'],
      },
      fontSize: {
        'title': '58px',
        'description': '30px',
        'button': '20px',
      },
      colors: {
        primary: '#AF6A53', 
        secondary: '#000000',
        background: '#ebeaea',
      },
    },
  },
  plugins: [],
}
