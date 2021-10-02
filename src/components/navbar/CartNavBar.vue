<template>
  <div class="cart-nav-bar">
    <van-nav-bar fixed placeholder>
      <template v-slot:title>购物车({{title}})</template>
    </van-nav-bar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'cartnavbar',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters({
      title: 'cartLength'
    })
  }
}
</script>
<style scoped>

</style>