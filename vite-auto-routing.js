const fs = require('fs')
const virtual = require('@rollup/plugin-virtual')

function parsePagesDirectory(dir) {
  const files = fs
    .readdirSync(dir)
    .map((f) => ({ name: f.split('.')[0], importPath: `/src/pages/${f}` }))

  const imports = files.map((f) => `import ${f.name} from '${f.importPath}'`)

  const routes = files.map(
    (f) => `{
        name: '${f.name}',
        path: '/${f.name}',
        component: () => import('${f.importPath}'),
        ...(${f.name}.__routeOptions || {}),
    }`
  )

  return { routes, imports }
}

module.exports = function (dir = './src/pages') {
  const { routes, imports } = parsePagesDirectory(dir)

  const moduleContent = `
    ${imports.join('\n')}
    export default [${routes.join(', \n')}]
  `

  const configureServer = [
    async ({ app }) => {
      app.use(async (ctx, next) => {
        if (ctx.path.startsWith('/@modules/vite-auto-routing')) {
          ctx.type = 'js'
          ctx.body = moduleContent
        } else {
          await next()
        }
      })
    },
  ]

  const rollupInputOptions = {
    plugins: [virtual({ 'vite-auto-routing': moduleContent })],
  }

  const vueCustomBlockTransforms = {
    route: ({ code }) => {
      return `
        export default function (Component) {
          Component.__routeOptions = ${code}
        }
      `
    },
  }

  return { configureServer, rollupInputOptions, vueCustomBlockTransforms }
}
