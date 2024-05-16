<template>
  <div class="lof-page">
    <div class="lof-page__headline lof-page__headline--terms-title">
      <h1 class="lof-title mt-4 mb-3">
        {{ $t('agbs.title') }}
      </h1>
    </div>
    <div class="lof-page__body position-relative">
      <scrollable-card>
        <div class="text-justify" v-html="$t('agbs.content')" />
        <div class="my-4">
          <checkbox v-model="termsAndConditions" :is-checked="getTermsAndConditionsAcceptance">
            {{ $t('section.f_1.generalTerms') }}.
          </checkbox>
          <div class="d-flex flex-column mt-5">
            <link-button to="/start" :disabled="!termsAndConditions" arrow-icon @click="onAcceptTermsAndConditions">
              {{ $t('common.buttons.next') }}
            </link-button>
          </div>
        </div>
      </scrollable-card>
    </div>
  </div>
</template>

<script>
  import { termsAndConditionsDate } from '@/utils/termsAndConditionsDate'

  export default {
    name: 'terms-and-conditions',
    middleware: 'isTermsAndConditionsAccepted',

    data () {
      return {
        termsAndConditions: false
      }
    },

    computed: {
      getTermsAndConditionsAcceptance () {
        return this.$store.getters['common/getTermsAndConditionsAcceptance']()
      }
    },

    created () {
      this.termsAndConditions = this.getTermsAndConditionsAcceptance
    },

    methods: {
      setTermsAndConditionsCookie () {
        const termsAndConditions = {
          date: this.$moment(termsAndConditionsDate, 'YYYY-MM-DD').format('YYYY-MM-DD'),
          acceptTermsAndConditions: true
        }
        this.$cookies.set('lof__termsAndConditions', termsAndConditions)
      },
      onAcceptTermsAndConditions () {
        if (this.$cookies.isKey('lof__termsAndConditions')) {
          const cookie = this.$cookies.get('lof__termsAndConditions')
          if (this.$moment(termsAndConditionsDate, 'YYYY-MM-DD') > this.$moment(cookie.date, 'YYYY-MM-DD')) {
            this.setTermsAndConditionsCookie()
          }
        }

        if (!this.$cookies.isKey('lof__termsAndConditions')) {
          this.setTermsAndConditionsCookie()
        }
      }
    }
  }
</script>
