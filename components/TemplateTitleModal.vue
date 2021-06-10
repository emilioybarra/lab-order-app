<template>
  <modal ref="templateTitle" :show-tab="false" full-width height-auto @closeModal="closeTemplateTitleModal">
    <h3 class="lof-headline lof-headline--2 my-4 text-center">
      {{ $t('common.labels.templateTitle') }}
    </h3>
    <form @submit.prevent="saveAsTemplate">
      <input-field
        id="templateTitle"
        v-model="templateTitle"
        :label="$t('common.labels.templateTitle')"
        name="templateTitle"
        required
      />
      <b-button-toolbar class="d-flex mb-3 mt-5 justify-content-center">
        <b-button class="lof-button mr-4 w-25" variant="primary" @click="saveAsTemplate">
          {{ $t('common.buttons.save') }}
        </b-button>
        <b-button class="lof-button w-25" variant="secondary" @click="closeTemplateTitleModal">
          {{ $t('common.buttons.cancel') }}
        </b-button>
      </b-button-toolbar>
    </form>
  </modal>
</template>

<script>
  export default {
    name: 'template-title-modal',

    data () {
      return {
        templateTitle: ''
      }
    },

    computed: {
      getTemplate () {
        return this.$store.getters['common/getTemplate']
      },
      getUserId () {
        return this.$store.getters['auth/getUser']._id
      }
    },

    created () {
      this.$root.$on('showTemplateTitleModal', () => this.$refs.templateTitle.show())
    },

    methods: {
      closeTemplateTitleModal () {
        this.$refs.templateTitle.hide()
        this.templateTitle = ''
      },
      saveAsTemplate () {
        const payload = {
          templateTitle: this.templateTitle,
          userId: this.getUserId
        }

        this.$store.dispatch(`${ this.getTemplate }/saveTemplateData`, payload).then((response) => {
          if (!response) { this.$router.push('/unauthorized') }
          if (response) {
            this.$refs.templateTitle.hide()
            this.templateTitle = ''
          }
        })
      }
    }
  }
</script>
