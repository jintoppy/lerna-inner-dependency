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
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
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
      name: 'node-static',
      filename: 'node-static.js',
      minChunks(module, count) {          
          // var context = module.context;
          // return context && context.indexOf('node_modules') >= 0;
          return count >= 1;
      }
    })
  ]
};

export default config;
