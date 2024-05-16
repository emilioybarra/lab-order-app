<template>
  <div id="lof" class="lof" @scroll.passive="handleScroll">
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
          {{ $t('common.buttons.back') }}
        </b-nav-text>
      </b-navbar-nav>
      <b-navbar-nav class="flex-row" align="right" justified>
        <b-nav-text ref="language" class="lof-navbar__language" @click="showLanguageMenu = !showLanguageMenu">
          <svg-icon class="lof-navbar__icon" :icon="language" />
          {{ $t('common.buttons.language') }}
        </b-nav-text>
        <b-nav-text v-if="!unauthorizedPage" class="lof-navbar__exit" @click="resetForm">
          <svg-icon class="lof-navbar__icon" icon="logout" />
          {{ $t('common.buttons.exit') }}
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>

    <template-title-modal ref="template-title-modal" />
    <pdf-preview-modal v-if="!unauthorizedPage" :key="pdfPreviewKey" />
    <confirmation-modal v-if="!unauthorizedPage" key="confirmation-modal" :click-outside="false" />
    <notes-modal v-if="showModalTab && !unauthorizedPage" key="notes-modal" show-tab />

    <div id="lof-body-container" class="lof-body" @scroll.passive="handleScroll">
      <transition name="fade">
        <language-menu :show-language-menu="showLanguageMenu" @language-change="onLanguageChange" />
      </transition>
      <transition :name="slide" mode="out-in" @before-enter="beforeEnter">
        <Nuxt />
      </transition>
      <base-footer />
    </div>
  </div>
</template>

<script>
  import { navigationBackController } from '~/utils/navigationBackController'

  export default {
    name: 'layout',
    scrollToTop: true,
    middleware: 'userAuth',

    data () {
      return {
        scrollY: 0,
        slide: 'slide-left',
        showLanguageMenu: false,
        showModalTab: false,
        showNotification: false,
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
          this.$i18n.setLocale(lang)
          this.$cookies.set('i18n_lang_cookie', lang)
        }
      }
    },

    created () {
      this.pdfPreviewKey = this.$generateRandomKey()
    },

    mounted () {
      this.$setContainerHeight()
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL)
      })
      this.showModalTab = /(step-2|step-3)/s.test(this.$route.path)
      this.$root.$on('showTemplateTitleModal', this.$refs['template-title-modal'].show)
    },

    methods: {
      resetForm () {
        this.slide = 'slide-right'
        this.$store.commit('common/resetState')
        this.$store.commit('invoice-address/resetInvoiceAddressState')
        this.$store.commit('upper-teeth/resetUpperTeethState')
        this.$store.commit('lower-teeth/resetLowerTeethState')
        this.$store.commit('notes/resetNotesState')
        this.$cookies.remove('lof__termsAndConditions')
        this.$router.push({ path: '/' })
      },
      onLanguageChange (showLanguageMenu) {
        this.showLanguageMenu = showLanguageMenu
      },
      handleScroll (event) {
        this.scrollY = event.target.scrollTop
      },
      goBack () {
        this.slide = 'slide-right'
        this.$router.push({ path: this.localeRoute(navigationBackController(this.$route)).path })
      },
      beforeEnter () {
        this.slide = 'slide-left'
      }
    }
  }
</script>
