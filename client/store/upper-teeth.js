import axios from 'axios'

export const state = () => ({
  imageData: ''
})

export const getters = {
  getImageData (state) {
    return state.imageData
  }
}

export const mutations = {
  setImageData (state, accept) {
    state.acceptTermsAndConditions = accept
  }
}

export const actions = {
  fetchTemplates () {
    return axios.get('http://localhost:5000/api/upper-teeth-templates')
      .then((result) => {
        console.log(result)
        return result.data
      })
  }
}
