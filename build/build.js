process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const webpack = require('webpack')

const buildConfig = require('../config/build.js')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production')
spinner.start()

rm(path.join(buildConfig.build.assetsRoot, buildConfig.build.assetsSubDirectory), err => {
	if (err) throw err
	webpack(webpackConfig, function(err, stats) {
		spinner.stop()
		if (err) throw err
		process.stdout.write(stats.toString({
			colors: true,
			modules: false,
			children: false,
			chunks: false,
			chunkModules: false
		}) + '\n')
	})
})
