const ENV = process.env.NODE_ENV

const {buildConfig, pathsConfig} = require('../config')

module.exports = {
  entry: {
    app: pathsConfig.ENTRY,
  },
  output: {
    path: pathsConfig.DIST_STATIC,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? buildConfig.build.assetsPublicPath
      : buildConfig.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.less', '.css', '.scss'],
    modules: [
      pathsConfig.NODE_MODULES,
      pathsConfig.SRC
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': pathsConfig.SRC,
      'assets': pathsConfig.ASSETS,
      'components': pathsConfig.COMPONENT
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
        include: pathsConfig.SRC,
        exclude: /node_modules/
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
}
