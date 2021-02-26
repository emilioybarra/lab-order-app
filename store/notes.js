export const state = () => ({
  threeDSetup: false,
  tpa: false,
  herbst: false,
  bondableHGTube: false,
  bondableHGTubeWithShell: false,
  superpositionPhoto: false,
  dlcSteelWire: false,
  upperJaw: false,
  lowerJaw: false,
  notes1: '',
  noCorrectionOfBite: false,
  notes2: '',
  nonTransparent: false,
  trayTrimmed33: false,
  transparent: false,
  right2: {
    canine: false,
    molar: false
  },
  right3: {
    canine: false,
    molar: false
  },
  left2: {
    canine: false,
    molar: false
  },
  left3: {
    canine: false,
    molar: false
  }
})

export const getters = {
  getThreeDSetup (state) {
    return state.threeDSetup || JSON.parse(localStorage.getItem('lof__notes__threeDSetup')) || false
  },
  getTpa (state) {
    return state.tpa || JSON.parse(localStorage.getItem('lof__notes__tpa')) || false
  },
  getHerbst (state) {
    return state.herbst || JSON.parse(localStorage.getItem('lof__notes__herbst')) || false
  },
  getBondableHGTube (state) {
    return state.bondableHGTube || JSON.parse(localStorage.getItem('lof__notes__bondableHGTube')) || false
  },
  getBondableHGTubeWithShell (state) {
    return state.bondableHGTubeWithShell || JSON.parse(localStorage.getItem('lof__notes__bondableHGTubeWithShell')) || false
  },
  getSuperpositionPhoto (state) {
    return state.superpositionPhoto || JSON.parse(localStorage.getItem('lof__notes__superpositionPhoto')) || false
  },
  getDlcSteelWire (state) {
    return state.dlcSteelWire || JSON.parse(localStorage.getItem('lof__notes__dlcSteelWire')) || false
  },
  getUpperJaw (state) {
    return state.bondableHGTube || JSON.parse(localStorage.getItem('lof__notes__bondableHGTube')) || false
  },
  getLowerJaw (state) {
    return state.lowerJaw || JSON.parse(localStorage.getItem('lof__notes__lowerJaw')) || false
  },
  getNotes1 (state) {
    return state.notes1 || localStorage.getItem('lof__notes__notes1') || ''
  },
  getNoCorrectionOfBite (state) {
    return state.noCorrectionOfBite || JSON.parse(localStorage.getItem('lof__notes__noCorrectionOfBite')) || false
  },
  getNotes2 (state) {
    return state.notes2 || localStorage.getItem('lof__notes__notes2') || ''
  },
  getNonTransparent (state) {
    return state.nonTransparent || JSON.parse(localStorage.getItem('lof__notes__nonTransparent')) || false
  },
  getTrayTrimmed33 (state) {
    return state.trayTrimmed33 || JSON.parse(localStorage.getItem('lof__notes__trayTrimmed3_3')) || false
  },
  getTransparent (state) {
    return state.transparent || JSON.parse(localStorage.getItem('lof__notes__transparent')) || false
  },
  getLeft2CanineMolar (state) {
    return JSON.parse(localStorage.getItem('lof__notes__left2CanineMolar')) || state.left2
  },
  getLeft3CanineMolar (state) {
    return JSON.parse(localStorage.getItem('lof__notes__left3CanineMolar')) || state.left3
  },
  getRight2CanineMolar (state) {
    return JSON.parse(localStorage.getItem('lof__notes__right2CanineMolar')) || state.right2
  },
  getRight3CanineMolar (state) {
    return JSON.parse(localStorage.getItem('lof__notes__right3CanineMolar')) || state.right3
  }
}

export const mutations = {
  setThreeDSetup (state, threeDSetup) {
    state.threeDSetup = threeDSetup
    localStorage.setItem('lof__notes__threeDSetup', threeDSetup)
  },
  setTpa (state, tpa) {
    state.tpa = tpa
    localStorage.setItem('lof__notes__tpa', tpa)
  },
  setHerbst (state, herbst) {
    state.herbst = herbst
    localStorage.setItem('lof__notes__herbst', herbst)
  },
  setBondableHGTube (state, bondableHGTube) {
    state.bondableHGTube = bondableHGTube
    localStorage.setItem('lof__notes__bondableHGTube', bondableHGTube)
  },
  setBondableHGTubeWithShell (state, bondableHGTubeWithShell) {
    state.bondableHGTubeWithShell = bondableHGTubeWithShell
    localStorage.setItem('lof__notes__bondableHGTubeWithShell', bondableHGTubeWithShell)
  },
  setSuperpositionPhoto (state, superpositionPhoto) {
    state.superpositionPhoto = superpositionPhoto
    localStorage.setItem('lof__notes__superpositionPhoto', superpositionPhoto)
  },
  setDlcSteelWire (state, dlcSteelWire) {
    state.dlcSteelWire = dlcSteelWire
    localStorage.setItem('lof__notes__dlcSteelWire', dlcSteelWire)
  },
  setUpperJaw (state, upperJaw) {
    state.upperJaw = upperJaw
    localStorage.setItem('lof__notes__upperJaw', upperJaw)
  },
  setLowerJaw (state, lowerJaw) {
    state.lowerJaw = lowerJaw
    localStorage.setItem('lof__notes__lowerJaw', lowerJaw)
  },
  setNotes1 (state, notes1) {
    state.notes1 = notes1
    localStorage.setItem('lof__notes__notes1', notes1)
  },
  setNoCorrectionOfBite (state, noCorrectionOfBite) {
    state.noCorrectionOfBite = noCorrectionOfBite
    localStorage.setItem('lof__notes__noCorrectionOfBite', noCorrectionOfBite)
  },
  setNotes2 (state, notes2) {
    state.notes2 = notes2
    localStorage.setItem('lof__notes__notes2', notes2)
  },
  setNonTransparent (state, nonTransparent) {
    state.nonTransparent = nonTransparent
    localStorage.setItem('lof__notes__nonTransparent', nonTransparent)
  },
  setTrayTrimmed33 (state, trayTrimmed33) {
    state.trayTrimmed3_3 = trayTrimmed33
    localStorage.setItem('lof__notes__trayTrimmed3_3', trayTrimmed33)
  },
  setTransparent (state, transparent) {
    state.transparent = transparent
    localStorage.setItem('lof__notes__transparent', transparent)
  },
  setCanineMolar (state, { side, tooth, value, sideObject }) {
    state[side][tooth] = value
    localStorage.setItem(`lof__notes__${ side }CanineMolar`, JSON.stringify(sideObject))

    /*
    console.log('saved!')
    const right2Object = JSON.parse(localStorage.getItem('lof__notes__right2CanineMolar'))
    const right3Object = JSON.parse(localStorage.getItem('lof__notes__right3CanineMolar'))
    const left2Object = JSON.parse(localStorage.getItem('lof__notes__left2CanineMolar'))
    const left3Object = JSON.parse(localStorage.getItem('lof__notes__left3CanineMolar'))
    console.table(
      [
        {
          type: 'canine',
          'right_||': right2Object.canine,
          'right_|||': right3Object.canine,
          'left_||': left2Object.canine,
          'left_|||': left3Object.canine
        },
        {
          type: 'molar',
          'right_||': right2Object.molar,
          'right_|||': right3Object.molar,
          'left_||': left2Object.molar,
          'left_|||': left3Object.molar
        }
      ], [ 'type', 'right_||', 'right_|||', 'left_||', 'left_|||' ])
    */
  },
  resetNotesState (state) {
    state.threeDSetup = false
    state.tpa = false
    state.herbst = false
    state.bondableHGTube = false
    state.bondableHGTubeWithShell = false
    state.superpositionPhoto = false
    state.dlcSteelWire = false
    state.upperJaw = false
    state.lowerJaw = false
    state.notes1 = ''
    state.noCorrectionOfBite = false
    state.notes2 = ''
    state.nonTransparent = false
    state.trayTrimmed33 = false
    state.transparent = false

    Object.keys(localStorage).map((key) => {
      if (/(lof__notes__)(.*)/.test(key)) {
        localStorage.removeItem(key)
      }
    })
  }
}
