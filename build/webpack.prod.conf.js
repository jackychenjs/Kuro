const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const friendlyErrorsPlugins = require('friendly-errors-webpack-plugin')

const BUILD_CONFIG = require('./config/BUILD.js')
const PATHS_CONFIG = require('./config/PATHS.js')
const WEBPACK_BASE_CONFIG = require('./webpack.base.conf')


var webpackConfig = merge(WEBPACK_BASE_CONFIG, {
	module: {
		loaders: urils.styleLoaders({
			sourceMap: config.build.cssSourceMap,
			extract: true
		})
	},
	output: {
		path: PATHS_CONFIG.DIST.pathJoin('static'),
        filename: '[name].js'
	}
});


// using css file for page in PROD
WEBPACK_BASE_CONFIG.module.loaders.push({
	test: /\.css$/,
	loader: extractTextPlugin.extract('style', 'css-loader')
}, {
	test: /\.less$/,
	loader: extractTextPlugin.extract('style', 'css-loader!less-loader')
}, {
	test: /\.scss$/,
	loader: extractTextPlugin.extract('style', 'css-loader!sass-loader')
});

config.plugins.push();