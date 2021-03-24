<template>
  <modal ref="confirmationModal" :show-tab="false" full-width height-auto @closeModal="closeConfirmationModal">
    <h3 class="lof-headline lof-headline--2 my-4 text-center">
      {{ $t('common.headlines.orderSent') }}
    </h3>
    <div class="text-center">
      <i class="lof-icon-xl ion-checkmark-circled text-success" />
    </div>
    <b-button-toolbar class="d-flex mb-3 mt-5 justify-content-center">
      <b-button class="lof-button mr-4 w-25" variant="primary" @click="goHome">
        Home
      </b-button>
      <b-button class="lof-button mr-4 w-25" variant="primary" @click="goToSentForms">
        {{ $t('common.titles.sentForms') }}
      </b-button>
      <b-button class="lof-button w-25" variant="secondary" @click="closeConfirmationModal">
        {{ $t('common.buttons.close') }}
      </b-button>
    </b-button-toolbar>
  </modal>
</template>

<script>
  export default {
    name: 'confirmation-modal',

    created () {
      this.$root.$on('showConfirmationModal', () => this.$refs.confirmationModal.show())
    },

    methods: {
      goHome () {
        this.$refs.confirmationModal.hide()
        this.$router.push('/')
      },
      goToSentForms () {
        this.$refs.confirmationModal.hide()
        this.$router.push('/sent-forms')
      },
      closeConfirmationModal () {
        this.$refs.confirmationModal.hide()
      }
    }
  }
</script>
