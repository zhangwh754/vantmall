<template>
  <div>
    <van-nav-bar title="购物街" :fixed="isplaceholder" :placeholder="isplaceholder"/>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data() {
    return {
      isplaceholder: true
    }
  },
}
</script>
<style scoped>
    
</style>