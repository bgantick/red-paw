module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('autoprefixer')({
      'browsers': ['> 1%', 'last 2 versions']
    }),
    require('postcss-import')
  ]
};
