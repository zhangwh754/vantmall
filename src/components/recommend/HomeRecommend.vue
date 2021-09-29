<template>
  <div class="recommend_box">
    <div v-for="(recommend, index) in recommendInfo" :key="index" class="recommend_item">
      <a :href="recommend.link">
        <img :src="recommend.image" alt="推荐商品类">
        <div>{{recommend.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommendInfo: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>
  .recommend_box {
    display: flex;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend_item {
    flex: 1;
  }

  .recommend_item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>