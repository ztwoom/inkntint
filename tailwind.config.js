const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      blue: {
        100: '#F5F7FA',
        200: '#EBF5FF',
        300: '#90B7D9',
        400: '#2FC5FF',
        500: '#14B4F2',
        600: '#7996AF',
        700: '#00447D',
        800: '#003058',
        900: '#00192E',
      },
      pink: {
        600: '#D4088C'
      },
    },
    extend: {
      width: {
        416: '26rem'
      },
      height: {
        480: '30rem'
      }
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      xs: '5.25rem',
      sm: '8.25rem',
      md: '10.25rem'
    },
    inset: {
      ...defaultTheme.inset,
      '-n-half': '-50%'
    },
    screens: {
      ...defaultTheme.screens,
      lg: '992px',
      xl: '1200px'
    }
  },
  variants: {},
  plugins: [
  ],
  corePlugin: {
    float: false
  }
}