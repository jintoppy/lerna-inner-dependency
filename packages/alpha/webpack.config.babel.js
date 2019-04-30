import path from 'path';
import webpack from 'webpack';

const {
  NODE_ENV
} = process.env;

const originalCwd = process.cwd();
const config = {
  entry: './index.js',
  output: {
    path: path.resolve(originalCwd, 'dist'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: '[name].js'
  },
  externals: [
    'lodash'
    // function(context, request, callback){
    //     console.log(context);
    //     if(context.indexOf('node_modules') > -1){
    //       return callback(null, 'commonjs ' + request);            
    //     }
    //     return callback(); 
    // }
  ],

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
  ]
};

export default config;
