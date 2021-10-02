<template>
  <div>
    <cart-nav-bar />
    <div v-for="(item, index) in cartList" :key="index">
      <van-checkbox v-model="checked" :style="{ marginLeft: '10px' }">
        <cart-item :product="item" />
      </van-checkbox>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', margin: 0 }" />
    </div>

    <cart-submit-bar />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartNavBar from 'components/navbar/CartNavBar.vue'
import CartItem from './childcomponents/CartItem.vue'
import CartSubmitBar from './childcomponents/CartSubmitBar.vue'
export default {
  components: {
    CartNavBar,
    CartItem,
    CartSubmitBar
  },
  name: 'cart',
  computed: {
    ...mapGetters([
      'cartList'
    ])
  }

}
</script>
<style scoped>
  
</style>