<template>
  <div class="lof-footer">
    <div>&copy; DW Lingual System GmbH {{ currentYear }}</div>
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
</template>

<script>
  export default {
    name: 'BaseFooter',

    data () {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
</script>
