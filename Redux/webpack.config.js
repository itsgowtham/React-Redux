const { join } = require('path');

module.exports = {
        entry: './src/index.js',
        output: {
                path: join(__dirname, 'dist', 'assets'),
                filename: 'bundle.js',
                publicPath: 'assets',
        },
        devServer: {
                inline: true,
                contentBase: './dist',
                port: 3000,
        },
        module: {
                rules: [
                        {
                                test: /\.js$/,
                                exclude: /(node_modules)/,
                                loader: 'babel-loader',
                                query: {
                                        presets: ['@babel/env', '@babel/react'],
                                },
                        },
                ],
        },
};
