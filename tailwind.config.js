const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '639px'},

      'md': {'max': '768px'},

      'lg': {'max': '1023px'},

      'xl': {'max': '1279px'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
