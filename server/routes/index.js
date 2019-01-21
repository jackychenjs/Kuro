
const Router = require('koa-router')
// const home = require('../controllers/home')
// const profile = require('../controllers/profile')
// const demo = require('../controllers/demo')
// const tool = require('../controllers/tool')
// const gallery = require('../controllers/gallery')
// const memo = require('../controllers/memo')

const router = new Router()

router.get('/p/:id', async ctx => {
  const queryParams = {title: ctx.params.id}
  await ctx.render(ctx.req, ctx.res, '/post', queryParams)
  ctx.respond = false
})


/* router.get('*', async ctx => {
  await handle(ctx.req, ctx.res)
  ctx.respond = false 
}) */

module.exports = router