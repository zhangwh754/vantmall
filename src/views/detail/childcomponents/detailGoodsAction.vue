<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="star" text="收藏" color="#323233" v-if="!isStar" @click="starClick" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" v-else @click="starClick" />
      <van-goods-action-button type="warning" text="加入购物车" @click="cartClick" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template> 
<script>
export default {
  name: 'detailGoodsAction',
  data() {
    return {
      isStar: false
    }
  },
  methods: {
    starClick() {
      this.isStar = !this.isStar
    },
    cartClick() {
      this.$emit('addToCart')
    }
  }
}
</script>
<style scoped>
  
</style>