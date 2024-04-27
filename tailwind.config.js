/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      colors: {
        'bright-blue': '#00A3FF',
        'light-blue': '#66BFFF',
        'dark-blue': '#007ACC',
        'teal': '#00B2A9',
        'sky-blue': '#00BFFF',
        'bright-orange': '#FF6700',
        'lemon': '#CCFF00',
        'soft-pink': '#FF66B2',
        'white': '#FFFFFF',
        'gray': '#808080',
        'black': '#000000'
      }
    },
  },
  plugins: [],
}

