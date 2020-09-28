module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'pages/*.js',
    'components/*.js',
  ],
  theme: {
    typography: {
      'pre code': { color: null, backgroundColor: null }
    },
    extend: {
      leading: {
        11: '3rem'
      },
      colors: {
        blue: {
          100: "#E5E8FB",
          200: "#D2D7F4",
          300: "#AFB7EA",
          400: "#8591DD",
          500: "#5262CB",
          600: "#3243B2",
          700: "#1E2D8F",
          800: "#121E6A",
          900: "#080F3C"
        },
        teal: {
          100: '#CBF2F7',
          200: '#94E5ED',
          300: '#5DD5E1',
          400: '#31C8D5',
          500: '#14B9C7',
          600: '#07AEB9',
          700: '#0398A3',
          800: '#027A82',
          900: '#025B61',
        },
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography'),
  ],
}
