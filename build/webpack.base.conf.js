const webpack = require('webpack');

const PATHS_CONFIG = require('./config/PATHS.js');

module.exports = {
    entry: {
        app: PATHS_CONFIG.SRC.pathJoin('main.js'),
    },
    output: {
        path: PATHS_CONFIG.DIST.pathJoin('static'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        modules: [
            PATHS_CONFIG.NODE_MODULES,
            PATHS_CONFIG.SRC
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': PATHS_CONFIG.SRC,
            'assets': PATHS_CONFIG.ASSETS,
            'components': PATHS_CONFIG.COMPONENT
        }
    },
    module: {
        loaders: [
            /*{
                test: /\.(js|vue)$/,
                loader: 'eslint-loader'
            },*/
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: PATHS_CONFIG.SRC
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10240, // use base64 when larger than 10KB
                    name: 'img/[name]-[hash:6].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10240, // use base64 when larger than 10KB
                    name: 'fonts/[name]-[hash:6].[ext]'
                }
            }
        ]
    }
};
