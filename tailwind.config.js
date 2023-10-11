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

      screens: {
        'phone': {'min': '280px', 'max': '420px'},
        'tablet': {'min': '420px', 'max': '3000px'},
      },

      fontFamily: {
        MarcellusSC: 'Marcellus SC',
        Marcellus: 'Marcellus',
        DidactGothic: 'Didact Gothic',
        PoiretOne: 'Poiret One',
        Raleway: 'Raleway',
        WorkSans: 'Work Sans',
      },

      colors: {
        markOrange : '#d36d34',
        greened  : "#72997299",
        reded: '#c85359',
        grayDark: '#2c2929',
        yellowed: '#f2b14f',
        glass: '#505050B2',

        'casablanca': {
          default: '#f2b14f',
          '50': '#ddbd78',
          '100': '#dcc274',
          '200': '#d6b45c',
          '300': '#cca33e',
          '400': '#b58a36',
          '500': '#957232',
          '600': '#876636',
          '700': '#715632',
          '800': '#5e4b36',
          '900': '#504434',
          '950': '#32291f',
        },

        'fuzzy-wuzzy': {
          default:'#c85359',
          '50': '#fcf4f4',
          '100': '#f9ebea',
          '200': '#f4d7d8',
          '300': '#eab7b7',
          '400': '#de8e90',
          '500': '#c85359',
          '600': '#b84651',
          '700': '#9a3643',
          '800': '#81303c',
          '900': '#6f2c38',
          '950': '#3d141b',
        },

        'shark': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#686868',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#262626',
        },

        'mariner': {
        '50': '#f0f6fe',
        '100': '#dee9fb',
        '200': '#c5daf8',
        '300': '#9cc3f4',
        '400': '#6ea2ec',
        '500': '#4c81e5',
        '600': '#305fd8',
        '700': '#2e51c7',
        '800': '#2b43a2',
        '900': '#283c80',
        '950': '#1c264f',
        },

        'laurel': {
          default: '#5b8b81',
          '50': '#e4eaec',
          '100': '#e7eeee',
          '200': '#dfe7e7',
          '300': '#b5c9c8',
          '400': '#87a6a2',
          '500': '#5b8b81',
          '600': '#437061',
          '700': '#36594a',
          '800': '#2b4a39',
          '900': '#22392c',
          '950': '#14241a',
        },

        'color': {
          'red': '#ff3b30',
          'redDark': '#ff453a',
          'orange': '#FF9500',
          'orangeDark': '#FF9F0A',
          'yellow': '#FFCC00',
          'yellowDark': '#FFD60A',
          'green': '#34C759',
          'greenDark': '#30D158',
          'blue': '#007AFF',
          'blueDark': '#0A84FF',
          'grayLight': '#F2F2F7',
          'grayDark': '#3A3A3A',
          'midblack': '#2C2C2E',
          'dark': '#1C1C1C',
        },

        'materialLight': {
          'regular1ColorDodge': '#8C8C8C',
          'regular2': '#252525d2',
          'thin1Overlay': '#9C9C9C',
          'thin2': '#252525b2',
        },

        'materialDark':{
          'regular1Overlay': '#383838',
          'regular2': ' #b3b3b3d0',
          'thin1ColorDodge': '#333333',
          'thin2': '#a6a6a6b2',
        },

        'backgrounds':{
          'darkBG': '#00000098',
          'lightBG': '#00000067',
          'ccBG': '#CCCCCC',
          'dark': '#1C1C1C',
          'darkOpaque': '#8C8C8C, #252525d2' ,
        },

        'separators': {
          'nonOpaque': '#3C3C43',
          'nonOpaqueDark': '#545458',
        }

      },

      backgroundSize: {
        '200': '200%',
        '400': '400%',
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
        },
        skeleton: {
          '0%': { backgroundPosition: '100%'},
          // '30%': { backgroundPosition: '70%'},
          // '70%': { backgroundPosition: '30%'},
          '100%': { backgroundPosition: '0%' },
        },
        opacity: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        }
      },

      animation: {
        loading:
          'loadpage 1s cubic-bezier(.645,.045,.355,1.000) both',
        lateral:
          'popUpLateral 1s cubic-bezier(.645,.045,.355,1.000) both',
        skeleton:
          'skeleton 1.4s alternate infinite ease-in-out',
        opacity:
          'opacity 0.6s cubic-bezier(.645,.045,.355,1.000)'
      }

    },
  },
  plugins: [],
}
