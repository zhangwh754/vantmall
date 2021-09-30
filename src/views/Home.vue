<template>
  <div>
    <home-nav-bar></home-nav-bar>
    <home-swipe :images="banners"></home-swipe>
    <home-recommend :recommendInfo="recommends"></home-recommend>
    <home-feature-view></home-feature-view>
    <home-tab-control :goods="goods" :tab="tab" @loadNewGood="loadNewGood" ref="tab"></home-tab-control>
    <back-top/>
  </div>
</template>
<script>
import { getHomeMultidata, getHomeGoods } from 'network/home.js'

import HomeNavBar from 'components/navbar/HomeNavBar.vue'
import HomeSwipe from 'components/swipe/HomeSwipe.vue'
import HomeRecommend from 'components/recommend/HomeRecommend.vue'
import HomeFeatureView from 'components/featureview/HomeFeatureView.vue'
import HomeTabControl from 'components/tabcontrol/HomeTabControl.vue'
import BackTop from 'components/backtop/BackTop.vue'

export default {
  name: 'home',
  components: {
    HomeNavBar,
    HomeSwipe,
    HomeRecommend,
    HomeFeatureView,
    HomeTabControl,
    BackTop,
  },
  data() {
    return {
      tab: [{name: '流行', type: 'pop'}, {name: '新款', type: 'new'}, {name: '精选', type: 'sell'}],
      banners: [],
      recommends: [],
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      }
    }
  },
  created() {
    //1、获取轮播图及推荐数据
    this.getHomeMultidata()

    //2、获取商品数据,载入页面立即请求pop、new、sell第一页的数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          //在一次商品数据请求完成后设置为加载完成，不再触发
          this.$refs.tab.loading = false; 
        })
        .catch(() => {
          //没数据后设置为拉到底
          this.$refs.tab.finished = true;
        })
    },
    loadNewGood(type) {
      this.getHomeGoods(type)
    },
  }
}
</script>
<style scoped>
  
</style>