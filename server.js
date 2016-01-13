var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.entry.main.unshift("webpack-dev-server/client?http://localhost:8080");
new WebpackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
  hot:true,
  historyApiFallback:true
}).listen(8080);
