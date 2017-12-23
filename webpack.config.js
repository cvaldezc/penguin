const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSync = require('browser-sync-webpack-plugin')

// const extractSass = new ExtractTextPlugin({
//     //filename: "[name].[contenthash].css"
//     filename: "[name].css",
//     disable: true
// })

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
            ]
        }]
    },
    plugins: [
        new BrowserSync({
            host: 'localhost',
            port: 3000,
            files: ['html'],
            // proxy: 'http://localhost:8080/',
            server: { baseDir: [''] }
        })
    ],
    // devServer: {
    //     contentBase: './',
    //     watchOptions: {
    //         ignored: /node_modules/
    //     },
    //     disableHostCheck: true
    // },
    watch: true
}