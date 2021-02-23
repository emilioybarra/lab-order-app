<template>
  <page>
    <template #headline>
      Order Form ID: {{ orderFormId }}
    </template>
    <template #body>
      <div class="d-flex flex-column align-items-center">
        <b-button class="lof-button mb-4" variant="primary" @click="previewPdf">
          <span v-if="!loadingPreview">{{ $t('common.buttons.preview') }}</span>
          <b-spinner v-if="loadingPreview" small variant="light" />
        </b-button>
        <b-button class="lof-button mb-4" variant="primary" @click="downloadPdf">
          <span v-if="!loadingDownload">{{ $t('common.buttons.download') }}</span>
          <b-spinner v-if="loadingDownload" small variant="light" />
        </b-button>
        <pdf-file
          v-if="orderForm !== undefined"
          id="pdf-page-1"
          :key="orderFormId + '-page-1'"
          hidden
          show-page1
          is-sent-form
          :language="orderForm.orderFormLanguage"
          :order-form="orderForm"
        />
        <pdf-file
          v-if="orderForm !== undefined"
          id="pdf-page-2"
          :key="orderFormId + '-page-2'"
          hidden
          show-page2
          is-sent-form
          :language="orderForm.orderFormLanguage"
          :order-form="orderForm"
        />
      </div>
    </template>
  </page>
</template>

<script>
  import html2pdf from 'html2pdf.js'

  export default {
    auth: 'guest',
    loading: true,
    layout: 'plain',

    data () {
      return {
        orderForm: undefined,
        orderFormId: undefined,
        loadingPreview: false,
        loadingDownload: false,
        pdfPage1: undefined,
        pdfPage2: undefined,
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

    async fetch () {
      this.orderFormId = this.$route.params.id
      const payload = { orderFormId: this.orderFormId }
      this.orderForm = await this.$store.dispatch('order-form/fetchOrderFormById', payload)
        .then((orderForm) => {
          if (!orderForm) { throw new Error('Invalid order form ID') }
          if (orderForm._id) { return orderForm }
        })
        .catch(() => {
          this.$router.push('/invalid')
        })
    },

    methods: {
      previewPdf () {
        this.loadingPreview = true
        this.pdfOptions.filename = `order-form_${ this.orderFormId }`
        this.pdfPage1 = document.getElementById('pdf-page-1').innerHTML
        this.pdfPage2 = document.getElementById('pdf-page-2').innerHTML

        if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
          this.pdfOptions.html2canvas.scale = 3
        } else {
          this.pdfOptions.html2canvas.scale = 4
        }

        html2pdf().set(this.pdfOptions).from(this.pdfPage1).toPdf().from(this.pdfPage2)
          .toContainer().toCanvas().toPdf().get('pdf')
          .then((pdf2) => {
            const pdfBlobURL = pdf2.output('bloburl')
            if (/iPhone|iPad/i.test(navigator.userAgent)) {
              window.open(pdfBlobURL, '_system', 'location=yes')
            } else {
              window.open(pdfBlobURL, '_blank')
            }
          })
      },
      downloadPdf () {
        this.loadingDownload = true
        this.pdfOptions.filename = `order-form_${ this.orderFormId }`
        this.pdfPage1 = document.getElementById('pdf-page-1').innerHTML
        this.pdfPage2 = document.getElementById('pdf-page-2').innerHTML
        html2pdf().set(this.pdfOptions).from(this.pdfPage1).toPdf().from(this.pdfPage2)
          .toContainer().toCanvas().toPdf().save()
          .then(() => {
            this.loadingDownload = false
          })
      }
    }
  }
</script>
