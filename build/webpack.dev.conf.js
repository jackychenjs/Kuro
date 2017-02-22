const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const friendlyErrorsPlugins = require('friendly-errors-webpack-plugin');

const BUILD_CONFIG = require('./config/BUILD.js');
const PATHS_CONFIG = require('./config/PATHS.js');
const WEBPACK_BASE_CONFIG = require('./webpack.base.conf');

module.exports = merge(WEBPACK_BASE_CONFIG, {
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //new webpack.NoEmitOnErrorsPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new friendlyErrorsPlugins()
    ]
});

