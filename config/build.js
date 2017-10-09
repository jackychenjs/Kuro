const path = require('path');
const pathsConfig = require('./paths.js');

module.exports = {
    build: {
        env: { NODE_ENV: '"production"' },
        index: path.resolve(pathsConfig.DIST, 'index.html'),
        assetsRoot: pathsConfig.DIST,
        assetsSubDirectory: 'static',
        productionSourceMap: true
    },
    dev: {
        env: { NODE_ENV: '"development"' },
        index: path.resolve(pathsConfig.SERVER_VIEWS, 'index.html'),
        assetsRoot: pathsConfig.SERVER,
        assetsSubDirectory: 'static',
        autoOpenBrowser: true,
        cssSourceMap: false
    }
};