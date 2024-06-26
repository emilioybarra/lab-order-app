<template>
  <page>
    <template #headline>
      {{ $t('common.titles.sendForm') }}
    </template>
    <template #body>
      <div class="d-flex flex-column align-items-center">
        <b-button class="lof-button mb-4" variant="primary" @click="saveOrderForm">
          {{ $t('common.buttons.send') }}
        </b-button>
        <b-button class="lof-button mb-4" variant="primary" @click="previewPdf">
          <span v-if="!loadingPreview">{{ $t('common.buttons.preview') }}</span>
          <b-spinner v-if="loadingPreview" small variant="light" />
          <span v-if="loadingPreview">{{ $t('common.buttons.generatingPdf') }}</span>
        </b-button>
        <b-button class="lof-button mb-4" variant="primary" @click="downloadPdf">
          <span v-if="!loadingDownload">{{ $t('common.buttons.download') }}</span>
          <b-spinner v-if="loadingDownload" small variant="light" />
          <span v-if="loadingDownload">{{ $t('common.buttons.generatingPdf') }}</span>
        </b-button>
        <pdf-file id="pdf-page-1" :key="$generateRandomKey()" hidden show-page1 :language="$i18n.locale" />
        <pdf-file id="pdf-page-2" :key="$generateRandomKey()" hidden show-page2 :language="$i18n.locale" />
      </div>
    </template>
  </page>
</template>

<script>
  import html2pdf from 'html2pdf.js'

  export default {
    name: 'step-4',
    middleware: [ 'isTermsAndConditionsAccepted', 'validateRequiredFields' ],

    data () {
      return {
        pdfPage1: undefined,
        pdfPage2: undefined,
        loadingPreview: false,
        loadingDownload: false,
        pdfOptions: {
          margin: 1,
          filename: '',
          image: { type: 'jpeg', quality: 1 },
          html2canvas: { scale: 3 },
          jsPDF: { format: 'a4', orientation: 'portrait' },
          pagebreak: { after: '#page-1' }
        }
      }
    },

    computed: {
      getUserId () {
        return this.$store.getters['auth/getUser']._id
      }
    },

    methods: {
      previewPdf () {
        const self = this
        this.pdfOptions.filename = `order-form_${ this.$moment().format('YYYY-MM-DD') }`
        this.loadingPreview = true
        if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
          this.pdfOptions.html2canvas.scale = 3
        } else {
          this.pdfOptions.html2canvas.scale = 4
        }

        this.$nextTick(() => {
          this.pdfPage1 = document.getElementById('pdf-page-1').innerHTML
          this.pdfPage2 = document.getElementById('pdf-page-2').innerHTML
          html2pdf().set(this.pdfOptions).from(this.pdfPage1).toPdf().get('pdf')
            .then((pdf1) => {
              const pdfBlobURL = pdf1.output('bloburl')
              self.$store.commit('common/setPdfSrcPage1', pdfBlobURL)
            })
            .then(() => {
              html2pdf().set(this.pdfOptions).from(this.pdfPage2).toPdf().get('pdf')
                .then((pdf2) => {
                  const pdfBlobURL = pdf2.output('bloburl')
                  self.$store.commit('common/setPdfSrcPage2', pdfBlobURL)
                })
                .then(() => {
                  self.$root.$emit('generatePdfPreview')
                  self.loadingPreview = false
                })
            })
        })
      },
      downloadPdf () {
        this.loadingDownload = true
        this.pdfOptions.filename = `order-form_${ this.$moment().format('YYYY-MM-DD') }`
        this.$nextTick(() => {
          this.pdfPage1 = document.getElementById('pdf-page-1').innerHTML
          this.pdfPage2 = document.getElementById('pdf-page-2').innerHTML
          html2pdf().set(this.pdfOptions).from(this.pdfPage1).toPdf().from(this.pdfPage2)
            .toContainer().toCanvas().toPdf().save()
            .then(() => {
              this.loadingDownload = false
            })
        })
      },
      saveOrderForm () {
        const payload = {
          orderFormLanguage: this.$i18n.locale,
          userId: this.getUserId
        }
        this.$store.dispatch('order-form/saveOrderForm', payload).then((response) => {
          if (response) {
            this.$root.$emit('showConfirmationModal')
            this.$store.commit('invoice-address/resetInvoiceAddressState')
            this.$store.commit('upper-teeth/resetUpperTeethState')
            this.$store.commit('notes/resetNotesState')
            this.$store.commit('lower-teeth/resetLowerTeethState')
          }
        })
      }
    }
  }
</script>
