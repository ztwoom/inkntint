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
      }
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      320: '1.25rem'
    },
    inset: {
      ...defaultTheme.inset,
      '-n-half': '-50%'
    }
  },
  variants: {},
  plugins: [
  ],
  corePlugin: {
    float: false
  }
}