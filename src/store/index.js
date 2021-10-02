import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import modules from './modules'

export default new Vuex.Store({
  state: {
    cartsInfo: [
      {
        count: 1,
        desc: "测试数据",
        id: "1m7rp9w",
        image: "//s5.mogucdn.com/mlcdn/c45406/180827_1590j44g2bk619i6655ji20ihikfb_640x960.jpg",
        price: "¥155.72",
        title: "测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据"
      }
    ]
  },
  getters,
  mutations,
  actions,
  modules
})
