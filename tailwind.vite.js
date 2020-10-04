const virtual = require('@rollup/plugin-virtual')

module.exports = function (configPath = './tailwind.config.js') {
  const resolveConfig = require('tailwindcss/resolveConfig')
  const tailwindConfig = require(configPath)

  const moduleContent = `export default ${JSON.stringify(resolveConfig(tailwindConfig))}`

  const configureServer = [
    async ({ app }) => {
      app.use(async (ctx, next) => {
        if (ctx.path.startsWith('/@modules/tailwind-vite')) {
          ctx.type = 'js'
          ctx.body = moduleContent
        } else {
          await next()
        }
      })
    },
  ]

  const rollupInputOptions = {
    plugins: [virtual({ 'tailwind-vite': moduleContent })],
  }

  return { configureServer, rollupInputOptions }
}
