import nodePolyfills from 'rollup-plugin-node-polyfills'

export default {
  enableEsbuild: true,
  plugins: [require('./tailwind.vite')('./tailwind/index.js'), require('./vite-auto-routing')()],
  rollupInputOptions: {
    plugins: [nodePolyfills()],
  },
}
