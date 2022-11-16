/* eslint-disable @typescript-eslint/no-var-requires */
// const defaultTheme = require('tailwindcss/defaultTheme')
const tailWindColors = require('tailwindcss/colors')
const colors = {
  // primary: colors.blue, //,
  primary: {
    DEFAULT: '#258cc4', //tailWindColors.blue[500],
    hover: '#161c2d', //tailWindColors.blue[300],
    light: '#93C5FD',
    dark: '#1D4ED8',
    lightHover: '#DBEAFE',
    darkHover: '#1E3A8A',
  },
  //
  // 'light-blue': colors.sky,
  grape: tailWindColors.purple,
  electric: '#db00ff',
  ribbon: '#0047ff',
  // cyan: tailWindColors.cyan,
  // sky: tailWindColors.sky,
  // teal: tailWindColors.teal,
  // rose: tailWindColors.rose,
  // orange: tailWindColors.orange,
  // violet: tailWindColors.violet,
  // 'warm-gray': tailWindColors.stone,
  // 'blue-gray': tailWindColors.slate,
  //colors
  // $gray-500: gray;
  // $dark: blue;
  // $primary: aqua;
}

const zIndex = {
  footer: 1000,
  appNav: 1003,
  appMobileNav: 1002,
  appOverlay: 1001,
}

const screens = {
  // xlarge: '1280px',
  // large: '1024px',
  // medium: '768px',
  // small: '640px',
  // default tailwind
  sm: '640px', // => @media (min-width: 640px) { ... }
  md: '768px', // => @media (min-width: 768px) { ... }
  lg: '1024px', // => @media (min-width: 1024px) { ... }
  xl: '1280px', // => @media (min-width: 1280px) { ... }
  // '2xl': '1536px',
  // ...defaultTheme.screens,
}

const mediaQueries = Object.keys(screens).map((bp) => `@media (min-width: ${screens[bp]}`)

module.exports = {
  zIndex,
  colors,
  screens,
  mediaQueries,
}

// $xlarge: 1280px;
// $large: 1024px;
// $medium: 768px;
// $small: 640px;

// // z-index
// $zAppOverlay: 1048;
// $zMainNav: 1050;
// $zNavMobile: 1049;
// $zFooter: 1000;
// $zScrollToTop: 1040;
// $zResumeSideBar: 900;
// $zNavBarOverlay: 1002;
// $zNavBarSubMenuItem: 1003;

// //colors
// $gray-500: gray;
// $dark: blue;
// $primary: aqua;
