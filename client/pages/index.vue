<template>
  <div class="lof-page">
    <div class="lof-page__headline">
      <h1 class="lof-title lof-title--3 mt-4 mb-3">
        {{ $t('agbs.title') }}
      </h1>
    </div>
    <div class="lof-page__body position-relative">
      <card>
        <div v-html="$t('agbs.content')" />
        <div class="my-4">
          <checkbox :is-checked="getTermsAndConditionsAcceptance" @input="onAcceptTermsAndConditions">
            {{ $t('common.inputs.agree') }}
          </checkbox>
          <div class="d-flex flex-column mt-5">
            <link-button to="/start" :disabled="!getTermsAndConditionsAcceptance" arrow-icon>
              {{ $t('common.buttons.next') }}
            </link-button>
          </div>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'terms-and-conditions',

    computed: {
      getTermsAndConditionsAcceptance () {
        return this.$store.getters.getTermsAndConditionsAcceptance
      }
    },

    methods: {
      onAcceptTermsAndConditions (checked) {
        this.$store.commit('setTermsAndConditionsAcceptance', checked)
      }
    }
  }
</script>
