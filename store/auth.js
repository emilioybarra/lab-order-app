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
    return await this.$axios.post('/api/auth/admin/login', { loginData }).then((response) => {
      const admin = response.data
      this.$axios.setToken(admin.token, 'Bearer')
      return { status: true, admin }
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
