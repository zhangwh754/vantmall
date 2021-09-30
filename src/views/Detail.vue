<template>
  <div>
    <h2>详情页</h2>
    <h2>id: {{goodid}}</h2>
  </div>
</template>
<script>
import { getGoodsDetial } from 'network/detail.js'

export default {
  name: 'detail',
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
  }
}
</script>
<style scoped>
  
</style>