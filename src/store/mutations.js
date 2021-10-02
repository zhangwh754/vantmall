import {
  ADD_COUNTR,
  ADD_TO_CART
} from './mutation-types'

export default {
  [ADD_COUNTR](state, oldProduct) {
    oldProduct.count++  //已加入购物车的商品，数量加1
  },
  [ADD_TO_CART](state, cartProInfo) {
    cartProInfo.count = 1 //  未加入购物车的商品，数量设置为1，并加入购物车
    state.cartsInfo.push(cartProInfo)
  }
}