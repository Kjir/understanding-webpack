var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(jpg|png|woff)/, use: 'file-loader' },
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
};
