export const state = () => ({
})

export const getters = {
}

export const mutations = {
}

export const actions = {
  async fetchOrderForms (context, payload) {
    const { currentPage, userId } = payload
    return await this.$axios.$get('/api/order-forms', {
      params: {
        page: currentPage,
        userId
      }
    })
  },
  saveOrderForm ({ rootGetters }, userId) {
    console.log(rootGetters)
    const {
      'invoice-address/getPractice': getPractice,
      'invoice-address/getOrthodontist': getOrthodontist,
      'invoice-address/getAddress': getAddress,
      'invoice-address/getPostalcodeTown': getPostalcodeTown,
      'invoice-address/getTelephone': getTelephone,
      'invoice-address/getFax': getFax,
      'invoice-address/getEmail': getEmail,
      'invoice-address/getUstId': getUstId,
      'invoice-address/getStateOrthodontistNameOnInvoice': getStateOrthodontistNameOnInvoice,
      'invoice-address/getIsShippingAddress': getIsShippingAddress,
      'invoice-address/getShippingAddress': getShippingAddress,
      'invoice-address/getShippingPostalcodeTown': getShippingPostalcodeTown,

      'invoice-address/getPatientLastName': getPatientLastName,
      'invoice-address/getPatientFirstName': getPatientFirstName,
      'invoice-address/getPatientNumber': getPatientNumber,
      'invoice-address/getAppointmentDate': getAppointmentDate,

      'upper-teeth/getImageData': getUpperImageData,
      'upper-teeth/getOnlySetup': getUpperOnlySetup,
      'upper-teeth/getBoltonDiscrepancy': getUpperBoltonDiscrepancy,
      'upper-teeth/getResolveCrowding': getUpperResolveCrowding,
      'upper-teeth/getRcMm': getUpperRcMm,
      'upper-teeth/getRcWhere': getUpperRcWhere,
      'upper-teeth/getReduceOverjet': getUpperReduceOverjet,
      'upper-teeth/getRoMm': getUpperRoMm,
      'upper-teeth/getRoWhere': getUpperRoWhere,

      'lower-teeth/getImageData': getLowerImageData,
      'lower-teeth/getOnlySetup': getLowerOnlySetup,
      'lower-teeth/getBoltonDiscrepancy': getLowerBoltonDiscrepancy,
      'lower-teeth/getResolveCrowding': getLowerResolveCrowding,
      'lower-teeth/getRcMm': getLowerRcMm,
      'lower-teeth/getRcWhere': getLowerRcWhere,
      'lower-teeth/getReduceOverjet': getLowerReduceOverjet,
      'lower-teeth/getRoMm': getLowerRoMm,
      'lower-teeth/getRoWhere': getLowerRoWhere
    } = rootGetters

    const prepareOrderFormData = {
      userId,
      invoiceAddress: {
        practice: getPractice,
        orthodontist: getOrthodontist,
        address: getAddress,
        postalCodeTown: getPostalcodeTown,
        telephone: getTelephone,
        fax: getFax,
        email: getEmail,
        idVat: getUstId,
        stateOrthodontistName: getStateOrthodontistNameOnInvoice,
        isShippingAddress: getIsShippingAddress,
        shippingAddress: getShippingAddress,
        shippingPostalcodeTown: getShippingPostalcodeTown
      },
      patient: {
        lastName: getPatientLastName,
        firstName: getPatientFirstName,
        number: getPatientNumber,
        dateOfBonding: getAppointmentDate
      },
      upperTeeth: {
        imageData: getUpperImageData,
        onlySetup: getUpperOnlySetup,
        boltonDiscrepancy: getUpperBoltonDiscrepancy,
        resolveCrowding: getUpperResolveCrowding,
        rcMm: getUpperRcMm,
        rcWhere: getUpperRcWhere,
        reduceOverjet: getUpperReduceOverjet,
        roMm: getUpperRoMm,
        roWhere: getUpperRoWhere
      },
      lowerTeeth: {
        imageData: getLowerImageData,
        onlySetup: getLowerOnlySetup,
        boltonDiscrepancy: getLowerBoltonDiscrepancy,
        resolveCrowding: getLowerResolveCrowding,
        rcMm: getLowerRcMm,
        rcWhere: getLowerRcWhere,
        reduceOverjet: getLowerReduceOverjet,
        roMm: getLowerRoMm,
        roWhere: getLowerRoWhere
      }
    }

    console.log(prepareOrderFormData)

    this.$axios.$post('/api/order-forms/order-form', prepareOrderFormData)
      .then((result) => {
        console.log(result)
      })
  }
}
