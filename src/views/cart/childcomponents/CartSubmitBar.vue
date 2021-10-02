<template>
  <div class="submit-bar">
    <!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit"> -->
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  computed: {
    checked() {
      return true
    }
  }
}
</script>
<style scoped>
  .submit-bar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 9999999;
  }
</style>