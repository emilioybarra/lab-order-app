<template>
  <modal ref="templateTitle" :show-tab="false" full-width height-auto @closeModal="close">
    <h3 class="lof-headline lof-headline--2 my-4 text-center">
      {{ $t('common.labels.templateTitle') }}
    </h3>
    <form @submit.prevent="save">
      <input-field
        id="templateTitle"
        v-model="templateTitle"
        :label="$t('common.labels.templateTitle')"
        name="templateTitle"
        required
      />
      <b-form-invalid-feedback :force-show="error">
        You must enter in a title for you template.
      </b-form-invalid-feedback>
      <b-button-toolbar class="d-flex mb-3 mt-5 justify-content-center">
        <b-button class="lof-button mr-4 w-25" variant="primary" :disabled="!templateTitle" @click="save">
          {{ $t('common.buttons.save') }}
        </b-button>
        <b-button class="lof-button w-25" variant="secondary" @click="close">
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
        error: false,
        namespace: '',
        template: '',
        templateTitle: ''
      }
    },

    computed: {
      getUserId () {
        return this.$store.getters['auth/getUser']._id
      }
    },

    methods: {
      show (namespace, template) {
        this.template = template
        this.namespace = namespace
        this.$refs.templateTitle.show()
      },
      close () {
        this.error = false
        this.template = ''
        this.namespace = ''
        this.templateTitle = ''
        this.$refs.templateTitle.hide()
      },
      save () {
        this.error = false
        const payload = {
          templateTitle: this.templateTitle,
          userId: this.getUserId
        }

        this.$store.dispatch(`${ this.namespace }/save${ this.template }Data`, payload).then((response) => {
          if (!response) {
            this.error = true
          }
          if (response) {
            this.namespace = ''
            this.templateTitle = ''
            this.$refs.templateTitle.hide()
          }
        })
      }
    }
  }
</script>
