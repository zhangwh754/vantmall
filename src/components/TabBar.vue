<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="home-o" @click="homeClick">主页</van-tabbar-item>
      <van-tabbar-item icon="filter-o" @click="categoriesClick">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" @click="cartClick">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="profileClick">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    homeClick() {
      this.$router.replace('/home')
    },
    categoriesClick() {
      this.$router.replace('/category')
    },
    cartClick() {
      this.$router.replace('/cart')
    },
    profileClick() {
      this.$router.replace('/profile')
    }
  }
}
</script>
<style scoped>
  
</style>