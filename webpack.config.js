const webpack = require('webpack');
const path = require('path');

const isDebug = process.env.NODE_ENV !== 'production';

module.exports = (watch = false) => ({
  entry: path.resolve('./app/scripts/app.js'),
  output: {
    publicPath: '/assets/scripts/',
    filename: 'app.min.js',
    path: path.resolve('./dist/assets/scripts/'),
  },
  externals: {
    jquery: 'jQuery',
  },
  watch,
  devtool: isDebug ? 'cheap-module-inline-source-map' : false,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      masonry: 'masonry-layout',
      isotope: 'isotope-layout',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.NoErrorsPlugin(),
    !isDebug ? new webpack.optimize.UglifyJsPlugin() : f => f,
  ],
});
