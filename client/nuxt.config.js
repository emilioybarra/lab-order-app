export default {
  modern: 'client',

  server: {
    // port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  router: {
    mode: 'history',
    routeNameSplitter: '/'
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lab Order Form',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  rules: [
    {
      test: /\.s[ac]ss$/i,
      use: [ 'sass-loader' ]
    }
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // SCSS file in the project
    '@/assets/styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { mode: 'client', src: '@/plugins/vue-html2pdf' },
    { mode: 'client', src: '@/plugins/click-outside' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/',
    '~/views/'
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://i18n.nuxtjs.org
    'nuxt-i18n',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: './scss/*.scss'
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true
  },

  i18n: {
    langDir: 'lang/',
    lazy: true,
    strategy: 'no_prefix',
    vuex: {
      syncLocale: true
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
      alwaysRedirect: true
    },
    locales: [
      {
        code: 'de',
        file: 'de.js',
        name: 'Deutsch'
      },
      {
        code: 'en',
        file: 'en.js',
        name: 'English'
      },
      {
        code: 'fr',
        file: 'fr.js',
        name: 'Français'
      },
      {
        code: 'it',
        file: 'it.js',
        name: 'Italiano'
      },
      {
        code: 'jp',
        file: 'jp.js',
        name: 'にほんご'
      },
      {
        code: 'ru',
        file: 'ru.js',
        name: 'Русский'
      },
      {
        code: 'sp',
        file: 'sp.js',
        name: 'Español'
      }
    ]
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
}
