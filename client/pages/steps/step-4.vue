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
        <pdf ref="pdf" />
      </div>
    </template>
  </page>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'step-4',

    data () {
      return {
        checked: true,
        orderFormData: {}
      }
    },

    computed: {
      ...mapGetters('upper-teeth', {
        getUpperImageData: 'getImageData',
        getUpperOnlySetup: 'getOnlySetup',
        getUpperBoltonDiscrepancy: 'getBoltonDiscrepancy',
        getUpperResolveCrowding: 'getResolveCrowding',
        getUpperRcMm: 'getRcMm',
        getUpperRcWhere: 'getRcWhere',
        getUpperReduceOverjet: 'getReduceOverjet',
        getUpperRoMm: 'getRoMm',
        getUpperRoWhere: 'getRoWhere'
      }),
      ...mapGetters('lower-teeth', {
        getLowerImageData: 'getImageData',
        getLowerOnlySetup: 'getOnlySetup',
        getLowerBoltonDiscrepancy: 'getBoltonDiscrepancy',
        getLowerResolveCrowding: 'getResolveCrowding',
        getLowerRcMm: 'getRcMm',
        getLowerRcWhere: 'getRcWhere',
        getLowerReduceOverjet: 'getReduceOverjet',
        getLowerRoMm: 'getRoMm',
        getLowerRoWhere: 'getRoWhere'
      }),
      ...mapGetters('invoice-address', [
        'getPractice',
        'getOrthodontist',
        'getAddress',
        'getPostalcodeTown',
        'getTelephone',
        'getFax',
        'getEmail',
        'getUstId',
        'getPatientLastName',
        'getPatientFirstName',
        'getPatientNumber',
        'getAppointmentDate',
        'getStateOrthodontistNameOnInvoice',
        'getIsShippingAddress',
        'getShippingAddress',
        'getShippingPostalcodeTown'
      ])
    },

    methods: {
      generatePdf () {
        this.$refs.pdf.generateReport()
      },
      saveOrderForm () {
        this.$store.dispatch('order-form/saveOrderForm', this.$auth.$state.user._id)
      }
    }
  }
</script>
