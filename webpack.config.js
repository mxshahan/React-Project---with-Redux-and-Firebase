const path = require('path');

const src = path.resolve(__dirname, 'client/src');
const public = path.resolve(__dirname, 'client/public');

module.exports = {
  entry: src + '/app.js',
  output: {
    path: public,
    filename: 'bundle.js'
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      include: src,
      exclude: '/node_modules/'
    },{
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },

  devtool: 'eval-source-map',
  devServer: {
    port: 2000,
    contentBase: public,
    historyApiFallback: true,
  },
  watch: true
}