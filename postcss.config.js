module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
}
