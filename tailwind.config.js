/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pale-silver': '#D9D7D7',
        'deep-purple-black': '#1B1026',
        'muddy-brown': '#736048',
        'dark-green': '#0b4e11',
        'soft-beige': '#D9BEA7',
        'rich-mahogany': '#734136',
        'white': '#FFFFFF',
        'gray': '#b6b6b6',
        'black': '#000000'
      }
    },
  },
  plugins: [],
}

