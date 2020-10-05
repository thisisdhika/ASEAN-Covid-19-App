<route>
{
    path: '/',
    name: 'Home',
    meta: {
        requiresAuth: false,
        authenticatedPath: false,
    },
}
</route>

<template>
  <section class="home">
    <div class="container home__content">
      <div class="home__info">
        <BrandLogo size="4xl" />
        <h3 class="heading">
          Informasi terkini mengenai penyebaran <strong>Covid-19</strong> <br />
          di negara negara ASEAN. <br />
        </h3>
        <p class="text-indigo-600 text-base font-bold tracking-wide leading-tight mt-2">
          Masuk untuk melanjutkan.
        </p>
      </div>
      <form class="relative h-10" @submit="toggleForm">
        <div
          ref="loginForm"
          class="btn btn--large btn--primary btn--no-gap-x relative z-20"
          :style="{ width: '95px' }"
        >
          <div ref="emailField" class="absolute w-full inset-0 pr-20" v-if="hasFormVisible">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i class="text-gray-500 sm:text-sm sm:leading-5 fas fa-user"></i>
            </div>
            <input
              name="email"
              type="email"
              v-model="email"
              class="form-input block w-full h-full pl-8 sm:text-sm sm:leading-5"
              placeholder="Alamat E-mail"
            />
          </div>
          <div ref="passwordField" class="absolute w-full inset-0 pr-20" v-if="requiresPassword">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center">
              <i class="text-gray-500 sm:text-sm sm:leading-5 fas fa-lock pointer-events-none"></i>
              <button
                v-if="password"
                type="button"
                class="text-gray-500 ml-3 sm:text-sm sm:leading-5"
                @click="passwordTypeVisibility = !passwordTypeVisibility"
              >
                <i v-if="!passwordTypeVisibility" class="fas fa-eye"></i>
                <i v-else class="fas fa-eye-slash"></i>
              </button>
            </div>
            <input
              name="password"
              :type="!passwordTypeVisibility ? 'password' : 'text'"
              v-model="password"
              class="form-input block w-full h-full sm:text-sm sm:leading-5 transition-all duration-100 ease-in-out"
              :class="[password ? 'pl-16' : 'pl-8']"
              placeholder="Kata Sandi"
            />
          </div>

          <button
            type="button"
            class="absolute inset-y-0 right-0 min-h-10 flex justify-center items-center px-4"
            @click="onSignIn"
            v-html="isSubmitting ? `<i class='fas fa-lg fa-circle-notch fa-spin'></i>` : 'Masuk'"
          ></button>
        </div>

        <span
          ref="errorEmailMessage"
          class="absolute inset-0 z-10 text-red-500 text-sm font-semibold p-1"
          v-if="errorBag"
          v-html="errorBag"
        />

        <button
          ref="closeBtn"
          type="submit"
          class="absolute inset-y-0 right-0 text-indigo-600 w-10 h-10 z-10"
        >
          <i class="fas fa-lg fa-times-circle"></i>
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import { TweenMax, Back, Circ } from 'gsap'
import BrandLogo from '../components/BrandLogo.vue'
import { useForm, useField } from 'vee-validate'
import * as Yup from 'yup'
import tailwindConfig from 'tailwind-vite'

export default {
  components: {
    BrandLogo,
  },
  setup() {
    const formVisibleWidth = window.matchMedia(
      `(max-width: ${tailwindConfig.theme.screens.mobile})`
    ).matches
      ? window.innerWidth - 20
      : 400

    const { form, handleSubmit, errors } = useForm({
      initialValues: { email: '', password: '' },
    })
    const { value: email, errors: emailErrors } = useField(
      'email',
      Yup.string().required('Email wajib diisi!').email('Email tidak valid!'),
      {
        form,
      }
    )
    const { value: password, errors: passwordErrors } = useField(
      'password',
      Yup.string()
        .required('Password wajib diisi!')
        .min(8, 'Password harus memiliki minimal 8 karakter.'),
      {
        form,
      }
    )
    return {
      form,
      email,
      emailErrors,
      password,
      passwordErrors,
      formVisibleWidth,
      handleSubmit,
    }
  },
  data: () => ({
    isSubmitting: false,
    hasFormVisible: false,
    requiresPassword: false,
    requestErrors: null,
    passwordTypeVisibility: false,
    olds: {
      email: '',
      password: '',
    },
  }),
  computed: {
    errorBag() {
      return this.requestErrors
        ? this.requestErrors
        : this.requiresPassword
        ? this.passwordErrors
        : this.emailErrors
    },
  },
  methods: {
    onSignIn() {
      if (!this.hasFormVisible) {
        this.toggleForm()
      } else {
        if (!this.requiresPassword && !this.password)
          this.password = import.meta.env.VITE_DEFAULT_PASSWORD
        this.handleSubmit(({ email, password }) => {
          this.isSubmitting = true
          this.olds = { email, password }

          if (!this.requiresPassword) {
            this.firebase
              .auth()
              .createUserWithEmailAndPassword(this.olds.email, this.olds.password)
              .then((user) => {
                this.$router.replace('/summary')
              })
              .catch(({ code, message }) => {
                if (code === 'auth/email-already-in-use') {
                  this.togglePasswordField()
                } else {
                  this.requestErrors = message
                }
                this.isSubmitting = false
              })
          } else {
            this.firebase
              .auth()
              .signInWithEmailAndPassword(this.olds.email, this.olds.password)
              .then((user) => {
                this.$router.replace('/summary')
              })
              .catch(({ code, message }) => {
                this.requestErrors = message
                this.isSubmitting = false
              })
          }
        })()
      }
    },
    toggleForm(evt = null) {
      if (evt) {
        evt.preventDefault()
        evt.stopPropagation()
      }

      const varsForm = [
        {
          width: this.formVisibleWidth,
          backgroundColor: tailwindConfig.theme.colors.white,
          color: tailwindConfig.theme.colors.indigo['600'],
        },
        {
          width: 95,
          backgroundColor: tailwindConfig.theme.colors.indigo['600'],
          color: tailwindConfig.theme.colors.white,
        },
      ]
      const varsCloseButton = [
        {
          opacity: 1,
          translateX: '100%',
        },
        {
          opacity: 0,
          translateX: '0%',
        },
      ]

      if (this.requiresPassword) {
        TweenMax.to(this.$refs.emailField, 0.5, {
          translateY: '0%',
        })

        TweenMax.to(this.$refs.passwordField, 0.5, {
          opacity: 0,
        })
      }

      this.hasFormVisible = !this.hasFormVisible

      if (this.emailErrors[0])
        TweenMax.to(this.$refs.errorEmailMessage, 0.15, {
          translateY: '0%',
          onComplete: () => (this.emailErrors = []),
        })

      TweenMax.fromTo(
        this.$refs.loginForm,
        0.75,
        {
          ...varsForm[Number(this.hasFormVisible)],
          ease: Circ.easeOut,
        },
        {
          ...varsForm[Number(!this.hasFormVisible)],
          ease: Circ.easeOut,
          onComplete: () => {
            if (this.requiresPassword && this.hasFormVisible) {
              TweenMax.to(this.$refs.emailField, 0.5, {
                translateY: '-110%',
              })

              TweenMax.to(this.$refs.passwordField, 0.5, {
                opacity: 1,
              })
            }
          },
        }
      )

      TweenMax.fromTo(
        this.$refs.closeBtn,
        0.5,
        {
          ...varsCloseButton[Number(this.hasFormVisible)],
          ease: Back.easeInOut,
        },
        {
          ...varsCloseButton[Number(!this.hasFormVisible)],
          ease: Back.easeInOut,
        }
      )
    },
    togglePasswordField() {
      this.requiresPassword = !this.requiresPassword

      TweenMax.to(this.$refs.emailField, 0.5, {
        translateY: this.requiresPassword ? '-110%' : '0%',
      })
    },
  },
  mounted() {
    setTimeout(() => this.toggleForm(), 1000)
  },
  watch: {
    errorBag: {
      handler(message, oldMessage) {
        if (message[0] !== oldMessage[0]) {
          if (message[0]) {
            TweenMax.to(this.$refs.errorEmailMessage, 0.5, {
              translateY: '100%',
            })
          }
        }
      },
    },
    email: {
      handler(email) {
        if (this.requiresPassword) {
          if (email !== this.olds.email) {
            this.togglePasswordField()
          }
        } else if (this.olds.email) {
          if (email === this.olds.email) {
            this.togglePasswordField()
          }
        }
      },
    },
  },
}
</script>
