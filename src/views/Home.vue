<template>
  <div>
    <home-nav-bar></home-nav-bar>
    <h2>首页</h2>
  </div>
</template>
<script>
import HomeNavBar from 'components/navbar/HomeNavBar.vue'
import { getHomeMultidata } from 'network/home.js'

export default {
  name: 'home',
  components: {
    HomeNavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata()
      .then(res => {
        console.log(res.data);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
  }
}
</script>
<style scoped>
  
</style>