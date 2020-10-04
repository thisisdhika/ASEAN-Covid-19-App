import { createApp } from 'vue'
import gsap, { TweenLite } from 'gsap'
import loadPlugins from './plugins'

import buildRouter from './router'
import store from './store'

import App from './App.vue'

import './styles/main.scss'

let router = undefined
let app = createApp(App)
const $el = document.createElement('div')

window.hidePageLoader = () => {
  TweenLite.to('.page-loader', 0.35, { opacity: 0, zIndex: -1 }).then(() => {
    gsap.killTweensOf('.page-loader')
  })
}

window.showPageLoader = () => {
  TweenLite.to('.page-loader', 0.35, { opacity: 1, zIndex: 9999 }).then(() => {
    gsap.killTweensOf('.page-loader')
  })
}

loadPlugins().then((plugins) => {
  const {
    config: { globalProperties: prototype },
  } = app

  plugins.forEach(({ default: pkg }) => {
    if (Object.prototype.hasOwnProperty.call(pkg, 'hasGlobal')) prototype[pkg.name] = pkg.module

    if (Object.prototype.hasOwnProperty.call(pkg, 'hasWindow')) window[pkg.name] = pkg.module

    if (Object.prototype.hasOwnProperty.call(pkg, 'hasVuePlugin')) app.use(pkg.name)
  })

  if (prototype.firebase && !router) {
    router = buildRouter(prototype.firebase)
    $el.setAttribute('data-app', '')
    document.body.prepend($el)

    prototype.firebase.auth().onAuthStateChanged(() => {
      if (!app._container) app.use(store).use(router).mount($el)
    })
  }
})
