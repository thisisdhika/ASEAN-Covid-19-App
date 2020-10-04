const { createViteSSR } = require('zipe')

module.exports = function () {
  const configureServer = [
    createViteSSR(({ app, zipeSSR }) => {
      app.use(async (ctx, next) => {
        if (ctx.path === '/') {
          ctx.body = await zipeSSR('./dist-ssr/index.js')
          return
        }

        await next()
      })
    }),
  ]

  return { configureServer }
}
