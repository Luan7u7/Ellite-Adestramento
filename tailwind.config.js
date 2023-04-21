/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    fontFamily: {
      'ws': ['Work Sans', 'sans-serif'],
      'dg': ['Didact Gothic', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
}