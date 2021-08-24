<template>
  <modal ref="pdfPreview" show-only-close-tab @closeModal="closePdfPreviewModal">
    <pdf :src="pdfSrcPage1" class="lof-pdf-preview" :page="1" />
    <pdf :src="pdfSrcPage2" class="lof-pdf-preview" :page="1" />
  </modal>
</template>

<script>
  // import pdf from 'vue-pdf'
  // import 'pdfjs-dist/build/pdf.worker.entry.js'
  import pdf from 'pdfvuer'

  export default {
    name: 'pdf-preview-modal',

    components: {
      pdf
    },

    data () {
      return {
        pdfSrcPage1: '',
        pdfSrcPage2: ''
      }
    },

    computed: {
      getPdfSrcPage1 () {
        return this.$store.getters['common/getPdfSrcPage1']()
      },
      getPdfSrcPage2 () {
        return this.$store.getters['common/getPdfSrcPage2']()
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
