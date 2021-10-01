<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swipe :images="goodswipe"></detail-swipe>
    <h2>详情页</h2>
    <h2>id: {{goodid}}</h2>
  </div>
</template>
<script>
import { getGoodsDetial, } from 'network/detail.js'
import DetailNavBar from 'components/navbar/DetailNavBar.vue'
import DetailSwipe from 'components/swipe/DetailSwipe.vue'

export default {
  name: 'detail',
  components: {
    DetailNavBar,
    DetailSwipe,
  },
  data() {
    return {
      goodswipe: []
    }
  },
  computed: {
    goodid() {
      return this.$route.params.id
    }
  },
  created() {
    getGoodsDetial(this.goodid)
      .then(res => {
        this.goodswipe = res.result.itemInfo.topImages
        console.log(res.result);
      })
      .catch(err => {
        console.log(err);
      })
  },
  mounted() {
    console.log(this.$route.meta.showTabBar);
  }
}
</script>
<style scoped>
  
</style>