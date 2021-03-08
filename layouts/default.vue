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
        <b-nav-text v-if="$route.path !== '/'" class="lof-navbar__back-button" @click="goBack">
          <svg-icon class="lof-navbar__icon" icon="back" />
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="flex-row" align="right" justified>
        <b-nav-text class="lof-navbar__language" @click="showLanguageMenu = !showLanguageMenu">
          <svg-icon class="lof-navbar__icon" :icon="language" /> {{ $t('common.buttons.language') }}
        </b-nav-text>
        <b-nav-item class="lof-navbar__exit" @click="showNotification = !showNotification">
          <svg-icon class="lof-navbar__icon" icon="logout" />
          {{ $t('common.buttons.exit') }}
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <pdf-preview-modal :key="pdfPreviewKey" />
    <template-title-modal :key="'template-title-modal-' + language" />
    <notes-modal v-if="showModalTab" :key="'notes-modal-' + language" />

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
  export default {
    name: 'layout',
    scrollToTop: true,

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
        let fromStep, toStep
        this.pdfPreviewKey = this.$generateRandomKey()
        this.showModalTab = /(step-2|step-3)/s.test(to.path)
        const stepsPathString = '/steps/step-'
        const element = document.getElementById('lof-body-container')
        element.scrollTo(0, 0)

        if (/(steps)/s.test(from.path) && /(steps)/s.test(to.path)) {
          fromStep = parseInt(from.path.replace(stepsPathString, ''))
          toStep = parseInt(to.path.replace(stepsPathString, ''))
          if (fromStep > toStep) {
            this.slide = 'slide-right'
          }
        }

        if (/(templates)/s.test(from.path) && /(steps)/s.test(to.path)) {
          this.slide = 'slide-right'
        }
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
      this.showModalTab = /(step-2|step-3)/s.test(this.$route.path)
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
        this.$router.go(-1)
      },
      beforeEnter () {
        this.slide = 'slide-left'
      }
    }
  }
</script>
