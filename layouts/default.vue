<template>
  <div class="lof" :style="`height: ${ innerHeight }px`" @scroll.passive="handleScroll">
    <transition name="fade">
      <div v-if="$nuxt.isOffline" class="bg-danger py-1 text-light w-100 d-flex justify-content-center">
        Offline
      </div>
    </transition>
    <transition-group name="slide-down">
      <notification
        v-for="(notification, index) in getNotifications"
        v-if="!!getNotifications.length"
        :key="index + 1"
        show-notification
        :notification="notification"
      />
    </transition-group>

    <b-navbar class="lof-navbar" :class="scrollY > 0 || showLanguageMenu ? 'lof-navbar--shadow' : ''" sticky toggleable="false">
      <b-navbar-nav align="left">
        <b-nav-text v-if="$route.path !== '/' && !unauthorizedPage" class="lof-navbar__back-button" @click="goBack">
          <svg-icon class="lof-navbar__icon" icon="back" />
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="flex-row" align="right" justified>
        <b-nav-text class="lof-navbar__language" @click="showLanguageMenu = !showLanguageMenu">
          <svg-icon class="lof-navbar__icon" :icon="language" /> {{ $t('common.buttons.language') }}
        </b-nav-text>
        <b-nav-text v-if="!unauthorizedPage" class="lof-navbar__exit" @click="showNotification = !showNotification">
          <svg-icon class="lof-navbar__icon" icon="logout" />
          {{ $t('common.buttons.exit') }}
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>

    <pdf-preview-modal v-if="!unauthorizedPage" :key="pdfPreviewKey" />
    <template-title-modal v-if="!unauthorizedPage" key="template-title-modal" />
    <confirmation-modal v-if="!unauthorizedPage" key="confirmation-modal" :click-outside="false" />
    <notes-modal v-if="showModalTab && !unauthorizedPage" key="notes-modal" />

    <div id="lof-body-container" class="lof-body" @scroll.passive="handleScroll">
      <transition name="fade">
        <ul v-if="showLanguageMenu" class="lof-language-menu">
          <li v-for="lang in $i18n.locales" :key="lang.code" class="lof-language-menu__item" @click="changeLanguage(lang.code)">
            <svg-icon :icon="lang.code" class="lof-language-menu__icon" />
            {{ lang.name }}
          </li>
        </ul>
      </transition>
      <transition :name="slide" mode="out-in" @before-enter="beforeEnter">
        <Nuxt />
      </transition>
      <div class="lof-footer">
        <div>
          &copy; DW Lingual System GmbH {{ currentYear }}
        </div>
        <div>
          <a
            target="_blank"
            class="lof-footer__link mr-2"
            :href="`https://www.lingualsystems.${ $i18n.locale === 'de' ? 'de/impressum/' : 'co.uk/legal-disclosure/' }`"
          >
            {{ $i18n.locale === 'de' ? 'Impressum' : 'Legal Disclosure' }}
          </a>
          <a
            target="_blank"
            class="lof-footer__link"
            :href="`https://www.lingualsystems.${ $i18n.locale === 'de' ? 'de/datenschutz-cookies/' : 'co.uk/data-privacy-policy-cookies/' }`"
          >
            {{ $i18n.locale === 'de' ? 'Datenschutz & Cookies' : 'Data Privacy Policy & Cookies' }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navigationBackController from '~/utils/navigationBackController'

  export default {
    name: 'layout',
    scrollToTop: true,
    middleware: 'userAuth',

    data () {
      return {
        scrollY: 0,
        slide: 'slide-left',
        showLanguageMenu: false,
        innerHeight: window.innerHeight,
        showModalTab: false,
        showNotification: false,
        currentYear: new Date().getFullYear(),
        pdfPreviewKey: 0
      }
    },

    computed: {
      unauthorizedPage () {
        return this.$route.path === '/unauthorized'
      },
      language () {
        return this.$i18n.locale
      },
      getNotifications () {
        return this.$store.getters['common/getNotifications'].map((notification) => {
          return { ...notification, message: this.$t(`common.notifications['${ notification.message }']`) }
        })
      }
    },

    watch: {
      getModalVisibility () {
        if (this.getModalVisibility) {
          this.navbarZIndex = 0
        } else {
          setTimeout(() => {
            this.navbarZIndex = 1020
          }, 400)
        }
      },
      getNotifications () {
        for (let i = 0; i < this.getNotifications.length; ++i) {
          setTimeout(() => {
            this.$store.commit('common/removeNotifications')
          }, 3000)
        }
      },
      $route (to, from) {
        history.pushState(null, null, document.URL)
        this.pdfPreviewKey = this.$generateRandomKey()
        this.showModalTab = /(step-2|step-3)/s.test(to.path)
        document.getElementById('lof-body-container').scrollTo(0, 0)
      }
    },

    beforeCreate () {
      if (process.browser) {
        const navigatorLanguage = navigator.language.toLocaleLowerCase().substring(0, 2)
        if (!this.$cookies.get('i18n_lang_cookie')) {
          const lang = this.$i18n.locales.find(locale => locale.navigator === navigatorLanguage).code
          this.$cookies.set('i18n_lang_cookie', lang)
          this.$i18n.setLocale(lang)
        }
      }
    },

    created () {
      this.pdfPreviewKey = this.$generateRandomKey()
    },

    mounted () {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL)
      })
      this.showModalTab = /(step-2|step-3)/s.test(this.$route)
      window.addEventListener('resize', this.detectDevice)
      window.addEventListener('orientationchange', this.handleOrientation)
    },

    destroyed () {
      window.removeEventListener('resize', this.detectDevice)
      window.removeEventListener('orientationchange', this.handleOrientation)
    },

    methods: {
      changeLanguage (lang) {
        this.showLanguageMenu = false
        this.$i18n.setLocale(lang)
      },
      detectDevice () {
        this.innerHeight = window.innerHeight
      },
      handleOrientation () {
        this.innerHeight = window.innerHeight
      },
      handleScroll (event) {
        this.scrollY = event.target.scrollTop
      },
      goBack () {
        this.slide = 'slide-right'
        this.$router.push(navigationBackController(this.$route))
      },
      beforeEnter () {
        this.slide = 'slide-left'
      }
    }
  }
</script>
