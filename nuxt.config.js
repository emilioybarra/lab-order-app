import BootstrapVueLoader from 'bootstrap-vue-loader'
import dotenv from 'dotenv'
import de from './lang/de'
import en from './lang/en'
import fr from './lang/fr'
import it from './lang/it'
import jp from './lang/jp'
import ru from './lang/ru'
import sp from './lang/sp'

dotenv.config()

const isDev = process.env.NODE_ENV === 'development'
const devURL = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_LOCALHOST_URL : 'https://dwls.dev.pr1.run/'

export default {
  modern: isDev ? false : 'server',

  server: {
    port: isDev ? 3000 : 80,
    host: '0.0.0.0' // default: localhost
  },

  router: {
    mode: 'history',
    routeNameSplitter: '/'
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DWLS | Lab Order Form',
    meta: [
      { charset: 'utf-8' },
      { name: 'google', content: 'notranslate' },
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
    '@/assets/styles/main.scss',
    'bootstrap-vue/dist/bootstrap-vue.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { mode: 'client', src: '@/plugins/vue-cookies' },
    { mode: 'client', src: '@/plugins/vue-paintable' },
    { mode: 'client', src: '@/plugins/click-outside' },
    { mode: 'client', src: '@/plugins/set-canvas-size' },
    { mode: 'client', src: '@/plugins/language-variant' },
    { mode: 'client', src: '@/plugins/prepare-archwires' },
    { mode: 'client', src: '@/plugins/generate-random-key' },
    { mode: 'client', src: '@/plugins/block-back-native-navigation' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components/'
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/moment-module
    '@nuxtjs/moment'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
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

  axios: {
    baseURL: devURL, // Used as fallback if no runtime config is provided
    retry: { retries: 3 }
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: devURL,
      retry: { retries: 3 }
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: devURL
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [ new BootstrapVueLoader() ],
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

  pwa: {
    manifest: {
      name: 'DWLS Lab Order Form',
      short_name: 'DWLS Lab Order Form',
      background_color: '#DFDBEC'
    },
    meta: {
      name: 'DWLS Lab Order Form',
      author: 'Projekteins GmbH',
      theme_color: '#DFDBEC',
      nativeUI: true
    }
  },

  i18n: {
    langDir: 'lang/',
    strategy: 'no_prefix',
    defaultLocale: 'en',
    vuex: {
      syncLocale: true
    },
    detectBrowserLanguage: {
      cookieKey: 'i18n_lang_cookie',
      fallbackLocale: 'en',
      onlyOnRoot: true,
      alwaysRedirect: true,
      cookieSecure: true
    },
    vueI18n: {
      messages: { de, en, fr, it, jp, ru, sp }
    },
    locales: [
      {
        code: 'de',
        file: 'de.js',
        name: 'Deutsch',
        iso: 'de-DE',
        navigator: 'de',
        localeDateFormat: 'DD.MM.YYYY'
      },
      {
        code: 'en',
        file: 'en.js',
        name: 'English',
        iso: 'en-GB',
        navigator: 'en',
        localeDateFormat: 'DD/MM/YYYY'
      },
      {
        code: 'fr',
        file: 'fr.js',
        name: 'Français',
        iso: 'fr-FR',
        navigator: 'fr',
        localeDateFormat: 'DD/MM/YYYY'
      },
      {
        code: 'it',
        file: 'it.js',
        name: 'Italiano',
        iso: 'it-IT',
        navigator: 'it',
        localeDateFormat: 'DD/MM/YYYY'
      },
      {
        code: 'jp',
        file: 'jp.js',
        name: 'にほんご',
        iso: 'ja-JP',
        navigator: 'ja',
        localeDateFormat: 'YYYY/MM/DD'
      },
      {
        code: 'ru',
        file: 'ru.js',
        name: 'Русский',
        iso: 'ru-RU',
        navigator: 'ru',
        localeDateFormat: 'DD.MM.YYYY'
      },
      {
        code: 'sp',
        file: 'sp.js',
        name: 'Español',
        iso: 'es-ES',
        navigator: 'es',
        localeDateFormat: 'DD/MM/YYYY'
      }
    ]
  }
}
