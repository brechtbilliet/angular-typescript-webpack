'use strict';
var path = require('path');
var webpackConfig = require('./webpack.test');
var entry = path.resolve(webpackConfig.context, webpackConfig.entry);
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
            reporters: [{
                dir: 'reports/coverage/',
                type: 'html'},
                //{"type": "text"}
            ]
        },
        webpack: webpackConfig,
        plugins: [
            require('karma-webpack'),
            require('karma-jasmine'),
            require('karma-coverage'),
            require('karma-spec-reporter'),
            require('karma-phantomjs2-launcher'),
            require('karma-typescript-preprocessor')
        ],
        typescriptPreprocessor: {
            // options passed to the typescript compiler
            options: {
                sourceMap: false, // (optional) Generates corresponding .map file.
                target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
                module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
                noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
                noResolve: true, // (optional) Skip resolution and preprocessing.
                removeComments: true // (optional) Do not emit comments to output.
            },
            // extra typing definitions to pass to the compiler (globs allowed)
            typings: [
                'typings/tsd.d.ts'
            ],
            // transforming the filenames
            transformPath: function (path) {
                return path.replace(/\.ts$/, '.js');
            }
        }
    });
};