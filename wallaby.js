var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
var webpack = require('webpack');

var webpackPostprocessor = wallabyWebpack({
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    }
});

module.exports = function () {
    return {
        files: [
            {pattern: 'src/**/*.html', load: false},
            {pattern: 'src/**/*.scss', load: false},
            {pattern: 'src/**/*.css', load: false},
            {pattern: 'src/**/*.ts', load: false},
            {pattern: 'src/**/*.spec.ts', ignore: true},
            {pattern: 'node_modules/**/*.js', ignore: true}
        ],

        tests: [
            {pattern: 'src/**/*.spec.ts', load: false},
            {pattern: 'node_modules/**/*.js', ignore: true}
        ],

        preprocessors: {
            '**/*.js': file => babel.transform(file.content, {sourceMap: true})
        },
        "testFramework": "jasmine",
        postprocessor: webpackPostprocessor,
        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};
