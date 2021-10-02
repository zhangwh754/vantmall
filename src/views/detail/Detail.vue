<template>
  <div>
    <detail-nav-bar @titleScroll="titleScroll" :scrollIndex="currentIndex"/>
    <detail-swipe :images="goodswipe"/>
    <detail-good-info :goods-info="goodsInfo"/>
    <detail-shop-info :shop-info="shopInfo"/>
    <detail-rec-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
    <detailcanshu ref="canshu"/>
    <detailpinglun ref="pinglun"/>
    <detailtuijian ref="tuijian"/>
    <detail-goods-action @addToCart="addToCart" />
    <back-top/>
  </div>
</template>
<script>
import { debounce } from 'common/utils.js'
import { getGoodsDetial, GoodsInfo, ShopInfo } from 'network/detail.js'
import DetailNavBar from 'components/navbar/DetailNavBar.vue'
import DetailSwipe from 'components/swipe/DetailSwipe.vue'
import DetailGoodInfo from './childcomponents/detailGoodInfo'
import DetailShopInfo from './childcomponents/detailShopInfo'
import DetailRecInfo from '../detail/childcomponents/detailRecInfo'
import Detailcanshu from './childcomponents/detailcanshu'
import Detailpinglun from './childcomponents/detailpinglun'
import Detailtuijian from './childcomponents/detailtuijian'
import BackTop from 'components/backtop/BackTop.vue'
import DetailGoodsAction from './childcomponents/detailGoodsAction'

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
    BackTop,
    DetailGoodsAction,
  },
  data() {
    return {
      goodswipe: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      indexHeight: [],
      getContentTopY: null,
      currentIndex: 0
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
    },
    handleScroll(e) {
      let sHeight = e.srcElement.scrollingElement.scrollTop
      switch(true) {
        case sHeight >= this.indexHeight[0] && sHeight < this.indexHeight[1]:
          this.currentIndex = 0
          break
        case sHeight >= this.indexHeight[1] && sHeight < this.indexHeight[2]:
          this.currentIndex = 1
          break
        case sHeight >= this.indexHeight[2] && sHeight < this.indexHeight[3]:
          this.currentIndex = 2
          break
        case sHeight >= this.indexHeight[3]:
          this.currentIndex = 3
          break
      }
    },
    addToCart() {
      // console.log(this.goodsInfo);
      const cartProInfo = {}
      cartProInfo.id = this.goodid;
      cartProInfo.image = this.goodswipe[0];
      cartProInfo.title = this.goodsInfo.title;
      cartProInfo.price = this.goodsInfo.oldPrice;
      cartProInfo.desc = this.goodsInfo.desc;
      this.$store.dispatch('addCart', cartProInfo)
      console.log(cartProInfo);
    }
  },
  beforeCreate() {
    window.scrollTo({
      top: 0
    })
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.handleScroll), 50)
  }
}
</script>
<style scoped>
  
</style>