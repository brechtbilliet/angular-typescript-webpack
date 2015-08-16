'use strict';

var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
            path: 'dev'
        },
        resolve: {
            root: __dirname,
            extensions: ['','.ts','.js','.json'],
            alias: {
                // we can switch between development and production
                // 'angular2': 'node_modules/angular2/ts',
                // 'angular2': 'angular2/ts/dev',

                'app': 'app',

                // 'components': 'src/app/components'
                // 'services': '/app/services/*.js',
                // 'stores/*': '/app/stores/*.js'
                // 'angular2': 'angular2/es6/dev'
            }
        },

        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'simple-typescript',
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
            contentBase: './dist'
        };
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