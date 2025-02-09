/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#040316',
        'background': '#ffffff',
        'primary': '#c8cde4',
        'secondary': '#57fffc',
        'accent': '#09090b',
       },
       
    },
  },
  plugins: [],
}