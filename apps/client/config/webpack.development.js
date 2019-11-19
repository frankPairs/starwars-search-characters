const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: true,
    port: 3001,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'cheap-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({}),
  ],
};
