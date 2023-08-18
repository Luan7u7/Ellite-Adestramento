/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {

      fontFamily: {
        'MarcellusSC': 'Marcellus SC',  
      },

     colors: {  
      'mark-orange' : '#d36d34',
      grayDark: '#2c2929'
     },

     keyframes: {
      loadpage: {
        '0%': { transform: 'translateY(4rem)', opacity: '0' },
        '60%': {opacity: '1'},
        '100%': { transform: 'translateY(0rem)' },
        },
      popUpLateral: {
        '0%':{transform: 'translateX(14rem)', opacity: '0'},
        '30%':{opacity: '1'},
        '100%':{transform: 'translateX(0rem)'}
        }
      },

      animation: {
        loading: 'loadpage 1s cubic-bezier(.645,.045,.355,1.000) both',
        lateral: 'popUpLateral 1s cubic-bezier(.645,.045,.355,1.000) both'
      }
    },
  },
  plugins: [],
}