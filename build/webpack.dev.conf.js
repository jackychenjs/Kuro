const webpack = require('webpack')
const merge = require('webpack-merge')
const htmlWebpackPlugin = require('html-webpack-plugin')
const friendlyErrorsPlugins = require('friendly-errors-webpack-plugin')

const { pathsConfig, buildConfig } = require('../config')
const webpackBaseConfig = require('./webpack.base.conf')
const utils = require('./utils')

// another simple setting for hot-reload
// webpackBaseConfig.entry.app = [
//     'webpack-hot-middleware/client?reload=true',
//     webpackBaseConfig.entry.app
// ]

// add hot-reload related code to entry chunks
Object.keys(webpackBaseConfig.entry).forEach(function(name) {
  webpackBaseConfig.entry[name] = ['./build/dev-client'].concat(webpackBaseConfig.entry[name])
})

// inject style to page for hotModuleReplacement in DEV
// webpackBaseConfig.module.loaders.push({
//     test: /\.css$/,
//     loader: 'style-loader!css-loader'
// }, {
//     test: /\.less$/,
//     loader: 'style-loader!css-loader!less-loader'
// }, {
//     test: /\.scss$/,
//     loader: 'style-loader!css-loader!sass-loader'
// })

module.exports = merge(webpackBaseConfig, {
  module: {
    loaders: utils.styleLoaders({
      sourceMap: buildConfig.dev.cssSourceMap
    })
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.NoEmitOnErrorsPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: pathsConfig.INDEX,
      inject: true
    }),
    new friendlyErrorsPlugins()
  ]
})
