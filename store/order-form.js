import { serialize } from 'object-to-formdata'

const dataURLToBlob = (dataURL) => {
  const parts = dataURL.split(';base64,')
  const contentType = parts[0].split(':')[1]
  const raw = window.atob(parts[1])
  const uInt8Array = new Uint8Array(raw.length)

  for (let i = 0; i < raw.length; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }

  return new Blob([ uInt8Array ], { type: contentType })
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
  async fetchOrderFormById (context, payload) {
    const { orderFormId, userId } = payload
    const config = userId ? { params: { userId } } : {}
    return await this.$axios.$get(`/api/order-forms/${ orderFormId }`, config).then((response) => {
      if (!response) { throw new Error('Invalid order form ID') }
      const prepareOrderForm = { ...response }

      if (prepareOrderForm.upperTeeth.imageData.edited) {
        const base64Data = Buffer.from(response.upperTeeth.imageData.data, 'binary').toString('base64')
        const dataURL = `data:${ response.upperTeeth.imageData.contentType };base64,${ base64Data }`
        prepareOrderForm.upperTeeth.imageData.dataURL = dataURL
      }

      if (prepareOrderForm.lowerTeeth.imageData.edited) {
        const base64Data = Buffer.from(response.lowerTeeth.imageData.data, 'binary').toString('base64')
        const dataURL = `data:${ response.lowerTeeth.imageData.contentType };base64,${ base64Data }`
        prepareOrderForm.lowerTeeth.imageData.dataURL = dataURL
      }

      return prepareOrderForm
    })
      .catch(() => {
        return null
      })
  },
  saveOrderForm (ctx, payload) {
    const { rootGetters, commit } = ctx
    const { userId, orderFormLanguage } = payload
    const formData = new FormData()

    const {
      'invoice-address/getPractice': getPractice,
      'invoice-address/getOrthodontist': getOrthodontist,
      'invoice-address/getAddress': getAddress,
      'invoice-address/getPostalcodeTown': getPostalcodeTown,
      'invoice-address/getTelephone': getTelephone,
      'invoice-address/getFax': getFax,
      'invoice-address/getEmail': getEmail,
      'invoice-address/getUstId': getUstId,
      'invoice-address/getStandardSetup': getStandardSetup,
      'invoice-address/getStandardSetupPlus': getStandardSetupPlus,
      'invoice-address/getPremiumSetupPlus': getPremiumSetupPlus,
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
      'upper-teeth/getNotesStrippingMm': getUpperNotesStrippingMm,
      'upper-teeth/getNotesStrippingWhere': getUpperNotesStrippingWhere,
      'upper-teeth/getNotesBoltonDiscrepancy': getUpperNotesBoltonDiscrepancy,
      'upper-teeth/getNotesBox': getUpperNotesBox,
      'upper-teeth/getArchwireSizes': getUpperArchwireSizes,

      'notes/getThreeDSetup': getThreeDSetup,
      'notes/getTpa': getTpa,
      'notes/getHerbst': getHerbst,
      'notes/getBondableHGTube': getBondableHGTube,
      'notes/getBondableHGTubeWithShell': getBondableHGTubeWithShell,
      'notes/getSuperpositionPhoto': getSuperpositionPhoto,
      'notes/getDlcSteelWire': getDlcSteelWire,
      'notes/getUpperJaw': getUpperJaw,
      'notes/getLowerJaw': getLowerJaw,
      'notes/getNotes1': getNotes1,
      'notes/getNoCorrectionOfBite': getNoCorrectionOfBite,
      'notes/getNotes2': getNotes2,
      'notes/getNonTransparent': getNonTransparent,
      'notes/getTrayTrimmed33': getTrayTrimmed33,
      'notes/getTransparent': getTransparent,
      'notes/getLeft2CanineMolar': getLeft2CanineMolar,
      'notes/getLeft3CanineMolar': getLeft3CanineMolar,
      'notes/getRight2CanineMolar': getRight2CanineMolar,
      'notes/getRight3CanineMolar': getRight3CanineMolar,

      'lower-teeth/getImageData': getLowerImageData,
      'lower-teeth/getOnlySetup': getLowerOnlySetup,
      'lower-teeth/getBoltonDiscrepancy': getLowerBoltonDiscrepancy,
      'lower-teeth/getResolveCrowding': getLowerResolveCrowding,
      'lower-teeth/getRcMm': getLowerRcMm,
      'lower-teeth/getRcWhere': getLowerRcWhere,
      'lower-teeth/getReduceOverjet': getLowerReduceOverjet,
      'lower-teeth/getRoMm': getLowerRoMm,
      'lower-teeth/getRoWhere': getLowerRoWhere,
      'lower-teeth/getNotesStrippingMm': getLowerNotesStrippingMm,
      'lower-teeth/getNotesStrippingWhere': getLowerNotesStrippingWhere,
      'lower-teeth/getNotesBoltonDiscrepancy': getLowerNotesBoltonDiscrepancy,
      'lower-teeth/getNotesBox': getLowerNotesBox,
      'lower-teeth/getArchwireSizes': getLowerArchwireSizes
    } = rootGetters

    const prepareOrderFormObject = {
      userId,
      orderFormLanguage,
      invoiceAddress: {
        practice: getPractice,
        orthodontist: getOrthodontist,
        address: getAddress,
        postalCodeTown: getPostalcodeTown,
        telephone: getTelephone,
        fax: getFax,
        email: getEmail,
        idVat: getUstId,
        standardSetup: getStandardSetup,
        standardSetupPlus: getStandardSetupPlus,
        premiumSetupPlus: getPremiumSetupPlus,
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
        onlySetup: getUpperOnlySetup,
        boltonDiscrepancy: getUpperBoltonDiscrepancy,
        resolveCrowding: getUpperResolveCrowding,
        rcMm: getUpperRcMm,
        rcWhere: getUpperRcWhere,
        reduceOverjet: getUpperReduceOverjet,
        roMm: getUpperRoMm,
        roWhere: getUpperRoWhere,
        notesStrippingMm: getUpperNotesStrippingMm,
        notesStrippingWhere: getUpperNotesStrippingWhere,
        notesBoltonDiscrepancy: getUpperNotesBoltonDiscrepancy,
        notesBox: getUpperNotesBox,
        archwireSizes: getUpperArchwireSizes
      },
      notes: {
        threeDSetup: getThreeDSetup,
        tpa: getTpa,
        herbst: getHerbst,
        bondableHGTube: getBondableHGTube,
        bondableHGTubeWithShell: getBondableHGTubeWithShell,
        superpositionPhoto: getSuperpositionPhoto,
        dlcSteelWire: getDlcSteelWire,
        upperJaw: getUpperJaw,
        lowerJaw: getLowerJaw,
        notes1: getNotes1,
        noCorrectionOfBite: getNoCorrectionOfBite,
        notes2: getNotes2,
        nonTransparent: getNonTransparent,
        trayTrimmed33: getTrayTrimmed33,
        transparent: getTransparent,
        right2: { ...getRight2CanineMolar },
        right3: { ...getRight3CanineMolar },
        left2: { ...getLeft2CanineMolar },
        left3: { ...getLeft3CanineMolar }
      },
      lowerTeeth: {
        onlySetup: getLowerOnlySetup,
        boltonDiscrepancy: getLowerBoltonDiscrepancy,
        resolveCrowding: getLowerResolveCrowding,
        rcMm: getLowerRcMm,
        rcWhere: getLowerRcWhere,
        reduceOverjet: getLowerReduceOverjet,
        roMm: getLowerRoMm,
        roWhere: getLowerRoWhere,
        notesStrippingMm: getLowerNotesStrippingMm,
        notesStrippingWhere: getLowerNotesStrippingWhere,
        notesBoltonDiscrepancy: getLowerNotesBoltonDiscrepancy,
        notesBox: getLowerNotesBox,
        archwireSizes: getLowerArchwireSizes
      }
    }

    if (getUpperImageData) {
      const upperTeethImageBlob = dataURLToBlob(getUpperImageData)
      const upperTeethImageFile = new File([ upperTeethImageBlob ], 'upperTeethImage', { type: upperTeethImageBlob.type })
      formData.append('upperTeethImage', upperTeethImageFile)
    }

    if (getLowerImageData) {
      const lowerTeethImageBlob = dataURLToBlob(getLowerImageData)
      const lowerTeethImageFile = new File([ lowerTeethImageBlob ], 'lowerTeethImage', { type: lowerTeethImageBlob.type })
      formData.append('lowerTeethImage', lowerTeethImageFile)
    }

    const prepareOrderFormData = serialize(prepareOrderFormObject, {}, formData)
    const config = {
      header: { 'Content-Type': 'multipart/form-data' }
    }

    return this.$axios.$post('/api/order-forms/order-form', prepareOrderFormData, config)
      .then((response) => {
        if (response.status === 201) {
          const notification = {
            message: 'savedOrderForm',
            variant: 'success'
          }
          commit('common/setNotifications', notification, { root: true })
          commit('invoice-address/resetInvoiceAddressState', null, { root: true })
          commit('upper-teeth/resetUpperTeethState', null, { root: true })
          commit('notes/resetNotesState', null, { root: true })
          commit('lower-teeth/resetLowerTeethState', null, { root: true })
          return true
        }
      })
      .catch(() => {
        const notification = {
          message: 'error',
          variant: 'danger'
        }
        commit('common/setNotifications', notification, { root: true })
        commit('invoice-address/resetInvoiceAddressState', null, { root: true })
        commit('upper-teeth/resetUpperTeethState', null, { root: true })
        commit('notes/resetNotesState', null, { root: true })
        commit('lower-teeth/resetLowerTeethState', null, { root: true })
        return false
      })
  }
}
