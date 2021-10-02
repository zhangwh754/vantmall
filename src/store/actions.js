import {
  ADD_COUNTR,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart({ state, commit }, cartProInfo) {
    let oldProduct = state.cartsInfo.find(item => item.id === cartProInfo.id)
    if(oldProduct) {
      commit(ADD_COUNTR, oldProduct)
    } else {
      commit(ADD_TO_CART, cartProInfo)
    }
  },
}