import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    theme: 'default'
  },
  mutations: {
    changeTheme (state, payload) {
      state.theme = payload
    }
  },
  getters: {
    bgStyle: state => {
      return 'var(--' + state.theme + '-bg)'
    },
    primaryStyle: state => {
      return 'var(--' + state.theme + '-primary)'
    },
    secondaryStyle: state => {
      return 'var(--' + state.theme + '-secondary)'
    }
  }
})

export default store;