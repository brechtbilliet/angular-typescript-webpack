module.exports = [
    {
        test: /\.ts(x?)$/,
        use:[{loader: 'ts-loader'}]
    },
    {
        test: /\.css$/,
        use:[{loader: 'style-loader'},{loader: 'css-loader'}]
    },
    {
        test: /\.scss$/,
        use:[{loader: 'style-loader'},{loader: 'css-loader'},{loader: 'sass-loader'}]
    }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use:[{loader: 'raw-loader'}]
    }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[{loader: 'url-loader?limit=10000&mimetype=application/font-woff'}]
    }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:[{loader: 'file-loader'}]
    }, {
        test: '\.jpg$',
        exclude: /node_modules/,
        use:[{loader: 'file-loader'}]
    }, {
        test: '\.png$',
        exclude: /node_modules/,
        use:[{loader: 'url-loader'}]
    },
    {
        test: /^((?!\.spec\.ts).)*.ts$/,
        exclude: /(node_modules|bower_components)/,
        use:[{loader: 'istanbul-instrumenter-loader'}],
        enforce:'post'
    },
    {
        test: /\.ts$/,
        use:[{loader: 'tslint-loader'}],
        enforce:'pre'
    }
];
