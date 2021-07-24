import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    isMobile: false
  },
  getters: {
    isMobile (state) {
      return state.isMobile
    }
  },
  mutations: {
    SET_ISMOBILE (state, isMobile) {
      state.isMobile = isMobile
    }
  },
  actions: {
    changeSize ({ commit }, isMobile) {
      commit('SET_ISMOBILE', isMobile)
    }
  }
})

export default store
