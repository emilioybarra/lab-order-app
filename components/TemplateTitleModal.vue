<template>
  <modal ref="templateTitle" :show-tab="false">
    <card v-click-outside.stop="closeTemplateTitleModal" class="h-auto">
      <h3 class="lof-headline lof-headline--2 my-4">
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
        <b-button-toolbar class="d-flex mb-3 mt-5 justify-content-end">
          <b-button class="lof-button mr-4 w-25" variant="secondary" @click="closeTemplateTitleModal">
            {{ $t('common.buttons.cancel') }}
          </b-button>
          <b-button class="lof-button w-25" variant="primary" @click="saveAsTemplate">
            {{ $t('common.buttons.save') }}
          </b-button>
        </b-button-toolbar>
      </form>
    </card>
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
          userId: this.$auth.$state.user._id
        }
        this.$store.dispatch(`${ this.getTemplate }/saveTemplateData`, payload).then(() => {
          this.$refs.templateTitle.hide()
          this.templateTitle = ''
        })
      }
    }
  }
</script>
