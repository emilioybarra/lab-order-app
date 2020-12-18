export const state = () => ({
  imageData: '',
  onlySetup: false,
  boltonDiscrepancy: false,
  resolveCrowding: false,
  rcMm: '',
  rcWhere: '',
  reduceOverjet: false,
  roMm: '',
  roWhere: ''
})

export const getters = {
  getImageData (state) {
    return state.imageData || localStorage.getItem('lof__lower-teeth__imageData')
  },
  getOnlySetup (state) {
    return state.onlySetup || JSON.parse(localStorage.getItem('lof__lower-teeth__onlySetup'))
  },
  getBoltonDiscrepancy (state) {
    return state.boltonDiscrepancy || JSON.parse(localStorage.getItem('lof__lower-teeth__boltonDiscrepancy'))
  },
  getResolveCrowding (state) {
    return state.resolveCrowding || JSON.parse(localStorage.getItem('lof__lower-teeth__resolveCrowding'))
  },
  getRcMm (state) {
    return state.rcMm || localStorage.getItem('lof__lower-teeth__rcMm')
  },
  getRcWhere (state) {
    return state.rcWhere || localStorage.getItem('lof__lower-teeth__rcWhere')
  },
  getReduceOverjet (state) {
    return state.reduceOverjet || JSON.parse(localStorage.getItem('lof__lower-teeth__reduceOverjet'))
  },
  getRoMm (state) {
    return state.roMm || localStorage.getItem('lof__lower-teeth__roMm')
  },
  getRoWhere (state) {
    return state.roWhere || localStorage.getItem('lof__lower-teeth__roWhere')
  }
}

export const mutations = {
  setImageData (state, imageData) {
    state.imageData = imageData
    localStorage.setItem('lof__lower-teeth__imageData', imageData)
  },
  setOnlySetup (state, onlySetup) {
    state.onlySetup = onlySetup
    localStorage.setItem('lof__lower-teeth__onlySetup', onlySetup)
  },
  setBoltonDiscrepancy (state, boltonDiscrepancy) {
    state.boltonDiscrepancy = boltonDiscrepancy
    localStorage.setItem('lof__lower-teeth__boltonDiscrepancy', boltonDiscrepancy)
  },
  setResolveCrowding (state, resolveCrowding) {
    state.resolveCrowding = resolveCrowding
    localStorage.setItem('lof__lower-teeth__resolveCrowding', resolveCrowding)
  },
  setRcMm (state, rcMm) {
    state.rcMm = rcMm
    localStorage.setItem('lof__lower-teeth__rcMm', rcMm)
  },
  setRcWhere (state, rcWhere) {
    state.rcWhere = rcWhere
    localStorage.setItem('lof__lower-teeth__rcWhere', rcWhere)
  },
  setReduceOverjet (state, reduceOverjet) {
    state.reduceOverjet = reduceOverjet
    localStorage.setItem('lof__lower-teeth__reduceOverjet', reduceOverjet)
  },
  setRoMm (state, roMm) {
    state.roMm = roMm
    localStorage.setItem('lof__lower-teeth__roMm', roMm)
  },
  setRoWhere (state, roWhere) {
    state.roWhere = roWhere
    localStorage.setItem('lof__lower-teeth__roWhere', roWhere)
  },
  resetLowerTeethState (state) {
    state.imageData = null
    localStorage.removeItem('lof__lower-teeth__imageData')
    state.onlySetup = false
    localStorage.removeItem('lof__lower-teeth__onlySetup')
    state.boltonDiscrepancy = false
    localStorage.removeItem('lof__lower-teeth__boltonDiscrepancy')
    state.resolveCrowding = false
    localStorage.removeItem('lof__lower-teeth__resolveCrowding')
    state.rcMm = ''
    localStorage.removeItem('lof__lower-teeth__rcMm')
    state.rcWhere = ''
    localStorage.removeItem('lof__lower-teeth__rcWhere')
    state.reduceOverjet = false
    localStorage.removeItem('lof__lower-teeth__reduceOverjet')
    state.roMm = ''
    localStorage.removeItem('lof__lower-teeth__roMm')
    state.roWhere = ''
    localStorage.removeItem('lof__lower-teeth__roWhere')
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
    const { lowerTeethTemplate } = await this.$axios.$get(`/api/templates/lower-teeth/${ templateId }`, {
      params: { userId }
    })
    const {
      lowerTeethTemplateData: {
        imageData,
        onlySetup,
        boltonDiscrepancy,
        resolveCrowding,
        rcMm,
        rcWhere,
        reduceOverjet,
        roMm,
        roWhere
      }
    } = lowerTeethTemplate

    commit('setImageData', imageData)
    commit('setOnlySetup', onlySetup)
    commit('setBoltonDiscrepancy', boltonDiscrepancy)
    commit('setResolveCrowding', resolveCrowding)
    commit('setRcMm', rcMm)
    commit('setRcWhere', rcWhere)
    commit('setReduceOverjet', reduceOverjet)
    commit('setRoMm', roMm)
    commit('setRoWhere', roWhere)
    return true
  },
  saveTemplateData ({ getters }, payload) {
    const { templateTitle, userId } = payload
    const {
      getImageData: imageData,
      getOnlySetup: onlySetup,
      getBoltonDiscrepancy: boltonDiscrepancy,
      getResolveCrowding: resolveCrowding,
      getRcMm: rcMm,
      getRcWhere: rcWhere,
      getReduceOverjet: reduceOverjet,
      getRoMm: roMm,
      getRoWhere: roWhere
    } = getters
    const templateData = {
      title: templateTitle,
      lowerTeethTemplate: {
        imageData,
        onlySetup,
        boltonDiscrepancy,
        resolveCrowding,
        rcMm,
        rcWhere,
        reduceOverjet,
        roMm,
        roWhere
      }
    }
    const prepareBody = {
      userId,
      templateData
    }

    this.$axios.$post('/api/templates/lower-teeth', prepareBody)
      .then((result) => {
        console.log(result)
      })
  },
  async deleteTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    return await this.$axios.$delete(`/api/templates/lower-teeth/${ templateId }`, {
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
