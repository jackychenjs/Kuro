const path = require('path');
const PATHS_CONFIG = require('./PATHS.js');

module.exports = {
    build: {
        env: {NODE_ENV: '"production"'},
        assetsRoot: PATHS_CONFIG.DIST,
        assetsSubDirectory: 'static',
        cssSourceMap: false
    },
    dev: {
        env: {NODE_ENV: '"development"'},
        assetsSubDirectory: 'static',
        autoOpenBrowser: true,
        cssSourceMap: false
    }
};