<template>
  <div class="cart-item">
    <van-card>
      <template #title><div class="van-ellipsis">{{product.title}}</div></template>
      <template #desc><div class="van-ellipsis">{{product.desc}}</div></template>
      <template #num>{{product.num}}</template>
      <template #price>{{product.price}}</template>
      <template #thumb>
        <img :src="product.image" alt="商品图片">
      </template>
    </van-card>
  </div>
</template>
<script>

export default {
  name: 'cartitem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .cart-item {
    margin: 0;
  }

  .cart-item img {
    object-fit: cover;
    height: 88px;
    /* width: 50px; */
    /* margin-left: 30px; */
  }
</style>