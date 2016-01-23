// Karma configuration
// Generated on Sun Jan 17 2016 22:47:16 GMT-0700 (MST)
var path = require('path');
var webpack = require('webpack');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    // files: [
    //   'src/components/**/*.js',
    //   'src/stores/**/*.js',
    //   'test/**/*.js'
    // ],
    files: [
          'tests.webpack.js',
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
          'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    webpack:{
          plugins: [
            new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              jquery: 'jquery',
              'window.jQuery': 'jquery',
              'window.jquery': 'jquery',
              'window.$': 'jquery',
            })
          ],

          resolve: {
            root: __dirname,
            modulesDirectories: [
              'src',
              'node_modules'
            ],
            extensions: ['', '.js', '.jsx']
          },

          module: {
            loaders: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: 'babel'
            },
            {
              test: /\.css$/,
              loader: 'style!css'
            },
            {
              test: /\.(eot|woff|woff2|ttf|svg)$/,
              loader: 'file'
            }
          ]
        },
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ],

    webpackServer:{
          noInfo: true
    },
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
