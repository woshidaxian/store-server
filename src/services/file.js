const fs = require('fs');
const path = require('path');
const config = require('./../../config/config');


/**
 * 访问路径
 * @param {String} url 
 */
async function loadByUrl(url, callback) {
  const URL = path.join(config.FILE_ROOT, url);
  try {
    if (!fs.existsSync(URL)) {
      throw new Error('访问路径不存在')
    } else {
      const f = []
      const files = fs.readdirSync(URL, { withFileTypes: true });
      for(const file of files) {
        if(file.isDirectory()){
          f.push({ name: file.name, isFold: true })
        }else{
          f.push({ name: file.name, isFold: true, size: fs.statSync(path.join(URL, file.name)).size })
        }
      }
      return f
    }
  } catch (error) {
    return error.toString()
  }
}

module.exports = {
  loadByUrl
}