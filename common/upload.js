const multer = require('koa-multer')
const path = require('path')
const CONFIG = require('./../config/config')
const fs = require('fs')

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const url = path.join(CONFIG.FILE_ROOT, req.body.path ? req.body.path : './')
      fs.mkdirSync(url, { recursive: true });
      cb(null, url)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

module.exports = uploadFile