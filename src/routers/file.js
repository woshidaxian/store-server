const Router = require('koa-router');
const { loadByUrl, getFolderSize } = require('../services/file');
const router = new Router()
const Ret = require('./../../common/ret')
const fs = require('fs')
const config = require('./../../config/config')
const path = require('path')
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
  const foldUrl = ctx.request.query.url
  try {
    if(!foldUrl) throw new Error('路径不正确')
    const URL = path.join(config.FILE_ROOT, foldUrl);
    if (!fs.existsSync(URL)) {
      throw new Error('路径不正确')
    }else{
      const size = getFolderSize(URL)
      ctx.body = ret.success(size)
    }
  } catch (error) {
    ctx.body = ret.error(error.toString())
  }
})

module.exports = router