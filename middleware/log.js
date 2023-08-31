const chalk = require('chalk')

async function reqInfo(ctx, next) {
  const start = new Date().getTime()
  await next()
  const end = new Date().getTime()
  console.time(ctx.request.method + ' ' + (ctx.response.status == 200 ? chalk.green(ctx.response.status):chalk.yellow(ctx.response.status)) + ' ' + ctx.request.url + ' ' +(end-start)+'ms')
}

module.exports = reqInfo