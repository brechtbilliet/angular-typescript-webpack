'use strict';
var path = require('path');
var webpackConfig = require('./webpack.test');
var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
console.log(entry);
var preprocessors = {};
preprocessors[entry] = ['webpack'];
module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      'jasmine'
    ],
    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec',
      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],
    files: [entry],
    preprocessors: preprocessors,
    browsers: [
      // Run tests using PhantomJS
      'PhantomJS2'
    ],
    singleRun: true,
    // Configure code coverage reporter
    coverageReporter: {
      dir: 'reports/coverage/',
      type: 'html'
    },
    webpack: webpackConfig,
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-spec-reporter'),
      require('karma-phantomjs2-launcher')
    ]
  });
};