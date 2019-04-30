import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const {
  NODE_ENV
} = process.env;

const originalCwd = process.cwd();
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(originalCwd, 'dist'),
    filename: '[name].js'
  },

  devtool: '',

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          /(node_modules)/
        ],
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      async: 'vendor',
      name: 'runtime',
      minChunks: Infinity
    })
  ]
};

export default config;
