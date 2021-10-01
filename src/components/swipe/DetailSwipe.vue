<template>
  <div>
    <van-swipe class="detail-swipe" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index" class="swipe-item">
        <img :src="image" lazy-load/>
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
  .swipe-item {
    height: 300px;
  }

  .swipe-item img {
    width: 100%;
  }
</style>