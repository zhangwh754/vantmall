<template>
  <div class="back-top" @click="backtop">
    <img src="~assets/img/common/top.png" alt="向上返回">
  </div>
</template>
<script>
export default {
  name: 'backtop',
  methods: {
    backtop() {
      scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
}
</script>
<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }

  .back-top img {
    width: 43px;
    height: 43px;
  }

  
</style>