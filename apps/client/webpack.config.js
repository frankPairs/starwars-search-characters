const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const mode = env ? env.NODE_ENV : 'development';
  const config = require(`./config/webpack.${mode}.js`);

  return merge(
    {
      mode,
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
        publicPath: '/',
        globalObject: 'this',
      },
      resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve('./src'), 'node_modules'],
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
      ],
    },
    config
  );
};
