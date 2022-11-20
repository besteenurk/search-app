const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', './build', 'web'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  mode: 'production',
  devtool: 'source-map',
};
