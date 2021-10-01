<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swipe :images="goodswipe"></detail-swipe>
    <detail-good-info :goods-info="goodsInfo"></detail-good-info>
    <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
    <detail-rec-info :detailInfo="detailInfo"></detail-rec-info>
    <div>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
      <p>下面不做了</p>
    </div>
  </div>
</template>
<script>
import { getGoodsDetial, GoodsInfo, ShopInfo } from 'network/detail.js'
import DetailNavBar from 'components/navbar/DetailNavBar.vue'
import DetailSwipe from 'components/swipe/DetailSwipe.vue'
import DetailGoodInfo from './childcomponents/detailGoodInfo'
import DetailShopInfo from './childcomponents/detailShopInfo'
import DetailRecInfo from '../detail/childcomponents/detailRecInfo.vue'

export default {
  name: 'detail',
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailGoodInfo,
    DetailShopInfo,
    DetailRecInfo,
  },
  data() {
    return {
      goodswipe: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {}
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
        // console.log(res.result);
        this.goodsInfo = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        this.shopInfo = new ShopInfo(res.result.shopInfo)
        this.detailInfo = res.result.detailInfo
      })
      .catch(err => {
        console.log(err);
      })
  },
  mounted() {
    // console.log(this.$route.meta.showTabBar);
  }
}
</script>
<style scoped>
  
</style>