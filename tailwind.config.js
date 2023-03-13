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
        100: '#E1E1E6',
        300: '#A8A8B3',
        700: '#323238',
        800: '#29292e',
        850: '#1F2729',
        900: '#121414',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
