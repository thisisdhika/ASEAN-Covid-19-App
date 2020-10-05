import * as Router from 'vue-router'
import routes from 'vite-auto-routing'

function buildRouter(currentUser) {
  const router = Router.createRouter({
    history: Router.createWebHistory(),
    routes,
  })

  router.beforeEach((to, _from, next) => {
    const unAuthenticatedRoutes = routes.filter((r) => !r.meta.authenticatedPath)
    const authenticatedRoutes = routes.filter((r) => r.meta.authenticatedPath)

    const requiresAuth = to.matched.some((rec) => rec.meta.requiresAuth)

    window.showPageLoader()

    if (requiresAuth && !currentUser) next(unAuthenticatedRoutes[0].path || '/login')
    else if (!requiresAuth && currentUser) next(authenticatedRoutes[0].path || '/')
    else next()
  })

  router.afterEach(() => {
    setTimeout(() => window.hidePageLoader(), 500)
  })

  return router
}

export default buildRouter
