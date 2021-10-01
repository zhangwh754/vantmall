<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swipe :images="goodswipe"></detail-swipe>
    <detail-good-info :goods-info="goodsInfo"></detail-good-info>
    <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
  </div>
</template>
<script>
import { getGoodsDetial, GoodsInfo, ShopInfo } from 'network/detail.js'
import DetailNavBar from 'components/navbar/DetailNavBar.vue'
import DetailSwipe from 'components/swipe/DetailSwipe.vue'
import DetailGoodInfo from './childcomponents/detailGoodInfo'
import DetailShopInfo from './childcomponents/detailShopInfo'

export default {
  name: 'detail',
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailGoodInfo,
    DetailShopInfo,
  },
  data() {
    return {
      goodswipe: [],
      goodsInfo: {},
      shopInfo: {}
    }
  },
  computed: {
    goodid() {
      return this.$route.params.id
    }
  },
  created() {
    getGoodsDetial(this.goodid)
      .then(res => {
        this.goodswipe = res.result.itemInfo.topImages
        console.log(res.result);
        this.goodsInfo = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        this.shopInfo = new ShopInfo(res.result.shopInfo)
      })
      .catch(err => {
        console.log(err);
      })
  },
  mounted() {
    console.log(this.$route.meta.showTabBar);
  }
}
</script>
<style scoped>
  
</style>