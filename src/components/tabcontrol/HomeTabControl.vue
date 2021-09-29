<template>
  <div class="tabcontrol">
    <van-tabs sticky offset-top="46px" title-active-color="var(--color-tint)">
      <van-tab v-for="(item, index) in tab" :key="index" :title="item.name">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad(item['type'])"
        >
          <h2 v-for="(good, index) in goods[item['type']].list" :key="index">{{item['type']}}：{{index+1}}、{{good.price}}</h2>
        </van-list>
        <!-- <button @click="btnClick(item['type'])">加载新数据</button> -->
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  name: 'hometabcontrol',
  data() {
    return {
      loading: false,
      finished: false,
    }
  },
  methods: {
    onLoad(type) {
      console.log(type);
      this.$emit('loadNewGood', type)
      this.loading = false;
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
  
</style>