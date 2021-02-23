<template>
  <modal ref="pdfPreview" show-only-close-tab>
    <card v-click-outside.stop="closePdfPreviewModal">
      <pdf-generator :src="pdfSrcPage1" class="lof-pdf-preview" />
      <pdf-generator :src="pdfSrcPage2" class="lof-pdf-preview" />
    </card>
  </modal>
</template>

<script>
  import pdfGenerator from 'vue-pdf'

  export default {
    name: 'pdf-preview-modal',

    components: {
      pdfGenerator
    },

    data () {
      return {
        pdfSrcPage1: '',
        pdfSrcPage2: '',
        pdfSrcPage3: '',
        isJpVariant: false
      }
    },

    computed: {
      getPdfSrcPage1 () {
        return this.$store.getters['common/getPdfSrcPage1']
      },
      getPdfSrcPage2 () {
        return this.$store.getters['common/getPdfSrcPage2']
      }
    },

    created () {
      this.$root.$on('generatePdfPreview', () => this.generatePdfPreview())
    },

    methods: {
      closePdfPreviewModal () {
        this.$refs.pdfPreview.hide()
        this.$root.$emit('clearSelectedSentOrderFormData')
      },
      generatePdfPreview () {
        this.pdfSrcPage1 = this.getPdfSrcPage1
        this.pdfSrcPage2 = this.getPdfSrcPage2

        if (this.$refs.pdfPreview) {
          this.$refs.pdfPreview.show()
        }
      }
    }
  }
</script>
