module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      },
    ],
  ],
  plugins: [
    //
    '@emotion/babel-plugin',
    'babel-plugin-macros',
    'inline-react-svg',
    // '@babel/plugin-proposal-private-property-in-object',
    // ['@babel/plugin-proposal-private-property-in-object', { loose: true }], //,
  ],
}

// babel.config.js
// module.exports = function () {
//     // const isServer = api.caller((caller) => caller?.isServer)
//     // const isCallerDevelopment = api.caller((caller) => caller?.isDev)

//     const presets = [
//       [
//         'next/babel',
//         {
//           'preset-react': {
//             runtime: 'automatic',
//             importSource: '@emotion/react',
//             // importSource: !isServer && isCallerDevelopment ? '@welldone-software/why-did-you-render' : 'react',
//           },
//         },
//       ],
//     ]
//     const plugins = ['@emotion/babel-plugin']

//     return { presets, plugins }
//   }
