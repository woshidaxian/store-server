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
          f.push({ name: file.name, isFold: false, size: fs.statSync(path.join(URL, file.name)).size })
        }
      }
      return f
    }
  } catch (error) {
    return error.toString()
  }
}

function getFolderSize(folderPath) {
  let totalSize = 0;

  // 使用fs.readdirSync同步读取文件夹中的所有文件和子文件夹
  const files = fs.readdirSync(folderPath, { withFileTypes: true });
  for (const file of files) {
    const filePath = path.join(folderPath, file.name);
    // 如果是文件夹，递归计算文件夹大小
    if (file.isDirectory()) {
      totalSize += Number(getFolderSize(filePath));
    }
    // 如果是文件，获取文件大小并累加到总大小中
    else if (file.isFile()) {
      totalSize += Number(fs.statSync(filePath).size);
    }
  }

  return totalSize
}

module.exports = {
  loadByUrl, getFolderSize
}