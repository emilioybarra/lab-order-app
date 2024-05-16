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
  standardSetup: false,
  standardSetupPlus: false,
  premiumSetupPlus: false,
  stateOrthodontistNameOnInvoice: false,
  isShippingAddress: false,
  shippingAddress: '',
  shippingPostalcodeTown: ''
})

export const getters = {
  getPractice (state) {
    return state.practice || localStorage.getItem('lof__invoice-address__practice') || ''
  },
  getOrthodontist (state) {
    return state.orthodontist || localStorage.getItem('lof__invoice-address__orthodontist') || ''
  },
  getAddress (state) {
    return state.address || localStorage.getItem('lof__invoice-address__address') || ''
  },
  getPostalcodeTown (state) {
    return state.postalcodeTown || localStorage.getItem('lof__invoice-address__postalcodeTown') || ''
  },
  getTelephone (state) {
    return state.telephone || localStorage.getItem('lof__invoice-address__telephone') || ''
  },
  getFax (state) {
    return state.fax || localStorage.getItem('lof__invoice-address__fax') || ''
  },
  getEmail (state) {
    return state.email || localStorage.getItem('lof__invoice-address__email') || ''
  },
  getUstId (state) {
    return state.ustId || localStorage.getItem('lof__invoice-address__ustId') || ''
  },
  getPatientLastName (state) {
    return state.patientLastName || localStorage.getItem('lof__invoice-address__patientLastName') || ''
  },
  getPatientFirstName (state) {
    return state.patientFirstName || localStorage.getItem('lof__invoice-address__patientFirstName') || ''
  },
  getPatientNumber (state) {
    return state.patientNumber || localStorage.getItem('lof__invoice-address__patientNumber') || ''
  },
  getAppointmentDate (state) {
    return state.appointmentDate || localStorage.getItem('lof__invoice-address__appointmentDate') || ''
  },
  getStandardSetup (state) {
    return state.standardSetup || JSON.parse(localStorage.getItem('lof__invoice-address__standardSetup')) || false
  },
  getStandardSetupPlus (state) {
    return state.standardSetupPlus || JSON.parse(localStorage.getItem('lof__invoice-address__standardSetupPlus')) || false
  },
  getPremiumSetupPlus (state) {
    return state.premiumSetupPlus || JSON.parse(localStorage.getItem('lof__invoice-address__premiumSetupPlus')) || false
  },
  getStateOrthodontistNameOnInvoice (state) {
    return state.stateOrthodontistNameOnInvoice || JSON.parse(localStorage.getItem('lof__invoice-address__stateOrthodontistNameOnInvoice')) || false
  },
  getIsShippingAddress (state) {
    return state.isShippingAddress || JSON.parse(localStorage.getItem('lof__invoice-address__isShippingAddress')) || false
  },
  getShippingAddress (state) {
    return state.shippingAddress || localStorage.getItem('lof__invoice-address__shippingAddress') || ''
  },
  getShippingPostalcodeTown (state) {
    return state.shippingPostalcodeTown || localStorage.getItem('lof__invoice-address__shippingPostalcodeTown') || ''
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
  setStandardSetup (state, standardSetup) {
    state.standardSetup = standardSetup
    localStorage.setItem('lof__invoice-address__standardSetup', standardSetup)
  },
  setStandardSetupPlus (state, standardSetupPlus) {
    state.standardSetupPlus = standardSetupPlus
    localStorage.setItem('lof__invoice-address__standardSetupPlus', standardSetupPlus)
  },
  setPremiumSetupPlus (state, premiumSetupPlus) {
    state.premiumSetupPlus = premiumSetupPlus
    localStorage.setItem('lof__invoice-address__premiumSetupPlus', premiumSetupPlus)
  },
  setStateOrthodontistNameOnInvoice (state, stateOrthodontistNameOnInvoice) {
    state.stateOrthodontistNameOnInvoice = stateOrthodontistNameOnInvoice
    localStorage.setItem('lof__invoice-address__stateOrthodontistNameOnInvoice', stateOrthodontistNameOnInvoice)
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
  },
  resetInvoiceAddressState (state) {
    state.practice = ''
    state.orthodontist = ''
    state.address = ''
    state.postalcodeTown = ''
    state.telephone = ''
    state.fax = ''
    state.email = ''
    state.ustId = ''
    state.patientLastName = ''
    state.patientFirstName = ''
    state.patientNumber = ''
    state.appointmentDate = ''
    state.standardSetup = false
    state.standardSetupPlus = false
    state.premiumSetupPlus = false
    state.stateOrthodontistNameOnInvoice = false
    state.isShippingAddress = false
    state.shippingAddress = ''
    state.shippingPostalcodeTown = ''

    Object.keys(localStorage).map((key) => {
      if (/(lof__invoice-address__)(.*)/.test(key)) {
        localStorage.removeItem(key)
      }
    })
  }
}

export const actions = {
  async fetchTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    const { invoiceAddressTemplate } = await this.$axios.$get(`/api/templates/invoice-address/${ templateId }`, {
      params: { userId }
    }).catch((error) => {
      if (error.response.status === 401) {
        commit('auth/setAuth', { user: {}, loggedIn: false }, { root: true })
        return false
      }

      const notification = {
        message: 'error',
        variant: 'danger'
      }
      commit('common/setNotifications', notification, { root: true })
    })

    const {
      invoiceAddressTemplate: {
        practice,
        orthodontist,
        address,
        postalcodeTown,
        telephone,
        fax,
        email,
        ustId,
        standardSetup,
        standardSetupPlus,
        premiumSetupPlus,
        stateOrthodontistNameOnInvoice,
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
    commit('setStandardSetup', standardSetup)
    commit('setStandardSetupPlus', standardSetupPlus)
    commit('setPremiumSetupPlus', premiumSetupPlus)
    commit('setStateOrthodontistNameOnInvoice', stateOrthodontistNameOnInvoice)
    commit('setIsShippingAddress', isShippingAddress)
    commit('setShippingAddress', shippingAddress)
    commit('setShippingPostalcodeTown', shippingPostalcodeTown)
    return true
  },
  saveTemplateData ({ getters, commit }, payload) {
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
      getStandardSetup: standardSetup,
      getStandardSetupPlus: standardSetupPlus,
      getPremiumSetupPlus: premiumSetupPlus,
      getStateOrthodontistNameOnInvoice: stateOrthodontistNameOnInvoice,
      getIsShippingAddress: isShippingAddress,
      getShippingAddress: shippingAddress,
      getShippingPostalcodeTown: shippingPostalcodeTown
    } = getters
    const templateData = {
      title: templateTitle,
      invoiceAddressTemplate: {
        practice,
        orthodontist,
        address,
        postalcodeTown,
        telephone,
        fax,
        email,
        ustId,
        standardSetup,
        standardSetupPlus,
        premiumSetupPlus,
        stateOrthodontistNameOnInvoice,
        isShippingAddress,
        shippingAddress,
        shippingPostalcodeTown
      }
    }

    return this.$axios.$post('/api/templates/invoice-address', { userId, templateData })
      .then((response) => {
        if (response.status === 201) {
          const notification = {
            message: 'savedTemplate',
            variant: 'success'
          }
          commit('common/setNotifications', notification, { root: true })
          return true
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          commit('auth/setAuth', { user: {}, loggedIn: false }, { root: true })
          return false
        }

        const notification = {
          message: 'error',
          variant: 'danger'
        }
        commit('common/setNotifications', notification, { root: true })
      })
  }
}
