module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            color: theme('colors.gray.700'),
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            'pre': {
              backgroundColor: theme('colors.blue.900'),
            },
            'pre code': {
              color: theme('colors.gray.100'),
              backgroundColor: theme('colors.blue.900'),
            },
            code: {
              backgroundColor: theme('colors.blue.200'),
              borderWidth: '1px',
              borderColor: theme('colors.blue-400'),
              fontWeight: 'normal',
              borderRadius: '2px',
              padding: `0 ${theme('spacing.2')}`,
              height: theme('spacing.9')
            },
            'code::before': false,
            'code::after': false,
            a: {
              color: theme('colors.blue.700'),
            },
          },
        },
      }),
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
