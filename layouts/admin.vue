<template>
  <div id="lof" class="lof" @scroll.passive="handleScroll">
    <b-overlay :show="isLoading" fixed no-wrap z-index="10000" spinner-variant="primary" />
    <transition name="fade">
      <div v-if="$nuxt.isOffline" class="bg-danger py-1 text-light w-100 d-flex justify-content-center">
        Offline
      </div>
    </transition>
    <b-navbar class="lof-navbar" :class="scrollY > 0 || showLanguageMenu ? 'lof-navbar--shadow' : ''" sticky toggleable="false">
      <b-navbar-nav class="flex-row ml-auto">
        <b-nav-text class="lof-navbar__language" @click="showLanguageMenu = !showLanguageMenu">
          <svg-icon class="lof-navbar__icon" :icon="language" />
          {{ $t('common.buttons.language') }}
        </b-nav-text>
        <b-nav-text v-if="$store.state.auth.loggedIn" class="lof-navbar__logout" @click="logout">
          <svg-icon class="lof-navbar__icon" icon="logout" />
          {{ $t('common.buttons.logout') }}
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>

    <pdf-preview-modal v-if="$store.state.auth.loggedIn" :key="pdfPreviewKey" />

    <div id="lof-body-container" class="lof-body container-fluid" @scroll.passive="handleScroll">
      <transition name="fade">
        <language-menu :show-language-menu="showLanguageMenu" @language-change="onLanguageChange" />
      </transition>
      <transition name="fade">
        <Nuxt />
      </transition>
      <base-footer />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'admin',

    data () {
      return {
        scrollY: 0,
        isLoading: false,
        pdfPreviewKey: 0,
        showLanguageMenu: false
      }
    },

    computed: {
      language () {
        return this.$i18n.locale
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
    },

    methods: {
      async logout () {
        this.isLoading = true
        await this.$store.dispatch('auth/logout').then(() => {
          this.$router.push({ path: '/admin' }, () => {
            this.isLoading = false
          })
        })
      },
      onLanguageChange (showLanguageMenu) {
        this.showLanguageMenu = showLanguageMenu
      },
      handleScroll (event) {
        this.scrollY = event.target.scrollTop
      }
    }
  }
</script>
