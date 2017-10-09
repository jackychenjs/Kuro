var path = require('path')

const ROOT = path.resolve(__dirname, '..')
const SRC = path.resolve(ROOT, 'src')
const SERVER = path.resolve(ROOT, 'server')
const DIST = path.resolve(ROOT, 'dist')

module.exports = {
  ROOT: ROOT,
  BUILD: path.resolve(ROOT, 'build'),
  STATIC: path.resolve(ROOT, 'static'),

  DIST: DIST,
  DIST_STATIC: path.resolve(DIST, 'static'),

  SERVER: SERVER,
  SERVER_VIEWS: path.resolve(SERVER, 'views'),
  SERVER_PUBLIC: path.resolve(SERVER, 'public'),

  SRC: SRC,
  VIEWS: path.resolve(SRC, 'views'),
  ASSETS: path.resolve(SRC, 'assets'),
  COMPONENT: path.resolve(SRC, 'components'),
  ROUTES: path.resolve(SRC, 'routes'),
  ENTRY: path.resolve(SRC, 'index.js'),
  INDEX: path.resolve(SRC, 'index.html'),

  NODE_MODULES: path.resolve('node_modules')
}
