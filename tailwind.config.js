/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const appStyles = require('./src/config/appStyles')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
const tailwindConfig = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  darkMode: 'class',
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // sans: [ 'Helvetica Neue', 'Arial', 'sans-serif'],
      // sans: ['Rubik', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // display: ['Rubik', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // body: ['Rubik', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // medium: ['Rubik', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // base: ['Rubik', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    screens: appStyles.screens,
    extend: {
      screens: {
        print: { raw: 'print' },
        // => @media print { ... }
      },
      colors: appStyles.colors,
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      //theming
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
        },
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-fill'),
        },
      },
    },
    // extend: {
    //   inset: {
    //     '-14': '-3.5rem',
    //     '-28': '-14rem',
    //   },
    //   height: {
    //     lg: '19.5rem',
    //     '3/10': '30%',
    //     '7/10': '70%',
    //     'h-full': '100%',
    //     28: '7rem',
    //     72: '18rem',
    //   },
    //   flexGrow: {
    //     2: 2,
    //     3: 3,
    //     4: 4,
    //     5: 5,
    //   },
    //   fontWeight: {
    //     bodyWeight: '400',
    //     hairline: '100',
    //     thin: '200',
    //     light: '300',
    //     normal: '400',
    //     medium: '500',
    //     semibold: '600',
    //     bold: '700',
    //     extrabold: '800',
    //   },

    //   colors: {
    //     electric: '#db00ff',
    //     ribbon: '#0047ff',
    //     // default tailwind
    //     gray: {
    //       100: '#f7fafc',
    //       200: '#edf2f7',
    //       300: '#e2e8f0',
    //       400: '#cbd5e0',
    //       500: '#a0aec0',
    //       600: '#718096',
    //       700: '#4a5568',
    //       800: '#2d3748',
    //       900: '#1a202c',
    //     },
    //     red: {
    //       100: '#fff5f5',
    //       200: '#fed7d7',
    //       300: '#feb2b2',
    //       400: '#fc8181',
    //       500: '#f56565',
    //       600: '#e53e3e',
    //       700: '#c53030',
    //       800: '#9b2c2c',
    //       900: '#742a2a',
    //     },
    //     orange: {
    //       100: '#fffaf0',
    //       200: '#feebc8',
    //       300: '#fbd38d',
    //       400: '#f6ad55',
    //       500: '#ed8936',
    //       600: '#dd6b20',
    //       700: '#c05621',
    //       800: '#9c4221',
    //       900: '#7b341e',
    //     },
    //     yellow: {
    //       100: '#fffff0',
    //       200: '#fefcbf',
    //       300: '#faf089',
    //       400: '#f6e05e',
    //       500: '#ecc94b',
    //       600: '#d69e2e',
    //       700: '#b7791f',
    //       800: '#975a16',
    //       900: '#744210',
    //     },
    //     green: {
    //       100: '#f0fff4',
    //       200: '#c6f6d5',
    //       300: '#9ae6b4',
    //       400: '#68d391',
    //       500: '#48bb78',
    //       600: '#38a169',
    //       700: '#2f855a',
    //       800: '#276749',
    //       900: '#22543d',
    //     },
    //     teal: {
    //       100: '#e6fffa',
    //       200: '#b2f5ea',
    //       300: '#81e6d9',
    //       400: '#4fd1c5',
    //       500: '#38b2ac',
    //       600: '#319795',
    //       700: '#2c7a7b',
    //       800: '#285e61',
    //       900: '#234e52',
    //     },
    //     blue: {
    //       100: '#ebf8ff',
    //       200: '#bee3f8',
    //       300: '#90cdf4',
    //       400: '#63b3ed',
    //       500: '#4299e1',
    //       600: '#3182ce',
    //       700: '#2b6cb0',
    //       800: '#2c5282',
    //       900: '#2a4365',
    //     },
    //     indigo: {
    //       100: '#ebf4ff',
    //       200: '#c3dafe',
    //       300: '#a3bffa',
    //       400: '#7f9cf5',
    //       500: '#667eea',
    //       600: '#5a67d8',
    //       700: '#4c51bf',
    //       800: '#434190',
    //       900: '#3c366b',
    //     },
    //     purple: {
    //       100: '#faf5ff',
    //       200: '#e9d8fd',
    //       300: '#d6bcfa',
    //       400: '#b794f4',
    //       500: '#9f7aea',
    //       600: '#805ad5',
    //       700: '#6b46c1',
    //       800: '#553c9a',
    //       900: '#44337a',
    //     },
    //     pink: {
    //       100: '#fff5f7',
    //       200: '#fed7e2',
    //       300: '#fbb6ce',
    //       400: '#f687b3',
    //       500: '#ed64a6',
    //       600: '#d53f8c',
    //       700: '#b83280',
    //       800: '#97266d',
    //       900: '#702459',
    //     },
    //   },
    //   margin: {
    //     fixedHeader: '100px',
    //   },
    //   spacing: {
    //     // default tailwind
    //     72: '18rem',
    //     '1/2': '50%',
    //     '1/3': '33.333333%',
    //     '2/3': '66.666667%',
    //     '1/4': '25%',
    //     '2/4': '50%',
    //     '3/4': '75%',
    //     '1/5': '20%',
    //     '2/5': '40%',
    //     '3/5': '60%',
    //     '4/5': '80%',
    //     '1/6': '16.666667%',
    //     '2/6': '33.333333%',
    //     '3/6': '50%',
    //     '4/6': '66.666667%',
    //     '5/6': '83.333333%',
    //     '1/12': '8.333333%',
    //     '2/12': '16.666667%',
    //     '3/12': '25%',
    //     '4/12': '33.333333%',
    //     '5/12': '41.666667%',
    //     '6/12': '50%',
    //     '7/12': '58.333333%',
    //     '8/12': '66.666667%',
    //     '9/12': '75%',
    //     '10/12': '83.333333%',
    //     '11/12': '91.666667%',
    //   },
    // },
  },
  // variants: {
  //   backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  //   fontSize: ['responsive', 'hover', 'focus'],
  //   visibility: ['responsive', 'hover', 'focus'],
  // }, removed in tailwind 3
  plugins: [
    //
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('tailwindcss-filters'),
    // require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('tailwindcss-children'),
  ],
  corePlugins: {
    fontFamily: true,
  },
}

module.exports = tailwindConfig
