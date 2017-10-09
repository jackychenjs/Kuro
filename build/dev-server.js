const path = require('path')
const express = require('express')
const opn = require('opn')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

// const pathsConfig = require('./config/PATHS.js')
// const portsConfig = require('./config/PORTS.js')
// const buildConfig = require('./config/BUILD.js')
// const webpackDevConfig = require('./webpack.dev.conf.js')

const { pathsConfig, portsConfig, buildConfig } = require('../config')
const webpackDevConfig = require('./webpack.dev.conf.js')

/* Express DEV Server port */
var port = process.env.PORT || portsConfig.DEV_SERVER

/* Automatically open browser */
var autoOpenBrowser = !!buildConfig.dev.autoOpenBrowser

var app = express()
var compiler = webpack(webpackDevConfig)

var devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  noInfo: true,
  quiet: true,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = webpackHotMiddleware(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

app.use('/static', express.static(pathsConfig.STATIC))

/* Listening Log on bash */
var uri = 'http://localhost:' + port
devMiddleware.waitUntilValid(function() {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function(err) {
  if(err) {
    console.log(err)
    return 
  }

  if(autoOpenBrowser) {
    opn(uri)
  }
})
