import { createApp } from 'vue'
import gsap, { TweenLite } from 'gsap'
import firebase from './plugins/firebase'
import moment from './plugins/moment'

import buildRouter from './router'
import store from './store'

import App from './App.vue'

import './styles/main.scss'

let router
const app = createApp(App)
const $el = document.createElement('div')
const {
  config: { globalProperties: prototype },
} = app

prototype.firebase = firebase
prototype.moment = moment

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

if (prototype.firebase && !router) {
  router = buildRouter(prototype.firebase)
  $el.setAttribute('data-app', '')
  document.body.prepend($el)

  prototype.firebase.auth().onAuthStateChanged(() => {
    if (!app._container) app.use(store).use(router).mount($el)
  })
}
