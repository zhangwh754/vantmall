<template>
  <div class="tabcontrol">
    <van-tabs sticky offset-top="46px" title-active-color="var(--color-tint)" @click="onClick">
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