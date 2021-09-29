<template>
  <div>
    <home-nav-bar></home-nav-bar>
    <home-swipe :images="banners"></home-swipe>
    <h2>首页</h2>
  </div>
</template>
<script>
import { getHomeMultidata } from 'network/home.js'

import HomeNavBar from 'components/navbar/HomeNavBar.vue'
import HomeSwipe from 'components/swipe/HomeSwipe.vue'

export default {
  name: 'home',
  components: {
    HomeNavBar,
    HomeSwipe
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
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
  }
}
</script>
<style scoped>
  
</style>