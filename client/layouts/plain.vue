<template>
  <div class="lof" :style="`height: ${ innerHeight }px`" @scroll.passive="handleScroll">
    <b-navbar class="lof-navbar" :class="scrollY > 0 || showLanguageMenu ? 'lof-navbar--shadow' : ''" sticky toggleable="false">
      <b-navbar-nav class="flex-row ml-auto">
        <b-nav-text class="lof-navbar__language" @click="showLanguageMenu = !showLanguageMenu">
          <svg-icon class="lof-navbar__icon" :icon="language" /> {{ $t('common.buttons.language') }}
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>
    <div id="lof-body-container" class="lof-body container-fluid" @scroll.passive="handleScroll">
      <transition name="fade">
        <ul v-if="showLanguageMenu" class="lof-language-menu">
          <li v-for="lang in $i18n.locales" :key="lang.code" class="lof-language-menu__item" @click="changeLanguage(lang.code)">
            <svg-icon :icon="lang.code" class="lof-language-menu__icon" />
            {{ lang.name }}
          </li>
        </ul>
      </transition>
      <transition name="fade">
        <Nuxt />
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
    </div>
  </div>
</template>

<script>
  export default {
    auth: false,

    name: 'plain',

    data () {
      return {
        scrollY: 0,
        showLanguageMenu: false,
        innerHeight: window.innerHeight,
        currentYear: new Date().getFullYear()
      }
    },

    computed: {
      language () {
        return this.$i18n.locale
      }
    },

    methods: {
      changeLanguage (lang) {
        this.showLanguageMenu = false
        this.$i18n.setLocale(lang)
      },
      handleScroll (event) {
        this.scrollY = event.target.scrollTop
      }
    }
  }
</script>
