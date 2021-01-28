const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./app/**/*.tsx', './app/**/*.mdx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...defaultTheme.colors,
      primary: '#7B14D1',
      secondary: '#C320D6',
      muted: '#F7F6F9',
      orange: '#FFB65C',
    },
    fontFamily: {
      serif: ['Source Serif Pro', ...defaultTheme.fontFamily.serif],
      sans: ['Avenir Next', 'Open Sans', ...defaultTheme.fontFamily.sans],
      mono: ['Lato, sans-serif'],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            // fontFamily: theme('fontFamily.sans'),
            'h1, h2': {
              fontSize: 44,
              fontWeight: theme('fontWeight.extrabold'),
              letterSpacing: theme('letterSpacing.tighter'),
              // fontFamily: theme('fontFamily.heading'),
            },
            'h3, h4': {
              fontWeight: theme('fontWeight.bold'),
              lineHeight: theme('lineHeight.tight'),
            },
            pre: {
              backgroundColor: '#011627',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/ui')],
}
