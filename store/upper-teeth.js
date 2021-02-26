export const state = () => ({
  imageData: '',
  onlySetup: false,
  boltonDiscrepancy: false,
  resolveCrowding: false,
  rcMm: '',
  rcWhere: '',
  reduceOverjet: false,
  roMm: '',
  roWhere: '',
  notesStrippingMm: '',
  notesStrippingWhere: '',
  notesBoltonDiscrepancy: false,
  notesBox: '',
  archwireSizes: {}
})

export const getters = {
  getImageData (state) {
    return state.imageData || localStorage.getItem('lof__upper-teeth__imageData') || ''
  },
  getOnlySetup (state) {
    return state.onlySetup || JSON.parse(localStorage.getItem('lof__upper-teeth__onlySetup')) || false
  },
  getBoltonDiscrepancy (state) {
    return state.boltonDiscrepancy || JSON.parse(localStorage.getItem('lof__upper-teeth__boltonDiscrepancy')) || false
  },
  getResolveCrowding (state) {
    return state.resolveCrowding || JSON.parse(localStorage.getItem('lof__upper-teeth__resolveCrowding')) || false
  },
  getRcMm (state) {
    return state.rcMm || localStorage.getItem('lof__upper-teeth__rcMm') || ''
  },
  getRcWhere (state) {
    return state.rcWhere || localStorage.getItem('lof__upper-teeth__rcWhere') || ''
  },
  getReduceOverjet (state) {
    return state.reduceOverjet || JSON.parse(localStorage.getItem('lof__upper-teeth__reduceOverjet')) || false
  },
  getRoMm (state) {
    return state.roMm || localStorage.getItem('lof__upper-teeth__roMm') || ''
  },
  getRoWhere (state) {
    return state.roWhere || localStorage.getItem('lof__upper-teeth__roWhere') || ''
  },
  getNotesStrippingMm (state) {
    return state.notesStrippingMm || localStorage.getItem('lof__upper-teeth__notesStrippingMm') || ''
  },
  getNotesStrippingWhere (state) {
    return state.notesStrippingWhere || localStorage.getItem('lof__upper-teeth__notesStrippingWhere') || ''
  },
  getNotesBoltonDiscrepancy (state) {
    return state.notesBoltonDiscrepancy || JSON.parse(localStorage.getItem('lof__upper-teeth__notesBoltonDiscrepancy')) || false
  },
  getNotesBox (state) {
    return state.notesBox || localStorage.getItem('lof__upper-teeth__notesBox') || ''
  },
  getArchwireSizes (state) {
    return JSON.parse(localStorage.getItem('lof__upper-teeth__archwireSizes')) || state.archwireSizes || {}
  }
}

export const mutations = {
  setImageData (state, imageData) {
    state.imageData = imageData
    localStorage.setItem('lof__upper-teeth__imageData', imageData)
  },
  setOnlySetup (state, onlySetup) {
    state.onlySetup = onlySetup
    localStorage.setItem('lof__upper-teeth__onlySetup', onlySetup)
  },
  setBoltonDiscrepancy (state, boltonDiscrepancy) {
    state.boltonDiscrepancy = boltonDiscrepancy
    localStorage.setItem('lof__upper-teeth__boltonDiscrepancy', boltonDiscrepancy)
  },
  setResolveCrowding (state, resolveCrowding) {
    state.resolveCrowding = resolveCrowding
    localStorage.setItem('lof__upper-teeth__resolveCrowding', resolveCrowding)
  },
  setRcMm (state, rcMm) {
    state.rcMm = rcMm
    localStorage.setItem('lof__upper-teeth__rcMm', rcMm)
  },
  setRcWhere (state, rcWhere) {
    state.rcWhere = rcWhere
    localStorage.setItem('lof__upper-teeth__rcWhere', rcWhere)
  },
  setReduceOverjet (state, reduceOverjet) {
    state.reduceOverjet = reduceOverjet
    localStorage.setItem('lof__upper-teeth__reduceOverjet', reduceOverjet)
  },
  setRoMm (state, roMm) {
    state.roMm = roMm
    localStorage.setItem('lof__upper-teeth__roMm', roMm)
  },
  setRoWhere (state, roWhere) {
    state.roWhere = roWhere
    localStorage.setItem('lof__upper-teeth__roWhere', roWhere)
  },
  setNotesStrippingMm (state, notesStrippingMm) {
    state.notesStrippingMm = notesStrippingMm
    localStorage.setItem('lof__upper-teeth__notesStrippingMm', notesStrippingMm)
  },
  setNotesStrippingWhere (state, notesStrippingWhere) {
    state.notesStrippingWhere = notesStrippingWhere
    localStorage.setItem('lof__upper-teeth__notesStrippingWhere', notesStrippingWhere)
  },
  setNotesBoltonDiscrepancy (state, notesBoltonDiscrepancy) {
    state.notesBoltonDiscrepancy = notesBoltonDiscrepancy
    localStorage.setItem('lof__upper-teeth__notesBoltonDiscrepancy', notesBoltonDiscrepancy)
  },
  setNotesBox (state, notesBox) {
    state.notesBox = notesBox
    localStorage.setItem('lof__upper-teeth__notesBox', notesBox)
  },
  setArchwireSizes (state, archwireSizes) {
    state.archwireSizes = archwireSizes
    localStorage.setItem('lof__upper-teeth__archwireSizes', JSON.stringify(archwireSizes))
  },
  resetUpperTeethState (state) {
    state.imageData = null
    state.onlySetup = false
    state.boltonDiscrepancy = false
    state.resolveCrowding = false
    state.rcMm = ''
    state.rcWhere = ''
    state.reduceOverjet = false
    state.roMm = ''
    state.roWhere = ''
    state.archwireSizes = {}

    Object.keys(localStorage).map((key) => {
      if (/(lof__upper-teeth__)(.*)/.test(key)) {
        localStorage.removeItem(key)
      }
    })
  }
}

export const actions = {
  async fetchTemplates (context, payload) {
    const { currentPage, userId } = payload
    return await this.$axios.$get('/api/templates/upper-teeth', {
      params: {
        page: currentPage,
        userId
      }
    })
  },
  async fetchTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    const { upperTeethTemplate } = await this.$axios.$get(`/api/templates/upper-teeth/${ templateId }`, {
      params: { userId }
    })
    const {
      upperTeethTemplateData: {
        imageData,
        onlySetup,
        boltonDiscrepancy,
        resolveCrowding,
        rcMm,
        rcWhere,
        reduceOverjet,
        roMm,
        roWhere,
        notesStrippingMm,
        notesStrippingWhere,
        notesBoltonDiscrepancy,
        notesBox
      }
    } = upperTeethTemplate

    commit('setImageData', imageData)
    commit('setOnlySetup', onlySetup)
    commit('setBoltonDiscrepancy', boltonDiscrepancy)
    commit('setResolveCrowding', resolveCrowding)
    commit('setRcMm', rcMm)
    commit('setRcWhere', rcWhere)
    commit('setReduceOverjet', reduceOverjet)
    commit('setRoMm', roMm)
    commit('setRoWhere', roWhere)
    commit('setNotesStrippingMm', notesStrippingMm)
    commit('setNotesStrippingWhere', notesStrippingWhere)
    commit('setNotesBoltonDiscrepancy', notesBoltonDiscrepancy)
    commit('setNotesBox', notesBox)
    return true
  },
  saveTemplateData ({ getters, commit }, payload) {
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
      getRoWhere: roWhere,
      getNotesStrippingMm: notesStrippingMm,
      getNotesStrippingWhere: notesStrippingWhere,
      getNotesBoltonDiscrepancy: notesBoltonDiscrepancy,
      getNotesBox: notesBox
    } = getters
    const templateData = {
      title: templateTitle,
      upperTeethTemplate: {
        imageData,
        onlySetup,
        boltonDiscrepancy,
        resolveCrowding,
        rcMm,
        rcWhere,
        reduceOverjet,
        roMm,
        roWhere,
        notesStrippingMm,
        notesStrippingWhere,
        notesBoltonDiscrepancy,
        notesBox
      }
    }
    const prepareBody = {
      userId,
      templateData
    }

    this.$axios.$post('/api/templates/upper-teeth', prepareBody)
      .then((response) => {
        if (response.status === 201) {
          const notification = {
            message: 'savedTemplate',
            variant: 'success'
          }
          commit('common/setNotifications', notification, { root: true })
        }
      })
      .catch(() => {
        const notification = {
          message: 'error',
          variant: 'danger'
        }
        commit('common/setNotifications', notification, { root: true })
      })
  },
  async deleteTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    return await this.$axios.$delete(`/api/templates/upper-teeth/${ templateId }`, {
      params: { userId }
    })
      .then((response) => {
        if (response.status === 200) {
          const notification = {
            message: 'deletedTemplate',
            variant: 'success'
          }
          commit('common/setNotifications', notification, { root: true })
        }
      })
      .catch(() => {
        const notification = {
          message: 'error',
          variant: 'danger'
        }
        commit('common/setNotifications', notification, { root: true })
      })
  }
}