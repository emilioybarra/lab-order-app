export const state = () => ({
  acceptTermsAndConditions: false,
  template: ''
})

export const getters = {
  getTermsAndConditionsAcceptance (state) {
    return state.acceptTermsAndConditions
  },
  getTemplate (state) {
    return state.template
  }
}

export const mutations = {
  setTermsAndConditionsAcceptance (state, accept) {
    state.acceptTermsAndConditions = accept
  },
  setTemplate (state, template) {
    console.log(template)
    state.template = template
  }
}

export const actions = {
  fetchTemplateData ({ state }) {
    console.log(state.template)
    // const template = state.template
  }
}
