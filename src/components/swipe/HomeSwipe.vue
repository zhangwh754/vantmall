<template>
  <div>
    <van-swipe class="home-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <a :href="image.link">
          <img :src="image.image" lazy-load/>
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import './lazyload'
export default {
  props: {
    images: Array
  }
}
</script>
<style scoped>
  .home-swipe img {
    width: 100%
  }
</style>