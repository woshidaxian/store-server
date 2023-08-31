const Router = require('koa-router');
const { loadByUrl } = require('../services/file');
const router = new Router()
const Ret = require('./../../common/ret')
const ret = new Ret();

router.post('/list', async ctx=>{
  const URL = ctx.request.body.url||'/'
  try {
    const a = await loadByUrl(URL)
    ctx.body = ret.success(a)
  } catch (error) {
    ctx.body = ret.error(error)
  }
})

module.exports = router