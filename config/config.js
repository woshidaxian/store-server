const path = require('path')


// 服务启动端口
process.env.PORT = ''

// 云盘根路径，默认为项目根路径下files文件夹
// process.env.ROOT = 'D://PROJECT//file'
process.env.ROOT = '/Users/gang/desktop/file'


module.exports = {
  FILE_ROOT: process.env.ROOT||path.join(process.cwd(), './files'),
  PORT: process.env.PORT||'8888'
}