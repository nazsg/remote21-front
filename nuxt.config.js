import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt',
    title: 'Remote Access Interface',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/core-components', '~plugins/lightGallery.client'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    // '@nuxtjs/vuetify',
    // ['@nuxtjs/vuetify', { treeShake: true }],
  ],
  // serverMiddleware: ['~/api'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],
  // router: { base: '/app/' },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: { baseURL: 'http://localhost:3121' },
  // axios: { proxy: true },
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:3121',
  //     pathRewrite: { '^/api': '/api' },
  //     prependPath: false,
  //     changeOrigin: false,
  //   },
  // },
  // env: {
  //   baseUrl: process.env.BASE_URL || 'http://localhost:3100',
  // },
  // axios: { baseURL: 'https://remoteapi.nazs.net/' },
  axios: { baseURL: 'http://172.16.1.219:3121/' },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extractCSS: true,
  },
  pageTransition: {
    // refers to ~assets/styles/main.css
    name: 'fade',
    mode: 'out-in',
  },
}
