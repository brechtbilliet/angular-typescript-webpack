var babel = require('babel');
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
    },
    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: false
        })
    ]

});

module.exports = function () {

    return {
        files: [
            {pattern: 'src/**/*.html', load: false},
            {pattern: 'src/**/*.scss', load: false},
            {pattern: 'src/**/*.css', load: false},
            {pattern: 'src/**/*.ts', load: false},
            {pattern: 'src/**/*.spec.ts', ignore: true},
            {pattern: 'src/**/*.spec.js', ignore: true},
            {pattern: 'src/**/*.js', load: false}
        ],

        tests: [
            {pattern: 'src/**/*.spec.ts', load: false},
            {pattern: 'src/**/*.spec.js', load: false}
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