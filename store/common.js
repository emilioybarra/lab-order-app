import cookies from 'vue-cookies'

export const state = () => ({
  acceptTermsAndConditions: false,
  pdfSrcPage1: '',
  pdfSrcPage2: '',
  notifications: []
})

export const getters = {
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
    state.pdfSrcPage1 = ''
    state.pdfSrcPage2 = ''
    state.notifications = []
  }
}

export const actions = {
  async fetchTemplates ({ commit }, payload) {
    const { currentPage, templatePath, userId } = payload
    return await this.$axios.$get(`/api/templates/${ templatePath }`, {
      params: {
        page: currentPage,
        userId
      }
    }).catch((error) => {
      if (error.response.status === 401) {
        commit('auth/setAuth', { user: {}, loggedIn: false }, { root: true })
        return false
      }

      const notification = {
        message: 'error',
        variant: 'danger'
      }
      commit('common/setNotifications', notification)
    })
  },
  async deleteTemplateById ({ commit }, payload) {
    const { templateId, templatePath, userId } = payload
    return await this.$axios.$delete(`/api/templates/${ templatePath }/${ templateId }`, {
      params: { userId }
    })
      .then((response) => {
        if (response.status === 200) {
          const notification = {
            message: 'deletedTemplate',
            variant: 'success'
          }
          commit('common/setNotifications', notification)
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
        commit('common/setNotifications', notification)
      })
  }
}
