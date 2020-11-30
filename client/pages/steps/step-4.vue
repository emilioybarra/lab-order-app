<template>
  <page>
    <template #headline>
      {{ $t('common.titles.sendForm') }}
    </template>
    <template #body>
      <div class="d-flex flex-column align-items-center">
        <b-button class="lof-button mb-4" variant="primary" @click="generatePdf">
          {{ $t('common.buttons.send') }}
        </b-button>
        <pdf ref="pdf" />
      </div>
    </template>
  </page>
</template>

<script>
  export default {
    name: 'step-4',

    data () {
      return {

      }
    },

    methods: {
      generatePdf () {
        console.log(this.$refs)
        this.$refs.pdf.generateReport()
      }
    }
  }
</script>
