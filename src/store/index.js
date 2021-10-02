import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import modules from './modules'

export default new Vuex.Store({
  state: {
    cartsInfo: []
  },
  mutations,
  actions,
  modules
})
