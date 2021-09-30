<template>
  <div>
    <h2>详情页</h2>
    <h2>id: {{goodid}}</h2>
  </div>
</template>
<script>
export default {
  name: 'detail',
  computed: {
    goodid() {
      return this.$route.params.id
    }
  }
}
</script>
<style scoped>
  
</style>