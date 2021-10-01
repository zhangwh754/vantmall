<template>
  <div>
    <detail-nav-bar @titleScroll="titleScroll"></detail-nav-bar>
    <detail-swipe :images="goodswipe"></detail-swipe>
    <detail-good-info :goods-info="goodsInfo"></detail-good-info>
    <detail-shop-info :shop-info="shopInfo"></detail-shop-info>
    <detail-rec-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-rec-info>
    <detailcanshu ref="canshu"/>
    <detailpinglun ref="pinglun"/>
    <detailtuijian ref="tuijian"/>
  </div>
</template>
<script>
import { getGoodsDetial, GoodsInfo, ShopInfo } from 'network/detail.js'
import DetailNavBar from 'components/navbar/DetailNavBar.vue'
import DetailSwipe from 'components/swipe/DetailSwipe.vue'
import DetailGoodInfo from './childcomponents/detailGoodInfo'
import DetailShopInfo from './childcomponents/detailShopInfo'
import DetailRecInfo from '../detail/childcomponents/detailRecInfo'
import Detailcanshu from './childcomponents/detailcanshu'
import Detailpinglun from './childcomponents/detailpinglun'
import Detailtuijian from './childcomponents/detailtuijian'

export default {
  name: 'detail',
  components: {
    DetailNavBar,
    DetailSwipe,
    DetailGoodInfo,
    DetailShopInfo,
    DetailRecInfo,
    Detailcanshu,
    Detailpinglun,
    Detailtuijian,
  },
  data() {
    return {
      goodswipe: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      indexHeight: [],
      getContentTopY: null
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
        this.goodsInfo = new GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        this.shopInfo = new ShopInfo(res.result.shopInfo)
        this.detailInfo = res.result.detailInfo
      })
      .catch(err => {
        console.log(err);
      })

      this.getContentTopY = () => {
        let indexHeight = []
        indexHeight.push(0, this.$refs.canshu.$el.offsetTop, this.$refs.pinglun.$el.offsetTop, this.$refs.tuijian.$el.offsetTop)
        return indexHeight
      }
      this.titleScroll(0)
  },
  methods: {
    imageLoad() {
      // console.log('图片全部加载完成');
      this.indexHeight = this.getContentTopY()
    },
    titleScroll(index) {
      window.scrollTo({
        top: this.indexHeight[index],
        behavior: "smooth"
      })
    }
  },
  beforeCreate() {
    window.scrollTo({
      top: 0
    })
  },
}
</script>
<style scoped>
  
</style>