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
        test: /\.s?css$/,
        include: path.join(__dirname, 'src'),
        loader: 'style!css!sass'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.join(__dirname, 'src/glyphicons/fonts'),
        loader: "file" },
        {
          test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file",
          include: path.join(__dirname, 'src/glyphicons/fonts')
        },
        {
          test: /\.(eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file",
          include: path.join(__dirname, 'src/glyphicons/fonts')
        },
        {
          test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file",
          include: path.join(__dirname, 'src/glyphicons/fonts')
        },
    ]
  }
};
