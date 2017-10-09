const config = require('../../config')

const env = process.env.NODE_ENV || 'developments'

let log4js = require('log4js')

log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/cheese.log', category: 'cheese' }
  ]
})

let logger = log4js.getLogger('cheese')
// logger.setLevel(config.debug && env !== '')

module.exports = logger
