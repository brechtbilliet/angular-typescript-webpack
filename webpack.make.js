'use strict';

var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function makeWebpackConfig(options) {
    var browserSync = new BrowserSyncPlugin({
        host: 'localhost',
        port: 8080,
        server: {
            baseDir: 'dev'
        },
        ui: false,
        online: false,
        notify: false
    });

    var config = {
        entry: ['./app/index.ts'],
        output: {
            filename: 'build.js',
            path: options.BUILD?'dist': 'dev'
        },
        resolve: {
            root: __dirname,
            extensions: ['','.ts','.js','.json'],
            alias: {
                'app': 'app'
            }
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'ts',
                    exclude: /node_modules/
                },
                 {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass'
                },{
                    test: /\.html$/,
                    exclude: /node_modules/,
                    loader: 'raw'
                }, {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=10000&minetype=application/font-woff'
                }, {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'file-loader'
                }, {
                    test: '\.jpg$',
                    exclude: /node_modules/,
                    loader: 'file'
                }, {
                    test: '\.png$',
                    exclude: /node_modules/,
                    loader: 'url'
                }

            ]
        },
        plugins: []
    };
    if (!options.TEST && !options.BUILD) {
        config.devtool = 'source-map';
        config.plugins.push(browserSync);
        config.devServer = {
            contentBase: './dev'
        };
    }
    if (options.BUILD) {
        config.plugins.push(new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            minify: options.BUILD
        }));
        config.plugins.push(new webpack.NoErrorsPlugin(),
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new webpack.optimize.UglifyJsPlugin());
    }
    if (options.TEST) {
        config.context = __dirname + '/app';
        config.entry = './index.js';
    }
    config.plugins.push(new webpack.DefinePlugin({
        ON_TEST: process.env.NODE_ENV === 'test'
    }));
    return config;
};