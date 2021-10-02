<template>
  <div class="cart-nav-bar">
    <van-nav-bar fixed placeholder>
      <template v-slot:title>{{title}}</template>
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
  .cart-nav-bar {
    font-weight: 700;
  }
</style>