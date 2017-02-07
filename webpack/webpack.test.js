var webpack = require('webpack');
var path = require('path');
var loaders = require("./loaders");

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    filename: 'build.js',
    path: 'tmp'
  },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            'node_modules'
        ],
        extensions: ['.ts', '.js', '.json','.css', '.scss']
    },
    devtool: "source-map-inline",
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
    module:{
        loaders: loaders
    }
};

