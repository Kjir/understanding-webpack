var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    publicPath: '/'
  },
  devServer: {
    compress: true,
    historyApiFallback: {
      index: '/index.html'
    },
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(jpg|png|woff)/, use: 'file-loader' },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ title: 'Bookstore' })]
};
