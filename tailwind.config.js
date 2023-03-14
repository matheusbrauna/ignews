/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        500: '#61DCFB',
      },

      green: {
        500: '#04D361',
      },

      yellow: {
        500: '#EBA417',
      },

      gray: {
        50: '#E1E1E6',
        100: '#C4C4CC',
        200: '#8D8D99',
        300: '#7C7C8A',
        400: '#505059',
        500: '#323238',
        600: '#29292E',
        700: '#202024',
        800: '#121214',
        900: '#09090A',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '16px',
      },
    },
  },
  plugins: [],
}
