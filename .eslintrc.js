// const OFF = 0
// const WARN = 1
// const ERROR = 2

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:import/typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  plugins: ['@typescript-eslint', 'import', 'jest', 'react', 'prettier', 'eslint-plugin-jsx-a11y', 'jsx-a11y'],
  rules: {
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
      },
    ],
    // we need this for link component in next.js
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   {
    //     components: ['Link'],
    //     specialLink: ['to'],
    //   },
    // ],
    // 'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['hrefLeft', 'hrefRight'], aspects: ['invalidHref', 'preferButton'] }],
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/camelcase': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'off',
    // '@typescript-eslint/ban-ts-ignore': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@next/next/no-img-element': 'off',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true,
    jest: true,
    mocha: true,
  },
  globals: {
    document: true,
    jasmine: true,
    spyOn: true,
    pending: true,
    window: true,
    page: false,
    browser: true,
    sessionStorage: true,
    XMLHttpRequest: true,
    fetch: true,
    requestAnimationFrame: true,
    Blob: true,
    FileReader: true,
    i18n: true,
    yl: true,
    APP_VERSION: true,
  },
}
/*
////Unused Rules

   // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    //     allowSeparatedGroups: false,
    //   },
    // ],
    // 'react/jsx-props-no-spreading': 'off',
    // 'react-hooks/exhaustive-deps': 'warn',
    // 'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // 'import/prefer-default-export': 'off',
    // '@typescript-eslint/explicit-function-return-type': [
    //   'error',
    //   {
    //     allowExpressions: true,
    //   },
    // ],
    // 'import/extensions': [
    //   'error',
    //   'ignorePackages',
    //   {
    //     ts: 'never',
    //   },
    // ],
*/
