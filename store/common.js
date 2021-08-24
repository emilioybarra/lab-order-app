import cookies from 'vue-cookies'

export const state = () => ({
  template: '',
  acceptTermsAndConditions: false,
  pdfSrcPage1: '',
  pdfSrcPage2: '',
  notifications: []
})

export const getters = {
  getTemplate (state) {
    return state.template
  },
  getTermsAndConditionsAcceptance: () => () => {
    return cookies.isKey('lof__termsAndConditions') ? cookies.get('lof__termsAndConditions').acceptTermsAndConditions : false
  },
  getPdfSrcPage1: state => () => {
    return state.pdfSrcPage1
  },
  getPdfSrcPage2: state => () => {
    return state.pdfSrcPage2
  },
  getNotifications (state) {
    return state.notifications
  }
}

export const mutations = {
  setTemplate (state, template) {
    state.template = template
  },
  setTermsAndConditionsAcceptance (state, accept) {
    state.acceptTermsAndConditions = accept
  },
  setPdfSrcPage1 (state, src) {
    state.pdfSrcPage1 = src
  },
  setPdfSrcPage2 (state, src) {
    state.pdfSrcPage2 = src
  },
  setNotifications (state, notification) {
    state.notifications.push(notification)
  },
  removeNotifications (state) {
    state.notifications.shift()
  },
  resetState (state) {
    state.template = ''
    state.acceptTermsAndConditions = false
    state.pdfSrcPage1 = ''
    state.pdfSrcPage2 = ''
    state.notifications = []
    localStorage.removeItem('lof__acceptTermsAndConditions')
  }
}
