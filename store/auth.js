import CryptoJS from 'crypto-js'

const stringify = (cipherParams) => {
  const jsonObj = { ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64) }
  if (cipherParams.iv) { jsonObj.iv = cipherParams.iv.toString() }
  if (cipherParams.salt) { jsonObj.s = cipherParams.salt.toString() }
  return JSON.stringify(jsonObj)
}

const parse = (jsonStr) => {
  const jsonObj = JSON.parse(jsonStr)
  const cipherParams = CryptoJS.lib.CipherParams.create({
    ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
  })
  if (jsonObj.iv) { cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv) }
  if (jsonObj.s) { cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s) }
  return cipherParams
}

export const state = () => ({
  user: {},
  loggedIn: false,
  isAdmin: false
})

export const getters = {
  getUser (state) {
    return state.user
  },
  getIsAdmin (state) {
    return state.isAdmin
  }
}

export const mutations = {
  setAuth (state, auth) {
    state.user = auth.user
    state.loggedIn = auth.loggedIn
  }
}

export const actions = {
  async login (context, loginData) {
    const encrypted = CryptoJS.AES.encrypt(loginData.password, this.$config.hash_secret, {
      format: { stringify, parse }
    })

    const preparedLoginData = {
      username: loginData.username,
      password: JSON.stringify(encrypted.toString())
    }

    return await this.$axios.post('/api/auth/admin/login', { loginData: preparedLoginData }).then((response) => {
      const admin = response.data
      this.$axios.setHeader('Authorization', `Bearer ${ admin.token }`)
      return { success: true }
    }).catch((error) => {
      return {
        success: false,
        error: error.response.data
      }
    })
  },
  async logout ({ getters, commit }) {
    const admin = { ...getters.getUser }
    return await this.$axios.post('/api/auth/admin/logout', { admin }).then((response) => {
      const prepareUser = {
        loggedIn: false,
        isAdmin: false,
        user: {}
      }

      commit('setAuth', prepareUser)
      return true
    })
  }
}
