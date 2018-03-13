
const state = {
  httpError: {
    hasError: false,
    status: '',
    statusText: ''
  }
}

const mutations = {
  ON_HTTP_ERROR (state, payload) {
    state.httpError = payload
  }
}

export default{
  state,
  mutations
}
