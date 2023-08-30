const Router = require('koa-router')
const router = new Router()

const fileRouter = require('./routers/file')

router.use('/file', fileRouter.routes(), fileRouter.allowedMethods())

module.exports = router

