const Router = require('koa-router');
const { loadByUrl } = require('../services/file');
const router = new Router()
const Ret = require('./../../common/ret')
const ret = new Ret();

/**
 * @api /api/file/list
 * 目录列表
 */
router.post('/list', async ctx=>{
  const URL = ctx.request.body.url||'/'
  try {
    const a = await loadByUrl(URL)
    ctx.body = ret.success(a)
  } catch (error) {
    ctx.body = ret.error(error)
  }
})

/**
 * @api /api/file/upload
 * 上传文件
 */
router.post('/upload', async ctx=>{
  console.log(ctx.request.files)
  ctx.body = ret.success()
})

/**
 * @api /api/file/download
 * 下载文件
 */
router.get('/download', async ctx=>{

})


/**
 * @api /api/file/foldSize
 * 文件夹大小
 */
router.get('/foldSize', async ctx=>{

})

module.exports = router