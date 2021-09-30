<template>
  <div class="goodsItem">
    <img :src="goodsitem.show.img" alt="商品图片" @click="goodClick(goodsitem.iid)">
    <div class="goodsInfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="star">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodsitem',
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    goodClick(id) {
      console.log(id);
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style scoped>
  .goodsItem {
    padding-bottom: 40px;
    position: relative;
  }

  .goodsItem img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsInfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goodsInfo .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goodsInfo .star {
    position: relative;
  }

  .goodsInfo .star::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>