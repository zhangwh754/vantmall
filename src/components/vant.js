// 自动按需引入 Vant 组件
import { Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, Tab, Tabs, List, GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'
let vantUIs = [Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, Tab, Tabs, List, GoodsAction, GoodsActionIcon, GoodsActionButton ]

export default {
  install (Vue) {
    vantUIs.forEach(vantUI => [
      Vue.component(vantUI.name, vantUI)
    ])
  }
}