var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ]
  },
  output:{
    filename: './[name].js',
    path: path.join(__dirname,'public'),
    publicPath:'/public/'
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname,'src'),
        loader: 'react-hot!babel'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      },
      // {
      //   test:/\.scss/,
      //   include:path.join(__dirname, 'node_modules/mdi/scss'),
      //   loader: 'style!css!sass'
      // },
      // {
      //    test: /\.(eot|woff|woff2|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9][0-9])?$/,
      //    include: path.join(__dirname, 'node_modules/mdi/fonts'),
      //    loader: "file"
      // },
      {
        test:/\.css/,
        include:path.join(__dirname, 'node_modules/material-design-icons/iconfont'),
        loader: 'style!css!less'
      },
      {
         test: /\.(eot|woff|woff2|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9][0-9])?$/,
         include: path.join(__dirname, 'node_modules/material-design-icons/iconfont'),
         loader: "file"
      }
    ]
  }
};
