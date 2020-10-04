module.exports = {
  enableEsbuild: true,
  proxy: {
    '/api': {
      target: 'https://api.covid19api.com/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  plugins: [
    require('rollup-plugin-eslint').eslint({
      useEslintrc: true,
    }),
    require('./tailwind.vite')('./tailwind/index.js'),
    require('./vite-auto-routing')(),
  ],
  vueCustomBlockTransforms: {},
}
