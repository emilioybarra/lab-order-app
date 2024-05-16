<template>
  <div id="lof" class="lof" @scroll.passive="handleScroll">
    <transition name="fade">
      <div v-if="$nuxt.isOffline" class="bg-danger py-1 text-light w-100 d-flex justify-content-center">
        Offline
      </div>
    </transition>
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
      <base-footer />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'plain',

    data () {
      return {
        scrollY: 0,
        showLanguageMenu: false
      }
    },

    computed: {
      language () {
        return this.$i18n.locale
      }
    },

    mounted () {
      // this.$setContainerHeight()
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
