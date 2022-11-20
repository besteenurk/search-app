const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', './build', 'dev'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    host: 'local-ipv4',
    port: 5000,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
};
