<template>
  <ul v-if="showLanguageMenu" class="lof-language-menu">
    <li
      v-for="lang in $i18n.locales"
      :key="lang.code"
      v-click-outside="{ handler: 'clickOutside', exclude: [ '$parent.$refs.language' ] }"
      class="lof-language-menu__item"
      @click="onLanguageChange(lang.code)"
    >
      <svg-icon :icon="lang.code" class="lof-language-menu__icon" />
      {{ lang.name }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'language-menu',

    props: {
      showLanguageMenu: Boolean
    },

    methods: {
      clickOutside () {
        this.$emit('language-change', false)
      },
      onLanguageChange (lang) {
        this.$i18n.setLocale(lang)
        this.$cookies.set('i18n_lang_cookie', lang)
        this.$emit('language-change', !this.showLanguageMenu)
      }
    }
  }
</script>
