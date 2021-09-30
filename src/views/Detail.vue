<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <h2>详情页</h2>
    <h2>id: {{goodid}}</h2>
  </div>
</template>
<script>
import { getGoodsDetial } from 'network/detail.js'
import DetailNavBar from 'components/navbar/DetailNavBar.vue'

export default {
  name: 'detail',
  components: {
    DetailNavBar,
  },
  computed: {
    goodid() {
      return this.$route.params.id
    }
  },
  created() {
    getGoodsDetial(this.goodid)
      .then(res => {
        console.log(res);
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