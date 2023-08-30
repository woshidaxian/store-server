async function reqInfo(ctx, next) {
  const start = new Date().getTime()
  await next()
  const end = new Date().getTime()
  console.time(ctx.request.method + ' ' + ctx.request.url + ' ' +(end-start)+'ms')
}

module.exports = reqInfo