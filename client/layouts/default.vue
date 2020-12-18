<template>
  <div class="lof" :style="`height: ${ innerHeight }px`" @scroll.passive="handleScroll">
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
        <b-nav-item class="lof-navbar__exit">
          <svg-icon class="lof-navbar__icon" icon="logout" /> Exit
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <notes v-if="showModalTab" />
    <div id="lof-body-container" class="lof-body container-fluid" @scroll.passive="handleScroll">
      <transition name="fade">
        <ul v-if="showLanguageMenu" class="lof-language-menu">
          <li v-for="lang in $i18n.locales" :key="lang.code" class="lof-language-menu__item" @click="changeLanguage(lang.code)">
            <svg-icon :icon="lang.code" class="lof-language-menu__icon" />
            {{ lang.name }}
          </li>
        </ul>
      </transition>
      <transition :name="slide" mode="out-in" @before-enter="beforeEnter">
        <Nuxt id="nuxt-container" />
      </transition>
      <div class="lof-footer">
        <div>
          &copy; DW Lingual System GmbH {{ currentYear }}
        </div>
        <div>
          <a href="#" class="lof-footer__link">Impressum</a>
          <a href="#" class="lof-footer__link">Datenschutz</a>
        </div>
      </div>
      <div hidden style="position: sticky; bottom: 0;">
        <b-alert show variant="success" style="position: absolute; bottom: 0; width: 100%;">
          Success Alert
        </b-alert>
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
        currentYear: new Date().getFullYear()
      }
    },

    computed: {
      language () {
        return this.$i18n.locale
      },
      getModalVisibility () {
        return this.$store.getters.getModalVisibility
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
      $route (to, from) {
        let fromStep, toStep
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

    mounted () {
      console.log('fired')
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
