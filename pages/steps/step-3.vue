<template>
  <page no-headline>
    <template #body>
      <base-card class="my-5">
        <div class="row">
          <div class="col-12">
            <headline>
              {{ $validateSelectedLanguage('en', 'de', 'fr') ? $t('section.u_2.upperInfo') : $t('section.u_3.title') }}
            </headline>
          </div>
          <div class="col-12">
            <ul class="list-unstyled" v-html="$t('section.u_2.upperInfoLegend')" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <archwire-sizes-table :key="$i18n.locale" teeth="upper" />
          </div>
        </div>
      </base-card>

      <base-card class="my-5">
        <div class="row">
          <div class="col-12">
            <headline>
              {{ $validateSelectedLanguage('en', 'de', 'fr') ? $t('section.l_2.lowerInfo') : $t('section.l_3.title') }}
            </headline>
          </div>
          <div v-if="$validateSelectedLanguage('en', 'de', 'fr')" class="col-12">
            <ul class="list-unstyled" v-html="$t('section.l_2.lowerInfoLegend')" />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <archwire-sizes-table teeth="lower" />
          </div>
        </div>
      </base-card>

      <div class="d-flex flex-column align-items-center my-5">
        <b-button class="lof-button mb-4" variant="primary" @click="openTemplateTitleModal">
          {{ $t('common.buttons.saveAsTemplate') }}
        </b-button>
        <link-button arrow-icon @click="validateRequiredFields">
          {{ $t('common.buttons.next') }}
        </link-button>
      </div>
    </template>
  </page>
</template>

<script>

  export default {
    name: 'step-3',
    middleware: 'isTermsAndConditionsAccepted',

    created () {
      this.$store.commit('common/setTemplate', 'lower-teeth')
    },

    methods: {
      openTemplateTitleModal () {
        this.$root.$emit('showTemplateTitleModal')
      },
      validateRequiredFields () {
        if (
          this.$store.getters['notes/getNonTransparent']() ||
          this.$store.getters['notes/getTrayTrimmed33']() ||
          this.$store.getters['notes/getTransparent']()
        ) {
          this.$router.push({ path: 'step-4' })
        } else {
          this.$root.$emit('showNotesModal', true)
        }
      }
    }
  }
</script>
