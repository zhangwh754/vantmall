<template>
  <div>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" placeholder>
      <van-tabbar-item icon="home-o" to="/home">主页</van-tabbar-item>
      <van-tabbar-item icon="filter-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: 0,
      scroll: 0,
      scrollRecord: {}
    };
  },
  methods: {
    handleScroll () {
      //document.documentElement.scrollTop获取当前页面的滚动条纵坐标位置
      this.scroll  = document.documentElement && document.documentElement.scrollTop
      // console.log(this.scroll)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  watch: {
    active (news, old) {
      this.scrollRecord['tab' + old] = parseInt(this.scroll) // 离开的tab栏滚动的高度
      if (this.scrollRecord['tab' + news]) {
        this.$nextTick(() => { // 坑不加他会出现滚动距离不够，限制于上一个tab高度问题
          window.scrollTo(0, parseInt(this.scrollRecord['tab' + news])) // 进入的tab栏滚动到记录的距离
        })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>
<style scoped>
  
</style>