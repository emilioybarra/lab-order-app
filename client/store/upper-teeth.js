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
    return state.imageData || localStorage.getItem('lof__upper-teeth__imageData')
  },
  getOnlySetup (state) {
    return state.onlySetup || JSON.parse(localStorage.getItem('lof__upper-teeth__onlySetup'))
  },
  getBoltonDiscrepancy (state) {
    return state.boltonDiscrepancy || JSON.parse(localStorage.getItem('lof__upper-teeth__boltonDiscrepancy'))
  },
  getResolveCrowding (state) {
    return state.resolveCrowding || JSON.parse(localStorage.getItem('lof__upper-teeth__resolveCrowding'))
  },
  getRcMm (state) {
    return state.rcMm || localStorage.getItem('lof__upper-teeth__rcMm')
  },
  getRcWhere (state) {
    return state.rcWhere || localStorage.getItem('lof__upper-teeth__rcWhere')
  },
  getReduceOverjet (state) {
    return state.reduceOverjet || JSON.parse(localStorage.getItem('lof__upper-teeth__reduceOverjet'))
  },
  getRoMm (state) {
    return state.roMm || localStorage.getItem('lof__upper-teeth__roMm')
  },
  getRoWhere (state) {
    return state.roWhere || localStorage.getItem('lof__upper-teeth__roWhere')
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
  resetUpperTeethState (state) {
    state.imageData = null
    localStorage.removeItem('lof__upper-teeth__imageData')
    state.onlySetup = false
    localStorage.removeItem('lof__upper-teeth__onlySetup')
    state.boltonDiscrepancy = false
    localStorage.removeItem('lof__upper-teeth__boltonDiscrepancy')
    state.resolveCrowding = false
    localStorage.removeItem('lof__upper-teeth__resolveCrowding')
    state.rcMm = ''
    localStorage.removeItem('lof__upper-teeth__rcMm')
    state.rcWhere = ''
    localStorage.removeItem('lof__upper-teeth__rcWhere')
    state.reduceOverjet = false
    localStorage.removeItem('lof__upper-teeth__reduceOverjet')
    state.roMm = ''
    localStorage.removeItem('lof__upper-teeth__roMm')
    state.roWhere = ''
    localStorage.removeItem('lof__upper-teeth__roWhere')
  }
}

export const actions = {
  async fetchTemplates () {
    return await this.$axios.$get('/api/upper-teeth-templates')
  }

}
