import { prepareArchwires } from '@/plugins/prepare-archwires'

export const state = () => ({
  imageData: '',
  canvasMode: 'highlight',
  teethCanvasUndoList: [],
  highlightedTeeth: [
    { tooth_0: { highlighted: false, color: '' } },
    { tooth_1: { highlighted: false, color: '' } },
    { tooth_2: { highlighted: false, color: '' } },
    { tooth_3: { highlighted: false, color: '' } },
    { tooth_4: { highlighted: false, color: '' } },
    { tooth_5: { highlighted: false, color: '' } },
    { tooth_6: { highlighted: false, color: '' } },
    { tooth_7: { highlighted: false, color: '' } },
    { tooth_8: { highlighted: false, color: '' } },
    { tooth_9: { highlighted: false, color: '' } },
    { tooth_10: { highlighted: false, color: '' } },
    { tooth_11: { highlighted: false, color: '' } },
    { tooth_12: { highlighted: false, color: '' } },
    { tooth_13: { highlighted: false, color: '' } },
    { tooth_14: { highlighted: false, color: '' } },
    { tooth_15: { highlighted: false, color: '' } }
  ],
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
  archwireSizes: {},
  teethBoxes: {
    upper_1: '',
    upper_2: '',
    upper_3: '',
    upper_4: '',
    upper_5: '',
    upper_6: '',
    upper_7: '',
    upper_8: '',
    upper_9: '',
    upper_10: '',
    upper_11: '',
    upper_12: '',
    lower_1: '',
    lower_2: '',
    lower_3: '',
    lower_4: '',
    lower_5: '',
    lower_6: '',
    lower_7: '',
    lower_8: '',
    lower_9: '',
    lower_10: '',
    lower_11: '',
    lower_12: ''
  }
})

export const getters = {
  getImageData (state) {
    return state.imageData || localStorage.getItem('lof__lower-teeth__imageData') || ''
  },
  getCanvasMode: state => () => {
    return state.canvasMode
  },
  getTeethCanvasUndoList: state => () => {
    return JSON.parse(localStorage.getItem('lof__lower-teeth__teethCanvasUndoList')) || state.teethCanvasUndoList || []
  },
  getHighlightedTeeth: state => () => {
    return JSON.parse(localStorage.getItem('lof__lower-teeth__highlightedTeeth')) || state.highlightedTeeth || []
  },
  getOnlySetup (state) {
    return state.onlySetup || JSON.parse(localStorage.getItem('lof__lower-teeth__onlySetup')) || false
  },
  getBoltonDiscrepancy (state) {
    return state.boltonDiscrepancy || JSON.parse(localStorage.getItem('lof__lower-teeth__boltonDiscrepancy')) || false
  },
  getResolveCrowding (state) {
    return state.resolveCrowding || JSON.parse(localStorage.getItem('lof__lower-teeth__resolveCrowding')) || false
  },
  getRcMm (state) {
    return state.rcMm || localStorage.getItem('lof__lower-teeth__rcMm') || ''
  },
  getRcWhere (state) {
    return state.rcWhere || localStorage.getItem('lof__lower-teeth__rcWhere') || ''
  },
  getReduceOverjet (state) {
    return state.reduceOverjet || JSON.parse(localStorage.getItem('lof__lower-teeth__reduceOverjet')) || false
  },
  getRoMm (state) {
    return state.roMm || localStorage.getItem('lof__lower-teeth__roMm') || ''
  },
  getRoWhere (state) {
    return state.roWhere || localStorage.getItem('lof__lower-teeth__roWhere') || ''
  },
  getNotesStrippingMm (state) {
    return state.notesStrippingMm || localStorage.getItem('lof__lower-teeth__notesStrippingMm') || ''
  },
  getNotesStrippingWhere (state) {
    return state.notesStrippingWhere || localStorage.getItem('lof__lower-teeth__notesStrippingWhere') || ''
  },
  getNotesBoltonDiscrepancy (state) {
    return state.notesBoltonDiscrepancy || JSON.parse(localStorage.getItem('lof__lower-teeth__notesBoltonDiscrepancy')) || false
  },
  getNotesBox (state) {
    return state.notesBox || localStorage.getItem('lof__lower-teeth__notesBox') || ''
  },
  getArchwireSizes (state) {
    return prepareArchwires(JSON.parse(localStorage.getItem('lof__lower-teeth__archwireSizes')) || state.archwireSizes || {})
  },
  getTeethBoxes: state => () => {
    return JSON.parse(localStorage.getItem('lof__lower-teeth__teethBoxes')) || state.teethBoxes
  }
}

export const mutations = {
  setImageData (state, imageData) {
    state.imageData = imageData
    localStorage.setItem('lof__lower-teeth__imageData', imageData)
  },
  setCanvasMode (state, canvasMode) {
    state.canvasMode = canvasMode
  },
  setTeethCanvasUndoList (state, teethCanvasUndoList) {
    state.teethCanvasUndoList = teethCanvasUndoList
    localStorage.setItem('lof__lower-teeth__teethCanvasUndoList', JSON.stringify(teethCanvasUndoList))
  },
  setHighlightedTeeth (state, highlightedTeeth) {
    state.highlightedTeeth = highlightedTeeth
    localStorage.setItem('lof__lower-teeth__highlightedTeeth', JSON.stringify(highlightedTeeth))
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
  setNotesStrippingMm (state, notesStrippingMm) {
    state.notesStrippingMm = notesStrippingMm
    localStorage.setItem('lof__lower-teeth__notesStrippingMm', notesStrippingMm)
  },
  setNotesStrippingWhere (state, notesStrippingWhere) {
    state.notesStrippingWhere = notesStrippingWhere
    localStorage.setItem('lof__lower-teeth__notesStrippingWhere', notesStrippingWhere)
  },
  setNotesBoltonDiscrepancy (state, notesBoltonDiscrepancy) {
    state.notesBoltonDiscrepancy = notesBoltonDiscrepancy
    localStorage.setItem('lof__lower-teeth__notesBoltonDiscrepancy', notesBoltonDiscrepancy)
  },
  setNotesBox (state, notesBox) {
    state.notesBox = notesBox
    localStorage.setItem('lof__lower-teeth__notesBox', notesBox)
  },
  setArchwireSizes (state, archwireSizes) {
    state.archwireSizes = archwireSizes
    localStorage.setItem('lof__lower-teeth__archwireSizes', JSON.stringify(archwireSizes))
  },
  setTeethBoxes (state, teethBoxes) {
    state.teethBoxes = teethBoxes
    localStorage.setItem('lof__lower-teeth__teethBoxes', JSON.stringify(teethBoxes))
  },
  resetLowerTeethState (state) {
    state.imageData = null
    state.onlySetup = false
    state.boltonDiscrepancy = false
    state.resolveCrowding = false
    state.rcMm = ''
    state.rcWhere = ''
    state.reduceOverjet = false
    state.roMm = ''
    state.roWhere = ''
    state.notesStrippingMm = ''
    state.notesStrippingWhere = ''
    state.notesBoltonDiscrepancy = false
    state.notesBox = ''
    state.archwireSizes = {}
    state.teethBoxes = {}

    Object.keys(localStorage).map((key) => {
      if (/(lof__lower-teeth__)(.*)/.test(key)) {
        localStorage.removeItem(key)
      }
    })
  }
}

export const actions = {
  async fetchTemplates ({ commit }, payload) {
    const { currentPage, userId } = payload
    return await this.$axios.$get('/api/templates/lower-teeth', {
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
      commit('common/setNotifications', notification, { root: true })
    })
  },
  async fetchTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    const { lowerTeethTemplate } = await this.$axios.$get(`/api/templates/lower-teeth/${ templateId }`, {
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
      lowerTeethTemplate: {
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
      lowerTeethTemplate: {
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

    return this.$axios.$post('/api/templates/lower-teeth', prepareBody)
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
  },
  async deleteTemplateById ({ commit }, payload) {
    const { templateId, userId } = payload
    return await this.$axios.$delete(`/api/templates/lower-teeth/${ templateId }`, {
      params: { userId }
    })
      .then((response) => {
        if (response.status === 200) {
          const notification = {
            message: 'deletedTemplate',
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
