const webpack = require("webpack");
const path = require('path');
const glob = require("glob");

module.exports = {
    entry: {
        popup: path.join(__dirname, 'src/popup.tsx'),
        content_script: path.join(__dirname, 'src/content_script.ts'),
        background: path.join(__dirname, 'src/background.ts'),
    },
    output: {
        path: path.join(__dirname, 'dist/js'),
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            exclude: /node_modules/,
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.json.js'],
    }
};
