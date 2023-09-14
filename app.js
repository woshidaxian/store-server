const config = require('./config/config')
const koa = require('koa');
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const fs = require('fs')
const app = new koa()
const router = new Router()
const R = require('./src/index');
const reqInfo = require('./middleware/log');
require('./common/pen')

app.use(reqInfo)
app.use(bodyParser())
app.use(cors())
fs.exists(config.FILE_ROOT, function (exists) {
  if(!exists) {
    console.info('云盘根路径不存在，已自动创建如下路径：')
    fs.mkdir(config.FILE_ROOT, function (err) {
      if(err){
        console.error(err)
      }else{
        console.success(config.FILE_ROOT)
        app.use(static(config.FILE_ROOT))
      }
    })
  }else{
    console.success('云盘根路径为：'+config.FILE_ROOT)
    app.use(static(config.FILE_ROOT))
  }
})

router.use('/api', R.routes(), R.allowedMethods())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(config.PORT, () => {
  console.success('服务已启动：localhost:' + config.PORT)
})