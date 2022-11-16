// import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const jestSharedConfig = {}
// require('./node_modules/your-shared-rules-components/jest.config.js')

const jestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // 'node',
  // setupFilesAfterEnv: ['<rootDir>/scripts/setup-tests.js'],
  // setupFilesAfterEnv: ['<rootDir>/src/utils/index.ts'],
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  verbose: true,
  testPathIgnorePatterns: ['OLD', '/node_modules/', '/dist', '.next', '.storybook'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/test/styleMock.js',
  },
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  // testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  // transform: {
  //   '^.+\\.(ts|tsx)$': 'babel-jest', //'babel-jest'
  // },
  // testMatch: ['**/__tests__/**/*.+(ts)', '**/?(*.)+(test).+(ts)'],
  // transform: {
  //   '^.+\\.(ts)$': 'ts-jest',
  // },
  // transform: {
  //   '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
  // },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },
}

export default Object.assign(jestSharedConfig, jestConfig)
