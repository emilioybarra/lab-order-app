import axios from 'axios'

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
    return state.practice
  },
  getOrthodontist (state) {
    return state.orthodontist
  },
  getAddress (state) {
    return state.address
  },
  getPostalcodeTown (state) {
    return state.postalcodeTown
  },
  getTelephone (state) {
    return state.telephone
  },
  getFax (state) {
    return state.fax
  },
  getEmail (state) {
    return state.email
  },
  getUstId (state) {
    return state.ustId
  },
  getPatientLastName (state) {
    return state.patientLastName
  },
  getPatientFirstName (state) {
    return state.patientFirstName
  },
  getPatientNumber (state) {
    return state.patientNumber
  },
  getAppointmentDate (state) {
    return state.appointmentDate
  },
  getOrthodontistInvoice (state) {
    return state.orthodontistInvoice
  },
  getIsShippingAddress (state) {
    return state.isShippingAddress
  },
  getShippingAddress (state) {
    return state.shippingAddress
  },
  getShippingPostalcodeTown (state) {
    return state.shippingPostalcodeTown
  }
}

export const mutations = {
  setPractice (state, practice) {
    state.practice = practice
  },
  setOrthodontist (state, orthodontist) {
    state.orthodontist = orthodontist
  },
  setAddress (state, address) {
    state.address = address
  },
  setPostalcodeTown (state, postalcodeTown) {
    state.postalcodeTown = postalcodeTown
  },
  setTelephone (state, telephone) {
    state.telephone = telephone
  },
  setFax (state, fax) {
    state.fax = fax
  },
  setEmail (state, email) {
    state.email = email
  },
  setUstId (state, ustId) {
    state.ustId = ustId
  },
  setPatientLastName (state, patientLastName) {
    state.patientLastName = patientLastName
  },
  setPatientFirstName (state, patientFirstName) {
    state.patientFirstName = patientFirstName
  },
  setPatientNumber (state, patientNumber) {
    state.patientNumber = patientNumber
  },
  setAppointmentDate (state, appointmentDate) {
    state.appointmentDate = appointmentDate
  },
  setOrthodontistInvoice (state, orthodontistInvoice) {
    state.orthodontistInvoice = orthodontistInvoice
  },
  setIsShippingAddress (state, isShippingAddress) {
    state.isShippingAddress = isShippingAddress
  },
  setShippingAddress (state, shippingAddress) {
    state.shippingAddress = shippingAddress
  },
  setShippingPostalcodeTown (state, shippingPostalcodeTown) {
    state.shippingPostalcodeTown = shippingPostalcodeTown
  }
}

export const actions = {
  fetchTemplates (context, page) {
    return axios.get(`http://${ window.location.hostname }:5000/api/templates/invoice-address?page=${ page }`)
      .then((result) => {
        console.log(result)
        return result.data
      })
  },
  fetchTemplateById ({ commit }, templateId) {
    return axios.get(`http://${ window.location.hostname }:5000/api/templates/invoice-address/${ templateId }`)
      .then((result) => {
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
        } = result.data.invoiceAddressTemplate

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
      })
  },
  saveTemplateData ({ getters }, templateTitle) {
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

    axios.post(`http://${ window.location.hostname }:5000/api/templates/invoice-address`, templateData)
      .then((result) => {
        console.log(result)
      })
  },
  deleteTemplateById ({ commit }, templateId) {
    return axios.delete(`http://${ window.location.hostname }:5000/api/templates/invoice-address/${ templateId }`)
      .then((result) => {
        console.log(result)
        return result.status === 204
      })
  }
}
