// Webpack is used for development with HMR enabled.
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname, // to automatically find tsconfig.json
  entry: ['./example/index.ts'],
  devServer: {
    hot: true,
    contentBase: __dirname + '/res'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      // you can add more loaders for the development example.
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './example/index.html'
    }),
  ]
};
