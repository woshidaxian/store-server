// 重写console

const chalk = require('chalk')
const log = console.log


console.log = function(message) {
  log(message)
}

console.info = function(message) {
  log(chalk.black(message))
}

console.warn = function(message) {
  log(chalk.yellow('WARNING：'+message))
}

console.success = function(message) {
  log(chalk.green(message))
}

console.error = function(message) {
  log(chalk.red('ERROR：' + message))
}

console.time = function(message) {
  log(new Date().toLocaleString()+ '：' +message)
}