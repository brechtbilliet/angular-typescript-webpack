'use strict';

var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
var ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = function makeWebpackConfig(options) {
    console.log(options);
    var config = {
        entry: ['./app/index.ts'],
        output: {
            filename: 'build.js',
            path: options.BUILD ? 'dist' : 'dev'
        },
        resolve: {
            root: __dirname,
            extensions: ['', '.ts', '.js', '.json'],
            alias: {
                'app': 'app'
            }
        },
        resolveLoader: {
            modulesDirectories: ["node_modules"]
        },
        module: {
            loaders: [

                {
                    test: /\.ts$/,
                    loader: 'ts?optional=runtime&stage=0&cacheDirectory',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    test: /\.scss$/,
                    loader: 'style!css!sass'
                }, {
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
        config.devtool = 'source-map';
        config.plugins.push(browserSync);
        config.devServer = {
            contentBase: './dev'
        };
        config.plugins.push(new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            minify: options.BUILD,
            hash: true
        }));
    }
    if (options.BUILD) {
        config.plugins.push(new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
            minify: options.BUILD,
            hash: true
        }));
        config.plugins.push(new webpack.NoErrorsPlugin(),
            // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
            // Minify all javascript, switch loaders to minimizing mode
            new ClosureCompilerPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                output: {comments: false}
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(true),
            new CompressionPlugin({
                asset: "{file}.gz",
                algorithm: "gzip",
                regExp: /\.js$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
            }));
    }
    if (options.TEST) {
        config.context = __dirname + '/app';
        config.entry = './index.ts';
        config.module.postLoaders = [
            {
                test: /\.ts$/,
                exclude: [
                    /node_modules/,
                    /spec.ts$/
                ],
                loader: 'istanbul-instrumenter'
            }
        ]
    }
    config.plugins.push(new webpack.DefinePlugin({
        ON_TEST: process.env.NODE_ENV === 'test'
    }));
    return config;
};