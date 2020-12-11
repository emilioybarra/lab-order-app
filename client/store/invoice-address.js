export const state = () => ({
  practice: '',
  orthodontist: '',
  address: '',
  postalcodeTown: '',
  telephone: '',
  fax: '',
  email: '',
  ustId: '',
  patientLastName: '',
  patientFirstName: '',
  patientNumber: '',
  appointmentDate: '',
  orthodontistInvoice: false,
  isShippingAddress: false,
  shippingAddress: '',
  shippingPostalcodeTown: ''
})

export const getters = {
  getPractice (state) {
    return state.practice || localStorage.getItem('lof__invoice-address__practice')
  },
  getOrthodontist (state) {
    return state.orthodontist || localStorage.getItem('lof__invoice-address__orthodontist')
  },
  getAddress (state) {
    return state.address || localStorage.getItem('lof__invoice-address__address')
  },
  getPostalcodeTown (state) {
    return state.postalcodeTown || localStorage.getItem('lof__invoice-address__postalcodeTown')
  },
  getTelephone (state) {
    return state.telephone || localStorage.getItem('lof__invoice-address__telephone')
  },
  getFax (state) {
    return state.fax || localStorage.getItem('lof__invoice-address__fax')
  },
  getEmail (state) {
    return state.email || localStorage.getItem('lof__invoice-address__email')
  },
  getUstId (state) {
    return state.ustId || localStorage.getItem('lof__invoice-address__ustId')
  },
  getPatientLastName (state) {
    return state.patientLastName || localStorage.getItem('lof__invoice-address__patientLastName')
  },
  getPatientFirstName (state) {
    return state.patientFirstName || localStorage.getItem('lof__invoice-address__patientFirstName')
  },
  getPatientNumber (state) {
    return state.patientNumber || localStorage.getItem('lof__invoice-address__patientNumber')
  },
  getAppointmentDate (state) {
    return state.appointmentDate || localStorage.getItem('lof__invoice-address__appointmentDate')
  },
  getOrthodontistInvoice (state) {
    return state.orthodontistInvoice || JSON.parse(localStorage.getItem('lof__invoice-address__orthodontistInvoice'))
  },
  getIsShippingAddress (state) {
    return state.isShippingAddress || JSON.parse(localStorage.getItem('lof__invoice-address__isShippingAddress'))
  },
  getShippingAddress (state) {
    return state.shippingAddress || localStorage.getItem('lof__invoice-address__shippingAddress')
  },
  getShippingPostalcodeTown (state) {
    return state.shippingPostalcodeTown || localStorage.getItem('lof__invoice-address__shippingPostalcodeTown')
  }
}

export const mutations = {
  setPractice (state, practice) {
    state.practice = practice
    localStorage.setItem('lof__invoice-address__practice', practice)
  },
  setOrthodontist (state, orthodontist) {
    state.orthodontist = orthodontist
    localStorage.setItem('lof__invoice-address__orthodontist', orthodontist)
  },
  setAddress (state, address) {
    state.address = address
    localStorage.setItem('lof__invoice-address__address', address)
  },
  setPostalcodeTown (state, postalcodeTown) {
    state.postalcodeTown = postalcodeTown
    localStorage.setItem('lof__invoice-address__postalcodeTown', postalcodeTown)
  },
  setTelephone (state, telephone) {
    state.telephone = telephone
    localStorage.setItem('lof__invoice-address__telephone', telephone)
  },
  setFax (state, fax) {
    state.fax = fax
    localStorage.setItem('lof__invoice-address__fax', fax)
  },
  setEmail (state, email) {
    state.email = email
    localStorage.setItem('lof__invoice-address__email', email)
  },
  setUstId (state, ustId) {
    state.ustId = ustId
    localStorage.setItem('lof__invoice-address__ustId', ustId)
  },
  setPatientLastName (state, patientLastName) {
    state.patientLastName = patientLastName
    localStorage.setItem('lof__invoice-address__patientLastName', patientLastName)
  },
  setPatientFirstName (state, patientFirstName) {
    state.patientFirstName = patientFirstName
    localStorage.setItem('lof__invoice-address__patientFirstName', patientFirstName)
  },
  setPatientNumber (state, patientNumber) {
    state.patientNumber = patientNumber
    localStorage.setItem('lof__invoice-address__patientNumber', patientNumber)
  },
  setAppointmentDate (state, appointmentDate) {
    state.appointmentDate = appointmentDate
    localStorage.setItem('lof__invoice-address__appointmentDate', appointmentDate)
  },
  setOrthodontistInvoice (state, orthodontistInvoice) {
    state.orthodontistInvoice = orthodontistInvoice
    localStorage.setItem('lof__invoice-address__orthodontistInvoice', orthodontistInvoice)
  },
  setIsShippingAddress (state, isShippingAddress) {
    state.isShippingAddress = isShippingAddress
    localStorage.setItem('lof__invoice-address__isShippingAddress', isShippingAddress)
  },
  setShippingAddress (state, shippingAddress) {
    state.shippingAddress = shippingAddress
    localStorage.setItem('lof__invoice-address__shippingAddress', shippingAddress)
  },
  setShippingPostalcodeTown (state, shippingPostalcodeTown) {
    state.shippingPostalcodeTown = shippingPostalcodeTown
    localStorage.setItem('lof__invoice-address__shippingPostalcodeTown', shippingPostalcodeTown)
  }
}

export const actions = {
  async fetchTemplates (context, payload) {
    const { currentPage, userId } = payload
    return await this.$axios.$get('/api/templates/invoice-address', {
      params: {
        page: currentPage,
        userId
      }
    })
  },
  async fetchTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    const { invoiceAddressTemplate } = await this.$axios.$get(`/api/templates/invoice-address/${ templateId }`, {
      params: { userId }
    })
    const {
      invoiceAddressTemplateData: {
        practice,
        orthodontist,
        address,
        postalcodeTown,
        telephone,
        fax,
        email,
        ustId,
        orthodontistInvoice,
        isShippingAddress,
        shippingAddress,
        shippingPostalcodeTown
      }
    } = invoiceAddressTemplate

    commit('setPractice', practice)
    commit('setOrthodontist', orthodontist)
    commit('setAddress', address)
    commit('setPostalcodeTown', postalcodeTown)
    commit('setTelephone', telephone)
    commit('setFax', fax)
    commit('setEmail', email)
    commit('setUstId', ustId)
    commit('setOrthodontistInvoice', orthodontistInvoice)
    commit('setIsShippingAddress', isShippingAddress)
    commit('setShippingAddress', shippingAddress)
    commit('setShippingPostalcodeTown', shippingPostalcodeTown)
    return true
  },
  saveTemplateData ({ getters }, payload) {
    const { templateTitle, userId } = payload
    const {
      getPractice: practice,
      getOrthodontist: orthodontist,
      getAddress: address,
      getPostalcodeTown: postalcodeTown,
      getTelephone: telephone,
      getFax: fax,
      getEmail: email,
      getUstId: ustId,
      getOrthodontistInvoice: orthodontistInvoice,
      getIsShippingAddress: isShippingAddress,
      getShippingAddress: shippingAddress,
      getShippingPostalcodeTown: shippingPostalcodeTown
    } = getters
    const templateData = {
      title: templateTitle,
      invoiceAddressTemplateData: {
        practice,
        orthodontist,
        address,
        postalcodeTown,
        telephone,
        fax,
        email,
        ustId,
        orthodontistInvoice,
        isShippingAddress,
        shippingAddress,
        shippingPostalcodeTown
      }
    }
    const prepareBody = {
      userId,
      templateData
    }

    this.$axios.$post('/api/templates/invoice-address', prepareBody)
      .then((result) => {
        console.log(result)
      })
  },
  async deleteTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    return await this.$axios.$delete(`/api/templates/invoice-address/${ templateId }`, {
      params: { userId }
    })
      .then((result) => {
        return result.status === 204
      })
      .catch(() => {
        return false
      })
  }
}
