// import path from 'path'
import { eslint } from 'rollup-plugin-eslint'
const tailwindVite = require('./tailwind.vite')
const viteAutoRouting = require('./vite-auto-routing')

export default {
  enableEsbuild: true,
  proxy: {
    '/api': {
      target: 'https://api.covid19api.com/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  plugins: [
    eslint({
      useEslintrc: true,
    }),
    tailwindVite('./tailwind/index.js'),
    viteAutoRouting(),
  ],
  vueCustomBlockTransforms: {},
}
