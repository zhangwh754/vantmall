<template>
  <div class="tabcontrol">
    <van-tabs sticky offset-top="46px" title-active-color="var(--color-tint)" @click="onClick" v-model="active">
      <van-tab v-for="(item, index) in tab" :key="index" :title="item.name">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad(item['type'])"
          :immediate-check="isimmediatecheck"
        >
            <div class="goodsList">
              <goods-item
                 v-for="(good, index) in goods[item['type']].list"
                 :key="index" 
                 :goodsitem="good" 
                 class="goods"
              ></goods-item>
            </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import GoodsItem from 'components/goodsitem/GoodsItem.vue';
export default {
  name: 'hometabcontrol',
  components: { 
    GoodsItem 
  },
  data() {
    return {
      active: 0,
      scroll: 0,
      scrollRecord: {},
      loading: false,
      finished: false,
      isimmediatecheck: false
    }
  },
  methods: {
    onLoad(type) {
      this.loading = true;
      console.log(type);
      this.$emit('loadNewGood', type)
    },
    onClick() {
      this.loading = false
      this.finished = false
    },
    handleScroll () {
      //document.documentElement.scrollTop获取当前页面的滚动条纵坐标位置
      this.scroll  = document.documentElement && document.documentElement.scrollTop
      // console.log(this.scroll)
    }
  },
  props: {
    tab: {
      type: Array,
      default() {
        return []
      }
    },
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  watch: {
    active (news, old) {
      this.scrollRecord['tab' + old] = parseInt(this.scroll) // 离开的tab栏滚动的高度
      if (this.scrollRecord['tab' + news]) {
        this.$nextTick(() => { // 坑不加他会出现滚动距离不够，限制于上一个tab高度问题
          window.scrollTo(0, parseInt(this.scrollRecord['tab' + news])) // 进入的tab栏滚动到记录的距离
        })
      } else {
        window.scrollTo(0, 0)
      }
    }
  }
}
</script>
<style scoped>
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goodsList .goods {
    width: 48%;
  }
</style>