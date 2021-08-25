<template>
  <page>
    <template #headline>
      {{ $t('common.titles.sentForms') }}
    </template>
    <template #body>
      <b-skeleton-wrapper class="d-flex flex-column" :loading="loading">
        <template #loading>
          <div v-for="item in 5" :key="item" class="lof-list-item">
            <div class="col-8 col-md-9 col-lg-7 col-xl-8 offset-lg-1">
              <b-skeleton class="w-100" type="button" animation="fade" />
            </div>
            <div class="lof-list-item__button-group col-4 col-md-3 col-lg-3 col-xl-2">
              <div class="lof-list-item__button">
                <b-skeleton class="lof-list-item__button-icon--loading" type="avatar" animation="fade" />
              </div>
              <div v-if="!noExternalButton" class="lof-list-item__button">
                <b-skeleton class="lof-list-item__button-icon--loading" type="avatar" animation="fade" />
              </div>
            </div>
          </div>
        </template>
        <div v-if="!orderForms.length && !loading" class="d-flex justify-content-center lof-headline lof-headline--3">
          {{ $t('common.headlines.emptyOrderForms') }}
        </div>
        <list-item
          v-for="orderForm in orderForms"
          v-if="!!orderForms.length"
          :key="orderForm._id"
          no-delete-button
          :no-external-button="noExternalButton"
          :loading-text="$t('common.buttons.generatingPdf')"
          :loading-preview="selectedOrderFormId === orderForm._id && loadingPreview"
          :loading-download="selectedOrderFormId === orderForm._id && loadingDownload"
          :loading-external="selectedOrderFormId === orderForm._id && loadingExternal"
          :name="`${ $d(new Date(orderForm.createdAt)) }${ orderForm.patient.lastName && orderForm.patient.firstName ? ` – ${ orderForm.patient.lastName }, ${ orderForm.patient.firstName }` : '' }`"
          @onSelect="selectOrderForm(orderForm._id)"
          @onDownload="downloadOrderForm(orderForm._id)"
          @onExternal="externalOrderForm(orderForm._id)"
        />
        <div v-for="item in (5 - orderForms.length)" v-if="!!orderForms.length" :key="item" class="lof-list-item">
          <div class="col-8 col-md-9 col-lg-7 col-xl-8 offset-lg-1" />
          <div class="lof-list-item__button-group col-4 col-md-3 col-lg-3 col-xl-2">
            <div class="lof-list-item__button" />
          </div>
        </div>
        <pdf-file
          v-if="selectedOrderForm !== undefined"
          id="pdf-page-1"
          :key="selectedOrderFormId + '-page-1'"
          hidden
          show-page1
          is-sent-form
          :language="selectedOrderForm.orderFormLanguage"
          :order-form="selectedOrderForm"
        />
        <pdf-file
          v-if="selectedOrderForm !== undefined"
          id="pdf-page-2"
          :key="selectedOrderFormId + '-page-2'"
          hidden
          show-page2
          is-sent-form
          :language="selectedOrderForm.orderFormLanguage"
          :order-form="selectedOrderForm"
        />
      </b-skeleton-wrapper>
      <pagination-bar v-if="totalOrderForms > 5" :pages="Math.ceil(totalOrderForms / 5)" :page="currentPage" @selectPage="selectPage" />
    </template>
  </page>
</template>

<script>
  import html2pdf from 'html2pdf.js'

  export default {
    name: 'sent-forms',

    data () {
      return {
        loading: true,
        currentPage: 1,
        orderForms: [],
        orderFormLanguage: '',
        selectedOrderForm: undefined,
        selectedOrderFormId: '',
        totalOrderForms: 0,
        pdfPage1: undefined,
        pdfPage2: undefined,
        loadingPreview: false,
        loadingDownload: false,
        loadingExternal: false,
        noExternalButton: false,
        pdfBlobURL: '',
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

    watch: {
      currentPage () {
        this.loading = true
        this.getAllOrderForms(this.currentPage)
      }
    },

    created () {
      this.noExternalButton = !/Chrome|Android/i.test(navigator.userAgent)
      this.$root.$on('clearSelectedSentOrderFormData', () => {
        this.selectedOrderForm = undefined
      })
    },

    mounted () {
      this.getAllOrderForms(this.currentPage)
    },

    methods: {
      selectPage (page) {
        this.currentPage = page
      },
      getAllOrderForms (currentPage) {
        const payload = {
          currentPage,
          userId: this.getUserId
        }
        this.$store.dispatch('order-form/fetchOrderForms', payload).then((response) => {
          if (!response) { this.$router.push('/unauthorized') }
          if (response) {
            this.orderForms = response.orderForms
            this.totalOrderForms = response.totalOrderForms
            this.currentPage = response.currentPage
            this.loading = false
          }
        })
      },
      selectOrderForm (orderFormId) {
        const self = this
        this.loadingPreview = true
        this.selectedOrderFormId = orderFormId
        this.pdfOptions.filename = `order-form_${ this.selectedOrderFormId }`
        const payload = {
          orderFormId,
          userId: this.getUserId
        }

        if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
          this.pdfOptions.html2canvas.scale = 3
        } else {
          this.pdfOptions.html2canvas.scale = 4
        }

        this.$store.dispatch('order-form/fetchOrderFormById', payload)
          .then((orderForm) => {
            this.selectedOrderForm = orderForm
          })
          .then(() => {
            setTimeout(() => {
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
                      setTimeout(() => {
                        self.$root.$emit('generatePdfPreview')
                        self.loadingPreview = false
                        self.selectedOrderFormId = ''
                      }, 200)
                    })
                })
            }, 400)
          })
      },
      downloadOrderForm (orderFormId) {
        const self = this
        this.loadingDownload = true
        this.selectedOrderFormId = orderFormId
        this.pdfOptions.filename = `order-form_${ this.selectedOrderFormId }`
        const payload = {
          orderFormId,
          userId: this.getUserId
        }

        if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
          this.pdfOptions.html2canvas.scale = 3
        } else {
          this.pdfOptions.html2canvas.scale = 4
        }

        this.$store.dispatch('order-form/fetchOrderFormById', payload)
          .then((orderForm) => {
            this.selectedOrderForm = orderForm
          })
          .then(() => {
            setTimeout(() => {
              this.pdfPage1 = document.getElementById('pdf-page-1').innerHTML
              this.pdfPage2 = document.getElementById('pdf-page-2').innerHTML
              html2pdf().set(this.pdfOptions).from(this.pdfPage1).toPdf().from(this.pdfPage2)
                .toContainer().toCanvas().toPdf().save()
                .then(() => {
                  self.loadingDownload = false
                  self.selectedOrderFormId = ''
                })
            }, 400)
          })
      },
      externalOrderForm (orderFormId) {
        this.loadingExternal = true
        this.selectedOrderFormId = orderFormId
        this.pdfOptions.filename = `order-form_${ this.selectedOrderFormId }`
        const payload = {
          orderFormId,
          userId: this.getUserId
        }

        if (/Android|iPhone|iPad/i.test(navigator.userAgent)) {
          this.pdfOptions.html2canvas.scale = 3
        } else {
          this.pdfOptions.html2canvas.scale = 4
        }

        this.$store.dispatch('order-form/fetchOrderFormById', payload)
          .then((orderForm) => {
            this.selectedOrderForm = orderForm
          })
          .then(() => {
            setTimeout(() => {
              this.pdfPage1 = document.getElementById('pdf-page-1').innerHTML
              this.pdfPage2 = document.getElementById('pdf-page-2').innerHTML
              html2pdf().set(this.pdfOptions).from(this.pdfPage1).toPdf().from(this.pdfPage2)
                .toContainer().toCanvas().toPdf().get('pdf')
                .then((pdf2) => {
                  const pdfBlobURL = pdf2.output('bloburl')
                  this.loadingExternal = false
                  window.open(pdfBlobURL, '_blank')
                })
            }, 400)
          })
      }
    }
  }
</script>
