import de from './lang/de'
import en from './lang/en'
import fr from './lang/fr'
import it from './lang/it'
import jp from './lang/jp'
import ru from './lang/ru'
import sp from './lang/sp'

export default {
  // modern: 'client',

  server: {
    host: '0.0.0.0' // default: localhost
  },

  router: {
    mode: 'history',
    routeNameSplitter: '/',
    middleware: [ 'auth' ]
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Lab Order Form',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' }
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
    { mode: 'client', src: '@/plugins/vue-cookies' },
    { mode: 'client', src: '@/plugins/vue-swatches' },
    { mode: 'client', src: '@/plugins/click-outside' },
    { mode: 'client', src: '@/plugins/language-variant' },
    { mode: 'client', src: '@/plugins/generate-random-key' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/'
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
    // https://auth.nuxtjs.org/
    '@nuxtjs/auth',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://i18n.nuxtjs.org
    'nuxt-i18n',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    '~/modules/api'
  ],

  auth: {
    plugins: [ '~/plugins/auth.js' ],
    redirect: {
      home: '/',
      login: '/unauthorized'
    }
  },

  // Server Middleware
  // serverMiddleware: [
  //   '~/server/app.js'
  // ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [ '@nuxtjs/auth' ],
    babel: {
      minified: true
    },
    devMiddleware: {
      headers: {
        Vary: '*',
        'Cache-Control': 'no-store'
      }
    }
  },

  styleResources: {
    scss: './scss/*.scss'
  },

  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: false
  },

  i18n: {
    langDir: 'lang/',
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
    vueI18n: {
      messages: { de, en, fr, it, jp, ru, sp }
    },
    locales: [
      {
        code: 'de',
        file: 'de.js',
        name: 'Deutsch',
        iso: 'de_DE',
        localeDateFormat: 'DD.MM.YYYY'
      },
      {
        code: 'en',
        file: 'en.js',
        name: 'English',
        iso: 'en_GB',
        localeDateFormat: 'DD/MM/YYYY'
      },
      {
        code: 'fr',
        file: 'fr.js',
        name: 'Français',
        iso: 'fr_FR',
        localeDateFormat: 'DD/MM/YYYY'
      },
      {
        code: 'it',
        file: 'it.js',
        name: 'Italiano',
        iso: 'it_IT',
        localeDateFormat: 'DD/MM/YYYY'
      },
      {
        code: 'jp',
        file: 'jp.js',
        name: 'にほんご',
        iso: 'ja_JP',
        localeDateFormat: 'YYYY/MM/DD'
      },
      {
        code: 'ru',
        file: 'ru.js',
        name: 'Русский',
        iso: 'ru_RU',
        localeDateFormat: 'DD.MM.YYYY'
      },
      {
        code: 'sp',
        file: 'sp.js',
        name: 'Español',
        iso: 'es_ES',
        localeDateFormat: 'DD/MM/YYYY'
      }
    ]
  }
}
