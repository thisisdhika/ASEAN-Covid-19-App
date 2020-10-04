<template>
  <div>
    <nav v-if="isAuth" class="rounded-lg bg-white shadow m-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <BrandLogo size="xl" />
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                  v-for="menu in menus"
                  :key="menu.path"
                  :to="menu.path"
                  active-class="bg-purple-600 text-white"
                  class="px-4 py-2 rounded-md text-sm font-semibold tracking-wide focus:outline-none"
                >
                  {{ menu.name }}
                </router-link>
                <router-link
                  to="/other"
                  active-class="bg-purple-600 text-white"
                  class="px-4 py-2 rounded-md text-sm font-semibold tracking-wide focus:outline-none"
                >
                  Other
                </router-link>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    class="max-w-xs flex items-center text-sm rounded-full text-white transition-all duration-500 ease-out shadow-none focus:outline-none hover:shadow-lg"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @click="userMenuVisible = !userMenuVisible"
                  >
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="userAvatar"
                      :alt="currentUser.email"
                    />
                  </button>
                </div>

                <transition v-bind="userMenuTransitionProps">
                  <div
                    v-if="userMenuVisible"
                    class="absolute right-0 mt-2 w-48 rounded-md shadow-xl"
                  >
                    <div
                      class="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <button
                        @click="signOut"
                        class="w-full flex items-center text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        <span class="flex-auto">Keluar</span>
                        <i class="ml-auto fas fa-sign-out-alt"></i>
                      </button>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg class="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Dashboard
          </a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5 space-x-3">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="space-y-1">
              <div class="text-base font-medium leading-none text-white">Tom Cook</div>
              <div class="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
          </div>
          <div class="mt-3 px-2 space-y-1">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <router-view></router-view>
    </main>
    <footer class="fixed bottom-0 inset-x-0">
      <span className="block my-2 text-center">
        &copy; ASEANC19 App {{ new Date().getFullYear() }}. All rights reserved.
      </span>
    </footer>
  </div>
</template>

<script>
import md5 from 'js-md5'
import { TweenLite } from 'gsap'
import BrandLogo from './components/BrandLogo.vue'
import routes from 'vite-auto-routing'

export default {
  name: 'App',
  components: {
    BrandLogo,
  },
  setup() {
    const userMenuTransitionProps = {
      css: false,
      onBeforeEnter(el) {
        TweenLite.set(el, {
          scaleX: 0.8,
          scaleY: 1.2,
          opacity: 0,
          translateY: '-100%',
        })
      },
      onEnter(el, done) {
        TweenLite.to(el, {
          duration: 1,
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          translateY: '0%',
          ease: 'elastic.inOut(2.5, 1)',
          onComplete: done,
        })
      },
      onLeave(el, done) {
        TweenLite.to(el, {
          duration: 0.7,
          scaleX: 0.4,
          scaleY: 1,
          translateX: '200%',
          ease: 'elastic.inOut(2.5, 1)',
        })
        TweenLite.to(el, {
          duration: 0.2,
          delay: 0.5,
          opacity: 0,
          onComplete: done,
        })
      },
    }

    const menus = routes.filter((r) => r.meta.showOnNavbar && r.meta.requiresAuth)
    return { userMenuTransitionProps, menus }
  },
  data: () => ({
    isAuth: false,
    userMenuVisible: false,
    currentUser: null,
  }),
  computed: {
    userAvatar() {
      return `http://www.gravatar.com/avatar/${md5(
        (this.currentUser ? this.currentUser.email : 'example@mail.com').toLowerCase().trim()
      )}?d=identicon`
    },
  },
  methods: {
    signOut() {
      this.firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/')
        })
    },
  },
  mounted() {
    this.currentUser = this.firebase.auth().currentUser || {}
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler({ meta }) {
        this.isAuth = meta.requiresAuth || false
      },
    },
  },
}
</script>
