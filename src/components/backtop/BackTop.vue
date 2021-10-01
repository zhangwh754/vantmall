<template>
  <div class="back-top" @click="backtop" v-show="isShow">
    <img src="~assets/img/common/top.png" alt="向上返回">
  </div>
</template>
<script>
export default {
  name: 'backtop',
  data() {
    return {
      isShow: false
    }
  },
  props: {
    showHeight: {
      type: Number,
      default: 1000
    }
  },
  methods: {
    backtop() {
      scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    handleScroll(e) {
      let sHeight = e.srcElement.scrollingElement.scrollTop
      if(sHeight >= this.showHeight) {
        this.isShow = true
      }
      else {
        this.isShow = false
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
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