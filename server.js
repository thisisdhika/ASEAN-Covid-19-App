const { createViteSSR } = require('zipe')

module.exports = function () {
  const configureServer = [
    createViteSSR(({ app, zipeSSR }) => {
      app.use(async (ctx, next) => {
        if (ctx.path === '/') {
          // return the HTML
          ctx.body = await zipeSSR('./dist-ssr/index.js') // component path relative to root
          return
        }

        await next()
      })
    }),
  ]

  return { configureServer }
}
