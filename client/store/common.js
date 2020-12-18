export const state = () => ({
  template: '',
  acceptTermsAndConditions: false
})

export const getters = {
  getTemplate (state) {
    return state.template
  },
  getTermsAndConditionsAcceptance (state) {
    return state.acceptTermsAndConditions
  }
}

export const mutations = {
  setTemplate (state, template) {
    state.template = template
  },
  setTermsAndConditionsAcceptance (state, accept) {
    state.acceptTermsAndConditions = accept
  },
  resetState (state) {
    state.template = ''
    state.acceptTermsAndConditions = false
  }
}

export const actions = {

}
