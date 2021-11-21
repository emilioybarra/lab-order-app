<template>
  <page no-headline>
    <template #body>
      <b-overlay :show="isLoading" fixed no-wrap z-index="10000" spinner-variant="primary">
        <template #overlay>
          <div class="d-flex flex-column align-items-center">
            <b-spinner class="mb-3" variant="primary" />
            <strong>Saving...</strong>
          </div>
        </template>
      </b-overlay>
      <base-card class="my-5">
        <div class="row">
          <div class="col">
            <headline>
              {{ $t('common.titles.upperTeeth') }}
            </headline>
          </div>
        </div>
        <div class="row">
          <upper-teeth-form ref="upperTeethForm" />
        </div>
      </base-card>

      <base-card class="my-5">
        <div class="row">
          <div class="col">
            <headline>
              {{ $t('common.titles.lowerTeeth') }}
            </headline>
          </div>
        </div>
        <div class="row">
          <lower-teeth-form ref="lowerTeethForm" />
        </div>
      </base-card>
      <div class="row">
        <div class="col">
          <div class="d-flex flex-column align-items-center my-5">
            <b-button class="lof-button mb-4" variant="primary" @click="openTemplateTitleModal">
              {{ $t('common.buttons.saveAsTemplate') }}
            </b-button>
            <link-button to="step-3" arrow-icon>
              {{ $t('common.buttons.next') }}
            </link-button>
          </div>
        </div>
      </div>
    </template>
  </page>
</template>

<script>
  export default {
    name: 'step-2',
    middleware: 'isTermsAndConditionsAccepted',

    data () {
      return {
        isLoading: false
      }
    },

    created () {
      this.$store.commit('common/setTemplate', 'upper-teeth')
    },

    async beforeRouteLeave (to, from, next) {
      this.isLoading = true

      await Promise.all([
        this.$refs.lowerTeethForm.saveData(),
        this.$refs.upperTeethForm.saveData()
      ])
      this.$nextTick(() => {
        next()
      })
    },

    methods: {
      openTemplateTitleModal () {
        this.$root.$emit('showTemplateTitleModal')
      }
    }
  }
</script>
